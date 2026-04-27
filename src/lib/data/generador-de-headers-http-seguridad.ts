import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-headers-http-seguridad",
    "en": "security-headers-generator"
  },
  "category": "security",
  "emoji": "🔒",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Headers HTTP de Seguridad | Genfy",
    "metaDesc": "Genera headers HTTP de seguridad: CSP, HSTS, X-Frame-Options y más. Protege tu sitio contra XSS, clickjacking e inyección. Configuración lista para copiar.",
    "h1": "Generador de Headers HTTP de Seguridad",
    "intro": "Crea configuraciones de headers de seguridad para proteger tu aplicación web. Desde Content Security Policy hasta HSTS, generá el código listo para tu servidor.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de header",
    "countLabel": "Cantidad",
    "generateLabel": "Generar headers",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "csp",
        "label": "Content-Security-Policy",
        "items": [
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' https: data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.example.com; frame-src 'none'; object-src 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self' 'nonce-{random}'; img-src 'self' https: data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; block-all-mixed-content",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic' 'nonce-{random}' https:; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self'; frame-ancestors 'none'; report-uri /csp-report",
          "Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src *; font-src *; connect-src *; report-uri /csp-report-only",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com 'sha256-abc123...'; style-src 'self' 'sha256-def456...'; img-src 'self' https: data: blob:; media-src 'self' https:; font-src 'self' data:; connect-src 'self' wss:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self'; img-src 'self' https:; font-src 'self'; connect-src 'self'; worker-src 'self' blob:; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content"
        ]
      },
      {
        "id": "hsts",
        "label": "Strict-Transport-Security",
        "items": [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          "Strict-Transport-Security: max-age=63072000; includeSubDomains",
          "Strict-Transport-Security: max-age=15552000; includeSubDomains; preload",
          "Strict-Transport-Security: max-age=31536000",
          "Strict-Transport-Security: max-age=86400; includeSubDomains",
          "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload"
        ]
      },
      {
        "id": "xframe",
        "label": "X-Frame-Options",
        "items": [
          "X-Frame-Options: DENY",
          "X-Frame-Options: SAMEORIGIN",
          "X-Frame-Options: ALLOW-FROM https://trusted-site.com"
        ]
      },
      {
        "id": "xcontent",
        "label": "X-Content-Type-Options",
        "items": [
          "X-Content-Type-Options: nosniff"
        ]
      },
      {
        "id": "referrer",
        "label": "Referrer-Policy",
        "items": [
          "Referrer-Policy: no-referrer",
          "Referrer-Policy: no-referrer-when-downgrade",
          "Referrer-Policy: strict-origin",
          "Referrer-Policy: strict-origin-when-cross-origin",
          "Referrer-Policy: same-origin",
          "Referrer-Policy: origin",
          "Referrer-Policy: origin-when-cross-origin",
          "Referrer-Policy: unsafe-url"
        ]
      },
      {
        "id": "permissions",
        "label": "Permissions-Policy",
        "items": [
          "Permissions-Policy: geolocation=(), microphone=(), camera=()",
          "Permissions-Policy: geolocation=(self), microphone=(self), camera=(self)",
          "Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
          "Permissions-Policy: interest-cohort=()",
          "Permissions-Policy: fullscreen=(self), geolocation=(self 'https://trusted.com'), payment=()",
          "Permissions-Policy: autoplay=(self), camera=(), microphone=(), payment=(), sync-xhr=()"
        ]
      },
      {
        "id": "xss",
        "label": "X-XSS-Protection (deprecated)",
        "items": [
          "X-XSS-Protection: 1; mode=block",
          "X-XSS-Protection: 0"
        ]
      },
      {
        "id": "coep",
        "label": "Cross-Origin-Embedder-Policy",
        "items": [
          "Cross-Origin-Embedder-Policy: require-corp",
          "Cross-Origin-Embedder-Policy: credentialless",
          "Cross-Origin-Embedder-Policy: unsafe-none"
        ]
      },
      {
        "id": "coop",
        "label": "Cross-Origin-Opener-Policy",
        "items": [
          "Cross-Origin-Opener-Policy: same-origin",
          "Cross-Origin-Opener-Policy: same-origin-allow-popups",
          "Cross-Origin-Opener-Policy: unsafe-none"
        ]
      },
      {
        "id": "corp",
        "label": "Cross-Origin-Resource-Policy",
        "items": [
          "Cross-Origin-Resource-Policy: same-site",
          "Cross-Origin-Resource-Policy: same-origin",
          "Cross-Origin-Resource-Policy: cross-origin"
        ]
      },
      {
        "id": "nel",
        "label": "NEL (Network Error Logging)",
        "items": [
          "NEL: {\"report_to\":\"default\",\"max_age\":31536000,\"include_subdomains\":true}",
          "NEL: {\"report_to\":\"network-errors\",\"max_age\":86400,\"success_fraction\":0.01,\"failure_fraction\":1.0}"
        ]
      },
      {
        "id": "custom",
        "label": "Combinaciones comunes",
        "items": [
          "# Configuración básica segura\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nPermissions-Policy: geolocation=(), microphone=(), camera=()",
          "# Configuración restrictiva máxima\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\nReferrer-Policy: no-referrer\nContent-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'\nPermissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()\nCross-Origin-Embedder-Policy: require-corp\nCross-Origin-Opener-Policy: same-origin\nCross-Origin-Resource-Policy: same-origin",
          "# Configuración para APIs públicas\nStrict-Transport-Security: max-age=31536000\nX-Content-Type-Options: nosniff\nReferrer-Policy: no-referrer\nAccess-Control-Allow-Origin: https://trusted-domain.com\nAccess-Control-Allow-Methods: GET, POST, OPTIONS\nAccess-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Max-Age: 86400",
          "# Configuración con CSP y reporting\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nContent-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self'; report-uri /csp-report\nX-Frame-Options: SAMEORIGIN\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nReport-To: {\"group\":\"default\",\"max_age\":31536000,\"endpoints\":[{\"url\":\"/report-endpoint\"}]}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Content-Security-Policy: la primera línea de defensa contra XSS",
        "body": "<p>El <strong>Content-Security-Policy</strong> (CSP) es el header más poderoso y complejo. Define de dónde puede tu página cargar recursos (scripts, estilos, imágenes, fuentes). Ejemplo básico: <code>default-src 'self'</code> solo permite recursos del mismo origin. Para permitir CDNs específicos: <code>script-src 'self' https://cdn.example.com</code>. El error más común es usar <code>'unsafe-inline'</code> y <code>'unsafe-eval'</code>, que eliminan gran parte de la protección contra XSS.</p><p>Estrategia recomendada: empezá con <strong>CSP-Report-Only</strong> durante desarrollo para ver qué se rompe sin bloquear nada. Monitoreá los reportes (configurá <code>report-uri /csp-endpoint</code>) y ajustá las directivas hasta que no haya violations legítimas. Entonces cambiá a <code>Content-Security-Policy</code> enforcement. Para sitios con inline scripts/styles legacy, usá <strong>nonces</strong>: generá un token random por request y agregalo como atributo <code>nonce=\"random123\"</code> en cada <code>&lt;script&gt;</code>, permitiéndolo con <code>script-src 'nonce-random123'</code>.</p><p>Directivas críticas: <code>default-src</code> (fallback para todo), <code>script-src</code> (de dónde cargar JS), <code>style-src</code> (CSS), <code>img-src</code> (imágenes), <code>connect-src</code> (fetch/XHR/WebSocket), <code>frame-ancestors</code> (quién puede embeber tu página en iframe, reemplaza X-Frame-Options), <code>upgrade-insecure-requests</code> (auto-upgrade HTTP a HTTPS), <code>block-all-mixed-content</code> (bloquea HTTP en páginas HTTPS). Un CSP bien configurado previene 99% de XSS attacks incluso si tenés vulnerabilidades en el código.</p>"
      },
      {
        "h2": "HSTS: forzando HTTPS permanentemente",
        "body": "<p><strong>Strict-Transport-Security</strong> (HSTS) le dice al browser: 'siempre usá HTTPS para este dominio, nunca HTTP, ni siquiera si el usuario tipea http:// explícitamente'. Formato: <code>max-age=31536000; includeSubDomains; preload</code>. El <code>max-age</code> en segundos indica cuánto el browser recordará esta regla (31536000 = 1 año). <code>includeSubDomains</code> aplica la regla a todos los subdominios (crítico, pero asegurate de que todos soporten HTTPS).</p><p>La directiva <code>preload</code> es opcional pero poderosa: somete tu dominio a la HSTS Preload List de Chromium (compartida por Chrome, Firefox, Safari, Edge). Esto significa que browsers NUNCA intentarán HTTP en tu dominio, ni siquiera en la primera visita. Beneficio: elimina window de ataque en first connection. Riesgo: si rompés HTTPS en algún subdominio, usuarios no podrán acceder hasta que lo arregles. Requisitos para preload: <code>max-age</code> mínimo 1 año, <code>includeSubDomains</code> presente, HTTPS funcionando en todos los subdominios.</p><p>Errores comunes: setear HSTS sin tener HTTPS configurado (el header se ignora en HTTP), usar <code>max-age</code> muy corto en producción (menos de 6 meses no es efectivo), olvidarse de <code>includeSubDomains</code> y dejar subdominios vulnerables. Estrategia de rollout seguro: empezá con <code>max-age=300</code> (5 minutos), monitoreá por días, aumentá gradualmente a 86400 (1 día), luego a 31536000 (1 año). Si todo funciona, considerá preload.</p>"
      },
      {
        "h2": "Headers de aislamiento: COEP, COOP, CORP",
        "body": "<p>Los <strong>Cross-Origin headers</strong> (COEP, COOP, CORP) trabajan juntos para crear aislamiento fuerte entre origins, necesario para features como SharedArrayBuffer. <strong>COEP</strong> (Cross-Origin-Embedder-Policy) <code>require-corp</code> dice: 'solo cargá recursos cross-origin si tienen header CORP o CORS apropiado'. Esto previene que tu página lea datos de otros origins sin permiso explícito. Necesario para usar APIs poderosas como <code>performance.measureUserAgentSpecificMemory()</code>.</p><p><strong>COOP</strong> (Cross-Origin-Opener-Policy) <code>same-origin</code> previene que ventanas popup o tabs abiertos por tu sitio puedan acceder al <code>window.opener</code>. Protege contra ataques tipo 'reverse tabnabbing' donde un sitio malicioso abierto desde tu app puede manipular la página original. <code>same-origin-allow-popups</code> es más permisivo: permite popups pero no cross-origin. <code>unsafe-none</code> es el default (sin protección).</p><p><strong>CORP</strong> (Cross-Origin-Resource-Policy) controla quién puede cargar TUS recursos. <code>same-origin</code>: solo tu origin. <code>same-site</code>: tu site y subdominios. <code>cross-origin</code>: cualquiera (útil para CDNs públicos). Estos tres headers combinados crean 'cross-origin isolation', habilitando features sensibles de performance. Si tus resources (imágenes, scripts) son embebidos en otros sitios legítimamente, necesitás <code>CORP: cross-origin</code> o CORS headers apropiados.</p>"
      },
      {
        "h2": "Configuración por plataforma: Nginx, Apache, Node.js",
        "body": "<p>En <strong>Nginx</strong>, agregá headers en el bloque <code>server</code> o <code>location</code>: <code>add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload' always;</code>. La directiva <code>always</code> es crucial: sin ella, Nginx no envía el header en respuestas de error (4xx, 5xx). Para CSP multilinea, escapá o usá una variable. Ejemplo: <code>set $csp \"default-src 'self'; script-src 'self' https://cdn.com\";</code> luego <code>add_header Content-Security-Policy $csp always;</code>.</p><p>En <strong>Apache</strong>, usá <code>mod_headers</code>. En <code>.htaccess</code> o config: <code>Header always set Strict-Transport-Security \"max-age=31536000; includeSubDomains; preload\"</code>. Para CSP: <code>Header always set Content-Security-Policy \"default-src 'self'; script-src 'self'\"</code>. Si tenés problemas, verificá que <code>mod_headers</code> esté habilitado: <code>a2enmod headers</code> y restart Apache.</p><p>En <strong>Node.js/Express</strong>, usá middleware como <code>helmet</code>: <code>app.use(helmet())</code> setea varios headers seguros por default. Para customizar: <code>app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: [\"'self'\"], scriptSrc: [\"'self'\", \"'nonce-...\"] } }))</code>. Para nonces dinámicos: generá con <code>crypto.randomBytes(16).toString('base64')</code> en cada request, guardalo en <code>res.locals.nonce</code>, y referencialo en CSP y templates. En <strong>Next.js</strong>, configurá headers en <code>next.config.js</code> bajo <code>async headers()</code> return.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar todos estos headers simultáneamente?",
        "a": "Sí, y es recomendable para máxima seguridad. No hay conflictos entre ellos; cada uno protege contra vectores de ataque diferentes."
      },
      {
        "q": "¿Los headers de seguridad afectan el rendimiento del sitio?",
        "a": "Impacto mínimo: solo bytes extra en el HTTP response. El browser procesa headers rápidamente. CSP puede prevenir carga de recursos maliciosos, mejorando performance."
      },
      {
        "q": "¿Qué hago si CSP rompe funcionalidad existente?",
        "a": "Usá CSP-Report-Only primero, analizá violations, ajustá directivas. Para inline scripts/styles legacy, migrá a archivos externos o usá nonces/hashes."
      },
      {
        "q": "¿Cómo testeo si mis headers están configurados correctamente?",
        "a": "Usá SecurityHeaders.com o Mozilla Observatory. Browser DevTools → Network tab muestra headers de respuesta. Para CSP, Console muestra violations."
      }
    ]
  },
  "en": {
    "pageTitle": "Security Headers Generator | Genfy",
    "metaDesc": "Generate security HTTP headers: CSP, HSTS, X-Frame-Options and more. Protect your site against XSS, clickjacking and injection. Ready-to-copy configuration.",
    "h1": "Security Headers Generator",
    "intro": "Create security header configurations to protect your web application. From Content Security Policy to HSTS, generate ready-to-use code for your server.",
    "tag": "Security",
    "filterLabel": "Header type",
    "countLabel": "Amount",
    "generateLabel": "Generate headers",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "csp",
        "label": "Content-Security-Policy",
        "items": [
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' https: data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.example.com; frame-src 'none'; object-src 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self' 'nonce-{random}'; img-src 'self' https: data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; block-all-mixed-content",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic' 'nonce-{random}' https:; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self'; frame-ancestors 'none'; report-uri /csp-report",
          "Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src *; font-src *; connect-src *; report-uri /csp-report-only",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com 'sha256-abc123...'; style-src 'self' 'sha256-def456...'; img-src 'self' https: data: blob:; media-src 'self' https:; font-src 'self' data:; connect-src 'self' wss:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self'; img-src 'self' https:; font-src 'self'; connect-src 'self'; worker-src 'self' blob:; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content"
        ]
      },
      {
        "id": "hsts",
        "label": "Strict-Transport-Security",
        "items": [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          "Strict-Transport-Security: max-age=63072000; includeSubDomains",
          "Strict-Transport-Security: max-age=15552000; includeSubDomains; preload",
          "Strict-Transport-Security: max-age=31536000",
          "Strict-Transport-Security: max-age=86400; includeSubDomains",
          "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload"
        ]
      },
      {
        "id": "xframe",
        "label": "X-Frame-Options",
        "items": [
          "X-Frame-Options: DENY",
          "X-Frame-Options: SAMEORIGIN",
          "X-Frame-Options: ALLOW-FROM https://trusted-site.com"
        ]
      },
      {
        "id": "xcontent",
        "label": "X-Content-Type-Options",
        "items": [
          "X-Content-Type-Options: nosniff"
        ]
      },
      {
        "id": "referrer",
        "label": "Referrer-Policy",
        "items": [
          "Referrer-Policy: no-referrer",
          "Referrer-Policy: no-referrer-when-downgrade",
          "Referrer-Policy: strict-origin",
          "Referrer-Policy: strict-origin-when-cross-origin",
          "Referrer-Policy: same-origin",
          "Referrer-Policy: origin",
          "Referrer-Policy: origin-when-cross-origin",
          "Referrer-Policy: unsafe-url"
        ]
      },
      {
        "id": "permissions",
        "label": "Permissions-Policy",
        "items": [
          "Permissions-Policy: geolocation=(), microphone=(), camera=()",
          "Permissions-Policy: geolocation=(self), microphone=(self), camera=(self)",
          "Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
          "Permissions-Policy: interest-cohort=()",
          "Permissions-Policy: fullscreen=(self), geolocation=(self 'https://trusted.com'), payment=()",
          "Permissions-Policy: autoplay=(self), camera=(), microphone=(), payment=(), sync-xhr=()"
        ]
      },
      {
        "id": "xss",
        "label": "X-XSS-Protection (deprecated)",
        "items": [
          "X-XSS-Protection: 1; mode=block",
          "X-XSS-Protection: 0"
        ]
      },
      {
        "id": "coep",
        "label": "Cross-Origin-Embedder-Policy",
        "items": [
          "Cross-Origin-Embedder-Policy: require-corp",
          "Cross-Origin-Embedder-Policy: credentialless",
          "Cross-Origin-Embedder-Policy: unsafe-none"
        ]
      },
      {
        "id": "coop",
        "label": "Cross-Origin-Opener-Policy",
        "items": [
          "Cross-Origin-Opener-Policy: same-origin",
          "Cross-Origin-Opener-Policy: same-origin-allow-popups",
          "Cross-Origin-Opener-Policy: unsafe-none"
        ]
      },
      {
        "id": "corp",
        "label": "Cross-Origin-Resource-Policy",
        "items": [
          "Cross-Origin-Resource-Policy: same-site",
          "Cross-Origin-Resource-Policy: same-origin",
          "Cross-Origin-Resource-Policy: cross-origin"
        ]
      },
      {
        "id": "nel",
        "label": "NEL (Network Error Logging)",
        "items": [
          "NEL: {\"report_to\":\"default\",\"max_age\":31536000,\"include_subdomains\":true}",
          "NEL: {\"report_to\":\"network-errors\",\"max_age\":86400,\"success_fraction\":0.01,\"failure_fraction\":1.0}"
        ]
      },
      {
        "id": "custom",
        "label": "Common combinations",
        "items": [
          "# Basic secure configuration\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nPermissions-Policy: geolocation=(), microphone=(), camera=()",
          "# Maximum restrictive configuration\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\nReferrer-Policy: no-referrer\nContent-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'\nPermissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()\nCross-Origin-Embedder-Policy: require-corp\nCross-Origin-Opener-Policy: same-origin\nCross-Origin-Resource-Policy: same-origin",
          "# Configuration for public APIs\nStrict-Transport-Security: max-age=31536000\nX-Content-Type-Options: nosniff\nReferrer-Policy: no-referrer\nAccess-Control-Allow-Origin: https://trusted-domain.com\nAccess-Control-Allow-Methods: GET, POST, OPTIONS\nAccess-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Max-Age: 86400",
          "# Configuration with CSP and reporting\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nContent-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self'; report-uri /csp-report\nX-Frame-Options: SAMEORIGIN\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nReport-To: {\"group\":\"default\",\"max_age\":31536000,\"endpoints\":[{\"url\":\"/report-endpoint\"}]}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Content-Security-Policy: first line of defense against XSS",
        "body": "<p><strong>Content-Security-Policy</strong> (CSP) is the most powerful and complex header. It defines where your page can load resources from (scripts, styles, images, fonts). Basic example: <code>default-src 'self'</code> only allows resources from the same origin. To allow specific CDNs: <code>script-src 'self' https://cdn.example.com</code>. The most common mistake is using <code>'unsafe-inline'</code> and <code>'unsafe-eval'</code>, which eliminate much of the XSS protection.</p><p>Recommended strategy: start with <strong>CSP-Report-Only</strong> during development to see what breaks without blocking anything. Monitor reports (configure <code>report-uri /csp-endpoint</code>) and adjust directives until there are no legitimate violations. Then switch to <code>Content-Security-Policy</code> enforcement. For sites with legacy inline scripts/styles, use <strong>nonces</strong>: generate a random token per request and add it as <code>nonce=\"random123\"</code> attribute to each <code>&lt;script&gt;</code>, allowing it with <code>script-src 'nonce-random123'</code>.</p><p>Critical directives: <code>default-src</code> (fallback for everything), <code>script-src</code> (where to load JS from), <code>style-src</code> (CSS), <code>img-src</code> (images), <code>connect-src</code> (fetch/XHR/WebSocket), <code>frame-ancestors</code> (who can embed your page in iframe, replaces X-Frame-Options), <code>upgrade-insecure-requests</code> (auto-upgrade HTTP to HTTPS), <code>block-all-mixed-content</code> (blocks HTTP on HTTPS pages). A well-configured CSP prevents 99% of XSS attacks even if you have vulnerabilities in code.</p>"
      },
      {
        "h2": "HSTS: forcing HTTPS permanently",
        "body": "<p><strong>Strict-Transport-Security</strong> (HSTS) tells the browser: 'always use HTTPS for this domain, never HTTP, not even if the user explicitly types http://'. Format: <code>max-age=31536000; includeSubDomains; preload</code>. The <code>max-age</code> in seconds indicates how long the browser will remember this rule (31536000 = 1 year). <code>includeSubDomains</code> applies the rule to all subdomains (critical, but make sure all support HTTPS).</p><p>The <code>preload</code> directive is optional but powerful: it submits your domain to Chromium's HSTS Preload List (shared by Chrome, Firefox, Safari, Edge). This means browsers will NEVER try HTTP on your domain, not even on first visit. Benefit: eliminates attack window on first connection. Risk: if you break HTTPS on any subdomain, users can't access until you fix it. Requirements for preload: minimum 1-year <code>max-age</code>, <code>includeSubDomains</code> present, HTTPS working on all subdomains.</p><p>Common mistakes: setting HSTS without having HTTPS configured (header is ignored on HTTP), using too short <code>max-age</code> in production (less than 6 months isn't effective), forgetting <code>includeSubDomains</code> and leaving subdomains vulnerable. Safe rollout strategy: start with <code>max-age=300</code> (5 minutes), monitor for days, gradually increase to 86400 (1 day), then to 31536000 (1 year). If everything works, consider preload.</p>"
      },
      {
        "h2": "Isolation headers: COEP, COOP, CORP",
        "body": "<p><strong>Cross-Origin headers</strong> (COEP, COOP, CORP) work together to create strong isolation between origins, necessary for features like SharedArrayBuffer. <strong>COEP</strong> (Cross-Origin-Embedder-Policy) <code>require-corp</code> says: 'only load cross-origin resources if they have appropriate CORP or CORS header'. This prevents your page from reading data from other origins without explicit permission. Required to use powerful APIs like <code>performance.measureUserAgentSpecificMemory()</code>.</p><p><strong>COOP</strong> (Cross-Origin-Opener-Policy) <code>same-origin</code> prevents popup windows or tabs opened by your site from accessing <code>window.opener</code>. Protects against 'reverse tabnabbing' attacks where a malicious site opened from your app can manipulate the original page. <code>same-origin-allow-popups</code> is more permissive: allows popups but not cross-origin. <code>unsafe-none</code> is the default (no protection).</p><p><strong>CORP</strong> (Cross-Origin-Resource-Policy) controls who can load YOUR resources. <code>same-origin</code>: only your origin. <code>same-site</code>: your site and subdomains. <code>cross-origin</code>: anyone (useful for public CDNs). These three headers combined create 'cross-origin isolation', enabling sensitive performance features. If your resources (images, scripts) are legitimately embedded on other sites, you need <code>CORP: cross-origin</code> or appropriate CORS headers.</p>"
      },
      {
        "h2": "Platform-specific configuration: Nginx, Apache, Node.js",
        "body": "<p>In <strong>Nginx</strong>, add headers in the <code>server</code> or <code>location</code> block: <code>add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload' always;</code>. The <code>always</code> directive is crucial: without it, Nginx doesn't send the header on error responses (4xx, 5xx). For multiline CSP, escape or use a variable. Example: <code>set $csp \"default-src 'self'; script-src 'self' https://cdn.com\";</code> then <code>add_header Content-Security-Policy $csp always;</code>.</p><p>In <strong>Apache</strong>, use <code>mod_headers</code>. In <code>.htaccess</code> or config: <code>Header always set Strict-Transport-Security \"max-age=31536000; includeSubDomains; preload\"</code>. For CSP: <code>Header always set Content-Security-Policy \"default-src 'self'; script-src 'self'\"</code>. If you have issues, verify <code>mod_headers</code> is enabled: <code>a2enmod headers</code> and restart Apache.</p><p>In <strong>Node.js/Express</strong>, use middleware like <code>helmet</code>: <code>app.use(helmet())</code> sets several secure headers by default. To customize: <code>app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: [\"'self'\"], scriptSrc: [\"'self'\", \"'nonce-...\"] } }))</code>. For dynamic nonces: generate with <code>crypto.randomBytes(16).toString('base64')</code> on each request, store in <code>res.locals.nonce</code>, and reference in CSP and templates. In <strong>Next.js</strong>, configure headers in <code>next.config.js</code> under <code>async headers()</code> return.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use all these headers simultaneously?",
        "a": "Yes, and it's recommended for maximum security. There are no conflicts between them; each protects against different attack vectors."
      },
      {
        "q": "Do security headers affect site performance?",
        "a": "Minimal impact: just extra bytes in the HTTP response. Browsers process headers quickly. CSP can prevent loading malicious resources, improving performance."
      },
      {
        "q": "What do I do if CSP breaks existing functionality?",
        "a": "Use CSP-Report-Only first, analyze violations, adjust directives. For legacy inline scripts/styles, migrate to external files or use nonces/hashes."
      },
      {
        "q": "How do I test if my headers are configured correctly?",
        "a": "Use SecurityHeaders.com or Mozilla Observatory. Browser DevTools → Network tab shows response headers. For CSP, Console shows violations."
      }
    ]
  }
};
