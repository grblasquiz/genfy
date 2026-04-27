#!/usr/bin/env node
// Genera entradas de glosario via Claude API.
// Uso: ANTHROPIC_API_KEY=... node scripts/gen-glossary.mjs scripts/glossary-terms.json

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const MODEL = 'claude-sonnet-4-5-20250929';
const BATCH_SIZE = 5;
const MAX_TOKENS = 24000;
const CONCURRENCY = 4;
const DEBUG_DIR = path.resolve(__dirname, '../.gen-debug');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Sos editor de un glosario técnico bilingüe (ES + EN) para Genfy. Tu tarea: producir entradas de glosario claras, técnicas y útiles. SEO-amigables pero sin relleno.

Cada idea recibe { slugEs, slugEn, term, category, emoji, conceptEs, conceptEn, relatedEs, relatedEn }.

Devolvés un array JSON puro de objetos GlossaryEntry:

type GlossaryEntry = {
  slug: { es: string; en: string };  // exactamente los del input
  emoji: string;                      // del input
  category: 'security'|'tech'|'data'|'design'|'web'|'crypto'|'devops'|'general';
  es: GlossaryLangData;
  en: GlossaryLangData;
};

type GlossaryLangData = {
  pageTitle: string;       // "<Term> — Glosario | Genfy" (es) / "<Term> — Glossary | Genfy" (en)
  metaDesc: string;        // 140-158 chars, persuasiva, con la keyword
  h1: string;              // término capitalizado correctamente (ej "MD5", "JWT", "Bcrypt")
  short: string;           // 1-2 frases (~150ch) explicando qué es
  body: ContentSection[];  // 3-4 secciones de 120-200 palabras c/u con HTML simple (<p><ul><li><strong><code>)
  examples?: string[];     // 3-5 ejemplos cortos (strings sueltos, sin html). Solo si aplica al término
  related: string[];       // slugs EXACTOS del input (relatedEs en es, relatedEn en en)
  faq: { q: string; a: string }[];  // 3 preguntas frecuentes con respuestas concretas
};

REGLAS:
- ES: rioplatense neutro, vos opcional, técnico pero accesible.
- EN: natural, técnico, sin jerga innecesaria.
- body sección 1: "¿Qué es X?" / "What is X?" — definición + por qué importa
- body sección 2: cómo funciona / how it works — algoritmo, formato, lo necesario para entender
- body sección 3: cuándo usarlo / when to use — casos reales
- body sección 4 (opcional): errores frecuentes, alternativas o seguridad.
- Salida = SOLO JSON array, sin texto antes/después, sin backticks. Empezás directo con [ y terminás con ].
- No comillas dobles sin escapar dentro de strings.
- slugs IDÉNTICOS al input.`;

async function generateBatch(terms) {
  const userPrompt = `Generá las entradas completas para estas ${terms.length} palabras de glosario:\n\n${JSON.stringify(terms, null, 2)}`;

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: userPrompt }],
  });
  const message = await stream.finalMessage();
  const text = message.content.map(b => b.type === 'text' ? b.text : '').join('').trim();

  await fs.mkdir(DEBUG_DIR, { recursive: true });
  await fs.writeFile(path.join(DEBUG_DIR, `glo-${Date.now()}.txt`), text);

  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');

  const start = cleaned.indexOf('[');
  const end = cleaned.lastIndexOf(']');
  if (start !== -1 && end !== -1) {
    try {
      const parsed = JSON.parse(cleaned.slice(start, end + 1));
      if (Array.isArray(parsed) && parsed.length > 0) return { data: parsed, usage: message.usage };
    } catch (e) {
      try {
        const fixed = cleaned.slice(start, end + 1).replace(/,(\s*[}\]])/g, '$1');
        const parsed = JSON.parse(fixed);
        if (Array.isArray(parsed) && parsed.length > 0) return { data: parsed, usage: message.usage };
      } catch (e2) {}
    }
  }

  // Per-object extraction
  const objs = [];
  let depth = 0, objStart = -1, inStr = false, esc = false;
  for (let i = (cleaned.indexOf('[') + 1); i < cleaned.length; i++) {
    const ch = cleaned[i];
    if (inStr) { if (esc) { esc = false; continue; } if (ch === '\\') { esc = true; continue; } if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; continue; }
    if (ch === '{') { if (depth === 0) objStart = i; depth++; }
    else if (ch === '}') { depth--; if (depth === 0 && objStart !== -1) { try { objs.push(JSON.parse(cleaned.slice(objStart, i + 1))); } catch (e) {} objStart = -1; } }
  }
  if (objs.length > 0) {
    console.log(`  ⚠ Parse parcial: ${objs.length}/${terms.length}`);
    return { data: objs, usage: message.usage };
  }

  throw new Error(`No JSON parseable. stop=${message.stop_reason} len=${text.length}`);
}

async function writeEntry(entry) {
  const dataPath = path.join(ROOT, 'src/lib/glossary-data', `${entry.slug.es}.ts`);
  const esPath = path.join(ROOT, 'src/pages/glosario', `${entry.slug.es}.astro`);
  const enPath = path.join(ROOT, 'src/pages/en/glossary', `${entry.slug.en}.astro`);

  await fs.mkdir(path.join(ROOT, 'src/pages/glosario'), { recursive: true });
  await fs.mkdir(path.join(ROOT, 'src/pages/en/glossary'), { recursive: true });

  await fs.writeFile(dataPath, `import type { GlossaryEntry } from './types';\n\nexport const entry: GlossaryEntry = ${JSON.stringify(entry, null, 2)};\n`);

  const esPage = `---
