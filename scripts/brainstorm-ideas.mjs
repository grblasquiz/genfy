#!/usr/bin/env node
import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const want = parseInt(process.argv[2] || '220', 10);

  // Build current slug list for "evita estos"
  const genSrc = await fs.readFile(path.join(ROOT, 'src/lib/generators.ts'), 'utf8');
  const existing = [];
  for (const m of genSrc.matchAll(/slug:\s*\{\s*es:\s*'([^']+)',\s*en:\s*'([^']+)'/g)) {
    existing.push(`${m[1]} | ${m[2]}`);
  }

  const system = `Sos curador SEO de Genfy (sitio bilingüe ES/EN de "generadores online"). Tu tarea: proponer ideas NUEVAS de generadores que no existan ya y aporten valor real (long-tail SEO, intención de búsqueda real, contenido enseñable, no thin).

REGLAS:
- Salida = SOLO un JSON array, nada más, sin texto extra ni backticks.
- Cada idea es: { slugEs, slugEn, category, emoji, mode, conceptEs, conceptEn }
- slugs en kebab-case, sin acentos, ES en español ("generador-de-X" o "generador-X"), EN en inglés ("X-generator").
- mode: 'pick' (un item de una lista) o 'combine' (un item de cada slot, mejor para nombres compuestos).
- category ∈ { security, business, content, fun, tools, tech, data, marketing, design, random, pets, people, work, inspiration }
- emoji: uno solo, relevante.
- conceptEs / conceptEn: 1-2 frases que describan QUE genera y para QUIEN, con seña distintiva (no genérico).
- DIVERSIDAD: cubrí muchas verticales (educación, gastronomía, gaming, fitness, viaje, holiday, escritura creativa, productividad/agile, música, arte, ingeniería, deportes, kids, social/dating, corporativo, finanzas, automotriz, moda).
- Evitá temas religiosos, deidades paganas, contenido sensible.
- ABSOLUTAMENTE NO repitas slugs que ya existen (lista abajo).`;

  const biasNote = process.env.BIAS_CATS
    ? `\n\nIMPORTANTE: para esta tanda priorizá fuertemente ideas en estas categorías: ${process.env.BIAS_CATS}. Distribuí parejo entre ellas.`
    : '';

  const user = `Generá ${want} ideas NUEVAS, todas únicas entre sí y distintas de estas que ya existen:

${existing.join('\n')}

Devolvé el array JSON con ${want} ideas, asegurándote que cada slug sea único y no esté en la lista anterior.${biasNote}`;

  console.log(`Solicitando ${want} ideas...`);
  const stream = client.messages.stream({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 32000,
    system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: user }],
  });
  const message = await stream.finalMessage();
  const text = message.content.map(b => b.type === 'text' ? b.text : '').join('').trim();

  await fs.mkdir(path.join(ROOT, '.gen-debug'), { recursive: true });
  await fs.writeFile(path.join(ROOT, '.gen-debug', `ideas-${Date.now()}.txt`), text);

  // Strip code fences if present
  const cleanedText = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const start = cleanedText.indexOf('[');
  const end = cleanedText.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('No JSON array');

  let ideas;
  try {
    ideas = JSON.parse(cleanedText.slice(start, end + 1));
  } catch (e) {
    const cleaned = cleanedText.slice(start, end + 1).replace(/,(\s*[}\]])/g, '$1');
    ideas = JSON.parse(cleaned);
  }

  // Dedupe vs existing slugs
  const existingSet = new Set();
  for (const e of existing) {
    const [es, en] = e.split(' | ');
    existingSet.add(es); existingSet.add(en);
  }

  // Dedupe within new ideas + filter
  const seen = new Set();
  const filtered = [];
  for (const i of ideas) {
    if (!i.slugEs || !i.slugEn) continue;
    if (existingSet.has(i.slugEs) || existingSet.has(i.slugEn)) continue;
    const k = i.slugEs + '|' + i.slugEn;
    if (seen.has(k)) continue;
    seen.add(k);
    filtered.push(i);
  }

  await fs.writeFile(path.join(ROOT, 'scripts/ideas-200.json'), JSON.stringify(filtered, null, 2));
  console.log(`Guardadas ${filtered.length} ideas únicas en scripts/ideas-200.json`);
  console.log(`Tokens: in=${message.usage.input_tokens} out=${message.usage.output_tokens}`);
}

main().catch(e => { console.error(e); process.exit(1); });
