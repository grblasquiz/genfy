import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "ascii-art",
    "en": "ascii-art"
  },
  "emoji": "🎭",
  "category": "general",
  "es": {
    "pageTitle": "ASCII Art — Glosario | Genfy",
    "metaDesc": "ASCII Art: arte visual creado con caracteres ASCII. Descubrí su historia desde impresoras de los 70s hasta su uso moderno en CLI, banners y cultura geek.",
    "h1": "ASCII Art",
    "short": "ASCII Art es la técnica de crear imágenes visuales utilizando únicamente los 95 caracteres imprimibles del estándar ASCII (letras, números, símbolos). Surgió por limitaciones técnicas de las impresoras de los años 70 y hoy es parte de la estética retro de la cultura hacker y desarrollador.",
    "body": [
      {
        "title": "¿Qué es ASCII Art?",
        "content": "<p>ASCII Art es una forma de arte digital que representa imágenes usando solo caracteres de texto. A diferencia de gráficos bitmap o vectoriales, cada 'píxel' es una letra, número o símbolo del conjunto ASCII estándar (códigos 32-126).</p><p>Los caracteres se eligen por su <strong>densidad visual</strong>: el espacio y el punto (.) son claros, mientras que @ y # son oscuros. Combinándolos estratégicamente, se crean sombreados, contornos y profundidad. Por ejemplo, una cara simple: <code>:)</code> o más compleja: <code>¯\\_(ツ)_/¯</code>.</p><p>Nacido de la necesidad en sistemas sin gráficos (terminales de texto, impresoras matriciales), el ASCII Art se convirtió en expresión artística propia. Desde logos de aplicaciones CLI hasta firmas elaboradas en BBSs (Bulletin Board Systems) de los 80s, era la única forma de 'dibujar' en computadoras antiguas.</p><p>Hoy es parte de la identidad visual de herramientas de línea de comandos, archivos README de proyectos open source, y memes de internet. Es minimalista, nostálgico y funciona en cualquier contexto de texto plano.</p>"
      },
      {
        "title": "¿Cómo se crea ASCII Art?",
        "content": "<p>Existen dos enfoques principales: <strong>manual</strong> (dibujando carácter por carácter) y <strong>automático</strong> (conversión desde imagen). El arte manual requiere planificar la composición en una grilla de caracteres, eligiendo símbolos por su forma y densidad.</p><p>Caracteres comunes por densidad: <code>@#%*+=-:. </code> (de oscuro a claro). Para líneas se usan <code>|_-/\\</code>, para esquinas <code>┌┐└┘</code> (caracteres box-drawing). Los artistas expertos usan fuentes monoespaciadas (Courier, Consolas) para mantener alineación perfecta.</p><p>Los <strong>generadores automáticos</strong> convierten imágenes a ASCII analizando brillo de píxeles. Algoritmos mapean regiones oscuras a caracteres densos (@, #) y claras a espacios o puntos. Ajustando contraste, resolución (caracteres por línea) y paleta de caracteres, se logran resultados sorprendentes.</p><p>Existen variantes: <strong>ASCII Art tradicional</strong> (solo ASCII puro), <strong>ANSI Art</strong> (añade colores mediante códigos ANSI), y <strong>Unicode Art</strong> (usa símbolos extendidos como ▓▒░ para mejor detalle). Herramientas como Figlet generan texto estilizado, mientras que jp2a o ascii-image-converter procesan fotos.</p>"
      },
      {
        "title": "¿Cuándo usar ASCII Art?",
        "content": "<p>ASCII Art brilla en contextos de <strong>terminal y línea de comandos</strong>. Muchas aplicaciones CLI muestran su logo en ASCII al iniciar (cowsay, neofetch, figlet). Es una forma amigable de personalizar scripts y herramientas sin depender de gráficos.</p><p>En <strong>documentación técnica</strong>, diagramas ASCII explican arquitecturas, flujos de datos o estructuras. Son editables en texto plano, versionables en Git, y legibles en cualquier editor. Herramientas como Mermaid o PlantUML generan ASCII desde código.</p><p>Para <strong>firmas de email</strong> o pies de archivo, el ASCII Art añade identidad visual sin adjuntos. En <strong>easter eggs</strong> de código fuente, comentarios decorativos o mensajes de error creativos, humaniza la experiencia de desarrollo.</p><p>La escena <strong>demoscene</strong> y arte generativo usa ASCII Art en animaciones de terminal, visualizaciones de música (cava, cmatrix), y competencias de arte textual. Es retro, accesible (funciona en cualquier dispositivo) y tiene estética única.</p>"
      },
      {
        "title": "Limitaciones y herramientas recomendadas",
        "content": "<p>El ASCII Art tiene <strong>resolución limitada</strong>: un carácter ocupa mucho más espacio que un píxel, haciendo imposible detalles finos. Imágenes complejas resultan enormes (cientos de líneas) o pierden detalle al reducirse.</p><p>El <strong>soporte de fuentes</strong> varía: lo que se ve perfecto en una terminal puede romperse en otra si las proporciones de caracteres difieren. Siempre usá fuentes monoespaciadas y probá en múltiples contextos. Caracteres especiales (box-drawing, bloques) requieren UTF-8 y pueden no funcionar en sistemas viejos.</p><p>Herramientas útiles: <strong>Figlet</strong> (texto estilizado), <strong>jp2a</strong> (fotos a ASCII), <strong>cowsay</strong> (diálogos), <strong>asciinema</strong> (grabar sesiones de terminal), <strong>boxes</strong> (marcos decorativos). Online: ascii-art-generator.org, patorjk.com/software/taag (Text to ASCII).</p><p>Para proyectos serios, preferí formatos vectoriales o imágenes reales. Pero para diversión, cultura hacker, o contextos donde solo hay texto, ASCII Art es insuperable.</p>"
      }
    ],
    "examples": [
      "Cara simple: :-) o emoticón shrug: ¯\\_(ツ)_/¯",
      "Logo estilo Figlet: texto grande decorativo (ver Figlet)",
      "Vaca de cowsay: < Hola mundo! > con dibujo de vaca ASCII",
      "Box con texto:\n┌─────────────┐\n│  Genfy CLI  │\n└─────────────┘",
      "Gradiente de densidad: @#%*+=-:. (oscuro a claro)"
    ],
    "related": [
      "generador-ascii-art",
      "lenguaje-leet"
    ],
    "faq": [
      {
        "q": "¿Por qué ASCII Art sigue siendo popular?",
        "a": "Porque funciona universalmente: cualquier terminal, editor o navegador puede mostrarlo sin plugins. Es parte de la cultura hacker y desarrollador, evoca nostalgia de los BBSs y primeras computadoras, y añade personalidad a herramientas CLI sin complejidad técnica."
      },
      {
        "q": "¿Qué diferencia hay entre ASCII Art y ANSI Art?",
        "a": "ASCII Art usa solo los 95 caracteres imprimibles estándar (sin colores). ANSI Art añade códigos de escape ANSI para colores y estilos, común en BBSs de los 80s-90s. ANSI permite arte más detallado pero requiere soporte de terminal compatible."
      },
      {
        "q": "¿Puedo usar ASCII Art comercialmente?",
        "a": "Sí, el ASCII Art que creás es tuyo. Pero si usás generadores automáticos o fuentes ASCII específicas, verificá la licencia. Caracteres ASCII estándar son dominio público, pero diseños complejos (logos de Figlet, arte de terceros) pueden tener copyright."
      }
    ]
  },
  "en": {
    "pageTitle": "ASCII Art — Glossary | Genfy",
    "metaDesc": "ASCII Art: visual art created with ASCII characters. Discover its history from 70s printers to modern use in CLI, banners, and geek culture.",
    "h1": "ASCII Art",
    "short": "ASCII Art is the technique of creating visual images using only the 95 printable characters of the ASCII standard (letters, numbers, symbols). It emerged from technical limitations of 1970s printers and today is part of the retro aesthetic of hacker and developer culture.",
    "body": [
      {
        "title": "What is ASCII Art?",
        "content": "<p>ASCII Art is a form of digital art that represents images using only text characters. Unlike bitmap or vector graphics, each 'pixel' is a letter, number, or symbol from the standard ASCII set (codes 32-126).</p><p>Characters are chosen by their <strong>visual density</strong>: space and period (.) are light, while @ and # are dark. By strategically combining them, shading, contours, and depth are created. For example, a simple face: <code>:)</code> or more complex: <code>¯\\_(ツ)_/¯</code>.</p><p>Born from necessity in systems without graphics (text terminals, dot-matrix printers), ASCII Art became its own artistic expression. From CLI application logos to elaborate signatures in 80s BBSs (Bulletin Board Systems), it was the only way to 'draw' on old computers.</p><p>Today it's part of the visual identity of command-line tools, README files in open source projects, and internet memes. It's minimalist, nostalgic, and works in any plain text context.</p>"
      },
      {
        "title": "How is ASCII Art created?",
        "content": "<p>Two main approaches exist: <strong>manual</strong> (drawing character by character) and <strong>automatic</strong> (conversion from image). Manual art requires planning composition on a character grid, choosing symbols by shape and density.</p><p>Common characters by density: <code>@#%*+=-:. </code> (dark to light). For lines: <code>|_-/\\</code>, for corners: <code>┌┐└┘</code> (box-drawing characters). Expert artists use monospaced fonts (Courier, Consolas) to maintain perfect alignment.</p><p><strong>Automatic generators</strong> convert images to ASCII by analyzing pixel brightness. Algorithms map dark regions to dense characters (@, #) and light ones to spaces or dots. By adjusting contrast, resolution (characters per line), and character palette, impressive results are achieved.</p><p>Variants exist: <strong>traditional ASCII Art</strong> (pure ASCII only), <strong>ANSI Art</strong> (adds colors via ANSI codes), and <strong>Unicode Art</strong> (uses extended symbols like ▓▒░ for better detail). Tools like Figlet generate stylized text, while jp2a or ascii-image-converter process photos.</p>"
      },
      {
        "title": "When to use ASCII Art?",
        "content": "<p>ASCII Art shines in <strong>terminal and command-line</strong> contexts. Many CLI applications display their logo in ASCII on startup (cowsay, neofetch, figlet). It's a friendly way to personalize scripts and tools without depending on graphics.</p><p>In <strong>technical documentation</strong>, ASCII diagrams explain architectures, data flows, or structures. They're editable in plain text, versionable in Git, and readable in any editor. Tools like Mermaid or PlantUML generate ASCII from code.</p><p>For <strong>email signatures</strong> or file footers, ASCII Art adds visual identity without attachments. In <strong>easter eggs</strong> of source code, decorative comments, or creative error messages, it humanizes the development experience.</p><p>The <strong>demoscene</strong> and generative art use ASCII Art in terminal animations, music visualizations (cava, cmatrix), and text art competitions. It's retro, accessible (works on any device), and has unique aesthetics.</p>"
      },
      {
        "title": "Limitations and recommended tools",
        "content": "<p>ASCII Art has <strong>limited resolution</strong>: a character occupies much more space than a pixel, making fine details impossible. Complex images become huge (hundreds of lines) or lose detail when reduced.</p><p><strong>Font support</strong> varies: what looks perfect in one terminal may break in another if character proportions differ. Always use monospaced fonts and test in multiple contexts. Special characters (box-drawing, blocks) require UTF-8 and may not work on old systems.</p><p>Useful tools: <strong>Figlet</strong> (stylized text), <strong>jp2a</strong> (photos to ASCII), <strong>cowsay</strong> (dialogues), <strong>asciinema</strong> (record terminal sessions), <strong>boxes</strong> (decorative frames). Online: ascii-art-generator.org, patorjk.com/software/taag (Text to ASCII).</p><p>For serious projects, prefer vector formats or real images. But for fun, hacker culture, or contexts where only text exists, ASCII Art is unbeatable.</p>"
      }
    ],
    "examples": [
      "Simple face: :-) or shrug emoticon: ¯\\_(ツ)_/¯",
      "Figlet-style logo: large decorative text (see Figlet)",
      "Cowsay cow: < Hello world! > with ASCII cow drawing",
      "Box with text:\n┌─────────────┐\n│  Genfy CLI  │\n└─────────────┘",
      "Density gradient: @#%*+=-:. (dark to light)"
    ],
    "related": [
      "ascii-art-generator",
      "leet-speak-generator"
    ],
    "faq": [
      {
        "q": "Why is ASCII Art still popular?",
        "a": "Because it works universally: any terminal, editor, or browser can display it without plugins. It's part of hacker and developer culture, evokes nostalgia for BBSs and early computers, and adds personality to CLI tools without technical complexity."
      },
      {
        "q": "What's the difference between ASCII Art and ANSI Art?",
        "a": "ASCII Art uses only the 95 standard printable characters (no colors). ANSI Art adds ANSI escape codes for colors and styles, common in 80s-90s BBSs. ANSI allows more detailed art but requires compatible terminal support."
      },
      {
        "q": "Can I use ASCII Art commercially?",
        "a": "Yes, ASCII Art you create is yours. But if using automatic generators or specific ASCII fonts, check the license. Standard ASCII characters are public domain, but complex designs (Figlet logos, third-party art) may have copyright."
      }
    ]
  }
};
