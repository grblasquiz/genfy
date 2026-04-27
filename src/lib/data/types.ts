import type { GeneratorMeta } from '../generators';

export type GroupSpec = {
  id: string;
  label: string;
  items: string[] | string[][];
};

export type ContentSection = {
  h2: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type GenLangData = {
  pageTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  tag: string;
  filterLabel: string;
  countLabel: string;
  generateLabel: string;
  copyLabel: string;
  groups: GroupSpec[];
  separator?: string;
  defaultCount: number;
  maxCount: number;
  content: ContentSection[];
  faq: FaqItem[];
};

export type GenData = {
  slug: { es: string; en: string };
  category: GeneratorMeta['category'];
  emoji: string;
  mode: 'pick' | 'combine';
  es: GenLangData;
  en: GenLangData;
};
