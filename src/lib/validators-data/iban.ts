import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "iban",
  "slug": {
    "es": "validador-iban",
    "en": "iban-validator"
  },
  "emoji": "🏦",
  "category": "data",
  "es": {
    "pageTitle": "Validador de IBAN | Genfy",
    "metaDesc": "Validá números IBAN internacionales al instante. Verificá el formato, checksum mod 97 y país. Soporta todos los estándares IBAN oficiales.",
    "h1": "Validador de IBAN",
    "intro": "Verificá números de cuenta bancaria internacional (IBAN) en tiempo real. Validación completa con algoritmo mod 97.",
    "tag": "Datos",
    "inputLabel": "Ingresá un IBAN",
    "placeholder": "DE89 3704 0044 0532 0130 00",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "DE válido",
        "value": "DE89 3704 0044 0532 0130 00"
      },
      {
        "label": "ES válido",
        "value": "ES91 2100 0418 4502 0005 1332"
      },
      {
        "label": "FR válido",
        "value": "FR14 2004 1010 0505 0001 3M02 606"
      },
      {
        "label": "Inválido",
        "value": "DE89 3704 0044 0532 0130 01"
      }
    ],
    "reasons": {
      "invalid-format": "Formato IBAN inválido",
      "length-out-of-range": "Largo fuera de 15-34 caracteres",
      "checksum-fail": "El checksum mod 97 no coincide"
    },
    "detailsLabels": {
      "country": "País",
      "length": "Largo"
    },
    "body": [
      {
        "h2": "¿Qué es el IBAN?",
        "html": "<p>El <strong>IBAN (International Bank Account Number)</strong> es un estándar internacional para identificar cuentas bancarias de forma única. Creado por el Comité Europeo de Estándares Bancarios y adoptado por ISO 13616, el IBAN facilita las transferencias internacionales eliminando errores de identificación.</p><p>Un IBAN válido contiene entre 15 y 34 caracteres alfanuméricos, comenzando siempre con un código de país de dos letras (por ejemplo, <code>DE</code> para Alemania, <code>ES</code> para España), seguido de dos dígitos de control y el número de cuenta bancaria local.</p><p>La validación del IBAN es crucial para <strong>evitar rechazos de transferencias internacionales</strong>, que pueden generar cargos adicionales y demoras de varios días. Los bancos y plataformas de pago procesan millones de transacciones diarias que dependen de la correcta validación del IBAN.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El IBAN utiliza el <strong>algoritmo mod 97</strong> definido en la norma ISO 7064. El proceso técnico es el siguiente:</p><ul><li>Se remueven espacios y se convierte todo a mayúsculas</li><li>Se mueven los primeros 4 caracteres (código país + dígitos de control) al final</li><li>Cada letra se reemplaza por su valor numérico: A=10, B=11... Z=35</li><li>El número resultante se divide por 97</li><li>Si el resto es 1, el IBAN es válido</li></ul><p>Por ejemplo, para <code>DE89370400440532013000</code>: se reorganiza como <code>370400440532013000DE89</code>, se convierte a <code>370400440532013000131489</code> y el cálculo mod 97 debe dar resto 1.</p><p>Este algoritmo detecta errores de transposición y digitación con una <strong>efectividad del 99.9%</strong>. Además, cada país tiene longitudes específicas validadas por el estándar.</p>"
      },
      {
        "h2": "Cuándo y por qué validar un IBAN",
        "html": "<p>La validación de IBAN es fundamental en múltiples escenarios comerciales y personales:</p><ul><li><strong>Transferencias internacionales SEPA</strong>: antes de enviar dinero a Europa, validar evita rechazos bancarios y comisiones de devolución (€10-30 típicamente)</li><li><strong>Nóminas multinacionales</strong>: empresas con empleados en distintos países deben verificar cada IBAN para garantizar pagos correctos</li><li><strong>Integración de e-commerce</strong>: plataformas que permiten pagos por domiciliación bancaria requieren validación en tiempo real</li><li><strong>Onboarding de clientes</strong>: fintech y bancos digitales validan IBANs durante el alta de usuarios para cumplir KYC</li></ul><p>Validar <strong>antes de procesar</strong> reduce costos operativos significativamente. Un estudio del European Payments Council muestra que las transferencias rechazadas por IBAN inválido representan el 12% de los errores bancarios totales.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador verifica la <strong>estructura matemática</strong> del IBAN, pero tiene limitaciones importantes:</p><ul><li><strong>No verifica existencia real</strong>: un IBAN puede ser válido matemáticamente pero no corresponder a una cuenta activa</li><li><strong>No comprueba titularidad</strong>: no puede confirmar que el IBAN pertenezca a una persona o empresa específica</li><li><strong>No detecta cuentas cerradas</strong>: si una cuenta fue cancelada, el formato sigue siendo válido</li><li><strong>Sensible a formato</strong>: algunos sistemas bancarios rechazan IBANs con espacios o guiones, aunque sean técnicamente correctos</li></ul><p><strong>Errores comunes</strong>: copiar IBANs con caracteres extra (espacios no visibles), confundir la letra O con el número 0, o usar IBANs de países que no han adoptado el estándar (como Estados Unidos). Para validaciones críticas, combinar esta herramienta con verificación bancaria directa mediante APIs como Plaid o TrueLayer.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Todos los países usan IBAN?",
        "a": "No. IBAN es obligatorio en la zona SEPA (Europa) y usado en 77 países. Estados Unidos, Canadá, Australia y China no lo utilizan, prefiriendo sistemas locales como ABA routing numbers o BSB codes."
      },
      {
        "q": "¿Por qué mi IBAN válido es rechazado por el banco?",
        "a": "Un IBAN matemáticamente válido puede no existir en la realidad. El banco receptor puede rechazarlo si la cuenta no existe, está cerrada o tiene restricciones. La validación de formato es solo el primer paso."
      },
      {
        "q": "¿Puedo generar IBANs válidos aleatoriamente?",
        "a": "Técnicamente sí, calculando correctamente los dígitos de control. Pero crear IBANs falsos para pruebas sin autorización puede violar leyes de fraude bancario. Usá siempre IBANs de sandbox oficiales proporcionados por bancos o servicios de pago."
      },
      {
        "q": "¿Los espacios en el IBAN importan?",
        "a": "No para la validación matemática. El estándar ISO permite espacios cada 4 caracteres para legibilidad humana (DE89 3704 0044...), pero el algoritmo los ignora. Sin embargo, algunos sistemas bancarios legacy pueden ser estrictos con el formato exacto."
      }
    ],
    "relatedSlugs": [
      "generador-de-direcciones-falsas",
      "generador-de-numeros-aleatorios"
    ]
  },
  "en": {
    "pageTitle": "IBAN Validator | Genfy",
    "metaDesc": "Validate international IBAN bank account numbers instantly. Check format, mod 97 checksum, and country code. Supports all official IBAN standards.",
    "h1": "IBAN Validator",
    "intro": "Verify international bank account numbers (IBAN) in real-time. Complete validation with mod 97 algorithm.",
    "tag": "Data",
    "inputLabel": "Enter an IBAN",
    "placeholder": "DE89 3704 0044 0532 0130 00",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid DE",
        "value": "DE89 3704 0044 0532 0130 00"
      },
      {
        "label": "Valid ES",
        "value": "ES91 2100 0418 4502 0005 1332"
      },
      {
        "label": "Valid FR",
        "value": "FR14 2004 1010 0505 0001 3M02 606"
      },
      {
        "label": "Invalid",
        "value": "DE89 3704 0044 0532 0130 01"
      }
    ],
    "reasons": {
      "invalid-format": "Invalid IBAN format",
      "length-out-of-range": "Length out of 15-34 characters",
      "checksum-fail": "Mod 97 checksum does not match"
    },
    "detailsLabels": {
      "country": "Country",
      "length": "Length"
    },
    "body": [
      {
        "h2": "What is IBAN?",
        "html": "<p>The <strong>IBAN (International Bank Account Number)</strong> is an international standard for uniquely identifying bank accounts. Created by the European Committee for Banking Standards and adopted by ISO 13616, IBAN facilitates international transfers by eliminating identification errors.</p><p>A valid IBAN contains between 15 and 34 alphanumeric characters, always starting with a two-letter country code (e.g., <code>DE</code> for Germany, <code>ES</code> for Spain), followed by two check digits and the local bank account number.</p><p>IBAN validation is crucial to <strong>avoid international transfer rejections</strong>, which can generate additional charges and delays of several days. Banks and payment platforms process millions of daily transactions that depend on correct IBAN validation.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>IBAN uses the <strong>mod 97 algorithm</strong> defined in ISO 7064 standard. The technical process is:</p><ul><li>Remove spaces and convert to uppercase</li><li>Move the first 4 characters (country code + check digits) to the end</li><li>Replace each letter with its numeric value: A=10, B=11... Z=35</li><li>Divide the resulting number by 97</li><li>If remainder is 1, the IBAN is valid</li></ul><p>For example, for <code>DE89370400440532013000</code>: rearrange as <code>370400440532013000DE89</code>, convert to <code>370400440532013000131489</code>, and the mod 97 calculation must give remainder 1.</p><p>This algorithm detects transposition and typing errors with <strong>99.9% effectiveness</strong>. Additionally, each country has specific lengths validated by the standard.</p>"
      },
      {
        "h2": "When and why to validate an IBAN",
        "html": "<p>IBAN validation is essential in multiple commercial and personal scenarios:</p><ul><li><strong>SEPA international transfers</strong>: before sending money to Europe, validation avoids bank rejections and return fees (typically €10-30)</li><li><strong>Multinational payroll</strong>: companies with employees in different countries must verify each IBAN to guarantee correct payments</li><li><strong>E-commerce integration</strong>: platforms allowing direct debit payments require real-time validation</li><li><strong>Customer onboarding</strong>: fintech and digital banks validate IBANs during user registration to comply with KYC</li></ul><p>Validating <strong>before processing</strong> significantly reduces operational costs. A European Payments Council study shows that transfers rejected due to invalid IBAN represent 12% of total banking errors.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator checks the IBAN's <strong>mathematical structure</strong>, but has important limitations:</p><ul><li><strong>Does not verify real existence</strong>: an IBAN can be mathematically valid but not correspond to an active account</li><li><strong>Does not check ownership</strong>: cannot confirm the IBAN belongs to a specific person or company</li><li><strong>Does not detect closed accounts</strong>: if an account was canceled, the format remains valid</li><li><strong>Format sensitive</strong>: some banking systems reject IBANs with spaces or hyphens, even if technically correct</li></ul><p><strong>Common mistakes</strong>: copying IBANs with extra characters (invisible spaces), confusing letter O with number 0, or using IBANs from countries that haven't adopted the standard (like the United States). For critical validations, combine this tool with direct bank verification via APIs like Plaid or TrueLayer.</p>"
      }
    ],
    "faq": [
      {
        "q": "Do all countries use IBAN?",
        "a": "No. IBAN is mandatory in the SEPA zone (Europe) and used in 77 countries. The United States, Canada, Australia, and China don't use it, preferring local systems like ABA routing numbers or BSB codes."
      },
      {
        "q": "Why is my valid IBAN rejected by the bank?",
        "a": "A mathematically valid IBAN may not exist in reality. The receiving bank can reject it if the account doesn't exist, is closed, or has restrictions. Format validation is only the first step."
      },
      {
        "q": "Can I randomly generate valid IBANs?",
        "a": "Technically yes, by correctly calculating check digits. But creating fake IBANs for testing without authorization can violate banking fraud laws. Always use official sandbox IBANs provided by banks or payment services."
      },
      {
        "q": "Do spaces in the IBAN matter?",
        "a": "Not for mathematical validation. The ISO standard allows spaces every 4 characters for human readability (DE89 3704 0044...), but the algorithm ignores them. However, some legacy banking systems may be strict about exact formatting."
      }
    ],
    "relatedSlugs": [
      "fake-address-generator",
      "random-number-generator"
    ]
  }
};
