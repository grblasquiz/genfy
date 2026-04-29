import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-hacker-etico",
    "en": "hacker-handle-generator"
  },
  "category": "tech",
  "emoji": "💻",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Hacker Ético | Genfy",
    "metaDesc": "Creá handles y alias para hackers éticos, CTF players, bug bounty hunters y comunidades infosec con identidad cyberpunk auténtica.",
    "h1": "Generador de Nombres de Hacker Ético",
    "intro": "Inventá handles para CTFs, plataformas bug bounty, comunidades infosec o personajes ficticios de cyberpunk. Anonimato con personalidad.",
    "tag": "Cybersecurity",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar handles",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo / actitud",
        "items": [
          "Null", "Void", "Zero", "Ghost", "Shadow", "Phantom", "Cipher", "Crypt",
          "Bit", "Byte", "Hex", "Stack", "Heap", "Buffer", "Kernel", "Daemon",
          "Neo", "Cyber", "Quantum", "Synth", "Neural", "Binary", "Hacker", "Code",
          "Dark", "Black", "Grey", "White", "Red", "Blue", "Purple", "Green",
          "Echo", "Pulse", "Wave", "Signal", "Radio", "Static", "Noise", "Hum",
          "Rogue", "Ronin", "Wraith", "Specter", "Reaper", "Hunter", "Stalker", "Ranger"
        ]
      },
      {
        "id": "core",
        "label": "Núcleo",
        "items": [
          "Wolf", "Hawk", "Raven", "Falcon", "Viper", "Cobra", "Lynx", "Panther",
          "Knight", "Samurai", "Ronin", "Sorcerer", "Wizard", "Mage", "Warlock", "Druid",
          "Fox", "Coyote", "Hyena", "Jackal", "Mongoose", "Otter", "Badger", "Weasel",
          "Skull", "Bone", "Blade", "Edge", "Spark", "Flame", "Frost", "Storm",
          "Mind", "Brain", "Soul", "Eye", "Hand", "Voice", "Pulse", "Beat",
          "Net", "Web", "Mesh", "Link", "Node", "Hub", "Grid", "Mainframe"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo / tag",
        "items": [
          "0x00", "0xFF", "404", "127001", "31337", "2600", "1337", "0day",
          "_root", "_admin", "_sudo", "_kernel", "_shell", "_bash", "_pwn", "_xploit",
          "Sec", "Net", "Hax", "Pwn", "Crypt", "Cipher", "Lab", "Ops",
          "Hunter", "Ranger", "Scout", "Walker", "Runner", "Rider", "Stalker", "Tracker",
          "Master", "Lord", "King", "Queen", "Boss", "Chief", "Prime", "Alpha",
          "Mk2", "Mk3", "v2", "v3", ".0", ".1", "[~]", "[#]"
        ]
      }
    ],
    "separator": "",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo elegir un handle de hacker que funcione",
        "body": "<p>El handle es identidad pública en infosec. <strong>The Mentor</strong>, <strong>Mudge</strong>, <strong>cDc</strong> (Cult of the Dead Cow), <strong>L0pht</strong>, <strong>Phineas Fisher</strong>: nombres que duraron décadas. Lo que tienen en común: son cortos, pronunciables, memorables, y no revelan datos personales.</p><p>La fórmula clásica es <strong>concepto + número</strong>. <em>Hex0r</em>, <em>3lit3</em>, <em>n0pe</em>, <em>r00t</em>. La sustitución de letras por números (leetspeak) viene de la cultura BBS de los 80-90 y sigue siendo signal de pertenencia. Pero usá con moderación: handles full-leetspeak (<em>3l1t3-h4x0r</em>) ya envejecieron y se leen tryhard.</p><p>El handle debe sostener búsqueda. Si elegís <em>shadow</em>, hay 50 mil cuentas con ese nombre y vas a competir SEO eternamente. Mejor combinaciones únicas: <em>shadowbyte</em>, <em>greyshadow_nyc</em>. Verificá disponibilidad en Twitter, GitHub, HackerOne, Bugcrowd antes de adoptar.</p><p>Para CTF (Capture The Flag), el handle es identidad de equipo o solo. <strong>PPP</strong> (Plaid Parliament of Pwning, Carnegie Mellon), <strong>Hackapotamus</strong>, <strong>Eat Sleep Pwn Repeat</strong>. Los teams suelen usar nombres con humor; los individuos buscan más misterio. Si entrás a competiciones, alineá tu handle con el tono que querés en la comunidad.</p>"
      },
      {
        "h2": "Tipos de handle según el contexto infosec",
        "body": "<p><strong>Bug bounty hunter</strong> (HackerOne, Bugcrowd, Synack): handles profesionales sobrios, fáciles de incluir en CV. <em>tomek7667</em>, <em>brutelogic</em>, <em>jhaddix</em>. Algunos usan apellido + número; otros, marca personal de blog/Twitter. La reputación se construye con reportes públicos disclosed.</p><p><strong>CTF player</strong>: handles más juguetones, frecuentes referencias hacker classics. <em>StalkR</em>, <em>balsn</em>, <em>r3kapig</em>, <em>p4</em>. Los players top tienen handles que conoce toda la comunidad; entrar a CTFTime con un handle único es parte del rite of passage.</p><p><strong>Red team / penetration tester</strong>: handles operativos, agresivos, militares. <em>BloodHoundAD</em>, <em>harmj0y</em>, <em>cobbr</em>, <em>SpecterOps</em>. Tono de operación clandestina autorizada. Las firmas profesionales usan handles propios pero también identidad real para clients.</p><p><strong>Investigador / researcher</strong> (académico-industrial): handles más serios, frecuentemente apellido o blog name. <em>tavis ormandy</em> usa nombre real; <em>halvar flake</em> es nom de plume académico. Tono de paper publishing más que de pwning.</p><p><strong>Hacktivista</strong>: handles más políticos, frecuentemente ofensivos al sistema. <em>Phineas Fisher</em>, <em>The Equation Group</em> (atribuido NSA), <em>Lapsus$</em>. Tono ideológico, anonimato extremo. Riesgo legal alto.</p><p><strong>Cyberpunk fictional character</strong>: handles para novelas, juegos, RPG. <em>Case</em> de Neuromancer, <em>Bobby Newmark</em>, <em>Aoi Suzuki</em>. Nombres sugerentes pero pronunciables.</p>"
      },
      {
        "h2": "Errores comunes al elegir handles",
        "body": "<p>Error 1: revelar identidad. <em>juanperez_hacker</em>, <em>maria1985bsas</em>. Si tu handle contiene tu nombre real, año de nacimiento, ciudad, ya filtraste OPSEC. Para hacking público (incluido CTF), separá totalmente identidad legal de handle.</p><p>Error 2: full-leetspeak excesivo. <em>3l1t3_h4x0r_pr0_v2_x</em> es nombre de 2003. Hoy la comunidad lo lee como cringe. Usá leet con sutileza: una sustitución, no cinco. <em>r00tkit</em> funciona; <em>r00tk1t_3l1t3</em> no.</p><p>Error 3: nombres tomados de figuras famosas. <em>realmudge</em>, <em>kevinmitnick2</em> son flag rojo. Las leyendas de la escena (Mudge, Mitnick, Stallman) defienden su nombre. Buscá identidad propia.</p><p>Error 4: nombres de movies o games. <em>NeoMatrix</em>, <em>Trinity_h4x</em>, <em>MrRobot_irl</em>. Suenan a fan, no a hacker real. Las referencias pop están sobreutilizadas. Buscá inspiración en literatura cyberpunk menos obvia: Neuromancer, Snow Crash, Diamond Age.</p><p>Error 5: ofensivo o discriminatorio. Aunque la cultura hacker tiene tradición transgresora, comunidades modernas (HackerOne, DEFCON, Black Hat) no toleran handles racistas, sexistas o explícitamente ofensivos. Te sacan de plataformas y te bloquean reputación.</p><p>Error 6: nombre no pronunciable. <em>Xqp7zKv9</em> no se puede mencionar en talk de DEFCON, podcast, mesa de café. El handle debe ser citable verbalmente.</p>"
      },
      {
        "h2": "Construir reputación con tu handle",
        "body": "<p>El handle es solo el contenedor. La reputación se construye con: writeups de CTFs publicados en GitHub, reportes de bug bounty disclosed (con permiso), CVE asignados a tu nombre, charlas en cons (DEFCON, Black Hat, BSides, Ekoparty), participación en Discord/Twitter de la comunidad. El handle viaja con esos artefactos.</p><p>Para crecer, mantené consistencia. Cambiar handle cada año destruye reputación. Las leyendas mantienen el handle por décadas: <strong>Mudge</strong> (Peiter Zatko) ha sido Mudge desde los 90, en L0pht, BBN, Twitter, Apple, ahora consulting. La consistencia es valor.</p><p>El handle puede tener historia. <em>Mudge</em> viene de los Skinnerian rats experiments en MIT. <em>Phineas Fisher</em> referencia Phineas Gage neurobiología. Tener narrativa detrás del handle ayuda a entrevistas, anécdotas, conexión humana en cons.</p><p>Para hacker fictional en novela o juego, sumá historia de origen. ¿Por qué Aoi se llama Aoi? ¿Qué significó para el personaje elegir ese handle? Los personajes cyberpunk recordados (Case, Hiro Protagonist, YT) tienen handles que dicen algo del mundo o del personaje. <em>Hiro Protagonist</em> en Snow Crash es chiste y declaración: \"Hiro\" es \"hero\" hispanizado, \"Protagonist\" es genérico literario.</p><p>Para campañas RPG cyberpunk (Cyberpunk RED, Shadowrun), el handle es parte del personaje. Negociá con tu DM: ¿el handle puede cambiar después de evento traumático en campaña? ¿Hay corporaciones que conocen tu handle anterior? Esas preguntas dan profundidad narrativa.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar mi nombre real en lugar de handle?",
        "a": "Sí, sobre todo en bug bounty profesional o pentesting. <em>jhaddix</em>, <em>tavis ormandy</em>, <em>georgia weidman</em> usan apellido + variante. Para CTF y comunidad clandestina, handle separado es estándar. Para profesionales públicos, identidad real puede ser asset reputacional."
      },
      {
        "q": "¿Qué hago si mi handle está tomado en alguna plataforma?",
        "a": "Tres opciones: variante numérica (<em>shadowbyte42</em>), variante regional (<em>shadowbyte_ar</em>), variante separador (<em>shadow_byte</em>, <em>shadow.byte</em>). Idealmente buscá un handle único cross-platform. Si <em>shadowbyte</em> está tomado en Twitter pero libre en HackerOne y GitHub, considerá variante."
      },
      {
        "q": "¿Es legal usar handle hacker en mi país?",
        "a": "El handle en sí no es ilegal. Lo que se hace bajo el handle puede serlo. CTFs autorizados, bug bounty con permiso, pentesting contratado son legales. Hacking sin autorización es delito en casi todas las jurisdicciones. El handle no protege legalmente."
      },
      {
        "q": "¿Cómo evito doxing cuando uso handle?",
        "a": "OPSEC básico: no usar foto real en avatar, email separado del personal, no mencionar empleador o ubicación, no postear desde IPs personales. Para máximo anonimato, VPN + cuentas creadas desde dispositivos separados. La comunidad infosec respeta privacidad pero el doxing existe."
      }
    ]
  },
  "en": {
    "pageTitle": "Hacker Handle Generator | Genfy",
    "metaDesc": "Create ethical hacker handles and aliases for CTFs, bug bounty platforms, infosec communities and cyberpunk characters with authentic identity.",
    "h1": "Hacker Handle Generator",
    "intro": "Invent handles for CTFs, bug bounty platforms, infosec communities or fictional cyberpunk characters. Anonymity with personality.",
    "tag": "Cybersecurity",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate handles",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix / attitude",
        "items": [
          "Null", "Void", "Zero", "Ghost", "Shadow", "Phantom", "Cipher", "Crypt",
          "Bit", "Byte", "Hex", "Stack", "Heap", "Buffer", "Kernel", "Daemon",
          "Neo", "Cyber", "Quantum", "Synth", "Neural", "Binary", "Hacker", "Code",
          "Dark", "Black", "Grey", "White", "Red", "Blue", "Purple", "Green",
          "Echo", "Pulse", "Wave", "Signal", "Radio", "Static", "Noise", "Hum",
          "Rogue", "Ronin", "Wraith", "Specter", "Reaper", "Hunter", "Stalker", "Ranger"
        ]
      },
      {
        "id": "core",
        "label": "Core",
        "items": [
          "Wolf", "Hawk", "Raven", "Falcon", "Viper", "Cobra", "Lynx", "Panther",
          "Knight", "Samurai", "Ronin", "Sorcerer", "Wizard", "Mage", "Warlock", "Druid",
          "Fox", "Coyote", "Hyena", "Jackal", "Mongoose", "Otter", "Badger", "Weasel",
          "Skull", "Bone", "Blade", "Edge", "Spark", "Flame", "Frost", "Storm",
          "Mind", "Brain", "Soul", "Eye", "Hand", "Voice", "Pulse", "Beat",
          "Net", "Web", "Mesh", "Link", "Node", "Hub", "Grid", "Mainframe"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix / tag",
        "items": [
          "0x00", "0xFF", "404", "127001", "31337", "2600", "1337", "0day",
          "_root", "_admin", "_sudo", "_kernel", "_shell", "_bash", "_pwn", "_xploit",
          "Sec", "Net", "Hax", "Pwn", "Crypt", "Cipher", "Lab", "Ops",
          "Hunter", "Ranger", "Scout", "Walker", "Runner", "Rider", "Stalker", "Tracker",
          "Master", "Lord", "King", "Queen", "Boss", "Chief", "Prime", "Alpha",
          "Mk2", "Mk3", "v2", "v3", ".0", ".1", "[~]", "[#]"
        ]
      }
    ],
    "separator": "",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to choose a hacker handle that works",
        "body": "<p>The handle is public identity in infosec. <strong>The Mentor</strong>, <strong>Mudge</strong>, <strong>cDc</strong> (Cult of the Dead Cow), <strong>L0pht</strong>, <strong>Phineas Fisher</strong>: names that lasted decades. What they have in common: short, pronounceable, memorable, and don't reveal personal data.</p><p>The classic formula is <strong>concept + number</strong>. <em>Hex0r</em>, <em>3lit3</em>, <em>n0pe</em>, <em>r00t</em>. Letter-to-number substitution (leetspeak) comes from 80s-90s BBS culture and remains belonging signal. But use moderately: full-leetspeak handles (<em>3l1t3-h4x0r</em>) already aged and read tryhard.</p><p>Handle should sustain search. If you choose <em>shadow</em>, there are 50 thousand accounts with that name and you'll fight SEO eternally. Better unique combinations: <em>shadowbyte</em>, <em>greyshadow_nyc</em>. Verify availability on Twitter, GitHub, HackerOne, Bugcrowd before adopting.</p><p>For CTF (Capture The Flag), handle is team or solo identity. <strong>PPP</strong> (Plaid Parliament of Pwning, Carnegie Mellon), <strong>Hackapotamus</strong>, <strong>Eat Sleep Pwn Repeat</strong>. Teams usually use names with humor; individuals seek more mystery. If you enter competitions, align your handle with the tone you want in the community.</p>"
      },
      {
        "h2": "Handle types by infosec context",
        "body": "<p><strong>Bug bounty hunter</strong> (HackerOne, Bugcrowd, Synack): sober professional handles, easy to include in CV. <em>tomek7667</em>, <em>brutelogic</em>, <em>jhaddix</em>. Some use surname + number; others, personal blog/Twitter brand. Reputation builds with disclosed public reports.</p><p><strong>CTF player</strong>: more playful handles, frequent references to hacker classics. <em>StalkR</em>, <em>balsn</em>, <em>r3kapig</em>, <em>p4</em>. Top players have handles known to whole community; entering CTFTime with unique handle is part of rite of passage.</p><p><strong>Red team / penetration tester</strong>: operational, aggressive, military handles. <em>BloodHoundAD</em>, <em>harmj0y</em>, <em>cobbr</em>, <em>SpecterOps</em>. Authorized clandestine operation tone. Professional firms use own handles but also real identity for clients.</p><p><strong>Researcher</strong> (academic-industrial): more serious handles, frequently surname or blog name. <em>tavis ormandy</em> uses real name; <em>halvar flake</em> is academic nom de plume. Paper publishing tone more than pwning.</p><p><strong>Hacktivist</strong>: more political handles, frequently offensive to the system. <em>Phineas Fisher</em>, <em>The Equation Group</em> (NSA-attributed), <em>Lapsus$</em>. Ideological tone, extreme anonymity. High legal risk.</p><p><strong>Cyberpunk fictional character</strong>: handles for novels, games, RPG. <em>Case</em> from Neuromancer, <em>Bobby Newmark</em>, <em>Aoi Suzuki</em>. Suggestive but pronounceable names.</p>"
      },
      {
        "h2": "Common errors when choosing handles",
        "body": "<p>Error 1: revealing identity. <em>johnsmith_hacker</em>, <em>maria1985nyc</em>. If your handle contains your real name, birth year, city, you already leaked OPSEC. For public hacking (including CTF), totally separate legal identity from handle.</p><p>Error 2: excessive full-leetspeak. <em>3l1t3_h4x0r_pr0_v2_x</em> is 2003 name. Today community reads it as cringe. Use leet subtly: one substitution, not five. <em>r00tkit</em> works; <em>r00tk1t_3l1t3</em> doesn't.</p><p>Error 3: names taken from famous figures. <em>realmudge</em>, <em>kevinmitnick2</em> are red flag. Scene legends (Mudge, Mitnick, Stallman) defend their name. Look for own identity.</p><p>Error 4: movie or game names. <em>NeoMatrix</em>, <em>Trinity_h4x</em>, <em>MrRobot_irl</em>. Sound like fan, not real hacker. Pop references are overused. Look for inspiration in less obvious cyberpunk literature: Neuromancer, Snow Crash, Diamond Age.</p><p>Error 5: offensive or discriminatory. Although hacker culture has transgressive tradition, modern communities (HackerOne, DEFCON, Black Hat) don't tolerate racist, sexist or explicitly offensive handles. They kick you off platforms and block reputation.</p><p>Error 6: unpronounceable name. <em>Xqp7zKv9</em> can't be mentioned in DEFCON talk, podcast, coffee table. Handle must be verbally citable.</p>"
      },
      {
        "h2": "Building reputation with your handle",
        "body": "<p>Handle is just the container. Reputation builds with: CTF writeups published on GitHub, disclosed bug bounty reports (with permission), CVEs assigned to your name, talks at cons (DEFCON, Black Hat, BSides, Ekoparty), Discord/Twitter community participation. Handle travels with those artifacts.</p><p>To grow, maintain consistency. Changing handle every year destroys reputation. Legends maintain handle for decades: <strong>Mudge</strong> (Peiter Zatko) has been Mudge since the 90s, at L0pht, BBN, Twitter, Apple, now consulting. Consistency is value.</p><p>Handle can have history. <em>Mudge</em> comes from Skinnerian rats experiments at MIT. <em>Phineas Fisher</em> references Phineas Gage neurobiology. Having narrative behind handle helps interviews, anecdotes, human connection at cons.</p><p>For fictional hacker in novel or game, add origin story. Why is Aoi called Aoi? What did choosing that handle mean for the character? Remembered cyberpunk characters (Case, Hiro Protagonist, YT) have handles that say something about world or character. <em>Hiro Protagonist</em> in Snow Crash is joke and declaration.</p><p>For cyberpunk RPG campaigns (Cyberpunk RED, Shadowrun), handle is part of character. Negotiate with your DM: can handle change after traumatic event in campaign? Are there corporations that know your previous handle? Those questions add narrative depth.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use my real name instead of handle?",
        "a": "Yes, especially in professional bug bounty or pentesting. <em>jhaddix</em>, <em>tavis ormandy</em>, <em>georgia weidman</em> use surname + variant. For CTF and underground community, separate handle is standard. For public professionals, real identity can be reputational asset."
      },
      {
        "q": "What do I do if my handle is taken on some platform?",
        "a": "Three options: numeric variant (<em>shadowbyte42</em>), regional variant (<em>shadowbyte_us</em>), separator variant (<em>shadow_byte</em>, <em>shadow.byte</em>). Ideally seek unique cross-platform handle. If <em>shadowbyte</em> is taken on Twitter but free on HackerOne and GitHub, consider variant."
      },
      {
        "q": "Is using hacker handle legal in my country?",
        "a": "Handle itself is not illegal. What's done under handle can be. Authorized CTFs, permission-based bug bounty, contracted pentesting are legal. Unauthorized hacking is crime in almost all jurisdictions. Handle doesn't protect legally."
      },
      {
        "q": "How do I avoid doxing when using handle?",
        "a": "Basic OPSEC: don't use real photo as avatar, separate email from personal, don't mention employer or location, don't post from personal IPs. For maximum anonymity, VPN + accounts created from separate devices. Infosec community respects privacy but doxing exists."
      }
    ]
  }
};
