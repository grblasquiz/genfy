import type { Lang } from './i18n';

export type GeneratorMeta = {
  slug: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: 'security' | 'business' | 'content' | 'fun' | 'tools' | 'tech' | 'data' | 'marketing' | 'design' | 'random' | 'pets' | 'people' | 'work' | 'inspiration';
  emoji: string;
};

export const GENERATORS: GeneratorMeta[] = [
  // === Original 5 ===
  { slug: { es: 'generador-de-contrasenas', en: 'password-generator' }, title: { es: 'Generador de contraseñas', en: 'Password generator' }, description: { es: 'Crea contraseñas fuertes y seguras al instante.', en: 'Create strong, secure passwords instantly.' }, category: 'security', emoji: '🔐' },
  { slug: { es: 'generador-de-nombres-de-empresa', en: 'business-name-generator' }, title: { es: 'Generador de nombres de empresa', en: 'Business name generator' }, description: { es: 'Ideas de nombres pegadizos para tu negocio.', en: 'Catchy name ideas for your business.' }, category: 'business', emoji: '💼' },
  { slug: { es: 'generador-lorem-ipsum', en: 'lorem-ipsum-generator' }, title: { es: 'Generador de Lorem Ipsum', en: 'Lorem Ipsum generator' }, description: { es: 'Texto de relleno clásico para diseño y maquetación.', en: 'Classic placeholder text for design.' }, category: 'content', emoji: '📝' },
  { slug: { es: 'generador-de-nombres-para-gatos', en: 'cat-name-generator' }, title: { es: 'Generador de nombres para gatos', en: 'Cat name generator' }, description: { es: 'Encuentra el nombre perfecto para tu gato.', en: 'Find the perfect name for your cat.' }, category: 'pets', emoji: '🐱' },
  { slug: { es: 'generador-de-codigos-qr', en: 'qr-code-generator' }, title: { es: 'Generador de códigos QR', en: 'QR code generator' }, description: { es: 'Crea códigos QR gratis para enlaces, texto, WiFi.', en: 'Free QR codes for links, text, WiFi.' }, category: 'tools', emoji: '📱' },

  // === Tech / Crypto (10) ===
  { slug: { es: 'generador-de-pin', en: 'pin-generator' }, title: { es: 'Generador de PIN', en: 'PIN generator' }, description: { es: 'PINs numéricos seguros de 4 a 12 dígitos.', en: 'Secure numeric PINs from 4 to 12 digits.' }, category: 'security', emoji: '🔢' },
  { slug: { es: 'generador-de-api-key', en: 'api-key-generator' }, title: { es: 'Generador de API key', en: 'API key generator' }, description: { es: 'Tokens criptográficamente fuertes para APIs.', en: 'Cryptographically strong tokens for APIs.' }, category: 'security', emoji: '🔑' },
  { slug: { es: 'generador-de-uuid', en: 'uuid-generator' }, title: { es: 'Generador de UUID', en: 'UUID generator' }, description: { es: 'UUIDs v4 únicos al instante.', en: 'Unique UUID v4 instantly.' }, category: 'tech', emoji: '🆔' },
  { slug: { es: 'generador-de-strings-aleatorios', en: 'random-string-generator' }, title: { es: 'Generador de strings aleatorios', en: 'Random string generator' }, description: { es: 'Strings aleatorios para tests, IDs o tokens.', en: 'Random strings for tests, IDs or tokens.' }, category: 'tech', emoji: '🎲' },
  { slug: { es: 'generador-de-hash-md5-sha', en: 'md5-sha-hash-generator' }, title: { es: 'Generador de hash MD5/SHA', en: 'MD5/SHA hash generator' }, description: { es: 'Hashes MD5, SHA-1, SHA-256, SHA-512 al instante.', en: 'MD5, SHA-1, SHA-256, SHA-512 hashes instantly.' }, category: 'security', emoji: '#️⃣' },
  { slug: { es: 'codificador-base64', en: 'base64-encoder' }, title: { es: 'Codificador Base64', en: 'Base64 encoder' }, description: { es: 'Convierte texto o archivos a Base64.', en: 'Convert text or files to Base64.' }, category: 'tech', emoji: '🔤' },
  { slug: { es: 'decodificador-base64', en: 'base64-decoder' }, title: { es: 'Decodificador Base64', en: 'Base64 decoder' }, description: { es: 'Decodifica strings Base64 a texto plano.', en: 'Decode Base64 strings back to plain text.' }, category: 'tech', emoji: '🔡' },
  { slug: { es: 'generador-bcrypt', en: 'bcrypt-generator' }, title: { es: 'Generador Bcrypt', en: 'Bcrypt generator' }, description: { es: 'Hashea contraseñas con Bcrypt en el navegador.', en: 'Hash passwords with Bcrypt in your browser.' }, category: 'security', emoji: '🛡️' },
  { slug: { es: 'decodificador-jwt', en: 'jwt-decoder' }, title: { es: 'Decodificador JWT', en: 'JWT decoder' }, description: { es: 'Inspecciona el contenido de tokens JWT.', en: 'Inspect the contents of JWT tokens.' }, category: 'tech', emoji: '🎟️' },
  { slug: { es: 'generador-hmac', en: 'hmac-generator' }, title: { es: 'Generador HMAC', en: 'HMAC generator' }, description: { es: 'Firma HMAC con SHA-256, SHA-512 y más.', en: 'HMAC signatures with SHA-256, SHA-512 and more.' }, category: 'security', emoji: '✍️' },

  // === Datos / Testing (10) ===
  { slug: { es: 'generador-de-nombres-falsos', en: 'fake-name-generator' }, title: { es: 'Generador de nombres falsos', en: 'Fake name generator' }, description: { es: 'Nombres falsos para tests y prototipos.', en: 'Fake names for tests and prototypes.' }, category: 'data', emoji: '🪪' },
  { slug: { es: 'generador-de-direcciones-falsas', en: 'fake-address-generator' }, title: { es: 'Generador de direcciones falsas', en: 'Fake address generator' }, description: { es: 'Direcciones de muestra para forms y QA.', en: 'Sample addresses for forms and QA.' }, category: 'data', emoji: '📮' },
  { slug: { es: 'generador-de-emails-falsos', en: 'fake-email-generator' }, title: { es: 'Generador de emails falsos', en: 'Fake email generator' }, description: { es: 'Emails de prueba con dominios seguros.', en: 'Test emails with safe domains.' }, category: 'data', emoji: '📧' },
  { slug: { es: 'generador-de-telefonos-falsos', en: 'fake-phone-generator' }, title: { es: 'Generador de teléfonos falsos', en: 'Fake phone number generator' }, description: { es: 'Teléfonos válidos de testing por país.', en: 'Test-valid phone numbers per country.' }, category: 'data', emoji: '☎️' },
  { slug: { es: 'generador-de-datos-csv-json', en: 'csv-json-test-data-generator' }, title: { es: 'Generador de datos test (CSV/JSON)', en: 'Test data generator (CSV/JSON)' }, description: { es: 'Filas de prueba en CSV o JSON al instante.', en: 'Test rows in CSV or JSON instantly.' }, category: 'data', emoji: '📊' },
  { slug: { es: 'generador-de-tarjetas-de-test', en: 'test-credit-card-generator' }, title: { es: 'Generador de tarjetas de test (Luhn)', en: 'Test credit card generator (Luhn)' }, description: { es: 'Números de tarjeta válidos por Luhn para testing.', en: 'Luhn-valid card numbers for testing only.' }, category: 'data', emoji: '💳' },
  { slug: { es: 'generador-de-direcciones-ip', en: 'random-ip-generator' }, title: { es: 'Generador de direcciones IP', en: 'Random IP generator' }, description: { es: 'IPv4 e IPv6 aleatorias para tests de red.', en: 'Random IPv4 and IPv6 for network tests.' }, category: 'tech', emoji: '🌐' },
  { slug: { es: 'generador-de-direcciones-mac', en: 'random-mac-generator' }, title: { es: 'Generador de direcciones MAC', en: 'Random MAC generator' }, description: { es: 'Direcciones MAC con formato y vendor.', en: 'MAC addresses with formatting and vendor.' }, category: 'tech', emoji: '🔌' },
  { slug: { es: 'generador-de-user-agent', en: 'random-user-agent-generator' }, title: { es: 'Generador de User Agent random', en: 'Random User Agent generator' }, description: { es: 'User agents reales para testing de detección.', en: 'Real user agents for detection testing.' }, category: 'tech', emoji: '🕵️' },
  { slug: { es: 'generador-de-fechas-aleatorias', en: 'random-date-generator' }, title: { es: 'Generador de fechas aleatorias', en: 'Random date generator' }, description: { es: 'Fechas aleatorias en cualquier rango y formato.', en: 'Random dates in any range and format.' }, category: 'data', emoji: '📅' },

  // === Branding (10) ===
  { slug: { es: 'generador-de-slogans', en: 'slogan-generator' }, title: { es: 'Generador de slogans', en: 'Slogan generator' }, description: { es: 'Slogans pegadizos para tu marca o producto.', en: 'Catchy slogans for your brand or product.' }, category: 'business', emoji: '💡' },
  { slug: { es: 'generador-de-taglines', en: 'tagline-generator' }, title: { es: 'Generador de taglines', en: 'Tagline generator' }, description: { es: 'Taglines memorables en una línea.', en: 'Memorable taglines in one line.' }, category: 'business', emoji: '🪧' },
  { slug: { es: 'generador-de-nombres-de-dominio', en: 'domain-name-generator' }, title: { es: 'Generador de nombres de dominio', en: 'Domain name generator' }, description: { es: 'Ideas de dominio disponibles y memorables.', en: 'Memorable domain ideas worth checking.' }, category: 'business', emoji: '🌍' },
  { slug: { es: 'generador-de-nombres-de-producto', en: 'product-name-generator' }, title: { es: 'Generador de nombres de producto', en: 'Product name generator' }, description: { es: 'Nombres para productos, líneas o ediciones.', en: 'Names for products, lines or editions.' }, category: 'business', emoji: '📦' },
  { slug: { es: 'generador-de-nombres-de-startup', en: 'startup-name-generator' }, title: { es: 'Generador de nombres de startup', en: 'Startup name generator' }, description: { es: 'Nombres con feel SaaS y dominio en mente.', en: 'SaaS-style names with domains in mind.' }, category: 'business', emoji: '🚀' },
  { slug: { es: 'generador-de-nombres-de-app', en: 'app-name-generator' }, title: { es: 'Generador de nombres de app', en: 'App name generator' }, description: { es: 'Nombres cortos y App Store-friendly.', en: 'Short, App Store-friendly names.' }, category: 'business', emoji: '📱' },
  { slug: { es: 'generador-de-mision-empresarial', en: 'mission-statement-generator' }, title: { es: 'Generador de declaración de misión', en: 'Mission statement generator' }, description: { es: 'Declaración de misión clara en una frase.', en: 'A clear one-sentence mission statement.' }, category: 'business', emoji: '🎯' },
  { slug: { es: 'generador-about-us', en: 'about-us-generator' }, title: { es: 'Generador de párrafo "Sobre nosotros"', en: 'About-us paragraph generator' }, description: { es: 'Párrafo "About" listo para tu landing.', en: 'About paragraph ready for your landing.' }, category: 'business', emoji: '🏢' },
  { slug: { es: 'generador-de-keywords-de-marca', en: 'brand-keywords-generator' }, title: { es: 'Generador de keywords de marca', en: 'Brand keywords generator' }, description: { es: 'Atributos clave para definir tu marca.', en: 'Key attributes to define your brand.' }, category: 'business', emoji: '🏷️' },
  { slug: { es: 'brief-de-naming', en: 'naming-brief-generator' }, title: { es: 'Brief de naming', en: 'Naming brief generator' }, description: { es: 'Estructura un brief de naming en minutos.', en: 'Build a naming brief in minutes.' }, category: 'business', emoji: '📋' },

  // === Marketing / Redes (10) ===
  { slug: { es: 'generador-de-hashtags-instagram', en: 'instagram-hashtag-generator' }, title: { es: 'Generador de hashtags para Instagram', en: 'Instagram hashtag generator' }, description: { es: 'Mix balanceado de hashtags por nicho.', en: 'Balanced hashtag mix by niche.' }, category: 'marketing', emoji: '#️⃣' },
  { slug: { es: 'generador-de-hashtags-tiktok', en: 'tiktok-hashtag-generator' }, title: { es: 'Generador de hashtags para TikTok', en: 'TikTok hashtag generator' }, description: { es: 'Hashtags de tendencia para TikTok.', en: 'Trending hashtags for TikTok.' }, category: 'marketing', emoji: '🎵' },
  { slug: { es: 'generador-de-bio-instagram', en: 'instagram-bio-generator' }, title: { es: 'Generador de bio para Instagram', en: 'Instagram bio generator' }, description: { es: 'Bio de Instagram que convierte en clicks.', en: 'IG bios that convert into clicks.' }, category: 'marketing', emoji: '✨' },
  { slug: { es: 'generador-de-headline-linkedin', en: 'linkedin-headline-generator' }, title: { es: 'Generador de headline LinkedIn', en: 'LinkedIn headline generator' }, description: { es: 'Headline de 220 caracteres que destaca.', en: '220-char headline that stands out.' }, category: 'marketing', emoji: '💼' },
  { slug: { es: 'generador-de-captions', en: 'caption-generator' }, title: { es: 'Generador de captions', en: 'Caption generator' }, description: { es: 'Captions con hook + valor + CTA.', en: 'Captions with hook + value + CTA.' }, category: 'marketing', emoji: '📝' },
  { slug: { es: 'generador-de-asuntos-de-email', en: 'email-subject-line-generator' }, title: { es: 'Generador de asuntos de email', en: 'Email subject line generator' }, description: { es: 'Subjects que se abren, no que se ignoran.', en: 'Subjects that get opened, not ignored.' }, category: 'marketing', emoji: '📨' },
  { slug: { es: 'generador-de-tweets', en: 'tweet-generator' }, title: { es: 'Generador de tweets / threads', en: 'Tweet/thread generator' }, description: { es: 'Estructura de tweet o thread viral.', en: 'Tweet or thread structure that hooks.' }, category: 'marketing', emoji: '🐦' },
  { slug: { es: 'generador-de-titulos-youtube', en: 'youtube-title-generator' }, title: { es: 'Generador de títulos de YouTube', en: 'YouTube title generator' }, description: { es: 'Títulos optimizados para CTR de YT.', en: 'CTR-optimized YouTube titles.' }, category: 'marketing', emoji: '▶️' },
  { slug: { es: 'generador-de-nombres-de-podcast', en: 'podcast-name-generator' }, title: { es: 'Generador de nombres de podcast', en: 'Podcast name generator' }, description: { es: 'Nombres de podcast fáciles de buscar.', en: 'Podcast names easy to search.' }, category: 'marketing', emoji: '🎙️' },
  { slug: { es: 'generador-de-nombres-de-newsletter', en: 'newsletter-name-generator' }, title: { es: 'Generador de nombres de newsletter', en: 'Newsletter name generator' }, description: { es: 'Nombres de newsletter con personalidad.', en: 'Newsletter names with personality.' }, category: 'marketing', emoji: '✉️' },

  // === Mascotas (10) ===
  { slug: { es: 'generador-de-nombres-para-perros', en: 'dog-name-generator' }, title: { es: 'Generador de nombres para perros', en: 'Dog name generator' }, description: { es: 'Nombres por tamaño, personalidad y rol.', en: 'Names by size, personality and role.' }, category: 'pets', emoji: '🐶' },
  { slug: { es: 'generador-de-nombres-para-conejos', en: 'rabbit-name-generator' }, title: { es: 'Generador de nombres para conejos', en: 'Rabbit name generator' }, description: { es: 'Nombres tiernos y divertidos para conejos.', en: 'Cute and funny rabbit names.' }, category: 'pets', emoji: '🐰' },
  { slug: { es: 'generador-de-nombres-para-hamsters', en: 'hamster-name-generator' }, title: { es: 'Generador de nombres para hámsters', en: 'Hamster name generator' }, description: { es: 'Nombres dulces para tu hámster.', en: 'Sweet names for your hamster.' }, category: 'pets', emoji: '🐹' },
  { slug: { es: 'generador-de-nombres-para-peces', en: 'fish-name-generator' }, title: { es: 'Generador de nombres para peces', en: 'Fish name generator' }, description: { es: 'Nombres para peces, betas y goldfish.', en: 'Names for fish, bettas and goldfish.' }, category: 'pets', emoji: '🐠' },
  { slug: { es: 'generador-de-nombres-para-aves', en: 'bird-name-generator' }, title: { es: 'Generador de nombres para aves', en: 'Bird name generator' }, description: { es: 'Nombres para loros, canarios y periquitos.', en: 'Names for parrots, canaries and budgies.' }, category: 'pets', emoji: '🦜' },
  { slug: { es: 'generador-de-nombres-para-tortugas', en: 'turtle-name-generator' }, title: { es: 'Generador de nombres para tortugas', en: 'Turtle name generator' }, description: { es: 'Nombres tranquilos y duraderos.', en: 'Calm, long-lasting names.' }, category: 'pets', emoji: '🐢' },
  { slug: { es: 'generador-de-nombres-para-caballos', en: 'horse-name-generator' }, title: { es: 'Generador de nombres para caballos', en: 'Horse name generator' }, description: { es: 'Nombres equinos para campo o competencia.', en: 'Equine names for the barn or arena.' }, category: 'pets', emoji: '🐴' },
  { slug: { es: 'generador-de-nombres-para-cobayos', en: 'guinea-pig-name-generator' }, title: { es: 'Generador de nombres para cobayos', en: 'Guinea pig name generator' }, description: { es: 'Nombres tiernos para tu cobayo.', en: 'Cute names for your guinea pig.' }, category: 'pets', emoji: '🐹' },
  { slug: { es: 'generador-de-nombres-para-reptiles', en: 'reptile-name-generator' }, title: { es: 'Generador de nombres para reptiles', en: 'Reptile name generator' }, description: { es: 'Nombres para iguanas, geckos y serpientes.', en: 'Names for iguanas, geckos and snakes.' }, category: 'pets', emoji: '🦎' },
  { slug: { es: 'generador-de-apodos-para-mascotas', en: 'pet-nickname-generator' }, title: { es: 'Generador de apodos para mascotas', en: 'Pet nickname generator' }, description: { es: 'Apodos cariñosos para cualquier mascota.', en: 'Affectionate nicknames for any pet.' }, category: 'pets', emoji: '🐾' },

  // === Bebés / Personas (10) ===
  { slug: { es: 'generador-de-nombres-de-bebe-varon', en: 'baby-boy-name-generator' }, title: { es: 'Generador de nombres para bebé varón', en: 'Baby boy name generator' }, description: { es: 'Nombres para bebé varón modernos y clásicos.', en: 'Modern and classic baby boy names.' }, category: 'people', emoji: '👶' },
  { slug: { es: 'generador-de-nombres-de-bebe-mujer', en: 'baby-girl-name-generator' }, title: { es: 'Generador de nombres para bebé mujer', en: 'Baby girl name generator' }, description: { es: 'Nombres para bebé mujer modernos y clásicos.', en: 'Modern and classic baby girl names.' }, category: 'people', emoji: '👧' },
  { slug: { es: 'generador-de-nombres-biblicos', en: 'biblical-name-generator' }, title: { es: 'Generador de nombres bíblicos', en: 'Biblical name generator' }, description: { es: 'Nombres del Antiguo y Nuevo Testamento con su significado.', en: 'Old and New Testament names with meanings.' }, category: 'people', emoji: '📖' },
  { slug: { es: 'generador-de-nombres-hispanos', en: 'hispanic-name-generator' }, title: { es: 'Generador de nombres hispanos', en: 'Hispanic name generator' }, description: { es: 'Nombres hispanos populares y tradicionales.', en: 'Popular and traditional Hispanic names.' }, category: 'people', emoji: '🌎' },
  { slug: { es: 'generador-de-nombres-compuestos', en: 'compound-name-generator' }, title: { es: 'Generador de nombres compuestos', en: 'Compound name generator' }, description: { es: 'Combinaciones tipo "María Sol" o "Juan Pablo".', en: 'Combos like "Mary Jane" or "Jean-Pierre".' }, category: 'people', emoji: '🧬' },
  { slug: { es: 'generador-de-usernames', en: 'username-generator' }, title: { es: 'Generador de nombres de usuario', en: 'Username generator' }, description: { es: 'Usernames disponibles en redes y juegos.', en: 'Usernames available across networks and games.' }, category: 'people', emoji: '👤' },
  { slug: { es: 'generador-de-pen-name-autor', en: 'pen-name-generator' }, title: { es: 'Generador de seudónimo de autor', en: 'Author pen name generator' }, description: { es: 'Seudónimos para escritores y novelistas.', en: 'Pen names for writers and novelists.' }, category: 'people', emoji: '✒️' },
  { slug: { es: 'generador-de-stage-name-artista', en: 'stage-name-generator' }, title: { es: 'Generador de nombre artístico', en: 'Stage name generator' }, description: { es: 'Nombres artísticos para músicos y performers.', en: 'Stage names for musicians and performers.' }, category: 'people', emoji: '🎤' },
  { slug: { es: 'generador-de-nombres-para-mellizos', en: 'twin-names-generator' }, title: { es: 'Generador de nombres para mellizos', en: 'Twin names generator' }, description: { es: 'Pares de nombres que combinan sin rimar.', en: 'Name pairs that match without rhyming.' }, category: 'people', emoji: '👯' },
  { slug: { es: 'generador-de-nombres-vintage', en: 'vintage-name-generator' }, title: { es: 'Generador de nombres vintage', en: 'Vintage name generator' }, description: { es: 'Nombres antiguos que vuelven a estar de moda.', en: 'Old names making a comeback.' }, category: 'people', emoji: '📜' },

  // === Diseño / Color (10) ===
  { slug: { es: 'generador-de-paletas-de-colores', en: 'color-palette-generator' }, title: { es: 'Generador de paletas de colores', en: 'Color palette generator' }, description: { es: 'Paletas armónicas con HEX, RGB y HSL.', en: 'Harmonic palettes with HEX, RGB and HSL.' }, category: 'design', emoji: '🎨' },
  { slug: { es: 'generador-de-gradientes-css', en: 'css-gradient-generator' }, title: { es: 'Generador de gradientes CSS', en: 'CSS gradient generator' }, description: { es: 'Gradientes lineales y radiales con código listo.', en: 'Linear and radial gradients with copy-paste CSS.' }, category: 'design', emoji: '🌈' },
  { slug: { es: 'generador-de-color-hex', en: 'hex-color-generator' }, title: { es: 'Generador de color hex', en: 'Hex color generator' }, description: { es: 'Color hex aleatorio o por filtro de luminosidad.', en: 'Random hex color or filtered by luminance.' }, category: 'design', emoji: '🟢' },
  { slug: { es: 'verificador-contraste-de-colores', en: 'color-contrast-checker' }, title: { es: 'Verificador de contraste de colores', en: 'Color contrast checker' }, description: { es: 'Cumplí WCAG AA y AAA con tu paleta.', en: 'Meet WCAG AA and AAA with your palette.' }, category: 'design', emoji: '⚖️' },
  { slug: { es: 'generador-de-colores-tailwind', en: 'tailwind-color-generator' }, title: { es: 'Generador de colores estilo Tailwind', en: 'Tailwind color generator' }, description: { es: 'Escala 50-950 a partir de un color base.', en: 'Generate a 50-950 scale from a base color.' }, category: 'design', emoji: '💨' },
  { slug: { es: 'generador-de-color-aleatorio', en: 'random-color-generator' }, title: { es: 'Generador de color aleatorio', en: 'Random color generator' }, description: { es: 'Color aleatorio en HEX, RGB y HSL.', en: 'Random color in HEX, RGB and HSL.' }, category: 'design', emoji: '🎲' },
  { slug: { es: 'sugerir-nombre-de-color', en: 'color-name-suggester' }, title: { es: 'Sugeridor de nombre de color', en: 'Color name suggester' }, description: { es: 'Convierte un HEX en un nombre humano.', en: 'Turn a HEX into a human-readable name.' }, category: 'design', emoji: '🏷️' },
  { slug: { es: 'generador-de-css-shadow', en: 'css-shadow-generator' }, title: { es: 'Generador de CSS box-shadow', en: 'CSS box-shadow generator' }, description: { es: 'Sombras CSS visuales con código listo.', en: 'Visual CSS shadows with ready-to-paste code.' }, category: 'design', emoji: '🌒' },
  { slug: { es: 'generador-de-css-border-radius', en: 'css-border-radius-generator' }, title: { es: 'Generador de CSS border-radius', en: 'CSS border-radius generator' }, description: { es: 'Border-radius asimétricos con preview.', en: 'Asymmetric border-radius with preview.' }, category: 'design', emoji: '🔘' },
  { slug: { es: 'generador-de-avatar-iniciales', en: 'avatar-initials-generator' }, title: { es: 'Generador de avatar con iniciales', en: 'Avatar initials generator' }, description: { es: 'Avatar circular con iniciales y color.', en: 'Round avatar with initials and color.' }, category: 'design', emoji: '🆗' },

  // === Decisión / Random (10) ===
  { slug: { es: 'generador-de-numeros-aleatorios', en: 'random-number-generator' }, title: { es: 'Generador de números aleatorios', en: 'Random number generator' }, description: { es: 'Números aleatorios en cualquier rango.', en: 'Random numbers in any range.' }, category: 'random', emoji: '🔢' },
  { slug: { es: 'tirar-moneda-cara-o-ceca', en: 'coin-flip-generator' }, title: { es: 'Tirar moneda (cara o ceca)', en: 'Coin flip' }, description: { es: 'Tirá una moneda online: cara o ceca.', en: 'Flip a coin online: heads or tails.' }, category: 'random', emoji: '🪙' },
  { slug: { es: 'tirar-dados-online', en: 'dice-roller' }, title: { es: 'Tirar dados online', en: 'Dice roller' }, description: { es: 'Dados D4, D6, D10, D20 para juegos.', en: 'D4, D6, D10, D20 dice for games.' }, category: 'random', emoji: '🎲' },
  { slug: { es: 'decisor-si-o-no', en: 'yes-no-decider' }, title: { es: 'Decisor "Sí o No"', en: 'Yes / No decider' }, description: { es: 'Decisión binaria al instante.', en: 'Binary decision in one click.' }, category: 'random', emoji: '✅' },
  { slug: { es: 'seleccionar-aleatorio-de-lista', en: 'random-pick-from-list' }, title: { es: 'Seleccionar aleatoriamente de una lista', en: 'Random pick from list' }, description: { es: 'Pegá tu lista y obtené un ganador.', en: 'Paste your list and get a pick.' }, category: 'random', emoji: '🎯' },
  { slug: { es: 'ruleta-online', en: 'spinner-wheel' }, title: { es: 'Ruleta online', en: 'Online spinner / wheel' }, description: { es: 'Ruleta giratoria para decidir cualquier cosa.', en: 'Spinning wheel for any decision.' }, category: 'random', emoji: '🎡' },
  { slug: { es: 'generador-de-emoji-aleatorio', en: 'random-emoji-generator' }, title: { es: 'Generador de emoji aleatorio', en: 'Random emoji generator' }, description: { es: 'Emoji aleatorio para tus mensajes.', en: 'Random emoji for your messages.' }, category: 'random', emoji: '🎭' },
  { slug: { es: 'color-aleatorio-visual', en: 'random-color-picker' }, title: { es: 'Color aleatorio visual', en: 'Random color picker' }, description: { es: 'Swatch grande de un color al azar.', en: 'Large swatch of a random color.' }, category: 'random', emoji: '🟧' },
  { slug: { es: 'pais-aleatorio', en: 'random-country-generator' }, title: { es: 'País aleatorio', en: 'Random country generator' }, description: { es: 'Sortea un país del mundo al azar.', en: 'Pick a random country of the world.' }, category: 'random', emoji: '🌍' },
  { slug: { es: 'sortear-ganador', en: 'random-winner-picker' }, title: { es: 'Sortear ganador (rifa)', en: 'Random winner picker' }, description: { es: 'Sorteo justo desde una lista de participantes.', en: 'Fair raffle from a list of participants.' }, category: 'random', emoji: '🏆' },

  // === Texto / Contenido (10) ===
  { slug: { es: 'generador-de-palabras-aleatorias', en: 'random-word-generator' }, title: { es: 'Generador de palabras aleatorias', en: 'Random word generator' }, description: { es: 'Palabras al azar para creatividad y juegos.', en: 'Random words for creativity and games.' }, category: 'content', emoji: '📚' },
  { slug: { es: 'generador-de-oraciones-aleatorias', en: 'random-sentence-generator' }, title: { es: 'Generador de oraciones aleatorias', en: 'Random sentence generator' }, description: { es: 'Oraciones al azar para warm-ups creativos.', en: 'Random sentences for creative warm-ups.' }, category: 'content', emoji: '📜' },
  { slug: { es: 'generador-de-frase-del-dia', en: 'quote-of-the-day' }, title: { es: 'Frase del día', en: 'Quote of the day' }, description: { es: 'Frase inspiradora curada para el día.', en: 'Curated inspiring quote for the day.' }, category: 'inspiration', emoji: '💬' },
  { slug: { es: 'generador-de-cumplidos', en: 'compliment-generator' }, title: { es: 'Generador de cumplidos', en: 'Compliment generator' }, description: { es: 'Cumplidos genuinos para alegrar el día.', en: 'Genuine compliments to make someone\'s day.' }, category: 'inspiration', emoji: '💐' },
  { slug: { es: 'generador-de-frases-motivacionales', en: 'motivational-quote-generator' }, title: { es: 'Generador de frases motivacionales', en: 'Motivational quote generator' }, description: { es: 'Frases para arrancar el día con foco.', en: 'Quotes to start the day with focus.' }, category: 'inspiration', emoji: '🔥' },
  { slug: { es: 'generador-de-afirmaciones', en: 'affirmation-generator' }, title: { es: 'Generador de afirmaciones positivas', en: 'Positive affirmation generator' }, description: { es: 'Afirmaciones en presente para tu rutina.', en: 'Present-tense affirmations for your routine.' }, category: 'inspiration', emoji: '🌱' },
  { slug: { es: 'galletita-de-la-fortuna', en: 'fortune-cookie-generator' }, title: { es: 'Galletita de la fortuna', en: 'Fortune cookie generator' }, description: { es: 'Mensajes cortos al estilo galletita.', en: 'Short fortune-cookie style messages.' }, category: 'fun', emoji: '🥠' },
  { slug: { es: 'generador-de-palabras-inventadas', en: 'made-up-word-generator' }, title: { es: 'Generador de palabras inventadas', en: 'Made-up word generator' }, description: { es: 'Palabras inventadas con sonido real.', en: 'Made-up words that sound plausible.' }, category: 'content', emoji: '🪄' },
  { slug: { es: 'generador-de-anagramas', en: 'anagram-generator' }, title: { es: 'Generador de anagramas', en: 'Anagram generator' }, description: { es: 'Anagramas a partir de una palabra.', en: 'Anagrams from any word.' }, category: 'content', emoji: '🔤' },
  { slug: { es: 'generador-de-acronimos', en: 'acronym-generator' }, title: { es: 'Generador de acrónimos', en: 'Acronym generator' }, description: { es: 'Convertí una frase en un acrónimo memorable.', en: 'Turn a phrase into a memorable acronym.' }, category: 'content', emoji: '🔠' },

  // === Trabajo (10) ===
  { slug: { es: 'generador-numeros-de-factura', en: 'invoice-number-generator' }, title: { es: 'Generador de números de factura', en: 'Invoice number generator' }, description: { es: 'Numeración de factura por formato y serie.', en: 'Invoice numbering by format and series.' }, category: 'work', emoji: '🧾' },
  { slug: { es: 'generador-numeros-de-pedido', en: 'order-number-generator' }, title: { es: 'Generador de números de pedido', en: 'Order number generator' }, description: { es: 'Códigos de pedido únicos por día o canal.', en: 'Unique order codes per day or channel.' }, category: 'work', emoji: '📦' },
  { slug: { es: 'generador-de-sku', en: 'sku-generator' }, title: { es: 'Generador de códigos SKU', en: 'SKU generator' }, description: { es: 'SKUs estructurados para tu catálogo.', en: 'Structured SKUs for your catalog.' }, category: 'work', emoji: '🏷️' },
  { slug: { es: 'generador-codigo-de-referencia', en: 'reference-code-generator' }, title: { es: 'Generador de códigos de referencia', en: 'Reference code generator' }, description: { es: 'Códigos de referencia con prefijo y checksum.', en: 'Reference codes with prefix and checksum.' }, category: 'work', emoji: '🔖' },
  { slug: { es: 'generador-firma-de-email', en: 'email-signature-generator' }, title: { es: 'Generador de firma de email', en: 'Email signature generator' }, description: { es: 'Firma HTML profesional copiable.', en: 'Copy-paste professional HTML signature.' }, category: 'work', emoji: '✍️' },
  { slug: { es: 'generador-out-of-office', en: 'out-of-office-reply-generator' }, title: { es: 'Generador de respuesta automática (vacaciones)', en: 'Out-of-office reply generator' }, description: { es: 'Respuesta de vacaciones clara y profesional.', en: 'A clear, professional vacation auto-reply.' }, category: 'work', emoji: '🌴' },
  { slug: { es: 'generador-carta-de-renuncia', en: 'resignation-letter-generator' }, title: { es: 'Generador de carta de renuncia', en: 'Resignation letter generator' }, description: { es: 'Carta de renuncia profesional en minutos.', en: 'Professional resignation letter in minutes.' }, category: 'work', emoji: '📤' },
  { slug: { es: 'generador-cover-letter-intro', en: 'cover-letter-intro-generator' }, title: { es: 'Generador de intro de carta de presentación', en: 'Cover letter intro generator' }, description: { es: 'Apertura potente para cualquier postulación.', en: 'Strong opening for any application.' }, category: 'work', emoji: '💌' },
  { slug: { es: 'generador-preguntas-de-entrevista', en: 'interview-questions-generator' }, title: { es: 'Generador de preguntas de entrevista', en: 'Interview questions generator' }, description: { es: 'Preguntas por rol para entrevistar mejor.', en: 'Per-role questions to interview better.' }, category: 'work', emoji: '🎤' },
  { slug: { es: 'generador-agenda-de-reunion', en: 'meeting-agenda-generator' }, title: { es: 'Generador de agenda de reunión', en: 'Meeting agenda generator' }, description: { es: 'Agenda con objetivos, tiempos y dueños.', en: 'Agenda with objectives, time-boxes and owners.' }, category: 'work', emoji: '📋' },
];

export function urlFor(g: GeneratorMeta, lang: Lang) {
  return lang === 'es' ? `/${g.slug.es}` : `/en/${g.slug.en}`;
}

export const CATEGORIES_ES: Record<GeneratorMeta['category'], string> = {
  security: 'Seguridad',
  business: 'Empresa y branding',
  content: 'Texto y contenido',
  fun: 'Diversión',
  tools: 'Herramientas',
  tech: 'Tech',
  data: 'Datos y testing',
  marketing: 'Marketing y redes',
  design: 'Diseño y color',
  random: 'Decisión y random',
  pets: 'Mascotas',
  people: 'Personas y bebés',
  work: 'Trabajo',
  inspiration: 'Inspiración',
};

export const CATEGORIES_EN: Record<GeneratorMeta['category'], string> = {
  security: 'Security',
  business: 'Business & branding',
  content: 'Text & content',
  fun: 'Fun',
  tools: 'Tools',
  tech: 'Tech',
  data: 'Data & testing',
  marketing: 'Marketing & social',
  design: 'Design & color',
  random: 'Decision & random',
  pets: 'Pets',
  people: 'People & babies',
  work: 'Work',
  inspiration: 'Inspiration',
};
