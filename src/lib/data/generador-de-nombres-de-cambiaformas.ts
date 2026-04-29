import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-cambiaformas", en: "shapeshifter-name-generator" },
  category: "fun",
  emoji: "🦊",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Cambiaformas | Genfy",
    metaDesc: "Creá nombres fluidos para cambiaformas, metamorfos y criaturas de identidad mutable. Para urban fantasy, folklore moderno y campañas de rol.",
    h1: "Generador de Nombres de Cambiaformas",
    intro: "Inventá criaturas de identidad mutable, druidas metamorfos y kitsune urbanos. Nombres que mezclan lo humano con lo bestial. Para urban fantasy y folklore.",
    tag: "Fantasía",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "kind",
        label: "Linaje",
        items: [
          "Hijo de la Marea", "Hija de la Marea", "Niño Zorro", "Niña Zorro", "Niño Cuervo",
          "Niña Cuervo", "Hija del Lobo", "Hijo del Lobo", "Doblepiel", "Triple-Forma",
          "Pielsuelta", "Pielsuelto", "Sin-Forma", "Cien-Caras", "Skinwalker",
          "Renacida", "Renacido", "Niebla", "Niño Cierva", "Niña Cierva",
          "Cambiante Mayor", "Cambiante Menor", "Selkie", "Kitsune", "Tanuki",
          "Hijo del Topo", "Hija del Topo", "Niño Garza", "Niña Garza", "Volador-Suelo"
        ]
      },
      {
        id: "first",
        label: "Nombre humano",
        items: [
          "Mira", "Tarn", "Lupe", "Vohl", "Selene",
          "Idris", "Ozim", "Saskia", "Reza", "Nadwen",
          "Yara", "Pell", "Tarrik", "Vasha", "Brennan",
          "Sigrid", "Iliana", "Cassian", "Mireille", "Anika",
          "Yusra", "Onega", "Magda", "Talin", "Bashir",
          "Aurelia", "Knell", "Sable", "Drosk", "Korren"
        ]
      },
      {
        id: "trait",
        label: "Marca",
        items: [
          "Ojos de Zorro", "Sombra Animal", "Pelo de Marea", "Andar de Lobo", "Voz Doble",
          "Sin Reflejo", "Reflejo Cambiante", "Olor de Bosque", "Risa Tarda", "Pasos Sin Sonido",
          "Tres Cicatrices", "Marca de Costilla", "Pulso Lento", "Pupila Rasgada", "Sonrisa Larga",
          "Manos de Garra", "Pulgar Distinto", "Cuello Largo", "Pies Mojados", "Aliento de Niebla",
          "Tres Sombras", "Doble Pulso", "Pelo Cambiante", "Voz Animal", "Boca de Plata",
          "Ojo de Plata", "Lengua Bífida", "Diente Largo", "Uña Negra", "Marca del Río"
        ]
      },
      {
        id: "habitat",
        label: "Hábitat",
        items: [
          "del Bosque del Sur", "del Río Sin Nombre", "de la Tundra Bastarda", "del Glaciar del Cuervo", "del Mercado del Octavo Anillo",
          "del Suburbio del Lobo", "del Distrito Hueco", "del Subte de la Línea Roja", "del Pantano del Hueso", "del Bosque Sin Sol",
          "del Cabo del Lobo", "de los Acantilados del Cuervo", "del Hospital Cerrado", "del Patio Trasero", "del Almacén Abandonado",
          "del Mall Hueco", "del Conurbano Norte", "del Río Helado", "de las Ruinas del Sur", "del Faro Apagado",
          "del Edificio Quemado", "del Monte Bajo", "del Lago Frío", "de la Isla Bastarda", "del Bosque del Trueno",
          "del Subsuelo Tres", "del Cementerio del Sur", "del Galpón 14", "del Distrito 9", "de la Estación Fantasma"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomía de un nombre de cambiaformas",
        body: "<p>El cambiaformas en folklore real (kitsune japonesas, selkies celtas, skinwalkers navajo, naga-kanya hindúes) lleva siempre un nombre con doble capa: el nombre humano y la marca de su otra naturaleza. La fórmula que mejor funciona en ficción es linaje + nombre humano + marca física + hábitat. <strong>Hija del Lobo Mira Ojos de Zorro del Suburbio del Lobo</strong> ya carga genealogía, identidad personal, signo del cambio y geografía cultural.</p><p>La marca debe ser sutil pero observable. Los cambiaformas memorables en literatura tienen señales discretas: ojos que cambian de color con la luz (kitsune), pies siempre húmedos (selkies), sombra animal cuando hay luna (lobos). Generá la marca pensando en qué notaría un personaje cercano tras meses de convivencia, no qué grita la criatura en su forma transformada. <em>Sin Reflejo</em> es marca interna; <em>Marca del Río</em> es signo geográfico-corporal.</p><p>El hábitat ancla al cambiaformas a una geografía concreta. En folklore, cada cambiaformas tiene territorio: las kitsune frecuentan templos abandonados, los selkies viven en costas norteñas, los werewolves de Europa Oriental moran en bosques densos. En urban fantasy moderno (estilo Patricia Briggs, Jim Butcher), los cambiaformas se adaptan a hábitat urbano: parques, suburbios, distritos abandonados. Mantené la coherencia entre criatura y hábitat.</p>"
      },
      {
        h2: "Aplicaciones por género: folklore, urban fantasy, D&D",
        body: "<p>En folklore reinventado (estilo Neil Gaiman, Charles de Lint), los cambiaformas son puente entre lo cotidiano y lo mítico. Generá nombres con linaje folklórico explícito (kitsune, selkie, tanuki) y hábitat urbano contemporáneo. Esa fricción entre tradición ancestral y contexto moderno es la firma del subgénero. <em>American Gods</em> trabaja exactamente sobre ese cruce.</p><p>En urban fantasy con paquetes (paquetes de hombres lobo en estilo Mercy Thompson, Anita Blake), generá tres cambiaformas del mismo grupo con jerarquía interna: alfa, beta, omega. Cada uno tiene nombre humano de uso público, marca distintiva propia y rol social en el paquete. Esa estructura permite tramas internas (lucha por liderazgo, exclusión, integración del foráneo) además de las externas (caza humana, conflicto con otras facciones).</p><p>En D&D y Pathfinder, los druidas con Wild Shape y los cambiaformas naturales (changelings de Eberron) usan estos nombres para anclar identidad. Generá nombres que el personaje use en forma humana, complementando con un apodo bestial que solo aparece en transformación. <em>Mira Ojos de Zorro</em> en humana, <em>Sombra-Tres-Patas</em> en zorro. La duplicidad onomástica refleja la duplicidad de identidad.</p>"
      },
      {
        h2: "Errores comunes al diseñar cambiaformas",
        body: "<p>Error 1: cambiaformas sin costo. Si tu personaje cambia de forma sin consecuencias, perdés tensión. La transformación debe doler, agotar o exigir. Los kitsune del folklore pierden agudeza visual tras transformaciones largas; los werewolves clásicos sufren amnesia parcial; los selkies que pierden su piel quedan atrapados en forma humana. Diseñá tu costo específico antes de la primera escena de cambio.</p><p>Error 2: cambiaformas sin comunidad. En el folklore real, los cambiaformas rara vez son solitarios. Pertenecen a clanes, paquetes, familias extensas, redes de apoyo. Si tu personaje opera completamente solo, falta verosimilitud cultural. Diseñá tres parientes o aliados de la misma especie: un mentor que enseñó a controlar la transformación, un rival generacional, un familiar que rechaza la naturaleza compartida.</p><p>Error 3: cambiaformas sin tabú interno. Toda cultura cambiaformante tiene reglas internas: <em>no transformarse en presencia de mortales no iniciados</em>, <em>no comer carne humana</em>, <em>no transformar el rostro de un ser querido</em>. Esas reglas internas dan profundidad cultural. Cuando un cambiaformas las quiebra, hay consecuencias narrativas serias. Sin tabúes, el personaje opera en vacío ético.</p>"
      },
      {
        h2: "Del individuo al ecosistema cambiante",
        body: "<p>Una vez generado tu cambiaformas, definí las tres formas que adopta. Primera, la forma humana cotidiana (con biografía falsa o real). Segunda, la forma animal completa (con detalles físicos específicos: pelaje, tamaño, comportamiento característico). Tercera, una forma híbrida intermedia que rara vez asume y solo en circunstancias extremas. Esa tercera forma es el clímax visual del personaje cuando la trama lo exige.</p><p>Diseñá el ritual de transformación. ¿Cuánto tiempo lleva? ¿Es voluntario o desencadenado por luna llena, emoción extrema, peligro físico? ¿Qué necesita después: descanso, comida específica, agua? Estos detalles operativos diferencian al cambiaformas serio del comodín mágico. <em>Patricia Briggs</em> trabaja con muchísimo detalle estos rituales.</p><p>Reservá una transformación irreversible posible. Algunos cambiaformas, tras condiciones específicas (matar a un humano en forma animal, transformarse durante eclipse, romper un tabú sagrado), quedan atrapados permanentemente en una forma. Esa amenaza latente es la espada de Damocles. Si el lector o jugador sabe que existe el riesgo, cada transformación tiene peso extra. Cuando finalmente el personaje queda atrapado, el clímax narrativo es devastador.</p>"
      }
    ],
    faq: [
      {
        q: "¿Sirve este generador para personajes druidas con Wild Shape en D&D?",
        a: "Sí, especialmente para druidas con identidad cultural fuerte (druidas de circuit moonlit, druidas de tribu específica). Los druidas estándar pueden usar nombre humano normal y dejar el linaje de cambiaformas para druidas con backstory más exótica."
      },
      {
        q: "¿Cómo diferencio un cambiaformas voluntario de uno maldito?",
        a: "El voluntario nace con la habilidad y la controla con entrenamiento; tiene comunidad y tradición. El maldito recibió la condición por trauma, mordedura, hechizo o pacto involuntario; suele estar aislado y carecer de mentor. Las dos categorías generan tonos narrativos distintos: orgullo cultural vs. tragedia personal."
      },
      {
        q: "¿Puedo usar estos nombres para criaturas no antropomorfas?",
        a: "Sí, con ajustes. Si tu cambiaformas es completamente bestial sin forma humana, descartá el nombre humano del generador y quedate con linaje + marca + hábitat. <em>Hija del Lobo Ojos de Zorro del Bosque del Trueno</em> funciona como nombre puramente folklórico."
      },
      {
        q: "¿Cómo evito el cliché del hombre lobo genérico?",
        a: "Diversificá especies. En lugar del hombre lobo europeo, probá kitsune japonesa, naga india, jaguar mesoamericano, selkie escocesa. Cada cultura aporta marcos rituales distintos. Generá tres cambiaformas de tres tradiciones distintas que coexistan en tu mundo: la fricción intercultural genera trama natural."
      }
    ]
  },
  en: {
    pageTitle: "Shapeshifter Name Generator | Genfy",
    metaDesc: "Create fluid names for shapeshifters, metamorphs and creatures of mutable identity. For urban fantasy, modern folklore and roleplay campaigns.",
    h1: "Shapeshifter Name Generator",
    intro: "Invent creatures of mutable identity, metamorph druids and urban kitsune. Names that blend the human with the bestial. For urban fantasy and folklore.",
    tag: "Fantasy",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "kind",
        label: "Lineage",
        items: [
          "Tide-Child", "Fox-Child", "Crow-Child", "Wolf-Daughter", "Wolf-Son",
          "Doubleskin", "Triple-Form", "Looseskin", "Formless", "Hundred-Faces",
          "Skinwalker", "Reborn", "Mistwalker", "Doe-Child", "Buck-Child",
          "Greater Changer", "Lesser Changer", "Selkie", "Kitsune", "Tanuki",
          "Mole-Child", "Heron-Child", "Earthflyer", "Pelt-Bearer", "River-Born",
          "Stag-Heir", "Boar-Heir", "Owl-Child", "Hare-Child", "Sable-Child"
        ]
      },
      {
        id: "first",
        label: "Human name",
        items: [
          "Mira", "Tarn", "Lupe", "Vohl", "Selene",
          "Idris", "Ozim", "Saskia", "Reza", "Nadwen",
          "Yara", "Pell", "Tarrik", "Vasha", "Brennan",
          "Sigrid", "Iliana", "Cassian", "Mireille", "Anika",
          "Yusra", "Onega", "Magda", "Talin", "Bashir",
          "Aurelia", "Knell", "Sable", "Drosk", "Korren"
        ]
      },
      {
        id: "trait",
        label: "Mark",
        items: [
          "Fox Eyes", "Animal Shadow", "Tide Hair", "Wolf Gait", "Double Voice",
          "No Reflection", "Shifting Reflection", "Forest Smell", "Late Laugh", "Soundless Step",
          "Three Scars", "Rib Mark", "Slow Pulse", "Slit Pupil", "Long Smile",
          "Claw Hands", "Distinct Thumb", "Long Neck", "Wet Feet", "Mist Breath",
          "Three Shadows", "Double Pulse", "Shifting Hair", "Animal Voice", "Silver Mouth",
          "Silver Eye", "Forked Tongue", "Long Tooth", "Black Nail", "River Mark"
        ]
      },
      {
        id: "habitat",
        label: "Habitat",
        items: [
          "of the South Forest", "of the Nameless River", "of the Bastard Tundra", "of the Crow Glacier", "of the Eighth Ring Market",
          "of the Wolf Suburb", "of the Hollow District", "of the Red Line Subway", "of the Bone Marsh", "of the Sunless Forest",
          "of the Wolf Cape", "of the Crow Cliffs", "of the Closed Hospital", "of the Backyard", "of the Abandoned Warehouse",
          "of the Hollow Mall", "of the North Outskirts", "of the Frozen River", "of the South Ruins", "of the Dark Beacon",
          "of the Burnt Building", "of the Low Mountain", "of the Cold Lake", "of the Bastard Island", "of the Thunder Forest",
          "of Subfloor Three", "of the South Cemetery", "of Warehouse 14", "of District 9", "of the Ghost Station"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomy of a shapeshifter name",
        body: "<p>The shapeshifter in real folklore (Japanese kitsune, Celtic selkies, Navajo skinwalkers, Hindu naga-kanya) always carries a double-layered name: the human name and the mark of their other nature. The formula that works best in fiction is lineage + human name + physical mark + habitat. <strong>Wolf-Daughter Mira Fox Eyes of the Wolf Suburb</strong> already carries genealogy, personal identity, sign of change and cultural geography.</p><p>The mark must be subtle but observable. Memorable shapeshifters in literature have discreet signs: eyes that change color with light (kitsune), feet always wet (selkies), animal shadow under moonlight (wolves). Generate the mark thinking about what a close character would notice after months of cohabitation, not what the creature shouts in transformed form. <em>No Reflection</em> is internal mark; <em>River Mark</em> is geographic-bodily sign.</p><p>The habitat anchors the shapeshifter to concrete geography. In folklore, every shapeshifter has territory: kitsune frequent abandoned temples, selkies live on northern coasts, Eastern European werewolves dwell in dense forests. In modern urban fantasy (style of Patricia Briggs, Jim Butcher), shapeshifters adapt to urban habitat: parks, suburbs, abandoned districts. Maintain coherence between creature and habitat.</p>"
      },
      {
        h2: "Applications by genre: folklore, urban fantasy, D&D",
        body: "<p>In reinvented folklore (style of Neil Gaiman, Charles de Lint), shapeshifters are bridge between everyday and mythic. Generate names with explicit folkloric lineage (kitsune, selkie, tanuki) and contemporary urban habitat. That friction between ancestral tradition and modern context is the subgenre's signature. <em>American Gods</em> works exactly on that crossover.</p><p>In urban fantasy with packs (werewolf packs in Mercy Thompson or Anita Blake style), generate three shapeshifters from the same group with internal hierarchy: alpha, beta, omega. Each has public-use human name, distinctive mark and social role in the pack. That structure enables internal plots (leadership struggle, exclusion, outsider integration) beyond external ones (human hunt, conflict with other factions).</p><p>In D&D and Pathfinder, druids with Wild Shape and natural shapeshifters (Eberron changelings) use these names to anchor identity. Generate names the character uses in human form, complementing with a bestial nickname appearing only in transformation. <em>Mira Fox Eyes</em> in human, <em>Three-Pawed-Shadow</em> as fox. Onomastic duplicity reflects identity duplicity.</p>"
      },
      {
        h2: "Common mistakes when designing shapeshifters",
        body: "<p>Mistake 1: costless shapeshifter. If your character changes form without consequence, you lose tension. Transformation must hurt, exhaust or demand. Folklore kitsune lose visual acuity after long transformations; classic werewolves suffer partial amnesia; selkies who lose their pelt get trapped in human form. Design your specific cost before the first change scene.</p><p>Mistake 2: shapeshifter without community. In real folklore, shapeshifters are rarely solitary. They belong to clans, packs, extended families, support networks. If your character operates completely alone, cultural verisimilitude is missing. Design three relatives or allies of the same species: a mentor who taught control, a generational rival, a relative rejecting the shared nature.</p><p>Mistake 3: shapeshifter without internal taboo. Every shapeshifting culture has internal rules: <em>don't transform before non-initiated mortals</em>, <em>don't eat human flesh</em>, <em>don't transform a loved one's face</em>. Those internal rules give cultural depth. When a shapeshifter breaks them, serious narrative consequences follow. Without taboos, the character operates in ethical vacuum.</p>"
      },
      {
        h2: "From individual to changing ecosystem",
        body: "<p>Once you've generated your shapeshifter, define the three forms they adopt. First, daily human form (with false or real biography). Second, full animal form (with specific physical details: fur, size, characteristic behavior). Third, an intermediate hybrid form rarely assumed and only in extreme circumstances. That third form is the character's visual climax when plot demands it.</p><p>Design the transformation ritual. How long does it take? Is it voluntary or triggered by full moon, extreme emotion, physical danger? What's needed after: rest, specific food, water? These operational details differentiate the serious shapeshifter from the magical wildcard. <em>Patricia Briggs</em> works with extensive detail on these rituals.</p><p>Reserve a possible irreversible transformation. Some shapeshifters, after specific conditions (killing a human in animal form, transforming during eclipse, breaking a sacred taboo), get permanently trapped in one form. That latent threat is the sword of Damocles. If the reader or player knows the risk exists, every transformation has extra weight. When finally the character gets trapped, the narrative climax is devastating.</p>"
      }
    ],
    faq: [
      {
        q: "Does this generator work for druid characters with Wild Shape in D&D?",
        a: "Yes, especially for druids with strong cultural identity (moonlit circuit druids, specific tribe druids). Standard druids can use normal human names and reserve shapeshifter lineage for druids with more exotic backstories."
      },
      {
        q: "How do I differentiate a voluntary shapeshifter from a cursed one?",
        a: "The voluntary one is born with the ability and controls it through training; has community and tradition. The cursed one received the condition through trauma, bite, spell or involuntary pact; tends to be isolated and lacks mentor. Both categories generate distinct narrative tones: cultural pride vs. personal tragedy."
      },
      {
        q: "Can I use these names for non-anthropomorphic creatures?",
        a: "Yes, with adjustments. If your shapeshifter is fully bestial without human form, drop the human name from the generator and stick to lineage + mark + habitat. <em>Wolf-Daughter Fox Eyes of the Thunder Forest</em> works as purely folkloric name."
      },
      {
        q: "How do I avoid the generic werewolf cliché?",
        a: "Diversify species. Instead of European werewolf, try Japanese kitsune, Indian naga, Mesoamerican jaguar, Scottish selkie. Each culture brings distinct ritual frameworks. Generate three shapeshifters from three distinct traditions coexisting in your world: cross-cultural friction generates natural plot."
      }
    ]
  }
};
