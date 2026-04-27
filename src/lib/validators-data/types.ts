import type { ValidatorId } from '../validators/algorithms';

export type ValidatorLangData = {
  pageTitle: string;        // "Validador de X | Genfy"
  metaDesc: string;         // 140-158ch
  h1: string;
  intro: string;            // hero subtitle
  tag: string;              // category
  inputLabel: string;       // "Ingresá un X"
  placeholder: string;
  validateLabel: string;    // "Validar"
  validLabel: string;       // "Válido"
  invalidLabel: string;     // "Inválido"
  examples: { label: string; value: string }[];  // 3-5 ejemplos clickeables
  reasons: Record<string, string>;  // i18n para reason codes del algoritmo
  detailsLabels?: Record<string, string>;  // i18n para keys de details
  body: { h2: string; html: string }[];  // 3-4 secciones explicativas
  faq: { q: string; a: string }[];
  relatedSlugs: string[];   // slugs lang-correctos de generadores Genfy relacionados
};

export type ValidatorEntry = {
  id: ValidatorId;
  slug: { es: string; en: string };
  emoji: string;
  category: 'data' | 'security' | 'tech' | 'tools';
  es: ValidatorLangData;
  en: ValidatorLangData;
};
