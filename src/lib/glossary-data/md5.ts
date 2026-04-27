import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "md5",
    "en": "md5"
  },
  "emoji": "#️⃣",
  "category": "crypto",
  "es": {
    "pageTitle": "MD5 — Glosario | Genfy",
    "metaDesc": "MD5 es una función de hash criptográfico de 128 bits usada para checksums e integridad. Conocé por qué ya no es segura para passwords y cuándo usarla.",
    "h1": "MD5",
    "short": "MD5 (Message Digest Algorithm 5) es una función de hash criptográfico que produce un valor de 128 bits (32 caracteres hexadecimales) a partir de cualquier entrada. Aunque fue ampliamente usado para verificar integridad de archivos y almacenar contraseñas, hoy es considerado criptográficamente roto para uso en seguridad.",
    "body": [
      {
        "title": "¿Qué es MD5?",
        "content": "<p>MD5 es un algoritmo diseñado en 1991 por Ronald Rivest como sucesor de MD4. Su función es tomar cualquier cantidad de datos (un archivo, un texto, una imagen) y producir un <strong>hash de 128 bits</strong> que actúa como una huella digital única de esa entrada.</p><p>Durante años fue el estándar de facto para verificar que un archivo no fue alterado durante la descarga (checksums) y para almacenar contraseñas en bases de datos. Sin embargo, en 2004 se descubrieron <strong>colisiones prácticas</strong>: dos entradas distintas que producen el mismo hash MD5. Esto rompió su utilidad criptográfica.</p><p>Hoy MD5 sigue siendo útil para <strong>integridad no adversarial</strong> (detectar corrupción accidental de archivos), pero nunca debe usarse para passwords, firmas digitales o cualquier contexto donde un atacante pueda beneficiarse de una colisión.</p>"
      },
      {
        "title": "Cómo funciona MD5",
        "content": "<p>El algoritmo MD5 procesa la entrada en bloques de 512 bits y aplica una serie de operaciones matemáticas (rotaciones, sumas modulares, funciones booleanas) a través de 64 rondas organizadas en 4 etapas. El resultado es un hash de 128 bits, generalmente representado como 32 dígitos hexadecimales.</p><p>Una propiedad clave del hash criptográfico es el <strong>efecto avalancha</strong>: cambiar un solo bit en la entrada produce un hash completamente diferente. Esto hace que sea computacionalmente imposible predecir el hash sin calcular el algoritmo completo.</p><p>El problema de MD5 es que investigadores encontraron formas de generar dos mensajes distintos con el mismo hash en cuestión de minutos usando hardware moderno. Esto se llama una <strong>colisión</strong> y rompe la garantía de unicidad que necesita un hash criptográfico.</p>"
      },
      {
        "title": "Cuándo usar MD5",
        "content": "<p>MD5 sigue siendo válido para casos donde no hay un adversario activo tratando de explotar colisiones:</p><ul><li><strong>Checksums de integridad</strong>: verificar que un archivo no se corrompió durante la transferencia o almacenamiento.</li><li><strong>Cache keys no críticos</strong>: generar identificadores rápidos para sistemas de caché donde la seguridad no es un requisito.</li><li><strong>Deduplicación de archivos internos</strong>: detectar duplicados en sistemas de backup locales.</li></ul><p>Sin embargo, <strong>nunca uses MD5 para</strong>: almacenar contraseñas (usá bcrypt o Argon2), firmas digitales (usá SHA-256 o superior), certificados SSL, o cualquier contexto donde un atacante pueda inyectar contenido malicioso con el mismo hash.</p>"
      },
      {
        "title": "Alternativas seguras a MD5",
        "content": "<p>Para reemplazar MD5 en contextos de seguridad, la industria adoptó alternativas más robustas:</p><ul><li><strong>SHA-256</strong>: hash de 256 bits de la familia SHA-2, estándar actual para integridad y firmas.</li><li><strong>SHA-3</strong>: la familia más reciente, basada en la construcción Keccak, con resistencia a ataques de extensión de longitud.</li><li><strong>BLAKE2/BLAKE3</strong>: hashes modernos más rápidos que MD5 y más seguros que SHA-2, ideales para checksums de alto rendimiento.</li></ul><p>Para contraseñas específicamente, usá <strong>bcrypt</strong>, <strong>scrypt</strong> o <strong>Argon2</strong>, diseñados con salts automáticos y factores de costo configurables para resistir ataques de fuerza bruta.</p>"
      }
    ],
    "examples": [
      "echo -n 'hola' | md5sum → 4d186321c1a7f0f354b297e8914ab240",
      "Archivo de 1GB → hash MD5 de 32 caracteres hex",
      "password123 → 482c811da5d5b4bc6d497ffa98491e38 (inseguro para producción)"
    ],
    "related": [
      "generador-de-hash-md5-sha",
      "generador-bcrypt"
    ],
    "faq": [
      {
        "q": "¿Es seguro usar MD5 para contraseñas?",
        "a": "No. MD5 es vulnerable a ataques de colisión y rainbow tables. Para passwords siempre usá bcrypt, scrypt o Argon2 con salt incorporado."
      },
      {
        "q": "¿Por qué algunos sitios todavía usan MD5 para checksums?",
        "a": "Porque para verificar integridad sin adversarios (corrupción accidental), MD5 sigue siendo rápido y suficiente. El problema es cuando un atacante puede manipular el archivo."
      },
      {
        "q": "¿Puedo revertir un hash MD5?",
        "a": "No. Los hashes son funciones de un solo sentido. Pero con bases de datos precalculadas (rainbow tables) podés encontrar entradas comunes que producen un hash dado."
      }
    ]
  },
  "en": {
    "pageTitle": "MD5 — Glossary | Genfy",
    "metaDesc": "MD5 is a 128-bit cryptographic hash function used for checksums and integrity. Learn why it's no longer secure for passwords and when to use it safely.",
    "h1": "MD5",
    "short": "MD5 (Message Digest Algorithm 5) is a cryptographic hash function that produces a 128-bit value (32 hexadecimal characters) from any input. While widely used for file integrity verification and password storage, it is now considered cryptographically broken for security purposes.",
    "body": [
      {
        "title": "What is MD5?",
        "content": "<p>MD5 is an algorithm designed in 1991 by Ronald Rivest as the successor to MD4. Its purpose is to take any amount of data (a file, text, image) and produce a <strong>128-bit hash</strong> that acts as a unique fingerprint of that input.</p><p>For years it was the de facto standard for verifying that a file wasn't altered during download (checksums) and for storing passwords in databases. However, in 2004 researchers discovered <strong>practical collisions</strong>: two different inputs that produce the same MD5 hash. This broke its cryptographic utility.</p><p>Today MD5 remains useful for <strong>non-adversarial integrity</strong> (detecting accidental file corruption), but should never be used for passwords, digital signatures, or any context where an attacker could benefit from a collision.</p>"
      },
      {
        "title": "How MD5 works",
        "content": "<p>The MD5 algorithm processes input in 512-bit blocks and applies a series of mathematical operations (rotations, modular additions, boolean functions) through 64 rounds organized in 4 stages. The result is a 128-bit hash, typically represented as 32 hexadecimal digits.</p><p>A key property of cryptographic hashes is the <strong>avalanche effect</strong>: changing a single bit in the input produces a completely different hash. This makes it computationally impossible to predict the hash without running the full algorithm.</p><p>MD5's problem is that researchers found ways to generate two different messages with the same hash in minutes using modern hardware. This is called a <strong>collision</strong> and breaks the uniqueness guarantee that a cryptographic hash needs.</p>"
      },
      {
        "title": "When to use MD5",
        "content": "<p>MD5 remains valid for cases where there's no active adversary trying to exploit collisions:</p><ul><li><strong>Integrity checksums</strong>: verify that a file wasn't corrupted during transfer or storage.</li><li><strong>Non-critical cache keys</strong>: generate fast identifiers for caching systems where security isn't a requirement.</li><li><strong>Internal file deduplication</strong>: detect duplicates in local backup systems.</li></ul><p>However, <strong>never use MD5 for</strong>: storing passwords (use bcrypt or Argon2), digital signatures (use SHA-256 or higher), SSL certificates, or any context where an attacker could inject malicious content with the same hash.</p>"
      },
      {
        "title": "Secure alternatives to MD5",
        "content": "<p>To replace MD5 in security contexts, the industry adopted more robust alternatives:</p><ul><li><strong>SHA-256</strong>: 256-bit hash from the SHA-2 family, current standard for integrity and signatures.</li><li><strong>SHA-3</strong>: the newest family, based on the Keccak construction, with resistance to length-extension attacks.</li><li><strong>BLAKE2/BLAKE3</strong>: modern hashes faster than MD5 and more secure than SHA-2, ideal for high-performance checksums.</li></ul><p>For passwords specifically, use <strong>bcrypt</strong>, <strong>scrypt</strong>, or <strong>Argon2</strong>, designed with automatic salts and configurable cost factors to resist brute-force attacks.</p>"
      }
    ],
    "examples": [
      "echo -n 'hello' | md5sum → 5d41402abc4b2a76b9719d911017c592",
      "1GB file → 32-character hex MD5 hash",
      "password123 → 482c811da5d5b4bc6d497ffa98491e38 (insecure for production)"
    ],
    "related": [
      "md5-sha-hash-generator",
      "bcrypt-generator"
    ],
    "faq": [
      {
        "q": "Is MD5 secure for passwords?",
        "a": "No. MD5 is vulnerable to collision attacks and rainbow tables. For passwords always use bcrypt, scrypt, or Argon2 with built-in salt."
      },
      {
        "q": "Why do some sites still use MD5 for checksums?",
        "a": "Because for integrity verification without adversaries (accidental corruption), MD5 is still fast and sufficient. The problem is when an attacker can manipulate the file."
      },
      {
        "q": "Can I reverse an MD5 hash?",
        "a": "No. Hashes are one-way functions. But with pre-calculated databases (rainbow tables) you can find common inputs that produce a given hash."
      }
    ]
  }
};
