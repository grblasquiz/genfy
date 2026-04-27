import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-funcion-typescript",
    "en": "typescript-function-name-generator"
  },
  "category": "tools",
  "emoji": "📘",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Función TypeScript | Genfy",
    "metaDesc": "Generá nombres de funciones TypeScript siguiendo convenciones clean code: verbos claros, específicos, semántica precisa. Ideal para naming coherente.",
    "h1": "Generador de Nombres de Función TypeScript",
    "intro": "Nombres de funciones que comunican intención clara, siguen convenciones del lenguaje y mejoran la legibilidad del código. Porque el naming es diseño de API.",
    "tag": "Herramientas",
    "filterLabel": "Tipo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "query",
        "label": "Queries",
        "items": [
          "getUserById",
          "findUserByEmail",
          "getActiveUsers",
          "fetchOrderHistory",
          "queryProductsByCategory",
          "searchItemsByKeyword",
          "loadUserPreferences",
          "retrieveSessionData",
          "getPostsByAuthor",
          "findRelatedItems",
          "fetchAvailableSlots",
          "listRecentTransactions",
          "getCartItems",
          "loadConfiguration",
          "retrieveMetadata",
          "findMatchingRecords",
          "getCommentsByPost",
          "fetchNotifications",
          "queryInventoryStatus",
          "getUserPermissions",
          "getActiveSubscriptions",
          "findExpiredSessions",
          "loadCachedData",
          "retrieveAuditLog",
          "getAnalyticsData"
        ]
      },
      {
        "id": "mutation",
        "label": "Mutations",
        "items": [
          "createUser",
          "updateUserProfile",
          "deleteAccount",
          "addItemToCart",
          "removeFromWishlist",
          "processPayment",
          "cancelOrder",
          "approveRequest",
          "rejectSubmission",
          "publishPost",
          "archiveDocument",
          "restoreFromTrash",
          "sendNotification",
          "scheduleTask",
          "assignRole",
          "revokeAccess",
          "markAsRead",
          "flagContent",
          "incrementCounter",
          "resetPassword",
          "activateAccount",
          "deactivateUser",
          "mergeRecords",
          "splitTransaction",
          "cloneTemplate"
        ]
      },
      {
        "id": "validation",
        "label": "Validaciones",
        "items": [
          "isValidEmail",
          "hasPermission",
          "canEditPost",
          "isExpired",
          "hasRequiredFields",
          "isAuthenticated",
          "validatePhoneNumber",
          "checkAvailability",
          "verifyToken",
          "isWithinLimit",
          "hasActivePlan",
          "meetsRequirements",
          "isOwner",
          "canAccessResource",
          "isUniqueUsername",
          "exceedsQuota",
          "matchesPattern",
          "isAllowedAction",
          "hasCompletedOnboarding",
          "isInMaintenance",
          "requiresTwoFactor",
          "isRateLimited",
          "belongsToOrganization",
          "hasValidLicense",
          "passesSecurityCheck"
        ]
      },
      {
        "id": "transform",
        "label": "Transformaciones",
        "items": [
          "formatCurrency",
          "parseJsonData",
          "serializeObject",
          "normalizeText",
          "sanitizeInput",
          "encodeUrl",
          "decodeToken",
          "compressImage",
          "extractMetadata",
          "mapToDto",
          "convertToLocalTime",
          "slugify",
          "hashPassword",
          "maskSensitiveData",
          "translateText",
          "aggregateResults",
          "flattenArray",
          "groupByProperty",
          "sortByDate",
          "filterActiveItems",
          "paginateResults",
          "deduplicateList",
          "mergeObjects",
          "calculateTotal",
          "buildQueryString"
        ]
      },
      {
        "id": "util",
        "label": "Utilidades",
        "items": [
          "debounce",
          "throttle",
          "retry",
          "timeout",
          "memoize",
          "cloneDeep",
          "generateId",
          "randomInt",
          "shuffleArray",
          "waitForCondition",
          "createLogger",
          "initializeApp",
          "teardownResources",
          "connectToDatabase",
          "closeConnection",
          "handleError",
          "logMetric",
          "sendTelemetry",
          "scheduleCleanup",
          "warmCache",
          "prefetchData",
          "measurePerformance",
          "wrapWithRetry",
          "delay",
          "formatStackTrace"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué el naming importa más de lo que creés",
        "body": "<p>Una función llamada <code>handle()</code> no dice nada. ¿Qué maneja? ¿Errores? ¿Clicks? ¿Datos? El nombre es documentación inline. Si necesitás leer el cuerpo de la función para entender qué hace, el nombre falló. <code>processPayment()</code> es claro: procesa un pago. <code>doStuff()</code> es basura cognitiva.</p><p>Los verbos importan. Queries (lectura) usan <code>get</code>, <code>find</code>, <code>fetch</code>, <code>query</code>. Mutations (escritura) usan <code>create</code>, <code>update</code>, <code>delete</code>, <code>add</code>, <code>remove</code>. Validaciones retornan boolean: <code>isValid</code>, <code>hasPermission</code>, <code>canEdit</code>. Esta consistencia no es capricho, es comunicación de contrato.</p><p>El contexto del dominio define el verbo. En e-commerce, <code>placeOrder()</code> es más preciso que <code>createOrder()</code> porque comunica la acción del usuario. En sistemas de inventario, <code>reserveStock()</code> dice más que <code>updateInventory()</code>. El naming revela el modelo mental del negocio. Código legible es código que habla el idioma del problema que resuelve.</p>"
      },
      {
        "h2": "Convenciones que tu equipo debe respetar",
        "body": "<p>Funciones booleanas empiezan con <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code>. <code>isActive()</code>, <code>hasPermission()</code>, <code>canEdit()</code>. Nunca <code>checkActive()</code> o <code>verifyPermission()</code> que retornan boolean—esos verbos implican side effects. La convención previene sorpresas: si empieza con <code>is</code>, sabés que retorna boolean puro sin modificar estado.</p><p>Prefijos <code>get</code> vs <code>fetch</code>: <code>get</code> es sincrónico, acceso directo (ej: <code>getProperty()</code>). <code>fetch</code> implica operación asincrónica, red o I/O (ej: <code>fetchUserData()</code>). Esta distinción ayuda a anticipar si la función es costosa o instantánea. <code>getUserName()</code> devuelve string del objeto; <code>fetchUserName()</code> hace request HTTP.</p><p>Evitá sufijos redundantes: <code>getUserData()</code> es redundante si la función ya dice que retorna datos. Mejor <code>getUser()</code>. Misma lógica con <code>sendEmailNotification()</code>—<code>sendEmail()</code> alcanza si el contexto es claro. Menos palabras = más legibilidad, siempre que no sacrifiques claridad. El balance es difícil pero se logra iterando en code reviews.</p>"
      },
      {
        "h2": "Errores que delatan código junior",
        "body": "<p>Funciones genéricas tipo <code>handleData()</code>, <code>processInfo()</code>, <code>manageStuff()</code>. Son banderas rojas. Si no podés ponerle nombre específico, la función probablemente hace demasiadas cosas. Refactoreá en funciones más pequeñas con responsabilidad clara. <code>handleData()</code> debería ser <code>validateUserInput()</code> + <code>saveToDatabase()</code> + <code>sendConfirmationEmail()</code>. Tres nombres claros, tres funciones unitarias.</p><p>Abreviaciones crípticas: <code>updUsrPrf()</code>. Esto no es código ensamblador de los 80. Los caracteres no cuestan dinero. <code>updateUserProfile()</code> es perfectamente legible. La única excepción: abreviaciones de dominio universales (<code>HTML</code>, <code>URL</code>, <code>ID</code>). Pero <code>usr</code>, <code>prf</code>, <code>mgr</code> son pereza que impacta mantenibilidad.</p><p>Inconsistencia: en un archivo usás <code>getUserById()</code>, en otro <code>findUserById()</code>, en otro <code>retrieveUserById()</code>. Tres verbos diferentes para la misma acción. Elegí uno y usalo en toda la codebase. Herramientas como ESLint con reglas custom pueden forzar convenciones. El naming debe ser aburrido y predecible, no creativo. Guardá la creatividad para arquitectura, no para sinónimos de 'obtener'.</p>"
      },
      {
        "h2": "Naming en contextos específicos de TypeScript",
        "body": "<p>Funciones factory retornan objetos nuevos: <code>createUser()</code>, <code>buildQuery()</code>, <code>makeRequest()</code>. Nunca modifiquen argumentos. Si modificás, el nombre debe reflejarlo: <code>addItemToCart(cart, item)</code> sugiere mutación; <code>withItemAdded(cart, item)</code> sugiere inmutabilidad (retorna nuevo cart). El naming comunica si tu función es pura o tiene side effects.</p><p>Handlers de eventos: <code>handleClick()</code>, <code>onSubmit()</code>, <code>processInput()</code>. El prefijo <code>handle</code> u <code>on</code> indica que es callback. Callbacks de React hooks usan <code>handle</code>: <code>handleChange</code>, <code>handleSubmit</code>. Props que reciben callbacks usan <code>on</code>: <code>onClick</code>, <code>onValueChange</code>. Consistencia entre componentes evita confusión.</p><p>Funciones async siempre deberían sugerir asincronía en el nombre si no es obvio por contexto: <code>fetchData()</code> (obvio), <code>loadConfig()</code> (obvio). Pero <code>getUser()</code> sincrónico vs <code>getUser()</code> async causa bugs. Si la versión async existe junto a la sync, nombralas distinto: <code>getUserSync()</code> y <code>fetchUser()</code>, o <code>getUser()</code> sync y <code>loadUser()</code> async. El compilador no te salva de retornar <code>Promise&lt;User&gt;</code> cuando esperabas <code>User</code> si los nombres son idénticos.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuándo usar 'get' vs 'fetch'?",
        "a": "<code>get</code> es acceso directo/sincrónico; <code>fetch</code> implica operación asincrónica o costosa (red, disco, base de datos)."
      },
      {
        "q": "¿Puedo usar verbos en español si el equipo es hispanohablante?",
        "a": "Técnicamente sí, pero la convención de la industria es inglés. Facilita colaboración con devs internacionales y uso de librerías estándar."
      },
      {
        "q": "¿Cuándo una función necesita refactoring por su nombre?",
        "a": "Si usás 'and' o 'or' en el nombre (<code>validateAndSave</code>), probablemente hace demasiado. Dividila en dos funciones."
      },
      {
        "q": "¿Importa el naming en funciones privadas?",
        "a": "Sí. El código se lee 10 veces más de lo que se escribe. Las funciones privadas también necesitan nombres claros para mantenibilidad."
      }
    ]
  },
  "en": {
    "pageTitle": "TypeScript Function Name Generator | Genfy",
    "metaDesc": "Generate TypeScript function names following clean code conventions: clear verbs, specific intent, precise semantics. Ideal for coherent naming.",
    "h1": "TypeScript Function Name Generator",
    "intro": "Function names that communicate clear intent, follow language conventions, and improve code readability. Because naming is API design.",
    "tag": "Tools",
    "filterLabel": "Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "query",
        "label": "Queries",
        "items": [
          "getUserById",
          "findUserByEmail",
          "getActiveUsers",
          "fetchOrderHistory",
          "queryProductsByCategory",
          "searchItemsByKeyword",
          "loadUserPreferences",
          "retrieveSessionData",
          "getPostsByAuthor",
          "findRelatedItems",
          "fetchAvailableSlots",
          "listRecentTransactions",
          "getCartItems",
          "loadConfiguration",
          "retrieveMetadata",
          "findMatchingRecords",
          "getCommentsByPost",
          "fetchNotifications",
          "queryInventoryStatus",
          "getUserPermissions",
          "getActiveSubscriptions",
          "findExpiredSessions",
          "loadCachedData",
          "retrieveAuditLog",
          "getAnalyticsData"
        ]
      },
      {
        "id": "mutation",
        "label": "Mutations",
        "items": [
          "createUser",
          "updateUserProfile",
          "deleteAccount",
          "addItemToCart",
          "removeFromWishlist",
          "processPayment",
          "cancelOrder",
          "approveRequest",
          "rejectSubmission",
          "publishPost",
          "archiveDocument",
          "restoreFromTrash",
          "sendNotification",
          "scheduleTask",
          "assignRole",
          "revokeAccess",
          "markAsRead",
          "flagContent",
          "incrementCounter",
          "resetPassword",
          "activateAccount",
          "deactivateUser",
          "mergeRecords",
          "splitTransaction",
          "cloneTemplate"
        ]
      },
      {
        "id": "validation",
        "label": "Validations",
        "items": [
          "isValidEmail",
          "hasPermission",
          "canEditPost",
          "isExpired",
          "hasRequiredFields",
          "isAuthenticated",
          "validatePhoneNumber",
          "checkAvailability",
          "verifyToken",
          "isWithinLimit",
          "hasActivePlan",
          "meetsRequirements",
          "isOwner",
          "canAccessResource",
          "isUniqueUsername",
          "exceedsQuota",
          "matchesPattern",
          "isAllowedAction",
          "hasCompletedOnboarding",
          "isInMaintenance",
          "requiresTwoFactor",
          "isRateLimited",
          "belongsToOrganization",
          "hasValidLicense",
          "passesSecurityCheck"
        ]
      },
      {
        "id": "transform",
        "label": "Transformations",
        "items": [
          "formatCurrency",
          "parseJsonData",
          "serializeObject",
          "normalizeText",
          "sanitizeInput",
          "encodeUrl",
          "decodeToken",
          "compressImage",
          "extractMetadata",
          "mapToDto",
          "convertToLocalTime",
          "slugify",
          "hashPassword",
          "maskSensitiveData",
          "translateText",
          "aggregateResults",
          "flattenArray",
          "groupByProperty",
          "sortByDate",
          "filterActiveItems",
          "paginateResults",
          "deduplicateList",
          "mergeObjects",
          "calculateTotal",
          "buildQueryString"
        ]
      },
      {
        "id": "util",
        "label": "Utilities",
        "items": [
          "debounce",
          "throttle",
          "retry",
          "timeout",
          "memoize",
          "cloneDeep",
          "generateId",
          "randomInt",
          "shuffleArray",
          "waitForCondition",
          "createLogger",
          "initializeApp",
          "teardownResources",
          "connectToDatabase",
          "closeConnection",
          "handleError",
          "logMetric",
          "sendTelemetry",
          "scheduleCleanup",
          "warmCache",
          "prefetchData",
          "measurePerformance",
          "wrapWithRetry",
          "delay",
          "formatStackTrace"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why naming matters more than you think",
        "body": "<p>A function called <code>handle()</code> says nothing. What does it handle? Errors? Clicks? Data? The name is inline documentation. If you need to read the function body to understand what it does, the name failed. <code>processPayment()</code> is clear: it processes a payment. <code>doStuff()</code> is cognitive garbage.</p><p>Verbs matter. Queries (reads) use <code>get</code>, <code>find</code>, <code>fetch</code>, <code>query</code>. Mutations (writes) use <code>create</code>, <code>update</code>, <code>delete</code>, <code>add</code>, <code>remove</code>. Validations return boolean: <code>isValid</code>, <code>hasPermission</code>, <code>canEdit</code>. This consistency isn't whimsy, it's contract communication.</p><p>Domain context defines the verb. In e-commerce, <code>placeOrder()</code> is more precise than <code>createOrder()</code> because it communicates the user action. In inventory systems, <code>reserveStock()</code> says more than <code>updateInventory()</code>. Naming reveals the business mental model. Readable code is code that speaks the language of the problem it solves.</p>"
      },
      {
        "h2": "Conventions your team should respect",
        "body": "<p>Boolean functions start with <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code>. <code>isActive()</code>, <code>hasPermission()</code>, <code>canEdit()</code>. Never <code>checkActive()</code> or <code>verifyPermission()</code> that return boolean—those verbs imply side effects. The convention prevents surprises: if it starts with <code>is</code>, you know it returns pure boolean without modifying state.</p><p>Prefixes <code>get</code> vs <code>fetch</code>: <code>get</code> is synchronous, direct access (e.g. <code>getProperty()</code>). <code>fetch</code> implies asynchronous operation, network or I/O (e.g. <code>fetchUserData()</code>). This distinction helps anticipate if the function is expensive or instant. <code>getUserName()</code> returns string from object; <code>fetchUserName()</code> makes HTTP request.</p><p>Avoid redundant suffixes: <code>getUserData()</code> is redundant if the function already says it returns data. Better <code>getUser()</code>. Same logic with <code>sendEmailNotification()</code>—<code>sendEmail()</code> suffices if context is clear. Fewer words = more readability, as long as you don't sacrifice clarity. The balance is tricky but achieved through iterating in code reviews.</p>"
      },
      {
        "h2": "Mistakes that reveal junior code",
        "body": "<p>Generic functions like <code>handleData()</code>, <code>processInfo()</code>, <code>manageStuff()</code>. They're red flags. If you can't give it a specific name, the function probably does too many things. Refactor into smaller functions with clear responsibility. <code>handleData()</code> should become <code>validateUserInput()</code> + <code>saveToDatabase()</code> + <code>sendConfirmationEmail()</code>. Three clear names, three unit functions.</p><p>Cryptic abbreviations: <code>updUsrPrf()</code>. This isn't 1980s assembly code. Characters don't cost money. <code>updateUserProfile()</code> is perfectly readable. The only exception: universal domain abbreviations (<code>HTML</code>, <code>URL</code>, <code>ID</code>). But <code>usr</code>, <code>prf</code>, <code>mgr</code> are laziness that impacts maintainability.</p><p>Inconsistency: in one file you use <code>getUserById()</code>, in another <code>findUserById()</code>, in another <code>retrieveUserById()</code>. Three different verbs for the same action. Pick one and use it across the codebase. Tools like ESLint with custom rules can enforce conventions. Naming should be boring and predictable, not creative. Save creativity for architecture, not synonyms for 'get'.</p>"
      },
      {
        "h2": "Naming in TypeScript-specific contexts",
        "body": "<p>Factory functions return new objects: <code>createUser()</code>, <code>buildQuery()</code>, <code>makeRequest()</code>. Never mutate arguments. If you mutate, the name must reflect it: <code>addItemToCart(cart, item)</code> suggests mutation; <code>withItemAdded(cart, item)</code> suggests immutability (returns new cart). Naming communicates whether your function is pure or has side effects.</p><p>Event handlers: <code>handleClick()</code>, <code>onSubmit()</code>, <code>processInput()</code>. The <code>handle</code> or <code>on</code> prefix indicates it's a callback. React hooks callbacks use <code>handle</code>: <code>handleChange</code>, <code>handleSubmit</code>. Props that receive callbacks use <code>on</code>: <code>onClick</code>, <code>onValueChange</code>. Consistency between components avoids confusion.</p><p>Async functions should always suggest asynchrony in the name if not obvious from context: <code>fetchData()</code> (obvious), <code>loadConfig()</code> (obvious). But <code>getUser()</code> sync vs <code>getUser()</code> async causes bugs. If the async version exists alongside sync, name them differently: <code>getUserSync()</code> and <code>fetchUser()</code>, or <code>getUser()</code> sync and <code>loadUser()</code> async. The compiler won't save you from returning <code>Promise&lt;User&gt;</code> when you expected <code>User</code> if the names are identical.</p>"
      }
    ],
    "faq": [
      {
        "q": "When to use 'get' vs 'fetch'?",
        "a": "<code>get</code> is direct/synchronous access; <code>fetch</code> implies asynchronous or expensive operation (network, disk, database)."
      },
      {
        "q": "Can I use Spanish verbs if the team is Spanish-speaking?",
        "a": "Technically yes, but industry convention is English. Facilitates collaboration with international devs and use of standard libraries."
      },
      {
        "q": "When does a function need refactoring based on its name?",
        "a": "If you use 'and' or 'or' in the name (<code>validateAndSave</code>), it probably does too much. Split it into two functions."
      },
      {
        "q": "Does naming matter in private functions?",
        "a": "Yes. Code is read 10 times more than it's written. Private functions also need clear names for maintainability."
      }
    ]
  }
};
