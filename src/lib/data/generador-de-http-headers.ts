import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-http-headers', en: 'http-header-generator' },
  category: 'tech',
  emoji: '🔐',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de HTTP Headers de Seguridad | Genfy',
    metaDesc: 'Generá headers HTTP de seguridad (CSP, HSTS, X-Frame-Options, Permissions-Policy) con valores recomendados por OWASP para proteger tu app web.',
    h1: 'Generador de HTTP Headers de Seguridad',
    intro: 'Configurá CSP, HSTS, X-Frame-Options y demás headers críticos en segundos. Valores recomendados por OWASP, Mozilla y mejores prácticas modernas.',
    tag: 'Seguridad web',
    filterLabel: 'Categoría',
    countLabel: 'Cantidad',
    generateLabel: 'Generar headers',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'csp',
        label: 'Content Security Policy (CSP)',
        items: [
          'Content-Security-Policy: default-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\'',
          'Content-Security-Policy: default-src \'self\'; img-src \'self\' data: https:',
          'Content-Security-Policy: default-src \'self\'; style-src \'self\' \'unsafe-inline\'; font-src \'self\' data:',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' https://cdn.jsdelivr.net',
          'Content-Security-Policy: default-src \'none\'; script-src \'self\'; connect-src \'self\'; img-src \'self\'; style-src \'self\'; base-uri \'self\'; form-action \'self\'',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'nonce-RANDOM_VALUE\'; object-src \'none\'',
          'Content-Security-Policy: default-src \'self\'; frame-ancestors \'none\'',
          'Content-Security-Policy: default-src \'self\'; report-uri /csp-violations',
          'Content-Security-Policy: default-src \'self\'; report-to csp-endpoint',
          'Content-Security-Policy-Report-Only: default-src \'self\'; report-uri /csp-report',
          'Content-Security-Policy: default-src \'self\'; upgrade-insecure-requests',
          'Content-Security-Policy: default-src \'self\'; block-all-mixed-content',
          'Content-Security-Policy: default-src \'self\'; script-src \'strict-dynamic\' \'nonce-RANDOM\'',
          'Content-Security-Policy: default-src \'self\'; require-trusted-types-for \'script\'',
          'Content-Security-Policy: default-src \'self\'; trusted-types default policy-name',
          'Content-Security-Policy: default-src \'self\'; connect-src \'self\' https://api.example.com wss://ws.example.com',
          'Content-Security-Policy: default-src \'self\'; media-src \'self\' https://*.cloudfront.net',
          'Content-Security-Policy: default-src \'self\'; frame-src \'self\' https://www.youtube.com',
          'Content-Security-Policy: default-src \'self\'; worker-src \'self\' blob:',
          'Content-Security-Policy: default-src \'self\'; manifest-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; child-src \'self\' blob:',
          'Content-Security-Policy: default-src \'self\'; sandbox allow-scripts allow-same-origin',
          'Content-Security-Policy: default-src https:; script-src https: \'unsafe-inline\' \'unsafe-eval\'',
          'Content-Security-Policy: default-src \'self\'; navigate-to \'self\' https://trusted.com',
          'Content-Security-Policy: default-src \'self\'; prefetch-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; plugin-types application/pdf',
          'Content-Security-Policy: default-src \'self\'; require-sri-for script style',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'sha256-HASH_HERE=\'',
          'Content-Security-Policy: default-src \'self\'; img-src \'self\' data: blob: https://cdn.example.com'
        ]
      },
      {
        id: 'transport',
        label: 'HSTS y Transport Security',
        items: [
          'Strict-Transport-Security: max-age=31536000',
          'Strict-Transport-Security: max-age=31536000; includeSubDomains',
          'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          'Strict-Transport-Security: max-age=15552000; includeSubDomains',
          'Strict-Transport-Security: max-age=300 (testing inicial, 5 min)',
          'Expect-CT: max-age=86400, enforce',
          'Expect-CT: max-age=86400, enforce, report-uri="https://example.com/ct-report"',
          'Public-Key-Pins: pin-sha256="base64=="; max-age=5184000 (DEPRECATED, no usar)',
          'Upgrade-Insecure-Requests: 1',
          'Alt-Svc: h2=":443"; ma=2592000',
          'Alt-Svc: h3=":443"; ma=86400',
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload (production-ready)',
          'Strict-Transport-Security: max-age=0 (deshabilitar HSTS, para rollback)',
          'Tk: N (Do Not Track ack: not tracking)',
          'Tk: T (Do Not Track ack: tracking)',
          'Server-Timing: cache;dur=23.2',
          'Timing-Allow-Origin: https://www.example.com',
          'X-Content-Type-Options: nosniff',
          'X-Download-Options: noopen',
          'X-Permitted-Cross-Domain-Policies: none',
          'X-Permitted-Cross-Domain-Policies: master-only',
          'X-Permitted-Cross-Domain-Policies: by-content-type',
          'Cross-Origin-Opener-Policy: same-origin',
          'Cross-Origin-Opener-Policy: same-origin-allow-popups',
          'Cross-Origin-Embedder-Policy: require-corp',
          'Cross-Origin-Embedder-Policy: credentialless',
          'Cross-Origin-Resource-Policy: same-origin',
          'Cross-Origin-Resource-Policy: same-site',
          'Cross-Origin-Resource-Policy: cross-origin',
          'Origin-Agent-Cluster: ?1'
        ]
      },
      {
        id: 'frame',
        label: 'Frame, Click y XSS Protection',
        items: [
          'X-Frame-Options: DENY',
          'X-Frame-Options: SAMEORIGIN',
          'X-Frame-Options: ALLOW-FROM https://trusted.example.com (DEPRECATED, usar CSP frame-ancestors)',
          'X-XSS-Protection: 0 (recomendado, deshabilitar el filtro nativo)',
          'X-XSS-Protection: 1; mode=block (legacy)',
          'X-XSS-Protection: 1; report=https://example.com/xss-report',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: no-referrer',
          'Referrer-Policy: no-referrer-when-downgrade',
          'Referrer-Policy: same-origin',
          'Referrer-Policy: origin',
          'Referrer-Policy: strict-origin',
          'Referrer-Policy: origin-when-cross-origin',
          'Referrer-Policy: strict-origin-when-cross-origin (recomendado)',
          'Referrer-Policy: unsafe-url',
          'Permissions-Policy: geolocation=()',
          'Permissions-Policy: geolocation=(self), camera=(), microphone=()',
          'Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
          'Permissions-Policy: fullscreen=(self), payment=(self)',
          'Permissions-Policy: interest-cohort=() (deshabilitar FLoC)',
          'Permissions-Policy: clipboard-read=(self), clipboard-write=(self)',
          'Permissions-Policy: autoplay=(self)',
          'Feature-Policy: geolocation \'none\' (DEPRECATED, usar Permissions-Policy)',
          'Clear-Site-Data: "cache", "cookies", "storage"',
          'Clear-Site-Data: "*" (limpia todo en logout)',
          'Clear-Site-Data: "cookies"',
          'Sec-Fetch-Dest: document',
          'Sec-Fetch-Mode: navigate',
          'Sec-Fetch-Site: same-origin',
          'Sec-Fetch-User: ?1'
        ]
      },
      {
        id: 'cors',
        label: 'CORS, Cookies y Cache',
        items: [
          'Access-Control-Allow-Origin: *',
          'Access-Control-Allow-Origin: https://app.example.com',
          'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With',
          'Access-Control-Allow-Credentials: true',
          'Access-Control-Max-Age: 86400',
          'Access-Control-Expose-Headers: X-Total-Count, X-Page-Number',
          'Vary: Origin',
          'Vary: Accept-Encoding, Origin',
          'Set-Cookie: sessionId=abc; Secure; HttpOnly; SameSite=Strict',
          'Set-Cookie: token=xyz; Secure; HttpOnly; SameSite=Lax; Max-Age=3600',
          'Set-Cookie: userId=123; Secure; HttpOnly; SameSite=None; Path=/',
          'Set-Cookie: __Host-session=abc; Secure; HttpOnly; SameSite=Strict; Path=/',
          'Set-Cookie: __Secure-token=xyz; Secure; HttpOnly; SameSite=Lax',
          'Cache-Control: no-store, no-cache, must-revalidate',
          'Cache-Control: public, max-age=31536000, immutable',
          'Cache-Control: private, max-age=0, must-revalidate',
          'Cache-Control: no-cache',
          'Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=60',
          'Pragma: no-cache (legacy HTTP/1.0)',
          'Expires: 0',
          'ETag: "33a64df551"',
          'Last-Modified: Wed, 21 Oct 2024 07:28:00 GMT',
          'Vary: Accept-Language, Cookie',
          'Server: hidden (ocultar versión del servidor)',
          'X-Powered-By: (vacío para ocultar tecnología)',
          'X-Robots-Tag: noindex, nofollow',
          'X-Robots-Tag: max-image-preview:large',
          'NEL: {"report_to":"default","max_age":31536000,"include_subdomains":true}',
          'Report-To: {"group":"default","max_age":31536000,"endpoints":[{"url":"https://example.com/report"}]}'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué los headers de seguridad importan más de lo que parecen',
        body: '<p>Un sitio sin headers de seguridad es como una casa con buena cerradura pero ventanas abiertas. El servidor puede estar perfectamente protegido, pero si no le dice al navegador <em>cómo</em> debe comportarse al renderizar tu contenido, abrís la puerta a XSS, clickjacking, MitM y otros ataques. Los headers HTTP correctos cierran esas ventanas a nivel navegador.</p><p>El caso clásico es <strong>Strict-Transport-Security (HSTS)</strong>. Sin HSTS, un usuario que tipea "ejemplo.com" sin https:// hace primer request por HTTP. Un atacante en wifi pública puede interceptar ese primer request y servir contenido malicioso aún si tu server redirige a HTTPS. HSTS le dice al navegador "para este dominio, siempre HTTPS, nunca HTTP" desde la próxima visita. Con preload activado, ni siquiera la primera visita va por HTTP.</p><p>El otro pilar es <strong>Content Security Policy (CSP)</strong>. Aún si un atacante logra inyectar JavaScript en tu página (XSS), un CSP estricto con <code>default-src \'self\'</code> impide que ese JS cargue scripts externos, abra iframes maliciosos o exfiltre datos a dominios no autorizados. <em>Mozilla Observatory</em>, <em>SecurityHeaders.com</em> y herramientas similares evalúan tu sitio con A+ solo si tenés CSP estricto correctamente configurado.</p>'
      },
      {
        h2: 'Headers críticos: el set mínimo recomendado',
        body: '<p>Para una app web moderna, OWASP recomienda al menos estos: <strong>Strict-Transport-Security</strong> con max-age 1 año + includeSubDomains + preload, <strong>Content-Security-Policy</strong> al menos con default-src self, <strong>X-Content-Type-Options nosniff</strong> para prevenir MIME sniffing, <strong>X-Frame-Options DENY</strong> o equivalente CSP frame-ancestors none para anti-clickjacking, y <strong>Referrer-Policy strict-origin-when-cross-origin</strong> para no leakear URLs sensibles.</p><p>El header <strong>Permissions-Policy</strong> (antes Feature-Policy) controla qué APIs del navegador puede usar tu sitio: cámara, micrófono, geolocalización. Si tu app no usa cámara, declarar <code>camera=()</code> impide que un script malicioso inyectado active la cámara aunque el usuario haya dado permiso al sitio antes. Es defensa en profundidad: aún si CSP falla, Permissions-Policy bloquea el siguiente paso.</p><p>Las cookies merecen tratamiento especial. Toda cookie de sesión debería tener <strong>Secure</strong> (solo HTTPS), <strong>HttpOnly</strong> (no accesible desde JS), <strong>SameSite=Strict</strong> o Lax (anti-CSRF). El prefijo <code>__Host-</code> en el nombre fuerza Secure + Path=/ + sin Domain, dándote la cookie más segura posible. <em>Stripe</em>, <em>GitHub</em> y <em>Google</em> usan __Host- y __Secure- prefixes en producción.</p>'
      },
      {
        h2: 'Errores comunes al configurar headers de seguridad',
        body: '<p>Error #1: <strong>activar HSTS preload sin estar listo</strong>. Una vez que tu dominio entra a la HSTS preload list (mantenida por Chromium), salir lleva semanas o meses. Si rompés HTTPS por cualquier razón, el sitio queda inaccesible para usuarios con esos navegadores hasta que se quite del preload. Empezá con max-age=300 (5 min), subí a 86400 (1 día), después 31536000 (1 año), y solo ahí agregás preload.</p><p>Error #2: <strong>CSP demasiado permisivo</strong>. <code>script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *</code> es básicamente "todo permitido". Si tu CSP necesita unsafe-inline porque tu app usa estilos inline o event handlers en HTML, mejorá la app antes de relajar el CSP. <em>Google</em> recomienda usar nonces o hashes en vez de unsafe-inline. <em>SecurityHeaders.com</em> te da F si usás unsafe-inline incluso si el resto está bien.</p><p>Error #3: <strong>headers conflictivos o duplicados</strong>. Si tu app server setea X-Frame-Options DENY y tu nginx setea X-Frame-Options SAMEORIGIN, el navegador puede tomar cualquiera y romper iframes legítimos. Auditá la cadena completa: app server, reverse proxy, CDN. <em>Cloudflare</em> permite override de headers y sobrescribe los que pongas en nginx silenciosamente. Probá con <code>curl -I</code> el endpoint final público.</p>'
      },
      {
        h2: 'Testing y monitoreo de headers de seguridad',
        body: '<p>Tres herramientas para auditar headers en producción: <em>SecurityHeaders.com</em> da score A+ a F basándose en headers presentes y valores. <em>Mozilla Observatory</em> es más estricto y agrega análisis de TLS/SSH. <em>Hardenize.com</em> es el más completo, evalúa también CAA, DNSSEC y otras configuraciones de DNS. Apuntá a A+ en los tres antes de declarar el sitio "seguro".</p><p>Para CSP en particular, la estrategia es <strong>Report-Only mode primero</strong>. Empezás con <code>Content-Security-Policy-Report-Only</code> que reporta violaciones a un endpoint pero no bloquea nada. Eso te muestra qué scripts inline, recursos externos y comportamientos rompe el CSP propuesto. Después de ajustar la app o hacer allow-list correcta, cambiás a <code>Content-Security-Policy</code> normal que sí bloquea.</p><p>En CI/CD, agregá tests de headers con herramientas como <em>helmet</em> (Node), <em>django-csp</em> (Python) o <em>secure-headers-rust</em>. Esos middlewares aplican headers seguros por default y permiten configurar excepciones controladas. Más vale prevenir un mal deploy con headers laxos que descubrirlo en SecurityHeaders después de que un crawler indexó tu sitio inseguro durante 3 días. <em>Vercel</em>, <em>Netlify</em> y <em>Cloudflare Pages</em> permiten declarar headers en archivos de configuración versionados.</p>'
      }
    ],
    faq: [
      {
        q: '¿Necesito todos estos headers o solo algunos?',
        a: 'Para apps modernas, los críticos son: HSTS, CSP, X-Content-Type-Options, X-Frame-Options (o CSP frame-ancestors), Referrer-Policy y Permissions-Policy. Los demás son contextuales: CORS solo si tenés API consumida desde otro origen, Clear-Site-Data en logout, etc.'
      },
      {
        q: '¿Por qué X-XSS-Protection se recomienda en 0?',
        a: 'El filtro nativo de XSS de los navegadores tuvo bugs explotables (vulnerabilidades de cross-site leaks). Browsers modernos ignoran este header. Mejor poner <code>X-XSS-Protection: 0</code> (deshabilitado) y confiar en CSP estricto. Chrome lo deprecó completamente.'
      },
      {
        q: '¿Cómo testeo CSP sin romper mi app?',
        a: 'Usá <code>Content-Security-Policy-Report-Only</code> que reporta violaciones a un endpoint sin bloquearlas. Recolectás reportes una semana, ajustás la política para permitir lo legítimo, y recién ahí cambiás a <code>Content-Security-Policy</code> que sí bloquea.'
      },
      {
        q: '¿Estos headers afectan el SEO?',
        a: 'Indirectamente sí. Sitios sin HTTPS + HSTS son penalizados por Google. CSP demasiado restrictivo puede romper Googlebot rendering si bloquea recursos legítimos. <code>X-Robots-Tag</code> sí afecta directamente: noindex bloquea indexación. Auditá con Google Search Console después de cambios mayores.'
      }
    ]
  },
  en: {
    pageTitle: 'HTTP Security Headers Generator | Genfy',
    metaDesc: 'Generate HTTP security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy) with OWASP-recommended values to protect your web application.',
    h1: 'HTTP Security Headers Generator',
    intro: 'Configure CSP, HSTS, X-Frame-Options and other critical headers in seconds. Values recommended by OWASP, Mozilla and modern best practices.',
    tag: 'Web security',
    filterLabel: 'Category',
    countLabel: 'Amount',
    generateLabel: 'Generate headers',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'csp',
        label: 'Content Security Policy (CSP)',
        items: [
          'Content-Security-Policy: default-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\'',
          'Content-Security-Policy: default-src \'self\'; img-src \'self\' data: https:',
          'Content-Security-Policy: default-src \'self\'; style-src \'self\' \'unsafe-inline\'; font-src \'self\' data:',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' https://cdn.jsdelivr.net',
          'Content-Security-Policy: default-src \'none\'; script-src \'self\'; connect-src \'self\'; img-src \'self\'; style-src \'self\'; base-uri \'self\'; form-action \'self\'',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'nonce-RANDOM_VALUE\'; object-src \'none\'',
          'Content-Security-Policy: default-src \'self\'; frame-ancestors \'none\'',
          'Content-Security-Policy: default-src \'self\'; report-uri /csp-violations',
          'Content-Security-Policy: default-src \'self\'; report-to csp-endpoint',
          'Content-Security-Policy-Report-Only: default-src \'self\'; report-uri /csp-report',
          'Content-Security-Policy: default-src \'self\'; upgrade-insecure-requests',
          'Content-Security-Policy: default-src \'self\'; block-all-mixed-content',
          'Content-Security-Policy: default-src \'self\'; script-src \'strict-dynamic\' \'nonce-RANDOM\'',
          'Content-Security-Policy: default-src \'self\'; require-trusted-types-for \'script\'',
          'Content-Security-Policy: default-src \'self\'; trusted-types default policy-name',
          'Content-Security-Policy: default-src \'self\'; connect-src \'self\' https://api.example.com wss://ws.example.com',
          'Content-Security-Policy: default-src \'self\'; media-src \'self\' https://*.cloudfront.net',
          'Content-Security-Policy: default-src \'self\'; frame-src \'self\' https://www.youtube.com',
          'Content-Security-Policy: default-src \'self\'; worker-src \'self\' blob:',
          'Content-Security-Policy: default-src \'self\'; manifest-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; child-src \'self\' blob:',
          'Content-Security-Policy: default-src \'self\'; sandbox allow-scripts allow-same-origin',
          'Content-Security-Policy: default-src https:; script-src https: \'unsafe-inline\' \'unsafe-eval\'',
          'Content-Security-Policy: default-src \'self\'; navigate-to \'self\' https://trusted.com',
          'Content-Security-Policy: default-src \'self\'; prefetch-src \'self\'',
          'Content-Security-Policy: default-src \'self\'; plugin-types application/pdf',
          'Content-Security-Policy: default-src \'self\'; require-sri-for script style',
          'Content-Security-Policy: default-src \'self\'; script-src \'self\' \'sha256-HASH_HERE=\'',
          'Content-Security-Policy: default-src \'self\'; img-src \'self\' data: blob: https://cdn.example.com'
        ]
      },
      {
        id: 'transport',
        label: 'HSTS and Transport Security',
        items: [
          'Strict-Transport-Security: max-age=31536000',
          'Strict-Transport-Security: max-age=31536000; includeSubDomains',
          'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          'Strict-Transport-Security: max-age=15552000; includeSubDomains',
          'Strict-Transport-Security: max-age=300 (initial testing, 5 min)',
          'Expect-CT: max-age=86400, enforce',
          'Expect-CT: max-age=86400, enforce, report-uri="https://example.com/ct-report"',
          'Public-Key-Pins: pin-sha256="base64=="; max-age=5184000 (DEPRECATED, do not use)',
          'Upgrade-Insecure-Requests: 1',
          'Alt-Svc: h2=":443"; ma=2592000',
          'Alt-Svc: h3=":443"; ma=86400',
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload (production-ready)',
          'Strict-Transport-Security: max-age=0 (disable HSTS, for rollback)',
          'Tk: N (Do Not Track ack: not tracking)',
          'Tk: T (Do Not Track ack: tracking)',
          'Server-Timing: cache;dur=23.2',
          'Timing-Allow-Origin: https://www.example.com',
          'X-Content-Type-Options: nosniff',
          'X-Download-Options: noopen',
          'X-Permitted-Cross-Domain-Policies: none',
          'X-Permitted-Cross-Domain-Policies: master-only',
          'X-Permitted-Cross-Domain-Policies: by-content-type',
          'Cross-Origin-Opener-Policy: same-origin',
          'Cross-Origin-Opener-Policy: same-origin-allow-popups',
          'Cross-Origin-Embedder-Policy: require-corp',
          'Cross-Origin-Embedder-Policy: credentialless',
          'Cross-Origin-Resource-Policy: same-origin',
          'Cross-Origin-Resource-Policy: same-site',
          'Cross-Origin-Resource-Policy: cross-origin',
          'Origin-Agent-Cluster: ?1'
        ]
      },
      {
        id: 'frame',
        label: 'Frame, Click and XSS Protection',
        items: [
          'X-Frame-Options: DENY',
          'X-Frame-Options: SAMEORIGIN',
          'X-Frame-Options: ALLOW-FROM https://trusted.example.com (DEPRECATED, use CSP frame-ancestors)',
          'X-XSS-Protection: 0 (recommended, disable native filter)',
          'X-XSS-Protection: 1; mode=block (legacy)',
          'X-XSS-Protection: 1; report=https://example.com/xss-report',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: no-referrer',
          'Referrer-Policy: no-referrer-when-downgrade',
          'Referrer-Policy: same-origin',
          'Referrer-Policy: origin',
          'Referrer-Policy: strict-origin',
          'Referrer-Policy: origin-when-cross-origin',
          'Referrer-Policy: strict-origin-when-cross-origin (recommended)',
          'Referrer-Policy: unsafe-url',
          'Permissions-Policy: geolocation=()',
          'Permissions-Policy: geolocation=(self), camera=(), microphone=()',
          'Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
          'Permissions-Policy: fullscreen=(self), payment=(self)',
          'Permissions-Policy: interest-cohort=() (disable FLoC)',
          'Permissions-Policy: clipboard-read=(self), clipboard-write=(self)',
          'Permissions-Policy: autoplay=(self)',
          'Feature-Policy: geolocation \'none\' (DEPRECATED, use Permissions-Policy)',
          'Clear-Site-Data: "cache", "cookies", "storage"',
          'Clear-Site-Data: "*" (clear everything on logout)',
          'Clear-Site-Data: "cookies"',
          'Sec-Fetch-Dest: document',
          'Sec-Fetch-Mode: navigate',
          'Sec-Fetch-Site: same-origin',
          'Sec-Fetch-User: ?1'
        ]
      },
      {
        id: 'cors',
        label: 'CORS, Cookies and Cache',
        items: [
          'Access-Control-Allow-Origin: *',
          'Access-Control-Allow-Origin: https://app.example.com',
          'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With',
          'Access-Control-Allow-Credentials: true',
          'Access-Control-Max-Age: 86400',
          'Access-Control-Expose-Headers: X-Total-Count, X-Page-Number',
          'Vary: Origin',
          'Vary: Accept-Encoding, Origin',
          'Set-Cookie: sessionId=abc; Secure; HttpOnly; SameSite=Strict',
          'Set-Cookie: token=xyz; Secure; HttpOnly; SameSite=Lax; Max-Age=3600',
          'Set-Cookie: userId=123; Secure; HttpOnly; SameSite=None; Path=/',
          'Set-Cookie: __Host-session=abc; Secure; HttpOnly; SameSite=Strict; Path=/',
          'Set-Cookie: __Secure-token=xyz; Secure; HttpOnly; SameSite=Lax',
          'Cache-Control: no-store, no-cache, must-revalidate',
          'Cache-Control: public, max-age=31536000, immutable',
          'Cache-Control: private, max-age=0, must-revalidate',
          'Cache-Control: no-cache',
          'Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=60',
          'Pragma: no-cache (legacy HTTP/1.0)',
          'Expires: 0',
          'ETag: "33a64df551"',
          'Last-Modified: Wed, 21 Oct 2024 07:28:00 GMT',
          'Vary: Accept-Language, Cookie',
          'Server: hidden (hide server version)',
          'X-Powered-By: (empty to hide technology)',
          'X-Robots-Tag: noindex, nofollow',
          'X-Robots-Tag: max-image-preview:large',
          'NEL: {"report_to":"default","max_age":31536000,"include_subdomains":true}',
          'Report-To: {"group":"default","max_age":31536000,"endpoints":[{"url":"https://example.com/report"}]}'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why security headers matter more than they seem',
        body: '<p>A site without security headers is like a house with a good lock but open windows. The server can be perfectly protected, but if it doesn\'t tell the browser <em>how</em> to behave when rendering your content, you open the door to XSS, clickjacking, MitM and other attacks. Correct HTTP headers close those windows at browser level.</p><p>The classic case is <strong>Strict-Transport-Security (HSTS)</strong>. Without HSTS, a user typing "example.com" without https:// makes first request via HTTP. An attacker on public wifi can intercept that first request and serve malicious content even if your server redirects to HTTPS. HSTS tells the browser "for this domain, always HTTPS, never HTTP" from next visit. With preload activated, not even first visit goes via HTTP.</p><p>The other pillar is <strong>Content Security Policy (CSP)</strong>. Even if an attacker manages to inject JavaScript on your page (XSS), strict CSP with <code>default-src \'self\'</code> prevents that JS from loading external scripts, opening malicious iframes or exfiltrating data to unauthorized domains. <em>Mozilla Observatory</em>, <em>SecurityHeaders.com</em> and similar tools rate your site A+ only if you have strict CSP correctly configured.</p>'
      },
      {
        h2: 'Critical headers: minimum recommended set',
        body: '<p>For a modern web app, OWASP recommends at least these: <strong>Strict-Transport-Security</strong> with 1-year max-age + includeSubDomains + preload, <strong>Content-Security-Policy</strong> at least with default-src self, <strong>X-Content-Type-Options nosniff</strong> to prevent MIME sniffing, <strong>X-Frame-Options DENY</strong> or equivalent CSP frame-ancestors none for anti-clickjacking, and <strong>Referrer-Policy strict-origin-when-cross-origin</strong> to avoid leaking sensitive URLs.</p><p>The <strong>Permissions-Policy</strong> header (formerly Feature-Policy) controls which browser APIs your site can use: camera, microphone, geolocation. If your app doesn\'t use camera, declaring <code>camera=()</code> prevents an injected malicious script from activating camera even if user previously granted permission. It\'s defense in depth: even if CSP fails, Permissions-Policy blocks next step.</p><p>Cookies deserve special treatment. Every session cookie should have <strong>Secure</strong> (HTTPS only), <strong>HttpOnly</strong> (not accessible from JS), <strong>SameSite=Strict</strong> or Lax (anti-CSRF). The <code>__Host-</code> prefix in name forces Secure + Path=/ + no Domain, giving you the most secure possible cookie. <em>Stripe</em>, <em>GitHub</em> and <em>Google</em> use __Host- and __Secure- prefixes in production.</p>'
      },
      {
        h2: 'Common mistakes when configuring security headers',
        body: '<p>Mistake #1: <strong>activating HSTS preload before being ready</strong>. Once your domain enters the HSTS preload list (maintained by Chromium), exiting takes weeks or months. If you break HTTPS for any reason, the site becomes inaccessible for users with those browsers until removed from preload. Start with max-age=300 (5 min), increase to 86400 (1 day), then 31536000 (1 year), and only then add preload.</p><p>Mistake #2: <strong>too-permissive CSP</strong>. <code>script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' *</code> is basically "allow everything". If your CSP needs unsafe-inline because your app uses inline styles or HTML event handlers, improve the app before relaxing CSP. <em>Google</em> recommends using nonces or hashes instead of unsafe-inline. <em>SecurityHeaders.com</em> gives F if you use unsafe-inline even if rest is fine.</p><p>Mistake #3: <strong>conflicting or duplicate headers</strong>. If your app server sets X-Frame-Options DENY and your nginx sets X-Frame-Options SAMEORIGIN, browser may take either and break legitimate iframes. Audit the full chain: app server, reverse proxy, CDN. <em>Cloudflare</em> allows header override and silently overwrites what you set in nginx. Test with <code>curl -I</code> on final public endpoint.</p>'
      },
      {
        h2: 'Testing and monitoring security headers',
        body: '<p>Three tools to audit production headers: <em>SecurityHeaders.com</em> grades A+ to F based on present headers and values. <em>Mozilla Observatory</em> is stricter and adds TLS/SSH analysis. <em>Hardenize.com</em> is most complete, also evaluates CAA, DNSSEC and other DNS configurations. Aim for A+ on all three before declaring site "secure".</p><p>For CSP specifically, the strategy is <strong>Report-Only mode first</strong>. Start with <code>Content-Security-Policy-Report-Only</code> that reports violations to an endpoint but blocks nothing. That shows you which inline scripts, external resources and behaviors the proposed CSP breaks. After adjusting the app or making correct allow-list, switch to normal <code>Content-Security-Policy</code> which does block.</p><p>In CI/CD, add header tests with tools like <em>helmet</em> (Node), <em>django-csp</em> (Python) or <em>secure-headers-rust</em>. These middlewares apply secure defaults and allow controlled exceptions. Better prevent a bad deploy with lax headers than discover it on SecurityHeaders after a crawler indexed your insecure site for 3 days. <em>Vercel</em>, <em>Netlify</em> and <em>Cloudflare Pages</em> allow declaring headers in versioned config files.</p>'
      }
    ],
    faq: [
      {
        q: 'Do I need all these headers or just some?',
        a: 'For modern apps, critical ones are: HSTS, CSP, X-Content-Type-Options, X-Frame-Options (or CSP frame-ancestors), Referrer-Policy and Permissions-Policy. Others are contextual: CORS only if you have API consumed from another origin, Clear-Site-Data on logout, etc.'
      },
      {
        q: 'Why is X-XSS-Protection recommended at 0?',
        a: 'The native browser XSS filter had exploitable bugs (cross-site leak vulnerabilities). Modern browsers ignore this header. Better set <code>X-XSS-Protection: 0</code> (disabled) and rely on strict CSP. Chrome deprecated it completely.'
      },
      {
        q: 'How do I test CSP without breaking my app?',
        a: 'Use <code>Content-Security-Policy-Report-Only</code> which reports violations to an endpoint without blocking them. Collect reports for a week, adjust policy to allow legitimate ones, only then switch to <code>Content-Security-Policy</code> which does block.'
      },
      {
        q: 'Do these headers affect SEO?',
        a: 'Indirectly yes. Sites without HTTPS + HSTS are penalized by Google. Too-restrictive CSP can break Googlebot rendering if it blocks legitimate resources. <code>X-Robots-Tag</code> directly affects: noindex blocks indexing. Audit with Google Search Console after major changes.'
      }
    ]
  }
};
