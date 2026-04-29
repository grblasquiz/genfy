import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-wireframe-texto",
    "en": "text-wireframe-generator"
  },
  "category": "design",
  "emoji": "📐",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Wireframes en Texto ASCII | Genfy",
    "metaDesc": "Generá wireframes en arte ASCII de layouts web: header, sidebar, content, footer. Mockups rápidos para documentación, propuestas y discusión visual de equipo.",
    "h1": "Generador de Wireframes ASCII",
    "intro": "Creá mockups rápidos de layouts web en formato ASCII para incluir en documentos, issues de GitHub o propuestas. Estructuras claras de header, sidebar y contenido.",
    "tag": "Diseño",
    "filterLabel": "Tipo de layout",
    "countLabel": "Cantidad",
    "generateLabel": "Generar wireframes",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "landing",
        "label": "Landing pages",
        "items": [
          "Hero clásico con titular grande, subtítulo, botón primario y mockup a la derecha en columnas iguales",
          "Hero centrado con titular, descripción corta, dos botones (primario y secundario) y video embebido debajo",
          "Hero con fondo full-bleed, titular sobre imagen, formulario de email inline para captura inmediata de leads",
          "Hero split con texto izquierda y carousel de testimonios derecha alternando cada cinco segundos",
          "Hero minimalista con solo titular grande, un párrafo descriptivo y un único CTA centrado destacado",
          "Sección de features en grilla 3x2 con iconos, título y descripción corta cada una en cards",
          "Sección de logos de clientes en banda horizontal con efecto grayscale y animación slow scroll lateral",
          "Sección de testimonios con avatar, nombre, cargo, empresa y quote en columnas de tres elementos",
          "Sección de precios con tres planes en columnas: starter, pro y enterprise con feature comparison",
          "Sección de FAQ con accordion expandible, máximo siete preguntas frecuentes ordenadas por relevancia",
          "Footer simple con logo, links a producto, empresa, legal y redes sociales en cuatro columnas",
          "Footer compacto con copyright, links principales y newsletter signup en una sola línea horizontal",
          "Header sticky con logo izquierda, navegación central con cinco items, y CTA principal a la derecha",
          "Header transparente sobre hero que se vuelve sólido al hacer scroll mostrando sombra discreta",
          "Sección de comparación con tabla de features versus competidores destacando ventajas competitivas reales",
          "Sección de stats con números grandes animados al entrar en viewport con descripción corta debajo",
          "Sección de timeline horizontal mostrando proceso paso a paso con conectores entre etapas",
          "Sección CTA final ancha con titular potente, subtítulo y botón grande centrado destacado visualmente",
          "Sección de blog posts recientes en grilla 3x1 con thumbnail, título, fecha y autor por cada artículo",
          "Sección de integraciones con grid 4x2 de logos clickeables que llevan a páginas de cada integración",
          "Banner promocional dismissible arriba del header con copy de oferta y botón de acción primario claro",
          "Sección de equipo con foto, nombre, cargo y bio corta en grilla 4x1 con hover de redes sociales",
          "Sección de casos de éxito con foto del cliente, métrica destacada y link al case study completo",
          "Sección de proceso de onboarding con cuatro pasos numerados, iconos y descripción de cada uno",
          "Sección de comparativa antes/después usando split horizontal con divisor draggable interactivo",
          "Sección de demo en video embedded con play overlay personalizado y autoplay desactivado por default"
        ]
      },
      {
        "id": "dashboard",
        "label": "Dashboards",
        "items": [
          "Sidebar izquierdo colapsable de 240px con logo, navegación primaria, secundaria y user profile abajo",
          "Topbar fijo con buscador central, notificaciones campana, avatar y menú dropdown del usuario logueado",
          "Layout principal con sidebar fijo, topbar fijo y área de contenido scrolleable independiente",
          "Cards de KPIs en grilla 4x1 mostrando número grande, label, comparación con período anterior y tendencia",
          "Gráfico principal grande ocupando 2/3 del ancho con tabs para cambiar entre métricas distintas",
          "Tabla de datos con paginación abajo, filtros arriba, búsqueda y opciones de exportar en menú",
          "Lista de actividad reciente en panel lateral derecho de 320px con timeline e iconos por tipo evento",
          "Layout de configuración con sidebar interno de secciones a la izquierda y formulario amplio derecha",
          "Vista de calendario tipo Google Calendar con sidebar de mini-calendario y eventos del día principal",
          "Vista Kanban con columnas drag-and-drop, header de cada columna con count y botón de agregar nueva",
          "Vista lista detallada con ordenamiento por columnas, selección múltiple checkbox y bulk actions arriba",
          "Vista de detalle de item con sidebar derecho de metadata y área principal de contenido editable",
          "Modal de creación con formulario centrado, campos requeridos marcados y CTAs primario/secundario",
          "Wizard multi-paso con progress bar arriba mostrando step actual y navegación adelante/atrás abajo",
          "Vista split con lista a la izquierda y detalle a la derecha tipo email client estándar",
          "Toast notifications esquina superior derecha con auto-dismiss configurable y stack vertical visible",
          "Empty state ilustrado con título, descripción amigable y CTA para comenzar a usar la feature",
          "Skeleton loader mientras carga contenido de tablas, cards y listas reproduciendo estructura final",
          "Filtros sidebar derecho con secciones expandibles, multiselect, range sliders y reset all button",
          "Comparativa side-by-side de dos métricas con scroll sincronizado y diff highlighting visual claro",
          "Drawer lateral derecho ancho que aparece sobre contenido para crear/editar sin navegación adicional",
          "Sticky table headers que mantienen visibilidad al scrollear tablas largas con datos de muchas filas",
          "Breadcrumbs en topbar con jerarquía clickeable hasta cinco niveles para navegación contextual rápida",
          "Mini chart sparkline dentro de cards de KPI mostrando tendencia últimos 30 días en una línea",
          "Tab navigation horizontal en cabecera de páginas para cambiar vistas sin cambiar URL completa",
          "Quick filters chips removibles arriba de tablas mostrando filtros activos con clear all opcional"
        ]
      },
      {
        "id": "ecommerce",
        "label": "Ecommerce",
        "items": [
          "Listing de productos en grilla 4x4 con imagen, nombre, precio y botón add-to-cart en hover overlay",
          "Sidebar de filtros izquierda con categorías checkbox, range slider de precio, marcas y rating estrellas",
          "Detalle de producto con galería de imágenes izquierda y información, precio, CTA derecha en columnas",
          "Carrito en sidebar derecho slide-out con lista de items, subtotal, descuento aplicado y checkout button",
          "Checkout en single page con secciones envío, pago y revisión apiladas verticalmente con resumen lateral",
          "Checkout en steps separados navegando entre pantallas con progress bar superior indicando paso actual",
          "Mini cart dropdown desde el icono del carrito en topbar mostrando últimos items agregados con totales",
          "Modal de quick view de producto sin abandonar página de listing con galería y CTA simplificado",
          "Comparador de productos con tabla horizontal mostrando hasta 4 productos lado a lado con specs",
          "Sección de productos relacionados horizontal scrolleable debajo del detalle del producto principal",
          "Reviews y ratings en sección expandible con filtro por estrellas, ordenamiento y opción de escribir",
          "Grid de categorías destacadas en homepage con imagen background y título de categoría centrado",
          "Banner de envío gratis sticky arriba con countdown a fin de promoción para crear urgencia visible",
          "Wishlist accesible desde header con icono de corazón mostrando count y dropdown rápido de items",
          "Página de cuenta con sidebar de secciones y dashboard inicial con últimos pedidos y datos personales",
          "Tracking de pedido visual con timeline horizontal de pasos completados y estimación de entrega final",
          "Página de checkout exitoso con número de orden destacado, resumen y botones para próximos pasos",
          "Modal de talles con tabla de medidas reales y guía visual para elegir correctamente el tamaño",
          "Sticky add-to-cart bar abajo en mobile con precio, cantidad y CTA siempre visible al scrollear",
          "Sección de cross-sell antes del checkout sugiriendo productos complementarios con descuento promocional",
          "Filtros aplicados como chips removibles arriba del grid de productos con opción de limpiar todos",
          "Búsqueda inteligente con autocomplete dropdown mostrando productos, categorías y términos sugeridos",
          "Notificación de stock bajo en producto destacando urgencia con texto rojo y count actual disponible",
          "Selector de variantes (color, talla) interactivo con imágenes de cada opción y stock por variante",
          "Modal de login/register obligatorio en checkout o opción de continuar como guest claramente disponible",
          "Banner de cookies persistente abajo con opciones aceptar todo, rechazar y configurar granularmente"
        ]
      },
      {
        "id": "mobile",
        "label": "Mobile app",
        "items": [
          "Bottom tab bar fijo con cinco tabs principales: home, search, create, notifications, profile circular",
          "Pantalla home con header, feed scrolleable de cards y FAB (floating action button) abajo derecha",
          "Pantalla de búsqueda con input arriba, filtros en chips horizontales scrolleables y lista de resultados",
          "Pantalla de detalle con back button arriba izquierda, share derecha y contenido scrolleable principal",
          "Onboarding de tres pantallas con ilustración, título, descripción y dots indicator inferior centrado",
          "Login/signup con tabs alternativos, campos email/password y botones de social login Google/Apple",
          "Pantalla de chat tipo WhatsApp con burbujas alineadas y input fijo abajo con botón send a la derecha",
          "Lista de conversaciones con avatar circular izquierda, nombre, último mensaje y timestamp por item",
          "Settings page con secciones agrupadas, switches, navegación a sub-pantallas y logout abajo destacado",
          "Profile page con header de cover, avatar grande, nombre, bio, stats y tabs para contenido propio",
          "Pull-to-refresh con animación de carga personalizada al deslizar hacia abajo desde top de lista",
          "Modal bottom sheet expandible con drag handle, contenido scrolleable y dismiss al tocar backdrop",
          "Toast inferior con icon, mensaje corto y opción de undo para acciones reversibles ejecutadas",
          "Empty state con ilustración centrada, título, descripción y CTA para crear primer item del usuario",
          "Camera screen full screen con preview, botón de captura grande centrado abajo y controles laterales",
          "Map screen full screen con search bar arriba, FAB de ubicación y bottom sheet con resultados",
          "Lista de notificaciones agrupadas por día con iconos por tipo y badge no leído destacado",
          "Pantalla de error 404 con ilustración, mensaje amigable y botón para volver al inicio destacado",
          "Skeleton loader específico móvil con shapes de cards reales del contenido próximo a renderizarse",
          "Splash screen con logo centrado animado y carga de recursos iniciales antes del primer render",
          "Navigation drawer izquierdo con header de usuario, menú principal y opciones secundarias agrupadas",
          "Stories horizontal scrolleable arriba del feed con avatares circulares y borde colorido si nuevo",
          "Detail screen tipo Instagram con header, imagen ancha, acciones (like, comment, share) y caption",
          "Wizard tipo Tinder con cards stack swipeable izquierda/derecha y botones de acción abajo grandes",
          "Settings switch toggle con texto descriptivo a la izquierda y switch nativo iOS/Android derecha",
          "Action sheet emergente desde abajo con opciones listadas verticalmente y cancel destacado al final"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Para qué sirven los wireframes ASCII y cuándo usarlos",
        "body": "<p>Los wireframes ASCII son ideales en contextos donde no podés (o no querés) usar Figma o Sketch: tickets de Jira, issues de GitHub, comentarios en pull requests, propuestas técnicas en markdown, RFCs y especificaciones de producto. Mantienen estructura visible directamente en texto, sin requerir abrir herramientas externas. Para discusiones rápidas en Slack o documentación inline, son insuperables como recurso de comunicación visual mínima.</p><p>El otro caso fuerte es <strong>diseño temprano</strong> antes de invertir tiempo en herramientas. Cuando estás explorando ideas iniciales, dibujar 5 layouts ASCII en 10 minutos es más eficiente que hacer 5 mockups detallados en Figma. Las decisiones de jerarquía, ubicación y proporciones se toman a este nivel. Recién cuando hay consenso sobre la estructura básica, vale la pena invertir en alta fidelidad para refinar detalles visuales finales.</p><p>El tercer caso útil es <strong>code reviews y handoff técnico</strong>. En un PR donde discutís cambios de UI, un ASCII rápido en el comentario evita ambigüedad. 'El sidebar debería estar a la derecha' es vago. Pegar un wireframe ASCII muestra exactamente la propuesta. Esto reduce iteraciones de feedback y acelera convergencia hacia la solución final aprobada por el equipo de diseño.</p>"
      },
      {
        "h2": "Convenciones que mantienen wireframes ASCII legibles",
        "body": "<p>Usá caracteres consistentes para tipos de elementos. Las cajas con bordes (`+---+`, `|`) representan contenedores. Texto sin marcos representa contenido. `[Button]` con corchetes son acciones clickeables. `{ Input }` con llaves son campos de formulario. `( ◯ )` con paréntesis son radio buttons o checkboxes. Mantener convención consistente entre wireframes del mismo proyecto facilita lectura sin re-explicar simbología cada vez.</p><p>El <strong>tamaño de la grilla</strong> importa para legibilidad. Wireframes muy chicos (40 caracteres ancho) pierden detalle. Muy grandes (200+) no entran en code blocks típicos. El sweet spot está entre 60-80 caracteres de ancho, que coincide con líneas de código típicas y márgenes de markdown render. Si necesitás más detalle, dividí en múltiples wireframes secuenciales en lugar de uno gigante difícil de leer.</p><p>Etiquetá secciones explícitamente. En lugar de dejar áreas en blanco que el lector debe interpretar, escribí <strong>[HEADER]</strong>, <strong>[SIDEBAR]</strong>, <strong>[CONTENT]</strong>, <strong>[FOOTER]</strong>. Esto elimina ambigüedad en wireframes complejos. Si una sección tiene sub-elementos, listalos: dentro del header indicá `Logo | Nav | CTA`. La precisión textual compensa la falta de fidelidad visual del medio elegido.</p>"
      },
      {
        "h2": "Cuándo NO usar wireframes ASCII y elegir otra herramienta",
        "body": "<p>No uses ASCII cuando la interacción es central. Animaciones, transiciones, estados hover, micro-interacciones requieren herramientas con prototipado real como Figma o Framer. ASCII captura layout estático, no comportamiento dinámico. Si tu propuesta depende de cómo se siente la interacción al usarla, gastá el tiempo en prototipo de alta fidelidad. Un ASCII de un drag-and-drop no comunica nada útil sobre la experiencia real.</p><p>No uses ASCII para <strong>presentaciones a stakeholders</strong>. Los ejecutivos y clientes esperan visuales pulidos. Mostrar ASCII en una propuesta comercial transmite poco profesionalismo, aunque la estructura sea correcta. Reservalo para audiencias técnicas (devs, PMs, diseñadores en internal review) que valoran rapidez sobre estética. Para venta o aprobación externa, invertir en mockups visuales paga dividendos en credibilidad percibida.</p><p>Tampoco funciona para <strong>diseños responsivos complejos</strong> que cambian estructura entre breakpoints. Capturar tres versiones (mobile, tablet, desktop) en ASCII genera tres wireframes separados que confunden más de lo que aclaran. Las herramientas modernas muestran adaptación responsive de un solo design. Si tu proyecto tiene mucha variación entre devices, mejor invertir directamente en herramientas que soporten esto nativamente desde el inicio del trabajo.</p>"
      },
      {
        "h2": "Tips para crear wireframes ASCII más efectivos rápidamente",
        "body": "<p>Empezá siempre por el <strong>esqueleto</strong> antes que detalles. Primer pase: header, content, footer en cajas vacías. Segundo pase: dividí el content en secciones principales. Tercer pase: agregá elementos específicos dentro de cada sección. Esta jerarquía descendente evita gastar tiempo detallando elementos que después decidís reorganizar al ver el conjunto. La estructura general debe convencerte antes de poblar contenido específico.</p><p>Usá <strong>repetición visual</strong> para indicar listas o grids. En lugar de detallar cada item de un grid 4x4, mostrá uno o dos completos y representá los demás con `(...)` o repeticiones genéricas. El lector entiende el patrón. Detallar 16 cards idénticas es ruido visual sin información adicional. Mostrar uno claro y la cantidad total comunica más con menos espacio de código fuente requerido.</p><p>Anotá tu wireframe con <strong>notas marginales</strong> usando comentarios o líneas de texto debajo. 'Header sticky al scrollear' o 'Click en card abre modal de detalle' agregan contexto que ASCII puro no captura. Estas notas son tan importantes como el wireframe en sí: comunican intención dinámica que el visual estático no puede transmitir. Sin esas anotaciones, el lector adivina y frecuentemente adivina mal.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Los wireframes ASCII reemplazan herramientas como Figma?",
        "a": "No, son complementarios. ASCII funciona para discusión rápida, documentación inline en código y exploración temprana. Figma sigue siendo necesario para alta fidelidad, prototipado interactivo y handoff a desarrollo con specs visuales precisos."
      },
      {
        "q": "¿Cómo comparto wireframes ASCII manteniendo el formato?",
        "a": "Usá code blocks markdown con triple backtick. En Slack, Discord, GitHub y plataformas similares respetan el formato monospace. Para emails o documentos Word, copiar como texto pierde alineación: convertí a imagen o screenshot del code block."
      },
      {
        "q": "¿Qué fuente uso para crear wireframes ASCII?",
        "a": "Cualquier fuente monospace: Courier New, Monaco, Consolas, JetBrains Mono. La clave es ancho fijo de caracteres. Fuentes proporcionales rompen alineación y hacen ilegible el wireframe. Tu editor de código probablemente ya usa monospace por defecto."
      },
      {
        "q": "¿Funciona para wireframes mobile o solo desktop?",
        "a": "Funciona para ambos. Para mobile usá grilla más angosta (40-50 caracteres) que represente el viewport vertical. Para desktop podés extender a 80-100 caracteres. La proporción aproximada del viewport real ayuda a no diseñar layouts irreales."
      }
    ]
  },
  "en": {
    "pageTitle": "ASCII Text Wireframe Generator | Genfy",
    "metaDesc": "Generate ASCII art wireframes of web layouts: header, sidebar, content, footer. Quick mockups for documentation, proposals, and team visual discussion.",
    "h1": "ASCII Wireframe Generator",
    "intro": "Create quick layout mockups in ASCII format to include in docs, GitHub issues, or proposals. Clear structures of header, sidebar, and content.",
    "tag": "Design",
    "filterLabel": "Layout type",
    "countLabel": "Amount",
    "generateLabel": "Generate wireframes",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "landing",
        "label": "Landing pages",
        "items": [
          "Classic hero with large headline, subheading, primary button, and mockup on the right in equal columns",
          "Centered hero with headline, short description, two buttons (primary and secondary), and embedded video below",
          "Hero with full-bleed background, headline over image, inline email form for immediate lead capture",
          "Split hero with text on left and testimonials carousel right alternating every five seconds",
          "Minimal hero with only large headline, descriptive paragraph, and a single highlighted centered CTA",
          "Features section in 3x2 grid with icons, title, and short description per card",
          "Customer logos section in horizontal band with grayscale effect and slow lateral scroll animation",
          "Testimonials section with avatar, name, role, company, and quote in three-column layout",
          "Pricing section with three plan columns: starter, pro, and enterprise with feature comparison",
          "FAQ section with expandable accordion, max seven frequently asked questions ordered by relevance",
          "Simple footer with logo, links to product, company, legal, and social media in four columns",
          "Compact footer with copyright, main links, and newsletter signup in a single horizontal line",
          "Sticky header with logo left, central navigation with five items, and primary CTA right",
          "Transparent header over hero that becomes solid on scroll showing discreet shadow",
          "Comparison section with feature table versus competitors highlighting real competitive advantages",
          "Stats section with large numbers animated entering viewport with short description below",
          "Horizontal timeline section showing step-by-step process with connectors between stages",
          "Final wide CTA section with powerful headline, subheading, and large centered visually highlighted button",
          "Recent blog posts section in 3x1 grid with thumbnail, title, date, and author per article",
          "Integrations section with 4x2 grid of clickable logos leading to each integration's page",
          "Dismissible promotional banner above header with offer copy and clear primary action button",
          "Team section with photo, name, role, and short bio in 4x1 grid with social hover effects",
          "Success cases section with client photo, highlighted metric, and link to full case study",
          "Onboarding process section with four numbered steps, icons, and description for each",
          "Before/after comparison section using horizontal split with interactive draggable divider",
          "Embedded video demo section with custom play overlay and autoplay disabled by default"
        ]
      },
      {
        "id": "dashboard",
        "label": "Dashboards",
        "items": [
          "240px collapsible left sidebar with logo, primary navigation, secondary, and user profile at bottom",
          "Fixed topbar with central search, notifications bell, avatar, and logged-in user dropdown menu",
          "Main layout with fixed sidebar, fixed topbar, and independently scrollable content area",
          "KPI cards in 4x1 grid showing large number, label, comparison with previous period, and trend",
          "Large main chart occupying 2/3 of width with tabs to switch between different metrics",
          "Data table with bottom pagination, top filters, search, and export options in menu",
          "Recent activity list in 320px right side panel with timeline and icons per event type",
          "Configuration layout with internal section sidebar on left and broad form on right",
          "Google Calendar-style view with mini-calendar sidebar and main day events display",
          "Kanban view with drag-and-drop columns, header per column with count and add new button",
          "Detailed list view with column sorting, multi-select checkbox, and bulk actions on top",
          "Item detail view with right metadata sidebar and main editable content area",
          "Creation modal with centered form, marked required fields, and primary/secondary CTAs",
          "Multi-step wizard with top progress bar showing current step and forward/back navigation",
          "Split view with left list and right detail in standard email client style",
          "Toast notifications top right corner with configurable auto-dismiss and visible vertical stack",
          "Illustrated empty state with title, friendly description, and CTA to start using the feature",
          "Skeleton loader while loading table, card, and list content reproducing final structure",
          "Right sidebar filters with expandable sections, multiselect, range sliders, and reset all button",
          "Side-by-side comparison of two metrics with synchronized scroll and clear visual diff highlighting",
          "Wide right side drawer appearing over content to create/edit without additional navigation",
          "Sticky table headers maintaining visibility when scrolling long tables with many data rows",
          "Topbar breadcrumbs with clickable hierarchy up to five levels for quick contextual navigation",
          "Sparkline mini chart inside KPI cards showing last 30-day trend in a single line",
          "Horizontal tab navigation in page headers to switch views without changing complete URL",
          "Removable quick filter chips above tables showing active filters with optional clear all"
        ]
      },
      {
        "id": "ecommerce",
        "label": "Ecommerce",
        "items": [
          "Product listing in 4x4 grid with image, name, price, and add-to-cart button on hover overlay",
          "Left filter sidebar with category checkboxes, price range slider, brands, and star ratings",
          "Product detail with image gallery on left and information, price, CTA right in columns",
          "Right slide-out cart with item list, subtotal, applied discount, and checkout button",
          "Single page checkout with shipping, payment, and review sections stacked vertically with side summary",
          "Step-separated checkout navigating between screens with top progress bar indicating current step",
          "Mini cart dropdown from topbar cart icon showing recently added items with totals",
          "Quick view product modal without leaving listing page with gallery and simplified CTA",
          "Product comparator with horizontal table showing up to 4 products side by side with specs",
          "Related products horizontal scrollable section below main product detail",
          "Reviews and ratings in expandable section with star filter, sorting, and write option",
          "Featured categories grid on homepage with background image and centered category title",
          "Sticky free shipping banner top with countdown to promotion end to create visible urgency",
          "Wishlist accessible from header with heart icon showing count and quick item dropdown",
          "Account page with section sidebar and initial dashboard with recent orders and personal data",
          "Visual order tracking with horizontal timeline of completed steps and final delivery estimate",
          "Successful checkout page with highlighted order number, summary, and next-step buttons",
          "Size modal with real measurements table and visual guide to choose correct size",
          "Mobile sticky add-to-cart bar at bottom with price, quantity, and CTA always visible on scroll",
          "Cross-sell section before checkout suggesting complementary products with promotional discount",
          "Applied filters as removable chips above product grid with option to clear all",
          "Smart search with autocomplete dropdown showing products, categories, and suggested terms",
          "Low stock notification on product highlighting urgency with red text and current available count",
          "Interactive variant selector (color, size) with images per option and stock per variant",
          "Mandatory login/register modal at checkout or clearly available continue as guest option",
          "Persistent cookie banner at bottom with accept all, reject, and configure granularly options"
        ]
      },
      {
        "id": "mobile",
        "label": "Mobile app",
        "items": [
          "Fixed bottom tab bar with five main tabs: home, search, create, notifications, circular profile",
          "Home screen with header, scrollable card feed, and FAB (floating action button) bottom right",
          "Search screen with top input, scrollable horizontal chip filters, and results list",
          "Detail screen with back button top left, share right, and main scrollable content",
          "Three-screen onboarding with illustration, title, description, and bottom centered dots indicator",
          "Login/signup with alternating tabs, email/password fields, and Google/Apple social login buttons",
          "WhatsApp-style chat screen with aligned bubbles and fixed bottom input with send button right",
          "Conversation list with circular left avatar, name, last message, and timestamp per item",
          "Settings page with grouped sections, switches, sub-screen navigation, and bottom highlighted logout",
          "Profile page with cover header, large avatar, name, bio, stats, and tabs for own content",
          "Pull-to-refresh with custom load animation when sliding down from top of list",
          "Expandable bottom sheet modal with drag handle, scrollable content, and dismiss on backdrop tap",
          "Bottom toast with icon, short message, and undo option for executed reversible actions",
          "Empty state with centered illustration, title, description, and CTA to create user's first item",
          "Full screen camera with preview, large centered capture button at bottom, and side controls",
          "Full screen map with top search bar, location FAB, and bottom sheet with results",
          "Notification list grouped by day with icons per type and highlighted unread badge",
          "404 error screen with illustration, friendly message, and highlighted home return button",
          "Mobile-specific skeleton loader with real card shapes for content about to be rendered",
          "Splash screen with centered animated logo and initial resource loading before first render",
          "Left navigation drawer with user header, main menu, and grouped secondary options",
          "Horizontal scrollable stories above feed with circular avatars and colored border if new",
          "Instagram-style detail screen with header, wide image, actions (like, comment, share), and caption",
          "Tinder-style wizard with left/right swipeable card stack and large action buttons at bottom",
          "Settings switch toggle with descriptive text on left and native iOS/Android switch right",
          "Action sheet emerging from bottom with vertically listed options and highlighted cancel at end"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What ASCII wireframes are for and when to use them",
        "body": "<p>ASCII wireframes are ideal in contexts where you can't (or don't want to) use Figma or Sketch: Jira tickets, GitHub issues, pull request comments, technical proposals in markdown, RFCs, and product specifications. They keep structure visible directly in text, without requiring opening external tools. For quick discussions on Slack or inline documentation, they're unbeatable as a minimal visual communication resource.</p><p>The other strong case is <strong>early design</strong> before investing time in tools. When exploring initial ideas, drawing 5 ASCII layouts in 10 minutes is more efficient than making 5 detailed Figma mockups. Hierarchy, location, and proportion decisions are made at this level. Only when there's consensus on basic structure is it worth investing in high fidelity to refine final visual details.</p><p>The third useful case is <strong>code reviews and technical handoff</strong>. In a PR where you discuss UI changes, a quick ASCII in the comment avoids ambiguity. 'The sidebar should be on the right' is vague. Pasting an ASCII wireframe shows exactly the proposal. This reduces feedback iterations and accelerates convergence toward the final solution approved by the design team.</p>"
      },
      {
        "h2": "Conventions that keep ASCII wireframes readable",
        "body": "<p>Use consistent characters for element types. Boxes with borders (`+---+`, `|`) represent containers. Plain text represents content. `[Button]` with brackets are clickable actions. `{ Input }` with braces are form fields. `( ◯ )` with parentheses are radio buttons or checkboxes. Maintaining consistent convention between same-project wireframes facilitates reading without re-explaining symbology each time.</p><p><strong>Grid size</strong> matters for readability. Very small wireframes (40 characters wide) lose detail. Very large ones (200+) don't fit in typical code blocks. The sweet spot is between 60-80 characters wide, matching typical code lines and markdown render margins. If you need more detail, divide into multiple sequential wireframes instead of one giant hard-to-read one.</p><p>Label sections explicitly. Instead of leaving blank areas the reader must interpret, write <strong>[HEADER]</strong>, <strong>[SIDEBAR]</strong>, <strong>[CONTENT]</strong>, <strong>[FOOTER]</strong>. This eliminates ambiguity in complex wireframes. If a section has sub-elements, list them: inside the header indicate `Logo | Nav | CTA`. Textual precision compensates for the lack of visual fidelity in the chosen medium.</p>"
      },
      {
        "h2": "When NOT to use ASCII wireframes and choose another tool",
        "body": "<p>Don't use ASCII when interaction is central. Animations, transitions, hover states, and micro-interactions require tools with real prototyping like Figma or Framer. ASCII captures static layout, not dynamic behavior. If your proposal depends on how the interaction feels when used, spend time on high-fidelity prototype. An ASCII of drag-and-drop communicates nothing useful about the real experience.</p><p>Don't use ASCII for <strong>stakeholder presentations</strong>. Executives and clients expect polished visuals. Showing ASCII in a commercial proposal conveys little professionalism, even if the structure is correct. Reserve it for technical audiences (devs, PMs, designers in internal review) who value speed over aesthetics. For external sales or approval, investing in visual mockups pays dividends in perceived credibility.</p><p>It also doesn't work for <strong>complex responsive designs</strong> that change structure between breakpoints. Capturing three versions (mobile, tablet, desktop) in ASCII generates three separate wireframes that confuse more than they clarify. Modern tools show responsive adaptation of a single design. If your project has much variation between devices, better invest directly in tools that natively support this from the start of work.</p>"
      },
      {
        "h2": "Tips to create more effective ASCII wireframes quickly",
        "body": "<p>Always start with the <strong>skeleton</strong> before details. First pass: header, content, footer in empty boxes. Second pass: divide content into main sections. Third pass: add specific elements within each section. This descending hierarchy avoids spending time detailing elements you later decide to reorganize when seeing the whole. The general structure must convince you before populating specific content.</p><p>Use <strong>visual repetition</strong> to indicate lists or grids. Instead of detailing each item of a 4x4 grid, show one or two complete and represent the rest with `(...)` or generic repetitions. The reader understands the pattern. Detailing 16 identical cards is visual noise without additional information. Showing one clear and the total count communicates more with less required source code space.</p><p>Annotate your wireframe with <strong>marginal notes</strong> using comments or text lines below. 'Header sticky on scroll' or 'Click on card opens detail modal' add context that pure ASCII doesn't capture. These notes are as important as the wireframe itself: they communicate dynamic intent that the static visual cannot transmit. Without those annotations, the reader guesses and frequently guesses wrong.</p>"
      }
    ],
    "faq": [
      {
        "q": "Do ASCII wireframes replace tools like Figma?",
        "a": "No, they're complementary. ASCII works for quick discussion, inline code documentation, and early exploration. Figma is still necessary for high fidelity, interactive prototyping, and development handoff with precise visual specs."
      },
      {
        "q": "How do I share ASCII wireframes maintaining the format?",
        "a": "Use markdown code blocks with triple backticks. Slack, Discord, GitHub, and similar platforms respect monospace format. For emails or Word documents, copying as text loses alignment: convert to image or screenshot of the code block."
      },
      {
        "q": "What font do I use to create ASCII wireframes?",
        "a": "Any monospace font: Courier New, Monaco, Consolas, JetBrains Mono. The key is fixed character width. Proportional fonts break alignment and make the wireframe illegible. Your code editor probably already uses monospace by default."
      },
      {
        "q": "Does it work for mobile wireframes or only desktop?",
        "a": "Works for both. For mobile use a narrower grid (40-50 characters) representing the vertical viewport. For desktop you can extend to 80-100 characters. Approximate real viewport proportion helps not designing unrealistic layouts."
      }
    ]
  }
};
