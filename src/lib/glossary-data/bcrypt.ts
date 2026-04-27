import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "bcrypt",
    "en": "bcrypt"
  },
  "emoji": "🛡️",
  "category": "security",
  "es": {
    "pageTitle": "Bcrypt — Glosario | Genfy",
    "metaDesc": "Bcrypt es un algoritmo de hash de contraseñas con salt incorporado y factor de costo configurable. Conocé por qué es el estándar para almacenar passwords.",
    "h1": "Bcrypt",
    "short": "Bcrypt es un algoritmo de hash de contraseñas basado en el cifrado Blowfish, diseñado en 1999 por Niels Provos y David Mazières. Su característica clave es el factor de costo configurable que lo hace intencionalmente lento, protegiendo contra ataques de fuerza bruta incluso si la base de datos es comprometida.",
    "body": [
      {
        "title": "¿Qué es Bcrypt?",
        "content": "<p>Bcrypt resuelve el problema fundamental del almacenamiento de contraseñas: ¿cómo verificar que un usuario ingresó la password correcta sin guardar la password en texto plano? La solución es guardar un <strong>hash unidireccional</strong>, pero los hashes rápidos como MD5 o SHA-256 son vulnerables a ataques masivos con GPUs.</p><p>Bcrypt fue diseñado para ser <strong>adaptivamente lento</strong>. Tiene un parámetro llamado <em>cost factor</em> (trabajo) que controla cuántas iteraciones de cifrado Blowfish se ejecutan. Cada incremento del cost factor duplica el tiempo de cómputo. Esto permite ajustar la seguridad a medida que el hardware se vuelve más rápido.</p><p>Un hash bcrypt típico se ve así: <code>$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5NU7eBh6pTMG.</code>. Incluye el algoritmo (2b), el cost factor (12), el salt (22 caracteres) y el hash (31 caracteres), todo en uno. No necesitás almacenar el salt por separado.</p>"
      },
      {
        "title": "Cómo funciona Bcrypt",
        "content": "<p>El proceso de bcrypt tiene tres pasos:</p><ol><li><strong>Generación del salt</strong>: se crea un valor aleatorio de 128 bits (22 caracteres en base64). El salt garantiza que dos usuarios con la misma password tengan hashes diferentes.</li><li><strong>Derivación de clave</strong>: la password + salt se procesan con el algoritmo eksblowfish (Blowfish mejorado). El cost factor determina cuántas rondas: 2^cost iteraciones. Con cost=12, son 4,096 rondas.</li><li><strong>Codificación</strong>: el resultado se codifica en un string que incluye versión, cost, salt y hash concatenados.</li></ol><p>El cost factor típico hoy es <strong>12-14</strong>. Con cost=12, un hash toma ~250ms en hardware promedio. Esto es imperceptible para un usuario legítimo haciendo login, pero hace que un atacante necesite 250ms por intento en vez de microsegundos con MD5.</p><p>Si alguien obtiene tu base de datos, un atacante con una GPU potente podría probar ~40 passwords/segundo con bcrypt (cost=12). Con MD5 probaría millones por segundo.</p>"
      },
      {
        "title": "Cuándo usar Bcrypt",
        "content": "<p>Bcrypt es el estándar recomendado para:</p><ul><li><strong>Almacenamiento de contraseñas de usuarios</strong>: en cualquier aplicación web, móvil o API donde los usuarios se autentican con password.</li><li><strong>Sistemas legacy seguros</strong>: migrando desde MD5 o SHA-1, bcrypt es un upgrade directo sin cambiar arquitectura.</li><li><strong>Cuando Argon2 no está disponible</strong>: bcrypt tiene soporte nativo en casi todos los lenguajes y frameworks (PHP, Node, Python, Ruby, Go, Java).</li></ul><p>Consideraciones: bcrypt trunca passwords a 72 bytes (caracteres ASCII). Para passwords largos, algunos implementan un pre-hash con SHA-256: <code>bcrypt(sha256(password))</code>. También, el cost factor debe ajustarse cada 2-3 años para compensar mejoras de hardware.</p><p>Para nuevos proyectos donde tenés control total, considerá <strong>Argon2id</strong>, ganador de la Password Hashing Competition 2015, con mejor resistencia a ataques GPU/ASIC.</p>"
      },
      {
        "title": "Bcrypt vs otras alternativas",
        "content": "<p>Comparación con otros algoritmos de hashing de passwords:</p><p><strong>vs MD5/SHA-256</strong>: Estos son miles de veces más rápidos, lo que los hace inseguros para passwords. Un atacante puede probar miles de millones de combinaciones por segundo. Nunca los uses para passwords.</p><p><strong>vs PBKDF2</strong>: Similar a bcrypt en concepto (iteraciones configurables), pero más vulnerable a ataques con hardware especializado. Bcrypt es más resistente a paralelización masiva.</p><p><strong>vs scrypt</strong>: Diseñado para requerir mucha memoria además de CPU, dificultando ataques con ASICs. Más seguro que bcrypt pero menos adoptado y más complejo de configurar correctamente.</p><p><strong>vs Argon2</strong>: El más moderno y recomendado. Ganó la PHC en 2015. Argon2id combina resistencia a ataques de tiempo y memoria. Si tu stack lo soporta, usá Argon2id. Si no, bcrypt es excelente.</p><p>En la práctica: <strong>bcrypt es suficiente para la mayoría de aplicaciones</strong> y tiene 25 años de análisis criptográfico sin vulnerabilidades críticas.</p>"
      }
    ],
    "examples": [
      "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5NU7eBh6pTMG. (hash completo)",
      "Cost factor 10 → ~65ms | Cost 12 → ~250ms | Cost 14 → ~1000ms",
      "bcrypt('password123', 12) → diferente cada vez por el salt aleatorio"
    ],
    "related": [
      "generador-bcrypt",
      "generador-de-contrasenas"
    ],
    "faq": [
      {
        "q": "¿Por qué bcrypt genera hashes diferentes para la misma password?",
        "a": "Porque cada hash incluye un salt aleatorio único. Esto evita rainbow tables y hace que dos usuarios con la misma password tengan hashes distintos. La verificación funciona porque el salt está incluido en el hash."
      },
      {
        "q": "¿Qué cost factor debo usar en bcrypt?",
        "a": "En 2024, el recomendado es 12-14. Cost 12 toma ~250ms, aceptable para login pero costoso para atacantes. Aumentá el cost cada 2-3 años para compensar hardware más rápido."
      },
      {
        "q": "¿Puedo migrar de MD5 a bcrypt sin resetear passwords?",
        "a": "Sí. Una estrategia común es bcrypt(md5_hash_existente) para usuarios existentes, y bcrypt(password) en el próximo login. Esto evita forzar reset masivo de passwords."
      }
    ]
  },
  "en": {
    "pageTitle": "Bcrypt — Glossary | Genfy",
    "metaDesc": "Bcrypt is a password hashing algorithm with built-in salt and configurable cost factor. Learn why it's the standard for storing passwords securely.",
    "h1": "Bcrypt",
    "short": "Bcrypt is a password hashing algorithm based on the Blowfish cipher, designed in 1999 by Niels Provos and David Mazières. Its key feature is a configurable cost factor that makes it intentionally slow, protecting against brute-force attacks even if the database is compromised.",
    "body": [
      {
        "title": "What is Bcrypt?",
        "content": "<p>Bcrypt solves the fundamental problem of password storage: how to verify that a user entered the correct password without storing the password in plain text? The solution is to store a <strong>one-way hash</strong>, but fast hashes like MD5 or SHA-256 are vulnerable to massive GPU attacks.</p><p>Bcrypt was designed to be <strong>adaptively slow</strong>. It has a parameter called <em>cost factor</em> (work factor) that controls how many rounds of Blowfish encryption are executed. Each increase in cost factor doubles the computation time. This allows adjusting security as hardware gets faster.</p><p>A typical bcrypt hash looks like: <code>$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5NU7eBh6pTMG.</code>. It includes the algorithm (2b), cost factor (12), salt (22 characters), and hash (31 characters), all in one. You don't need to store the salt separately.</p>"
      },
      {
        "title": "How Bcrypt works",
        "content": "<p>The bcrypt process has three steps:</p><ol><li><strong>Salt generation</strong>: a 128-bit random value is created (22 base64 characters). The salt ensures two users with the same password have different hashes.</li><li><strong>Key derivation</strong>: password + salt are processed with the eksblowfish algorithm (enhanced Blowfish). The cost factor determines how many rounds: 2^cost iterations. With cost=12, that's 4,096 rounds.</li><li><strong>Encoding</strong>: the result is encoded in a string that includes version, cost, salt, and hash concatenated.</li></ol><p>The typical cost factor today is <strong>12-14</strong>. With cost=12, a hash takes ~250ms on average hardware. This is imperceptible for a legitimate user logging in, but means an attacker needs 250ms per attempt instead of microseconds with MD5.</p><p>If someone obtains your database, an attacker with a powerful GPU could try ~40 passwords/second with bcrypt (cost=12). With MD5 they'd try millions per second.</p>"
      },
      {
        "title": "When to use Bcrypt",
        "content": "<p>Bcrypt is the recommended standard for:</p><ul><li><strong>User password storage</strong>: in any web, mobile, or API application where users authenticate with passwords.</li><li><strong>Secure legacy systems</strong>: migrating from MD5 or SHA-1, bcrypt is a direct upgrade without changing architecture.</li><li><strong>When Argon2 isn't available</strong>: bcrypt has native support in almost all languages and frameworks (PHP, Node, Python, Ruby, Go, Java).</li></ul><p>Considerations: bcrypt truncates passwords to 72 bytes (ASCII characters). For long passwords, some implement a pre-hash with SHA-256: <code>bcrypt(sha256(password))</code>. Also, the cost factor should be adjusted every 2-3 years to compensate for hardware improvements.</p><p>For new projects where you have full control, consider <strong>Argon2id</strong>, winner of the Password Hashing Competition 2015, with better resistance to GPU/ASIC attacks.</p>"
      },
      {
        "title": "Bcrypt vs other alternatives",
        "content": "<p>Comparison with other password hashing algorithms:</p><p><strong>vs MD5/SHA-256</strong>: These are thousands of times faster, making them insecure for passwords. An attacker can try billions of combinations per second. Never use them for passwords.</p><p><strong>vs PBKDF2</strong>: Similar to bcrypt in concept (configurable iterations), but more vulnerable to attacks with specialized hardware. Bcrypt is more resistant to massive parallelization.</p><p><strong>vs scrypt</strong>: Designed to require lots of memory in addition to CPU, making ASIC attacks harder. More secure than bcrypt but less adopted and more complex to configure correctly.</p><p><strong>vs Argon2</strong>: The most modern and recommended. Won the PHC in 2015. Argon2id combines resistance to timing and memory attacks. If your stack supports it, use Argon2id. If not, bcrypt is excellent.</p><p>In practice: <strong>bcrypt is sufficient for most applications</strong> and has 25 years of cryptographic analysis without critical vulnerabilities.</p>"
      }
    ],
    "examples": [
      "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5NU7eBh6pTMG. (complete hash)",
      "Cost factor 10 → ~65ms | Cost 12 → ~250ms | Cost 14 → ~1000ms",
      "bcrypt('password123', 12) → different every time due to random salt"
    ],
    "related": [
      "bcrypt-generator",
      "password-generator"
    ],
    "faq": [
      {
        "q": "Why does bcrypt generate different hashes for the same password?",
        "a": "Because each hash includes a unique random salt. This prevents rainbow tables and ensures two users with the same password have different hashes. Verification works because the salt is included in the hash."
      },
      {
        "q": "What cost factor should I use in bcrypt?",
        "a": "In 2024, the recommended is 12-14. Cost 12 takes ~250ms, acceptable for login but expensive for attackers. Increase the cost every 2-3 years to compensate for faster hardware."
      },
      {
        "q": "Can I migrate from MD5 to bcrypt without resetting passwords?",
        "a": "Yes. A common strategy is bcrypt(existing_md5_hash) for existing users, and bcrypt(password) on next login. This avoids forcing a mass password reset."
      }
    ]
  }
};
