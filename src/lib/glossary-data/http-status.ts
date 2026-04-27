import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "http-status",
    "en": "http-status-codes"
  },
  "emoji": "🚦",
  "category": "web",
  "es": {
    "pageTitle": "Códigos HTTP — Glosario | Genfy",
    "metaDesc": "Códigos de estado HTTP: guía completa de respuestas 2xx, 3xx, 4xx y 5xx. Aprende qué significa cada código y cómo manejarlos en tu aplicación web.",
    "h1": "Códigos HTTP",
    "short": "Los códigos de estado HTTP (HTTP status codes) son números de tres dígitos que el servidor envía en la respuesta a cada solicitud HTTP. Indican si la petición fue exitosa, requiere acción adicional, falló por error del cliente o por problema del servidor.",
    "body": [
      {
        "title": "¿Qué son los códigos de estado HTTP?",
        "html": "<p>Cada vez que tu navegador o app hace una solicitud HTTP (GET, POST, PUT, DELETE), el servidor responde con un código numérico de 3 dígitos. Este código comunica el resultado de la operación antes de procesar el cuerpo de la respuesta. Los códigos se agrupan en cinco clases según el primer dígito: <strong>1xx</strong> (informacional), <strong>2xx</strong> (éxito), <strong>3xx</strong> (redirección), <strong>4xx</strong> (error del cliente), <strong>5xx</strong> (error del servidor).</p><p>Ejemplo: cuando cargás una página y ves contenido, el servidor probablemente respondió <strong>200 OK</strong>. Si la URL cambió, quizás fue <strong>301 Moved Permanently</strong>. Si intentás acceder sin permiso, <strong>403 Forbidden</strong>. Si el servidor está caído, <strong>503 Service Unavailable</strong>. Estos códigos son estándar HTTP definidos en RFC 7231 y extensiones posteriores.</p><p>Los códigos HTTP son fundamentales para <strong>debugging, SEO, monitoreo y UX</strong>. Un 404 bien manejado con página custom mejora la experiencia. Un 500 sin logging dificulta encontrar bugs. Google penaliza sitios con muchos errores 5xx. APIs REST usan códigos específicos (201 Created, 204 No Content, 409 Conflict) para comunicar resultados sin ambigüedad.</p>"
      },
      {
        "title": "Códigos más comunes por categoría",
        "html": "<p><strong>2xx: Éxito</strong>. <code>200 OK</code>: solicitud exitosa, respuesta con contenido. <code>201 Created</code>: recurso creado (típico en POST). <code>204 No Content</code>: éxito pero sin cuerpo (útil en DELETE). <code>206 Partial Content</code>: respuesta parcial, usado en streaming y descargas resumibles.</p><p><strong>3xx: Redirección</strong>. <code>301 Moved Permanently</code>: URL cambió para siempre, actualizar bookmarks (importante para SEO). <code>302 Found</code>: redirección temporal, URL original sigue válida. <code>304 Not Modified</code>: recurso no cambió desde última vez, usar caché (optimización clave). <code>307 Temporary Redirect</code>: como 302 pero garantiza que el método HTTP no cambia (POST sigue siendo POST).</p><p><strong>4xx: Error del cliente</strong>. <code>400 Bad Request</code>: solicitud malformada (JSON inválido, parámetros faltantes). <code>401 Unauthorized</code>: autenticación requerida o falló. <code>403 Forbidden</code>: autenticado pero sin permisos. <code>404 Not Found</code>: recurso no existe. <code>405 Method Not Allowed</code>: GET en endpoint que solo acepta POST. <code>409 Conflict</code>: conflicto de estado (crear recurso que ya existe). <code>429 Too Many Requests</code>: rate limiting, reintentar después.</p><p><strong>5xx: Error del servidor</strong>. <code>500 Internal Server Error</code>: error genérico del servidor. <code>502 Bad Gateway</code>: servidor intermedio (proxy, load balancer) recibió respuesta inválida. <code>503 Service Unavailable</code>: servidor temporalmente sobrecargado o en mantenimiento. <code>504 Gateway Timeout</code>: servidor intermedio no recibió respuesta a tiempo.</p>"
      },
      {
        "title": "Cómo manejar códigos HTTP correctamente",
        "html": "<p>En <strong>frontend</strong>, siempre verificá el código antes de procesar la respuesta. No asumas que <code>fetch()</code> exitoso significa datos válidos: un 404 técnicamente no lanza error en fetch, necesitás <code>if (!response.ok) throw new Error()</code>. Mostrá mensajes específicos: 401 → \"Por favor iniciá sesión\", 403 → \"No tenés permisos\", 404 → \"Página no encontrada\", 500 → \"Error del servidor, intentá de nuevo\".</p><p>En <strong>backend/APIs</strong>, usá códigos semánticos. POST que crea recurso debe devolver 201 con header <code>Location</code> apuntando al nuevo recurso. DELETE exitoso puede ser 204 (sin contenido) o 200 con mensaje. Validación fallida es 400 con detalles del error, no 500. Autenticación fallida es 401, autorización fallida es 403. Para rate limiting, devolvé 429 con header <code>Retry-After</code>.</p><p>En <strong>SEO</strong>, los códigos correctos son críticos. Páginas eliminadas deben devolver 410 Gone o 404, no 200 con mensaje \"no encontrado\" (Google lo indexa como contenido real). Redirecciones permanentes (cambio de dominio, URLs deprecadas) deben ser 301 para transferir SEO juice. 302/307 solo para redirecciones realmente temporales. Errores 5xx dañan ranking si son frecuentes: monitoreá y fixeá rápido.</p>"
      },
      {
        "title": "Debugging y monitoreo con códigos HTTP",
        "html": "<p>Herramientas de <strong>developer tools</strong> en navegadores muestran todos los códigos en la pestaña Network. Filtrá por rangos: ver solo 4xx revela problemas de cliente, 5xx problemas de servidor. La columna Status te da el código, la columna Time el tiempo de respuesta. Un 200 que tarda 10 segundos es problema aunque el código sea correcto.</p><p>En <strong>producción</strong>, configurá alertas sobre tasas de errores. Si >5% de requests son 5xx, algo está roto. Si ves picos de 429, tu rate limiting está funcionando o tenés tráfico anómalo (scrapers, ataques). Herramientas como Datadog, New Relic o Sentry trackean códigos HTTP y correlacionan con performance y logs.</p><p><strong>Testing de APIs</strong>: escribí tests que validen códigos esperados. <code>POST /users</code> con datos válidos debe devolver 201, con email duplicado debe ser 409, sin auth debe ser 401. Esto evita regresiones donde cambios de código alteran contratos de la API sin darse cuenta.</p><p>Un <strong>error común</strong> es loggear solo errores 5xx. Loggeá también 4xx relevantes: muchos 404 en la misma URL sugieren links rotos, muchos 401 pueden indicar problema de integración. Analizá patrones: si 80% de 400 vienen del mismo campo de un form, la validación frontend no está funcionando.</p>"
      }
    ],
    "examples": [
      "GET /api/users/123 → 200 OK (usuario encontrado y devuelto)",
      "POST /api/users → 201 Created (usuario creado exitosamente)",
      "GET /api/users/999 → 404 Not Found (usuario no existe)",
      "DELETE /api/users/123 sin auth → 401 Unauthorized (falta token)",
      "PUT /api/users/123 con datos inválidos → 400 Bad Request",
      "GET /api/products cuando server caído → 503 Service Unavailable"
    ],
    "related": [
      "tabla-codigos-http",
      "generador-de-user-agent"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre 401 y 403?",
        "a": "401 Unauthorized significa que no estás autenticado: falta token, sesión expiró, credenciales incorrectas. El servidor no sabe quién sos. 403 Forbidden significa que estás autenticado pero no autorizado: el servidor sabe quién sos pero no tenés permisos para ese recurso. Ejemplo: usuario regular intentando acceder a panel de admin es 403, usuario sin login es 401."
      },
      {
        "q": "¿Por qué mi API devuelve 200 con error en el body en lugar de 4xx/5xx?",
        "a": "Esto es un antipatrón común llamado \"envelope response\". Algunas APIs viejas devuelven siempre 200 con <code>{\"status\":\"error\"}</code> en JSON. Esto rompe caching HTTP, complica manejo de errores en cliente y no es RESTful. El código HTTP debe reflejar el resultado: error de validación es 400, recurso no encontrado es 404, error de servidor es 500. Usá el body para detalles adicionales."
      },
      {
        "q": "¿Qué código usar cuando un recurso ya no existe y nunca volverá?",
        "a": "410 Gone es el más apropiado: indica que el recurso existió pero fue eliminado permanentemente. Esto es útil para SEO (le dice a Google que deje de indexar) y APIs (cliente puede limpiar referencias). 404 Not Found también es aceptable y más común, pero no comunica la permanencia. Para páginas eliminadas intencionalmente (productos descontinuados, posts borrados), 410 es semánticamente mejor."
      }
    ]
  },
  "en": {
    "pageTitle": "HTTP Status Codes — Glossary | Genfy",
    "metaDesc": "HTTP Status Codes: complete guide to 2xx, 3xx, 4xx, and 5xx responses. Learn what each code means and how to handle them in your web application.",
    "h1": "HTTP Status Codes",
    "short": "HTTP status codes are three-digit numbers that the server sends in the response to each HTTP request. They indicate whether the request was successful, requires additional action, failed due to client error, or encountered a server problem.",
    "body": [
      {
        "title": "What are HTTP Status Codes?",
        "html": "<p>Every time your browser or app makes an HTTP request (GET, POST, PUT, DELETE), the server responds with a 3-digit numeric code. This code communicates the operation's result before processing the response body. Codes are grouped into five classes by first digit: <strong>1xx</strong> (informational), <strong>2xx</strong> (success), <strong>3xx</strong> (redirection), <strong>4xx</strong> (client error), <strong>5xx</strong> (server error).</p><p>Example: when you load a page and see content, the server probably responded <strong>200 OK</strong>. If the URL changed, maybe it was <strong>301 Moved Permanently</strong>. If you try to access without permission, <strong>403 Forbidden</strong>. If the server is down, <strong>503 Service Unavailable</strong>. These codes are HTTP standards defined in RFC 7231 and later extensions.</p><p>HTTP codes are fundamental for <strong>debugging, SEO, monitoring, and UX</strong>. A well-handled 404 with custom page improves experience. A 500 without logging makes finding bugs difficult. Google penalizes sites with many 5xx errors. REST APIs use specific codes (201 Created, 204 No Content, 409 Conflict) to communicate results unambiguously.</p>"
      },
      {
        "title": "Most common codes by category",
        "html": "<p><strong>2xx: Success</strong>. <code>200 OK</code>: successful request, response with content. <code>201 Created</code>: resource created (typical in POST). <code>204 No Content</code>: success but no body (useful in DELETE). <code>206 Partial Content</code>: partial response, used in streaming and resumable downloads.</p><p><strong>3xx: Redirection</strong>. <code>301 Moved Permanently</code>: URL changed forever, update bookmarks (important for SEO). <code>302 Found</code>: temporary redirect, original URL still valid. <code>304 Not Modified</code>: resource unchanged since last time, use cache (key optimization). <code>307 Temporary Redirect</code>: like 302 but guarantees HTTP method doesn't change (POST stays POST).</p><p><strong>4xx: Client error</strong>. <code>400 Bad Request</code>: malformed request (invalid JSON, missing parameters). <code>401 Unauthorized</code>: authentication required or failed. <code>403 Forbidden</code>: authenticated but no permissions. <code>404 Not Found</code>: resource doesn't exist. <code>405 Method Not Allowed</code>: GET on endpoint that only accepts POST. <code>409 Conflict</code>: state conflict (create resource that already exists). <code>429 Too Many Requests</code>: rate limiting, retry later.</p><p><strong>5xx: Server error</strong>. <code>500 Internal Server Error</code>: generic server error. <code>502 Bad Gateway</code>: intermediate server (proxy, load balancer) received invalid response. <code>503 Service Unavailable</code>: server temporarily overloaded or in maintenance. <code>504 Gateway Timeout</code>: intermediate server didn't receive response in time.</p>"
      },
      {
        "title": "How to handle HTTP codes correctly",
        "html": "<p>In <strong>frontend</strong>, always check the code before processing response. Don't assume successful <code>fetch()</code> means valid data: a 404 technically doesn't throw error in fetch, you need <code>if (!response.ok) throw new Error()</code>. Show specific messages: 401 → \"Please log in\", 403 → \"You don't have permissions\", 404 → \"Page not found\", 500 → \"Server error, try again\".</p><p>In <strong>backend/APIs</strong>, use semantic codes. POST creating resource should return 201 with <code>Location</code> header pointing to new resource. Successful DELETE can be 204 (no content) or 200 with message. Failed validation is 400 with error details, not 500. Failed authentication is 401, failed authorization is 403. For rate limiting, return 429 with <code>Retry-After</code> header.</p><p>In <strong>SEO</strong>, correct codes are critical. Deleted pages should return 410 Gone or 404, not 200 with \"not found\" message (Google indexes it as real content). Permanent redirects (domain change, deprecated URLs) should be 301 to transfer SEO juice. 302/307 only for truly temporary redirects. Frequent 5xx errors damage ranking: monitor and fix quickly.</p>"
      },
      {
        "title": "Debugging and monitoring with HTTP codes",
        "html": "<p><strong>Developer tools</strong> in browsers show all codes in Network tab. Filter by ranges: viewing only 4xx reveals client problems, 5xx server problems. Status column gives you the code, Time column response time. A 200 taking 10 seconds is a problem even though code is correct.</p><p>In <strong>production</strong>, configure alerts on error rates. If >5% of requests are 5xx, something's broken. If you see 429 spikes, your rate limiting is working or you have anomalous traffic (scrapers, attacks). Tools like Datadog, New Relic or Sentry track HTTP codes and correlate with performance and logs.</p><p><strong>API testing</strong>: write tests validating expected codes. <code>POST /users</code> with valid data should return 201, with duplicate email should be 409, without auth should be 401. This prevents regressions where code changes alter API contracts unknowingly.</p><p>A <strong>common mistake</strong> is only logging 5xx errors. Also log relevant 4xx: many 404s on same URL suggest broken links, many 401s may indicate integration problem. Analyze patterns: if 80% of 400s come from same form field, frontend validation isn't working.</p>"
      }
    ],
    "examples": [
      "GET /api/users/123 → 200 OK (user found and returned)",
      "POST /api/users → 201 Created (user created successfully)",
      "GET /api/users/999 → 404 Not Found (user doesn't exist)",
      "DELETE /api/users/123 without auth → 401 Unauthorized (missing token)",
      "PUT /api/users/123 with invalid data → 400 Bad Request",
      "GET /api/products when server down → 503 Service Unavailable"
    ],
    "related": [
      "http-status-code-reference",
      "random-user-agent-generator"
    ],
    "faq": [
      {
        "q": "What's the difference between 401 and 403?",
        "a": "401 Unauthorized means you're not authenticated: missing token, expired session, incorrect credentials. The server doesn't know who you are. 403 Forbidden means you're authenticated but not authorized: the server knows who you are but you don't have permissions for that resource. Example: regular user trying to access admin panel is 403, user without login is 401."
      },
      {
        "q": "Why does my API return 200 with error in body instead of 4xx/5xx?",
        "a": "This is a common anti-pattern called \"envelope response\". Some old APIs always return 200 with <code>{\"status\":\"error\"}</code> in JSON. This breaks HTTP caching, complicates error handling in client, and isn't RESTful. HTTP code should reflect the result: validation error is 400, resource not found is 404, server error is 500. Use body for additional details."
      },
      {
        "q": "What code to use when a resource no longer exists and never will?",
        "a": "410 Gone is most appropriate: indicates resource existed but was permanently deleted. This is useful for SEO (tells Google to stop indexing) and APIs (client can clean references). 404 Not Found is also acceptable and more common, but doesn't communicate permanence. For intentionally deleted pages (discontinued products, deleted posts), 410 is semantically better."
      }
    ]
  }
};
