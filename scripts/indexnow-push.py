#!/usr/bin/env python3
"""
Push URLs al IndexNow API (Bing, Yandex) en modo STREAMING.

Bing desaconseja el modo "batch" (dumpear todas las URLs del sitio de una): satura
y demora la indexación. Recomienda *streaming*: enviar SOLO las URLs que cambiaron,
en grupos chicos, a medida que cambian.

Este script detecta cambios hasheando el HTML ya construido (dist/client) contra un
manifest local (scripts/.indexnow-state.json) y envía únicamente lo que cambió.
- Pocas URLs (<= SINGLE_MAX) -> se mandan individualmente (GET).  ("individually")
- Muchas URLs              -> grupos chicos via POST con throttle. ("smaller groups")

Google no soporta IndexNow oficialmente, pero Bing sí. Bing reindexa en horas y
Google levanta señales indirectas al recrawlear.

Uso:
  python3 scripts/indexnow-push.py                      # streaming local: solo lo cambiado desde el ultimo push
  python3 scripts/indexnow-push.py --git-changed A B    # streaming CI: URLs cambiadas entre commits A..B
  python3 scripts/indexnow-push.py --all                # full re-submit (SOLO para fixes sitewide)
  python3 scripts/indexnow-push.py --coverage X.xlsx
  python3 scripts/indexnow-push.py /url1 /url2          # URLs puntuales (siempre se envian)
  python3 scripts/indexnow-push.py --dry-run            # muestra que enviaria, sin enviar ni tocar el baseline
  python3 scripts/indexnow-push.py --reset             # reescribe el baseline al estado actual, sin enviar nada

Modos de cambio:
- Local (default): diff por hash del HTML construido vs scripts/.indexnow-state.json (persiste local).
- CI (--git-changed): diff por `git diff` entre commits, mapeando archivos -> URLs. No usa state
  (el checkout de CI es efimero). Ante cualquier duda (ruta dinamica, archivo estructural, diff
  no confiable) hace full push: nunca sub-pushea.
"""
import hashlib
import json
import os
import re
import ssl
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from xml.etree import ElementTree as ET

try:
    import certifi
    _ssl_ctx = ssl.create_default_context(cafile=certifi.where())
except Exception:
    _ssl_ctx = ssl.create_default_context()
    if os.environ.get('INDEXNOW_INSECURE_SSL') == '1':
        _ssl_ctx.check_hostname = False
        _ssl_ctx.verify_mode = ssl.CERT_NONE

KEY = '67fce4162c27d89c860f19a1f4483888'
HOST = 'genfy.net'
KEY_LOCATION = f'https://{HOST}/{KEY}.txt'
ENDPOINT = 'https://api.indexnow.org/IndexNow'           # bulk (POST)
ENDPOINT_SINGLE = 'https://api.indexnow.org/indexnow'    # individual (GET)
NAMESPACE = '{http://www.sitemaps.org/schemas/sitemap/0.9}'

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist' / 'client'
STATE_FILE = ROOT / 'scripts' / '.indexnow-state.json'

# Streaming: grupos chicos, no dumps masivos (Bing pide "smaller groups").
CHUNK = 100            # URLs por request POST cuando hay muchas
SLEEP_CHUNK = 1.0      # s entre requests POST
SINGLE_MAX = 10        # <= esto se manda de a una via GET ("individually")
SLEEP_SINGLE = 0.5     # s entre requests GET


def canonicalize(url: str) -> str:
    """Normaliza a URL canonica: apex (no www), sin .html, sin trailing slash (excepto raiz)."""
    u = url.strip()
    if not u.startswith('http'):
        u = f'https://{HOST}{u if u.startswith("/") else "/" + u}'
    u = u.replace('http://', 'https://')
    u = u.replace('https://www.genfy.net', f'https://{HOST}')
    if u.endswith('.html'):
        u = u[:-5]
    if u.endswith('/') and u.count('/') > 3:
        u = u[:-1]
    return u


