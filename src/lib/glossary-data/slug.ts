import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "slug",
    "en": "slug"
  },
  "emoji": "🔗",
  "category": "web",
  "es": {
    "pageTitle": "Slug (URL) — Glosario | Genfy",
    "metaDesc": "Un slug es la versión URL-friendly de una cadena: minúsculas, sin acentos, separada por guiones. Crítico para SEO, rutas legibles y consistencia en URLs.",
    "h1": "Slug (URL)",
    "short": "Un slug es la parte final de una URL que identifica un recurso de forma legible: texto en minúsculas, sin acentos ni espacios, con palabras separadas por guiones. Ejemplo: 'que-es-un-slug-url'.",
    "body": [
      {
        "title": "¿Qué es un Slug?",
        "content": "<p>Un <strong>slug</strong> es la versión URL-safe de una cadena de texto, generalmente derivada de un título o nombre. Transforma \"¿Qué es un Slug URL?\" en \"que-es-un-slug-url\". Se usa en la URL después del dominio: <code>genfy.co/blog/que-es-un-slug-url</code>.</p><p>Un slug correcto cumple estas reglas:</p><ul><li>Minúsculas: \"Hola Mundo\" → \"hola-mundo\" (no \"Hola-Mundo\")</li><li>Sin acentos ni diacríticos: \"árbol\" → \"arbol\", \"niño\" → \"nino\"</li><li>Espacios reemplazados por guiones: \"mi artículo\" → \"mi-articulo\"</li><li>Sin caracteres especiales: \"¿Qué?\" → \"que\", \"#hashtag\" → \"hashtag\"</li><li>Sin guiones repetidos: \"muy - - largo\" → \"muy-largo\"</li></ul><p>Los slugs son fundamentales en sistemas CMS (WordPress, contenido estático), e-commerce (URLs de productos), y aplicaciones web (perfiles de usuario: <code>/user/john-doe</code>).</p>"
      },
      {
        "title": "¿Cómo se genera un Slug?",
        "content": "<p>Un generador de slugs aplica transformaciones secuenciales:</p><ol><li><strong>Normalización Unicode</strong>: convierte caracteres acentuados a ASCII. \"café\" → \"cafe\" usando transliteración (ñ→n, é→e).</li><li><strong>Minúsculas</strong>: <code>toLowerCase()</code> en todo el string.</li><li><strong>Reemplazo de caracteres inválidos</strong>: regex que borra o reemplaza todo lo que no sea letra, número o guión. \"Hola, mundo!\" → \"hola-mundo\".</li><li><strong>Limpieza de guiones</strong>: elimina guiones al inicio/final y colapsa múltiples guiones consecutivos. \"--hola--mundo--\" → \"hola-mundo\".</li></ol><p>Ejemplo en JavaScript:</p><code>function slugify(str) {<br>&nbsp;&nbsp;return str.normalize('NFD')<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/[\\u0300-\\u036f]/g, '')<br>&nbsp;&nbsp;&nbsp;&nbsp;.toLowerCase()<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/[^a-z0-9]+/g, '-')<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/^-+|-+$/g, '');<br>}</code><p>Librerías populares: <code>slugify</code> (npm), métodos nativos en frameworks (Django <code>slugify()</code>, Rails <code>parameterize</code>).</p>"
      },
      {
        "title": "¿Por qué son importantes los Slugs?",
        "content": "<p>Los slugs impactan directamente en:</p><ul><li><strong>SEO</strong>: URLs descriptivas rankean mejor. Google prioriza <code>/blog/guia-seo-2024</code> sobre <code>/blog/p=12345</code>. Keywords en el slug refuerzan relevancia del contenido.</li><li><strong>Usabilidad</strong>: usuarios entienden dónde están mirando la URL. <code>/productos/zapatillas-running</code> vs <code>/prod?id=4829</code>.</li><li><strong>Compartibilidad</strong>: URLs legibles se copian mejor en redes sociales y emails. La gente confía más en links descriptivos que en códigos crípticos.</li><li><strong>Permanencia</strong>: slugs basados en contenido son más estables que IDs numéricos. Si reordenás una base de datos, <code>/articulo-importante</code> sigue funcionando, <code>/post/42</code> puede romperse.</li></ul><p>Los buscadores usan el slug como señal de relevancia. Un artículo sobre \"tipografía web\" con slug <code>tipografia-web</code> rankea mejor que con <code>post-123</code> para esa keyword.</p>"
      },
      {
        "title": "Mejores prácticas y errores comunes",
        "content": "<p><strong>Error #1:</strong> Slugs demasiado largos. \"guia-completa-definitiva-para-aprender-css-grid-desde-cero-en-2024\" es excesivo. Máximo 3-5 palabras clave. Google trunca URLs largas en resultados de búsqueda.</p><p><strong>Error #2:</strong> Slugs con stop words innecesarias. \"el-mejor-tutorial-de-react\" → mejor \"tutorial-react\". Palabras como \"el\", \"de\", \"para\" no aportan a SEO.</p><p><strong>Error #3:</strong> Cambiar slugs después de publicar. Rompe links externos y posicionamiento. Si debés cambiar, implementá redirects 301 desde el slug viejo al nuevo.</p><p><strong>Mejor práctica:</strong> Incluí keywords primarias pero mantené brevedad. Para \"Cómo crear un blog con Next.js\", usá <code>crear-blog-nextjs</code>, no <code>como-crear-blog-nextjs-paso-a-paso</code>.</p><p><strong>Unicidad:</strong> En CMS, asegurate que los slugs sean únicos. Si ya existe <code>mi-articulo</code>, el siguiente debe ser <code>mi-articulo-2</code>. Muchos sistemas agregan sufijos automáticamente.</p><p><strong>Idiomas:</strong> Para sitios multiidioma, considerá slugs traducidos (<code>/es/acerca-de</code>, <code>/en/about</code>) en vez de slugs en inglés universal. Mejora SEO local.</p>"
      }
    ],
    "examples": [
      "\"¿Qué es CSS Grid?\" → \"que-es-css-grid\"",
      "\"10 Tips para Mejorar SEO\" → \"10-tips-mejorar-seo\"",
      "\"Café con Leche & Azúcar\" → \"cafe-con-leche-azucar\"",
      "\"React v18: Nuevas Features\" → \"react-v18-nuevas-features\"",
      "\"Usuario: John@Doe\" → \"usuario-johndoe\""
    ],
    "related": [
      "generador-de-slugs-url",
      "generador-de-nombres-de-dominio"
    ],
    "faq": [
      {
        "q": "¿Debo usar guiones o guiones bajos en slugs?",
        "a": "Siempre guiones (-), nunca guiones bajos (_). Google trata guiones como separadores de palabras (hola-mundo = \"hola mundo\") pero guiones bajos como parte de una palabra (hola_mundo = \"holamundo\"). Esto afecta cómo indexa las keywords. Guiones son el estándar web universal desde hace 20 años."
      },
      {
        "q": "¿Puedo incluir números en un slug?",
        "a": "Sí, los números son válidos y útiles: \"react-18\", \"top-10-herramientas\", \"guia-2024\". Se mantienen tal cual, sin conversión. Evitá solo números (\"12345\") porque no son descriptivos, pero números dentro de texto descriptivo están perfecto y pueden mejorar CTR en búsquedas (la gente hace click en listas numeradas)."
      },
      {
        "q": "¿Qué hago si dos títulos generan el mismo slug?",
        "a": "Agregá un sufijo numérico o discriminador. Si \"Guía CSS\" genera \"guia-css\" y ya existe, el siguiente puede ser \"guia-css-2\" o \"guia-css-avanzada\". Algunos CMS agregan IDs automáticamente: \"guia-css-a8f3\". Lo importante es que cada slug sea único en tu sistema. Nunca permitas duplicados, rompe routing."
      }
    ]
  },
  "en": {
    "pageTitle": "Slug (URL) — Glossary | Genfy",
    "metaDesc": "A slug is the URL-friendly version of a string: lowercase, no accents, hyphen-separated. Critical for SEO, readable routes and URL consistency.",
    "h1": "Slug (URL)",
    "short": "A slug is the final part of a URL that identifies a resource in readable form: lowercase text, no accents or spaces, with words separated by hyphens. Example: 'what-is-a-url-slug'.",
    "body": [
      {
        "title": "What is a Slug?",
        "content": "<p>A <strong>slug</strong> is the URL-safe version of a text string, generally derived from a title or name. It transforms \"What is a URL Slug?\" into \"what-is-a-url-slug\". It's used in URLs after the domain: <code>genfy.co/blog/what-is-a-url-slug</code>.</p><p>A correct slug follows these rules:</p><ul><li>Lowercase: \"Hello World\" → \"hello-world\" (not \"Hello-World\")</li><li>No accents or diacritics: \"café\" → \"cafe\", \"niño\" → \"nino\"</li><li>Spaces replaced by hyphens: \"my article\" → \"my-article\"</li><li>No special characters: \"What?\" → \"what\", \"#hashtag\" → \"hashtag\"</li><li>No repeated hyphens: \"very - - long\" → \"very-long\"</li></ul><p>Slugs are fundamental in CMS systems (WordPress, static content), e-commerce (product URLs), and web applications (user profiles: <code>/user/john-doe</code>).</p>"
      },
      {
        "title": "How is a Slug generated?",
        "content": "<p>A slug generator applies sequential transformations:</p><ol><li><strong>Unicode normalization</strong>: converts accented characters to ASCII. \"café\" → \"cafe\" using transliteration (ñ→n, é→e).</li><li><strong>Lowercase</strong>: <code>toLowerCase()</code> on entire string.</li><li><strong>Invalid character replacement</strong>: regex that removes or replaces anything that's not letter, number or hyphen. \"Hello, world!\" → \"hello-world\".</li><li><strong>Hyphen cleanup</strong>: removes hyphens at start/end and collapses multiple consecutive hyphens. \"--hello--world--\" → \"hello-world\".</li></ol><p>Example in JavaScript:</p><code>function slugify(str) {<br>&nbsp;&nbsp;return str.normalize('NFD')<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/[\\u0300-\\u036f]/g, '')<br>&nbsp;&nbsp;&nbsp;&nbsp;.toLowerCase()<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/[^a-z0-9]+/g, '-')<br>&nbsp;&nbsp;&nbsp;&nbsp;.replace(/^-+|-+$/g, '');<br>}</code><p>Popular libraries: <code>slugify</code> (npm), native methods in frameworks (Django <code>slugify()</code>, Rails <code>parameterize</code>).</p>"
      },
      {
        "title": "Why are Slugs important?",
        "content": "<p>Slugs directly impact:</p><ul><li><strong>SEO</strong>: Descriptive URLs rank better. Google prioritizes <code>/blog/seo-guide-2024</code> over <code>/blog/p=12345</code>. Keywords in slug reinforce content relevance.</li><li><strong>Usability</strong>: Users understand where they are by looking at URL. <code>/products/running-shoes</code> vs <code>/prod?id=4829</code>.</li><li><strong>Shareability</strong>: Readable URLs copy better on social media and emails. People trust descriptive links more than cryptic codes.</li><li><strong>Permanence</strong>: Content-based slugs are more stable than numeric IDs. If you reorder a database, <code>/important-article</code> keeps working, <code>/post/42</code> may break.</li></ul><p>Search engines use slugs as relevance signals. An article about \"web typography\" with slug <code>web-typography</code> ranks better than <code>post-123</code> for that keyword.</p>"
      },
      {
        "title": "Best practices and common mistakes",
        "content": "<p><strong>Mistake #1:</strong> Slugs too long. \"complete-definitive-guide-to-learn-css-grid-from-scratch-in-2024\" is excessive. Maximum 3-5 keywords. Google truncates long URLs in search results.</p><p><strong>Mistake #2:</strong> Slugs with unnecessary stop words. \"the-best-react-tutorial\" → better \"react-tutorial\". Words like \"the\", \"of\", \"for\" don't contribute to SEO.</p><p><strong>Mistake #3:</strong> Changing slugs after publishing. Breaks external links and ranking. If you must change, implement 301 redirects from old slug to new.</p><p><strong>Best practice:</strong> Include primary keywords but keep it brief. For \"How to create a blog with Next.js\", use <code>create-blog-nextjs</code>, not <code>how-to-create-blog-nextjs-step-by-step</code>.</p><p><strong>Uniqueness:</strong> In CMS, ensure slugs are unique. If <code>my-article</code> already exists, the next must be <code>my-article-2</code>. Many systems add suffixes automatically.</p><p><strong>Languages:</strong> For multilingual sites, consider translated slugs (<code>/es/acerca-de</code>, <code>/en/about</code>) instead of universal English slugs. Improves local SEO.</p>"
      }
    ],
    "examples": [
      "\"What is CSS Grid?\" → \"what-is-css-grid\"",
      "\"10 Tips to Improve SEO\" → \"10-tips-improve-seo\"",
      "\"Coffee with Milk & Sugar\" → \"coffee-with-milk-sugar\"",
      "\"React v18: New Features\" → \"react-v18-new-features\"",
      "\"User: John@Doe\" → \"user-johndoe\""
    ],
    "related": [
      "url-slug-generator",
      "domain-name-generator"
    ],
    "faq": [
      {
        "q": "Should I use hyphens or underscores in slugs?",
        "a": "Always hyphens (-), never underscores (_). Google treats hyphens as word separators (hello-world = \"hello world\") but underscores as part of a word (hello_world = \"helloworld\"). This affects how it indexes keywords. Hyphens have been the universal web standard for 20 years."
      },
      {
        "q": "Can I include numbers in a slug?",
        "a": "Yes, numbers are valid and useful: \"react-18\", \"top-10-tools\", \"guide-2024\". They're kept as-is, without conversion. Avoid only numbers (\"12345\") because they're not descriptive, but numbers within descriptive text are perfect and can improve CTR in searches (people click on numbered lists)."
      },
      {
        "q": "What do I do if two titles generate the same slug?",
        "a": "Add a numeric suffix or discriminator. If \"CSS Guide\" generates \"css-guide\" and it already exists, the next can be \"css-guide-2\" or \"css-guide-advanced\". Some CMS add IDs automatically: \"css-guide-a8f3\". The important thing is each slug is unique in your system. Never allow duplicates, breaks routing."
      }
    ]
  }
};
