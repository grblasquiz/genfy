import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-politicas-cors",
    "en": "cors-policy-generator"
  },
  "category": "security",
  "emoji": "🌐",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Políticas CORS | Genfy",
    "metaDesc": "Generá configuraciones CORS seguras para APIs: origins permitidos, métodos, headers, credentials. Evitá errores comunes de seguridad en cross-origin.",
    "h1": "Generador de Políticas CORS",
    "intro": "Configuraciones CORS que no son ni demasiado permisivas ni demasiado restrictivas. Seguridad sin romper requests legítimos. Porque '*' en producción es pedir problemas.",
    "tag": "Seguridad",
    "filterLabel": "Contexto",
    "countLabel": "Configuraciones",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "strict",
        "label": "Estrictas (Producción)",
        "items": [
          "Access-Control-Allow-Origin: https://app.example.com",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type, Authorization",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 7200",
          "Access-Control-Expose-Headers: X-Request-Id",
          "Access-Control-Allow-Origin: https://www.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers: Content-Type, X-API-Key",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: https://api.example.com",
          "Access-Control-Allow-Methods: GET, OPTIONS",
          "Access-Control-Allow-Headers: Accept, Content-Type",
          "Access-Control-Max-Age: 86400",
          "Vary: Origin",
          "Access-Control-Allow-Origin: https://admin.example.com",
          "Access-Control-Allow-Methods: GET, POST, PATCH, DELETE",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 600"
        ]
      },
      {
        "id": "moderate",
        "label": "Moderadas (Staging)",
        "items": [
          "Access-Control-Allow-Origin: https://*.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-Custom-Header",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Expose-Headers: X-Total-Count, X-Page",
          "Access-Control-Allow-Origin: http://localhost:3000",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 600",
          "Access-Control-Allow-Origin: https://staging.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-ID",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 1800",
          "Access-Control-Allow-Origin: https://preview.example.com",
          "Access-Control-Allow-Methods: GET, POST, PATCH",
          "Access-Control-Allow-Headers: Content-Type, Accept, X-API-Version",
          "Access-Control-Max-Age: 7200"
        ]
      },
      {
        "id": "permissive",
        "label": "Permisivas (Dev/Testing)",
        "items": [
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 0",
          "Access-Control-Allow-Origin: http://localhost:*",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 86400",
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: http://127.0.0.1:*",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Max-Age: 0"
        ]
      },
      {
        "id": "specialized",
        "label": "Especializadas",
        "items": [
          "Access-Control-Allow-Origin: https://cdn.example.com (solo GET para assets)",
          "Access-Control-Allow-Methods: GET",
          "Access-Control-Allow-Headers: Range, If-None-Match",
          "Access-Control-Expose-Headers: Content-Length, Content-Range",
          "Access-Control-Max-Age: 86400",
          "Access-Control-Allow-Origin: https://webhook.example.com (solo POST para webhooks)",
          "Access-Control-Allow-Methods: POST",
          "Access-Control-Allow-Headers: Content-Type, X-Webhook-Signature",
          "Access-Control-Max-Age: 600",
          "Access-Control-Allow-Origin: https://public-api.example.com (pública sin credentials)",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 7200",
          "Access-Control-Allow-Origin: https://graphql.example.com (GraphQL)",
          "Access-Control-Allow-Methods: POST, OPTIONS",
          "Access-Control-Allow-Headers: Content-Type, Authorization, Apollo-Require-Preflight",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: https://ws.example.com (WebSocket handshake)",
          "Access-Control-Allow-Methods: GET",
          "Access-Control-Allow-Headers: Sec-WebSocket-Protocol, Sec-WebSocket-Extensions",
          "Access-Control-Allow-Credentials: true"
        ]
      },
      {
        "id": "headers",
        "label": "Headers Comunes",
        "items": [
          "Content-Type",
          "Authorization",
          "X-API-Key",
          "X-Request-ID",
          "X-CSRF-Token",
          "Accept",
          "Accept-Language",
          "X-Custom-Header",
          "X-Forwarded-For",
          "X-Correlation-ID",
          "If-None-Match",
          "If-Modified-Since",
          "Range",
          "X-Total-Count",
          "X-Page",
          "X-Per-Page",
          "Link",
          "ETag",
          "Cache-Control",
          "Expires",
          "X-RateLimit-Limit",
          "X-RateLimit-Remaining",
          "X-RateLimit-Reset",
          "X-Frame-Options",
          "Content-Security-Policy",
          "Strict-Transport-Security"
        ]
      },
      {
        "id": "methods",
        "label": "Métodos HTTP",
        "items": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE",
          "OPTIONS",
          "HEAD",
          "GET, POST",
          "GET, POST, PUT, DELETE",
          "GET, POST, PATCH",
          "GET, POST, PUT, PATCH, DELETE",
          "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          "GET, POST, OPTIONS",
          "GET, HEAD, OPTIONS",
          "*"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Qué es CORS y por qué existe",
        "body": "<p>CORS (Cross-Origin Resource Sharing) es la política de seguridad del navegador que bloquea requests JavaScript entre dominios diferentes. Existe para prevenir que <code>evil.com</code> haga requests a <code>yourbank.com</code> usando tus cookies activas. Sin CORS, cualquier sitio podría leer tu sesión de Gmail o hacer transferencias bancarias en tu nombre.</p><p>El navegador envía un preflight request (OPTIONS) antes de la request real si usás métodos no-simples (PUT, DELETE) o headers custom. El servidor responde con headers <code>Access-Control-*</code> indicando qué está permitido. Si el servidor no responde con headers correctos, el navegador bloquea la response aunque el servidor la haya procesado. Es policy client-side, no server-side.</p><p>CORS no protege tu API de requests directos (curl, Postman, backend-to-backend). Solo protege contextos de navegador. Si tu API es pública, CORS no agrega seguridad real—necesitás autenticación, rate limiting, validación. CORS es para prevenir ataques de navegador comprometido, no para proteger endpoints sensibles. Esa es responsabilidad de tokens, OAuth, API keys.</p>"
      },
      {
        "h2": "Errores comunes que rompen CORS",
        "body": "<p><strong>Access-Control-Allow-Origin: *</strong> con <strong>credentials: true</strong> no funciona. El navegador rechaza la combinación. Si necesitás credentials (cookies, Authorization header), debés especificar origin exacto: <code>https://app.example.com</code>. No podés usar wildcard. Esto obliga a implementar lógica dinámica: chequear el header <code>Origin</code> del request contra whitelist y responder con ese origin específico.</p><p><strong>Olvidar OPTIONS</strong>: el preflight OPTIONS debe retornar 200 con headers CORS correctos, sin autenticación. Muchos backends requieren auth en todas las rutas, incluyendo OPTIONS. Esto rompe el preflight: el navegador nunca envía credentials en OPTIONS, entonces el preflight falla con 401 antes de intentar la request real. Excluí OPTIONS de middleware de auth.</p><p><strong>Headers expuestos incompletos</strong>: si tu API retorna headers custom (<code>X-Total-Count</code>, <code>X-RateLimit-Remaining</code>), el frontend no puede leerlos sin <code>Access-Control-Expose-Headers</code>. Por default solo expone headers simples (Content-Type, Content-Length). Si tu frontend hace <code>response.headers.get('X-Total-Count')</code> y es <code>null</code>, olvidaste exponerlo. Listá todos los headers custom que tu frontend necesita leer.</p>"
      },
      {
        "h2": "Configuraciones por ambiente",
        "body": "<p><strong>Desarrollo:</strong> <code>Access-Control-Allow-Origin: *</code> está bien localmente. Facilita testing con distintos puertos (frontend en 3000, backend en 8000). Pero nunca commitees esta config a producción. Usá variables de entorno: <code>ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000</code> en dev, origins reales en prod.</p><p><strong>Staging:</strong> whitelist de dominios de staging y preview. Si usás Vercel/Netlify con preview URLs, necesitás permitir <code>https://*.vercel.app</code> o similar. Esto es más permisivo que producción pero controlado. Considerá regex para match de subdominios: <code>/^https:\\/\\/.*\\.example\\.com$/</code>. Testeá que funcione antes de mergear a main.</p><p><strong>Producción:</strong> lista exacta de origins permitidos. <code>https://app.example.com</code>, <code>https://www.example.com</code>. Nada de wildcards si podés evitarlo. Si tenés subdominios dinámicos (tenant-based SaaS), validá contra patrón estricto: <code>/^https:\\/\\/[a-z0-9-]+\\.example\\.com$/</code>. Loggeá origins rechazados para detectar typos en DNS o intentos de ataque. MaxAge largo (7200+) reduce preflight overhead en producción.</p>"
      },
      {
        "h2": "Implementación en distintos frameworks",
        "body": "<p><strong>Express.js:</strong> usá <code>cors</code> package. <code>app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(','), credentials: true }))</code>. Configurá antes de rutas. Para control fino, pasá función: <code>origin: (origin, callback) => { if (whitelist.includes(origin)) callback(null, true); else callback(new Error('Not allowed')); }</code>. Manejá OPTIONS explícitamente si tenés middleware custom.</p><p><strong>Next.js:</strong> en API routes, setteá headers manualmente: <code>res.setHeader('Access-Control-Allow-Origin', allowedOrigin); res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); if (req.method === 'OPTIONS') { res.status(200).end(); return; }</code>. O usá middleware en <code>next.config.js</code> con headers globales. Edge runtime tiene limitaciones; testeá bien.</p><p><strong>Django:</strong> <code>django-cors-headers</code> package. En settings: <code>CORS_ALLOWED_ORIGINS = ['https://app.example.com']</code>, <code>CORS_ALLOW_CREDENTIALS = True</code>. Agregá <code>corsheaders.middleware.CorsMiddleware</code> al principio de MIDDLEWARE. Para regex: <code>CORS_ALLOWED_ORIGIN_REGEXES = [r'^https://\\w+\\.example\\.com$']</code>. Cuidado con orden de middleware: CORS debe procesar antes que auth.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Por qué veo el request en Network pero CORS lo bloquea?",
        "a": "El servidor procesó el request y respondió, pero el navegador bloqueó la response porque faltaban headers CORS correctos. Es protección client-side."
      },
      {
        "q": "¿Puedo usar Access-Control-Allow-Origin: * en producción?",
        "a": "Solo si tu API es completamente pública, no usa credentials, y no retorna data sensible. Caso contrario, especificá origins exactos."
      },
      {
        "q": "¿Qué es un 'simple request' que no requiere preflight?",
        "a": "GET/POST/HEAD con headers básicos (Content-Type: text/plain, application/x-www-form-urlencoded, multipart/form-data). Cualquier otra cosa trigger preflight."
      },
      {
        "q": "¿CORS protege mi API de bots y scrapers?",
        "a": "No. CORS solo aplica en navegadores. Bots, curl, Postman ignoran CORS completamente. Necesitás autenticación y rate limiting."
      }
    ]
  },
  "en": {
    "pageTitle": "CORS Policy Generator | Genfy",
    "metaDesc": "Generate secure CORS configurations for APIs: allowed origins, methods, headers, credentials. Avoid common cross-origin security mistakes.",
    "h1": "CORS Policy Generator",
    "intro": "CORS configurations that aren't too permissive or too restrictive. Security without breaking legitimate requests. Because '*' in production is asking for trouble.",
    "tag": "Security",
    "filterLabel": "Context",
    "countLabel": "Configurations",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "strict",
        "label": "Strict (Production)",
        "items": [
          "Access-Control-Allow-Origin: https://app.example.com",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type, Authorization",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 7200",
          "Access-Control-Expose-Headers: X-Request-Id",
          "Access-Control-Allow-Origin: https://www.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers: Content-Type, X-API-Key",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: https://api.example.com",
          "Access-Control-Allow-Methods: GET, OPTIONS",
          "Access-Control-Allow-Headers: Accept, Content-Type",
          "Access-Control-Max-Age: 86400",
          "Vary: Origin",
          "Access-Control-Allow-Origin: https://admin.example.com",
          "Access-Control-Allow-Methods: GET, POST, PATCH, DELETE",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 600"
        ]
      },
      {
        "id": "moderate",
        "label": "Moderate (Staging)",
        "items": [
          "Access-Control-Allow-Origin: https://*.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-Custom-Header",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Expose-Headers: X-Total-Count, X-Page",
          "Access-Control-Allow-Origin: http://localhost:3000",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 600",
          "Access-Control-Allow-Origin: https://staging.example.com",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-ID",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 1800",
          "Access-Control-Allow-Origin: https://preview.example.com",
          "Access-Control-Allow-Methods: GET, POST, PATCH",
          "Access-Control-Allow-Headers: Content-Type, Accept, X-API-Version",
          "Access-Control-Max-Age: 7200"
        ]
      },
      {
        "id": "permissive",
        "label": "Permissive (Dev/Testing)",
        "items": [
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 0",
          "Access-Control-Allow-Origin: http://localhost:*",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 86400",
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: http://127.0.0.1:*",
          "Access-Control-Allow-Methods: *",
          "Access-Control-Allow-Headers: *",
          "Access-Control-Max-Age: 0"
        ]
      },
      {
        "id": "specialized",
        "label": "Specialized",
        "items": [
          "Access-Control-Allow-Origin: https://cdn.example.com (GET only for assets)",
          "Access-Control-Allow-Methods: GET",
          "Access-Control-Allow-Headers: Range, If-None-Match",
          "Access-Control-Expose-Headers: Content-Length, Content-Range",
          "Access-Control-Max-Age: 86400",
          "Access-Control-Allow-Origin: https://webhook.example.com (POST only for webhooks)",
          "Access-Control-Allow-Methods: POST",
          "Access-Control-Allow-Headers: Content-Type, X-Webhook-Signature",
          "Access-Control-Max-Age: 600",
          "Access-Control-Allow-Origin: https://public-api.example.com (public no credentials)",
          "Access-Control-Allow-Methods: GET, POST",
          "Access-Control-Allow-Headers: Content-Type",
          "Access-Control-Allow-Credentials: false",
          "Access-Control-Max-Age: 7200",
          "Access-Control-Allow-Origin: https://graphql.example.com (GraphQL)",
          "Access-Control-Allow-Methods: POST, OPTIONS",
          "Access-Control-Allow-Headers: Content-Type, Authorization, Apollo-Require-Preflight",
          "Access-Control-Allow-Credentials: true",
          "Access-Control-Max-Age: 3600",
          "Access-Control-Allow-Origin: https://ws.example.com (WebSocket handshake)",
          "Access-Control-Allow-Methods: GET",
          "Access-Control-Allow-Headers: Sec-WebSocket-Protocol, Sec-WebSocket-Extensions",
          "Access-Control-Allow-Credentials: true"
        ]
      },
      {
        "id": "headers",
        "label": "Common Headers",
        "items": [
          "Content-Type",
          "Authorization",
          "X-API-Key",
          "X-Request-ID",
          "X-CSRF-Token",
          "Accept",
          "Accept-Language",
          "X-Custom-Header",
          "X-Forwarded-For",
          "X-Correlation-ID",
          "If-None-Match",
          "If-Modified-Since",
          "Range",
          "X-Total-Count",
          "X-Page",
          "X-Per-Page",
          "Link",
          "ETag",
          "Cache-Control",
          "Expires",
          "X-RateLimit-Limit",
          "X-RateLimit-Remaining",
          "X-RateLimit-Reset",
          "X-Frame-Options",
          "Content-Security-Policy",
          "Strict-Transport-Security"
        ]
      },
      {
        "id": "methods",
        "label": "HTTP Methods",
        "items": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE",
          "OPTIONS",
          "HEAD",
          "GET, POST",
          "GET, POST, PUT, DELETE",
          "GET, POST, PATCH",
          "GET, POST, PUT, PATCH, DELETE",
          "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          "GET, POST, OPTIONS",
          "GET, HEAD, OPTIONS",
          "*"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What CORS is and why it exists",
        "body": "<p>CORS (Cross-Origin Resource Sharing) is the browser security policy that blocks JavaScript requests between different domains. It exists to prevent <code>evil.com</code> from making requests to <code>yourbank.com</code> using your active cookies. Without CORS, any site could read your Gmail session or make bank transfers in your name.</p><p>The browser sends a preflight request (OPTIONS) before the real request if you use non-simple methods (PUT, DELETE) or custom headers. The server responds with <code>Access-Control-*</code> headers indicating what's allowed. If the server doesn't respond with correct headers, the browser blocks the response even though the server processed it. It's client-side policy, not server-side.</p><p>CORS doesn't protect your API from direct requests (curl, Postman, backend-to-backend). It only applies in browser contexts. If your API is public, CORS doesn't add real security—you need authentication, rate limiting, validation. CORS is to prevent compromised browser attacks, not to protect sensitive endpoints. That's the responsibility of tokens, OAuth, API keys.</p>"
      },
      {
        "h2": "Common mistakes that break CORS",
        "body": "<p><strong>Access-Control-Allow-Origin: *</strong> with <strong>credentials: true</strong> doesn't work. The browser rejects the combination. If you need credentials (cookies, Authorization header), you must specify exact origin: <code>https://app.example.com</code>. You can't use wildcard. This forces you to implement dynamic logic: check the <code>Origin</code> header from the request against a whitelist and respond with that specific origin.</p><p><strong>Forgetting OPTIONS</strong>: the preflight OPTIONS must return 200 with correct CORS headers, without authentication. Many backends require auth on all routes, including OPTIONS. This breaks preflight: the browser never sends credentials in OPTIONS, so preflight fails with 401 before attempting the real request. Exclude OPTIONS from auth middleware.</p><p><strong>Incomplete exposed headers</strong>: if your API returns custom headers (<code>X-Total-Count</code>, <code>X-RateLimit-Remaining</code>), the frontend can't read them without <code>Access-Control-Expose-Headers</code>. By default it only exposes simple headers (Content-Type, Content-Length). If your frontend does <code>response.headers.get('X-Total-Count')</code> and it's <code>null</code>, you forgot to expose it. List all custom headers your frontend needs to read.</p>"
      },
      {
        "h2": "Configurations by environment",
        "body": "<p><strong>Development:</strong> <code>Access-Control-Allow-Origin: *</code> is fine locally. Facilitates testing with different ports (frontend on 3000, backend on 8000). But never commit this config to production. Use environment variables: <code>ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000</code> in dev, real origins in prod.</p><p><strong>Staging:</strong> whitelist of staging and preview domains. If you use Vercel/Netlify with preview URLs, you need to allow <code>https://*.vercel.app</code> or similar. This is more permissive than production but controlled. Consider regex for subdomain matching: <code>/^https:\\/\\/.*\\.example\\.com$/</code>. Test that it works before merging to main.</p><p><strong>Production:</strong> exact list of allowed origins. <code>https://app.example.com</code>, <code>https://www.example.com</code>. No wildcards if you can avoid it. If you have dynamic subdomains (tenant-based SaaS), validate against strict pattern: <code>/^https:\\/\\/[a-z0-9-]+\\.example\\.com$/</code>. Log rejected origins to detect DNS typos or attack attempts. Long MaxAge (7200+) reduces preflight overhead in production.</p>"
      },
      {
        "h2": "Implementation in different frameworks",
        "body": "<p><strong>Express.js:</strong> use <code>cors</code> package. <code>app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(','), credentials: true }))</code>. Configure before routes. For fine control, pass function: <code>origin: (origin, callback) => { if (whitelist.includes(origin)) callback(null, true); else callback(new Error('Not allowed')); }</code>. Handle OPTIONS explicitly if you have custom middleware.</p><p><strong>Next.js:</strong> in API routes, set headers manually: <code>res.setHeader('Access-Control-Allow-Origin', allowedOrigin); res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); if (req.method === 'OPTIONS') { res.status(200).end(); return; }</code>. Or use middleware in <code>next.config.js</code> with global headers. Edge runtime has limitations; test thoroughly.</p><p><strong>Django:</strong> <code>django-cors-headers</code> package. In settings: <code>CORS_ALLOWED_ORIGINS = ['https://app.example.com']</code>, <code>CORS_ALLOW_CREDENTIALS = True</code>. Add <code>corsheaders.middleware.CorsMiddleware</code> at the beginning of MIDDLEWARE. For regex: <code>CORS_ALLOWED_ORIGIN_REGEXES = [r'^https://\\w+\\.example\\.com$']</code>. Careful with middleware order: CORS must process before auth.</p>"
      }
    ],
    "faq": [
      {
        "q": "Why do I see the request in Network but CORS blocks it?",
        "a": "The server processed the request and responded, but the browser blocked the response because correct CORS headers were missing. It's client-side protection."
      },
      {
        "q": "Can I use Access-Control-Allow-Origin: * in production?",
        "a": "Only if your API is completely public, doesn't use credentials, and doesn't return sensitive data. Otherwise, specify exact origins."
      },
      {
        "q": "What is a 'simple request' that doesn't require preflight?",
        "a": "GET/POST/HEAD with basic headers (Content-Type: text/plain, application/x-www-form-urlencoded, multipart/form-data). Anything else triggers preflight."
      },
      {
        "q": "Does CORS protect my API from bots and scrapers?",
        "a": "No. CORS only applies in browsers. Bots, curl, Postman completely ignore CORS. You need authentication and rate limiting."
      }
    ]
  }
};