def urls_from_sitemap() -> list:
    sm_index = DIST / 'sitemap-index.xml'
    if not sm_index.exists():
        print(f'No existe {sm_index} — corré npm run build primero')
        return []
    urls = []
    tree = ET.parse(sm_index)
    for loc in tree.getroot().iter(f'{NAMESPACE}loc'):
        path = loc.text.split('/')[-1]
        sm = DIST / path
        if sm.exists():
            t = ET.parse(sm)
            urls.extend(el.text for el in t.getroot().iter(f'{NAMESPACE}loc'))
    return urls


def urls_from_coverage(xlsx_path: str) -> list:
    import openpyxl
    wb = openpyxl.load_workbook(xlsx_path, data_only=True)
    ws = wb['Tabla']
    return [canonicalize(r[0]) for r in ws.iter_rows(min_row=2, values_only=True) if r[0]]


def file_for_url(url: str) -> Path | None:
    """Resuelve la URL canonica a su HTML en dist/client (astro build.format='file')."""
    path = url
    for pre in (f'https://{HOST}', f'http://{HOST}'):
        if path.startswith(pre):
            path = path[len(pre):]
            break
    path = path.strip('/')
    if not path:
        return DIST / 'index.html'
    cand = DIST / f'{path}.html'
    if cand.exists():
        return cand
    cand_dir = DIST / path / 'index.html'   # fallback por si alguna ruta sale como directorio
    if cand_dir.exists():
        return cand_dir
    return None


def content_hash(url: str) -> str:
    """Hash del HTML construido. Si no hay archivo, hash estable de la URL (no re-pushea en loop)."""
    f = file_for_url(url)
    if f and f.exists():
        return hashlib.sha1(f.read_bytes()).hexdigest()
    return 'url:' + hashlib.sha1(url.encode('utf-8')).hexdigest()


def load_state() -> dict:
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text())
        except Exception:
            return {}
    return {}


def save_state(state: dict) -> None:
    STATE_FILE.write_text(json.dumps(state, ensure_ascii=False, sort_keys=True))


def push_batch(urls: list) -> bool:
    payload = {'host': HOST, 'key': KEY, 'keyLocation': KEY_LOCATION, 'urlList': urls}
    req = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json; charset=utf-8'},
        method='POST',
    )
    try:
        with urllib.request.urlopen(req, timeout=30, context=_ssl_ctx) as resp:
            status = resp.status
            body = resp.read().decode('utf-8', errors='ignore')
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8', errors='ignore') if hasattr(e, 'read') else ''
        print(f'  HTTP {e.code}: {body[:200]}')
        return False
    except Exception as e:
        print(f'  Error: {e}')
        return False
    ok = status in (200, 202)
    print(f'  [{"OK" if ok else "WARN"}] status={status} urls={len(urls)} body={body[:120] or "(empty)"}')
    return ok


def push_single(url: str) -> bool:
    q = urllib.parse.urlencode({'url': url, 'key': KEY, 'keyLocation': KEY_LOCATION})
    req = urllib.request.Request(f'{ENDPOINT_SINGLE}?{q}', method='GET')
    try:
        with urllib.request.urlopen(req, timeout=30, context=_ssl_ctx) as resp:
            status = resp.status
    except urllib.error.HTTPError as e:
        status = e.code
    except Exception as e:
        print(f'  Error {url}: {e}')
        return False
    ok = status in (200, 202)
    print(f'  [{"OK" if ok else "WARN"}] {status} {url}')
    return ok


def submit(urls: list, dry_run: bool = False) -> set:
    """Envia urls en modo streaming. Devuelve el set de URLs enviadas con exito."""
    if not urls:
        return set()
    if dry_run:
        for u in urls:
            print(f'  [DRY] {u}')
        return set(urls)
    sent = set()
    if len(urls) <= SINGLE_MAX:
        print(f'Enviando {len(urls)} URLs individualmente (GET)...')
        for i, u in enumerate(urls):
            if push_single(u):
                sent.add(u)
            if i < len(urls) - 1:
                time.sleep(SLEEP_SINGLE)
    else:
        print(f'Enviando {len(urls)} URLs en grupos de {CHUNK} (POST)...')
        for i in range(0, len(urls), CHUNK):
            chunk = urls[i:i + CHUNK]
            print(f'  grupo {i // CHUNK + 1}: {len(chunk)} URLs')
            if push_batch(chunk):
                sent.update(chunk)
            if i + CHUNK < len(urls):
                time.sleep(SLEEP_CHUNK)
    return sent


