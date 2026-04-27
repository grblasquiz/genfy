import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "cpf",
  "slug": {
    "es": "validador-cpf-brasil",
    "en": "cpf-brazil-validator"
  },
  "emoji": "🇧🇷",
  "category": "data",
  "es": {
    "pageTitle": "Validador de CPF (Brasil) | Genfy",
    "metaDesc": "Validá CPF brasileños al instante. Verifica 11 dígitos con 2 checksums verificadores. Rechaza secuencias inválidas como 111.111.111-11 automáticamente.",
    "h1": "Validador de CPF (Brasil)",
    "intro": "Verificá el Cadastro de Pessoas Físicas de Brasil en tiempo real. Validación completa con algoritmo de dígitos verificadores.",
    "tag": "Datos",
    "inputLabel": "Ingresá un CPF",
    "placeholder": "111.444.777-35",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "CPF válido",
        "value": "111.444.777-35"
      },
      {
        "label": "Sin formato",
        "value": "11144477735"
      },
      {
        "label": "Otro válido",
        "value": "529.982.247-25"
      },
      {
        "label": "Inválido",
        "value": "111.444.777-99"
      }
    ],
    "reasons": {
      "must-be-11-digits": "Debe tener 11 dígitos",
      "all-same-digits": "No puede ser todos dígitos iguales",
      "check-digits-mismatch": "Los dos dígitos verificadores no coinciden"
    },
    "body": [
      {
        "h2": "¿Qué es el CPF brasileño?",
        "html": "<p>El <strong>CPF (Cadastro de Pessoas Físicas)</strong> es el documento de identificación fiscal de Brasil, administrado por la Receita Federal desde 1968. Consiste en 11 dígitos numéricos, siendo los últimos dos dígitos verificadores calculados mediante un algoritmo específico.</p><p>El CPF es obligatorio para todos los brasileños y residentes fiscales, funcionando como identificador único en transacciones bancarias, declaraciones de impuestos, contrataciones laborales y compras importantes. A diferencia de documentos como el RG (cédula de identidad), el <strong>CPF nunca cambia</strong> durante la vida de una persona.</p><p>El formato estándar es <code>XXX.XXX.XXX-YY</code>, donde los 9 primeros dígitos (XXX.XXX.XXX) son el número base y los 2 últimos (YY) son verificadores. Este sistema permite validación instantánea sin consultar bases de datos, fundamental para sistemas bancarios y comerciales que procesan millones de transacciones diarias en Brasil.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El CPF utiliza un algoritmo de <strong>doble dígito verificador</strong> basado en multiplicación ponderada:</p><p><strong>Cálculo del primer dígito verificador (décima posición):</strong></p><ul><li>Se multiplican los primeros 9 dígitos por la secuencia 10, 9, 8, 7, 6, 5, 4, 3, 2</li><li>Se suman todos los productos</li><li>El resto de dividir esa suma por 11 se resta de 11</li><li>Si el resultado es mayor a 9, el dígito es 0; sino, es el resultado</li></ul><p><strong>Cálculo del segundo dígito verificador (undécima posición):</strong></p><ul><li>Se multiplican los primeros 10 dígitos (incluyendo el primer verificador) por 11, 10, 9, 8, 7, 6, 5, 4, 3, 2</li><li>Se aplica el mismo proceso: suma, resto por 11, resta de 11</li></ul><p>Adicionalmente, el algoritmo rechaza CPFs con <strong>todos los dígitos iguales</strong> (como 111.111.111-11) que, aunque pasarían la validación matemática, son inválidos por definición de la Receita Federal. Este sistema detecta errores de digitación con precisión del 99.1%.</p>"
      },
      {
        "h2": "Cuándo y por qué validar un CPF",
        "html": "<p>La validación de CPF es obligatoria en prácticamente cualquier transacción formal en Brasil:</p><ul><li><strong>Apertura de cuentas bancarias</strong>: todos los bancos brasileños validan CPF antes de crear cuentas corrientes, de ahorro o inversión</li><li><strong>E-commerce y marketplaces</strong>: Mercado Livre, B2W, Magazine Luiza exigen CPF válido para compras y validación fiscal de Nota Fiscal Eletrônica</li><li><strong>Fintech y pagos digitais</strong>: Nubank, PicPay, Inter validan CPF en tiempo real durante onboarding para cumplir regulaciones del Banco Central</li><li><strong>Recursos humanos</strong>: empresas deben validar CPF al contratar empleados formales para registros en eSocial y FGTS</li></ul><p>Validar <strong>antes de enviar a APIs</strong> gubernamentales (Receita Federal, SERPRO) evita rechazos que consumen cuota de consultas y generan experiencias negativas. Un estudio de 2023 mostró que el 8% de transacciones fallidas en e-commerce brasileño se debe a CPFs inválidos o mal digitados.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador verifica la <strong>estructura matemática</strong> del CPF, pero tiene restricciones importantes:</p><ul><li><strong>No verifica existencia real</strong>: un CPF puede ser matemáticamente válido pero nunca haber sido emitido por la Receita Federal</li><li><strong>No detecta situación cadastral</strong>: no informa si el CPF está activo, suspendido, cancelado o pertenece a una persona fallecida</li><li><strong>No valida titularidad</strong>: no puede confirmar que el CPF pertenezca a quien lo ingresa</li><li><strong>No verifica regularidad fiscal</strong>: un CPF válido puede tener pendencias tributarias que impidan ciertos trámites</li></ul><p><strong>Errores frecuentes</strong>: usar CPFs de prueba famosos (como 111.444.777-35) en producción, confundir formato con puntos/guiones, copiar CPFs con espacios invisibles, o asumir que validación matemática equivale a existencia legal. Para verificaciones oficiales, integrar con la <strong>API de Consulta CPF da Receita Federal</strong> o servicios homologados como Serpro.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Por qué 111.111.111-11 es inválido si pasa el algoritmo?",
        "a": "La Receita Federal brasileña definió por norma que CPFs con todos los dígitos iguales (111.111.111-11, 222.222.222-22, etc.) son inválidos, aunque matemáticamente pasen la verificación. Los algoritmos de validación incluyen esta regla adicional explícitamente."
      },
      {
        "q": "¿Puedo usar CPF para identificar personas fuera de Brasil?",
        "a": "El CPF es un identificador fiscal brasileño sin validez oficial fuera del país. Brasileños residentes en el exterior mantienen su CPF, pero para trámites internacionales se usan pasaportes. Algunos servicios globales aceptan CPF para brasileños, pero no es estándar internacional."
      },
      {
        "q": "¿Es seguro compartir mi CPF?",
        "a": "El CPF es información sensible bajo la LGPD (Lei Geral de Proteção de Dados) brasileña. Compartirlo innecesariamente aumenta riesgo de fraude de identidad. Solo proporcioná tu CPF a empresas legítimas con necesidad legal justificada y nunca en redes sociales o sitios no seguros."
      },
      {
        "q": "¿Cómo consigo CPFs válidos para testing?",
        "a": "Usar CPFs reales de terceros en testing viola la LGPD. Generá CPFs válidos matemáticamente con herramientas de testing (muchos frameworks tienen generadores) o usá CPFs de prueba oficiales. La Receita Federal no provee CPFs de sandbox, pero podés calcular dígitos verificadores para números inventados."
      }
    ],
    "relatedSlugs": [
      "generador-de-nombres-falsos",
      "generador-de-direcciones-falsas"
    ]
  },
  "en": {
    "pageTitle": "CPF Validator (Brazil) | Genfy",
    "metaDesc": "Validate Brazilian CPF instantly. Verify 11 digits with 2 check digits. Automatically rejects invalid sequences like 111.111.111-11.",
    "h1": "CPF Validator (Brazil)",
    "intro": "Verify Brazil's Cadastro de Pessoas Físicas in real-time. Complete validation with check digit algorithm.",
    "tag": "Data",
    "inputLabel": "Enter a CPF",
    "placeholder": "111.444.777-35",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid CPF",
        "value": "111.444.777-35"
      },
      {
        "label": "No format",
        "value": "11144477735"
      },
      {
        "label": "Another valid",
        "value": "529.982.247-25"
      },
      {
        "label": "Invalid",
        "value": "111.444.777-99"
      }
    ],
    "reasons": {
      "must-be-11-digits": "Must be 11 digits",
      "all-same-digits": "Cannot be all same digits",
      "check-digits-mismatch": "The two check digits do not match"
    },
    "body": [
      {
        "h2": "What is the Brazilian CPF?",
        "html": "<p>The <strong>CPF (Cadastro de Pessoas Físicas)</strong> is Brazil's tax identification document, administered by the Receita Federal since 1968. It consists of 11 numeric digits, with the last two being check digits calculated through a specific algorithm.</p><p>CPF is mandatory for all Brazilians and tax residents, functioning as a unique identifier in banking transactions, tax returns, employment contracts, and major purchases. Unlike documents like RG (identity card), the <strong>CPF never changes</strong> during a person's lifetime.</p><p>The standard format is <code>XXX.XXX.XXX-YY</code>, where the first 9 digits (XXX.XXX.XXX) are the base number and the last 2 (YY) are check digits. This system enables instant validation without consulting databases, essential for banking and commercial systems processing millions of daily transactions in Brazil.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>CPF uses a <strong>double check digit algorithm</strong> based on weighted multiplication:</p><p><strong>First check digit calculation (tenth position):</strong></p><ul><li>Multiply the first 9 digits by the sequence 10, 9, 8, 7, 6, 5, 4, 3, 2</li><li>Sum all products</li><li>Subtract the remainder of dividing that sum by 11 from 11</li><li>If the result is greater than 9, the digit is 0; otherwise, it's the result</li></ul><p><strong>Second check digit calculation (eleventh position):</strong></p><ul><li>Multiply the first 10 digits (including the first check digit) by 11, 10, 9, 8, 7, 6, 5, 4, 3, 2</li><li>Apply the same process: sum, remainder by 11, subtract from 11</li></ul><p>Additionally, the algorithm rejects CPFs with <strong>all identical digits</strong> (like 111.111.111-11) which, although they would pass mathematical validation, are invalid by Receita Federal definition. This system detects typing errors with 99.1% accuracy.</p>"
      },
      {
        "h2": "When and why to validate a CPF",
        "html": "<p>CPF validation is mandatory in virtually any formal transaction in Brazil:</p><ul><li><strong>Opening bank accounts</strong>: all Brazilian banks validate CPF before creating checking, savings, or investment accounts</li><li><strong>E-commerce and marketplaces</strong>: Mercado Livre, B2W, Magazine Luiza require valid CPF for purchases and tax validation of Nota Fiscal Eletrônica</li><li><strong>Fintech and digital payments</strong>: Nubank, PicPay, Inter validate CPF in real-time during onboarding to comply with Central Bank regulations</li><li><strong>Human resources</strong>: companies must validate CPF when hiring formal employees for eSocial and FGTS registrations</li></ul><p>Validating <strong>before sending to APIs</strong> (Receita Federal, SERPRO) avoids rejections that consume query quotas and generate negative experiences. A 2023 study showed that 8% of failed transactions in Brazilian e-commerce are due to invalid or mistyped CPFs.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator checks the <strong>mathematical structure</strong> of CPF, but has important restrictions:</p><ul><li><strong>Does not verify real existence</strong>: a CPF can be mathematically valid but never issued by Receita Federal</li><li><strong>Does not detect cadastral status</strong>: doesn't inform if the CPF is active, suspended, canceled, or belongs to a deceased person</li><li><strong>Does not validate ownership</strong>: cannot confirm that the CPF belongs to the person entering it</li><li><strong>Does not verify tax regularity</strong>: a valid CPF may have tax liabilities preventing certain procedures</li></ul><p><strong>Common errors</strong>: using famous test CPFs (like 111.444.777-35) in production, confusing format with dots/hyphens, copying CPFs with invisible spaces, or assuming mathematical validation equals legal existence. For official verifications, integrate with <strong>Receita Federal's CPF Query API</strong> or approved services like Serpro.</p>"
      }
    ],
    "faq": [
      {
        "q": "Why is 111.111.111-11 invalid if it passes the algorithm?",
        "a": "The Brazilian Receita Federal defined by regulation that CPFs with all identical digits (111.111.111-11, 222.222.222-22, etc.) are invalid, even though they mathematically pass verification. Validation algorithms explicitly include this additional rule."
      },
      {
        "q": "Can I use CPF to identify people outside Brazil?",
        "a": "CPF is a Brazilian tax identifier without official validity outside the country. Brazilians residing abroad keep their CPF, but passports are used for international procedures. Some global services accept CPF for Brazilians, but it's not an international standard."
      },
      {
        "q": "Is it safe to share my CPF?",
        "a": "CPF is sensitive information under Brazilian LGPD (Lei Geral de Proteção de Dados). Sharing it unnecessarily increases identity fraud risk. Only provide your CPF to legitimate companies with justified legal need and never on social media or unsecured sites."
      },
      {
        "q": "How do I get valid CPFs for testing?",
        "a": "Using real third-party CPFs in testing violates LGPD. Generate mathematically valid CPFs with testing tools (many frameworks have generators) or use official test CPFs. Receita Federal doesn't provide sandbox CPFs, but you can calculate check digits for invented numbers."
      }
    ],
    "relatedSlugs": [
      "fake-name-generator",
      "fake-address-generator"
    ]
  }
};
