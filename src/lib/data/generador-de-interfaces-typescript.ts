import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-interfaces-typescript",
    "en": "typescript-interface-generator"
  },
  "category": "tools",
  "emoji": "📐",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Interfaces TypeScript | Genfy",
    "metaDesc": "Creá interfaces TypeScript con propiedades tipadas correctamente. Ejemplos para API responses, componentes React, modelos de datos y contratos entre capas.",
    "h1": "Generador de Interfaces TypeScript",
    "intro": "Generá interfaces TypeScript completas con tipos primitivos, objetos anidados, arrays y opcionales. Listas para copiar en tu proyecto con naming consistente y tipos correctos.",
    "tag": "Herramientas",
    "filterLabel": "Contexto",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "context",
        "label": "Contexto",
        "items": [
          "User entity - Auth y perfil",
          "Product catalog - Ecommerce",
          "API response - REST endpoints",
          "Form data - Inputs de formulario",
          "Component props - React/Vue/Angular",
          "Database model - ORM schemas",
          "Configuration object - App settings",
          "Event payload - Analytics tracking",
          "GraphQL query - Schema types",
          "Redux state - Store typing",
          "HTTP request - Body y headers",
          "Notification - Push/email data",
          "Payment transaction - Billing info",
          "File metadata - Upload handling",
          "Search filters - Query params",
          "Chart data - Visualización",
          "Navigation menu - Routing structure",
          "Error response - API errors",
          "Webhook payload - External integrations",
          "Email template - Transactional data",
          "Calendar event - Scheduling",
          "Comment thread - Social features",
          "Subscription plan - Billing tiers",
          "Invoice - Accounting data",
          "Address - Geolocation y shipping",
          "Review rating - User feedback",
          "Inventory item - Stock management",
          "Booking reservation - Appointments",
          "Chat message - Messaging app",
          "OAuth token - Authentication",
          "Media asset - Images/videos",
          "Tag taxonomy - Categorization",
          "Permission role - Access control",
          "Audit log - Change tracking",
          "Feature flag - Config toggle",
          "A/B test variant - Experimentation",
          "Metric datapoint - Analytics",
          "Notification settings - User preferences",
          "Theme config - UI customization",
          "Report parameters - Data export",
          "Workflow step - Automation",
          "Template variable - Dynamic content",
          "Coupon discount - Promotions",
          "Session data - User state",
          "Queue job - Background processing",
          "Cache entry - Performance layer",
          "Rate limit - API throttling",
          "Geofence boundary - Location services",
          "Biometric data - Security features",
          "Device fingerprint - Tracking"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estructura de una interface TypeScript",
        "body": "<p>Una interface define la forma (shape) de un objeto: qué propiedades tiene y de qué tipo son. Sintaxis básica: <code>interface User { id: number; name: string; email: string; }</code>. Cada propiedad tiene un nombre, dos puntos, y su tipo. Los tipos primitivos son <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>.</p><p>Propiedades opcionales se marcan con <code>?</code>: <code>avatar?: string</code> significa que puede existir o no. Propiedades readonly son inmutables: <code>readonly id: number</code> no puede reasignarse después de la creación. Los arrays se tipan con <code>string[]</code> o <code>Array&lt;string&gt;</code>, ambos válidos.</p><p>Para objetos anidados, podés definir interfaces inline o referenciar otras interfaces: <code>address: { street: string; city: string }</code> o <code>address: Address</code> donde <code>Address</code> es otra interface. La segunda opción es preferible para reutilización. Los union types combinan opciones: <code>status: 'active' | 'inactive' | 'pending'</code>.</p>"
      },
      {
        "h2": "Naming conventions y organización",
        "body": "<p>Los nombres de interfaces usan PascalCase: <code>UserProfile</code>, <code>ApiResponse</code>, <code>ProductDetails</code>. Evitá prefijos redundantes como <code>IUser</code> (herencia de C#, innecesaria en TS). Si tenés un conflicto de nombres, usá sufijos descriptivos: <code>UserEntity</code> vs <code>UserDto</code> vs <code>UserViewModel</code>.</p><p>Organizá interfaces por feature o capa. En un proyecto React: <code>components/Button/Button.types.ts</code> para props, <code>api/users/types.ts</code> para responses. No tires todo en un <code>types.ts</code> global; ese archivo crece sin control y nadie sabe qué está usando qué. La excepción: tipos compartidos globalmente van en <code>@types</code> o <code>shared/types</code>.</p><p>Para tipos que vienen de APIs externas, considerá autogenerar con herramientas como <code>openapi-typescript</code> o <code>quicktype</code>. Escribir a mano 200 líneas de interface para un response de Stripe es error humano garantizado. Si la API tiene schema OpenAPI/Swagger, generalo; si no, pedí que lo agreguen.</p>"
      },
      {
        "h2": "Tipos utilitarios y composición",
        "body": "<p>TypeScript incluye tipos utilitarios que transforman interfaces existentes. <code>Partial&lt;User&gt;</code> hace todas las props opcionales (útil para updates). <code>Required&lt;User&gt;</code> hace lo opuesto. <code>Pick&lt;User, 'id' | 'name'&gt;</code> selecciona solo esas props. <code>Omit&lt;User, 'password'&gt;</code> excluye la prop password.</p><p><code>Record&lt;string, number&gt;</code> es un objeto con keys string y values number, útil para mapeos dinámicos. <code>Readonly&lt;User&gt;</code> hace toda la interface inmutable. <code>NonNullable&lt;T&gt;</code> remueve null/undefined de un tipo. Estos utilitarios evitan duplicación: no necesitás <code>UserUpdate</code> separado si podés usar <code>Partial&lt;User&gt;</code>.</p><p>Para composición, extendé interfaces: <code>interface Admin extends User { permissions: string[] }</code>. O usá intersección: <code>type AdminUser = User & { permissions: string[] }</code>. La diferencia: <code>extends</code> es para interfaces (puede redeclararse), <code>&</code> es para types (más flexible pero no redeclarable).</p>"
      },
      {
        "h2": "Errores comunes y cómo evitarlos",
        "body": "<p>Error #1: usar <code>any</code> por pereza. <code>data: any</code> destruye el propósito de TypeScript. Si no sabés el tipo exacto, usá <code>unknown</code> y hacé type narrowing con guards. O definí la interface parcialmente e iterá: mejor tener 3 props tipadas que todo en <code>any</code>.</p><p>Error #2: interfaces demasiado genéricas. <code>interface Data { value: any }</code> no aporta nada. Sé específico: <code>interface UserData { userId: string; loginCount: number }</code>. Cuanto más concreto el tipo, más errores cachea el compilador.</p><p>Error #3: no tipar responses de API. El fetch devuelve <code>any</code> por default. Siempre tipá: <code>const user = await fetch('/api/user').then(r =&gt; r.json()) as User</code> o mejor, usá un cliente tipado como tRPC, GraphQL Codegen, o axios con interceptores que typechequeán.</p><p>Error #4: duplicar definiciones. Si <code>User</code> en frontend y backend son idénticos, compartí el tipo (monorepo con shared package, o exportá desde backend si es TypeScript también). Mantener dos definiciones sincronizadas manualmente es receta para bugs sutiles donde un campo cambió de tipo y frontend no se enteró.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuándo uso interface vs type?",
        "a": "Para objetos, preferí interface (es más legible y puede extenderse/redeclararse). Para unions, intersecciones complejas, o primitivas, usá type. En la práctica, es mayormente preferencia de equipo."
      },
      {
        "q": "¿Debo tipar absolutamente todo?",
        "a": "Toda función pública, toda prop de componente, todo response de API. Funciones auxiliares internas pueden inferirse si el tipo es obvio. El objetivo es detectar errores en boundaries (entrada/salida de módulos)."
      },
      {
        "q": "¿Cómo tipar un objeto con keys dinámicas?",
        "a": "Usá index signature: <code>interface Config { [key: string]: string | number }</code> o Record: <code>Record&lt;string, string | number&gt;</code>. Ambos dicen 'cualquier key string puede tener estos tipos de valores'."
      },
      {
        "q": "¿Qué hago con datos de third-party sin tipos?",
        "a": "Buscá en DefinitelyTyped (@types/libreria). Si no existe, definí tus propios tipos en un .d.ts local. No dejes que falta de tipos externos infecte tu codebase con anys."
      }
    ]
  },
  "en": {
    "pageTitle": "TypeScript Interface Generator | Genfy",
    "metaDesc": "Create TypeScript interfaces with correctly typed properties. Examples for API responses, React components, data models, and contracts between layers.",
    "h1": "TypeScript Interface Generator",
    "intro": "Generate complete TypeScript interfaces with primitive types, nested objects, arrays, and optionals. Ready to copy into your project with consistent naming and correct types.",
    "tag": "Tools",
    "filterLabel": "Context",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "context",
        "label": "Context",
        "items": [
          "User entity - Auth and profile",
          "Product catalog - Ecommerce",
          "API response - REST endpoints",
          "Form data - Form inputs",
          "Component props - React/Vue/Angular",
          "Database model - ORM schemas",
          "Configuration object - App settings",
          "Event payload - Analytics tracking",
          "GraphQL query - Schema types",
          "Redux state - Store typing",
          "HTTP request - Body and headers",
          "Notification - Push/email data",
          "Payment transaction - Billing info",
          "File metadata - Upload handling",
          "Search filters - Query params",
          "Chart data - Visualization",
          "Navigation menu - Routing structure",
          "Error response - API errors",
          "Webhook payload - External integrations",
          "Email template - Transactional data",
          "Calendar event - Scheduling",
          "Comment thread - Social features",
          "Subscription plan - Billing tiers",
          "Invoice - Accounting data",
          "Address - Geolocation and shipping",
          "Review rating - User feedback",
          "Inventory item - Stock management",
          "Booking reservation - Appointments",
          "Chat message - Messaging app",
          "OAuth token - Authentication",
          "Media asset - Images/videos",
          "Tag taxonomy - Categorization",
          "Permission role - Access control",
          "Audit log - Change tracking",
          "Feature flag - Config toggle",
          "A/B test variant - Experimentation",
          "Metric datapoint - Analytics",
          "Notification settings - User preferences",
          "Theme config - UI customization",
          "Report parameters - Data export",
          "Workflow step - Automation",
          "Template variable - Dynamic content",
          "Coupon discount - Promotions",
          "Session data - User state",
          "Queue job - Background processing",
          "Cache entry - Performance layer",
          "Rate limit - API throttling",
          "Geofence boundary - Location services",
          "Biometric data - Security features",
          "Device fingerprint - Tracking"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Structure of a TypeScript interface",
        "body": "<p>An interface defines the shape of an object: what properties it has and what types they are. Basic syntax: <code>interface User { id: number; name: string; email: string; }</code>. Each property has a name, colon, and its type. Primitive types are <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>.</p><p>Optional properties are marked with <code>?</code>: <code>avatar?: string</code> means it may or may not exist. Readonly properties are immutable: <code>readonly id: number</code> can't be reassigned after creation. Arrays are typed with <code>string[]</code> or <code>Array&lt;string&gt;</code>, both valid.</p><p>For nested objects, you can define interfaces inline or reference other interfaces: <code>address: { street: string; city: string }</code> or <code>address: Address</code> where <code>Address</code> is another interface. The second option is preferable for reusability. Union types combine options: <code>status: 'active' | 'inactive' | 'pending'</code>.</p>"
      },
      {
        "h2": "Naming conventions and organization",
        "body": "<p>Interface names use PascalCase: <code>UserProfile</code>, <code>ApiResponse</code>, <code>ProductDetails</code>. Avoid redundant prefixes like <code>IUser</code> (C# inheritance, unnecessary in TS). If you have name conflicts, use descriptive suffixes: <code>UserEntity</code> vs <code>UserDto</code> vs <code>UserViewModel</code>.</p><p>Organize interfaces by feature or layer. In a React project: <code>components/Button/Button.types.ts</code> for props, <code>api/users/types.ts</code> for responses. Don't throw everything in a global <code>types.ts</code>; that file grows out of control and nobody knows who's using what. Exception: globally shared types go in <code>@types</code> or <code>shared/types</code>.</p><p>For types from external APIs, consider autogenerating with tools like <code>openapi-typescript</code> or <code>quicktype</code>. Writing 200 lines of interface by hand for a Stripe response is guaranteed human error. If the API has OpenAPI/Swagger schema, generate it; if not, ask them to add it.</p>"
      },
      {
        "h2": "Utility types and composition",
        "body": "<p>TypeScript includes utility types that transform existing interfaces. <code>Partial&lt;User&gt;</code> makes all props optional (useful for updates). <code>Required&lt;User&gt;</code> does the opposite. <code>Pick&lt;User, 'id' | 'name'&gt;</code> selects only those props. <code>Omit&lt;User, 'password'&gt;</code> excludes the password prop.</p><p><code>Record&lt;string, number&gt;</code> is an object with string keys and number values, useful for dynamic mappings. <code>Readonly&lt;User&gt;</code> makes the entire interface immutable. <code>NonNullable&lt;T&gt;</code> removes null/undefined from a type. These utilities avoid duplication: you don't need a separate <code>UserUpdate</code> if you can use <code>Partial&lt;User&gt;</code>.</p><p>For composition, extend interfaces: <code>interface Admin extends User { permissions: string[] }</code>. Or use intersection: <code>type AdminUser = User & { permissions: string[] }</code>. The difference: <code>extends</code> is for interfaces (can be redeclared), <code>&</code> is for types (more flexible but not redeclarable).</p>"
      },
      {
        "h2": "Common mistakes and how to avoid them",
        "body": "<p>Mistake #1: using <code>any</code> out of laziness. <code>data: any</code> destroys TypeScript's purpose. If you don't know the exact type, use <code>unknown</code> and do type narrowing with guards. Or define the interface partially and iterate: better to have 3 typed props than everything in <code>any</code>.</p><p>Mistake #2: overly generic interfaces. <code>interface Data { value: any }</code> adds nothing. Be specific: <code>interface UserData { userId: string; loginCount: number }</code>. The more concrete the type, the more errors the compiler catches.</p><p>Mistake #3: not typing API responses. Fetch returns <code>any</code> by default. Always type: <code>const user = await fetch('/api/user').then(r =&gt; r.json()) as User</code> or better, use a typed client like tRPC, GraphQL Codegen, or axios with interceptors that typecheck.</p><p>Mistake #4: duplicating definitions. If <code>User</code> in frontend and backend are identical, share the type (monorepo with shared package, or export from backend if it's TypeScript too). Keeping two definitions manually synced is a recipe for subtle bugs where a field changed type and frontend didn't find out.</p>"
      }
    ],
    "faq": [
      {
        "q": "When do I use interface vs type?",
        "a": "For objects, prefer interface (more readable and can extend/redeclare). For unions, complex intersections, or primitives, use type. In practice, it's mostly team preference."
      },
      {
        "q": "Should I type absolutely everything?",
        "a": "Every public function, every component prop, every API response. Internal helper functions can be inferred if the type is obvious. The goal is to detect errors at boundaries (module input/output)."
      },
      {
        "q": "How do I type an object with dynamic keys?",
        "a": "Use index signature: <code>interface Config { [key: string]: string | number }</code> or Record: <code>Record&lt;string, string | number&gt;</code>. Both say 'any string key can have these types of values'."
      },
      {
        "q": "What do I do with third-party data without types?",
        "a": "Search in DefinitelyTyped (@types/library). If it doesn't exist, define your own types in a local .d.ts. Don't let lack of external types infect your codebase with anys."
      }
    ]
  }
};
