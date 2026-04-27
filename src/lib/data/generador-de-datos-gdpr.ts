import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-datos-gdpr",
    "en": "gdpr-compliant-test-data"
  },
  "category": "data",
  "emoji": "🔐",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Datos GDPR | Genfy",
    "metaDesc": "Crea datasets de prueba que cumplen con normativas GDPR. Datos sintéticos realistas sin violar privacidad para testing y desarrollo seguro.",
    "h1": "Generador de Datos GDPR",
    "intro": "Datasets de prueba realistas que cumplen GDPR, CCPA y regulaciones de privacidad. Desde PII anonimizado hasta transacciones sintéticas verificables.",
    "tag": "Datos",
    "filterLabel": "Tipo de dato",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "personal-data",
        "label": "Datos Personales",
        "items": [
          "{\"name\": \"María T. García\", \"email\": \"maria.garcia.7492@testmail.invalid\", \"dob\": \"1985-03-14\", \"id\": \"TEST-ES-85031423X\"}",
          "{\"name\": \"Juan P. Rodríguez\", \"email\": \"juan.rodriguez.3821@testmail.invalid\", \"dob\": \"1992-07-22\", \"id\": \"TEST-ES-92072219Y\"}",
          "{\"name\": \"Ana L. Martínez\", \"email\": \"ana.martinez.6543@testmail.invalid\", \"dob\": \"1978-11-08\", \"id\": \"TEST-ES-78110834Z\"}",
          "{\"name\": \"Carlos M. López\", \"email\": \"carlos.lopez.2109@testmail.invalid\", \"dob\": \"1990-05-19\", \"id\": \"TEST-ES-90051945W\"}",
          "{\"name\": \"Laura S. Fernández\", \"email\": \"laura.fernandez.8765@testmail.invalid\", \"dob\": \"1987-09-30\", \"id\": \"TEST-ES-87093012P\"}",
          "{\"name\": \"Pedro R. González\", \"email\": \"pedro.gonzalez.4321@testmail.invalid\", \"dob\": \"1995-01-12\", \"id\": \"TEST-ES-95011267T\"}",
          "{\"name\": \"Sofía C. Sánchez\", \"email\": \"sofia.sanchez.9876@testmail.invalid\", \"dob\": \"1982-06-25\", \"id\": \"TEST-ES-82062589R\"}",
          "{\"name\": \"Diego A. Romero\", \"email\": \"diego.romero.5432@testmail.invalid\", \"dob\": \"1993-12-03\", \"id\": \"TEST-ES-93120378L\"}",
          "{\"name\": \"Elena F. Torres\", \"email\": \"elena.torres.2345@testmail.invalid\", \"dob\": \"1989-04-17\", \"id\": \"TEST-ES-89041756M\"}",
          "{\"name\": \"Miguel J. Ruiz\", \"email\": \"miguel.ruiz.6789@testmail.invalid\", \"dob\": \"1991-08-29\", \"id\": \"TEST-ES-91082934K\"}"
        ]
      },
      {
        "id": "addresses",
        "label": "Direcciones",
        "items": [
          "{\"street\": \"Calle Test 123\", \"city\": \"Madrid\", \"postal\": \"28001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Avenida Ejemplo 45\", \"city\": \"Barcelona\", \"postal\": \"08002\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Plaza Simulada 67\", \"city\": \"Valencia\", \"postal\": \"46001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Paseo Ficticio 89\", \"city\": \"Sevilla\", \"postal\": \"41001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Ronda Prueba 12\", \"city\": \"Zaragoza\", \"postal\": \"50001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Camino Demo 34\", \"city\": \"Málaga\", \"postal\": \"29001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Vía Temporal 56\", \"city\": \"Murcia\", \"postal\": \"30001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Travesía Falsa 78\", \"city\": \"Palma\", \"postal\": \"07001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Carretera Test 90\", \"city\": \"Bilbao\", \"postal\": \"48001\", \"country\": \"ES\", \"type\": \"synthetic\"}",
          "{\"street\": \"Cuesta Ejemplo 23\", \"city\": \"Alicante\", \"postal\": \"03001\", \"country\": \"ES\", \"type\": \"synthetic\"}"
        ]
      },
      {
        "id": "financial",
        "label": "Datos Financieros",
        "items": [
          "{\"iban\": \"TEST0000000000000000000000\", \"type\": \"checking\", \"currency\": \"EUR\", \"balance\": 1234.56, \"synthetic\": true}",
          "{\"iban\": \"TEST1111111111111111111111\", \"type\": \"savings\", \"currency\": \"EUR\", \"balance\": 5678.90, \"synthetic\": true}",
          "{\"iban\": \"TEST2222222222222222222222\", \"type\": \"checking\", \"currency\": \"EUR\", \"balance\": 9012.34, \"synthetic\": true}",
          "{\"card\": \"4000-TEST-0000-0001\", \"type\": \"credit\", \"exp\": \"12/25\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"card\": \"5000-TEST-0000-0002\", \"type\": \"debit\", \"exp\": \"06/26\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"card\": \"6000-TEST-0000-0003\", \"type\": \"prepaid\", \"exp\": \"09/24\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"crypto\": \"TEST0x1234567890abcdef1234567890abcdef12345678\", \"currency\": \"BTC\", \"synthetic\": true}",
          "{\"crypto\": \"TEST0xabcdef1234567890abcdef1234567890abcdef12\", \"currency\": \"ETH\", \"synthetic\": true}",
          "{\"paypal\": \"test.user.7492@paypal-simulator.invalid\", \"verified\": true, \"synthetic\": true}",
          "{\"paypal\": \"demo.account.3821@paypal-simulator.invalid\", \"verified\": false, \"synthetic\": true}"
        ]
      },
      {
        "id": "health",
        "label": "Datos de Salud",
        "items": [
          "{\"patientId\": \"TEST-PAT-00001\", \"condition\": \"Synthetic condition A\", \"treatment\": \"Protocol X\", \"date\": \"2023-04-15\", \"synthetic\": true}",
          "{\"patientId\": \"TEST-PAT-00002\", \"condition\": \"Simulated condition B\", \"treatment\": \"Protocol Y\", \"date\": \"2023-05-20\", \"synthetic\": true}",
          "{\"patientId\": \"TEST-PAT-00003\", \"condition\": \"Fictional condition C\", \"treatment\": \"Protocol Z\", \"date\": \"2023-06-12\", \"synthetic\": true}",
          "{\"labResult\": \"TEST-LAB-45678\", \"test\": \"Generic Test A\", \"result\": \"Normal range\", \"date\": \"2023-07-08\", \"synthetic\": true}",
          "{\"labResult\": \"TEST-LAB-56789\", \"test\": \"Generic Test B\", \"result\": \"Elevated\", \"date\": \"2023-08-14\", \"synthetic\": true}",
          "{\"prescription\": \"TEST-RX-12345\", \"medication\": \"Synthetic Drug A 50mg\", \"dosage\": \"1x daily\", \"date\": \"2023-09-03\", \"synthetic\": true}",
          "{\"prescription\": \"TEST-RX-23456\", \"medication\": \"Fictional Drug B 100mg\", \"dosage\": \"2x daily\", \"date\": \"2023-10-19\", \"synthetic\": true}",
          "{\"vaccine\": \"TEST-VAC-78901\", \"type\": \"Generic Vaccine A\", \"dose\": 1, \"date\": \"2023-11-22\", \"synthetic\": true}",
          "{\"vaccine\": \"TEST-VAC-89012\", \"type\": \"Simulated Vaccine B\", \"dose\": 2, \"date\": \"2023-12-10\", \"synthetic\": true}",
          "{\"allergy\": \"TEST-ALG-34567\", \"allergen\": \"Synthetic Substance X\", \"severity\": \"moderate\", \"synthetic\": true}"
        ]
      },
      {
        "id": "biometric",
        "label": "Datos Biométricos",
        "items": [
          "{\"fingerprintHash\": \"SHA256:TEST1234567890abcdef\", \"captured\": \"2023-01-15T10:30:00Z\", \"synthetic\": true}",
          "{\"fingerprintHash\": \"SHA256:TESTfedcba0987654321\", \"captured\": \"2023-02-20T14:45:00Z\", \"synthetic\": true}",
          "{\"faceEmbedding\": \"[0.12, -0.34, 0.56, ...synthetic vector...]\", \"model\": \"TestNet-v1\", \"synthetic\": true}",
          "{\"faceEmbedding\": \"[0.78, -0.90, 0.12, ...synthetic vector...]\", \"model\": \"TestNet-v2\", \"synthetic\": true}",
          "{\"voicePrint\": \"MFCC:TEST-0001-synthetic-audio-hash\", \"duration\": 5.3, \"synthetic\": true}",
          "{\"voicePrint\": \"MFCC:TEST-0002-synthetic-audio-hash\", \"duration\": 7.8, \"synthetic\": true}",
          "{\"irisPattern\": \"TEST-IRIS-HASH-abcdef123456\", \"eye\": \"left\", \"synthetic\": true}",
          "{\"irisPattern\": \"TEST-IRIS-HASH-fedcba654321\", \"eye\": \"right\", \"synthetic\": true}",
          "{\"gait\": \"TEST-GAIT-PATTERN-xyz789\", \"confidence\": 0.92, \"synthetic\": true}",
          "{\"retinaScan\": \"TEST-RETINA-SCAN-qwerty456\", \"resolution\": \"2048x2048\", \"synthetic\": true}"
        ]
      },
      {
        "id": "behavioral",
        "label": "Datos de Comportamiento",
        "items": [
          "{\"sessionId\": \"TEST-SESS-001\", \"duration\": 1847, \"pages\": 12, \"clicks\": 34, \"device\": \"synthetic-device-A\", \"synthetic\": true}",
          "{\"sessionId\": \"TEST-SESS-002\", \"duration\": 923, \"pages\": 7, \"clicks\": 19, \"device\": \"synthetic-device-B\", \"synthetic\": true}",
          "{\"sessionId\": \"TEST-SESS-003\", \"duration\": 2341, \"pages\": 15, \"clicks\": 42, \"device\": \"synthetic-device-C\", \"synthetic\": true}",
          "{\"searchQuery\": \"synthetic query A\", \"timestamp\": \"2023-11-15T09:23:00Z\", \"results\": 234, \"synthetic\": true}",
          "{\"searchQuery\": \"simulated query B\", \"timestamp\": \"2023-11-16T14:37:00Z\", \"results\": 567, \"synthetic\": true}",
          "{\"purchase\": \"TEST-ORDER-45678\", \"items\": 3, \"total\": 89.99, \"category\": \"synthetic-category-X\", \"synthetic\": true}",
          "{\"purchase\": \"TEST-ORDER-56789\", \"items\": 1, \"total\": 149.99, \"category\": \"synthetic-category-Y\", \"synthetic\": true}",
          "{\"location\": {\"lat\": 40.4168, \"lon\": -3.7038}, \"accuracy\": 50, \"timestamp\": \"2023-10-20T12:00:00Z\", \"synthetic\": true}",
          "{\"location\": {\"lat\": 41.3851, \"lon\": 2.1734}, \"accuracy\": 30, \"timestamp\": \"2023-10-21T15:30:00Z\", \"synthetic\": true}",
          "{\"appUsage\": \"synthetic-app-alpha\", \"openCount\": 47, \"totalTime\": 3421, \"lastUsed\": \"2023-12-05\", \"synthetic\": true}"
        ]
      },
      {
        "id": "children",
        "label": "Datos de Menores",
        "items": [
          "{\"childId\": \"TEST-CHILD-001\", \"age\": 8, \"parentConsent\": true, \"consentDate\": \"2023-09-01\", \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-002\", \"age\": 12, \"parentConsent\": true, \"consentDate\": \"2023-09-15\", \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-003\", \"age\": 6, \"parentConsent\": false, \"consentDate\": null, \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-004\", \"age\": 10, \"parentConsent\": true, \"consentDate\": \"2023-10-01\", \"synthetic\": true}",
          "{\"schoolRecord\": \"TEST-EDU-567\", \"grade\": \"4th\", \"school\": \"Synthetic School A\", \"synthetic\": true}",
          "{\"schoolRecord\": \"TEST-EDU-678\", \"grade\": \"6th\", \"school\": \"Simulated School B\", \"synthetic\": true}",
          "{\"activity\": \"TEST-ACTIVITY-789\", \"type\": \"Educational game\", \"duration\": 45, \"date\": \"2023-11-10\", \"synthetic\": true}",
          "{\"activity\": \"TEST-ACTIVITY-890\", \"type\": \"Reading app\", \"duration\": 30, \"date\": \"2023-11-12\", \"synthetic\": true}",
          "{\"parentEmail\": \"parent.test.001@testmail.invalid\", \"verified\": true, \"relationshipProof\": \"TEST-DOC-123\", \"synthetic\": true}",
          "{\"parentEmail\": \"parent.test.002@testmail.invalid\", \"verified\": true, \"relationshipProof\": \"TEST-DOC-456\", \"synthetic\": true}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Características de datos GDPR-compliant",
        "body": "<p>Datos sintéticos <strong>no son anonimizados</strong>; son <em>fabricados desde cero</em> sin origen en personas reales. Esto es crítico: el GDPR define PII como información que identifica a individuos reales. Un dataset sintético con <code>name: 'María T. García'</code> y <code>email: maria.garcia.7492@testmail.invalid</code> no viola GDPR porque ninguna María García real tiene ese email ni ese patrón específico.</p><p>Marcadores clave para distinguir datos sintéticos: <strong>1)</strong> TLD .invalid (RFC 6761, garantizado a no resolver), <strong>2)</strong> prefijos TEST- en IDs, <strong>3)</strong> flag explícito <code>\"synthetic\": true</code> en JSON. Esto previene que datos de prueba se mezclen accidentalmente con producción.</p><p>Error común: usar datos reales 'ofuscados' (cambiar Juan Pérez a J**n P***z). Eso sigue siendo PII procesado sin consentimiento. Datos sintéticos deben generarse algorítmicamente con distribuciones estadísticas realistas pero sin mapeo 1:1 a personas reales. Un IBAN sintético debe pasar validación de checksum sin corresponder a cuenta bancaria existente.</p>"
      },
      {
        "h2": "Generar datos realistas sin violar privacidad",
        "body": "<p>Las bibliotecas como <strong>Faker</strong> (Python/JS/PHP) generan datos plausibles: nombres comunes por país, direcciones con formato correcto, números de tarjeta que pasan algoritmo de Luhn. Pero configurá locales correctamente: <code>Faker('es_ES')</code> genera 'García' y 'Rodríguez', no 'Smith' y 'Johnson'.</p><p>Para datos financieros, usá rangos de prueba oficiales: tarjetas 4000-xxxx-xxxx-xxxx (Visa test), 5555-xxxx-xxxx-xxxx (Mastercard test). Los procesadores de pago garantizan que estos números nunca se asignan a clientes reales. IBANs sintéticos: estructura válida con códigos de país correctos pero BIC/SWIFT de bancos de prueba.</p><p>Datos de salud requieren <strong>cuidado extra</strong> por regulaciones adicionales (HIPAA en US, Ley 41/2002 en España). Generá condiciones médicas genéricas ('Synthetic condition A') en lugar de diagnósticos específicos. Para labs, usá rangos de referencia estándar pero no valores de pacientes reales. Nunca uses historiales clínicos anonimizados: el re-identification es trivial con suficientes datapoints.</p>"
      },
      {
        "h2": "Estrategias de anonimización vs. datos sintéticos",
        "body": "<p><strong>Anonimización</strong> parte de datos reales y aplica técnicas para eliminar PII: k-anonymity (cada registro es indistinguible de al menos k-1 otros), l-diversity (atributos sensibles tienen al menos l valores distintos), differential privacy (agregar ruido matemáticamente garantizado). Pero anonimización <em>perfecta</em> es casi imposible; estudios muestran re-identificación con solo 3-4 atributos cuasi-identificadores.</p><p><strong>Datos sintéticos</strong> evitan este problema generando distribuciones estadísticamente similares sin individuos reales. Herramientas como <strong>Synthpop</strong> (R) o <strong>SDV</strong> (Python) aprenden la estructura de datos reales y generan nuevos registros que mantienen correlaciones sin identidades. Un dataset de transacciones sintéticas preserva patrones de compra (correlación entre productos, temporalidad) pero ninguna fila corresponde a cliente real.</p><p>Cuándo usar cada approach: anonimización para análisis estadístico agregado donde necesitas propiedades exactas del dataset original. Sintéticos para testing/desarrollo donde necesitas volumen y variedad sin riesgo legal. Para training de ML, sintéticos evitan bias de muestreo que introduce la anonimización al eliminar outliers para garantizar k-anonymity.</p>"
      },
      {
        "h2": "Compliance y auditoría de datasets de prueba",
        "body": "<p>Documentá el origen sintético en metadata: cada dataset debe incluir <code>generation_method</code>, <code>date_generated</code>, <code>source_algorithm</code>. En auditorías GDPR (Art. 30 obligaciones de registro), debés demostrar que datos de testing no son PII. Un archivo README con: <em>\"Este dataset fue generado usando Faker 8.0 con seed determinista X para reproducibilidad. Ningún registro corresponde a persona, lugar o entidad real.\"</em></p><p>Implementá <strong>data lineage tracking</strong>: si un bug permite que datos sintéticos se copien a producción, necesitás detectarlo rápido. Configurá alertas cuando campos con <code>\"synthetic\": true</code> aparecen en bases de datos de producción. Herramientas de data governance como Apache Atlas o Collibra pueden tagear automáticamente datasets sintéticos.</p><p>Para datos de menores (Art. 8 GDPR), incluí campos de <code>parental_consent</code> incluso en sintéticos para testear flujos de verificación. Si tu app procesa datos de menores de 16 años, el testing debe cubrir escenarios con/sin consentimiento parental. Datos sintéticos permiten generar edge cases (menor de 13 con consentimiento en jurisdicción que requiere 16) sin involucrar niños reales.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar datos sintéticos en producción?",
        "a": "Técnicamente sí (no son PII), pero es peligroso: si se mezclan con datos reales, comprometes integridad. Mejor: ambientes separados con marcadores claros que previenen migración accidental."
      },
      {
        "q": "¿Datos sintéticos requieren consentimiento GDPR?",
        "a": "No. El Art. 4(1) define datos personales como información de individuos identificados o identificables. Datos sintéticos por definición no identifican a nadie real, por ende no son PII."
      },
      {
        "q": "¿Cómo testear flujos de derecho al olvido (Right to Erasure)?",
        "a": "Generá identidades sintéticas con IDs trazables (TEST-USER-001). Implementá lógica de borrado igual que con usuarios reales. Verificá que logs, backups y caches también eliminan el registro sintético."
      },
      {
        "q": "¿Los datos sintéticos protegen contra re-identificación?",
        "a": "Solo si están bien generados. Datos sintéticos naïve (nombres random + fechas random) pueden crear combinaciones imposibles que facilitan detección de registros sintéticos vs. reales. Usá herramientas que preservan correlaciones estadísticas."
      }
    ]
  },
  "en": {
    "pageTitle": "GDPR Compliant Test Data Generator | Genfy",
    "metaDesc": "Create GDPR-compliant test datasets for development. Realistic synthetic data without violating privacy regulations for secure testing environments.",
    "h1": "GDPR Compliant Test Data",
    "intro": "Realistic test datasets compliant with GDPR, CCPA and privacy regulations. From anonymized PII to verifiable synthetic transactions.",
    "tag": "Data",
    "filterLabel": "Data type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "personal-data",
        "label": "Personal Data",
        "items": [
          "{\"name\": \"John M. Smith\", \"email\": \"john.smith.7492@testmail.invalid\", \"dob\": \"1985-03-14\", \"id\": \"TEST-US-85031423X\"}",
          "{\"name\": \"Sarah P. Johnson\", \"email\": \"sarah.johnson.3821@testmail.invalid\", \"dob\": \"1992-07-22\", \"id\": \"TEST-US-92072219Y\"}",
          "{\"name\": \"Michael L. Williams\", \"email\": \"michael.williams.6543@testmail.invalid\", \"dob\": \"1978-11-08\", \"id\": \"TEST-US-78110834Z\"}",
          "{\"name\": \"Emily R. Brown\", \"email\": \"emily.brown.2109@testmail.invalid\", \"dob\": \"1990-05-19\", \"id\": \"TEST-US-90051945W\"}",
          "{\"name\": \"David S. Jones\", \"email\": \"david.jones.8765@testmail.invalid\", \"dob\": \"1987-09-30\", \"id\": \"TEST-US-87093012P\"}",
          "{\"name\": \"Jessica C. Garcia\", \"email\": \"jessica.garcia.4321@testmail.invalid\", \"dob\": \"1995-01-12\", \"id\": \"TEST-US-95011267T\"}",
          "{\"name\": \"James A. Martinez\", \"email\": \"james.martinez.9876@testmail.invalid\", \"dob\": \"1982-06-25\", \"id\": \"TEST-US-82062589R\"}",
          "{\"name\": \"Jennifer F. Rodriguez\", \"email\": \"jennifer.rodriguez.5432@testmail.invalid\", \"dob\": \"1993-12-03\", \"id\": \"TEST-US-93120378L\"}",
          "{\"name\": \"Robert K. Wilson\", \"email\": \"robert.wilson.2345@testmail.invalid\", \"dob\": \"1989-04-17\", \"id\": \"TEST-US-89041756M\"}",
          "{\"name\": \"Linda T. Anderson\", \"email\": \"linda.anderson.6789@testmail.invalid\", \"dob\": \"1991-08-29\", \"id\": \"TEST-US-91082934K\"}"
        ]
      },
      {
        "id": "addresses",
        "label": "Addresses",
        "items": [
          "{\"street\": \"123 Test Street\", \"city\": \"New York\", \"postal\": \"10001\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"456 Example Ave\", \"city\": \"Los Angeles\", \"postal\": \"90001\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"789 Sample Blvd\", \"city\": \"Chicago\", \"postal\": \"60601\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"321 Demo Road\", \"city\": \"Houston\", \"postal\": \"77001\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"654 Fake Lane\", \"city\": \"Phoenix\", \"postal\": \"85001\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"987 Mock Drive\", \"city\": \"Philadelphia\", \"postal\": \"19019\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"147 Dummy Court\", \"city\": \"San Antonio\", \"postal\": \"78201\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"258 Simulated Way\", \"city\": \"San Diego\", \"postal\": \"92101\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"369 Fictional Path\", \"city\": \"Dallas\", \"postal\": \"75201\", \"country\": \"US\", \"type\": \"synthetic\"}",
          "{\"street\": \"741 Placeholder Circle\", \"city\": \"San Jose\", \"postal\": \"95101\", \"country\": \"US\", \"type\": \"synthetic\"}"
        ]
      },
      {
        "id": "financial",
        "label": "Financial Data",
        "items": [
          "{\"iban\": \"TEST0000000000000000000000\", \"type\": \"checking\", \"currency\": \"USD\", \"balance\": 1234.56, \"synthetic\": true}",
          "{\"iban\": \"TEST1111111111111111111111\", \"type\": \"savings\", \"currency\": \"USD\", \"balance\": 5678.90, \"synthetic\": true}",
          "{\"iban\": \"TEST2222222222222222222222\", \"type\": \"checking\", \"currency\": \"USD\", \"balance\": 9012.34, \"synthetic\": true}",
          "{\"card\": \"4000-TEST-0000-0001\", \"type\": \"credit\", \"exp\": \"12/25\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"card\": \"5000-TEST-0000-0002\", \"type\": \"debit\", \"exp\": \"06/26\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"card\": \"6000-TEST-0000-0003\", \"type\": \"prepaid\", \"exp\": \"09/24\", \"cvv\": \"XXX\", \"synthetic\": true}",
          "{\"crypto\": \"TEST0x1234567890abcdef1234567890abcdef12345678\", \"currency\": \"BTC\", \"synthetic\": true}",
          "{\"crypto\": \"TEST0xabcdef1234567890abcdef1234567890abcdef12\", \"currency\": \"ETH\", \"synthetic\": true}",
          "{\"paypal\": \"test.user.7492@paypal-simulator.invalid\", \"verified\": true, \"synthetic\": true}",
          "{\"paypal\": \"demo.account.3821@paypal-simulator.invalid\", \"verified\": false, \"synthetic\": true}"
        ]
      },
      {
        "id": "health",
        "label": "Health Data",
        "items": [
          "{\"patientId\": \"TEST-PAT-00001\", \"condition\": \"Synthetic condition A\", \"treatment\": \"Protocol X\", \"date\": \"2023-04-15\", \"synthetic\": true}",
          "{\"patientId\": \"TEST-PAT-00002\", \"condition\": \"Simulated condition B\", \"treatment\": \"Protocol Y\", \"date\": \"2023-05-20\", \"synthetic\": true}",
          "{\"patientId\": \"TEST-PAT-00003\", \"condition\": \"Fictional condition C\", \"treatment\": \"Protocol Z\", \"date\": \"2023-06-12\", \"synthetic\": true}",
          "{\"labResult\": \"TEST-LAB-45678\", \"test\": \"Generic Test A\", \"result\": \"Normal range\", \"date\": \"2023-07-08\", \"synthetic\": true}",
          "{\"labResult\": \"TEST-LAB-56789\", \"test\": \"Generic Test B\", \"result\": \"Elevated\", \"date\": \"2023-08-14\", \"synthetic\": true}",
          "{\"prescription\": \"TEST-RX-12345\", \"medication\": \"Synthetic Drug A 50mg\", \"dosage\": \"1x daily\", \"date\": \"2023-09-03\", \"synthetic\": true}",
          "{\"prescription\": \"TEST-RX-23456\", \"medication\": \"Fictional Drug B 100mg\", \"dosage\": \"2x daily\", \"date\": \"2023-10-19\", \"synthetic\": true}",
          "{\"vaccine\": \"TEST-VAC-78901\", \"type\": \"Generic Vaccine A\", \"dose\": 1, \"date\": \"2023-11-22\", \"synthetic\": true}",
          "{\"vaccine\": \"TEST-VAC-89012\", \"type\": \"Simulated Vaccine B\", \"dose\": 2, \"date\": \"2023-12-10\", \"synthetic\": true}",
          "{\"allergy\": \"TEST-ALG-34567\", \"allergen\": \"Synthetic Substance X\", \"severity\": \"moderate\", \"synthetic\": true}"
        ]
      },
      {
        "id": "biometric",
        "label": "Biometric Data",
        "items": [
          "{\"fingerprintHash\": \"SHA256:TEST1234567890abcdef\", \"captured\": \"2023-01-15T10:30:00Z\", \"synthetic\": true}",
          "{\"fingerprintHash\": \"SHA256:TESTfedcba0987654321\", \"captured\": \"2023-02-20T14:45:00Z\", \"synthetic\": true}",
          "{\"faceEmbedding\": \"[0.12, -0.34, 0.56, ...synthetic vector...]\", \"model\": \"TestNet-v1\", \"synthetic\": true}",
          "{\"faceEmbedding\": \"[0.78, -0.90, 0.12, ...synthetic vector...]\", \"model\": \"TestNet-v2\", \"synthetic\": true}",
          "{\"voicePrint\": \"MFCC:TEST-0001-synthetic-audio-hash\", \"duration\": 5.3, \"synthetic\": true}",
          "{\"voicePrint\": \"MFCC:TEST-0002-synthetic-audio-hash\", \"duration\": 7.8, \"synthetic\": true}",
          "{\"irisPattern\": \"TEST-IRIS-HASH-abcdef123456\", \"eye\": \"left\", \"synthetic\": true}",
          "{\"irisPattern\": \"TEST-IRIS-HASH-fedcba654321\", \"eye\": \"right\", \"synthetic\": true}",
          "{\"gait\": \"TEST-GAIT-PATTERN-xyz789\", \"confidence\": 0.92, \"synthetic\": true}",
          "{\"retinaScan\": \"TEST-RETINA-SCAN-qwerty456\", \"resolution\": \"2048x2048\", \"synthetic\": true}"
        ]
      },
      {
        "id": "behavioral",
        "label": "Behavioral Data",
        "items": [
          "{\"sessionId\": \"TEST-SESS-001\", \"duration\": 1847, \"pages\": 12, \"clicks\": 34, \"device\": \"synthetic-device-A\", \"synthetic\": true}",
          "{\"sessionId\": \"TEST-SESS-002\", \"duration\": 923, \"pages\": 7, \"clicks\": 19, \"device\": \"synthetic-device-B\", \"synthetic\": true}",
          "{\"sessionId\": \"TEST-SESS-003\", \"duration\": 2341, \"pages\": 15, \"clicks\": 42, \"device\": \"synthetic-device-C\", \"synthetic\": true}",
          "{\"searchQuery\": \"synthetic query A\", \"timestamp\": \"2023-11-15T09:23:00Z\", \"results\": 234, \"synthetic\": true}",
          "{\"searchQuery\": \"simulated query B\", \"timestamp\": \"2023-11-16T14:37:00Z\", \"results\": 567, \"synthetic\": true}",
          "{\"purchase\": \"TEST-ORDER-45678\", \"items\": 3, \"total\": 89.99, \"category\": \"synthetic-category-X\", \"synthetic\": true}",
          "{\"purchase\": \"TEST-ORDER-56789\", \"items\": 1, \"total\": 149.99, \"category\": \"synthetic-category-Y\", \"synthetic\": true}",
          "{\"location\": {\"lat\": 40.7128, \"lon\": -74.0060}, \"accuracy\": 50, \"timestamp\": \"2023-10-20T12:00:00Z\", \"synthetic\": true}",
          "{\"location\": {\"lat\": 34.0522, \"lon\": -118.2437}, \"accuracy\": 30, \"timestamp\": \"2023-10-21T15:30:00Z\", \"synthetic\": true}",
          "{\"appUsage\": \"synthetic-app-alpha\", \"openCount\": 47, \"totalTime\": 3421, \"lastUsed\": \"2023-12-05\", \"synthetic\": true}"
        ]
      },
      {
        "id": "children",
        "label": "Children's Data",
        "items": [
          "{\"childId\": \"TEST-CHILD-001\", \"age\": 8, \"parentConsent\": true, \"consentDate\": \"2023-09-01\", \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-002\", \"age\": 12, \"parentConsent\": true, \"consentDate\": \"2023-09-15\", \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-003\", \"age\": 6, \"parentConsent\": false, \"consentDate\": null, \"synthetic\": true}",
          "{\"childId\": \"TEST-CHILD-004\", \"age\": 10, \"parentConsent\": true, \"consentDate\": \"2023-10-01\", \"synthetic\": true}",
          "{\"schoolRecord\": \"TEST-EDU-567\", \"grade\": \"4th\", \"school\": \"Synthetic School A\", \"synthetic\": true}",
          "{\"schoolRecord\": \"TEST-EDU-678\", \"grade\": \"6th\", \"school\": \"Simulated School B\", \"synthetic\": true}",
          "{\"activity\": \"TEST-ACTIVITY-789\", \"type\": \"Educational game\", \"duration\": 45, \"date\": \"2023-11-10\", \"synthetic\": true}",
          "{\"activity\": \"TEST-ACTIVITY-890\", \"type\": \"Reading app\", \"duration\": 30, \"date\": \"2023-11-12\", \"synthetic\": true}",
          "{\"parentEmail\": \"parent.test.001@testmail.invalid\", \"verified\": true, \"relationshipProof\": \"TEST-DOC-123\", \"synthetic\": true}",
          "{\"parentEmail\": \"parent.test.002@testmail.invalid\", \"verified\": true, \"relationshipProof\": \"TEST-DOC-456\", \"synthetic\": true}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Characteristics of GDPR-compliant data",
        "body": "<p>Synthetic data is <strong>not anonymized</strong>; it's <em>fabricated from scratch</em> without origin in real people. This is critical: GDPR defines PII as information identifying real individuals. A synthetic dataset with <code>name: 'John M. Smith'</code> and <code>email: john.smith.7492@testmail.invalid</code> doesn't violate GDPR because no real John Smith has that email nor that specific pattern.</p><p>Key markers to distinguish synthetic data: <strong>1)</strong> TLD .invalid (RFC 6761, guaranteed not to resolve), <strong>2)</strong> TEST- prefixes in IDs, <strong>3)</strong> explicit flag <code>\"synthetic\": true</code> in JSON. This prevents test data from accidentally mixing with production.</p><p>Common mistake: using 'obfuscated' real data (changing John Doe to J**n D**). That's still PII processed without consent. Synthetic data must be algorithmically generated with realistic statistical distributions but no 1:1 mapping to real people. A synthetic IBAN must pass checksum validation without corresponding to an existing bank account.</p>"
      },
      {
        "h2": "Generating realistic data without violating privacy",
        "body": "<p>Libraries like <strong>Faker</strong> (Python/JS/PHP) generate plausible data: common names by country, properly formatted addresses, card numbers passing Luhn algorithm. But configure locales correctly: <code>Faker('en_US')</code> generates 'Smith' and 'Johnson', not 'García' and 'Rodríguez'.</p><p>For financial data, use official test ranges: cards 4000-xxxx-xxxx-xxxx (Visa test), 5555-xxxx-xxxx-xxxx (Mastercard test). Payment processors guarantee these numbers are never assigned to real customers. Synthetic IBANs: valid structure with correct country codes but test bank BIC/SWIFT codes.</p><p>Health data requires <strong>extra care</strong> due to additional regulations (HIPAA in US, specific laws in EU). Generate generic medical conditions ('Synthetic condition A') instead of specific diagnoses. For labs, use standard reference ranges but not real patient values. Never use anonymized clinical histories: re-identification is trivial with enough datapoints.</p>"
      },
      {
        "h2": "Anonymization strategies vs. synthetic data",
        "body": "<p><strong>Anonymization</strong> starts with real data and applies techniques to remove PII: k-anonymity (each record is indistinguishable from at least k-1 others), l-diversity (sensitive attributes have at least l distinct values), differential privacy (adding mathematically guaranteed noise). But <em>perfect</em> anonymization is nearly impossible; studies show re-identification with only 3-4 quasi-identifiers.</p><p><strong>Synthetic data</strong> avoids this problem by generating statistically similar distributions without real individuals. Tools like <strong>Synthpop</strong> (R) or <strong>SDV</strong> (Python) learn the structure of real data and generate new records that maintain correlations without identities. A synthetic transaction dataset preserves purchase patterns (product correlation, temporality) but no row corresponds to a real customer.</p><p>When to use each approach: anonymization for aggregate statistical analysis where you need exact properties of the original dataset. Synthetic for testing/development where you need volume and variety without legal risk. For ML training, synthetic avoids sampling bias introduced by anonymization when removing outliers to guarantee k-anonymity.</p>"
      },
      {
        "h2": "Compliance and auditing of test datasets",
        "body": "<p>Document synthetic origin in metadata: each dataset should include <code>generation_method</code>, <code>date_generated</code>, <code>source_algorithm</code>. In GDPR audits (Art. 30 record-keeping obligations), you must demonstrate that test data is not PII. A README file with: <em>\"This dataset was generated using Faker 8.0 with deterministic seed X for reproducibility. No record corresponds to any real person, place or entity.\"</em></p><p>Implement <strong>data lineage tracking</strong>: if a bug allows synthetic data to be copied to production, you need to detect it fast. Set up alerts when fields with <code>\"synthetic\": true</code> appear in production databases. Data governance tools like Apache Atlas or Collibra can automatically tag synthetic datasets.</p><p>For children's data (Art. 8 GDPR), include <code>parental_consent</code> fields even in synthetic data to test verification flows. If your app processes data from minors under 16, testing must cover scenarios with/without parental consent. Synthetic data enables generating edge cases (13-year-old with consent in jurisdiction requiring 16) without involving real children.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use synthetic data in production?",
        "a": "Technically yes (it's not PII), but it's dangerous: if mixed with real data, you compromise integrity. Better: separate environments with clear markers that prevent accidental migration."
      },
      {
        "q": "Does synthetic data require GDPR consent?",
        "a": "No. Art. 4(1) defines personal data as information about identified or identifiable individuals. Synthetic data by definition doesn't identify anyone real, thus it's not PII."
      },
      {
        "q": "How to test Right to Erasure flows?",
        "a": "Generate synthetic identities with traceable IDs (TEST-USER-001). Implement deletion logic same as with real users. Verify that logs, backups and caches also remove the synthetic record."
      },
      {
        "q": "Does synthetic data protect against re-identification?",
        "a": "Only if well-generated. Naïve synthetic data (random names + random dates) can create impossible combinations that facilitate detection of synthetic vs. real records. Use tools that preserve statistical correlations."
      }
    ]
  }
};
