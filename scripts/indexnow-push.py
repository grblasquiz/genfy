#!/usr/bin/env python3
"""
Push URLs al IndexNow API (Bing, Yandex).

Google no soporta IndexNow oficialmente, pero Bing sí. Bing reindexa en horas
y Google levanta señales indirectas al recrawlear.

Uso:
  python3 scripts/indexnow-push.py                    # pushea desde sitemap (todas)
  python3 scripts/indexnow-push.py --coverage X.xlsx  # pushea URLs de un GSC Coverage export
  python3 scripts/indexnow-push.py /url1 /url2        # pushea URLs específicas
"""
import json
import os
import ssl
import sys
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
ENDPOINT = 'https://api.indexnow.org/IndexNow'
NAMESPACE = '{http://www.sitemaps.org/schemas/sitemap/0.9}'

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist' / 'client'


def canonicalize(url: str) -> str:
    """Normaliza a URL canónica: apex (no www), sin .html, sin trailing slash (excepto raíz)."""
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


def push(urls: list) -> bool:
    payload = {
        'host': HOST,
        'key': KEY,
        'keyLocation': KEY_LOCATION,
        'urlList': urls,
    }
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
        print(f'HTTP {e.code}: {body[:300]}')
        return False
    except Exception as e:
        print(f'Error: {e}')
        return False
    ok = status in (200, 202)
    mark = 'OK' if ok else 'WARN'
    print(f'[{mark}] IndexNow status={status} urls={len(urls)} body={body[:200] or "(empty)"}')
    return ok


def main():
    args = sys.argv[1:]
    if args and args[0] == '--coverage':
        if len(args) < 2:
            print('Falta path al .xlsx')
            return 1
        urls = urls_from_coverage(args[1])
    elif args and (args[0].startswith('/') or args[0].startswith('http')):
        urls = [canonicalize(u) for u in args]
    else:
        urls = urls_from_sitemap()

    urls = list(dict.fromkeys(urls))
    if not urls:
        print('No hay URLs para pushear')
        return 1

    print(f'Total URLs canonicalizadas: {len(urls)}')
    print(f'Sample: {urls[:3]}')

    BATCH = 10000
    failed = 0
    for i in range(0, len(urls), BATCH):
        chunk = urls[i:i + BATCH]
        print(f'Pusheando {len(chunk)} URLs...')
        if not push(chunk):
            failed += 1
    return 0 if failed == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
