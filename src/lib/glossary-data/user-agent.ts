import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "user-agent",
    "en": "user-agent"
  },
  "emoji": "🕵️",
  "category": "web",
  "es": {
    "pageTitle": "User-Agent — Glosario | Genfy",
    "metaDesc": "User-Agent es el header HTTP que identifica navegador, sistema operativo y versión del cliente. Aprende cómo funciona, cuándo usarlo y sus implicancias de privacidad.",
    "h1": "User-Agent",
    "short": "El User-Agent es un header HTTP que envía cada cliente (navegador, app móvil, bot) al servidor para identificarse. Contiene información sobre el software, versión, motor de renderizado y sistema operativo.",
    "body": [
      {
        "title": "¿Qué es el User-Agent?",
        "html": "<p>El <strong>User-Agent</strong> es un campo del header HTTP que acompaña cada request al servidor. Su función original: permitir que el servidor adapte la respuesta según las capacidades del cliente. Por ejemplo, enviar HTML5 a Chrome moderno pero una versión simplificada a Internet Explorer 6.</p><p>Un User-Agent típico luce así: <code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</code>. Ese string codifica el sistema operativo (Windows 10 64-bit), el motor de renderizado (AppleWebKit) y el navegador (Chrome 120).</p><p>El problema: ese mismo header se convirtió en herramienta de <strong>fingerprinting</strong>, permitiendo rastrear usuarios sin cookies. Sitios analíticos y plataformas publicitarias lo combinan con otros datos (resolución de pantalla, zona horaria, plugins instalados) para crear un perfil único.</p>"
      },
      {
        "title": "Cómo funciona el User-Agent",
        "html": "<p>Cuando tu navegador hace un request HTTP, incluye automáticamente el header <code>User-Agent</code>. El servidor lo lee y puede:</p><ul><li><strong>Servir contenido optimizado:</strong> responsive design del lado del servidor, polyfills solo para navegadores viejos.</li><li><strong>Bloquear bots:</strong> rechazar requests con User-Agents de scrapers conocidos (aunque los bots sofisticados los falsifican).</li><li><strong>Recopilar estadísticas:</strong> Google Analytics usa el User-Agent para reportar qué navegadores visitan tu sitio.</li><li><strong>Aplicar reglas de negocio:</strong> bancos y fintechs bloquean navegadores desactualizados por seguridad.</li></ul><p>El formato no está estandarizado estrictamente. Por razones históricas (la \"guerra de los navegadores\"), todos mienten un poco: Chrome dice ser Safari, Safari dice ser Mozilla, Edge dice ser Chrome. Esto ocurrió porque sitios bloqueaban navegadores que no reconocían, forzando a los nuevos a mentir para ser compatibles.</p><p>Hoy existen bibliotecas como <code>ua-parser-js</code> (JavaScript) o <code>user_agents</code> (Python) que parsean estos strings y extraen datos estructurados: familia de navegador, versión, OS, si es móvil o desktop.</p>"
      },
      {
        "title": "Cuándo usar (y no usar) el User-Agent",
        "html": "<p><strong>Usar para:</strong></p><ul><li><strong>Feature detection suplementaria:</strong> si ya hiciste detección del lado del cliente y necesitás confirmar en el servidor.</li><li><strong>Logs y analytics:</strong> entender qué navegadores usan tus usuarios ayuda a priorizar testing.</li><li><strong>Rate limiting inteligente:</strong> aplicar límites más estrictos a bots identificados.</li></ul><p><strong>No usar para:</strong></p><ul><li><strong>Decisiones críticas de renderizado:</strong> preferí <em>feature detection</em> con JavaScript (<code>'fetch' in window</code>) en lugar de inferir capacidades por User-Agent.</li><li><strong>Seguridad:</strong> nunca confíes en el User-Agent para autenticación o autorización. Es trivial falsificarlo.</li><li><strong>Bloquear usuarios legítimos:</strong> muchos usuarios de privacidad usan extensiones que aleatorizan o modifican el User-Agent.</li></ul><p>La tendencia moderna (User-Agent Client Hints, parte del estándar HTTP/2) busca reemplazar el User-Agent monolítico por headers granulares que el servidor solicita explícitamente, mejorando privacidad.</p>"
      },
      {
        "title": "Privacidad y User-Agent freezing",
        "html": "<p>Desde 2021, Chrome, Edge y otros navegadores Chromium congelaron progresivamente el User-Agent para reducir fingerprinting. Ahora todos reportan versiones genéricas: <code>Chrome/110.0.0.0</code> en lugar de la versión exacta.</p><p>Safari fue más lejos: desde iOS 13, todos los iPhones reportan el mismo User-Agent sin importar el modelo. Firefox está evaluando medidas similares.</p><p>Si tu app necesita información detallada del cliente, la recomendación es migrar a <strong>User-Agent Client Hints</strong>: headers como <code>Sec-CH-UA-Platform</code>, <code>Sec-CH-UA-Mobile</code> que el servidor solicita explícitamente mediante el header <code>Accept-CH</code>. Esto da control al usuario: los navegadores pueden negar esos hints en modo incógnito o con configuraciones de privacidad estrictas.</p>"
      }
    ],
    "examples": [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "curl/7.68.0",
      "Googlebot/2.1 (+http://www.google.com/bot.html)",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0"
    ],
    "related": [
      "generador-de-user-agent",
      "tabla-codigos-http"
    ],
    "faq": [
      {
        "q": "¿Puedo falsificar mi User-Agent?",
        "a": "Sí. Extensiones como User-Agent Switcher o herramientas como curl permiten enviar cualquier User-Agent. Los servidores no pueden verificar su autenticidad, por eso nunca debe usarse para seguridad."
      },
      {
        "q": "¿Por qué todos los User-Agents dicen Mozilla?",
        "a": "Por compatibilidad histórica. En los 90, sitios rechazaban navegadores que no fueran Netscape (Mozilla). Cuando aparecieron IE, Opera y Chrome, todos mintieron diciendo ser Mozilla para evitar bloqueos. La práctica persiste por legacy."
      },
      {
        "q": "¿Qué son los User-Agent Client Hints?",
        "a": "Un estándar moderno que reemplaza el User-Agent monolítico por headers granulares que el servidor solicita explícitamente. Mejora privacidad al dar control al usuario sobre qué información comparte y reduce la superficie de fingerprinting."
      }
    ]
  },
  "en": {
    "pageTitle": "User-Agent — Glossary | Genfy",
    "metaDesc": "User-Agent is the HTTP header identifying browser, OS and version of the client. Learn how it works, when to use it and its privacy implications.",
    "h1": "User-Agent",
    "short": "The User-Agent is an HTTP header sent by every client (browser, mobile app, bot) to identify itself to the server. It contains information about the software, version, rendering engine and operating system.",
    "body": [
      {
        "title": "What is User-Agent?",
        "html": "<p>The <strong>User-Agent</strong> is an HTTP header field that accompanies every request to the server. Its original purpose: allow servers to adapt responses based on client capabilities. For example, send HTML5 to modern Chrome but a simplified version to Internet Explorer 6.</p><p>A typical User-Agent looks like: <code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</code>. That string encodes the OS (Windows 10 64-bit), rendering engine (AppleWebKit) and browser (Chrome 120).</p><p>The problem: that same header became a <strong>fingerprinting</strong> tool, enabling user tracking without cookies. Analytics sites and ad platforms combine it with other data (screen resolution, timezone, installed plugins) to create a unique profile.</p>"
      },
      {
        "title": "How User-Agent works",
        "html": "<p>When your browser makes an HTTP request, it automatically includes the <code>User-Agent</code> header. The server reads it and can:</p><ul><li><strong>Serve optimized content:</strong> server-side responsive design, polyfills only for old browsers.</li><li><strong>Block bots:</strong> reject requests with known scraper User-Agents (though sophisticated bots spoof them).</li><li><strong>Collect statistics:</strong> Google Analytics uses User-Agent to report which browsers visit your site.</li><li><strong>Apply business rules:</strong> banks and fintechs block outdated browsers for security.</li></ul><p>The format isn't strictly standardized. For historical reasons (the \"browser wars\"), everyone lies a bit: Chrome claims to be Safari, Safari claims to be Mozilla, Edge claims to be Chrome. This happened because sites blocked unrecognized browsers, forcing new ones to lie for compatibility.</p><p>Today libraries like <code>ua-parser-js</code> (JavaScript) or <code>user_agents</code> (Python) parse these strings and extract structured data: browser family, version, OS, whether mobile or desktop.</p>"
      },
      {
        "title": "When to use (and not use) User-Agent",
        "html": "<p><strong>Use for:</strong></p><ul><li><strong>Supplementary feature detection:</strong> if you've already done client-side detection and need server confirmation.</li><li><strong>Logs and analytics:</strong> understanding which browsers your users run helps prioritize testing.</li><li><strong>Intelligent rate limiting:</strong> apply stricter limits to identified bots.</li></ul><p><strong>Don't use for:</strong></p><ul><li><strong>Critical rendering decisions:</strong> prefer <em>feature detection</em> with JavaScript (<code>'fetch' in window</code>) instead of inferring capabilities from User-Agent.</li><li><strong>Security:</strong> never trust User-Agent for authentication or authorization. It's trivial to spoof.</li><li><strong>Blocking legitimate users:</strong> many privacy-conscious users run extensions that randomize or modify User-Agent.</li></ul><p>The modern trend (User-Agent Client Hints, part of HTTP/2 standard) seeks to replace the monolithic User-Agent with granular headers the server explicitly requests, improving privacy.</p>"
      },
      {
        "title": "Privacy and User-Agent freezing",
        "html": "<p>Since 2021, Chrome, Edge and other Chromium browsers progressively froze User-Agent to reduce fingerprinting. Now they all report generic versions: <code>Chrome/110.0.0.0</code> instead of the exact build.</p><p>Safari went further: since iOS 13, all iPhones report the same User-Agent regardless of model. Firefox is evaluating similar measures.</p><p>If your app needs detailed client information, the recommendation is migrating to <strong>User-Agent Client Hints</strong>: headers like <code>Sec-CH-UA-Platform</code>, <code>Sec-CH-UA-Mobile</code> that the server explicitly requests via the <code>Accept-CH</code> header. This gives control to users: browsers can deny those hints in incognito mode or with strict privacy settings.</p>"
      }
    ],
    "examples": [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "curl/7.68.0",
      "Googlebot/2.1 (+http://www.google.com/bot.html)",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0"
    ],
    "related": [
      "random-user-agent-generator",
      "http-status-code-reference"
    ],
    "faq": [
      {
        "q": "Can I spoof my User-Agent?",
        "a": "Yes. Extensions like User-Agent Switcher or tools like curl let you send any User-Agent. Servers can't verify authenticity, which is why it should never be used for security."
      },
      {
        "q": "Why do all User-Agents say Mozilla?",
        "a": "Historical compatibility. In the 90s, sites rejected browsers that weren't Netscape (Mozilla). When IE, Opera and Chrome appeared, they all lied claiming to be Mozilla to avoid blocks. The practice persists for legacy reasons."
      },
      {
        "q": "What are User-Agent Client Hints?",
        "a": "A modern standard replacing the monolithic User-Agent with granular headers the server explicitly requests. It improves privacy by giving users control over what information to share and reduces fingerprinting surface."
      }
    ]
  }
};
