import { GENERATORS } from './generators';

export type Lang = 'es' | 'en';

export const SITE_URL = 'https://genfy.net';
export const SITE_NAME = 'Genfy';

const STATIC_PAGE_MAP: Record<string, string> = {
  contacto: 'contact',
  privacidad: 'privacy',
  terminos: 'terms',
  'sobre-genfy': 'about',
  generadores: 'generators',
};

const ES_TO_EN_SLUG = new Map<string, string>();
const EN_TO_ES_SLUG = new Map<string, string>();
for (const g of GENERATORS) {
  ES_TO_EN_SLUG.set(g.slug.es, g.slug.en);
  EN_TO_ES_SLUG.set(g.slug.en, g.slug.es);
}
for (const [es, en] of Object.entries(STATIC_PAGE_MAP)) {
  ES_TO_EN_SLUG.set(es, en);
  EN_TO_ES_SLUG.set(en, es);
}

export const t = {
  es: {
    siteTagline: 'Generadores online gratis',
    siteDescription: 'Cientos de generadores online gratis: contraseñas, nombres, ideas de marca, QR, hashtags, lorem ipsum y más. Sin registro, sin instalar nada.',
    nav: {
      all: 'Todos',
      home: 'Inicio',
      about: 'Sobre Genfy',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
    cta: { generate: 'Generar', copy: 'Copiar', copied: '¡Copiado!', regen: 'Generar otra vez' },
    relatedTitle: 'Otros generadores que te van a gustar',
    faqTitle: 'Preguntas frecuentes',
    breadcrumbHome: 'Inicio',
    footerTagline: 'Genfy — Herramientas y generadores online gratis para todos.',
    footerRights: 'Todos los derechos reservados.',
    langSwitch: 'English',
    langSwitchHref: '/en',
  },
  en: {
    siteTagline: 'Free online generators',
    siteDescription: 'Hundreds of free online generators: passwords, names, brand ideas, QR codes, hashtags, lorem ipsum and more. No signup, nothing to install.',
    nav: {
      all: 'All',
      home: 'Home',
      about: 'About Genfy',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    cta: { generate: 'Generate', copy: 'Copy', copied: 'Copied!', regen: 'Generate again' },
    relatedTitle: 'Other generators you might like',
    faqTitle: 'FAQ',
    breadcrumbHome: 'Home',
    footerTagline: 'Genfy — Free online tools and generators for everyone.',
    footerRights: 'All rights reserved.',
    langSwitch: 'Español',
    langSwitchHref: '/',
  },
} as const;

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith('/en') ? 'en' : 'es';
}

export function altPath(pathname: string, currentLang: Lang): string {
  const clean = pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';

  if (currentLang === 'es') {
    if (clean === '/') return '/en';
    const slug = clean.replace(/^\//, '');
    const enSlug = ES_TO_EN_SLUG.get(slug);
    return enSlug ? `/en/${enSlug}` : `/en${clean}`;
  }

  if (clean === '/en') return '/';
  const slug = clean.replace(/^\/en\//, '');
  const esSlug = EN_TO_ES_SLUG.get(slug);
  if (esSlug) return `/${esSlug}`;
  return clean.replace(/^\/en/, '') || '/';
}
