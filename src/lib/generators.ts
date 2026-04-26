import type { Lang } from './i18n';

export type GeneratorMeta = {
  slug: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: 'security' | 'business' | 'content' | 'fun' | 'tools';
  emoji: string;
};

export const GENERATORS: GeneratorMeta[] = [
  {
    slug: { es: 'generador-de-contrasenas', en: 'password-generator' },
    title: { es: 'Generador de contraseñas', en: 'Password generator' },
    description: {
      es: 'Crea contraseñas fuertes y seguras al instante. Ajusta longitud, símbolos y mayúsculas.',
      en: 'Create strong, secure passwords instantly. Adjust length, symbols and uppercase letters.',
    },
    category: 'security',
    emoji: '🔐',
  },
  {
    slug: { es: 'generador-de-nombres-de-empresa', en: 'business-name-generator' },
    title: { es: 'Generador de nombres de empresa', en: 'Business name generator' },
    description: {
      es: 'Ideas de nombres pegadizos para tu negocio, marca o startup, en segundos.',
      en: 'Catchy name ideas for your business, brand or startup, in seconds.',
    },
    category: 'business',
    emoji: '💼',
  },
  {
    slug: { es: 'generador-lorem-ipsum', en: 'lorem-ipsum-generator' },
    title: { es: 'Generador de Lorem Ipsum', en: 'Lorem Ipsum generator' },
    description: {
      es: 'Texto de relleno clásico para diseño y maquetación. Párrafos, palabras o listas.',
      en: 'Classic placeholder text for design and layout. Paragraphs, words or lists.',
    },
    category: 'content',
    emoji: '📝',
  },
  {
    slug: { es: 'generador-de-nombres-para-gatos', en: 'cat-name-generator' },
    title: { es: 'Generador de nombres para gatos', en: 'Cat name generator' },
    description: {
      es: 'Encuentra el nombre perfecto para tu gato: tiernos, divertidos, originales o épicos.',
      en: 'Find the perfect name for your cat: cute, funny, original or epic.',
    },
    category: 'fun',
    emoji: '🐱',
  },
  {
    slug: { es: 'generador-de-codigos-qr', en: 'qr-code-generator' },
    title: { es: 'Generador de códigos QR', en: 'QR code generator' },
    description: {
      es: 'Crea códigos QR gratis para enlaces, texto, WiFi o contacto. Descarga PNG.',
      en: 'Create free QR codes for links, text, WiFi or contact info. Download as PNG.',
    },
    category: 'tools',
    emoji: '📱',
  },
];

export function urlFor(g: GeneratorMeta, lang: Lang) {
  return lang === 'es' ? `/${g.slug.es}` : `/en/${g.slug.en}`;
}
