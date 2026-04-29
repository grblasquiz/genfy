import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-piloto", en: "pilot-callsign-generator" },
  category: "fun",
  emoji: "✈️",
  mode: "combine",
  es: {
    pageTitle: "Generador de Callsigns de Piloto | Genfy",
    metaDesc: "Creá callsigns y aliases de pilotos militares, aviadores y aces del aire con tradición aeronáutica para tus historias y simuladores de vuelo.",
    h1: "Generador de Callsigns de Piloto",
    intro: "Inventá callsigns con la tradición Top Gun: apodos cortos, técnicos o personales. Ideal para narrativa militar, simuladores y campañas de space combat.",
    tag: "Aviación",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar callsigns",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rango",
        items: [
          "Capitán", "Capitana", "Teniente", "Mayor", "Comandante",
          "Coronel", "Vicealmirante", "Wing Commander", "Squadron Leader", "Flight Lieutenant",
          "Subteniente", "Alférez", "Suboficial", "Ace", "Veterano",
          "Veterana", "Instructora", "Instructor", "Cadete", "Líder de Escuadrón",
          "Sub-Líder", "Wingman", "Wingwoman", "Element Lead", "Section Lead",
          "Marshal", "Brigadier", "Group Captain", "Air Marshal", "Pilot Officer"
        ]
      },
      {
        id: "first",
        label: "Apellido",
        items: [
          "Mitchell", "Vargas", "Chen", "Bradshaw", "Andersson",
          "Petrov", "Kobayashi", "García", "Reyes", "Okonkwo",
          "Singh", "Voss", "Tanaka", "Olafsen", "Müller",
          "Rosca", "Bauer", "Kade", "Mercier", "Aldama",
          "Ostrov", "Carrillo", "Nazarov", "Sato", "Kohl",
          "Halvorsen", "Ito", "Mendoza", "Pérez", "Romanov"
        ]
      },
      {
        id: "callsign",
        label: "Callsign",
        items: [
          "Maverick", "Goose", "Iceman", "Viper", "Rooster",
          "Hangman", "Phoenix", "Slider", "Hollywood", "Starbuck",
          "Apollo", "Boomer", "Hot Dog", "Crash", "Ghost",
          "Reaper", "Spectre", "Outlaw", "Renegade", "Hammer",
          "Anvil", "Razor", "Blade", "Ripper", "Dagger",
          "Gambit", "Hex", "Banshee", "Wolverine", "Sundown"
        ]
      },
      {
        id: "squadron",
        label: "Escuadrón",
        items: [
          "del Escuadrón 76", "del Wing 9", "de la Flota Halcón", "del Ala Tormenta", "del Ala 12",
          "del Escuadrón Plata", "del Cuarto Escuadrón", "del Décimo Cuarto", "del Wing Bastardo", "del Escuadrón Sin Bandera",
          "del Ala Negra", "del Vuelo Cero", "del Escuadrón Chacal", "de la Patrulla 7", "del Wing Cuervo",
          "del Escuadrón Espejo", "del Wing Rojo", "del Escuadrón Sin Sombra", "del Ala del Cabo", "del Wing Indómito",
          "del Escuadrón Lobo", "del Escuadrón Aurora", "del Wing Tridente", "del Escuadrón Quinto", "del Ala del Diablo",
          "del Escuadrón Solitario", "del Wing del Norte", "del Escuadrón Sur", "del Ala Mercurio", "del Escuadrón Ágil"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo se elige un callsign en la cultura aeronáutica",
        body: "<p>Los callsigns reales en la USAF, USN y RAF no se eligen, se asignan. La tradición no escrita dice que tu primer error público en el escuadrón te marca el apodo de por vida. Si te dormís en una alerta, podés quedar como <em>Snorkel</em>. Si chocaste contra un poste de luz, te llaman <em>Crash</em>. Esa lógica de humillación cariñosa es lo que hace que callsigns como <em>Goose</em> o <em>Rooster</em> tengan tanta carga emocional en <em>Top Gun: Maverick</em>.</p><p>Para construir un callsign de ficción creíble, evitá la épica solemne. Los apodos pomposos como <em>Destructor</em> o <em>Aniquilador</em> suenan a videojuego adolescente, no a piloto militar. Apuntá a algo que parezca anécdota: <strong>Hot Dog</strong> sugiere que comió uno antes de un vuelo y se descompuso; <strong>Hollywood</strong> implica que pose para fotos en cada misión.</p><p>Los callsigns animales son aceptados pero deben tener historia: <em>Viper</em> porque siempre ataca de costado, <em>Rooster</em> porque hereda el de su padre, <em>Phoenix</em> porque sobrevivió una eyección catastrófica. Si solo es <em>Tigre</em> sin razón, suena a personaje plano. La tradición militar exige justificación interna del apodo, aunque el lector solo la descubra mucho más tarde.</p>"
      },
      {
        h2: "Aplicaciones en simuladores, novelas y ciencia ficción",
        body: "<p>En simuladores como <em>DCS World</em>, <em>Microsoft Flight Simulator</em> o <em>IL-2 Sturmovik</em>, el callsign personaliza la inmersión. Comunidades online crean tradiciones internas: el novato se gana el callsign tras X horas, el escuadrón vota colectivamente. Generá tres callsigns y dejá que tus compañeros voten cuál te queda. Esa dinámica copia la tradición real.</p><p>En novelas militares contemporáneas (<em>Red Storm Rising</em>, <em>Flight of the Old Dog</em>), los callsigns son herramientas de identificación rápida. Cuando hay diez pilotos en una escena, los nombres reales colapsan; los callsigns se entienden de inmediato. Asigná callsigns memorables a tres pilotos protagonistas y deja anónimos al resto. La economía narrativa lo agradece.</p><p>En ciencia ficción militar (<em>Battlestar Galactica</em>, <em>Wing Commander</em>, <em>The Expanse</em>), los callsigns mantienen la tradición pero se adaptan al setting. <em>Starbuck</em> y <em>Apollo</em> son callsigns griegos en BSG. Para tu space opera, podés mezclar tradición militar terrestre con elementos del mundo: nombres de constelaciones, dioses extintos, localidades míticas. La consistencia interna pesa más que la originalidad estridente.</p>"
      },
      {
        h2: "Errores comunes al crear callsigns para personajes",
        body: "<p>Error 1: callsign autoatribuido épico. Si tu personaje se presenta diciendo <em>llamame Aniquilador, mi callsign desde los 5 años</em>, el lector ríe. La regla cultural es que el callsign lo pone el grupo, no el individuo. Si tu protagonista insiste en autoponerse uno, otros pilotos lo cambiarán por algo humillante. Esa dinámica genera escenas de iniciación memorables.</p><p>Error 2: callsigns sin diversidad fonética. Si todos tus pilotos se llaman <em>Hammer, Razor, Blade, Ripper</em>, suenan al mismo grupo. Mezclá categorías: animales (Viper, Wolverine), oficios (Doc, Padre), defectos físicos (Crash, Lefty), referencias pop (Hollywood, Maverick), apellidos cortados (Bradly → Brad). La heterogeneidad fonética es la primera marca de un escuadrón realista.</p><p>Error 3: ignorar la jerarquía. Un teniente y un coronel no comparten dinámica de callsigns. El oficial alto suele tener un callsign más serio o tradicional (<em>Eagle</em>, <em>Dragon</em>) porque ya superó la fase de iniciación. Los novatos cargan apodos más absurdos. Si tu coronel se llama <em>Hot Pants</em>, justificá por qué nunca lo cambió: tal vez por orgullo, tal vez por superstición.</p>"
      },
      {
        h2: "Construyendo el escuadrón completo: dinámica más allá del individuo",
        body: "<p>Una vez generado tu piloto, definí el escuadrón con seis a doce miembros. Asigná roles funcionales: líder, segundo al mando, ace veterano, novato visible, técnico de tierra que vuela ocasionalmente, paria del grupo. Esa estructura coral copiada de <em>Top Gun</em>, <em>Memphis Belle</em> o <em>Battle of Britain</em> permite tramas paralelas sin ahogar la historia central.</p><p>Diseñá tres rivalidades internas: dos pilotos que compiten por el liderazgo, una pareja sentimental complicada, un veterano que desconfía del novato. Esas tensiones generan escenas verticales (en briefing, en la cantina) que complementan las escenas horizontales (en vuelo). Sin política interna, el escuadrón es solo un decorado para escenas aéreas.</p><p>Reservá una baja inevitable para mitad de campaña. La aviación militar tiene mortalidad real; tu escuadrón también. Cuando un piloto muere, el callsign se retira o se pasa a alguien especial. Esa tradición agrega peso emocional. <em>Top Gun: Maverick</em> trabaja sobre la sombra de Goose durante 35 años. Una muerte bien escrita rinde más que diez batallas pirotécnicas.</p>"
      }
    ],
    faq: [
      {
        q: "¿Puedo usar callsigns famosos como Maverick o Goose en mi historia?",
        a: "Sí, ningún callsign está protegido por copyright. Pero si tu personaje se llama Maverick y vuela un F-18, los lectores pensarán inmediatamente en Top Gun. Mejor reservá esos callsigns para guiños conscientes. Hay miles de combinaciones únicas posibles."
      },
      {
        q: "¿Funcionan estos callsigns para pilotos comerciales o solo militares?",
        a: "La tradición de callsigns es militar. Los pilotos comerciales usan número de vuelo y aerolínea. Si tu personaje es ex-militar reciclado en aerolínea, podés mantenerle el callsign como herencia. En aviación civil acrobática (red bull air race) sí se usan callsigns informales."
      },
      {
        q: "¿Cómo elijo entre tres callsigns que me gustan para el mismo personaje?",
        a: "Hacé el test del briefing: imaginá la escena donde el líder dice 'OK, [callsign], cubrime el flanco izquierdo'. El que suena más natural en esa frase técnica gana. Los callsigns largos o complejos pierden cuando se gritan en radio durante combate."
      },
      {
        q: "¿Se pueden usar callsigns en español o solo en inglés?",
        a: "En aviación argentina, chilena y mexicana hay tradición de callsigns en español: <em>Cóndor, Tigre, Lobo, Halcón</em>. Si tu setting es latinoamericano, usalos. Si es internacional con OTAN, los callsigns suelen ser en inglés por convención de comunicación radial."
      }
    ]
  },
  en: {
    pageTitle: "Pilot Callsign Generator | Genfy",
    metaDesc: "Create military pilot callsigns and aviator aliases with aeronautical tradition for your stories and flight simulators.",
    h1: "Pilot Callsign Generator",
    intro: "Invent callsigns with Top Gun tradition: short, technical or personal nicknames. Perfect for military narrative, sims and space combat campaigns.",
    tag: "Aviation",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate callsigns",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rank",
        items: [
          "Captain", "Lieutenant", "Major", "Commander", "Colonel",
          "Vice Admiral", "Wing Commander", "Squadron Leader", "Flight Lieutenant", "Sub-Lieutenant",
          "Ensign", "Warrant Officer", "Ace", "Veteran", "Instructor",
          "Cadet", "Squadron Lead", "Sub-Lead", "Wingman", "Element Lead",
          "Section Lead", "Marshal", "Brigadier", "Group Captain", "Air Marshal",
          "Pilot Officer", "Flying Officer", "Wing Captain", "Crew Chief", "Tactical Lead"
        ]
      },
      {
        id: "first",
        label: "Surname",
        items: [
          "Mitchell", "Vargas", "Chen", "Bradshaw", "Andersson",
          "Petrov", "Kobayashi", "Garcia", "Reyes", "Okonkwo",
          "Singh", "Voss", "Tanaka", "Olafsen", "Müller",
          "Rosca", "Bauer", "Kade", "Mercier", "Aldama",
          "Ostrov", "Carrillo", "Nazarov", "Sato", "Kohl",
          "Halvorsen", "Ito", "Mendoza", "Perez", "Romanov"
        ]
      },
      {
        id: "callsign",
        label: "Callsign",
        items: [
          "Maverick", "Goose", "Iceman", "Viper", "Rooster",
          "Hangman", "Phoenix", "Slider", "Hollywood", "Starbuck",
          "Apollo", "Boomer", "Hot Dog", "Crash", "Ghost",
          "Reaper", "Spectre", "Outlaw", "Renegade", "Hammer",
          "Anvil", "Razor", "Blade", "Ripper", "Dagger",
          "Gambit", "Hex", "Banshee", "Wolverine", "Sundown"
        ]
      },
      {
        id: "squadron",
        label: "Squadron",
        items: [
          "of the 76th Squadron", "of Wing 9", "of Falcon Fleet", "of Storm Wing", "of Wing 12",
          "of Silver Squadron", "of the Fourth Squadron", "of the Fourteenth", "of Bastard Wing", "of the Flagless Squadron",
          "of the Black Wing", "of Flight Zero", "of Jackal Squadron", "of Patrol 7", "of Raven Wing",
          "of Mirror Squadron", "of Red Wing", "of the Shadowless Squadron", "of Cape Wing", "of Untamed Wing",
          "of Wolf Squadron", "of Aurora Squadron", "of Trident Wing", "of the Fifth Squadron", "of Devil Wing",
          "of the Lone Squadron", "of North Wing", "of South Squadron", "of Mercury Wing", "of the Agile Squadron"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How callsigns are chosen in aeronautical culture",
        body: "<p>Real callsigns in USAF, USN and RAF aren't chosen, they're assigned. Unwritten tradition says your first public mistake in the squadron marks your nickname for life. Fall asleep on alert and you might end up <em>Snorkel</em>. Crash into a lamppost and you're <em>Crash</em>. That logic of affectionate humiliation is what gives callsigns like <em>Goose</em> or <em>Rooster</em> such emotional weight in <em>Top Gun: Maverick</em>.</p><p>To build a credible fictional callsign, avoid solemn epic. Pompous nicknames like <em>Destroyer</em> or <em>Annihilator</em> sound like teenage video games, not military pilots. Aim for something that sounds like an anecdote: <strong>Hot Dog</strong> suggests they ate one before a flight and got sick; <strong>Hollywood</strong> implies they pose for photos every mission.</p><p>Animal callsigns are accepted but must have backstory: <em>Viper</em> because they always attack from the side, <em>Rooster</em> because they inherit it from their father, <em>Phoenix</em> because they survived a catastrophic ejection. If it's just <em>Tiger</em> with no reason, sounds like flat character. Military tradition demands internal justification of the nickname, even if the reader only discovers it much later.</p>"
      },
      {
        h2: "Applications in simulators, novels and military sci-fi",
        body: "<p>In simulators like <em>DCS World</em>, <em>Microsoft Flight Simulator</em> or <em>IL-2 Sturmovik</em>, the callsign personalizes immersion. Online communities create internal traditions: rookies earn their callsign after X hours, the squadron votes collectively. Generate three callsigns and let your peers vote which fits. That dynamic copies real tradition.</p><p>In contemporary military novels (<em>Red Storm Rising</em>, <em>Flight of the Old Dog</em>), callsigns are quick identification tools. When ten pilots share a scene, real names collapse; callsigns are understood instantly. Assign memorable callsigns to three protagonist pilots and leave the rest anonymous. Narrative economy thanks you.</p><p>In military sci-fi (<em>Battlestar Galactica</em>, <em>Wing Commander</em>, <em>The Expanse</em>), callsigns keep tradition but adapt to setting. <em>Starbuck</em> and <em>Apollo</em> are Greek callsigns in BSG. For your space opera, you can mix terrestrial military tradition with world elements: constellation names, extinct gods, mythic locations. Internal consistency outweighs strident originality.</p>"
      },
      {
        h2: "Common mistakes when creating callsigns for characters",
        body: "<p>Mistake 1: epic self-given callsign. If your character introduces themselves saying <em>call me Annihilator, my callsign since age 5</em>, readers laugh. The cultural rule is that the group assigns the callsign, not the individual. If your protagonist insists on self-naming, other pilots will change it to something humiliating. That dynamic generates memorable initiation scenes.</p><p>Mistake 2: callsigns without phonetic diversity. If all your pilots are <em>Hammer, Razor, Blade, Ripper</em>, they sound like the same group. Mix categories: animals (Viper, Wolverine), trades (Doc, Padre), physical defects (Crash, Lefty), pop references (Hollywood, Maverick), shortened surnames (Bradly → Brad). Phonetic heterogeneity is the first mark of a realistic squadron.</p><p>Mistake 3: ignoring hierarchy. A lieutenant and a colonel don't share callsign dynamics. The senior officer usually has a more serious or traditional callsign (<em>Eagle</em>, <em>Dragon</em>) because they've already passed the initiation phase. Rookies carry more absurd nicknames. If your colonel is called <em>Hot Pants</em>, justify why they never changed it: maybe pride, maybe superstition.</p>"
      },
      {
        h2: "Building the full squadron: dynamics beyond the individual",
        body: "<p>Once you've generated your pilot, define the squadron with six to twelve members. Assign functional roles: leader, second-in-command, veteran ace, visible rookie, ground tech who occasionally flies, group pariah. That choral structure copied from <em>Top Gun</em>, <em>Memphis Belle</em> or <em>Battle of Britain</em> allows parallel plots without drowning the central story.</p><p>Design three internal rivalries: two pilots competing for leadership, a complicated romantic pair, a veteran distrusting the rookie. Those tensions generate vertical scenes (in briefing, in the canteen) that complement horizontal scenes (in flight). Without internal politics, the squadron is just decoration for aerial scenes.</p><p>Reserve an inevitable casualty for mid-campaign. Military aviation has real mortality; your squadron should too. When a pilot dies, the callsign retires or passes to someone special. That tradition adds emotional weight. <em>Top Gun: Maverick</em> works on Goose's shadow for 35 years. A well-written death yields more than ten pyrotechnic battles.</p>"
      }
    ],
    faq: [
      {
        q: "Can I use famous callsigns like Maverick or Goose in my story?",
        a: "Yes, no callsign is copyright protected. But if your character is called Maverick and flies an F-18, readers will immediately think of Top Gun. Better reserve those callsigns for conscious nods. Thousands of unique combinations are possible."
      },
      {
        q: "Do these callsigns work for commercial pilots or only military?",
        a: "Callsign tradition is military. Commercial pilots use flight number and airline. If your character is ex-military recycled into airlines, you can keep their callsign as legacy. In acrobatic civil aviation (Red Bull Air Race) informal callsigns are used."
      },
      {
        q: "How do I choose between three callsigns I like for the same character?",
        a: "Run the briefing test: imagine the scene where the leader says 'OK, [callsign], cover my left flank'. The one sounding most natural in that technical phrase wins. Long or complex callsigns lose when shouted on radio during combat."
      },
      {
        q: "Can callsigns be in non-English or only English?",
        a: "Aviation in Latin America, Eastern Europe and Asia has tradition of native-language callsigns. If your setting is regional, use them. If it's international with NATO, callsigns tend to be English by radio communication convention."
      }
    ]
  }
};
