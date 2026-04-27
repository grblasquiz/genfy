import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "hex-color",
    "en": "hex-color"
  },
  "emoji": "🎨",
  "category": "design",
  "es": {
    "pageTitle": "Color hexadecimal — Glosario | Genfy",
    "metaDesc": "Color hexadecimal (#RRGGBB) es la notación estándar para definir colores en web y diseño digital. Aprende cómo funciona y cuándo usar RGB, HSL o hex.",
    "h1": "Color hexadecimal",
    "short": "El formato hexadecimal (#RRGGBB) es la notación más común para especificar colores en CSS, HTML y diseño digital. Cada color se representa con 6 dígitos hexadecimales (base 16: 0-9, A-F), divididos en tres pares que codifican la intensidad de rojo, verde y azul (RGB) en valores de 0 (00) a 255 (FF).",
    "body": [
      {
        "title": "¿Qué es un color hexadecimal?",
        "content": "<p>Un color hexadecimal es una representación numérica de un color RGB en <strong>base 16</strong> (hexadecimal), precedida por el símbolo <code>#</code>. La estructura es <code>#RRGGBB</code>: los primeros dos dígitos son el canal rojo (Red), los siguientes dos el verde (Green), y los últimos dos el azul (Blue). Cada par va de <code>00</code> (0 en decimal, ausencia de ese color) a <code>FF</code> (255 en decimal, intensidad máxima).</p><p>Ejemplo: <code>#FF0000</code> es rojo puro (rojo máximo, verde y azul en cero), <code>#00FF00</code> es verde puro, <code>#0000FF</code> es azul puro, <code>#FFFFFF</code> es blanco (todos los canales al máximo), <code>#000000</code> es negro (todos en cero). Los colores intermedios combinan intensidades: <code>#FF5733</code> es un naranja rojizo (rojo alto, verde medio, azul bajo).</p><p>Existe también la <strong>notación corta</strong> de 3 dígitos (<code>#RGB</code>) cuando cada par es idéntico: <code>#FFF</code> equivale a <code>#FFFFFF</code>, <code>#F00</code> a <code>#FF0000</code>. Es común en CSS para colores básicos. Algunos formatos extienden hex con transparencia (alpha): <code>#RRGGBBAA</code>, donde <code>AA</code> es opacidad de <code>00</code> (totalmente transparente) a <code>FF</code> (totalmente opaco). Ejemplo: <code>#FF000080</code> es rojo con 50% de opacidad.</p>"
      },
      {
        "title": "¿Cómo funciona la notación hexadecimal?",
        "content": "<p>El sistema hexadecimal (base 16) usa dígitos 0-9 y letras A-F (mayúsculas o minúsculas) para representar valores 0-15. En colores, cada <strong>par hex</strong> representa un byte (8 bits), permitiendo 256 valores (0-255) por canal. Así, <code>#RRGGBB</code> cubre 16,777,216 colores (256³), el espectro completo de sRGB estándar.</p><p>Para convertir hex a decimal: <code>FF</code> = 15×16¹ + 15×16⁰ = 240 + 15 = 255. <code>5A</code> = 5×16 + 10 = 90. <code>00</code> = 0. Esto permite calcular el RGB decimal: <code>#3A7FD5</code> → R=58, G=127, B=213. Inversamente, para obtener hex de RGB: dividís cada componente por 16 (cociente y resto te dan los dos dígitos hex).</p><p>Las pantallas modernas (LCD, OLED) generan colores mezclando luz roja, verde y azul en cada píxel. El valor hex controla la <strong>intensidad de cada LED/subpíxel</strong>. Los navegadores y software de diseño (Photoshop, Figma, Sketch) parsean hex y lo convierten internamente a RGB para renderizar. Los colores hex son <strong>device-independent</strong> en teoría (sRGB estándar), pero monitores mal calibrados pueden mostrarlos distinto.</p><p>Comparado con RGB decimal (<code>rgb(255, 0, 0)</code>) o HSL (<code>hsl(0, 100%, 50%)</code>), hex es más compacto y fácil de copypastear, pero menos intuitivo para humanos: cambiar matiz o saturación requiere calcular los tres canales. Por eso diseñadores usan HSL para explorar colores, luego convierten a hex para producción.</p>"
      },
      {
        "title": "¿Cuándo usar colores hexadecimales?",
        "content": "<p>Usá hex en <strong>CSS y HTML</strong>: es el formato por defecto en <code>color</code>, <code>background-color</code>, <code>border-color</code>. Es compacto (<code>#3A7FD5</code> vs <code>rgb(58, 127, 213)</code>) y universalmente soportado. Herramientas de diseño (Figma, Sketch, Adobe XD) exportan colores en hex por default; los design systems (Material, Tailwind) documentan paletas en hex.</p><p>En desarrollo, hex es conveniente para <strong>variables CSS</strong> (<code>--primary: #3A7FD5;</code>) y tokens de diseño. Frameworks como Tailwind generan clases (<code>bg-blue-500</code>) basadas en paletas hex. También es el estándar en <strong>data visualization</strong>: librerías como D3.js, Chart.js aceptan hex para asignar colores a series.</p><p>Preferí <strong>HSL</strong> si necesitás manipular colores programáticamente (aclarar, oscurecer, rotar matiz): <code>hsl(210, 65%, 50%)</code> es más intuitivo para generar variantes. Preferí <strong>RGBA/HSLA</strong> si necesitás transparencia: <code>rgba(255, 0, 0, 0.5)</code> o <code>#FF000080</code>. Usá <strong>named colors</strong> (<code>red</code>, <code>blue</code>) solo para prototipado; en producción especificá hex exacto para consistencia.</p><p>Para <strong>accesibilidad</strong>, verificá contraste: WCAG 2.1 requiere ratio 4.5:1 (texto normal) o 3:1 (texto grande). Herramientas como Contrast Checker calculan ratio entre dos hex. Evitá hex similares para estados distintos (<code>#3A7FD5</code> vs <code>#3A7FD4</code>); diferenciá visualmente o con texto.</p>"
      },
      {
        "title": "Conversión y herramientas",
        "content": "<p>Convertir <strong>hex ↔ RGB</strong>: dividí el hex en tres pares, convertí cada uno a decimal. Ejemplo: <code>#A1B2C3</code> → R=161, G=178, B=195. Inversamente: convertí cada decimal a hex (JavaScript: <code>(255).toString(16)</code>). Para <strong>hex ↔ HSL</strong>, primero convertís a RGB, luego calculás H (matiz, 0-360°), S (saturación, 0-100%), L (lightness, 0-100%) con fórmulas estándar (algoritmo disponible en cualquier librería de color).</p><p>Herramientas útiles: <strong>color pickers</strong> (Chrome DevTools, Figma, Adobe Color) permiten elegir visualmente y copiar hex. <strong>Generadores de paletas</strong> (Coolors, Adobe Color, Paletton) producen esquemas armónicos (complementarios, análogos, tríadas) a partir de un hex base. <strong>Validadores de contraste</strong> (WebAIM, Colorable) verifican WCAG.</p><p>Librerías de código: <code>chroma.js</code>, <code>color</code> (npm) parsean hex y convierten a RGB/HSL/LAB, generan variantes (lighten, darken, saturate), y calculan contraste. CSS moderno soporta <code>color-mix()</code> para mezclar colores inline, pero el soporte es limitado (2024); hex sigue siendo más portable.</p><p>Cuidado con <strong>colores seguros para web</strong> (Web Safe Colors, paleta de 216 colores): eran relevantes en monitores de 8 bits (1990s), hoy obsoletos. Cualquier hex funciona en pantallas modernas. Pero sí importa el <strong>espacio de color</strong>: sRGB (estándar) vs Display P3 (más amplio, en pantallas Apple). Hex asume sRGB; para P3 usá <code>color(display-p3 r g b)</code> en CSS cuando sea soportado.</p>"
      }
    ],
    "examples": [
      "#FF0000 (rojo puro: R=255, G=0, B=0)",
      "#00FF00 (verde puro: R=0, G=255, B=0)",
      "#0000FF (azul puro: R=0, G=0, B=255)",
      "#FFFFFF (blanco: R=255, G=255, B=255)",
      "#000000 (negro: R=0, G=0, B=0)",
      "#FF5733 (naranja rojizo: R=255, G=87, B=51)",
      "#3A7FD5 (azul medio: R=58, G=127, B=213)",
      "#FFF o #FFFFFF (notación corta)",
      "#FF000080 (rojo con 50% de opacidad)"
    ],
    "related": [
      "generador-de-color-hex",
      "generador-de-paletas-de-colores"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre #RGB y #RRGGBB?",
        "a": "La notación corta (#RGB) es un atajo: cada dígito se duplica. #F00 = #FF0000, #ABC = #AABBCC. Usala para colores comunes; para precisión (ej: #3A7FD5), necesitas 6 dígitos. Ambas son válidas en CSS."
      },
      {
        "q": "¿Cómo agrego transparencia a un hex?",
        "a": "Usa 8 dígitos: #RRGGBBAA. Los últimos dos son el canal alpha (00=transparente, FF=opaco). Ejemplo: #FF000080 es rojo con 50% de opacidad. Alternativa: rgba(255, 0, 0, 0.5) es más legible pero menos compacto."
      },
      {
        "q": "¿Hex funciona igual en todos los monitores?",
        "a": "En teoría sí (sRGB estándar), pero monitores mal calibrados muestran colores distinto. Para precisión crítica (branding, impresión), calibrá monitores con colorímetros. En web, hex es suficientemente consistente para la mayoría de casos."
      }
    ]
  },
  "en": {
    "pageTitle": "Hex color — Glossary | Genfy",
    "metaDesc": "Hex color (#RRGGBB) is the standard notation for defining colors in web and digital design. Learn how it works and when to use RGB, HSL, or hex.",
    "h1": "Hex color",
    "short": "Hexadecimal format (#RRGGBB) is the most common notation for specifying colors in CSS, HTML, and digital design. Each color is represented with 6 hexadecimal digits (base 16: 0-9, A-F), divided into three pairs encoding the intensity of red, green, and blue (RGB) in values from 0 (00) to 255 (FF).",
    "body": [
      {
        "title": "What is a hex color?",
        "content": "<p>A hex color is a numeric representation of an RGB color in <strong>base 16</strong> (hexadecimal), preceded by the <code>#</code> symbol. The structure is <code>#RRGGBB</code>: the first two digits are the red channel (Red), the next two green (Green), and the last two blue (Blue). Each pair ranges from <code>00</code> (0 in decimal, absence of that color) to <code>FF</code> (255 in decimal, maximum intensity).</p><p>Example: <code>#FF0000</code> is pure red (red max, green and blue at zero), <code>#00FF00</code> is pure green, <code>#0000FF</code> is pure blue, <code>#FFFFFF</code> is white (all channels at max), <code>#000000</code> is black (all at zero). Intermediate colors combine intensities: <code>#FF5733</code> is a reddish orange (high red, medium green, low blue).</p><p>There's also a <strong>short notation</strong> of 3 digits (<code>#RGB</code>) when each pair is identical: <code>#FFF</code> equals <code>#FFFFFF</code>, <code>#F00</code> to <code>#FF0000</code>. It's common in CSS for basic colors. Some formats extend hex with transparency (alpha): <code>#RRGGBBAA</code>, where <code>AA</code> is opacity from <code>00</code> (fully transparent) to <code>FF</code> (fully opaque). Example: <code>#FF000080</code> is red with 50% opacity.</p>"
      },
      {
        "title": "How does hex notation work?",
        "content": "<p>The hexadecimal system (base 16) uses digits 0-9 and letters A-F (uppercase or lowercase) to represent values 0-15. In colors, each <strong>hex pair</strong> represents a byte (8 bits), allowing 256 values (0-255) per channel. Thus, <code>#RRGGBB</code> covers 16,777,216 colors (256³), the full standard sRGB spectrum.</p><p>To convert hex to decimal: <code>FF</code> = 15×16¹ + 15×16⁰ = 240 + 15 = 255. <code>5A</code> = 5×16 + 10 = 90. <code>00</code> = 0. This allows calculating decimal RGB: <code>#3A7FD5</code> → R=58, G=127, B=213. Conversely, to get hex from RGB: divide each component by 16 (quotient and remainder give you the two hex digits).</p><p>Modern displays (LCD, OLED) generate colors by mixing red, green, and blue light in each pixel. The hex value controls the <strong>intensity of each LED/subpixel</strong>. Browsers and design software (Photoshop, Figma, Sketch) parse hex and convert it internally to RGB for rendering. Hex colors are <strong>device-independent</strong> in theory (standard sRGB), but poorly calibrated monitors may display them differently.</p><p>Compared to decimal RGB (<code>rgb(255, 0, 0)</code>) or HSL (<code>hsl(0, 100%, 50%)</code>), hex is more compact and easier to copy-paste, but less intuitive for humans: changing hue or saturation requires calculating all three channels. That's why designers use HSL to explore colors, then convert to hex for production.</p>"
      },
      {
        "title": "When to use hex colors?",
        "content": "<p>Use hex in <strong>CSS and HTML</strong>: it's the default format in <code>color</code>, <code>background-color</code>, <code>border-color</code>. It's compact (<code>#3A7FD5</code> vs <code>rgb(58, 127, 213)</code>) and universally supported. Design tools (Figma, Sketch, Adobe XD) export colors in hex by default; design systems (Material, Tailwind) document palettes in hex.</p><p>In development, hex is convenient for <strong>CSS variables</strong> (<code>--primary: #3A7FD5;</code>) and design tokens. Frameworks like Tailwind generate classes (<code>bg-blue-500</code>) based on hex palettes. It's also the standard in <strong>data visualization</strong>: libraries like D3.js, Chart.js accept hex for assigning colors to series.</p><p>Prefer <strong>HSL</strong> if you need to manipulate colors programmatically (lighten, darken, rotate hue): <code>hsl(210, 65%, 50%)</code> is more intuitive for generating variants. Prefer <strong>RGBA/HSLA</strong> if you need transparency: <code>rgba(255, 0, 0, 0.5)</code> or <code>#FF000080</code>. Use <strong>named colors</strong> (<code>red</code>, <code>blue</code>) only for prototyping; in production specify exact hex for consistency.</p><p>For <strong>accessibility</strong>, verify contrast: WCAG 2.1 requires 4.5:1 ratio (normal text) or 3:1 (large text). Tools like Contrast Checker calculate ratio between two hex values. Avoid similar hex for different states (<code>#3A7FD5</code> vs <code>#3A7FD4</code>); differentiate visually or with text.</p>"
      },
      {
        "title": "Conversion and tools",
        "content": "<p>Convert <strong>hex ↔ RGB</strong>: split hex into three pairs, convert each to decimal. Example: <code>#A1B2C3</code> → R=161, G=178, B=195. Conversely: convert each decimal to hex (JavaScript: <code>(255).toString(16)</code>). For <strong>hex ↔ HSL</strong>, first convert to RGB, then calculate H (hue, 0-360°), S (saturation, 0-100%), L (lightness, 0-100%) with standard formulas (algorithm available in any color library).</p><p>Useful tools: <strong>color pickers</strong> (Chrome DevTools, Figma, Adobe Color) let you choose visually and copy hex. <strong>Palette generators</strong> (Coolors, Adobe Color, Paletton) produce harmonic schemes (complementary, analogous, triadic) from a base hex. <strong>Contrast validators</strong> (WebAIM, Colorable) verify WCAG.</p><p>Code libraries: <code>chroma.js</code>, <code>color</code> (npm) parse hex and convert to RGB/HSL/LAB, generate variants (lighten, darken, saturate), and calculate contrast. Modern CSS supports <code>color-mix()</code> to blend colors inline, but support is limited (2024); hex remains more portable.</p><p>Beware of <strong>web-safe colors</strong> (Web Safe Colors, 216-color palette): they were relevant on 8-bit monitors (1990s), now obsolete. Any hex works on modern displays. But <strong>color space</strong> matters: sRGB (standard) vs Display P3 (wider, on Apple displays). Hex assumes sRGB; for P3 use <code>color(display-p3 r g b)</code> in CSS when supported.</p>"
      }
    ],
    "examples": [
      "#FF0000 (pure red: R=255, G=0, B=0)",
      "#00FF00 (pure green: R=0, G=255, B=0)",
      "#0000FF (pure blue: R=0, G=0, B=255)",
      "#FFFFFF (white: R=255, G=255, B=255)",
      "#000000 (black: R=0, G=0, B=0)",
      "#FF5733 (reddish orange: R=255, G=87, B=51)",
      "#3A7FD5 (medium blue: R=58, G=127, B=213)",
      "#FFF or #FFFFFF (short notation)",
      "#FF000080 (red with 50% opacity)"
    ],
    "related": [
      "hex-color-generator",
      "color-palette-generator"
    ],
    "faq": [
      {
        "q": "What's the difference between #RGB and #RRGGBB?",
        "a": "Short notation (#RGB) is a shortcut: each digit is duplicated. #F00 = #FF0000, #ABC = #AABBCC. Use it for common colors; for precision (e.g., #3A7FD5), you need 6 digits. Both are valid in CSS."
      },
      {
        "q": "How do I add transparency to a hex?",
        "a": "Use 8 digits: #RRGGBBAA. The last two are the alpha channel (00=transparent, FF=opaque). Example: #FF000080 is red with 50% opacity. Alternative: rgba(255, 0, 0, 0.5) is more readable but less compact."
      },
      {
        "q": "Does hex work the same on all monitors?",
        "a": "In theory yes (sRGB standard), but poorly calibrated monitors display colors differently. For critical precision (branding, printing), calibrate monitors with colorimeters. On web, hex is consistent enough for most cases."
      }
    ]
  }
};
