import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "sha-256",
    "en": "sha-256"
  },
  "emoji": "🔒",
  "category": "crypto",
  "es": {
    "pageTitle": "SHA-256 — Glosario | Genfy",
    "metaDesc": "SHA-256 es un hash criptográfico de 256 bits de la familia SHA-2, estándar actual para integridad, firmas digitales y blockchain. Conocé cómo funciona.",
    "h1": "SHA-256",
    "short": "SHA-256 (Secure Hash Algorithm 256-bit) es una función de hash criptográfico que produce un valor de 256 bits a partir de cualquier entrada. Es parte de la familia SHA-2 diseñada por la NSA y es el estándar actual para integridad de datos, firmas digitales, certificados SSL y blockchain.",
    "body": [
      {
        "title": "¿Qué es SHA-256?",
        "content": "<p>SHA-256 fue publicado en 2001 por NIST como parte de la familia SHA-2, diseñada para reemplazar SHA-1 (roto en 2017). A diferencia de MD5 o SHA-1, <strong>SHA-256 no tiene colisiones conocidas</strong> y es considerado seguro para todos los usos criptográficos actuales.</p><p>El hash de 256 bits (64 caracteres hexadecimales) ofrece un espacio de 2^256 combinaciones posibles, haciendo computacionalmente inviable encontrar dos entradas con el mismo hash. Esta propiedad es crucial para firmas digitales, donde cualquier alteración del documento debe cambiar completamente el hash.</p><p>SHA-256 es la base de <strong>Bitcoin</strong> y otras criptomonedas, donde se usa tanto para generar direcciones como para el algoritmo de proof-of-work. También es obligatorio en certificados SSL/TLS modernos y en sistemas de integridad de archivos críticos.</p>"
      },
      {
        "title": "Cómo funciona SHA-256",
        "content": "<p>El algoritmo SHA-256 procesa la entrada en bloques de 512 bits a través de 64 rondas de transformación. Cada ronda aplica operaciones bit a bit (XOR, rotación, suma modular) usando constantes derivadas de las raíces cúbicas de los primeros 64 números primos.</p><p>El proceso comienza con 8 valores iniciales (derivados de las raíces cuadradas de los primeros 8 primos) que se modifican iterativamente con cada bloque de entrada. Al final, estos 8 valores de 32 bits se concatenan para formar el hash de 256 bits.</p><p>Una característica clave es la <strong>construcción Merkle-Damgård</strong>: el hash de un bloque se usa como entrada para el siguiente, creando una cadena de dependencias que hace imposible modificar bloques anteriores sin cambiar el hash final. Esto es fundamental para la integridad de estructuras como los árboles de Merkle en blockchain.</p>"
      },
      {
        "title": "Cuándo usar SHA-256",
        "content": "<p>SHA-256 es el estándar recomendado para:</p><ul><li><strong>Firmas digitales</strong>: certificar la autenticidad de documentos, código fuente (GPG, codesigning) y transacciones blockchain.</li><li><strong>Certificados SSL/TLS</strong>: todos los certificados modernos usan SHA-256 para firmar el chain of trust.</li><li><strong>Integridad de software</strong>: checksums de ISOs, paquetes NPM, Docker images, asegurando que no fueron alterados.</li><li><strong>HMAC</strong>: en combinación con una clave secreta, para autenticación de mensajes (JWT, API signatures).</li><li><strong>Derivación de claves</strong>: como parte de PBKDF2 o HKDF para generar claves criptográficas a partir de passwords.</li></ul><p>Importante: <strong>SHA-256 solo NO es suficiente para passwords</strong>. Aunque es seguro, es demasiado rápido, lo que facilita ataques de fuerza bruta. Para passwords usá bcrypt, scrypt o Argon2.</p>"
      },
      {
        "title": "SHA-256 vs otras funciones hash",
        "content": "<p>Comparado con alternativas:</p><ul><li><strong>vs MD5/SHA-1</strong>: SHA-256 es más lento pero criptográficamente seguro. MD5 y SHA-1 tienen colisiones prácticas conocidas.</li><li><strong>vs SHA-512</strong>: SHA-512 produce 512 bits, útil cuando necesitás mayor resistencia teórica, pero SHA-256 es suficiente para casi todos los casos y más eficiente en hardware de 32 bits.</li><li><strong>vs SHA-3</strong>: SHA-3 (Keccak) es más moderno y resistente a ciertos ataques teóricos, pero SHA-256 sigue siendo más rápido en la mayoría del hardware y tiene más soporte nativo.</li><li><strong>vs BLAKE2/BLAKE3</strong>: más rápidos que SHA-256 y tan seguros, pero menos estandarizados. Ideales para checksums de alto rendimiento pero menos adoptados en protocolos.</li></ul><p>Para la mayoría de aplicaciones, <strong>SHA-256 es el balance perfecto</strong> entre seguridad, velocidad y compatibilidad.</p>"
      }
    ],
    "examples": [
      "echo -n 'hola' | sha256sum → b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79",
      "Bitcoin genesis block hash → 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
      "Archivo + SHA-256 → verificación de integridad en distribuciones Linux"
    ],
    "related": [
      "generador-de-hash-md5-sha",
      "generador-hmac"
    ],
    "faq": [
      {
        "q": "¿Es SHA-256 seguro para contraseñas?",
        "a": "SHA-256 solo no es suficiente. Es muy rápido, facilitando ataques de fuerza bruta. Para passwords usá bcrypt, scrypt o Argon2, diseñados para ser lentos y con salt incorporado."
      },
      {
        "q": "¿Cuál es la diferencia entre SHA-256 y SHA-2?",
        "a": "SHA-2 es la familia que incluye SHA-224, SHA-256, SHA-384 y SHA-512. SHA-256 es el miembro más usado de esa familia, con balance ideal entre seguridad y rendimiento."
      },
      {
        "q": "¿Puede SHA-256 ser crackeado?",
        "a": "No con tecnología actual. Encontrar una colisión SHA-256 requeriría más energía que la producida por el sol en su vida útil. Los ataques prácticos se basan en passwords débiles, no en romper el algoritmo."
      }
    ]
  },
  "en": {
    "pageTitle": "SHA-256 — Glossary | Genfy",
    "metaDesc": "SHA-256 is a 256-bit cryptographic hash from the SHA-2 family, the current standard for integrity, digital signatures, and blockchain. Learn how it works.",
    "h1": "SHA-256",
    "short": "SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that produces a 256-bit value from any input. It's part of the SHA-2 family designed by the NSA and is the current standard for data integrity, digital signatures, SSL certificates, and blockchain.",
    "body": [
      {
        "title": "What is SHA-256?",
        "content": "<p>SHA-256 was published in 2001 by NIST as part of the SHA-2 family, designed to replace SHA-1 (broken in 2017). Unlike MD5 or SHA-1, <strong>SHA-256 has no known collisions</strong> and is considered secure for all current cryptographic uses.</p><p>The 256-bit hash (64 hexadecimal characters) offers a space of 2^256 possible combinations, making it computationally infeasible to find two inputs with the same hash. This property is crucial for digital signatures, where any document alteration must completely change the hash.</p><p>SHA-256 is the foundation of <strong>Bitcoin</strong> and other cryptocurrencies, where it's used both for generating addresses and for the proof-of-work algorithm. It's also mandatory in modern SSL/TLS certificates and critical file integrity systems.</p>"
      },
      {
        "title": "How SHA-256 works",
        "content": "<p>The SHA-256 algorithm processes input in 512-bit blocks through 64 transformation rounds. Each round applies bitwise operations (XOR, rotation, modular addition) using constants derived from the cube roots of the first 64 prime numbers.</p><p>The process begins with 8 initial values (derived from the square roots of the first 8 primes) that are iteratively modified with each input block. At the end, these 8 32-bit values are concatenated to form the 256-bit hash.</p><p>A key feature is the <strong>Merkle-Damgård construction</strong>: the hash of one block is used as input for the next, creating a chain of dependencies that makes it impossible to modify previous blocks without changing the final hash. This is fundamental for the integrity of structures like Merkle trees in blockchain.</p>"
      },
      {
        "title": "When to use SHA-256",
        "content": "<p>SHA-256 is the recommended standard for:</p><ul><li><strong>Digital signatures</strong>: certify the authenticity of documents, source code (GPG, codesigning), and blockchain transactions.</li><li><strong>SSL/TLS certificates</strong>: all modern certificates use SHA-256 to sign the chain of trust.</li><li><strong>Software integrity</strong>: checksums for ISOs, NPM packages, Docker images, ensuring they weren't tampered with.</li><li><strong>HMAC</strong>: combined with a secret key for message authentication (JWT, API signatures).</li><li><strong>Key derivation</strong>: as part of PBKDF2 or HKDF to generate cryptographic keys from passwords.</li></ul><p>Important: <strong>SHA-256 alone is NOT sufficient for passwords</strong>. While secure, it's too fast, facilitating brute-force attacks. For passwords use bcrypt, scrypt, or Argon2.</p>"
      },
      {
        "title": "SHA-256 vs other hash functions",
        "content": "<p>Compared to alternatives:</p><ul><li><strong>vs MD5/SHA-1</strong>: SHA-256 is slower but cryptographically secure. MD5 and SHA-1 have known practical collisions.</li><li><strong>vs SHA-512</strong>: SHA-512 produces 512 bits, useful when you need greater theoretical resistance, but SHA-256 is sufficient for almost all cases and more efficient on 32-bit hardware.</li><li><strong>vs SHA-3</strong>: SHA-3 (Keccak) is more modern and resistant to certain theoretical attacks, but SHA-256 is still faster on most hardware and has more native support.</li><li><strong>vs BLAKE2/BLAKE3</strong>: faster than SHA-256 and just as secure, but less standardized. Ideal for high-performance checksums but less adopted in protocols.</li></ul><p>For most applications, <strong>SHA-256 is the perfect balance</strong> between security, speed, and compatibility.</p>"
      }
    ],
    "examples": [
      "echo -n 'hello' | sha256sum → 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
      "Bitcoin genesis block hash → 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
      "File + SHA-256 → integrity verification in Linux distributions"
    ],
    "related": [
      "md5-sha-hash-generator",
      "hmac-generator"
    ],
    "faq": [
      {
        "q": "Is SHA-256 secure for passwords?",
        "a": "SHA-256 alone is not sufficient. It's very fast, facilitating brute-force attacks. For passwords use bcrypt, scrypt, or Argon2, designed to be slow and with built-in salt."
      },
      {
        "q": "What's the difference between SHA-256 and SHA-2?",
        "a": "SHA-2 is the family that includes SHA-224, SHA-256, SHA-384, and SHA-512. SHA-256 is the most used member of that family, with ideal balance between security and performance."
      },
      {
        "q": "Can SHA-256 be cracked?",
        "a": "Not with current technology. Finding a SHA-256 collision would require more energy than the sun will produce in its lifetime. Practical attacks are based on weak passwords, not breaking the algorithm."
      }
    ]
  }
};
