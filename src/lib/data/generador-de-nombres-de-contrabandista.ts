import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-contrabandista", en: "smuggler-name-generator" },
  category: "fun",
  emoji: "📦",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Contrabandista | Genfy",
    metaDesc: "Creá nombres de contrabandistas, traficantes y runners del underworld con aire de peligro calculado para tus historias y campañas de rol.",
    h1: "Generador de Nombres de Contrabandista",
    intro: "Inventá runners y traficantes para tus historias de espionaje, cyberpunk o smuggling clásico. Apodos discretos pero con olor a frontera caliente.",
    tag: "Worldbuilding",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "role",
        label: "Rol",
        items: [
          "Runner", "Pasador", "Pasadora", "Mula", "Cargador",
          "Cargadora", "Traficante", "Coyote", "Coyota", "Conductor Sin Luces",
          "Conductora Sin Luces", "Mensajera", "Mensajero", "Sombra", "Suelta",
          "Suelto", "Cruzante", "Trapacero", "Trapacera", "Bagayero",
          "Bagayera", "Repartidor Negro", "Repartidora Negra", "Pasamano", "Filtrante",
          "Burrera", "Burrero", "Capataz Sucio", "Capataza Sucia", "Atajacaminos"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Lupe", "Mauro", "Ada", "Pablo", "Yusra",
          "Tito", "Greta", "Boyd", "Mira", "Reza",
          "Soraya", "Domingo", "Aza", "Vohl", "Onega",
          "Cobb", "Hana", "Iván", "Saskia", "Yago",
          "Olga", "Saito", "Tula", "Vance", "Magda",
          "Knell", "Bashir", "Pell", "Sable", "Riggs"
        ]
      },
      {
        id: "trick",
        label: "Truco",
        items: [
          "Mano Suelta", "Pies de Gato", "Sombra Corta", "Doble Fondo", "Pasaporte Roto",
          "Cuenta Doble", "Lengua de Plomo", "Cargo Hueco", "Recibo Falso", "Sello Limpio",
          "Maleta Triste", "Bolso Profundo", "Caja Tonta", "Pies Mojados", "Pasillo Largo",
          "Aduana Suave", "Veinte Litros", "Carga Liviana", "Cinco Cajas", "Diez Kilos",
          "Sin Aliento", "Aliento Frío", "Sangre Fría", "Mirada Plana", "Manos Vacías",
          "Bolsillo Doble", "Forro Hueco", "Costura Falsa", "Etiqueta Cambiada", "Marca Borrada"
        ]
      },
      {
        id: "route",
        label: "Ruta",
        items: [
          "del Cruce Norte", "de la Línea 7", "del Río Sin Nombre", "del Sendero del Lunes", "del Bajo Caraza",
          "del Paso Frío", "del Túnel Caído", "del Puente Bastardo", "del Cabo Cero", "de la Aduana Floja",
          "del Subsuelo Tres", "del Hangar 12", "del Patio Trasero", "del Borde Sur", "del Galpón Cuatro",
          "de las Vías Muertas", "del Anden Cinco", "del Almacén Inverso", "del Sello Verde", "del Sello Roto",
          "del Mercado Cerrado", "del Vuelo Nocturno", "del Camión Lento", "del Carguero Ciego", "del Convoy Tres",
          "del Cruce Doble", "del Distrito 9", "del Faro Apagado", "del Camino Largo", "del Atajo del Diablo"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo construir un contrabandista verosímil",
        body: "<p>El contrabandista de ficción se diferencia del traficante porque su oficio es el cruce, no el producto. <em>Han Solo</em>, <em>Omar Little</em>, <em>Mike Ehrmantraut</em>: no importa tanto qué llevan; importa cómo, por dónde y a quién esquivan. El nombre debe sugerir esa expertise específica. <strong>Pasador Tito Pies de Gato del Sendero del Lunes</strong> ya implica ruta fija, técnica de movimiento silencioso y ventana horaria.</p><p>Los apodos profesionales del rubro son técnicos, no épicos. <em>Pies de Gato</em>, <em>Doble Fondo</em>, <em>Cargo Hueco</em>: cada uno describe un método de operación. Un buen contrabandista en novela o juego de rol no tiene un apodo decorativo, tiene una marca registrada operativa. Cuando otros runners lo mencionan, dicen <em>ese trabaja con doble fondo</em>, no <em>ese es el más malo</em>.</p><p>La ruta es el alma del nombre. <em>del Cruce Norte</em>, <em>del Túnel Caído</em>, <em>del Hangar 12</em>: el contrabandista pertenece a una geografía concreta y la conoce mejor que sus enemigos. Cuando inventes el tuyo, dibujá el mapa primero. ¿Por dónde entra, por dónde sale, en qué punto se esconde si la cosa se complica? Sin esos tres puntos, el contrabandista es decoración. Con ellos, es un personaje funcional dentro de la trama.</p>"
      },
      {
        h2: "Aplicaciones por género: del western al cyberpunk",
        body: "<p>En narrativas western y noir histórico, los contrabandistas mueven alcohol, armas, gente. Generá nombres con prefijos como <em>Coyote</em>, <em>Bagayero</em> o <em>Cruzante</em> y rutas terrestres concretas. <em>The Sisters Brothers</em> y <em>No Country for Old Men</em> trabajan ese tono. La ruta es polvorienta, la nave es una camioneta, la mercadería compromete vidas.</p><p>En cyberpunk, los runners mueven datos, órganos, identidades. El nombre incluye registro corporativo (Pasamano, Filtrante) y rutas digitales o subterráneas (del Subsuelo Tres, del Distrito 9). Para <em>Shadowrun</em> y <em>Cyberpunk RED</em>, generá tres runners con especialidades distintas: uno mueve hardware, uno mueve gente, uno mueve información. El grupo de PJ contrata según la misión.</p><p>En space opera (<em>Firefly</em>, <em>Star Wars</em>, <em>The Expanse</em>), el contrabandista es figura romántica. Generá nombres con rutas planetarias (del Cabo Cero, del Borde Sur) y trucos físicos creíbles (Doble Fondo, Costura Falsa). El truco aquí es no caer en parodia: si tu contrabandista solo tiene nave rápida y carga legal-ilegal, está repetido cien veces. Sumá un detalle único: un código moral, una deuda con el sindicato local, una nave defectuosa con nombre propio.</p>"
      },
      {
        h2: "Errores frecuentes al diseñar contrabandistas",
        body: "<p>Error 1: contrabandista sin economía. ¿Cuánto cobra por kilo, por carga, por viaje? ¿Le paga la mafia, una corporación, un cliente individual? Sin números aproximados, el oficio es decorativo. <em>Better Call Saul</em> hace este trabajo bien: cada operación tiene precio, riesgo y porcentaje. Tu contrabandista necesita lo mismo.</p><p>Error 2: contrabandista solitario absoluto. Nadie cruza fronteras solo. Definí al menos tres aliados de confianza: el aduanero comprado, el mecánico que repara la nave a las 3 AM, el receptor en destino. Sin esa red, el contrabandista no funciona ni en la primera operación. La red también permite traiciones: alguien de adentro siempre puede vender al protagonista.</p><p>Error 3: contrabandista sin pasado. ¿Por qué empezó en el rubro? Las opciones son acotadas: deuda heredada, talento natural, traición laboral previa, ideología (contrabando como resistencia política). Cada origen genera personalidad distinta. <em>El que entra por deuda</em> es diferente al <em>que entra por convicción</em>. Cuando inventes tu contrabandista, definí la entrada antes que el presente.</p>"
      },
      {
        h2: "Del nombre individual a la red de contrabando completa",
        body: "<p>Una vez generado el contrabandista, definí su red. Empezá por el cliente principal (¿quién paga la mayoría de los trabajos?), seguí por el rival operativo (¿quién opera en la misma ruta?), terminá con el enemigo de las fuerzas de seguridad (¿qué oficial específico lo persigue?). Esa trinidad estructura todas las tramas posibles.</p><p>Sumá tres ubicaciones recurrentes: el bar donde negocia, el galpón donde guarda mercadería, la salida de emergencia. Estos lugares se vuelven escenarios habituales del personaje. Cuando un escritor o GM repite locaciones, los lectores y jugadores construyen familiaridad con el mundo. <em>The Wire</em> trabaja sobre eso: las esquinas se vuelven personajes.</p><p>Reservá una operación grande pendiente como Sword of Damocles. El contrabandista vive del trabajo cotidiano pero hay una entrega imposible que cambiaría su vida: retirarse, pagar deuda final, vengarse. Esa operación pendiente es el motor narrativo. El generador te da el nombre; vos diseñás el último golpe que cierra su historia.</p>"
      }
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre un contrabandista y un narcotraficante?",
        a: "El narcotraficante se especializa en drogas y suele ser parte de una organización vertical. El contrabandista mueve cualquier mercancía prohibida (armas, gente, datos, productos con aranceles altos) y suele operar como freelance o pequeño grupo. La frontera es porosa pero útil narrativamente."
      },
      {
        q: "¿Sirven estos nombres para historias contemporáneas no fantásticas?",
        a: "Sí. Filtrá los sufijos sci-fi (Subsuelo Tres, Distrito 9) y quedate con rutas terrestres (Cruce Norte, Túnel Caído). Los apodos técnicos (Doble Fondo, Pies de Gato) funcionan bien en thrillers contemporáneos al estilo <em>Sicario</em> o <em>Narcos</em>."
      },
      {
        q: "¿Cómo evito clichés del género?",
        a: "Evitá el contrabandista 'noble salvaje' que solo roba a corporaciones y nunca lastima inocentes. La realidad operativa es más sucia. Tu personaje gana profundidad si comete errores costosos para terceros: una operación que sale mal, un chico que pierde a un padre, un colateral incómodo."
      },
      {
        q: "¿Puedo usar el generador para crear redes enteras de contrabando?",
        a: "Sí. Generá tandas de 30 y elegí cinco runners que se complementen: uno terrestre, uno aéreo, uno marítimo, uno digital, uno de personas. Asignales la misma ruta principal para que la red tenga coherencia geográfica. Eso te da una organización plausible para una novela larga o campaña de rol extendida."
      }
    ]
  },
  en: {
    pageTitle: "Smuggler Name Generator | Genfy",
    metaDesc: "Create smuggler, trafficker and underworld runner names with calculated danger air for your stories and roleplay campaigns.",
    h1: "Smuggler Name Generator",
    intro: "Invent runners and traffickers for spy stories, cyberpunk or classic smuggling. Discreet nicknames but with the smell of hot border air.",
    tag: "Worldbuilding",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "role",
        label: "Role",
        items: [
          "Runner", "Mule", "Carrier", "Trafficker", "Coyote",
          "Lights-Out Driver", "Courier", "Shadow", "Loose", "Crosser",
          "Smuggler", "Hauler", "Black Delivery", "Handoff", "Filter",
          "Bagger", "Dirty Foreman", "Roadcutter", "Border Walker", "Backwater",
          "Edge Runner", "Cargo Ghost", "Quiet Pilot", "Side Door", "Slip",
          "Cinch", "Crewman", "Crewwoman", "Holder", "Floater"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Lupe", "Mauro", "Ada", "Pablo", "Yusra",
          "Tito", "Greta", "Boyd", "Mira", "Reza",
          "Soraya", "Domingo", "Aza", "Vohl", "Onega",
          "Cobb", "Hana", "Ivan", "Saskia", "Yago",
          "Olga", "Saito", "Tula", "Vance", "Magda",
          "Knell", "Bashir", "Pell", "Sable", "Riggs"
        ]
      },
      {
        id: "trick",
        label: "Trick",
        items: [
          "Loose Hand", "Cat Feet", "Short Shadow", "Double Bottom", "Broken Passport",
          "Double Count", "Lead Tongue", "Hollow Cargo", "False Receipt", "Clean Seal",
          "Sad Suitcase", "Deep Bag", "Dumb Box", "Wet Feet", "Long Hallway",
          "Soft Customs", "Twenty Liters", "Light Load", "Five Crates", "Ten Kilos",
          "No Breath", "Cold Breath", "Cold Blood", "Flat Stare", "Empty Hands",
          "Double Pocket", "Hollow Lining", "False Stitch", "Switched Label", "Erased Brand"
        ]
      },
      {
        id: "route",
        label: "Route",
        items: [
          "of the North Crossing", "of Line 7", "of the Nameless River", "of the Monday Trail", "of Lower Caraza",
          "of the Cold Pass", "of the Fallen Tunnel", "of the Bastard Bridge", "of Cape Zero", "of the Loose Customs",
          "of Subfloor Three", "of Hangar 12", "of the Backyard", "of the South Edge", "of Warehouse Four",
          "of the Dead Tracks", "of Platform Five", "of the Reverse Storage", "of the Green Seal", "of the Broken Seal",
          "of the Closed Market", "of the Night Flight", "of the Slow Truck", "of the Blind Freighter", "of Convoy Three",
          "of the Double Crossing", "of District 9", "of the Dark Beacon", "of the Long Path", "of the Devil's Shortcut"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How to build a credible smuggler",
        body: "<p>The fictional smuggler differs from the trafficker because their craft is the crossing, not the product. <em>Han Solo</em>, <em>Omar Little</em>, <em>Mike Ehrmantraut</em>: it doesn't matter so much what they carry; what matters is how, where and whom they evade. The name must suggest that specific expertise. <strong>Runner Tito Cat Feet of the Monday Trail</strong> already implies fixed route, silent movement technique and time window.</p><p>Trade nicknames are technical, not epic. <em>Cat Feet</em>, <em>Double Bottom</em>, <em>Hollow Cargo</em>: each describes an operating method. A good smuggler in novel or roleplay doesn't have a decorative nickname, has an operational trademark. When other runners mention them, they say <em>that one works with double bottom</em>, not <em>that one's the meanest</em>.</p><p>The route is the soul of the name. <em>of the North Crossing</em>, <em>of the Fallen Tunnel</em>, <em>of Hangar 12</em>: the smuggler belongs to concrete geography and knows it better than their enemies. When you invent yours, sketch the map first. Where do they enter, exit, hide if things complicate? Without those three points, the smuggler is decoration. With them, a functional character within plot.</p>"
      },
      {
        h2: "Genre applications: from western to cyberpunk",
        body: "<p>In western and historical noir narratives, smugglers move alcohol, weapons, people. Generate names with prefixes like <em>Coyote</em>, <em>Hauler</em> or <em>Crosser</em> and concrete land routes. <em>The Sisters Brothers</em> and <em>No Country for Old Men</em> work that tone. Route is dusty, vehicle is a pickup, merchandise compromises lives.</p><p>In cyberpunk, runners move data, organs, identities. The name includes corporate register (Handoff, Filter) and digital or underground routes (of Subfloor Three, of District 9). For <em>Shadowrun</em> and <em>Cyberpunk RED</em>, generate three runners with distinct specialties: one moves hardware, one moves people, one moves information. PC parties hire by mission.</p><p>In space opera (<em>Firefly</em>, <em>Star Wars</em>, <em>The Expanse</em>), the smuggler is a romantic figure. Generate names with planetary routes (of Cape Zero, of the South Edge) and credible physical tricks (Double Bottom, False Stitch). The trick here is avoiding parody: if your smuggler only has a fast ship and legal-illegal cargo, it's been done a hundred times. Add a unique detail: moral code, debt to local syndicate, defective ship with proper name.</p>"
      },
      {
        h2: "Common mistakes when designing smugglers",
        body: "<p>Mistake 1: smuggler without economy. How much per kilo, per cargo, per trip? Does the mafia pay, a corporation, individual client? Without approximate numbers, the trade is decorative. <em>Better Call Saul</em> does this well: each operation has price, risk and percentage. Your smuggler needs the same.</p><p>Mistake 2: absolute lone smuggler. Nobody crosses borders alone. Define at least three trusted allies: the bought customs officer, the mechanic repairing the ship at 3 AM, the receiver at destination. Without that network, the smuggler doesn't work even on the first operation. The network also enables betrayals: someone inside can always sell out the protagonist.</p><p>Mistake 3: smuggler without past. Why did they enter the trade? Options are limited: inherited debt, natural talent, prior workplace betrayal, ideology (smuggling as political resistance). Each origin generates distinct personality. <em>The one who enters by debt</em> is different from <em>the one who enters by conviction</em>. When inventing your smuggler, define the entry before the present.</p>"
      },
      {
        h2: "From individual name to full smuggling network",
        body: "<p>Once you've generated the smuggler, define their network. Start with the main client (who pays most jobs?), continue with the operational rival (who works the same route?), end with the enforcement enemy (which specific officer hunts them?). That trinity structures all possible plots.</p><p>Add three recurring locations: the bar where they negotiate, the warehouse where they store goods, the emergency exit. These places become habitual character settings. When a writer or GM repeats locations, readers and players build world familiarity. <em>The Wire</em> works on that: corners become characters.</p><p>Reserve a pending big operation as Sword of Damocles. The smuggler lives off daily work but there's an impossible delivery that would change their life: retire, pay final debt, take revenge. That pending operation is the narrative engine. The generator gives you the name; you design the last hit that closes their story.</p>"
      }
    ],
    faq: [
      {
        q: "What's the difference between a smuggler and a drug trafficker?",
        a: "The drug trafficker specializes in narcotics and is usually part of a vertical organization. The smuggler moves any prohibited goods (weapons, people, data, high-tariff products) and tends to operate as freelance or small group. The boundary is porous but narratively useful."
      },
      {
        q: "Do these names work for non-fantastic contemporary stories?",
        a: "Yes. Filter sci-fi suffixes (Subfloor Three, District 9) and stick to land routes (North Crossing, Fallen Tunnel). Technical nicknames (Double Bottom, Cat Feet) work well in contemporary thrillers in the style of <em>Sicario</em> or <em>Narcos</em>."
      },
      {
        q: "How do I avoid genre clichés?",
        a: "Avoid the 'noble savage' smuggler who only steals from corporations and never harms innocents. Operational reality is dirtier. Your character gains depth if they make costly mistakes for third parties: an operation gone wrong, a kid who loses a parent, an uncomfortable collateral."
      },
      {
        q: "Can I use the generator to create entire smuggling networks?",
        a: "Yes. Generate batches of 30 and pick five runners that complement each other: one ground, one air, one maritime, one digital, one human. Assign them the same main route so the network has geographic coherence. That gives you a plausible organization for a long novel or extended campaign."
      }
    ]
  }
};
