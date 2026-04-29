import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-invocador", en: "summoner-name-generator" },
  category: "fun",
  emoji: "✨",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Invocador | Genfy",
    metaDesc: "Creá nombres de invocadores, conjuradores de entidades y maestros del llamado planar para D&D, Pathfinder y campañas de fantasía oscura.",
    h1: "Generador de Nombres de Invocador",
    intro: "Inventá maestros del llamado planar, conjuradores de entidades y pactos con criaturas extrañas. Para D&D, Pathfinder y fantasía oscura.",
    tag: "Fantasía",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Título",
        items: [
          "Llamador", "Llamadora", "Invocador", "Invocadora", "Conjuradora",
          "Conjurador", "Pactor", "Pactora", "Heraldo del Velo", "Heralda del Velo",
          "Maestre del Círculo", "Maestra del Círculo", "Vinculadora", "Vinculador", "Convocadora",
          "Convocador", "Sello Doble", "Hija del Pacto", "Hijo del Pacto", "Voz del Otro Lado",
          "Tejedor de Pactos", "Tejedora de Pactos", "Cifradora Planar", "Cifrador Planar", "Llamadora del Décimo",
          "Llamador del Décimo", "Cantora del Velo", "Cantor del Velo", "Lectora del Pacto", "Lector del Pacto"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Lyra", "Vassen", "Mira", "Tarn", "Selene",
          "Korren", "Aspasia", "Idris", "Ozim", "Drosk",
          "Vohl", "Yusra", "Alanna", "Cassian", "Mireille",
          "Yorick", "Anika", "Pell", "Tarrik", "Vasha",
          "Mira", "Reza", "Nadwen", "Sigrid", "Ivor",
          "Kael", "Bashir", "Onega", "Brennan", "Talin"
        ]
      },
      {
        id: "epithet",
        label: "Epíteto",
        items: [
          "el Sin Eco", "la Sin Eco", "Doble Sello", "Tres Vínculos", "Voz Quebrada",
          "Llave del Velo", "Mano de Sal", "Sangre Fría", "el Pacto Doble", "la Pacto Doble",
          "Aliento Hueco", "el Vinculado", "la Vinculada", "Ojo del Círculo", "Doble Pulso",
          "Sin Sombra", "Sombra Larga", "Aliento de Niebla", "el Insomne", "la Insomne",
          "Aliento Frío", "Voz Doble", "Manos Vacías", "Pulso de Pacto", "Marca del Velo",
          "Tres Marcas", "Doble Voz", "Sin Reflejo", "Sello Verde", "Sello Roto"
        ]
      },
      {
        id: "patron",
        label: "Patrón / Plano",
        items: [
          "del Pacto Bastardo", "del Plano Hueco", "del Velo Roto", "del Décimo Círculo", "del Reino del Eco",
          "del Pacto del Cuervo", "del Concilio del Velo", "del Plano de Sal", "del Reino sin Estrellas", "del Pacto del Río Muerto",
          "del Velo del Sur", "del Plano Inverso", "del Pacto del Espejo", "del Reino del Susurro", "del Plano del Hueso",
          "del Pacto de la Última Hora", "del Plano Doblado", "del Reino del Polvo", "del Pacto del Faro Apagado", "del Velo del Cabo",
          "del Plano del Pulso", "del Reino del Sello Frío", "del Pacto de los Trece", "del Plano del Cuervo Blanco", "del Velo Bastardo",
          "del Pacto Mudo", "del Plano del Diente", "del Reino sin Lengua", "del Pacto de la Octava Hora", "del Velo Profundo"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo construir un invocador con identidad fuerte",
        body: "<p>El invocador es un personaje de tres capas: el nombre humano, el patrón sobrenatural y el contrato que los une. Su nombre completo debe reflejar las tres dimensiones. <em>Llamadora Lyra Doble Sello del Pacto del Cuervo</em> ya implica que existió un acto formal (el sello doble), que hay una entidad patrocinante (el Cuervo) y que la invocadora tiene historia personal antes del pacto.</p><p>El epíteto del invocador suele referir al pacto, no al físico. Mientras un guerrero recibe apodos por defectos corporales, el invocador los recibe por marcas planares: <em>Sin Eco</em> sugiere que su voz no rebota normalmente; <em>Tres Vínculos</em> implica que cargó tres entidades simultáneas en algún momento; <em>Marca del Velo</em> es marca física del cruce dimensional. Estos detalles construyen ambientación arcana sin necesidad de sistemas mecánicos complejos.</p><p>El patrón es lo que distingue al invocador de otros casters. Mientras el mago académico estudia textos y el clérigo reza a un dios, el invocador tiene un contrato bilateral con una entidad concreta. Esa entidad puede ser benévola, neutral o francamente peligrosa. Definir bien el patrón es definir la mitad del personaje. Sin patrón claro, el invocador es solo otro lanzador de hechizos.</p>"
      },
      {
        h2: "Aplicaciones por sistema y género",
        body: "<p>En D&D 5e, el Brujo (Warlock) y el Invocador funcionan con esta lógica de pacto. Generá tres invocadores con patronos distintos: uno con entidad arcana neutral, uno con espíritu de la naturaleza, uno con ente eldritch peligroso. La trinidad cubre tonos posibles dentro de la misma campaña sin que los personajes se sientan repetidos. Cada uno tiene escenas distintas con su patrón.</p><p>En Pathfinder 1e y 2e, la clase Invocador (Summoner) trabaja con un eidolon vinculado. El nombre del invocador y el de su criatura deben relacionarse temáticamente: si el invocador se llama <em>Vassen Sin Eco del Plano Hueco</em>, su eidolon puede llamarse <em>Hueco</em> o <em>Eco Roto</em>. Esa coherencia onomástica fortalece la sensación de pacto auténtico.</p><p>En fantasía oscura literaria (<em>The Black Company</em> de Glen Cook, <em>Malazan</em> de Steven Erikson, <em>The Goblin Emperor</em>), los invocadores son figuras sospechosas culturalmente. La sociedad teme a quien trafica con entidades. Generá tres invocadores con relaciones distintas con esa estigma social: el oculto, el celebrado, el perseguido. Cada relación social genera tramas distintas en la misma narrativa.</p>"
      },
      {
        h2: "Errores típicos al diseñar invocadores",
        body: "<p>Error 1: invocador como caster comodín. Si tu invocador conjura criaturas distintas en cada combate sin coherencia, perdés identidad. Los invocadores memorables tienen un repertorio limitado pero profundo. Tres a cinco entidades específicas que el lector aprende a reconocer. Cada criatura tiene nombre, personalidad, costos de invocación. <em>Pokémon</em> funciona porque los Pokémon tienen identidad; tu invocador necesita lo mismo.</p><p>Error 2: pacto sin costo real. El pacto debe doler. Si el invocador conjura sin restricciones, no hay tensión narrativa. Diseñá tres costos posibles: cada invocación quita años de vida, deja marcas físicas permanentes, requiere ofrendas de objetos preciosos. <em>Fullmetal Alchemist</em> trabaja sobre el principio de intercambio equivalente; aplicá lógica similar a tu invocador.</p><p>Error 3: invocador sin enemigo cosmológico. Quien trafica con planos exteriores siempre tiene enemigos: cazadores de sectas, sacerdotes del orden establecido, otros invocadores rivales. Si tu personaje opera sin oposición, falta peso narrativo. Definí al menos un cazador específico que lo persigue, con motivos personales (un familiar perdido por una invocación previa) o institucionales (la inquisición arcana del reino).</p>"
      },
      {
        h2: "Del pacto individual al cosmos completo",
        body: "<p>Una vez generado tu invocador, definí los tres rituales fundamentales que practica. Primero, el ritual de invocación inicial: cuántas horas requiere, qué materiales consume, qué pasa si falla. Segundo, el ritual de mantenimiento: cómo conserva el vínculo activo entre sesiones (ofrendas semanales, oraciones diarias, sangre menstrual). Tercero, el ritual de ruptura: cómo cierra el pacto si decide terminar la relación con la entidad.</p><p>Diseñá las tres entidades del repertorio con detalle. Para cada una: nombre verdadero (que el invocador rara vez pronuncia), nombre cotidiano (cómo se refiere a ella en público), apariencia visible al ser invocada, costo específico de la invocación, beneficio principal. Esa ficha de tres entidades te da material para múltiples sesiones o capítulos.</p><p>Reservá una entidad poderosa que el invocador no se atreve a llamar. Esa entidad guardada es la sword of Damocles del personaje. Tal vez la conoció en un sueño, tal vez la heredó de su maestro, tal vez la firmó por error en su juventud. Cuando todo falla, podría llamarla, pero el costo sería catastrófico. Esa entidad es el clímax narrativo en reserva: el día que el invocador la llame, todo cambia. <em>Dr. Strange</em> usa esta lógica con Dormammu; <em>Hellboy</em> con su propio destino apocalíptico.</p>"
      }
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre un invocador y un brujo (warlock) en D&D?",
        a: "Mecánicamente comparten el concepto de pacto. Narrativamente, el brujo recibe poder constante a cambio del pacto inicial; el invocador llama entidades específicas en momentos puntuales. El brujo es vasallo permanente; el invocador es contratante eventual. Ambos pueden coexistir en la misma campaña."
      },
      {
        q: "¿Cómo evito que mi invocador se sienta como Pokémon Master?",
        a: "Limitá el repertorio a tres a cinco entidades y dale a cada una personalidad propia. La entidad puede negarse a venir si el invocador la usó mal antes, puede traicionar si el pacto se debilita, puede exigir favores. Esa autonomía narrativa diferencia al invocador serio del entrenador de mascotas mágicas."
      },
      {
        q: "¿Sirve este generador para campañas de Cthulhu Mythos?",
        a: "Sí. Filtrá los nombres y patrones más cósmicos: <em>Reino sin Estrellas</em>, <em>Plano Doblado</em>, <em>Velo Profundo</em>. Los invocadores en Lovecraft no controlan; intentan dominar entidades que finalmente los destruyen. Esa lógica de horror cósmico encaja perfecto con los patronos generados."
      },
      {
        q: "¿Los invocadores son siempre figuras malignas o pueden ser héroes?",
        a: "Depende del setting. En culturas donde el contacto con planos exteriores es cotidiano (Eberron, Forgotten Realms), los invocadores son profesión respetada. En culturas con dogma religioso restrictivo (Forgotten Realms con Helm, ciertos settings de Warhammer Fantasy), son perseguidos. Definí la actitud cultural antes de jugar."
      }
    ]
  },
  en: {
    pageTitle: "Summoner Name Generator | Genfy",
    metaDesc: "Create summoner, entity conjurer and planar calling master names for D&D, Pathfinder and dark fantasy campaigns.",
    h1: "Summoner Name Generator",
    intro: "Invent masters of planar calling, entity conjurers and pact-bearers with strange creatures. For D&D, Pathfinder and dark fantasy.",
    tag: "Fantasy",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Title",
        items: [
          "Caller", "Summoner", "Conjurer", "Pact-Bearer", "Veil Herald",
          "Master of the Circle", "Mistress of the Circle", "Binder", "Convoker", "Double Seal",
          "Daughter of the Pact", "Son of the Pact", "Voice from the Other Side", "Pact Weaver", "Planar Cipher",
          "Caller of the Tenth", "Veil Singer", "Pact Reader", "Sigil Keeper", "Beyond-Speaker",
          "Threshold Warden", "Outer Voice", "Boundary Walker", "Gate Master", "Gate Mistress",
          "Eldritch Caller", "Pact Signer", "Veil Witness", "Calling Lord", "Calling Lady"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Lyra", "Vassen", "Mira", "Tarn", "Selene",
          "Korren", "Aspasia", "Idris", "Ozim", "Drosk",
          "Vohl", "Yusra", "Alanna", "Cassian", "Mireille",
          "Yorick", "Anika", "Pell", "Tarrik", "Vasha",
          "Reza", "Nadwen", "Sigrid", "Ivor", "Kael",
          "Bashir", "Onega", "Brennan", "Talin", "Magda"
        ]
      },
      {
        id: "epithet",
        label: "Epithet",
        items: [
          "the Echoless", "Double Seal", "Three Bonds", "Broken Voice", "Veil Key",
          "Salt Hand", "Cold Blood", "the Double Pact", "Hollow Breath", "the Bound",
          "Eye of the Circle", "Double Pulse", "Shadowless", "Long Shadow", "Mist Breath",
          "the Sleepless", "Cold Breath", "Double Voice", "Empty Hands", "Pact Pulse",
          "Veil Mark", "Three Marks", "No Reflection", "Green Seal", "Broken Seal",
          "Quiet Threshold", "Silent Pact", "Twin Calling", "Pale Sigil", "Inverse Pulse"
        ]
      },
      {
        id: "patron",
        label: "Patron / Plane",
        items: [
          "of the Bastard Pact", "of the Hollow Plane", "of the Broken Veil", "of the Tenth Circle", "of the Realm of Echoes",
          "of the Crow Pact", "of the Veil Council", "of the Salt Plane", "of the Starless Realm", "of the Dead River Pact",
          "of the South Veil", "of the Inverse Plane", "of the Mirror Pact", "of the Whispering Realm", "of the Bone Plane",
          "of the Last Hour Pact", "of the Folded Plane", "of the Dust Realm", "of the Dark Beacon Pact", "of the Cape Veil",
          "of the Pulse Plane", "of the Cold Seal Realm", "of the Pact of Thirteen", "of the White Crow Plane", "of the Bastard Veil",
          "of the Mute Pact", "of the Tooth Plane", "of the Tongueless Realm", "of the Eighth Hour Pact", "of the Deep Veil"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How to build a summoner with strong identity",
        body: "<p>The summoner is a three-layer character: human name, supernatural patron and the contract uniting them. Their full name must reflect all three dimensions. <em>Caller Lyra Double Seal of the Crow Pact</em> already implies a formal act took place (the double seal), there's a sponsoring entity (the Crow) and the summoner has personal history before the pact.</p><p>The summoner's epithet usually refers to the pact, not physique. While a warrior gets nicknames for body defects, the summoner gets them for planar marks: <em>Echoless</em> suggests their voice doesn't bounce normally; <em>Three Bonds</em> implies they bore three simultaneous entities at some point; <em>Veil Mark</em> is physical mark of dimensional crossing. These details build arcane atmosphere without need for complex mechanical systems.</p><p>The patron is what distinguishes the summoner from other casters. While the academic mage studies texts and the cleric prays to a god, the summoner has a bilateral contract with a concrete entity. That entity can be benevolent, neutral or frankly dangerous. Defining the patron well is defining half the character. Without clear patron, the summoner is just another spell-thrower.</p>"
      },
      {
        h2: "Applications by system and genre",
        body: "<p>In D&D 5e, Warlock and the conceptual Summoner work with this pact logic. Generate three summoners with distinct patrons: one with neutral arcane entity, one with nature spirit, one with dangerous eldritch being. The trinity covers possible tones within the same campaign without characters feeling repeated. Each has distinct scenes with their patron.</p><p>In Pathfinder 1e and 2e, the Summoner class works with a bound eidolon. The summoner's name and their creature's must thematically relate: if the summoner is <em>Vassen Echoless of the Hollow Plane</em>, their eidolon can be <em>Hollow</em> or <em>Broken Echo</em>. That onomastic coherence strengthens the sense of authentic pact.</p><p>In literary dark fantasy (<em>The Black Company</em> by Glen Cook, <em>Malazan</em> by Steven Erikson, <em>The Goblin Emperor</em>), summoners are culturally suspicious figures. Society fears those who traffic with entities. Generate three summoners with distinct relationships to that social stigma: the hidden, the celebrated, the persecuted. Each social relationship generates distinct plots in the same narrative.</p>"
      },
      {
        h2: "Typical mistakes when designing summoners",
        body: "<p>Mistake 1: summoner as wildcard caster. If your summoner conjures different creatures every combat without coherence, you lose identity. Memorable summoners have a limited but deep repertoire. Three to five specific entities the reader learns to recognize. Each creature has name, personality, summoning costs. <em>Pokémon</em> works because Pokémon have identity; your summoner needs the same.</p><p>Mistake 2: pact without real cost. The pact must hurt. If the summoner conjures without restriction, no narrative tension. Design three possible costs: each summoning takes years of life, leaves permanent physical marks, requires precious-object offerings. <em>Fullmetal Alchemist</em> works on the principle of equivalent exchange; apply similar logic to your summoner.</p><p>Mistake 3: summoner without cosmological enemy. Whoever traffics with outer planes always has enemies: sect hunters, established-order priests, rival summoners. If your character operates without opposition, narrative weight is missing. Define at least one specific hunter chasing them, with personal motives (a relative lost to a previous summoning) or institutional ones (the realm's arcane inquisition).</p>"
      },
      {
        h2: "From individual pact to full cosmos",
        body: "<p>Once you've generated your summoner, define the three fundamental rituals they practice. First, initial summoning ritual: how many hours required, what materials consumed, what happens if it fails. Second, maintenance ritual: how they keep the bond active between sessions (weekly offerings, daily prayers, blood sacrifices). Third, breaking ritual: how they close the pact if they decide to end the relationship with the entity.</p><p>Design the three entities of the repertoire in detail. For each: true name (rarely pronounced by the summoner), everyday name (how they refer in public), visible appearance when summoned, specific summoning cost, main benefit. That sheet of three entities gives you material for multiple sessions or chapters.</p><p>Reserve a powerful entity the summoner doesn't dare call. That kept entity is the character's sword of Damocles. Maybe they met it in a dream, inherited it from their master, signed by mistake in youth. When everything fails, they could call it, but the cost would be catastrophic. That entity is the narrative climax in reserve: the day the summoner calls it, everything changes. <em>Dr. Strange</em> uses this logic with Dormammu; <em>Hellboy</em> with his own apocalyptic destiny.</p>"
      }
    ],
    faq: [
      {
        q: "What's the difference between a summoner and a warlock in D&D?",
        a: "Mechanically they share the pact concept. Narratively, the warlock receives constant power in exchange for the initial pact; the summoner calls specific entities at punctual moments. The warlock is permanent vassal; the summoner is occasional contractor. Both can coexist in the same campaign."
      },
      {
        q: "How do I avoid my summoner feeling like a Pokémon Master?",
        a: "Limit the repertoire to three to five entities and give each its own personality. The entity can refuse to come if the summoner used it badly before, can betray if the pact weakens, can demand favors. That narrative autonomy differentiates the serious summoner from a magical pet trainer."
      },
      {
        q: "Does this generator work for Cthulhu Mythos campaigns?",
        a: "Yes. Filter the more cosmic names and patrons: <em>Starless Realm</em>, <em>Folded Plane</em>, <em>Deep Veil</em>. Lovecraftian summoners don't control; they try to dominate entities that ultimately destroy them. That cosmic horror logic fits perfectly with generated patrons."
      },
      {
        q: "Are summoners always evil figures or can they be heroes?",
        a: "Depends on setting. In cultures where contact with outer planes is daily (Eberron, Forgotten Realms), summoners are respected profession. In cultures with restrictive religious dogma (Forgotten Realms with Helm, certain Warhammer Fantasy settings), they're persecuted. Define cultural attitude before playing."
      }
    ]
  }
};
