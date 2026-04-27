import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "rut-chile",
  "slug": {
    "es": "validador-rut-chile",
    "en": "rut-chile-validator"
  },
  "emoji": "🇨🇱",
  "category": "data",
  "es": {
    "pageTitle": "Validador de RUT chileno | Genfy",
    "metaDesc": "Validá RUT de Chile online con el algoritmo módulo 11. Acepta dígito verificador K. Gratis para personas y empresas.",
    "h1": "Validador de RUT chileno",
    "intro": "Verificá si un RUT (Rol Único Tributario) chileno es válido. Compatible con dígito K y formatos con o sin puntos y guión.",
    "tag": "Datos",
    "inputLabel": "Ingresá un RUT",
    "placeholder": "11.111.111-1",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "RUT válido",
        "value": "11.111.111-1"
      },
      {
        "label": "RUT con K",
        "value": "1234567-K"
      },
      {
        "label": "Sin formato",
        "value": "111111111"
      },
      {
        "label": "Inválido",
        "value": "11.111.111-2"
      }
    ],
    "reasons": {
      "invalid-format": "Formato no válido (ej: 12345678-K)",
      "dv-mismatch": "El dígito verificador no coincide"
    },
    "detailsLabels": {
      "expected_dv": "Dígito esperado"
    },
    "body": [
      {
        "h2": "¿Qué es el RUT chileno?",
        "html": "<p>El <strong>RUT</strong> (Rol Único Tributario) es el identificador único de personas y empresas en Chile, asignado por el Servicio de Impuestos Internos (SII). Tiene entre 7 y 8 dígitos más un <strong>dígito verificador</strong> que puede ser un número (0-9) o la letra <strong>K</strong>.</p><p>El formato estándar es <code>XX.XXX.XXX-X</code> (ej: <code>12.345.678-5</code>), pero también se acepta sin puntos: <code>12345678-5</code>. El guión antes del dígito verificador es obligatorio en documentos oficiales, aunque muchos sistemas lo aceptan sin formato.</p><p>Este validador verifica que el dígito verificador sea correcto según el algoritmo módulo 11, pero <strong>no consulta al SII</strong> si el RUT está registrado o activo. Es útil para formularios web, sistemas de facturación electrónica (SII) y validación de datos en bases.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El cálculo del <strong>dígito verificador</strong> usa módulo 11 con multiplicadores de 2 a 7:</p><ul><li><strong>1. Tomar los dígitos</strong> del RUT (sin el dígito verificador).</li><li><strong>2. Multiplicar cada dígito</strong> de derecha a izquierda por la serie <code>2,3,4,5,6,7,2,3,4...</code> (repitiendo).</li><li><strong>3. Sumar todos los resultados</strong>.</li><li><strong>4. Calcular</strong> <code>11 - (suma % 11)</code>.</li><li><strong>5. Si da 11</strong> el dígito es 0. <strong>Si da 10</strong> el dígito es K.</li></ul><p>Ejemplo con <code>11.111.111-1</code>:</p><ul><li>Dígitos: <code>1 1 1 1 1 1 1 1</code></li><li>Multiplicar: <code>1×2 + 1×3 + 1×4 + 1×5 + 1×6 + 1×7 + 1×2 + 1×3 = 2+3+4+5+6+7+2+3 = 32</code></li><li>Verificador: <code>11 - (32 % 11) = 11 - 10 = 1</code> → Dígito <strong>1</strong> ✓</li></ul><p>Otro ejemplo con <code>1234567-K</code>:</p><ul><li>Cálculo da 10 → <strong>K</strong> ✓</li></ul>"
      },
      {
        "h2": "Cuándo y por qué validar el RUT",
        "html": "<p>La validación de RUT es <strong>esencial en cualquier sistema chileno</strong> que maneje datos tributarios:</p><ul><li><strong>Facturación electrónica</strong>: El SII exige RUT válidos para emitir DTE (Documentos Tributarios Electrónicos).</li><li><strong>E-commerce</strong>: Validar datos de clientes al momento del checkout (especialmente en ventas B2B).</li><li><strong>Sistemas de RRHH</strong>: Registrar empleados con su RUT correcto para cotizaciones previsionales.</li><li><strong>Onboarding de usuarios</strong>: Bancos, fintechs y plataformas digitales validan RUT en el registro.</li></ul><p>Hacer la validación <strong>del lado del cliente</strong> evita envíos inútiles al servidor y mejora UX. Del lado del servidor es crítico antes de integraciones con APIs del SII (facturación, TimbrajeCAF, etc.) o consultas al Registro Civil.</p><p>El SII provee un <strong>servicio web</strong> para verificar actividades económicas asociadas a un RUT, pero requiere autenticación.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador <strong>no verifica</strong>:</p><ul><li>Si el RUT <strong>está registrado en el SII o Registro Civil</strong>.</li><li>Si la persona o empresa <strong>está activa, fallecida o disuelta</strong>.</li><li>Si el RUT corresponde a una persona natural o jurídica.</li><li>Si los datos asociados (nombre, dirección) son correctos.</li></ul><p><strong>Errores frecuentes al implementar validación:</strong></p><ul><li><strong>No soportar la letra K mayúscula/minúscula</strong>: Siempre normalizar a mayúscula antes de validar.</li><li><strong>Rechazar RUT sin puntos</strong>: Los usuarios escriben <code>12345678-5</code> o <code>12.345.678-5</code>. Debes aceptar ambos.</li><li><strong>No validar largo</strong>: El RUT debe tener entre 7 y 9 caracteres (sin contar puntos y guión).</li><li><strong>Confundir RUT con pasaporte</strong>: Los extranjeros sin RUT pueden tener pasaporte (que no se valida con este algoritmo).</li></ul><p>Para consultas oficiales de <strong>existencia y actividades</strong>, usa las APIs del SII o servicios de verificación de identidad certificados.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué significa la K en el RUT?",
        "a": "La K representa el valor 10 en el algoritmo módulo 11. Es un dígito verificador válido, igual que los números 0-9."
      },
      {
        "q": "¿Este validador consulta al Registro Civil?",
        "a": "No. Solo verifica que el dígito verificador sea correcto matemáticamente. No confirma si el RUT existe o está activo."
      },
      {
        "q": "¿Puedo usar este validador para facturación electrónica?",
        "a": "Sí, como validación previa. Pero el SII hará su propia validación al momento de timbrar los documentos tributarios electrónicos (DTE)."
      },
      {
        "q": "¿El RUT y el RUN son lo mismo?",
        "a": "Sí. RUN (Rol Único Nacional) es el identificador de personas naturales; RUT es el tributario. En la práctica se usan indistintamente y comparten el mismo formato."
      }
    ],
    "relatedSlugs": [
      "generador-de-numeros-aleatorios",
      "generador-de-direcciones-falsas"
    ]
  },
  "en": {
    "pageTitle": "Chilean RUT validator | Genfy",
    "metaDesc": "Validate Chilean RUT online with the modulo 11 algorithm. Accepts K check digit. Free for individuals and companies.",
    "h1": "Chilean RUT validator",
    "intro": "Verify if a Chilean RUT (Unique Tax Roll) is valid. Compatible with K digit and formats with or without dots and hyphen.",
    "tag": "Data",
    "inputLabel": "Enter a RUT",
    "placeholder": "11.111.111-1",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid RUT",
        "value": "11.111.111-1"
      },
      {
        "label": "RUT with K",
        "value": "1234567-K"
      },
      {
        "label": "Without format",
        "value": "111111111"
      },
      {
        "label": "Invalid",
        "value": "11.111.111-2"
      }
    ],
    "reasons": {
      "invalid-format": "Invalid format (e.g., 12345678-K)",
      "dv-mismatch": "Check digit does not match"
    },
    "detailsLabels": {
      "expected_dv": "Expected digit"
    },
    "body": [
      {
        "h2": "What is the Chilean RUT?",
        "html": "<p>The <strong>RUT</strong> (Unique Tax Roll) is the unique identifier for individuals and companies in Chile, assigned by the Internal Revenue Service (SII). It has 7 to 8 digits plus a <strong>check digit</strong> that can be a number (0-9) or the letter <strong>K</strong>.</p><p>The standard format is <code>XX.XXX.XXX-X</code> (e.g., <code>12.345.678-5</code>), but it's also accepted without dots: <code>12345678-5</code>. The hyphen before the check digit is mandatory in official documents, though many systems accept it without formatting.</p><p>This validator verifies the check digit is correct according to the modulo 11 algorithm, but <strong>does not query the SII</strong> if the RUT is registered or active. It's useful for web forms, electronic invoicing systems (SII), and data validation in databases.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>The <strong>check digit</strong> calculation uses modulo 11 with multipliers from 2 to 7:</p><ul><li><strong>1. Take the digits</strong> of the RUT (without the check digit).</li><li><strong>2. Multiply each digit</strong> from right to left by the series <code>2,3,4,5,6,7,2,3,4...</code> (repeating).</li><li><strong>3. Sum all results</strong>.</li><li><strong>4. Calculate</strong> <code>11 - (sum % 11)</code>.</li><li><strong>5. If result is 11</strong> the digit is 0. <strong>If it's 10</strong> the digit is K.</li></ul><p>Example with <code>11.111.111-1</code>:</p><ul><li>Digits: <code>1 1 1 1 1 1 1 1</code></li><li>Multiply: <code>1×2 + 1×3 + 1×4 + 1×5 + 1×6 + 1×7 + 1×2 + 1×3 = 2+3+4+5+6+7+2+3 = 32</code></li><li>Check digit: <code>11 - (32 % 11) = 11 - 10 = 1</code> → Digit <strong>1</strong> ✓</li></ul><p>Another example with <code>1234567-K</code>:</p><ul><li>Calculation produces 10 → <strong>K</strong> ✓</li></ul>"
      },
      {
        "h2": "When and why to validate RUT",
        "html": "<p>RUT validation is <strong>essential in any Chilean system</strong> handling tax data:</p><ul><li><strong>Electronic invoicing</strong>: SII requires valid RUTs to issue DTE (Electronic Tax Documents).</li><li><strong>E-commerce</strong>: Validate customer data at checkout (especially in B2B sales).</li><li><strong>HR systems</strong>: Register employees with correct RUT for pension contributions.</li><li><strong>User onboarding</strong>: Banks, fintechs, and digital platforms validate RUT during registration.</li></ul><p>Doing <strong>client-side validation</strong> prevents useless server requests and improves UX. Server-side validation is critical before integrations with SII APIs (invoicing, CAF stamping, etc.) or Civil Registry queries.</p><p>SII provides a <strong>web service</strong> to verify economic activities associated with a RUT, but requires authentication.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator <strong>does not verify</strong>:</p><ul><li>If the RUT <strong>is registered with SII or Civil Registry</strong>.</li><li>If the person or company <strong>is active, deceased, or dissolved</strong>.</li><li>If the RUT corresponds to an individual or legal entity.</li><li>If associated data (name, address) are correct.</li></ul><p><strong>Common implementation mistakes:</strong></p><ul><li><strong>Not supporting uppercase/lowercase K</strong>: Always normalize to uppercase before validating.</li><li><strong>Rejecting RUT without dots</strong>: Users type <code>12345678-5</code> or <code>12.345.678-5</code>. You should accept both.</li><li><strong>Not validating length</strong>: RUT must be 7 to 9 characters (excluding dots and hyphen).</li><li><strong>Confusing RUT with passport</strong>: Foreigners without RUT may have passports (which aren't validated with this algorithm).</li></ul><p>For official queries of <strong>existence and activities</strong>, use SII APIs or certified identity verification services.</p>"
      }
    ],
    "faq": [
      {
        "q": "What does the K in RUT mean?",
        "a": "K represents the value 10 in the modulo 11 algorithm. It's a valid check digit, just like numbers 0-9."
      },
      {
        "q": "Does this validator query the Civil Registry?",
        "a": "No. It only verifies the check digit is mathematically correct. It doesn't confirm if the RUT exists or is active."
      },
      {
        "q": "Can I use this validator for electronic invoicing?",
        "a": "Yes, as preliminary validation. But SII will do its own validation when stamping electronic tax documents (DTE)."
      },
      {
        "q": "Are RUT and RUN the same?",
        "a": "Yes. RUN (National Unique Roll) is the identifier for individuals; RUT is for tax purposes. In practice they're used interchangeably and share the same format."
      }
    ],
    "relatedSlugs": [
      "random-number-generator",
      "fake-address-generator"
    ]
  }
};
