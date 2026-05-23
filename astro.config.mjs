// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://genfy.net';

const STATIC_PAGE_MAP = {
  contacto: 'contact',
  privacidad: 'privacy',
  terminos: 'terms',
  'sobre-genfy': 'about',
  generadores: 'generators',
};

function buildSlugMap() {
  const map = new Map();
  const content = readFileSync('./src/lib/generators.ts', 'utf-8');
  const re = /"slug":\s*\{\s*"es":\s*"([^"]+)"\s*,\s*"en":\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    map.set(`/${m[1]}`, `/en/${m[2]}`);
    map.set(`/en/${m[2]}`, `/${m[1]}`);
  }
  for (const [es, en] of Object.entries(STATIC_PAGE_MAP)) {
    map.set(`/${es}`, `/en/${en}`);
    map.set(`/en/${en}`, `/${es}`);
  }
  return map;
}

const SLUG_MAP = buildSlugMap();

function altPath(path) {
  const direct = SLUG_MAP.get(path);
  if (direct) return direct;
  if (path.startsWith('/glosario/')) return `/en/glossary/${path.slice('/glosario/'.length)}`;
  if (path.startsWith('/en/glossary/')) return `/glosario/${path.slice('/en/glossary/'.length)}`;
  if (path.startsWith('/top/')) return `/en/top/${path.slice('/top/'.length)}`;
  if (path.startsWith('/en/top/')) return `/top/${path.slice('/en/top/'.length)}`;
  if (path === '/top') return '/en/top';
  if (path === '/en/top') return '/top';
  return null;
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !/\/embed\/[^/]+\/?$/.test(page),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        if (item.links && item.links.length > 0) return item;
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';
        const other = altPath(path);
        if (other) {
          const isEn = path.startsWith('/en/') || path === '/en';
          const enUrl = `${SITE}${isEn ? path : other}`;
          const esUrl = `${SITE}${isEn ? other : path}`;
          item.links = [
            { lang: 'es', url: esUrl },
            { lang: 'en', url: enUrl },
            { lang: 'x-default', url: esUrl },
          ];
        }
        return item;
      },
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  adapter: cloudflare(),
});
