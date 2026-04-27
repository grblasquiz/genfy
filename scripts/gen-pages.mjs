#!/usr/bin/env node
// Genera generadores Genfy via Claude API.
// Uso:
//   ANTHROPIC_API_KEY=... node scripts/gen-pages.mjs ideas.json
// Donde ideas.json es un array de:
//   { slugEs, slugEn, category, emoji, mode: 'pick'|'combine', conceptEs, conceptEn }

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const MODEL = 'claude-sonnet-4-5-20250929';
const BATCH_SIZE = 1;
const MAX_TOKENS = 40000;
const CONCURRENCY = 4;
const DEBUG_DIR = path.resolve(__dirname, '../.gen-debug');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Sos editor SEO bilingüe (ES + EN) experto en generadores web con copy útil y específico. Tu trabajo: producir contenido sustancioso (no thin) para páginas tipo "generador de X" en Genfy.

Cada idea recibe un objeto con: slugEs, slugEn, category, emoji, mode ('pick' o 'combine'), conceptEs, conceptEn.

Devolvés JSON puro (sin markdown, sin texto extra) con UN ARRAY de objetos cumpliendo este schema TypeScript:

type GroupSpec = { id: string; label: string; items: string[] | string[][] };
type ContentSection = { h2: string; body: string };  // body es HTML válido sin <h2>
type FaqItem = { q: string; a: string };
type GenLangData = {
  pageTitle: string;       // formato: "<H1> | Genfy"
  metaDesc: string;        // 140-158 caracteres, persuasivo, con keyword principal
  h1: string;              // título corto y directo
  intro: string;           // subtítulo de hero, 1-2 frases (~140-180ch), beneficio claro
  tag: string;             // 1-3 palabras (categoría visible)
  filterLabel: string;     // label del select; ej "Estilo", "Tono", "Tipo"
  countLabel: string;      // ej "Cantidad" / "Amount"
  generateLabel: string;   // ej "Generar" / "Generate"
  copyLabel: string;       // ej "Copiar" / "Copy"
  groups: GroupSpec[];     // ver reglas abajo
  separator?: string;      // solo si mode='combine'; default ' '
  defaultCount: number;    // 5 razonable
  maxCount: number;        // 30
  content: ContentSection[]; // 4 secciones, ~150-220 palabras cada una, sin clichés
  faq: FaqItem[];          // 4 preguntas frecuentes reales, respuestas de 1-2 frases
};
type GenData = {
  slug: { es: string; en: string };
  category: 'security'|'business'|'content'|'fun'|'tools'|'tech'|'data'|'marketing'|'design'|'random'|'pets'|'people'|'work'|'inspiration';
  emoji: string;
  mode: 'pick' | 'combine';
  es: GenLangData;
  en: GenLangData;
};

REGLAS DE CONTENIDO (importantes):
- NUNCA inventes deidades paganas, dioses o términos religiosos no neutros.
- ES = español rioplatense neutro (vos opcional). EN = inglés natural.
- 'content' debe ser CONCRETO y útil: ejemplos reales, errores comunes, casos de uso, técnicas. Nada de relleno SEO genérico tipo "estamos aquí para ayudarte".
- Cada section.body es HTML simple: <p>, <ul><li>, <strong>. No incluyas <h2> dentro (ya va aparte).
- 'groups':
  * Si mode='pick': cada group es una categoría/filtro de items. items = string[]. Mínimo 1 group, recomendable 3-5 groups con 25-50 items cada uno (items DIVERSOS, sin repetir, no triviales).
  * Si mode='combine': cada group es una "ranura" del nombre. items puede ser string[] (slot fijo) o string[][] (varias sub-listas). Mínimo 2 groups. items diversos.
- 'tag' debe corresponder a la categoría humana en idioma correspondiente.
- pageTitle ES termina en " | Genfy"; EN termina en " | Genfy".
- intro: arranque ágil, primer-persona-marca opcional, evita "Bienvenido a..."
- faq: preguntas que la gente busca de verdad (no autopromocionales). Respuestas concretas.