def es_en_slug_map() -> dict:
    """Lee src/lib/generators.ts y devuelve {slug_es: slug_en} para mapear data files -> URL EN."""
    f = ROOT / 'src' / 'lib' / 'generators.ts'
    if not f.exists():
        return {}
    txt = f.read_text(encoding='utf-8')
    return {m.group(1): m.group(2)
            for m in re.finditer(r"slug:\s*\{\s*es:\s*'([^']+)'\s*,\s*en:\s*'([^']+)'", txt)}


def _urls_for_changed_file(fp: str, smap: dict):
    """Mapea un archivo cambiado -> (urls, structural, ignore).
    structural=True fuerza full push; ignore=True lo descarta (no afecta el sitio publicado)."""
    low = fp.lower()
    # 1) archivos que NO afectan el HTML publicado (tooling, CI, docs, lockfiles)
    if (low.endswith('.md')
            or fp.startswith(('scripts/', '.github/', '.vscode/', '.idea/', '.gen-debug/'))
            or low in {'.gitignore', 'license', 'package-lock.json', 'wrangler.toml', 'wrangler.jsonc'}):
        return [], False, True
    # 2) páginas .astro -> ruta directa (build.format='file')
    if fp.startswith('src/pages/') and fp.endswith('.astro'):
        rel = fp[len('src/pages/'):-len('.astro')]
        if '[' in rel:                       # ruta dinámica -> no mapeable
            return [], True, False
        if rel == '404':
            return [], False, True
        if rel.startswith('en/'):
            sub = rel[len('en/'):]
            url = '/en' if sub == 'index' else f'/en/{sub}'
        else:
            url = '/' if rel == 'index' else f'/{rel}'
        return [canonicalize(url)], False, False
    # 3) data de un generador -> ES + EN
    if fp.startswith('src/lib/data/') and fp.endswith('.ts'):
        slug = fp[len('src/lib/data/'):-len('.ts')]
        urls = [canonicalize(f'/{slug}')]
        en = smap.get(slug)
        if en:
            urls.append(canonicalize(f'/en/{en}'))
        return urls, False, False
    # 4) cualquier otro archivo del sitio (componentes, layouts, lib, estilos, config) -> afecta todo
    return [], True, False


def urls_from_git(before: str, after: str):
    """Devuelve (urls, full). full=True => pushear el sitemap entero (cambio estructural o diff dudoso)."""
    if not before or set(before.strip()) <= {'0'}:
        return [], True                      # primer push / sin base -> full
    try:
        out = subprocess.run(['git', 'diff', '--name-only', before, after],
                             cwd=str(ROOT), capture_output=True, text=True, timeout=30)
    except Exception as e:
        print(f'  git diff error: {e} -> full push')
        return [], True
    if out.returncode != 0:
        print(f'  git diff rc={out.returncode}: {out.stderr.strip()[:200]} -> full push')
        return [], True
    files = [l.strip() for l in out.stdout.splitlines() if l.strip()]
    smap = es_en_slug_map()
    urls = []
    for fp in files:
        u, structural, ignore = _urls_for_changed_file(fp, smap)
        if structural:
            print(f'  cambio estructural ({fp}) -> full push')
            return [], True
        if ignore:
            continue
        urls.extend(u)
    return list(dict.fromkeys(urls)), False


def _augment_state(sent: set) -> None:
    """Para modos puntuales (coverage / URLs sueltas): solo actualiza un baseline YA existente.
    Nunca siembra un baseline parcial (eso convertiria el proximo streaming en un batch)."""
    if not sent:
        return
    state = load_state()
    if not state:
        return
    for u in sent:
        state[u] = content_hash(u)
    save_state(state)


