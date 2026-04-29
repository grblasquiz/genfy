import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-componentes-atomic",
    "en": "atomic-component-name-generator"
  },
  "category": "tech",
  "emoji": "⚛️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Componentes Atomic Design | Genfy",
    "metaDesc": "Generá nombres consistentes de componentes React/Vue siguiendo Atomic Design: atoms, molecules, organisms, templates y pages. Convención clara para tu design system.",
    "h1": "Generador de Componentes Atomic Design",
    "intro": "Nombrá componentes React, Vue o Svelte siguiendo la metodología Atomic Design. Convenciones consistentes para atoms, molecules, organisms y más.",
    "tag": "Frontend",
    "filterLabel": "Nivel atómico",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "atoms",
        "label": "Atoms",
        "items": [
          "Button - Componente básico de botón con variantes primary, secondary, ghost y disabled",
          "Input - Campo de texto base con soporte para tipos email, password, number y tel",
          "Label - Etiqueta de formulario con asociación accesible vía htmlFor a inputs",
          "Icon - Componente envoltorio para íconos SVG con tamaño y color configurable",
          "Avatar - Imagen circular o cuadrada con fallback de iniciales generadas automáticamente",
          "Badge - Indicador pequeño de estado, conteo o etiqueta con variantes de color",
          "Spinner - Indicador de carga animado con tamaños small, medium y large disponibles",
          "Divider - Separador visual horizontal o vertical con espaciado configurable por prop",
          "Checkbox - Casilla de verificación con estados checked, unchecked e indeterminate",
          "Radio - Botón de selección única dentro de un grupo de opciones mutuamente exclusivas",
          "Switch - Toggle on/off con animación suave y soporte para teclado nativo accesible",
          "Tag - Etiqueta cerrable con icono opcional y variante de color customizable",
          "Link - Enlace estilizado con estados hover, focus y visited consistentes",
          "Heading - Tipografía de títulos H1 a H6 con jerarquía visual definida en design system",
          "Text - Texto base con variantes de tamaño, peso y color configurables vía props",
          "Tooltip - Mensaje contextual que aparece on hover con posicionamiento automático",
          "Skeleton - Placeholder animado mientras carga contenido real con shapes configurables",
          "Progress - Barra de progreso lineal con porcentaje y label opcional asociado",
          "Slider - Selector de valor en rango con un solo handle o doble para rangos completos",
          "Textarea - Campo multilínea con auto-resize opcional según contenido escrito",
          "Select - Dropdown nativo HTML estilizado con soporte de placeholder visible",
          "Image - Imagen con lazy loading, fallback en error y aspect ratio configurable",
          "Video - Reproductor con controles nativos y poster image configurable inicial",
          "Code - Bloque inline o multilínea con syntax highlighting opcional según lenguaje",
          "Kbd - Representación visual de tecla del teclado con estilo monoespaciado distintivo",
          "Mark - Texto resaltado con highlight de color customizable según tema activo",
          "Logo - Marca visual del producto con variantes monocromática y full color"
        ]
      },
      {
        "id": "molecules",
        "label": "Molecules",
        "items": [
          "FormField - Combinación de Label, Input y mensaje de error con validación visual integrada",
          "SearchBar - Input de búsqueda con icono lupa, botón clear y opcionalmente shortcut keyboard",
          "Card - Contenedor con padding, sombra, header opcional y footer con CTAs configurables",
          "ButtonGroup - Conjunto de botones agrupados con bordes compartidos y selección coordinada",
          "Breadcrumb - Trail de navegación jerárquica con separadores y links clickeables hasta nivel actual",
          "Pagination - Controles de paginación con números, prev/next y jump to first/last",
          "DropdownMenu - Menú emergente desde botón trigger con items, submenús y separadores",
          "Toast - Notificación temporal con icon, mensaje, action button y auto-dismiss configurable",
          "Alert - Mensaje persistente con variantes info, success, warning y error claramente diferenciadas",
          "Modal - Diálogo modal con backdrop, header, content scroll y footer con CTAs principales",
          "Drawer - Panel deslizable lateral con header, content scrolleable y footer fijo opcional",
          "TabList - Conjunto de pestañas con tab panel asociado y navegación con teclado completa",
          "Stepper - Indicador de progreso multi-paso con estados completed, current y upcoming visibles",
          "DatePicker - Selector de fecha con calendario popup, navegación de meses y rango opcional",
          "TimePicker - Selector de hora con scrolls de horas, minutos y formato 12h o 24h configurable",
          "ColorPicker - Selector de color con presets, color wheel, sliders RGB y input hex manual",
          "RatingInput - Selección de estrellas con hover preview, half-stars opcionales y label",
          "FileUpload - Zona drag-and-drop con preview, progress bar y validación de tipo y tamaño",
          "MenuItem - Item individual de menú con icon opcional, label, descripción y shortcut display",
          "ListItem - Elemento de lista con avatar, content principal, metadata y actions secundarias",
          "Accordion - Sección colapsable con header clickeable, content expandible y indicador visual",
          "Carousel - Slider de items con navegación arrows, dots indicator y autoplay configurable",
          "AlertDialog - Modal de confirmación destructiva con icon de advertencia y CTAs claramente etiquetados",
          "Toolbar - Barra horizontal de acciones agrupadas por contexto con dividers y shortcuts visibles",
          "ContextMenu - Menú emergente desde click derecho con opciones contextuales según el target",
          "EmptyState - Combinación de ilustración, título, descripción y CTA para estados sin contenido",
          "MetricCard - Card especializada mostrando KPI con número grande, label, trend y comparación"
        ]
      },
      {
        "id": "organisms",
        "label": "Organisms",
        "items": [
          "Header - Cabecera del sitio con logo, navegación principal, búsqueda y user menu integrados",
          "Footer - Pie de página con links de producto, empresa, legal, redes y newsletter signup completo",
          "Sidebar - Panel lateral de navegación con secciones colapsables, search interno y user profile",
          "DataTable - Tabla con sorting, filtering, pagination, bulk selection y export configurable",
          "ProductCard - Card específica de producto con imagen, título, precio, rating y botón add-to-cart",
          "CommentThread - Hilo de comentarios anidados con replies, reactions y moderación de admin",
          "FilterPanel - Sidebar de filtros combinables con categorías, range sliders, search y reset all",
          "NotificationCenter - Panel completo de notificaciones agrupadas con filtros y mark-all-read",
          "UserProfile - Card amplia con avatar, info, stats, actions y tabs de contenido propio del usuario",
          "PricingTable - Comparativa de planes con features, CTAs, badges destacados y FAQ asociadas",
          "ChatWindow - Ventana completa de chat con conversación, input, attachments y participants list",
          "Calendar - Componente completo con month/week/day views, eventos drag-and-drop y filtros",
          "KanbanBoard - Tablero con columnas drag-and-drop, cards configurables y filtros de equipo",
          "MapView - Mapa interactivo con marcadores, clusters, popup info y controles de zoom personalizados",
          "Wizard - Flujo multi-paso con validación por step, navegación restringida y resumen final",
          "CheckoutForm - Formulario completo con shipping, billing, payment, summary y validación robusta",
          "AnalyticsDashboard - Panel completo con KPIs, charts principales, tablas y filtros temporales",
          "OnboardingTour - Tour guiado con tooltips secuenciales, skip option y progress indicator",
          "FeedList - Lista infinita scrolleable de items con virtualization y carga incremental",
          "ImageGallery - Galería con lightbox, zoom, navegación entre imágenes y descarga opcional",
          "VideoPlayer - Reproductor avanzado con controles custom, calidad selectable y subtítulos",
          "SearchResults - Página completa de resultados con filtros, sorting, paginación y empty state",
          "FormBuilder - Constructor visual de formularios con drag-and-drop de campos y validaciones",
          "Timeline - Línea temporal vertical u horizontal con eventos detallados y filtros por categoría",
          "ActivityFeed - Feed de actividad reciente con avatares, acciones, timestamps y agrupación inteligente",
          "AuthForm - Formulario de autenticación con login, signup, forgot password y social options",
          "Marketplace - Listado de items con cards, filtros, ordenamiento y comparador de hasta cuatro"
        ]
      },
      {
        "id": "templates-pages",
        "label": "Templates y Pages",
        "items": [
          "DashboardLayout - Template con sidebar colapsable, topbar fijo y área de contenido scrolleable",
          "AuthLayout - Template centrado para login/signup con logo arriba y formulario angosto centrado",
          "MarketingLayout - Template con header transparente, hero, secciones y footer amplio completo",
          "DocsLayout - Template de documentación con sidebar de navegación, content y TOC sticky derecha",
          "BlogLayout - Template de artículo con header, contenido legible, sidebar y posts relacionados",
          "EcommerceLayout - Template tienda con header de categorías, mini cart, content y footer extendido",
          "AppLayout - Template app con bottom tab bar, navigation drawer y content area principal",
          "SettingsLayout - Template configuración con sidebar de secciones y form area derecha amplia",
          "OnboardingPage - Página secuencial con ilustración, copy, CTA y progress indicator visible",
          "LandingPage - Página completa con hero, features, social proof, pricing, FAQ y CTA final",
          "PricingPage - Página dedicada a precios con toggle mensual/anual, planes y feature comparison",
          "AboutPage - Página institucional con misión, equipo, timeline, valores y links a redes",
          "ContactPage - Página con formulario de contacto, datos directos, mapa embedded y FAQ",
          "ProductDetailPage - Página de producto con galería, info, specs, reviews y productos relacionados",
          "CheckoutPage - Página completa de checkout con steps, payment options y order summary",
          "AccountDashboardPage - Página inicial de cuenta con orders recientes, addresses y settings rápidos",
          "OrderConfirmationPage - Página post-compra con número de orden, summary y tracking info",
          "BlogIndexPage - Página listado de posts con filtros por categoría, búsqueda y paginación",
          "BlogPostPage - Página de artículo individual con contenido, autor, fecha y comentarios",
          "DocsHomePage - Landing de documentación con quick start, search, popular topics y CTA",
          "ErrorPage - Página de error 404/500 con ilustración, mensaje y CTA de retorno al inicio",
          "MaintenancePage - Página de mantenimiento con mensaje, ETA estimado y links de status",
          "LoginPage - Página completa de login con form, social auth options y forgot password link",
          "SignupPage - Página de registro con form multi-step, social options y términos visibles",
          "SearchResultsPage - Página de resultados con filtros, sorting, paginación y suggested searches",
          "ProfilePublicPage - Página pública de perfil con info, posts, followers y botón follow/unfollow",
          "AdminDashboardPage - Panel admin con stats globales, user management y system health metrics"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Atomic Design: por qué la jerarquía importa",
        "body": "<p>Brad Frost popularizó Atomic Design como metodología para organizar design systems. La idea central es que las interfaces se descomponen en niveles jerárquicos: <strong>atoms</strong> son los elementos más básicos (botón, input, label), <strong>molecules</strong> combinan atoms en grupos funcionales (form field con label + input + error), <strong>organisms</strong> son secciones complejas (header completo, data table), <strong>templates</strong> definen layouts y <strong>pages</strong> son instancias específicas con contenido real.</p><p>El error más común es no respetar la jerarquía: una molecule no puede importar otra molecule, debe componerse solo de atoms. Si tu Card (molecule) necesita un Avatar y eso necesita un Image (atom), la composición es válida. Pero si tu MetricCard (molecule) importa otra Card (molecule), estás violando la metodología y creando dependencias circulares difíciles de mantener a escala.</p><p>El beneficio práctico es <strong>reusabilidad y consistencia</strong>. Un equipo con 50 componentes mal organizados duplica trabajo: tres Buttons distintos, dos versiones de Input, cuatro Cards. Un equipo siguiendo Atomic Design tiene un Button con variantes definidas en el design system. Cuando se necesita un nuevo caso, se extiende el atom existente, no se crea uno nuevo. La consistencia visual mejora dramáticamente.</p>"
      },
      {
        "h2": "Convenciones de naming que escalan",
        "body": "<p>Usá <strong>PascalCase</strong> para nombres de componentes. Es la convención de React, Vue y Svelte: ButtonGroup, no buttonGroup ni button-group. Esto distingue componentes de elementos HTML nativos. Para variantes, usá props en lugar de nombres separados: en vez de PrimaryButton y SecondaryButton, usá Button con prop variant. Esto evita explosión combinatoria de componentes específicos.</p><p>Para nombrar, seguí el patrón <strong>[Sustantivo][Modificador]</strong>: ProductCard (no CardProduct), UserProfile (no ProfileUser). El sustantivo principal va primero, los modificadores después. Esto facilita autocomplete: tipear 'Prod' muestra todos los componentes relacionados a productos. Si tipearas 'Card', se mezclarían con otros tipos no relacionados, complicando navegación dentro del proyecto.</p><p>Evitá nombres genéricos como <strong>Container</strong>, <strong>Wrapper</strong>, <strong>Box</strong>. Estos no comunican propósito y crecen sin control. Si necesitás un wrapper, especificá: PageContainer, FormWrapper, CenteredBox. Cada nombre debe responder a 'qué hace este componente'. Si no podés explicarlo en una frase, probablemente está haciendo demasiado y necesita división en componentes más pequeños y enfocados.</p>"
      },
      {
        "h2": "Errores comunes al implementar Atomic Design",
        "body": "<p>El error más caro es <strong>sobre-atomización</strong>. Crear un atom para cada elemento HTML lleva a 200 atoms inutilizables. Reservá atoms para elementos que realmente necesitan abstracción: Button (porque tiene variantes y estados), no Span. Si un componente solo es un wrapper sin lógica propia, no merece existir como atom. Mantené el design system enfocado en elementos con valor real de abstracción.</p><p>Otro error es <strong>props drilling extensivo</strong>. Si tu organism pasa 15 props que solo viajan a atoms internos, hay un problema arquitectónico. Considerá composición con children o context API. <strong>{`<Card>`}<strong>{`<Card.Header>...</Card.Header>`}</strong>{`<Card.Body>...</Card.Body>`}{`</Card>`}</strong> es más legible que Card con 20 props específicos. Las APIs compositivas escalan mejor para casos de uso variados sin complicar componentes simples.</p><p>El tercer error es <strong>no documentar variantes</strong>. Sin Storybook o documentación visual, los devs duplican componentes porque no saben qué existe. Implementá documentación obligatoria: cada componente debe tener stories mostrando todas sus variantes y estados. Esto convierte el design system en herramienta consultable activa, no solo carpeta de componentes esperando ser importados sin contexto sobre cómo usarlos correctamente.</p>"
      },
      {
        "h2": "Atomic Design en proyectos reales: adaptaciones útiles",
        "body": "<p>La metodología pura de Brad Frost asume rigidez total. En la práctica, los equipos adoptan variantes. <strong>Material UI y Ant Design</strong> usan estructura similar pero sin separación atoms/molecules estricta. Esto funciona para librerías generales. Para tu producto interno, podés ser más estricto: la consistencia interna importa más que adherir religiosamente a la metodología original publicada hace años.</p><p>Algunos equipos agregan un nivel <strong>quarks</strong> debajo de atoms: tokens de diseño (colores, espaciados, tipografías) que componen los atoms. Esto formaliza el design tokens layer y facilita theming. Otros eliminan templates como nivel separado, fusionándolo con pages. Cada decisión depende del tamaño del proyecto: equipos pequeños no necesitan 5 niveles, equipos enterprise sí los aprovechan plenamente.</p><p>La adopción exitosa requiere <strong>buy-in del equipo completo</strong>, no solo de diseñadores. Si los devs construyen componentes ad-hoc fuera del design system, la metodología muere. Establecé reglas: nuevos componentes pasan por review, deben justificar por qué no se puede usar uno existente. Frameworks como Storybook con linter integrado ayudan: detectan componentes duplicados o mal categorizados antes de merge a producción.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Atomic Design es solo para React o sirve para cualquier framework?",
        "a": "Sirve para cualquier framework de componentes: React, Vue, Svelte, Angular, Web Components nativos. La metodología es agnóstica al framework. Lo único específico de cada uno es la sintaxis de implementación, pero la jerarquía atoms-molecules-organisms aplica universalmente."
      },
      {
        "q": "¿Cuándo un componente es atom y cuándo es molecule?",
        "a": "Si el componente es indivisible funcionalmente (un Button es un Button), es atom. Si combina atoms para crear funcionalidad nueva (FormField = Label + Input + Error), es molecule. Regla práctica: si rompés el componente, ¿pierde su función? Si sí, es atom; si no, es molecule."
      },
      {
        "q": "¿Cuántos componentes debería tener mi design system?",
        "a": "Depende del tamaño del producto. Productos pequeños: 30-50 componentes son suficientes. Productos enterprise pueden tener 100-200. Más de eso suele indicar duplicación. Auditá periódicamente: componentes usados menos de 3 veces son candidatos a fusión o eliminación."
      },
      {
        "q": "¿Vale la pena adoptar Atomic Design en proyectos legacy?",
        "a": "Solo si planeás invertir en refactor significativo. Aplicarlo a proyectos en mantenimiento sin migrar componentes existentes genera inconsistencia. Mejor esperá una refactorización mayor o aplicalo solo a features nuevas mientras dejás lo legacy intacto temporalmente."
      }
    ]
  },
  "en": {
    "pageTitle": "Atomic Design Component Name Generator | Genfy",
    "metaDesc": "Generate consistent React/Vue component names following Atomic Design: atoms, molecules, organisms, templates, and pages. Clear convention for your design system.",
    "h1": "Atomic Design Component Generator",
    "intro": "Name React, Vue, or Svelte components following the Atomic Design methodology. Consistent conventions for atoms, molecules, organisms, and more.",
    "tag": "Frontend",
    "filterLabel": "Atomic level",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "atoms",
        "label": "Atoms",
        "items": [
          "Button - Basic button component with primary, secondary, ghost, and disabled variants",
          "Input - Base text field with support for email, password, number, and tel types",
          "Label - Form label with accessible association via htmlFor to inputs",
          "Icon - Wrapper component for SVG icons with configurable size and color",
          "Avatar - Circular or square image with automatically generated initials fallback",
          "Badge - Small indicator for status, count, or tag with color variants",
          "Spinner - Animated loading indicator with small, medium, and large sizes available",
          "Divider - Horizontal or vertical visual separator with configurable spacing per prop",
          "Checkbox - Checkbox with checked, unchecked, and indeterminate states",
          "Radio - Single selection button within a group of mutually exclusive options",
          "Switch - On/off toggle with smooth animation and native accessible keyboard support",
          "Tag - Closeable label with optional icon and customizable color variant",
          "Link - Styled link with consistent hover, focus, and visited states",
          "Heading - H1-H6 title typography with visual hierarchy defined in design system",
          "Text - Base text with configurable size, weight, and color variants via props",
          "Tooltip - Contextual message appearing on hover with automatic positioning",
          "Skeleton - Animated placeholder while real content loads with configurable shapes",
          "Progress - Linear progress bar with associated optional percentage and label",
          "Slider - Range value selector with single handle or double for full ranges",
          "Textarea - Multi-line field with optional auto-resize based on written content",
          "Select - Styled HTML native dropdown with visible placeholder support",
          "Image - Image with lazy loading, error fallback, and configurable aspect ratio",
          "Video - Player with native controls and configurable initial poster image",
          "Code - Inline or multi-line block with optional syntax highlighting per language",
          "Kbd - Visual representation of keyboard key with distinctive monospaced style",
          "Mark - Highlighted text with customizable highlight color according to active theme",
          "Logo - Visual brand of the product with monochromatic and full color variants"
        ]
      },
      {
        "id": "molecules",
        "label": "Molecules",
        "items": [
          "FormField - Combination of Label, Input, and error message with integrated visual validation",
          "SearchBar - Search input with magnifier icon, clear button, and optionally keyboard shortcut",
          "Card - Container with padding, shadow, optional header, and footer with configurable CTAs",
          "ButtonGroup - Set of grouped buttons with shared borders and coordinated selection",
          "Breadcrumb - Hierarchical navigation trail with separators and clickable links to current level",
          "Pagination - Pagination controls with numbers, prev/next, and jump to first/last",
          "DropdownMenu - Trigger button popup menu with items, submenus, and separators",
          "Toast - Temporary notification with icon, message, action button, and configurable auto-dismiss",
          "Alert - Persistent message with clearly differentiated info, success, warning, and error variants",
          "Modal - Modal dialog with backdrop, header, scrollable content, and footer with main CTAs",
          "Drawer - Lateral slidable panel with header, scrollable content, and optional fixed footer",
          "TabList - Set of tabs with associated tab panel and complete keyboard navigation",
          "Stepper - Multi-step progress indicator with visible completed, current, and upcoming states",
          "DatePicker - Date selector with popup calendar, month navigation, and optional range",
          "TimePicker - Time selector with hour, minute scrolls, and configurable 12h or 24h format",
          "ColorPicker - Color selector with presets, color wheel, RGB sliders, and manual hex input",
          "RatingInput - Star selection with hover preview, optional half-stars, and label",
          "FileUpload - Drag-and-drop zone with preview, progress bar, and type and size validation",
          "MenuItem - Individual menu item with optional icon, label, description, and shortcut display",
          "ListItem - List element with avatar, main content, metadata, and secondary actions",
          "Accordion - Collapsible section with clickable header, expandable content, and visual indicator",
          "Carousel - Item slider with arrow navigation, dots indicator, and configurable autoplay",
          "AlertDialog - Destructive confirmation modal with warning icon and clearly labeled CTAs",
          "Toolbar - Horizontal bar of context-grouped actions with dividers and visible shortcuts",
          "ContextMenu - Right-click popup menu with contextual options according to target",
          "EmptyState - Combination of illustration, title, description, and CTA for no-content states",
          "MetricCard - Specialized card showing KPI with large number, label, trend, and comparison"
        ]
      },
      {
        "id": "organisms",
        "label": "Organisms",
        "items": [
          "Header - Site header with logo, main navigation, search, and integrated user menu",
          "Footer - Page footer with product, company, legal, social links, and complete newsletter signup",
          "Sidebar - Lateral navigation panel with collapsible sections, internal search, and user profile",
          "DataTable - Table with sorting, filtering, pagination, bulk selection, and configurable export",
          "ProductCard - Product-specific card with image, title, price, rating, and add-to-cart button",
          "CommentThread - Nested comment thread with replies, reactions, and admin moderation",
          "FilterPanel - Combinable filter sidebar with categories, range sliders, search, and reset all",
          "NotificationCenter - Complete notification panel grouped with filters and mark-all-read",
          "UserProfile - Wide card with avatar, info, stats, actions, and user own content tabs",
          "PricingTable - Plan comparison with features, CTAs, highlighted badges, and associated FAQ",
          "ChatWindow - Complete chat window with conversation, input, attachments, and participants list",
          "Calendar - Complete component with month/week/day views, drag-and-drop events, and filters",
          "KanbanBoard - Board with drag-and-drop columns, configurable cards, and team filters",
          "MapView - Interactive map with markers, clusters, info popup, and custom zoom controls",
          "Wizard - Multi-step flow with per-step validation, restricted navigation, and final summary",
          "CheckoutForm - Complete form with shipping, billing, payment, summary, and robust validation",
          "AnalyticsDashboard - Complete panel with KPIs, main charts, tables, and temporal filters",
          "OnboardingTour - Guided tour with sequential tooltips, skip option, and progress indicator",
          "FeedList - Infinite scrollable list of items with virtualization and incremental loading",
          "ImageGallery - Gallery with lightbox, zoom, image navigation, and optional download",
          "VideoPlayer - Advanced player with custom controls, selectable quality, and subtitles",
          "SearchResults - Complete results page with filters, sorting, pagination, and empty state",
          "FormBuilder - Visual form builder with drag-and-drop fields and validations",
          "Timeline - Vertical or horizontal timeline with detailed events and category filters",
          "ActivityFeed - Recent activity feed with avatars, actions, timestamps, and smart grouping",
          "AuthForm - Authentication form with login, signup, forgot password, and social options",
          "Marketplace - Item listing with cards, filters, sorting, and up-to-four comparator"
        ]
      },
      {
        "id": "templates-pages",
        "label": "Templates and Pages",
        "items": [
          "DashboardLayout - Template with collapsible sidebar, fixed topbar, and scrollable content area",
          "AuthLayout - Centered template for login/signup with logo above and narrow centered form",
          "MarketingLayout - Template with transparent header, hero, sections, and complete wide footer",
          "DocsLayout - Documentation template with navigation sidebar, content, and right sticky TOC",
          "BlogLayout - Article template with header, readable content, sidebar, and related posts",
          "EcommerceLayout - Store template with category header, mini cart, content, and extended footer",
          "AppLayout - App template with bottom tab bar, navigation drawer, and main content area",
          "SettingsLayout - Configuration template with section sidebar and wide right form area",
          "OnboardingPage - Sequential page with illustration, copy, CTA, and visible progress indicator",
          "LandingPage - Complete page with hero, features, social proof, pricing, FAQ, and final CTA",
          "PricingPage - Pricing-dedicated page with monthly/annual toggle, plans, and feature comparison",
          "AboutPage - Institutional page with mission, team, timeline, values, and social links",
          "ContactPage - Page with contact form, direct data, embedded map, and FAQ",
          "ProductDetailPage - Product page with gallery, info, specs, reviews, and related products",
          "CheckoutPage - Complete checkout page with steps, payment options, and order summary",
          "AccountDashboardPage - Initial account page with recent orders, addresses, and quick settings",
          "OrderConfirmationPage - Post-purchase page with order number, summary, and tracking info",
          "BlogIndexPage - Post listing page with category filters, search, and pagination",
          "BlogPostPage - Individual article page with content, author, date, and comments",
          "DocsHomePage - Documentation landing with quick start, search, popular topics, and CTA",
          "ErrorPage - 404/500 error page with illustration, message, and home return CTA",
          "MaintenancePage - Maintenance page with message, estimated ETA, and status links",
          "LoginPage - Complete login page with form, social auth options, and forgot password link",
          "SignupPage - Registration page with multi-step form, social options, and visible terms",
          "SearchResultsPage - Results page with filters, sorting, pagination, and suggested searches",
          "ProfilePublicPage - Public profile page with info, posts, followers, and follow/unfollow button",
          "AdminDashboardPage - Admin panel with global stats, user management, and system health metrics"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Atomic Design: why hierarchy matters",
        "body": "<p>Brad Frost popularized Atomic Design as a methodology to organize design systems. The central idea is that interfaces decompose into hierarchical levels: <strong>atoms</strong> are the most basic elements (button, input, label), <strong>molecules</strong> combine atoms in functional groups (form field with label + input + error), <strong>organisms</strong> are complex sections (complete header, data table), <strong>templates</strong> define layouts, and <strong>pages</strong> are specific instances with real content.</p><p>The most common mistake is not respecting the hierarchy: a molecule cannot import another molecule, it must compose only of atoms. If your Card (molecule) needs an Avatar and that needs an Image (atom), the composition is valid. But if your MetricCard (molecule) imports another Card (molecule), you're violating the methodology and creating circular dependencies hard to maintain at scale.</p><p>The practical benefit is <strong>reusability and consistency</strong>. A team with 50 poorly organized components duplicates work: three different Buttons, two Input versions, four Cards. A team following Atomic Design has one Button with variants defined in the design system. When a new case is needed, the existing atom is extended, not a new one created. Visual consistency improves dramatically.</p>"
      },
      {
        "h2": "Naming conventions that scale",
        "body": "<p>Use <strong>PascalCase</strong> for component names. It's the convention of React, Vue, and Svelte: ButtonGroup, not buttonGroup or button-group. This distinguishes components from native HTML elements. For variants, use props instead of separate names: instead of PrimaryButton and SecondaryButton, use Button with variant prop. This avoids combinatorial explosion of specific components.</p><p>To name, follow the pattern <strong>[Noun][Modifier]</strong>: ProductCard (not CardProduct), UserProfile (not ProfileUser). The main noun goes first, modifiers after. This facilitates autocomplete: typing 'Prod' shows all components related to products. If you typed 'Card', they would mix with other unrelated types, complicating navigation within the project.</p><p>Avoid generic names like <strong>Container</strong>, <strong>Wrapper</strong>, <strong>Box</strong>. These don't communicate purpose and grow uncontrollably. If you need a wrapper, specify: PageContainer, FormWrapper, CenteredBox. Each name should answer 'what does this component do'. If you can't explain it in one phrase, it's probably doing too much and needs division into smaller, more focused components.</p>"
      },
      {
        "h2": "Common mistakes implementing Atomic Design",
        "body": "<p>The most expensive mistake is <strong>over-atomization</strong>. Creating an atom for each HTML element leads to 200 unusable atoms. Reserve atoms for elements that really need abstraction: Button (because it has variants and states), not Span. If a component is just a wrapper without its own logic, it doesn't deserve to exist as an atom. Keep the design system focused on elements with real abstraction value.</p><p>Another mistake is <strong>extensive props drilling</strong>. If your organism passes 15 props that only travel to internal atoms, there's an architectural problem. Consider composition with children or context API. <strong>{`<Card>`}<strong>{`<Card.Header>...</Card.Header>`}</strong>{`<Card.Body>...</Card.Body>`}{`</Card>`}</strong> is more readable than Card with 20 specific props. Compositional APIs scale better for varied use cases without complicating simple components.</p><p>The third mistake is <strong>not documenting variants</strong>. Without Storybook or visual documentation, devs duplicate components because they don't know what exists. Implement mandatory documentation: each component must have stories showing all its variants and states. This converts the design system into an active consultable tool, not just a folder of components waiting to be imported without context on how to use them correctly.</p>"
      },
      {
        "h2": "Atomic Design in real projects: useful adaptations",
        "body": "<p>Brad Frost's pure methodology assumes total rigidity. In practice, teams adopt variants. <strong>Material UI and Ant Design</strong> use similar structure but without strict atoms/molecules separation. This works for general libraries. For your internal product, you can be stricter: internal consistency matters more than religiously adhering to the original methodology published years ago.</p><p>Some teams add a <strong>quarks</strong> level below atoms: design tokens (colors, spacings, typographies) that compose atoms. This formalizes the design tokens layer and facilitates theming. Others eliminate templates as a separate level, merging it with pages. Each decision depends on project size: small teams don't need 5 levels, enterprise teams take full advantage.</p><p>Successful adoption requires <strong>buy-in from the entire team</strong>, not just designers. If devs build ad-hoc components outside the design system, the methodology dies. Establish rules: new components go through review, must justify why an existing one can't be used. Frameworks like Storybook with integrated linter help: they detect duplicate or miscategorized components before merge to production.</p>"
      }
    ],
    "faq": [
      {
        "q": "Is Atomic Design only for React or does it work for any framework?",
        "a": "It works for any component framework: React, Vue, Svelte, Angular, native Web Components. The methodology is framework-agnostic. The only specific thing to each is implementation syntax, but the atoms-molecules-organisms hierarchy applies universally."
      },
      {
        "q": "When is a component an atom and when is it a molecule?",
        "a": "If the component is functionally indivisible (a Button is a Button), it's an atom. If it combines atoms to create new functionality (FormField = Label + Input + Error), it's a molecule. Practical rule: if you break the component, does it lose its function? If yes, atom; if no, molecule."
      },
      {
        "q": "How many components should my design system have?",
        "a": "Depends on product size. Small products: 30-50 components are enough. Enterprise products can have 100-200. More than that usually indicates duplication. Audit periodically: components used less than 3 times are candidates for merging or elimination."
      },
      {
        "q": "Is it worth adopting Atomic Design in legacy projects?",
        "a": "Only if you plan to invest in significant refactoring. Applying it to maintenance projects without migrating existing components generates inconsistency. Better wait for a major refactor or apply it only to new features while leaving legacy intact temporarily."
      }
    ]
  }
};
