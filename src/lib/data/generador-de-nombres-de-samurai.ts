import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-samurai",
    "en": "samurai-name-generator"
  },
  "category": "fun",
  "emoji": "🗡️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Samurái | Genfy",
    "metaDesc": "Generá nombres japoneses auténticos para samuráis, ronin y guerreros del bushido. Ideales para juegos, novelas históricas y personajes de anime.",
    "h1": "Generador de Nombres de Samurái",
    "intro": "Forjá identidades del Japón feudal con honor inquebrantable. Nombres que evocan el filo de la katana y el código del bushido grabado en acero.",
    "tag": "Diversión",
    "filterLabel": "Tipo de samurái",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "legendary",
        "label": "Legendarios",
        "items": [
          "Miyamoto Musashi",
          "Oda Nobunaga",
          "Tokugawa Ieyasu",
          "Takeda Shingen",
          "Uesugi Kenshin",
          "Date Masamune",
          "Sanada Yukimura",
          "Honda Tadakatsu",
          "Hattori Hanzo",
          "Minamoto no Yoshitsune",
          "Kusunoki Masashige",
          "Tomoe Gozen",
          "Shimazu Yoshihiro",
          "Ii Naomasa",
          "Saito Hajime",
          "Okita Sōji",
          "Hijikata Toshizō",
          "Sasaki Kojirō",
          "Yagyū Jūbei Mitsuyoshi",
          "Tsukahara Bokuden",
          "Kamiizumi Nobutsuna",
          "Marume Kurando",
          "Itō Ittōsai",
          "Yamaoka Tesshū",
          "Yamauchi Kazutoyo"
        ]
      },
      {
        "id": "clan_warriors",
        "label": "Guerreros de Clan",
        "items": [
          "Takeda Nobushige",
          "Uesugi Kagetora",
          "Sanada Nobuyuki",
          "Date Shigezane",
          "Shimazu Toyohisa",
          "Mori Motonari",
          "Chosokabe Motochika",
          "Hojo Ujiyasu",
          "Imagawa Yoshimoto",
          "Kuroda Kanbei",
          "Kato Kiyomasa",
          "Fukushima Masanori",
          "Maeda Toshiie",
          "Hosokawa Tadaoki",
          "Otani Yoshitsugu",
          "Ishida Mitsunari",
          "Kobayakawa Hideaki",
          "Mori Terumoto",
          "Ukita Hideie",
          "Kikkawa Hiroie",
          "Tachibana Muneshige",
          "Konishi Yukinaga",
          "Nabeshima Naoshige",
          "Arima Harunobu",
          "Sasa Narimasa"
        ]
      },
      {
        "id": "ronin",
        "label": "Ronin Errantes",
        "items": [
          "Miyamoto Musashi el Vagabundo",
          "Tsukahara Bokuden Sin Amo",
          "Yamaoka Tesshū el Desterrado",
          "Ittō Shōden el Solitario",
          "Kawakami Gensai la Sombra",
          "Okada Izō el Asesino",
          "Nakamura Hanjirō",
          "Tanaka Shinbei el Perdido",
          "Koike Genkuro el Errante",
          "Shimada Toranosuke",
          "Yoshida Toshimaro",
          "Kumagai Naoyoshi",
          "Hayashi Noboru",
          "Tominaga Masaji",
          "Iwakura Tomosada",
          "Hashimoto Sanai el Caído",
          "Sakamoto Ryōma Sin Señor",
          "Nakaoka Shintarō",
          "Takechi Hanpeita el Vengador",
          "Yoshimura Toratarō"
        ]
      },
      {
        "id": "female_warriors",
        "label": "Onna-Bugeisha",
        "items": [
          "Tomoe Gozen la Invencible",
          "Hangaku Gozen",
          "Nakano Takeko",
          "Hōjō Masako",
          "Tachibana Ginchiyo",
          "Ii Naotora",
          "Myōrin-ni",
          "Jukei-ni",
          "Yodo-dono",
          "Nene (Kōdai-in)",
          "Kaihime",
          "Lady Tsuruhime",
          "Nōhime",
          "Ono no Komachi la Poeta Guerrera",
          "Aizu no Okata",
          "Shizuka Gozen",
          "Hosokawa Gracia",
          "Yamanaka Yukimori (criada como samurái)",
          "Ikeda Sen",
          "Chacha"
        ]
      },
      {
        "id": "sword_masters",
        "label": "Maestros de Espada",
        "items": [
          "Itō Ittōsai Kagehisa",
          "Toda Seigen",
          "Tsukahara Bokuden",
          "Kamiizumi Nobutsuna",
          "Yagyū Munenori",
          "Ono Tadaaki",
          "Marume Kurando Nagayoshi",
          "Okuyama Kyūgasai Kimishige",
          "Miyamoto Musashi",
          "Sasaki Kojirō",
          "Higuchi Matashichirō",
          "Saito Denkibo",
          "Matsumoto Bizen-no-Kami",
          "Saitō Kemmotsu",
          "Chiba Shūsaku Narimasa",
          "Ōishi Susumu",
          "Yamada Asaemon",
          "Hirata Munekane",
          "Murakami Hanzo",
          "Asari Matashichirō Yoshinobu"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estructura auténtica de nombres samurái",
        "body": "<p>Los nombres japoneses siguen formato <strong>apellido-nombre</strong>: Oda Nobunaga es del clan Oda, su nombre personal Nobunaga. Los samuráis cambiaban nombres durante su vida: nombres de infancia (<em>yōmyō</em>), nombres adultos (<em>nanori</em>), títulos de rango (<em>azana</em>). Miyamoto Musashi nació como Shinmen Takezō, adoptó 'Miyamoto' de su pueblo natal y 'Musashi' tras dominar dos espadas.</p><p>Error común en ficción occidental: mezclar períodos históricos. Los nombres del período Sengoku (1467-1615) difieren de la era Edo (1603-1868). <strong>Honda Tadakatsu</strong> luchó en Sekigahara (1600), <strong>Saito Hajime</strong> fue capitán del Shinsengumi (1860s). No vivieron en la misma época aunque ambos fueran espadachines legendarios.</p><p>Los ronin perdían derecho al apellido del clan tras perder su señor. <strong>Los 47 Ronin</strong> mantuvieron 'Asano' por lealtad póstuma, acto considerado revolucionario. Para narrativa precisa, investigá jerarquías: <em>hatamoto</em> (vasallos directos del shogun), <em>gokenin</em> (samuráis de menor rango), <em>ashigaru</em> (soldados de infantería, técnicamente no samurái).</p>"
      },
      {
        "h2": "Significado de los kanji en nombres samurái",
        "body": "<p>Cada kanji carga significado específico. 'Nobunaga' (信長) combina 'fe/confianza' + 'líder', reflejando ambiciones de Oda. 'Masamune' (政宗) de Date significa 'gobierno correcto'. Los padres samurái elegían kanji proféticos para destinos de honor.</p><p>Nombres masculinos frecuentemente terminaban en sufijos marciales: -<strong>maru</strong> (círculo, usado en infancia), -<strong>mori</strong> (bosque/guardián), -<strong>nobu</strong> (fe), -<strong>masa</strong> (correcto), -<strong>yoshi</strong> (justo). Nombres femeninos samurái usaban -<strong>ko</strong> (niña), -<strong>hime</strong> (princesa), -<strong>gozen</strong> (título honorífico para guerreras).</p><p>Error de principiante: inventar combinaciones kanji imposibles. 'Kuro' (negro) + 'Aka' (rojo) juntos suena contradictorio. Los maestros del espada adoptaban nombres relacionados con técnicas: <strong>Bokuden</strong> (木伝) 'transmisión del árbol', referencia a la rigidez-flexibilidad del bambú en combate. Para proyectos creativos, consultá diccionarios kanji reales y combiná elementos con significado complementario, no opuesto.</p>"
      },
      {
        "h2": "El código bushido y los nombres honoríficos",
        "body": "<p>El <strong>bushido</strong> (武士道, 'camino del guerrero') dictaba que el nombre personal cargaba el honor del clan. Perderlo por cobardía justificaba <em>seppuku</em> (suicidio ritual). Los samuráis ganaban títulos tras batallas: <strong>Date Masamune</strong> fue 'el Dragón de Un Ojo' tras perder visión por viruela pero seguir luchando.</p><p>Los títulos de cortesía (<em>san</em>, <em>sama</em>, <em>dono</em>) indicaban jerarquía estricta. Un <em>daimyō</em> (señor feudal) era '-sama', un samurái igual '-san', un subordinado sin sufijo. <strong>Tokugawa Ieyasu-sama</strong> como shogun, <strong>Honda Tadakatsu-dono</strong> como general leal. Mezclar esto incorrectamente en narrativa arruina autenticidad.</p><p>Las <strong>onna-bugeisha</strong> (guerreras samurái) tenían protocolo propio. <strong>Tomoe Gozen</strong> ('Gozen' = título de dama noble guerrera) luchó en Genpei War (1180-1185), documentada decapitando enemigos a caballo. Sus nombres seguían convenciones femeninas pero con sufijos que denotaban habilidad marcial. En RPGs, evitá el cliché de 'samurái mujer disfrazada de hombre': muchas lucharon abiertamente con identidad femenina.</p>"
      },
      {
        "h2": "Nombres samurái en juegos y anime modernos",
        "body": "<p><strong>Ghost of Tsushima</strong> usa 'Jin Sakai', nombre plausible del período Kamakura. 'Sakai' es apellido real, 'Jin' significa benevolencia, irónico para protagonista que abandona código bushido. <strong>Sekiro</strong> evita nombres específicos ('Lobo' es apodo), permitiendo flexibilidad narrativa sin romper inmersión histórica.</p><p>En <strong>Naruto</strong>, nombres ninja mezclan referencias samurái (Sasuke Uchiha cita a Sarutobi Sasuke, ninja legendario) con invención total. Para worldbuilding original, decidí: ¿nombres históricamente precisos o culturalmente inspirados? No intentes ambos simultáneamente.</p><p>Error en D&D/Pathfinder: jugadores que usan 'Kenji Shadow-Blade' mezclando japonés con inglés. Mantené idiomas separados: 'Yamada Kenji' O 'Shadow-Blade' como apodo traducido, nunca juntos. <strong>Samurai Champloo</strong> equilibra esto usando nombres período-Edo auténticos (Mugen, Jin, Fuu) con estética anacrónica deliberada. Si vas a romper reglas históricas, hacelo conscientemente como elección estilística, no por ignorancia.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre samurái y ninja?",
        "a": "Los samurái eran casta militar aristocrática abierta; los ninja (shinobi) operaban en secreto como espías y asesinos. Los samurái seguían bushido; los ninja priorizaban efectividad sobre honor público."
      },
      {
        "q": "¿Los ronin eran deshonrados o simplemente sin empleo?",
        "a": "Depende del contexto. Perder a tu señor por seppuku de este te dejaba ronin honorable. Abandonar por cobardía o ser despedido por incompetencia te marcaba deshonrado. Miyamoto Musashi eligió ser ronin para perfeccionar su arte."
      },
      {
        "q": "¿Las mujeres samurái realmente existieron?",
        "a": "Sí. Las onna-bugeisha estaban entrenadas en naginata y arco. Tomoe Gozen, Nakano Takeko y Hangaku Gozen están históricamente documentadas. Defendían castillos cuando hombres iban a campaña."
      },
      {
        "q": "¿Por qué algunos samuráis tienen múltiples nombres?",
        "a": "Cambiaban nombres tras ceremonias de mayoría de edad, adopción en clanes, o al recibir títulos. Tokugawa Ieyasu fue 'Matsudaira Takechiyo' en infancia, cambió al ser adoptado por clan Tokugawa."
      }
    ]
  },
  "en": {
    "pageTitle": "Samurai Name Generator | Genfy",
    "metaDesc": "Generate authentic Japanese names for samurai, ronin and bushido warriors. Ideal for games, historical novels and anime characters.",
    "h1": "Samurai Name Generator",
    "intro": "Forge identities from feudal Japan with unbreakable honor. Names that evoke the katana's edge and the bushido code carved in steel.",
    "tag": "Fun",
    "filterLabel": "Samurai type",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "legendary",
        "label": "Legendary",
        "items": [
          "Miyamoto Musashi",
          "Oda Nobunaga",
          "Tokugawa Ieyasu",
          "Takeda Shingen",
          "Uesugi Kenshin",
          "Date Masamune",
          "Sanada Yukimura",
          "Honda Tadakatsu",
          "Hattori Hanzo",
          "Minamoto no Yoshitsune",
          "Kusunoki Masashige",
          "Tomoe Gozen",
          "Shimazu Yoshihiro",
          "Ii Naomasa",
          "Saito Hajime",
          "Okita Sōji",
          "Hijikata Toshizō",
          "Sasaki Kojirō",
          "Yagyū Jūbei Mitsuyoshi",
          "Tsukahara Bokuden",
          "Kamiizumi Nobutsuna",
          "Marume Kurando",
          "Itō Ittōsai",
          "Yamaoka Tesshū",
          "Yamauchi Kazutoyo"
        ]
      },
      {
        "id": "clan_warriors",
        "label": "Clan Warriors",
        "items": [
          "Takeda Nobushige",
          "Uesugi Kagetora",
          "Sanada Nobuyuki",
          "Date Shigezane",
          "Shimazu Toyohisa",
          "Mori Motonari",
          "Chosokabe Motochika",
          "Hojo Ujiyasu",
          "Imagawa Yoshimoto",
          "Kuroda Kanbei",
          "Kato Kiyomasa",
          "Fukushima Masanori",
          "Maeda Toshiie",
          "Hosokawa Tadaoki",
          "Otani Yoshitsugu",
          "Ishida Mitsunari",
          "Kobayakawa Hideaki",
          "Mori Terumoto",
          "Ukita Hideie",
          "Kikkawa Hiroie",
          "Tachibana Muneshige",
          "Konishi Yukinaga",
          "Nabeshima Naoshige",
          "Arima Harunobu",
          "Sasa Narimasa"
        ]
      },
      {
        "id": "ronin",
        "label": "Wandering Ronin",
        "items": [
          "Miyamoto Musashi the Wanderer",
          "Tsukahara Bokuden the Masterless",
          "Yamaoka Tesshū the Exiled",
          "Ittō Shōden the Solitary",
          "Kawakami Gensai the Shadow",
          "Okada Izō the Assassin",
          "Nakamura Hanjirō",
          "Tanaka Shinbei the Lost",
          "Koike Genkuro the Wanderer",
          "Shimada Toranosuke",
          "Yoshida Toshimaro",
          "Kumagai Naoyoshi",
          "Hayashi Noboru",
          "Tominaga Masaji",
          "Iwakura Tomosada",
          "Hashimoto Sanai the Fallen",
          "Sakamoto Ryōma the Lordless",
          "Nakaoka Shintarō",
          "Takechi Hanpeita the Avenger",
          "Yoshimura Toratarō"
        ]
      },
      {
        "id": "female_warriors",
        "label": "Onna-Bugeisha",
        "items": [
          "Tomoe Gozen the Invincible",
          "Hangaku Gozen",
          "Nakano Takeko",
          "Hōjō Masako",
          "Tachibana Ginchiyo",
          "Ii Naotora",
          "Myōrin-ni",
          "Jukei-ni",
          "Yodo-dono",
          "Nene (Kōdai-in)",
          "Kaihime",
          "Lady Tsuruhime",
          "Nōhime",
          "Ono no Komachi the Poet Warrior",
          "Aizu no Okata",
          "Shizuka Gozen",
          "Hosokawa Gracia",
          "Yamanaka Yukimori (raised as samurai)",
          "Ikeda Sen",
          "Chacha"
        ]
      },
      {
        "id": "sword_masters",
        "label": "Sword Masters",
        "items": [
          "Itō Ittōsai Kagehisa",
          "Toda Seigen",
          "Tsukahara Bokuden",
          "Kamiizumi Nobutsuna",
          "Yagyū Munenori",
          "Ono Tadaaki",
          "Marume Kurando Nagayoshi",
          "Okuyama Kyūgasai Kimishige",
          "Miyamoto Musashi",
          "Sasaki Kojirō",
          "Higuchi Matashichirō",
          "Saito Denkibo",
          "Matsumoto Bizen-no-Kami",
          "Saitō Kemmotsu",
          "Chiba Shūsaku Narimasa",
          "Ōishi Susumu",
          "Yamada Asaemon",
          "Hirata Munekane",
          "Murakami Hanzo",
          "Asari Matashichirō Yoshinobu"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Authentic structure of samurai names",
        "body": "<p>Japanese names follow <strong>surname-given name</strong> format: Oda Nobunaga is from Oda clan, his personal name Nobunaga. Samurai changed names throughout life: childhood names (<em>yōmyō</em>), adult names (<em>nanori</em>), rank titles (<em>azana</em>). Miyamoto Musashi was born Shinmen Takezō, adopted 'Miyamoto' from his home village and 'Musashi' after mastering two swords.</p><p>Common mistake in Western fiction: mixing historical periods. Sengoku period names (1467-1615) differ from Edo era (1603-1868). <strong>Honda Tadakatsu</strong> fought at Sekigahara (1600), <strong>Saito Hajime</strong> was Shinsengumi captain (1860s). They didn't live in the same era though both were legendary swordsmen.</p><p>Ronin lost clan surname rights after losing their lord. <strong>The 47 Ronin</strong> kept 'Asano' out of posthumous loyalty, an act considered revolutionary. For accurate narrative, research hierarchies: <em>hatamoto</em> (shogun's direct vassals), <em>gokenin</em> (lower-rank samurai), <em>ashigaru</em> (infantry soldiers, technically not samurai).</p>"
      },
      {
        "h2": "Meaning of kanji in samurai names",
        "body": "<p>Each kanji carries specific meaning. 'Nobunaga' (信長) combines 'faith/trust' + 'leader', reflecting Oda's ambitions. Date's 'Masamune' (政宗) means 'correct government'. Samurai fathers chose prophetic kanji for destinies of honor.</p><p>Male names frequently ended in martial suffixes: -<strong>maru</strong> (circle, used in childhood), -<strong>mori</strong> (forest/guardian), -<strong>nobu</strong> (faith), -<strong>masa</strong> (correct), -<strong>yoshi</strong> (righteous). Female samurai names used -<strong>ko</strong> (child), -<strong>hime</strong> (princess), -<strong>gozen</strong> (honorific for women warriors).</p><p>Beginner mistake: inventing impossible kanji combinations. 'Kuro' (black) + 'Aka' (red) together sounds contradictory. Sword masters adopted names related to techniques: <strong>Bokuden</strong> (木伝) 'tree transmission', reference to bamboo's rigidity-flexibility in combat. For creative projects, consult real kanji dictionaries and combine elements with complementary, not opposite, meanings.</p>"
      },
      {
        "h2": "The bushido code and honorific names",
        "body": "<p><strong>Bushido</strong> (武士道, 'way of the warrior') dictated that personal names carried clan honor. Losing it through cowardice justified <em>seppuku</em> (ritual suicide). Samurai earned titles after battles: <strong>Date Masamune</strong> was 'the One-Eyed Dragon' after losing vision to smallpox but continuing to fight.</p><p>Courtesy titles (<em>san</em>, <em>sama</em>, <em>dono</em>) indicated strict hierarchy. A <em>daimyō</em> (feudal lord) was '-sama', an equal samurai '-san', a subordinate no suffix. <strong>Tokugawa Ieyasu-sama</strong> as shogun, <strong>Honda Tadakatsu-dono</strong> as loyal general. Mixing this incorrectly in narrative ruins authenticity.</p><p><strong>Onna-bugeisha</strong> (samurai women warriors) had their own protocol. <strong>Tomoe Gozen</strong> ('Gozen' = noble warrior lady title) fought in Genpei War (1180-1185), documented beheading enemies on horseback. Their names followed feminine conventions but with suffixes denoting martial skill. In RPGs, avoid the cliché of 'woman samurai disguised as man': many fought openly with female identity.</p>"
      },
      {
        "h2": "Samurai names in modern games and anime",
        "body": "<p><strong>Ghost of Tsushima</strong> uses 'Jin Sakai', a plausible Kamakura period name. 'Sakai' is a real surname, 'Jin' means benevolence, ironic for a protagonist who abandons bushido code. <strong>Sekiro</strong> avoids specific names ('Wolf' is nickname), allowing narrative flexibility without breaking historical immersion.</p><p>In <strong>Naruto</strong>, ninja names mix samurai references (Sasuke Uchiha cites Sarutobi Sasuke, legendary ninja) with total invention. For original worldbuilding, decide: historically accurate names or culturally inspired? Don't try both simultaneously.</p><p>D&D/Pathfinder mistake: players using 'Kenji Shadow-Blade' mixing Japanese with English. Keep languages separate: 'Yamada Kenji' OR 'Shadow-Blade' as translated nickname, never together. <strong>Samurai Champloo</strong> balances this using authentic Edo-period names (Mugen, Jin, Fuu) with deliberately anachronistic aesthetics. If you're going to break historical rules, do it consciously as stylistic choice, not from ignorance.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between samurai and ninja?",
        "a": "Samurai were open aristocratic military caste; ninja (shinobi) operated secretly as spies and assassins. Samurai followed bushido; ninja prioritized effectiveness over public honor."
      },
      {
        "q": "Were ronin disgraced or simply unemployed?",
        "a": "Depends on context. Losing your lord to his seppuku left you honorable ronin. Abandoning through cowardice or being fired for incompetence marked you disgraced. Miyamoto Musashi chose to be ronin to perfect his art."
      },
      {
        "q": "Did female samurai really exist?",
        "a": "Yes. Onna-bugeisha were trained in naginata and bow. Tomoe Gozen, Nakano Takeko and Hangaku Gozen are historically documented. They defended castles when men went on campaign."
      },
      {
        "q": "Why do some samurai have multiple names?",
        "a": "They changed names after coming-of-age ceremonies, clan adoption, or receiving titles. Tokugawa Ieyasu was 'Matsudaira Takechiyo' in childhood, changed when adopted into Tokugawa clan."
      }
    ]
  }
};
