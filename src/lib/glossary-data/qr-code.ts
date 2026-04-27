import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "qr-code",
    "en": "qr-code"
  },
  "emoji": "📱",
  "category": "tech",
  "es": {
    "pageTitle": "Código QR — Glosario | Genfy",
    "metaDesc": "Quick Response code: matriz bidimensional que codifica hasta 2.953 bytes con corrección de errores Reed-Solomon. Aprende capacidad, niveles y casos de uso.",
    "h1": "Código QR",
    "short": "Un código QR (Quick Response) es una matriz bidimensional de módulos negros y blancos que codifica datos de forma óptica. Puede almacenar hasta 2.953 bytes y usa corrección de errores Reed-Solomon en 4 niveles, permitiendo lectura incluso con hasta 30% de daño.",
    "body": [
      {
        "title": "¿Qué es un Código QR?",
        "html": "<p>El <strong>código QR</strong> fue inventado en 1994 por Denso Wave (subsidiaria de Toyota) para trackear piezas en manufactura automotriz. Necesitaban algo que se leyera más rápido que los códigos de barras tradicionales, de ahí el nombre <em>Quick Response</em>.</p><p>Es una matriz 2D de cuadrados (módulos) negros sobre fondo blanco. A diferencia de un código de barras 1D que almacena ~20 caracteres, un QR puede guardar <strong>hasta 4.296 caracteres alfanuméricos</strong> o <strong>2.953 bytes</strong> en binario.</p><p>La magia está en tres componentes clave: los <strong>patrones de posición</strong> (los tres cuadrados grandes en las esquinas) que permiten detectar el código en cualquier orientación, los <strong>patrones de alineamiento</strong> (cuadrados pequeños internos en códigos grandes) que corrigen distorsión, y los <strong>patrones de temporización</strong> (líneas alternas) que definen el tamaño de los módulos.</p><p>El QR es un estándar ISO/IEC 18004 desde 2000. Denso Wave liberó la patente para uso público, lo que lo volvió universal. Hoy lo ves en pagos (Mercado Pago, PayPal), publicidad, autenticación 2FA, WiFi (compartir credenciales) y menús de restaurantes post-pandemia.</p>"
      },
      {
        "title": "Capacidad y Corrección de Errores",
        "html": "<p>La capacidad depende de tres factores: <strong>versión</strong> (tamaño de la matriz), <strong>nivel de corrección</strong> y <strong>tipo de dato</strong>.</p><p><strong>Versión</strong>: va de 1 a 40. Versión 1 es 21×21 módulos, cada versión suma 4 módulos por lado. Versión 40 es 177×177 (31.329 módulos totales). Mayor versión = más datos, pero más difícil de escanear desde lejos.</p><p><strong>Niveles de corrección Reed-Solomon</strong>:</p><ul><li><strong>L (Low)</strong>: recupera hasta 7% de daño. Usa menos espacio para corrección, más para datos.</li><li><strong>M (Medium)</strong>: 15% de daño. Balance estándar.</li><li><strong>Q (Quartile)</strong>: 25% de daño. Recomendado para entornos industriales.</li><li><strong>H (High)</strong>: 30% de daño. Permite incorporar logos o diseños sobre el código.</li></ul><p><strong>Tipo de dato</strong>: numérico (3,4 bits por dígito), alfanumérico (5,5 bits por char: A-Z, 0-9, algunos símbolos), byte/binario (8 bits), kanji (13 bits). Ejemplo: 4.296 caracteres numéricos vs 2.953 bytes vs 1.817 kanji.</p><p>Un QR Versión 10, nivel M, puede guardar ~220 caracteres alfanuméricos. Suficiente para una URL larga o un JSON compacto.</p>"
      },
      {
        "title": "Casos de Uso Modernos",
        "html": "<p><strong>Pagos móviles</strong>: Mercado Pago, PayPal QR. El código contiene ID de comerciante + monto + referencia. La app del usuario lo escanea y confirma el pago sin tipear nada.</p><p><strong>WiFi compartido</strong>: formato estándar <code>WIFI:T:WPA;S:nombre_red;P:contraseña;;</code>. Escaneás y te conectás automáticamente, sin tipear la clave.</p><p><strong>Autenticación 2FA</strong>: Google Authenticator, Authy. El QR codifica una URI <code>otpauth://totp/</code> con el secret key. Un escaneo configura la app.</p><p><strong>Trazabilidad industrial</strong>: cada pieza lleva un QR con lote, fecha, origen. Se escanea en cada etapa de producción para trackear en tiempo real.</p><p><strong>Menús digitales</strong>: restaurantes post-COVID. El QR en la mesa lleva a un PDF o web app con el menú. Actualizable sin reimprimir.</p><p><strong>Marketing y packaging</strong>: códigos QR con nivel H permiten incrustar el logo de la marca en el centro, manteniendo escaneabilidad. Llevan a landing pages con tracking de campaña.</p>"
      },
      {
        "title": "Generación y Mejores Prácticas",
        "html": "<p>Generá QRs con librerías confiables: <code>qrcode</code> (JavaScript), <code>qrcode</code> (Python), ZXing (Java). Nunca confíes en servicios online desconocidos para datos sensibles: pueden loguear lo que codificás.</p><p><strong>Nivel de corrección</strong>: usá L o M si el código estará limpio y bien iluminado. Usá Q o H si estará en entornos sucios, pequeños o si querés agregar un logo. Probar escaneabilidad real después de agregar diseño custom.</p><p><strong>Tamaño físico</strong>: regla general: el QR debe tener al menos 2cm × 2cm para escaneo desde 10cm. Para lectura desde 1 metro, mínimo 10cm × 10cm. Calculá: tamaño_mínimo = distancia_lectura / 10.</p><p><strong>Contraste</strong>: módulos oscuros sobre fondo claro. Funciona negro/blanco, azul/blanco, pero no amarillo/blanco (poco contraste). Nunca módulos claros sobre fondo oscuro: confunde a la mayoría de scanners.</p><p><strong>URLs cortas</strong>: usá un acortador (bit.ly, tu propio dominio corto) para reducir versión del QR. Menos módulos = más fácil de escanear. <code>ejemplo.com/p/abc</code> mejor que <code>https://www.ejemplo.com/productos/categoria/item?id=12345&ref=qr</code>.</p>"
      }
    ],
    "examples": [
      "URL: https://genfy.app → 62 caracteres, Versión 3, nivel M",
      "WiFi: WIFI:T:WPA;S:MiRed;P:contraseña123;; → conectar automáticamente",
      "2FA: otpauth://totp/Google:user@example.com?secret=JBSWY3DP → Google Authenticator",
      "vCard: BEGIN:VCARD\\nFN:Juan Pérez\\nTEL:+5491112345678\\nEND:VCARD → contacto",
      "JSON: {\"id\":\"abc123\",\"amount\":1500} → 32 bytes, Versión 2"
    ],
    "related": [
      "generador-de-codigos-qr",
      "generador-favicon"
    ],
    "faq": [
      {
        "q": "¿Cuántos datos puedo meter en un código QR?",
        "a": "Hasta 2.953 bytes (binario) o 4.296 dígitos numéricos o 1.817 caracteres kanji. Pero a mayor capacidad, más complejo y grande el código. Práctica: mantené bajo 200 caracteres para buena escaneabilidad."
      },
      {
        "q": "¿Puedo poner un logo en el centro del QR?",
        "a": "Sí, si usás nivel de corrección H (30%). El logo debe ocupar menos del 25% del área total y preferiblemente cubrir la zona central (menos crítica). Probá escaneabilidad después de agregar el logo."
      },
      {
        "q": "¿Por qué mi QR no se escanea bien?",
        "a": "Causas comunes: poco contraste (colores claros), tamaño muy pequeño, distancia de lectura excesiva, superficie arrugada o reflectante, o demasiados datos (versión muy alta). Usá negro sobre blanco y probá en múltiples apps."
      }
    ]
  },
  "en": {
    "pageTitle": "QR Code — Glossary | Genfy",
    "metaDesc": "Quick Response code: two-dimensional matrix encoding up to 2,953 bytes with Reed-Solomon error correction. Learn capacity, levels and real-world use cases.",
    "h1": "QR Code",
    "short": "A QR code (Quick Response) is a two-dimensional matrix of black and white modules that encodes data optically. It can store up to 2,953 bytes and uses Reed-Solomon error correction at 4 levels, enabling reading even with up to 30% damage.",
    "body": [
      {
        "title": "What is a QR Code?",
        "html": "<p>The <strong>QR code</strong> was invented in 1994 by Denso Wave (a Toyota subsidiary) to track parts in automotive manufacturing. They needed something that could be read faster than traditional barcodes, hence the name <em>Quick Response</em>.</p><p>It's a 2D matrix of black squares (modules) on a white background. Unlike a 1D barcode that stores ~20 characters, a QR can hold <strong>up to 4,296 alphanumeric characters</strong> or <strong>2,953 bytes</strong> in binary.</p><p>The magic lies in three key components: the <strong>position patterns</strong> (three large squares in corners) that allow detecting the code in any orientation, the <strong>alignment patterns</strong> (small internal squares in large codes) that correct distortion, and the <strong>timing patterns</strong> (alternating lines) that define module size.</p><p>QR is an ISO/IEC 18004 standard since 2000. Denso Wave released the patent for public use, making it universal. Today you see it in payments (PayPal, Venmo), advertising, 2FA authentication, WiFi (sharing credentials), and restaurant menus post-pandemic.</p>"
      },
      {
        "title": "Capacity and Error Correction",
        "html": "<p>Capacity depends on three factors: <strong>version</strong> (matrix size), <strong>correction level</strong>, and <strong>data type</strong>.</p><p><strong>Version</strong>: ranges from 1 to 40. Version 1 is 21×21 modules, each version adds 4 modules per side. Version 40 is 177×177 (31,329 total modules). Higher version = more data, but harder to scan from distance.</p><p><strong>Reed-Solomon correction levels</strong>:</p><ul><li><strong>L (Low)</strong>: recovers up to 7% damage. Uses less space for correction, more for data.</li><li><strong>M (Medium)</strong>: 15% damage. Standard balance.</li><li><strong>Q (Quartile)</strong>: 25% damage. Recommended for industrial environments.</li><li><strong>H (High)</strong>: 30% damage. Allows embedding logos or designs over the code.</li></ul><p><strong>Data type</strong>: numeric (3.4 bits per digit), alphanumeric (5.5 bits per char: A-Z, 0-9, some symbols), byte/binary (8 bits), kanji (13 bits). Example: 4,296 numeric characters vs 2,953 bytes vs 1,817 kanji.</p><p>A Version 10, level M QR can store ~220 alphanumeric characters. Enough for a long URL or compact JSON.</p>"
      },
      {
        "title": "Modern Use Cases",
        "html": "<p><strong>Mobile payments</strong>: PayPal QR, Venmo. The code contains merchant ID + amount + reference. User's app scans and confirms payment without typing anything.</p><p><strong>WiFi sharing</strong>: standard format <code>WIFI:T:WPA;S:network_name;P:password;;</code>. Scan and connect automatically, no password typing.</p><p><strong>2FA authentication</strong>: Google Authenticator, Authy. The QR encodes an <code>otpauth://totp/</code> URI with the secret key. One scan configures the app.</p><p><strong>Industrial traceability</strong>: each part carries a QR with batch, date, origin. Scanned at each production stage for real-time tracking.</p><p><strong>Digital menus</strong>: post-COVID restaurants. QR on the table leads to a PDF or web app with the menu. Updatable without reprinting.</p><p><strong>Marketing and packaging</strong>: QR codes with level H allow embedding the brand logo in the center while maintaining scannability. Lead to landing pages with campaign tracking.</p>"
      },
      {
        "title": "Generation and Best Practices",
        "html": "<p>Generate QRs with reliable libraries: <code>qrcode</code> (JavaScript), <code>qrcode</code> (Python), ZXing (Java). Never trust unknown online services for sensitive data: they can log what you encode.</p><p><strong>Correction level</strong>: use L or M if the code will be clean and well-lit. Use Q or H if it'll be in dirty environments, small sizes, or if you want to add a logo. Test real scannability after adding custom design.</p><p><strong>Physical size</strong>: rule of thumb: QR must be at least 2cm × 2cm for scanning from 10cm. For reading from 1 meter, minimum 10cm × 10cm. Calculate: minimum_size = reading_distance / 10.</p><p><strong>Contrast</strong>: dark modules on light background. Black/white, blue/white work, but not yellow/white (low contrast). Never light modules on dark background: confuses most scanners.</p><p><strong>Short URLs</strong>: use a shortener (bit.ly, your own short domain) to reduce QR version. Fewer modules = easier to scan. <code>example.com/p/abc</code> better than <code>https://www.example.com/products/category/item?id=12345&ref=qr</code>.</p>"
      }
    ],
    "examples": [
      "URL: https://genfy.app → 62 characters, Version 3, level M",
      "WiFi: WIFI:T:WPA;S:MyNetwork;P:password123;; → auto-connect",
      "2FA: otpauth://totp/Google:user@example.com?secret=JBSWY3DP → Google Authenticator",
      "vCard: BEGIN:VCARD\\nFN:John Doe\\nTEL:+15551234567\\nEND:VCARD → contact",
      "JSON: {\"id\":\"abc123\",\"amount\":1500} → 32 bytes, Version 2"
    ],
    "related": [
      "qr-code-generator",
      "favicon-text-generator"
    ],
    "faq": [
      {
        "q": "How much data can I put in a QR code?",
        "a": "Up to 2,953 bytes (binary) or 4,296 numeric digits or 1,817 kanji characters. But higher capacity means more complex and larger code. Practical: keep under 200 characters for good scannability."
      },
      {
        "q": "Can I put a logo in the center of the QR?",
        "a": "Yes, if you use correction level H (30%). The logo must occupy less than 25% of total area and preferably cover the central zone (less critical). Test scannability after adding the logo."
      },
      {
        "q": "Why doesn't my QR scan well?",
        "a": "Common causes: low contrast (light colors), too small size, excessive reading distance, wrinkled or reflective surface, or too much data (very high version). Use black on white and test in multiple apps."
      }
    ]
  }
};
