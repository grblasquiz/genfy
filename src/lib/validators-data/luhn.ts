import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "luhn",
  "slug": {
    "es": "validador-tarjeta-credito",
    "en": "credit-card-validator"
  },
  "emoji": "💳",
  "category": "data",
  "es": {
    "pageTitle": "Validador de tarjeta de crédito (Luhn) | Genfy",
    "metaDesc": "Validá números de tarjeta de crédito con el algoritmo de Luhn. Detecta errores tipográficos en Visa, MasterCard, AmEx y más. Gratis y online.",
    "h1": "Validador de tarjeta de crédito (Luhn)",
    "intro": "Verificá si un número de tarjeta tiene formato válido usando el algoritmo de Luhn. Ideal para detectar errores de tipeo en sistemas de pago.",
    "tag": "Datos",
    "inputLabel": "Ingresá un número de tarjeta",
    "placeholder": "4111 1111 1111 1111",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "Visa válida",
        "value": "4111 1111 1111 1111"
      },
      {
        "label": "MasterCard válida",
        "value": "5500 0000 0000 0004"
      },
      {
        "label": "AmEx válida",
        "value": "3400 000000 00009"
      },
      {
        "label": "Inválida (typo)",
        "value": "4111 1111 1111 1112"
      }
    ],
    "reasons": {
      "non-numeric": "Solo dígitos permitidos",
      "length-out-of-range": "Largo fuera de 8-19 dígitos",
      "luhn-checksum-fail": "El checksum Luhn no coincide"
    },
    "detailsLabels": {
      "brand": "Marca",
      "length": "Largo"
    },
    "body": [
      {
        "h2": "¿Qué es el algoritmo de Luhn?",
        "html": "<p>El <strong>algoritmo de Luhn</strong>, también conocido como <em>módulo 10</em>, es una fórmula matemática creada por el científico Hans Peter Luhn en 1954 para IBM. Se usa para validar números de identificación como tarjetas de crédito, débito, números de cuenta y códigos IMEI.</p><p>Este validador <strong>no verifica si la tarjeta existe</strong> ni si tiene fondos. Simplemente confirma que el número cumple con las reglas matemáticas del algoritmo, lo que ayuda a detectar <strong>errores de tipeo</strong> antes de procesar un pago. Es la primera línea de defensa en formularios de comercio electrónico.</p><p>Las principales redes de tarjetas (Visa, MasterCard, American Express, Discover) usan Luhn como estándar. El algoritmo detecta casi todos los errores de transcripción de un solo dígito y la mayoría de transposiciones de dígitos adyacentes.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo paso a paso",
        "html": "<p>El cálculo del <strong>checksum de Luhn</strong> sigue estos pasos:</p><ul><li><strong>1. Partir del último dígito</strong> hacia la izquierda (el check digit).</li><li><strong>2. Duplicar cada segundo dígito</strong> (empezando por el penúltimo). Si el resultado es mayor a 9, restar 9.</li><li><strong>3. Sumar todos los dígitos</strong> (los duplicados y los no modificados).</li><li><strong>4. Si la suma módulo 10 es 0</strong>, el número es válido.</li></ul><p>Ejemplo con <code>4111 1111 1111 1111</code>:</p><ul><li>Partimos de derecha a izquierda: <code>1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4</code></li><li>Duplicamos alternados: <code>1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 8</code></li><li>Reducimos mayores a 9: <code>1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 8</code></li><li>Suma: 1+2+1+2+1+2+1+2+1+2+1+2+1+2+1+8 = 30</li><li>30 % 10 = 0 → <strong>Válido</strong></li></ul>"
      },
      {
        "h2": "Cuándo y por qué validar tarjetas",
        "html": "<p>Validar números de tarjeta <strong>antes de enviarlos al procesador de pagos</strong> ahorra tiempo, dinero y mejora la experiencia del usuario. Los casos más comunes:</p><ul><li><strong>Formularios de checkout</strong>: Detectar typos en tiempo real mientras el usuario escribe.</li><li><strong>Migración de datos</strong>: Limpiar bases de datos de tarjetas mal registradas.</li><li><strong>Testing de integraciones de pago</strong>: Usar números válidos de prueba (como 4111 1111 1111 1111) que pasan Luhn pero no cargan dinero real.</li><li><strong>Prevención de fraude básica</strong>: Rechazar números obviamente inválidos antes de intentar cargos.</li></ul><p>Los pasarelas de pago como Stripe, MercadoPago y PayPal realizan esta validación internamente, pero hacer el <strong>chequeo del lado del cliente</strong> reduce llamadas API innecesarias y da feedback inmediato. Es especialmente útil en apps móviles y SPAs donde la latencia importa.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>El algoritmo de Luhn <strong>no verifica</strong>:</p><ul><li>Si la tarjeta <strong>existe realmente</strong> en el sistema bancario.</li><li>Si está <strong>activa, vencida o bloqueada</strong>.</li><li>Si tiene <strong>fondos suficientes</strong>.</li><li>Si el CVV o fecha de vencimiento son correctos.</li></ul><p><strong>Errores frecuentes al implementar validación:</strong></p><ul><li><strong>Rechazar espacios o guiones</strong>: Los usuarios escriben <code>4111-1111-1111-1111</code>. Deberías limpiar el input antes de validar.</li><li><strong>No identificar la marca</strong>: Visa empieza con 4, MasterCard con 51-55 o 2221-2720, AmEx con 34 o 37. Conocer el prefijo mejora UX (mostrar el logo correcto).</li><li><strong>Confundir validez con autenticidad</strong>: Un número válido según Luhn puede ser inventado. Solo una transacción real confirma que es una tarjeta activa.</li></ul><p>Para <strong>pruebas</strong>, usa números de test oficiales de cada red en lugar de generar aleatorios.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Este validador verifica si tengo saldo en mi tarjeta?",
        "a": "No. Solo confirma que el número cumple el algoritmo de Luhn. No consulta al banco ni verifica saldo, vigencia o si la tarjeta existe."
      },
      {
        "q": "¿Puedo usar este validador para aceptar pagos?",
        "a": "Sí, pero como filtro inicial. Debes usar una pasarela de pago certificada (Stripe, PayPal, etc.) para procesar transacciones reales."
      },
      {
        "q": "¿Por qué mi tarjeta válida muestra 'Inválida'?",
        "a": "Asegurate de ingresar solo los dígitos (sin el nombre del titular ni CVV). Si el problema persiste, podría ser un error de tipeo."
      },
      {
        "q": "¿Funciona con tarjetas de débito y prepagas?",
        "a": "Sí, todas las tarjetas Visa, MasterCard, AmEx, Discover, etc., usan el mismo algoritmo, sean de crédito, débito o prepagas."
      }
    ],
    "relatedSlugs": [
      "generador-de-tarjetas-de-test",
      "generador-de-numeros-aleatorios"
    ]
  },
  "en": {
    "pageTitle": "Credit card validator (Luhn) | Genfy",
    "metaDesc": "Validate credit card numbers with the Luhn algorithm. Detects typos in Visa, MasterCard, AmEx and more. Free and online.",
    "h1": "Credit card validator (Luhn)",
    "intro": "Verify if a card number has valid format using the Luhn algorithm. Ideal for detecting typos in payment systems.",
    "tag": "Data",
    "inputLabel": "Enter a card number",
    "placeholder": "4111 1111 1111 1111",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid Visa",
        "value": "4111 1111 1111 1111"
      },
      {
        "label": "Valid MasterCard",
        "value": "5500 0000 0000 0004"
      },
      {
        "label": "Valid AmEx",
        "value": "3400 000000 00009"
      },
      {
        "label": "Invalid (typo)",
        "value": "4111 1111 1111 1112"
      }
    ],
    "reasons": {
      "non-numeric": "Only digits allowed",
      "length-out-of-range": "Length out of 8-19 digits range",
      "luhn-checksum-fail": "Luhn checksum does not match"
    },
    "detailsLabels": {
      "brand": "Brand",
      "length": "Length"
    },
    "body": [
      {
        "h2": "What is the Luhn algorithm?",
        "html": "<p>The <strong>Luhn algorithm</strong>, also known as <em>modulus 10</em>, is a mathematical formula created by scientist Hans Peter Luhn in 1954 for IBM. It's used to validate identification numbers like credit cards, debit cards, account numbers, and IMEI codes.</p><p>This validator <strong>does not verify if the card exists</strong> or has funds. It simply confirms the number follows the algorithm's mathematical rules, helping detect <strong>typing errors</strong> before processing a payment. It's the first line of defense in e-commerce forms.</p><p>Major card networks (Visa, MasterCard, American Express, Discover) use Luhn as standard. The algorithm catches nearly all single-digit transcription errors and most transpositions of adjacent digits.</p>"
      },
      {
        "h2": "How the algorithm works step by step",
        "html": "<p>The <strong>Luhn checksum</strong> calculation follows these steps:</p><ul><li><strong>1. Start from the last digit</strong> going left (the check digit).</li><li><strong>2. Double every second digit</strong> (starting with the second-to-last). If the result is greater than 9, subtract 9.</li><li><strong>3. Sum all digits</strong> (doubled and unmodified).</li><li><strong>4. If the sum modulo 10 is 0</strong>, the number is valid.</li></ul><p>Example with <code>4111 1111 1111 1111</code>:</p><ul><li>Start right to left: <code>1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4</code></li><li>Double alternates: <code>1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 8</code></li><li>Reduce above 9: <code>1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 8</code></li><li>Sum: 1+2+1+2+1+2+1+2+1+2+1+2+1+2+1+8 = 30</li><li>30 % 10 = 0 → <strong>Valid</strong></li></ul>"
      },
      {
        "h2": "When and why to validate cards",
        "html": "<p>Validating card numbers <strong>before sending to payment processors</strong> saves time, money, and improves user experience. Most common use cases:</p><ul><li><strong>Checkout forms</strong>: Detect typos in real-time as users type.</li><li><strong>Data migration</strong>: Clean databases of incorrectly recorded cards.</li><li><strong>Payment integration testing</strong>: Use valid test numbers (like 4111 1111 1111 1111) that pass Luhn but don't charge real money.</li><li><strong>Basic fraud prevention</strong>: Reject obviously invalid numbers before attempting charges.</li></ul><p>Payment gateways like Stripe, PayPal, and Square perform this validation internally, but doing <strong>client-side checks</strong> reduces unnecessary API calls and provides immediate feedback. It's especially useful in mobile apps and SPAs where latency matters.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>The Luhn algorithm <strong>does not verify</strong>:</p><ul><li>If the card <strong>actually exists</strong> in the banking system.</li><li>If it's <strong>active, expired, or blocked</strong>.</li><li>If it has <strong>sufficient funds</strong>.</li><li>If the CVV or expiration date are correct.</li></ul><p><strong>Common implementation mistakes:</strong></p><ul><li><strong>Rejecting spaces or hyphens</strong>: Users type <code>4111-1111-1111-1111</code>. You should sanitize input before validating.</li><li><strong>Not identifying the brand</strong>: Visa starts with 4, MasterCard with 51-55 or 2221-2720, AmEx with 34 or 37. Knowing the prefix improves UX (showing the correct logo).</li><li><strong>Confusing validity with authenticity</strong>: A Luhn-valid number can be invented. Only an actual transaction confirms it's an active card.</li></ul><p>For <strong>testing</strong>, use official test numbers from each network instead of generating random ones.</p>"
      }
    ],
    "faq": [
      {
        "q": "Does this validator check if I have balance on my card?",
        "a": "No. It only confirms the number follows the Luhn algorithm. It does not query the bank or verify balance, validity, or if the card exists."
      },
      {
        "q": "Can I use this validator to accept payments?",
        "a": "Yes, but as an initial filter. You must use a certified payment gateway (Stripe, PayPal, etc.) to process real transactions."
      },
      {
        "q": "Why does my valid card show 'Invalid'?",
        "a": "Make sure you enter only the digits (without cardholder name or CVV). If the problem persists, it might be a typo."
      },
      {
        "q": "Does it work with debit and prepaid cards?",
        "a": "Yes, all Visa, MasterCard, AmEx, Discover cards, etc., use the same algorithm, whether credit, debit, or prepaid."
      }
    ],
    "relatedSlugs": [
      "test-credit-card-generator",
      "random-number-generator"
    ]
  }
};
