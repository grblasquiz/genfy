import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "ipv4",
    "en": "ipv4"
  },
  "emoji": "🌐",
  "category": "tech",
  "es": {
    "pageTitle": "IPv4 — Glosario | Genfy",
    "metaDesc": "Dirección IP de 32 bits en formato decimal con puntos. Aprende estructura de clases, subredes privadas, NAT y por qué IPv6 es necesario en la web moderna.",
    "h1": "IPv4",
    "short": "IPv4 (Internet Protocol version 4) es el formato de dirección IP predominante en Internet, con 32 bits representados en notación decimal con puntos (ejemplo: 192.168.1.1). Permite ~4.300 millones de direcciones únicas, espacio prácticamente agotado desde 2011.",
    "body": [
      {
        "title": "¿Qué es IPv4?",
        "html": "<p><strong>IPv4</strong> fue definido en 1981 en RFC 791, parte del modelo TCP/IP que sustenta Internet. Es la cuarta versión del protocolo (v1-v3 fueron experimentales) y se convirtió en el estándar de facto para identificar dispositivos en redes.</p><p>Una dirección IPv4 son <strong>32 bits</strong> divididos en 4 octetos (8 bits cada uno), escritos en decimal separados por puntos. Ejemplo: <code>192.168.0.1</code> se ve así en binario: <code>11000000.10101000.00000000.00000001</code>.</p><p>El espacio total: 2³² = <strong>4.294.967.296 direcciones</strong>. Suena a mucho, pero se agotaron oficialmente en febrero 2011 cuando IANA asignó los últimos bloques. Hoy sobrevivimos gracias a <strong>NAT</strong> (Network Address Translation) que permite a miles de dispositivos compartir una IP pública.</p><p>Cada dispositivo en Internet necesita una IP única para comunicarse. Es como tu dirección postal: sin ella, los paquetes de datos no saben adónde ir. IPv4 opera en la capa 3 del modelo OSI (capa de red) y es independiente del medio físico (WiFi, Ethernet, fibra).</p>"
      },
      {
        "title": "Estructura y Clases de Direcciones",
        "html": "<p>IPv4 originalmente se dividió en <strong>clases</strong> según los primeros bits:</p><ul><li><strong>Clase A</strong>: primer bit 0. Rango 0.0.0.0 a 127.255.255.255. 8 bits red, 24 bits hosts (16M hosts por red). Para redes enormes (empresas globales).</li><li><strong>Clase B</strong>: primeros bits 10. Rango 128.0.0.0 a 191.255.255.255. 16 bits red, 16 bits hosts (65K hosts). Organizaciones medianas.</li><li><strong>Clase C</strong>: primeros bits 110. Rango 192.0.0.0 a 223.255.255.255. 24 bits red, 8 bits hosts (254 hosts). Redes pequeñas.</li><li><strong>Clase D</strong>: primeros bits 1110. Rango 224.0.0.0 a 239.255.255.255. Multicast (un paquete a múltiples receptores).</li><li><strong>Clase E</strong>: primeros bits 1111. Rango 240.0.0.0 a 255.255.255.255. Reservado, experimentación.</li></ul><p>Este sistema <em>classful</em> fue reemplazado en 1993 por <strong>CIDR</strong> (Classless Inter-Domain Routing). Hoy se usan máscaras de subred arbitrarias: <code>192.168.1.0/24</code> significa que los primeros 24 bits son red, los últimos 8 son hosts (256 direcciones, 254 usables).</p><p><strong>Direcciones privadas</strong> (RFC 1918), no rutables en Internet público:</p><ul><li>10.0.0.0/8 (10.0.0.0 a 10.255.255.255) — 16M direcciones</li><li>172.16.0.0/12 (172.16.0.0 a 172.31.255.255) — 1M direcciones</li><li>192.168.0.0/16 (192.168.0.0 a 192.168.255.255) — 65K direcciones</li></ul><p>Tu red hogareña usa alguna de estas. El router hace NAT para traducir privadas a tu IP pública.</p>"
      },
      {
        "title": "NAT y Agotamiento del Espacio IPv4",
        "html": "<p><strong>NAT</strong> (Network Address Translation) fue la solución temporal al agotamiento. Tu casa tiene una IP pública (ej: <code>200.45.123.89</code>) pero internamente tus dispositivos usan IPs privadas (<code>192.168.1.x</code>). El router traduce: cuando tu PC (192.168.1.10) pide una web, el router reescribe el paquete con su IP pública + un puerto único, trackea la conexión y reenvía la respuesta de vuelta.</p><p>NAT permitió que Internet siguiera creciendo después de 2011, pero tiene costos: <strong>complejidad</strong> (configurar port forwarding es un dolor), <strong>dificulta P2P</strong> (dos dispositivos tras NAT no pueden conectarse directamente sin relay), y <strong>rompe end-to-end connectivity</strong> (uno de los principios originales de Internet).</p><p>Hoy existen mercados secundarios donde empresas venden bloques IPv4. Una IPv4 /24 (256 direcciones) se cotiza en ~$6.000 USD. Es más caro que muchos dominios premium.</p><p><strong>IPv6</strong> es la solución definitiva: 128 bits = 340 undecillones de direcciones (3.4 × 10³⁸). Suficiente para asignar miles de IPs a cada átomo del planeta. El despliegue es lento (solo ~40% del tráfico web usa IPv6 en 2024) por inercia e inversiones en infraestructura IPv4.</p>"
      },
      {
        "title": "Usos Prácticos y Herramientas",
        "html": "<p><strong>Diagnóstico de red</strong>: <code>ping 8.8.8.8</code> verifica conectividad a los DNS de Google. <code>traceroute 1.1.1.1</code> muestra el camino que toman tus paquetes hasta Cloudflare.</p><p><strong>Configuración de servidores</strong>: al deployar un backend, configurás firewalls para permitir tráfico solo desde IPs específicas. AWS Security Groups, iptables en Linux, todos trabajan con rangos IPv4.</p><p><strong>Geolocalización</strong>: bases de datos como MaxMind asocian rangos IPv4 con ubicaciones geográficas. Así Netflix sabe desde qué país te conectás.</p><p><strong>Generación de IPs aleatorias</strong>: útil para testing de sistemas distribuidos, simulación de tráfico, o poblar bases de datos de prueba. Genfy ofrece un generador que respeta rangos válidos y evita rangos reservados.</p><p><strong>Subnetting</strong>: dividir una red grande en subredes más chicas. Ejemplo: una empresa recibe <code>203.0.113.0/24</code> (256 IPs). La divide en 4 subredes /26 (64 IPs c/u) para distintos departamentos. Calculadoras de subred automatizan esto.</p>"
      }
    ],
    "examples": [
      "192.168.1.1 — IP privada típica de router hogareño",
      "8.8.8.8 — DNS público de Google",
      "10.0.0.0/8 — Rango privado Clase A completo",
      "203.0.113.0/24 — Rango de documentación (RFC 5737)",
      "127.0.0.1 — Localhost, siempre apunta a tu propia máquina"
    ],
    "related": [
      "generador-de-direcciones-ip",
      "generador-de-direcciones-mac"
    ],
    "faq": [
      {
        "q": "¿Por qué mi IP es 192.168.x.x y no mi IP pública?",
        "a": "192.168.x.x es tu IP privada dentro de tu red local. Tu router hace NAT: traduce esa IP privada a tu IP pública (la que ve Internet). Consultá tu IP pública en sitios como ifconfig.me."
      },
      {
        "q": "¿Qué pasa si dos dispositivos tienen la misma IP?",
        "a": "En la misma red local: conflicto de IP, ambos pierden conectividad o tienen comportamiento errático. En redes distintas: no hay problema, las IPs privadas se reusan en millones de redes (por eso existen)."
      },
      {
        "q": "¿Cuándo debería usar IPv6 en lugar de IPv4?",
        "a": "Si estás deployando infraestructura nueva, habilitá IPv6 desde el inicio. Clouds modernos (AWS, GCP) lo soportan nativamente. Para servicios existentes, el dual-stack (IPv4 + IPv6) es la transición segura."
      }
    ]
  },
  "en": {
    "pageTitle": "IPv4 — Glossary | Genfy",
    "metaDesc": "32-bit IP address in dotted decimal notation. Learn class structure, private subnets, NAT and why IPv6 is necessary in the modern web landscape.",
    "h1": "IPv4",
    "short": "IPv4 (Internet Protocol version 4) is the predominant IP address format on the Internet, with 32 bits represented in dotted decimal notation (example: 192.168.1.1). It allows ~4.3 billion unique addresses, a space practically exhausted since 2011.",
    "body": [
      {
        "title": "What is IPv4?",
        "html": "<p><strong>IPv4</strong> was defined in 1981 in RFC 791, part of the TCP/IP model that underpins the Internet. It's the fourth version of the protocol (v1-v3 were experimental) and became the de facto standard for identifying devices on networks.</p><p>An IPv4 address is <strong>32 bits</strong> divided into 4 octets (8 bits each), written in decimal separated by dots. Example: <code>192.168.0.1</code> looks like this in binary: <code>11000000.10101000.00000000.00000001</code>.</p><p>The total space: 2³² = <strong>4,294,967,296 addresses</strong>. Sounds like a lot, but they were officially exhausted in February 2011 when IANA assigned the last blocks. Today we survive thanks to <strong>NAT</strong> (Network Address Translation) that allows thousands of devices to share one public IP.</p><p>Each device on the Internet needs a unique IP to communicate. It's like your postal address: without it, data packets don't know where to go. IPv4 operates at layer 3 of the OSI model (network layer) and is independent of physical medium (WiFi, Ethernet, fiber).</p>"
      },
      {
        "title": "Structure and Address Classes",
        "html": "<p>IPv4 was originally divided into <strong>classes</strong> based on the first bits:</p><ul><li><strong>Class A</strong>: first bit 0. Range 0.0.0.0 to 127.255.255.255. 8 bits network, 24 bits hosts (16M hosts per network). For huge networks (global companies).</li><li><strong>Class B</strong>: first bits 10. Range 128.0.0.0 to 191.255.255.255. 16 bits network, 16 bits hosts (65K hosts). Medium organizations.</li><li><strong>Class C</strong>: first bits 110. Range 192.0.0.0 to 223.255.255.255. 24 bits network, 8 bits hosts (254 hosts). Small networks.</li><li><strong>Class D</strong>: first bits 1110. Range 224.0.0.0 to 239.255.255.255. Multicast (one packet to multiple receivers).</li><li><strong>Class E</strong>: first bits 1111. Range 240.0.0.0 to 255.255.255.255. Reserved, experimentation.</li></ul><p>This <em>classful</em> system was replaced in 1993 by <strong>CIDR</strong> (Classless Inter-Domain Routing). Today arbitrary subnet masks are used: <code>192.168.1.0/24</code> means the first 24 bits are network, the last 8 are hosts (256 addresses, 254 usable).</p><p><strong>Private addresses</strong> (RFC 1918), not routable on public Internet:</p><ul><li>10.0.0.0/8 (10.0.0.0 to 10.255.255.255) — 16M addresses</li><li>172.16.0.0/12 (172.16.0.0 to 172.31.255.255) — 1M addresses</li><li>192.168.0.0/16 (192.168.0.0 to 192.168.255.255) — 65K addresses</li></ul><p>Your home network uses one of these. The router does NAT to translate private to your public IP.</p>"
      },
      {
        "title": "NAT and IPv4 Space Exhaustion",
        "html": "<p><strong>NAT</strong> (Network Address Translation) was the temporary solution to exhaustion. Your home has one public IP (e.g., <code>200.45.123.89</code>) but internally your devices use private IPs (<code>192.168.1.x</code>). The router translates: when your PC (192.168.1.10) requests a website, the router rewrites the packet with its public IP + a unique port, tracks the connection, and forwards the response back.</p><p>NAT allowed the Internet to keep growing after 2011, but has costs: <strong>complexity</strong> (configuring port forwarding is painful), <strong>hinders P2P</strong> (two devices behind NAT can't connect directly without relay), and <strong>breaks end-to-end connectivity</strong> (one of the original Internet principles).</p><p>Today secondary markets exist where companies sell IPv4 blocks. An IPv4 /24 (256 addresses) trades at ~$6,000 USD. More expensive than many premium domains.</p><p><strong>IPv6</strong> is the definitive solution: 128 bits = 340 undecillion addresses (3.4 × 10³⁸). Enough to assign thousands of IPs to each atom on the planet. Deployment is slow (~40% of web traffic uses IPv6 in 2024) due to inertia and investments in IPv4 infrastructure.</p>"
      },
      {
        "title": "Practical Uses and Tools",
        "html": "<p><strong>Network diagnostics</strong>: <code>ping 8.8.8.8</code> verifies connectivity to Google's DNS. <code>traceroute 1.1.1.1</code> shows the path your packets take to Cloudflare.</p><p><strong>Server configuration</strong>: when deploying a backend, you configure firewalls to allow traffic only from specific IPs. AWS Security Groups, iptables on Linux, all work with IPv4 ranges.</p><p><strong>Geolocation</strong>: databases like MaxMind associate IPv4 ranges with geographic locations. That's how Netflix knows which country you're connecting from.</p><p><strong>Random IP generation</strong>: useful for testing distributed systems, traffic simulation, or populating test databases. Genfy offers a generator that respects valid ranges and avoids reserved ranges.</p><p><strong>Subnetting</strong>: dividing a large network into smaller subnets. Example: a company receives <code>203.0.113.0/24</code> (256 IPs). It divides it into 4 /26 subnets (64 IPs each) for different departments. Subnet calculators automate this.</p>"
      }
    ],
    "examples": [
      "192.168.1.1 — Typical home router private IP",
      "8.8.8.8 — Google's public DNS",
      "10.0.0.0/8 — Complete Class A private range",
      "203.0.113.0/24 — Documentation range (RFC 5737)",
      "127.0.0.1 — Localhost, always points to your own machine"
    ],
    "related": [
      "random-ip-generator",
      "random-mac-generator"
    ],
    "faq": [
      {
        "q": "Why is my IP 192.168.x.x and not my public IP?",
        "a": "192.168.x.x is your private IP within your local network. Your router does NAT: translates that private IP to your public IP (what Internet sees). Check your public IP at sites like ifconfig.me."
      },
      {
        "q": "What happens if two devices have the same IP?",
        "a": "On the same local network: IP conflict, both lose connectivity or behave erratically. On different networks: no problem, private IPs are reused in millions of networks (that's why they exist)."
      },
      {
        "q": "When should I use IPv6 instead of IPv4?",
        "a": "If you're deploying new infrastructure, enable IPv6 from the start. Modern clouds (AWS, GCP) support it natively. For existing services, dual-stack (IPv4 + IPv6) is the safe transition."
      }
    ]
  }
};
