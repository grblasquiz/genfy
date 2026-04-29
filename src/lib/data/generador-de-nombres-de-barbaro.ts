import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-barbaro", en: "barbarian-name-generator" },
  category: "fun",
  emoji: "🪓",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Bárbaro | Genfy",
    metaDesc: "Creá nombres salvajes para bárbaros, guerreros tribales y berserkers con furia primordial. Ideal para D&D, fantasía épica y campañas tribales.",
    h1: "Generador de Nombres de Bárbaro",
    intro: "Inventá guerreros tribales con apodos brutos, clanes ancestrales y rituales de sangre. Para D&D, Pathfinder, fantasía épica y wargames.",
    tag: "Fantasía",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "first",
        label: "Nombre",
        items: [
          "Krag", "Borja", "Ulrika", "Doran", "Sigrid",
          "Borak", "Astrid", "Throk", "Veka", "Hrolf",
          "Garn", "Ymira", "Korr", "Brenna", "Ulf",
          "Rangda", "Khorga", "Drakka", "Olg", "Vega",
          "Tarn", "Saga", "Brokk", "Hilda", "Magnar",
          "Kael", "Vor", "Inga", "Skarn", "Yorga"
        ]
      },
      {
        id: "epithet",
        label: "Epíteto",
        items: [
          "Hacha Roja", "Sangre de Lobo", "Cuello de Toro", "Pulmón de Hierro", "Brazo Doble",
          "Pierna Larga", "Sin Diente", "Sin Mandíbula", "Costilla Rota", "Cráneo Marcado",
          "Mano de Piedra", "Pulso de Trueno", "Aliento de Oso", "Ojo de Hierro", "Lobo Solitario",
          "Risa Tarda", "Voz de Trueno", "Furia Lenta", "Furia Rápida", "Doble Heridas",
          "Hueso Quemado", "Cara Quemada", "Espalda Marcada", "Pulgar Roto", "Cráneo Hueco",
          "Mandíbula de Hierro", "Pelo Rojo", "Trenza Negra", "Tatuaje Verde", "Cicatriz Triple"
        ]
      },
      {
        id: "clan",
        label: "Clan",
        items: [
          "del Clan Cuervo", "del Clan Hacha", "del Clan Lobo Negro", "del Clan Oso", "del Clan Garra",
          "del Clan Trueno", "del Clan Río", "del Clan Bisonte", "del Clan Sangre", "del Clan Hueso",
          "del Clan Niebla", "del Clan Roca Caída", "del Clan Hierro", "del Clan Quemado", "del Clan Muerto",
          "del Clan Lobo Blanco", "del Clan Cabra Negra", "del Clan Espina", "del Clan Trenza", "del Clan Águila",
          "del Clan Diente", "del Clan Garra Doble", "del Clan Cuerno", "del Clan Toro", "del Clan Cuervo Blanco",
          "del Clan Lazo", "del Clan Tambor", "del Clan Madera", "del Clan Sal", "del Clan Hielo"
        ]
      },
      {
        id: "land",
        label: "Tierra",
        items: [
          "de las Estepas Frías", "de los Picos Quebrados", "del Norte Profundo", "de los Valles del Hielo", "de la Llanura Roja",
          "del Bosque Hueco", "de las Mesetas del Trueno", "del Páramo Sin Nombre", "de los Ríos Rotos", "de la Tundra Bastarda",
          "del Cabo del Lobo", "de los Acantilados del Cuervo", "de las Colinas del Hambre", "del Valle Quemado", "de los Lagos Helados",
          "del Bosque Sin Sol", "del Pantano del Hueso", "de las Dunas del Sur", "del Glaciar Bastardo", "de las Montañas Sangrantes",
          "del Cañón Inverso", "de los Pastos del Trueno", "del Borde Norte", "del Páramo del Cuervo", "del Reino Sin Rey",
          "de las Mesetas del Lobo", "del Río de los Diez Vados", "del Bosque del Diente", "de las Cumbres del Hierro", "del Cuerno del Mundo"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo construir un bárbaro creíble en fantasía",
        body: "<p>El bárbaro de fantasía heredó arquetipos reales: vikingos, escitas, mongoles, celtas, lombardos. Pero la ficción moderna superpone Conan, Drizzt y los thursar de Eddings. El nombre debe sonar duro fonéticamente y anclarse a tierra concreta. <strong>Ulrika Hacha Roja del Clan Lobo del Páramo Sin Nombre</strong> ya construye geografía, tribu y reputación en una sola frase.</p><p>El epíteto en cultura tribal es ganado, no asignado. Al niño se le da un nombre infantil; al adulto, un epíteto tras una hazaña. Por eso los apodos bárbaros funcionan mejor cuando refieren a hechos: <em>Hacha Roja</em> implica matanza específica; <em>Costilla Rota</em> recuerda una pelea perdida pero sobrevivida. Evitá apodos abstractos como <em>el Bravo</em>: las culturas tribales son concretas, no metafóricas.</p><p>El clan da identidad colectiva. En fantasía, los clanes funcionan mejor con nombres animales o de elementos: <em>Cuervo, Hacha, Trueno, Sangre, Hueso</em>. Si tu setting tiene chamanes o totems, el animal del clan suele coincidir con el espíritu protector. La tierra agrega profundidad: bárbaros del norte vs. bárbaros del sur tienen estética distinta. <em>Las Estepas Frías</em> sugiere indumentaria pesada; <em>el Pantano del Hueso</em> evoca tribus pesqueras y ritos extraños.</p>"
      },
      {
        h2: "Aplicaciones en D&D, Pathfinder y fantasía épica",
        body: "<p>En D&D 5e, la clase Bárbaro se beneficia de nombres con peso fonético. Cuando el jugador grita <em>¡Krag Hacha Roja entra en furia!</em>, la mesa siente la presencia del personaje. Generá un nombre completo en lugar del genérico <em>Krag</em>. El epíteto y el clan dan ganchos para el master: el clan puede aparecer en una misión secundaria, el epíteto puede ser cuestionado por enemigos.</p><p>En Pathfinder y RPGs con sistema de tribus, los bárbaros funcionan en grupo. Generá tres bárbaros del mismo clan para construir una hermandad: el líder con epíteto pesado, el segundo más joven y rápido, el chamán anciano que acompaña. Esa estructura coral copia <em>Conan the Barbarian</em>, <em>The Dark Tower</em> y los pueblos hyrkanios de Robert E. Howard.</p><p>En fantasía épica (<em>Wheel of Time</em>, <em>Malazan Book of the Fallen</em>, <em>Sword of Truth</em>), los bárbaros suelen ser civilizaciones enteras vistas desde fuera. Generá una docena de nombres para poblar un pueblo, con un líder destacado y los demás en segundo plano. La densidad de nombres tribales construye worldbuilding sin necesidad de explicación expositiva. <em>Aiel</em> de Wheel of Time funciona porque tienen lengua y nombres consistentes.</p>"
      },
      {
        h2: "Errores típicos al diseñar bárbaros en fantasía",
        body: "<p>Error 1: bárbaro estúpido. La fantasía mainstream a veces presenta al bárbaro como bruto incapaz de pensar. Esto es perezoso narrativamente y antropológicamente falso. Los pueblos tribales reales tenían sistemas legales, conocimiento ecológico complejo y oratoria sofisticada. Tu bárbaro puede ser analfabeto y aún así ser estratega brillante. <em>Conan</em> de Howard sabe leer mapas y hablar varios idiomas.</p><p>Error 2: bárbaro sin cultura. Las tribus tienen rituales, tabúes, comidas específicas, vestimentas codificadas. Si tu personaje solo grita y golpea, perdés profundidad. Diseñá tres rituales que respeta: cómo se enfrenta a un enemigo (declaración previa, ofrenda al espíritu), cómo entierra a sus muertos (cremación, exposición, cordón funerario), qué tabú jamás romperá (no come carne de su animal totémico, no mata mujeres embarazadas).</p><p>Error 3: bárbaro asimilado al imperio. Si tu bárbaro nació en una tribu pero ahora vive en la capital imperial sin conflicto identitario, perdés tensión narrativa. Los bárbaros memorables siempre están entre dos mundos: <em>Conan</em> en Aquilonia, <em>Drizzt</em> entre los drow y los humanos. Esa tensión bicultural es lo que da escenas dramáticas. Sin tensión, es solo un guerrero con apodo exótico.</p>"
      },
      {
        h2: "Construyendo la tribu completa: más allá del personaje individual",
        body: "<p>Una vez generado tu bárbaro, definí la tribu con cinco roles: jefe guerrero, chamán o vidente, narrador de historias, herrero/artesano, anciano respetado. Cada rol tiene autoridad propia y los conflictos internos surgen cuando dos roles disienten. El chamán puede oponerse al jefe guerrero sobre si atacar al imperio; esa fricción es trama lista para usar.</p><p>Diseñá tres rituales recurrentes: el rito de paso del adolescente al adulto, la ceremonia de boda o unión, el rito funerario. Estos tres marcan el ciclo vital de cualquier tribu y permiten escenas memorables. Si tu protagonista vuelve a su tribu después de exiliarse, alguno de estos rituales será el escenario de la reconciliación o ruptura definitiva.</p><p>Reservá un enemigo histórico específico: otra tribu rival, un imperio que avanza, una bestia mítica que la tribu enfrenta cíclicamente. Sin enemigo identificado, la tribu existe en vacío. <em>The Wheel of Time</em> trabaja sobre el conflicto Aiel vs. el resto del mundo durante 14 libros. Tu tribu no necesita tanta extensión, pero sí un antagonista con peso histórico que justifique la cohesión interna del clan.</p>"
      }
    ],
    faq: [
      {
        q: "¿Estos nombres sirven para campañas medievales históricas o solo para fantasía?",
        a: "Sirven para ambos contextos. Para campañas históricas (Conquest of Britannia, viking-era), filtrá los nombres más fantásticos y quedate con los que suenan a nórdico o eslavo arcaico (Sigrid, Hrolf, Magnar). Los epítetos físicos y clanes animales son históricamente realistas."
      },
      {
        q: "¿Cómo evito el cliché del bárbaro de musculatura excesiva?",
        a: "Aplicá variedad corporal a tus generados. Una bárbara delgada con velocidad superior y otra robusta para combate cuerpo a cuerpo. Algunos pueblos tribales reales (yámanos, mongoles) eran de talla mediana. La fortaleza tribal viene de resistencia y aclimatación, no solo de masa muscular."
      },
      {
        q: "¿Puedo usar estos nombres para personajes femeninos sin cambios?",
        a: "Sí. Los nombres incluidos son neutros o femeninos por diseño (Sigrid, Astrid, Ulrika, Veka, Brenna). Los epítetos también son aplicables a cualquier género. Las culturas tribales reales tenían guerreras prominentes (escita Tomyris, viking shield-maidens documentadas en sagas)."
      },
      {
        q: "¿Cómo balanceo poder y vulnerabilidad para que el bárbaro sea interesante?",
        a: "Asignale una debilidad cultural específica: alergia a la magia arcana, terror a las bestias marinas, prohibición tribal de tocar cierto metal. Esa vulnerabilidad cultural genera escenas memorables sin tocar el equilibrio mecánico. <em>Drizzt Do'Urden</em> tiene fortaleza física pero vulnerabilidad emocional por su origen drow."
      }
    ]
  },
  en: {
    pageTitle: "Barbarian Name Generator | Genfy",
    metaDesc: "Create savage names for barbarians, tribal warriors and berserkers with primal fury. Perfect for D&D, epic fantasy and tribal campaigns.",
    h1: "Barbarian Name Generator",
    intro: "Invent tribal warriors with brutal nicknames, ancestral clans and blood rituals. For D&D, Pathfinder, epic fantasy and wargames.",
    tag: "Fantasy",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "first",
        label: "Name",
        items: [
          "Krag", "Borja", "Ulrika", "Doran", "Sigrid",
          "Borak", "Astrid", "Throk", "Veka", "Hrolf",
          "Garn", "Ymira", "Korr", "Brenna", "Ulf",
          "Rangda", "Khorga", "Drakka", "Olg", "Vega",
          "Tarn", "Saga", "Brokk", "Hilda", "Magnar",
          "Kael", "Vor", "Inga", "Skarn", "Yorga"
        ]
      },
      {
        id: "epithet",
        label: "Epithet",
        items: [
          "Red Axe", "Wolf Blood", "Bull Neck", "Iron Lung", "Double Arm",
          "Long Leg", "Toothless", "Jawless", "Broken Rib", "Marked Skull",
          "Stone Hand", "Thunder Pulse", "Bear Breath", "Iron Eye", "Lone Wolf",
          "Late Laugh", "Thunder Voice", "Slow Fury", "Quick Fury", "Twice Wounded",
          "Burnt Bone", "Burnt Face", "Marked Back", "Broken Thumb", "Hollow Skull",
          "Iron Jaw", "Red Hair", "Black Braid", "Green Tattoo", "Triple Scar"
        ]
      },
      {
        id: "clan",
        label: "Clan",
        items: [
          "of Clan Crow", "of Clan Axe", "of Clan Black Wolf", "of Clan Bear", "of Clan Claw",
          "of Clan Thunder", "of Clan River", "of Clan Bison", "of Clan Blood", "of Clan Bone",
          "of Clan Mist", "of Clan Fallen Rock", "of Clan Iron", "of Clan Burnt", "of Clan Dead",
          "of Clan White Wolf", "of Clan Black Goat", "of Clan Thorn", "of Clan Braid", "of Clan Eagle",
          "of Clan Tooth", "of Clan Double Claw", "of Clan Horn", "of Clan Bull", "of Clan White Crow",
          "of Clan Snare", "of Clan Drum", "of Clan Wood", "of Clan Salt", "of Clan Ice"
        ]
      },
      {
        id: "land",
        label: "Land",
        items: [
          "of the Cold Steppes", "of the Broken Peaks", "of the Deep North", "of the Ice Valleys", "of the Red Plain",
          "of the Hollow Forest", "of the Thunder Plateaus", "of the Nameless Wastes", "of the Broken Rivers", "of the Bastard Tundra",
          "of the Wolf Cape", "of the Crow Cliffs", "of the Hunger Hills", "of the Burnt Valley", "of the Frozen Lakes",
          "of the Sunless Forest", "of the Bone Marsh", "of the South Dunes", "of the Bastard Glacier", "of the Bleeding Mountains",
          "of the Inverse Canyon", "of the Thunder Pastures", "of the North Edge", "of the Crow Wastes", "of the Kingless Realm",
          "of the Wolf Plateaus", "of the Ten Fords River", "of the Tooth Forest", "of the Iron Summits", "of the World's Horn"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How to build a credible fantasy barbarian",
        body: "<p>The fantasy barbarian inherited real archetypes: Vikings, Scythians, Mongols, Celts, Lombards. But modern fiction overlays Conan, Drizzt and Eddings' thursar. The name must sound phonetically hard and anchor to concrete land. <strong>Ulrika Red Axe of Clan Wolf of the Nameless Wastes</strong> already builds geography, tribe and reputation in one phrase.</p><p>The epithet in tribal culture is earned, not assigned. The child gets a child name; the adult, an epithet after a feat. That's why barbarian nicknames work better when referring to deeds: <em>Red Axe</em> implies specific slaughter; <em>Broken Rib</em> recalls a fight lost but survived. Avoid abstract nicknames like <em>the Brave</em>: tribal cultures are concrete, not metaphorical.</p><p>The clan gives collective identity. In fantasy, clans work better with animal or element names: <em>Crow, Axe, Thunder, Blood, Bone</em>. If your setting has shamans or totems, the clan animal usually matches the protector spirit. Land adds depth: northern barbarians vs. southern barbarians have distinct aesthetics. <em>The Cold Steppes</em> suggests heavy garments; <em>the Bone Marsh</em> evokes fishing tribes and strange rites.</p>"
      },
      {
        h2: "Applications in D&D, Pathfinder and epic fantasy",
        body: "<p>In D&D 5e, the Barbarian class benefits from names with phonetic weight. When the player shouts <em>Krag Red Axe enters rage!</em>, the table feels the character's presence. Generate a full name instead of generic <em>Krag</em>. Epithet and clan give hooks for the DM: the clan can appear in a side quest, the epithet can be questioned by enemies.</p><p>In Pathfinder and tribal-system RPGs, barbarians work in groups. Generate three barbarians from the same clan to build brotherhood: leader with heavy epithet, younger faster second, accompanying elder shaman. That choral structure copies <em>Conan the Barbarian</em>, <em>The Dark Tower</em> and Robert E. Howard's Hyrkanian peoples.</p><p>In epic fantasy (<em>Wheel of Time</em>, <em>Malazan Book of the Fallen</em>, <em>Sword of Truth</em>), barbarians are often whole civilizations seen from outside. Generate a dozen names to populate a village, with one prominent leader and others in background. Tribal name density builds worldbuilding without expository explanation. <em>Aiel</em> in Wheel of Time work because they have consistent language and names.</p>"
      },
      {
        h2: "Typical mistakes when designing fantasy barbarians",
        body: "<p>Mistake 1: stupid barbarian. Mainstream fantasy sometimes presents the barbarian as a brute incapable of thinking. This is narratively lazy and anthropologically false. Real tribal peoples had legal systems, complex ecological knowledge and sophisticated oratory. Your barbarian can be illiterate and still a brilliant strategist. Howard's <em>Conan</em> can read maps and speak several languages.</p><p>Mistake 2: barbarian without culture. Tribes have rituals, taboos, specific foods, coded clothing. If your character only shouts and hits, you lose depth. Design three rituals they respect: how they face an enemy (prior declaration, spirit offering), how they bury their dead (cremation, exposure, funeral cord), what taboo they'll never break (won't eat their totem animal, won't kill pregnant women).</p><p>Mistake 3: barbarian assimilated to empire. If your barbarian was born in a tribe but now lives in the imperial capital without identity conflict, you lose narrative tension. Memorable barbarians are always between two worlds: <em>Conan</em> in Aquilonia, <em>Drizzt</em> between drow and humans. That bicultural tension is what gives dramatic scenes. Without tension, just a warrior with exotic nickname.</p>"
      },
      {
        h2: "Building the full tribe: beyond the individual character",
        body: "<p>Once you've generated your barbarian, define the tribe with five roles: war chief, shaman or seer, story-keeper, smith/artisan, respected elder. Each role has its own authority and internal conflicts arise when two roles disagree. The shaman can oppose the war chief on whether to attack the empire; that friction is ready-to-use plot.</p><p>Design three recurring rituals: adolescent-to-adult rite of passage, marriage or union ceremony, funeral rite. These three mark the life cycle of any tribe and enable memorable scenes. If your protagonist returns to their tribe after exile, one of these rituals will be the setting for reconciliation or definitive rupture.</p><p>Reserve a specific historical enemy: another rival tribe, an advancing empire, a mythic beast the tribe faces cyclically. Without identified enemy, the tribe exists in vacuum. <em>The Wheel of Time</em> works on Aiel vs. the rest of the world conflict for 14 books. Your tribe doesn't need that extension, but does need an antagonist with historical weight that justifies the clan's internal cohesion.</p>"
      }
    ],
    faq: [
      {
        q: "Do these names work for historical medieval campaigns or only fantasy?",
        a: "Both contexts. For historical campaigns (Conquest of Britannia, viking-era), filter the more fantastic names and stick to those sounding archaic Norse or Slavic (Sigrid, Hrolf, Magnar). Physical epithets and animal clans are historically realistic."
      },
      {
        q: "How do I avoid the over-muscled barbarian cliché?",
        a: "Apply body variety to your generated set. A slender barbarian with superior speed and another robust for melee combat. Some real tribal peoples (Yámana, Mongols) were medium-sized. Tribal strength comes from resistance and acclimatization, not just muscle mass."
      },
      {
        q: "Can I use these names for female characters without changes?",
        a: "Yes. Included names are neutral or feminine by design (Sigrid, Astrid, Ulrika, Veka, Brenna). Epithets also apply to any gender. Real tribal cultures had prominent warriors (Scythian Tomyris, viking shield-maidens documented in sagas)."
      },
      {
        q: "How do I balance power and vulnerability so the barbarian stays interesting?",
        a: "Assign a specific cultural weakness: allergy to arcane magic, terror of sea beasts, tribal prohibition of touching certain metals. That cultural vulnerability generates memorable scenes without touching mechanical balance. <em>Drizzt Do'Urden</em> has physical strength but emotional vulnerability from his drow origin."
      }
    ]
  }
};