import Layout from '../../layouts/Layout.astro';
import GlossaryTemplate from '../../components/GlossaryTemplate.astro';
import { entry } from '../../lib/glossary-data/${entry.slug.es}';
const t = entry.es;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="es" schema={faqSchema}>
  <GlossaryTemplate lang="es" entry={entry} />
</Layout>
`;
  await fs.writeFile(esPath, esPage);

  const enPage = `---
import Layout from '../../../layouts/Layout.astro';
import GlossaryTemplate from '../../../components/GlossaryTemplate.astro';
import { entry } from '../../../lib/glossary-data/${entry.slug.es}';
const t = entry.en;
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: t.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};
---
<Layout title={t.pageTitle} description={t.metaDesc} lang="en" schema={faqSchema}>
  <GlossaryTemplate lang="en" entry={entry} />
</Layout>
`;
  await fs.writeFile(enPath, enPage);
}

async function main() {
  const ideasPath = process.argv[2];
  if (!ideasPath) { console.error('Usage: gen-glossary.mjs <terms.json>'); process.exit(1); }
  const all = JSON.parse(await fs.readFile(ideasPath, 'utf8'));

  // Skip ones already written
  const existing = new Set();
  try {
    const files = await fs.readdir(path.join(ROOT, 'src/lib/glossary-data'));
    files.forEach(f => existing.add(f.replace('.ts', '')));
  } catch (e) {}
  const filtered = all.filter(t => !existing.has(t.slugEs));
  console.log(`Procesando ${filtered.length}/${all.length} términos`);

  const batches = [];
  for (let i = 0; i < filtered.length; i += BATCH_SIZE) batches.push(filtered.slice(i, i + BATCH_SIZE));

  const allEntries = [];
  let totalIn = 0, totalOut = 0, totalCacheHit = 0, totalCacheCreate = 0;
  let nextBatch = 0, finished = 0;

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
          try {
            await writeEntry(e);
            allEntries.push(e);
          } catch (err) {
            console.error(`${tag} ✘ ${e.slug?.es}: ${err.message}`);
          }
        }
        finished++;
        console.log(`${tag} done ${data.length}, total escritos ${allEntries.length} (${finished}/${batches.length})`);
      } catch (e) {
        console.error(`${tag} FAIL: ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));

  console.log(`\nTotal: ${allEntries.length}/${filtered.length}`);
  const cost = (totalIn * 3 / 1e6) + (totalCacheCreate * 3.75 / 1e6) + (totalCacheHit * 0.30 / 1e6) + (totalOut * 15 / 1e6);
  console.log(`Tokens out=${totalOut} cache_hit=${totalCacheHit}, costo $${cost.toFixed(3)}`);
}

main().catch(e => { console.error(e); process.exit(1); });
