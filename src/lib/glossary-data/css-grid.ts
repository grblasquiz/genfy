import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "css-grid",
    "en": "css-grid"
  },
  "emoji": "🟦",
  "category": "design",
  "es": {
    "pageTitle": "CSS Grid — Glosario | Genfy",
    "metaDesc": "CSS Grid es un sistema de layout 2D con filas, columnas y áreas nombradas. Permite maquetaciones complejas imposibles con flexbox, desde dashboards hasta galerías.",
    "h1": "CSS Grid",
    "short": "CSS Grid es un sistema de layout bidimensional que permite dividir una página en filas y columnas, crear áreas nombradas y alinear elementos de forma precisa. Es el estándar moderno para layouts complejos.",
    "body": [
      {
        "title": "¿Qué es CSS Grid?",
        "content": "<p>CSS Grid es un módulo de CSS que define un sistema de layout basado en grillas (filas y columnas). A diferencia de flexbox que es unidimensional (fila o columna), Grid es <strong>bidimensional</strong>: controlás ambos ejes simultáneamente.</p><p>Con Grid podés dividir un contenedor en áreas rectangulares usando <code>grid-template-columns</code>, <code>grid-template-rows</code> y <code>grid-template-areas</code>. Los elementos hijos se colocan en esas áreas sin necesidad de divs anidados o hacks de float.</p><p>Es la solución definitiva para layouts complejos: dashboards, galerías de imágenes asimétricas, páginas con sidebar y múltiples secciones. Lo que antes requería frameworks CSS completos ahora es nativo y mucho más potente.</p>"
      },
      {
        "title": "¿Cómo funciona CSS Grid?",
        "content": "<p>Activás Grid con <code>display: grid;</code> en un contenedor. Después definís las columnas y filas con <code>grid-template-columns</code> y <code>grid-template-rows</code>. Ejemplo: <code>grid-template-columns: 200px 1fr 1fr;</code> crea tres columnas: la primera fija en 200px, las otras dos se reparten el espacio disponible.</p><p>La unidad <code>fr</code> (fracción) es clave: representa una porción del espacio libre. <code>1fr 2fr</code> significa que la segunda columna ocupa el doble que la primera.</p><p>Podés crear áreas nombradas con <code>grid-template-areas</code>:</p><code>grid-template-areas:<br>&nbsp;&nbsp;'header header header'<br>&nbsp;&nbsp;'sidebar main main'<br>&nbsp;&nbsp;'footer footer footer';</code><p>Y después asignar elementos a esas áreas con <code>grid-area: header;</code>. Es visual, legible y fácil de mantener.</p><p>Para espaciado entre elementos usás <code>gap</code> (antes <code>grid-gap</code>): <code>gap: 1rem;</code> agrega 1rem entre todas las celdas sin afectar los bordes del contenedor.</p>"
      },
      {
        "title": "¿Cuándo usar CSS Grid?",
        "content": "<p>Usá Grid cuando:</p><ul><li><strong>Necesitás control 2D</strong>: layouts con filas y columnas simultáneas. Ej: un dashboard con header, sidebar, contenido principal y footer.</li><li><strong>Diseños asimétricos</strong>: galerías donde algunas imágenes ocupan 2 columnas o 2 filas (tipo Pinterest o Masonry).</li><li><strong>Áreas nombradas</strong>: cuando la semántica del layout es importante. Leer <code>grid-area: sidebar;</code> es más claro que <code>grid-column: 1 / 2; grid-row: 2 / 3;</code></li><li><strong>Responsive complejos</strong>: cambiar completamente la estructura del layout en media queries sin tocar el HTML. Ej: en mobile el sidebar va abajo, en desktop a la izquierda.</li></ul><p>No uses Grid para todo: para componentes de una sola dimensión (navbar horizontal, lista de botones) flexbox es más simple y apropiado. Grid y flexbox se complementan: Grid para la estructura de página, flexbox para componentes internos.</p>"
      },
      {
        "title": "Propiedades clave y mejores prácticas",
        "content": "<p><strong>Autofill y autofit:</strong> <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</code> crea columnas responsive automáticamente. Las columnas nunca bajan de 250px y se reparten el espacio. Es Grid responsive sin media queries.</p><p><strong>Alineación:</strong> <code>justify-items</code> alinea horizontalmente, <code>align-items</code> verticalmente, ambas dentro de las celdas. <code>justify-content</code> y <code>align-content</code> alinean toda la grilla dentro del contenedor.</p><p><strong>Implicit grid:</strong> Si ponés más elementos que celdas definidas, Grid crea filas implícitas automáticamente. Controlá su tamaño con <code>grid-auto-rows: 200px;</code></p><p><strong>Mejor práctica:</strong> Usá <code>minmax()</code> para rangos flexibles: <code>grid-template-columns: minmax(200px, 300px) 1fr;</code> hace que la primera columna nunca baje de 200px ni supere 300px.</p><p><strong>Accesibilidad:</strong> El orden visual en Grid puede no coincidir con el orden del DOM. Asegurate que el orden de tabulación (tab key) siga teniendo sentido. Usá Grid para layout, no para reordenar contenido semántico.</p>"
      }
    ],
    "examples": [
      "display: grid; grid-template-columns: 1fr 3fr; — Layout sidebar + contenido",
      "grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); — Columnas responsive automáticas",
      "grid-template-areas: 'header header' 'sidebar main' 'footer footer'; — Áreas nombradas",
      "gap: 2rem; — Espaciado uniforme entre celdas",
      "grid-column: 1 / 3; — Elemento que ocupa 2 columnas"
    ],
    "related": [
      "generador-css-grid",
      "generador-css-flexbox"
    ],
    "faq": [
      {
        "q": "¿CSS Grid reemplaza a Flexbox?",
        "a": "No, se complementan. Grid es para layouts bidimensionales (página completa, dashboards), Flexbox para componentes unidimensionales (navbar, fila de botones). Muchas veces usás Grid para la estructura de página y Flexbox dentro de las secciones. Ambos tienen soporte completo en navegadores modernos."
      },
      {
        "q": "¿Cómo hago un layout de 3 columnas responsive con Grid?",
        "a": "Usá repeat() con auto-fit o auto-fill: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));. Esto crea columnas que nunca bajan de 300px y se ajustan automáticamente. En pantallas chicas se apilan en 1 columna, en grandes se expanden hasta 3 o más según el espacio disponible, sin media queries."
      },
      {
        "q": "¿Qué es la diferencia entre grid-template y grid-auto?",
        "a": "grid-template-* define la grilla explícita (filas/columnas que declarás). grid-auto-* controla la grilla implícita (filas/columnas que Grid crea automáticamente si agregás más elementos). Ej: si definís 2 filas pero tenés 10 elementos, Grid crea 8 filas implícitas. Con grid-auto-rows: 150px; controlás su altura."
      }
    ]
  },
  "en": {
    "pageTitle": "CSS Grid — Glossary | Genfy",
    "metaDesc": "CSS Grid is a 2D layout system with rows, columns and named areas. It enables complex layouts impossible with flexbox, from dashboards to galleries.",
    "h1": "CSS Grid",
    "short": "CSS Grid is a two-dimensional layout system that allows dividing a page into rows and columns, creating named areas and aligning elements precisely. It's the modern standard for complex layouts.",
    "body": [
      {
        "title": "What is CSS Grid?",
        "content": "<p>CSS Grid is a CSS module that defines a grid-based layout system (rows and columns). Unlike flexbox which is one-dimensional (row or column), Grid is <strong>two-dimensional</strong>: you control both axes simultaneously.</p><p>With Grid you can divide a container into rectangular areas using <code>grid-template-columns</code>, <code>grid-template-rows</code> and <code>grid-template-areas</code>. Child elements are placed in those areas without needing nested divs or float hacks.</p><p>It's the definitive solution for complex layouts: dashboards, asymmetric image galleries, pages with sidebar and multiple sections. What previously required complete CSS frameworks is now native and much more powerful.</p>"
      },
      {
        "title": "How does CSS Grid work?",
        "content": "<p>You activate Grid with <code>display: grid;</code> on a container. Then define columns and rows with <code>grid-template-columns</code> and <code>grid-template-rows</code>. Example: <code>grid-template-columns: 200px 1fr 1fr;</code> creates three columns: the first fixed at 200px, the other two share available space.</p><p>The <code>fr</code> unit (fraction) is key: it represents a portion of free space. <code>1fr 2fr</code> means the second column takes twice as much as the first.</p><p>You can create named areas with <code>grid-template-areas</code>:</p><code>grid-template-areas:<br>&nbsp;&nbsp;'header header header'<br>&nbsp;&nbsp;'sidebar main main'<br>&nbsp;&nbsp;'footer footer footer';</code><p>Then assign elements to those areas with <code>grid-area: header;</code>. It's visual, readable and easy to maintain.</p><p>For spacing between elements use <code>gap</code> (formerly <code>grid-gap</code>): <code>gap: 1rem;</code> adds 1rem between all cells without affecting container edges.</p>"
      },
      {
        "title": "When to use CSS Grid?",
        "content": "<p>Use Grid when:</p><ul><li><strong>You need 2D control</strong>: layouts with simultaneous rows and columns. Ex: a dashboard with header, sidebar, main content and footer.</li><li><strong>Asymmetric designs</strong>: galleries where some images span 2 columns or 2 rows (Pinterest or Masonry style).</li><li><strong>Named areas</strong>: when layout semantics matter. Reading <code>grid-area: sidebar;</code> is clearer than <code>grid-column: 1 / 2; grid-row: 2 / 3;</code></li><li><strong>Complex responsiveness</strong>: completely changing layout structure in media queries without touching HTML. Ex: on mobile sidebar goes bottom, on desktop left.</li></ul><p>Don't use Grid for everything: for one-dimensional components (horizontal navbar, button list) flexbox is simpler and more appropriate. Grid and flexbox complement each other: Grid for page structure, flexbox for internal components.</p>"
      },
      {
        "title": "Key properties and best practices",
        "content": "<p><strong>Autofill and autofit:</strong> <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</code> creates responsive columns automatically. Columns never go below 250px and share space. It's responsive Grid without media queries.</p><p><strong>Alignment:</strong> <code>justify-items</code> aligns horizontally, <code>align-items</code> vertically, both within cells. <code>justify-content</code> and <code>align-content</code> align the entire grid within the container.</p><p><strong>Implicit grid:</strong> If you place more elements than defined cells, Grid creates implicit rows automatically. Control their size with <code>grid-auto-rows: 200px;</code></p><p><strong>Best practice:</strong> Use <code>minmax()</code> for flexible ranges: <code>grid-template-columns: minmax(200px, 300px) 1fr;</code> makes the first column never go below 200px or exceed 300px.</p><p><strong>Accessibility:</strong> Visual order in Grid may not match DOM order. Ensure tab order still makes sense. Use Grid for layout, not for reordering semantic content.</p>"
      }
    ],
    "examples": [
      "display: grid; grid-template-columns: 1fr 3fr; — Sidebar + content layout",
      "grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); — Auto responsive columns",
      "grid-template-areas: 'header header' 'sidebar main' 'footer footer'; — Named areas",
      "gap: 2rem; — Uniform spacing between cells",
      "grid-column: 1 / 3; — Element spanning 2 columns"
    ],
    "related": [
      "css-grid-generator",
      "css-flexbox-generator"
    ],
    "faq": [
      {
        "q": "Does CSS Grid replace Flexbox?",
        "a": "No, they complement each other. Grid is for two-dimensional layouts (full page, dashboards), Flexbox for one-dimensional components (navbar, button row). Often you use Grid for page structure and Flexbox within sections. Both have complete support in modern browsers."
      },
      {
        "q": "How do I make a responsive 3-column layout with Grid?",
        "a": "Use repeat() with auto-fit or auto-fill: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));. This creates columns that never go below 300px and adjust automatically. On small screens they stack in 1 column, on large screens they expand to 3 or more depending on available space, without media queries."
      },
      {
        "q": "What's the difference between grid-template and grid-auto?",
        "a": "grid-template-* defines the explicit grid (rows/columns you declare). grid-auto-* controls the implicit grid (rows/columns Grid creates automatically if you add more elements). Ex: if you define 2 rows but have 10 elements, Grid creates 8 implicit rows. With grid-auto-rows: 150px; you control their height."
      }
    ]
  }
};
