import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-bowl-desayuno",
    "en": "breakfast-bowl-generator"
  },
  "category": "random",
  "emoji": "🥣",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Bowl de Desayuno | Genfy",
    "metaDesc": "Combina bases, frutas y toppings para crear bowls de desayuno nutritivos y variados. Descubre nuevas combinaciones saludables y deliciosas cada día.",
    "h1": "Generador de Bowl de Desayuno",
    "intro": "Armá bowls balanceados combinando bases proteicas, frutas de estación y toppings crujientes. Salí de la rutina del cereal con ideas frescas.",
    "tag": "Aleatorio",
    "filterLabel": "Estilo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "base",
        "label": "Base",
        "items": [
          "yogur griego natural",
          "yogur de coco",
          "avena fría remojada",
          "quinoa cocida",
          "smoothie de banana congelada",
          "requesón",
          "chia pudding",
          "kéfir natural",
          "leche de almendras con avena",
          "puré de batata",
          "crema de arroz",
          "yogur islandés (skyr)",
          "smoothie de mango",
          "leche de avena con proteína",
          "ricota descremada",
          "puré de calabaza",
          "smoothie de frutas rojas",
          "yogur búlgaro",
          "crema de coco espesa",
          "batido de banana y manteca de maní"
        ]
      },
      {
        "id": "fruit",
        "label": "Frutas",
        "items": [
          "arándanos",
          "frutillas en rodajas",
          "banana en rodajas",
          "kiwi picado",
          "mango en cubos",
          "frambuesas",
          "durazno en gajos",
          "moras",
          "pera en cubos",
          "granada (semillas)",
          "papaya en cubos",
          "uvas verdes cortadas",
          "ciruela en rodajas",
          "mandarina en gajos",
          "melón en cubos",
          "higos frescos",
          "sandía en cubos",
          "cerezas sin carozo",
          "maracuyá (pulpa)",
          "pitaya en cubos"
        ]
      },
      {
        "id": "topping",
        "label": "Toppings",
        "items": [
          "granola casera",
          "almendras laminadas",
          "coco rallado tostado",
          "semillas de girasol",
          "nueces picadas",
          "pepitas de calabaza",
          "linaza molida",
          "cacao nibs",
          "chips de banana deshidratada",
          "manteca de maní",
          "semillas de chia",
          "almendras enteras",
          "pasas rubias",
          "chips de coco",
          "pistachos picados",
          "avellanas tostadas",
          "semillas de hemp",
          "dátiles picados",
          "manteca de almendras",
          "nueces de Brasil",
          "chips de manzana deshidratada",
          "tahini",
          "chispas de chocolate negro",
          "goji berries",
          "amaranto inflado",
          "manteca de cashew",
          "pecanas caramelizadas",
          "polen de abeja",
          "semillas de amapola",
          "crocante de quinoa"
        ]
      },
      {
        "id": "extra",
        "label": "Extra opcional",
        "items": [
          "miel de abeja",
          "sirope de arce",
          "canela en polvo",
          "cacao en polvo",
          "extracto de vainilla",
          "jengibre rallado",
          "ralladura de limón",
          "espirulina",
          "proteína en polvo",
          "matcha",
          "cardamomo molido",
          "aceite de coco",
          "ralladura de naranja",
          "cúrcuma",
          "agave",
          "esencia de almendras",
          "canela de Ceilán",
          "moringa en polvo",
          "lúcuma en polvo",
          "stevia"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué importa la estructura del bowl",
        "body": "<p>Un bowl de desayuno balanceado necesita <strong>tres componentes básicos</strong>: proteína (base), carbohidratos de absorción lenta (frutas), y grasas saludables (toppings). El error más común: cargar de granola y frutas sin base proteica, causando pico de glucosa a las 2 horas.</p><p>La proporción ideal es 60% base, 25% fruta, 15% toppings. Un bowl con yogur griego (15-20g proteína) + banana + almendras mantiene saciedad hasta el almuerzo. Comparado con cereal comercial + leche (5g proteína, 30g azúcar), la diferencia es energía sostenida vs crash.</p><p>Ejemplo real: cambiar de tostadas con mermelada a bowl de avena remojada + frutas rojas + nueces redujo antojos mid-morning en 80% según estudio UBA 2023. La clave es combinar macros, no solo sumar calorías. Bowls bien armados estabilizan insulina y mejoran rendimiento cognitivo.</p>"
      },
      {
        "h2": "Preparación estratégica para la semana",
        "body": "<p>El meal prep de bowls funciona así: <strong>domingo hacés las bases</strong> (chia pudding para 5 días, overnight oats en frascos, yogur portionado). Frutas cortadas duran 3-4 días en tupper hermético. Toppings secos van en contenedor aparte para que no se ablanden.</p><p>Técnicas que salvan tiempo: avena remojada en leche se hace sola overnight (15 min total para toda la semana), chia pudding se multiplica fácil (1 parte chia, 4 partes líquido), smoothie bases congeladas en bolsas. Un ejemplo: 6 frascos de overnight oats + 3 tuppers de frutas cortadas + 1 contenedor de toppings = 6 desayunos listos.</p><p>Error costoso: cortar toda la fruta el domingo. La banana se oxida, las frutillas se humedecen. Mejor: cortar el día anterior o usar frozen. Granola casera dura 3 semanas en frasco hermético, ahorra $$ vs comprada y tiene menos azúcar (receta básica: avena + miel + aceite de coco al horno 20min).</p>"
      },
      {
        "h2": "Combinaciones que maximizan nutrientes",
        "body": "<p>Algunas duplas potencian absorción: <strong>vitamina C + hierro</strong> (frutillas + semillas de girasol), <strong>vitamina D + calcio</strong> (yogur + nueces), <strong>grasas + carotenos</strong> (almendras + mango). La linaza molida necesita estar recién molida para que el omega-3 no se oxide (mucho en batch no sirve).</p><p>Colores como guía: bowl monocromático (solo frutas rojas) falta diversidad de fitonutrientes. Ideal: 3+ colores (ej: base blanca + arándanos azules + kiwi verde + almendras beige + cacao marrón). Cada color aporta antioxidantes diferentes.</p><p>Superfood hacks: espirulina (1 cucharadita) aporta 4g proteína + hierro, pero amarga si te pasás; matcha tiene L-teanina (focus sin ansiedad del café); semillas de hemp (10g) tienen los 9 aminoácidos esenciales. Ojo con el hype: goji berries no son mágicas, cualquier baya local funciona igual.</p>"
      },
      {
        "h2": "Variaciones según objetivo",
        "body": "<p>Para <strong>entrenar en ayunas</strong>: bowl pre-workout liviano (smoothie banana congelada + dátiles + manteca de maní) 30min antes. Post-workout: base proteica doble (yogur + ricota) + frutas rápidas (banana) + nueces. La ventana anabólica existe pero no es tan crítica como dicen.</p><p>Para <strong>perder grasa</strong>: bases de alto volumen bajo cal (smoothie con cauliflower rice invisible, chia pudding con más líquido), frutas de menor índice glicémico (berries > banana), toppings medidos (15g nueces, no a ojo). Un bowl saciante: 250ml yogur griego + 100g berries + 10g almendras = ~280 cal, 20g proteína.</p><p>Para <strong>ganar masa muscular</strong>: duplicar proteína (yogur griego + proteína en polvo), frutas calóricas (banana + dátiles), toppings generosos (manteca de maní + granola). Bowl de volumen: 400ml base + 2 frutas + 30g toppings = 600+ cal, 35g proteína. Diabéticos: evitar frutas muy dulces juntas, agregar más grasas para ralentizar absorción.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo preparar el bowl completo la noche anterior?",
        "a": "Sí, pero agregá toppings crujientes recién al servir. Granola y frutos secos se ablandan con la humedad. Base + fruta aguantan bien 12 horas en heladera."
      },
      {
        "q": "¿Qué base tiene más proteína?",
        "a": "Yogur griego (15-20g por taza), luego skyr (15g), requesón (14g), y yogur común (8g). Yogur de coco tiene solo 1-2g, necesita complemento proteico."
      },
      {
        "q": "¿Cuántas calorías tiene un bowl promedio?",
        "a": "Depende de proporciones: bowl básico 300-400 cal, bowl de volumen 600-800 cal. La diferencia está en cantidad de toppings y tipo de base."
      },
      {
        "q": "¿Es mejor fruta fresca o congelada?",
        "a": "Congelada mantiene más nutrientes que fresca de 5+ días en heladera. Ideal para smoothie bases. Fresca es mejor para textura en bowls fríos."
      }
    ]
  },
  "en": {
    "pageTitle": "Breakfast Bowl Generator | Genfy",
    "metaDesc": "Combine bases, fruits, and toppings to create nutritious and varied breakfast bowls. Discover new healthy and delicious combinations every day.",
    "h1": "Breakfast Bowl Generator",
    "intro": "Build balanced bowls by combining protein bases, seasonal fruits, and crunchy toppings. Break out of the cereal routine with fresh ideas.",
    "tag": "Random",
    "filterLabel": "Style",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "base",
        "label": "Base",
        "items": [
          "plain Greek yogurt",
          "coconut yogurt",
          "overnight oats",
          "cooked quinoa",
          "frozen banana smoothie",
          "cottage cheese",
          "chia pudding",
          "plain kefir",
          "almond milk with oats",
          "mashed sweet potato",
          "cream of rice",
          "Icelandic yogurt (skyr)",
          "mango smoothie",
          "oat milk with protein",
          "low-fat ricotta",
          "pumpkin puree",
          "mixed berry smoothie",
          "Bulgarian yogurt",
          "thick coconut cream",
          "banana peanut butter shake"
        ]
      },
      {
        "id": "fruit",
        "label": "Fruits",
        "items": [
          "blueberries",
          "sliced strawberries",
          "banana slices",
          "chopped kiwi",
          "mango cubes",
          "raspberries",
          "peach slices",
          "blackberries",
          "pear cubes",
          "pomegranate seeds",
          "papaya cubes",
          "halved green grapes",
          "plum slices",
          "mandarin segments",
          "melon cubes",
          "fresh figs",
          "watermelon cubes",
          "pitted cherries",
          "passion fruit pulp",
          "dragon fruit cubes"
        ]
      },
      {
        "id": "topping",
        "label": "Toppings",
        "items": [
          "homemade granola",
          "sliced almonds",
          "toasted shredded coconut",
          "sunflower seeds",
          "chopped walnuts",
          "pumpkin seeds",
          "ground flaxseed",
          "cacao nibs",
          "dried banana chips",
          "peanut butter",
          "chia seeds",
          "whole almonds",
          "golden raisins",
          "coconut chips",
          "chopped pistachios",
          "toasted hazelnuts",
          "hemp seeds",
          "chopped dates",
          "almond butter",
          "Brazil nuts",
          "dried apple chips",
          "tahini",
          "dark chocolate chips",
          "goji berries",
          "puffed amaranth",
          "cashew butter",
          "candied pecans",
          "bee pollen",
          "poppy seeds",
          "quinoa crunch"
        ]
      },
      {
        "id": "extra",
        "label": "Optional extra",
        "items": [
          "honey",
          "maple syrup",
          "cinnamon powder",
          "cocoa powder",
          "vanilla extract",
          "grated ginger",
          "lemon zest",
          "spirulina",
          "protein powder",
          "matcha",
          "ground cardamom",
          "coconut oil",
          "orange zest",
          "turmeric",
          "agave",
          "almond essence",
          "Ceylon cinnamon",
          "moringa powder",
          "lucuma powder",
          "stevia"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why bowl structure matters",
        "body": "<p>A balanced breakfast bowl needs <strong>three basic components</strong>: protein (base), slow-absorbing carbs (fruits), and healthy fats (toppings). Most common mistake: loading up on granola and fruit without protein base, causing glucose spike after 2 hours.</p><p>Ideal ratio is 60% base, 25% fruit, 15% toppings. A bowl with Greek yogurt (15-20g protein) + banana + almonds maintains satiety until lunch. Compared to commercial cereal + milk (5g protein, 30g sugar), difference is sustained energy vs crash.</p><p>Real example: switching from toast with jam to overnight oats bowl + berries + walnuts reduced mid-morning cravings by 80% according to 2023 nutrition study. Key is combining macros, not just adding calories. Well-built bowls stabilize insulin and improve cognitive performance.</p>"
      },
      {
        "h2": "Strategic weekly prep",
        "body": "<p>Bowl meal prep works like this: <strong>Sunday make bases</strong> (chia pudding for 5 days, overnight oats in jars, portioned yogurt). Cut fruits last 3-4 days in airtight container. Dry toppings go in separate container so they don't get soggy.</p><p>Time-saving techniques: overnight oats in milk make themselves (15 min total for whole week), chia pudding multiplies easily (1 part chia, 4 parts liquid), frozen smoothie bases in bags. Example: 6 overnight oats jars + 3 containers cut fruit + 1 container toppings = 6 ready breakfasts.</p><p>Costly mistake: cutting all fruit on Sunday. Bananas oxidize, strawberries get mushy. Better: cut day before or use frozen. Homemade granola lasts 3 weeks in sealed jar, saves money vs store-bought and has less sugar (basic recipe: oats + honey + coconut oil bake 20min).</p>"
      },
      {
        "h2": "Combinations that maximize nutrients",
        "body": "<p>Some pairings enhance absorption: <strong>vitamin C + iron</strong> (strawberries + sunflower seeds), <strong>vitamin D + calcium</strong> (yogurt + walnuts), <strong>fats + carotenes</strong> (almonds + mango). Ground flaxseed needs to be freshly ground so omega-3 doesn't oxidize (batch grinding doesn't work).</p><p>Colors as guide: monochromatic bowl (only red fruits) lacks diversity of phytonutrients. Ideal: 3+ colors (ex: white base + blue blueberries + green kiwi + beige almonds + brown cacao). Each color provides different antioxidants.</p><p>Superfood hacks: spirulina (1 tsp) adds 4g protein + iron, but bitter if overdone; matcha has L-theanine (focus without coffee jitters); hemp seeds (10g) have all 9 essential amino acids. Watch the hype: goji berries aren't magic, any local berry works the same.</p>"
      },
      {
        "h2": "Variations by goal",
        "body": "<p>For <strong>fasted training</strong>: light pre-workout bowl (frozen banana smoothie + dates + peanut butter) 30min before. Post-workout: double protein base (yogurt + ricotta) + fast fruits (banana) + nuts. Anabolic window exists but isn't as critical as they say.</p><p>For <strong>fat loss</strong>: high-volume low-cal bases (smoothie with invisible cauliflower rice, chia pudding with more liquid), lower glycemic fruits (berries > banana), measured toppings (15g nuts, not eyeballed). Filling bowl: 250ml Greek yogurt + 100g berries + 10g almonds = ~280 cal, 20g protein.</p><p>For <strong>muscle gain</strong>: double protein (Greek yogurt + protein powder), caloric fruits (banana + dates), generous toppings (peanut butter + granola). Volume bowl: 400ml base + 2 fruits + 30g toppings = 600+ cal, 35g protein. Diabetics: avoid very sweet fruits together, add more fats to slow absorption.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I prep the complete bowl the night before?",
        "a": "Yes, but add crunchy toppings fresh when serving. Granola and nuts get soggy with moisture. Base + fruit hold well 12 hours refrigerated."
      },
      {
        "q": "Which base has most protein?",
        "a": "Greek yogurt (15-20g per cup), then skyr (15g), cottage cheese (14g), and regular yogurt (8g). Coconut yogurt has only 1-2g, needs protein complement."
      },
      {
        "q": "How many calories in an average bowl?",
        "a": "Depends on proportions: basic bowl 300-400 cal, volume bowl 600-800 cal. Difference is in topping amount and base type."
      },
      {
        "q": "Is fresh or frozen fruit better?",
        "a": "Frozen maintains more nutrients than fresh that's been in fridge 5+ days. Ideal for smoothie bases. Fresh is better for texture in cold bowls."
      }
    ]
  }
};
