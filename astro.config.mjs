// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://genfy.net';
const DIST = './dist/client';
const STYLESHEET = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';

function injectStylesheet() {
  return {
    name: 'inject-sitemap-stylesheet',
    hooks: {
      'astro:build:done': () => {
        for (const f of [`${DIST}/sitemap-index.xml`, `${DIST}/sitemap-0.xml`]) {
          if (!existsSync(f)) continue;
          const xml = readFileSync(f, 'utf-8');
          if (xml.includes('xml-stylesheet')) continue;
          writeFileSync(f, xml.replace(/^(<\?xml[^?]+\?>)/, `$1\n${STYLESHEET}`));
        }
      },
    },
  };
}

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
    injectStylesheet(),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  adapter: cloudflare(),
});
