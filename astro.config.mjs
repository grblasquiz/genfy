// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync, existsSync } from 'node:fs';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://genfy.net';
const DIST = './dist/client';

function readHreflang(pathname) {
  const file = pathname === '/' ? `${DIST}/index.html` : `${DIST}${pathname}.html`;
  if (!existsSync(file)) return null;
  const head = readFileSync(file, 'utf-8').slice(0, 6000);
  const re = /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g;
  const links = [];
  let m;
  while ((m = re.exec(head)) !== null) {
    links.push({ lang: m[1], url: m[2] });
  }
  return links.length > 0 ? links : null;
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
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const links = readHreflang(path);
        if (links) item.links = links;
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
