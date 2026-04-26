# Genfy

Free online generators for everything: passwords, business names, lorem ipsum, pet names, QR codes and more.

Built with [Astro](https://astro.build) + Cloudflare Pages. Bilingual (ES/EN), AdSense-ready, 100% client-side.

## Stack

- Astro 6 (static output)
- Cloudflare Pages (hosting + edge)
- TypeScript
- Vanilla CSS (no Tailwind)
- `qrcode` for QR generation

## Local development

```bash
npm install
npm run dev    # http://localhost:4321
```

## Build

```bash
npm run build  # outputs to ./dist
```

## Deploy

Auto-deploy on push to `main` via Cloudflare Pages (connected to this repo).
