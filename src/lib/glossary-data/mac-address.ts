import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "mac-address",
    "en": "mac-address"
  },
  "emoji": "🔌",
  "category": "tech",
  "es": {
    "pageTitle": "Dirección MAC — Glosario | Genfy",
    "metaDesc": "Identificador único de 48 bits de interfaces de red. Aprende estructura OUI, diferencias con IP, spoofing y uso en redes locales y seguridad.",
    "h1": "Dirección MAC",
    "short": "Una dirección MAC (Media Access Control) es un identificador único de 48 bits asignado a cada interfaz de red física. Los primeros 24 bits (OUI) identifican al fabricante, los últimos 24 al dispositivo específico. Opera en la capa 2 del modelo OSI.",
    "body": [
      {
        "title": "¿Qué es una Dirección MAC?",
        "html": "<p>La <strong>dirección MAC</strong> es el identificador de hardware de una interfaz de red: tu placa Ethernet, tu chip WiFi, tu adaptador Bluetooth. Es única a nivel mundial (en teoría) y está grabada en la ROM del dispositivo en fábrica.</p><p>Son <strong>48 bits</strong> (6 bytes) representados en hexadecimal, típicamente separados por dos puntos o guiones: <code>00:1A:2B:3C:4D:5E</code> o <code>00-1A-2B-3C-4D-5E</code>. Algunos sistemas usan puntos cada 4 dígitos: <code>001A.2B3C.4D5E</code> (estilo Cisco).</p><p>Opera en la <strong>capa 2 del modelo OSI</strong> (enlace de datos). Mientras IPv4/IPv6 trabajan a nivel de red (capa 3) y rutean entre redes, las direcciones MAC funcionan solo dentro de la misma red local (LAN). Cuando tu PC envía un paquete al router, usa la IP del router pero la MAC del router para entregarlo físicamente.</p><p>El protocolo <strong>ARP</strong> (Address Resolution Protocol) traduce IPs a MACs: tu PC hace broadcast \"¿quién tiene 192.168.1.1?\" y el router responde \"soy yo, mi MAC es XX:XX:XX:XX:XX:XX\". Tu PC cachea eso y envía el frame Ethernet con esa MAC de destino.</p>"
      },
      {
        "title": "Estructura: OUI y NIC",
        "html": "<p>Los 48 bits se dividen en dos partes:</p><p><strong>OUI</strong> (Organizationally Unique Identifier): los primeros 24 bits (3 bytes). Identifica al fabricante. IEEE asigna estos bloques a empresas que fabrican hardware de red. Ejemplo: <code>00:1A:2B</code> podría pertenecer a Cisco, <code>3C:22:FB</code> a Apple.</p><p>Podés buscar el fabricante de cualquier MAC en bases como <a href=\"https://maclookup.app\">maclookup.app</a>. Es útil para identificar dispositivos desconocidos en tu red: esa MAC que empieza con <code>B8:27:EB</code> es una Raspberry Pi.</p><p><strong>NIC</strong> (Network Interface Controller): los últimos 24 bits (3 bytes). Es el identificador único dentro del bloque del fabricante. El fabricante asigna estos números secuencialmente a medida que produce dispositivos.</p><p>Ejemplo completo: <code>3C:22:FB:1A:2B:3C</code>. Los primeros 3 bytes (<code>3C:22:FB</code>) son el OUI de Apple, los últimos 3 (<code>1A:2B:3C</code>) identifican este iPhone específico entre millones de dispositivos Apple.</p><p>Dentro del OUI, el bit menos significativo del primer byte indica <strong>unicast vs multicast</strong>: si es 0, es unicast (un solo destinatario), si es 1, es multicast. El segundo bit indica <strong>global vs local</strong>: 0 = globalmente única (asignada por IEEE), 1 = administrada localmente (puede ser customizada).</p>"
      },
      {
        "title": "MAC vs IP: Diferencias Clave",
        "html": "<p><strong>Capa OSI</strong>: MAC trabaja en capa 2 (enlace), IP en capa 3 (red). MAC entrega frames dentro de un segmento, IP rutea paquetes entre redes.</p><p><strong>Ámbito</strong>: MAC solo importa en la LAN local. Cuando un paquete cruza un router hacia otra red, la MAC cambia (se reescribe con la MAC del siguiente salto), pero la IP origen/destino permanece igual todo el viaje.</p><p><strong>Asignación</strong>: MAC es fija (grabada en hardware, aunque modificable por software), IP es dinámica (asignada por DHCP o configurada manualmente).</p><p><strong>Legibilidad</strong>: IP está diseñada para ser leída y memorizada por humanos (8.8.8.8), MAC no (salvo techs que las ven todo el día).</p><p>Analogía postal: la IP es tu dirección completa (calle, ciudad, país), la MAC es el nombre de la persona en esa dirección. El correo usa la dirección para llegar a la ciudad, pero necesita el nombre para entregarlo a la persona correcta dentro del edificio.</p>"
      },
      {
        "title": "MAC Spoofing y Seguridad",
        "html": "<p><strong>MAC spoofing</strong> es cambiar tu dirección MAC por software. Es trivial en cualquier sistema operativo: <code>ifconfig eth0 hw ether XX:XX:XX:XX:XX:XX</code> en Linux, apps gráficas en Windows/Mac.</p><p><strong>Usos legítimos</strong>: <ul><li>Privacidad: evitar tracking por MAC en WiFis públicas (Android 10+ randomiza MACs automáticamente en redes nuevas).</li><li>Testing: simular múltiples dispositivos desde una máquina.</li><li>Reparación: reemplazás una placa de red rota, copiás la MAC vieja para que el ISP no te pida reautorización.</li></ul></p><p><strong>Usos maliciosos</strong>: <ul><li>Bypassear filtros MAC en routers (mecanismo de seguridad débil de todas formas).</li><li>Ataques man-in-the-middle: spoofear la MAC del gateway para interceptar tráfico.</li><li>Evadir sistemas de licencias o control de acceso basados en MAC.</li></ul></p><p><strong>Filtrado MAC como seguridad</strong>: tu router permite \"solo conectar estos MACs\". Inútil: cualquiera con acceso WiFi puede ver las MACs autorizadas (están en broadcast) y spoofearse. Mejor: WPA3, contraseñas fuertes, VLANs para segmentar.</p><p><strong>802.1X (EAP)</strong> es autenticación real a nivel de red: el dispositivo debe presentar credenciales (certificado o usuario/password) antes de que el switch/AP le asigne una IP. Común en empresas, ignora la MAC.</p>"
      }
    ],
    "examples": [
      "00:1A:2B:3C:4D:5E — formato estándar con dos puntos",
      "3C-22-FB-1A-2B-3C — formato con guiones (Windows)",
      "001A.2B3C.4D5E — formato Cisco (puntos cada 4 hex)",
      "B8:27:EB:XX:XX:XX — OUI de Raspberry Pi Foundation",
      "FF:FF:FF:FF:FF:FF — dirección de broadcast (todos los dispositivos en LAN)"
    ],
    "related": [
      "generador-de-direcciones-mac",
      "generador-de-direcciones-ip"
    ],
    "faq": [
      {
        "q": "¿Puede haber dos dispositivos con la misma MAC?",
        "a": "En teoría no: los fabricantes deben asignar MACs únicas. En práctica: colisiones ocurren por errores de fabricación, clonación barata, o spoofing. En la misma LAN causa caos (conflicto ARP). En LANs distintas, no hay problema."
      },
      {
        "q": "¿Es seguro filtrar por MAC en mi WiFi?",
        "a": "No. Es trivial spoofear una MAC. Cualquiera que capture tráfico WiFi ve las MACs autorizadas. Solo da falsa sensación de seguridad. Usá WPA3, contraseña fuerte, y si necesitás segregación, VLANs + 802.1X."
      },
      {
        "q": "¿Por qué mi teléfono muestra MACs diferentes en distintas redes WiFi?",
        "a": "Android 10+, iOS 14+ usan MAC randomization por privacidad. Cada red WiFi ve una MAC distinta (pero consistente para esa red). Evita tracking entre ubicaciones. Podés desactivarlo por red en configuración avanzada."
      }
    ]
  },
  "en": {
    "pageTitle": "MAC Address — Glossary | Genfy",
    "metaDesc": "Unique 48-bit identifier of network interfaces. Learn OUI structure, differences with IP, spoofing and use in local networks and security contexts.",
    "h1": "MAC Address",
    "short": "A MAC (Media Access Control) address is a unique 48-bit identifier assigned to each physical network interface. The first 24 bits (OUI) identify the manufacturer, the last 24 the specific device. It operates at layer 2 of the OSI model.",
    "body": [
      {
        "title": "What is a MAC Address?",
        "html": "<p>The <strong>MAC address</strong> is the hardware identifier of a network interface: your Ethernet card, your WiFi chip, your Bluetooth adapter. It's globally unique (in theory) and burned into the device's ROM at the factory.</p><p>It's <strong>48 bits</strong> (6 bytes) represented in hexadecimal, typically separated by colons or hyphens: <code>00:1A:2B:3C:4D:5E</code> or <code>00-1A-2B-3C-4D-5E</code>. Some systems use dots every 4 digits: <code>001A.2B3C.4D5E</code> (Cisco style).</p><p>It operates at <strong>layer 2 of the OSI model</strong> (data link). While IPv4/IPv6 work at the network level (layer 3) and route between networks, MAC addresses only work within the same local network (LAN). When your PC sends a packet to the router, it uses the router's IP but the router's MAC to deliver it physically.</p><p>The <strong>ARP</strong> (Address Resolution Protocol) translates IPs to MACs: your PC broadcasts \"who has 192.168.1.1?\" and the router responds \"I do, my MAC is XX:XX:XX:XX:XX:XX\". Your PC caches that and sends the Ethernet frame with that destination MAC.</p>"
      },
      {
        "title": "Structure: OUI and NIC",
        "html": "<p>The 48 bits are divided into two parts:</p><p><strong>OUI</strong> (Organizationally Unique Identifier): the first 24 bits (3 bytes). Identifies the manufacturer. IEEE assigns these blocks to companies that manufacture network hardware. Example: <code>00:1A:2B</code> might belong to Cisco, <code>3C:22:FB</code> to Apple.</p><p>You can look up the manufacturer of any MAC in databases like <a href=\"https://maclookup.app\">maclookup.app</a>. Useful for identifying unknown devices on your network: that MAC starting with <code>B8:27:EB</code> is a Raspberry Pi.</p><p><strong>NIC</strong> (Network Interface Controller): the last 24 bits (3 bytes). It's the unique identifier within the manufacturer's block. The manufacturer assigns these numbers sequentially as they produce devices.</p><p>Complete example: <code>3C:22:FB:1A:2B:3C</code>. The first 3 bytes (<code>3C:22:FB</code>) are Apple's OUI, the last 3 (<code>1A:2B:3C</code>) identify this specific iPhone among millions of Apple devices.</p><p>Within the OUI, the least significant bit of the first byte indicates <strong>unicast vs multicast</strong>: if 0, it's unicast (single recipient), if 1, it's multicast. The second bit indicates <strong>global vs local</strong>: 0 = globally unique (assigned by IEEE), 1 = locally administered (can be customized).</p>"
      },
      {
        "title": "MAC vs IP: Key Differences",
        "html": "<p><strong>OSI layer</strong>: MAC works at layer 2 (link), IP at layer 3 (network). MAC delivers frames within a segment, IP routes packets between networks.</p><p><strong>Scope</strong>: MAC only matters on the local LAN. When a packet crosses a router to another network, the MAC changes (rewritten with the next hop's MAC), but the source/destination IP remains the same throughout the journey.</p><p><strong>Assignment</strong>: MAC is fixed (burned into hardware, though software-changeable), IP is dynamic (assigned by DHCP or configured manually).</p><p><strong>Readability</strong>: IP is designed to be read and memorized by humans (8.8.8.8), MAC is not (except for techs who see them all day).</p><p>Postal analogy: IP is your complete address (street, city, country), MAC is the person's name at that address. Mail uses the address to reach the city, but needs the name to deliver to the right person inside the building.</p>"
      },
      {
        "title": "MAC Spoofing and Security",
        "html": "<p><strong>MAC spoofing</strong> is changing your MAC address via software. It's trivial on any OS: <code>ifconfig eth0 hw ether XX:XX:XX:XX:XX:XX</code> on Linux, GUI apps on Windows/Mac.</p><p><strong>Legitimate uses</strong>: <ul><li>Privacy: avoid MAC tracking on public WiFis (Android 10+ randomizes MACs automatically on new networks).</li><li>Testing: simulate multiple devices from one machine.</li><li>Repair: replace a broken network card, copy the old MAC so the ISP doesn't require reauthorization.</li></ul></p><p><strong>Malicious uses</strong>: <ul><li>Bypass MAC filters on routers (weak security mechanism anyway).</li><li>Man-in-the-middle attacks: spoof the gateway's MAC to intercept traffic.</li><li>Evade licensing or access control systems based on MAC.</li></ul></p><p><strong>MAC filtering as security</strong>: your router allows \"only connect these MACs\". Useless: anyone with WiFi access can see authorized MACs (they're broadcast) and spoof themselves. Better: WPA3, strong passwords, VLANs for segmentation.</p><p><strong>802.1X (EAP)</strong> is real network-level authentication: the device must present credentials (certificate or user/password) before the switch/AP assigns an IP. Common in enterprises, ignores MAC.</p>"
      }
    ],
    "examples": [
      "00:1A:2B:3C:4D:5E — standard format with colons",
      "3C-22-FB-1A-2B-3C — format with hyphens (Windows)",
      "001A.2B3C.4D5E — Cisco format (dots every 4 hex)",
      "B8:27:EB:XX:XX:XX — Raspberry Pi Foundation OUI",
      "FF:FF:FF:FF:FF:FF — broadcast address (all devices on LAN)"
    ],
    "related": [
      "random-mac-generator",
      "random-ip-generator"
    ],
    "faq": [
      {
        "q": "Can two devices have the same MAC?",
        "a": "In theory no: manufacturers must assign unique MACs. In practice: collisions happen due to manufacturing errors, cheap cloning, or spoofing. On the same LAN causes chaos (ARP conflict). On different LANs, no problem."
      },
      {
        "q": "Is MAC filtering secure for my WiFi?",
        "a": "No. It's trivial to spoof a MAC. Anyone capturing WiFi traffic sees authorized MACs. Only gives false sense of security. Use WPA3, strong password, and if you need segregation, VLANs + 802.1X."
      },
      {
        "q": "Why does my phone show different MACs on different WiFi networks?",
        "a": "Android 10+, iOS 14+ use MAC randomization for privacy. Each WiFi network sees a different MAC (but consistent for that network). Prevents tracking between locations. You can disable it per network in advanced settings."
      }
    ]
  }
};
