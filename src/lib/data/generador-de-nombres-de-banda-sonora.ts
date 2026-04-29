import type { GenData } from './types';

export const data: GenData = {
  "slug": { "es": "generador-de-nombres-de-banda-sonora", "en": "soundtrack-title-generator" },
  "category": "content",
  "emoji": "🎵",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Títulos de Banda Sonora | Genfy",
    "metaDesc": "Creá títulos evocadores de bandas sonoras, OSTs y pistas musicales para videojuegos, películas y proyectos audiovisuales. Inspiración cinematográfica.",
    "h1": "Generador de Títulos de Banda Sonora",
    "intro": "Bautizá tus pistas con títulos que evoquen escenas, emociones y atmósferas. Para compositores de OST, sound designers y proyectos audiovisuales.",
    "tag": "Música",
    "filterLabel": "Componente",
    "countLabel": "Cantidad",
    "generateLabel": "Generar títulos",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "modifier",
        "label": "Modificador inicial",
        "items": [
          "El", "La", "Un", "Una", "Los", "Las", "Cuando", "Antes de", "Después de", "Mientras",
          "Bajo", "Sobre", "Tras", "Detrás de", "En el", "En la", "Hacia", "Lejos de", "Rumbo a", "Volver a",
          "Donde", "Adonde", "Junto a", "Sin", "Con", "Para", "Por", "Solo", "Casi", "Apenas"
        ]
      },
      {
        "id": "subject",
        "label": "Sujeto evocador",
        "items": [
          "Cielo Vacío", "Mar Quieto", "Bosque Despierto", "Ciudad Dormida", "Corazón Lento", "Reloj Mudo", "Sueño Perdido", "Adiós Sin Voz", "Vuelo Final", "Camino Roto",
          "Última Tarde", "Primer Invierno", "Lluvia de Enero", "Luna Helada", "Sol de Sal", "Niebla Larga", "Viento del Sur", "Tormenta Lenta", "Eclipse de Marzo", "Aurora Quieta",
          "Tren Perdido", "Faro Apagado", "Puerto Vacío", "Calle Sin Nombre", "Casa Cerrada", "Jardín Olvidado", "Carta Sin Firmar", "Foto Vieja", "Mapa Roto", "Llave Sin Cerradura",
          "Adiós", "Promesa", "Memoria", "Ausencia", "Regreso", "Espera", "Caída", "Vuelo", "Olvido", "Recuerdo"
        ]
      },
      {
        "id": "qualifier",
        "label": "Cualificador opcional",
        "items": [
          "Eterno", "Roto", "Suave", "Lento", "Profundo", "Tenue", "Dorado", "Plateado", "Helado", "Quemado",
          "Antes del Alba", "Tras la Lluvia", "Bajo la Luz", "Junto al Mar", "Sobre la Nieve", "En Silencio", "En Voz Baja", "Sin Mirar Atrás", "Sin Prisa", "Sin Final",
          "del Corazón", "del Tiempo", "de la Espera", "de la Distancia", "del Olvido", "del Regreso", "del Camino", "del Final", "del Comienzo", "de la Memoria"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué los títulos de OST cambian la percepción del oyente",
        "body": "<p>Un mismo loop de piano puede sentirse alegre o desgarrador según cómo lo etiquetes. 'Lluvia de Enero' versus 'Café del Domingo': la pista no cambia, pero la imaginación del oyente la dirige. Los compositores cinematográficos saben que el título es la primera dirección emocional del público. Hans Zimmer titula 'Time' a una pieza ya icónica; Joe Hisaishi llama 'One Summer's Day' al tema de <em>El Viaje de Chihiro</em>. La sencillez sugestiva funciona mejor que el barroquismo.</p><p>Hay tres registros básicos para títulos de OST. <strong>Sustantivo concreto + adjetivo</strong>: 'Cielo Vacío', 'Mar Quieto', 'Reloj Mudo'. <strong>Frase verbal</strong>: 'Cuando llega el invierno', 'Antes de partir', 'Volver a casa'. <strong>Concepto abstracto</strong>: 'Memoria', 'Ausencia', 'Promesa'. Mezclá los tres en un álbum para variedad rítmica al leer la lista de pistas.</p><p>Evitá títulos que dictan demasiado al oyente. 'Tema de pelea épica' empuja una sola interpretación; 'Donde nadie mira' deja espacio para que cada oyente lleve su propia escena. La música cinematográfica se beneficia de la apertura interpretativa: tu título debería ser puerta, no muro. Mirá los álbumes de Ólafur Arnalds o Nils Frahm: títulos cortos, evocadores, que invitan a imaginar.</p>"
      },
      {
        "h2": "Coherencia de álbum y arco emocional",
        "body": "<p>Un OST exitoso tiene unidad narrativa. Si tu álbum acompaña una película, los títulos deberían trazar el arco emocional: tema inicial luminoso, conflicto en el centro, resolución al final. <em>The Social Network</em> de Trent Reznor titula sus pistas en orden: 'Hand Covers Bruise', 'In Motion', 'A Familiar Taste'. El recorrido titular guía al oyente que escucha el álbum sin haber visto la película.</p><p>Para juegos, los títulos pueden ser referencias internas que el jugador reconoce. <em>Hollow Knight</em> tiene 'City of Tears' donde literalmente llueve, y 'White Palace' que coincide con la zona de plataformas blanca. Esos vínculos directos refuerzan la inmersión. Si componés OST para un juego, sentate con el equipo narrativo y ligá títulos a momentos específicos.</p><p>Los álbumes con concepto fuerte sostienen títulos más arriesgados. Un álbum llamado 'Inverno' puede titular pistas con meses, fenómenos meteorológicos o referencias literarias. Pero si tu álbum es genérico, tus títulos también necesitan ser autocontenidos. La coherencia titular es declaración: 'este álbum trata de X'. Esa promesa al oyente debe cumplirse en cada pista.</p>"
      },
      {
        "h2": "Errores típicos al titular OSTs",
        "body": "<p>El error más común es el título-descriptor obvio. 'Pelea con el villano final' es funcional pero olvidable. Mejor 'Última danza' o 'Donde acaba todo': mantenés referencia a la escena pero ganás resonancia. <em>Final Fantasy</em> es maestro en esto: 'Aerith's Theme' es directo, pero 'Eyes On Me' es enigmático y memorable décadas después.</p><p>Otro tropiezo: títulos demasiado largos. 'La canción que suena cuando los personajes se reencuentran después de tres años de separación' no entra en una playlist ni se busca en Spotify. Apuntá a 1-4 palabras. Si tu título no cabe en la columna 'Title' de iTunes sin truncarse, conviene acortarlo. Las suites largas pueden tener subtítulos entre paréntesis para versiones especiales.</p><p>Cuidado con replicar nombres famosos. 'Por un puñado de dólares', 'Carmina Burana' o 'Adagio for Strings' están tan asociados a sus piezas originales que copiarlos suena a parodia. Buscá tu título en Spotify y YouTube antes de publicar; si los primeros diez resultados son OSTs famosos, modificá una palabra. La originalidad protege tu identidad como compositor.</p>"
      },
      {
        "h2": "Aplicaciones para compositores indie y sound designers",
        "body": "<p>Para compositores autoeditados en Bandcamp o Spotify, el título es marketing. Los oyentes navegan playlists buscando pistas que les hablen. 'Niebla larga' tiene más probabilidad de clic que 'Track 4'. Invertí tiempo en titular cada pista; tu álbum lo agradecerá en escuchas casuales.</p><p>Los sound designers de podcasts y video corto necesitan biblioteca interna de cues con nombres claros. Si tu archivo se llama 'transición_v3_FINAL_FINAL', vas a perder horas buscando. Adoptá convención de nombres: 'Suspense Bajo (60s)', 'Resolución Cálida (15s)'. Los títulos descriptivos en archivos internos son distintos a los títulos artísticos en tu álbum publicado, pero ambos importan.</p><p>Para compositores de trailers, hay vocabulario específico que la industria reconoce: 'Awakening', 'Rising', 'Aftermath', 'Descent'. Si componés música de tráiler, alinear tu título con esa convención facilita licenciamiento. Las music libraries (Audio Network, Musicbed) clasifican por mood y los títulos descriptivos ayudan al algoritmo de búsqueda. Equilibrio: título evocador para humanos, tags descriptivos para máquinas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Conviene que el título incluya el nombre del personaje principal?",
        "a": "Solo si la pista está temáticamente ligada a ese personaje. <em>Aerith's Theme</em>, <em>Vito Corleone's Theme</em>: funcionan porque son leitmotivs claros. Para piezas atmosféricas, mejor títulos abstractos que no anclen a un solo personaje."
      },
      {
        "q": "¿Cómo titulo una pista que no tiene escena específica?",
        "a": "Recurrí a sensaciones físicas o atmosféricas: 'Aire frío', 'Luz dorada', 'Mar de noche'. Esas referencias permiten que el oyente proyecte sus propias imágenes sin chocar con narrativa específica."
      },
      {
        "q": "¿Es mejor titular en español, inglés o latín?",
        "a": "Depende de tu mercado y estilo. Inglés tiene mayor alcance internacional; español resuena en mercados hispanos; latín suena clásico y atemporal. Mezclá en un álbum si querés contraste, pero mantené consistencia tonal."
      },
      {
        "q": "¿Pueden los títulos repetirse en distintas partes de un álbum?",
        "a": "Sí, las suites usan numeración: 'Despedida I', 'Despedida II', 'Despedida (reprise)'. Eso indica al oyente que son variaciones temáticas. Útil para reforzar leitmotiv a lo largo del álbum."
      }
    ]
  },
  "en": {
    "pageTitle": "Soundtrack Title Generator | Genfy",
    "metaDesc": "Create evocative soundtrack, OST and music track titles for video games, films and audiovisual projects. Cinematic inspiration.",
    "h1": "Soundtrack Title Generator",
    "intro": "Name your tracks with titles evoking scenes, emotions and atmospheres. For OST composers, sound designers and audiovisual projects.",
    "tag": "Music",
    "filterLabel": "Component",
    "countLabel": "Amount",
    "generateLabel": "Generate titles",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "modifier",
        "label": "Initial modifier",
        "items": [
          "The", "A", "An", "When", "Before", "After", "While", "Until", "Once", "Whenever",
          "Under", "Over", "Beyond", "Behind", "Inside", "Outside", "Toward", "Away from", "Bound for", "Back to",
          "Where", "Whither", "Beside", "Without", "With", "For", "By", "Only", "Almost", "Barely"
        ]
      },
      {
        "id": "subject",
        "label": "Evocative subject",
        "items": [
          "Empty Sky", "Still Sea", "Awake Forest", "Sleeping City", "Slow Heart", "Mute Clock", "Lost Dream", "Voiceless Goodbye", "Final Flight", "Broken Road",
          "Last Afternoon", "First Winter", "January Rain", "Frozen Moon", "Salt Sun", "Long Mist", "Southern Wind", "Slow Storm", "March Eclipse", "Still Aurora",
          "Lost Train", "Dark Lighthouse", "Empty Harbor", "Nameless Street", "Closed House", "Forgotten Garden", "Unsigned Letter", "Old Photograph", "Broken Map", "Lockless Key",
          "Goodbye", "Promise", "Memory", "Absence", "Return", "Wait", "Fall", "Flight", "Forgetting", "Remembrance"
        ]
      },
      {
        "id": "qualifier",
        "label": "Optional qualifier",
        "items": [
          "Eternal", "Broken", "Soft", "Slow", "Deep", "Faint", "Golden", "Silver", "Frozen", "Burnt",
          "Before Dawn", "After the Rain", "Under the Light", "By the Sea", "On the Snow", "In Silence", "In a Whisper", "Without Looking Back", "Without Hurry", "Without End",
          "of the Heart", "of Time", "of Waiting", "of Distance", "of Forgetting", "of Returning", "of the Road", "of the End", "of Beginning", "of Memory"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why OST titles change listener perception",
        "body": "<p>The same piano loop can feel joyful or heartbreaking depending on the label. 'January Rain' versus 'Sunday Coffee': the track doesn't change, but the listener's imagination directs it. Cinematic composers know the title is the audience's first emotional cue. Hans Zimmer titles 'Time' to an iconic piece; Joe Hisaishi calls 'One Summer's Day' the <em>Spirited Away</em> theme. Suggestive simplicity beats baroqueness.</p><p>There are three basic OST title registers. <strong>Concrete noun + adjective</strong>: 'Empty Sky', 'Still Sea', 'Mute Clock'. <strong>Verb phrase</strong>: 'When Winter Comes', 'Before Departing', 'Returning Home'. <strong>Abstract concept</strong>: 'Memory', 'Absence', 'Promise'. Mix all three in an album for rhythmic variety when reading the tracklist.</p><p>Avoid titles that dictate too much. 'Epic Battle Theme' pushes one interpretation; 'Where Nobody Looks' leaves space for each listener to bring their own scene. Cinematic music benefits from interpretive openness: your title should be a door, not a wall. Look at Ólafur Arnalds or Nils Frahm albums: short, evocative titles inviting imagination.</p>"
      },
      {
        "h2": "Album coherence and emotional arc",
        "body": "<p>A successful OST has narrative unity. If your album accompanies a film, titles should trace the emotional arc: luminous opening theme, central conflict, final resolution. Trent Reznor's <em>The Social Network</em> titles in order: 'Hand Covers Bruise', 'In Motion', 'A Familiar Taste'. The titular journey guides the listener who hasn't seen the film.</p><p>For games, titles can be internal references the player recognizes. <em>Hollow Knight</em> has 'City of Tears' where it literally rains, and 'White Palace' matching the white platforming zone. Those direct links reinforce immersion. If you compose OST for a game, sit with the narrative team and tie titles to specific moments.</p><p>Albums with strong concept sustain bolder titles. An album called 'Inverno' can title tracks with months, weather phenomena or literary references. But if your album is generic, titles need self-containment. Title coherence is a statement: 'this album is about X'. That listener promise must be kept in every track.</p>"
      },
      {
        "h2": "Common mistakes titling OSTs",
        "body": "<p>The most common error is the obvious-descriptor title. 'Final Boss Battle' is functional but forgettable. Better 'Last Dance' or 'Where It All Ends': you keep scene reference but gain resonance. <em>Final Fantasy</em> masters this: 'Aerith's Theme' is direct, but 'Eyes On Me' is enigmatic and memorable decades later.</p><p>Another stumble: overly long titles. 'The Song That Plays When the Characters Reunite After Three Years of Separation' doesn't fit a playlist or Spotify search. Aim for 1-4 words. If your title doesn't fit iTunes 'Title' column without truncating, shorten it. Long suites can have parenthetical subtitles for special versions.</p><p>Beware replicating famous names. 'For a Few Dollars More', 'Carmina Burana' or 'Adagio for Strings' are so associated with originals that copying sounds like parody. Search your title on Spotify and YouTube before publishing; if first ten results are famous OSTs, change a word. Originality protects your composer identity.</p>"
      },
      {
        "h2": "Applications for indie composers and sound designers",
        "body": "<p>For self-published composers on Bandcamp or Spotify, the title is marketing. Listeners browse playlists looking for tracks that speak to them. 'Long Mist' has higher click probability than 'Track 4'. Invest time in titling each track; your album will thank you in casual listens.</p><p>Sound designers for podcasts and short video need internal cue libraries with clear names. If your file is 'transition_v3_FINAL_FINAL', you'll lose hours searching. Adopt naming convention: 'Low Suspense (60s)', 'Warm Resolution (15s)'. Descriptive internal titles differ from artistic titles on your published album, but both matter.</p><p>For trailer composers, the industry recognizes specific vocabulary: 'Awakening', 'Rising', 'Aftermath', 'Descent'. If you compose trailer music, aligning your title with that convention eases licensing. Music libraries (Audio Network, Musicbed) classify by mood and descriptive titles help search algorithms. Balance: evocative title for humans, descriptive tags for machines.</p>"
      }
    ],
    "faq": [
      {
        "q": "Should the title include the main character's name?",
        "a": "Only if the track is thematically tied to that character. <em>Aerith's Theme</em>, <em>Vito Corleone's Theme</em>: work because they're clear leitmotifs. For atmospheric pieces, abstract titles not anchoring to one character work better."
      },
      {
        "q": "How do I title a track without specific scene?",
        "a": "Resort to physical or atmospheric sensations: 'Cold Air', 'Golden Light', 'Sea at Night'. Those references let the listener project their own images without clashing with specific narrative."
      },
      {
        "q": "Is it better to title in English, Spanish or Latin?",
        "a": "Depends on your market and style. English has greater international reach; Spanish resonates in Hispanic markets; Latin sounds classical and timeless. Mix in an album for contrast, but maintain tonal consistency."
      },
      {
        "q": "Can titles repeat in different album sections?",
        "a": "Yes, suites use numbering: 'Goodbye I', 'Goodbye II', 'Goodbye (reprise)'. That signals to the listener these are thematic variations. Useful for reinforcing leitmotif throughout the album."
      }
    ]
  }
};
