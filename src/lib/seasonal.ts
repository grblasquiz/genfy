import type { Lang } from './i18n';
import { GENERATORS, type GeneratorMeta } from './generators';

type SeasonalEntry = {
  // 1-indexed month range. If end < start, it wraps (e.g., 11→1 = Nov, Dec, Jan)
  startMonth: number;
  endMonth: number;
  // Optional day range within the months (for narrow windows)
  startDay?: number;
  endDay?: number;
  emoji: string;
  // Slug fragments (es) to match against existing generators
  matchEs: string[];
  matchEn: string[];
  copy: {
    es: { tagline: string; cta: string };
    en: { tagline: string; cta: string };
  };
};

const SEASONS: SeasonalEntry[] = [
  {
    startMonth: 12, endMonth: 1,
    emoji: '🎁',
    matchEs: ['frase-del-dia', 'afirmaciones', 'titulo-libro', 'nombre-juego', 'nombre-pelicula', 'tema-debate'],
    matchEn: ['quote-of-the-day', 'affirmation', 'book-title', 'movie-title', 'tv-show-name', 'debate-topic'],
    copy: {
      es: { tagline: 'Para fin de año y arranque enero', cta: 'Generadores para regalos, brindis, propósitos y desafíos del año nuevo.' },
      en: { tagline: 'For year-end and January kickoff', cta: 'Generators for gifts, toasts, resolutions and new-year challenges.' },
    },
  },
  {
    startMonth: 2, endMonth: 2, startDay: 1, endDay: 16,
    emoji: '💌',
    matchEs: ['couple-name-combiner', 'apodos-mascotas', 'nombre-rapero', 'frase-motivacional', 'cumplido'],
    matchEn: ['couple-name-combiner', 'pet-nickname', 'compliment', 'motivational-quote'],
    copy: {
      es: { tagline: 'San Valentín', cta: 'Apodos, mensajes y combinadores para sorprender el 14.' },
      en: { tagline: 'Valentine\'s week', cta: 'Nicknames, messages and combiners to surprise on the 14th.' },
    },
  },
  {
    startMonth: 5, endMonth: 5,
    emoji: '🌸',
    matchEs: ['frase-motivacional', 'cumplido', 'firma-de-email', 'afirmaciones'],
    matchEn: ['motivational-quote', 'compliment', 'email-signature', 'affirmation'],
    copy: {
      es: { tagline: 'Día de la Madre', cta: 'Mensajes, dedicatorias y detalles para ese domingo de mayo.' },
      en: { tagline: 'Mother\'s Day', cta: 'Messages, dedications and small details for that Sunday in May.' },
    },
  },
  {
    startMonth: 6, endMonth: 6,
    emoji: '👔',
    matchEs: ['frase-motivacional', 'cumplido', 'cocktail', 'mocktail'],
    matchEn: ['motivational-quote', 'compliment', 'cocktail-name', 'mocktail-name'],
    copy: {
      es: { tagline: 'Día del Padre', cta: 'Frases, brindis y dedicatorias para el tercer domingo de junio.' },
      en: { tagline: 'Father\'s Day', cta: 'Quotes, toasts and dedications for the third Sunday of June.' },
    },
  },
  {
    startMonth: 10, endMonth: 10, startDay: 15, endDay: 31,
    emoji: '🎃',
    matchEs: ['nombre-villano', 'monstruo', 'acertijo', 'nombre-superheroe', 'nombres-de-elfo', 'truth-or-dare', 'pocion'],
    matchEn: ['villain-name', 'monster-name', 'riddle', 'superhero-name', 'elf-name', 'truth-or-dare', 'potion-name'],
    copy: {
      es: { tagline: 'Halloween', cta: 'Villanos, monstruos, acertijos y pociones para la noche del 31.' },
      en: { tagline: 'Halloween', cta: 'Villains, monsters, riddles and potions for October 31.' },
    },
  },
  {
    startMonth: 11, endMonth: 11, startDay: 20, endDay: 30,
    emoji: '🛒',
    matchEs: ['copy-anuncio-facebook', 'copy-banner-promo', 'codigo-cupon', 'asunto-email-ventas', 'codigo-descuento'],
    matchEn: ['facebook-ad-copy', 'promo-banner-copy', 'coupon-code', 'sales-email-subject', 'discount-code'],
    copy: {
      es: { tagline: 'Black Friday y Cyber Monday', cta: 'Asuntos, códigos, banners y copy para campañas de fin de noviembre.' },
      en: { tagline: 'Black Friday & Cyber Monday', cta: 'Subject lines, codes, banners and copy for late-November campaigns.' },
    },
  },
];

export function currentSeasonal(lang: Lang, now = new Date()): {
  emoji: string;
  tagline: string;
  cta: string;
  generators: GeneratorMeta[];
} | null {
  const m = now.getMonth() + 1;
  const d = now.getDate();
  for (const s of SEASONS) {
    const inMonthWrap = s.startMonth <= s.endMonth
      ? m >= s.startMonth && m <= s.endMonth
      : m >= s.startMonth || m <= s.endMonth;
    if (!inMonthWrap) continue;
    if (s.startDay && m === s.startMonth && d < s.startDay) continue;
    if (s.endDay && m === s.endMonth && d > s.endDay) continue;

    const match = lang === 'es' ? s.matchEs : s.matchEn;
    const slugKey = lang === 'es' ? 'es' : 'en';
    const found = GENERATORS.filter(g =>
      match.some(frag => g.slug[slugKey].includes(frag))
    ).slice(0, 6);
    if (found.length === 0) continue;
    return { emoji: s.emoji, tagline: s.copy[lang].tagline, cta: s.copy[lang].cta, generators: found };
  }
  return null;
}
