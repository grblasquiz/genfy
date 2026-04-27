#!/usr/bin/env node
import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MODEL = 'claude-sonnet-4-5-20250929';
const BATCH_SIZE = 5;
const MAX_TOKENS = 24000;
const CONCURRENCY = 2;
const DEBUG_DIR = path.resolve(__dirname, '../.gen-debug');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Sos editor SEO bilingüe (ES + EN) creando páginas de validadores de identificadores en Genfy.

Cada idea recibe { id, slugEs, slugEn, emoji, category, termEs, termEn, conceptEs, conceptEn, examples, reasonsEs, reasonsEn, detailsLabelsEs, detailsLabelsEn, relatedEs, relatedEn }.

Devolvés un array JSON puro de objetos ValidatorEntry. Schema:

type ValidatorLangData = {
  pageTitle: string;       // "<term> | Genfy"
  metaDesc: string;        // 140-158 chars
  h1: string;              // título corto
  intro: string;           // hero subtitle, 1-2 frases
  tag: string;             // categoría humana (ej "Datos", "Data")
  inputLabel: string;      // ej "Ingresá un CUIT" / "Enter a CUIT"
  placeholder: string;     // ej "30-71477168-3"
  validateLabel: string;   // ej "Validar" / "Validate"
  validLabel: string;      // ej "Válido" / "Valid"
  invalidLabel: string;    // ej "Inválido" / "Invalid"
  examples: { label: string; value: string }[];   // COPIAR del input (examples)
  reasons: Record<string, string>;                 // COPIAR de reasonsEs/reasonsEn
  detailsLabels?: Record<string, string>;          // COPIAR de detailsLabelsEs/En
  body: { h2: string; html: string }[];            // 4 secciones de 130-200 palabras con HTML simple (<p><ul><li><strong><code>)
  faq: { q: string; a: string }[];                 // 4 preguntas frecuentes con respuestas concretas
  relatedSlugs: string[];                          // COPIAR de relatedEs/relatedEn
};

type ValidatorEntry = {
  id: string;          // del input
  slug: { es: string; en: string };  // del input
  emoji: string;       // del input
  category: 'data'|'security'|'tech'|'tools';
  es: ValidatorLangData;
  en: ValidatorLangData;
};

REGLAS body:
- Sección 1: "¿Qué es X?" / "What is X?" — definición + por qué importa
- Sección 2: "Cómo funciona el algoritmo" / "How the algorithm works" — concreto, técnico
- Sección 3: "Cuándo y por qué validar" / "When and why to validate" — casos reales
- Sección 4: "Limitaciones y errores comunes" / "Limitations and common mistakes" — qué NO valida (ej. existencia real)

Devolvé SOLO el JSON array. Sin texto antes/después. Sin backticks. Empezás con [ y terminás con ].`;

async function generateBatch(items) {
  const userPrompt = `Generá ValidatorEntry completos para estos ${items.length} validadores:\n\n${JSON.stringify(items, null, 2)}`;

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: userPrompt }],
  });
  const message = await stream.finalMessage();
  const text = message.content.map(b => b.type === 'text' ? b.text : '').join('').trim();

  await fs.mkdir(DEBUG_DIR, { recursive: true });
  await fs.writeFile(path.join(DEBUG_DIR, `val-${Date.now()}.txt`), text);

  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const start = cleaned.indexOf('[');
  const end = cleaned.lastIndexOf(']');
  if (start !== -1 && end !== -1) {
    try {
      const p = JSON.parse(cleaned.slice(start, end + 1));
      if (Array.isArray(p) && p.length) return { data: p, usage: message.usage };
    } catch (e) {
      try {
        const fixed = cleaned.slice(start, end + 1).replace(/,(\s*[}\]])/g, '$1');
        const p = JSON.parse(fixed);
        if (Array.isArray(p) && p.length) return { data: p, usage: message.usage };
      } catch (e2) {}
    }
  }
  // per-object
  const objs = [];
  let depth = 0, objStart = -1, inStr = false, esc = false;
  for (let i = (cleaned.indexOf('[') + 1); i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (inStr) { if (esc) { esc = false; continue; } if (ch === '\\') { esc = true; continue; } if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; continue; }
    if (ch === '{') { if (depth === 0) objStart = i; depth++; }
    else if (ch === '}') { depth--; if (depth === 0 && objStart !== -1) { try { objs.push(JSON.parse(cleaned.slice(objStart, i + 1))); } catch (e) {} objStart = -1; } }
  }
  if (objs.length) { console.log(`  ⚠ Parcial ${objs.length}/${items.length}`); return { data: objs, usage: message.usage }; }
  throw new Error(`No JSON. stop=${message.stop_reason}`);
}

async function writeEntry(entry) {
  const dataPath = path.join(ROOT, 'src/lib/validators-data', `${entry.id}.ts`);
  const esPath = path.join(ROOT, 'src/pages', `${entry.slug.es}.astro`);
  const enPath = path.join(ROOT, 'src/pages/en', `${entry.slug.en}.astro`);

  await fs.writeFile(dataPath, `import type { ValidatorEntry } from './types';\n\nexport const entry: ValidatorEntry = ${JSON.stringify(entry, null, 2)};\n`);

  const esPage = `---