REGLAS DE FORMA:
- Salida = SOLO un array JSON. Sin texto antes, sin texto después, sin backticks. Empezás directo con [ y terminás con ].
- ASCII-safe: usá comillas curvas o normales según corresponda al idioma natural; tildes y ñ permitidos en ES.
- NO uses comillas dobles dentro de los strings sin escapar.
- Lista slugs IDÉNTICOS al input (no los modifiques).`;

function tryParseLoose(text) {
  // Try direct parse
  try { return JSON.parse(text); } catch {}
  // Strip trailing commas before } or ]
  let cleaned = text.replace(/,(\s*[}\]])/g, '$1');
  try { return JSON.parse(cleaned); } catch {}
  // If truncated, find last complete object before truncation
  return null;
}

function extractObjects(text) {
  // Walk the text and extract balanced JSON objects (top-level inside the array)
  const start = text.indexOf('[');
  if (start === -1) return [];
  const objs = [];
  let depth = 0, objStart = -1, inStr = false, esc = false;
  for (let i = start + 1; i < text.length; i++) {
    const ch = text[i];
    if (inStr) {
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') { inStr = true; continue; }
    if (ch === '{') {
      if (depth === 0) objStart = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && objStart !== -1) {
        const slice = text.slice(objStart, i + 1);
        try {
          objs.push(JSON.parse(slice));
        } catch (e) {
          // try loose
          const loose = tryParseLoose(slice);
          if (loose) objs.push(loose);
        }
        objStart = -1;
      }
    }
  }
  return objs;
}

async function generateBatch(ideas, attempt = 1) {
  const userPrompt = `Generá el GenData completo para estas ${ideas.length} ideas. Devolvé un array JSON puro:\n\n${JSON.stringify(ideas, null, 2)}`;

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: userPrompt }],
  });
  const message = await stream.finalMessage();
  const text = message.content.map(b => b.type === 'text' ? b.text : '').join('').trim();

  await fs.mkdir(DEBUG_DIR, { recursive: true });
  await fs.writeFile(path.join(DEBUG_DIR, `batch-${Date.now()}.txt`), text);

  // Strategy 1: full parse
  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');
  if (start !== -1 && end !== -1) {
    const candidate = text.slice(start, end + 1);
    const parsed = tryParseLoose(candidate);
    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      return { data: parsed, usage: message.usage, stopReason: message.stop_reason };
    }
  }

  // Strategy 2: per-object extraction (handles truncation)
  const objs = extractObjects(text);
  if (objs.length > 0) {
    console.log(`  ⚠ Parse parcial: ${objs.length}/${ideas.length} objetos rescatados (stop=${message.stop_reason})`);
    return { data: objs, usage: message.usage, stopReason: message.stop_reason };
  }

  throw new Error(`No JSON parseable. stop_reason=${message.stop_reason}, len=${text.length}, head:\n${text.slice(0, 300)}`);
}

const SAFE_KEYS = new Set(['slug','category','emoji','mode','es','en']);

function sanitize(data) {
  // Light defensive defaults
  if (!data.es.separator && data.mode === 'combine') data.es.separator = ' ';
  if (!data.en.separator && data.mode === 'combine') data.en.separator = ' ';
  data.es.defaultCount = data.es.defaultCount || 5;
  data.en.defaultCount = data.en.defaultCount || 5;
  data.es.maxCount = data.es.maxCount || 30;
  data.en.maxCount = data.en.maxCount || 30;
  return data;
}

async function writeGenerator(data) {
  data = sanitize(data);
  const dataPath = path.join(ROOT, 'src/lib/data', `${data.slug.es}.ts`);
  const esPath = path.join(ROOT, 'src/pages', `${data.slug.es}.astro`);
  const enPath = path.join(ROOT, 'src/pages/en', `${data.slug.en}.astro`);

  const dataFile = `import type { GenData } from './types';\n\nexport const data: GenData = ${JSON.stringify(data, null, 2)};\n`;
  await fs.writeFile(dataPath, dataFile);

  const esPage = `---
import Layout from '../layouts/Layout.astro';
import GeneratorTemplate from '../components/GeneratorTemplate.astro';
import { data } from '../lib/data/${data.slug.es}';

const t = data.es;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="es" schema={faqSchema} withSidebar={true}>
  <GeneratorTemplate lang="es" data={data} />
</Layout>
`;
  await fs.writeFile(esPath, esPage);

  const enPage = `---
import Layout from '../../layouts/Layout.astro';
import GeneratorTemplate from '../../components/GeneratorTemplate.astro';
import { data } from '../../lib/data/${data.slug.es}';

