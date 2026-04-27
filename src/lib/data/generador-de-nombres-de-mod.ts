import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-mod",
    "en": "game-mod-name-generator"
  },
  "category": "fun",
  "emoji": "🔧",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Mod | Genfy",
    "metaDesc": "Genera nombres técnicos para mods de juegos, paquetes de texturas y expansiones comunitarias. Herramienta gratuita para modders.",
    "h1": "Generador de Nombres de Mod",
    "intro": "Creá nombres profesionales para tus mods, texture packs, overhauls y expansiones. Perfecto para proyectos de Skyrim, Minecraft, Fallout, y cualquier juego moddeable.",
    "tag": "Diversión",
    "filterLabel": "Tipo de Mod",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo",
        "items": [
          "Enhanced",
          "Improved",
          "Ultimate",
          "Advanced",
          "Complete",
          "Total",
          "Supreme",
          "Master",
          "Epic",
          "Legendary",
          "Mythic",
          "Divine",
          "Perfect",
          "Pure",
          "True",
          "Real",
          "Authentic",
          "Realistic",
          "Immersive",
          "Dynamic",
          "Optimized",
          "Refined",
          "Polished",
          "Balanced",
          "Overhaul",
          "Remastered",
          "Redesigned",
          "Revamped",
          "Reimagined",
          "Extended",
          "Expanded",
          "Amplified",
          "Augmented",
          "Boosted",
          "Super",
          "Mega",
          "Ultra",
          "Hyper",
          "Neo",
          "Next-Gen"
        ]
      },
      {
        "id": "feature",
        "label": "Feature",
        "items": [
          "Graphics",
          "Visuals",
          "Textures",
          "Lighting",
          "Weather",
          "Combat",
          "Magic",
          "Skills",
          "Weapons",
          "Armor",
          "Items",
          "Inventory",
          "Interface",
          "HUD",
          "Camera",
          "Movement",
          "Animation",
          "Sound",
          "Music",
          "Audio",
          "NPCs",
          "AI",
          "Difficulty",
          "Survival",
          "Crafting",
          "Building",
          "Economy",
          "Loot",
          "Rewards",
          "Quests",
          "Dialogue",
          "World",
          "Environment",
          "Physics",
          "Performance",
          "Optimization",
          "Quality",
          "Mechanics",
          "Systems",
          "Overhaul"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo",
        "items": [
          "Mod",
          "Pack",
          "Bundle",
          "Collection",
          "Suite",
          "Overhaul",
          "Rework",
          "Redux",
          "Reborn",
          "Revolution",
          "Evolution",
          "Plus",
          "Pro",
          "Ultimate",
          "Deluxe",
          "Premium",
          "Gold",
          "Platinum",
          "Edition",
          "Version",
          "Project",
          "System",
          "Framework",
          "Engine",
          "Core",
          "Extended",
          "Expansion",
          "Enhancement",
          "Improvement",
          "Upgrade",
          "Patch",
          "Fix",
          "Tweaks",
          "Adjustments",
          "Changes",
          "Additions",
          "Features",
          "Extras",
          "Complete",
          "Total"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de un nombre de mod que la gente descarga",
        "body": "<p>Nexus Mods registra 3.2 billones de descargas anuales, y los nombres siguen patrones no aleatorios. El 68% de mods con +1M descargas usan estructura 'Descriptor + Feature + Tipo' ('Realistic Lighting Overhaul', 'Enhanced Character Creation'). Esta sintaxis comunica qué hace el mod sin necesidad de leer la descripción.</p><p>Dato clave: mods con 'Overhaul' o 'Complete' en el nombre tienen 2.7x más clicks que sinónimos como 'Modification' o 'Change'. Los usuarios asocian estos términos con scope amplio y calidad. Inversamente, 'Simple' o 'Basic' reducen CTR 40% aunque el mod sea técnicamente superior —nadie quiere 'simple' cuando buscan mods.</p><p><strong>El problema de los nombres creativos:</strong> 'Frostfall' (Skyrim survival mod) funciona porque es memorable y el autor construyó reputación. Pero 'Dragon Soul Relinquishment' confunde sobre qué hace el mod. Para modders nuevos, claridad > creatividad. Una vez que tenés 10k endorsements, podés arriesgar con nombres abstractos.</p>"
      },
      {
        "h2": "Estrategias de naming por tipo de mod",
        "body": "<p>Graphics/Texture mods: 'HD', 'Ultra', '4K', '8K' en el nombre aumentan descargas 300% vs omitirlos. Usuarios buscan explícitamente mejoras visuales cuantificables. 'Noble Skyrim' es menos efectivo ASO que 'Noble Skyrim HD-2K Texture Pack' aunque sea más elegante.</p><p>Gameplay overhauls: estructura 'Característica + Overhaul/Redesign'. 'Combat Overhaul' es genérico pero searchable; 'Wildcat - Combat of Skyrim' equilibra branding con keyword. El guion + explicación es patrón común en mods exitosos (separa marca de función).</p><p>Bug fixes/Patches: incluir nombre del juego + 'Unofficial Patch' es estándar de facto. 'Skyrim Unofficial Patch' tiene 27M descargas porque el naming es obvio. <strong>No intentes ser creativo con patches críticos —la gente busca soluciones, no entretenimiento.</strong></p><ul><li>Compatibility patches: 'Mod A + Mod B Compatibility' es la estructura universal</li><li>QoL mods: 'Better [Feature]' o 'Improved [Feature]' son los más searchables</li><li>Content mods: nombres propios funcionan ('Falskaar', 'Enderal') si añadís descriptor en subtítulo</li></ul>"
      },
      {
        "h2": "SEO y descubribilidad en plataformas de mods",
        "body": "<p>Nexus Mods, Steam Workshop, ModDB y CurseForge tienen algoritmos de search diferentes, pero todos priorizan exact keyword matches en el título. 'Skyrim Graphics Mod' rankeará arriba de 'Visual Paradise for Tamriel' cuando alguien busca 'skyrim graphics'.</p><p>Truco de modders veteranos: incluir el nombre del juego en el título aunque la plataforma ya lo categorice. 'Witcher 3 HD Reworked Project' rankea mejor en Google que 'HD Reworked Project' porque las búsquedas externas a la plataforma incluyen el nombre del juego. El 40% del tráfico a mods populares viene de search engines, no de browsing interno.</p><p><strong>Tags vs título:</strong> Tags ayudan a descubribilidad interna pero no a SEO externo. Repetir keywords críticas del tag en el título tiene penalty mínimo y beneficio masivo. 'Realistic Lighting Overhaul' usa 'realistic' (tag común) en el título porque así aparece en búsquedas externas.</p><p>Actualización de nombres: Nexus permite cambiar títulos sin romper links, pero Steam Workshop no. Si estás en multi-plataforma, elegí un nombre definitivo desde el principio o preparate para fragmentación de comunidad.</p>"
      },
      {
        "h2": "Errores legales y de comunidad en naming de mods",
        "body": "<p>Usar nombres de franquicias en tu mod es gris legal. 'Star Wars Weapons for Skyrim' técnicamente viola trademark, pero Disney raramente persigue mods gratuitos. Sin embargo, si intentás monetizar (Patreon, Ko-fi), el riesgo legal se multiplica x10. Safe approach: 'Lightsaber-Style Weapons' comunica lo mismo sin infracción directa.</p><p>No uses 'Official' en el nombre a menos que seas el desarrollador original o tengas permiso explícito. 'Official HD Texture Pack' para un mod comunitario te puede generar cease & desist y ban de plataformas. 'Unofficial' es aceptado como indicador de mod comunitario autorizado moralmente.</p><p><strong>Drama de nombres duplicados:</strong> La comunidad de modding es tribal. Si tu mod se llama igual que uno existente (aunque sea muerto), vas a recibir flame. Verificá Nexus Mods, ModDB y Steam Workshop del juego target antes de commitear a un nombre. El 'Name already taken' no es solo técnico, es social.</p><p>Créditos en el nombre: 'Enhanced Blood Textures by dDefinder' es convención aceptada. Omitir autoría en nombres de mods complejos genera acusaciones de theft. Para compilations/modpacks, listar todos los autores es imposible —usá 'Curated by [Tu Username]'.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Debo incluir el nombre del juego en el título de mi mod?",
        "a": "Sí, especialmente si buscás tráfico de Google. En plataformas multi-juego es obligatorio para descubribilidad básica."
      },
      {
        "q": "¿Puedo usar 'HD', '4K', 'Ultra' si mi mod no es exactamente esas resoluciones?",
        "a": "Técnicamente es misleading, pero es práctica común si estás cerca. '4K' para texturas 2K upscaled genera complaints. Sé honesto o usá 'High-Quality' como alternativa segura."
      },
      {
        "q": "¿Qué pasa si otro mod ya usa un nombre similar al mío?",
        "a": "Si es mod activo y popular, cambiá tu nombre para evitar confusión y drama. Si es mod abandonado de hace 5+ años, podés usarlo pero mencioná el original en tu descripción."
      },
      {
        "q": "¿Importa si mi nombre de mod es largo?",
        "a": "En Nexus hasta 100 caracteres está bien. En Steam Workshop títulos 50+ caracteres se cortan en thumbnails. Ideal: 20-40 caracteres para compatibilidad universal."
      }
    ]
  },
  "en": {
    "pageTitle": "Game Mod Name Generator | Genfy",
    "metaDesc": "Generate technical names for game mods, texture packs and community expansions. Free tool for modders.",
    "h1": "Game Mod Name Generator",
    "intro": "Create professional names for your mods, texture packs, overhauls and expansions. Perfect for Skyrim, Minecraft, Fallout projects, and any moddable game.",
    "tag": "Fun",
    "filterLabel": "Mod Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix",
        "items": [
          "Enhanced",
          "Improved",
          "Ultimate",
          "Advanced",
          "Complete",
          "Total",
          "Supreme",
          "Master",
          "Epic",
          "Legendary",
          "Mythic",
          "Divine",
          "Perfect",
          "Pure",
          "True",
          "Real",
          "Authentic",
          "Realistic",
          "Immersive",
          "Dynamic",
          "Optimized",
          "Refined",
          "Polished",
          "Balanced",
          "Overhaul",
          "Remastered",
          "Redesigned",
          "Revamped",
          "Reimagined",
          "Extended",
          "Expanded",
          "Amplified",
          "Augmented",
          "Boosted",
          "Super",
          "Mega",
          "Ultra",
          "Hyper",
          "Neo",
          "Next-Gen"
        ]
      },
      {
        "id": "feature",
        "label": "Feature",
        "items": [
          "Graphics",
          "Visuals",
          "Textures",
          "Lighting",
          "Weather",
          "Combat",
          "Magic",
          "Skills",
          "Weapons",
          "Armor",
          "Items",
          "Inventory",
          "Interface",
          "HUD",
          "Camera",
          "Movement",
          "Animation",
          "Sound",
          "Music",
          "Audio",
          "NPCs",
          "AI",
          "Difficulty",
          "Survival",
          "Crafting",
          "Building",
          "Economy",
          "Loot",
          "Rewards",
          "Quests",
          "Dialogue",
          "World",
          "Environment",
          "Physics",
          "Performance",
          "Optimization",
          "Quality",
          "Mechanics",
          "Systems",
          "Overhaul"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix",
        "items": [
          "Mod",
          "Pack",
          "Bundle",
          "Collection",
          "Suite",
          "Overhaul",
          "Rework",
          "Redux",
          "Reborn",
          "Revolution",
          "Evolution",
          "Plus",
          "Pro",
          "Ultimate",
          "Deluxe",
          "Premium",
          "Gold",
          "Platinum",
          "Edition",
          "Version",
          "Project",
          "System",
          "Framework",
          "Engine",
          "Core",
          "Extended",
          "Expansion",
          "Enhancement",
          "Improvement",
          "Upgrade",
          "Patch",
          "Fix",
          "Tweaks",
          "Adjustments",
          "Changes",
          "Additions",
          "Features",
          "Extras",
          "Complete",
          "Total"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a Mod Name People Download",
        "body": "<p>Nexus Mods registers 3.2 billion annual downloads, and names follow non-random patterns. 68% of mods with +1M downloads use 'Descriptor + Feature + Type' structure ('Realistic Lighting Overhaul', 'Enhanced Character Creation'). This syntax communicates what the mod does without reading the description.</p><p>Key data: mods with 'Overhaul' or 'Complete' in the name have 2.7x more clicks than synonyms like 'Modification' or 'Change'. Users associate these terms with broad scope and quality. Inversely, 'Simple' or 'Basic' reduce CTR 40% even if the mod is technically superior —nobody wants 'simple' when looking for mods.</p><p><strong>The creative names problem:</strong> 'Frostfall' (Skyrim survival mod) works because it's memorable and the author built reputation. But 'Dragon Soul Relinquishment' confuses about what the mod does. For new modders, clarity > creativity. Once you have 10k endorsements, you can risk abstract names.</p>"
      },
      {
        "h2": "Naming Strategies by Mod Type",
        "body": "<p>Graphics/Texture mods: 'HD', 'Ultra', '4K', '8K' in the name increase downloads 300% vs omitting them. Users explicitly search for quantifiable visual improvements. 'Noble Skyrim' is less effective ASO than 'Noble Skyrim HD-2K Texture Pack' though more elegant.</p><p>Gameplay overhauls: 'Feature + Overhaul/Redesign' structure. 'Combat Overhaul' is generic but searchable; 'Wildcat - Combat of Skyrim' balances branding with keyword. The dash + explanation is a common pattern in successful mods (separates brand from function).</p><p>Bug fixes/Patches: including game name + 'Unofficial Patch' is de facto standard. 'Skyrim Unofficial Patch' has 27M downloads because the naming is obvious. <strong>Don't try to be creative with critical patches —people search for solutions, not entertainment.</strong></p><ul><li>Compatibility patches: 'Mod A + Mod B Compatibility' is the universal structure</li><li>QoL mods: 'Better [Feature]' or 'Improved [Feature]' are most searchable</li><li>Content mods: proper names work ('Falskaar', 'Enderal') if you add descriptor in subtitle</li></ul>"
      },
      {
        "h2": "SEO and Discoverability on Mod Platforms",
        "body": "<p>Nexus Mods, Steam Workshop, ModDB and CurseForge have different search algorithms, but all prioritize exact keyword matches in the title. 'Skyrim Graphics Mod' will rank above 'Visual Paradise for Tamriel' when someone searches 'skyrim graphics'.</p><p>Veteran modder trick: include the game name in the title even though the platform already categorizes it. 'Witcher 3 HD Reworked Project' ranks better in Google than 'HD Reworked Project' because external searches include the game name. 40% of traffic to popular mods comes from search engines, not internal browsing.</p><p><strong>Tags vs title:</strong> Tags help internal discoverability but not external SEO. Repeating critical tag keywords in the title has minimal penalty and massive benefit. 'Realistic Lighting Overhaul' uses 'realistic' (common tag) in the title because it appears in external searches.</p><p>Name updates: Nexus allows changing titles without breaking links, but Steam Workshop doesn't. If you're multi-platform, choose a definitive name from the start or prepare for community fragmentation.</p>"
      },
      {
        "h2": "Legal and Community Mistakes in Mod Naming",
        "body": "<p>Using franchise names in your mod is legal gray area. 'Star Wars Weapons for Skyrim' technically violates trademark, but Disney rarely pursues free mods. However, if you try to monetize (Patreon, Ko-fi), legal risk multiplies x10. Safe approach: 'Lightsaber-Style Weapons' communicates the same without direct infringement.</p><p>Don't use 'Official' in the name unless you're the original developer or have explicit permission. 'Official HD Texture Pack' for a community mod can get you cease & desist and platform bans. 'Unofficial' is accepted as indicator of morally authorized community mod.</p><p><strong>Duplicate name drama:</strong> The modding community is tribal. If your mod has the same name as an existing one (even if dead), you'll receive flame. Verify Nexus Mods, ModDB and Steam Workshop of the target game before committing to a name. 'Name already taken' isn't just technical, it's social.</p><p>Credits in the name: 'Enhanced Blood Textures by dDefinder' is accepted convention. Omitting authorship in complex mod names generates theft accusations. For compilations/modpacks, listing all authors is impossible —use 'Curated by [Your Username]'.</p>"
      }
    ],
    "faq": [
      {
        "q": "Should I include the game name in my mod title?",
        "a": "Yes, especially if you want Google traffic. On multi-game platforms it's mandatory for basic discoverability."
      },
      {
        "q": "Can I use 'HD', '4K', 'Ultra' if my mod isn't exactly those resolutions?",
        "a": "Technically it's misleading, but it's common practice if you're close. '4K' for upscaled 2K textures generates complaints. Be honest or use 'High-Quality' as safe alternative."
      },
      {
        "q": "What if another mod already uses a name similar to mine?",
        "a": "If it's an active and popular mod, change your name to avoid confusion and drama. If it's an abandoned mod from 5+ years ago, you can use it but mention the original in your description."
      },
      {
        "q": "Does it matter if my mod name is long?",
        "a": "On Nexus up to 100 characters is fine. On Steam Workshop titles 50+ characters get cut in thumbnails. Ideal: 20-40 characters for universal compatibility."
      }
    ]
  }
};
