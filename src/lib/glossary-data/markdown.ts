import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "markdown",
    "en": "markdown"
  },
  "emoji": "📄",
  "category": "tech",
  "es": {
    "pageTitle": "Markdown — Glosario | Genfy",
    "metaDesc": "Markdown es el lenguaje de marcado liviano creado por John Gruber en 2004. Aprende su sintaxis, ventajas sobre HTML crudo y por qué es el estándar en GitHub y Reddit.",
    "h1": "Markdown",
    "short": "Markdown es un lenguaje de marcado minimalista que convierte texto plano con sintaxis simple en HTML válido. Creado en 2004 por John Gruber y Aaron Swartz, hoy es el estándar de facto para documentación técnica, READMEs y foros.",
    "body": [
      {
        "title": "¿Qué es Markdown?",
        "html": "<p><strong>Markdown</strong> nació con un objetivo: que escribir contenido formateado para web sea tan fácil como escribir un email. Antes de Markdown, publicar en blogs o foros requería escribir HTML crudo (<code>&lt;p&gt;texto&lt;/p&gt;</code>) o usar editores WYSIWYG lentos y con output sucio.</p><p>La sintaxis es deliberadamente minimalista. Títulos se marcan con <code>#</code>, negritas con <code>**texto**</code>, listas con guiones. Un parser convierte eso a HTML semánticamente correcto. Ejemplo:</p><p><code>## Título\\n- Item 1\\n- Item 2</code></p><p>Se convierte en:</p><p><code>&lt;h2&gt;Título&lt;/h2&gt;\\n&lt;ul&gt;\\n  &lt;li&gt;Item 1&lt;/li&gt;\\n  &lt;li&gt;Item 2&lt;/li&gt;\\n&lt;/ul&gt;</code></p><p>Hoy GitHub, Reddit, Discord, Stack Overflow, Notion y prácticamente toda herramienta de documentación soporta Markdown. Los archivos <code>README.md</code> de proyectos open-source están escritos en Markdown. Incluso WhatsApp usa una variante simplificada (*negritas*, _itálicas_).</p>"
      },
      {
        "title": "Sintaxis fundamental de Markdown",
        "html": "<p>La especificación original de Gruber es intencionalmente laxa, lo que generó dialectos. CommonMark (2014) estandarizó la sintaxis core:</p><ul><li><strong>Encabezados:</strong> <code># H1</code>, <code>## H2</code>, hasta <code>###### H6</code>.</li><li><strong>Énfasis:</strong> <code>*itálica*</code> o <code>_itálica_</code>, <code>**negrita**</code> o <code>__negrita__</code>.</li><li><strong>Listas:</strong> <code>- Item</code> (desordenada) o <code>1. Item</code> (ordenada).</li><li><strong>Links:</strong> <code>[texto](url)</code> o <code>[texto](url \"título\")</code>.</li><li><strong>Imágenes:</strong> <code>![alt](url)</code>.</li><li><strong>Código inline:</strong> <code>`código`</code>. Bloques: tres backticks o indentación de 4 espacios.</li><li><strong>Citas:</strong> <code>&gt; Texto citado</code>.</li><li><strong>Línea horizontal:</strong> <code>---</code> o <code>***</code>.</li></ul><p>Extensiones populares (GitHub Flavored Markdown, GFM) añaden tablas (<code>| col1 | col2 |</code>), checkboxes (<code>- [ ] tarea</code>), strikethrough (<code>~~tachado~~</code>) y syntax highlighting con <code>```javascript</code>.</p><p>Parsers comunes: <code>marked</code> (JavaScript), <code>markdown-it</code> (JS con plugins), <code>Python-Markdown</code>, <code>kramdown</code> (Ruby). La mayoría soportan extensiones vía plugins.</p>"
      },
      {
        "title": "Cuándo usar Markdown",
        "html": "<p><strong>Documentación técnica:</strong> READMEs, wikis internas, docs de APIs. Markdown es legible en crudo (sin renderizar), ideal para `git diff` y code review.</p><p><strong>Blogs y CMSs headless:</strong> sitios estáticos generados con Next.js, Gatsby o Hugo suelen usar Markdown para posts. Los frontmatters YAML (<code>---\\ntitle: Post\\n---</code>) añaden metadata.</p><p><strong>Foros y plataformas colaborativas:</strong> Reddit, Discord, Slack usan Markdown para que usuarios formateen sin botones. Reduce complejidad del editor y evita XSS (el HTML lo genera el servidor, no el usuario).</p><p><strong>Toma de notas:</strong> Obsidian, Notion (parcial), Roam Research y Logseq usan Markdown como formato subyacente. Portabilidad total: tus notas son archivos <code>.md</code> que podés abrir en cualquier editor.</p><p><strong>No usar para:</strong> layouts complejos (Markdown no tiene grillas ni flexbox), emails HTML (mejor usar MJML o HTML directo con inline CSS), o contenido que requiere interactividad (formularios, widgets).</p>"
      },
      {
        "title": "Markdown vs alternativas",
        "html": "<p><strong>Markdown vs HTML:</strong> Markdown es más rápido de escribir y leer. HTML da control total pero es verboso. Muchos proyectos embeben HTML dentro de Markdown para casos especiales (<code>&lt;details&gt;</code>, iframes).</p><p><strong>Markdown vs reStructuredText (RST):</strong> RST es más potente (soporta directivas complejas, footnotes avanzadas) pero la sintaxis es más críptica. Python y Sphinx usan RST; el resto del mundo usa Markdown.</p><p><strong>Markdown vs AsciiDoc:</strong> AsciiDoc es más maduro para documentación larga (libros técnicos, manuales). Markdown escala mal en proyectos con cientos de páginas interconectadas sin extensiones como MDX.</p><p><strong>Markdown vs WYSIWYG (Notion, Google Docs):</strong> los editores WYSIWYG son más amigables para no-técnicos pero generan HTML propietario. Markdown es texto plano, versionable con Git y portable entre herramientas.</p><p>La tendencia actual: <strong>MDX</strong> (Markdown + JSX), que permite embeber componentes React dentro de Markdown. Lo usa Next.js, Docusaurus y Gatsby para docs interactivas.</p>"
      }
    ],
    "examples": [
      "# Título principal\\n## Subtítulo\\nTexto con **negrita** y *itálica*.",
      "[Link a Genfy](https://genfy.io)\\n![Logo](https://genfy.io/logo.png)",
      "```javascript\\nconst x = 42;\\nconsole.log(x);\\n```",
      "- [ ] Tarea pendiente\\n- [x] Tarea completada",
      "> Cita famosa\\n> — Autor"
    ],
    "related": [
      "markdown-a-html",
      "html-a-markdown"
    ],
    "faq": [
      {
        "q": "¿Puedo usar HTML dentro de Markdown?",
        "a": "Sí. La mayoría de parsers permiten embeber HTML crudo cuando Markdown no alcanza. Por ejemplo, <details>, <video> o tablas complejas. El HTML se pasa sin modificar al output final."
      },
      {
        "q": "¿Qué es CommonMark?",
        "a": "Una especificación estricta de Markdown creada en 2014 para resolver ambigüedades del spec original de Gruber. Define comportamiento exacto para edge cases y es la base de GitHub Flavored Markdown (GFM) y muchos parsers modernos."
      },
      {
        "q": "¿Markdown soporta tablas?",
        "a": "La especificación original no, pero GitHub Flavored Markdown (GFM) y otras extensiones sí. Sintaxis: | Col1 | Col2 | seguido de |------|------| y luego las filas. No todos los parsers lo soportan sin configuración."
      }
    ]
  },
  "en": {
    "pageTitle": "Markdown — Glossary | Genfy",
    "metaDesc": "Markdown is the lightweight markup language created by John Gruber in 2004. Learn its syntax, advantages over raw HTML and why it's the standard on GitHub and Reddit.",
    "h1": "Markdown",
    "short": "Markdown is a minimalist markup language that converts plain text with simple syntax into valid HTML. Created in 2004 by John Gruber and Aaron Swartz, today it's the de facto standard for technical documentation, READMEs and forums.",
    "body": [
      {
        "title": "What is Markdown?",
        "html": "<p><strong>Markdown</strong> was born with one goal: make writing formatted content for the web as easy as writing an email. Before Markdown, publishing on blogs or forums required writing raw HTML (<code>&lt;p&gt;text&lt;/p&gt;</code>) or using slow WYSIWYG editors with messy output.</p><p>The syntax is deliberately minimal. Headers marked with <code>#</code>, bold with <code>**text**</code>, lists with dashes. A parser converts that to semantically correct HTML. Example:</p><p><code>## Title\\n- Item 1\\n- Item 2</code></p><p>Becomes:</p><p><code>&lt;h2&gt;Title&lt;/h2&gt;\\n&lt;ul&gt;\\n  &lt;li&gt;Item 1&lt;/li&gt;\\n  &lt;li&gt;Item 2&lt;/li&gt;\\n&lt;/ul&gt;</code></p><p>Today GitHub, Reddit, Discord, Stack Overflow, Notion and virtually every documentation tool supports Markdown. <code>README.md</code> files in open-source projects are written in Markdown. Even WhatsApp uses a simplified variant (*bold*, _italic_).</p>"
      },
      {
        "title": "Core Markdown syntax",
        "html": "<p>Gruber's original spec is intentionally loose, which spawned dialects. CommonMark (2014) standardized the core syntax:</p><ul><li><strong>Headers:</strong> <code># H1</code>, <code>## H2</code>, up to <code>###### H6</code>.</li><li><strong>Emphasis:</strong> <code>*italic*</code> or <code>_italic_</code>, <code>**bold**</code> or <code>__bold__</code>.</li><li><strong>Lists:</strong> <code>- Item</code> (unordered) or <code>1. Item</code> (ordered).</li><li><strong>Links:</strong> <code>[text](url)</code> or <code>[text](url \"title\")</code>.</li><li><strong>Images:</strong> <code>![alt](url)</code>.</li><li><strong>Inline code:</strong> <code>`code`</code>. Blocks: three backticks or 4-space indentation.</li><li><strong>Quotes:</strong> <code>&gt; Quoted text</code>.</li><li><strong>Horizontal rule:</strong> <code>---</code> or <code>***</code>.</li></ul><p>Popular extensions (GitHub Flavored Markdown, GFM) add tables (<code>| col1 | col2 |</code>), checkboxes (<code>- [ ] task</code>), strikethrough (<code>~~crossed~~</code>) and syntax highlighting with <code>```javascript</code>.</p><p>Common parsers: <code>marked</code> (JavaScript), <code>markdown-it</code> (JS with plugins), <code>Python-Markdown</code>, <code>kramdown</code> (Ruby). Most support extensions via plugins.</p>"
      },
      {
        "title": "When to use Markdown",
        "html": "<p><strong>Technical documentation:</strong> READMEs, internal wikis, API docs. Markdown is readable raw (unrendered), ideal for `git diff` and code review.</p><p><strong>Blogs and headless CMSs:</strong> static sites generated with Next.js, Gatsby or Hugo often use Markdown for posts. YAML frontmatter (<code>---\\ntitle: Post\\n---</code>) adds metadata.</p><p><strong>Forums and collaborative platforms:</strong> Reddit, Discord, Slack use Markdown so users can format without buttons. Reduces editor complexity and prevents XSS (HTML is server-generated, not user-supplied).</p><p><strong>Note-taking:</strong> Obsidian, Notion (partial), Roam Research and Logseq use Markdown as underlying format. Total portability: your notes are <code>.md</code> files you can open in any editor.</p><p><strong>Don't use for:</strong> complex layouts (Markdown lacks grids or flexbox), HTML emails (better use MJML or direct HTML with inline CSS), or content requiring interactivity (forms, widgets).</p>"
      },
      {
        "title": "Markdown vs alternatives",
        "html": "<p><strong>Markdown vs HTML:</strong> Markdown is faster to write and read. HTML gives total control but is verbose. Many projects embed HTML inside Markdown for special cases (<code>&lt;details&gt;</code>, iframes).</p><p><strong>Markdown vs reStructuredText (RST):</strong> RST is more powerful (supports complex directives, advanced footnotes) but syntax is more cryptic. Python and Sphinx use RST; the rest of the world uses Markdown.</p><p><strong>Markdown vs AsciiDoc:</strong> AsciiDoc is more mature for long-form documentation (technical books, manuals). Markdown doesn't scale well for projects with hundreds of interconnected pages without extensions like MDX.</p><p><strong>Markdown vs WYSIWYG (Notion, Google Docs):</strong> WYSIWYG editors are friendlier for non-technical users but generate proprietary HTML. Markdown is plain text, versionable with Git and portable across tools.</p><p>Current trend: <strong>MDX</strong> (Markdown + JSX), allowing React components embedded in Markdown. Used by Next.js, Docusaurus and Gatsby for interactive docs.</p>"
      }
    ],
    "examples": [
      "# Main title\\n## Subtitle\\nText with **bold** and *italic*.",
      "[Link to Genfy](https://genfy.io)\\n![Logo](https://genfy.io/logo.png)",
      "```javascript\\nconst x = 42;\\nconsole.log(x);\\n```",
      "- [ ] Pending task\\n- [x] Completed task",
      "> Famous quote\\n> — Author"
    ],
    "related": [
      "markdown-to-html",
      "html-to-markdown"
    ],
    "faq": [
      {
        "q": "Can I use HTML inside Markdown?",
        "a": "Yes. Most parsers allow embedding raw HTML when Markdown isn't enough. For example, <details>, <video> or complex tables. The HTML passes unmodified to final output."
      },
      {
        "q": "What is CommonMark?",
        "a": "A strict Markdown specification created in 2014 to resolve ambiguities in Gruber's original spec. It defines exact behavior for edge cases and is the basis for GitHub Flavored Markdown (GFM) and many modern parsers."
      },
      {
        "q": "Does Markdown support tables?",
        "a": "The original spec doesn't, but GitHub Flavored Markdown (GFM) and other extensions do. Syntax: | Col1 | Col2 | followed by |------|------| then rows. Not all parsers support it without configuration."
      }
    ]
  }
};
