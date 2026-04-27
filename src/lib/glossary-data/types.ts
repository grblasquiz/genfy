export type GlossaryLangData = {
  pageTitle: string;        // "<Term> — Glosario | Genfy"
  metaDesc: string;         // 140-158ch
  h1: string;               // term, capitalizado
  short: string;            // definición corta, 1-2 frases (~150ch)
  body: { h2: string; html: string }[];  // 3-4 secciones con HTML simple
  examples?: string[];      // ejemplos cortos (opcional)
  related: string[];        // slugs de generadores Genfy relacionados (lang-correcto)
  faq: { q: string; a: string }[];
};

export type GlossaryEntry = {
  slug: { es: string; en: string };
  emoji: string;
  category: 'security' | 'tech' | 'data' | 'design' | 'web' | 'crypto' | 'devops' | 'general';
  es: GlossaryLangData;
  en: GlossaryLangData;
};
