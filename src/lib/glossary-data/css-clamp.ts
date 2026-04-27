import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "css-clamp",
    "en": "css-clamp"
  },
  "emoji": "📐",
  "category": "design",
  "es": {
    "pageTitle": "CSS clamp() — Glosario | Genfy",
    "metaDesc": "CSS clamp() devuelve un valor entre mínimo y máximo según tu preferencia. La base de la tipografía fluida que escala perfectamente en todos los dispositivos.",
    "h1": "CSS clamp()",
    "short": "clamp() es una función CSS que devuelve un valor acotado entre un mínimo y un máximo, basándose en un valor preferido que escala. Es la piedra angular de la tipografía fluida moderna.",
    "body": [
      {
        "title": "¿Qué es CSS clamp()?",
        "content": "<p><code>clamp()</code> es una función CSS que acepta tres parámetros: un valor mínimo, un valor preferido (generalmente en unidades relativas como <code>vw</code>) y un valor máximo. El navegador devuelve el valor preferido mientras esté entre el mínimo y el máximo, de lo contrario retorna el límite correspondiente.</p><p>Esta función resuelve un problema histórico: antes necesitabas media queries para cambiar tamaños de fuente, espaciados o anchos según el viewport. Con <code>clamp()</code>, definís un rango fluido en una sola línea, sin breakpoints.</p><p>Es fundamental para <strong>tipografía fluida</strong>: textos que crecen y achican suavemente con el ancho de pantalla, sin saltos bruscos. Mejora legibilidad en móviles y escritorio sin código repetitivo.</p>"
      },
      {
        "title": "¿Cómo funciona clamp()?",
        "content": "<p>La sintaxis es <code>clamp(MIN, VAL, MAX)</code>. El navegador evalúa <code>VAL</code> (el valor preferido) y lo compara con <code>MIN</code> y <code>MAX</code>:</p><ul><li>Si <code>VAL < MIN</code>, devuelve <code>MIN</code></li><li>Si <code>VAL > MAX</code>, devuelve <code>MAX</code></li><li>Si <code>MIN ≤ VAL ≤ MAX</code>, devuelve <code>VAL</code></li></ul><p>Ejemplo clásico de tipografía fluida: <code>font-size: clamp(1rem, 2vw + 0.5rem, 3rem);</code>. Acá el tamaño mínimo es 16px (1rem), el preferido escala con el viewport (2vw + 0.5rem), y el máximo es 48px (3rem). En pantallas chicas usa 1rem, en grandes no supera 3rem, y en medio escala proporcionalmente.</p><p>Podés usar cualquier unidad CSS: <code>px</code>, <code>rem</code>, <code>em</code>, <code>vw</code>, <code>%</code>, o combinarlas con <code>calc()</code>. La magia está en el valor del medio: ahí metés la fórmula que hace que escale.</p>"
      },
      {
        "title": "¿Cuándo usar clamp()?",
        "content": "<p>Usá <code>clamp()</code> cuando querés que algo escale suavemente entre dos extremos:</p><ul><li><strong>Tipografía fluida</strong>: títulos y párrafos que se adaptan al viewport sin media queries. Ej: <code>h1 { font-size: clamp(2rem, 5vw, 4rem); }</code></li><li><strong>Espaciado responsive</strong>: márgenes y paddings que crecen con la pantalla. Ej: <code>padding: clamp(1rem, 3vw, 5rem);</code></li><li><strong>Anchos fluidos</strong>: contenedores que escalan entre mínimo y máximo sin colapsar. Ej: <code>max-width: clamp(320px, 90vw, 1200px);</code></li><li><strong>Iconos y elementos UI</strong>: botones y tarjetas que mantienen proporciones en todos los tamaños.</li></ul><p>Es especialmente útil cuando diseñás sistemas que deben verse bien en móvil, tablet y desktop sin escribir decenas de media queries. Simplifica el CSS y mejora el mantenimiento.</p>"
      },
      {
        "title": "Errores comunes y mejores prácticas",
        "content": "<p><strong>Error #1:</strong> Usar valores preferidos sin unidades viewport (<code>vw</code>, <code>vh</code>). Si ponés <code>clamp(1rem, 2rem, 3rem)</code>, el valor del medio nunca escala y es inútil. El valor preferido debe tener una unidad relativa.</p><p><strong>Error #2:</strong> Rangos demasiado amplios. <code>clamp(0.5rem, 10vw, 10rem)</code> puede generar saltos visuales bruscos. Mantené rangos razonables (2-3x entre min y max).</p><p><strong>Mejor práctica:</strong> Combinar con custom properties para centralizar valores. Ej: <code>--font-fluid: clamp(1rem, 2vw + 0.5rem, 2.5rem);</code> y después reusar en todo el CSS. Facilita ajustes globales.</p><p><strong>Accesibilidad:</strong> No uses <code>clamp()</code> para reducir texto por debajo de 16px (1rem) en el mínimo. Los usuarios con dificultades visuales necesitan poder hacer zoom sin que el texto desaparezca.</p>"
      }
    ],
    "examples": [
      "font-size: clamp(1rem, 2.5vw, 3rem); — Tipografía fluida para títulos",
      "padding: clamp(1rem, 5vw, 3rem); — Espaciado responsive en secciones",
      "width: clamp(300px, 80vw, 1200px); — Contenedor fluido",
      "gap: clamp(0.5rem, 2vw, 2rem); — Espaciado en grid o flexbox",
      "font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1.125rem); — Texto de párrafo adaptativo"
    ],
    "related": [
      "generador-css-clamp",
      "generador-de-gradientes-css"
    ],
    "faq": [
      {
        "q": "¿CSS clamp() funciona en todos los navegadores?",
        "a": "Sí, clamp() tiene soporte universal desde 2020: Chrome 79+, Firefox 75+, Safari 13.1+, Edge 79+. No necesitás prefijos ni fallbacks para navegadores modernos. Si debés soportar IE11, usá PostCSS con autoprefixer o fallbacks manuales con media queries."
      },
      {
        "q": "¿Cuál es la diferencia entre clamp(), min() y max()?",
        "a": "min() devuelve el menor de los valores, max() el mayor, y clamp() acota entre dos límites. Ejemplo: min(2rem, 5vw) siempre devuelve el más chico de esos dos. clamp(1rem, 5vw, 3rem) devuelve 5vw solo si está entre 1rem y 3rem, sino devuelve el límite."
      },
      {
        "q": "¿Cómo calculo los valores correctos para clamp()?",
        "a": "Usá un generador de clamp() que te calcule la fórmula automáticamente basándose en tamaños mínimos y máximos deseados para viewports específicos. La fórmula manual es compleja: (MAX - MIN) / (VP_MAX - VP_MIN) * 100vw + valor de ajuste. El generador de Genfy hace esto por vos."
      }
    ]
  },
  "en": {
    "pageTitle": "CSS clamp() — Glossary | Genfy",
    "metaDesc": "CSS clamp() returns a value between min and max based on your preference. The foundation of fluid typography that scales perfectly across all devices.",
    "h1": "CSS clamp()",
    "short": "clamp() is a CSS function that returns a value bounded between a minimum and maximum, based on a preferred value that scales. It's the cornerstone of modern fluid typography.",
    "body": [
      {
        "title": "What is CSS clamp()?",
        "content": "<p><code>clamp()</code> is a CSS function that accepts three parameters: a minimum value, a preferred value (usually in relative units like <code>vw</code>), and a maximum value. The browser returns the preferred value as long as it's between min and max, otherwise it returns the corresponding limit.</p><p>This function solves a historical problem: previously you needed media queries to change font sizes, spacing, or widths based on viewport. With <code>clamp()</code>, you define a fluid range in a single line, without breakpoints.</p><p>It's fundamental for <strong>fluid typography</strong>: text that grows and shrinks smoothly with screen width, without abrupt jumps. It improves readability on mobile and desktop without repetitive code.</p>"
      },
      {
        "title": "How does clamp() work?",
        "content": "<p>The syntax is <code>clamp(MIN, VAL, MAX)</code>. The browser evaluates <code>VAL</code> (the preferred value) and compares it with <code>MIN</code> and <code>MAX</code>:</p><ul><li>If <code>VAL < MIN</code>, it returns <code>MIN</code></li><li>If <code>VAL > MAX</code>, it returns <code>MAX</code></li><li>If <code>MIN ≤ VAL ≤ MAX</code>, it returns <code>VAL</code></li></ul><p>Classic fluid typography example: <code>font-size: clamp(1rem, 2vw + 0.5rem, 3rem);</code>. Here the minimum size is 16px (1rem), the preferred scales with viewport (2vw + 0.5rem), and the maximum is 48px (3rem). On small screens it uses 1rem, on large screens it never exceeds 3rem, and in between it scales proportionally.</p><p>You can use any CSS unit: <code>px</code>, <code>rem</code>, <code>em</code>, <code>vw</code>, <code>%</code>, or combine them with <code>calc()</code>. The magic is in the middle value: that's where you put the formula that makes it scale.</p>"
      },
      {
        "title": "When to use clamp()?",
        "content": "<p>Use <code>clamp()</code> when you want something to scale smoothly between two extremes:</p><ul><li><strong>Fluid typography</strong>: headings and paragraphs that adapt to viewport without media queries. Ex: <code>h1 { font-size: clamp(2rem, 5vw, 4rem); }</code></li><li><strong>Responsive spacing</strong>: margins and paddings that grow with screen. Ex: <code>padding: clamp(1rem, 3vw, 5rem);</code></li><li><strong>Fluid widths</strong>: containers that scale between min and max without collapsing. Ex: <code>max-width: clamp(320px, 90vw, 1200px);</code></li><li><strong>Icons and UI elements</strong>: buttons and cards that maintain proportions across all sizes.</li></ul><p>It's especially useful when designing systems that must look good on mobile, tablet and desktop without writing dozens of media queries. It simplifies CSS and improves maintenance.</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "content": "<p><strong>Mistake #1:</strong> Using preferred values without viewport units (<code>vw</code>, <code>vh</code>). If you write <code>clamp(1rem, 2rem, 3rem)</code>, the middle value never scales and is useless. The preferred value must have a relative unit.</p><p><strong>Mistake #2:</strong> Ranges too wide. <code>clamp(0.5rem, 10vw, 10rem)</code> can generate abrupt visual jumps. Keep ranges reasonable (2-3x between min and max).</p><p><strong>Best practice:</strong> Combine with custom properties to centralize values. Ex: <code>--font-fluid: clamp(1rem, 2vw + 0.5rem, 2.5rem);</code> then reuse throughout CSS. Makes global adjustments easier.</p><p><strong>Accessibility:</strong> Don't use <code>clamp()</code> to reduce text below 16px (1rem) at minimum. Users with visual difficulties need to be able to zoom without text disappearing.</p>"
      }
    ],
    "examples": [
      "font-size: clamp(1rem, 2.5vw, 3rem); — Fluid typography for headings",
      "padding: clamp(1rem, 5vw, 3rem); — Responsive spacing in sections",
      "width: clamp(300px, 80vw, 1200px); — Fluid container",
      "gap: clamp(0.5rem, 2vw, 2rem); — Spacing in grid or flexbox",
      "font-size: clamp(0.875rem, 0.8rem + 0.3vw, 1.125rem); — Adaptive paragraph text"
    ],
    "related": [
      "css-clamp-generator",
      "css-gradient-generator"
    ],
    "faq": [
      {
        "q": "Does CSS clamp() work in all browsers?",
        "a": "Yes, clamp() has universal support since 2020: Chrome 79+, Firefox 75+, Safari 13.1+, Edge 79+. You don't need prefixes or fallbacks for modern browsers. If you must support IE11, use PostCSS with autoprefixer or manual fallbacks with media queries."
      },
      {
        "q": "What's the difference between clamp(), min() and max()?",
        "a": "min() returns the smallest of the values, max() the largest, and clamp() bounds between two limits. Example: min(2rem, 5vw) always returns the smaller of those two. clamp(1rem, 5vw, 3rem) returns 5vw only if it's between 1rem and 3rem, otherwise returns the limit."
      },
      {
        "q": "How do I calculate the correct values for clamp()?",
        "a": "Use a clamp() generator that automatically calculates the formula based on desired min and max sizes for specific viewports. The manual formula is complex: (MAX - MIN) / (VP_MAX - VP_MIN) * 100vw + adjustment value. Genfy's generator does this for you."
      }
    ]
  }
};
