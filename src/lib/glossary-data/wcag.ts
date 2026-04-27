import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "wcag",
    "en": "wcag"
  },
  "emoji": "♿",
  "category": "design",
  "es": {
    "pageTitle": "WCAG — Glosario | Genfy",
    "metaDesc": "WCAG son las Web Content Accessibility Guidelines, estándar internacional de accesibilidad web con niveles A, AA y AAA basados en contraste y otros criterios de usabilidad.",
    "h1": "WCAG",
    "short": "WCAG (Web Content Accessibility Guidelines) son las pautas de accesibilidad web del W3C, el estándar internacional que define cómo hacer contenido web accesible para personas con discapacidades.",
    "body": [
      {
        "title": "¿Qué es WCAG?",
        "content": "<p>WCAG son las <strong>Web Content Accessibility Guidelines</strong>, publicadas por el W3C (World Wide Web Consortium). Definen cómo hacer contenido web accesible para personas con discapacidades visuales, auditivas, motoras o cognitivas. La versión actual es WCAG 2.1 (2018), con WCAG 2.2 (2023) agregando criterios nuevos.</p><p>Las pautas se organizan en cuatro principios: <strong>Perceptible</strong> (información y componentes UI deben presentarse de forma que los usuarios puedan percibirlos), <strong>Operable</strong> (componentes UI y navegación deben ser operables), <strong>Comprensible</strong> (información y operación deben ser comprensibles), y <strong>Robusto</strong> (contenido debe poder interpretarse por tecnologías asistivas).</p><p>WCAG define tres niveles de conformidad: <strong>A</strong> (requisitos básicos, mínimo esencial), <strong>AA</strong> (estándar recomendado para la mayoría de sitios, requerido legalmente en muchos países), y <strong>AAA</strong> (nivel más alto, no siempre alcanzable para todo el contenido).</p>"
      },
      {
        "title": "¿Cómo funciona el nivel AA de WCAG?",
        "content": "<p>El nivel <strong>AA</strong> es el estándar de facto para sitios públicos y comerciales. Incluye:</p><ul><li><strong>Contraste de color</strong>: ratio mínimo de 4.5:1 para texto normal (3:1 para texto grande ≥18pt o ≥14pt negrita). Ejemplo: texto gris #767676 sobre blanco cumple, #999 no.</li><li><strong>Texto redimensionable</strong>: debe poder agrandarse 200% sin pérdida de funcionalidad. No uses unidades fijas para texto (evitá <code>font-size: 14px;</code>, usá <code>rem</code>).</li><li><strong>Navegación por teclado</strong>: todas las funciones accesibles con teclado. Tab/Shift+Tab para navegar, Enter/Espacio para activar. Focus visible en elementos interactivos.</li><li><strong>Etiquetas y nombres</strong>: todos los inputs con <code>&lt;label&gt;</code> asociado, imágenes con <code>alt</code> descriptivo, botones con texto o <code>aria-label</code>.</li><li><strong>Tiempo suficiente</strong>: dar control sobre límites de tiempo (pausar, extender). No timeouts automáticos sin advertencia.</li></ul><p>El criterio más chequeado es el <strong>contraste de color</strong> porque es fácil de medir y rompe constantemente en diseños modernos con grises sutiles.</p>"
      },
      {
        "title": "¿Cuándo cumplir con WCAG?",
        "content": "<p>Deberías cumplir WCAG AA en:</p><ul><li><strong>Sitios gubernamentales</strong>: obligatorio por ley en EU (EN 301 549), USA (Section 508), y muchos países.</li><li><strong>E-commerce y servicios públicos</strong>: en algunos países es requisito legal (ej: ADA en USA). Además, 15-20% de la población tiene alguna discapacidad, son clientes potenciales.</li><li><strong>Productos SaaS</strong>: empresas grandes no compran software inaccesible por políticas internas o riesgo legal.</li><li><strong>Aplicaciones educativas</strong>: estudiantes con discapacidades tienen derecho a acceso equitativo.</li></ul><p>Más allá de lo legal, la accesibilidad mejora la experiencia para todos: subtítulos ayudan en ambientes ruidosos, buen contraste facilita lectura bajo sol, navegación por teclado acelera usuarios power. Es diseño inclusivo, no un checkbox de compliance.</p>"
      },
      {
        "title": "Herramientas y mejores prácticas",
        "content": "<p><strong>Verificación de contraste</strong>: Usá checkers como el de Genfy antes de publicar. Chrome DevTools tiene auditoría Lighthouse que detecta problemas de contraste. Plugins de Figma/Sketch verifican en tiempo de diseño.</p><p><strong>Semántica HTML</strong>: Usá elementos correctos (<code>&lt;button&gt;</code> en vez de <code>&lt;div onclick&gt;</code>, <code>&lt;nav&gt;</code> para navegación, <code>&lt;main&gt;</code> para contenido principal). Screen readers dependen de esto para anunciar el tipo de elemento.</p><p><strong>ARIA cuando es necesario</strong>: ARIA (Accessible Rich Internet Applications) complementa HTML para componentes complejos. Ejemplo: <code>aria-expanded</code> en acordeones, <code>aria-live</code> para notificaciones dinámicas. Pero nunca uses ARIA para simular HTML semántico existente.</p><p><strong>Testing real</strong>: Probá con screen readers (NVDA en Windows gratis, VoiceOver en Mac/iOS). Navegá tu sitio solo con teclado. Las herramientas automáticas detectan 30-40% de problemas, el resto necesita testing manual.</p><p><strong>No confíes solo en color</strong>: errores en rojo, éxitos en verde no alcanzan. Agregá íconos, texto o patrones. Un usuario con deuteranomalía (daltonismo rojo-verde) no distingue esos colores.</p>"
      }
    ],
    "examples": [
      "Contraste AA: #595959 sobre blanco = 7:1 (pasa), #767676 = 4.6:1 (pasa), #999999 = 2.8:1 (falla)",
      "<label for=\"email\">Email</label><input id=\"email\" type=\"email\"> — Etiqueta correcta",
      "<button aria-expanded=\"false\" aria-controls=\"menu\">Menú</button> — ARIA en toggle",
      "<img src=\"logo.png\" alt=\"Genfy: herramientas para desarrolladores\"> — Alt descriptivo",
      "font-size: clamp(1rem, 2vw, 1.5rem); — Texto escalable sin romper layout"
    ],
    "related": [
      "verificador-contraste-de-colores",
      "generador-de-paletas-de-colores"
    ],
    "faq": [
      {
        "q": "¿WCAG AA es suficiente o necesito AAA?",
        "a": "AA es suficiente para la mayoría de sitios y es el nivel requerido legalmente en casi todas las jurisdicciones. AAA es aspiracional, requiere contraste 7:1 (muy difícil con diseños modernos) y otros criterios estrictos. Apuntá a AA completo antes de considerar AAA. Algunos criterios AAA son imposibles de cumplir en ciertos tipos de contenido (ej: videos en vivo con lenguaje de señas en tiempo real)."
      },
      {
        "q": "¿Cómo verifico si mi sitio cumple WCAG?",
        "a": "Usá herramientas automáticas primero: Lighthouse en Chrome DevTools, axe DevTools (extensión), WAVE (WebAIM). Detectan contraste, HTML semántico, alt text faltante. Después probá manualmente: navegá solo con teclado, usá un screen reader (NVDA gratis en Windows, VoiceOver en Mac). Para certificación legal, contratá una auditoría profesional: las herramientas automáticas solo detectan 30-40% de problemas."
      },
      {
        "q": "¿El modo oscuro afecta el cumplimiento de WCAG?",
        "a": "Sí. Si ofrecés modo oscuro, ambos temas (claro y oscuro) deben cumplir WCAG AA independientemente. Un texto que pasa contraste en modo claro puede fallar en oscuro y viceversa. Verificá ambos. Usá custom properties CSS para cambiar colores y probá contraste en ambos temas. El usuario puede preferir oscuro por sensibilidad a luz, no es opcional."
      }
    ]
  },
  "en": {
    "pageTitle": "WCAG — Glossary | Genfy",
    "metaDesc": "WCAG are the Web Content Accessibility Guidelines, international web accessibility standard with levels A, AA and AAA based on contrast and other usability criteria.",
    "h1": "WCAG",
    "short": "WCAG (Web Content Accessibility Guidelines) are the W3C's web accessibility guidelines, the international standard that defines how to make web content accessible to people with disabilities.",
    "body": [
      {
        "title": "What is WCAG?",
        "content": "<p>WCAG are the <strong>Web Content Accessibility Guidelines</strong>, published by the W3C (World Wide Web Consortium). They define how to make web content accessible to people with visual, auditory, motor or cognitive disabilities. The current version is WCAG 2.1 (2018), with WCAG 2.2 (2023) adding new criteria.</p><p>The guidelines are organized into four principles: <strong>Perceivable</strong> (information and UI components must be presented in ways users can perceive), <strong>Operable</strong> (UI components and navigation must be operable), <strong>Understandable</strong> (information and operation must be understandable), and <strong>Robust</strong> (content must be interpretable by assistive technologies).</p><p>WCAG defines three conformance levels: <strong>A</strong> (basic requirements, essential minimum), <strong>AA</strong> (recommended standard for most sites, legally required in many countries), and <strong>AAA</strong> (highest level, not always achievable for all content).</p>"
      },
      {
        "title": "How does WCAG level AA work?",
        "content": "<p>Level <strong>AA</strong> is the de facto standard for public and commercial sites. It includes:</p><ul><li><strong>Color contrast</strong>: minimum 4.5:1 ratio for normal text (3:1 for large text ≥18pt or ≥14pt bold). Example: gray text #767676 on white passes, #999 doesn't.</li><li><strong>Resizable text</strong>: must be enlargeable 200% without loss of functionality. Don't use fixed units for text (avoid <code>font-size: 14px;</code>, use <code>rem</code>).</li><li><strong>Keyboard navigation</strong>: all functions accessible by keyboard. Tab/Shift+Tab to navigate, Enter/Space to activate. Visible focus on interactive elements.</li><li><strong>Labels and names</strong>: all inputs with associated <code>&lt;label&gt;</code>, images with descriptive <code>alt</code>, buttons with text or <code>aria-label</code>.</li><li><strong>Enough time</strong>: give control over time limits (pause, extend). No automatic timeouts without warning.</li></ul><p>The most checked criterion is <strong>color contrast</strong> because it's easy to measure and constantly breaks in modern designs with subtle grays.</p>"
      },
      {
        "title": "When to comply with WCAG?",
        "content": "<p>You should comply with WCAG AA on:</p><ul><li><strong>Government websites</strong>: mandatory by law in EU (EN 301 549), USA (Section 508), and many countries.</li><li><strong>E-commerce and public services</strong>: in some countries it's a legal requirement (e.g., ADA in USA). Additionally, 15-20% of the population has some disability, they're potential customers.</li><li><strong>SaaS products</strong>: large companies don't buy inaccessible software due to internal policies or legal risk.</li><li><strong>Educational applications</strong>: students with disabilities have a right to equitable access.</li></ul><p>Beyond legal requirements, accessibility improves experience for everyone: captions help in noisy environments, good contrast facilitates reading in sunlight, keyboard navigation speeds up power users. It's inclusive design, not a compliance checkbox.</p>"
      },
      {
        "title": "Tools and best practices",
        "content": "<p><strong>Contrast checking</strong>: Use checkers like Genfy's before publishing. Chrome DevTools has Lighthouse audit that detects contrast issues. Figma/Sketch plugins verify at design time.</p><p><strong>Semantic HTML</strong>: Use correct elements (<code>&lt;button&gt;</code> instead of <code>&lt;div onclick&gt;</code>, <code>&lt;nav&gt;</code> for navigation, <code>&lt;main&gt;</code> for main content). Screen readers depend on this to announce element type.</p><p><strong>ARIA when necessary</strong>: ARIA (Accessible Rich Internet Applications) complements HTML for complex components. Example: <code>aria-expanded</code> on accordions, <code>aria-live</code> for dynamic notifications. But never use ARIA to simulate existing semantic HTML.</p><p><strong>Real testing</strong>: Test with screen readers (NVDA on Windows free, VoiceOver on Mac/iOS). Navigate your site with keyboard only. Automatic tools detect 30-40% of issues, the rest needs manual testing.</p><p><strong>Don't rely on color alone</strong>: red errors, green successes aren't enough. Add icons, text or patterns. A user with deuteranomaly (red-green color blindness) can't distinguish those colors.</p>"
      }
    ],
    "examples": [
      "AA contrast: #595959 on white = 7:1 (pass), #767676 = 4.6:1 (pass), #999999 = 2.8:1 (fail)",
      "<label for=\"email\">Email</label><input id=\"email\" type=\"email\"> — Correct label",
      "<button aria-expanded=\"false\" aria-controls=\"menu\">Menu</button> — ARIA on toggle",
      "<img src=\"logo.png\" alt=\"Genfy: tools for developers\"> — Descriptive alt",
      "font-size: clamp(1rem, 2vw, 1.5rem); — Scalable text without breaking layout"
    ],
    "related": [
      "color-contrast-checker",
      "color-palette-generator"
    ],
    "faq": [
      {
        "q": "Is WCAG AA enough or do I need AAA?",
        "a": "AA is sufficient for most sites and is the legally required level in almost all jurisdictions. AAA is aspirational, requires 7:1 contrast (very difficult with modern designs) and other strict criteria. Aim for complete AA before considering AAA. Some AAA criteria are impossible to meet for certain content types (e.g., live videos with real-time sign language)."
      },
      {
        "q": "How do I verify if my site complies with WCAG?",
        "a": "Use automatic tools first: Lighthouse in Chrome DevTools, axe DevTools (extension), WAVE (WebAIM). They detect contrast, semantic HTML, missing alt text. Then test manually: navigate with keyboard only, use a screen reader (NVDA free on Windows, VoiceOver on Mac). For legal certification, hire a professional audit: automatic tools only detect 30-40% of issues."
      },
      {
        "q": "Does dark mode affect WCAG compliance?",
        "a": "Yes. If you offer dark mode, both themes (light and dark) must comply with WCAG AA independently. Text that passes contrast in light mode may fail in dark mode and vice versa. Check both. Use CSS custom properties to change colors and test contrast in both themes. Users may prefer dark mode due to light sensitivity, it's not optional."
      }
    ]
  }
};
