import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-casos-de-prueba', en: 'test-case-generator' },
  category: 'work',
  emoji: '✅',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Casos de Prueba QA | Genfy',
    metaDesc: 'Generá casos de prueba QA con pasos, datos esperados y criterios de aceptación. Para login, formularios, pagos, APIs y mobile en formato Gherkin o tabla.',
    h1: 'Generador de Casos de Prueba',
    intro: 'Creá test cases estructurados con precondición, pasos, datos y resultado esperado. Para QA manual, automatización con Cypress, Playwright o Selenium.',
    tag: 'QA & Testing',
    filterLabel: 'Categoría',
    countLabel: 'Cantidad',
    generateLabel: 'Generar casos',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'auth',
        label: 'Autenticación y sesión',
        items: [
          'TC-AUTH-001: Login exitoso con credenciales válidas (email + password correctos) → redirige a dashboard',
          'TC-AUTH-002: Login con email correcto y password incorrecto → muestra "Credenciales inválidas" sin especificar cuál',
          'TC-AUTH-003: Login con email no registrado → mismo mensaje genérico (anti-enumeración de usuarios)',
          'TC-AUTH-004: Login con campos vacíos → muestra "Campo requerido" en cada uno antes de hacer request',
          'TC-AUTH-005: Login con email malformado (sin @) → validación de formato cliente antes de enviar',
          'TC-AUTH-006: Login tras 5 intentos fallidos → bloquea cuenta 15 minutos con captcha de desbloqueo',
          'TC-AUTH-007: Login con sesión activa en otro navegador → notifica y permite cerrar sesión remota',
          'TC-AUTH-008: Logout limpia cookies de sesión y refresh token de localStorage',
          'TC-AUTH-009: Refresh token expirado tras 30 días → redirige a login con mensaje "Sesión expirada"',
          'TC-AUTH-010: Login con 2FA habilitado → solicita código TOTP de 6 dígitos tras password correcto',
          'TC-AUTH-011: 2FA con código inválido → permite reintento sin reiniciar password',
          'TC-AUTH-012: Recovery password: email no registrado → mensaje "Si existe, recibirás email" (no confirma)',
          'TC-AUTH-013: Recovery password: link expira tras 1 hora → muestra "Link expirado" y permite generar nuevo',
          'TC-AUTH-014: Recovery password: link de un solo uso → segundo click muestra "Ya usado"',
          'TC-AUTH-015: Cambio de password con password actual incorrecto → bloquea cambio',
          'TC-AUTH-016: SSO con Google: usuario nuevo → crea cuenta automáticamente con datos del proveedor',
          'TC-AUTH-017: SSO con Google: email ya existe en cuenta local → solicita link manual de cuentas',
          'TC-AUTH-018: Sesión inactiva por 30 minutos → cierra automáticamente con warning a los 25 min',
          'TC-AUTH-019: Login desde IP desconocida → envía email de notificación con detalles de acceso',
          'TC-AUTH-020: Login con tab múltiple → comparte sesión correctamente (no requiere relogin)',
          'TC-AUTH-021: Cerrar todas las sesiones desde panel de seguridad → invalida tokens en todos los devices',
          'TC-AUTH-022: Login con caps lock activado → muestra warning visual en campo password',
          'TC-AUTH-023: Login con autocompletado del navegador → respeta y completa correctamente',
          'TC-AUTH-024: Mostrar/ocultar password con icono ojo → toggle visual sin cambiar tipo del input al enviar',
          'TC-AUTH-025: Validación de password fuerte: mínimo 12 chars, mayúscula, número y símbolo',
          'TC-AUTH-026: Cuenta deshabilitada por admin intenta login → mensaje "Cuenta desactivada, contactar soporte"',
          'TC-AUTH-027: Login con email confirmado pero perfil incompleto → redirige a flujo de onboarding',
          'TC-AUTH-028: Logout en una pestaña → otras pestañas detectan vía storage event y muestran mensaje',
          'TC-AUTH-029: Verificación de email: link clickeado dos veces → segunda vez muestra "Ya verificado"',
          'TC-AUTH-030: Login con cuenta que requiere verificación 2FA pero no tiene método configurado → bloquea acceso'
        ]
      },
      {
        id: 'forms',
        label: 'Formularios y validaciones',
        items: [
          'TC-FORM-001: Submit con todos los campos vacíos → muestra todos los errores simultáneamente, no uno por uno',
          'TC-FORM-002: Email con formato inválido (sin @, sin TLD) → error "Formato de email inválido"',
          'TC-FORM-003: Teléfono con caracteres no numéricos → permite + - y espacios pero rechaza letras',
          'TC-FORM-004: Fecha de nacimiento futura → error "La fecha no puede ser futura"',
          'TC-FORM-005: Fecha de nacimiento mayor a 120 años → error "Fecha inválida"',
          'TC-FORM-006: Campo de texto con XSS injection (<script>) → escapa correctamente al renderizar',
          'TC-FORM-007: Campo numérico con SQL injection (\' OR 1=1) → trata como string sin ejecutar',
          'TC-FORM-008: Upload de archivo > tamaño máximo (5MB) → error pre-upload, no después',
          'TC-FORM-009: Upload de archivo con extensión no permitida (.exe) → rechaza antes de procesar',
          'TC-FORM-010: Upload con magic bytes que no coinciden con extensión (.jpg renombrado a .png) → detecta',
          'TC-FORM-011: Submit doble click rápido → solo procesa primera request, no duplica',
          'TC-FORM-012: Submit con sesión expirada durante el llenado → muestra modal de relogin sin perder datos',
          'TC-FORM-013: Form con campos opcionales vacíos → submit exitoso sin errores',
          'TC-FORM-014: Cancelar formulario con cambios no guardados → confirma "¿Descartar cambios?"',
          'TC-FORM-015: Refresh de página con datos en form → restaura desde sessionStorage si configurado',
          'TC-FORM-016: Auto-save cada 30 segundos → indica visualmente "Guardado" sin interrumpir tipeo',
          'TC-FORM-017: Form con dependencias entre campos (país → provincia) → carga provincia al elegir país',
          'TC-FORM-018: Validación async (verificar email único en DB) → muestra spinner durante check',
          'TC-FORM-019: Form muy largo con scroll → enfoca primer campo con error tras submit',
          'TC-FORM-020: Form con 100+ campos → performance acceptable sin lag al tipear',
          'TC-FORM-021: Tab navigation respeta orden lógico de campos, no orden DOM',
          'TC-FORM-022: Submit con Enter en cualquier campo → comportamiento consistente (submit o nothing)',
          'TC-FORM-023: Mobile: keyboard apropiado por tipo (numeric para teléfono, email para email)',
          'TC-FORM-024: Autocomplete attributes correctos (autocomplete="email", "current-password")',
          'TC-FORM-025: Errores con aria-live para lectores de pantalla',
          'TC-FORM-026: Labels asociados a inputs con for/id correctamente',
          'TC-FORM-027: Form en modal: focus trap funciona y Escape cierra modal',
          'TC-FORM-028: Caracteres unicode (emojis, acentos) en text inputs → guarda y muestra correctamente',
          'TC-FORM-029: Copy-paste de password con espacios al inicio/final → trim automático',
          'TC-FORM-030: Form readonly muestra valores pero no permite edición ni submit'
        ]
      },
      {
        id: 'commerce',
        label: 'E-commerce y pagos',
        items: [
          'TC-PAY-001: Checkout con tarjeta válida (4242 4242 4242 4242 Stripe test) → procesa exitosamente',
          'TC-PAY-002: Checkout con tarjeta declinada (4000 0000 0000 0002) → muestra error "Tarjeta declinada"',
          'TC-PAY-003: Checkout con CVV incorrecto → error específico "CVV inválido"',
          'TC-PAY-004: Checkout con fecha de vencimiento pasada → bloquea antes de enviar',
          'TC-PAY-005: Checkout con 3D Secure required → redirige a flujo de autenticación bancaria',
          'TC-PAY-006: Cancelar 3D Secure y volver → muestra "Pago cancelado, intentá de nuevo"',
          'TC-PAY-007: Checkout con cupón de descuento válido → aplica descuento y muestra ahorro',
          'TC-PAY-008: Cupón expirado o inválido → mensaje específico sin bloquear el resto del checkout',
          'TC-PAY-009: Cupón con monto mínimo no alcanzado → muestra cuánto falta para aplicar',
          'TC-PAY-010: Múltiples cupones aplicados → respeta política (uno por orden vs acumulables)',
          'TC-PAY-011: Carrito con producto que se agotó durante checkout → notifica y remueve item',
          'TC-PAY-012: Carrito con producto cuyo precio cambió → muestra alerta antes de finalizar',
          'TC-PAY-013: Checkout con dirección internacional → calcula impuestos según país',
          'TC-PAY-014: Cambio de moneda durante checkout → recalcula totales correctamente',
          'TC-PAY-015: Subtotal + envío + impuestos = Total exacto sin redondeos discrepantes',
          'TC-PAY-016: Suscripción mensual: cobro recurrente exitoso → renueva automáticamente',
          'TC-PAY-017: Suscripción con tarjeta vencida → notifica al usuario antes de la fecha de cobro',
          'TC-PAY-018: Cancelación de suscripción → mantiene acceso hasta fin del período pagado',
          'TC-PAY-019: Reembolso parcial: ajusta saldo y envía email de confirmación',
          'TC-PAY-020: Reembolso total: revierte producto a stock disponible si aplica',
          'TC-PAY-021: Webhook de Stripe llega duplicado → idempotencia funciona, no duplica orden',
          'TC-PAY-022: Pago con PayPal: redirección y vuelta correcta con order_id',
          'TC-PAY-023: Pago en efectivo (Mercado Pago, OXXO): genera voucher con código y vencimiento',
          'TC-PAY-024: Tax exempt customer: no aplica impuestos según configuración',
          'TC-PAY-025: Carrito abandonado: email después de 24hs con link para recuperar',
          'TC-PAY-026: Inventory: dos usuarios compran último item simultáneamente → uno gana, el otro recibe error claro',
          'TC-PAY-027: Wishlist: agregar producto sin login → guarda en cookie y migra a cuenta tras login',
          'TC-PAY-028: Pre-order: producto sin stock todavía → permite checkout con flag pending',
          'TC-PAY-029: Gift card: aplicar saldo parcial cubre parte y resto va a tarjeta',
          'TC-PAY-030: Factura: generar PDF con datos correctos y descargable post-compra'
        ]
      },
      {
        id: 'api',
        label: 'APIs y integraciones',
        items: [
          'TC-API-001: GET /users sin auth → 401 Unauthorized con header WWW-Authenticate',
          'TC-API-002: GET /users con token expirado → 401 con error específico "Token expired"',
          'TC-API-003: GET /users con token de otro usuario → 403 Forbidden',
          'TC-API-004: GET /users/123 con id que no existe → 404 Not Found con mensaje claro',
          'TC-API-005: POST /users con body inválido (campo requerido faltante) → 400 con detalle de campo',
          'TC-API-006: POST /users con body excediendo tamaño máximo → 413 Payload Too Large',
          'TC-API-007: PUT /users/123 con id en path distinto al del body → 422 con mensaje claro',
          'TC-API-008: DELETE /users/123 → 204 No Content y user no aparece en GET subsiguiente',
          'TC-API-009: Rate limit exceeded (100 req/min) → 429 con Retry-After header',
          'TC-API-010: API down (5xx) → cliente reintenta con exponential backoff',
          'TC-API-011: GET con paginación: ?page=1&limit=20 → devuelve metadata total y next page',
          'TC-API-012: GET con paginación inválida (page=-1) → 400 o normaliza a página 1',
          'TC-API-013: Filtros combinados (?status=active&role=admin) → AND lógico correcto',
          'TC-API-014: Sorting (?sort=-created_at) → orden descendente correctamente',
          'TC-API-015: Search query con caracteres especiales (?q=foo+bar) → URL encoding correcto',
          'TC-API-016: CORS desde origen autorizado → header Access-Control-Allow-Origin correcto',
          'TC-API-017: CORS preflight OPTIONS → responde con métodos permitidos',
          'TC-API-018: Webhook recibido: valida firma HMAC SHA-256 antes de procesar',
          'TC-API-019: Webhook sin firma o firma inválida → 401 y registra intento',
          'TC-API-020: Webhook duplicado (mismo event_id) → idempotencia: no procesa dos veces',
          'TC-API-021: API versioning: /api/v1 deprecated → header Sunset y Link a v2',
          'TC-API-022: Batch endpoint con 1 item exitoso y 1 fallido → 207 Multi-Status con detalles',
          'TC-API-023: Long-running operation: respuesta 202 Accepted con location de status',
          'TC-API-024: Streaming response (SSE): reconnecta tras drop de red automáticamente',
          'TC-API-025: GraphQL query con depth excesiva → rechaza por seguridad',
          'TC-API-026: GraphQL query con campos no autorizados → null en esos campos, no error global',
          'TC-API-027: API key revocada por admin → siguiente request 401 inmediatamente',
          'TC-API-028: Idempotency-Key header: mismo key, segundo POST devuelve respuesta cacheada',
          'TC-API-029: Compresión gzip/brotli: responde con Content-Encoding correcto si Accept-Encoding lo pide',
          'TC-API-030: ETag y If-None-Match: 304 Not Modified si recurso no cambió'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Estructura de un caso de prueba completo',
        body: '<p>Un caso de prueba útil tiene estructura mínima: <strong>ID único, Título, Precondición, Pasos numerados, Datos de entrada, Resultado esperado, Resultado actual y Estado</strong>. El ID (TC-AUTH-001) permite trazabilidad en bug trackers. El título describe la acción en una línea ("Login exitoso con credenciales válidas"). La precondición lista lo que debe estar listo antes ("Usuario registrado existente").</p><p>Los <strong>pasos</strong> deben ser ejecutables por cualquier QA sin contexto extra. Mal: "Hacer login normal". Bien: "1. Ir a /login. 2. Ingresar email registrado. 3. Ingresar password correcto. 4. Click en botón Iniciar Sesión". Cada paso debería tener resultado esperado verificable, no solo el final.</p><p>El <strong>resultado esperado</strong> debe ser específico y testeable. Mal: "Funciona bien". Bien: "El usuario es redirigido a /dashboard, ve su nombre en el header, y aparece notificación toast de bienvenida". Si no podés verificar el resultado mecánicamente, el caso no sirve para regression testing automatizado.</p>'
      },
      {
        h2: 'Tipos de casos: positivos, negativos y edge cases',
        body: '<p>Para cada feature necesitás tres tipos de casos. <strong>Positivos</strong> verifican que el happy path funciona: "Login con credenciales correctas funciona". <strong>Negativos</strong> verifican que los errores se manejan bien: "Login con password incorrecto muestra mensaje claro sin revelar si el email existe". <strong>Edge cases</strong> exploran límites: "Login con email de 320 caracteres (límite RFC) funciona; 321 caracteres rechaza".</p><p>La regla de Boris Beizer: <strong>los bugs aparecen en los bordes</strong>. Por cada feature, identificá límites: ¿qué pasa con string vacío? ¿con string máximo? ¿con números negativos? ¿con fechas pasadas? ¿con concurrencia? <em>Stripe</em> tiene tests para "tarjeta con CVV de 3 dígitos vs 4 dígitos (Amex)". Esos casos atrapan regresiones que tests felices nunca encuentran.</p><p>Una técnica útil: <strong>equivalence partitioning</strong>. Si tu campo "edad" acepta 0-150, tenés 4 particiones: <0 (inválido), 0-17 (menor), 18-150 (válido), >150 (inválido). Necesitás un caso por partición, no uno por cada número. Eso reduce el set de tests sin perder cobertura. <em>Microsoft</em> y <em>Atlassian</em> usan esta técnica para reducir suites de QA de 10000 a 500 casos manteniendo cobertura.</p>'
      },
      {
        h2: 'Errores comunes al escribir casos de prueba',
        body: '<p>Error #1: <strong>casos demasiado abstractos</strong>. "TC-001: Probar login" no es caso, es nombre de feature. Cada caso debe testear UN comportamiento específico. Si tu caso tiene "Probar login: válido, inválido, password recovery, 2FA", divididlo en 4 casos. Cada caso es atómico, falla por una sola razón identificable.</p><p>Error #2: <strong>casos sin datos concretos</strong>. "Ingresar password incorrecto" es ambiguo. ¿Qué password? ¿Mismo email correcto? ¿Cuántos intentos? Mejor: "Ingresar email \'test@example.com\' (registrado) y password \'wrongpass123\' (no es el correcto)". Datos específicos hacen el caso reproducible.</p><p>Error #3: <strong>resultado esperado vago</strong>. "Debería funcionar" no es resultado, es deseo. Mejor: "Status code 200, response body contiene token JWT en field access_token, cookie sessionId seteada con flag HttpOnly". Si tu QA automation no puede assertar esos resultados con código, el caso no es testeable.</p>'
      },
      {
        h2: 'Casos de prueba en BDD (Gherkin) y frameworks modernos',
        body: '<p>El formato <strong>Gherkin</strong> (Given/When/Then) usado en Cucumber, SpecFlow y Behave reemplaza el formato tabular tradicional con lenguaje natural. "Given user is logged in, When user clicks logout, Then session cookie is cleared and redirected to /login". Es más legible para product managers pero requiere disciplina: cada step debe tener implementación real en código.</p><p>Para automatización moderna, frameworks como <strong>Playwright</strong> y <strong>Cypress</strong> permiten codificar casos directamente: <code>test(\'login funciona\', async ({ page }) => { await page.goto(\'/login\'); await page.fill(\'#email\', \'test@example.com\'); ... })</code>. La ventaja: el caso de prueba ES código ejecutable, no documento separado. La desventaja: requiere dev skills para mantenerlo.</p><p>El balance ideal: <strong>casos manuales en herramientas como TestRail o Zephyr</strong> para QA exploratorio y testing complejo, <strong>casos automatizados en Playwright/Cypress</strong> para regression de happy paths críticos, y <strong>property-based testing con fast-check</strong> para edge cases generados aleatoriamente. <em>Stripe</em>, <em>GitHub</em> y <em>Vercel</em> combinan los tres niveles para cobertura completa sin ahogarse en mantenimiento.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántos casos de prueba necesita una feature?',
        a: 'Depende de la criticidad y complejidad. Una feature de auth crítica puede tener 30-50 casos (positivos, negativos, edge, security). Una feature de UI menor, 5-10 casos. La regla: cubrí todos los caminos críticos (happy path, errores comunes, edge de límites) y dejá fuera tests redundantes que no aportan cobertura nueva.'
      },
      {
        q: '¿Casos manuales o automatizados?',
        a: 'Ambos. Automatizá casos repetitivos críticos (regression, happy paths, smoke tests). Mantené manuales los casos de UX (flujos completos con feeling humano), exploratorios (descubrimiento de bugs no previstos) y los costosos de automatizar (mobile multi-device, integraciones complejas).'
      },
      {
        q: '¿Cómo organizo cientos de casos en mi equipo?',
        a: 'Usá una herramienta dedicada: <em>TestRail</em>, <em>Zephyr Scale</em>, <em>Xray</em> (para Jira) o <em>qase.io</em> son estándares. Estructurá por feature (auth, checkout, search) y dentro por tipo (positivos, negativos, edge). Linkeá cada caso a requerimiento o user story para trazabilidad.'
      },
      {
        q: '¿Quién escribe los casos de prueba?',
        a: 'Idealmente QA con input del dev y product manager. El dev sabe los edge cases técnicos (concurrencia, errores de API), el PM sabe los casos de negocio críticos, el QA estructura y mantiene el set. Cuando una sola persona escribe los casos, suelen faltar perspectivas y se generan blind spots.'
      }
    ]
  },
  en: {
    pageTitle: 'QA Test Case Generator | Genfy',
    metaDesc: 'Generate QA test cases with steps, expected data and acceptance criteria. For login, forms, payments, APIs and mobile in Gherkin or table format.',
    h1: 'Test Case Generator',
    intro: 'Create structured test cases with precondition, steps, data and expected result. For manual QA, automation with Cypress, Playwright or Selenium.',
    tag: 'QA & Testing',
    filterLabel: 'Category',
    countLabel: 'Amount',
    generateLabel: 'Generate cases',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'auth',
        label: 'Authentication and session',
        items: [
          'TC-AUTH-001: Successful login with valid credentials (correct email + password) → redirects to dashboard',
          'TC-AUTH-002: Login with correct email and wrong password → shows "Invalid credentials" without specifying which',
          'TC-AUTH-003: Login with unregistered email → same generic message (anti-user enumeration)',
          'TC-AUTH-004: Login with empty fields → shows "Required field" on each before making request',
          'TC-AUTH-005: Login with malformed email (no @) → client format validation before sending',
          'TC-AUTH-006: Login after 5 failed attempts → locks account 15 min with unlock captcha',
          'TC-AUTH-007: Login with active session in another browser → notifies and allows remote logout',
          'TC-AUTH-008: Logout clears session cookies and refresh token from localStorage',
          'TC-AUTH-009: Refresh token expired after 30 days → redirects to login with "Session expired"',
          'TC-AUTH-010: Login with 2FA enabled → requests 6-digit TOTP code after correct password',
          'TC-AUTH-011: 2FA with invalid code → allows retry without restarting password',
          'TC-AUTH-012: Password recovery: unregistered email → message "If exists, you\'ll get email" (no confirm)',
          'TC-AUTH-013: Password recovery: link expires after 1 hour → shows "Link expired" and allows new',
          'TC-AUTH-014: Password recovery: single-use link → second click shows "Already used"',
          'TC-AUTH-015: Password change with incorrect current password → blocks change',
          'TC-AUTH-016: SSO with Google: new user → auto-creates account with provider data',
          'TC-AUTH-017: SSO with Google: email already exists in local account → requests manual link',
          'TC-AUTH-018: Inactive session for 30 minutes → auto-closes with warning at 25 min',
          'TC-AUTH-019: Login from unknown IP → sends notification email with access details',
          'TC-AUTH-020: Login with multiple tabs → shares session correctly (no relogin needed)',
          'TC-AUTH-021: Close all sessions from security panel → invalidates tokens on all devices',
          'TC-AUTH-022: Login with caps lock active → shows visual warning in password field',
          'TC-AUTH-023: Login with browser autocomplete → respects and completes correctly',
          'TC-AUTH-024: Show/hide password with eye icon → visual toggle without changing input type on submit',
          'TC-AUTH-025: Strong password validation: min 12 chars, uppercase, number and symbol',
          'TC-AUTH-026: Account disabled by admin attempts login → message "Account disabled, contact support"',
          'TC-AUTH-027: Login with confirmed email but incomplete profile → redirects to onboarding flow',
          'TC-AUTH-028: Logout in one tab → other tabs detect via storage event and show message',
          'TC-AUTH-029: Email verification: link clicked twice → second time shows "Already verified"',
          'TC-AUTH-030: Login with account requiring 2FA but no method configured → blocks access'
        ]
      },
      {
        id: 'forms',
        label: 'Forms and validations',
        items: [
          'TC-FORM-001: Submit with all fields empty → shows all errors simultaneously, not one by one',
          'TC-FORM-002: Email with invalid format (no @, no TLD) → error "Invalid email format"',
          'TC-FORM-003: Phone with non-numeric characters → allows + - and spaces but rejects letters',
          'TC-FORM-004: Future birth date → error "Date cannot be in future"',
          'TC-FORM-005: Birth date older than 120 years → error "Invalid date"',
          'TC-FORM-006: Text field with XSS injection (<script>) → escapes correctly when rendering',
          'TC-FORM-007: Numeric field with SQL injection (\' OR 1=1) → treats as string without executing',
          'TC-FORM-008: File upload > max size (5MB) → pre-upload error, not after',
          'TC-FORM-009: File upload with disallowed extension (.exe) → rejects before processing',
          'TC-FORM-010: Upload with magic bytes not matching extension (.jpg renamed to .png) → detects',
          'TC-FORM-011: Quick double-click submit → only processes first request, no duplicate',
          'TC-FORM-012: Submit with session expired during fill → shows relogin modal without losing data',
          'TC-FORM-013: Form with empty optional fields → successful submit without errors',
          'TC-FORM-014: Cancel form with unsaved changes → confirms "Discard changes?"',
          'TC-FORM-015: Page refresh with form data → restores from sessionStorage if configured',
          'TC-FORM-016: Auto-save every 30 seconds → visually indicates "Saved" without interrupting typing',
          'TC-FORM-017: Form with field dependencies (country → state) → loads state when country chosen',
          'TC-FORM-018: Async validation (verify unique email in DB) → shows spinner during check',
          'TC-FORM-019: Long form with scroll → focuses first error field after submit',
          'TC-FORM-020: Form with 100+ fields → acceptable performance without lag when typing',
          'TC-FORM-021: Tab navigation respects logical field order, not DOM order',
          'TC-FORM-022: Submit with Enter in any field → consistent behavior (submit or nothing)',
          'TC-FORM-023: Mobile: appropriate keyboard by type (numeric for phone, email for email)',
          'TC-FORM-024: Correct autocomplete attributes (autocomplete="email", "current-password")',
          'TC-FORM-025: Errors with aria-live for screen readers',
          'TC-FORM-026: Labels associated with inputs via for/id correctly',
          'TC-FORM-027: Form in modal: focus trap works and Escape closes modal',
          'TC-FORM-028: Unicode characters (emojis, accents) in text inputs → saves and displays correctly',
          'TC-FORM-029: Copy-paste password with leading/trailing spaces → automatic trim',
          'TC-FORM-030: Readonly form shows values but doesn\'t allow edit or submit'
        ]
      },
      {
        id: 'commerce',
        label: 'E-commerce and payments',
        items: [
          'TC-PAY-001: Checkout with valid card (4242 4242 4242 4242 Stripe test) → processes successfully',
          'TC-PAY-002: Checkout with declined card (4000 0000 0000 0002) → shows "Card declined"',
          'TC-PAY-003: Checkout with incorrect CVV → specific error "Invalid CVV"',
          'TC-PAY-004: Checkout with past expiry date → blocks before sending',
          'TC-PAY-005: Checkout with 3D Secure required → redirects to bank auth flow',
          'TC-PAY-006: Cancel 3D Secure and return → shows "Payment cancelled, try again"',
          'TC-PAY-007: Checkout with valid discount coupon → applies discount and shows savings',
          'TC-PAY-008: Expired or invalid coupon → specific message without blocking rest of checkout',
          'TC-PAY-009: Coupon with minimum amount not reached → shows how much more needed',
          'TC-PAY-010: Multiple coupons applied → respects policy (one per order vs cumulative)',
          'TC-PAY-011: Cart with product that ran out during checkout → notifies and removes item',
          'TC-PAY-012: Cart with product whose price changed → shows alert before finalizing',
          'TC-PAY-013: Checkout with international address → calculates taxes by country',
          'TC-PAY-014: Currency change during checkout → recalculates totals correctly',
          'TC-PAY-015: Subtotal + shipping + taxes = exact Total without rounding discrepancies',
          'TC-PAY-016: Monthly subscription: successful recurring charge → renews automatically',
          'TC-PAY-017: Subscription with expired card → notifies user before charge date',
          'TC-PAY-018: Subscription cancellation → maintains access until end of paid period',
          'TC-PAY-019: Partial refund: adjusts balance and sends confirmation email',
          'TC-PAY-020: Full refund: returns product to available stock if applicable',
          'TC-PAY-021: Stripe webhook arrives duplicated → idempotency works, no order duplication',
          'TC-PAY-022: PayPal payment: redirect and return correct with order_id',
          'TC-PAY-023: Cash payment (Mercado Pago, OXXO): generates voucher with code and expiry',
          'TC-PAY-024: Tax exempt customer: no taxes applied per configuration',
          'TC-PAY-025: Abandoned cart: email after 24hs with link to recover',
          'TC-PAY-026: Inventory: two users buy last item simultaneously → one wins, other gets clear error',
          'TC-PAY-027: Wishlist: add product without login → saves in cookie and migrates to account post-login',
          'TC-PAY-028: Pre-order: product without stock yet → allows checkout with pending flag',
          'TC-PAY-029: Gift card: applying partial balance covers part and rest goes to card',
          'TC-PAY-030: Invoice: generate PDF with correct data and downloadable post-purchase'
        ]
      },
      {
        id: 'api',
        label: 'APIs and integrations',
        items: [
          'TC-API-001: GET /users without auth → 401 Unauthorized with WWW-Authenticate header',
          'TC-API-002: GET /users with expired token → 401 with specific error "Token expired"',
          'TC-API-003: GET /users with another user\'s token → 403 Forbidden',
          'TC-API-004: GET /users/123 with non-existent id → 404 Not Found with clear message',
          'TC-API-005: POST /users with invalid body (missing required field) → 400 with field detail',
          'TC-API-006: POST /users with body exceeding max size → 413 Payload Too Large',
          'TC-API-007: PUT /users/123 with id in path different from body id → 422 with clear message',
          'TC-API-008: DELETE /users/123 → 204 No Content and user not in subsequent GET',
          'TC-API-009: Rate limit exceeded (100 req/min) → 429 with Retry-After header',
          'TC-API-010: API down (5xx) → client retries with exponential backoff',
          'TC-API-011: GET with pagination: ?page=1&limit=20 → returns total metadata and next page',
          'TC-API-012: GET with invalid pagination (page=-1) → 400 or normalizes to page 1',
          'TC-API-013: Combined filters (?status=active&role=admin) → correct logical AND',
          'TC-API-014: Sorting (?sort=-created_at) → descending order correctly',
          'TC-API-015: Search query with special characters (?q=foo+bar) → correct URL encoding',
          'TC-API-016: CORS from authorized origin → correct Access-Control-Allow-Origin header',
          'TC-API-017: CORS preflight OPTIONS → responds with allowed methods',
          'TC-API-018: Webhook received: validates HMAC SHA-256 signature before processing',
          'TC-API-019: Webhook without signature or invalid signature → 401 and logs attempt',
          'TC-API-020: Duplicate webhook (same event_id) → idempotency: doesn\'t process twice',
          'TC-API-021: API versioning: /api/v1 deprecated → Sunset header and Link to v2',
          'TC-API-022: Batch endpoint with 1 successful item and 1 failed → 207 Multi-Status with details',
          'TC-API-023: Long-running operation: 202 Accepted response with status location',
          'TC-API-024: Streaming response (SSE): reconnects after network drop automatically',
          'TC-API-025: GraphQL query with excessive depth → rejects for security',
          'TC-API-026: GraphQL query with unauthorized fields → null on those fields, not global error',
          'TC-API-027: API key revoked by admin → next request 401 immediately',
          'TC-API-028: Idempotency-Key header: same key, second POST returns cached response',
          'TC-API-029: gzip/brotli compression: responds with correct Content-Encoding if Accept-Encoding asks',
          'TC-API-030: ETag and If-None-Match: 304 Not Modified if resource didn\'t change'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Structure of a complete test case',
        body: '<p>A useful test case has minimum structure: <strong>Unique ID, Title, Precondition, Numbered Steps, Input Data, Expected Result, Actual Result and Status</strong>. The ID (TC-AUTH-001) allows traceability in bug trackers. The title describes the action in one line ("Successful login with valid credentials"). The precondition lists what must be ready before ("Existing registered user").</p><p>The <strong>steps</strong> must be executable by any QA without extra context. Bad: "Do normal login". Good: "1. Go to /login. 2. Enter registered email. 3. Enter correct password. 4. Click Sign In button". Each step should have verifiable expected result, not just the final.</p><p>The <strong>expected result</strong> must be specific and testable. Bad: "Works fine". Good: "User is redirected to /dashboard, sees their name in header, and welcome toast notification appears". If you can\'t verify the result mechanically, the case isn\'t useful for automated regression testing.</p>'
      },
      {
        h2: 'Case types: positive, negative and edge cases',
        body: '<p>For each feature you need three types of cases. <strong>Positive</strong> verifies happy path works: "Login with correct credentials works". <strong>Negative</strong> verifies errors are handled well: "Login with wrong password shows clear message without revealing if email exists". <strong>Edge cases</strong> explore limits: "Login with 320-character email (RFC limit) works; 321 characters rejects".</p><p>Boris Beizer\'s rule: <strong>bugs appear at edges</strong>. For each feature, identify limits: what happens with empty string? max-length string? negative numbers? past dates? concurrency? <em>Stripe</em> has tests for "card with 3-digit CVV vs 4-digit (Amex)". Those cases catch regressions happy tests never find.</p><p>A useful technique: <strong>equivalence partitioning</strong>. If your "age" field accepts 0-150, you have 4 partitions: <0 (invalid), 0-17 (minor), 18-150 (valid), >150 (invalid). You need one case per partition, not one per number. That reduces test set without losing coverage. <em>Microsoft</em> and <em>Atlassian</em> use this technique to reduce QA suites from 10000 to 500 cases keeping coverage.</p>'
      },
      {
        h2: 'Common mistakes when writing test cases',
        body: '<p>Mistake #1: <strong>too-abstract cases</strong>. "TC-001: Test login" isn\'t a case, it\'s a feature name. Each case must test ONE specific behavior. If your case has "Test login: valid, invalid, password recovery, 2FA", split it into 4 cases. Each case is atomic, fails for a single identifiable reason.</p><p>Mistake #2: <strong>cases without concrete data</strong>. "Enter wrong password" is ambiguous. What password? Same correct email? How many attempts? Better: "Enter email \'test@example.com\' (registered) and password \'wrongpass123\' (not the correct one)". Specific data makes the case reproducible.</p><p>Mistake #3: <strong>vague expected result</strong>. "Should work" isn\'t a result, it\'s a wish. Better: "Status code 200, response body contains JWT token in access_token field, sessionId cookie set with HttpOnly flag". If your QA automation can\'t assert those results in code, the case isn\'t testable.</p>'
      },
      {
        h2: 'Test cases in BDD (Gherkin) and modern frameworks',
        body: '<p>The <strong>Gherkin</strong> format (Given/When/Then) used in Cucumber, SpecFlow and Behave replaces traditional tabular format with natural language. "Given user is logged in, When user clicks logout, Then session cookie is cleared and redirected to /login". More readable for product managers but requires discipline: each step must have real implementation in code.</p><p>For modern automation, frameworks like <strong>Playwright</strong> and <strong>Cypress</strong> allow coding cases directly: <code>test(\'login works\', async ({ page }) => { await page.goto(\'/login\'); await page.fill(\'#email\', \'test@example.com\'); ... })</code>. Advantage: the test case IS executable code, not separate document. Disadvantage: requires dev skills to maintain.</p><p>Ideal balance: <strong>manual cases in tools like TestRail or Zephyr</strong> for exploratory QA and complex testing, <strong>automated cases in Playwright/Cypress</strong> for critical happy path regression, and <strong>property-based testing with fast-check</strong> for randomly generated edge cases. <em>Stripe</em>, <em>GitHub</em> and <em>Vercel</em> combine all three levels for full coverage without drowning in maintenance.</p>'
      }
    ],
    faq: [
      {
        q: 'How many test cases does a feature need?',
        a: 'Depends on criticality and complexity. A critical auth feature can have 30-50 cases (positive, negative, edge, security). A minor UI feature, 5-10 cases. Rule: cover all critical paths (happy path, common errors, limit edges) and leave out redundant tests that don\'t add new coverage.'
      },
      {
        q: 'Manual or automated cases?',
        a: 'Both. Automate critical repetitive cases (regression, happy paths, smoke tests). Keep manual cases for UX (full flows with human feel), exploratory (discovering unforeseen bugs) and expensive-to-automate (mobile multi-device, complex integrations).'
      },
      {
        q: 'How do I organize hundreds of cases in my team?',
        a: 'Use a dedicated tool: <em>TestRail</em>, <em>Zephyr Scale</em>, <em>Xray</em> (for Jira) or <em>qase.io</em> are standards. Structure by feature (auth, checkout, search) and within by type (positive, negative, edge). Link each case to requirement or user story for traceability.'
      },
      {
        q: 'Who writes test cases?',
        a: 'Ideally QA with input from dev and product manager. Dev knows technical edge cases (concurrency, API errors), PM knows critical business cases, QA structures and maintains the set. When a single person writes cases, perspectives are usually missing and blind spots are generated.'
      }
    ]
  }
};
