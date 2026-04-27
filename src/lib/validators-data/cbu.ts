import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "cbu",
  "slug": {
    "es": "validador-cbu",
    "en": "cbu-validator"
  },
  "emoji": "💰",
  "category": "data",
  "es": {
    "pageTitle": "Validador de CBU (Argentina) | Genfy",
    "metaDesc": "Validá CBU argentinos al instante. Verifica 22 dígitos con doble checksum: banco+sucursal y cuenta. Detección de errores en tiempo real para transferencias.",
    "h1": "Validador de CBU (Argentina)",
    "intro": "Verificá la Clave Bancaria Uniforme argentina en tiempo real. Validación completa con algoritmo de doble dígito verificador.",
    "tag": "Datos",
    "inputLabel": "Ingresá un CBU",
    "placeholder": "0170099220000067797370",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "CBU válido",
        "value": "0170099220000067797370"
      },
      {
        "label": "Otro válido",
        "value": "2850590940090418135201"
      }
    ],
    "reasons": {
      "must-be-22-digits": "Debe tener exactamente 22 dígitos",
      "block1-dv-mismatch": "El dígito verificador del primer bloque no coincide",
      "block2-dv-mismatch": "El dígito verificador del segundo bloque no coincide"
    },
    "body": [
      {
        "h2": "¿Qué es el CBU argentino?",
        "html": "<p>La <strong>Clave Bancaria Uniforme (CBU)</strong> es el identificador único de cuentas bancarias en Argentina, creado por el Banco Central (BCRA) en 1991 para estandarizar transferencias electrónicas. Consiste en 22 dígitos numéricos que codifican información del banco, sucursal y cuenta.</p><p>El CBU revolucionó el sistema bancario argentino al permitir <strong>transferencias inmediatas</strong> entre distintas entidades sin necesidad de acuerdos bilaterales. Hoy es obligatorio para todas las cuentas bancarias (cajas de ahorro, cuentas corrientes, cuentas sueldo) y fundamental para operaciones de débito automático, acreditación de haberes y pagos digitales.</p><p>Estructura: <code>BBBBSSSCVVVVVVVVVVVVVC</code> donde BBBB es el código de banco, SSS la sucursal, C el primer dígito verificador, V el número de cuenta (13 dígitos) y C el segundo verificador. Esta arquitectura permite validación <strong>sin conexión a servidores</strong>, ideal para sistemas de alto volumen como Mercado Pago, débitos de servicios y homebanking.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El CBU implementa un <strong>sistema de doble verificación</strong> basado en el algoritmo módulo 10 (similar a Luhn pero con ponderaciones específicas):</p><p><strong>Primera verificación (bloque banco-sucursal):</strong></p><ul><li>Se toman los primeros 7 dígitos (BBBBSSS)</li><li>Se multiplican por la secuencia fija: 7, 1, 3, 9, 7, 1, 3</li><li>Se suman los productos y se calcula el resto al dividir por 10</li><li>El dígito verificador (posición 8) debe ser (10 - resto) mod 10</li></ul><p><strong>Segunda verificación (bloque cuenta):</strong></p><ul><li>Se toman los 13 dígitos de cuenta + verificador ya validado (posiciones 9-21)</li><li>Se multiplican por: 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3</li><li>Mismo proceso: suma, resto por 10, comparación con dígito 22</li></ul><p>Este <strong>doble checksum independiente</strong> detecta el 99.8% de errores de transcripción y el 100% de errores de transposición de dígitos adyacentes. El BCRA publica el algoritmo oficial en su normativa de Comunicación A 2779.</p>"
      },
      {
        "h2": "Cuándo y por qué validar un CBU",
        "html": "<p>La validación de CBU es crítica en múltiples operaciones financieras diarias en Argentina:</p><ul><li><strong>Transferencias bancarias</strong>: antes de iniciar una transferencia (débito inmediato, transferencia 3.0), validar evita rechazos que demoran 24-48 horas en revertirse</li><li><strong>Alta de proveedores</strong>: empresas deben validar CBU de proveedores para pagos automáticos, evitando errores que generan problemas fiscales y contables</li><li><strong>Débitos automáticos</strong>: servicios (telefonía, streaming, tarjetas) validan CBU antes de procesar adhesiones para evitar rebotes que penalizan al comercio</li><li><strong>Homebanking y billeteras digitales</strong>: Mercado Pago, Ualá, Naranja X validan CBU en tiempo real al vincular cuentas para prevenir fraudes</li></ul><p>Según datos del BCRA, en 2023 se procesaron más de 2.400 millones de transferencias en Argentina. Validar CBU <strong>antes de enviar</strong> reduce costos de reversión (típicamente $500-1000 por operación fallida) y mejora la experiencia del usuario dramáticamente.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador verifica la <strong>coherencia matemática</strong> del CBU, pero no puede confirmar aspectos operativos:</p><ul><li><strong>No verifica existencia de la cuenta</strong>: un CBU puede ser válido en formato pero no corresponder a una cuenta activa en el banco</li><li><strong>No valida titularidad</strong>: no puede confirmar que el CBU pertenezca a una persona o empresa específica</li><li><strong>No detecta cuentas cerradas</strong>: si una cuenta fue dada de baja, el CBU mantiene su validez matemática</li><li><strong>No verifica bloqueos judiciales</strong>: embargos o inhibiciones no son detectables por validación de formato</li></ul><p><strong>Errores frecuentes</strong>: confundir CBU con CVU (Clave Virtual Uniforme, usada en billeteras digitales como Mercado Pago), copiar CBU con espacios o guiones que algunos sistemas rechazan, usar CBU de prueba (como 0000003100000000000000) en producción. Para validaciones críticas de existencia real, usar APIs de COELSA (la cámara electrónica del BCRA) o servicios bancarios de verificación de cuentas que consultan directamente al banco destino.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre CBU y CVU?",
        "a": "El CBU identifica cuentas bancarias tradicionales. El CVU (Clave Virtual Uniforme) identifica cuentas en billeteras digitales (Mercado Pago, Ualá, etc.). Ambos tienen 22 dígitos y el CVU usa el mismo algoritmo de validación, pero comienza con códigos específicos: 0000007900 para Mercado Pago, 0000003400 para Ualá."
      },
      {
        "q": "¿Por qué mi CBU válido es rechazado en algunas transferencias?",
        "a": "Un CBU matemáticamente válido puede ser rechazado si: la cuenta está cerrada, tiene restricciones judiciales, el banco tiene problemas técnicos, o hay límites de transferencia. La validación de formato solo confirma que la estructura es correcta, no que la cuenta esté operativa."
      },
      {
        "q": "¿Puedo generar CBUs válidos para testing?",
        "a": "Podés calcular dígitos verificadores para generar CBUs sintéticos válidos en formato, pero usar CBUs reales ajenos sin autorización puede violar leyes de protección de datos personales. Para ambientes de prueba, inventá números de cuenta y calculá los verificadores, o usá CBUs de sandbox si tu banco los provee."
      },
      {
        "q": "¿Es seguro compartir mi CBU públicamente?",
        "a": "El CBU solo permite recibir dinero, no extraerlo, así que compartirlo es relativamente seguro. Sin embargo, hacerlo público en redes puede exponerte a: intentos de phishing, recepción de fondos no solicitados que complican auditorías, o asociación de tu identidad con tu banco. Compartilo solo con personas/empresas de confianza."
      }
    ],
    "relatedSlugs": [
      "generador-de-numeros-aleatorios",
      "generador-de-numeros-de-factura"
    ]
  },
  "en": {
    "pageTitle": "CBU Validator (Argentina) | Genfy",
    "metaDesc": "Validate Argentine CBU instantly. Verify 22 digits with double checksum: bank+branch and account. Real-time error detection for transfers.",
    "h1": "CBU Validator (Argentina)",
    "intro": "Verify Argentina's Uniform Banking Code in real-time. Complete validation with double check digit algorithm.",
    "tag": "Data",
    "inputLabel": "Enter a CBU",
    "placeholder": "0170099220000067797370",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid CBU",
        "value": "0170099220000067797370"
      },
      {
        "label": "Another valid",
        "value": "2850590940090418135201"
      }
    ],
    "reasons": {
      "must-be-22-digits": "Must be exactly 22 digits",
      "block1-dv-mismatch": "First block check digit does not match",
      "block2-dv-mismatch": "Second block check digit does not match"
    },
    "body": [
      {
        "h2": "What is the Argentine CBU?",
        "html": "<p>The <strong>Clave Bancaria Uniforme (CBU)</strong> is the unique identifier for bank accounts in Argentina, created by the Central Bank (BCRA) in 1991 to standardize electronic transfers. It consists of 22 numeric digits that encode bank, branch, and account information.</p><p>CBU revolutionized Argentina's banking system by enabling <strong>immediate transfers</strong> between different entities without bilateral agreements. Today it's mandatory for all bank accounts (savings, checking, salary accounts) and essential for automatic debits, salary deposits, and digital payments.</p><p>Structure: <code>BBBBSSSCVVVVVVVVVVVVVC</code> where BBBB is the bank code, SSS the branch, C the first check digit, V the account number (13 digits), and C the second check digit. This architecture enables <strong>offline validation</strong>, ideal for high-volume systems like Mercado Pago, utility debits, and online banking.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>CBU implements a <strong>double verification system</strong> based on the modulo 10 algorithm (similar to Luhn but with specific weightings):</p><p><strong>First verification (bank-branch block):</strong></p><ul><li>Take the first 7 digits (BBBBSSS)</li><li>Multiply by the fixed sequence: 7, 1, 3, 9, 7, 1, 3</li><li>Sum products and calculate remainder when dividing by 10</li><li>The check digit (position 8) must be (10 - remainder) mod 10</li></ul><p><strong>Second verification (account block):</strong></p><ul><li>Take the 13 account digits + already validated check digit (positions 9-21)</li><li>Multiply by: 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3</li><li>Same process: sum, remainder by 10, comparison with digit 22</li></ul><p>This <strong>independent double checksum</strong> detects 99.8% of transcription errors and 100% of adjacent digit transposition errors. BCRA publishes the official algorithm in its Communication A 2779 regulation.</p>"
      },
      {
        "h2": "When and why to validate a CBU",
        "html": "<p>CBU validation is critical in multiple daily financial operations in Argentina:</p><ul><li><strong>Bank transfers</strong>: before initiating a transfer (immediate debit, transfer 3.0), validation avoids rejections that take 24-48 hours to reverse</li><li><strong>Vendor onboarding</strong>: companies must validate vendor CBUs for automatic payments, avoiding errors that create tax and accounting issues</li><li><strong>Automatic debits</strong>: services (telecom, streaming, cards) validate CBU before processing subscriptions to avoid bounces that penalize merchants</li><li><strong>Online banking and digital wallets</strong>: Mercado Pago, Ualá, Naranja X validate CBU in real-time when linking accounts to prevent fraud</li></ul><p>According to BCRA data, over 2.4 billion transfers were processed in Argentina in 2023. Validating CBU <strong>before sending</strong> reduces reversal costs (typically $500-1000 per failed operation) and dramatically improves user experience.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator checks the <strong>mathematical coherence</strong> of CBU, but cannot confirm operational aspects:</p><ul><li><strong>Does not verify account existence</strong>: a CBU can be format-valid but not correspond to an active bank account</li><li><strong>Does not validate ownership</strong>: cannot confirm the CBU belongs to a specific person or company</li><li><strong>Does not detect closed accounts</strong>: if an account was closed, the CBU maintains its mathematical validity</li><li><strong>Does not verify judicial blocks</strong>: embargoes or inhibitions are not detectable by format validation</li></ul><p><strong>Common errors</strong>: confusing CBU with CVU (Virtual Uniform Key, used in digital wallets like Mercado Pago), copying CBU with spaces or hyphens that some systems reject, using test CBUs (like 0000003100000000000000) in production. For critical real-existence validations, use COELSA APIs (BCRA's electronic chamber) or banking account verification services that query the destination bank directly.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between CBU and CVU?",
        "a": "CBU identifies traditional bank accounts. CVU (Virtual Uniform Key) identifies accounts in digital wallets (Mercado Pago, Ualá, etc.). Both have 22 digits and CVU uses the same validation algorithm, but starts with specific codes: 0000007900 for Mercado Pago, 0000003400 for Ualá."
      },
      {
        "q": "Why is my valid CBU rejected in some transfers?",
        "a": "A mathematically valid CBU can be rejected if: the account is closed, has judicial restrictions, the bank has technical issues, or there are transfer limits. Format validation only confirms the structure is correct, not that the account is operational."
      },
      {
        "q": "Can I generate valid CBUs for testing?",
        "a": "You can calculate check digits to generate synthetically format-valid CBUs, but using real others' CBUs without authorization may violate data protection laws. For test environments, invent account numbers and calculate the check digits, or use sandbox CBUs if your bank provides them."
      },
      {
        "q": "Is it safe to share my CBU publicly?",
        "a": "CBU only allows receiving money, not withdrawing it, so sharing it is relatively safe. However, making it public on social media can expose you to: phishing attempts, receiving unsolicited funds that complicate audits, or associating your identity with your bank. Share it only with trusted people/companies."
      }
    ],
    "relatedSlugs": [
      "random-number-generator",
      "invoice-number-generator"
    ]
  }
};
