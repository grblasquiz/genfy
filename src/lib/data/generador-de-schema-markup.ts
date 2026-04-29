import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-schema-markup', en: 'schema-markup-generator' },
  category: 'marketing',
  emoji: '🏷️',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Schema Markup JSON-LD | Genfy',
    metaDesc: 'Generá código JSON-LD de Schema.org listo para SEO: artículos, productos, eventos, FAQ, organizaciones, recetas, breadcrumbs y reviews validados.',
    h1: 'Generador de Schema Markup',
    intro: 'Creá structured data JSON-LD de Schema.org para mejorar tu SEO con rich results. Para artículos, productos, eventos, FAQ y organizaciones validados.',
    tag: 'SEO',
    filterLabel: 'Tipo de schema',
    countLabel: 'Cantidad',
    generateLabel: 'Generar markup',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'content',
        label: 'Artículos y contenido',
        items: [
          'Article: artículo genérico con headline, autor, fecha y publisher',
          'NewsArticle: artículo de noticias con dateline y datePublished',
          'BlogPosting: post de blog con autor, fecha y mainEntityOfPage',
          'TechArticle: artículo técnico con dependencies y proficiencyLevel',
          'ScholarlyArticle: paper académico con citation y doi',
          'OpinionNewsArticle: editorial u opinión con autor identificado',
          'ReportageNewsArticle: reportaje investigativo con backstory',
          'AnalysisNewsArticle: análisis de noticias con expertOpinion',
          'BackgroundNewsArticle: contexto histórico de evento actual',
          'ReviewNewsArticle: review periodística con itemReviewed',
          'WebPage: página web genérica con breadcrumb',
          'AboutPage: página "acerca de" con mainEntity organization',
          'ContactPage: página de contacto con ContactPoint',
          'FAQPage: lista de preguntas con Question y Answer',
          'QAPage: página individual pregunta-respuesta detallada',
          'ProfilePage: perfil de usuario con mainEntity Person',
          'CollectionPage: listado o colección de items relacionados',
          'CheckoutPage: paso de checkout con potentialAction OrderAction',
          'ItemPage: página de un solo item con productID',
          'SearchResultsPage: página de resultados con searchAction',
          'WebSite: sitio web completo con potentialAction SearchAction',
          'Book: libro con isbn, author y publisher',
          'Course: curso online con educationalCredentialAwarded',
          'CreativeWork: obra creativa genérica (libro, video, etc.)',
          'HowTo: tutorial paso a paso con HowToStep numerados',
          'Recipe: receta con ingredients, instructions y nutrition',
          'VideoObject: video con thumbnailUrl, duration y uploadDate',
          'AudioObject: audio/podcast con bitrate y duration',
          'ImageObject: imagen con caption, contentLocation y license',
          'PodcastSeries: serie de podcast con webFeed RSS'
        ]
      },
      {
        id: 'business',
        label: 'Empresas y locales',
        items: [
          'Organization: organización genérica con name, logo y url',
          'Corporation: corporación con tickerSymbol y foundingDate',
          'LocalBusiness: negocio local con address, openingHours y telephone',
          'Restaurant: restaurante con servesCuisine y menu',
          'Hotel: hotel con starRating y amenityFeature',
          'AutoDealer: concesionario con makesOffer Vehicle',
          'AutoRepair: taller mecánico con address y openingHours',
          'BarOrPub: bar o pub con servesCuisine y openingHours',
          'BeautySalon: salón de belleza con servicio y horarios',
          'BikeStore: tienda de bicicletas con makesOffer Product',
          'BookStore: librería con priceRange y currenciesAccepted',
          'CafeOrCoffeeShop: cafetería con servesCuisine "coffee"',
          'ChildCare: guardería con educationalCredentialAwarded',
          'ClothingStore: tienda de ropa con priceRange',
          'ComputerStore: tienda de computación con product range',
          'ConvenienceStore: kiosco/almacén con openingHours 24/7',
          'DaySpa: spa de día con servicio amenityFeature',
          'DentalClinic: clínica dental con medicalSpecialty',
          'DepartmentStore: tienda departamental con multiple departments',
          'ElectronicsStore: tienda de electrónica con makesOffer',
          'EntertainmentBusiness: negocio de entretenimiento con event',
          'FastFoodRestaurant: comida rápida con menu y delivery',
          'FinancialService: servicio financiero con feesAndCommissionsSpecification',
          'FitnessCenter: gimnasio con amenityFeature equipment',
          'Florist: floristería con makesOffer flores',
          'FurnitureStore: mueblería con priceRange',
          'GasStation: estación de servicio con paymentAccepted',
          'GroceryStore: supermercado con priceRange y openingHours',
          'HardwareStore: ferretería con makesOffer tools',
          'HealthAndBeautyBusiness: salud y belleza con medicalSpecialty'
        ]
      },
      {
        id: 'product',
        label: 'Productos y comercio',
        items: [
          'Product: producto con name, image, description y offers',
          'Product con AggregateRating: producto con reviews y rating promedio',
          'Product con Review: producto con reviews individuales detalladas',
          'Product con Offer: producto con price, priceCurrency y availability',
          'Product con MerchantReturnPolicy: producto con política de devolución',
          'Offer: oferta individual con price, priceValidUntil y seller',
          'AggregateOffer: rango de ofertas con lowPrice y highPrice',
          'Demand: demanda de producto (lo opuesto a oferta)',
          'BookFormatType: formato de libro (Hardcover, Paperback, Ebook)',
          'AggregateRating: rating agregado con ratingValue y reviewCount',
          'Review: review individual con reviewRating y author',
          'Brand: marca con name y logo',
          'Service: servicio con provider y areaServed',
          'OfferCatalog: catálogo de ofertas estructurado',
          'PriceSpecification: especificación de precio con minPrice y maxPrice',
          'WarrantyPromise: garantía con durationOfWarranty',
          'DeliveryEvent: evento de entrega con availableAtOrFrom',
          'OrderAction: acción de orden con priceCurrency',
          'ParcelDelivery: envío de paquete con trackingNumber',
          'ReturnAction: acción de devolución con returnPolicyCategory',
          'ProductCollection: colección de productos relacionados',
          'ProductGroup: grupo de productos con productGroupID',
          'IndividualProduct: producto individual con serialNumber',
          'ProductModel: modelo de producto con isVariantOf',
          'SomeProducts: productos genéricos con inventoryLevel',
          'Vehicle: vehículo con vehicleConfiguration y mileageFromOdometer',
          'Car: auto con bodyType, fuelType y vehicleTransmission',
          'Motorcycle: moto con vehicleEngine y vehicleConfiguration',
          'BusOrCoach: bus con roofLoad y payload',
          'MotorizedBicycle: ebike con vehicleSpecialUsage'
        ]
      },
      {
        id: 'misc',
        label: 'Eventos, FAQ y misc',
        items: [
          'Event: evento con startDate, endDate, location y organizer',
          'BusinessEvent: evento de negocios (conferencia) con audience',
          'ChildrensEvent: evento infantil con typicalAgeRange',
          'ComedyEvent: show de comedia con performer Comedian',
          'DanceEvent: evento de danza con choreographer',
          'EducationEvent: evento educativo con educationalCredentialAwarded',
          'ExhibitionEvent: exhibición con duration y location Museum',
          'Festival: festival con startDate y multiple performers',
          'FoodEvent: evento gastronómico con servesCuisine',
          'LiteraryEvent: evento literario con author',
          'MusicEvent: concierto con performer MusicGroup y workPerformed',
          'PublicationEvent: lanzamiento de publicación con publishedOn',
          'SaleEvent: venta especial con startDate y discount',
          'ScreeningEvent: proyección con workPresented Movie',
          'SocialEvent: evento social con startDate y attendee',
          'SportsEvent: evento deportivo con homeTeam y awayTeam',
          'TheaterEvent: evento de teatro con workPerformed Play',
          'VisualArtsEvent: evento de artes visuales con workFeatured',
          'BreadcrumbList: lista de breadcrumbs con itemListElement',
          'FAQPage: lista de FAQ con Question y acceptedAnswer',
          'HowTo: tutorial con totalTime, supply, tool y step',
          'Recipe: receta con cookTime, prepTime, ingredients e instructions',
          'JobPosting: oferta laboral con baseSalary, employmentType y datePosted',
          'Person: persona con name, jobTitle y worksFor',
          'Place: lugar genérico con address y geo coordinates',
          'Movie: película con director, actor y duration',
          'TVSeries: serie con numberOfSeasons y numberOfEpisodes',
          'Game: juego con gamePlatform y numberOfPlayers',
          'SoftwareApplication: app con applicationCategory y operatingSystem',
          'MedicalCondition: condición médica con possibleTreatment'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué Schema.org JSON-LD cambia el juego del SEO',
        body: '<p>Schema markup le dice a Google exactamente qué es tu contenido, no solo qué dice. Sin schema, Google adivina si "iPhone 15 Pro Max" en tu página es producto, modelo, review o referencia tangencial. Con schema Product, sabe que es un producto vendible con precio, disponibilidad y ratings. Esa precisión activa <strong>rich results</strong>: tu listing aparece con estrellas, precio, stock y ofertas directamente en la SERP, robando clicks a competidores con listings textuales planos.</p><p>El formato <strong>JSON-LD</strong> ganó la guerra contra microdata y RDFa porque es invisible al renderizado: va en un &lt;script type="application/ld+json"&gt; en el head, sin contaminar HTML visible. Google lo recomienda explícitamente como formato preferido. El equipo de Search Central de Google publicó benchmarks donde sitios con JSON-LD correcto tienen CTR 30-50% superior a la versión sin schema, controlado por la misma posición en SERP.</p><p>Los rich results más impactantes en 2024-2026 son: <strong>FAQ</strong> (acordeón de preguntas en SERP, gana mucho espacio), <strong>HowTo</strong> (lista numerada de pasos con imágenes), <strong>Product</strong> (precio + estrellas + disponibilidad), <strong>Recipe</strong> (foto + tiempo + estrellas), <strong>Event</strong> (fecha + ubicación + entradas), <strong>JobPosting</strong> (aparece en Google for Jobs). Cada uno requiere schema específico bien implementado.</p>'
      },
      {
        h2: 'Cómo implementar schema markup correctamente',
        body: '<p>El error #1 es <strong>copiar schema de otro sitio sin verificar campos</strong>. Si copias el schema Product de Amazon pero tu sitio no tiene <code>aggregateRating</code> reales, estás declarando ratings falsos a Google. Eso es violación de structured data guidelines y puede llevar a manual action: tu sitio pierde rich results en todos los productos por meses.</p><p>La regla de oro: <strong>el schema debe coincidir con lo visible en la página</strong>. Si declarás <code>price: 99.99</code> en JSON-LD pero la página visible muestra $79, Google lo detecta y penaliza. Si declarás <code>availability: InStock</code> pero la página dice "agotado", también. <em>Search Console</em> reporta estos errores como "structured data discrepancies" y aparecen en el reporte de Errores de items.</p><p>Después de implementar, validá con tres herramientas: <em>Google Rich Results Test</em> (simula Googlebot), <em>Schema.org Validator</em> (chequea spec correcta) y <em>Search Console > Enhancement reports</em> (muestra qué Google está parseando en producción). Si las tres pasan sin errores, estás listo. <em>Schema.org</em> oficial provee Schema Markup Validator gratuito que detecta typos en propiedades (común: "headline" vs "headLine").</p>'
      },
      {
        h2: 'Errores comunes y cómo evitarlos',
        body: '<p>Error #1: <strong>schema de FAQ con preguntas y respuestas no visibles en la página</strong>. Google requiere desde 2023 que el FAQ esté visible al usuario, no oculto en el HTML solo para schema. Si tu schema tiene 10 preguntas pero la página visible muestra 3, Google ignora el resto y puede dar warning. Usá UI con acordeones reales o lista expandible, no solo schema "fantasma".</p><p>Error #2: <strong>JSON-LD inválido por escape de comillas</strong>. Si una respuesta de FAQ contiene comillas dobles, deben escaparse: <code>"Es \\"Test\\""</code> o usá comillas simples dentro. Un solo error de syntax invalida todo el bloque y Google ignora el schema completo. Validalo con un parser JSON antes de deployar.</p><p>Error #3: <strong>scope incorrecto en LocalBusiness</strong>. Si tu negocio tiene 50 sucursales y aplicás el mismo schema LocalBusiness en todas las páginas, Google las trata como duplicadas. Cada sucursal necesita su schema único con su <code>address</code> específica y su <code>geo</code> coordinates. <em>McDonald\'s</em>, <em>Starbucks</em> y otras cadenas resuelven esto con páginas individuales por sucursal cada una con su LocalBusiness JSON-LD único.</p>'
      },
      {
        h2: 'Schema markup avanzado y casos especiales',
        body: '<p>Para sitios e-commerce serios, Product schema solo no alcanza. Necesitás <strong>Product + Offer + AggregateRating + Review</strong> en el mismo bloque, anidados correctamente. <em>Shopify</em>, <em>WooCommerce</em> y plataformas modernas generan esto automáticamente, pero validá: muchas plantillas de Shopify omiten <code>priceCurrency</code> o usan formato fecha incorrecto en <code>priceValidUntil</code>.</p><p>Para sitios editoriales (blogs, news), combinar <strong>Article + Person (author) + Organization (publisher) + WebPage</strong> en grafo unificado con <code>@graph</code> da mejor cobertura. JSON-LD permite múltiples entidades en un solo script con array <code>@graph</code> y referencias entre ellas con <code>@id</code>. <em>The New York Times</em>, <em>The Guardian</em> y <em>The Verge</em> usan este patrón.</p><p>Para apps SaaS y herramientas online, schema <strong>SoftwareApplication</strong> con <code>operatingSystem</code>, <code>applicationCategory</code> y <code>aggregateRating</code> ayuda a aparecer en búsquedas tipo "best CRM software". Combiná con <strong>Organization</strong> con <code>logo</code> y <code>sameAs</code> (links a redes sociales) para que Google construya knowledge panel propio. <em>Notion</em>, <em>Figma</em> y <em>Linear</em> tienen knowledge panels gracias a este combo bien hecho.</p>'
      }
    ],
    faq: [
      {
        q: '¿Schema markup garantiza rich results?',
        a: 'No. Schema válido es requisito necesario pero no suficiente. Google decide cuándo mostrar rich results basado en autoridad del sitio, calidad del contenido y comportamiento del usuario. Sitios nuevos pueden tardar semanas o meses en empezar a recibir rich results aunque su schema sea perfecto.'
      },
      {
        q: '¿Puedo usar schema markup en español?',
        a: 'Sí, Schema.org soporta cualquier idioma. Las propiedades del schema son en inglés (name, description, etc.) pero los valores pueden ir en español: <code>"name": "Generador de Pizzas"</code> es válido. Para hreflang multilingüe, agregá <code>inLanguage</code> a cada bloque de schema con código ISO (es, es-AR, en).'
      },
      {
        q: '¿Schema markup ralentiza mi sitio?',
        a: 'No, prácticamente nada. Un bloque típico de JSON-LD pesa 1-3KB y se carga inline en el head. El navegador lo ignora visualmente, solo Googlebot y otros crawlers lo parsean. El impacto en performance es despreciable comparado con imágenes o JavaScript pesado.'
      },
      {
        q: '¿Qué pasa si pongo schema falso o inflado?',
        a: 'Google detecta discrepancias entre schema y contenido visible. Casos serios (ratings inventados, ofertas falsas) llevan a <em>manual action</em> que elimina rich results del sitio entero, no solo de la URL afectada. La recuperación toma 4-12 semanas tras corregir y enviar reconsideration request.'
      }
    ]
  },
  en: {
    pageTitle: 'Schema Markup JSON-LD Generator | Genfy',
    metaDesc: 'Generate Schema.org JSON-LD code ready for SEO: articles, products, events, FAQ, organizations, recipes, breadcrumbs and reviews validated for rich results.',
    h1: 'Schema Markup Generator',
    intro: 'Create Schema.org JSON-LD structured data to improve your SEO with rich results. For articles, products, events, FAQ and organizations, validated.',
    tag: 'SEO',
    filterLabel: 'Schema type',
    countLabel: 'Amount',
    generateLabel: 'Generate markup',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'content',
        label: 'Articles and content',
        items: [
          'Article: generic article with headline, author, date and publisher',
          'NewsArticle: news article with dateline and datePublished',
          'BlogPosting: blog post with author, date and mainEntityOfPage',
          'TechArticle: technical article with dependencies and proficiencyLevel',
          'ScholarlyArticle: academic paper with citation and doi',
          'OpinionNewsArticle: editorial or opinion with identified author',
          'ReportageNewsArticle: investigative report with backstory',
          'AnalysisNewsArticle: news analysis with expertOpinion',
          'BackgroundNewsArticle: historical context of current event',
          'ReviewNewsArticle: journalistic review with itemReviewed',
          'WebPage: generic web page with breadcrumb',
          'AboutPage: about page with mainEntity organization',
          'ContactPage: contact page with ContactPoint',
          'FAQPage: list of questions with Question and Answer',
          'QAPage: individual detailed question-answer page',
          'ProfilePage: user profile with mainEntity Person',
          'CollectionPage: list or collection of related items',
          'CheckoutPage: checkout step with potentialAction OrderAction',
          'ItemPage: single item page with productID',
          'SearchResultsPage: results page with searchAction',
          'WebSite: complete website with potentialAction SearchAction',
          'Book: book with isbn, author and publisher',
          'Course: online course with educationalCredentialAwarded',
          'CreativeWork: generic creative work (book, video, etc.)',
          'HowTo: step-by-step tutorial with numbered HowToStep',
          'Recipe: recipe with ingredients, instructions and nutrition',
          'VideoObject: video with thumbnailUrl, duration and uploadDate',
          'AudioObject: audio/podcast with bitrate and duration',
          'ImageObject: image with caption, contentLocation and license',
          'PodcastSeries: podcast series with webFeed RSS'
        ]
      },
      {
        id: 'business',
        label: 'Companies and locals',
        items: [
          'Organization: generic organization with name, logo and url',
          'Corporation: corporation with tickerSymbol and foundingDate',
          'LocalBusiness: local business with address, openingHours and telephone',
          'Restaurant: restaurant with servesCuisine and menu',
          'Hotel: hotel with starRating and amenityFeature',
          'AutoDealer: car dealer with makesOffer Vehicle',
          'AutoRepair: auto repair shop with address and openingHours',
          'BarOrPub: bar or pub with servesCuisine and openingHours',
          'BeautySalon: beauty salon with service and hours',
          'BikeStore: bicycle store with makesOffer Product',
          'BookStore: bookstore with priceRange and currenciesAccepted',
          'CafeOrCoffeeShop: cafe with servesCuisine "coffee"',
          'ChildCare: childcare with educationalCredentialAwarded',
          'ClothingStore: clothing store with priceRange',
          'ComputerStore: computer store with product range',
          'ConvenienceStore: convenience store with openingHours 24/7',
          'DaySpa: day spa with service amenityFeature',
          'DentalClinic: dental clinic with medicalSpecialty',
          'DepartmentStore: department store with multiple departments',
          'ElectronicsStore: electronics store with makesOffer',
          'EntertainmentBusiness: entertainment business with event',
          'FastFoodRestaurant: fast food with menu and delivery',
          'FinancialService: financial service with feesAndCommissionsSpecification',
          'FitnessCenter: gym with amenityFeature equipment',
          'Florist: florist with makesOffer flowers',
          'FurnitureStore: furniture store with priceRange',
          'GasStation: gas station with paymentAccepted',
          'GroceryStore: grocery store with priceRange and openingHours',
          'HardwareStore: hardware store with makesOffer tools',
          'HealthAndBeautyBusiness: health and beauty with medicalSpecialty'
        ]
      },
      {
        id: 'product',
        label: 'Products and commerce',
        items: [
          'Product: product with name, image, description and offers',
          'Product with AggregateRating: product with reviews and average rating',
          'Product with Review: product with detailed individual reviews',
          'Product with Offer: product with price, priceCurrency and availability',
          'Product with MerchantReturnPolicy: product with return policy',
          'Offer: individual offer with price, priceValidUntil and seller',
          'AggregateOffer: range of offers with lowPrice and highPrice',
          'Demand: demand for product (opposite of offer)',
          'BookFormatType: book format (Hardcover, Paperback, Ebook)',
          'AggregateRating: aggregated rating with ratingValue and reviewCount',
          'Review: individual review with reviewRating and author',
          'Brand: brand with name and logo',
          'Service: service with provider and areaServed',
          'OfferCatalog: structured offer catalog',
          'PriceSpecification: price spec with minPrice and maxPrice',
          'WarrantyPromise: warranty with durationOfWarranty',
          'DeliveryEvent: delivery event with availableAtOrFrom',
          'OrderAction: order action with priceCurrency',
          'ParcelDelivery: parcel shipment with trackingNumber',
          'ReturnAction: return action with returnPolicyCategory',
          'ProductCollection: collection of related products',
          'ProductGroup: product group with productGroupID',
          'IndividualProduct: individual product with serialNumber',
          'ProductModel: product model with isVariantOf',
          'SomeProducts: generic products with inventoryLevel',
          'Vehicle: vehicle with vehicleConfiguration and mileageFromOdometer',
          'Car: car with bodyType, fuelType and vehicleTransmission',
          'Motorcycle: motorcycle with vehicleEngine and vehicleConfiguration',
          'BusOrCoach: bus with roofLoad and payload',
          'MotorizedBicycle: ebike with vehicleSpecialUsage'
        ]
      },
      {
        id: 'misc',
        label: 'Events, FAQ and misc',
        items: [
          'Event: event with startDate, endDate, location and organizer',
          'BusinessEvent: business event (conference) with audience',
          'ChildrensEvent: children\'s event with typicalAgeRange',
          'ComedyEvent: comedy show with performer Comedian',
          'DanceEvent: dance event with choreographer',
          'EducationEvent: educational event with educationalCredentialAwarded',
          'ExhibitionEvent: exhibition with duration and location Museum',
          'Festival: festival with startDate and multiple performers',
          'FoodEvent: food event with servesCuisine',
          'LiteraryEvent: literary event with author',
          'MusicEvent: concert with performer MusicGroup and workPerformed',
          'PublicationEvent: publication launch with publishedOn',
          'SaleEvent: special sale with startDate and discount',
          'ScreeningEvent: screening with workPresented Movie',
          'SocialEvent: social event with startDate and attendee',
          'SportsEvent: sports event with homeTeam and awayTeam',
          'TheaterEvent: theater event with workPerformed Play',
          'VisualArtsEvent: visual arts event with workFeatured',
          'BreadcrumbList: breadcrumb list with itemListElement',
          'FAQPage: FAQ list with Question and acceptedAnswer',
          'HowTo: tutorial with totalTime, supply, tool and step',
          'Recipe: recipe with cookTime, prepTime, ingredients and instructions',
          'JobPosting: job posting with baseSalary, employmentType and datePosted',
          'Person: person with name, jobTitle and worksFor',
          'Place: generic place with address and geo coordinates',
          'Movie: movie with director, actor and duration',
          'TVSeries: series with numberOfSeasons and numberOfEpisodes',
          'Game: game with gamePlatform and numberOfPlayers',
          'SoftwareApplication: app with applicationCategory and operatingSystem',
          'MedicalCondition: medical condition with possibleTreatment'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why Schema.org JSON-LD changes the SEO game',
        body: '<p>Schema markup tells Google exactly what your content IS, not just what it says. Without schema, Google guesses if "iPhone 15 Pro Max" on your page is product, model, review or tangential reference. With Product schema, it knows it\'s a sellable product with price, availability and ratings. That precision activates <strong>rich results</strong>: your listing appears with stars, price, stock and offers directly in SERP, stealing clicks from competitors with plain text listings.</p><p>The <strong>JSON-LD</strong> format won the war against microdata and RDFa because it\'s invisible to rendering: it goes in a &lt;script type="application/ld+json"&gt; in the head, without polluting visible HTML. Google explicitly recommends it as preferred format. Google\'s Search Central team published benchmarks where sites with correct JSON-LD have 30-50% higher CTR than no-schema version, controlled for same SERP position.</p><p>The most impactful rich results in 2024-2026 are: <strong>FAQ</strong> (question accordion in SERP, gains lots of space), <strong>HowTo</strong> (numbered step list with images), <strong>Product</strong> (price + stars + availability), <strong>Recipe</strong> (photo + time + stars), <strong>Event</strong> (date + location + tickets), <strong>JobPosting</strong> (appears in Google for Jobs). Each requires specific well-implemented schema.</p>'
      },
      {
        h2: 'How to implement schema markup correctly',
        body: '<p>Mistake #1 is <strong>copying schema from another site without verifying fields</strong>. If you copy Amazon\'s Product schema but your site doesn\'t have real <code>aggregateRating</code>, you\'re declaring fake ratings to Google. That violates structured data guidelines and can lead to manual action: your site loses rich results on all products for months.</p><p>Golden rule: <strong>schema must match what\'s visible on page</strong>. If you declare <code>price: 99.99</code> in JSON-LD but visible page shows $79, Google detects and penalizes. If you declare <code>availability: InStock</code> but page says "out of stock", same. <em>Search Console</em> reports these errors as "structured data discrepancies" and they appear in item Errors report.</p><p>After implementing, validate with three tools: <em>Google Rich Results Test</em> (simulates Googlebot), <em>Schema.org Validator</em> (checks spec correctness) and <em>Search Console > Enhancement reports</em> (shows what Google parses in production). If all three pass without errors, you\'re ready. <em>Schema.org</em> official provides free Schema Markup Validator that catches property typos (common: "headline" vs "headLine").</p>'
      },
      {
        h2: 'Common mistakes and how to avoid them',
        body: '<p>Mistake #1: <strong>FAQ schema with questions and answers not visible on page</strong>. Google requires since 2023 that FAQ be visible to user, not hidden in HTML just for schema. If your schema has 10 questions but visible page shows 3, Google ignores the rest and may warn. Use UI with real accordions or expandable list, not just "phantom" schema.</p><p>Mistake #2: <strong>invalid JSON-LD due to quote escaping</strong>. If a FAQ answer contains double quotes, they must be escaped: <code>"It\'s \\"Test\\""</code> or use single quotes inside. A single syntax error invalidates the entire block and Google ignores the whole schema. Validate with a JSON parser before deploying.</p><p>Mistake #3: <strong>incorrect scope in LocalBusiness</strong>. If your business has 50 branches and you apply the same LocalBusiness schema on all pages, Google treats them as duplicates. Each branch needs its unique schema with its specific <code>address</code> and its <code>geo</code> coordinates. <em>McDonald\'s</em>, <em>Starbucks</em> and other chains solve this with individual pages per branch, each with unique LocalBusiness JSON-LD.</p>'
      },
      {
        h2: 'Advanced schema markup and special cases',
        body: '<p>For serious e-commerce sites, Product schema alone isn\'t enough. You need <strong>Product + Offer + AggregateRating + Review</strong> in the same block, properly nested. <em>Shopify</em>, <em>WooCommerce</em> and modern platforms generate this automatically, but validate: many Shopify templates omit <code>priceCurrency</code> or use wrong date format in <code>priceValidUntil</code>.</p><p>For editorial sites (blogs, news), combining <strong>Article + Person (author) + Organization (publisher) + WebPage</strong> in unified graph with <code>@graph</code> gives better coverage. JSON-LD allows multiple entities in single script with <code>@graph</code> array and references between them via <code>@id</code>. <em>The New York Times</em>, <em>The Guardian</em> and <em>The Verge</em> use this pattern.</p><p>For SaaS apps and online tools, <strong>SoftwareApplication</strong> schema with <code>operatingSystem</code>, <code>applicationCategory</code> and <code>aggregateRating</code> helps appear in searches like "best CRM software". Combine with <strong>Organization</strong> with <code>logo</code> and <code>sameAs</code> (social network links) so Google builds its own knowledge panel. <em>Notion</em>, <em>Figma</em> and <em>Linear</em> have knowledge panels thanks to this combo done right.</p>'
      }
    ],
    faq: [
      {
        q: 'Does schema markup guarantee rich results?',
        a: 'No. Valid schema is necessary but not sufficient requirement. Google decides when to show rich results based on site authority, content quality and user behavior. New sites can take weeks or months to start receiving rich results even with perfect schema.'
      },
      {
        q: 'Can I use schema markup in non-English languages?',
        a: 'Yes, Schema.org supports any language. Schema properties are in English (name, description, etc.) but values can be in any language: <code>"name": "Pizza Generator"</code> in any language is valid. For multilingual hreflang, add <code>inLanguage</code> to each schema block with ISO code (en, es, fr).'
      },
      {
        q: 'Does schema markup slow down my site?',
        a: 'No, virtually nothing. A typical JSON-LD block weighs 1-3KB and loads inline in head. Browser ignores it visually, only Googlebot and other crawlers parse it. Performance impact is negligible compared to images or heavy JavaScript.'
      },
      {
        q: 'What happens if I put fake or inflated schema?',
        a: 'Google detects discrepancies between schema and visible content. Serious cases (invented ratings, fake offers) lead to <em>manual action</em> removing rich results from entire site, not just affected URL. Recovery takes 4-12 weeks after correction and reconsideration request.'
      }
    ]
  }
};
