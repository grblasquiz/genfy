import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-caballero",
    "en": "knight-name-generator"
  },
  "category": "fun",
  "emoji": "🛡️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nombres de Caballero | Genfy",
    "metaDesc": "Generá nombres nobles para caballeros medievales, templarios y paladines. Perfectos para juegos de rol, novelas de fantasía y campañas de D&D.",
    "h1": "Generador de Nombres de Caballero",
    "intro": "Creá identidades de honor y nobleza medieval. Nombres que resuenan en torneos, cruzadas y leyendas grabadas en pergaminos antiguos.",
    "tag": "Diversión",
    "filterLabel": "Tipo de caballero",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "historical",
        "label": "Históricos",
        "items": [
          "Sir William Marshal",
          "Sir Lancelot du Lac",
          "Sir Gawain de Orkney",
          "Sir Galahad el Puro",
          "Sir Percival",
          "Geoffrey de Charny",
          "Bertrand du Guesclin",
          "Godfrey de Bouillon",
          "Tancred de Hauteville",
          "Robert de Beaumont",
          "Richard de Clare Strongbow",
          "Simon de Montfort",
          "Hugh de Payens",
          "Jacques de Molay",
          "Roger de Flor",
          "Jean de Carrouges",
          "Bertrand de Born",
          "Ulrich von Liechtenstein",
          "William de Braose",
          "Reginald de Chatillon",
          "Baldwin de Ibelin",
          "Raymond de Tripoli",
          "Humphrey de Bohun",
          "Thomas de Beauchamp",
          "John de Beaufort"
        ]
      },
      {
        "id": "templar",
        "label": "Templarios",
        "items": [
          "Sir Arnaud de Torroja",
          "Sir Gerard de Ridefort",
          "Sir Robert de Sablé",
          "Sir Philip de Milly",
          "Sir Odo de Saint-Amand",
          "Sir Everard des Barres",
          "Sir Bernard de Tremelay",
          "Sir André de Montbard",
          "Sir Payen de Montdidier",
          "Sir Archambaud de Saint-Aignan",
          "Sir Gondemare",
          "Sir Rossal",
          "Sir Godefroy de Saint-Omer",
          "Sir Hughes de Champagne",
          "Sir William de Chartres",
          "Sir Peter de Montaigu",
          "Sir Armand de Périgord",
          "Sir Richard de Bures",
          "Sir Guillaume de Beaujeu",
          "Sir Thibaud Gaudin"
        ]
      },
      {
        "id": "regional",
        "label": "Por Región",
        "items": [
          "Sir Edmund of England",
          "Sir Jean de France",
          "Sir Heinrich von Germany",
          "Sir Giovanni de Italia",
          "Sir Diego de Castilla",
          "Sir Alfonso de León",
          "Sir Pedro de Aragón",
          "Sir Rodrigo de Galicia",
          "Sir Fernão de Portugal",
          "Sir Wallace de Escocia",
          "Sir Owen de Gales",
          "Sir Patrick de Irlanda",
          "Sir Konrad von Austria",
          "Sir Ladislaus de Hungría",
          "Sir Wenceslaus de Bohemia",
          "Sir Vladimir de Rus",
          "Sir Bolesław de Polonia",
          "Sir Knut de Dinamarca",
          "Sir Erik de Suecia",
          "Sir Olaf de Noruega"
        ]
      },
      {
        "id": "orders",
        "label": "Órdenes Militares",
        "items": [
          "Sir Hospitalario de San Juan",
          "Sir Teutónico de Marienburg",
          "Sir de Calatrava el Rojo",
          "Sir de Santiago el Peregrino",
          "Sir de Alcántara",
          "Sir de Montesa",
          "Sir de Avis el Portugués",
          "Sir de Cristo",
          "Sir de San Lázaro",
          "Sir del Santo Sepulcro",
          "Sir de la Espada Livonia",
          "Sir de Dobrin",
          "Sir de Montjoie",
          "Sir de Santa María de España",
          "Sir de San Jorge de Alfama",
          "Sir de San Miguel de la Ala",
          "Sir de la Garra de León",
          "Sir de la Banda de Castilla",
          "Sir de la Jarretera",
          "Sir del Toisón de Oro"
        ]
      },
      {
        "id": "virtue_knights",
        "label": "Caballeros de Virtud",
        "items": [
          "Sir Valiant el Intrépido",
          "Sir Loyal el Fiel",
          "Sir Pious el Devoto",
          "Sir Just el Justo",
          "Sir Merciful el Misericordioso",
          "Sir Prudent el Sabio",
          "Sir Temperate el Moderado",
          "Sir Courage el Valiente",
          "Sir Honor el Honorable",
          "Sir Truth el Veraz",
          "Sir Noble el Magnánimo",
          "Sir Gentle el Cortés",
          "Sir Pure el Puro",
          "Sir Humble el Humilde",
          "Sir Charity el Caritativo",
          "Sir Faith el Creyente",
          "Sir Hope el Esperanzado",
          "Sir Patience el Paciente",
          "Sir Kindness el Bondadoso",
          "Sir Wisdom el Erudito",
          "Sir Justice el Justiciero",
          "Sir Fortitude el Fuerte",
          "Sir Chastity el Casto",
          "Sir Diligence el Diligente",
          "Sir Harmony el Conciliador"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de un título de caballero",
        "body": "<p>El título 'Sir' (del latín <em>senior</em>) era honorífico, no hereditario. Se ganaba mediante <strong>ceremonia de investidura</strong> ante un señor o rey. El formato completo: 'Sir [nombre] de [lugar/patronímico] el [apodo]'. Ejemplo: Sir William Marshal de Pembroke, considerado el mejor caballero que jamás vivió.</p><p>Los <strong>apellidos territoriales</strong> ('de Beaumont', 'von Liechtenstein') indicaban posesión de tierras. Los patronímicos ('hijo de', 'ap', 'Fitz-') señalaban linaje. Sir Lancelot du Lac ('del Lago') refiere a su origen mítico. Un error en ficción: usar 'Sir' con solo nombre de pila. Históricamente siempre incluía apellido o lugar.</p><p>Los apodos describían hazañas o virtudes: Richard <strong>Coeur de Lion</strong> (Corazón de León) por valentía, Edward <strong>Longshanks</strong> (Piernas Largas) por estatura. Para narrativa medieval auténtica, investigá convenciones heráldicas: los colores del escudo (gules, azur, sable) y animales (león, águila, dragón) comunicaban linaje específico. No inventés heráldica imposible: un escudo todo oro sobre oro viola reglas de contraste establecidas.</p>"
      },
      {
        "h2": "Órdenes militares y sus diferencias",
        "body": "<p>Los <strong>Templarios</strong> (1119-1312) eran monjes-guerreros con votos de pobreza, castidad y obediencia. Su riqueza era institucional, no personal. Los <strong>Hospitalarios</strong> (actualmente Orden de Malta) comenzaron como enfermeros antes de militarizarse. Los <strong>Teutónicos</strong> focalizaban en el Báltico, no Tierra Santa.</p><p>Cada orden tenía jerarquía interna: <em>Gran Maestre</em> (líder supremo), <em>Mariscal</em> (comandante militar), <em>Senescal</em> (administrador), <em>Caballeros</em> (combatientes), <em>Sargentos</em> (apoyo). Los <strong>Caballeros de Santiago</strong> en España podían casarse, único caso entre órdenes mayores. Esto importa para worldbuilding: si tu caballero tiene familia, no puede ser templario auténtico.</p><p>Error común en fantasía: mezclar templarios con paladines D&D. Los templarios históricos eran banqueros y administradores tanto como guerreros. <strong>Jacques de Molay</strong>, último Gran Maestre, fue quemado por herejía (1314) tras juicio político orquestado por Felipe IV de Francia para cancelar deudas. Los caballeros reales enfrentaban política, no solo dragones.</p>"
      },
      {
        "h2": "El código de caballería vs realidad histórica",
        "body": "<p>El concepto de <strong>código de caballería</strong> fue invención literaria posterior, idealización de comportamientos que rara vez existían. Los romances artúricos (siglo XII-XIII) crearon imagen de caballeros perfectos que la realidad medieval no reflejaba. <strong>Reginald de Chatillon</strong> rompió treguas, saqueó caravanas de peregrinos y torturó prisioneros, todo mientras era Prince of Antioch.</p><p>Las 'virtudes caballerescas' (valor, cortesía, lealtad, honor) servían como aspiración, no descripción. <strong>Jean de Carrouges</strong> venció en duelo judicial (1386) después que un escudero violara a su esposa, caso que inspiró <em>The Last Duel</em>. La violencia era norma, no excepción. Los torneos mataban regularmente participantes hasta que se regularon en el siglo XIV.</p><p>Para escritura histórica precisa, balanceá idealismo con pragmatismo. <strong>Bayard</strong> (1473-1524), 'el caballero sin miedo y sin tacha', fue excepción que confirmaba la regla. La mayoría de caballeros eran soldados profesionales más interesados en botín que honor. En RPGs, este conflicto entre ideal y realidad crea personajes complejos: un caballero luchando con votos imposibles de mantener en guerra brutal.</p>"
      },
      {
        "h2": "Nombres de caballero para fantasía y juegos",
        "body": "<p>En <strong>Dungeons & Dragons</strong>, los paladines son idealización extrema del concepto caballeresco. Para nombres memorables que suenen medievales sin ser ridículos, seguí patrones históricos: nombre cristiano + apellido territorial + apodo opcional. 'Sir Aldric de Ravenwood' funciona; 'Sir Darkness Shadowblade' no.</p><p>Los <strong>videojuegos</strong> como <em>Dark Souls</em> y <em>Elden Ring</em> usan nomenclatura evocativa: 'Knight Artorias', 'Sir Gideon Ofnir'. Mantienen estructura medieval (título + nombre + apellido/apodo) sin intentar precisión histórica exhaustiva. Es válido para fantasía crear convenciones propias consistentes.</p><p>Error de principiante: sobrecargar nombres con adjetivos. 'Sir Holy Divine Righteous Justice' es parodia. Los mejores nombres fantasía suenan plausibles: <strong>Brienne of Tarth</strong> (Game of Thrones) usa estructura auténtica. Para NPCs de campaña, variá orígenes: un caballero bretón se llama diferente que uno aragonés o teutónico. <strong>The Witcher</strong> hace esto bien: mezclando influencias eslavas, celtas y germánicas en nomenclatura sin crear ensalada cultural imposible.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cualquiera podía volverse caballero?",
        "a": "Técnicamente no. Requerías ser nacido libre (no siervo), demostrar medios para equiparte (armadura costaba fortuna) y recibir investidura de autoridad legítima. Casos excepcionales existieron por méritos extraordinarios en batalla."
      },
      {
        "q": "¿Las mujeres podían ser caballeros?",
        "a": "Rarísimo pero documentado. Petronilla de Grandmesnil combatió en Primera Cruzada. Órdenes como Santiago admitían damas asociadas. En Inglaterra, Isabel I creó 'dames' como equivalente femenino sin función militar."
      },
      {
        "q": "¿Qué diferencia hay entre caballero y noble?",
        "a": "La nobleza es clase social hereditaria; caballería es rango militar ganado. Un noble podía no ser caballero; un caballero podía ser noble menor. William Marshal era caballero hijo menor sin herencia que ascendió a conde por méritos."
      },
      {
        "q": "¿Los templarios realmente guardaban el Santo Grial?",
        "a": "No hay evidencia histórica. El Grial es invención literaria del siglo XII. Los templarios guardaban reliquias cristianas reales en Tierra Santa, pero el mito Grial-Templario viene de ficción posterior, no documentos medievales."
      }
    ]
  },
  "en": {
    "pageTitle": "Knight Name Generator | Genfy",
    "metaDesc": "Generate noble names for medieval knights, templars and paladins. Perfect for role-playing games, fantasy novels and D&D campaigns.",
    "h1": "Knight Name Generator",
    "intro": "Create identities of honor and medieval nobility. Names that resonate in tournaments, crusades and legends carved on ancient scrolls.",
    "tag": "Fun",
    "filterLabel": "Knight type",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "historical",
        "label": "Historical",
        "items": [
          "Sir William Marshal",
          "Sir Lancelot du Lac",
          "Sir Gawain of Orkney",
          "Sir Galahad the Pure",
          "Sir Percival",
          "Geoffrey de Charny",
          "Bertrand du Guesclin",
          "Godfrey de Bouillon",
          "Tancred of Hauteville",
          "Robert de Beaumont",
          "Richard de Clare Strongbow",
          "Simon de Montfort",
          "Hugh de Payens",
          "Jacques de Molay",
          "Roger de Flor",
          "Jean de Carrouges",
          "Bertrand de Born",
          "Ulrich von Liechtenstein",
          "William de Braose",
          "Reginald of Chatillon",
          "Baldwin of Ibelin",
          "Raymond of Tripoli",
          "Humphrey de Bohun",
          "Thomas de Beauchamp",
          "John de Beaufort"
        ]
      },
      {
        "id": "templar",
        "label": "Templars",
        "items": [
          "Sir Arnaud de Torroja",
          "Sir Gerard de Ridefort",
          "Sir Robert de Sablé",
          "Sir Philip de Milly",
          "Sir Odo de Saint-Amand",
          "Sir Everard des Barres",
          "Sir Bernard de Tremelay",
          "Sir André de Montbard",
          "Sir Payen de Montdidier",
          "Sir Archambaud de Saint-Aignan",
          "Sir Gondemare",
          "Sir Rossal",
          "Sir Godefroy de Saint-Omer",
          "Sir Hughes de Champagne",
          "Sir William de Chartres",
          "Sir Peter de Montaigu",
          "Sir Armand de Périgord",
          "Sir Richard de Bures",
          "Sir Guillaume de Beaujeu",
          "Sir Thibaud Gaudin"
        ]
      },
      {
        "id": "regional",
        "label": "By Region",
        "items": [
          "Sir Edmund of England",
          "Sir Jean de France",
          "Sir Heinrich von Germany",
          "Sir Giovanni de Italia",
          "Sir Diego de Castilla",
          "Sir Alfonso de León",
          "Sir Pedro de Aragón",
          "Sir Rodrigo de Galicia",
          "Sir Fernão de Portugal",
          "Sir Wallace of Scotland",
          "Sir Owen of Wales",
          "Sir Patrick of Ireland",
          "Sir Konrad von Austria",
          "Sir Ladislaus of Hungary",
          "Sir Wenceslaus of Bohemia",
          "Sir Vladimir of Rus",
          "Sir Bolesław of Poland",
          "Sir Knut of Denmark",
          "Sir Erik of Sweden",
          "Sir Olaf of Norway"
        ]
      },
      {
        "id": "orders",
        "label": "Military Orders",
        "items": [
          "Sir Hospitaller of St. John",
          "Sir Teutonic of Marienburg",
          "Sir of Calatrava the Red",
          "Sir of Santiago the Pilgrim",
          "Sir of Alcántara",
          "Sir of Montesa",
          "Sir of Avis the Portuguese",
          "Sir of Christ",
          "Sir of St. Lazarus",
          "Sir of Holy Sepulchre",
          "Sir of Livonian Sword",
          "Sir of Dobrin",
          "Sir of Montjoie",
          "Sir of Santa María of Spain",
          "Sir of St. George of Alfama",
          "Sir of St. Michael Wing",
          "Sir of Lion's Claw",
          "Sir of Castilian Band",
          "Sir of the Garter",
          "Sir of Golden Fleece"
        ]
      },
      {
        "id": "virtue_knights",
        "label": "Knights of Virtue",
        "items": [
          "Sir Valiant the Fearless",
          "Sir Loyal the Faithful",
          "Sir Pious the Devout",
          "Sir Just the Righteous",
          "Sir Merciful the Compassionate",
          "Sir Prudent the Wise",
          "Sir Temperate the Moderate",
          "Sir Courage the Brave",
          "Sir Honor the Honorable",
          "Sir Truth the Truthful",
          "Sir Noble the Magnanimous",
          "Sir Gentle the Courteous",
          "Sir Pure the Untainted",
          "Sir Humble the Modest",
          "Sir Charity the Charitable",
          "Sir Faith the Believer",
          "Sir Hope the Hopeful",
          "Sir Patience the Patient",
          "Sir Kindness the Benevolent",
          "Sir Wisdom the Learned",
          "Sir Justice the Just",
          "Sir Fortitude the Strong",
          "Sir Chastity the Pure",
          "Sir Diligence the Industrious",
          "Sir Harmony the Peacemaker"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a knight's title",
        "body": "<p>The title 'Sir' (from Latin <em>senior</em>) was honorific, not hereditary. Earned through <strong>dubbing ceremony</strong> before a lord or king. Full format: 'Sir [name] of [place/patronymic] the [nickname]'. Example: Sir William Marshal of Pembroke, considered the greatest knight who ever lived.</p><p><strong>Territorial surnames</strong> ('de Beaumont', 'von Liechtenstein') indicated land ownership. Patronymics ('son of', 'ap', 'Fitz-') signaled lineage. Sir Lancelot du Lac ('of the Lake') refers to his mythical origin. Fiction mistake: using 'Sir' with only first name. Historically always included surname or place.</p><p>Nicknames described deeds or virtues: Richard <strong>Lionheart</strong> for bravery, Edward <strong>Longshanks</strong> for height. For authentic medieval writing, research heraldic conventions: shield colors (gules, azure, sable) and animals (lion, eagle, dragon) communicated specific lineage. Don't invent impossible heraldry: an all-gold-on-gold shield violates established contrast rules.</p>"
      },
      {
        "h2": "Military orders and their differences",
        "body": "<p><strong>Templars</strong> (1119-1312) were monk-warriors with vows of poverty, chastity and obedience. Their wealth was institutional, not personal. <strong>Hospitallers</strong> (currently Order of Malta) began as nurses before militarizing. <strong>Teutonic Knights</strong> focused on the Baltic, not Holy Land.</p><p>Each order had internal hierarchy: <em>Grand Master</em> (supreme leader), <em>Marshal</em> (military commander), <em>Seneschal</em> (administrator), <em>Knights</em> (combatants), <em>Sergeants</em> (support). Spain's <strong>Knights of Santiago</strong> could marry, unique among major orders. This matters for worldbuilding: if your knight has family, they can't be authentic Templar.</p><p>Common fantasy mistake: mixing Templars with D&D paladins. Historical Templars were bankers and administrators as much as warriors. <strong>Jacques de Molay</strong>, last Grand Master, was burned for heresy (1314) after political trial orchestrated by Philip IV of France to cancel debts. Real knights faced politics, not just dragons.</p>"
      },
      {
        "h2": "Code of chivalry vs historical reality",
        "body": "<p>The <strong>code of chivalry</strong> concept was later literary invention, idealization of behaviors that rarely existed. Arthurian romances (12th-13th century) created perfect knight image that medieval reality didn't reflect. <strong>Reginald of Chatillon</strong> broke truces, raided pilgrim caravans and tortured prisoners, all while Prince of Antioch.</p><p>'Chivalric virtues' (valor, courtesy, loyalty, honor) served as aspiration, not description. <strong>Jean de Carrouges</strong> won judicial duel (1386) after a squire raped his wife, case that inspired <em>The Last Duel</em>. Violence was norm, not exception. Tournaments regularly killed participants until regulated in 14th century.</p><p>For accurate historical writing, balance idealism with pragmatism. <strong>Bayard</strong> (1473-1524), 'the knight without fear and without reproach', was exception proving the rule. Most knights were professional soldiers more interested in plunder than honor. In RPGs, this conflict between ideal and reality creates complex characters: a knight struggling with impossible vows to maintain in brutal war.</p>"
      },
      {
        "h2": "Knight names for fantasy and games",
        "body": "<p>In <strong>Dungeons & Dragons</strong>, paladins are extreme idealization of chivalric concept. For memorable names that sound medieval without being ridiculous, follow historical patterns: Christian name + territorial surname + optional nickname. 'Sir Aldric de Ravenwood' works; 'Sir Darkness Shadowblade' doesn't.</p><p><strong>Video games</strong> like <em>Dark Souls</em> and <em>Elden Ring</em> use evocative nomenclature: 'Knight Artorias', 'Sir Gideon Ofnir'. They maintain medieval structure (title + name + surname/nickname) without attempting exhaustive historical accuracy. It's valid for fantasy to create consistent internal conventions.</p><p>Beginner mistake: overloading names with adjectives. 'Sir Holy Divine Righteous Justice' is parody. Best fantasy names sound plausible: <strong>Brienne of Tarth</strong> (Game of Thrones) uses authentic structure. For campaign NPCs, vary origins: a Breton knight is named differently than Aragonese or Teutonic. <strong>The Witcher</strong> does this well: mixing Slavic, Celtic and Germanic influences in nomenclature without creating impossible cultural salad.</p>"
      }
    ],
    "faq": [
      {
        "q": "Could anyone become a knight?",
        "a": "Technically no. You needed to be freeborn (not serf), demonstrate means to equip yourself (armor cost a fortune) and receive dubbing from legitimate authority. Exceptional cases existed for extraordinary battlefield merits."
      },
      {
        "q": "Could women be knights?",
        "a": "Extremely rare but documented. Petronilla of Grandmesnil fought in First Crusade. Orders like Santiago admitted associated ladies. In England, Elizabeth I created 'dames' as female equivalent without military function."
      },
      {
        "q": "What's the difference between knight and noble?",
        "a": "Nobility is hereditary social class; knighthood is earned military rank. A noble could not be knight; a knight could be minor noble. William Marshal was landless younger son knight who rose to earl by merit."
      },
      {
        "q": "Did Templars really guard the Holy Grail?",
        "a": "No historical evidence. The Grail is 12th-century literary invention. Templars guarded real Christian relics in Holy Land, but Grail-Templar myth comes from later fiction, not medieval documents."
      }
    ]
  }
};
