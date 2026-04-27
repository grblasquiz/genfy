import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-vikingo",
    "en": "viking-name-generator"
  },
  "category": "fun",
  "emoji": "⚔️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Vikingo | Genfy",
    "metaDesc": "Generá nombres nórdicos auténticos para vikingos, jarls y guerreros. Perfectos para juegos, novelas históricas y personajes de fantasía épica.",
    "h1": "Generador de Nombres de Vikingo",
    "intro": "Forjá identidades épicas de la era nórdica. Nombres que resuenan con el trueno de Thor y las sagas de héroes inmortales grabados en runas.",
    "tag": "Diversión",
    "filterLabel": "Tipo de vikingo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "male_warriors",
        "label": "Guerreros",
        "items": [
          "Ragnar Lodbrok",
          "Bjorn Ironside",
          "Ivar el Deshuesado",
          "Halfdan el Negro",
          "Harald Hardrada",
          "Erik el Rojo",
          "Leif Erikson",
          "Rollo de Normandía",
          "Sigurd Serpiente en el Ojo",
          "Gunnar Hamundarson",
          "Egil Skallagrímsson",
          "Olaf el Santo",
          "Sweyn Forkbeard",
          "Thorfinn Karlsefni",
          "Sven Estridsson",
          "Magnus Barelegs",
          "Knut el Grande",
          "Thorstein el Rojo",
          "Ulf Uggason",
          "Orm el Viejo",
          "Hastein el Saqueador",
          "Ketil Flatnose",
          "Asbjorn Sello",
          "Thorolf Butter",
          "Gorm el Viejo",
          "Hrólfr Kraki",
          "Eirik Hacha Sangrienta",
          "Sigvaldi Strut-Haraldsson",
          "Thorkell el Alto",
          "Herjolf Bardarson"
        ]
      },
      {
        "id": "female_warriors",
        "label": "Guerreras Escuderas",
        "items": [
          "Lagertha la Valquiria",
          "Freydis Eiríksdóttir",
          "Hervor la Guerrera",
          "Brynhildr la Indomable",
          "Gudrun Gjúkadóttir",
          "Aud la Sabia",
          "Thorunn Hyrna",
          "Sigrid la Orgullosa",
          "Gunnhild Reina Madre",
          "Thyra de Dinamarca",
          "Astrid de Noruega",
          "Ragnhild la Poderosa",
          "Gyda Eiriksdottir",
          "Torvi la Exploradora",
          "Aslaug Kraka",
          "Helga la Vidente",
          "Ingrid la Oscura",
          "Bergthora de Islandia",
          "Unn la Profunda",
          "Vigdis la Justa",
          "Hallveig Strongbox",
          "Jorunn Skaldmaer",
          "Thora Borgarhjort",
          "Hild la Batalla",
          "Yngvild la Valiente"
        ]
      },
      {
        "id": "jarls",
        "label": "Jarls y Nobles",
        "items": [
          "Jarl Borg de Götaland",
          "Jarl Haakon Sigurdsson",
          "Jarl Thorfinn de Orkney",
          "Jarl Rognvald Eysteinsson",
          "Jarl Sigurd el Poderoso",
          "Jarl Eirik Håkonsson",
          "Jarl Svein Håkonsson",
          "Jarl Skule Bårdsson",
          "Jarl Erling Skakke",
          "Jarl Birger Magnusson",
          "Thrand de las Orcadas",
          "Sigurd el Cruzado",
          "Grjotgard el Sabio",
          "Thorir el Tranquilo",
          "Hring el Legislador",
          "Arnor Jarl",
          "Finn el Gordo",
          "Bardi el Hospitalario",
          "Gissur el Blanco",
          "Kolskegg el Sabio"
        ]
      },
      {
        "id": "berserkers",
        "label": "Berserkers",
        "items": [
          "Bödvar Bjarki",
          "Hjalti el Magnánimo",
          "Bjorn el Oso",
          "Ulf Bjalfason",
          "Thorir Hund",
          "Kveldulf el Lobo Nocturno",
          "Hord el Feroz",
          "Starkad el Antiguo",
          "Egil el Brutal",
          "Skallagrim el Calvo",
          "Hrolf Fuerte Como Oso",
          "Asgrim el Salvaje",
          "Thorgeir el Carnicero",
          "Grim Hairy-Cheeks",
          "Thrain el Imparable",
          "Arnkel el Frenético",
          "Odd el Iracundo",
          "Killer-Hrapp",
          "Thorstein Ox-Might",
          "Viga-Glum el Asesino",
          "Thorgeir Craggeir",
          "Surt el Negro",
          "Thord Bellower",
          "Geirmund Heljarskinn",
          "Brodd-Helgi el Corpulento"
        ]
      },
      {
        "id": "skalds",
        "label": "Escaldos y Sabios",
        "items": [
          "Bragi Boddason",
          "Eyvindr Skáldaspillir",
          "Hallfreðr Óttarsson",
          "Gunnlaug Serpiente-Lengua",
          "Kormákr Ögmundarson",
          "Thormod Kolbrunarskald",
          "Sigvatr Thórdarson",
          "Arnorr Jarlaskáld",
          "Einar Skálaglamm",
          "Glúmr Geirason",
          "Thord Sjáreksson",
          "Hofgarða-Refr Gestsson",
          "Tindr Hallkelsson",
          "Ottar el Negro",
          "Snorri Sturluson",
          "Saxo Gramático",
          "Thiodolf de Hvinir",
          "Thorbjorn Hornklofi",
          "Ulf Uggason",
          "Egil Skallagrimsson"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estructura real de los nombres vikingos",
        "body": "<p>Los nórdicos no usaban apellidos fijos sino <strong>patronímicos</strong>: el hijo de Erik se llamaba Eriksson (hijo de Erik), la hija Eriksdóttir (hija de Erik). Bjorn Ironside significa literalmente 'Bjorn hijo de Ragnar, llamado Costado de Hierro'. Este sistema seguía líneas paternas exclusivamente.</p><p>Los apodos (<strong>kennings</strong>) describían logros o características: Harald Hårfagre (Cabello Hermoso), Ivar el Deshuesado (posiblemente por una enfermedad ósea), Erik Blodøks (Hacha Sangrienta). Un error en ficción es inventar apodos sin fundamento: 'el Destructor de Mundos' suena moderno, 'el Rompe-Escudos' es auténtico porque describe una técnica de combate específica.</p><p>Para narrativa histórica precisa, combiná nombres comunes (Olaf, Sigurd, Gunnar) con patronímicos reales y apodos ganados. <strong>Lagertha</strong> aparece en las crónicas de Saxo Gramático como guerrera real, no invención televisiva. Los nombres femeninos terminaban en -fríðr (hermosa), -hildr (batalla), -rún (secreto): Gunnhildr, Ástríðr, Sigrun.</p>"
      },
      {
        "h2": "Diferencias entre raiders, comerciantes y colonos",
        "body": "<p>La palabra 'vikingo' era un verbo (<em>fara í víking</em> = ir de incursión), no una etnia. La mayoría de nórdicos eran granjeros; solo 5-10% participaban en raids. Los <strong>drengir</strong> (guerreros jóvenes) buscaban fama; los <strong>járnar</strong> (comerciantes) riqueza pacífica; los colonos en Islandia o Groenlandia nunca hicieron raids.</p><p>Esto afecta nombres: un comerciante sueco en Constantinopla adoptaría nombres cristianos (Harald se volvía Harold), un colono islandés mantenía tradición nórdica pura. <strong>Leif Erikson</strong> fue explorador pacífico, no guerrero. Su padre <strong>Erik el Rojo</strong> se exilió por asesinato, explicando su apodo.</p><p>Para worldbuilding, considerá el rol: un berserker (guerrero en trance de batalla) tendría apodo feroz ('el Oso', 'el Lobo'), un escaldo (poeta) algo refinado ('Lengua de Plata', 'Hacedor de Versos'). <strong>Egil Skallagrímsson</strong> fue ambos: guerrero brutal Y el mejor poeta de su era. Los vikingos eran complejos, no caricaturas.</p>"
      },
      {
        "h2": "Mitología nórdica en nombres personales",
        "body": "<p>Muchos nombres invocan deidades: <strong>Thor</strong>-stein (Piedra de Thor), <strong>Frey</strong>-dis (Mujer de Frey), <strong>Ing</strong>-var (Guerrero de Ing). Otros refieren animales totémicos: Bjorn (oso), Ulf (lobo), Orn (águila). Los compuestos eran creativos: Asbjorn (oso divino), Thorolf (lobo de Thor), Sigurd (victoria + guardián).</p><p>Error común: mezclar panteones. Los nórdicos no mezclaban nombres greco-romanos con suyos. Nombres como 'Odin el Zeus del Norte' son invenciones modernas sin base histórica. <strong>Odin</strong> mismo raramente aparecía en nombres personales (considerado peligroso invocar al Padre de Todos directamente); Thor era más común por protector.</p><p>Las <strong>valquirias</strong> mitológicas tenían nombres descriptivos: Gunnr (batalla), Hildr (combate), Skögul (furiosa). Estos se reciclaban para niñas reales. Si escribís fantasía nórdica, estudiá el <em>Poetic Edda</em> y <em>Prose Edda</em> para nombres auténticos. <strong>Snorri Sturluson</strong> (siglo XIII) preservó miles de kennings utilizables.</p>"
      },
      {
        "h2": "Uso de nombres nórdicos en RPGs modernos",
        "body": "<p>En <strong>Dungeons & Dragons</strong> o <strong>Skyrim</strong>, los nombres nórdicos comunican herencia cultural. Errores frecuentes: usar 'ø' en exceso (raro en antiguo nórdico), inventar terminaciones imposibles (-throk, -gorn), mezclar época vikinga (793-1066 d.C.) con nombres medievales tardíos.</p><p>Para NPCs memorables, seguí patrones históricos: nombre + patronímico + apodo ganado. 'Thorstein Eriksson el Rompe-Hielo' funciona mejor que 'Ragnarok Destructor'. Los jugadores recuerdan apodos que refieren hazañas en campaña: si un PJ mata un dragón, podría ganar 'Ormsbanir' (Asesino de Serpiente).</p><p><strong>Assassin's Creed Valhalla</strong> hizo trabajo sólido mezclando nombres documentados (Sigurd, Basim) con inventados que suenan plausibles. Un truco: usá sufijos auténticos (-sson, -dóttir, -bjorn, -ulf) con raíces inventadas. 'Hrefnar Bjornsson' suena nórdico aunque 'Hrefnar' no esté documentado. Evitá consonantes imposibles en antiguo nórdico (la 'x' no existía, por ejemplo).</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Los vikingos realmente tenían apodos tan descriptivos?",
        "a": "Sí, los apodos eran literales y ganados por hechos concretos. Harald 'Hardrada' significa 'gobernante duro', Erik 'Bloodaxe' obtuvo su nombre tras matar hermanos para tomar el trono."
      },
      {
        "q": "¿Por qué tantos nombres terminan en -son o -dottir?",
        "a": "Son patronímicos, no apellidos. Significan 'hijo de' e 'hija de'. El sistema persistió en Islandia hasta hoy: Björk Guðmundsdóttir es 'Björk, hija de Guðmundur'."
      },
      {
        "q": "¿Puedo usar nombres nórdicos para personajes femeninos fuertes?",
        "a": "Absolutamente. Las sagas documentan guerreras como Lagertha, Freydis y Hervor. Muchos nombres femeninos incluyen -hildr (batalla) reflejando cultura guerrera."
      },
      {
        "q": "¿Qué diferencia hay entre nombres vikingos y nombres germánicos?",
        "a": "Comparten raíces proto-germánicas pero divergieron. Los nórdicos mantuvieron mitología pagana más tiempo; los germanos continentales cristianizaron antes, modificando nombres hacia formas latinas."
      }
    ]
  },
  "en": {
    "pageTitle": "Viking Name Generator | Genfy",
    "metaDesc": "Generate authentic Norse names for vikings, jarls and warriors. Perfect for games, historical novels and epic fantasy characters.",
    "h1": "Viking Name Generator",
    "intro": "Forge epic identities from the Norse era. Names that resonate with Thor's thunder and sagas of immortal heroes carved in runes.",
    "tag": "Fun",
    "filterLabel": "Viking type",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "male_warriors",
        "label": "Warriors",
        "items": [
          "Ragnar Lodbrok",
          "Bjorn Ironside",
          "Ivar the Boneless",
          "Halfdan the Black",
          "Harald Hardrada",
          "Erik the Red",
          "Leif Erikson",
          "Rollo of Normandy",
          "Sigurd Snake-in-the-Eye",
          "Gunnar Hamundarson",
          "Egil Skallagrímsson",
          "Olaf the Saint",
          "Sweyn Forkbeard",
          "Thorfinn Karlsefni",
          "Sven Estridsson",
          "Magnus Barelegs",
          "Canute the Great",
          "Thorstein the Red",
          "Ulf Uggason",
          "Orm the Old",
          "Hastein the Raider",
          "Ketil Flatnose",
          "Asbjorn Seal",
          "Thorolf Butter",
          "Gorm the Old",
          "Hrólfr Kraki",
          "Eirik Bloodaxe",
          "Sigvaldi Strut-Haraldsson",
          "Thorkell the Tall",
          "Herjolf Bardarson"
        ]
      },
      {
        "id": "female_warriors",
        "label": "Shield Maidens",
        "items": [
          "Lagertha the Valkyrie",
          "Freydis Eiríksdóttir",
          "Hervor the Warrior",
          "Brynhildr the Untamed",
          "Gudrun Gjúkadóttir",
          "Aud the Deep-Minded",
          "Thorunn Hyrna",
          "Sigrid the Haughty",
          "Gunnhild Mother of Kings",
          "Thyra of Denmark",
          "Astrid of Norway",
          "Ragnhild the Mighty",
          "Gyda Eiriksdottir",
          "Torvi the Explorer",
          "Aslaug Kraka",
          "Helga the Seer",
          "Ingrid the Dark",
          "Bergthora of Iceland",
          "Unn the Deep-Minded",
          "Vigdis the Fair",
          "Hallveig Strongbox",
          "Jorunn Skaldmaer",
          "Thora Borgarhjort",
          "Hild the Battle",
          "Yngvild the Brave"
        ]
      },
      {
        "id": "jarls",
        "label": "Jarls and Nobles",
        "items": [
          "Jarl Borg of Götaland",
          "Jarl Haakon Sigurdsson",
          "Jarl Thorfinn of Orkney",
          "Jarl Rognvald Eysteinsson",
          "Jarl Sigurd the Mighty",
          "Jarl Eirik Håkonsson",
          "Jarl Svein Håkonsson",
          "Jarl Skule Bårdsson",
          "Jarl Erling Skakke",
          "Jarl Birger Magnusson",
          "Thrand of Orkney",
          "Sigurd the Crusader",
          "Grjotgard the Wise",
          "Thorir the Peaceful",
          "Hring the Lawmaker",
          "Arnor Jarl",
          "Finn the Fat",
          "Bardi the Hospitable",
          "Gissur the White",
          "Kolskegg the Wise"
        ]
      },
      {
        "id": "berserkers",
        "label": "Berserkers",
        "items": [
          "Bödvar Bjarki",
          "Hjalti the Magnanimous",
          "Bjorn the Bear",
          "Ulf Bjalfason",
          "Thorir Hund",
          "Kveldulf the Night Wolf",
          "Hord the Fierce",
          "Starkad the Old",
          "Egil the Brutal",
          "Skallagrim Bald",
          "Hrolf Bear-Strong",
          "Asgrim the Wild",
          "Thorgeir the Butcher",
          "Grim Hairy-Cheeks",
          "Thrain the Unstoppable",
          "Arnkel the Frenzied",
          "Odd the Wrathful",
          "Killer-Hrapp",
          "Thorstein Ox-Might",
          "Viga-Glum the Killer",
          "Thorgeir Craggeir",
          "Surt the Black",
          "Thord Bellower",
          "Geirmund Heljarskinn",
          "Brodd-Helgi Stout"
        ]
      },
      {
        "id": "skalds",
        "label": "Skalds and Wise",
        "items": [
          "Bragi Boddason",
          "Eyvindr Skáldaspillir",
          "Hallfreðr Óttarsson",
          "Gunnlaug Serpent-Tongue",
          "Kormákr Ögmundarson",
          "Thormod Kolbrunarskald",
          "Sigvatr Thórdarson",
          "Arnorr Jarlaskáld",
          "Einar Skálaglamm",
          "Glúmr Geirason",
          "Thord Sjáreksson",
          "Hofgarða-Refr Gestsson",
          "Tindr Hallkelsson",
          "Ottar the Black",
          "Snorri Sturluson",
          "Saxo Grammaticus",
          "Thiodolf of Hvinir",
          "Thorbjorn Hornklofi",
          "Ulf Uggason",
          "Egil Skallagrimsson"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Real structure of Viking names",
        "body": "<p>Norse people didn't use fixed surnames but <strong>patronymics</strong>: Erik's son was called Eriksson (son of Erik), his daughter Eriksdóttir (daughter of Erik). Bjorn Ironside literally means 'Bjorn son of Ragnar, called Ironside'. This system followed paternal lines exclusively.</p><p>Nicknames (<strong>kennings</strong>) described achievements or characteristics: Harald Hårfagre (Fair-Hair), Ivar the Boneless (possibly due to bone disease), Erik Bloodaxe (self-explanatory). A fiction mistake is inventing unfounded nicknames: 'the World Destroyer' sounds modern, 'the Shield-Breaker' is authentic because it describes a specific combat technique.</p><p>For accurate historical fiction, combine common names (Olaf, Sigurd, Gunnar) with real patronymics and earned nicknames. <strong>Lagertha</strong> appears in Saxo Grammaticus's chronicles as a real warrior, not TV invention. Female names ended in -fríðr (beautiful), -hildr (battle), -rún (secret): Gunnhildr, Ástríðr, Sigrun.</p>"
      },
      {
        "h2": "Differences between raiders, traders and settlers",
        "body": "<p>The word 'viking' was a verb (<em>fara í víking</em> = to go raiding), not an ethnicity. Most Norse were farmers; only 5-10% participated in raids. The <strong>drengir</strong> (young warriors) sought fame; the <strong>kaupmaðr</strong> (traders) peaceful wealth; settlers in Iceland or Greenland never raided.</p><p>This affects names: a Swedish trader in Constantinople would adopt Christian names (Harald became Harold), an Icelandic settler maintained pure Norse tradition. <strong>Leif Erikson</strong> was a peaceful explorer, not a warrior. His father <strong>Erik the Red</strong> was exiled for murder, explaining his nickname.</p><p>For worldbuilding, consider the role: a berserker (battle-trance warrior) would have a fierce nickname ('the Bear', 'the Wolf'), a skald (poet) something refined ('Silver-Tongue', 'Verse-Maker'). <strong>Egil Skallagrímsson</strong> was both: brutal warrior AND the best poet of his era. Vikings were complex, not caricatures.</p>"
      },
      {
        "h2": "Norse mythology in personal names",
        "body": "<p>Many names invoke deities: <strong>Thor</strong>-stein (Thor's Stone), <strong>Frey</strong>-dis (Frey's Woman), <strong>Ing</strong>-var (Ing's Warrior). Others refer to totemic animals: Bjorn (bear), Ulf (wolf), Orn (eagle). Compounds were creative: Asbjorn (divine bear), Thorolf (Thor's wolf), Sigurd (victory + guardian).</p><p>Common mistake: mixing pantheons. Norse didn't mix Greco-Roman names with theirs. Names like 'Odin the Zeus of the North' are modern inventions without historical basis. <strong>Odin</strong> himself rarely appeared in personal names (considered dangerous to invoke the All-Father directly); Thor was more common as protector.</p><p>Mythological <strong>valkyries</strong> had descriptive names: Gunnr (battle), Hildr (combat), Skögul (furious). These were recycled for real girls. If writing Norse fantasy, study the <em>Poetic Edda</em> and <em>Prose Edda</em> for authentic names. <strong>Snorri Sturluson</strong> (13th century) preserved thousands of usable kennings.</p>"
      },
      {
        "h2": "Using Norse names in modern RPGs",
        "body": "<p>In <strong>Dungeons & Dragons</strong> or <strong>Skyrim</strong>, Norse names communicate cultural heritage. Frequent mistakes: overusing 'ø' (rare in Old Norse), inventing impossible endings (-throk, -gorn), mixing Viking Age (793-1066 AD) with late medieval names.</p><p>For memorable NPCs, follow historical patterns: name + patronymic + earned nickname. 'Thorstein Eriksson the Ice-Breaker' works better than 'Ragnarok Destroyer'. Players remember nicknames referring to campaign feats: if a PC kills a dragon, they might earn 'Ormsbanir' (Serpent-Slayer).</p><p><strong>Assassin's Creed Valhalla</strong> did solid work mixing documented names (Sigurd, Basim) with plausible-sounding invented ones. A trick: use authentic suffixes (-sson, -dóttir, -bjorn, -ulf) with invented roots. 'Hrefnar Bjornsson' sounds Norse even though 'Hrefnar' isn't documented. Avoid impossible Old Norse consonants (the 'x' didn't exist, for example).</p>"
      }
    ],
    "faq": [
      {
        "q": "Did Vikings really have such descriptive nicknames?",
        "a": "Yes, nicknames were literal and earned through concrete deeds. Harald 'Hardrada' means 'hard ruler', Erik 'Bloodaxe' got his name after killing brothers to take the throne."
      },
      {
        "q": "Why do so many names end in -son or -dottir?",
        "a": "They're patronymics, not surnames. They mean 'son of' and 'daughter of'. The system persists in Iceland today: Björk Guðmundsdóttir is 'Björk, daughter of Guðmundur'."
      },
      {
        "q": "Can I use Norse names for strong female characters?",
        "a": "Absolutely. Sagas document warriors like Lagertha, Freydis and Hervor. Many female names include -hildr (battle) reflecting warrior culture."
      },
      {
        "q": "What's the difference between Viking and Germanic names?",
        "a": "They share Proto-Germanic roots but diverged. Norse maintained pagan mythology longer; continental Germans Christianized earlier, modifying names toward Latin forms."
      }
    ]
  }
};
