import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "dni-es",
  "slug": {
    "es": "validador-dni-espana",
    "en": "dni-spain-validator"
  },
  "emoji": "🇪🇸",
  "category": "data",
  "es": {
    "pageTitle": "Validador de DNI español | Genfy",
    "metaDesc": "Validá DNI de España al instante. Verifica el formato de 8 dígitos + letra y calcula el checksum módulo 23. Incluye NIE y validación de letra correcta.",
    "h1": "Validador de DNI español",
    "intro": "Verificá documentos de identidad españoles en tiempo real. Valida DNI y NIE con algoritmo de letra oficial.",
    "tag": "Datos",
    "inputLabel": "Ingresá un DNI español",
    "placeholder": "12345678Z",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "DNI válido",
        "value": "12345678Z"
      },
      {
        "label": "Otro válido",
        "value": "00000000T"
      },
      {
        "label": "Con guion",
        "value": "11111111-H"
      },
      {
        "label": "Inválido",
        "value": "12345678A"
      }
    ],
    "reasons": {
      "invalid-format": "Formato inválido (8 dígitos + letra)",
      "letter-mismatch": "La letra no coincide con los dígitos"
    },
    "detailsLabels": {
      "expected_letter": "Letra esperada"
    },
    "body": [
      {
        "h2": "¿Qué es el DNI español?",
        "html": "<p>El <strong>Documento Nacional de Identidad (DNI)</strong> es el documento oficial de identificación de ciudadanos españoles, expedido por la Policía Nacional desde 1944. Consta de 8 dígitos numéricos seguidos de una letra de control calculada mediante un algoritmo matemático.</p><p>El DNI es obligatorio para todos los españoles mayores de 14 años y sirve como documento de viaje en la Unión Europea. Su formato único hace posible la <strong>validación automática</strong> sin necesidad de consultar bases de datos oficiales, simplemente verificando que la letra corresponda a los dígitos.</p><p>Además del DNI, existe el <strong>NIE (Número de Identidad de Extranjero)</strong> que sigue el mismo algoritmo pero comienza con las letras X, Y o Z. Ambos documentos son fundamentales para trámites administrativos, bancarios, laborales y fiscales en España.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de la letra",
        "html": "<p>El cálculo de la letra del DNI utiliza un algoritmo <strong>módulo 23</strong> establecido por el Ministerio del Interior español:</p><ul><li>Se toman los 8 dígitos del DNI como número entero</li><li>Se calcula el resto de dividir ese número por 23</li><li>El resultado (0-22) se mapea a una letra según la tabla oficial: <code>TRWAGMYFPDXBNJZSQVHLCKE</code></li><li>Esa letra debe coincidir con la letra del DNI</li></ul><p>Por ejemplo, para el DNI <code>12345678</code>: 12345678 ÷ 23 = 536768 con resto <strong>14</strong>. La posición 14 en la tabla es la letra <strong>Z</strong>, por lo que el DNI completo es <code>12345678Z</code>.</p><p>Para el NIE, las letras iniciales X, Y, Z se reemplazan por 0, 1, 2 respectivamente antes del cálculo. Este sistema detecta errores de transcripción con <strong>altísima precisión</strong> y es imposible de falsificar sin conocer el algoritmo.</p>"
      },
      {
        "h2": "Cuándo y por qué validar un DNI",
        "html": "<p>La validación de DNI es crítica en múltiples contextos legales y comerciales en España:</p><ul><li><strong>Onboarding digital</strong>: bancos, fintech y telcos deben validar DNI durante el alta de clientes para cumplir normativas KYC y prevención de fraude</li><li><strong>Comercio electrónico</strong>: tiendas online verifican DNI en compras de alto valor o envíos a direcciones diferentes a la de facturación</li><li><strong>Recursos humanos</strong>: empresas validan DNI de candidatos antes de contratar, evitando errores administrativos con la Seguridad Social</li><li><strong>Trámites públicos online</strong>: portales de administración electrónica (Cl@ve, Sede Electrónica) requieren DNI válido para acceder a servicios</li></ul><p>Validar <strong>antes de enviar datos</strong> a sistemas backend reduce carga de servidores y mejora la experiencia de usuario. Un estudio de usabilidad muestra que detectar errores de DNI en tiempo real reduce abandonos de formularios en un 23%.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador verifica la <strong>coherencia matemática</strong> del DNI, pero tiene limitaciones legales:</p><ul><li><strong>No verifica vigencia</strong>: un DNI puede ser válido en formato pero estar caducado (los DNI españoles tienen validez de 5-10 años según edad)</li><li><strong>No confirma titularidad</strong>: no puede verificar que el DNI pertenezca a la persona que lo ingresa</li><li><strong>No detecta documentos reportados</strong>: si un DNI fue denunciado como robado, su formato sigue siendo correcto</li><li><strong>Sensible a formato</strong>: algunos sistemas esperan guion (<code>12345678-Z</code>) mientras otros lo rechazan</li></ul><p><strong>Errores frecuentes</strong>: confundir letras similares (O/0, I/1), usar letras minúsculas en sistemas que requieren mayúsculas, o ingresar NIE sin especificar la letra inicial. Para verificaciones oficiales, usar siempre la <strong>plataforma @Firma del Ministerio</strong> o servicios de verificación de identidad homologados por SEPBLAC.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo validar NIE con esta herramienta?",
        "a": "Sí. El NIE (Número de Identidad de Extranjero) usa el mismo algoritmo que el DNI. Las letras iniciales X, Y o Z se convierten a 0, 1, 2 respectivamente, y luego se aplica el mismo cálculo de letra final."
      },
      {
        "q": "¿Por qué mi DNI correcto aparece como inválido?",
        "a": "Revisá que no haya espacios al principio o final, que la letra sea mayúscula, y que no confundas caracteres similares (O con 0, I con 1). Si el DNI físico tiene esos números y letra, el problema puede ser un error de transcripción."
      },
      {
        "q": "¿Es legal validar DNIs de otras personas?",
        "a": "La validación matemática del formato es legal. Pero almacenar, procesar o compartir DNIs ajenos sin consentimiento explícito viola el RGPD europeo y la LOPDGDD española. Solo valida DNIs cuando tengas base legal (contrato, consentimiento, obligación legal)."
      },
      {
        "q": "¿Qué es la tabla TRWAGMYFPDXBNJZSQVHLCKE?",
        "a": "Es la secuencia oficial de 23 letras usada por el Ministerio del Interior para asignar letras de control. Cada posición (0-22) corresponde al resto de la división por 23. No es arbitraria: fue diseñada para maximizar diferencias entre letras consecutivas y evitar confusiones."
      }
    ],
    "relatedSlugs": [
      "generador-de-direcciones-falsas",
      "generador-de-nombres-hispanos"
    ]
  },
  "en": {
    "pageTitle": "Spanish DNI Validator | Genfy",
    "metaDesc": "Validate Spanish DNI instantly. Verify 8 digits + letter format and calculate modulo 23 checksum. Includes NIE validation and correct letter verification.",
    "h1": "Spanish DNI Validator",
    "intro": "Verify Spanish identity documents in real-time. Validate DNI and NIE with official letter algorithm.",
    "tag": "Data",
    "inputLabel": "Enter a Spanish DNI",
    "placeholder": "12345678Z",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid DNI",
        "value": "12345678Z"
      },
      {
        "label": "Another valid",
        "value": "00000000T"
      },
      {
        "label": "With hyphen",
        "value": "11111111-H"
      },
      {
        "label": "Invalid",
        "value": "12345678A"
      }
    ],
    "reasons": {
      "invalid-format": "Invalid format (8 digits + letter)",
      "letter-mismatch": "Letter does not match digits"
    },
    "detailsLabels": {
      "expected_letter": "Expected letter"
    },
    "body": [
      {
        "h2": "What is the Spanish DNI?",
        "html": "<p>The <strong>Documento Nacional de Identidad (DNI)</strong> is the official identification document for Spanish citizens, issued by the National Police since 1944. It consists of 8 numeric digits followed by a check letter calculated through a mathematical algorithm.</p><p>The DNI is mandatory for all Spaniards over 14 years old and serves as a travel document within the European Union. Its unique format enables <strong>automatic validation</strong> without needing to consult official databases, simply by verifying that the letter matches the digits.</p><p>In addition to the DNI, there's the <strong>NIE (Número de Identidad de Extranjero)</strong> which follows the same algorithm but starts with the letters X, Y, or Z. Both documents are essential for administrative, banking, employment, and tax procedures in Spain.</p>"
      },
      {
        "h2": "How the letter algorithm works",
        "html": "<p>The DNI letter calculation uses a <strong>modulo 23 algorithm</strong> established by the Spanish Ministry of the Interior:</p><ul><li>The 8 DNI digits are taken as a whole number</li><li>The remainder of dividing that number by 23 is calculated</li><li>The result (0-22) is mapped to a letter according to the official table: <code>TRWAGMYFPDXBNJZSQVHLCKE</code></li><li>That letter must match the DNI letter</li></ul><p>For example, for DNI <code>12345678</code>: 12345678 ÷ 23 = 536768 with remainder <strong>14</strong>. Position 14 in the table is letter <strong>Z</strong>, so the complete DNI is <code>12345678Z</code>.</p><p>For NIE, the initial letters X, Y, Z are replaced by 0, 1, 2 respectively before calculation. This system detects transcription errors with <strong>very high precision</strong> and is impossible to forge without knowing the algorithm.</p>"
      },
      {
        "h2": "When and why to validate a DNI",
        "html": "<p>DNI validation is critical in multiple legal and commercial contexts in Spain:</p><ul><li><strong>Digital onboarding</strong>: banks, fintech, and telecoms must validate DNI during customer registration to comply with KYC regulations and fraud prevention</li><li><strong>E-commerce</strong>: online stores verify DNI for high-value purchases or shipments to addresses different from billing</li><li><strong>Human resources</strong>: companies validate candidate DNIs before hiring, avoiding administrative errors with Social Security</li><li><strong>Online public procedures</strong>: electronic administration portals (Cl@ve, Sede Electrónica) require valid DNI to access services</li></ul><p>Validating <strong>before sending data</strong> to backend systems reduces server load and improves user experience. A usability study shows that detecting DNI errors in real-time reduces form abandonment by 23%.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator checks the <strong>mathematical coherence</strong> of the DNI, but has legal limitations:</p><ul><li><strong>Does not verify validity</strong>: a DNI can be format-valid but expired (Spanish DNIs are valid for 5-10 years depending on age)</li><li><strong>Does not confirm ownership</strong>: cannot verify that the DNI belongs to the person entering it</li><li><strong>Does not detect reported documents</strong>: if a DNI was reported as stolen, its format remains correct</li><li><strong>Format sensitive</strong>: some systems expect a hyphen (<code>12345678-Z</code>) while others reject it</li></ul><p><strong>Common errors</strong>: confusing similar letters (O/0, I/1), using lowercase letters in systems requiring uppercase, or entering NIE without specifying the initial letter. For official verifications, always use the Ministry's <strong>@Firma platform</strong> or identity verification services approved by SEPBLAC.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I validate NIE with this tool?",
        "a": "Yes. The NIE (Foreigner Identity Number) uses the same algorithm as the DNI. The initial letters X, Y, or Z are converted to 0, 1, 2 respectively, and then the same final letter calculation is applied."
      },
      {
        "q": "Why does my correct DNI appear as invalid?",
        "a": "Check that there are no spaces at the beginning or end, that the letter is uppercase, and that you're not confusing similar characters (O with 0, I with 1). If the physical DNI has those numbers and letter, the problem may be a transcription error."
      },
      {
        "q": "Is it legal to validate other people's DNIs?",
        "a": "Mathematical format validation is legal. But storing, processing, or sharing others' DNIs without explicit consent violates the European GDPR and Spanish LOPDGDD. Only validate DNIs when you have a legal basis (contract, consent, legal obligation)."
      },
      {
        "q": "What is the TRWAGMYFPDXBNJZSQVHLCKE table?",
        "a": "It's the official sequence of 23 letters used by the Ministry of the Interior to assign check letters. Each position (0-22) corresponds to the remainder of division by 23. It's not arbitrary: it was designed to maximize differences between consecutive letters and avoid confusion."
      }
    ],
    "relatedSlugs": [
      "fake-address-generator",
      "hispanic-name-generator"
    ]
  }
};
