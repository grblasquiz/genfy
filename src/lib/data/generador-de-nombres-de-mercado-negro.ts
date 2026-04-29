import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-mercado-negro", en: "black-market-name-generator" },
  category: "fun",
  emoji: "🏴",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Mercado Negro | Genfy",
    metaDesc: "Creá nombres de mercados negros, bazares clandestinos y hubs de contrabando para tus historias noir, cyberpunk y campañas de rol urbanas.",
    h1: "Generador de Nombres de Mercado Negro",
    intro: "Inventá zocos clandestinos, bazares ilegales y puntos de intercambio sucio para tus narrativas noir y cyberpunk. Nombres con olor a humedad y neón.",
    tag: "Worldbuilding",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "type",
        label: "Tipo de lugar",
        items: [
          "El Bazar de", "El Mercado de", "El Zoco de", "La Feria de", "Los Puestos de",
          "El Pasaje de", "La Galería de", "El Sótano de", "El Subsuelo de", "La Trastienda de",
          "El Callejón de", "La Esquina de", "El Andén de", "La Plataforma de", "El Depósito de",
          "El Galpón de", "La Bodega de", "El Hangar de", "La Estación de", "El Muelle de",
          "El Túnel de", "La Catacumba de", "El Refugio de", "La Cocina de", "El Punto de",
          "La Cantina de", "El Almacén de", "La Trinchera de", "El Hueco de", "La Cueva de"
        ]
      },
      {
        id: "name",
        label: "Nombre central",
        items: [
          "Madame Cero", "el Tuerto", "los Tres Dedos", "la Viuda", "el Gordo Tang",
          "los Hermanos Iván", "la Coreana", "el Tío Saito", "la Bruja Eva", "Don Carbón",
          "el Cojo", "la Manca", "los Susurros", "el Carnicero", "la Modista",
          "los Vendedores Sin Cara", "el Chino del Octavo", "la Roja", "Papá Lobo", "la Sombra",
          "los Sin Nombre", "el Ciego", "los Pulgares Rotos", "la Rusa", "el Doctor Cuervo",
          "Mama Hierba", "el Tigre", "los Gemelos Ojeda", "la Patrona", "el Verdugo"
        ]
      },
      {
        id: "location",
        label: "Ubicación",
        items: [
          "del Subte", "del Octavo Anillo", "de la Línea Roja", "del Puerto Viejo", "del Conurbano",
          "del Barrio Chino", "del Río", "de la Estación Fantasma", "del Túnel 9", "del Mall Abandonado",
          "de la Frontera Norte", "del Bajo", "del Cementerio Sur", "del Distrito 7", "del Sector Industrial",
          "del Borde", "del Antiguo Aeropuerto", "del Subsuelo Cinco", "de la Zona Roja", "del Apagón",
          "del Río Muerto", "de la Calle Veintidós", "del Patio Trasero", "del Viejo Hospital", "del Galpón 14",
          "de la Plaza Sin Nombre", "del Parque Cerrado", "de la Vía Muerta", "del Edificio Quemado", "del Puente Caído"
        ]
      },
      {
        id: "tone",
        label: "Tono",
        items: [
          "Negro", "Sucio", "Olvidado", "Maldito", "Hueco",
          "Roto", "Mojado", "Trémulo", "Doblado", "Sangrante",
          "Ciego", "Mudo", "Ahogado", "Encharcado", "Pútrido",
          "Frío", "Húmedo", "Quemado", "Ácido", "Tóxico",
          "Bastardo", "Falso", "Marcado", "Astillado", "Raído",
          "Estrecho", "Bajo", "Profundo", "Estanco", "Ruinoso"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo nombrar un mercado negro que se sienta real",
        body: "<p>Los mercados negros memorables de la ficción comparten una regla: tienen dueño. <em>El Distrito 9</em>, <em>Kowloon Walled City</em> o <em>el bazar de Tatooine</em> existen porque alguien los gobierna. Cuando inventes el tuyo, empezá por el nombre del jefe. <strong>El Bazar de Madame Cero del Octavo Anillo</strong> ya implica una historia: hubo siete anillos antes, hubo una mujer que perdió todo, hay un código de operación.</p><p>El segundo principio es la geografía precisa. Un mercado clandestino que existe en cualquier lado no existe. Anclalo a una infraestructura concreta: andén abandonado, sótano de mall, galpón portuario, túnel de servicio. La especificidad arquitectónica aporta verosimilitud. Si tu jugador o lector puede imaginar el techo bajo, las luces parpadeando y el olor a humedad, ganaste la batalla.</p><p>El tercer ingrediente es la transgresión cultural. Los mercados negros son interesantes porque venden lo prohibido en ese mundo: en Blade Runner, replicantes; en William Gibson, deck-runners y software; en historias de fantasía, reliquias e información sobre nobles. Definí qué se vende en el tuyo antes de fijar el nombre y revisá si el nombre lo evoca: <strong>la Cocina del Doctor Cuervo</strong> sugiere bioquímica turbia; <strong>el Hangar del Tigre del Antiguo Aeropuerto</strong> sugiere armas y vehículos.</p>"
      },
      {
        h2: "Aplicaciones en cyberpunk, noir y fantasía urbana",
        body: "<p>En cyberpunk, los mercados negros son arquitecturas verticales. <em>Neuromante</em> y <em>Snow Crash</em> los apilan en torres y pasarelas. Generá nombres con sufijos que mencionen niveles: <em>Subsuelo Cinco, Octavo Anillo, Sector 7</em>. Si tu campaña es Cyberpunk RED o Shadowrun, anclá cada mercado a un fixer específico y sumá un rumor: qué se vende solo allí, qué facción lo protege, qué peligro corren los recién llegados.</p><p>En noir y thriller urbano (estilo <em>Better Call Saul</em>, <em>The Wire</em> o <em>Gomorra</em>), los mercados negros son operativos en lugares cotidianos: una lavandería, una pollería, un bar de carretera. Generá nombres aparentemente inocuos y agregá tu giro. <em>La Cantina de Mama Hierba del Patio Trasero</em> suena a almuerzo familiar y a depósito de mercadería ilegal al mismo tiempo. Esa ambigüedad es el corazón del género.</p><p>En fantasía urbana o ucronía histórica, los mercados negros adoptan tonos de feria medieval mutada. Funcionan los nombres con prefijos como <em>Zoco</em>, <em>Pasaje</em> o <em>Galería</em>. Para campañas estilo Dishonored o Bloodborne, sumá modificadores oscuros: <em>Sangrante, Ahogado, Marcado</em>. Lo importante es coherencia de registro: no mezcles <em>Zoco</em> medieval con <em>Subsuelo Cinco</em> moderno en el mismo nombre, salvo que tu mundo lo justifique.</p>"
      },
      {
        h2: "Errores típicos al diseñar un mercado clandestino",
        body: "<p>Error 1: hacerlo demasiado grande. Un mercado negro creíble tiene entre veinte y cien puestos, no mil. Si lo escalás como mall, pierde clandestinidad. Lo prohibido necesita rincón, no expansión. Error 2: olvidar la economía. ¿Quién paga el alquiler informal? ¿Hay protección de tres facciones? ¿Qué porcentaje cobra el dueño? Sin estas respuestas, el mercado es decorado.</p><p>Error 3: nombre sin geografía. <em>El Mercado del Doctor Cuervo</em> a secas no funciona. Sin ubicación, podría estar en cualquier lugar, lo cual es lo mismo que estar en ninguno. Siempre cerralo con un anclaje espacial: <em>del Galpón 14, del Antiguo Aeropuerto, del Subsuelo Cinco</em>.</p><p>Error 4: usarlo solo como tienda. El mercado es escenario narrativo. Tiene que tener al menos tres puntos: entrada vigilada, núcleo comercial, salida secreta. Diseñá un mapa rudimentario antes de la sesión o capítulo. Cuando el jugador o el lector entra al mercado, deben pasar cosas además de comprar: encuentros, traiciones, rumores. Si solo es un catálogo de objetos, no le sacás partido. Pensalo como un escenario noir donde cada puesto tiene un secreto.</p>"
      },
      {
        h2: "De la lista de nombres al ecosistema completo",
        body: "<p>Una vez elegido el nombre, definí cinco vendedores recurrentes con apodo, especialidad y debilidad. Por ejemplo, en <strong>el Bazar de Madame Cero</strong>: Iván el Tuerto vende cibernética usada y odia a los corredores de Datacorp; la Coreana ofrece documentos falsos pero solo tras tres visitas; Don Carbón comercia armamento legacy y exige favores en lugar de plata.</p><p>Sumá tres reglas internas que el mercado obliga a respetar. <em>No se cobra a niños</em>, <em>los apellidos no se preguntan</em>, <em>las peleas se resuelven afuera</em>. Estas reglas no escritas dan textura cultural y permiten conflictos cuando un personaje las quiebra. <em>John Wick</em> construyó toda su saga sobre el código del Continental; tu mercado puede tener el suyo.</p><p>Reservá una traición planeada para revelar a mitad de campaña o mitad de novela. El mercado parece neutral, pero en realidad un vendedor pasa información a una facción enemiga, o el dueño está vendiendo el local a una corporación. Esa traición latente convierte el escenario en bomba de tiempo. Cuanto más tiempo pasen los personajes ahí, más jugosa será la explosión final.</p>"
      }
    ],
    faq: [
      {
        q: "¿Sirve este generador para campañas de Cyberpunk RED y Shadowrun?",
        a: "Sí, especialmente para los niveles 'street' donde los runners necesitan fixers y vendedores. Los nombres generados encajan en cualquier metrópolis distópica. Adaptá el sufijo de ubicación al setting concreto (Night City, Seattle Metroplex, etc.)."
      },
      {
        q: "¿Puedo usar un mercado negro generado en una historia ambientada en el siglo XIX?",
        a: "Sí, pero filtrá los modificadores. Evitá <em>Subsuelo Cinco</em> u <em>Octavo Anillo</em> que suenan a sci-fi. Quedate con <em>Zoco</em>, <em>Pasaje</em>, <em>Bodega</em> o <em>Trastienda</em>. Los mercados negros son tan viejos como las leyes; solo cambia la mercadería."
      },
      {
        q: "¿Cuántos vendedores debe tener el mercado para sentirse vivo?",
        a: "Con cinco vendedores nombrados y otros quince genéricos en segundo plano alcanza para la mayoría de las narrativas. Si el mercado es un escenario central, expandí a diez con nombre. Más allá se vuelve difícil de gestionar para el lector o jugador."
      },
      {
        q: "¿Cómo evito que mi mercado negro suene cliché?",
        a: "Mezclá registros inesperados. En lugar del clásico <em>callejón sucio del puerto</em>, probá <em>la Galería del Tío Saito en el Mall Abandonado</em>. Lo prohibido en lugares cotidianos genera más tensión que en localizaciones obvias. Lo cotidiano corrompido espanta más que lo siempre oscuro."
      }
    ]
  },
  en: {
    pageTitle: "Black Market Name Generator | Genfy",
    metaDesc: "Create black market, clandestine bazaar and smuggling hub names for your noir, cyberpunk and urban roleplay campaigns. Names dripping with neon and damp.",
    h1: "Black Market Name Generator",
    intro: "Invent clandestine souks, illegal bazaars and dirty exchange points for your noir and cyberpunk narratives. Names that smell of damp concrete and neon.",
    tag: "Worldbuilding",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "type",
        label: "Place type",
        items: [
          "The Bazaar of", "The Market of", "The Souk of", "The Fair of", "The Stalls of",
          "The Passage of", "The Gallery of", "The Basement of", "The Subfloor of", "The Backroom of",
          "The Alley of", "The Corner of", "The Platform of", "The Dock of", "The Depot of",
          "The Warehouse of", "The Cellar of", "The Hangar of", "The Station of", "The Pier of",
          "The Tunnel of", "The Catacomb of", "The Hideout of", "The Kitchen of", "The Drop of",
          "The Cantina of", "The Storage of", "The Trench of", "The Hollow of", "The Den of"
        ]
      },
      {
        id: "name",
        label: "Central name",
        items: [
          "Madame Zero", "the One-Eyed", "the Three Fingers", "the Widow", "Fat Tang",
          "the Ivan Brothers", "the Korean", "Uncle Saito", "Witch Eva", "Don Carbon",
          "the Limp", "the Handless", "the Whispers", "the Butcher", "the Tailor",
          "the Faceless Sellers", "the Chinese of the Eighth", "the Red", "Papa Wolf", "the Shadow",
          "the Nameless", "the Blind", "Broken Thumbs", "the Russian", "Doctor Crow",
          "Mama Herb", "the Tiger", "the Ojeda Twins", "the Boss", "the Hangman"
        ]
      },
      {
        id: "location",
        label: "Location",
        items: [
          "of the Subway", "of the Eighth Ring", "of the Red Line", "of the Old Port", "of the Outskirts",
          "of Chinatown", "of the River", "of the Ghost Station", "of Tunnel 9", "of the Abandoned Mall",
          "of the North Border", "of the Lower District", "of South Cemetery", "of District 7", "of the Industrial Sector",
          "of the Edge", "of the Old Airport", "of Subfloor Five", "of the Red Zone", "of the Blackout",
          "of the Dead River", "of Twenty-Second Street", "of the Backyard", "of the Old Hospital", "of Warehouse 14",
          "of the Nameless Square", "of the Closed Park", "of the Dead Track", "of the Burnt Building", "of the Fallen Bridge"
        ]
      },
      {
        id: "tone",
        label: "Tone",
        items: [
          "Black", "Dirty", "Forgotten", "Cursed", "Hollow",
          "Broken", "Wet", "Trembling", "Bent", "Bleeding",
          "Blind", "Mute", "Drowned", "Flooded", "Putrid",
          "Cold", "Damp", "Burned", "Acid", "Toxic",
          "Bastard", "False", "Marked", "Splintered", "Frayed",
          "Narrow", "Low", "Deep", "Stagnant", "Ruined"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How to name a black market that feels real",
        body: "<p>Memorable fictional black markets share one rule: they have an owner. <em>District 9</em>, <em>Kowloon Walled City</em> or <em>Tatooine's bazaar</em> exist because someone runs them. When inventing yours, start with the boss's name. <strong>The Bazaar of Madame Zero of the Eighth Ring</strong> already implies a story: there were seven rings before, a woman lost everything, there's an operating code.</p><p>Second principle: precise geography. A clandestine market that exists anywhere doesn't exist. Anchor it to concrete infrastructure: abandoned platform, mall basement, port warehouse, service tunnel. Architectural specificity gives verisimilitude. If your player or reader can picture the low ceiling, flickering lights and damp smell, you've won.</p><p>Third ingredient: cultural transgression. Black markets are interesting because they sell what's forbidden in that world: in Blade Runner, replicants; in William Gibson, deck-runners and software; in fantasy stories, relics and noble intelligence. Define what's sold in yours before fixing the name and check if the name evokes it: <strong>The Kitchen of Doctor Crow</strong> suggests murky biochemistry; <strong>The Hangar of the Tiger of the Old Airport</strong> suggests weapons and vehicles.</p>"
      },
      {
        h2: "Applications in cyberpunk, noir and urban fantasy",
        body: "<p>In cyberpunk, black markets are vertical architectures. <em>Neuromancer</em> and <em>Snow Crash</em> stack them in towers and walkways. Generate names with suffixes mentioning levels: <em>Subfloor Five, Eighth Ring, Sector 7</em>. If your campaign is Cyberpunk RED or Shadowrun, anchor each market to a specific fixer and add a rumor: what's sold only there, which faction protects it, what danger newcomers face.</p><p>In noir and urban thriller (style of <em>Better Call Saul</em>, <em>The Wire</em> or <em>Gomorrah</em>), black markets operate inside everyday places: a laundromat, a chicken shop, a roadside bar. Generate apparently innocuous names and add your twist. <em>The Cantina of Mama Herb of the Backyard</em> sounds like family lunch and illegal goods storage simultaneously. That ambiguity is the genre's heart.</p><p>In urban fantasy or alternate history, black markets adopt mutated medieval fair tones. Names with prefixes like <em>Souk</em>, <em>Passage</em> or <em>Gallery</em> work. For Dishonored or Bloodborne style campaigns, add dark modifiers: <em>Bleeding, Drowned, Marked</em>. Register coherence matters: don't mix medieval <em>Souk</em> with modern <em>Subfloor Five</em> in the same name, unless your world justifies it.</p>"
      },
      {
        h2: "Typical mistakes when designing a clandestine market",
        body: "<p>Mistake 1: making it too big. A believable black market has between twenty and one hundred stalls, not a thousand. Scale it to mall size and it loses clandestinity. The forbidden needs corner, not expansion. Mistake 2: forgetting economics. Who pays the informal rent? Is there protection from three factions? What percentage does the owner take? Without these answers, the market is set dressing.</p><p>Mistake 3: nameless geography. <em>The Market of Doctor Crow</em> alone doesn't work. Without location, it could be anywhere, which means nowhere. Always close with a spatial anchor: <em>of Warehouse 14, of the Old Airport, of Subfloor Five</em>.</p><p>Mistake 4: using it only as a shop. The market is narrative scenery. It must have at least three points: guarded entrance, commercial core, secret exit. Sketch a rough map before the session or chapter. When player or reader enters, things must happen beyond shopping: encounters, betrayals, rumors. If it's just an object catalog, you're underusing it. Think noir scenario where every stall hides a secret.</p>"
      },
      {
        h2: "From name list to full ecosystem",
        body: "<p>Once you've chosen the name, define five recurring vendors with nickname, specialty and weakness. For example, in <strong>The Bazaar of Madame Zero</strong>: One-Eyed Ivan sells used cybernetics and hates Datacorp runners; the Korean offers fake documents only after three visits; Don Carbon trades legacy weaponry and demands favors instead of cash.</p><p>Add three internal rules the market enforces. <em>Children aren't charged</em>, <em>last names aren't asked</em>, <em>fights are settled outside</em>. These unwritten rules give cultural texture and enable conflict when a character breaks them. <em>John Wick</em> built its whole saga on the Continental's code; your market can have its own.</p><p>Reserve a planned betrayal to reveal mid-campaign or mid-novel. The market seems neutral, but actually a vendor passes intel to an enemy faction, or the owner is selling the venue to a corporation. That latent betrayal turns the setting into a time bomb. The longer characters stay there, the juicier the final explosion.</p>"
      }
    ],
    faq: [
      {
        q: "Does this generator work for Cyberpunk RED and Shadowrun campaigns?",
        a: "Yes, especially for street-level play where runners need fixers and vendors. Generated names fit any dystopian metropolis. Adapt the location suffix to your specific setting (Night City, Seattle Metroplex, etc.)."
      },
      {
        q: "Can I use a generated black market in a 19th-century story?",
        a: "Yes, but filter modifiers. Avoid <em>Subfloor Five</em> or <em>Eighth Ring</em> which sound sci-fi. Stick to <em>Souk</em>, <em>Passage</em>, <em>Cellar</em> or <em>Backroom</em>. Black markets are as old as laws; only the merchandise changes."
      },
      {
        q: "How many vendors should the market have to feel alive?",
        a: "Five named vendors plus fifteen generic background ones suffice for most narratives. If the market is central scenery, expand to ten named. Beyond that becomes hard to manage for reader or player."
      },
      {
        q: "How do I avoid my black market sounding cliché?",
        a: "Mix unexpected registers. Instead of the classic <em>dirty port alley</em>, try <em>The Gallery of Uncle Saito in the Abandoned Mall</em>. The forbidden in everyday places generates more tension than in obvious locations. Corrupted mundanity scares more than perpetually dark."
      }
    ]
  }
};
