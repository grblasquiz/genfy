import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-headers-csp",
    "en": "csp-header-generator"
  },
  "category": "security",
  "emoji": "🛡️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Content Security Policy Headers | Genfy",
    "metaDesc": "Genera headers CSP configurables para proteger tu app de XSS e inyección de código. Ejemplos listos con script-src, style-src, frame-ancestors y más.",
    "h1": "Generador de Headers CSP",
    "intro": "Configurá Content Security Policy sin dolor. Headers predefinidos para bloquear XSS, inline scripts maliciosos y clickjacking. Copiá, ajustá y desplegá.",
    "tag": "Seguridad",
    "filterLabel": "Nivel de restricción",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "policy",
        "label": "Política CSP",
        "items": [
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https:; font-src 'self'; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{RANDOM}'; style-src 'self' 'nonce-{RANDOM}'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-{HASH}'; style-src 'self' 'sha256-{HASH}'; img-src 'self' blob: data:; media-src 'self'; connect-src 'self'; frame-ancestors 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; frame-src https://www.google.com",
          "Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self'; report-uri /csp-violation-report",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://cdn.example.com; img-src 'self' https://cdn.example.com; font-src 'self' https://cdn.example.com; connect-src 'self' wss://example.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic' 'nonce-{RANDOM}'; object-src 'none'; base-uri 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; manifest-src 'self'; worker-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://platform.twitter.com; style-src 'self' https://platform.twitter.com; frame-src https://platform.twitter.com; img-src 'self' https://pbs.twimg.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.stripe.com; style-src 'self' https://cdn.stripe.com; frame-src https://js.stripe.com; connect-src 'self' https://api.stripe.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.youtube.com; frame-src https://www.youtube.com; img-src 'self' https://i.ytimg.com",
          "Content-Security-Policy: upgrade-insecure-requests; default-src https: 'unsafe-inline'; script-src https: 'unsafe-inline'; style-src https: 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://maps.googleapis.com; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://maps.gstatic.com data:; connect-src https://maps.googleapis.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' blob:; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-hashes' 'sha256-{EVENT_HASH}'; style-src 'self'; object-src 'none'; base-uri 'none'; form-action 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://analytics.example.com; img-src 'self' https://analytics.example.com; connect-src 'self' https://analytics.example.com; report-uri /csp-report",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://stackpath.bootstrapcdn.com; font-src 'self' https://stackpath.bootstrapcdn.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.braintreegateway.com; frame-src https://assets.braintreegateway.com; connect-src 'self' https://api.braintreegateway.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.ampproject.org; style-src 'self' https://cdn.ampproject.org 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https://cdn.ampproject.org",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.recaptcha.net https://www.gstatic.com; frame-src https://www.recaptcha.net https://www.google.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self' https:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline'; img-src 'self' https: data: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:; frame-src 'self' https:; media-src 'self' https:; object-src 'none'; worker-src 'self' blob:; form-action 'self'; frame-ancestors 'self'; base-uri 'self'; upgrade-insecure-requests",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.onesignal.com; worker-src 'self' https://cdn.onesignal.com; connect-src 'self' https://onesignal.com wss://onesignal.com; img-src 'self' https://img.onesignal.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://widget.intercom.io https://js.intercomcdn.com; style-src 'self' https://widget.intercom.io 'unsafe-inline'; img-src 'self' https://static.intercomassets.com https://js.intercomcdn.com data:; font-src 'self' https://js.intercomcdn.com; connect-src 'self' https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io; frame-src https://intercom-sheets.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.segment.com https://cdn.segment.io; connect-src 'self' https://api.segment.io; img-src 'self' https://cdn.segment.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://browser.sentry-cdn.com; connect-src 'self' https://sentry.io; report-uri https://sentry.io/api/PROJECT_ID/security/?sentry_key=PUBLIC_KEY",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.amplitude.com; connect-src 'self' https://api.amplitude.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.mxpnl.com; img-src 'self' https://cdn.mxpnl.com; connect-src 'self' https://api.mixpanel.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://static.hotjar.com https://script.hotjar.com; img-src 'self' https://static.hotjar.com data:; connect-src 'self' https://in.hotjar.com wss://ws.hotjar.com; font-src 'self' https://script.hotjar.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.hcaptcha.com https://hcaptcha.com; frame-src https://hcaptcha.com https://newassets.hcaptcha.com; style-src 'self' https://hcaptcha.com 'unsafe-inline'; connect-src 'self' https://hcaptcha.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.auth0.com; style-src 'self' 'unsafe-inline'; frame-src https://*.auth0.com; connect-src 'self' https://*.auth0.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://accounts.google.com https://apis.google.com; frame-src https://accounts.google.com; connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://connect.facebook.net; img-src 'self' https://www.facebook.com data:; connect-src 'self' https://graph.facebook.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://appleid.cdn-apple.com; frame-src https://appleid.apple.com; connect-src 'self' https://appleid.apple.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://sdk.amazonaws.com; connect-src 'self' https://*.amazonaws.com; img-src 'self' https://s3.amazonaws.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.firebase.com https://www.gstatic.com; connect-src 'self' https://*.firebaseio.com https://*.googleapis.com wss://*.firebaseio.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.pusher.com; connect-src 'self' wss://ws.pusher.com https://sockjs.pusher.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.socket.io; connect-src 'self' wss://your-server.com https://your-server.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; worker-src 'self'; manifest-src 'self'; prefetch-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests; require-trusted-types-for 'script'"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué Content Security Policy es tu primera línea de defensa",
        "body": "<p>CSP no es un firewall, es una whitelist de qué recursos puede cargar tu app. Sin CSP, cualquier script inyectado (XSS) se ejecuta con los permisos de tu dominio: acceso a cookies, localStorage, puede hacer requests a tu API. Con CSP, aunque un atacante inyecte <code>&lt;script&gt;alert('hack')&lt;/script&gt;</code>, el navegador lo bloquea si no cumple la política. Es defensa en profundidad: asumís que tu código tiene bugs, pero limitás el daño. CSP también previene clickjacking con <code>frame-ancestors</code>, fuerza HTTPS con <code>upgrade-insecure-requests</code>, y bloquea plugins obsoletos con <code>object-src 'none'</code>. Una policy bien configurada reduce el riesgo de XSS en 90%.</p>"
      },
      {
        "h2": "Directivas CSP esenciales y qué controlan",
        "body": "<p><code>default-src</code>: Fallback para todo lo que no especifiques; empezá con <code>'self'</code>. <code>script-src</code>: De dónde pueden venir scripts; evitá <code>'unsafe-inline'</code> (permite XSS), usá nonces o hashes. <code>style-src</code>: Idem para CSS; librerías third-party suelen necesitar <code>'unsafe-inline'</code>. <code>img-src</code>: Fuentes de imágenes; <code>data:</code> permite base64, <code>https:</code> permite cualquier HTTPS. <code>connect-src</code>: APIs y WebSockets permitidos; limitá a tus dominios. <code>frame-ancestors</code>: Quién puede embeber tu página; <code>'none'</code> previene clickjacking. <code>base-uri</code>: Limita <code>&lt;base&gt;</code> tag (vector de ataque raro pero real). <code>form-action</code>: A dónde pueden submitear forms.</p>"
      },
      {
        "h2": "Migrar a CSP sin romper tu app en producción",
        "body": "<p>Empezá con <code>Content-Security-Policy-Report-Only</code>: loggea violaciones sin bloquear nada. Configurá <code>report-uri /csp-violations</code> y analizá qué recursos se cargan (Google Fonts, CDNs, analytics). Agregá dominios a la whitelist gradualmente. Común encontrar: inline styles en componentes React, event handlers inline (<code>onclick='...'</code>), <code>eval()</code> en librerías viejas. Soluciones: extraer inline styles a archivos, usar event listeners programáticos, reemplazar librerías que usan <code>eval</code>. Una vez que <code>Report-Only</code> no muestra violaciones por 1 semana, activá el header real. Usá nonces dinámicos (genera un random por request) para scripts críticos que deben ser inline.</p>"
      },
      {
        "h2": "Errores comunes al configurar CSP",
        "body": "<p><strong>Usar 'unsafe-inline' y 'unsafe-eval' por default:</strong> Anula 80% de la protección CSP; solo usá si no hay alternativa y entendés el riesgo. <strong>Olvidar 'self' en default-src:</strong> Si ponés <code>default-src https:</code>, tus propios scripts fallan; siempre incluí <code>'self'</code>. <strong>No especificar protocol en dominios:</strong> <code>cdn.example.com</code> permite HTTP y HTTPS; mejor <code>https://cdn.example.com</code>. <strong>Whitelist demasiado amplia:</strong> <code>script-src https:</code> permite cualquier HTTPS, incluyendo CDNs comprometidos; sé específico. <strong>No testear en todos los navegadores:</strong> Safari tiene quirks con CSP; probá antes de producción. <strong>No versionar policies:</strong> Guardá tu CSP en git; sabés qué cambió si algo rompe.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿CSP afecta el SEO o la velocidad del sitio?",
        "a": "No. CSP es un header HTTP que el navegador procesa; no agrega requests ni bloquea crawlers. Solo afecta qué recursos carga el navegador."
      },
      {
        "q": "¿Puedo usar CSP con Google Analytics o Facebook Pixel?",
        "a": "Sí, agregá sus dominios a script-src y connect-src. Ej: <code>script-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com</code>."
      },
      {
        "q": "¿Qué diferencia hay entre nonce y hash en script-src?",
        "a": "Nonce es un token random que generás por request y agregás al script tag (<code>&lt;script nonce='XYZ'&gt;</code>). Hash es el sha256 del contenido del script. Nonce es más flexible."
      },
      {
        "q": "¿CSP reemplaza sanitización de inputs?",
        "a": "No. CSP es defensa en profundidad, no reemplazo. Siempre validá y escapá inputs. CSP reduce daño si fallás en sanitizar, pero no es excusa para no hacerlo."
      }
    ]
  },
  "en": {
    "pageTitle": "CSP Header Generator | Genfy",
    "metaDesc": "Generate configurable CSP headers to protect your app from XSS and code injection. Ready examples with script-src, style-src, frame-ancestors and more.",
    "h1": "CSP Header Generator",
    "intro": "Configure Content Security Policy painlessly. Predefined headers to block XSS, malicious inline scripts, and clickjacking. Copy, adjust, and deploy.",
    "tag": "Security",
    "filterLabel": "Restriction level",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "policy",
        "label": "CSP Policy",
        "items": [
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https:; font-src 'self'; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{RANDOM}'; style-src 'self' 'nonce-{RANDOM}'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-{HASH}'; style-src 'self' 'sha256-{HASH}'; img-src 'self' blob: data:; media-src 'self'; connect-src 'self'; frame-ancestors 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; frame-src https://www.google.com",
          "Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self'; report-uri /csp-violation-report",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://cdn.example.com; img-src 'self' https://cdn.example.com; font-src 'self' https://cdn.example.com; connect-src 'self' wss://example.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic' 'nonce-{RANDOM}'; object-src 'none'; base-uri 'self'",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; manifest-src 'self'; worker-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://platform.twitter.com; style-src 'self' https://platform.twitter.com; frame-src https://platform.twitter.com; img-src 'self' https://pbs.twimg.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.stripe.com; style-src 'self' https://cdn.stripe.com; frame-src https://js.stripe.com; connect-src 'self' https://api.stripe.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.youtube.com; frame-src https://www.youtube.com; img-src 'self' https://i.ytimg.com",
          "Content-Security-Policy: upgrade-insecure-requests; default-src https: 'unsafe-inline'; script-src https: 'unsafe-inline'; style-src https: 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://maps.googleapis.com; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://maps.gstatic.com data:; connect-src https://maps.googleapis.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' blob:; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-hashes' 'sha256-{EVENT_HASH}'; style-src 'self'; object-src 'none'; base-uri 'none'; form-action 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://analytics.example.com; img-src 'self' https://analytics.example.com; connect-src 'self' https://analytics.example.com; report-uri /csp-report",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'",
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://stackpath.bootstrapcdn.com; font-src 'self' https://stackpath.bootstrapcdn.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.braintreegateway.com; frame-src https://assets.braintreegateway.com; connect-src 'self' https://api.braintreegateway.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.ampproject.org; style-src 'self' https://cdn.ampproject.org 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https://cdn.ampproject.org",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://www.recaptcha.net https://www.gstatic.com; frame-src https://www.recaptcha.net https://www.google.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self' https:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline'; img-src 'self' https: data: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:; frame-src 'self' https:; media-src 'self' https:; object-src 'none'; worker-src 'self' blob:; form-action 'self'; frame-ancestors 'self'; base-uri 'self'; upgrade-insecure-requests",
          "Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.onesignal.com; worker-src 'self' https://cdn.onesignal.com; connect-src 'self' https://onesignal.com wss://onesignal.com; img-src 'self' https://img.onesignal.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://widget.intercom.io https://js.intercomcdn.com; style-src 'self' https://widget.intercom.io 'unsafe-inline'; img-src 'self' https://static.intercomassets.com https://js.intercomcdn.com data:; font-src 'self' https://js.intercomcdn.com; connect-src 'self' https://api-iam.intercom.io wss://nexus-websocket-a.intercom.io; frame-src https://intercom-sheets.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.segment.com https://cdn.segment.io; connect-src 'self' https://api.segment.io; img-src 'self' https://cdn.segment.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://browser.sentry-cdn.com; connect-src 'self' https://sentry.io; report-uri https://sentry.io/api/PROJECT_ID/security/?sentry_key=PUBLIC_KEY",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.amplitude.com; connect-src 'self' https://api.amplitude.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.mxpnl.com; img-src 'self' https://cdn.mxpnl.com; connect-src 'self' https://api.mixpanel.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://static.hotjar.com https://script.hotjar.com; img-src 'self' https://static.hotjar.com data:; connect-src 'self' https://in.hotjar.com wss://ws.hotjar.com; font-src 'self' https://script.hotjar.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.hcaptcha.com https://hcaptcha.com; frame-src https://hcaptcha.com https://newassets.hcaptcha.com; style-src 'self' https://hcaptcha.com 'unsafe-inline'; connect-src 'self' https://hcaptcha.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.auth0.com; style-src 'self' 'unsafe-inline'; frame-src https://*.auth0.com; connect-src 'self' https://*.auth0.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://accounts.google.com https://apis.google.com; frame-src https://accounts.google.com; connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com; style-src 'self' 'unsafe-inline'",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://connect.facebook.net; img-src 'self' https://www.facebook.com data:; connect-src 'self' https://graph.facebook.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://appleid.cdn-apple.com; frame-src https://appleid.apple.com; connect-src 'self' https://appleid.apple.com",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://sdk.amazonaws.com; connect-src 'self' https://*.amazonaws.com; img-src 'self' https://s3.amazonaws.com data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.firebase.com https://www.gstatic.com; connect-src 'self' https://*.firebaseio.com https://*.googleapis.com wss://*.firebaseio.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://js.pusher.com; connect-src 'self' wss://ws.pusher.com https://sockjs.pusher.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.socket.io; connect-src 'self' wss://your-server.com https://your-server.com; img-src 'self' data:",
          "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'none'; worker-src 'self'; manifest-src 'self'; prefetch-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests; require-trusted-types-for 'script'"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why Content Security Policy is your first line of defense",
        "body": "<p>CSP is not a firewall, it's a whitelist of what resources your app can load. Without CSP, any injected script (XSS) executes with your domain's permissions: access to cookies, localStorage, can make requests to your API. With CSP, even if an attacker injects <code>&lt;script&gt;alert('hack')&lt;/script&gt;</code>, the browser blocks it if it doesn't meet the policy. It's defense in depth: you assume your code has bugs, but you limit the damage. CSP also prevents clickjacking with <code>frame-ancestors</code>, forces HTTPS with <code>upgrade-insecure-requests</code>, and blocks obsolete plugins with <code>object-src 'none'</code>. A well-configured policy reduces XSS risk by 90%.</p>"
      },
      {
        "h2": "Essential CSP directives and what they control",
        "body": "<p><code>default-src</code>: Fallback for everything you don't specify; start with <code>'self'</code>. <code>script-src</code>: Where scripts can come from; avoid <code>'unsafe-inline'</code> (allows XSS), use nonces or hashes. <code>style-src</code>: Same for CSS; third-party libraries often need <code>'unsafe-inline'</code>. <code>img-src</code>: Image sources; <code>data:</code> allows base64, <code>https:</code> allows any HTTPS. <code>connect-src</code>: Allowed APIs and WebSockets; limit to your domains. <code>frame-ancestors</code>: Who can embed your page; <code>'none'</code> prevents clickjacking. <code>base-uri</code>: Limits <code>&lt;base&gt;</code> tag (rare but real attack vector). <code>form-action</code>: Where forms can submit.</p>"
      },
      {
        "h2": "Migrating to CSP without breaking production",
        "body": "<p>Start with <code>Content-Security-Policy-Report-Only</code>: logs violations without blocking anything. Configure <code>report-uri /csp-violations</code> and analyze what resources load (Google Fonts, CDNs, analytics). Add domains to whitelist gradually. Common findings: inline styles in React components, inline event handlers (<code>onclick='...'</code>), <code>eval()</code> in old libraries. Solutions: extract inline styles to files, use programmatic event listeners, replace libraries using <code>eval</code>. Once <code>Report-Only</code> shows no violations for 1 week, activate the real header. Use dynamic nonces (generate random per request) for critical inline scripts.</p>"
      },
      {
        "h2": "Common mistakes when configuring CSP",
        "body": "<p><strong>Using 'unsafe-inline' and 'unsafe-eval' by default:</strong> Negates 80% of CSP protection; only use if no alternative and you understand the risk. <strong>Forgetting 'self' in default-src:</strong> If you set <code>default-src https:</code>, your own scripts fail; always include <code>'self'</code>. <strong>Not specifying protocol in domains:</strong> <code>cdn.example.com</code> allows HTTP and HTTPS; better <code>https://cdn.example.com</code>. <strong>Whitelist too broad:</strong> <code>script-src https:</code> allows any HTTPS, including compromised CDNs; be specific. <strong>Not testing in all browsers:</strong> Safari has CSP quirks; test before production. <strong>Not versioning policies:</strong> Keep your CSP in git; you know what changed if something breaks.</p>"
      }
    ],
    "faq": [
      {
        "q": "Does CSP affect SEO or site speed?",
        "a": "No. CSP is an HTTP header the browser processes; it doesn't add requests or block crawlers. It only affects what resources the browser loads."
      },
      {
        "q": "Can I use CSP with Google Analytics or Facebook Pixel?",
        "a": "Yes, add their domains to script-src and connect-src. Ex: <code>script-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com</code>."
      },
      {
        "q": "What's the difference between nonce and hash in script-src?",
        "a": "Nonce is a random token you generate per request and add to the script tag (<code>&lt;script nonce='XYZ'&gt;</code>). Hash is the sha256 of the script content. Nonce is more flexible."
      },
      {
        "q": "Does CSP replace input sanitization?",
        "a": "No. CSP is defense in depth, not a replacement. Always validate and escape inputs. CSP reduces damage if you fail to sanitize, but it's not an excuse not to do it."
      }
    ]
  }
};