def main():
    args = sys.argv[1:]
    dry_run = '--dry-run' in args
    args = [a for a in args if a != '--dry-run']

    # --- modos puntuales ---------------------------------------------------
    if args and args[0] == '--reset':
        urls = list(dict.fromkeys(urls_from_sitemap()))
        if not urls:
            return 1
        save_state({u: content_hash(u) for u in urls})
        print(f'Baseline reescrito: {len(urls)} URLs. No se envió nada.')
        return 0

    if args and args[0] == '--coverage':
        if len(args) < 2:
            print('Falta path al .xlsx')
            return 1
        urls = list(dict.fromkeys(urls_from_coverage(args[1])))
        print(f'Coverage: {len(urls)} URLs')
        sent = submit(urls, dry_run)
        if not dry_run:
            _augment_state(sent)
        return 0

    if args and args[0] == '--git-changed':
        before = args[1] if len(args) > 1 else ''
        after = args[2] if len(args) > 2 else 'HEAD'
        changed, full = urls_from_git(before, after)
        sitemap = list(dict.fromkeys(urls_from_sitemap()))
        if full:
            to_push = sitemap
            print(f'Full push: {len(to_push)} URLs (cambio estructural / diff no confiable).')
        else:
            sset = set(sitemap)
            to_push = [u for u in changed if u in sset]   # solo URLs reales e indexables
            skipped = len(changed) - len(to_push)
            extra = f' ({skipped} fuera del sitemap, omitidas)' if skipped else ''
            print(f'Streaming (git diff): {len(to_push)} URLs cambiadas{extra}.')
            if to_push:
                print(f'Sample: {to_push[:5]}')
        if not to_push:
            print('Nada para enviar.')
            return 0
        sent = submit(to_push, dry_run)
        failed = len(to_push) - len(sent)
        return 0 if (dry_run or failed == 0) else 1

    if args and (args[0].startswith('/') or args[0].startswith('http')):
        urls = list(dict.fromkeys(canonicalize(u) for u in args))
        print(f'URLs puntuales: {len(urls)}')
        sent = submit(urls, dry_run)
        if not dry_run:
            _augment_state(sent)
        return 0

    # --- modo default: STREAMING (solo lo cambiado) ------------------------
    force_all = '--all' in args
    sitemap_urls = list(dict.fromkeys(urls_from_sitemap()))
    if not sitemap_urls:
        print('No hay URLs (corré npm run build)')
        return 1

    current = {u: content_hash(u) for u in sitemap_urls}
    state = load_state()

    # Primera corrida sin baseline (y sin --all): registrar baseline, NO batchear.
    if not state and not force_all:
        if not dry_run:
            save_state(current)
        print(f'Baseline inicial: {len(current)} URLs registradas. No se envió nada (evita un batch).')
        print('Desde ahora solo se envían las URLs que cambien. Full puntual: --all')
        return 0

    if force_all:
        to_push = sitemap_urls
        print(f'--all: full re-submit de {len(to_push)} URLs (usalo solo para fixes sitewide).')
    else:
        to_push = [u for u in sitemap_urls if state.get(u) != current[u]]
        print(f'Streaming: {len(to_push)} URLs cambiadas de {len(sitemap_urls)}.')

    if not to_push:
        if not dry_run:
            save_state(current)  # sincroniza altas/bajas de URLs aunque no haya envíos
        print('Nada para enviar. Baseline al día.')
        return 0

    print(f'Sample: {to_push[:3]}')
    sent = submit(to_push, dry_run)

    if not dry_run:
        # Baseline nuevo: hash actual para lo enviado OK y para lo que ya estaba igual;
        # lo que cambió pero falló queda con el hash viejo (o ausente) para reintentar.
        new_state = {}
        for u in current:
            if u in sent or state.get(u) == current[u]:
                new_state[u] = current[u]
            elif u in state:
                new_state[u] = state[u]
        save_state(new_state)

    failed = len(to_push) - len(sent)
    if not dry_run:
        print(f'Enviadas {len(sent)}/{len(to_push)}. Baseline actualizado.')
    return 0 if failed == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
