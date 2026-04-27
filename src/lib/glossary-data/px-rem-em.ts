import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "px-rem-em",
    "en": "px-rem-em"
  },
  "emoji": "📏",
  "category": "design",
  "es": {
    "pageTitle": "px, rem, em — Glosario | Genfy",
    "metaDesc": "px, rem, em: unidades CSS para tipografía y espaciado. Aprende cuándo usar cada una para diseño responsive y accesible en la web.",
    "h1": "px, rem, em",
    "short": "px, rem y em son unidades de medida en CSS para definir tamaños de fuente, espaciados y dimensiones. px es absoluto (píxeles de pantalla), rem es relativo al tamaño de fuente raíz (root), y em es relativo al tamaño de fuente del elemento padre inmediato.",
    "body": [
      {
        "title": "¿Qué son px, rem y em?",
        "html": "<p><strong>px (píxeles)</strong> es la unidad absoluta más común. <code>font-size: 16px</code> significa exactamente 16 píxeles CSS, sin importar el contexto. Es predecible y directo, pero ignora preferencias de usuario (como zoom de texto) y dificulta diseño responsive. Usarlo exclusivamente rompe accesibilidad para personas con baja visión que aumentan el tamaño de fuente del navegador.</p><p><strong>rem (root em)</strong> es relativo al <code>font-size</code> del elemento raíz (<code>html</code>). Si el root es 16px (default en navegadores), <code>1rem = 16px</code>, <code>2rem = 32px</code>. Cambiar el font-size del root escala todo el diseño proporcionalmente. Esto respeta preferencias de accesibilidad y facilita theming. Es la unidad recomendada para tipografía y espaciado en sistemas de diseño modernos.</p><p><strong>em</strong> es relativo al <code>font-size</code> del elemento padre directo. Si un <code>div</code> tiene <code>font-size: 20px</code> y un hijo usa <code>padding: 1em</code>, el padding será 20px. Los em se multiplican en cascada: si un <code>div</code> tiene <code>font-size: 1.2em</code> dentro de otro <code>div</code> con <code>1.5em</code>, el resultado es <code>1.2 × 1.5 = 1.8em</code> respecto al ancestro. Esto puede ser útil para componentes modulares pero confuso sin disciplina.</p>"
      },
      {
        "title": "Cómo funcionan en la práctica",
        "html": "<p>La mayoría de navegadores tiene <strong>font-size root de 16px por defecto</strong>. Podés cambiarlo en <code>html { font-size: 18px; }</code> o usar porcentajes: <code>font-size: 112.5%;</code> (18px si el default es 16px). Sistemas de diseño suelen definir el root en rem para escalar todo: <code>html { font-size: 62.5%; }</code> hace que <code>1rem = 10px</code>, facilitando cuentas (<code>1.6rem = 16px</code>).</p><p><strong>Conversión mental</strong>: si el root es 16px, dividí px por 16 para obtener rem. <code>24px = 1.5rem</code>, <code>32px = 2rem</code>, <code>12px = 0.75rem</code>. Con root en 10px (62.5%), la conversión es directa: <code>18px = 1.8rem</code>. Para em, dependés del padre: si el padre es <code>20px</code>, <code>1em = 20px</code>, <code>0.5em = 10px</code>.</p><p>En <strong>media queries</strong>, siempre usá em o rem, nunca px. Los navegadores interpretan em en media queries relativo al default de 16px (no al root alterado). Ejemplo: <code>@media (min-width: 48em)</code> equivale a 768px si 16px es base. Esto respeta zoom del navegador: si un usuario hace zoom 200%, un breakpoint en px no escala, pero uno en em sí.</p>"
      },
      {
        "title": "Cuándo usar cada unidad",
        "html": "<p><strong>Usá rem para</strong>: tamaños de fuente base, espaciado (margins, paddings) de layout, tamaños de componentes que deben escalar con preferencias de usuario. Ejemplo: <code>h1 { font-size: 2.5rem; margin-bottom: 1rem; }</code>. Esto asegura que si alguien aumenta el zoom de texto, todo el diseño responde.</p><p><strong>Usá em para</strong>: espaciado interno de componentes que debe ser proporcional al texto del componente. Ejemplo: botones con <code>padding: 0.5em 1em;</code> se ajustan automáticamente si el botón tiene <code>font-size: 1.2rem</code> o <code>0.875rem</code>. También útil en media queries y line-height (<code>line-height: 1.5em</code> o mejor sin unidad: <code>1.5</code>).</p><p><strong>Usá px para</strong>: bordes (<code>border: 1px solid</code>), sombras pequeñas, detalles que no deben escalar (íconos fijos, divisores). También en casos donde necesitás control pixel-perfect, como alineación de grids o imágenes. Evitá px para tipografía y espaciado principal: rompe accesibilidad.</p><p>Regla práctica: <strong>rem por defecto, em para componentes modulares, px solo cuando absoluto es requerido</strong>. Sistemas como Tailwind CSS usan rem para casi todo: <code>text-base = 1rem</code>, <code>p-4 = 1rem padding</code>.</p>"
      },
      {
        "title": "Errores comunes y mejores prácticas",
        "html": "<p><strong>Error 1: Usar px para todo</strong>. Esto ignora que usuarios pueden tener configuraciones de accesibilidad distintas. Un diseño en px puro falla WCAG 2.1 (criterio 1.4.4 Resize Text). Migrá a rem/em para cumplir estándares y mejorar UX.</p><p><strong>Error 2: Anidar em sin control</strong>. Si tenés 5 niveles de <code>font-size: 1.2em</code> anidados, el texto del último nivel será enorme (<code>1.2^5 ≈ 2.5x</code>). Usá rem para evitar multiplicación en cascada, o em solo en un nivel de profundidad.</p><p><strong>Error 3: No definir root explícitamente</strong>. Asumir que el root es 16px funciona hasta que un usuario o framework lo cambia. Declará tu intención: <code>html { font-size: 100%; }</code> o el valor específico que necesites. Documentá la base en tu sistema de diseño.</p><p><strong>Buena práctica</strong>: usá variables CSS para escalas. <code>--font-size-base: 1rem; --spacing-unit: 0.5rem;</code> Así cambiás toda la escala editando una variable. Herramientas como <code>clamp()</code> combinan bien con rem para tipografía fluida: <code>font-size: clamp(1rem, 2vw, 1.5rem);</code> escala entre 16-24px según viewport, respetando rem.</p>"
      }
    ],
    "examples": [
      "html { font-size: 16px; } → body { font-size: 1rem; } = 16px",
      "html { font-size: 10px; } → h1 { font-size: 3.2rem; } = 32px",
      "div { font-size: 20px; } → span { padding: 0.5em; } = 10px padding",
      "button { font-size: 1rem; padding: 0.5em 1em; } = 16px fuente, 8px 16px padding (si root es 16px)",
      "@media (min-width: 48em) = breakpoint a 768px (si base es 16px)"
    ],
    "related": [
      "conversor-px-a-rem",
      "conversor-px-a-em"
    ],
    "faq": [
      {
        "q": "¿Por qué no usar px si es más fácil?",
        "a": "px ignora preferencias de accesibilidad del usuario. Si alguien configura su navegador para texto más grande (común en personas con baja visión o adultos mayores), un sitio en px puro no responde. Además, diseño responsive es más simple con rem: cambiar un breakpoint o escala de tipografía es editar una variable, no buscar y reemplazar cientos de valores px."
      },
      {
        "q": "¿rem o em para media queries?",
        "a": "Ambos funcionan, pero em es más común porque en media queries se calcula respecto al default del navegador (16px), no al root. Usar em asegura que breakpoints escalan con zoom del navegador. Ejemplo: <code>@media (min-width: 64em)</code> es 1024px pero si el usuario hace zoom 150%, el breakpoint también escala. px en media queries no escala con zoom."
      },
      {
        "q": "¿Cómo migro un proyecto de px a rem sin romperlo todo?",
        "a": "Empezá por definir <code>html { font-size: 62.5%; }</code> (1rem = 10px) para conversión fácil. Usá buscar y reemplazar con regex para convertir valores comunes: 16px → 1.6rem, 24px → 2.4rem. Priorizá tipografía y espaciado de layout, dejá borders y detalles en px por ahora. Probá con zoom de navegador al 200% y 50% para validar que todo escala. Herramientas como PostCSS tienen plugins de conversión automática."
      }
    ]
  },
  "en": {
    "pageTitle": "px, rem, em — Glossary | Genfy",
    "metaDesc": "px, rem, em: CSS units for typography and spacing. Learn when to use each for responsive and accessible web design.",
    "h1": "px, rem, em",
    "short": "px, rem, and em are CSS measurement units for defining font sizes, spacing, and dimensions. px is absolute (screen pixels), rem is relative to the root font size, and em is relative to the parent element's font size.",
    "body": [
      {
        "title": "What are px, rem, and em?",
        "html": "<p><strong>px (pixels)</strong> is the most common absolute unit. <code>font-size: 16px</code> means exactly 16 CSS pixels, regardless of context. It's predictable and straightforward, but ignores user preferences (like text zoom) and hinders responsive design. Using it exclusively breaks accessibility for people with low vision who increase browser font size.</p><p><strong>rem (root em)</strong> is relative to the <code>font-size</code> of the root element (<code>html</code>). If root is 16px (browser default), <code>1rem = 16px</code>, <code>2rem = 32px</code>. Changing root font-size scales the entire design proportionally. This respects accessibility preferences and facilitates theming. It's the recommended unit for typography and spacing in modern design systems.</p><p><strong>em</strong> is relative to the direct parent element's <code>font-size</code>. If a <code>div</code> has <code>font-size: 20px</code> and a child uses <code>padding: 1em</code>, padding will be 20px. Ems multiply in cascade: if a <code>div</code> has <code>font-size: 1.2em</code> inside another <code>div</code> with <code>1.5em</code>, result is <code>1.2 × 1.5 = 1.8em</code> from ancestor. This can be useful for modular components but confusing without discipline.</p>"
      },
      {
        "title": "How they work in practice",
        "html": "<p>Most browsers have <strong>root font-size of 16px by default</strong>. You can change it with <code>html { font-size: 18px; }</code> or use percentages: <code>font-size: 112.5%;</code> (18px if default is 16px). Design systems often define root in rem to scale everything: <code>html { font-size: 62.5%; }</code> makes <code>1rem = 10px</code>, easing math (<code>1.6rem = 16px</code>).</p><p><strong>Mental conversion</strong>: if root is 16px, divide px by 16 to get rem. <code>24px = 1.5rem</code>, <code>32px = 2rem</code>, <code>12px = 0.75rem</code>. With root at 10px (62.5%), conversion is direct: <code>18px = 1.8rem</code>. For em, depends on parent: if parent is <code>20px</code>, <code>1em = 20px</code>, <code>0.5em = 10px</code>.</p><p>In <strong>media queries</strong>, always use em or rem, never px. Browsers interpret em in media queries relative to the default 16px (not altered root). Example: <code>@media (min-width: 48em)</code> equals 768px if 16px is base. This respects browser zoom: if a user zooms 200%, a px breakpoint doesn't scale, but an em one does.</p>"
      },
      {
        "title": "When to use each unit",
        "html": "<p><strong>Use rem for</strong>: base font sizes, layout spacing (margins, paddings), component sizes that should scale with user preferences. Example: <code>h1 { font-size: 2.5rem; margin-bottom: 1rem; }</code>. This ensures if someone increases text zoom, entire design responds.</p><p><strong>Use em for</strong>: component internal spacing that should be proportional to component's text. Example: buttons with <code>padding: 0.5em 1em;</code> automatically adjust if button has <code>font-size: 1.2rem</code> or <code>0.875rem</code>. Also useful in media queries and line-height (<code>line-height: 1.5em</code> or better unitless: <code>1.5</code>).</p><p><strong>Use px for</strong>: borders (<code>border: 1px solid</code>), small shadows, details that shouldn't scale (fixed icons, dividers). Also in cases where you need pixel-perfect control, like grid or image alignment. Avoid px for typography and main spacing: breaks accessibility.</p><p>Rule of thumb: <strong>rem by default, em for modular components, px only when absolute is required</strong>. Systems like Tailwind CSS use rem for almost everything: <code>text-base = 1rem</code>, <code>p-4 = 1rem padding</code>.</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "html": "<p><strong>Mistake 1: Using px for everything</strong>. This ignores that users may have different accessibility settings. A pure-px design fails WCAG 2.1 (criterion 1.4.4 Resize Text). Migrate to rem/em to meet standards and improve UX.</p><p><strong>Mistake 2: Nesting em without control</strong>. If you have 5 levels of <code>font-size: 1.2em</code> nested, text at the last level will be huge (<code>1.2^5 ≈ 2.5x</code>). Use rem to avoid cascade multiplication, or em only at one depth level.</p><p><strong>Mistake 3: Not defining root explicitly</strong>. Assuming root is 16px works until a user or framework changes it. Declare your intent: <code>html { font-size: 100%; }</code> or the specific value you need. Document the base in your design system.</p><p><strong>Good practice</strong>: use CSS variables for scales. <code>--font-size-base: 1rem; --spacing-unit: 0.5rem;</code> This way you change entire scale by editing one variable. Tools like <code>clamp()</code> combine well with rem for fluid typography: <code>font-size: clamp(1rem, 2vw, 1.5rem);</code> scales between 16-24px based on viewport, respecting rem.</p>"
      }
    ],
    "examples": [
      "html { font-size: 16px; } → body { font-size: 1rem; } = 16px",
      "html { font-size: 10px; } → h1 { font-size: 3.2rem; } = 32px",
      "div { font-size: 20px; } → span { padding: 0.5em; } = 10px padding",
      "button { font-size: 1rem; padding: 0.5em 1em; } = 16px font, 8px 16px padding (if root is 16px)",
      "@media (min-width: 48em) = breakpoint at 768px (if base is 16px)"
    ],
    "related": [
      "px-to-rem-converter",
      "px-to-em-converter"
    ],
    "faq": [
      {
        "q": "Why not use px if it's easier?",
        "a": "px ignores user accessibility preferences. If someone configures their browser for larger text (common in people with low vision or older adults), a pure-px site doesn't respond. Additionally, responsive design is simpler with rem: changing a breakpoint or typography scale is editing one variable, not finding and replacing hundreds of px values."
      },
      {
        "q": "rem or em for media queries?",
        "a": "Both work, but em is more common because in media queries it calculates relative to browser default (16px), not root. Using em ensures breakpoints scale with browser zoom. Example: <code>@media (min-width: 64em)</code> is 1024px but if user zooms 150%, breakpoint also scales. px in media queries doesn't scale with zoom."
      },
      {
        "q": "How do I migrate a project from px to rem without breaking everything?",
        "a": "Start by defining <code>html { font-size: 62.5%; }</code> (1rem = 10px) for easy conversion. Use find and replace with regex for common values: 16px → 1.6rem, 24px → 2.4rem. Prioritize typography and layout spacing, leave borders and details in px for now. Test with browser zoom at 200% and 50% to validate everything scales. Tools like PostCSS have automatic conversion plugins."
      }
    ]
  }
};
