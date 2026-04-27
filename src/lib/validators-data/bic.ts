import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "bic",
  "slug": {
    "es": "validador-bic-swift",
    "en": "bic-swift-validator"
  },
  "emoji": "🌍",
  "category": "data",
  "es": {
    "pageTitle": "Validador de BIC / SWIFT | Genfy",
    "metaDesc": "Validá códigos BIC/SWIFT bancarios internacionales al instante. Verifica estructura de 8 u 11 caracteres: banco, país, ubicación y sucursal opcional.",
    "h1": "Validador de BIC / SWIFT",
    "intro": "Verificá códigos de identificación bancaria internacional (BIC/SWIFT) en tiempo real. Validación completa de estructura y formato.",
    "tag": "Datos",
    "inputLabel": "Ingresá un código BIC/SWIFT",
    "placeholder": "DEUTDEFF",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "Deutsche Bank",
        "value": "DEUTDEFF"
      },
      {
        "label": "BBVA España",
        "value": "BBVAESMM"
      },
      {
        "label": "Con sucursal",
        "value": "DEUTDEFF500"
      },
      {
        "label": "Inválido",
        "value": "DEUT1EFF"
      }
    ],
    "reasons": {
      "invalid-format": "Formato BIC inválido (AAAA BB CC [DDD])"
    },
    "detailsLabels": {
      "bank_code": "Banco",
      "country": "País",
      "location": "Ubicación",
      "branch": "Sucursal"
    },
    "body": [
      {
        "h2": "¿Qué es el código BIC/SWIFT?",
        "html": "<p>El <strong>BIC (Bank Identifier Code)</strong>, también conocido como código SWIFT (Society for Worldwide Interbank Financial Telecommunication), es el estándar internacional ISO 9362 para identificar instituciones financieras en transacciones globales. Funciona como un \"DNI bancario\" que permite enviar dinero entre países sin ambigüedades.</p><p>Creado en 1973 por la cooperativa SWIFT con sede en Bélgica, el sistema conecta más de 11,000 instituciones financieras en 200+ países. Cada código BIC identifica de forma única un banco específico, su país y opcionalmente su sucursal, facilitando <strong>transferencias internacionales seguras</strong> y trazables.</p><p>El código contiene entre 8 y 11 caracteres alfanuméricos: 4 letras del banco, 2 del país (ISO 3166), 2 de ubicación (letras o números), y 3 opcionales de sucursal. Por ejemplo, <code>BBVAESMM</code> identifica a BBVA España en Madrid, mientras que <code>BBVAESMM001</code> especificaría una sucursal particular. Este sistema es obligatorio para transferencias SEPA y la mayoría de pagos internacionales.</p>"
      },
      {
        "h2": "Cómo funciona la estructura del código",
        "html": "<p>El BIC/SWIFT tiene una estructura jerárquica precisa definida por ISO 9362:</p><p><strong>Formato de 8 caracteres (BIC8):</strong></p><ul><li><strong>Posiciones 1-4</strong>: código de banco (solo letras). Ej: <code>DEUT</code> para Deutsche Bank</li><li><strong>Posiciones 5-6</strong>: código de país ISO 3166-1 alpha-2. Ej: <code>DE</code> para Alemania</li><li><strong>Posiciones 7-8</strong>: código de ubicación (letras o números). Ej: <code>FF</code> para Frankfurt</li></ul><p><strong>Formato de 11 caracteres (BIC11):</strong></p><ul><li><strong>Posiciones 9-11</strong>: código de sucursal (letras o números). Ej: <code>500</code></li><li>Si es <code>XXX</code> o se omite, indica oficina central del banco</li></ul><p>El código de ubicación puede contener información adicional: si el segundo carácter es <code>0</code>, identifica un código de prueba (testing). Si es <code>1</code>, indica un participante pasivo de SWIFT. Caracteres <code>2-9</code> y <code>A-Z</code> son para uso activo.</p><p>A diferencia de IBAN, el BIC <strong>no tiene dígito verificador matemático</strong>. La validación consiste en verificar que cumpla las reglas de estructura: longitud correcta, primeras 4 posiciones letras, posiciones 5-6 código país válido ISO, y formato general consistente.</p>"
      },
      {
        "h2": "Cuándo y por qué validar un BIC",
        "html": "<p>La validación de BIC es esencial en múltiples operaciones financieras internacionales:</p><ul><li><strong>Transferencias SWIFT/SEPA</strong>: antes de enviar dinero al extranjero, validar el BIC evita rechazos que pueden costar €15-50 en comisiones de devolución</li><li><strong>Configuración de pagos corporativos</strong>: empresas multinacionales deben validar BICs de proveedores internacionales para automatizar pagos globales</li><li><strong>Onboarding bancario internacional</strong>: fintech y bancos digitales requieren BIC al vincular cuentas extranjeras para servicios de transferencias</li><li><strong>Cumplimiento normativo</strong>: regulaciones anti-lavado (AML) exigen verificar BICs en transacciones de alto valor para identificar correctamente instituciones receptoras</li></ul><p>Validar <strong>antes de procesar</strong> reduce errores costosos. Un estudio de SWIFT 2023 muestra que el 4% de pagos internacionales fallan por BIC inválido o incompleto, generando demoras de 3-5 días hábiles. Además, muchas plataformas de pago (Wise, PayPal, Stripe) validan BIC en tiempo real para mejorar tasas de éxito de transferencias.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador verifica la <strong>estructura formal</strong> del BIC, pero tiene limitaciones importantes:</p><ul><li><strong>No verifica existencia real</strong>: un BIC puede tener formato válido pero no corresponder a un banco registrado en SWIFT</li><li><strong>No valida estado activo</strong>: bancos pueden cerrar, fusionarse o cambiar códigos; la validación de formato no detecta estos cambios</li><li><strong>No confirma servicios soportados</strong>: no todos los BICs soportan todos los tipos de transferencias (algunas sucursales solo reciben, no envían)</li><li><strong>Sensible a versión</strong>: BIC8 vs BIC11 pueden generar confusión; algunos sistemas requieren específicamente 11 caracteres con <code>XXX</code> si no hay sucursal</li></ul><p><strong>Errores frecuentes</strong>: confundir BIC con IBAN (son complementarios pero diferentes), usar espacios o guiones no permitidos, copiar códigos de ubicación erróneos (confundir <code>MM</code> con <code>NN</code>), o asumir que todos los bancos grandes tienen BIC único (pueden tener múltiples para distintos servicios). Para verificaciones críticas, consultar el <strong>directorio oficial BIC de SWIFT</strong> disponible via APIs comerciales o la herramienta BIC Search en swift.com para confirmar existencia y detalles del banco.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre BIC y SWIFT?",
        "a": "Son el mismo código. BIC es el nombre técnico del estándar ISO 9362, mientras que SWIFT es el nombre de la red y organización que lo administra. Se usan indistintamente: \"código BIC\", \"código SWIFT\" o \"BIC/SWIFT\" significan lo mismo."
      },
      {
        "q": "¿Necesito BIC si ya tengo IBAN?",
        "a": "Para transferencias SEPA dentro de Europa, solo se requiere IBAN. Pero para transferencias fuera de SEPA o ciertas operaciones internacionales, se necesita BIC + IBAN. Algunos bancos pueden deducir el BIC del IBAN, pero es mejor proporcionarlo explícitamente para evitar errores."
      },
      {
        "q": "¿Por qué algunos BICs tienen 8 caracteres y otros 11?",
        "a": "BIC8 (8 caracteres) identifica la oficina central del banco. BIC11 (11 caracteres) identifica una sucursal específica. Si solo conocés el BIC8, la mayoría de sistemas aceptan agregando XXX al final (ej: BBVAESMM → BBVAESMMXXX) para indicar oficina central."
      },
      {
        "q": "¿Puedo buscar el BIC de un banco si solo tengo su nombre?",
        "a": "Este validador solo verifica formato, no busca códigos. Para encontrar BICs, usá el directorio oficial en swift.com (requiere registro gratuito) o servicios como IBAN.com, Wise.com o el sitio del banco específico. Ten cuidado con directorios no oficiales que pueden tener información desactualizada."
      }
    ],
    "relatedSlugs": [
      "generador-de-direcciones-falsas",
      "generador-de-nombres-de-empresa"
    ]
  },
  "en": {
    "pageTitle": "BIC / SWIFT Validator | Genfy",
    "metaDesc": "Validate international BIC/SWIFT bank codes instantly. Verify 8 or 11 character structure: bank, country, location, and optional branch code.",
    "h1": "BIC / SWIFT Validator",
    "intro": "Verify international bank identification codes (BIC/SWIFT) in real-time. Complete structure and format validation.",
    "tag": "Data",
    "inputLabel": "Enter a BIC/SWIFT code",
    "placeholder": "DEUTDEFF",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Deutsche Bank",
        "value": "DEUTDEFF"
      },
      {
        "label": "BBVA Spain",
        "value": "BBVAESMM"
      },
      {
        "label": "With branch",
        "value": "DEUTDEFF500"
      },
      {
        "label": "Invalid",
        "value": "DEUT1EFF"
      }
    ],
    "reasons": {
      "invalid-format": "Invalid BIC format (AAAA BB CC [DDD])"
    },
    "detailsLabels": {
      "bank_code": "Bank",
      "country": "Country",
      "location": "Location",
      "branch": "Branch"
    },
    "body": [
      {
        "h2": "What is the BIC/SWIFT code?",
        "html": "<p>The <strong>BIC (Bank Identifier Code)</strong>, also known as SWIFT code (Society for Worldwide Interbank Financial Telecommunication), is the ISO 9362 international standard for identifying financial institutions in global transactions. It functions as a \"banking ID\" that enables sending money between countries without ambiguity.</p><p>Created in 1973 by the SWIFT cooperative based in Belgium, the system connects over 11,000 financial institutions in 200+ countries. Each BIC code uniquely identifies a specific bank, its country, and optionally its branch, facilitating <strong>secure and traceable international transfers</strong>.</p><p>The code contains between 8 and 11 alphanumeric characters: 4 bank letters, 2 country letters (ISO 3166), 2 location letters/numbers, and 3 optional branch digits. For example, <code>BBVAESMM</code> identifies BBVA Spain in Madrid, while <code>BBVAESMM001</code> would specify a particular branch. This system is mandatory for SEPA transfers and most international payments.</p>"
      },
      {
        "h2": "How the code structure works",
        "html": "<p>BIC/SWIFT has a precise hierarchical structure defined by ISO 9362:</p><p><strong>8-character format (BIC8):</strong></p><ul><li><strong>Positions 1-4</strong>: bank code (letters only). Ex: <code>DEUT</code> for Deutsche Bank</li><li><strong>Positions 5-6</strong>: ISO 3166-1 alpha-2 country code. Ex: <code>DE</code> for Germany</li><li><strong>Positions 7-8</strong>: location code (letters or numbers). Ex: <code>FF</code> for Frankfurt</li></ul><p><strong>11-character format (BIC11):</strong></p><ul><li><strong>Positions 9-11</strong>: branch code (letters or numbers). Ex: <code>500</code></li><li>If <code>XXX</code> or omitted, indicates bank's head office</li></ul><p>The location code can contain additional information: if the second character is <code>0</code>, it identifies a test code. If it's <code>1</code>, it indicates a SWIFT passive participant. Characters <code>2-9</code> and <code>A-Z</code> are for active use.</p><p>Unlike IBAN, BIC has <strong>no mathematical check digit</strong>. Validation consists of verifying compliance with structure rules: correct length, first 4 positions letters, positions 5-6 valid ISO country code, and consistent general format.</p>"
      },
      {
        "h2": "When and why to validate a BIC",
        "html": "<p>BIC validation is essential in multiple international financial operations:</p><ul><li><strong>SWIFT/SEPA transfers</strong>: before sending money abroad, validating BIC avoids rejections that can cost €15-50 in return fees</li><li><strong>Corporate payment setup</strong>: multinational companies must validate international vendor BICs to automate global payments</li><li><strong>International banking onboarding</strong>: fintech and digital banks require BIC when linking foreign accounts for transfer services</li><li><strong>Regulatory compliance</strong>: anti-money laundering (AML) regulations require verifying BICs in high-value transactions to correctly identify receiving institutions</li></ul><p>Validating <strong>before processing</strong> reduces costly errors. A 2023 SWIFT study shows that 4% of international payments fail due to invalid or incomplete BIC, generating delays of 3-5 business days. Additionally, many payment platforms (Wise, PayPal, Stripe) validate BIC in real-time to improve transfer success rates.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator checks the <strong>formal structure</strong> of BIC, but has important limitations:</p><ul><li><strong>Does not verify real existence</strong>: a BIC can have valid format but not correspond to a SWIFT-registered bank</li><li><strong>Does not validate active status</strong>: banks can close, merge, or change codes; format validation doesn't detect these changes</li><li><strong>Does not confirm supported services</strong>: not all BICs support all transfer types (some branches only receive, don't send)</li><li><strong>Version sensitive</strong>: BIC8 vs BIC11 can cause confusion; some systems specifically require 11 characters with <code>XXX</code> if no branch</li></ul><p><strong>Common errors</strong>: confusing BIC with IBAN (they're complementary but different), using non-permitted spaces or hyphens, copying wrong location codes (confusing <code>MM</code> with <code>NN</code>), or assuming all large banks have a single BIC (they may have multiple for different services). For critical verifications, consult the <strong>official SWIFT BIC directory</strong> available via commercial APIs or the BIC Search tool at swift.com to confirm bank existence and details.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between BIC and SWIFT?",
        "a": "They're the same code. BIC is the technical name of ISO 9362 standard, while SWIFT is the name of the network and organization that administers it. They're used interchangeably: \"BIC code\", \"SWIFT code\", or \"BIC/SWIFT\" all mean the same thing."
      },
      {
        "q": "Do I need BIC if I already have IBAN?",
        "a": "For SEPA transfers within Europe, only IBAN is required. But for transfers outside SEPA or certain international operations, BIC + IBAN are needed. Some banks can deduce BIC from IBAN, but it's better to provide it explicitly to avoid errors."
      },
      {
        "q": "Why do some BICs have 8 characters and others 11?",
        "a": "BIC8 (8 characters) identifies the bank's head office. BIC11 (11 characters) identifies a specific branch. If you only know BIC8, most systems accept adding XXX at the end (ex: BBVAESMM → BBVAESMMXXX) to indicate head office."
      },
      {
        "q": "Can I search for a bank's BIC if I only have its name?",
        "a": "This validator only checks format, doesn't search codes. To find BICs, use the official directory at swift.com (requires free registration) or services like IBAN.com, Wise.com, or the specific bank's website. Be careful with unofficial directories that may have outdated information."
      }
    ],
    "relatedSlugs": [
      "fake-address-generator",
      "business-name-generator"
    ]
  }
};
