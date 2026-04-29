import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-vampiro', en: 'vampire-name-generator' },
  category: 'fun',
  emoji: '🧛',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Vampiro | Genfy',
    metaDesc: 'Creá nombres aristocráticos de vampiros, no-muertos elegantes y criaturas inmortales de la noche. Para novelas góticas, RPG y campañas de horror.',
    h1: 'Generador de Nombres de Vampiro',
    intro: 'Forjá identidades inmortales con peso aristocrático. Combiná nombre antiguo, título nobiliario y casa ancestral para vampiros memorables.',
    tag: 'Nombres fantásticos',
    filterLabel: 'Estructura del nombre',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Nombre antiguo',
        items: [
          'Vladimir', 'Lucien', 'Sebastian', 'Mircea', 'Octavian', 'Casimir', 'Aurelian', 'Ravenna', 'Selene', 'Isolde',
          'Drakon', 'Nicolae', 'Alistair', 'Damaris', 'Theron', 'Cassia', 'Lysander', 'Morwenna', 'Valeria', 'Crispin',
          'Endymion', 'Ophelia', 'Cyprian', 'Lavinia', 'Octavia', 'Ambrose', 'Persephone', 'Magnus', 'Caius', 'Severus',
          'Aurelia', 'Marius', 'Camilla', 'Xanthe', 'Ezekiel', 'Decima', 'Sabine', 'Tarquin', 'Vespera', 'Auberon'
        ]
      },
      {
        id: 'connector',
        label: 'Partícula nobiliaria',
        items: [
          'de', 'von', 'van', 'della', 'di', 'do', 'des', 'del', 'da', 'de la',
          'von der', 'zu', 'aus', 'd\'', 'le', 'l\'', 'St.', 'Mac', 'O\'', 'Fitz',
          'ben', 'bin', 'Lord', 'Lady', 'Conde', 'Conde de', 'Vizconde', 'Marqués de', 'Duque de', 'Barón',
          'Sir', 'Dama', 'Príncipe de', 'Princesa de', 'Caballero', 'Heredero de', 'Señor de', 'Señora de', 'House', 'Casa'
        ]
      },
      {
        id: 'house',
        label: 'Casa ancestral',
        items: [
          'Drăculești', 'Báthory', 'Carpathia', 'Volkov', 'Nightshade', 'Ravencroft', 'Belmont', 'Tepes', 'Strigoi', 'Karnstein',
          'Crowford', 'Blackwood', 'Ashthorne', 'Greycastle', 'Volmir', 'Pendragon', 'Lockwood', 'Drakonis', 'Whitethorn', 'Abendroth',
          'Sangremort', 'Crimsonmoor', 'Hollowgrave', 'Mournstead', 'Vaelgar', 'Nyxhold', 'Cendrillon', 'Vorhees', 'Thornhill', 'Ravenholm',
          'Vasquez', 'Aldebrand', 'Krovac', 'Mirescu', 'Vlăduț', 'Estefania', 'Romanov', 'Habsburgo', 'Medici', 'Borgia',
          'Brașov', 'Sibiu', 'Lacrimosa', 'Umbría', 'Catacumba', 'Ezreth', 'Solanum', 'Atramente', 'Crepúsculo', 'Tenebrae'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo construir un nombre de vampiro creíble',
        body: '<p>El error principal es elegir nombres modernos para personajes inmortales. Si tu vampiro tiene 600 años, no puede llamarse "Brian Smith". Los nombres deben anclarse en la época de la conversión: un vampiro nacido en 1300 lleva nombre medieval (Bartholomew, Eleanor), uno de 1700 lleva nombre barroco (Sebastian, Aurelia), uno de 1900 puede tener nombre victoriano (Vincent, Cordelia). Esa coherencia temporal define al personaje desde la primera mención.</p><p>La <strong>partícula nobiliaria</strong> aporta clase y origen geográfico. "Lucien de Sangremort" suena francés aristocrático, "Vladimir Drăculești" suena rumano antiguo, "Sebastian von Volmir" suena germano. Mezclar partículas y casas de regiones distintas (Vladimir de Sangremort) crea ruido cultural a menos que justifiques el matrimonio dinástico.</p><p>La <strong>casa ancestral</strong> es donde la mayoría se equivoca eligiendo apellidos demasiado obvios tipo "Bloodfang" o "Darkmoon". Mejor usar topónimos reales con resonancia gótica (Carpathia, Brașov, Sibiu) o nombres latinos (Tenebrae, Crepúsculo, Lacrimosa) que suenan elegantes sin ser caricaturescos. <em>Interview with the Vampire</em> usa "de Lioncourt" para Lestat: aristocrático, francés, sin caer en cliché.</p>'
      },
      {
        h2: 'Vampiros según el sistema de juego o universo narrativo',
        body: '<p>En <strong>Vampire: The Masquerade</strong>, el clan define el estilo del nombre. Los Ventrue prefieren nombres de poder anglosajón (Hardestadt, Strauss). Los Toreador eligen nombres artísticos europeos (Helena, Pierre). Los Tzimisce mantienen raíces eslavas y rumanas (Vykos, Sascha). Los Brujah tienden a nombres revolucionarios o griegos antiguos (Theo, Smiling Jack). Si jugás VTM, respetá el clan: rompe inmersión cuando un Nosferatu se llama Christian.</p><p>Para <strong>D&D 5e</strong>, los vampiros son humanoides no-muertos sin tradición de naming específica. Strahd von Zarovich (Curse of Strahd) marca el patrón: nombre de pila eslavo + partícula germana + topónimo. "Mircea van Brașov", "Aurelian von Drăculești" siguen esa fórmula. Para vampiros menores y spawn, podés usar nombres simples sin partícula. Solo los antiguos cargan casa y título.</p><p>En literatura moderna, <em>Twilight</em> rompe la regla: los Cullen tienen apellidos modernos americanos. Funciona porque el género es romance contemporáneo, no horror gótico. Si tu novela es urban fantasy moderna, podés usar apellidos comunes con primer nombre ligeramente arcaico. <em>The Vampire Diaries</em> usa "Salvatore" (apellido italiano elegante pero no exótico) con primer nombre americano. La elección depende del tono: gótico clásico pide grandilocuencia, moderno pide sutileza.</p>'
      },
      {
        h2: 'Errores típicos al nombrar vampiros',
        body: '<p>Primero: <strong>nombres demasiado largos</strong>. "Sebastian Aurelius Maximilien de Sangremort von Drăculești III" es ilegible y suena a parodia. Limitate a tres elementos: nombre de pila + partícula + casa. El título (Conde, Duque) se menciona en presentación formal pero no se repite cada vez. <em>Dracula</em> de Bram Stoker es solo "Count Dracula", no "Vlad Drăculești III Príncipe de Valaquia".</p><p>Segundo error: <strong>mezclar idiomas sin lógica</strong>. "Hiroshi de Sangremort" suena disonante a menos que justifiques cómo un vampiro japonés terminó en una casa francesa. Mejor mantener coherencia o usar la mezcla intencionalmente para mostrar exilio o adopción. Los Ventrue del Lejano Oriente en VTM tienen nombres japoneses puros (Asanbosam) o adoptados completamente al destino (Yoshiro Hamasaki).</p><p>Tercer error: <strong>apellidos con sangre/oscuridad/luna</strong> repetidos hasta el cansancio. Bloodmoore, Darkraven, Nightthorn, Bloodfang, Shadowmoon. Después de tres personajes así, todo es el mismo personaje. Mejor usar topónimos reales (Praga, Carpathia, Wallachia) o latinismos sutiles (Atramente, Tenebrae, Solanum). <em>Castlevania</em> resuelve esto con "Belmont" (apellido real de cazadores de vampiros) que no es ni siquiera vampírico, lo que crea ironía.</p>'
      },
      {
        h2: 'Vampiros en la cultura: referencias para tu nombre',
        body: '<p>El canon vampírico empieza con <em>Carmilla</em> (1872) de Sheridan Le Fanu: la protagonista usa "Mircalla, Countess Karnstein" como anagrama de Carmilla. Esa idea (nombres que cambian con cada renacimiento manteniendo letras) es brillante para sagas largas. Tu vampiro de 800 años puede haber sido Mircalla, Carmilla, Millarca, todas anagrama del nombre original.</p><p><em>Dracula</em> de Bram Stoker (1897) establece el formato Conde + topónimo. <em>Anne Rice</em> en las Crónicas Vampíricas inventa la onomástica moderna del vampiro: Lestat de Lioncourt, Armand, Marius de Romanus, Pandora, Akasha. Notá que muchos no llevan apellido: los más antiguos perdieron identidad civil hace milenios. Solo los conversos recientes mantienen apellido.</p><p>Para inspiración no-occidental: la mitología china tiene <em>jiangshi</em> (vampiros saltadores), Japón tiene <em>nukekubi</em>, Filipinas tiene <em>aswang</em>. Si tu campaña incluye vampiros de tradiciones distintas, los nombres respetan esas culturas. Un jiangshi se llama Liu Wei o Chen Hao, no Vladimir. Esa diversidad mitológica enriquece campañas largas y novelas con elenco amplio.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cómo elijo entre nombre corto o largo con título?',
        a: 'Para vampiros antiguos y aristocráticos, usá nombre + partícula + casa (Sebastian de Sangremort). Para vampiros jóvenes o conversos recientes, alcanza con nombre + apellido moderno. Los más antiguos suelen perder apellido civil porque pasaron siglos.'
      },
      {
        q: '¿Sirven estos nombres para personajes femeninos?',
        a: 'Varios nombres de pila listados son femeninos (Selene, Isolde, Ravenna, Lavinia, Persephone, Camilla). Las partículas y casas son neutrales, así que combinan con cualquier género. Para versiones más femeninas usá Lady, Princesa, Condesa o Duquesa como título.'
      },
      {
        q: '¿Puedo usar estos nombres en obras comerciales?',
        a: 'Sí. Las combinaciones son genéricas inspiradas en folklore eslavo y nobleza europea histórica (dominio público). Solo evitá nombres registrados de obras protegidas como "Lestat de Lioncourt" o "Strahd von Zarovich".'
      },
      {
        q: '¿Cómo combino nombre con época de conversión?',
        a: 'Para vampiros pre-1500 usá nombres medievales (Bartholomew, Eleanor). Para 1500-1800, nombres barrocos y renacentistas (Sebastian, Aurelia). Para 1800-1900, victorianos (Vincent, Cordelia). Para conversos modernos, primer nombre actual con apellido aristocrático preservado.'
      }
    ]
  },
  en: {
    pageTitle: 'Vampire Name Generator | Genfy',
    metaDesc: 'Create aristocratic vampire, elegant undead and immortal night creature names. For gothic novels, RPGs, horror campaigns and dark fantasy worlds.',
    h1: 'Vampire Name Generator',
    intro: 'Forge immortal identities with aristocratic weight. Combine ancient name, noble particle and ancestral house for memorable vampires.',
    tag: 'Fantasy names',
    filterLabel: 'Name structure',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Ancient first name',
        items: [
          'Vladimir', 'Lucien', 'Sebastian', 'Mircea', 'Octavian', 'Casimir', 'Aurelian', 'Ravenna', 'Selene', 'Isolde',
          'Drakon', 'Nicolae', 'Alistair', 'Damaris', 'Theron', 'Cassia', 'Lysander', 'Morwenna', 'Valeria', 'Crispin',
          'Endymion', 'Ophelia', 'Cyprian', 'Lavinia', 'Octavia', 'Ambrose', 'Persephone', 'Magnus', 'Caius', 'Severus',
          'Aurelia', 'Marius', 'Camilla', 'Xanthe', 'Ezekiel', 'Decima', 'Sabine', 'Tarquin', 'Vespera', 'Auberon'
        ]
      },
      {
        id: 'connector',
        label: 'Noble particle',
        items: [
          'de', 'von', 'van', 'della', 'di', 'do', 'des', 'del', 'da', 'de la',
          'von der', 'zu', 'aus', 'd\'', 'le', 'l\'', 'St.', 'Mac', 'O\'', 'Fitz',
          'ben', 'bin', 'Lord', 'Lady', 'Count', 'Count of', 'Viscount', 'Marquis of', 'Duke of', 'Baron',
          'Sir', 'Dame', 'Prince of', 'Princess of', 'Knight', 'Heir of', 'Lord of', 'Lady of', 'House', 'of House'
        ]
      },
      {
        id: 'house',
        label: 'Ancestral house',
        items: [
          'Drăculești', 'Báthory', 'Carpathia', 'Volkov', 'Nightshade', 'Ravencroft', 'Belmont', 'Tepes', 'Strigoi', 'Karnstein',
          'Crowford', 'Blackwood', 'Ashthorne', 'Greycastle', 'Volmir', 'Pendragon', 'Lockwood', 'Drakonis', 'Whitethorn', 'Abendroth',
          'Sangremort', 'Crimsonmoor', 'Hollowgrave', 'Mournstead', 'Vaelgar', 'Nyxhold', 'Cendrillon', 'Vorhees', 'Thornhill', 'Ravenholm',
          'Vasquez', 'Aldebrand', 'Krovac', 'Mirescu', 'Vlăduț', 'Estefania', 'Romanov', 'Habsburg', 'Medici', 'Borgia',
          'Brașov', 'Sibiu', 'Lacrimosa', 'Umbria', 'Catacomb', 'Ezreth', 'Solanum', 'Atramente', 'Crepuscule', 'Tenebrae'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to build a believable vampire name',
        body: '<p>The main mistake is choosing modern names for immortal characters. If your vampire is 600 years old, they can\'t be called "Brian Smith". Names should anchor to the conversion era: a vampire born in 1300 carries medieval name (Bartholomew, Eleanor), one from 1700 carries baroque name (Sebastian, Aurelia), one from 1900 may have Victorian name (Vincent, Cordelia). That temporal coherence defines the character from first mention.</p><p>The <strong>noble particle</strong> adds class and geographic origin. "Lucien de Sangremort" sounds French aristocratic, "Vladimir Drăculești" sounds old Romanian, "Sebastian von Volmir" sounds Germanic. Mixing particles and houses from different regions (Vladimir de Sangremort) creates cultural noise unless you justify dynastic marriage.</p><p>The <strong>ancestral house</strong> is where most go wrong choosing too-obvious surnames like "Bloodfang" or "Darkmoon". Better to use real toponyms with gothic resonance (Carpathia, Brașov, Sibiu) or Latin names (Tenebrae, Crepuscule, Lacrimosa) that sound elegant without caricature. <em>Interview with the Vampire</em> uses "de Lioncourt" for Lestat: aristocratic, French, no cliché.</p>'
      },
      {
        h2: 'Vampires by game system or narrative universe',
        body: '<p>In <strong>Vampire: The Masquerade</strong>, the clan defines name style. Ventrue prefer Anglo-Saxon power names (Hardestadt, Strauss). Toreador choose European artistic names (Helena, Pierre). Tzimisce keep Slavic and Romanian roots (Vykos, Sascha). Brujah tend toward revolutionary or ancient Greek names (Theo, Smiling Jack). If you play VTM, respect the clan: it breaks immersion when a Nosferatu is called Christian.</p><p>For <strong>D&D 5e</strong>, vampires are undead humanoids without specific naming tradition. Strahd von Zarovich (Curse of Strahd) sets the pattern: Slavic first name + Germanic particle + toponym. "Mircea van Brașov", "Aurelian von Drăculești" follow that formula. For lesser vampires and spawn, you can use simple names without particle. Only ancients carry house and title.</p><p>In modern literature, <em>Twilight</em> breaks the rule: the Cullens have modern American surnames. It works because the genre is contemporary romance, not gothic horror. If your novel is modern urban fantasy, you can use common surnames with slightly archaic first name. <em>The Vampire Diaries</em> uses "Salvatore" (elegant Italian surname but not exotic) with American first name. Choice depends on tone: classic gothic asks for grandeur, modern asks for subtlety.</p>'
      },
      {
        h2: 'Typical mistakes when naming vampires',
        body: '<p>First: <strong>too-long names</strong>. "Sebastian Aurelius Maximilien de Sangremort von Drăculești III" is unreadable and sounds like parody. Limit to three elements: first name + particle + house. The title (Count, Duke) is mentioned in formal introduction but not repeated each time. Bram Stoker\'s <em>Dracula</em> is only "Count Dracula", not "Vlad Drăculești III Prince of Wallachia".</p><p>Second mistake: <strong>mixing languages without logic</strong>. "Hiroshi de Sangremort" sounds dissonant unless you justify how a Japanese vampire ended up in a French house. Better keep coherence or use the mix intentionally to show exile or adoption. Far East Ventrue in VTM have either pure Japanese names (Asanbosam) or fully adopted to destiny (Yoshiro Hamasaki).</p><p>Third mistake: <strong>blood/dark/moon surnames</strong> repeated to exhaustion. Bloodmoore, Darkraven, Nightthorn, Bloodfang, Shadowmoon. After three characters like that, everything is the same. Better use real toponyms (Prague, Carpathia, Wallachia) or subtle Latinisms (Atramente, Tenebrae, Solanum). <em>Castlevania</em> solves this with "Belmont" (real surname of vampire hunters) that isn\'t even vampiric, creating irony.</p>'
      },
      {
        h2: 'Vampires in culture: references for your name',
        body: '<p>The vampire canon starts with Sheridan Le Fanu\'s <em>Carmilla</em> (1872): the protagonist uses "Mircalla, Countess Karnstein" as anagram of Carmilla. That idea (names changing with each rebirth keeping letters) is brilliant for long sagas. Your 800-year-old vampire may have been Mircalla, Carmilla, Millarca, all anagrams of original name.</p><p>Bram Stoker\'s <em>Dracula</em> (1897) establishes Count + toponym format. Anne Rice in Vampire Chronicles invents modern vampire onomastics: Lestat de Lioncourt, Armand, Marius de Romanus, Pandora, Akasha. Note many lack surname: the oldest lost civil identity millennia ago. Only recent converts keep surname.</p><p>For non-Western inspiration: Chinese mythology has <em>jiangshi</em> (jumping vampires), Japan has <em>nukekubi</em>, Philippines has <em>aswang</em>. If your campaign includes vampires from different traditions, names respect those cultures. A jiangshi is called Liu Wei or Chen Hao, not Vladimir. That mythological diversity enriches long campaigns and novels with broad cast.</p>'
      }
    ],
    faq: [
      {
        q: 'How do I choose between short name or long with title?',
        a: 'For ancient and aristocratic vampires, use first name + particle + house (Sebastian de Sangremort). For young vampires or recent converts, first name + modern surname suffices. Older ones tend to lose civil surname after centuries.'
      },
      {
        q: 'Do these names work for female characters?',
        a: 'Several listed first names are female (Selene, Isolde, Ravenna, Lavinia, Persephone, Camilla). Particles and houses are neutral, so they combine with any gender. For more feminine versions use Lady, Princess, Countess or Duchess as title.'
      },
      {
        q: 'Can I use these names in commercial works?',
        a: 'Yes. Combinations are generic, inspired by Slavic folklore and historical European nobility (public domain). Just avoid registered names from protected works like "Lestat de Lioncourt" or "Strahd von Zarovich".'
      },
      {
        q: 'How do I match name with conversion era?',
        a: 'For pre-1500 vampires use medieval names (Bartholomew, Eleanor). For 1500-1800, baroque and Renaissance names (Sebastian, Aurelia). For 1800-1900, Victorian (Vincent, Cordelia). For modern converts, current first name with preserved aristocratic surname.'
      }
    ]
  }
};
