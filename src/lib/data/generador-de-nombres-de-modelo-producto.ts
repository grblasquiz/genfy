import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-modelo-producto",
    "en": "product-model-name-generator"
  },
  "category": "business",
  "emoji": "🏷️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Modelo de Producto | Genfy",
    "metaDesc": "Creá designaciones técnicas para modelos de producto y variantes. Sistemas de naming que comunican especificaciones y jerarquía comercial.",
    "h1": "Generador de Nombres de Modelo de Producto",
    "intro": "Desarrollá nomenclatura técnica clara para tu catálogo. Nombres que facilitan búsqueda, comparación y toma de decisiones.",
    "tag": "Negocios",
    "filterLabel": "Formato",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "alpha",
        "label": "Códigos Alfabéticos",
        "items": [
          [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
          ],
          [
            "AB",
            "AC",
            "AD",
            "AX",
            "AZ",
            "BA",
            "BC",
            "BD",
            "BX",
            "BZ",
            "CA",
            "CB",
            "CD",
            "CX",
            "CZ",
            "DA",
            "DB",
            "DC",
            "DX",
            "DZ"
          ],
          [
            "Pro",
            "Max",
            "Air",
            "One",
            "Go",
            "Zen",
            "Ace",
            "Neo",
            "Evo",
            "Ion",
            "Vox",
            "Lux",
            "Flux",
            "Apex",
            "Edge"
          ]
        ]
      },
      {
        "id": "numeric",
        "label": "Designadores Numéricos",
        "items": [
          [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "1000"
          ],
          [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90"
          ],
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ],
          [
            "15",
            "25",
            "35",
            "45",
            "55",
            "65",
            "75",
            "85",
            "95"
          ],
          [
            "2024",
            "2025",
            "24",
            "25"
          ]
        ]
      },
      {
        "id": "technical",
        "label": "Indicadores Técnicos",
        "items": [
          [
            "i3",
            "i5",
            "i7",
            "i9",
            "M1",
            "M2",
            "M3",
            "R5",
            "R7",
            "R9"
          ],
          [
            "GT",
            "GTS",
            "GTX",
            "RTX",
            "Ti",
            "XT",
            "XTX"
          ],
          [
            "S",
            "SE",
            "SR",
            "SL",
            "ST",
            "SV",
            "SX",
            "SZ"
          ],
          [
            "Plus",
            "Pro",
            "Ultra",
            "Turbo",
            "Sport",
            "Executive",
            "Limited",
            "Special"
          ]
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijos de Variante",
        "items": [
          [
            "X",
            "Z",
            "R",
            "T",
            "V",
            "E",
            "H",
            "L",
            "N",
            "W"
          ],
          [
            "GL",
            "GLE",
            "GLK",
            "GLC",
            "GLS",
            "AMG"
          ],
          [
            "LE",
            "SE",
            "XLE",
            "XSE",
            "Limited",
            "Touring",
            "Premium"
          ],
          [
            "Lite",
            "Mini",
            "Micro",
            "Compact",
            "Standard",
            "Extended",
            "Mega"
          ]
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Sistemas de codificación para SKUs técnicos",
        "body": "<p>Las empresas B2B y tech necesitan <strong>nomenclaturas sistemáticas</strong> que comuniquen especificaciones sin explicación. Intel usa esquema claro: Core i3/i5/i7/i9 (segmento) + generación + sufijo de performance (K para overclock, F para sin gráficos). Un técnico experimentado puede decodificar 'Core i7-13700K' instantáneamente: 13va generación, gama alta, desbloqueado. Esto reduce errores en órdenes B2B y facilita comparación.</p><p>Para productos industriales, desarrollá <strong>códigos que incluyan información crítica</strong>: material, tamaño, acabado. Ejemplo: ABC-304-25-PL = marca ABC, acero inoxidable 304, diámetro 25mm, pulido. Este sistema permite a compradores buscar especificaciones exactas sin navegar catálogo completo. Errores comunes: códigos demasiado largos (más de 15 caracteres dificulta memorización), o códigos arbitrarios que no comunican nada (WX47QZ no dice nada sobre el producto).</p>"
      },
      {
        "h2": "Naming para evolución de generaciones",
        "body": "<p>La numeración de generaciones debe ser <strong>intuitivamente ascendente y consistente</strong>. Apple usa años para iPhone (iPhone 15 = 2023, año 15 del producto), PlayStation usa números simples (PS5 = quinta generación). Samsung saltó de Note 7 a Note 8 después de problemas de batería, usando número para distanciarse. Microsoft pasó de Windows 8 a Windows 10 saltando el 9, supuestamente por compatibilidad de código legacy que buscaba 'Windows 9x'.</p><p>Para <strong>actualizaciones anuales</strong>: usá años (MacBook Pro 2024) o sufijos alfabéticos (Tesla Model S Plaid). Para actualizaciones menores dentro del mismo año: letras minúsculas (Galaxy S24a, S24b) o 'refresh' silencioso sin cambio de nombre. Evitá el caos de versioning de Adobe: pasaron de CS6 directamente a CC (Creative Cloud), abandonando números porque el modelo de negocio cambió a suscripción. Si tu modelo de producto cambia radicalmente, considerá nuevo naming scheme en vez de forzar continuidad numérica.</p>"
      },
      {
        "h2": "Diferenciación de variantes dentro del mismo modelo",
        "body": "<p>Cuando un modelo tiene múltiples configuraciones, el naming debe <strong>comunicar diferencias clave sin confundir</strong>. BMW usa números para tamaño de motor: 320i (2.0L), 330i (3.0L), con 'i' indicando gasolina, 'd' diesel, 'e' eléctrico. Mercedes usa letras de clase (A, C, E, S) + números de motor + sufijo de configuración (AMG, 4MATIC). Ambos sistemas permiten entender jerarquía sin ver especificaciones.</p><p>Para tech consumer: Apple usa capacidad de almacenamiento (iPhone 256GB vs 512GB) + color como diferenciadores principales, manteniendo nombre de modelo constante. Dell usa letras de línea (XPS, Latitude, Inspiron) + tamaño de pantalla + número de generación + sufijo de specs. La clave es <strong>decidir 2-3 variables principales</strong> que determinan nombre, ignorando specs menores (RAM, color, etc.) que se comunican en descripción extendida. Más de 4 variables en el nombre genera confusión: 'Dell-Latitude-5520-15.6-i7-16GB-512SSD-FHD-Win11Pro' es ilegible.</p>"
      },
      {
        "h2": "Naming para productos descontinuados y EOL",
        "body": "<p>Cuando discontinuás modelos, el naming del reemplazo debe <strong>comunicar upgrade sin alienar usuarios actuales</strong>. Si tenés TurboMax 3000 y lo reemplazás con TurboMax 4000, es obvio. Pero si el cambio es radical (nueva tecnología, nuevo target), considerá nombre completamente nuevo. GoPro pasó de Hero3+ a Hero4 a Hero5, pero luego a Hero (2018), Hero7, Hero8, abandonando temporalmente numeración porque hubo confusión sobre si 'Hero' solo era inferior a 'Hero5'.</p><p>Para gestión de inventario, desarrollá <strong>convenciones internas</strong> que no sean visibles al cliente: sufijo -EOL (end of life), -DISC (discontinued), o -LTD (última producción). Externamente, cuando agotás stock de modelo viejo mientras nuevo está disponible, evitá descuentos tan agresivos que hagan parecer que el nuevo es sobreprecio. Canon mantiene modelos antiguos como 'Rebel SL3' mientras vende 'Rebel T8i' nuevo, diferenciando por letra de serie. Los compradores entienden que SL es línea económica, T es línea principal, sin necesidad de depreciar explícitamente el modelo viejo.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Debo usar números consecutivos o saltar números para comunicar mejoras grandes?",
        "a": "Números consecutivos generan expectativa de mejora incremental (iPhone 14→15). Saltar números (Windows 8→10) comunica cambio disruptivo pero puede confundir línea temporal. Sé consistente una vez que elegís estrategia."
      },
      {
        "q": "¿Cuándo usar letras vs números para modelos?",
        "a": "Letras funcionan para segmentación horizontal (Mercedes Clase A/C/E/S = tamaños). Números para evolución vertical (PlayStation 1/2/3/4/5 = generaciones). Combiná ambos para matriz completa."
      },
      {
        "q": "¿Puedo reutilizar nombres de modelos descontinuados?",
        "a": "Solo después de 5+ años y si el producto nuevo es radicalmente diferente. Ford revivió 'Bronco' después de 25 años exitosamente. Revivir modelos recientes genera confusión en mercado secundario."
      },
      {
        "q": "¿Cómo manejo nombres de modelos en diferentes regiones?",
        "a": "Idealmente mantené consistencia global. Si debés cambiar por registro de marca, asegurate que el nuevo nombre mantenga posición jerárquica equivalente (ej: Vauxhall en UK = Opel en Europa continental, mismas designaciones de modelo)."
      }
    ]
  },
  "en": {
    "pageTitle": "Product Model Name Generator | Genfy",
    "metaDesc": "Create technical designations for product models and variants. Naming systems that communicate specifications and commercial hierarchy.",
    "h1": "Product Model Name Generator",
    "intro": "Develop clear technical nomenclature for your catalog. Names that facilitate search, comparison and decision-making.",
    "tag": "Business",
    "filterLabel": "Format",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "alpha",
        "label": "Alphabetic Codes",
        "items": [
          [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
          ],
          [
            "AB",
            "AC",
            "AD",
            "AX",
            "AZ",
            "BA",
            "BC",
            "BD",
            "BX",
            "BZ",
            "CA",
            "CB",
            "CD",
            "CX",
            "CZ",
            "DA",
            "DB",
            "DC",
            "DX",
            "DZ"
          ],
          [
            "Pro",
            "Max",
            "Air",
            "One",
            "Go",
            "Zen",
            "Ace",
            "Neo",
            "Evo",
            "Ion",
            "Vox",
            "Lux",
            "Flux",
            "Apex",
            "Edge"
          ]
        ]
      },
      {
        "id": "numeric",
        "label": "Numeric Designators",
        "items": [
          [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
            "1000"
          ],
          [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90"
          ],
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
          ],
          [
            "15",
            "25",
            "35",
            "45",
            "55",
            "65",
            "75",
            "85",
            "95"
          ],
          [
            "2024",
            "2025",
            "24",
            "25"
          ]
        ]
      },
      {
        "id": "technical",
        "label": "Technical Indicators",
        "items": [
          [
            "i3",
            "i5",
            "i7",
            "i9",
            "M1",
            "M2",
            "M3",
            "R5",
            "R7",
            "R9"
          ],
          [
            "GT",
            "GTS",
            "GTX",
            "RTX",
            "Ti",
            "XT",
            "XTX"
          ],
          [
            "S",
            "SE",
            "SR",
            "SL",
            "ST",
            "SV",
            "SX",
            "SZ"
          ],
          [
            "Plus",
            "Pro",
            "Ultra",
            "Turbo",
            "Sport",
            "Executive",
            "Limited",
            "Special"
          ]
        ]
      },
      {
        "id": "suffix",
        "label": "Variant Suffixes",
        "items": [
          [
            "X",
            "Z",
            "R",
            "T",
            "V",
            "E",
            "H",
            "L",
            "N",
            "W"
          ],
          [
            "GL",
            "GLE",
            "GLK",
            "GLC",
            "GLS",
            "AMG"
          ],
          [
            "LE",
            "SE",
            "XLE",
            "XSE",
            "Limited",
            "Touring",
            "Premium"
          ],
          [
            "Lite",
            "Mini",
            "Micro",
            "Compact",
            "Standard",
            "Extended",
            "Mega"
          ]
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Coding systems for technical SKUs",
        "body": "<p>B2B and tech companies need <strong>systematic nomenclatures</strong> that communicate specifications without explanation. Intel uses clear scheme: Core i3/i5/i7/i9 (segment) + generation + performance suffix (K for overclocking, F for no graphics). An experienced technician can decode 'Core i7-13700K' instantly: 13th generation, high-end, unlocked. This reduces B2B order errors and facilitates comparison.</p><p>For industrial products, develop <strong>codes that include critical information</strong>: material, size, finish. Example: ABC-304-25-PL = ABC brand, 304 stainless steel, 25mm diameter, polished. This system allows buyers to search exact specifications without navigating entire catalog. Common mistakes: codes too long (more than 15 characters hinders memorization), or arbitrary codes that communicate nothing (WX47QZ says nothing about the product).</p>"
      },
      {
        "h2": "Naming for generation evolution",
        "body": "<p>Generation numbering should be <strong>intuitively ascending and consistent</strong>. Apple uses years for iPhone (iPhone 15 = 2023, year 15 of product), PlayStation uses simple numbers (PS5 = fifth generation). Samsung jumped from Note 7 to Note 8 after battery problems, using number to distance itself. Microsoft went from Windows 8 to Windows 10 skipping 9, supposedly due to legacy code compatibility searching for 'Windows 9x'.</p><p>For <strong>annual updates</strong>: use years (MacBook Pro 2024) or alphabetic suffixes (Tesla Model S Plaid). For minor updates within same year: lowercase letters (Galaxy S24a, S24b) or silent 'refresh' without name change. Avoid Adobe's versioning chaos: they went from CS6 directly to CC (Creative Cloud), abandoning numbers because business model changed to subscription. If your product model changes radically, consider new naming scheme instead of forcing numeric continuity.</p>"
      },
      {
        "h2": "Differentiating variants within same model",
        "body": "<p>When a model has multiple configurations, naming should <strong>communicate key differences without confusion</strong>. BMW uses numbers for engine size: 320i (2.0L), 330i (3.0L), with 'i' indicating gasoline, 'd' diesel, 'e' electric. Mercedes uses class letters (A, C, E, S) + engine numbers + configuration suffix (AMG, 4MATIC). Both systems allow understanding hierarchy without seeing specifications.</p><p>For consumer tech: Apple uses storage capacity (iPhone 256GB vs 512GB) + color as main differentiators, keeping model name constant. Dell uses line letters (XPS, Latitude, Inspiron) + screen size + generation number + specs suffix. The key is <strong>deciding on 2-3 main variables</strong> that determine name, ignoring minor specs (RAM, color, etc.) communicated in extended description. More than 4 variables in the name generates confusion: 'Dell-Latitude-5520-15.6-i7-16GB-512SSD-FHD-Win11Pro' is unreadable.</p>"
      },
      {
        "h2": "Naming for discontinued products and EOL",
        "body": "<p>When discontinuing models, replacement naming should <strong>communicate upgrade without alienating current users</strong>. If you have TurboMax 3000 and replace it with TurboMax 4000, it's obvious. But if change is radical (new technology, new target), consider completely new name. GoPro went from Hero3+ to Hero4 to Hero5, but then to Hero (2018), Hero7, Hero8, temporarily abandoning numbering because there was confusion about whether 'Hero' was only inferior to 'Hero5'.</p><p>For inventory management, develop <strong>internal conventions</strong> not visible to customer: -EOL suffix (end of life), -DISC (discontinued), or -LTD (last production). Externally, when clearing old model stock while new is available, avoid discounts so aggressive they make new seem overpriced. Canon maintains old models like 'Rebel SL3' while selling new 'Rebel T8i', differentiating by series letter. Buyers understand SL is economy line, T is main line, without need to explicitly depreciate old model.</p>"
      }
    ],
    "faq": [
      {
        "q": "Should I use consecutive numbers or skip numbers to communicate major improvements?",
        "a": "Consecutive numbers generate expectation of incremental improvement (iPhone 14→15). Skipping numbers (Windows 8→10) communicates disruptive change but can confuse timeline. Be consistent once you choose strategy."
      },
      {
        "q": "When to use letters vs numbers for models?",
        "a": "Letters work for horizontal segmentation (Mercedes Class A/C/E/S = sizes). Numbers for vertical evolution (PlayStation 1/2/3/4/5 = generations). Combine both for complete matrix."
      },
      {
        "q": "Can I reuse names from discontinued models?",
        "a": "Only after 5+ years and if new product is radically different. Ford revived 'Bronco' after 25 years successfully. Reviving recent models generates confusion in secondary market."
      },
      {
        "q": "How do I handle model names in different regions?",
        "a": "Ideally maintain global consistency. If you must change due to trademark, ensure new name maintains equivalent hierarchical position (e.g., Vauxhall in UK = Opel in continental Europe, same model designations)."
      }
    ]
  }
};
