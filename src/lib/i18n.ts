export type Lang = 'es' | 'en';

export const SITE_URL = 'https://genfy.net';
export const SITE_NAME = 'Genfy';

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
  if (currentLang === 'es') return pathname === '/' ? '/en' : `/en${pathname}`;
  return pathname === '/en' ? '/' : pathname.replace(/^\/en/, '') || '/';
}
