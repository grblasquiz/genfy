import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "base64",
    "en": "base64"
  },
  "emoji": "🔤",
  "category": "tech",
  "es": {
    "pageTitle": "Base64 — Glosario | Genfy",
    "metaDesc": "Base64 convierte datos binarios en texto ASCII de 64 caracteres. Descubrí cómo funciona y por qué es clave para imágenes, tokens y certificados en web.",
    "h1": "Base64",
    "short": "Base64 es un esquema de codificación que transforma datos binarios en una secuencia de caracteres ASCII imprimibles usando un alfabeto de 64 símbolos. Se usa ampliamente para transmitir archivos binarios a través de protocolos de texto como email, JSON o URLs.",
    "body": [
      {
        "title": "¿Qué es Base64 y por qué importa?",
        "content": "<p>Base64 es un método de codificación que convierte datos binarios arbitrarios (imágenes, PDFs, audio) en texto ASCII puro usando únicamente 64 caracteres seguros: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>+</code> y <code>/</code>. El signo <code>=</code> funciona como padding cuando el tamaño del input no es múltiplo de 3 bytes.</p><p>Su importancia radica en que muchos protocolos y formatos de datos solo soportan texto: HTTP headers, JSON, XML, SMTP. Antes de Base64, enviar una imagen por email era imposible sin corromper los bytes. Hoy, cada vez que ves <code>data:image/png;base64,iVBORw0KG...</code> en un HTML, estás viendo Base64 en acción.</p><p>Importante: <strong>Base64 NO es encriptación ni compresión</strong>. Es simplemente una representación alternativa de los mismos datos. El resultado es aproximadamente 33% más grande que el original porque cada 3 bytes se convierten en 4 caracteres ASCII.</p>"
      },
      {
        "title": "¿Cómo funciona el algoritmo Base64?",
        "content": "<p>El proceso de codificación sigue estos pasos:</p><ul><li>Los datos binarios se dividen en bloques de 3 bytes (24 bits)</li><li>Cada bloque de 24 bits se subdivide en cuatro grupos de 6 bits</li><li>Cada grupo de 6 bits (valores 0-63) se mapea a un carácter del alfabeto Base64</li><li>Si el último bloque no completa 3 bytes, se agregan bits cero y se añade padding con <code>=</code></li></ul><p>Por ejemplo, la palabra <strong>Man</strong> en ASCII es <code>77 97 110</code> en decimal, o <code>01001101 01100001 01101110</code> en binario. Agrupados en 6 bits: <code>010011</code> <code>010110</code> <code>000101</code> <code>101110</code>, que corresponden a los índices 19, 22, 5, 46 del alfabeto Base64: <code>TWFu</code>.</p><p>La decodificación invierte el proceso: cada 4 caracteres Base64 regeneran 3 bytes originales. Este mapeo matemático predecible hace que Base64 sea rápido y determinista en cualquier plataforma.</p>"
      },
      {
        "title": "¿Cuándo usar Base64?",
        "content": "<p>Base64 es la solución estándar en estos escenarios:</p><ul><li><strong>Data URIs:</strong> incrustar imágenes pequeñas o íconos directamente en CSS o HTML para reducir requests HTTP</li><li><strong>Tokens y autenticación:</strong> JWT (JSON Web Tokens) codifica headers y payloads en Base64url (variante segura para URLs)</li><li><strong>Email attachments:</strong> MIME codifica archivos adjuntos en Base64 para viajar por SMTP sin corrupción</li><li><strong>Certificados y claves:</strong> archivos PEM usan Base64 para representar claves RSA/ECDSA en texto ASCII</li><li><strong>APIs REST:</strong> cuando necesitás enviar binarios en JSON (que no soporta binario nativo)</li></ul><p>Sin embargo, <strong>evitá Base64 para archivos grandes</strong>: el 33% de overhead se vuelve costoso. Para transferencias grandes preferí multipart/form-data o cargas binarias directas. Tampoco uses Base64 como 'ofuscación' de datos sensibles: cualquiera puede decodificarlo instantáneamente.</p>"
      },
      {
        "title": "Variantes y consideraciones de seguridad",
        "content": "<p>Existen variantes de Base64 adaptadas a contextos específicos:</p><ul><li><strong>Base64url:</strong> reemplaza <code>+</code> por <code>-</code> y <code>/</code> por <code>_</code>, eliminando <code>=</code> padding. Seguro para URLs y nombres de archivo (RFC 4648)</li><li><strong>Base64 MIME:</strong> inserta saltos de línea cada 76 caracteres para compatibilidad con emails antiguos</li><li><strong>Base32:</strong> alfabeto de 32 caracteres, más legible por humanos pero 20% menos eficiente</li></ul><p><strong>Advertencia de seguridad:</strong> Base64 es reversible en milisegundos. Nunca codifiques contraseñas, API keys o secrets en Base64 pensando que están 'protegidos'. Para datos sensibles usá encriptación real (AES, RSA) con gestión adecuada de claves. Base64 solo debe usarse para <em>transporte</em> de datos, no para <em>protección</em> de datos.</p>"
      }
    ],
    "examples": [
      "Texto 'Hello' → Base64: SGVsbG8=",
      "Data URI de imagen: data:image/png;base64,iVBORw0KGgoAAAANS...",
      "JWT Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      "Certificado PEM: -----BEGIN CERTIFICATE----- MIIDXTCCAkW... -----END CERTIFICATE-----",
      "Archivo adjunto MIME: Content-Transfer-Encoding: base64"
    ],
    "related": [
      "codificador-base64",
      "decodificador-base64"
    ],
    "faq": [
      {
        "q": "¿Por qué Base64 aumenta el tamaño un 33%?",
        "a": "Porque cada 3 bytes (24 bits) se convierten en 4 caracteres (32 bits de datos útiles + overhead de ASCII). La relación 3:4 genera el incremento matemático de 1.333x."
      },
      {
        "q": "¿Puedo usar Base64 para 'ocultar' datos sensibles?",
        "a": "No. Base64 es codificación, no encriptación. Cualquiera puede decodificarlo con herramientas básicas. Para datos sensibles usá AES-256, RSA u otros algoritmos criptográficos reales."
      },
      {
        "q": "¿Cuál es la diferencia entre Base64 y Base64url?",
        "a": "Base64url reemplaza + por - y / por _ para evitar conflictos en URLs y filesystems. También elimina el padding = al final, haciendo los strings seguros para cualquier contexto web."
      }
    ]
  },
  "en": {
    "pageTitle": "Base64 — Glossary | Genfy",
    "metaDesc": "Base64 converts binary data to 64-character ASCII text. Learn how it works and why it's essential for images, tokens, and certificates on the web.",
    "h1": "Base64",
    "short": "Base64 is an encoding scheme that transforms binary data into a sequence of printable ASCII characters using a 64-symbol alphabet. It's widely used to transmit binary files through text-based protocols like email, JSON, or URLs.",
    "body": [
      {
        "title": "What is Base64 and why does it matter?",
        "content": "<p>Base64 is an encoding method that converts arbitrary binary data (images, PDFs, audio) into pure ASCII text using only 64 safe characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>+</code>, and <code>/</code>. The <code>=</code> symbol serves as padding when the input size isn't a multiple of 3 bytes.</p><p>Its importance lies in the fact that many protocols and data formats only support text: HTTP headers, JSON, XML, SMTP. Before Base64, sending an image via email was impossible without corrupting bytes. Today, every time you see <code>data:image/png;base64,iVBORw0KG...</code> in HTML, you're seeing Base64 in action.</p><p>Important: <strong>Base64 is NOT encryption or compression</strong>. It's simply an alternative representation of the same data. The result is approximately 33% larger than the original because every 3 bytes convert to 4 ASCII characters.</p>"
      },
      {
        "title": "How does the Base64 algorithm work?",
        "content": "<p>The encoding process follows these steps:</p><ul><li>Binary data is divided into 3-byte blocks (24 bits)</li><li>Each 24-bit block is subdivided into four 6-bit groups</li><li>Each 6-bit group (values 0-63) maps to a character in the Base64 alphabet</li><li>If the last block doesn't complete 3 bytes, zero bits are added and padding with <code>=</code> is appended</li></ul><p>For example, the word <strong>Man</strong> in ASCII is <code>77 97 110</code> in decimal, or <code>01001101 01100001 01101110</code> in binary. Grouped into 6 bits: <code>010011</code> <code>010110</code> <code>000101</code> <code>101110</code>, which correspond to indices 19, 22, 5, 46 in the Base64 alphabet: <code>TWFu</code>.</p><p>Decoding reverses the process: every 4 Base64 characters regenerate 3 original bytes. This predictable mathematical mapping makes Base64 fast and deterministic on any platform.</p>"
      },
      {
        "title": "When to use Base64?",
        "content": "<p>Base64 is the standard solution in these scenarios:</p><ul><li><strong>Data URIs:</strong> embed small images or icons directly in CSS or HTML to reduce HTTP requests</li><li><strong>Tokens and authentication:</strong> JWT (JSON Web Tokens) encodes headers and payloads in Base64url (URL-safe variant)</li><li><strong>Email attachments:</strong> MIME encodes file attachments in Base64 to travel through SMTP without corruption</li><li><strong>Certificates and keys:</strong> PEM files use Base64 to represent RSA/ECDSA keys in ASCII text</li><li><strong>REST APIs:</strong> when you need to send binaries in JSON (which doesn't support native binary)</li></ul><p>However, <strong>avoid Base64 for large files</strong>: the 33% overhead becomes expensive. For large transfers prefer multipart/form-data or direct binary uploads. Also don't use Base64 as 'obfuscation' for sensitive data: anyone can decode it instantly.</p>"
      },
      {
        "title": "Variants and security considerations",
        "content": "<p>Base64 variants exist adapted to specific contexts:</p><ul><li><strong>Base64url:</strong> replaces <code>+</code> with <code>-</code> and <code>/</code> with <code>_</code>, eliminating <code>=</code> padding. Safe for URLs and filenames (RFC 4648)</li><li><strong>Base64 MIME:</strong> inserts line breaks every 76 characters for legacy email compatibility</li><li><strong>Base32:</strong> 32-character alphabet, more human-readable but 20% less efficient</li></ul><p><strong>Security warning:</strong> Base64 is reversible in milliseconds. Never encode passwords, API keys, or secrets in Base64 thinking they're 'protected'. For sensitive data use real encryption (AES, RSA) with proper key management. Base64 should only be used for data <em>transport</em>, not data <em>protection</em>.</p>"
      }
    ],
    "examples": [
      "Text 'Hello' → Base64: SGVsbG8=",
      "Image Data URI: data:image/png;base64,iVBORw0KGgoAAAANS...",
      "JWT Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      "PEM Certificate: -----BEGIN CERTIFICATE----- MIIDXTCCAkW... -----END CERTIFICATE-----",
      "MIME Attachment: Content-Transfer-Encoding: base64"
    ],
    "related": [
      "base64-encoder",
      "base64-decoder"
    ],
    "faq": [
      {
        "q": "Why does Base64 increase size by 33%?",
        "a": "Because every 3 bytes (24 bits) convert to 4 characters (32 bits of useful data + ASCII overhead). The 3:4 ratio generates the mathematical increase of 1.333x."
      },
      {
        "q": "Can I use Base64 to 'hide' sensitive data?",
        "a": "No. Base64 is encoding, not encryption. Anyone can decode it with basic tools. For sensitive data use AES-256, RSA, or other real cryptographic algorithms."
      },
      {
        "q": "What's the difference between Base64 and Base64url?",
        "a": "Base64url replaces + with - and / with _ to avoid conflicts in URLs and filesystems. It also removes the = padding at the end, making strings safe for any web context."
      }
    ]
  }
};
