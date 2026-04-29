import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-banda-punk", en: "punk-band-name-generator" },
  category: "fun",
  emoji: "🎸",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Banda Punk | Genfy",
    metaDesc: "Creá nombres rebeldes para bandas punk, hardcore y proyectos de música alternativa. Combinaciones provocadoras y memorables con actitud cruda.",
    h1: "Generador de Nombres de Banda Punk",
    intro: "Inventá nombres provocadores para tu banda de garage, hardcore o post-punk. Combinaciones cortas, ácidas y con actitud lista para imprimir en una remera.",
    tag: "Música",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "article",
        label: "Artículo",
        items: [
          "Los", "Las", "Los Putos", "Las Sucias", "Los Falsos",
          "Las Hijas de", "Los Hijos de", "Los Restos de", "Las Cenizas de", "Los Perros de",
          "Anti", "Contra", "Sin", "Ex", "Pre",
          "Los Últimos", "Los Primeros", "Los Malditos", "Las Brujas", "Los Sobrantes",
          "Los Dientes de", "Las Tripas de", "Los Vómitos de", "Los Escupidos de", "Los Quemados de",
          "Los Rotos", "Las Heridas", "Los Verdugos", "Las Locas", "Los Ratas"
        ]
      },
      {
        id: "noun",
        label: "Sustantivo",
        items: [
          "Concreto", "Asfalto", "Veneno", "Vómito", "Cuchillas",
          "Hospital", "Cementerio", "Suburbio", "Escombros", "Cloaca",
          "Cuervos", "Ratas", "Hienas", "Vísceras", "Sirena",
          "Fábrica", "Galpón", "Avenida", "Subterráneo", "Comisaría",
          "Domingo", "Lunes", "Madrugada", "Mediodía", "Apagón",
          "Estática", "Frecuencia", "Distorsión", "Saliva", "Encías"
        ]
      },
      {
        id: "modifier",
        label: "Modificador",
        items: [
          "Roto", "Sucio", "Hueco", "Falso", "Muerto",
          "Vencido", "Caducado", "Quemado", "Negro", "Crudo",
          "Mojado", "Seco", "Inútil", "Tóxico", "Ciego",
          "Cobarde", "Mudo", "Sordo", "Tibio", "Pegajoso",
          "Fracturado", "Doblado", "Marchito", "Vacío", "Oxidado",
          "Astillado", "Trizado", "Manchado", "Rayado", "Abollado"
        ]
      },
      {
        id: "tail",
        label: "Cierre",
        items: [
          "S.A.", "Express", "FM", "Records", "Crew",
          "Trío", "Cuarteto", "Brigada", "Comando", "División",
          "Brigade", "Squad", "Riot", "Crisis", "Patrol",
          "del Caos", "del Apagón", "del Domingo", "del Subte", "del Conurbano",
          "Punk", "Core", "Hardcore", "Noise", "Trash",
          "y los Boludos", "y la Cana", "y la Yuta", "y los Pendejos", "y la Banda"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomía de un buen nombre de banda punk",
        body: "<p>El punk lleva 50 años inventando nombres y un patrón se repite: provocación corta, fonética seca y referencia urbana inmediata. <em>Sex Pistols</em>, <em>Dead Kennedys</em>, <em>Black Flag</em>: dos palabras, choque entre lo cotidiano y lo prohibido. Si tu nombre necesita explicación, ya perdió. Lo que se imprime en una remera o se grita desde el público no admite subtítulos.</p><p>El truco está en mezclar registros opuestos. Un sustantivo común y vulgar (<em>asfalto, vómito, cloaca</em>) suena bien pegado a un artículo institucional o religioso. <strong>Los Hijos de la Cloaca</strong> funciona porque colisiona el lenguaje familiar con el barrio bajo. Lo mismo pasa con nombres como <em>Los Cadáveres</em> o <em>2 Minutos</em>: gancho mínimo, asociación máxima.</p><p>Evitá los nombres ya gastados: cualquier combinación con <em>kill, fuck, shit, blood</em> en inglés ya fue usada veinte veces. Apuntá a lo regional. En el punk argentino, palabras como <em>cana, yuta, conurbano, pendejo</em> tienen más identidad que cualquier americanada genérica. Las bandas que duran son las que suenan a un lugar y un tiempo concretos.</p>"
      },
      {
        h2: "Cómo elegir entre tres nombres que te convencen",
        body: "<p>Después de generar treinta opciones, te van a quedar dos o tres finalistas. Para decidir, hacé el test de Google: si la primera página tiene una banda activa con ese nombre, descartá. Mejor un nombre raro y único que uno bueno pero ocupado. Si tu banda crece, el nombre repetido te bloquea Spotify, Bandcamp e Instagram al mismo tiempo.</p><p>Segundo test: imprimí el nombre en una hoja A4 con tipografía neutra y pegalo en la pared. Mirá el nombre durante una semana. El que sigue gustando al séptimo día es el ganador. Los nombres que envejecen rápido son los que dependen de un chiste o referencia momentánea.</p><p>Tercer test: pedile a tres amigos no músicos que pronuncien el nombre tras leerlo una sola vez. Si ninguno lo dice bien, el nombre tiene problemas de comunicación oral. Las bandas viven de la radio, el flyer, el boca a boca. Si nadie sabe deletrearlo, no llega al show. Por eso <strong>Los Violadores</strong>, <strong>Attaque 77</strong> o <strong>Flema</strong> sobrevivieron: una sílaba o dos, fácil de gritar.</p>"
      },
      {
        h2: "Errores fatales al ponerle nombre a tu banda",
        body: "<p>El error número uno: nombres demasiado largos. <em>Los Brigada Anticonstitucional del Subterráneo Roto</em> es ilegible. Si no entra en una solapa de Bandcamp, no sirve. El segundo error es nombres genéricos en inglés: <em>Black Riot</em>, <em>Dead Crew</em>, <em>Toxic Patrol</em> tienen mil bandas homónimas en el mundo. Tu nombre debe ser googleable y distintivo.</p><p>Tercer error: nombres ofensivos sin propósito. El punk siempre fue provocador, pero la provocación gratuita pasó de moda. Insultar minorías o usar simbología nazi te cierra puertas en festivales serios. Si tu provocación no tiene contenido político o estético detrás, es solo ruido.</p><p>Cuarto error: nombres que dependen del momento. <em>Los Anti-Macri</em> o <em>Los Anti-K</em> envejecen mal. La banda dura más que el político. Mejor un nombre que apunte a un concepto duradero (corrupción, conurbano, abandono) que a una figura específica. <em>Bersuit Vergarabat</em> sigue funcionando porque el nombre no se pegó a una época concreta. Pensá largo plazo: si tu banda llega a 20 años, ¿el nombre seguirá teniendo sentido?</p>"
      },
      {
        h2: "Del nombre al logo: cómo aterrizar la identidad visual",
        body: "<p>Una vez elegido el nombre, el siguiente paso es el logo. En punk, el logo se dibuja a mano o se imita con tipografías Cooper Black, Old English o stencil. Black Flag tenía cuatro barras negras; Crass usaba tipografía borroneada; los Ramones imitaban el sello presidencial. El logo debe verse bien hecho con marcador en una pared.</p><p>Probá tu nombre en formato chapa de remera. Si las letras se confunden cuando se imprimen en serigrafía sobre algodón, el nombre necesita ajuste. Los nombres con muchas vocales y consonantes redondas (Q, O, S) se leen mejor que los repletos de M, N, V juntas. <em>Vómito Mojado</em> es buen nombre pero pésimo en serigrafía: las V y M se manchan.</p><p>Reservá los handles de Instagram, Spotify para Artistas y Bandcamp el mismo día que decidís el nombre. Otro músico puede ocuparte la marca en 24 horas. Si el handle exacto está tomado, agregá <em>oficial</em> o <em>band</em>, pero solo como último recurso. Lo ideal es que tu URL sea el nombre limpio. Sin coherencia digital, ni los flyers más perfectos te ayudan.</p>"
      }
    ],
    faq: [
      {
        q: "¿Puedo usar palabras como 'putos' o 'sucias' en el nombre sin que me censuren?",
        a: "Spotify y Bandcamp no censuran nombres. Sí pueden hacerlo radios FM o festivales municipales. Si querés tocar en eventos para todo público, tené un nombre alternativo más blando para esos casos, o una versión abreviada por iniciales."
      },
      {
        q: "¿Es mejor un nombre en español o en inglés para una banda argentina?",
        a: "Depende del subgénero y del público objetivo. Para hardcore melódico que mira al exterior, el inglés ayuda. Para punk callejero, oi! o crust local, el español pega mucho más. Las dos vías son válidas; lo importante es coherencia con la propuesta lírica."
      },
      {
        q: "¿Puedo cambiar el nombre de la banda más adelante?",
        a: "Sí, pero perdés tracción. Si ya tenés discos publicados, fans y prensa, cambiar de nombre te obliga a empezar de cero. Bandas como Sumo se transformaron en Las Pelotas y Divididos: funcionó porque eran proyectos posteriores, no rebrandeo simple."
      },
      {
        q: "¿Qué hago si encuentro otra banda con un nombre parecido al generado?",
        a: "Si la otra banda está activa y tiene presencia digital, cambiá. Si es una banda extinguida hace 10 años o de otro país sin proyección, podés convivir. Para evitar conflictos legales, registrá tu nombre como marca cuando empieces a facturar."
      }
    ]
  },
  en: {
    pageTitle: "Punk Band Name Generator | Genfy",
    metaDesc: "Create rebellious names for punk, hardcore and alternative music projects. Provocative, memorable combinations with raw attitude built for the stage.",
    h1: "Punk Band Name Generator",
    intro: "Invent provocative names for your garage, hardcore or post-punk band. Short, sharp combinations with attitude ready to print on a t-shirt.",
    tag: "Music",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "article",
        label: "Article",
        items: [
          "The", "Anti", "Against", "Sons of", "Daughters of",
          "No", "Ex", "Pre", "Last", "First",
          "Damned", "Cursed", "Witches", "Leftover", "Forgotten",
          "Teeth of", "Guts of", "Vomit of", "Spit of", "Burned",
          "Broken", "Wounded", "Crooked", "Wasted", "Rats",
          "Children of", "Bastards of", "Ghosts of", "Heirs of", "Veterans of"
        ]
      },
      {
        id: "noun",
        label: "Noun",
        items: [
          "Concrete", "Asphalt", "Poison", "Vomit", "Blades",
          "Hospital", "Cemetery", "Suburb", "Rubble", "Sewer",
          "Crows", "Rats", "Hyenas", "Sirens", "Hounds",
          "Factory", "Warehouse", "Avenue", "Subway", "Precinct",
          "Sunday", "Monday", "Dawn", "Noon", "Blackout",
          "Static", "Frequency", "Distortion", "Saliva", "Gums"
        ]
      },
      {
        id: "modifier",
        label: "Modifier",
        items: [
          "Broken", "Dirty", "Hollow", "False", "Dead",
          "Expired", "Burnt", "Black", "Raw", "Rotten",
          "Wet", "Dry", "Useless", "Toxic", "Blind",
          "Coward", "Mute", "Deaf", "Lukewarm", "Sticky",
          "Fractured", "Bent", "Withered", "Empty", "Rusted",
          "Splintered", "Cracked", "Stained", "Scratched", "Dented"
        ]
      },
      {
        id: "tail",
        label: "Tail",
        items: [
          "Inc.", "Express", "FM", "Records", "Crew",
          "Trio", "Quartet", "Brigade", "Squad", "Division",
          "Riot", "Crisis", "Patrol", "Disorder", "Mayhem",
          "of Chaos", "of the Blackout", "of Sunday", "of the Subway", "of the Block",
          "Punk", "Core", "Hardcore", "Noise", "Trash",
          "and the Idiots", "and the Cops", "and the Kids", "and the Gang", "and the Fakes"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomy of a good punk band name",
        body: "<p>Punk has spent 50 years inventing names and a pattern repeats: short provocation, dry phonetics and immediate urban reference. <em>Sex Pistols</em>, <em>Dead Kennedys</em>, <em>Black Flag</em>: two words, clash between everyday and forbidden. If your name needs explaining, it already lost. What gets printed on a t-shirt or shouted from the audience admits no subtitles.</p><p>The trick is mixing opposite registers. A common, vulgar noun (<em>asphalt, vomit, sewer</em>) sounds great pasted to an institutional or religious article. <strong>Sons of the Sewer</strong> works because it collides familial language with the lower neighborhood. Same with names like <em>The Cadavers</em> or <em>Minor Threat</em>: minimal hook, maximum association.</p><p>Avoid worn-out names: any combination with <em>kill, fuck, shit, blood</em> has been used twenty times. Aim local. Words from your own city, your own slang, your own conflicts have more identity than any generic Americanism. Bands that endure are those that sound like a specific place and time.</p>"
      },
      {
        h2: "How to choose between three names that convince you",
        body: "<p>After generating thirty options you'll have two or three finalists. To decide, run the Google test: if the first page has an active band with that name, drop it. Better a weird unique name than a great taken one. If your band grows, the duplicated name blocks Spotify, Bandcamp and Instagram simultaneously.</p><p>Second test: print the name on A4 paper in neutral typography and stick it on the wall. Look at it for a week. The one still pleasing on day seven wins. Names that age fast depend on a momentary joke or reference.</p><p>Third test: ask three non-musician friends to pronounce the name after reading it once. If none says it right, the name has oral communication problems. Bands live on radio, flyers, word of mouth. If nobody can spell it, it doesn't reach the show. That's why <strong>The Clash</strong>, <strong>Wire</strong>, or <strong>Fugazi</strong> survived: one or two syllables, easy to shout.</p>"
      },
      {
        h2: "Fatal mistakes when naming your band",
        body: "<p>Mistake one: names too long. <em>The Anti-Constitutional Brigade of the Broken Subway</em> is unreadable. If it doesn't fit on a Bandcamp tab, it's no good. Mistake two: generic English names: <em>Black Riot</em>, <em>Dead Crew</em>, <em>Toxic Patrol</em> have thousands of homonymous bands worldwide. Your name should be googleable and distinctive.</p><p>Mistake three: gratuitous offensive names. Punk always provoked, but pointless provocation went out of style. Insulting minorities or using nazi imagery closes doors at serious festivals. If your provocation has no political or aesthetic content behind, it's just noise.</p><p>Mistake four: names dependent on the moment. <em>The Anti-Trump</em> or <em>The Anti-Brexit</em> age badly. The band lasts longer than the politician. Better a name pointing at a lasting concept (corruption, suburbs, abandonment) than a specific figure. Think long term: if your band reaches 20 years, will the name still make sense?</p>"
      },
      {
        h2: "From name to logo: landing the visual identity",
        body: "<p>Once you've picked the name, next is the logo. In punk, logos are hand-drawn or imitate Cooper Black, Old English or stencil typefaces. Black Flag had four black bars; Crass used smudged type; Ramones mimicked the presidential seal. The logo must look good drawn with marker on a wall.</p><p>Test your name as a t-shirt patch. If letters blur when screen-printed on cotton, the name needs adjustment. Names with many vowels and round consonants (Q, O, S) read better than ones packed with M, N, V together. <em>Wet Vomit</em> is fine as a name but terrible in screen print: V and M smudge.</p><p>Reserve Instagram, Spotify for Artists and Bandcamp handles the same day you decide the name. Another musician can grab your brand in 24 hours. If the exact handle is taken, add <em>official</em> or <em>band</em>, but only as last resort. Ideally your URL is the clean name. Without digital coherence, even the most perfect flyers won't help.</p>"
      }
    ],
    faq: [
      {
        q: "Can I use slurs or vulgar words without getting censored?",
        a: "Spotify and Bandcamp don't censor names. FM radios or municipal festivals might. If you want to play all-ages events, have a softer alt name for those cases, or use initials."
      },
      {
        q: "Better English or local language for a non-English-speaking band?",
        a: "Depends on subgenre and target audience. For melodic hardcore aiming abroad, English helps. For street punk, oi!, or local crust, native language hits much harder. Both paths work; coherence with lyrical proposal matters most."
      },
      {
        q: "Can I change the band name later?",
        a: "Yes, but you lose traction. If you have released records, fans and press, changing names forces starting from zero. Some bands successfully rebrand as new projects, but simple renaming usually fails."
      },
      {
        q: "What if I find another band with a similar generated name?",
        a: "If the other band is active with digital presence, change. If it's extinct for 10 years or from another region without reach, you can coexist. To avoid legal conflicts, register your name as trademark when you start invoicing."
      }
    ]
  }
};
