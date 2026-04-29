import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-estrella', en: 'star-name-generator' },
  category: 'fun',
  emoji: '✨',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Estrella | Genfy',
    metaDesc: 'Creá nombres de estrellas y sistemas solares para ciencia ficción espacial, astronomía ficticia y mapas galácticos. Worldbuilding estelar al instante.',
    h1: 'Generador de Nombres de Estrella',
    intro: 'Diseñá soles, gigantes rojas y enanas blancas con nombres científicos o mitológicos para tu space opera, hard sci-fi o universo galáctico.',
    tag: 'Worldbuilding',
    filterLabel: 'Estilo',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'prefix',
        label: 'Prefijo',
        items: [
          'Alfa', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta',
          'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu',
          'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma',
          'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega',
          'HD', 'GJ', 'Kepler-', 'TRAPPIST-', 'Wolf', 'Ross',
          'Gliese', 'BD+', 'TYC', 'Próxima', 'Última', 'Primera',
          'Estrella', 'Sol', 'Lucero', 'Faro'
        ]
      },
      {
        id: 'name',
        label: 'Nombre',
        items: [
          'Aldebarán', 'Vega', 'Altair', 'Sirio', 'Polaris', 'Antares',
          'Rigel', 'Betelgeuse', 'Procyon', 'Capella', 'Arcturus', 'Spica',
          'Dénebola', 'Fomalhaut', 'Pollux', 'Régulus', 'Mizar', 'Alcor',
          'Yelva', 'Talon', 'Mira', 'Vorek', 'Halcyon', 'Kresnik',
          'Solanir', 'Elari', 'Vespera', 'Nyssa', 'Astrael', 'Helion',
          'Kaelar', 'Veridian', 'Zephir', 'Auriga', 'Cygnus', 'Lyra',
          'Draco', 'Phoenix', 'Pavo', 'Tucana'
        ]
      },
      {
        id: 'designation',
        label: 'Designación',
        items: [
          'A', 'B', 'C', 'I', 'II', 'III', 'IV', 'V',
          'Mayor', 'Menor', 'Prima', 'Secunda', 'Tertia', 'Norte', 'Sur', 'Este',
          'Doble', 'Triple', 'Solitaria', 'Eclipsada', 'Variable', 'Estable',
          'Naciente', 'Poniente', 'Brillante', 'Oscura', 'Roja', 'Azul',
          'Blanca', 'Amarilla', 'Joven', 'Antigua', 'Vieja', 'Recién Descubierta',
          'Inestable', 'Pulsante', 'Fría', 'Caliente', 'Distante', 'Cercana'
        ]
      },
      {
        id: 'suffix',
        label: 'Sufijo cósmico',
        items: [
          'del Cazador', 'de la Cazadora', 'del Lobo', 'del Águila', 'del Cuervo', 'del Cisne',
          'del Norte Eterno', 'del Sur Profundo', 'del Velo', 'del Abismo', 'del Cosmos', 'del Vacío',
          'del Trono Celeste', 'de la Corona Caída', 'del Reino Olvidado', 'del Imperio Antiguo',
          'que guía a los marinos', 'que vela el solsticio', 'que anuncia tormentas', 'que precede al alba',
          'binaria con compañera invisible', 'envuelta en nebulosa', 'rodeada por anillo de polvo',
          'con planeta habitable confirmado', 'sin planetas detectables', 'con cinco planetas rocosos',
          'tipo G2 estable', 'gigante roja en expansión', 'enana blanca de baja masa', 'pulsar de neutrones',
          'agonizante', 'recién nacida', 'en sistema triple', 'en cúmulo abierto',
          'visible a simple vista', 'requiere telescopio', 'punto de referencia galáctico',
          'usada en navegación', 'ignorada por catálogos antiguos'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo nombrar estrellas con autenticidad astronómica',
        body: '<p>La astronomía real combina dos sistemas paralelos: nombres tradicionales (Vega, Sirio, Aldebarán, mayoría de origen árabe medieval) y designaciones técnicas (HD 209458, Kepler-186f). Tu sci-fi gana credibilidad si replicás esa convivencia. <em>Halcyon (HD-189733)</em> suena profesional porque mezcla nombre evocador con código administrativo, igual que astrónomos reales nombran estrellas.</p><p>Las designaciones técnicas siguen catálogos: <em>HD</em> (Henry Draper), <em>GJ</em> (Gliese), <em>Wolf</em>, <em>Ross</em>, <em>Kepler</em>, <em>TRAPPIST</em> son prefijos reales que tu novela puede usar o adaptar. Si inventás catálogo propio (<em>VEX-7741</em>, <em>Talos-9</em>), mantené la consistencia: una vez establecido, no mezcles arbitrariamente con HD o Kepler.</p><p>Los nombres mitológicos funcionan especialmente bien para sistemas habitados o relevantes para la trama. Una estrella alrededor de la que orbita el planeta del protagonista debería tener nombre, no solo número. <em>Solanir</em> da peso narrativo; <em>HD-209458b</em> es etiqueta. Reservá los códigos para fondos estelares que solo aparecen en cartas de navegación; nombres propios para los soles que importan.</p>'
      },
      {
        h2: 'Aplicaciones para space opera y hard sci-fi',
        body: '<p>En space opera tipo <em>Mass Effect</em> o <em>The Expanse</em>, los nombres estelares son referencias culturales. <em>Sol</em> es la Tierra; <em>Próxima</em> el primer salto interestelar; <em>Halcyon</em> una colonia con historia. Cuando un personaje dice "nací en el sistema Halcyon", el lector situado entiende geografía, política y posiblemente actitud cultural sin explicación adicional.</p><p>En hard sci-fi tipo <em>Project Hail Mary</em>, los nombres deben respetar realismo astronómico. Una estrella tipo G2 (como nuestro Sol) tiene radio y temperatura específicos; si tu novela describe Halcyon como gigante roja pero ubica un planeta habitable cercano, contradice física. Definí el tipo espectral de cada estrella relevante (O, B, A, F, G, K, M) y derivá consecuencias: temperatura del planeta, ciclo solar, vida útil de la estrella.</p><p>Para juegos de rol espaciales tipo <em>Starfinder</em> o <em>Traveller</em>, generá 50-100 estrellas con nombres mezclando estilos. Los sistemas mayores reciben nombres mitológicos completos; los menores, designaciones técnicas. Los jugadores recordarán <em>Halcyon</em> y <em>Vespera</em> mucho mejor que <em>HD-7741b</em>, así que invertí en bautizos memorables solo donde la trama lo requiera.</p>'
      },
      {
        h2: 'Errores comunes al inventar nombres estelares',
        body: '<p>Primer error: usar nombres terrestres antiguos sin variación. <em>Estrella Mike</em>, <em>Sistema Bob</em> rompen inmersión. Las estrellas reales tienen nombres con peso etimológico: <em>Aldebarán</em> significa "el que sigue" en árabe; <em>Antares</em> es "rival de Marte" por su color rojizo. Si inventás nombre, dale significado etimológico que conecte con apariencia o mitología local.</p><p>Segundo error: nombres demasiado parecidos a real life. <em>Vega II</em>, <em>Nuevo Sirio</em>, <em>Antares Norte</em> hacen tu universo derivativo. Mejor inventar desde fonética propia: <em>Yelva</em>, <em>Kresnik</em>, <em>Vorek</em> suenan estelares sin pisar nombres existentes. Conservá los reales para sistemas que cumplen función específica (Sol, Próxima Centauri por ser cercanos a nuestra realidad).</p><p>Tercer error: ignorar la magnitud aparente. Un sistema que el protagonista ve "brillando intensamente desde su nave" debería tener nombre conocido y catalogado; un sistema descubierto recién hace 3 meses no tendría nombre tradicional, solo código. Esa coherencia entre visibilidad y nomenclatura aporta credibilidad. Las estrellas más brillantes (Sirio, Vega, Arcturus) tienen nombres antiguos porque siempre fueron visibles; replicá ese patrón en tu fanasía espacial.</p>'
      },
      {
        h2: 'Construir geografía estelar coherente',
        body: '<p>Los sistemas solares no son puntos aislados: forman barrios cósmicos. Definí qué estrellas están cerca entre sí (5-15 años luz para sci-fi con FTL razonable) y qué relaciones políticas tienen. <em>Halcyon</em>, <em>Vespera</em> y <em>Solanir</em> pueden ser una alianza de tres sistemas; <em>Yelva</em> y <em>Kresnik</em> los rivales del sector vecino. Esa estructura geopolítica filtra a las decisiones del protagonista.</p><p>Cada estrella relevante necesita ficha técnica: tipo espectral, número de planetas, planetas habitados, principal exportación, gobierno político. <em>Halcyon: G2, 7 planetas, 2 habitados, exporta deuterio, gobierno corporativo de tres consorcios</em>. Esa ficha de tres líneas alimenta cien decisiones narrativas: qué tipo de barcos viajan allí, qué dialectos se hablan, qué tecnologías son comunes.</p><p>Usá las estrellas como hitos de viaje. Tu protagonista no salta de planeta a planeta directamente: pasa por sistemas estelares específicos, a veces detenidos por cuestiones logísticas. Cada parada en <em>Vespera-IV</em> es oportunidad narrativa. <em>Star Wars</em> y <em>The Expanse</em> usan esto magistralmente: los nombres de planetas (Tatooine, Mars, Ganymede) son tan importantes como los de personajes porque cada uno carga atmósfera, conflicto y memoria.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántas estrellas debo nombrar para mi space opera?',
        a: 'Para una novela enfocada en una región, 8-15 sistemas con nombres detallados alcanzan. Para sagas extensas tipo <em>The Expanse</em>, 30-50 con jerarquías claras (sistema mayor, vecinos, colonias). Documentá distancias y rutas comerciales para evitar contradicciones entre libros.'
      },
      {
        q: '¿Conviene usar nombres reales como Próxima Centauri o Vega?',
        a: 'Sí, especialmente para sci-fi cercana a nuestra época. Próxima Centauri es la estrella más cercana al Sol y existe; usarla da realismo. Para épocas lejanas (siglo XXIV, civilizaciones colonizadoras antiguas), inventar nombres propios refleja que cambió la nomenclatura humana.'
      },
      {
        q: '¿Cómo manejo el tipo espectral en la narrativa?',
        a: 'Para hard sci-fi, mencionalo casualmente: "el sol amarillo G2 de Halcyon iluminaba el desierto". Para space opera ligera, mejor describir consecuencias: "tres lunas y un sol gigante rojo arrojaban sombras dobles". Los lectores casuales no necesitan vocabulario astronómico, los duros sí.'
      },
      {
        q: '¿Funcionan estos nombres para fantasía con magia astral?',
        a: 'Sí, especialmente nombres con sonoridad mítica. Sanderson en <em>Stormlight Archive</em> usa <em>Salas</em>, <em>Mishim</em>, <em>Nomon</em> para lunas con peso narrativo. Tus estrellas pueden tener nombres similares y funcionar como deidades menores, fuentes de magia o presagios astrológicos.'
      }
    ]
  },
  en: {
    pageTitle: 'Star Name Generator | Genfy',
    metaDesc: 'Create star and solar system names for space sci-fi, fictional astronomy and galactic maps. Stellar worldbuilding instantly.',
    h1: 'Star Name Generator',
    intro: 'Design suns, red giants and white dwarfs with scientific or mythological names for your space opera, hard sci-fi or galactic universe.',
    tag: 'Worldbuilding',
    filterLabel: 'Style',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'prefix',
        label: 'Prefix',
        items: [
          'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta',
          'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu',
          'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma',
          'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega',
          'HD', 'GJ', 'Kepler-', 'TRAPPIST-', 'Wolf', 'Ross',
          'Gliese', 'BD+', 'TYC', 'Proxima', 'Ultima', 'Prime',
          'Star', 'Sun', 'Lodestar', 'Beacon'
        ]
      },
      {
        id: 'name',
        label: 'Name',
        items: [
          'Aldebaran', 'Vega', 'Altair', 'Sirius', 'Polaris', 'Antares',
          'Rigel', 'Betelgeuse', 'Procyon', 'Capella', 'Arcturus', 'Spica',
          'Denebola', 'Fomalhaut', 'Pollux', 'Regulus', 'Mizar', 'Alcor',
          'Yelva', 'Talon', 'Mira', 'Vorek', 'Halcyon', 'Kresnik',
          'Solanir', 'Elari', 'Vespera', 'Nyssa', 'Astrael', 'Helion',
          'Kaelar', 'Veridian', 'Zephir', 'Auriga', 'Cygnus', 'Lyra',
          'Draco', 'Phoenix', 'Pavo', 'Tucana'
        ]
      },
      {
        id: 'designation',
        label: 'Designation',
        items: [
          'A', 'B', 'C', 'I', 'II', 'III', 'IV', 'V',
          'Major', 'Minor', 'Prime', 'Secunda', 'Tertia', 'North', 'South', 'East',
          'Twin', 'Triple', 'Solitary', 'Eclipsed', 'Variable', 'Stable',
          'Rising', 'Setting', 'Bright', 'Dark', 'Red', 'Blue',
          'White', 'Yellow', 'Young', 'Ancient', 'Old', 'Newly Discovered',
          'Unstable', 'Pulsating', 'Cold', 'Hot', 'Distant', 'Near'
        ]
      },
      {
        id: 'suffix',
        label: 'Cosmic suffix',
        items: [
          'of the Hunter', 'of the Huntress', 'of the Wolf', 'of the Eagle', 'of the Raven', 'of the Swan',
          'of the Eternal North', 'of the Deep South', 'of the Veil', 'of the Abyss', 'of the Cosmos', 'of the Void',
          'of the Heavenly Throne', 'of the Fallen Crown', 'of the Forgotten Realm', 'of the Ancient Empire',
          'guiding sailors', 'watching the solstice', 'announcing storms', 'preceding dawn',
          'binary with invisible companion', 'wrapped in nebula', 'surrounded by dust ring',
          'with confirmed habitable planet', 'with no detectable planets', 'with five rocky planets',
          'stable G2 type', 'expanding red giant', 'low-mass white dwarf', 'neutron pulsar',
          'dying', 'newborn', 'in triple system', 'in open cluster',
          'visible to naked eye', 'requires telescope', 'galactic reference point',
          'used in navigation', 'ignored by ancient catalogs'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to name stars with astronomical authenticity',
        body: '<p>Real astronomy combines two parallel systems: traditional names (Vega, Sirius, Aldebaran, mostly of medieval Arabic origin) and technical designations (HD 209458, Kepler-186f). Your sci-fi gains credibility by replicating that coexistence. <em>Halcyon (HD-189733)</em> sounds professional because it mixes evocative name with administrative code, just as real astronomers name stars.</p><p>Technical designations follow catalogs: <em>HD</em> (Henry Draper), <em>GJ</em> (Gliese), <em>Wolf</em>, <em>Ross</em>, <em>Kepler</em>, <em>TRAPPIST</em> are real prefixes your novel can use or adapt. If you invent your own catalog (<em>VEX-7741</em>, <em>Talos-9</em>), maintain consistency: once established, don\'t arbitrarily mix with HD or Kepler.</p><p>Mythological names work especially well for inhabited or plot-relevant systems. A star around which the protagonist\'s planet orbits should have a name, not just a number. <em>Solanir</em> gives narrative weight; <em>HD-209458b</em> is label. Reserve codes for stellar backgrounds appearing only in navigation charts; proper names for the suns that matter.</p>'
      },
      {
        h2: 'Applications for space opera and hard sci-fi',
        body: '<p>In space opera like <em>Mass Effect</em> or <em>The Expanse</em>, stellar names are cultural references. <em>Sol</em> is Earth; <em>Proxima</em> the first interstellar jump; <em>Halcyon</em> a colony with history. When a character says "I was born in the Halcyon system", the situated reader understands geography, politics and possibly cultural attitude without additional explanation.</p><p>In hard sci-fi like <em>Project Hail Mary</em>, names must respect astronomical realism. A G2-type star (like our Sun) has specific radius and temperature; if your novel describes Halcyon as red giant but places a habitable planet near it, it contradicts physics. Define the spectral type of each relevant star (O, B, A, F, G, K, M) and derive consequences: planet temperature, solar cycle, star lifespan.</p><p>For space RPGs like <em>Starfinder</em> or <em>Traveller</em>, generate 50-100 stars mixing styles. Major systems get full mythological names; minor ones, technical designations. Players will remember <em>Halcyon</em> and <em>Vespera</em> much better than <em>HD-7741b</em>, so invest in memorable christenings only where plot requires.</p>'
      },
      {
        h2: 'Common mistakes when inventing stellar names',
        body: '<p>First mistake: using old terrestrial names without variation. <em>Star Mike</em>, <em>System Bob</em> break immersion. Real stars have names with etymological weight: <em>Aldebaran</em> means "the follower" in Arabic; <em>Antares</em> is "Mars\' rival" because of its reddish color. If you invent a name, give it etymological meaning connecting to appearance or local mythology.</p><p>Second mistake: names too similar to real life. <em>Vega II</em>, <em>New Sirius</em>, <em>Antares North</em> make your universe derivative. Better invent from your own phonetics: <em>Yelva</em>, <em>Kresnik</em>, <em>Vorek</em> sound stellar without stepping on existing names. Reserve real ones for systems serving specific function (Sol, Proxima Centauri being close to our reality).</p><p>Third mistake: ignoring apparent magnitude. A system the protagonist sees "shining brightly from his ship" should have known cataloged name; a system discovered 3 months ago wouldn\'t have traditional name, only code. That coherence between visibility and nomenclature lends credibility. The brightest stars (Sirius, Vega, Arcturus) have ancient names because they were always visible; replicate that pattern in your space fantasy.</p>'
      },
      {
        h2: 'Building coherent stellar geography',
        body: '<p>Solar systems aren\'t isolated points: they form cosmic neighborhoods. Define which stars are near each other (5-15 light years for sci-fi with reasonable FTL) and what political relations they have. <em>Halcyon</em>, <em>Vespera</em> and <em>Solanir</em> can be a three-system alliance; <em>Yelva</em> and <em>Kresnik</em> the rivals of the neighboring sector. That geopolitical structure filters into protagonist decisions.</p><p>Each relevant star needs technical sheet: spectral type, number of planets, inhabited planets, main export, political government. <em>Halcyon: G2, 7 planets, 2 inhabited, exports deuterium, corporate government of three consortia</em>. That three-line sheet feeds a hundred narrative decisions: what kind of ships travel there, what dialects are spoken, what technologies are common.</p><p>Use stars as travel milestones. Your protagonist doesn\'t jump planet to planet directly: passes through specific stellar systems, sometimes stopped for logistics. Each stop at <em>Vespera-IV</em> is narrative opportunity. <em>Star Wars</em> and <em>The Expanse</em> use this masterfully: planet names (Tatooine, Mars, Ganymede) are as important as character names because each carries atmosphere, conflict and memory.</p>'
      }
    ],
    faq: [
      {
        q: 'How many stars should I name for my space opera?',
        a: 'For a novel focused on one region, 8-15 systems with detailed names is enough. For extensive sagas like <em>The Expanse</em>, 30-50 with clear hierarchies (major system, neighbors, colonies). Document distances and trade routes to avoid contradictions between books.'
      },
      {
        q: 'Should I use real names like Proxima Centauri or Vega?',
        a: 'Yes, especially for sci-fi near our era. Proxima Centauri is the closest star to the Sun and exists; using it gives realism. For distant eras (24th century, ancient colonizing civilizations), inventing your own names reflects that human nomenclature changed.'
      },
      {
        q: 'How do I handle spectral type in narrative?',
        a: 'For hard sci-fi, mention casually: "Halcyon\'s yellow G2 sun illuminated the desert". For light space opera, better to describe consequences: "three moons and a giant red sun cast double shadows". Casual readers don\'t need astronomical vocabulary, hard ones do.'
      },
      {
        q: 'Do these names work for fantasy with astral magic?',
        a: 'Yes, especially names with mythical sonority. Sanderson in <em>Stormlight Archive</em> uses <em>Salas</em>, <em>Mishim</em>, <em>Nomon</em> for moons with narrative weight. Your stars can have similar names and function as minor deities, magic sources or astrological omens.'
      }
    ]
  }
};
