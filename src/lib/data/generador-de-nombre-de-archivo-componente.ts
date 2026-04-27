import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombre-de-archivo-componente",
    "en": "component-filename-generator"
  },
  "category": "tools",
  "emoji": "📁",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Archivo para Componentes | Genfy",
    "metaDesc": "Genera nombres de archivos de componentes siguiendo convenciones de React, Vue, Angular y más. Consistencia instantánea para tu codebase.",
    "h1": "Generador de Nombres de Archivo para Componentes",
    "intro": "Mantené tu código ordenado con nombres de archivo consistentes que siguen las convenciones de tu framework favorito.",
    "tag": "Herramientas",
    "filterLabel": "Convención",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "convention",
        "label": "Convención de nomenclatura",
        "items": [
          "React (PascalCase .jsx)",
          "React TypeScript (PascalCase .tsx)",
          "Vue 3 Composition (PascalCase .vue)",
          "Vue 3 SFC (kebab-case .vue)",
          "Angular (kebab-case .component.ts)",
          "Svelte (PascalCase .svelte)",
          "Next.js Page (kebab-case .tsx)",
          "Next.js API Route (camelCase .ts)",
          "Astro Component (PascalCase .astro)",
          "Web Components (kebab-case .js)",
          "Lit Element (kebab-case .ts)",
          "Stencil (kebab-case .tsx)",
          "Solid.js (PascalCase .tsx)",
          "Preact (PascalCase .jsx)",
          "Qwik (kebab-case .tsx)",
          "Ember Component (kebab-case .hbs)",
          "Backbone View (PascalCase .js)",
          "Marko Component (kebab-case .marko)",
          "Riot Tag (kebab-case .riot)",
          "Alpine Component (kebab-case .html)",
          "Stimulus Controller (snake_case_controller.js)",
          "React Native (PascalCase .native.tsx)",
          "Flutter Widget (snake_case.dart)",
          "SwiftUI View (PascalCase.swift)",
          "Jetpack Compose (PascalCase.kt)"
        ]
      },
      {
        "id": "type",
        "label": "Tipo de componente",
        "items": [
          "Button",
          "Card",
          "Modal",
          "Dropdown",
          "Navbar",
          "Sidebar",
          "Footer",
          "Header",
          "Form",
          "Input",
          "Checkbox",
          "Radio",
          "Select",
          "Textarea",
          "Alert",
          "Badge",
          "Tooltip",
          "Popover",
          "Accordion",
          "Tabs",
          "Pagination",
          "Table",
          "List",
          "Grid",
          "Avatar",
          "Spinner",
          "Progress",
          "Slider",
          "Toggle",
          "Breadcrumb",
          "Menu",
          "Dialog",
          "Drawer",
          "Stepper",
          "Carousel",
          "Timeline",
          "Rating",
          "Calendar",
          "DatePicker",
          "TimePicker",
          "FileUpload",
          "ImageGallery",
          "VideoPlayer",
          "AudioPlayer",
          "Chart",
          "Map",
          "SearchBar",
          "Notification",
          "Toast",
          "Skeleton",
          "EmptyState"
        ]
      },
      {
        "id": "variant",
        "label": "Variante",
        "items": [
          "Primary",
          "Secondary",
          "Outline",
          "Ghost",
          "Link",
          "Solid",
          "Soft",
          "Gradient",
          "Elevated",
          "Flat",
          "Rounded",
          "Square",
          "Pill",
          "Small",
          "Medium",
          "Large",
          "ExtraLarge",
          "Compact",
          "Expanded",
          "Minimal",
          "Rich",
          "Simple",
          "Advanced",
          "Animated",
          "Static",
          "Interactive",
          "Readonly",
          "Disabled",
          "Success",
          "Warning",
          "Error",
          "Info",
          "Neutral",
          "Inverted",
          "Transparent",
          "Bordered",
          "Shadowed",
          "Floating",
          "Fixed",
          "Sticky",
          "Absolute",
          "Relative",
          "Responsive",
          "Mobile",
          "Desktop",
          "Tablet",
          "FullWidth",
          "Inline",
          "Block"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué importan las convenciones de nombres",
        "body": "<p>Un proyecto con nombres inconsistentes se vuelve un caos cuando crece. En un equipo de 5 devs trabajando en React, si uno usa <strong>button.jsx</strong>, otro <strong>Button.js</strong> y otro <strong>ButtonComponent.tsx</strong>, perder tiempo buscando archivos se convierte en rutina diaria.</p><p>Las convenciones resuelven esto de raíz. React espera PascalCase porque cada componente es técnicamente una clase o función constructora. Vue permite ambos estilos pero la comunidad prefiere PascalCase para SFCs desde Vue 3. Angular impone kebab-case con sufijos obligatorios (.component.ts) porque el CLI lo genera así desde 2016.</p><p>Errores comunes: mezclar camelCase con kebab-case en el mismo proyecto, olvidar sufijos en Angular, usar .js cuando el proyecto es TypeScript puro, o nombrar <strong>index.tsx</strong> a todo (imposible debuggear stack traces). La regla de oro: <strong>un humano debe poder adivinar el framework solo viendo el nombre del archivo</strong>.</p>"
      },
      {
        "h2": "Estructura de archivos por framework",
        "body": "<p>React no opina sobre estructura, pero la práctica ganadora es <strong>/components/Button/Button.tsx</strong> + <strong>Button.module.css</strong> + <strong>Button.test.tsx</strong> en la misma carpeta. Alternativa flat: <strong>/components/Button.tsx</strong> para proyectos chicos.</p><p>Angular sigue <strong>feature/button/button.component.ts</strong> + <strong>.html</strong> + <strong>.css</strong> + <strong>.spec.ts</strong> separados. Nunca mezcles lógica de features distintas en el mismo folder. Vue 3 prefiere <strong>/components/TheButton.vue</strong> (SFC único) con el prefijo 'The' para componentes singleton como TheHeader.</p><p>Next.js complica: <strong>/pages</strong> usa kebab-case automático (about-us.tsx → /about-us), pero <strong>/components</strong> puede ser PascalCase. Svelte recomienda PascalCase aunque el compilador acepta cualquier cosa. Web Components <strong>exigen</strong> kebab-case con guión (custom-button.js) por especificación HTML.</p>"
      },
      {
        "h2": "Sufijos y prefijos que comunican función",
        "body": "<p>Sufijos clarifican responsabilidades sin abrir el archivo. <strong>.container.tsx</strong> indica lógica + estado, <strong>.view.tsx</strong> solo presentación. <strong>.controller.ts</strong> en Stimulus debe terminar con 'Controller' obligatorio. <strong>.page.tsx</strong> en Next.js 13+ va en /app con Server Components por default.</p><p>Prefijos también sirven: <strong>Base</strong>Button.vue para componentes base del design system, <strong>App</strong>Header.tsx para componentes específicos de app (no reusables), <strong>The</strong>Sidebar.vue para singletons garantizados. Stripe usa <strong>Stripe</strong>Button en su SDK para evitar colisiones de nombres.</p><p>En mobile, Flutter exige <strong>_widget.dart</strong> con underscore para privados, React Native usa <strong>.native.tsx</strong> vs <strong>.web.tsx</strong> para platform-specific, SwiftUI adopta <strong>View</strong> como sufijo obligatorio (ButtonView.swift). No inventes convenciones: seguí las del ecosistema o tu equipo odiará el code review.</p>"
      },
      {
        "h2": "Automatización y linters",
        "body": "<p>ESLint con <strong>eslint-plugin-filename-rules</strong> fuerza convenciones: rechaza commits si ButtonComponent.tsx no matchea /^[A-Z][a-zA-Z]+\\.tsx$/. Angular CLI genera todo correcto desde el vamos con <strong>ng generate component</strong>. Vue CLI hace lo mismo con <strong>vue create component</strong>.</p><p>Prettier no toca nombres de archivo, necesitás un hook de pre-commit. Husky + lint-staged puede correr un script custom que valide against tu convención. Ejemplo: si tu repo es React puro, cualquier .jsx debería ser .tsx o explotar CI.</p><p>Herramientas como <strong>plop.js</strong> generan componentes desde templates: corrés <strong>plop component Button</strong> y crea Button/index.ts + Button.tsx + Button.test.tsx con imports correctos. Nx workspace en monorepos fuerza estructura con generators predefinidos. Resultado: cero inconsistencias, onboarding de juniors en 1 día en lugar de 2 semanas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿PascalCase o kebab-case para componentes React?",
        "a": "PascalCase siempre. React trata componentes como constructores, y JSX espera PascalCase para diferenciar componentes de HTML nativo."
      },
      {
        "q": "¿Por qué Angular usa sufijos .component.ts?",
        "a": "Porque un feature puede tener service, module, directive y component con el mismo nombre base. El sufijo evita colisiones y ayuda al CLI."
      },
      {
        "q": "¿Cuándo usar index.tsx vs nombre explícito?",
        "a": "index.tsx solo si es el único archivo exportable de esa carpeta. Facilita imports limpios pero dificulta debugging de stack traces."
      },
      {
        "q": "¿Los tests deben llevar el mismo nombre del componente?",
        "a": "Sí, con sufijo .test o .spec según framework. Button.tsx → Button.test.tsx. Hace imposible olvidar qué testea cada archivo."
      }
    ]
  },
  "en": {
    "pageTitle": "Component Filename Generator | Genfy",
    "metaDesc": "Generate component filenames following React, Vue, Angular conventions and more. Instant consistency for your codebase.",
    "h1": "Component Filename Generator",
    "intro": "Keep your code organized with consistent file names that follow your favorite framework's conventions.",
    "tag": "Tools",
    "filterLabel": "Convention",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "convention",
        "label": "Naming convention",
        "items": [
          "React (PascalCase .jsx)",
          "React TypeScript (PascalCase .tsx)",
          "Vue 3 Composition (PascalCase .vue)",
          "Vue 3 SFC (kebab-case .vue)",
          "Angular (kebab-case .component.ts)",
          "Svelte (PascalCase .svelte)",
          "Next.js Page (kebab-case .tsx)",
          "Next.js API Route (camelCase .ts)",
          "Astro Component (PascalCase .astro)",
          "Web Components (kebab-case .js)",
          "Lit Element (kebab-case .ts)",
          "Stencil (kebab-case .tsx)",
          "Solid.js (PascalCase .tsx)",
          "Preact (PascalCase .jsx)",
          "Qwik (kebab-case .tsx)",
          "Ember Component (kebab-case .hbs)",
          "Backbone View (PascalCase .js)",
          "Marko Component (kebab-case .marko)",
          "Riot Tag (kebab-case .riot)",
          "Alpine Component (kebab-case .html)",
          "Stimulus Controller (snake_case_controller.js)",
          "React Native (PascalCase .native.tsx)",
          "Flutter Widget (snake_case.dart)",
          "SwiftUI View (PascalCase.swift)",
          "Jetpack Compose (PascalCase.kt)"
        ]
      },
      {
        "id": "type",
        "label": "Component type",
        "items": [
          "Button",
          "Card",
          "Modal",
          "Dropdown",
          "Navbar",
          "Sidebar",
          "Footer",
          "Header",
          "Form",
          "Input",
          "Checkbox",
          "Radio",
          "Select",
          "Textarea",
          "Alert",
          "Badge",
          "Tooltip",
          "Popover",
          "Accordion",
          "Tabs",
          "Pagination",
          "Table",
          "List",
          "Grid",
          "Avatar",
          "Spinner",
          "Progress",
          "Slider",
          "Toggle",
          "Breadcrumb",
          "Menu",
          "Dialog",
          "Drawer",
          "Stepper",
          "Carousel",
          "Timeline",
          "Rating",
          "Calendar",
          "DatePicker",
          "TimePicker",
          "FileUpload",
          "ImageGallery",
          "VideoPlayer",
          "AudioPlayer",
          "Chart",
          "Map",
          "SearchBar",
          "Notification",
          "Toast",
          "Skeleton",
          "EmptyState"
        ]
      },
      {
        "id": "variant",
        "label": "Variant",
        "items": [
          "Primary",
          "Secondary",
          "Outline",
          "Ghost",
          "Link",
          "Solid",
          "Soft",
          "Gradient",
          "Elevated",
          "Flat",
          "Rounded",
          "Square",
          "Pill",
          "Small",
          "Medium",
          "Large",
          "ExtraLarge",
          "Compact",
          "Expanded",
          "Minimal",
          "Rich",
          "Simple",
          "Advanced",
          "Animated",
          "Static",
          "Interactive",
          "Readonly",
          "Disabled",
          "Success",
          "Warning",
          "Error",
          "Info",
          "Neutral",
          "Inverted",
          "Transparent",
          "Bordered",
          "Shadowed",
          "Floating",
          "Fixed",
          "Sticky",
          "Absolute",
          "Relative",
          "Responsive",
          "Mobile",
          "Desktop",
          "Tablet",
          "FullWidth",
          "Inline",
          "Block"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why naming conventions matter",
        "body": "<p>A project with inconsistent names becomes chaos as it scales. In a 5-dev React team, if one uses <strong>button.jsx</strong>, another <strong>Button.js</strong>, and another <strong>ButtonComponent.tsx</strong>, wasting time searching for files becomes a daily ritual.</p><p>Conventions solve this at the root. React expects PascalCase because each component is technically a class or constructor function. Vue allows both styles but the community prefers PascalCase for SFCs since Vue 3. Angular enforces kebab-case with mandatory suffixes (.component.ts) because the CLI has generated it this way since 2016.</p><p>Common mistakes: mixing camelCase with kebab-case in the same project, forgetting suffixes in Angular, using .js when the project is pure TypeScript, or naming everything <strong>index.tsx</strong> (impossible to debug stack traces). Golden rule: <strong>a human should be able to guess the framework just by looking at the filename</strong>.</p>"
      },
      {
        "h2": "File structure by framework",
        "body": "<p>React doesn't dictate structure, but the winning practice is <strong>/components/Button/Button.tsx</strong> + <strong>Button.module.css</strong> + <strong>Button.test.tsx</strong> in the same folder. Flat alternative: <strong>/components/Button.tsx</strong> for small projects.</p><p>Angular follows <strong>feature/button/button.component.ts</strong> + <strong>.html</strong> + <strong>.css</strong> + <strong>.spec.ts</strong> separated. Never mix logic from different features in the same folder. Vue 3 prefers <strong>/components/TheButton.vue</strong> (single SFC) with the 'The' prefix for singleton components like TheHeader.</p><p>Next.js complicates things: <strong>/pages</strong> uses automatic kebab-case (about-us.tsx → /about-us), but <strong>/components</strong> can be PascalCase. Svelte recommends PascalCase though the compiler accepts anything. Web Components <strong>require</strong> kebab-case with hyphen (custom-button.js) by HTML specification.</p>"
      },
      {
        "h2": "Suffixes and prefixes that communicate function",
        "body": "<p>Suffixes clarify responsibilities without opening the file. <strong>.container.tsx</strong> indicates logic + state, <strong>.view.tsx</strong> only presentation. <strong>.controller.ts</strong> in Stimulus must end with 'Controller' mandatory. <strong>.page.tsx</strong> in Next.js 13+ goes in /app with Server Components by default.</p><p>Prefixes work too: <strong>Base</strong>Button.vue for design system base components, <strong>App</strong>Header.tsx for app-specific components (not reusable), <strong>The</strong>Sidebar.vue for guaranteed singletons. Stripe uses <strong>Stripe</strong>Button in their SDK to avoid name collisions.</p><p>In mobile, Flutter requires <strong>_widget.dart</strong> with underscore for privates, React Native uses <strong>.native.tsx</strong> vs <strong>.web.tsx</strong> for platform-specific code, SwiftUI adopts <strong>View</strong> as mandatory suffix (ButtonView.swift). Don't invent conventions: follow the ecosystem's or your team will hate code review.</p>"
      },
      {
        "h2": "Automation and linters",
        "body": "<p>ESLint with <strong>eslint-plugin-filename-rules</strong> enforces conventions: rejects commits if ButtonComponent.tsx doesn't match /^[A-Z][a-zA-Z]+\\.tsx$/. Angular CLI generates everything correctly from the start with <strong>ng generate component</strong>. Vue CLI does the same with <strong>vue create component</strong>.</p><p>Prettier doesn't touch filenames, you need a pre-commit hook. Husky + lint-staged can run a custom script that validates against your convention. Example: if your repo is pure React, any .jsx should be .tsx or CI explodes.</p><p>Tools like <strong>plop.js</strong> generate components from templates: run <strong>plop component Button</strong> and it creates Button/index.ts + Button.tsx + Button.test.tsx with correct imports. Nx workspace in monorepos enforces structure with predefined generators. Result: zero inconsistencies, junior onboarding in 1 day instead of 2 weeks.</p>"
      }
    ],
    "faq": [
      {
        "q": "PascalCase or kebab-case for React components?",
        "a": "PascalCase always. React treats components as constructors, and JSX expects PascalCase to differentiate components from native HTML."
      },
      {
        "q": "Why does Angular use .component.ts suffixes?",
        "a": "Because a feature can have service, module, directive and component with the same base name. The suffix avoids collisions and helps the CLI."
      },
      {
        "q": "When to use index.tsx vs explicit name?",
        "a": "index.tsx only if it's the only exportable file in that folder. Makes imports cleaner but complicates debugging stack traces."
      },
      {
        "q": "Should tests carry the same name as the component?",
        "a": "Yes, with .test or .spec suffix depending on framework. Button.tsx → Button.test.tsx. Makes it impossible to forget what each file tests."
      }
    ]
  }
};
