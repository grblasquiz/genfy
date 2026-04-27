import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "sku",
    "en": "sku"
  },
  "emoji": "📦",
  "category": "general",
  "es": {
    "pageTitle": "SKU — Glosario | Genfy",
    "metaDesc": "SKU (Stock Keeping Unit) es el código que identifica cada producto único en inventario. Aprende cómo estructurarlo, ejemplos reales y mejores prácticas para e-commerce.",
    "h1": "SKU",
    "short": "SKU (Stock Keeping Unit) es un código alfanumérico interno que identifica de manera única cada producto en tu inventario. A diferencia del código de barras universal (UPC/EAN), el SKU lo definís vos según tus necesidades de negocio.",
    "body": [
      {
        "title": "¿Qué es un SKU?",
        "html": "<p>El <strong>SKU</strong> es el identificador que tu negocio usa para rastrear inventario, ventas y logística. Si vendés remeras, cada combinación de modelo-talle-color es un SKU distinto: <code>REM-BASIC-L-AZUL</code> y <code>REM-BASIC-L-ROJO</code> son dos SKUs.</p><p>A diferencia del <strong>código de barras</strong> (que es global y único por producto físico), el SKU es interno. Dos tiendas pueden vender el mismo producto con SKUs completamente diferentes. Tu competidor puede llamarlo <code>SHIRT-001-BLUE-L</code> mientras vos usás <code>TOP-BL-L-001</code>.</p><p>Los SKUs nacieron en retail físico para agilizar inventario y reposición. Hoy son críticos en e-commerce: integran tu tienda online con el ERP, el sistema de fulfillment y los marketplaces. Amazon, MercadoLibre y Shopify piden que cada variante tenga su SKU único.</p>"
      },
      {
        "title": "Cómo estructurar un buen SKU",
        "html": "<p>No hay estándar oficial, pero las mejores prácticas recomiendan SKUs legibles, escalables y sin ambigüedades:</p><ul><li><strong>Alfanumérico:</strong> combina letras y números. Evitá caracteres especiales que rompen sistemas legacy (<code>@#$%</code>).</li><li><strong>Segmentado:</strong> usá guiones o estructura posicional para separar atributos. <code>CAT-SUBCATEGORIA-ATRIBUTO-SECUENCIAL</code>.</li><li><strong>Corto pero descriptivo:</strong> entre 6 y 15 caracteres. Muy corto pierde contexto, muy largo es propenso a errores de tipeo.</li><li><strong>Sin espacios:</strong> los espacios generan problemas en URLs y bases de datos. Usá guiones o CamelCase.</li></ul><p>Ejemplo real de Zara: <code>2335/420/800</code> (colección/modelo/color). Ejemplo de Amazon: <code>B08N5WRWNW</code> (ASIN, opaco pero único global). Ejemplo warehouse: <code>WHE-SHE-MET-BLK-42</code> (categoría-tipo-material-color-talla).</p><p>Evitá empezar SKUs con ceros: Excel y algunos sistemas los interpretan como números y los pierden. Preferí <code>A001</code> sobre <code>0001</code>.</p>"
      },
      {
        "title": "Cuándo y cómo usar SKUs",
        "html": "<p><strong>E-commerce:</strong> cada variante listada (producto + opciones seleccionables) debe tener su SKU. Si vendés zapatillas en 10 talles, son 10 SKUs. Shopify, WooCommerce y plataformas similares tienen campos dedicados.</p><p><strong>Inventario omnicanal:</strong> el SKU sincroniza stock entre tienda física, online y marketplaces. Cuando alguien compra en ML, tu sistema descuenta del mismo inventario que la tienda de Palermo.</p><p><strong>Logística:</strong> depósitos y 3PLs usan el SKU para picking y packing. Un código bien diseñado permite que el operario identifique producto sin mirar foto: <code>LIB-FICT-CORT-001</code> = libro, ficción, Cortázar, primera edición.</p><p><strong>Analytics:</strong> los reportes de ventas por SKU revelan qué productos, colores o talles se mueven más. Eso informa compras futuras y decisiones de pricing.</p><p>Herramientas: los ERPs como Odoo, SAP o sistemas de inventario como Zoho Inventory generan SKUs automáticamente según reglas que configurás. Genfy ofrece un generador de SKUs que aplica convenciones estándar para acelerar el proceso manual.</p>"
      },
      {
        "title": "Errores comunes y cómo evitarlos",
        "html": "<p><strong>SKUs duplicados:</strong> el error más grave. Si dos productos tienen el mismo SKU, tu inventario colapsa. Usá validación única en la base de datos y auditorías periódicas.</p><p><strong>Rediseñar SKUs existentes:</strong> cambiar la estructura de SKUs en un negocio maduro es costoso: hay que actualizar órdenes históricas, integraciones y reportes. Pensá la estructura antes de escalar.</p><p><strong>SKUs demasiado genéricos:</strong> <code>PROD-001</code> no dice nada. Cuando llegue <code>PROD-999</code> vas a estar perdido. Incluí al menos la categoría principal.</p><p><strong>Confundir SKU con código de barras:</strong> el SKU es interno. El UPC/EAN es el código de barras que lee el scanner en la caja. Podés tener un producto sin código de barras (artesanía, por ejemplo) pero siempre necesitás SKU para inventario interno.</p><p><strong>No documentar la convención:</strong> si tu equipo no entiende cómo se forman los SKUs, van a crear variantes inconsistentes. Documentá la estructura en un manual interno o herramienta de onboarding.</p>"
      }
    ],
    "examples": [
      "ZAP-DEP-NIK-AIRMAX-42-BLK (Zapatillas, Deportivas, Nike Air Max, talle 42, negro)",
      "LIB-TECH-JS-YDKJS-01 (Libro, Tecnología, JavaScript, You Don't Know JS vol 1)",
      "REM-BAS-M-AZL (Remera básica, talle M, azul)",
      "ACC-USB-C-3M-GRY (Accesorio, cable USB-C, 3 metros, gris)",
      "B08N5WRWNW (ASIN de Amazon, formato opaco)"
    ],
    "related": [
      "generador-de-sku",
      "generador-de-codigo-de-referencia"
    ],
    "faq": [
      {
        "q": "¿SKU y código de barras son lo mismo?",
        "a": "No. El código de barras (UPC/EAN) es un estándar global que identifica un producto en cualquier tienda. El SKU es interno: cada empresa define el suyo. Un producto puede tener un solo UPC pero distintos SKUs en distintas tiendas."
      },
      {
        "q": "¿Puedo cambiar los SKUs de productos ya vendidos?",
        "a": "Técnicamente sí, pero es riesgoso. Órdenes pasadas, reportes y sistemas integrados referencian el SKU viejo. Si lo cambiás, necesitás mapeo histórico o perdés trazabilidad. Mejor mantener los existentes y aplicar la nueva convención solo a productos nuevos."
      },
      {
        "q": "¿Cuántos caracteres debe tener un SKU?",
        "a": "Entre 6 y 15 caracteres es lo más común. Menos de 6 limita escalabilidad (te quedás sin combinaciones), más de 15 es propenso a errores de tipeo. Priorizá claridad sobre brevedad extrema."
      }
    ]
  },
  "en": {
    "pageTitle": "SKU — Glossary | Genfy",
    "metaDesc": "SKU (Stock Keeping Unit) is the code identifying each unique product in inventory. Learn how to structure it, real examples and best practices for e-commerce.",
    "h1": "SKU",
    "short": "SKU (Stock Keeping Unit) is an internal alphanumeric code that uniquely identifies each product in your inventory. Unlike universal barcodes (UPC/EAN), you define SKUs according to your business needs.",
    "body": [
      {
        "title": "What is an SKU?",
        "html": "<p>The <strong>SKU</strong> is the identifier your business uses to track inventory, sales and logistics. If you sell t-shirts, each combination of model-size-color is a distinct SKU: <code>TEE-BASIC-L-BLUE</code> and <code>TEE-BASIC-L-RED</code> are two SKUs.</p><p>Unlike <strong>barcodes</strong> (which are global and unique per physical product), SKUs are internal. Two stores can sell the same product with completely different SKUs. Your competitor might call it <code>SHIRT-001-BLUE-L</code> while you use <code>TOP-BL-L-001</code>.</p><p>SKUs originated in physical retail to streamline inventory and replenishment. Today they're critical in e-commerce: they integrate your online store with ERP, fulfillment systems and marketplaces. Amazon, eBay and Shopify require each variant to have its unique SKU.</p>"
      },
      {
        "title": "How to structure a good SKU",
        "html": "<p>There's no official standard, but best practices recommend readable, scalable and unambiguous SKUs:</p><ul><li><strong>Alphanumeric:</strong> combine letters and numbers. Avoid special characters that break legacy systems (<code>@#$%</code>).</li><li><strong>Segmented:</strong> use hyphens or positional structure to separate attributes. <code>CAT-SUBCATEGORY-ATTRIBUTE-SEQUENTIAL</code>.</li><li><strong>Short but descriptive:</strong> between 6 and 15 characters. Too short loses context, too long is error-prone.</li><li><strong>No spaces:</strong> spaces cause problems in URLs and databases. Use hyphens or CamelCase.</li></ul><p>Real Zara example: <code>2335/420/800</code> (collection/model/color). Amazon example: <code>B08N5WRWNW</code> (ASIN, opaque but globally unique). Warehouse example: <code>WHE-SHE-MET-BLK-42</code> (category-type-material-color-size).</p><p>Avoid starting SKUs with zeros: Excel and some systems interpret them as numbers and drop them. Prefer <code>A001</code> over <code>0001</code>.</p>"
      },
      {
        "title": "When and how to use SKUs",
        "html": "<p><strong>E-commerce:</strong> each listed variant (product + selectable options) must have its SKU. If you sell sneakers in 10 sizes, that's 10 SKUs. Shopify, WooCommerce and similar platforms have dedicated fields.</p><p><strong>Omnichannel inventory:</strong> SKUs sync stock across physical store, online and marketplaces. When someone buys on Amazon, your system deducts from the same inventory as your Brooklyn store.</p><p><strong>Logistics:</strong> warehouses and 3PLs use SKUs for picking and packing. A well-designed code lets operators identify products without photos: <code>BOK-FICT-KING-001</code> = book, fiction, Stephen King, first edition.</p><p><strong>Analytics:</strong> sales reports by SKU reveal which products, colors or sizes move fastest. This informs future purchasing and pricing decisions.</p><p>Tools: ERPs like Odoo, SAP or inventory systems like Zoho Inventory auto-generate SKUs based on rules you configure. Genfy offers an SKU generator applying standard conventions to speed up manual process.</p>"
      },
      {
        "title": "Common mistakes and how to avoid them",
        "html": "<p><strong>Duplicate SKUs:</strong> the most critical error. If two products share the same SKU, your inventory collapses. Use unique validation in the database and periodic audits.</p><p><strong>Redesigning existing SKUs:</strong> changing SKU structure in a mature business is expensive: you must update historical orders, integrations and reports. Think through the structure before scaling.</p><p><strong>Too generic SKUs:</strong> <code>PROD-001</code> says nothing. When <code>PROD-999</code> arrives you'll be lost. Include at least the main category.</p><p><strong>Confusing SKU with barcode:</strong> SKU is internal. UPC/EAN is the barcode scanned at checkout. You can have a product without barcode (handmade goods, for example) but you always need an SKU for internal inventory.</p><p><strong>Not documenting the convention:</strong> if your team doesn't understand how SKUs are formed, they'll create inconsistent variants. Document the structure in an internal manual or onboarding tool.</p>"
      }
    ],
    "examples": [
      "SNE-SPO-NIK-AIRMAX-10-BLK (Sneakers, Sports, Nike Air Max, size 10, black)",
      "BOK-TECH-JS-YDKJS-01 (Book, Tech, JavaScript, You Don't Know JS vol 1)",
      "TEE-BAS-M-BLU (Basic tee, size M, blue)",
      "ACC-USB-C-3M-GRY (Accessory, USB-C cable, 3 meters, gray)",
      "B08N5WRWNW (Amazon ASIN, opaque format)"
    ],
    "related": [
      "sku-generator",
      "reference-code-generator"
    ],
    "faq": [
      {
        "q": "Are SKU and barcode the same?",
        "a": "No. Barcode (UPC/EAN) is a global standard identifying a product in any store. SKU is internal: each company defines its own. One product can have a single UPC but different SKUs in different stores."
      },
      {
        "q": "Can I change SKUs of already-sold products?",
        "a": "Technically yes, but it's risky. Past orders, reports and integrated systems reference the old SKU. If you change it, you need historical mapping or lose traceability. Better keep existing ones and apply new convention only to new products."
      },
      {
        "q": "How many characters should an SKU have?",
        "a": "Between 6 and 15 characters is most common. Less than 6 limits scalability (you run out of combinations), more than 15 is error-prone. Prioritize clarity over extreme brevity."
      }
    ]
  }
};
