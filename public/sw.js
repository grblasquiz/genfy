// Genfy service worker — offline-first for the shell, network-first for HTML pages.
const VERSION = 'v3';
const SHELL_CACHE = `genfy-shell-${VERSION}`;
const PAGES_CACHE = `genfy-pages-${VERSION}`;
const ASSETS_CACHE = `genfy-assets-${VERSION}`;

const SHELL_URLS = [
  '/',
  '/en',
  '/manifest.json',
  '/favicon.svg',
  '/apple-touch-icon.svg',
  '/og-default.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(cache => cache.addAll(SHELL_URLS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !k.endsWith(VERSION)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Never cache analytics / ads
  if (url.hostname.includes('googletagmanager') || url.hostname.includes('googlesyndication') || url.hostname.includes('google-analytics')) return;

  // Static assets: cache-first
  if (url.pathname.startsWith('/_astro/') || /\.(css|js|woff2?|svg|png|jpg|webp|ico)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(ASSETS_CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached))
    );
    return;
  }

  // HTML pages: stale-while-revalidate
  if (req.headers.get('accept')?.includes('text/html') || url.pathname === '/' || url.pathname.endsWith('/') || !url.pathname.includes('.')) {
    event.respondWith(
      caches.open(PAGES_CACHE).then(cache =>
        cache.match(req).then(cached => {
          const networkPromise = fetch(req).then(res => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          }).catch(() => cached || cache.match('/'));
          return cached || networkPromise;
        })
      )
    );
  }
});
