import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-ruta-de-viaje', en: 'travel-itinerary-generator' },
  category: 'random',
  emoji: '🗺️',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Ruta de Viaje | Genfy',
    metaDesc: 'Generá ideas de rutas de viaje y destinos aleatorios para planificación de vacaciones y aventuras espontáneas. Descubrí destinos imprevistos al instante.',
    h1: 'Generador de Ruta de Viaje',
    intro: 'Rompé la rutina del mismo destino: rutas de fin de semana, road trips clásicos, escapadas urbanas y aventuras off the beaten path para sorprenderte.',
    tag: 'Viajes',
    filterLabel: 'Tipo de viaje',
    countLabel: 'Cantidad',
    generateLabel: 'Generar rutas',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'weekend',
        label: 'Escapada de fin de semana',
        items: [
          'Sábado en Tigre con paseo en lancha y vuelta por el Delta a la tarde',
          'Domingo en Mar del Plata con desayuno en Bristol y caminata por la rambla',
          'Fin de semana en Tandil: queso, salame y subir al monumento Don Bosco',
          'Escapada a Colonia del Sacramento cruzando en buquebus desde Buenos Aires',
          'Sábado en San Antonio de Areco con tradiciones gauchas y feria criolla',
          'Domingo en Luján para visitar la basílica y el Museo Enrique Udaondo',
          'Fin de semana en La Cumbre con paragliding y caminatas por las sierras',
          'Sábado en Capilla del Monte con visita al Cerro Uritorco al mediodía',
          'Escapada a Villa Pehuenia y los siete lagos en auto particular',
          'Fin de semana en El Bolsón con feria artesanal y bosque de arrayanes',
          'Sábado en Carmelo del lado uruguayo con bodegas y playas tranquilas',
          'Domingo en Punta del Este durante temporada baja para evitar multitudes',
          'Escapada a Sierra de la Ventana con trekking y río Sauce Grande',
          'Fin de semana en Villa Gesell fuera de temporada para playas vacías',
          'Sábado en San Pedro con frutas regionales y costanera del Paraná',
          'Domingo en Cañuelas con campo gourmet y queso azul artesanal',
          'Escapada a Olavarría con minas de cuarzo y cerros bajos para escalar',
          'Fin de semana en Necochea con dunas y playa de Quequén al amanecer',
          'Sábado en Chascomús con laguna y museo Pampeano de tradiciones',
          'Domingo en Villa Elisa con termas y picnic en parque rural',
          'Escapada a Concordia con termas y mausoleo Calabrese de Justo José',
          'Fin de semana en Gualeguaychú con carnaval o playa en temporada',
          'Sábado en Lobos con laguna y la casa natal de Juan Domingo Perón',
          'Domingo en Saladillo con balneario municipal y feria de productores',
          'Escapada a Bragado con parque acuático y monumento al caballo criollo',
          'Fin de semana en Pinamar con pinar y bosque encantado para chicos',
          'Sábado en Mar de las Pampas con arquitectura rústica entre médanos',
          'Domingo en Cariló con mercados gourmet y caminata entre pinos',
          'Escapada a 25 de Mayo con laguna del Centro y rotisería gourmet'
        ]
      },
      {
        id: 'road',
        label: 'Road trip largo',
        items: [
          'Ruta 40 desde Cafayate hasta El Calafate parando cada 200 km',
          'Costa atlántica completa: Mar del Plata, Necochea, Monte Hermoso',
          'Patagonia austral: Bariloche, El Bolsón, Esquel, Trevelin en una semana',
          'Quebrada de Humahuaca: Tilcara, Purmamarca, Iruya, Yavi en 5 días',
          'Cuyo del vino: Mendoza, San Rafael, San Juan en circuito de bodegas',
          'Sierras cordobesas: Capilla, La Cumbre, La Falda, Mina Clavero',
          'Vuelta uruguaya: Colonia, Carmelo, Punta del Este, Cabo Polonio',
          'Norte chileno: Atacama, Valle de la Luna, géiseres del Tatio',
          'Mesopotamia argentina: Posadas, Iguazú, Concordia, Gualeguaychú',
          'Costa chilena: Valparaíso, Viña del Mar, La Serena, San Pedro',
          'Patagonia chilena: Torres del Paine y vuelta por El Chaltén',
          'Ruta de los siete lagos completa: Villa La Angostura a San Martín',
          'Salta y Jujuy: capitales provinciales más Cachi y Cafayate',
          'Misiones interior: Iguazú, San Ignacio Miní, Posadas, Oberá',
          'Vino y montaña: Mendoza, Tunuyán, Tupungato, Uspallata',
          'Mendoza al aconcagua: Mendoza, Uspallata, Puente del Inca',
          'Cordillera frontera: Mendoza-Santiago vía Paso Cristo Redentor',
          'Ruta del che: Alta Gracia, Rosario, Buenos Aires en homenaje',
          'Costa atlántica uruguaya: Punta del Diablo, Cabo Polonio, La Paloma',
          'Lagos andinos chilenos: Villarrica, Pucón, Puerto Varas, Frutillar',
          'Norte argentino completo: Salta, Tilcara, Susques, Antofalla',
          'Patagonia comercial: Bariloche, Esquel, Trevelin, Río Mayo',
          'Cuyo termal: Cacheuta, Termas de Reyes, Termas Villavicencio',
          'Pampa profunda: Pehuajó, Trenque Lauquen, Carlos Casares, 9 de Julio',
          'Sierra norte cordobesa: La Cumbre, Capilla, La Falda, Cosquín',
          'Costa pampeana: Mar Chiquita, Mar del Plata, Pinamar, Villa Gesell',
          'Norte misionero: Iguazú, Wanda, Eldorado, Puerto Iguazú',
          'Tierra del Fuego completa: Ushuaia, Tolhuin, Río Grande, San Sebastián'
        ]
      },
      {
        id: 'urban',
        label: 'Escapada urbana internacional',
        items: [
          'Tres días en Santiago de Chile: Bellavista, Cerro San Cristóbal, Mercado Central',
          'Cuatro días en Lima: Miraflores, Barranco, gastronomía y Museo Larco',
          'Fin de semana en Asunción: Costanera, Mercado Cuatro, Casa de Independencia',
          'Tres días en Montevideo: Ciudad Vieja, Pocitos, Mercado del Puerto',
          'Cinco días en Río de Janeiro: Copacabana, Cristo Redentor, Pão de Açúcar',
          'Cuatro días en Bogotá: Candelaria, Monserrate, Museo del Oro',
          'Cinco días en Quito: centro histórico, Mitad del Mundo, teleférico',
          'Tres días en La Paz: Plaza Murillo, Mercado de las Brujas, Tiwanaku',
          'Fin de semana en Punta del Este: La Mano, Casapueblo, José Ignacio',
          'Cuatro días en Salvador de Bahía: Pelourinho, Praia do Forte, capoeira',
          'Cinco días en Cartagena: Ciudad Amurallada, Getsemaní, Islas del Rosario',
          'Tres días en San Pablo: Avenida Paulista, MASP, Beco do Batman',
          'Cuatro días en Cusco: Plaza de Armas, Sacsayhuamán, Valle Sagrado',
          'Cinco días en Ciudad de México: Coyoacán, Teotihuacan, Xochimilco',
          'Tres días en Madrid: Prado, Retiro, Reina Sofía, tapeo nocturno',
          'Cuatro días en Barcelona: Gaudí, gótico, Sagrada Familia, playa',
          'Cinco días en Lisboa: Alfama, Belém, tranvía 28, fado en vivo',
          'Tres días en Oporto: Ribeira, Vila Nova de Gaia, librería Lello',
          'Cuatro días en París: Louvre, Marais, Montmartre, Versalles',
          'Cinco días en Roma: Coliseo, Vaticano, Trastevere, gelato tour',
          'Tres días en Florencia: Uffizi, Duomo, Ponte Vecchio, atardecer Piazzale',
          'Cuatro días en Berlín: Muro, Mitte, Kreuzberg, Museumsinsel',
          'Cinco días en Praga: Castillo, Plaza Vieja, Karlovy Most, Vyšehrad',
          'Tres días en Viena: Schönbrunn, MuseumsQuartier, Naschmarkt',
          'Cuatro días en Ámsterdam: Anne Frank, Rijksmuseum, canales en bici',
          'Cinco días en Londres: Tate, British Museum, Camden, mercados',
          'Tres días en Dublín: Trinity, Temple Bar, Guinness Storehouse',
          'Cuatro días en Edimburgo: castillo, Royal Mile, Arthur\'s Seat'
        ]
      },
      {
        id: 'adventure',
        label: 'Aventura off the beaten path',
        items: [
          'Trekking de 4 días Laguna de los Tres en El Chaltén con campamento',
          'Travesía en kayak por canal de Beagle desde Ushuaia con guía',
          'Cabalgata de 3 días por estepa patagónica en Esquel con estancia',
          'Buceo en banco Burwood frente a Tierra del Fuego con barco-base',
          'Avistaje de ballenas en Península Valdés en zódiac certificado',
          'Caminata de 5 días por circuito O en Torres del Paine con porteador',
          'Trekking lateral por Quebrada del Toro hasta San Antonio de los Cobres',
          'Expedición a Cono de Arita en Salar de Arizaro con guía 4x4',
          'Escalada en El Chaltén en torres alpinas con guía AAGM',
          'Travesía en bici por ripio Ruta 40 desde Bariloche a El Bolsón',
          'Pesca con mosca en río Limay con guía privado y vadeo',
          'Camping autosuficiente en Parque Nacional Perito Moreno (no el glaciar)',
          'Avistaje de cóndores en Quebrada del Cóndor cerca de Tafí del Valle',
          'Senderismo nocturno en Salinas Grandes con guía y observación astral',
          'Travesía en velero por Lago Argentino hasta frente glaciar Upsala',
          'Trekking lateral al Cerro Castillo en Aysén chileno con campamento',
          'Cabalgata por Valles Calchaquíes desde Cafayate hasta Molinos',
          'Expedición a Cueva de las Manos por estancia rural en Santa Cruz',
          'Snorkel con lobos marinos en Puerto Madryn con embarcación menor',
          'Trekking nevado en Refugio Frey desde Bariloche en invierno',
          'Recorrido de cuatriciclos en Volcán Lanín por sendero patagónico',
          'Travesía en raft por río Manso con sección rápidos clase III',
          'Escalada deportiva en Piedra del Águila con guía y equipo',
          'Cabalgata por Salinas Grandes hasta refugio del salar',
          'Trekking de altura a Volcán Lanín por base argentina (no chilena)',
          'Expedición a Ojos del Salado desde Fiambalá con aclimatación',
          'Recorrido en moto enduro por Ruta del Adobe en Catamarca',
          'Trekking polar a Glaciar Marconi en Hielo Continental Sur'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo planificar rutas espontáneas sin arrepentirse',
        body: '<p>Las rutas espontáneas funcionan cuando tenés tres anclas resueltas: dónde dormís la primera noche, cómo te movés y qué presupuesto máximo tolera la billetera. El resto se decide sobre la marcha. Sin esos tres pilares, la espontaneidad se convierte en estrés. Generá la ruta, reservá solo la primera noche por Booking o Airbnb, y dejá las siguientes noches abiertas para improvisar.</p><p>El error clásico es sobreplanificar destinos cortos y subplanificar largos. Para fin de semana, basta con saber dónde dormir; para road trip de 7 días, necesitás reservar al menos las paradas en pueblos chicos donde haya pocos hostels disponibles. Tilcara en temporada alta se llena; Capilla del Monte en agosto, no. Investigá oferta hotelera del destino antes de salir.</p><p>Para destinos internacionales, sumá tres elementos: visa (¿la necesitás?), conectividad (chip local o roaming), y dinero (efectivo USD vs tarjeta vs Wise). Argentinos viajando a Brasil tienen reglas distintas que viajando a Europa: en Sudamérica el efectivo manda, en Europa contactless es estándar. Adaptá logística al destino, no al revés.</p>'
      },
      {
        h2: 'Tipos de viajes y cuándo elegir cada uno',
        body: '<p>Las escapadas de fin de semana cumplen función de reset emocional. No buscan revelaciones: buscan cambio de contexto. Tigre, Mar del Plata, Tandil sirven cuando estás saturado pero no podés tomarte vacaciones largas. La regla: escapada bien hecha es la que volvés con energía renovada, no agotado por logística.</p><p>Los road trips largos pertenecen a momentos vitales de transición. Despedirte de un trabajo, terminar una relación, antes de un cambio mayor. La Ruta 40 desde Cafayate a El Calafate atraviesa 4500 km de Argentina y te da espacio para procesar lo que la rutina urbana no permite. Reservá entre 2 y 3 semanas; menos se vuelve maratón, más se vuelve mudanza.</p><p>Las escapadas urbanas internacionales son ideales para reconectar con tu lado adulto y cultural. Lima, Cartagena, Cusco abren a Latinoamérica sin pasar por filtros europeos saturados. Madrid, Lisboa, Roma profundizan raíces si tenés ascendencia. Tres-cinco días alcanzan para una ciudad si priorizás 3-4 actividades por día y no querés "verlo todo".</p>'
      },
      {
        h2: 'Errores comunes en planificación de rutas',
        body: '<p>Primer error: subestimar tiempos de traslado. Salta-Cafayate son 200 km pero por ruta sinuosa son 4 horas, no 2.5 como sugiere Google Maps optimista. Sumá 30% al tiempo estimado para paradas técnicas, comidas y fotos. Una ruta planeada al minuto se desbarranca al primer imprevisto.</p><p>Segundo error: querer ver todo en un viaje. La <em>Ruta 40 completa</em> tiene 5224 km; nadie la hace en 10 días. Elegí 1500-2000 km y disfrutá; el resto queda para próximo viaje. Los viajes saturados de bullets generan recuerdo borroso; los viajes con espacios para improvisar generan anécdotas que contás 10 años después.</p><p>Tercer error: priorizar Instagram sobre experiencia. Si planificás solo según fotos icónicas (Salinas Grandes, Cerro de los Siete Colores, Glaciar Perito Moreno), te perdés Cachi, Iruya, El Calafate fuera de la postal. Mezclá puntos famosos con detours menos conocidos. Los locales del lugar te recomiendan mejor que los listicles: bajate al primer almacén y preguntá "qué no te podés perder acá", la respuesta vale más que cualquier blog.</p>'
      },
      {
        h2: 'Logística que muchos olvidan',
        body: '<p>El presupuesto realista sumá 25% a tu cálculo inicial. Los gastos imprevistos (combustible adicional por desvíos, restaurantes mejores que lo planeado, recuerdos que no calculaste) siempre aparecen. Para road trips, un Excel simple con kilómetros, costo combustible promedio y noches de hotel evita sorpresas. Apps como TripIt o Trailwise centralizan reservas en un lugar.</p><p>Para viajar con auto propio en Argentina, revisá: cubiertas (presión, profundidad), aceite, refrigerante, líquido de frenos, batería. Una avería en plena Ruta 40 a 200 km del pueblo más cercano arruina cualquier viaje. Llevá rueda de auxilio infada, gato, llave cruz, y sumá kit básico de cables, cinta, tornillos. La Patagonia argentina es dura con vehículos, no improvises.</p><p>Para internacional, tres documentos esenciales: pasaporte vigente al menos 6 meses post-vuelta, seguro médico de viaje (Assist Card o equivalente), y copia digital de todo en email + Google Drive. Si robaste pasaporte, la copia acelera trámite consular 80%. Llevá USD en pequeñas denominaciones (5, 10, 20) para situaciones donde tarjeta no funciona; en Sudamérica fuera de capitales el efectivo sigue siendo rey.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántos días reservar para cada tipo de ruta?',
        a: 'Escapada de fin de semana: 2-3 días. Road trip mediano: 7-10 días. Road trip largo (Ruta 40, vuelta uruguaya): 14-21 días. Escapada urbana internacional: 4-7 días por ciudad. Aventura off-track: 5-12 días según dificultad. Sumá siempre un día buffer al final por imprevistos.'
      },
      {
        q: '¿Conviene viajar en temporada alta o baja?',
        a: 'Para destinos turísticos clásicos (Bariloche, Mar del Plata, Iguazú), temporada baja gana en precio y tranquilidad pero pierde en clima y servicios abiertos. Temporada media (octubre-noviembre, marzo-abril) suele ser el sweet spot. Para destinos internacionales, evitá vacaciones argentinas (enero-febrero, julio) que disparan precios.'
      },
      {
        q: '¿Cómo elijo entre auto propio o alquiler?',
        a: 'Para distancias menores a 1200 km de tu casa, auto propio rinde si está en buen estado. Para road trips largos en Patagonia o NOA, alquilar te garantiza vehículo nuevo, seguro completo y sin preocupación por desgaste. Calculá: 4000 km en auto propio implican mantenimiento posterior; alquiler tercerizó ese costo.'
      },
      {
        q: '¿Vale la pena armar la ruta vos mismo o contratar agencia?',
        a: 'Para destinos clásicos con buena infraestructura (sierras cordobesas, costa atlántica, Mendoza), armarlo solo da más libertad y ahorra 30-40%. Para aventuras técnicas (trekkings de altura, escalada, expediciones polares) o destinos con barrera idiomática (Asia, Medio Oriente), agencia especializada vale cada peso.'
      }
    ]
  },
  en: {
    pageTitle: 'Travel Itinerary Generator | Genfy',
    metaDesc: 'Generate travel route ideas and random destinations for vacation planning and spontaneous adventures. Discover unexpected destinations instantly.',
    h1: 'Travel Itinerary Generator',
    intro: 'Break the routine of the same destination: weekend escapes, classic road trips, urban breaks and off the beaten path adventures to surprise yourself.',
    tag: 'Travel',
    filterLabel: 'Trip type',
    countLabel: 'Amount',
    generateLabel: 'Generate routes',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'weekend',
        label: 'Weekend escape',
        items: [
          'Saturday in a coastal village with seafood lunch and afternoon harbor walk',
          'Sunday in a wine region with two boutique winery visits and farm-to-table dinner',
          'Weekend in a mountain town with cheese tasting and short summit hike',
          'Friday-Saturday at hot springs with massage afternoon and stargazing evening',
          'Saturday in a historic colonial town with cathedral tour and craft market',
          'Sunday at a national park with picnic lunch by the waterfall',
          'Weekend at a lake cabin with kayak rental and bonfire night',
          'Saturday in a colonial fortress town with walking tour and rooftop dinner',
          'Weekend in a beach town off-season for empty boardwalks and reduced rates',
          'Sunday at an artisan village with pottery workshop and bakery breakfast',
          'Saturday in a desert town with sunset hike and stargazing dinner',
          'Weekend at a cave system with guided tour and hot meal at lodge',
          'Sunday in a film-location village with self-guided tour using location map',
          'Saturday in a literary town visiting author homes and used bookstores',
          'Weekend at a working farm with milking demo and farm-to-table meals',
          'Sunday in a fishing village with morning market and harbor seafood lunch',
          'Saturday in a hill town with castle ruins, vineyards and gelato afternoon',
          'Weekend at a yoga retreat with morning practice and silent dinner',
          'Sunday at a vintage train ride with steam locomotive scenic loop',
          'Saturday in a craft beer town visiting three local breweries on foot',
          'Weekend at a hotel-castle with full-board and historic cellar tour',
          'Sunday at a botanical garden with bird-watching and cafe brunch',
          'Saturday in a vintage car museum town with rally event and parade',
          'Weekend at a glamping site with horse rides and fireside dinners',
          'Sunday in a mining town turned art village with gallery hopping',
          'Saturday at outdoor thermal pools with mountain views and spa lunch',
          'Weekend in a port city with maritime museum and seafood crawl',
          'Sunday at lavender fields with picnic lunch and farm shop visit',
          'Saturday in a chocolate town with three-shop tasting and cocoa demo'
        ]
      },
      {
        id: 'road',
        label: 'Long road trip',
        items: [
          'Pacific Coast Highway from San Francisco to San Diego over 7 days',
          'Route 66 from Chicago to Santa Monica with classic diner stops',
          'Iceland Ring Road clockwise with waterfall stops every 100 km',
          'Scottish Highlands loop from Edinburgh including Isle of Skye',
          'Italian Amalfi Coast and Cinque Terre by rental car over 10 days',
          'Spanish Camino Norte coastal route from San Sebastián to Santiago',
          'Portuguese coast from Porto to Algarve with Lisbon stopover',
          'French Provence loop with lavender fields and hilltop villages',
          'New Zealand South Island circular route with glacier hikes',
          'Australian Great Ocean Road from Melbourne to Adelaide',
          'Trans-Canada Highway through Banff and Jasper national parks',
          'Norwegian Fjords from Bergen to Trondheim with ferry crossings',
          'Croatian Adriatic coast from Zagreb to Dubrovnik with island hops',
          'Romanian Transylvania circuit with Brasov, Sibiu and Sighisoara',
          'Japanese Kyoto-Hiroshima route by Shinkansen and rental car',
          'Vietnamese coast from Hanoi to Ho Chi Minh City over 14 days',
          'Thai north loop from Chiang Mai through Pai and Chiang Rai',
          'Indonesian Bali plus Lombok with ferry transfer included',
          'Argentine Ruta 40 segment from Cafayate to El Calafate',
          'Brazilian coast from Rio de Janeiro to Salvador da Bahia',
          'Chilean Carretera Austral from Puerto Montt to Villa O\'Higgins',
          'Peruvian Sacred Valley extended trip including Manu jungle',
          'Mexican Yucatán peninsula with Mayan ruins and cenote stops',
          'Costa Rican Pacific to Caribbean coast crossing in 7 days',
          'South African Garden Route from Cape Town to Port Elizabeth',
          'Moroccan imperial cities loop with Sahara desert overnight',
          'Turkish coast from Istanbul to Antalya via Ephesus',
          'Balkan circuit through Serbia, Bosnia, Montenegro, Croatia'
        ]
      },
      {
        id: 'urban',
        label: 'International urban escape',
        items: [
          'Three days in Lisbon: Alfama, Belém, tram 28, live fado dinner',
          'Four days in Barcelona: Gaudí trail, Gothic Quarter, Sagrada Familia',
          'Five days in Rome: Colosseum, Vatican, Trastevere, gelato crawl',
          'Three days in Prague: Castle, Old Square, Charles Bridge, Vyšehrad',
          'Four days in Vienna: Schönbrunn, MuseumsQuartier, Naschmarkt',
          'Five days in Berlin: Wall, Mitte, Kreuzberg, Museumsinsel',
          'Three days in Amsterdam: Anne Frank, Rijksmuseum, canal cycling',
          'Four days in Paris: Louvre, Marais, Montmartre, day trip Versailles',
          'Five days in London: Tate, British Museum, Camden, market crawl',
          'Three days in Dublin: Trinity, Temple Bar, Guinness Storehouse',
          'Four days in Edinburgh: Castle, Royal Mile, Arthur\'s Seat hike',
          'Five days in Madrid: Prado, Retiro, Reina Sofía, tapas nights',
          'Three days in Florence: Uffizi, Duomo, Ponte Vecchio sunset',
          'Four days in Venice: Doge\'s Palace, Murano, Burano, gondola',
          'Five days in Athens: Acropolis, Plaka, day trip to Delphi',
          'Three days in Istanbul: Hagia Sophia, Grand Bazaar, Bosphorus',
          'Four days in Marrakech: Jemaa el-Fna, souks, Atlas day trip',
          'Five days in Cairo: pyramids, Egyptian Museum, Khan el-Khalili',
          'Three days in Tokyo: Shibuya, Asakusa, Ginza, Tsukiji breakfast',
          'Four days in Kyoto: Fushimi Inari, Arashiyama, Gion district',
          'Five days in Seoul: Gyeongbokgung, Bukchon, Gangnam, DMZ',
          'Three days in Singapore: Marina Bay, Gardens, hawker centers',
          'Four days in Bangkok: Grand Palace, Chinatown, Chao Phraya',
          'Five days in Hanoi: Old Quarter, Ho Chi Minh, day trip Halong Bay',
          'Three days in Mexico City: Coyoacán, Teotihuacan, Xochimilco',
          'Four days in Cusco: Plaza de Armas, Sacsayhuamán, Sacred Valley',
          'Five days in Cartagena: Walled City, Getsemaní, Rosario Islands',
          'Three days in Buenos Aires: San Telmo, Recoleta, La Boca, tango'
        ]
      },
      {
        id: 'adventure',
        label: 'Off the beaten path adventure',
        items: [
          '4-day trek to base camp Annapurna with local guide and porter',
          'Sea kayak expedition through Norwegian fjords with mothership',
          '5-day horseback ride across Mongolian steppe with nomad family',
          'Diving safari in Komodo with liveaboard and Manta Point dive',
          'Whale watching in Patagonia by certified zodiac with biologist',
          '5-day O Circuit hike in Torres del Paine with porter service',
          'Camel trek through Sahara with Berber guide and oasis camp',
          'Solo cycling tour through Vietnam Mekong Delta with homestays',
          'Glacier hike on Vatnajökull in Iceland with crampons and guide',
          'Mountaineering in Cordillera Blanca with high-altitude acclimatization',
          'Volcano hike on Acatenango overnight with active Fuego viewing',
          'Cave diving in Mexican cenotes with cavern certified guide',
          'White water rafting on Zambezi class IV-V with night camp',
          '4-day jungle trek in Amazon with shaman ceremony night',
          'Stargazing expedition in Atacama Desert with research telescope',
          'Polar bear safari in Churchill Manitoba with tundra buggy',
          'Gorilla trekking in Bwindi Impenetrable Forest with permit',
          '7-day cycling Vietnam coast on rail-trail with luggage transfer',
          'Sailing flotilla in Greek Cyclades islands with skipper option',
          'Desert camping in Wadi Rum with Bedouin family and 4x4 tour',
          'Multi-day kayak Galápagos with marine biologist guide',
          'Helicopter access skiing in British Columbia backcountry',
          'Solo hiking Tour du Mont Blanc circuit with refuge bookings',
          'Climbing trip to Yangshuo karst formations with sport routes',
          'Multi-day rafting Grand Canyon with full provisions and guide',
          'Trans-Caucasus motorcycle ride from Georgia to Armenia',
          'Surfing expedition Mentawai Islands with charter boat',
          'Antarctica expedition cruise with zodiac landings and kayak option'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to plan spontaneous routes without regret',
        body: '<p>Spontaneous routes work when you have three anchors resolved: where you sleep the first night, how you move and what maximum budget the wallet tolerates. The rest is decided on the fly. Without those three pillars, spontaneity becomes stress. Generate the route, book only the first night via Booking or Airbnb, and leave subsequent nights open for improvisation.</p><p>The classic mistake is over-planning short trips and under-planning long ones. For weekends, knowing where to sleep is enough; for 7-day road trips, you need to book at least stops in small towns where few hostels are available. Tilcara in high season fills up; Capilla del Monte in August, doesn\'t. Research hotel offer at destination before leaving.</p><p>For international destinations, add three elements: visa (do you need one?), connectivity (local SIM or roaming), and money (USD cash vs card vs Wise). Travelers heading to Brazil have different rules than those going to Europe: in South America cash rules, in Europe contactless is standard. Adapt logistics to destination, not the other way.</p>'
      },
      {
        h2: 'Trip types and when to choose each',
        body: '<p>Weekend escapes serve emotional reset function. They don\'t seek revelations: they seek context change. Coastal towns, country villages, hot springs work when you\'re saturated but can\'t take long vacation. Rule: a well-done escape is one you return from with renewed energy, not exhausted by logistics.</p><p>Long road trips belong to vital transition moments. Saying goodbye to a job, ending a relationship, before a major change. Cross-country routes give you space to process what urban routine doesn\'t allow. Reserve between 2 and 3 weeks; less becomes marathon, more becomes relocation.</p><p>International urban escapes are ideal for reconnecting with your adult and cultural side. Lisbon, Cusco, Marrakech open to underexplored regions without going through saturated European filters. Madrid, Rome, Berlin deepen roots if you have ancestry. Three to five days is enough for a city if you prioritize 3-4 activities per day and don\'t want to "see it all".</p>'
      },
      {
        h2: 'Common mistakes in route planning',
        body: '<p>First mistake: underestimating travel times. Mountain roads measured by Google Maps optimistically often take 50% longer due to curves, weather and stops. Add 30% to estimated time for technical breaks, meals and photos. A route planned to the minute derails at the first unforeseen event.</p><p>Second mistake: wanting to see everything in one trip. Cross-country routes have thousands of kilometers; nobody completes them in 10 days. Choose 1500-2000 km segments and enjoy; the rest waits for next trip. Bullet-saturated trips generate blurry memories; trips with improvisation space generate stories you tell 10 years later.</p><p>Third mistake: prioritizing Instagram over experience. If you plan only by iconic photos, you miss the smaller towns and detours. Mix famous points with lesser-known stops. Locals recommend better than listicles: stop at the first general store and ask "what can\'t I miss here", the answer is worth more than any blog.</p>'
      },
      {
        h2: 'Logistics many forget',
        body: '<p>Realistic budget add 25% to your initial calculation. Unforeseen expenses (additional fuel due to detours, restaurants better than planned, souvenirs you didn\'t calculate) always appear. For road trips, a simple Excel with kilometers, average fuel cost and hotel nights avoids surprises. Apps like TripIt or Trailwise centralize bookings in one place.</p><p>For traveling with own car, check: tires (pressure, depth), oil, coolant, brake fluid, battery. A breakdown in middle of nowhere 200 km from nearest town ruins any trip. Carry inflated spare tire, jack, cross wrench, and add basic kit of cables, tape, screws. Long drives are hard on vehicles, don\'t improvise.</p><p>For international, three essential documents: passport valid at least 6 months post-return, travel medical insurance (World Nomads or equivalent), and digital copy of everything in email + Google Drive. If passport stolen, the copy speeds consular procedure by 80%. Carry USD in small denominations (5, 10, 20) for situations where card doesn\'t work; outside major capitals cash remains king.</p>'
      }
    ],
    faq: [
      {
        q: 'How many days to reserve for each route type?',
        a: 'Weekend escape: 2-3 days. Medium road trip: 7-10 days. Long road trip (cross-country): 14-21 days. International urban escape: 4-7 days per city. Off-track adventure: 5-12 days depending on difficulty. Always add a buffer day at the end for unforeseen events.'
      },
      {
        q: 'High season or low season?',
        a: 'For classic tourist destinations, low season wins on price and tranquility but loses on weather and open services. Shoulder season (October-November, March-April in Northern Hemisphere) is usually the sweet spot. For international destinations, avoid local school holidays which spike prices.'
      },
      {
        q: 'How do I choose between own car and rental?',
        a: 'For distances under 1200 km from home, own car works if it\'s in good shape. For long road trips in remote regions, renting guarantees new vehicle, full insurance and no concern about wear. Calculate: 4000 km in own car implies subsequent maintenance; rental outsourced that cost.'
      },
      {
        q: 'Is it worth planning the route yourself or hiring an agency?',
        a: 'For classic destinations with good infrastructure, doing it yourself gives more freedom and saves 30-40%. For technical adventures (high-altitude treks, climbing, polar expeditions) or destinations with language barrier (Asia, Middle East), specialized agencies are worth every penny.'
      }
    ]
  }
};
