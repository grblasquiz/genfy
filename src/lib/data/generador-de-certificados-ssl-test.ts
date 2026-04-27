import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-certificados-ssl-test",
    "en": "ssl-test-certificate-generator"
  },
  "category": "security",
  "emoji": "🔐",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Certificados SSL para Testing | Genfy",
    "metaDesc": "Generá comandos para crear certificados SSL autofirmados para desarrollo y testing. Configurá HTTPS en entornos locales con OpenSSL de forma segura.",
    "h1": "Generador de Certificados SSL para Testing",
    "intro": "Obtené comandos y configuraciones para generar certificados SSL/TLS autofirmados en entornos de desarrollo. Testea HTTPS localmente sin comprometer seguridad.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de Certificado",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "openssl-basic",
        "label": "OpenSSL Básico",
        "items": [
          "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes",
          "openssl req -x509 -newkey rsa:2048 -nodes -keyout localhost.key -out localhost.crt -days 365",
          "openssl genrsa -out private-key.pem 2048",
          "openssl req -new -key private-key.pem -out csr.pem",
          "openssl x509 -req -in csr.pem -signkey private-key.pem -out certificate.pem -days 365",
          "openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt",
          "openssl req -newkey rsa:2048 -nodes -keyout domain.key -x509 -days 365 -out domain.crt",
          "openssl genrsa -aes256 -out encrypted-key.pem 4096",
          "openssl rsa -in encrypted-key.pem -out decrypted-key.pem",
          "openssl x509 -in cert.pem -text -noout",
          "openssl verify -CAfile ca-cert.pem cert.pem",
          "openssl s_client -connect localhost:443 -showcerts",
          "openssl pkcs12 -export -out certificate.pfx -inkey key.pem -in cert.pem",
          "openssl pkcs12 -in certificate.pfx -out certificate.pem -nodes",
          "openssl dhparam -out dhparam.pem 2048"
        ]
      },
      {
        "id": "san-wildcard",
        "label": "SAN y Wildcard",
        "items": [
          "openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=*.example.com'",
          "openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout wildcard.key -out wildcard.crt -subj '/CN=*.localhost'",
          "openssl req -config <(cat /etc/ssl/openssl.cnf <(printf '[SAN]\\nsubjectAltName=DNS:localhost,DNS:127.0.0.1')) -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365",
          "openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout multi.key -out multi.crt -subj '/CN=localhost' -addext 'subjectAltName=DNS:localhost,DNS:*.localhost,IP:127.0.0.1'",
          "openssl req -new -key domain.key -out domain.csr -config <(cat /etc/ssl/openssl.cnf <(printf '[SAN]\\nsubjectAltName=DNS:example.com,DNS:www.example.com'))",
          "openssl x509 -req -in domain.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out domain.crt -days 365 -sha256 -extfile <(printf 'subjectAltName=DNS:example.com,DNS:*.example.com')"
        ]
      },
      {
        "id": "ca-authority",
        "label": "Certificate Authority",
        "items": [
          "openssl genrsa -out ca-key.pem 4096",
          "openssl req -new -x509 -days 3650 -key ca-key.pem -out ca-cert.pem -subj '/CN=My Local CA'",
          "openssl req -newkey rsa:2048 -nodes -keyout server-key.pem -out server-csr.pem",
          "openssl x509 -req -in server-csr.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -days 365",
          "openssl ca -config openssl-ca.cnf -in server.csr -out server.crt -days 365",
          "openssl ca -config openssl-ca.cnf -revoke bad-cert.pem",
          "openssl ca -config openssl-ca.cnf -gencrl -out crl.pem"
        ]
      },
      {
        "id": "mkcert",
        "label": "mkcert (recomendado)",
        "items": [
          "mkcert -install",
          "mkcert localhost 127.0.0.1 ::1",
          "mkcert example.com '*.example.com'",
          "mkcert -cert-file cert.pem -key-file key.pem localhost",
          "mkcert -CAROOT",
          "mkcert -uninstall",
          "mkcert myapp.local '*.myapp.local'"
        ]
      },
      {
        "id": "docker-compose",
        "label": "Configuración Docker",
        "items": [
          "# docker-compose.yml\\nservices:\\n  nginx:\\n    image: nginx:alpine\\n    volumes:\\n      - ./cert.pem:/etc/nginx/ssl/cert.pem\\n      - ./key.pem:/etc/nginx/ssl/key.pem\\n    ports:\\n      - '443:443'",
          "# nginx.conf\\nserver {\\n  listen 443 ssl;\\n  ssl_certificate /etc/nginx/ssl/cert.pem;\\n  ssl_certificate_key /etc/nginx/ssl/key.pem;\\n  ssl_protocols TLSv1.2 TLSv1.3;\\n}",
          "# Dockerfile\\nFROM nginx:alpine\\nCOPY cert.pem /etc/nginx/ssl/\\nCOPY key.pem /etc/nginx/ssl/\\nCOPY nginx.conf /etc/nginx/conf.d/default.conf"
        ]
      },
      {
        "id": "node-express",
        "label": "Node.js/Express",
        "items": [
          "const https = require('https');\\nconst fs = require('fs');\\nconst options = {\\n  key: fs.readFileSync('key.pem'),\\n  cert: fs.readFileSync('cert.pem')\\n};\\nhttps.createServer(options, app).listen(443);",
          "// Express con certificados\\nconst express = require('express');\\nconst https = require('https');\\nconst fs = require('fs');\\nconst app = express();\\nconst server = https.createServer({\\n  key: fs.readFileSync('./key.pem'),\\n  cert: fs.readFileSync('./cert.pem')\\n}, app);\\nserver.listen(3000);",
          "// Redirección HTTP a HTTPS\\napp.use((req, res, next) => {\\n  if (!req.secure) {\\n    return res.redirect('https://' + req.headers.host + req.url);\\n  }\\n  next();\\n});"
        ]
      },
      {
        "id": "apache-nginx",
        "label": "Apache/Nginx Config",
        "items": [
          "# Apache VirtualHost\\n<VirtualHost *:443>\\n  ServerName localhost\\n  SSLEngine on\\n  SSLCertificateFile /path/to/cert.pem\\n  SSLCertificateKeyFile /path/to/key.pem\\n</VirtualHost>",
          "# Nginx Server Block\\nserver {\\n  listen 443 ssl http2;\\n  server_name localhost;\\n  ssl_certificate /path/to/cert.pem;\\n  ssl_certificate_key /path/to/key.pem;\\n  ssl_protocols TLSv1.2 TLSv1.3;\\n  ssl_ciphers HIGH:!aNULL:!MD5;\\n}",
          "# Nginx con HSTS\\nadd_header Strict-Transport-Security 'max-age=31536000; includeSubDomains' always;",
          "# Apache con headers de seguridad\\nHeader always set Strict-Transport-Security 'max-age=31536000'\\nHeader always set X-Frame-Options DENY\\nHeader always set X-Content-Type-Options nosniff"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué necesitás HTTPS en desarrollo",
        "body": "<p>Desarrollar sobre HTTP en 2024 no es solo mala práctica: <strong>rompe funcionalidad real</strong>. APIs modernas como Service Workers, Push Notifications, getUserMedia (cámara/micrófono), Geolocation, y Clipboard requieren contexto seguro (HTTPS) para funcionar. Chrome y Firefox bloquean estas features en HTTP desde hace años.</p><p>Otro problema: el <strong>comportamiento de cookies cambió</strong>. SameSite=None (necesario para cookies cross-site) requiere flag Secure, que solo funciona en HTTPS. Si tu app usa autenticación con cookies entre subdominios o integraciones OAuth, vas a tener bugs en producción que no aparecen en desarrollo HTTP.</p><p>Mixed Content es otro dolor de cabeza: si tu app final corre en HTTPS pero desarrollás en HTTP, no vas a detectar requests bloqueados a recursos HTTP (imágenes, scripts, APIs). Esto genera bugs silenciosos que solo aparecen en producción.</p><p>Finalmente, <strong>diferencias de red entre HTTP y HTTPS</strong> afectan performance: HTTP/2 solo está disponible sobre TLS, y características como Server Push y multiplexing se comportan diferente. Testear sobre HTTP te da métricas falsas de velocidad.</p>"
      },
      {
        "h2": "mkcert: la herramienta que deberías usar",
        "body": "<p>Olvidate de comandos OpenSSL complicados. <strong>mkcert</strong> es una herramienta Go que genera certificados confiables localmente en un solo comando, instalando su propia CA en el trust store de tu sistema.</p><p>Instalación: <code>brew install mkcert</code> (Mac), <code>choco install mkcert</code> (Windows), o <code>apt install mkcert</code> (Linux). Luego <code>mkcert -install</code> para instalar la CA local (solo una vez).</p><p>Generar certificado: <code>mkcert localhost 127.0.0.1 ::1</code> crea dos archivos (localhost.pem y localhost-key.pem) que funcionan inmediatamente en Chrome, Firefox, Safari y Edge sin warnings de seguridad.</p><p>Para wildcards: <code>mkcert '*.myapp.local'</code> cubre todos los subdominios. Esto es útil para arquitecturas multi-tenant o cuando testeas con subdominios dinámicos.</p><p>Ventajas sobre OpenSSL: no tenés que editar archivos de config, no hay que importar manualmente CAs en cada navegador, funciona out-of-the-box con herramientas como curl y wget, y los certificados son válidos automáticamente en todos los browsers que respeten el system trust store.</p><p>Para CI/CD: mkcert no es para producción, solo desarrollo. En pipelines, usá certificados autofirmados con OpenSSL y configurá el cliente HTTP para ignorar validación SSL (solo en tests, nunca en prod).</p>"
      },
      {
        "h2": "Certificados con Subject Alternative Names (SAN)",
        "body": "<p>Los certificados modernos requieren <strong>SAN (Subject Alternative Names)</strong> para especificar múltiples dominios. El campo CN (Common Name) está deprecado desde 2017 y Chrome/Firefox lo ignoran.</p><p>Para generar un cert con SAN en OpenSSL (sin mkcert), necesitás un archivo de configuración. Comando rápido: <code>openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365 -subj '/CN=localhost' -addext 'subjectAltName=DNS:localhost,DNS:*.localhost,IP:127.0.0.1'</code></p><p>Esto crea un certificado válido para localhost, todos sus subdominios (*.localhost), y la IP 127.0.0.1. Esencial si tu app usa tanto localhost como 127.0.0.1 indistintamente (común en Docker).</p><p>Para wildcards: <code>DNS:*.example.local</code> cubre sub.example.local pero NO example.local. Tenés que incluir ambos: <code>DNS:example.local,DNS:*.example.local</code>.</p><p>Error común: olvidar incluir la IP. Si tu app hace requests a https://127.0.0.1:3000, necesitás <code>IP:127.0.0.1</code> en el SAN, no solo <code>DNS:localhost</code>.</p><p>Para verificar SANs en un certificado existente: <code>openssl x509 -in cert.pem -text -noout | grep 'Subject Alternative Name' -A 1</code></p>"
      },
      {
        "h2": "Configuración en frameworks y servidores",
        "body": "<p><strong>Node.js/Express:</strong> El módulo <code>https</code> nativo acepta options con key y cert. Cargá los archivos con <code>fs.readFileSync()</code>. Para desarrollo, usá <code>https-localhost</code> (npm package) que genera certificados automáticamente.</p><p><strong>Next.js:</strong> Creá un server.js custom con https.createServer, o usá el package <code>next-https</code>. En next.config.js no hay soporte nativo para HTTPS en dev server, necesitás wrapper.</p><p><strong>Vite:</strong> En vite.config.js, agregá: <code>server: { https: { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') } }</code>. Mejor aún, instalá <code>@vitejs/plugin-basic-ssl</code> que genera certificados automáticamente.</p><p><strong>React (Create React App):</strong> Setea <code>HTTPS=true</code> en .env. CRA genera su propio certificado autofirmado, pero vas a tener warnings en el browser. Para evitarlos, generá uno con mkcert y apuntá con <code>SSL_CRT_FILE</code> y <code>SSL_KEY_FILE</code>.</p><p><strong>Docker:</strong> Montá los certificados como volumes: <code>-v ./cert.pem:/app/cert.pem -v ./key.pem:/app/key.pem</code>. En docker-compose, usá <code>volumes: - ./cert.pem:/app/cert.pem:ro</code> (read-only para seguridad).</p><p><strong>Nginx:</strong> En tu server block, <code>ssl_certificate</code> y <code>ssl_certificate_key</code> apuntan a tus archivos. Agregá <code>ssl_protocols TLSv1.2 TLSv1.3;</code> y <code>ssl_ciphers HIGH:!aNULL:!MD5;</code> para buenas prácticas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar estos certificados en producción?",
        "a": "NO. Los certificados autofirmados son solo para desarrollo/testing. En producción usá Let's Encrypt (gratis) o certificados de una CA comercial como DigiCert o Sectigo."
      },
      {
        "q": "¿Por qué mi browser sigue mostrando 'No seguro' con mi certificado?",
        "a": "Porque es autofirmado y no está en el trust store del navegador. Con mkcert esto no pasa porque instala su CA localmente. Con OpenSSL, tenés que importar manualmente el certificado en tu browser/OS."
      },
      {
        "q": "¿Qué diferencia hay entre .pem, .crt, .key y .pfx?",
        "a": ".pem es formato texto (Base64), .crt es certificado (puede ser PEM o DER), .key es clave privada, .pfx/.p12 es formato binario que incluye certificado + clave. La mayoría de herramientas acepta .pem."
      },
      {
        "q": "¿Cómo hago para que mi equipo use los mismos certificados?",
        "a": "Con mkcert: cada dev instala mkcert y genera sus propios certs (la CA es local). Con OpenSSL: compartí los archivos .pem por canal seguro (nunca en git) y cada uno debe importar el cert manualmente en su browser."
      }
    ]
  },
  "en": {
    "pageTitle": "SSL Test Certificate Generator | Genfy",
    "metaDesc": "Generate commands to create self-signed SSL certificates for development and testing. Set up HTTPS in local environments with OpenSSL securely.",
    "h1": "SSL Test Certificate Generator",
    "intro": "Get commands and configurations to generate self-signed SSL/TLS certificates in development environments. Test HTTPS locally without compromising security.",
    "tag": "Security",
    "filterLabel": "Certificate Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "openssl-basic",
        "label": "Basic OpenSSL",
        "items": [
          "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes",
          "openssl req -x509 -newkey rsa:2048 -nodes -keyout localhost.key -out localhost.crt -days 365",
          "openssl genrsa -out private-key.pem 2048",
          "openssl req -new -key private-key.pem -out csr.pem",
          "openssl x509 -req -in csr.pem -signkey private-key.pem -out certificate.pem -days 365",
          "openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt",
          "openssl req -newkey rsa:2048 -nodes -keyout domain.key -x509 -days 365 -out domain.crt",
          "openssl genrsa -aes256 -out encrypted-key.pem 4096",
          "openssl rsa -in encrypted-key.pem -out decrypted-key.pem",
          "openssl x509 -in cert.pem -text -noout",
          "openssl verify -CAfile ca-cert.pem cert.pem",
          "openssl s_client -connect localhost:443 -showcerts",
          "openssl pkcs12 -export -out certificate.pfx -inkey key.pem -in cert.pem",
          "openssl pkcs12 -in certificate.pfx -out certificate.pem -nodes",
          "openssl dhparam -out dhparam.pem 2048"
        ]
      },
      {
        "id": "san-wildcard",
        "label": "SAN and Wildcard",
        "items": [
          "openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=*.example.com'",
          "openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout wildcard.key -out wildcard.crt -subj '/CN=*.localhost'",
          "openssl req -config <(cat /etc/ssl/openssl.cnf <(printf '[SAN]\\nsubjectAltName=DNS:localhost,DNS:127.0.0.1')) -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365",
          "openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout multi.key -out multi.crt -subj '/CN=localhost' -addext 'subjectAltName=DNS:localhost,DNS:*.localhost,IP:127.0.0.1'",
          "openssl req -new -key domain.key -out domain.csr -config <(cat /etc/ssl/openssl.cnf <(printf '[SAN]\\nsubjectAltName=DNS:example.com,DNS:www.example.com'))",
          "openssl x509 -req -in domain.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out domain.crt -days 365 -sha256 -extfile <(printf 'subjectAltName=DNS:example.com,DNS:*.example.com')"
        ]
      },
      {
        "id": "ca-authority",
        "label": "Certificate Authority",
        "items": [
          "openssl genrsa -out ca-key.pem 4096",
          "openssl req -new -x509 -days 3650 -key ca-key.pem -out ca-cert.pem -subj '/CN=My Local CA'",
          "openssl req -newkey rsa:2048 -nodes -keyout server-key.pem -out server-csr.pem",
          "openssl x509 -req -in server-csr.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -days 365",
          "openssl ca -config openssl-ca.cnf -in server.csr -out server.crt -days 365",
          "openssl ca -config openssl-ca.cnf -revoke bad-cert.pem",
          "openssl ca -config openssl-ca.cnf -gencrl -out crl.pem"
        ]
      },
      {
        "id": "mkcert",
        "label": "mkcert (recommended)",
        "items": [
          "mkcert -install",
          "mkcert localhost 127.0.0.1 ::1",
          "mkcert example.com '*.example.com'",
          "mkcert -cert-file cert.pem -key-file key.pem localhost",
          "mkcert -CAROOT",
          "mkcert -uninstall",
          "mkcert myapp.local '*.myapp.local'"
        ]
      },
      {
        "id": "docker-compose",
        "label": "Docker Configuration",
        "items": [
          "# docker-compose.yml\\nservices:\\n  nginx:\\n    image: nginx:alpine\\n    volumes:\\n      - ./cert.pem:/etc/nginx/ssl/cert.pem\\n      - ./key.pem:/etc/nginx/ssl/key.pem\\n    ports:\\n      - '443:443'",
          "# nginx.conf\\nserver {\\n  listen 443 ssl;\\n  ssl_certificate /etc/nginx/ssl/cert.pem;\\n  ssl_certificate_key /etc/nginx/ssl/key.pem;\\n  ssl_protocols TLSv1.2 TLSv1.3;\\n}",
          "# Dockerfile\\nFROM nginx:alpine\\nCOPY cert.pem /etc/nginx/ssl/\\nCOPY key.pem /etc/nginx/ssl/\\nCOPY nginx.conf /etc/nginx/conf.d/default.conf"
        ]
      },
      {
        "id": "node-express",
        "label": "Node.js/Express",
        "items": [
          "const https = require('https');\\nconst fs = require('fs');\\nconst options = {\\n  key: fs.readFileSync('key.pem'),\\n  cert: fs.readFileSync('cert.pem')\\n};\\nhttps.createServer(options, app).listen(443);",
          "// Express with certificates\\nconst express = require('express');\\nconst https = require('https');\\nconst fs = require('fs');\\nconst app = express();\\nconst server = https.createServer({\\n  key: fs.readFileSync('./key.pem'),\\n  cert: fs.readFileSync('./cert.pem')\\n}, app);\\nserver.listen(3000);",
          "// HTTP to HTTPS redirect\\napp.use((req, res, next) => {\\n  if (!req.secure) {\\n    return res.redirect('https://' + req.headers.host + req.url);\\n  }\\n  next();\\n});"
        ]
      },
      {
        "id": "apache-nginx",
        "label": "Apache/Nginx Config",
        "items": [
          "# Apache VirtualHost\\n<VirtualHost *:443>\\n  ServerName localhost\\n  SSLEngine on\\n  SSLCertificateFile /path/to/cert.pem\\n  SSLCertificateKeyFile /path/to/key.pem\\n</VirtualHost>",
          "# Nginx Server Block\\nserver {\\n  listen 443 ssl http2;\\n  server_name localhost;\\n  ssl_certificate /path/to/cert.pem;\\n  ssl_certificate_key /path/to/key.pem;\\n  ssl_protocols TLSv1.2 TLSv1.3;\\n  ssl_ciphers HIGH:!aNULL:!MD5;\\n}",
          "# Nginx with HSTS\\nadd_header Strict-Transport-Security 'max-age=31536000; includeSubDomains' always;",
          "# Apache with security headers\\nHeader always set Strict-Transport-Security 'max-age=31536000'\\nHeader always set X-Frame-Options DENY\\nHeader always set X-Content-Type-Options nosniff"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why you need HTTPS in development",
        "body": "<p>Developing over HTTP in 2024 isn't just bad practice: it <strong>breaks real functionality</strong>. Modern APIs like Service Workers, Push Notifications, getUserMedia (camera/mic), Geolocation, and Clipboard require secure context (HTTPS) to work. Chrome and Firefox have blocked these features on HTTP for years.</p><p>Another problem: <strong>cookie behavior changed</strong>. SameSite=None (needed for cross-site cookies) requires Secure flag, which only works on HTTPS. If your app uses cookie-based authentication between subdomains or OAuth integrations, you'll have production bugs that don't appear in HTTP development.</p><p>Mixed Content is another headache: if your final app runs on HTTPS but you develop on HTTP, you won't detect blocked requests to HTTP resources (images, scripts, APIs). This creates silent bugs that only appear in production.</p><p>Finally, <strong>network differences between HTTP and HTTPS</strong> affect performance: HTTP/2 is only available over TLS, and features like Server Push and multiplexing behave differently. Testing over HTTP gives you false speed metrics.</p>"
      },
      {
        "h2": "mkcert: the tool you should use",
        "body": "<p>Forget complicated OpenSSL commands. <strong>mkcert</strong> is a Go tool that generates locally-trusted certificates in one command, installing its own CA in your system's trust store.</p><p>Installation: <code>brew install mkcert</code> (Mac), <code>choco install mkcert</code> (Windows), or <code>apt install mkcert</code> (Linux). Then <code>mkcert -install</code> to install local CA (only once).</p><p>Generate certificate: <code>mkcert localhost 127.0.0.1 ::1</code> creates two files (localhost.pem and localhost-key.pem) that work immediately in Chrome, Firefox, Safari and Edge without security warnings.</p><p>For wildcards: <code>mkcert '*.myapp.local'</code> covers all subdomains. This is useful for multi-tenant architectures or when testing with dynamic subdomains.</p><p>Advantages over OpenSSL: you don't have to edit config files, no manual CA imports in each browser, works out-of-the-box with tools like curl and wget, and certificates are automatically valid in all browsers that respect the system trust store.</p><p>For CI/CD: mkcert is not for production, only development. In pipelines, use self-signed certificates with OpenSSL and configure HTTP client to ignore SSL validation (only in tests, never in prod).</p>"
      },
      {
        "h2": "Certificates with Subject Alternative Names (SAN)",
        "body": "<p>Modern certificates require <strong>SAN (Subject Alternative Names)</strong> to specify multiple domains. The CN (Common Name) field has been deprecated since 2017 and Chrome/Firefox ignore it.</p><p>To generate a cert with SAN in OpenSSL (without mkcert), you need a configuration file. Quick command: <code>openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365 -subj '/CN=localhost' -addext 'subjectAltName=DNS:localhost,DNS:*.localhost,IP:127.0.0.1'</code></p><p>This creates a certificate valid for localhost, all its subdomains (*.localhost), and IP 127.0.0.1. Essential if your app uses both localhost and 127.0.0.1 interchangeably (common in Docker).</p><p>For wildcards: <code>DNS:*.example.local</code> covers sub.example.local but NOT example.local. You must include both: <code>DNS:example.local,DNS:*.example.local</code>.</p><p>Common error: forgetting to include IP. If your app makes requests to https://127.0.0.1:3000, you need <code>IP:127.0.0.1</code> in SAN, not just <code>DNS:localhost</code>.</p><p>To verify SANs in existing certificate: <code>openssl x509 -in cert.pem -text -noout | grep 'Subject Alternative Name' -A 1</code></p>"
      },
      {
        "h2": "Configuration in frameworks and servers",
        "body": "<p><strong>Node.js/Express:</strong> The native <code>https</code> module accepts options with key and cert. Load files with <code>fs.readFileSync()</code>. For development, use <code>https-localhost</code> (npm package) which generates certificates automatically.</p><p><strong>Next.js:</strong> Create a custom server.js with https.createServer, or use the <code>next-https</code> package. In next.config.js there's no native HTTPS support in dev server, you need a wrapper.</p><p><strong>Vite:</strong> In vite.config.js, add: <code>server: { https: { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') } }</code>. Better yet, install <code>@vitejs/plugin-basic-ssl</code> which generates certificates automatically.</p><p><strong>React (Create React App):</strong> Set <code>HTTPS=true</code> in .env. CRA generates its own self-signed certificate, but you'll have browser warnings. To avoid them, generate one with mkcert and point with <code>SSL_CRT_FILE</code> and <code>SSL_KEY_FILE</code>.</p><p><strong>Docker:</strong> Mount certificates as volumes: <code>-v ./cert.pem:/app/cert.pem -v ./key.pem:/app/key.pem</code>. In docker-compose, use <code>volumes: - ./cert.pem:/app/cert.pem:ro</code> (read-only for security).</p><p><strong>Nginx:</strong> In your server block, <code>ssl_certificate</code> and <code>ssl_certificate_key</code> point to your files. Add <code>ssl_protocols TLSv1.2 TLSv1.3;</code> and <code>ssl_ciphers HIGH:!aNULL:!MD5;</code> for best practices.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use these certificates in production?",
        "a": "NO. Self-signed certificates are only for development/testing. In production use Let's Encrypt (free) or certificates from commercial CA like DigiCert or Sectigo."
      },
      {
        "q": "Why does my browser still show 'Not Secure' with my certificate?",
        "a": "Because it's self-signed and not in the browser's trust store. With mkcert this doesn't happen because it installs its CA locally. With OpenSSL, you must manually import the certificate in your browser/OS."
      },
      {
        "q": "What's the difference between .pem, .crt, .key and .pfx?",
        "a": ".pem is text format (Base64), .crt is certificate (can be PEM or DER), .key is private key, .pfx/.p12 is binary format that includes certificate + key. Most tools accept .pem."
      },
      {
        "q": "How do I get my team to use the same certificates?",
        "a": "With mkcert: each dev installs mkcert and generates their own certs (CA is local). With OpenSSL: share .pem files through secure channel (never in git) and everyone must manually import cert in their browser."
      }
    ]
  }
};
