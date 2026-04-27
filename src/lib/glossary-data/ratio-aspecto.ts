import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "ratio-aspecto",
    "en": "aspect-ratio"
  },
  "emoji": "🖥️",
  "category": "design",
  "es": {
    "pageTitle": "Aspect Ratio — Glosario | Genfy",
    "metaDesc": "Aspect Ratio: relación entre ancho y alto de imágenes y videos. Descubrí formatos comunes (16:9, 4:3, 1:1), cuándo usar cada uno y cómo calcularlos.",
    "h1": "Aspect Ratio",
    "short": "El Aspect Ratio (relación de aspecto) es la proporción matemática entre el ancho y el alto de una imagen, video o pantalla. Se expresa como dos números separados por dos puntos (ej: 16:9, 4:3, 1:1), definiendo su forma rectangular y experiencia visual. Es fundamental en diseño, fotografía, video y desarrollo web.",
    "body": [
      {
        "title": "¿Qué es el Aspect Ratio?",
        "content": "<p>El Aspect Ratio describe la relación proporcional entre las dimensiones horizontales y verticales de un rectángulo. En medios visuales, determina si algo es panorámico, cuadrado, vertical, o tiene formato clásico de TV.</p><p>Se calcula dividiendo ancho por alto y simplificando a la mínima expresión. Por ejemplo: una imagen de 1920×1080 píxeles tiene ratio 1920/1080 = 16/9, expresado como <strong>16:9</strong>. Esto significa que por cada 16 unidades de ancho, hay 9 de alto.</p><p>El Aspect Ratio es <strong>independiente de la resolución</strong>: una pantalla 1920×1080 y una 3840×2160 ambas son 16:9, aunque la segunda tiene 4 veces más píxeles. El ratio define la forma, no el tamaño absoluto.</p><p>Históricamente, diferentes medios establecieron ratios estándar: cine (2.39:1, cinemascope), TV clásica (4:3), TV moderna (16:9), redes sociales (1:1, 9:16). Cada uno comunica sensación visual distinta: panorámico transmite épica, vertical es íntimo y mobile-first.</p>"
      },
      {
        "title": "Aspect Ratios comunes y sus usos",
        "content": "<p><strong>16:9 (widescreen):</strong> El estándar universal de video HD, monitores, Smart TVs y YouTube. Es el formato nativo de la mayoría de cámaras y pantallas modernas. Ideal para contenido horizontal de desktop.</p><p><strong>4:3 (clásico TV):</strong> Formato de televisión analógica pre-HD y monitores CRT. Hoy obsoleto en video, pero persiste en presentaciones (PowerPoint, Keynote) y algunas cámaras de seguridad. Más cuadrado, menos cinematográfico.</p><p><strong>1:1 (cuadrado):</strong> Popularizado por Instagram (posts cuadrados). Funciona igual en vertical y horizontal, ideal para feeds sociales. También usado en álbumes musicales, avatares, y diseño de íconos. Democrático: no favorece orientación.</p><p><strong>9:16 (vertical):</strong> El ratio de smartphones en posición natural. Dominante en Stories de Instagram/Facebook, TikTok, Reels. Formato mobile-first que maximiza pantalla sin rotar dispositivo. Íntimo, inmersivo.</p><p><strong>21:9 y 32:9 (ultrawide):</strong> Monitores panorámicos para gaming, edición de video, y multitasking. 21:9 equivale a dos pantallas 4:3 lado a lado. Cinemático, envolvente.</p><p><strong>2.39:1 (cinemascope):</strong> Ratio de películas de Hollywood, barras negras en TV. Comunica calidad cinematográfica, épica visual. Usado en trailers, cortometrajes artísticos.</p>"
      },
      {
        "title": "¿Cómo calcular y mantener Aspect Ratio?",
        "content": "<p>Para calcular el ratio de una imagen: <strong>Ancho ÷ Alto</strong>, luego simplificá. Ejemplo: 1280×720 → 1280/720 = 1.777... ≈ 16/9. Si el resultado es decimal complejo, usá calculadoras de aspect ratio que encuentran la fracción más simple.</p><p>Al <strong>redimensionar</strong> manteniendo ratio, aplicá la proporción: si sabés el nuevo ancho, <code>Alto nuevo = (Alto original × Ancho nuevo) / Ancho original</code>. Herramientas de diseño (Photoshop, Figma) tienen opción 'mantener proporciones' (ícono de candado) que hace esto automáticamente.</p><p>En <strong>CSS</strong>, la propiedad <code>aspect-ratio</code> mantiene proporciones automáticamente:<br><code>img { aspect-ratio: 16 / 9; width: 100%; height: auto; }</code><br>Esto hace que la imagen escale responsivamente sin deformarse.</p><p>Para <strong>video</strong>, editores como Premiere, DaVinci Resolve, o Final Cut tienen presets de aspect ratio. Cropear video de 16:9 a 1:1 pierde información en los bordes, mientras que añadir pillarboxing (barras negras laterales) mantiene todo el contenido pero desperdicia espacio.</p><p>Herramientas útiles: <strong>calculadoras de aspect ratio</strong> (calculan dimensiones faltantes), plugins de Figma/Sketch (Aspect Ratio Checker), y FFmpeg para video: <code>ffmpeg -i input.mp4 -vf scale=1080:1920 output.mp4</code> (16:9 a 9:16).</p>"
      },
      {
        "title": "Errores comunes y mejores prácticas",
        "content": "<p><strong>Estirar contenido sin mantener ratio:</strong> produce deformación (personas anchas o altas). Siempre usá 'crop' (recorte) o 'letterboxing' (barras negras) en lugar de stretch. Crop pierde contenido pero mantiene forma; stretch arruina la imagen.</p><p><strong>Ignorar el contexto de plataforma:</strong> subir video 16:9 a Instagram Stories (9:16) resulta en barras negras masivas y aprovechamiento mínimo de pantalla. Optimizá contenido para cada red social: 1:1 para feed, 9:16 para Stories/TikTok, 16:9 para YouTube.</p><p><strong>No probar en móvil:</strong> diseños que lucen perfectos en desktop 16:9 pueden romperse en 9:16 vertical. Diseñá mobile-first o al menos verificá que elementos críticos no se corten en orientaciones alternativas.</p><p>Para <strong>responsive web</strong>, usá <code>object-fit: cover</code> en imágenes: llena el contenedor manteniendo ratio, cropeando exceso. <code>object-fit: contain</code> muestra la imagen completa con letterboxing si es necesario.</p><p>En <strong>impresión</strong>, aspect ratios fotográficos (3:2, 4:3) rara vez coinciden con tamaños de papel estándar (A4 es ~1.41:1). Siempre verificá que el crop no elimine elementos importantes antes de imprimir.</p>"
      }
    ],
    "examples": [
      "YouTube video: 1920×1080 → 16:9",
      "Instagram post cuadrado: 1080×1080 → 1:1",
      "Instagram Story: 1080×1920 → 9:16",
      "Cine clásico: 2048×858 → 2.39:1 (cinemascope)",
      "Monitor ultrawide: 3440×1440 → 21:9"
    ],
    "related": [
      "calculadora-aspect-ratio",
      "redimensionador-imagen-ratio"
    ],
    "faq": [
      {
        "q": "¿Puedo cambiar el aspect ratio sin perder calidad?",
        "a": "Depende. Cambiar ratio sin crop requiere añadir barras negras (pillarboxing/letterboxing), lo cual no pierde calidad pero desperdicia espacio. Cropear pierde parte de la imagen. Estirar deforma y arruina la calidad visual. La mejor opción es planear el ratio correcto desde la captura/diseño."
      },
      {
        "q": "¿Por qué importa el Aspect Ratio en redes sociales?",
        "a": "Cada plataforma optimiza su interfaz para ratios específicos: Instagram feed favorece 1:1 y 4:5, Stories 9:16, YouTube 16:9. Subir contenido con ratio inadecuado resulta en barras negras, menos visibilidad, o crops automáticos que cortan elementos importantes. Optimizar ratio = mejor experiencia visual."
      },
      {
        "q": "¿Qué ratio es mejor para diseño web?",
        "a": "Depende del contenido. Imágenes hero (banners grandes) funcionan bien en 16:9 o 21:9 (panorámico). Thumbnails y cards en 4:3 o 16:9. Para mobile-first, 1:1 es versátil (funciona vertical y horizontal). Usá <code>aspect-ratio</code> en CSS para que escalen responsivamente sin layout shift."
      }
    ]
  },
  "en": {
    "pageTitle": "Aspect Ratio — Glossary | Genfy",
    "metaDesc": "Aspect Ratio: width-to-height relationship of images and videos. Discover common formats (16:9, 4:3, 1:1), when to use each and how to calculate them.",
    "h1": "Aspect Ratio",
    "short": "Aspect Ratio is the mathematical proportion between the width and height of an image, video or screen. It's expressed as two numbers separated by a colon (e.g., 16:9, 4:3, 1:1), defining its rectangular shape and visual experience. It's fundamental in design, photography, video and web development.",
    "body": [
      {
        "title": "What is Aspect Ratio?",
        "content": "<p>Aspect Ratio describes the proportional relationship between the horizontal and vertical dimensions of a rectangle. In visual media, it determines whether something is panoramic, square, vertical, or has classic TV format.</p><p>It's calculated by dividing width by height and simplifying to the smallest expression. For example: a 1920×1080 pixel image has ratio 1920/1080 = 16/9, expressed as <strong>16:9</strong>. This means for every 16 units of width, there are 9 of height.</p><p>Aspect Ratio is <strong>independent of resolution</strong>: a 1920×1080 screen and a 3840×2160 screen are both 16:9, although the second has 4 times more pixels. The ratio defines shape, not absolute size.</p><p>Historically, different media established standard ratios: cinema (2.39:1, cinemascope), classic TV (4:3), modern TV (16:9), social networks (1:1, 9:16). Each communicates different visual sensation: panoramic conveys epic, vertical is intimate and mobile-first.</p>"
      },
      {
        "title": "Common Aspect Ratios and their uses",
        "content": "<p><strong>16:9 (widescreen):</strong> The universal standard for HD video, monitors, Smart TVs and YouTube. It's the native format of most modern cameras and screens. Ideal for horizontal desktop content.</p><p><strong>4:3 (classic TV):</strong> Pre-HD analog television and CRT monitor format. Today obsolete in video, but persists in presentations (PowerPoint, Keynote) and some security cameras. More square, less cinematic.</p><p><strong>1:1 (square):</strong> Popularized by Instagram (square posts). Works equally vertical and horizontal, ideal for social feeds. Also used in music albums, avatars, and icon design. Democratic: doesn't favor orientation.</p><p><strong>9:16 (vertical):</strong> The smartphone ratio in natural position. Dominant in Instagram/Facebook Stories, TikTok, Reels. Mobile-first format that maximizes screen without rotating device. Intimate, immersive.</p><p><strong>21:9 and 32:9 (ultrawide):</strong> Panoramic monitors for gaming, video editing, and multitasking. 21:9 equals two 4:3 screens side by side. Cinematic, enveloping.</p><p><strong>2.39:1 (cinemascope):</strong> Hollywood movie ratio, black bars on TV. Communicates cinematic quality, visual epic. Used in trailers, artistic short films.</p>"
      },
      {
        "title": "How to calculate and maintain Aspect Ratio?",
        "content": "<p>To calculate the ratio of an image: <strong>Width ÷ Height</strong>, then simplify. Example: 1280×720 → 1280/720 = 1.777... ≈ 16/9. If the result is complex decimal, use aspect ratio calculators that find the simplest fraction.</p><p>When <strong>resizing</strong> maintaining ratio, apply the proportion: if you know the new width, <code>New Height = (Original Height × New Width) / Original Width</code>. Design tools (Photoshop, Figma) have 'maintain proportions' option (lock icon) that does this automatically.</p><p>In <strong>CSS</strong>, the <code>aspect-ratio</code> property maintains proportions automatically:<br><code>img { aspect-ratio: 16 / 9; width: 100%; height: auto; }</code><br>This makes the image scale responsively without deformation.</p><p>For <strong>video</strong>, editors like Premiere, DaVinci Resolve, or Final Cut have aspect ratio presets. Cropping video from 16:9 to 1:1 loses information at edges, while adding pillarboxing (black side bars) keeps all content but wastes space.</p><p>Useful tools: <strong>aspect ratio calculators</strong> (calculate missing dimensions), Figma/Sketch plugins (Aspect Ratio Checker), and FFmpeg for video: <code>ffmpeg -i input.mp4 -vf scale=1080:1920 output.mp4</code> (16:9 to 9:16).</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "content": "<p><strong>Stretching content without maintaining ratio:</strong> produces deformation (wide or tall people). Always use 'crop' or 'letterboxing' (black bars) instead of stretch. Crop loses content but maintains shape; stretch ruins the image.</p><p><strong>Ignoring platform context:</strong> uploading 16:9 video to Instagram Stories (9:16) results in massive black bars and minimal screen use. Optimize content for each social network: 1:1 for feed, 9:16 for Stories/TikTok, 16:9 for YouTube.</p><p><strong>Not testing on mobile:</strong> designs that look perfect on desktop 16:9 can break on 9:16 vertical. Design mobile-first or at least verify that critical elements don't get cut in alternative orientations.</p><p>For <strong>responsive web</strong>, use <code>object-fit: cover</code> on images: fills container maintaining ratio, cropping excess. <code>object-fit: contain</code> shows complete image with letterboxing if necessary.</p><p>In <strong>print</strong>, photographic aspect ratios (3:2, 4:3) rarely match standard paper sizes (A4 is ~1.41:1). Always verify that crop doesn't eliminate important elements before printing.</p>"
      }
    ],
    "examples": [
      "YouTube video: 1920×1080 → 16:9",
      "Instagram square post: 1080×1080 → 1:1",
      "Instagram Story: 1080×1920 → 9:16",
      "Classic cinema: 2048×858 → 2.39:1 (cinemascope)",
      "Ultrawide monitor: 3440×1440 → 21:9"
    ],
    "related": [
      "aspect-ratio-calculator",
      "image-resize-ratio"
    ],
    "faq": [
      {
        "q": "Can I change aspect ratio without losing quality?",
        "a": "Depends. Changing ratio without crop requires adding black bars (pillarboxing/letterboxing), which doesn't lose quality but wastes space. Cropping loses part of the image. Stretching deforms and ruins visual quality. Best option is planning correct ratio from capture/design."
      },
      {
        "q": "Why does Aspect Ratio matter on social media?",
        "a": "Each platform optimizes its interface for specific ratios: Instagram feed favors 1:1 and 4:5, Stories 9:16, YouTube 16:9. Uploading content with inadequate ratio results in black bars, less visibility, or automatic crops that cut important elements. Optimizing ratio = better visual experience."
      },
      {
        "q": "What ratio is best for web design?",
        "a": "Depends on content. Hero images (large banners) work well in 16:9 or 21:9 (panoramic). Thumbnails and cards in 4:3 or 16:9. For mobile-first, 1:1 is versatile (works vertical and horizontal). Use <code>aspect-ratio</code> in CSS so they scale responsively without layout shift."
      }
    ]
  }
};
