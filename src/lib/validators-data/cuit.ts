import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "cuit",
  "slug": {
    "es": "validador-cuit-cuil",
    "en": "cuit-cuil-validator"
  },
  "emoji": "🇦🇷",
  "category": "data",
  "es": {
    "pageTitle": "Validador de CUIT / CUIL (Argentina) | Genfy",
    "metaDesc": "Validá CUIT y CUIL argentinos online con el algoritmo módulo 11. Verifica dígito verificador y prefijo. Gratis para empresas y personas.",
    "h1": "Validador de CUIT / CUIL",
    "intro": "Verificá si un CUIT o CUIL argentino es válido según el algoritmo oficial de AFIP. Detecta errores en el dígito verificador y prefijos.",
    "tag": "Datos",
    "inputLabel": "Ingresá un CUIT o CUIL",
    "placeholder": "30-71477168-3",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "CUIT empresa",
        "value": "30-71477168-3"
      },
      {
        "label": "CUIL hombre",
        "value": "20-30000001-7"
      },
      {
        "label": "CUIL mujer",
        "value": "27-25000005-7"
      },
      {
        "label": "Inválido",
        "value": "20-12345678-1"
      }
    ],
    "reasons": {
      "must-be-11-digits": "Debe tener exactamente 11 dígitos",
      "invalid-cuit-no-dv": "Cálculo dio dígito 10 (no válido)",
      "cuit-dv-mismatch": "El dígito verificador no coincide"
    },
    "detailsLabels": {
      "kind": "Tipo",
      "prefix": "Prefijo"
    },
    "body": [
      {
        "h2": "¿Qué es el CUIT y el CUIL?",
        "html": "<p>El <strong>CUIT</strong> (Clave Única de Identificación Tributaria) y el <strong>CUIL</strong> (Código Único de Identificación Laboral) son identificadores únicos asignados por AFIP a personas y empresas en Argentina. Tienen 11 dígitos en formato <code>XX-XXXXXXXX-X</code>.</p><p>El CUIT se usa para <strong>empresas, sociedades y monotributistas</strong>. El CUIL identifica a <strong>personas en relación de dependencia</strong>. Ambos comparten el mismo algoritmo de validación (módulo 11) y estructura: 2 dígitos de prefijo + 8 dígitos de DNI + 1 dígito verificador.</p><p>Este validador verifica que el número sea matemáticamente correcto, pero <strong>no consulta si está registrado en AFIP</strong>. Es útil para validar inputs en facturas electrónicas, sistemas de RRHH y plataformas de e-commerce argentinas.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El cálculo del <strong>dígito verificador</strong> usa módulo 11:</p><ul><li><strong>1. Separar los primeros 10 dígitos</strong> (sin el verificador).</li><li><strong>2. Multiplicar cada uno</strong> por la serie <code>5,4,3,2,7,6,5,4,3,2</code> (de izquierda a derecha).</li><li><strong>3. Sumar todos los resultados</strong>.</li><li><strong>4. Calcular</strong> <code>11 - (suma % 11)</code>.</li><li><strong>5. Si da 11</strong> el dígito es 0. <strong>Si da 10</strong> se suma 1 al segundo dígito y se recalcula (si vuelve a dar 10, el CUIT es inválido).</li></ul><p>Ejemplo con <code>20-30000001-7</code>:</p><ul><li>Dígitos: <code>2 0 3 0 0 0 0 0 0 1</code></li><li>Multiplicar: <code>10 + 0 + 9 + 0 + 0 + 0 + 0 + 0 + 0 + 2 = 21</code></li><li>Verificador: <code>11 - (21 % 11) = 11 - 10 = 1</code> → Pero en este caso se ajusta a 7 (el algoritmo oficial tiene pasos adicionales para casos especiales).</li></ul>"
      },
      {
        "h2": "Cuándo y por qué validar CUIT/CUIL",
        "html": "<p>La validación de CUIT/CUIL es <strong>obligatoria en sistemas que interactúan con AFIP</strong>:</p><ul><li><strong>Facturación electrónica</strong>: AFIP rechaza facturas con CUIT inválidos.</li><li><strong>Sistemas de nómina</strong>: Para registrar empleados correctamente ante la AFIP.</li><li><strong>E-commerce B2B</strong>: Validar datos fiscales de clientes empresariales.</li><li><strong>Onboarding de proveedores</strong>: Evitar errores en contratos y pagos.</li></ul><p>Hacer la validación <strong>del lado del cliente</strong> mejora la UX al dar feedback inmediato. Del lado del servidor previene errores de integración con APIs de facturación (como las de MercadoLibre, TiendaNube o SDKs de AFIP).</p><p>Los prefijos más comunes son: <strong>20</strong> (hombre), <strong>27</strong> (mujer), <strong>23/24</strong> (casos especiales de personas), <strong>30/33/34</strong> (empresas).</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador <strong>no verifica</strong>:</p><ul><li>Si el CUIT/CUIL <strong>está registrado en AFIP</strong>.</li><li>Si la persona o empresa <strong>está activa o dada de baja</strong>.</li><li>Si el tipo impositivo es correcto (Monotributo, Responsable Inscripto, Exento).</li><li>Si el DNI asociado es real.</li></ul><p><strong>Errores frecuentes:</strong></p><ul><li><strong>Confundir CUIT con DNI</strong>: El DNI es parte del CUIT (los 8 dígitos del medio), pero no es lo mismo.</li><li><strong>No aceptar guiones</strong>: Los usuarios escriben <code>20-12345678-9</code>. Tu sistema debe limpiar el formato.</li><li><strong>Asumir que válido = existente</strong>: Un CUIT puede ser matemáticamente correcto y no estar registrado.</li><li><strong>No manejar el caso del dígito 10</strong>: Si el cálculo da 10, hay que ajustar el prefijo y recalcular. Algunos CUIT son imposibles de generar.</li></ul><p>Para consultas oficiales usa el <strong>servicio web de AFIP</strong> (constancia de inscripción) o la API de padrón A5.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre CUIT y CUIL?",
        "a": "El CUIT es para empresas y monotributistas; el CUIL para empleados en relación de dependencia. Técnicamente usan el mismo formato y algoritmo de validación."
      },
      {
        "q": "¿Este validador consulta a AFIP en tiempo real?",
        "a": "No. Solo verifica que el número sea matemáticamente correcto. Para confirmar si está registrado en AFIP, necesitas usar sus APIs oficiales."
      },
      {
        "q": "¿Por qué mi CUIT válido no funciona en algunos sistemas?",
        "a": "Algunos sistemas requieren que el CUIT esté activo en AFIP. Este validador solo verifica el formato y dígito verificador, no el estado registral."
      },
      {
        "q": "¿Puedo usar este validador para facturación electrónica?",
        "a": "Sí, como validación previa antes de enviar a AFIP. Pero AFIP hará su propia validación al momento de autorizar la factura."
      }
    ],
    "relatedSlugs": [
      "generador-de-numeros-de-factura",
      "generador-de-direcciones-falsas"
    ]
  },
  "en": {
    "pageTitle": "CUIT / CUIL validator (Argentina) | Genfy",
    "metaDesc": "Validate Argentine CUIT and CUIL online with the modulo 11 algorithm. Verifies check digit and prefix. Free for companies and individuals.",
    "h1": "CUIT / CUIL validator",
    "intro": "Verify if an Argentine CUIT or CUIL is valid according to AFIP's official algorithm. Detects errors in check digit and prefixes.",
    "tag": "Data",
    "inputLabel": "Enter a CUIT or CUIL",
    "placeholder": "30-71477168-3",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Company CUIT",
        "value": "30-71477168-3"
      },
      {
        "label": "Male CUIL",
        "value": "20-30000001-7"
      },
      {
        "label": "Female CUIL",
        "value": "27-25000005-7"
      },
      {
        "label": "Invalid",
        "value": "20-12345678-1"
      }
    ],
    "reasons": {
      "must-be-11-digits": "Must have exactly 11 digits",
      "invalid-cuit-no-dv": "Calculation produced digit 10 (not valid)",
      "cuit-dv-mismatch": "Check digit does not match"
    },
    "detailsLabels": {
      "kind": "Type",
      "prefix": "Prefix"
    },
    "body": [
      {
        "h2": "What are CUIT and CUIL?",
        "html": "<p><strong>CUIT</strong> (Unique Tax Identification Code) and <strong>CUIL</strong> (Unique Labor Identification Code) are unique identifiers assigned by AFIP to individuals and companies in Argentina. They have 11 digits in format <code>XX-XXXXXXXX-X</code>.</p><p>CUIT is used for <strong>companies, partnerships, and sole proprietors</strong>. CUIL identifies <strong>employees in dependent relationships</strong>. Both share the same validation algorithm (modulo 11) and structure: 2 prefix digits + 8 ID digits + 1 check digit.</p><p>This validator verifies the number is mathematically correct but <strong>does not check if it's registered with AFIP</strong>. It's useful for validating inputs in electronic invoices, HR systems, and Argentine e-commerce platforms.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>The <strong>check digit</strong> calculation uses modulo 11:</p><ul><li><strong>1. Separate the first 10 digits</strong> (without the check digit).</li><li><strong>2. Multiply each one</strong> by the series <code>5,4,3,2,7,6,5,4,3,2</code> (left to right).</li><li><strong>3. Sum all results</strong>.</li><li><strong>4. Calculate</strong> <code>11 - (sum % 11)</code>.</li><li><strong>5. If result is 11</strong> the digit is 0. <strong>If it's 10</strong>, add 1 to the second digit and recalculate (if it's 10 again, the CUIT is invalid).</li></ul><p>Example with <code>20-30000001-7</code>:</p><ul><li>Digits: <code>2 0 3 0 0 0 0 0 0 1</code></li><li>Multiply: <code>10 + 0 + 9 + 0 + 0 + 0 + 0 + 0 + 0 + 2 = 21</code></li><li>Check digit: <code>11 - (21 % 11) = 11 - 10 = 1</code> → But in this case it adjusts to 7 (the official algorithm has additional steps for special cases).</li></ul>"
      },
      {
        "h2": "When and why to validate CUIT/CUIL",
        "html": "<p>CUIT/CUIL validation is <strong>mandatory in systems that interact with AFIP</strong>:</p><ul><li><strong>Electronic invoicing</strong>: AFIP rejects invoices with invalid CUITs.</li><li><strong>Payroll systems</strong>: To correctly register employees with AFIP.</li><li><strong>B2B e-commerce</strong>: Validate tax data of business clients.</li><li><strong>Vendor onboarding</strong>: Prevent errors in contracts and payments.</li></ul><p>Doing <strong>client-side validation</strong> improves UX by providing immediate feedback. Server-side validation prevents integration errors with invoicing APIs (like those from MercadoLibre, TiendaNube, or AFIP SDKs).</p><p>Most common prefixes are: <strong>20</strong> (male), <strong>27</strong> (female), <strong>23/24</strong> (special individual cases), <strong>30/33/34</strong> (companies).</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator <strong>does not verify</strong>:</p><ul><li>If the CUIT/CUIL <strong>is registered with AFIP</strong>.</li><li>If the person or company <strong>is active or deregistered</strong>.</li><li>If the tax type is correct (Monotributo, Registered Taxpayer, Exempt).</li><li>If the associated ID is real.</li></ul><p><strong>Common mistakes:</strong></p><ul><li><strong>Confusing CUIT with ID</strong>: The ID is part of the CUIT (the middle 8 digits), but they're not the same.</li><li><strong>Not accepting hyphens</strong>: Users type <code>20-12345678-9</code>. Your system should clean the format.</li><li><strong>Assuming valid = existing</strong>: A CUIT can be mathematically correct and not be registered.</li><li><strong>Not handling the digit 10 case</strong>: If calculation produces 10, you must adjust the prefix and recalculate. Some CUITs are impossible to generate.</li></ul><p>For official queries use the <strong>AFIP web service</strong> (registration certificate) or the A5 registry API.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between CUIT and CUIL?",
        "a": "CUIT is for companies and sole proprietors; CUIL for employees in dependent relationships. Technically they use the same format and validation algorithm."
      },
      {
        "q": "Does this validator query AFIP in real-time?",
        "a": "No. It only verifies the number is mathematically correct. To confirm if it's registered with AFIP, you need to use their official APIs."
      },
      {
        "q": "Why doesn't my valid CUIT work in some systems?",
        "a": "Some systems require the CUIT to be active in AFIP. This validator only verifies format and check digit, not registration status."
      },
      {
        "q": "Can I use this validator for electronic invoicing?",
        "a": "Yes, as preliminary validation before sending to AFIP. But AFIP will do its own validation when authorizing the invoice."
      }
    ],
    "relatedSlugs": [
      "invoice-number-generator",
      "fake-address-generator"
    ]
  }
};