import Layout from '../layouts/Layout.astro';
import ValidatorTemplate from '../components/ValidatorTemplate.astro';
import { entry } from '../lib/validators-data/${entry.id}';
const t = entry.es;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="es" schema={faqSchema} withSidebar={true}>
  <ValidatorTemplate lang="es" entry={entry} />
</Layout>
`;
  await fs.writeFile(esPath, esPage);

  const enPage = `---
import Layout from '../../layouts/Layout.astro';
import ValidatorTemplate from '../../components/ValidatorTemplate.astro';
import { entry } from '../../lib/validators-data/${entry.id}';
const t = entry.en;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="en" schema={faqSchema} withSidebar={true}>
  <ValidatorTemplate lang="en" entry={entry} />
</Layout>
`;
  await fs.writeFile(enPath, enPage);
}

async function appendToGenerators(entries) {
  const genPath = path.join(ROOT, 'src/lib/generators.ts');
  let src = await fs.readFile(genPath, 'utf8');
  const marker = '\n];';
  const idx = src.lastIndexOf(marker);
  const tag = `\n\n  // === Validadores batch ${new Date().toISOString().slice(0, 10)} ===\n`;
  const lines = entries.map(e => {
    const o = {
      slug: e.slug,
      title: { es: e.es.h1, en: e.en.h1 },
      description: { es: e.es.metaDesc, en: e.en.metaDesc },
      category: e.category === 'data' ? 'data' : 'tools',
      emoji: e.emoji,
    };
    return `  ${JSON.stringify(o)},`;
  }).join('\n');
  await fs.writeFile(genPath, src.slice(0, idx) + tag + lines + src.slice(idx));
}

async function main() {
  const file = process.argv[2];
  if (!file) { console.error('Usage: gen-validators.mjs <list.json>'); process.exit(1); }
  const all = JSON.parse(await fs.readFile(file, 'utf8'));

  const existing = new Set();
  try {
    const files = await fs.readdir(path.join(ROOT, 'src/lib/validators-data'));
    files.forEach(f => existing.add(f.replace('.ts', '')));
  } catch (e) {}
  const filtered = all.filter(it => !existing.has(it.id));
  console.log(`Procesando ${filtered.length}/${all.length} validadores`);

  const batches = [];
  for (let i = 0; i < filtered.length; i += BATCH_SIZE) batches.push(filtered.slice(i, i + BATCH_SIZE));
  let totalIn = 0, totalOut = 0, totalCacheHit = 0, totalCacheCreate = 0;
  let nextBatch = 0, finished = 0;
  const allOut = [];

  async function worker(id) {
    while (true) {
      const myIdx = nextBatch++;
      if (myIdx >= batches.length) return;
      const batch = batches[myIdx];
      const tag = `[w${id} b${myIdx + 1}/${batches.length}]`;
      try {
        const { data, usage } = await generateBatch(batch);
        totalIn += usage.input_tokens || 0;
        totalOut += usage.output_tokens || 0;
        totalCacheHit += usage.cache_read_input_tokens || 0;
        totalCacheCreate += usage.cache_creation_input_tokens || 0;
        for (const e of data) {
          try { await writeEntry(e); allOut.push(e); } catch (err) { console.error(`${tag} ✘ ${e.id}: ${err.message}`); }
        }
        finished++;
        console.log(`${tag} done ${data.length}, total ${allOut.length} (${finished}/${batches.length})`);
      } catch (e) { console.error(`${tag} FAIL: ${e.message}`); }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));

  if (allOut.length) await appendToGenerators(allOut);

  const cost = (totalIn * 3 / 1e6) + (totalCacheCreate * 3.75 / 1e6) + (totalCacheHit * 0.30 / 1e6) + (totalOut * 15 / 1e6);
  console.log(`\nTotal: ${allOut.length}/${filtered.length}, costo $${cost.toFixed(3)}`);
}

main().catch(e => { console.error(e); process.exit(1); });
