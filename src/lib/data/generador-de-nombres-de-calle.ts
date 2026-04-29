import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-calle",
    "en": "street-name-generator"
  },
  "category": "fun",
  "emoji": "🛣️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Calle | Genfy",
    "metaDesc": "Inventá nombres de calles y avenidas para mapas ficticios, juegos de rol urbano y novelas con ciudades imaginarias. Toponimia urbana auténtica.",
    "h1": "Generador de Nombres de Calle",
    "intro": "Diseñá ciudades creíbles con calles bien bautizadas. Combina tipo de vía, raíz histórica y sufijos urbanos para mapas, juegos y worldbuilding.",
    "tag": "Worldbuilding urbano",
    "filterLabel": "Tipo de vía",
    "countLabel": "Cantidad",
    "generateLabel": "Generar calles",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de vía",
        "items": [
          "Calle",
          "Avenida",
          "Boulevard",
          "Pasaje",
          "Diagonal",
          "Camino",
          "Plaza",
          "Paseo",
          "Travesía",
          "Carrera",
          "Vereda",
          "Costanera",
          "Galería",
          "Sendero",
          "Alameda",
          "Vía",
          "Plazoleta",
          "Cuesta",
          "Calle Vieja",
          "Calleja",
          "Bajada",
          "Subida",
          "Rambla",
          "Glorieta",
          "Puente",
          "Cantón",
          "Atajo",
          "Perímetro",
          "Cerco",
          "Mirador"
        ]
      },
      {
        "id": "anchor",
        "label": "Núcleo nominal",
        "items": [
          "de los Olivos",
          "del Reloj",
          "del Faro",
          "del Mercado",
          "de las Estrellas",
          "del Quemadero",
          "del Carmen",
          "de la Aurora",
          "de los Tilos",
          "del Sastre",
          "del Río Seco",
          "de las Lavanderas",
          "del Cardenal",
          "de los Herreros",
          "del Sereno",
          "del Águila",
          "del Cántaro",
          "del Pan Dulce",
          "de las Acacias",
          "del Cordobán",
          "del Pintor Loco",
          "del Soldado Anónimo",
          "del Almirante",
          "del Pozo de Bronce",
          "del Cuento Roto",
          "del Aguacate",
          "del Chajá",
          "del Crepúsculo",
          "del Eco",
          "del Pacto",
          "de los Inmigrantes",
          "del Domador",
          "del Naranjo",
          "del Carpintero",
          "del Buen Aire"
        ]
      },
      {
        "id": "historical",
        "label": "Figura o fecha",
        "items": [
          "12 de Octubre",
          "Independencia",
          "Manuel Belgrano",
          "Sor Juana",
          "Aníbal Troilo",
          "Olga Orozco",
          "Eladia Blázquez",
          "Felisberto Hernández",
          "Manuel J. Castilla",
          "Doña Petrona",
          "Atahualpa",
          "Mercedes Sosa",
          "9 de Julio",
          "25 de Mayo",
          "Juan B. Alberdi",
          "Bartolomé Mitre",
          "Domingo Sarmiento",
          "Niceto Vega",
          "Roque Sáenz Peña",
          "Carlos Gardel",
          "Borges",
          "Cortázar",
          "Antonio Berni",
          "Lola Mora",
          "Eva Duarte",
          "Charles Darwin",
          "Marie Curie",
          "Tupac Amaru",
          "Túpac Katari",
          "Hipólito Yrigoyen",
          "Juan Manuel Fangio",
          "Ada Lovelace",
          "Gabriela Mistral",
          "Frida Kahlo",
          "Manuel Puig"
        ]
      },
      {
        "id": "qualifier",
        "label": "Cualificador opcional",
        "items": [
          "del Norte",
          "del Sur",
          "Centro",
          "Bajo",
          "Alta",
          "Vieja",
          "Nueva",
          "Internacional",
          "Argentina",
          "Bicentenario",
          "del Pueblo",
          "del Trabajo",
          "Chica",
          "Grande",
          "Mayor",
          "Menor",
          "del Río",
          "Costanera",
          "Federal",
          "Provincial",
          "Histórica",
          "Olímpica",
          "Bicicletera",
          "Peatonal",
          "Vieja Estación",
          "del Mirador",
          "del Bosque",
          "Sur Profundo",
          "Frontera",
          "Industrial"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar calles para que tu ciudad ficticia respire",
        "body": "<p>La toponimia urbana real sigue patrones consistentes que vale la pena replicar. En América Latina, las calles toman su nombre principalmente de cuatro fuentes: <strong>fechas históricas</strong> (Av. 9 de Julio, Calle 25 de Mayo), <strong>próceres</strong> (Av. Belgrano, Calle Sarmiento), <strong>oficios o gremios</strong> (Calle de los Herreros, Pasaje del Sastre) y <strong>elementos geográficos</strong> (Costanera, Calle del Río, Av. de los Tilos).</p><p>Para que tu ciudad inventada se sienta orgánica, combiná las cuatro fuentes en proporción realista: aproximadamente <em>40% próceres y fechas, 30% oficios y elementos cotidianos, 20% accidentes geográficos, 10% nombres únicos y poéticos</em>. Si todas tus calles llevan nombres de prócer (<em>Belgrano</em>, <em>Mitre</em>, <em>Sarmiento</em>), la ciudad se siente plana. Si todas son poéticas (<em>Calle del Crepúsculo</em>, <em>Pasaje de las Lágrimas</em>), pierde verosimilitud.</p><p>Pensá la <strong>jerarquía vial</strong>. Las grandes avenidas suelen llevar nombres de héroes nacionales o fechas patrias; las calles secundarias, próceres locales menos famosos; los pasajes y callejones, gremios o eventos pequeños del barrio. Esta lógica replica cómo crece una ciudad real con el tiempo.</p>"
      },
      {
        "h2": "Estilos según la época y el carácter de tu ciudad",
        "body": "<p>Para una <strong>ciudad colonial latinoamericana</strong> (estilo Cartagena, Sucre, San Telmo histórico), priorizá nombres de santos, gremios coloniales y eventos religiosos: <em>Calle del Carmen</em>, <em>Pasaje de las Lavanderas</em>, <em>Cuesta del Sereno</em>. Numeración tipo <em>Carrera 7ª, Calle 14</em> es típica de ciudades latinoamericanas con cuadrícula colonial.</p><p>Para <strong>ciudades modernas latinoamericanas del siglo XX</strong>, dominan los próceres independentistas y las fechas patrias: <em>Av. Bolívar</em>, <em>Calle 25 de Mayo</em>, <em>Plaza Independencia</em>. Sumá referencias culturales más recientes (escritores, músicos, artistas locales): <em>Calle Mercedes Sosa</em>, <em>Pasaje Cortázar</em>. Esto ancla la ciudad en una capa cultural específica.</p><p>Para <strong>ciudades de fantasía medieval</strong> (Tolkien, GoT, Witcher), usá oficios y elementos arquitectónicos: <em>Calle de los Forjadores</em>, <em>Pasaje del Pozo</em>, <em>Avenida de la Muralla Vieja</em>. Para <strong>ciberpunk o sci-fi distópico</strong>, mezclá nombres corporativos con números: <em>Sector 12-Norte</em>, <em>Avenida Yotomi</em>, <em>Calle Beta-7</em>. Para <strong>pueblos pequeños rurales</strong>, los nombres pueden ser hiperlocales: <em>Calle del Almacén de Don Pedro</em>, <em>Pasaje del Mango Grande</em>. La idiosincracia los vuelve memorables.</p>"
      },
      {
        "h2": "Errores frecuentes al diseñar toponimia urbana",
        "body": "<p>El primer error es <strong>genericidad sin sabor local</strong>. <em>Calle Principal</em>, <em>Avenida Central</em>, <em>Calle 1</em>, <em>Calle 2</em> funcionan en grids muy nuevos (Manhattan, ciudades planificadas) pero hacen aburrida cualquier ciudad ficticia. Mezclá grid numérico con calles bautizadas para realismo.</p><p>El segundo error es <strong>incoherencia cultural</strong>. Si tu ciudad tiene <em>Av. Sarmiento</em>, <em>Pasaje Tolkien</em> y <em>Calle Yotomi Industries</em>, mezclás tres universos culturales sin justificación interna. Decidí qué cultura(s) fundaron la ciudad y qué tradiciones de nombres usaron en cada época.</p><p>El tercer error es <strong>repetir nombres en distintos barrios</strong>. En la realidad, muchas ciudades tienen una sola <em>Av. Belgrano</em>; tu ciudad ficticia puede tener una principal y referencias secundarias (<em>Belgrano Norte</em>, <em>Belgrano Sur</em>) pero no tres calles homónimas dispersas. Usá un mapa o lista para evitar duplicados. El cuarto error es <strong>nombres impronunciables o muy largos</strong>. <em>Avenida Internacional de la Confraternidad Latinoamericana de los Pueblos Originarios</em> existe en la realidad pero es excepción molesta. En tu ciudad, mantené el promedio en 2-4 palabras por nombre. Reservá los nombres largos para vías centrales con peso simbólico.</p>"
      },
      {
        "h2": "Aplicaciones: novelas, juegos de rol urbanos y mapas",
        "body": "<p>En <strong>novelas urbanas</strong>, las calles funcionan como anclas de orientación. Si tu protagonista vive en <em>Pasaje de las Lavanderas 320</em> y trabaja en <em>Avenida Belgrano y Cardenal</em>, el lector construye geografía mental con cada mención. Tres o cuatro calles distintivas alcanzan para sostener una novela; nombrar treinta confunde.</p><p>En <strong>juegos de rol urbano</strong> (Vampire: The Masquerade, Cyberpunk RED, World of Darkness), un mapa con 20-30 calles bautizadas vuelve la ciudad sensación real. Distribuilas por barrios con personalidad: el barrio noble tiene calles con nombres aristocráticos; el barrio bajo, oficios olvidados; el centro comercial, números fríos. La toponimia revela clase social.</p><p>Para <strong>cartografía de juegos de mesa</strong> (Carcassonne, Lords of Waterdeep), incluí mini-historias asociadas a calles clave: <em>Pasaje del Pacto</em> es donde se firmaron los tratados; <em>Calle del Quemadero</em> recuerda el incendio histórico. Esos detalles invitan a los jugadores a inventar misiones. <strong>Para writeups de city-building en videojuegos</strong> (Skyrim mods, Cyberpunk DLCs), generá entre 50 y 100 nombres distribuidos por distritos y guardalos en un documento de referencia para que ningún diseñador duplique. <strong>Tip avanzado</strong>: las ciudades reales tienen calles con nombres oficiales y apodos populares. <em>'Av. de los Inmigrantes'</em> oficial, <em>'la Inmigrantes'</em> en boca de vecinos. Esa dualidad textura tu ciudad.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar nombres de próceres reales en mi ciudad ficticia?",
        "a": "Sí, no hay problema legal con nombres históricos del dominio público. Si tu ciudad ficticia está geográficamente cerca de un país real, usar próceres locales (Belgrano, Bolívar, Hidalgo) le da anclaje cultural. Para ciudades de fantasía pura, mejor inventar próceres ficticios."
      },
      {
        "q": "¿Cuántas calles necesita una ciudad ficticia para sentirse real?",
        "a": "Depende del rol narrativo. Una novela puede sostenerse con 8-12 calles distintivas. Un juego de rol urbano necesita 25-50 para que los jugadores se orienten. Un mapa interactivo o videojuego puede tener 100+ pero solo 20-30 con nombre memorable; el resto puede ser numerado."
      },
      {
        "q": "¿Conviene nombrar calles según gremios u oficios?",
        "a": "Sí, da textura histórica inmediata. <em>Calle de los Herreros</em>, <em>Pasaje del Sastre</em>, <em>Plaza de las Lavanderas</em> sugieren que ahí vivieron esos oficios siglos atrás. En ciudades coloniales latinoamericanas reales este patrón es común y enriquece tu worldbuilding."
      },
      {
        "q": "¿Cómo evito que mis nombres suenen a parodia de fantasía?",
        "a": "Evitá adjetivos místicos pegados a sustantivos genéricos: <em>Calle del Misterio Eterno</em>, <em>Avenida del Dragón Sangrante</em>. Las ciudades reales (incluso en fantasía bien hecha) usan nombres más prosaicos. Tomá referencias de mapas históricos reales de Sevilla, Lima, Praga o Estambul como modelo."
      }
    ]
  },
  "en": {
    "pageTitle": "Street Name Generator | Genfy",
    "metaDesc": "Invent street and avenue names for fictional maps, urban roleplay games and novels with imaginary cities. Authentic urban toponymy.",
    "h1": "Street Name Generator",
    "intro": "Design believable cities with well-named streets. Combine road type, historical root and urban suffixes for maps, games and worldbuilding.",
    "tag": "Urban worldbuilding",
    "filterLabel": "Road type",
    "countLabel": "Amount",
    "generateLabel": "Generate streets",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Road type",
        "items": [
          "Street",
          "Avenue",
          "Boulevard",
          "Lane",
          "Diagonal",
          "Road",
          "Plaza",
          "Promenade",
          "Crossing",
          "Way",
          "Walk",
          "Riverside",
          "Gallery",
          "Path",
          "Mall",
          "Court",
          "Square",
          "Hill",
          "Old Street",
          "Alley",
          "Descent",
          "Rise",
          "Esplanade",
          "Roundabout",
          "Bridge",
          "Quarter",
          "Shortcut",
          "Perimeter",
          "Loop",
          "Lookout"
        ]
      },
      {
        "id": "anchor",
        "label": "Nominal anchor",
        "items": [
          "of the Olives",
          "of the Clock",
          "of the Lighthouse",
          "of the Market",
          "of the Stars",
          "of the Burning Yard",
          "of Mount Carmel",
          "of the Dawn",
          "of the Lindens",
          "of the Tailor",
          "of the Dry River",
          "of the Washerwomen",
          "of the Cardinal",
          "of the Blacksmiths",
          "of the Night Watch",
          "of the Eagle",
          "of the Pitcher",
          "of Sweet Bread",
          "of the Acacias",
          "of Cordovan Leather",
          "of the Mad Painter",
          "of the Unknown Soldier",
          "of the Admiral",
          "of the Bronze Well",
          "of the Broken Tale",
          "of the Avocado",
          "of the Chajá Bird",
          "of Twilight",
          "of the Echo",
          "of the Pact",
          "of the Immigrants",
          "of the Tamer",
          "of the Orange Tree",
          "of the Carpenter",
          "of the Good Air"
        ]
      },
      {
        "id": "historical",
        "label": "Figure or date",
        "items": [
          "October 12",
          "Independence",
          "Manuel Belgrano",
          "Sor Juana",
          "Aníbal Troilo",
          "Olga Orozco",
          "Eladia Blázquez",
          "Felisberto Hernández",
          "Manuel J. Castilla",
          "Doña Petrona",
          "Atahualpa",
          "Mercedes Sosa",
          "July 9",
          "May 25",
          "Juan B. Alberdi",
          "Bartolomé Mitre",
          "Domingo Sarmiento",
          "Niceto Vega",
          "Roque Sáenz Peña",
          "Carlos Gardel",
          "Borges",
          "Cortázar",
          "Antonio Berni",
          "Lola Mora",
          "Eva Duarte",
          "Charles Darwin",
          "Marie Curie",
          "Tupac Amaru",
          "Tupac Katari",
          "Hipólito Yrigoyen",
          "Juan Manuel Fangio",
          "Ada Lovelace",
          "Gabriela Mistral",
          "Frida Kahlo",
          "Manuel Puig"
        ]
      },
      {
        "id": "qualifier",
        "label": "Optional qualifier",
        "items": [
          "North",
          "South",
          "Center",
          "Lower",
          "Upper",
          "Old",
          "New",
          "International",
          "National",
          "Bicentennial",
          "of the People",
          "of Labor",
          "Small",
          "Great",
          "Major",
          "Minor",
          "Riverside",
          "Coastal",
          "Federal",
          "Provincial",
          "Historic",
          "Olympic",
          "Bike Lane",
          "Pedestrian",
          "Old Station",
          "Lookout",
          "Forest",
          "Deep South",
          "Frontier",
          "Industrial"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name streets so your fictional city breathes",
        "body": "<p>Real urban toponymy follows consistent patterns worth replicating. Cities draw street names mainly from four sources: <strong>historical dates</strong> (5th Avenue, July 4th Way), <strong>founding figures</strong> (Lincoln Ave, Bolívar Street), <strong>trades or guilds</strong> (Blacksmith Street, Tailor's Lane) and <strong>geographical elements</strong> (Riverside Drive, Linden Walk).</p><p>For your invented city to feel organic, mix the four sources in realistic proportion: roughly <em>40% figures and dates, 30% trades and everyday elements, 20% geographic features, 10% unique poetic names</em>. If every street is named after a national hero (<em>Washington</em>, <em>Lincoln</em>, <em>Jefferson</em>), the city feels flat. If they're all poetic (<em>Twilight Street</em>, <em>Tear Lane</em>), it loses plausibility.</p><p>Think about <strong>road hierarchy</strong>. Major avenues usually carry national hero or patriotic date names; secondary streets, lesser-known local figures; alleys and lanes, neighborhood guilds or small events. This logic replicates how a real city grows over time.</p>"
      },
      {
        "h2": "Styles by era and character of your city",
        "body": "<p>For a <strong>colonial Latin American city</strong> (Cartagena, Sucre, old San Telmo style), prioritize saint names, colonial trades and religious events: <em>Carmel Street</em>, <em>Washerwomen's Lane</em>, <em>Night Watch Hill</em>. Numbering like <em>7th Avenue, 14th Street</em> is typical of Latin American cities with colonial grids.</p><p>For <strong>20th-century modern Latin American cities</strong>, independence-era heroes and patriotic dates dominate: <em>Bolívar Avenue</em>, <em>May 25th Street</em>, <em>Independence Plaza</em>. Add more recent cultural references (writers, musicians, local artists): <em>Mercedes Sosa Street</em>, <em>Cortázar Lane</em>. This anchors the city in a specific cultural layer.</p><p>For <strong>medieval fantasy cities</strong> (Tolkien, GoT, Witcher), use trades and architectural elements: <em>Forgers' Street</em>, <em>Well Lane</em>, <em>Old Wall Avenue</em>. For <strong>cyberpunk or dystopian sci-fi</strong>, mix corporate names with numbers: <em>Sector 12-North</em>, <em>Yotomi Avenue</em>, <em>Beta-7 Street</em>. For <strong>small rural towns</strong>, names can be hyperlocal: <em>Don Pedro's Store Street</em>, <em>Big Mango Lane</em>. The idiosyncrasy makes them memorable.</p>"
      },
      {
        "h2": "Common mistakes when designing urban toponymy",
        "body": "<p>The first mistake is <strong>genericness without local flavor</strong>. <em>Main Street</em>, <em>Central Avenue</em>, <em>1st Street</em>, <em>2nd Street</em> work in very new grids (Manhattan, planned cities) but make any fictional city dull. Mix numeric grid with named streets for realism.</p><p>The second mistake is <strong>cultural incoherence</strong>. If your city has <em>Sarmiento Ave</em>, <em>Tolkien Lane</em> and <em>Yotomi Industries Street</em>, you're mixing three cultural universes without internal justification. Decide which culture(s) founded the city and what naming traditions they used in each era.</p><p>The third mistake is <strong>repeating names across neighborhoods</strong>. In reality, most cities have a single <em>Belgrano Avenue</em>; your fictional city can have a main one and secondary references (<em>Belgrano North</em>, <em>Belgrano South</em>) but not three scattered homonymous streets. Use a map or list to avoid duplicates. The fourth mistake is <strong>unpronounceable or overlong names</strong>. <em>International Avenue of the Latin American Confraternity of Indigenous Peoples</em> exists in reality but is annoying exception. In your city, average 2-4 words per name. Save long names for central roads with symbolic weight.</p>"
      },
      {
        "h2": "Applications: novels, urban RPGs and maps",
        "body": "<p>In <strong>urban novels</strong>, streets work as orientation anchors. If your protagonist lives at <em>Washerwomen's Lane 320</em> and works at <em>Belgrano Avenue and Cardinal</em>, the reader builds mental geography with each mention. Three or four distinctive streets are enough to sustain a novel; naming thirty confuses.</p><p>In <strong>urban RPGs</strong> (Vampire: The Masquerade, Cyberpunk RED, World of Darkness), a map with 20-30 named streets makes the city feel real. Distribute them across personality-driven neighborhoods: the noble district has aristocratic names; the slum, forgotten trades; the commercial center, cold numbers. Toponymy reveals social class.</p><p>For <strong>tabletop game cartography</strong> (Carcassonne, Lords of Waterdeep), include mini-stories tied to key streets: <em>Pact Lane</em> is where treaties were signed; <em>Burning Yard Street</em> commemorates the historic fire. These details invite players to invent quests. <strong>For city-building writeups in video games</strong> (Skyrim mods, Cyberpunk DLCs), generate 50-100 names distributed by district and save them in a reference doc so no designer duplicates. <strong>Advanced tip</strong>: real cities have streets with official names and popular nicknames. <em>'Avenue of the Immigrants'</em> official, <em>'the Immigrants'</em> in residents' mouths. That duality textures your city.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use real historical figures in my fictional city?",
        "a": "Yes, no legal issue with public domain historical names. If your fictional city is geographically near a real country, using local heroes (Lincoln, Bolívar, Hidalgo) gives cultural anchoring. For pure fantasy cities, better invent fictional heroes."
      },
      {
        "q": "How many streets does a fictional city need to feel real?",
        "a": "Depends on narrative role. A novel can hold up with 8-12 distinctive streets. An urban RPG needs 25-50 for players to orient. An interactive map or video game can have 100+ but only 20-30 with memorable names; the rest can be numbered."
      },
      {
        "q": "Should I name streets after guilds or trades?",
        "a": "Yes, it gives instant historical texture. <em>Blacksmiths' Street</em>, <em>Tailor's Lane</em>, <em>Washerwomen's Plaza</em> suggest those trades lived there centuries ago. In real Latin American colonial cities this pattern is common and enriches your worldbuilding."
      },
      {
        "q": "How do I avoid sounding like a fantasy parody?",
        "a": "Avoid mystical adjectives stuck to generic nouns: <em>Eternal Mystery Street</em>, <em>Bleeding Dragon Avenue</em>. Real cities (even in well-made fantasy) use more prosaic names. Take references from real historic maps of Seville, Lima, Prague or Istanbul as a model."
      }
    ]
  }
};
