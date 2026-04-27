import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "favicon",
    "en": "favicon"
  },
  "emoji": "🖼️",
  "category": "web",
  "es": {
    "pageTitle": "Favicon — Glosario | Genfy",
    "metaDesc": "Ícono pequeño que aparece en pestañas del navegador, marcadores y resultados de búsqueda. Aprende formatos, tamaños y cómo implementarlo correctamente.",
    "h1": "Favicon",
    "short": "Un favicon es el ícono pequeño que aparece en la pestaña del navegador, junto al título de tu sitio. También se muestra en marcadores, historial y resultados de búsqueda móvil. Es parte fundamental de la identidad visual web.",
    "body": [
      {
        "title": "¿Qué es un Favicon?",
        "html": "<p>El término <strong>favicon</strong> viene de <em>favorite icon</em> (ícono favorito), acuñado en 1999 cuando Internet Explorer 5 lo introdujo para los marcadores. Hoy es un estándar universal presente en todos los navegadores modernos.</p><p>Un favicon cumple tres roles clave: <strong>identidad de marca</strong> (el usuario reconoce tu sitio entre decenas de pestañas), <strong>profesionalismo</strong> (un sitio sin favicon transmite descuido) y <strong>experiencia móvil</strong> (iOS y Android lo usan cuando guardás el sitio en la pantalla de inicio).</p><p>A diferencia de un logo completo, un favicon debe funcionar a tamaños minúsculos (16×16 píxeles en desktop, hasta 512×512 en PWAs). Esto exige diseño deliberado: formas simples, contraste alto, sin detalles que desaparecen al reducir escala.</p>"
      },
      {
        "title": "Formatos y Tamaños Modernos",
        "html": "<p>El formato <code>.ico</code> original está obsoleto. Los navegadores actuales prefieren <strong>PNG</strong> o <strong>SVG</strong>. La estrategia recomendada incluye:</p><ul><li><strong>favicon.svg</strong>: escalable, ideal para navegadores modernos (Chrome 80+, Safari 15+). Soporta modo claro/oscuro con media queries CSS dentro del SVG.</li><li><strong>favicon-32x32.png</strong> y <strong>favicon-16x16.png</strong>: fallback para navegadores antiguos y claridad en tamaños específicos.</li><li><strong>apple-touch-icon.png</strong> (180×180): para iOS cuando el usuario guarda el sitio en su home screen.</li><li><strong>manifest.json</strong>: define múltiples tamaños (192×192, 512×512) para PWAs Android.</li></ul><p>El tag HTML básico es <code>&lt;link rel=\"icon\" href=\"/favicon.svg\" type=\"image/svg+xml\"&gt;</code>. Para máxima compatibilidad, incluí también las versiones PNG con sus respectivos tags. La mayoría de los navegadores buscan automáticamente <code>/favicon.ico</code> en la raíz, pero declararlo explícitamente es mejor práctica.</p>"
      },
      {
        "title": "Cuándo y Cómo Implementarlo",
        "html": "<p>Implementá un favicon <strong>siempre</strong>, incluso en proyectos internos o borradores. Es tan básico como tener un título en la página. Para sitios en producción, es obligatorio.</p><p>El proceso: diseñá una versión cuadrada de tu logo o un símbolo representativo. Probalo a 16px: si no se distingue, simplificá. Exportá en múltiples formatos usando herramientas como <a href=\"https://realfavicongenerator.net\">RealFaviconGenerator</a> o el generador de Genfy.</p><p>Para <strong>dark mode</strong>, el SVG permite incluir estilos condicionales: <code>&lt;style&gt;@media (prefers-color-scheme: dark) { path { fill: white; } }&lt;/style&gt;</code>. Esto hace que el favicon se adapte automáticamente al tema del sistema del usuario.</p><p>En <strong>PWAs</strong>, el manifest.json debe declarar iconos en múltiples tamaños: 192×192 (mínimo), 512×512 (recomendado) y opcionalmente maskable icons con padding extra para Android 13+.</p>"
      },
      {
        "title": "Errores Frecuentes",
        "html": "<p><strong>Usar solo .ico</strong>: este formato está limitado a 256×256 y no soporta transparencia moderna ni SVG. <strong>Favicon genérico</strong>: usar el logo completo sin adaptar resulta en un borrón ilegible a 16px.</p><p><strong>Olvidar cache</strong>: los navegadores cachean agresivamente los favicons. Cambiá la URL (<code>favicon.svg?v=2</code>) al actualizar. <strong>Ignorar iOS</strong>: sin <code>apple-touch-icon.png</code>, iOS usa un screenshot horrible del sitio.</p><p><strong>No probar en real</strong>: verificá cómo se ve en pestañas reales, tanto en tema claro como oscuro. Herramientas de diseño no replican la experiencia del navegador.</p>"
      }
    ],
    "examples": [
      "favicon.svg con media query para dark mode",
      "PNG en 16×16, 32×32 y 180×180 para compatibilidad total",
      "manifest.json con icons[192, 512] para PWA Android",
      "Link tag con type='image/svg+xml' para priorizar SVG"
    ],
    "related": [
      "generador-favicon",
      "generador-de-avatar-iniciales"
    ],
    "faq": [
      {
        "q": "¿Es mejor SVG o PNG para un favicon?",
        "a": "SVG es superior: escala perfecto, pesa menos y soporta dark mode con CSS. Pero incluí PNG 32×32 como fallback para Safari antiguo e IE."
      },
      {
        "q": "¿Por qué mi favicon no se actualiza al cambiarlo?",
        "a": "Cache agresivo del navegador. Agregá un query string (?v=2) a la URL del favicon en el HTML y limpiá cache manualmente (Ctrl+Shift+R)."
      },
      {
        "q": "¿Qué tamaño debe tener el favicon?",
        "a": "Mínimo 32×32 PNG para desktop. Para PWA: 192×192 y 512×512 PNG. Para iOS: 180×180 PNG (apple-touch-icon). SVG es escalable así que cualquier tamaño funciona."
      }
    ]
  },
  "en": {
    "pageTitle": "Favicon — Glossary | Genfy",
    "metaDesc": "Small icon displayed in browser tabs, bookmarks and search results. Learn formats, sizes and how to implement it correctly for modern web standards.",
    "h1": "Favicon",
    "short": "A favicon is the small icon displayed in your browser tab, next to your site's title. It also appears in bookmarks, history, and mobile search results. It's a fundamental part of web visual identity.",
    "body": [
      {
        "title": "What is a Favicon?",
        "html": "<p>The term <strong>favicon</strong> comes from <em>favorite icon</em>, coined in 1999 when Internet Explorer 5 introduced it for bookmarks. Today it's a universal standard present in all modern browsers.</p><p>A favicon serves three key roles: <strong>brand identity</strong> (users recognize your site among dozens of tabs), <strong>professionalism</strong> (a site without a favicon looks careless), and <strong>mobile experience</strong> (iOS and Android use it when saving the site to home screen).</p><p>Unlike a full logo, a favicon must work at tiny sizes (16×16 pixels on desktop, up to 512×512 in PWAs). This demands deliberate design: simple shapes, high contrast, no details that disappear when scaled down.</p>"
      },
      {
        "title": "Modern Formats and Sizes",
        "html": "<p>The original <code>.ico</code> format is obsolete. Current browsers prefer <strong>PNG</strong> or <strong>SVG</strong>. The recommended strategy includes:</p><ul><li><strong>favicon.svg</strong>: scalable, ideal for modern browsers (Chrome 80+, Safari 15+). Supports light/dark mode with CSS media queries inside the SVG.</li><li><strong>favicon-32x32.png</strong> and <strong>favicon-16x16.png</strong>: fallback for older browsers and clarity at specific sizes.</li><li><strong>apple-touch-icon.png</strong> (180×180): for iOS when users save the site to their home screen.</li><li><strong>manifest.json</strong>: defines multiple sizes (192×192, 512×512) for Android PWAs.</li></ul><p>The basic HTML tag is <code>&lt;link rel=\"icon\" href=\"/favicon.svg\" type=\"image/svg+xml\"&gt;</code>. For maximum compatibility, also include PNG versions with their respective tags. Most browsers automatically look for <code>/favicon.ico</code> in the root, but declaring it explicitly is best practice.</p>"
      },
      {
        "title": "When and How to Implement It",
        "html": "<p>Implement a favicon <strong>always</strong>, even in internal projects or drafts. It's as basic as having a page title. For production sites, it's mandatory.</p><p>The process: design a square version of your logo or a representative symbol. Test it at 16px: if it's not clear, simplify. Export in multiple formats using tools like <a href=\"https://realfavicongenerator.net\">RealFaviconGenerator</a> or Genfy's generator.</p><p>For <strong>dark mode</strong>, SVG allows conditional styles: <code>&lt;style&gt;@media (prefers-color-scheme: dark) { path { fill: white; } }&lt;/style&gt;</code>. This makes the favicon automatically adapt to the user's system theme.</p><p>In <strong>PWAs</strong>, the manifest.json must declare icons in multiple sizes: 192×192 (minimum), 512×512 (recommended), and optionally maskable icons with extra padding for Android 13+.</p>"
      },
      {
        "title": "Common Mistakes",
        "html": "<p><strong>Using only .ico</strong>: this format is limited to 256×256 and doesn't support modern transparency or SVG. <strong>Generic favicon</strong>: using the full logo without adapting results in an illegible blur at 16px.</p><p><strong>Forgetting cache</strong>: browsers cache favicons aggressively. Change the URL (<code>favicon.svg?v=2</code>) when updating. <strong>Ignoring iOS</strong>: without <code>apple-touch-icon.png</code>, iOS uses a horrible screenshot of the site.</p><p><strong>Not testing in real conditions</strong>: verify how it looks in actual tabs, in both light and dark themes. Design tools don't replicate the browser experience.</p>"
      }
    ],
    "examples": [
      "favicon.svg with media query for dark mode",
      "PNG at 16×16, 32×32 and 180×180 for full compatibility",
      "manifest.json with icons[192, 512] for Android PWA",
      "Link tag with type='image/svg+xml' to prioritize SVG"
    ],
    "related": [
      "favicon-text-generator",
      "avatar-initials-generator"
    ],
    "faq": [
      {
        "q": "Is SVG or PNG better for a favicon?",
        "a": "SVG is superior: scales perfectly, weighs less, and supports dark mode with CSS. But include 32×32 PNG as fallback for old Safari and IE."
      },
      {
        "q": "Why doesn't my favicon update when I change it?",
        "a": "Aggressive browser caching. Add a query string (?v=2) to the favicon URL in HTML and manually clear cache (Ctrl+Shift+R)."
      },
      {
        "q": "What size should the favicon be?",
        "a": "Minimum 32×32 PNG for desktop. For PWA: 192×192 and 512×512 PNG. For iOS: 180×180 PNG (apple-touch-icon). SVG is scalable so any size works."
      }
    ]
  }
};
