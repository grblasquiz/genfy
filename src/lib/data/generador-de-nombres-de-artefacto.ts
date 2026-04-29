import type { GenData } from './types';

export const data: GenData = {
  "slug": { "es": "generador-de-nombres-de-artefacto", "en": "artifact-name-generator" },
  "category": "fun",
  "emoji": "💎",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Artefacto Mágico | Genfy",
    "metaDesc": "Creá nombres de artefactos antiguos, reliquias y objetos mágicos con historia épica. Combinaciones legendarias para D&D, fantasía y videojuegos.",
    "h1": "Generador de Nombres de Artefacto Mágico",
    "intro": "Forjá reliquias inolvidables que muevan tramas enteras. Cada nombre transmite poder, origen y la maldición o bendición que carga el objeto.",
    "tag": "Worldbuilding",
    "filterLabel": "Componente",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de objeto",
        "items": [
          "Espada", "Hacha", "Lanza", "Daga", "Mazo", "Arco", "Báculo", "Cetro", "Corona", "Anillo",
          "Amuleto", "Medallón", "Cáliz", "Espejo", "Reliquia", "Tomo", "Grimorio", "Pluma", "Yelmo", "Escudo",
          "Brazal", "Ojo", "Lágrima", "Corazón", "Brújula", "Llave", "Caja", "Estandarte", "Máscara", "Esfera",
          "Carta", "Anular", "Sigilo", "Pergamino", "Manuscrito", "Astrolabio", "Reloj", "Tridente", "Manto", "Botella"
        ]
      },
      {
        "id": "owner",
        "label": "Dueño legendario",
        "items": [
          "del Rey Olvidado", "de la Reina Caída", "del Profeta Ciego", "del Mago Errante", "del Último Dragón", "del Primer Hombre", "del Dios Dormido", "del Sabio Eterno", "del Tirano Devorado", "de la Bruja Inmortal",
          "de Vael'orin", "de Khazgrad", "de Aurelius", "de Mireth", "de Vandros", "de la Hermandad Negra", "de la Orden Solar", "de los Mil Reyes", "de los Hijos de la Noche", "de los Custodios",
          "del Hereje", "del Santo Mártir", "del Cazador", "del Asceta", "del Forjador", "del Sumo Sacerdote", "del Inquisidor", "del Bardo Loco", "del Alquimista", "del Astrónomo"
        ]
      },
      {
        "id": "epithet",
        "label": "Epíteto",
        "items": [
          "Susurrante", "Hambriento", "Sagrado", "Maldito", "Eterno", "Sangrante", "Llorante", "Verdadero", "Falso", "Roto",
          "del Trueno", "del Hielo", "de Fuego", "de Sombra", "de Luz", "de la Sed", "del Olvido", "del Recuerdo", "de la Última Hora", "del Alba",
          "Inquebrantable", "Despiadado", "Misericordioso", "Devorador de Almas", "Oxidado", "Resplandeciente", "Sin Filo", "Mil Veces Forjado", "Manchado", "Purificado"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué un buen nombre de artefacto cambia tu campaña",
        "body": "<p>Un artefacto mágico anónimo es solo un buff de estadísticas. Un artefacto con nombre se vuelve personaje. 'Espada +3' es olvidable; 'Llorasangre del Rey Olvidado' invita a investigar quién fue el rey, por qué llora la espada y qué pasó cuando se rompió. Cada nombre debería contener una pregunta que el jugador o lector quiera responder.</p><p>La estructura clásica funciona: <strong>Tipo de objeto + Dueño + Epíteto</strong> o <strong>Epíteto + Tipo</strong>. 'Lanza Susurrante de Vandros' tiene tres ganchos: la lanza, Vandros, el susurro. Cada uno puede convertirse en una sesión de juego o capítulo de novela. Si tu artefacto solo tiene un gancho, está sub-utilizando su potencial narrativo.</p><p>Asociá una restricción al artefacto. 'Corona de Mireth' debería tener un costo: solo la pueden vestir descendientes directos, o produce migrañas paralizantes a quien la usa más de un día. Las restricciones generan dilemas; sin ellas el objeto es solo una ventaja sin profundidad. Fíjate cómo el Anillo Único requiere su precio: el portador se corrompe.</p>"
      },
      {
        "h2": "Cómo darle historia a un artefacto",
        "body": "<p>Definí cuatro hitos en la vida del artefacto: forja, primer dueño famoso, evento traumático, paradero actual. 'El Cetro de Aurelius fue forjado en la Era del Sol Negro por enanos exiliados, lo empuñó el primer emperador, se perdió en la Batalla del Páramo, y rumores lo ubican en una catedral abandonada del norte.' Cuatro frases construyen siglos de lore.</p><p>Los artefactos más memorables tienen agencia: hacen algo activo, no solo se equipan. Excalibur reconoce al verdadero rey; Mjolnir solo lo levanta el digno; el Necronomicón susurra a quien lo lee. Decidí qué hace tu artefacto: ¿elige dueño? ¿exige sacrificios? ¿revela visiones? Esa agencia lo vuelve tema de conversación entre personajes.</p><p>Vinculá el artefacto a una facción del mundo. La Orden Solar reclama el Cetro de Aurelius como reliquia legítima; la Hermandad Negra lo quiere destruir; cazadores de tesoros lo buscan por dinero. Cuando el grupo de jugadores lo encuentra, ya hay tres facciones interesadas en lo que decidan hacer. Conflicto ya servido.</p>"
      },
      {
        "h2": "Errores frecuentes al nombrar artefactos",
        "body": "<p>El error más común es el nombre genérico: 'Espada Mágica', 'Anillo del Poder'. Si los jugadores no recuerdan el nombre cinco minutos después, perdiste la oportunidad. Cargá el nombre con especificidad emocional o histórica. 'Espada del Hereje' es mejor que 'Espada Sagrada' porque inmediatamente plantea de qué fue herético.</p><p>Otro tropiezo: la sobreabundancia. Si cada NPC tiene un artefacto único, ninguno se siente especial. Reservá los artefactos con nombre para 5-10 piezas clave de la campaña; el resto puede ser equipo mágico común sin lore. La rareza por diseño es lo que vuelve memorable a los nombrados.</p><p>Cuidado con los epítetos contradictorios. 'Espada Sagrada Maldita Devoradora de Almas Pacífica' es absurdo. Un buen nombre tiene tensión interna controlada: 'Misericordia Maldita' funciona porque la contradicción es legible y dramática; 'Pacífica Asesina Sagrada' sólo confunde. Mantené dos elementos en tensión, no cuatro.</p>"
      },
      {
        "h2": "Aplicación en novelas, cómics y videojuegos",
        "body": "<p>En novelas, introducí el artefacto antes de revelar su nombre completo. Que aparezca primero como 'la espada' y solo en el momento dramático correcto se diga 'Llorasangre, llamada así por el rey que la forjó con el llanto de su hija muerta'. La revelación del nombre es escena climática, no expositiva.</p><p>En videojuegos RPG, el nombre debe encajar en la UI: pantalla de inventario, tooltip, descripción larga. Nombres de más de 25 caracteres se cortan. Probá tus nombres en mockups antes de comprometerte. <em>Dark Souls</em> domina esto: 'Catalizador de Bellowing Dragoncrest' transmite tono y backstory en cinco palabras visibles en pantalla.</p><p>En cómics, el artefacto se beneficia de un diseño visual icónico que el lector reconozca de inmediato. El nombre actúa como ancla cuando el dibujo cambia entre paneles. La Capa de Levitación, los Anillos de Mandarín, el Guantelete del Infinito: nombres simples, diseños memorables. Buscá ese balance: nombre evocador pero no rebuscado, diseño que el ilustrador pueda repetir.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos artefactos legendarios debería tener una campaña de D&D?",
        "a": "Para una campaña de 1 a 20 niveles, entre 5 y 8 artefactos con nombre propio funciona bien. Demasiados diluyen el impacto; muy pocos dejan al equipo sin sets icónicos para coleccionar."
      },
      {
        "q": "¿Conviene que el nombre del artefacto revele su poder?",
        "a": "No siempre. 'Llorasangre' insinúa pero no explica; 'Espada de Bola de Fuego' agota la sorpresa. Mantené el nombre evocador y dejá que el efecto mecánico se descubra al usarlo."
      },
      {
        "q": "¿Puedo darle al artefacto una voz propia?",
        "a": "Sí, las armas inteligentes son un clásico de D&D. Si tu artefacto habla, definí su personalidad, sus objetivos y cómo reacciona a las decisiones del portador. Eso multiplica su valor narrativo."
      },
      {
        "q": "¿Cómo nombro un artefacto que es secundario pero importante?",
        "a": "Usá un nombre simple con un epíteto que apunte a su utilidad: 'Brújula del Norte Verdadero', 'Espejo del Recuerdo'. No necesita un dueño legendario, basta con función clara y nombre memorable."
      }
    ]
  },
  "en": {
    "pageTitle": "Magic Artifact Name Generator | Genfy",
    "metaDesc": "Create ancient artifact, relic and magical object names with epic history. Legendary combinations for D&D, fantasy and video games.",
    "h1": "Magic Artifact Name Generator",
    "intro": "Forge unforgettable relics that drive entire plots. Each name conveys power, origin and the curse or blessing the object carries.",
    "tag": "Worldbuilding",
    "filterLabel": "Component",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Object type",
        "items": [
          "Sword", "Axe", "Spear", "Dagger", "Mace", "Bow", "Staff", "Scepter", "Crown", "Ring",
          "Amulet", "Medallion", "Chalice", "Mirror", "Relic", "Tome", "Grimoire", "Quill", "Helm", "Shield",
          "Bracer", "Eye", "Tear", "Heart", "Compass", "Key", "Box", "Banner", "Mask", "Orb",
          "Card", "Signet", "Sigil", "Scroll", "Manuscript", "Astrolabe", "Clock", "Trident", "Cloak", "Vial"
        ]
      },
      {
        "id": "owner",
        "label": "Legendary owner",
        "items": [
          "of the Forgotten King", "of the Fallen Queen", "of the Blind Prophet", "of the Wandering Mage", "of the Last Dragon", "of the First Man", "of the Sleeping God", "of the Eternal Sage", "of the Devoured Tyrant", "of the Immortal Witch",
          "of Vael'orin", "of Khazgrad", "of Aurelius", "of Mireth", "of Vandros", "of the Black Brotherhood", "of the Solar Order", "of the Thousand Kings", "of the Children of Night", "of the Keepers",
          "of the Heretic", "of the Holy Martyr", "of the Hunter", "of the Ascetic", "of the Forger", "of the High Priest", "of the Inquisitor", "of the Mad Bard", "of the Alchemist", "of the Astronomer"
        ]
      },
      {
        "id": "epithet",
        "label": "Epithet",
        "items": [
          "Whispering", "Hungering", "Sacred", "Cursed", "Eternal", "Bleeding", "Weeping", "True", "False", "Broken",
          "of Thunder", "of Ice", "of Fire", "of Shadow", "of Light", "of Thirst", "of Oblivion", "of Memory", "of the Last Hour", "of Dawn",
          "Unbroken", "Ruthless", "Merciful", "Soul Devourer", "Rusted", "Resplendent", "Edgeless", "Thousand-Times Forged", "Stained", "Purified"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why a good artifact name changes your campaign",
        "body": "<p>An anonymous magic artifact is just a stat buff. A named artifact becomes a character. 'Sword +3' is forgettable; 'Bloodweep of the Forgotten King' invites investigating who the king was, why the sword weeps, and what happened when it broke. Each name should contain a question players or readers want answered.</p><p>The classic structure works: <strong>Object type + Owner + Epithet</strong> or <strong>Epithet + Object</strong>. 'Whispering Spear of Vandros' has three hooks: the spear, Vandros, the whisper. Each can become a play session or novel chapter. If your artifact has only one hook, it's underusing its narrative potential.</p><p>Attach a restriction to the artifact. 'Crown of Mireth' should cost something: only direct descendants can wear it, or it produces paralyzing migraines if used over a day. Restrictions generate dilemmas; without them the object is just an advantage without depth. Notice how the One Ring demands its price: the bearer is corrupted.</p>"
      },
      {
        "h2": "How to give an artifact history",
        "body": "<p>Define four milestones in the artifact's life: forging, first famous owner, traumatic event, current whereabouts. 'The Scepter of Aurelius was forged in the Era of the Black Sun by exiled dwarves, wielded by the first emperor, lost in the Battle of the Wastes, and rumors place it in an abandoned northern cathedral.' Four sentences build centuries of lore.</p><p>The most memorable artifacts have agency: they do something active, not just equip. Excalibur recognizes the true king; Mjolnir is only lifted by the worthy; the Necronomicon whispers to its reader. Decide what your artifact does: does it choose its bearer? demand sacrifices? reveal visions? That agency makes it conversation fuel between characters.</p><p>Tie the artifact to a world faction. The Solar Order claims the Scepter of Aurelius as legitimate relic; the Black Brotherhood wants to destroy it; treasure hunters want it for money. When the player group finds it, three factions are already interested in what they decide. Conflict served.</p>"
      },
      {
        "h2": "Common mistakes when naming artifacts",
        "body": "<p>The most common error is the generic name: 'Magic Sword', 'Ring of Power'. If players don't remember the name five minutes later, you missed the chance. Charge the name with emotional or historical specificity. 'Sword of the Heretic' beats 'Sacred Sword' because it immediately raises what was heretical.</p><p>Another stumble: overabundance. If every NPC has a unique artifact, none feels special. Reserve named artifacts for 5-10 key pieces of the campaign; the rest can be common magical gear without lore. Designed rarity is what makes named ones memorable.</p><p>Beware contradictory epithets. 'Sacred Cursed Soul-Devouring Peaceful Sword' is absurd. A good name has controlled internal tension: 'Cursed Mercy' works because the contradiction is legible and dramatic; 'Peaceful Sacred Killer' just confuses. Keep two elements in tension, not four.</p>"
      },
      {
        "h2": "Application in novels, comics and video games",
        "body": "<p>In novels, introduce the artifact before revealing its full name. Let it appear first as 'the sword' and only at the right dramatic moment say 'Bloodweep, named for the king who forged it with the tears of his dead daughter'. Name reveal is climactic scene, not expository.</p><p>In RPG video games, the name must fit the UI: inventory screen, tooltip, long description. Names over 25 characters get cut. Test your names in mockups before committing. <em>Dark Souls</em> nails this: 'Bellowing Dragoncrest Catalyst' conveys tone and backstory in five visible words.</p><p>In comics, the artifact benefits from iconic visual design the reader instantly recognizes. The name acts as anchor when the drawing changes between panels. The Cloak of Levitation, Mandarin's Rings, the Infinity Gauntlet: simple names, memorable designs. Find that balance: evocative but not contrived name, design the illustrator can repeat.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many legendary artifacts should a D&D campaign have?",
        "a": "For a 1-20 level campaign, between 5 and 8 named artifacts works well. Too many dilute impact; too few leave the party without iconic sets to collect."
      },
      {
        "q": "Should the artifact name reveal its power?",
        "a": "Not always. 'Bloodweep' hints but doesn't explain; 'Sword of Fireball' exhausts the surprise. Keep the name evocative and let mechanical effect be discovered through use."
      },
      {
        "q": "Can I give the artifact its own voice?",
        "a": "Yes, intelligent weapons are D&D classics. If your artifact talks, define its personality, goals and how it reacts to bearer decisions. That multiplies narrative value."
      },
      {
        "q": "How do I name a secondary but important artifact?",
        "a": "Use a simple name with an epithet pointing to its utility: 'Compass of True North', 'Mirror of Memory'. No legendary owner needed; clear function and memorable name suffice."
      }
    ]
  }
};