const t = data.en;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="en" schema={faqSchema} withSidebar={true}>
  <GeneratorTemplate lang="en" data={data} />
</Layout>
`;
  await fs.writeFile(enPath, enPage);
}

async function appendToGenerators(newGens) {
  const genPath = path.join(ROOT, 'src/lib/generators.ts');
  let src = await fs.readFile(genPath, 'utf8');
  const marker = '\n];';
  const idx = src.lastIndexOf(marker);
  if (idx === -1) throw new Error('Could not find GENERATORS array end');

  const tag = `\n\n  // === Auto-generated batch ${new Date().toISOString().slice(0, 10)} ===\n`;
  const lines = newGens.map(g => {
    const o = {
      slug: g.slug,
      title: { es: g.es.h1, en: g.en.h1 },
      description: { es: g.es.metaDesc, en: g.en.metaDesc },
      category: g.category,
      emoji: g.emoji,
    };
    return `  ${JSON.stringify(o)},`;
  }).join('\n');

  const updated = src.slice(0, idx) + tag + lines + src.slice(idx);
  await fs.writeFile(genPath, updated);
}

async function main() {
  const ideasPath = process.argv[2];
  if (!ideasPath) {
    console.error('Usage: node gen-pages.mjs <ideas.json>');
    process.exit(1);
  }
  const ideas = JSON.parse(await fs.readFile(ideasPath, 'utf8'));

  // Skip ideas whose slug already exists
  const existing = new Set();
  const genSrc = await fs.readFile(path.join(ROOT, 'src/lib/generators.ts'), 'utf8');
  for (const m of genSrc.matchAll(/slug:\s*\{\s*es:\s*'([^']+)',\s*en:\s*'([^']+)'/g)) {
    existing.add(m[1]); existing.add(m[2]);
  }
  const filtered = ideas.filter(i => !existing.has(i.slugEs) && !existing.has(i.slugEn));
  console.log(`Procesando ${filtered.length}/${ideas.length} ideas (ignorando duplicados)`);

  let allGens = [];
  let totalIn = 0, totalOut = 0, totalCacheHit = 0, totalCacheCreate = 0;

  // Build batches
  const batches = [];
  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    batches.push(filtered.slice(i, i + BATCH_SIZE));
  }
  console.log(`Total batches: ${batches.length}, concurrency: ${CONCURRENCY}`);

  let nextBatch = 0;
  let finished = 0;

  async function worker(workerId) {
    while (true) {
      const myIdx = nextBatch++;
      if (myIdx >= batches.length) return;
      const batch = batches[myIdx];
      const tag = `[w${workerId} b${myIdx + 1}/${batches.length}]`;
      try {
        const { data: gens, usage } = await generateBatch(batch);
        totalIn += usage.input_tokens || 0;
        totalOut += usage.output_tokens || 0;
        totalCacheHit += usage.cache_read_input_tokens || 0;
        totalCacheCreate += usage.cache_creation_input_tokens || 0;
        console.log(`${tag} ${gens.length} gens, out=${usage.output_tokens} cache_hit=${usage.cache_read_input_tokens || 0}`);
        for (const g of gens) {
          try {
            await writeGenerator(g);
            allGens.push(g);
          } catch (e) {
            console.error(`${tag} ✘ write ${g.slug?.es}: ${e.message}`);
          }
        }
        finished++;
        console.log(`${tag} done. Total escritos: ${allGens.length} (${finished}/${batches.length} batches)`);
      } catch (e) {
        console.error(`${tag} FAIL: ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));

  if (allGens.length > 0) {
    await appendToGenerators(allGens);
    console.log(`\nAppended ${allGens.length} entries to generators.ts`);
  }

  console.log(`\n=== Tokens ===`);
  console.log(`Input (fresh):    ${totalIn}`);
  console.log(`Cache create:     ${totalCacheCreate}`);
  console.log(`Cache hit:        ${totalCacheHit}`);
  console.log(`Output:           ${totalOut}`);
  // Sonnet 4.5 pricing
  const cost = (totalIn * 3 / 1e6) + (totalCacheCreate * 3.75 / 1e6) + (totalCacheHit * 0.30 / 1e6) + (totalOut * 15 / 1e6);
  console.log(`Costo estimado:   $${cost.toFixed(3)}`);
}

main().catch(e => { console.error(e); process.exit(1); });
