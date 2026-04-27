import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "salt",
    "en": "salt"
  },
  "emoji": "🧂",
  "category": "security",
  "es": {
    "pageTitle": "Salt (criptografía) — Glosario | Genfy",
    "metaDesc": "Salt es un valor aleatorio único que se agrega a contraseñas antes de hashearlas. Esencial para prevenir rainbow tables y proteger credenciales.",
    "h1": "Salt (criptografía)",
    "short": "En criptografía, un salt es un string aleatorio único que se concatena a una contraseña antes de aplicar una función hash. Su propósito: garantizar que dos usuarios con la misma contraseña generen hashes diferentes, haciendo inútiles los ataques de rainbow table.",
    "body": [
      {
        "title": "¿Qué es un salt y por qué es fundamental?",
        "content": "<p>Un salt (sal en español) es un valor aleatorio generado por un algoritmo criptográficamente seguro (CSPRNG) que se combina con una contraseña antes de hashearla. Por ejemplo, si dos usuarios eligen <code>Password123</code>, sin salt ambos generarían el mismo hash:</p><p><code>SHA256('Password123') → ef92b778bafe...</code></p><p>Pero con salt único por usuario:</p><p><code>SHA256('Password123' + 'a8f3x9k2') → 3c5d8e1a...</code><br><code>SHA256('Password123' + 'p1q7r4m8') → 9f2b6d0e...</code></p><p>Ahora los hashes son diferentes aunque la contraseña sea idéntica. Esto previene que un atacante que robe tu base de datos use <strong>rainbow tables</strong> (tablas precalculadas de millones de hashes comunes) para descifrar contraseñas en segundos. Con salt, debe atacar cada hash individualmente, volviendo el proceso prohibitivamente costoso.</p><p>Importante: el salt NO necesita ser secreto. Se almacena en texto plano junto al hash en la base de datos. Su seguridad viene de ser único y aleatorio, no de estar oculto.</p>"
      },
      {
        "title": "¿Cómo funciona el salting en la práctica?",
        "content": "<p>El proceso estándar de salting sigue estos pasos:</p><ul><li><strong>Registro de usuario:</strong> cuando el usuario crea su cuenta, el servidor genera un salt aleatorio de 128-256 bits (16-32 bytes)</li><li><strong>Combinación:</strong> el salt se concatena a la contraseña (típicamente: <code>salt + password</code> o <code>password + salt</code>)</li><li><strong>Hashing:</strong> se aplica una función hash lenta (bcrypt, scrypt, Argon2) al resultado. Estas funciones ya incorporan el salt internamente</li><li><strong>Almacenamiento:</strong> se guarda en la DB el formato <code>algoritmo$cost$salt$hash</code>, por ejemplo: <code>bcrypt$12$a8f3x9k2$ef92b778...</code></li></ul><p>Al login, el servidor recupera el salt almacenado, lo combina con la contraseña ingresada, hashea y compara. Si coincide, la autenticación es válida.</p><p>Herramientas modernas como <strong>bcrypt</strong>, <strong>scrypt</strong> y <strong>Argon2</strong> manejan el salt automáticamente: generan uno aleatorio, lo incrustan en el hash resultante y lo extraen al verificar. No necesitás almacenar el salt por separado.</p>"
      },
      {
        "title": "¿Cuándo y cómo usar salt correctamente?",
        "content": "<p>El salt es obligatorio en estos escenarios:</p><ul><li><strong>Almacenamiento de contraseñas:</strong> SIEMPRE usá salt con bcrypt/scrypt/Argon2. Nunca hashees contraseñas con SHA-256 solo</li><li><strong>Key derivation:</strong> cuando derivás claves criptográficas de passwords (PBKDF2, scrypt) para encriptación</li><li><strong>Tokens de recuperación:</strong> algunos sistemas saltean tokens de reset de contraseña para resistir precomputation</li></ul><p>Buenas prácticas esenciales:</p><ul><li><strong>Salt único por usuario:</strong> generar uno diferente para cada contraseña, incluso si el usuario cambia su contraseña</li><li><strong>Largo mínimo:</strong> 128 bits (16 bytes) es el estándar de NIST; 256 bits es mejor. Menos de 64 bits es inseguro</li><li><strong>Generación segura:</strong> usar <code>crypto.randomBytes()</code> en Node.js, <code>secrets</code> en Python, <code>SecureRandom</code> en Java. Nunca <code>Math.random()</code></li><li><strong>No reutilizar:</strong> cada contraseña debe tener su propio salt. Reutilizar el mismo salt para todos los usuarios anula su propósito</li></ul>"
      },
      {
        "title": "Mitos y errores comunes sobre salt",
        "content": "<p>Confusiones frecuentes que comprometer la seguridad:</p><ul><li><strong>Mito:</strong> 'El salt debe ser secreto como una clave' → <strong>Falso.</strong> El salt puede ser público. Su valor está en ser aleatorio y único, no en estar oculto</li><li><strong>Error:</strong> Usar el username o email como salt → <strong>Peligroso.</strong> Esto hace el salt predecible. Debe ser aleatorio puro</li><li><strong>Error:</strong> Saltear solo con SHA-256 rápido → <strong>Insuficiente.</strong> Necesitás un algoritmo <em>lento</em> (bcrypt con 12+ rounds) para resistir fuerza bruta</li><li><strong>Error:</strong> Concatenar salt después del hash → <strong>Inútil.</strong> El salt debe ser input del hash, no un sufijo agregado al resultado</li></ul><p>Importante: el salt NO protege contra contraseñas débiles. Si tu contraseña es <code>123456</code>, con o sin salt, un atacante la romperá rápido con fuerza bruta. Salt solo previene ataques masivos con rainbow tables. La defensa completa requiere: <strong>salt + algoritmo lento + contraseña fuerte + rate limiting</strong>.</p>"
      }
    ],
    "examples": [
      "bcrypt hash con salt embebido: $2b$12$K1eZ.../9yDXm...",
      "PBKDF2 con salt: pbkdf2_sha256$260000$saltbase64$hashbase64",
      "Argon2 con salt: $argon2id$v=19$m=65536,t=3,p=4$salt$hash",
      "Generación Node.js: crypto.randomBytes(32).toString('hex')",
      "DB storage: user_id | password_hash | salt_used"
    ],
    "related": [
      "generador-de-salts-encriptacion",
      "generador-bcrypt"
    ],
    "faq": [
      {
        "q": "¿Puedo usar el mismo salt para todos mis usuarios?",
        "a": "No. Eso se llama 'pepper' (pimienta) y sirve para otro propósito. El salt DEBE ser único por usuario, sino un atacante puede precalcular rainbow tables para tu salt compartido."
      },
      {
        "q": "¿Dónde guardo el salt de forma segura?",
        "a": "En la misma columna que el hash. Herramientas como bcrypt lo incrustan automáticamente. Si usás PBKDF2 manual, podés almacenarlo en una columna separada en texto plano. No necesita encriptarse."
      },
      {
        "q": "¿El salt protege contra ataques de fuerza bruta?",
        "a": "Indirectamente. El salt previene ataques paralelos masivos con tablas precalculadas, obligando al atacante a crackear cada hash individualmente. Pero necesitás bcrypt/Argon2 (lentos) para que cada intento tarde suficiente."
      }
    ]
  },
  "en": {
    "pageTitle": "Salt (cryptography) — Glossary | Genfy",
    "metaDesc": "Salt is a unique random value added to passwords before hashing. Essential to prevent rainbow table attacks and protect credentials.",
    "h1": "Salt (cryptography)",
    "short": "In cryptography, a salt is a unique random string concatenated to a password before applying a hash function. Its purpose: ensure two users with the same password generate different hashes, making rainbow table attacks useless.",
    "body": [
      {
        "title": "What is a salt and why is it fundamental?",
        "content": "<p>A salt is a random value generated by a cryptographically secure algorithm (CSPRNG) that's combined with a password before hashing it. For example, if two users choose <code>Password123</code>, without salt both would generate the same hash:</p><p><code>SHA256('Password123') → ef92b778bafe...</code></p><p>But with unique per-user salt:</p><p><code>SHA256('Password123' + 'a8f3x9k2') → 3c5d8e1a...</code><br><code>SHA256('Password123' + 'p1q7r4m8') → 9f2b6d0e...</code></p><p>Now the hashes are different even though the password is identical. This prevents an attacker who steals your database from using <strong>rainbow tables</strong> (precomputed tables of millions of common hashes) to crack passwords in seconds. With salt, they must attack each hash individually, making the process prohibitively expensive.</p><p>Important: the salt does NOT need to be secret. It's stored in plain text alongside the hash in the database. Its security comes from being unique and random, not from being hidden.</p>"
      },
      {
        "title": "How does salting work in practice?",
        "content": "<p>The standard salting process follows these steps:</p><ul><li><strong>User registration:</strong> when the user creates their account, the server generates a random 128-256 bit salt (16-32 bytes)</li><li><strong>Combination:</strong> the salt is concatenated to the password (typically: <code>salt + password</code> or <code>password + salt</code>)</li><li><strong>Hashing:</strong> a slow hash function (bcrypt, scrypt, Argon2) is applied to the result. These functions already incorporate the salt internally</li><li><strong>Storage:</strong> the format <code>algorithm$cost$salt$hash</code> is saved in the DB, for example: <code>bcrypt$12$a8f3x9k2$ef92b778...</code></li></ul><p>At login, the server retrieves the stored salt, combines it with the entered password, hashes, and compares. If it matches, authentication is valid.</p><p>Modern tools like <strong>bcrypt</strong>, <strong>scrypt</strong>, and <strong>Argon2</strong> handle the salt automatically: they generate a random one, embed it in the resulting hash, and extract it when verifying. You don't need to store the salt separately.</p>"
      },
      {
        "title": "When and how to use salt correctly?",
        "content": "<p>Salt is mandatory in these scenarios:</p><ul><li><strong>Password storage:</strong> ALWAYS use salt with bcrypt/scrypt/Argon2. Never hash passwords with SHA-256 alone</li><li><strong>Key derivation:</strong> when deriving cryptographic keys from passwords (PBKDF2, scrypt) for encryption</li><li><strong>Recovery tokens:</strong> some systems salt password reset tokens to resist precomputation</li></ul><p>Essential best practices:</p><ul><li><strong>Unique per-user salt:</strong> generate a different one for each password, even if the user changes their password</li><li><strong>Minimum length:</strong> 128 bits (16 bytes) is the NIST standard; 256 bits is better. Less than 64 bits is insecure</li><li><strong>Secure generation:</strong> use <code>crypto.randomBytes()</code> in Node.js, <code>secrets</code> in Python, <code>SecureRandom</code> in Java. Never <code>Math.random()</code></li><li><strong>Don't reuse:</strong> each password must have its own salt. Reusing the same salt for all users defeats its purpose</li></ul>"
      },
      {
        "title": "Myths and common mistakes about salt",
        "content": "<p>Frequent confusions that compromise security:</p><ul><li><strong>Myth:</strong> 'Salt must be secret like a key' → <strong>False.</strong> Salt can be public. Its value is in being random and unique, not in being hidden</li><li><strong>Mistake:</strong> Using username or email as salt → <strong>Dangerous.</strong> This makes salt predictable. It must be pure random</li><li><strong>Mistake:</strong> Salting only with fast SHA-256 → <strong>Insufficient.</strong> You need a <em>slow</em> algorithm (bcrypt with 12+ rounds) to resist brute force</li><li><strong>Mistake:</strong> Concatenating salt after the hash → <strong>Useless.</strong> Salt must be input to the hash, not a suffix added to the result</li></ul><p>Important: salt does NOT protect against weak passwords. If your password is <code>123456</code>, with or without salt, an attacker will break it quickly with brute force. Salt only prevents mass attacks with rainbow tables. Complete defense requires: <strong>salt + slow algorithm + strong password + rate limiting</strong>.</p>"
      }
    ],
    "examples": [
      "bcrypt hash with embedded salt: $2b$12$K1eZ.../9yDXm...",
      "PBKDF2 with salt: pbkdf2_sha256$260000$saltbase64$hashbase64",
      "Argon2 with salt: $argon2id$v=19$m=65536,t=3,p=4$salt$hash",
      "Node.js generation: crypto.randomBytes(32).toString('hex')",
      "DB storage: user_id | password_hash | salt_used"
    ],
    "related": [
      "encryption-salt-generator",
      "bcrypt-generator"
    ],
    "faq": [
      {
        "q": "Can I use the same salt for all my users?",
        "a": "No. That's called a 'pepper' and serves a different purpose. Salt MUST be unique per user, otherwise an attacker can precompute rainbow tables for your shared salt."
      },
      {
        "q": "Where do I store the salt securely?",
        "a": "In the same column as the hash. Tools like bcrypt embed it automatically. If you use manual PBKDF2, you can store it in a separate column in plain text. It doesn't need encryption."
      },
      {
        "q": "Does salt protect against brute force attacks?",
        "a": "Indirectly. Salt prevents mass parallel attacks with precomputed tables, forcing the attacker to crack each hash individually. But you need bcrypt/Argon2 (slow) so each attempt takes long enough."
      }
    ]
  }
};
