import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-tokens-csrf",
    "en": "csrf-token-generator"
  },
  "category": "security",
  "emoji": "🎭",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Tokens CSRF | Genfy",
    "metaDesc": "Genera tokens CSRF seguros para proteger tus formularios. Implementá protección contra ataques Cross-Site Request Forgery con tokens únicos y robustos.",
    "h1": "Generador de Tokens CSRF",
    "intro": "Protegé tus formularios con tokens CSRF criptográficamente seguros. Cada token es único, impredecible y válido solo para una sesión específica, bloqueando ataques de falsificación de peticiones.",
    "tag": "Seguridad",
    "filterLabel": "Algoritmo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "hex-256",
        "label": "Hexadecimal 256-bit",
        "items": [
          "7f3c8a2e91d4b6f05a7e9c3b1d8f4a2e6b9c1d7f4a3e8b5c2d9f6a1e7c4b3d8f",
          "a4f9e2b7c3d8a1f6e9b4c7d2f8a3e6b1c9d5f7a2e4b8c1d6f9a3e7b2c5d8f4a",
          "e8b3c6f1a9d4e7b2c5f8a1d6e9b4c7f2a5d8e3b6c9f4a7d1e8b5c2f9a6d3e7b",
          "2d7f4a9e1c6b8d3f5a7e2b9c4d6f1a8e3b7c9d2f5a4e8b1c6d9f3a7e2b5c8d",
          "9c5e2b8f4a1d7e3b6c9f2a5d8e1b4c7f9a3d6e8b2c5f1a7d4e9b3c6f8a2d5e",
          "1f8e4b7c2d9a6e3b5c8f1a4d7e9b2c6f3a8d5e1b7c4f9a2d6e8b3c5f7a1d4e",
          "6b9d3f7a2e5c8b1d4f9a6e3b7c2d5f8a1e4b9c6d2f7a3e8b5c1d9f4a6e2b7c",
          "3e7b5c9f2a6d8e1b4c7f9a3d5e8b2c6f1a7d4e9b3c5f8a2d6e1b7c4f9a5d3e",
          "8d2f6a9e3b7c1d5f8a4e9b2c6f3a7d1e5b8c4f9a2d6e3b7c5f1a8d4e9b6c2f",
          "5c1f9a4e7b2d6f8a3e5b9c1d7f4a6e2b8c5d9f3a7e1b4c6f8a2d5e9b3c7f1a",
          "f4a7e2b9c6d1f8a3e5b7c9d4f2a6e8b1c5d9f7a3e4b2c6f8a1d5e9b7c3f6a",
          "b7c4f9a1d6e3b8c2f5a7d9e4b1c6f8a3d2e5b9c7f1a4d6e8b2c5f9a7d3e1b",
          "4e9b1c7f3a6d8e2b5c9f4a7d1e6b8c3f9a2d5e7b4c1f8a6d9e3b2c5f7a1d4e",
          "9f3a6e1b8c4d7f2a5e9b3c6f8a1d4e7b2c5f9a6d3e8b1c4f7a9d2e5b6c8f3a",
          "2c8f5a9e1b7d4f6a3e8b2c5f9a1d7e4b6c3f8a9d2e5b1c7f4a6d9e3b8c5f2a",
          "7e4b9c2f6a1d8e5b3c7f9a4d2e6b8c1f5a7d9e3b4c6f2a8d5e1b9c7f4a3d6e",
          "a1d6f9e3b7c2f5a8d4e9b1c6f7a3d2e5b8c4f9a6d1e7b3c5f2a8d9e4b6c1f",
          "5f8a2e6b9c3d7f1a4e8b5c2f9a6d3e7b1c4f8a9d2e5b6c7f3a1d4e9b8c5f2a",
          "e3b7c5f9a2d6e1b4c8f7a3d9e2b5c6f1a8d4e7b9c3f5a2d6e8b1c4f9a7d3e",
          "8c1f4a7e2b9d6f3a5e8b1c7f9a4d2e6b3c5f8a1d9e7b4c2f6a8d3e5b9c1f7a",
          "6d9e3b5c8f2a7d1e4b9c6f3a8d5e2b7c1f4a9d6e8b3c5f7a2d1e4b9c6f8a5d",
          "f2a5d8e4b1c9f6a3d7e2b8c5f1a4d9e6b3c7f8a2d5e1b9c4f7a6d3e8b5c2f",
          "3b8c5f1a7d9e4b2c6f8a3d5e1b7c9f4a6d2e8b5c3f1a7d9e6b4c2f8a5d1e3b",
          "9a4d7e1b6c3f8a5d2e9b4c7f1a6d8e3b5c9f2a7d4e1b8c6f9a3d5e7b2c4f1a",
          "c7f2a9d4e6b1c8f5a3d7e9b2c4f1a6d8e5b3c9f7a2d4e1b6c8f9a5d3e7b4c"
        ]
      },
      {
        "id": "base64",
        "label": "Base64 URL-safe",
        "items": [
          "ZjE4YTNkN2Y5ZTJiNGM4ZDFhNmY3ZTViOWMzZDhmMWE0ZTZi",
          "YTliNGM3ZjJkOGUzYTZiMWM5ZjVkN2EyZTRiOGMxZjZhOWQz",
          "MmU3YjljNWY4YTFkNGU5YjZjM2YyYTdkOGU1YjFjNGY5YTZk",
          "OGQ1ZjJhN2UxYjljNGY2YThkM2UyYjVjOWYxYTdkNGU4YjZj",
          "NWMxZjhhNGU3YjJkOWY2YTNlOGI1YzFkN2Y0YTllMmI4YzZk",
          "N2YzYThlNGI5YzJkNmYxYTVlOGIzYzdmOWE0ZDJlNmI4YzFm",
          "ZTRiOWMxZjdhM2Q2ZThjNWIyZjlhN2QxZTRiNmM4ZjNhNWQy",
          "MWQ4ZjVhM2U3YjljNGYyYTZkOGUxYjVjOWYzYTdkNGU5YjZj",
          "OWMyZjZhOGU0YjFkN2YzYTVlOGI5YzJkNmYxYTdkNGU4YjVj",
          "NGE3ZTJiOWM1ZDhmMWE2ZTNiOGM0ZjlhMmQ1ZTdiMWM2Zjhh",
          "ZjhhM2Q1ZTliMmM3ZjFhNGQ2ZThjNWI5ZjNhN2QyZTRiOWMx",
          "YjljNGY3YTFkOWUzYjZjOGYyYTVkN2U5YjRjMWY2YThkM2U1",
          "M2U4YjVjMWY5YTdkNGUyYjZjOGYxYTlkNWUzYjdjNGYyYThk",
          "NmM4ZjNhNWQxZTliNGM3ZjJhOGQ2ZTViMWM5ZjRhN2QzZThi",
          "ZjJhOGQ2ZTFiNWM5ZjdhM2Q0ZThjMmI2ZjlhNWQxZTdiNGM4",
          "OGQxZjZhNGU3YjJjOWY1YThkM2UyYjZjOWY3YTFkNGU4YjVj",
          "YTZkOWUzYjhjMWY1YTdkMmU0YjljNmY4YTNkNWUxYjdjOWYy",
          "NWU4YjFjN2Y5YTRkMmU2YjhjNWYzYTdkOWUxYjRjNmY4YTJk",
          "YzRmOWExZDZlM2I4YzJmNWE3ZDllNGIxYzZmOGEzZDJlNWI5",
          "N2YyYTVkOWU0YjFjOGY2YTNkN2UyYjljNWYxYTRkOGU2YjNj",
          "ZTNiN2M1ZjlhMmQ2ZTFiNGM4ZjdhM2Q5ZTJiNWM2ZjFhOGQ0",
          "OWEzZDZlMmI1YzhmN2ExZDRlOWI2YzNmMmE4ZDVlMWI3YzRm",
          "MmU2YjljNGY4YTFkN2UzYjVjOWYyYTdkOGU0YjFjNmY5YTNk",
          "ZjdhMmQ1ZTljNGIxYzhmNmEzZDdlMmI5YzVmMWE0ZDhlNmIz",
          "NGY5YTJkN2UxYjZjOGYzYTVkOWUyYjRjN2YxYTZkOGU1YjNj"
        ]
      },
      {
        "id": "uuid-v4",
        "label": "UUID v4",
        "items": [
          "f47ac10b-58cc-4372-a567-0e02b2c3d479",
          "8c7e9b2a-3f4d-4b1e-a8c6-5d9f2e7a1b3c",
          "3d8f1a6e-9b4c-47f2-b5d8-e3a1c6f9b2d7",
          "e4b9c1f7-a3d6-48e2-b5c9-f1a7d4e8b3c6",
          "a7d4e9b3-c6f1-4a8d-b2e5-c9f7a1d6e8b4",
          "9c5e2b8f-4a1d-47e3-b6c9-f2a5d8e1b4c7",
          "2d7f4a9e-1c6b-48d3-b5a7-e2b9c4d6f1a8",
          "6b9d3f7a-2e5c-48b1-b4f9-a6e3b7c2d5f8",
          "5c1f9a4e-7b2d-46f8-ba3e-5b9c1d7f4a6e",
          "f4a7e2b9-c6d1-4f8a-b3e5-b7c9d4f2a6e8",
          "8d2f6a9e-3b7c-41d5-b8a4-e9b2c6f3a7d1",
          "b7c4f9a1-d6e3-4b8c-b2f5-a7d9e4b1c6f8",
          "4e9b1c7f-3a6d-48e2-b5c9-f4a7d1e6b8c3",
          "9f3a6e1b-8c4d-47f2-ba5e-9b3c6f8a1d4e",
          "7e4b9c2f-6a1d-48e5-bb3c-7f9a4d2e6b8c",
          "a1d6f9e3-b7c2-4f5a-b8d4-e9b1c6f7a3d2",
          "e3b7c5f9-a2d6-4e1b-b4c8-f7a3d9e2b5c6",
          "8c1f4a7e-2b9d-46f3-ba5e-8b1c7f9a4d2e",
          "6d9e3b5c-8f2a-47d1-be4b-9c6f3a8d5e2b",
          "f2a5d8e4-b1c9-4f6a-b3d7-e2b8c5f1a4d9",
          "3b8c5f1a-7d9e-44b2-bc6f-8a3d5e1b7c9f",
          "9a4d7e1b-6c3f-48a5-bd2e-9b4c7f1a6d8e",
          "c7f2a9d4-e6b1-4c8f-b5a3-d7e9b2c4f1a6",
          "5e8b1c7f-9a4d-42e6-bb3c-5f8a1d9e7b4c",
          "d4e9b3c6-f1a7-48d2-be5c-8f9a2d4e1b6c"
        ]
      },
      {
        "id": "short-alphanumeric",
        "label": "Alfanumérico corto (32 chars)",
        "items": [
          "7f3c8a2e91d4b6f05a7e9c3b1d8f4a2e",
          "a4f9e2b7c3d8a1f6e9b4c7d2f8a3e6b1",
          "e8b3c6f1a9d4e7b2c5f8a1d6e9b4c7f2",
          "2d7f4a9e1c6b8d3f5a7e2b9c4d6f1a8e",
          "9c5e2b8f4a1d7e3b6c9f2a5d8e1b4c7f",
          "1f8e4b7c2d9a6e3b5c8f1a4d7e9b2c6f",
          "6b9d3f7a2e5c8b1d4f9a6e3b7c2d5f8a",
          "3e7b5c9f2a6d8e1b4c7f9a3d5e8b2c6f",
          "8d2f6a9e3b7c1d5f8a4e9b2c6f3a7d1e",
          "5c1f9a4e7b2d6f8a3e5b9c1d7f4a6e2b",
          "f4a7e2b9c6d1f8a3e5b7c9d4f2a6e8b1",
          "b7c4f9a1d6e3b8c2f5a7d9e4b1c6f8a3",
          "4e9b1c7f3a6d8e2b5c9f4a7d1e6b8c3f",
          "9f3a6e1b8c4d7f2a5e9b3c6f8a1d4e7b",
          "2c8f5a9e1b7d4f6a3e8b2c5f9a1d7e4b",
          "7e4b9c2f6a1d8e5b3c7f9a4d2e6b8c1f",
          "a1d6f9e3b7c2f5a8d4e9b1c6f7a3d2e5",
          "5f8a2e6b9c3d7f1a4e8b5c2f9a6d3e7b",
          "e3b7c5f9a2d6e1b4c8f7a3d9e2b5c6f1",
          "8c1f4a7e2b9d6f3a5e8b1c7f9a4d2e6b",
          "6d9e3b5c8f2a7d1e4b9c6f3a8d5e2b7c",
          "f2a5d8e4b1c9f6a3d7e2b8c5f1a4d9e6",
          "3b8c5f1a7d9e4b2c6f8a3d5e1b7c9f4a",
          "9a4d7e1b6c3f8a5d2e9b4c7f1a6d8e3b",
          "c7f2a9d4e6b1c8f5a3d7e9b2c4f1a6d8"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Qué es CSRF y por qué necesitás protección",
        "body": "<p>Cross-Site Request Forgery (CSRF) es un ataque donde un sitio malicioso engaña al navegador del usuario para ejecutar acciones no autorizadas en un sitio donde está autenticado. Por ejemplo: abrís un mail con una imagen que en realidad es un form oculto que transfiere plata de tu banco.</p><p>El ataque funciona porque <strong>los navegadores envían cookies automáticamente</strong> con cada request al dominio correspondiente. Si estás logueado en tu banco y visitás un sitio malicioso, ese sitio puede disparar requests que tu navegador autenticará con tus cookies de sesión.</p><p>Los tokens CSRF resuelven esto: son valores únicos e impredecibles que se generan por sesión y se validan en el servidor. El atacante no puede conocer el token porque está almacenado solo en tu sesión legítima, no en las cookies que el navegador envía automáticamente.</p>"
      },
      {
        "h2": "Cómo implementar tokens CSRF correctamente",
        "body": "<p>La implementación básica tiene tres pasos:</p><p><strong>1. Generación:</strong> Al crear la sesión del usuario, generá un token criptográficamente seguro (mínimo 128 bits, idealmente 256). Almacenalo en la sesión del servidor, NO en cookies.</p><p><strong>2. Inclusión:</strong> En cada form HTML, incluí el token como campo oculto:<br><code>&lt;input type='hidden' name='csrf_token' value='tu-token-aqui'&gt;</code><br>Para requests AJAX, envialo en headers custom: <code>X-CSRF-Token</code>.</p><p><strong>3. Validación:</strong> En cada POST/PUT/DELETE, el servidor compara el token recibido con el almacenado en sesión. Si no coinciden o falta, rechazá el request con error 403.</p><p><strong>Errores comunes:</strong> Usar el mismo token para todos los usuarios (vulnera el propósito), almacenar tokens en localStorage (accesible por XSS), o no validar en acciones de solo-lectura críticas (GET que modifican estado es anti-patrón).</p>"
      },
      {
        "h2": "Tokens por sesión vs tokens por request",
        "body": "<p>Hay dos enfoques principales para la vigencia del token:</p><p><strong>Token por sesión:</strong> Un único token válido durante toda la sesión del usuario. Pros: simple de implementar, no afecta usabilidad (refresh de página no rompe forms). Contras: si el token se filtra, es válido hasta que expire la sesión.</p><p><strong>Token por request:</strong> Cada form/request genera un token nuevo que se invalida después de usarse. Pros: máxima seguridad, window de ataque mínimo. Contras: complejidad en apps con múltiples tabs, problemas con botón 'atrás' del navegador.</p><p>Para la mayoría de apps, <strong>token por sesión es suficiente</strong> si combinás con:</p><ul><li>Tokens de 256 bits (imposibles de adivinar por fuerza bruta)</li><li>Regeneración en cambios de privilegio (login, upgrade a admin)</li><li>Validación estricta sin excepciones</li><li>HTTPS obligatorio (evita man-in-the-middle)</li></ul><p>Tokens por request son para banca online, paneles de admin críticos o compliance regulatorio exigente.</p>"
      },
      {
        "h2": "Integración con frameworks y casos especiales",
        "body": "<p>La mayoría de frameworks modernos tienen CSRF protection built-in, pero necesitás configurarlo correctamente:</p><p><strong>Django:</strong> <code>{% csrf_token %}</code> en templates. Middleware <code>CsrfViewMiddleware</code> habilitado por default. Para AJAX: leer cookie <code>csrftoken</code> y enviar en header <code>X-CSRFToken</code>.</p><p><strong>Rails:</strong> <code>&lt;%= csrf_meta_tags %&gt;</code> en layout. <code>protect_from_forgery with: :exception</code> en ApplicationController. Verificación automática en forms generados con helpers.</p><p><strong>Laravel:</strong> <code>@csrf</code> en Blade templates. Middleware <code>VerifyCsrfToken</code>. Para rutas API, usá Sanctum con SPA authentication mode.</p><p><strong>Casos especiales:</strong></p><ul><li><strong>APIs REST stateless:</strong> Si no usás sesiones, CSRF no aplica (usá OAuth2/JWT). Pero si tu API comparte cookies con el frontend, SÍ necesitás protección.</li><li><strong>File uploads:</strong> Incluí el token en form multipart, no como parámetro de query string.</li><li><strong>Webhooks:</strong> No uses CSRF tokens (el caller externo no tiene sesión). Implementá HMAC signatures o shared secrets.</li></ul>"
      }
    ],
    "faq": [
      {
        "q": "¿Los tokens CSRF previenen XSS?",
        "a": "No. CSRF y XSS son ataques diferentes. Un XSS puede robar tokens CSRF porque tiene acceso al DOM. Necesitás protección separada para cada uno."
      },
      {
        "q": "¿Puedo usar el mismo token para múltiples dominios?",
        "a": "No. Cada dominio debe tener tokens independientes por sesión. Compartir tokens entre dominios anula la protección."
      },
      {
        "q": "¿Necesito CSRF tokens si uso solo autenticación JWT?",
        "a": "Depende. Si almacenás JWT en localStorage y lo enviás manualmente en headers, no necesitás CSRF. Si usás cookies para JWT, SÍ necesitás protección CSRF."
      },
      {
        "q": "¿Qué pasa si un usuario abre mi app en múltiples tabs?",
        "a": "Con tokens por sesión, funciona sin problema. Con tokens por request, cada tab necesita manejar tokens independientes o usar estrategia de sincronización."
      }
    ]
  },
  "en": {
    "pageTitle": "CSRF Token Generator | Genfy",
    "metaDesc": "Generate secure CSRF tokens to protect your forms. Implement protection against Cross-Site Request Forgery attacks with unique and robust tokens.",
    "h1": "CSRF Token Generator",
    "intro": "Protect your forms with cryptographically secure CSRF tokens. Each token is unique, unpredictable and valid only for a specific session, blocking request forgery attacks.",
    "tag": "Security",
    "filterLabel": "Algorithm",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "hex-256",
        "label": "Hexadecimal 256-bit",
        "items": [
          "7f3c8a2e91d4b6f05a7e9c3b1d8f4a2e6b9c1d7f4a3e8b5c2d9f6a1e7c4b3d8f",
          "a4f9e2b7c3d8a1f6e9b4c7d2f8a3e6b1c9d5f7a2e4b8c1d6f9a3e7b2c5d8f4a",
          "e8b3c6f1a9d4e7b2c5f8a1d6e9b4c7f2a5d8e3b6c9f4a7d1e8b5c2f9a6d3e7b",
          "2d7f4a9e1c6b8d3f5a7e2b9c4d6f1a8e3b7c9d2f5a4e8b1c6d9f3a7e2b5c8d",
          "9c5e2b8f4a1d7e3b6c9f2a5d8e1b4c7f9a3d6e8b2c5f1a7d4e9b3c6f8a2d5e",
          "1f8e4b7c2d9a6e3b5c8f1a4d7e9b2c6f3a8d5e1b7c4f9a2d6e8b3c5f7a1d4e",
          "6b9d3f7a2e5c8b1d4f9a6e3b7c2d5f8a1e4b9c6d2f7a3e8b5c1d9f4a6e2b7c",
          "3e7b5c9f2a6d8e1b4c7f9a3d5e8b2c6f1a7d4e9b3c5f8a2d6e1b7c4f9a5d3e",
          "8d2f6a9e3b7c1d5f8a4e9b2c6f3a7d1e5b8c4f9a2d6e3b7c5f1a8d4e9b6c2f",
          "5c1f9a4e7b2d6f8a3e5b9c1d7f4a6e2b8c5d9f3a7e1b4c6f8a2d5e9b3c7f1a",
          "f4a7e2b9c6d1f8a3e5b7c9d4f2a6e8b1c5d9f7a3e4b2c6f8a1d5e9b7c3f6a",
          "b7c4f9a1d6e3b8c2f5a7d9e4b1c6f8a3d2e5b9c7f1a4d6e8b2c5f9a7d3e1b",
          "4e9b1c7f3a6d8e2b5c9f4a7d1e6b8c3f9a2d5e7b4c1f8a6d9e3b2c5f7a1d4e",
          "9f3a6e1b8c4d7f2a5e9b3c6f8a1d4e7b2c5f9a6d3e8b1c4f7a9d2e5b6c8f3a",
          "2c8f5a9e1b7d4f6a3e8b2c5f9a1d7e4b6c3f8a9d2e5b1c7f4a6d9e3b8c5f2a",
          "7e4b9c2f6a1d8e5b3c7f9a4d2e6b8c1f5a7d9e3b4c6f2a8d5e1b9c7f4a3d6e",
          "a1d6f9e3b7c2f5a8d4e9b1c6f7a3d2e5b8c4f9a6d1e7b3c5f2a8d9e4b6c1f",
          "5f8a2e6b9c3d7f1a4e8b5c2f9a6d3e7b1c4f8a9d2e5b6c7f3a1d4e9b8c5f2a",
          "e3b7c5f9a2d6e1b4c8f7a3d9e2b5c6f1a8d4e7b9c3f5a2d6e8b1c4f9a7d3e",
          "8c1f4a7e2b9d6f3a5e8b1c7f9a4d2e6b3c5f8a1d9e7b4c2f6a8d3e5b9c1f7a",
          "6d9e3b5c8f2a7d1e4b9c6f3a8d5e2b7c1f4a9d6e8b3c5f7a2d1e4b9c6f8a5d",
          "f2a5d8e4b1c9f6a3d7e2b8c5f1a4d9e6b3c7f8a2d5e1b9c4f7a6d3e8b5c2f",
          "3b8c5f1a7d9e4b2c6f8a3d5e1b7c9f4a6d2e8b5c3f1a7d9e6b4c2f8a5d1e3b",
          "9a4d7e1b6c3f8a5d2e9b4c7f1a6d8e3b5c9f2a7d4e1b8c6f9a3d5e7b2c4f1a",
          "c7f2a9d4e6b1c8f5a3d7e9b2c4f1a6d8e5b3c9f7a2d4e1b6c8f9a5d3e7b4c"
        ]
      },
      {
        "id": "base64",
        "label": "Base64 URL-safe",
        "items": [
          "ZjE4YTNkN2Y5ZTJiNGM4ZDFhNmY3ZTViOWMzZDhmMWE0ZTZi",
          "YTliNGM3ZjJkOGUzYTZiMWM5ZjVkN2EyZTRiOGMxZjZhOWQz",
          "MmU3YjljNWY4YTFkNGU5YjZjM2YyYTdkOGU1YjFjNGY5YTZk",
          "OGQ1ZjJhN2UxYjljNGY2YThkM2UyYjVjOWYxYTdkNGU4YjZj",
          "NWMxZjhhNGU3YjJkOWY2YTNlOGI1YzFkN2Y0YTllMmI4YzZk",
          "N2YzYThlNGI5YzJkNmYxYTVlOGIzYzdmOWE0ZDJlNmI4YzFm",
          "ZTRiOWMxZjdhM2Q2ZThjNWIyZjlhN2QxZTRiNmM4ZjNhNWQy",
          "MWQ4ZjVhM2U3YjljNGYyYTZkOGUxYjVjOWYzYTdkNGU5YjZj",
          "OWMyZjZhOGU0YjFkN2YzYTVlOGI5YzJkNmYxYTdkNGU4YjVj",
          "NGE3ZTJiOWM1ZDhmMWE2ZTNiOGM0ZjlhMmQ1ZTdiMWM2Zjhh",
          "ZjhhM2Q1ZTliMmM3ZjFhNGQ2ZThjNWI5ZjNhN2QyZTRiOWMx",
          "YjljNGY3YTFkOWUzYjZjOGYyYTVkN2U5YjRjMWY2YThkM2U1",
          "M2U4YjVjMWY5YTdkNGUyYjZjOGYxYTlkNWUzYjdjNGYyYThk",
          "NmM4ZjNhNWQxZTliNGM3ZjJhOGQ2ZTViMWM5ZjRhN2QzZThi",
          "ZjJhOGQ2ZTFiNWM5ZjdhM2Q0ZThjMmI2ZjlhNWQxZTdiNGM4",
          "OGQxZjZhNGU3YjJjOWY1YThkM2UyYjZjOWY3YTFkNGU4YjVj",
          "YTZkOWUzYjhjMWY1YTdkMmU0YjljNmY4YTNkNWUxYjdjOWYy",
          "NWU4YjFjN2Y5YTRkMmU2YjhjNWYzYTdkOWUxYjRjNmY4YTJk",
          "YzRmOWExZDZlM2I4YzJmNWE3ZDllNGIxYzZmOGEzZDJlNWI5",
          "N2YyYTVkOWU0YjFjOGY2YTNkN2UyYjljNWYxYTRkOGU2YjNj",
          "ZTNiN2M1ZjlhMmQ2ZTFiNGM4ZjdhM2Q5ZTJiNWM2ZjFhOGQ0",
          "OWEzZDZlMmI1YzhmN2ExZDRlOWI2YzNmMmE4ZDVlMWI3YzRm",
          "MmU2YjljNGY4YTFkN2UzYjVjOWYyYTdkOGU0YjFjNmY5YTNk",
          "ZjdhMmQ1ZTljNGIxYzhmNmEzZDdlMmI5YzVmMWE0ZDhlNmIz",
          "NGY5YTJkN2UxYjZjOGYzYTVkOWUyYjRjN2YxYTZkOGU1YjNj"
        ]
      },
      {
        "id": "uuid-v4",
        "label": "UUID v4",
        "items": [
          "f47ac10b-58cc-4372-a567-0e02b2c3d479",
          "8c7e9b2a-3f4d-4b1e-a8c6-5d9f2e7a1b3c",
          "3d8f1a6e-9b4c-47f2-b5d8-e3a1c6f9b2d7",
          "e4b9c1f7-a3d6-48e2-b5c9-f1a7d4e8b3c6",
          "a7d4e9b3-c6f1-4a8d-b2e5-c9f7a1d6e8b4",
          "9c5e2b8f-4a1d-47e3-b6c9-f2a5d8e1b4c7",
          "2d7f4a9e-1c6b-48d3-b5a7-e2b9c4d6f1a8",
          "6b9d3f7a-2e5c-48b1-b4f9-a6e3b7c2d5f8",
          "5c1f9a4e-7b2d-46f8-ba3e-5b9c1d7f4a6e",
          "f4a7e2b9-c6d1-4f8a-b3e5-b7c9d4f2a6e8",
          "8d2f6a9e-3b7c-41d5-b8a4-e9b2c6f3a7d1",
          "b7c4f9a1-d6e3-4b8c-b2f5-a7d9e4b1c6f8",
          "4e9b1c7f-3a6d-48e2-b5c9-f4a7d1e6b8c3",
          "9f3a6e1b-8c4d-47f2-ba5e-9b3c6f8a1d4e",
          "7e4b9c2f-6a1d-48e5-bb3c-7f9a4d2e6b8c",
          "a1d6f9e3-b7c2-4f5a-b8d4-e9b1c6f7a3d2",
          "e3b7c5f9-a2d6-4e1b-b4c8-f7a3d9e2b5c6",
          "8c1f4a7e-2b9d-46f3-ba5e-8b1c7f9a4d2e",
          "6d9e3b5c-8f2a-47d1-be4b-9c6f3a8d5e2b",
          "f2a5d8e4-b1c9-4f6a-b3d7-e2b8c5f1a4d9",
          "3b8c5f1a-7d9e-44b2-bc6f-8a3d5e1b7c9f",
          "9a4d7e1b-6c3f-48a5-bd2e-9b4c7f1a6d8e",
          "c7f2a9d4-e6b1-4c8f-b5a3-d7e9b2c4f1a6",
          "5e8b1c7f-9a4d-42e6-bb3c-5f8a1d9e7b4c",
          "d4e9b3c6-f1a7-48d2-be5c-8f9a2d4e1b6c"
        ]
      },
      {
        "id": "short-alphanumeric",
        "label": "Short alphanumeric (32 chars)",
        "items": [
          "7f3c8a2e91d4b6f05a7e9c3b1d8f4a2e",
          "a4f9e2b7c3d8a1f6e9b4c7d2f8a3e6b1",
          "e8b3c6f1a9d4e7b2c5f8a1d6e9b4c7f2",
          "2d7f4a9e1c6b8d3f5a7e2b9c4d6f1a8e",
          "9c5e2b8f4a1d7e3b6c9f2a5d8e1b4c7f",
          "1f8e4b7c2d9a6e3b5c8f1a4d7e9b2c6f",
          "6b9d3f7a2e5c8b1d4f9a6e3b7c2d5f8a",
          "3e7b5c9f2a6d8e1b4c7f9a3d5e8b2c6f",
          "8d2f6a9e3b7c1d5f8a4e9b2c6f3a7d1e",
          "5c1f9a4e7b2d6f8a3e5b9c1d7f4a6e2b",
          "f4a7e2b9c6d1f8a3e5b7c9d4f2a6e8b1",
          "b7c4f9a1d6e3b8c2f5a7d9e4b1c6f8a3",
          "4e9b1c7f3a6d8e2b5c9f4a7d1e6b8c3f",
          "9f3a6e1b8c4d7f2a5e9b3c6f8a1d4e7b",
          "2c8f5a9e1b7d4f6a3e8b2c5f9a1d7e4b",
          "7e4b9c2f6a1d8e5b3c7f9a4d2e6b8c1f",
          "a1d6f9e3b7c2f5a8d4e9b1c6f7a3d2e5",
          "5f8a2e6b9c3d7f1a4e8b5c2f9a6d3e7b",
          "e3b7c5f9a2d6e1b4c8f7a3d9e2b5c6f1",
          "8c1f4a7e2b9d6f3a5e8b1c7f9a4d2e6b",
          "6d9e3b5c8f2a7d1e4b9c6f3a8d5e2b7c",
          "f2a5d8e4b1c9f6a3d7e2b8c5f1a4d9e6",
          "3b8c5f1a7d9e4b2c6f8a3d5e1b7c9f4a",
          "9a4d7e1b6c3f8a5d2e9b4c7f1a6d8e3b",
          "c7f2a9d4e6b1c8f5a3d7e9b2c4f1a6d8"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What is CSRF and why you need protection",
        "body": "<p>Cross-Site Request Forgery (CSRF) is an attack where a malicious site tricks the user's browser into executing unauthorized actions on a site where they're authenticated. For example: you open an email with an image that's actually a hidden form transferring money from your bank.</p><p>The attack works because <strong>browsers automatically send cookies</strong> with every request to the corresponding domain. If you're logged into your bank and visit a malicious site, that site can trigger requests that your browser will authenticate with your session cookies.</p><p>CSRF tokens solve this: they're unique, unpredictable values generated per session and validated on the server. The attacker can't know the token because it's stored only in your legitimate session, not in the cookies the browser sends automatically.</p>"
      },
      {
        "h2": "How to implement CSRF tokens correctly",
        "body": "<p>Basic implementation has three steps:</p><p><strong>1. Generation:</strong> When creating the user session, generate a cryptographically secure token (minimum 128 bits, ideally 256). Store it in server session, NOT in cookies.</p><p><strong>2. Inclusion:</strong> In each HTML form, include the token as a hidden field:<br><code>&lt;input type='hidden' name='csrf_token' value='your-token-here'&gt;</code><br>For AJAX requests, send it in custom headers: <code>X-CSRF-Token</code>.</p><p><strong>3. Validation:</strong> On every POST/PUT/DELETE, the server compares the received token with the one stored in session. If they don't match or it's missing, reject the request with 403 error.</p><p><strong>Common mistakes:</strong> Using the same token for all users (defeats the purpose), storing tokens in localStorage (accessible via XSS), or not validating on critical read-only actions (GET that modifies state is an anti-pattern).</p>"
      },
      {
        "h2": "Tokens per session vs tokens per request",
        "body": "<p>There are two main approaches for token validity:</p><p><strong>Token per session:</strong> A single token valid for the user's entire session. Pros: simple to implement, doesn't affect usability (page refresh doesn't break forms). Cons: if the token leaks, it's valid until session expires.</p><p><strong>Token per request:</strong> Each form/request generates a new token that's invalidated after use. Pros: maximum security, minimal attack window. Cons: complexity in apps with multiple tabs, issues with browser 'back' button.</p><p>For most apps, <strong>token per session is sufficient</strong> if you combine with:</p><ul><li>256-bit tokens (impossible to brute-force guess)</li><li>Regeneration on privilege changes (login, upgrade to admin)</li><li>Strict validation without exceptions</li><li>Mandatory HTTPS (prevents man-in-the-middle)</li></ul><p>Tokens per request are for online banking, critical admin panels or demanding regulatory compliance.</p>"
      },
      {
        "h2": "Framework integration and special cases",
        "body": "<p>Most modern frameworks have built-in CSRF protection, but you need to configure it correctly:</p><p><strong>Django:</strong> <code>{% csrf_token %}</code> in templates. <code>CsrfViewMiddleware</code> middleware enabled by default. For AJAX: read <code>csrftoken</code> cookie and send in <code>X-CSRFToken</code> header.</p><p><strong>Rails:</strong> <code>&lt;%= csrf_meta_tags %&gt;</code> in layout. <code>protect_from_forgery with: :exception</code> in ApplicationController. Automatic verification in forms generated with helpers.</p><p><strong>Laravel:</strong> <code>@csrf</code> in Blade templates. <code>VerifyCsrfToken</code> middleware. For API routes, use Sanctum with SPA authentication mode.</p><p><strong>Special cases:</strong></p><ul><li><strong>Stateless REST APIs:</strong> If you don't use sessions, CSRF doesn't apply (use OAuth2/JWT). But if your API shares cookies with frontend, you DO need protection.</li><li><strong>File uploads:</strong> Include token in multipart form, not as query string parameter.</li><li><strong>Webhooks:</strong> Don't use CSRF tokens (external caller has no session). Implement HMAC signatures or shared secrets.</li></ul>"
      }
    ],
    "faq": [
      {
        "q": "Do CSRF tokens prevent XSS?",
        "a": "No. CSRF and XSS are different attacks. An XSS can steal CSRF tokens because it has DOM access. You need separate protection for each."
      },
      {
        "q": "Can I use the same token for multiple domains?",
        "a": "No. Each domain must have independent tokens per session. Sharing tokens between domains nullifies the protection."
      },
      {
        "q": "Do I need CSRF tokens if I only use JWT authentication?",
        "a": "It depends. If you store JWT in localStorage and send it manually in headers, you don't need CSRF. If you use cookies for JWT, you DO need CSRF protection."
      },
      {
        "q": "What happens if a user opens my app in multiple tabs?",
        "a": "With tokens per session, it works without issues. With tokens per request, each tab needs to handle independent tokens or use synchronization strategy."
      }
    ]
  }
};
