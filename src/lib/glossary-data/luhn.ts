import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "luhn",
    "en": "luhn-algorithm"
  },
  "emoji": "💳",
  "category": "data",
  "es": {
    "pageTitle": "Algoritmo de Luhn — Glosario | Genfy",
    "metaDesc": "Algoritmo de Luhn: checksum para validar tarjetas de crédito, IMEI y otros identificadores. Descubrí cómo funciona, casos de uso y sus limitaciones de seguridad.",
    "h1": "Algoritmo de Luhn",
    "short": "El Algoritmo de Luhn (también llamado Mod 10) es una fórmula de checksum simple que detecta errores tipográficos en números de identificación. Creado por Hans Peter Luhn en 1954, se usa en tarjetas de crédito, IMEI, números de cuenta y otros códigos para validar que no hayan sido alterados accidentalmente.",
    "body": [
      {
        "title": "¿Qué es el Algoritmo de Luhn?",
        "content": "<p>El Algoritmo de Luhn es un método matemático de verificación de integridad para secuencias numéricas. Su función es detectar errores comunes al escribir o leer números largos, no proporcionar seguridad criptográfica.</p><p>Inventado por Hans Peter Luhn (científico de IBM) en 1954 y patentado en 1960, se convirtió en estándar internacional (ISO/IEC 7812-1) para tarjetas de pago. Todas las redes mayores (Visa, Mastercard, Amex, Discover) lo implementan: el último dígito de la tarjeta es el <strong>dígito verificador</strong> calculado mediante Luhn.</p><p>El algoritmo es extraordinariamente simple: mediante operaciones aritméticas básicas (multiplicación, suma, módulo 10), valida si un número es potencialmente válido. No verifica si la tarjeta existe o tiene fondos, solo detecta si los dígitos están correctos.</p><p>Más allá de tarjetas, Luhn valida IMEI (identificadores de celulares), números de cuenta bancaria canadiense, códigos de identificación tributaria en algunos países, y números de seguimiento logístico. Su sencillez lo hace ideal para validación en frontend antes de enviar datos al servidor.</p>"
      },
      {
        "title": "¿Cómo funciona el algoritmo?",
        "content": "<p>El Algoritmo de Luhn procesa dígitos de <strong>derecha a izquierda</strong>. Paso a paso:</p><p><strong>1)</strong> Empezando por el penúltimo dígito (el último es el check digit), duplicá cada segundo dígito.<br><strong>2)</strong> Si al duplicar obtenés un número mayor a 9, sumá sus dígitos (ej: 14 → 1+4=5).<br><strong>3)</strong> Sumá todos los dígitos (duplicados procesados + no modificados).<br><strong>4)</strong> Si el total es múltiplo de 10, el número es válido.</p><p><strong>Ejemplo:</strong> Validar 79927398713<br>- De derecha a izquierda: 3,1,7,8,9,3,7,2,9,9,7<br>- Duplicamos posiciones impares: 3,(1×2),7,(8×2),9,(3×2),7,(2×2),9,(9×2),7<br>- Resolvemos: 3,2,7,16→7,9,6,7,4,9,18→9,7<br>- Suma: 3+2+7+7+9+6+7+4+9+9+7=70<br>- 70 mod 10 = 0 → ✅ Válido</p><p>Para <strong>generar</strong> un check digit: calculá la suma de todos los dígitos aplicando Luhn sin el último, luego encontrá qué dígito (0-9) hace que el total sea múltiplo de 10.</p>"
      },
      {
        "title": "¿Cuándo usar el Algoritmo de Luhn?",
        "content": "<p>Usá Luhn en <strong>validación de formularios</strong> de tarjetas de crédito. Antes de enviar datos al procesador de pagos, validar con Luhn en el cliente ahorra requests innecesarios y mejora UX mostrando errores tipográficos inmediatamente.</p><p>En <strong>testing y desarrollo</strong>, generadores de tarjetas de prueba usan Luhn para crear números que pasen validación básica sin ser tarjetas reales. Esto permite probar flujos de pago sin usar datos sensibles. Herramientas como Stripe proporcionan tarjetas de test que cumplen Luhn.</p><p>Para <strong>números de cuenta</strong>, códigos de barras, o identificadores custom en tu sistema, implementar Luhn añade una capa de validación contra typos sin complejidad. Es especialmente útil cuando usuarios transcriben números manualmente (call centers, formularios físicos).</p><p>En <strong>hardware embebido</strong> o sistemas de recursos limitados, Luhn es ideal por su bajo costo computacional: solo aritmética básica, sin tablas de lookup ni criptografía. Se implementa en pocas líneas de código.</p>"
      },
      {
        "title": "Limitaciones y consideraciones de seguridad",
        "content": "<p><strong>Luhn NO es seguridad:</strong> solo detecta errores accidentales, no previene fraude o manipulación intencional. Un atacante puede generar números que pasen Luhn fácilmente. Nunca confíes en Luhn como única validación de tarjetas.</p><p>Detecta errores de <strong>dígito único</strong> (7 en lugar de 8) y transposiciones de dígitos adyacentes (12 en lugar de 21) en ~90% de casos, pero no todos. Errores dobles o complejos pueden pasar inadvertidos.</p><p>En producción, después de validar con Luhn, enviá siempre los datos a un procesador de pagos real (Stripe, PayPal, etc.) que verifique la tarjeta contra bases de datos bancarias. Luhn solo filtra obvios errores de tipeo.</p><p>Para <strong>PCI DSS compliance</strong>, nunca almacenes números de tarjeta completos validados con Luhn localmente. Usá tokens del procesador. Luhn es paso de validación, no de autorización ni almacenamiento.</p><p>Alternativas más robustas: checksums CRC32 (para integridad de archivos), firmas digitales (para autenticidad), o códigos de verificación CVV/CVC (que complementan Luhn en tarjetas).</p>"
      }
    ],
    "examples": [
      "Tarjeta válida: 4532015112830366 (✅ pasa Luhn)",
      "Tarjeta inválida: 4532015112830367 (❌ falla Luhn, último dígito incorrecto)",
      "IMEI ejemplo: 490154203237518 (15 dígitos, último es check digit Luhn)",
      "Número de cuenta canadiense: validación mediante Luhn mod 10",
      "Test con Visa: empieza con 4, 13-16 dígitos, último dígito calculado con Luhn"
    ],
    "related": [
      "generador-de-tarjetas-de-test",
      "validador-email"
    ],
    "faq": [
      {
        "q": "¿El Algoritmo de Luhn valida que la tarjeta existe?",
        "a": "No. Luhn solo verifica que los dígitos sean matemáticamente consistentes (sin errores de tipeo). No consulta bases de datos bancarias, no verifica fondos, ni confirma que la tarjeta esté activa. Es el primer filtro, no la autorización."
      },
      {
        "q": "¿Puedo generar tarjetas reales con Luhn?",
        "a": "No. Aunque podés generar números que pasen Luhn, las tarjetas reales tienen BINs (primeros 6 dígitos) registrados por bancos, números de cuenta internos, y validaciones en redes de pago. Números válidos según Luhn no implican tarjetas existentes."
      },
      {
        "q": "¿Por qué Luhn si es tan simple?",
        "a": "Porque resuelve el problema específico de detectar typos comunes (errores humanos al transcribir). Es rápido, sin overhead, y suficiente para filtrar el 90% de errores accidentales antes de consultas costosas a servidores. No pretende ser seguridad, sino validación de formato."
      }
    ]
  },
  "en": {
    "pageTitle": "Luhn Algorithm — Glossary | Genfy",
    "metaDesc": "Luhn Algorithm: checksum to validate credit cards, IMEI and other identifiers. Discover how it works, use cases and security limitations.",
    "h1": "Luhn Algorithm",
    "short": "The Luhn Algorithm (also called Mod 10) is a simple checksum formula that detects typographical errors in identification numbers. Created by Hans Peter Luhn in 1954, it's used in credit cards, IMEI, account numbers and other codes to validate they haven't been accidentally altered.",
    "body": [
      {
        "title": "What is the Luhn Algorithm?",
        "content": "<p>The Luhn Algorithm is a mathematical method for verifying the integrity of numeric sequences. Its function is to detect common errors when writing or reading long numbers, not to provide cryptographic security.</p><p>Invented by Hans Peter Luhn (IBM scientist) in 1954 and patented in 1960, it became an international standard (ISO/IEC 7812-1) for payment cards. All major networks (Visa, Mastercard, Amex, Discover) implement it: the last digit of the card is the <strong>check digit</strong> calculated using Luhn.</p><p>The algorithm is extraordinarily simple: through basic arithmetic operations (multiplication, addition, modulo 10), it validates whether a number is potentially valid. It doesn't verify if the card exists or has funds, only detects if the digits are correct.</p><p>Beyond cards, Luhn validates IMEI (cell phone identifiers), Canadian bank account numbers, tax identification codes in some countries, and logistics tracking numbers. Its simplicity makes it ideal for frontend validation before sending data to the server.</p>"
      },
      {
        "title": "How does the algorithm work?",
        "content": "<p>The Luhn Algorithm processes digits from <strong>right to left</strong>. Step by step:</p><p><strong>1)</strong> Starting from the second-to-last digit (the last is the check digit), double every second digit.<br><strong>2)</strong> If doubling gives a number greater than 9, sum its digits (e.g., 14 → 1+4=5).<br><strong>3)</strong> Sum all digits (processed doubles + unmodified ones).<br><strong>4)</strong> If the total is a multiple of 10, the number is valid.</p><p><strong>Example:</strong> Validate 79927398713<br>- Right to left: 3,1,7,8,9,3,7,2,9,9,7<br>- Double odd positions: 3,(1×2),7,(8×2),9,(3×2),7,(2×2),9,(9×2),7<br>- Resolve: 3,2,7,16→7,9,6,7,4,9,18→9,7<br>- Sum: 3+2+7+7+9+6+7+4+9+9+7=70<br>- 70 mod 10 = 0 → ✅ Valid</p><p>To <strong>generate</strong> a check digit: calculate the sum of all digits applying Luhn without the last one, then find which digit (0-9) makes the total a multiple of 10.</p>"
      },
      {
        "title": "When to use the Luhn Algorithm?",
        "content": "<p>Use Luhn in <strong>credit card form validation</strong>. Before sending data to the payment processor, validating with Luhn on the client saves unnecessary requests and improves UX by showing typos immediately.</p><p>In <strong>testing and development</strong>, test card generators use Luhn to create numbers that pass basic validation without being real cards. This allows testing payment flows without using sensitive data. Tools like Stripe provide test cards that comply with Luhn.</p><p>For <strong>account numbers</strong>, barcodes, or custom identifiers in your system, implementing Luhn adds a validation layer against typos without complexity. It's especially useful when users transcribe numbers manually (call centers, physical forms).</p><p>In <strong>embedded hardware</strong> or resource-limited systems, Luhn is ideal for its low computational cost: only basic arithmetic, no lookup tables or cryptography. It implements in just a few lines of code.</p>"
      },
      {
        "title": "Limitations and security considerations",
        "content": "<p><strong>Luhn IS NOT security:</strong> it only detects accidental errors, doesn't prevent fraud or intentional manipulation. An attacker can easily generate numbers that pass Luhn. Never rely on Luhn as the sole card validation.</p><p>It detects <strong>single digit</strong> errors (7 instead of 8) and transpositions of adjacent digits (12 instead of 21) in ~90% of cases, but not all. Double or complex errors can go undetected.</p><p>In production, after validating with Luhn, always send data to a real payment processor (Stripe, PayPal, etc.) that verifies the card against bank databases. Luhn only filters obvious typos.</p><p>For <strong>PCI DSS compliance</strong>, never store complete card numbers validated with Luhn locally. Use processor tokens. Luhn is a validation step, not authorization or storage.</p><p>More robust alternatives: CRC32 checksums (for file integrity), digital signatures (for authenticity), or CVV/CVC verification codes (which complement Luhn on cards).</p>"
      }
    ],
    "examples": [
      "Valid card: 4532015112830366 (✅ passes Luhn)",
      "Invalid card: 4532015112830367 (❌ fails Luhn, wrong last digit)",
      "IMEI example: 490154203237518 (15 digits, last is Luhn check digit)",
      "Canadian account number: validation via Luhn mod 10",
      "Test with Visa: starts with 4, 13-16 digits, last digit calculated with Luhn"
    ],
    "related": [
      "test-credit-card-generator",
      "email-validator"
    ],
    "faq": [
      {
        "q": "Does the Luhn Algorithm validate that the card exists?",
        "a": "No. Luhn only verifies that the digits are mathematically consistent (without typos). It doesn't query bank databases, doesn't verify funds, nor confirms the card is active. It's the first filter, not authorization."
      },
      {
        "q": "Can I generate real cards with Luhn?",
        "a": "No. Although you can generate numbers that pass Luhn, real cards have BINs (first 6 digits) registered by banks, internal account numbers, and validations in payment networks. Numbers valid according to Luhn don't imply existing cards."
      },
      {
        "q": "Why Luhn if it's so simple?",
        "a": "Because it solves the specific problem of detecting common typos (human errors when transcribing). It's fast, no overhead, and sufficient to filter 90% of accidental errors before expensive server queries. It doesn't pretend to be security, but format validation."
      }
    ]
  }
};
