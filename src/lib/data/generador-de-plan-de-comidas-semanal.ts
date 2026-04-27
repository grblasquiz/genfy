import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-plan-de-comidas-semanal",
    "en": "weekly-meal-plan-generator"
  },
  "category": "random",
  "emoji": "📅",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Plan de Comidas Semanal | Genfy",
    "metaDesc": "Creá tu menú semanal en segundos con combinaciones equilibradas. Ahorrá tiempo planificando desayunos, almuerzos y cenas variadas y nutritivas.",
    "h1": "Generador de Plan de Comidas Semanal",
    "intro": "Planificar qué comer cada día puede ser agotador. Este generador combina proteínas, carbohidratos y vegetales para armar menús semanales variados en un click.",
    "tag": "Aleatorio",
    "filterLabel": "Día de la semana",
    "countLabel": "Días",
    "generateLabel": "Generar plan",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "protein",
        "label": "Proteína",
        "items": [
          "Pollo grillado",
          "Salmón al horno",
          "Carne de res magra",
          "Tofu salteado",
          "Huevos revueltos",
          "Atún en lata",
          "Lentejas cocidas",
          "Garbanzos especiados",
          "Pavo al horno",
          "Camarones al ajillo",
          "Tempeh marinado",
          "Cerdo agridulce",
          "Bacalao a la plancha",
          "Merluza con limón",
          "Pechuga de pato",
          "Albóndigas de carne",
          "Seitán glaseado",
          "Costillas de cordero",
          "Hamburguesa de quinoa",
          "Sardinas asadas",
          "Queso cottage",
          "Yogur griego natural",
          "Hummus casero",
          "Edamame al vapor",
          "Anchoas en aceite"
        ]
      },
      {
        "id": "carbs",
        "label": "Carbohidrato",
        "items": [
          "Arroz integral",
          "Pasta de trigo integral",
          "Quinoa cocida",
          "Batata al horno",
          "Pan integral tostado",
          "Avena cocida",
          "Polenta cremosa",
          "Fideos de arroz",
          "Cuscús marroquí",
          "Papa hervida",
          "Tortillas de maíz",
          "Arroz basmati",
          "Bulgur pilaf",
          "Ñoquis caseros",
          "Pan pita integral",
          "Fideos soba",
          "Arroz salvaje",
          "Tapioca",
          "Mijo cocido",
          "Pan de centeno",
          "Pasta de lentejas",
          "Farro hervido",
          "Risotto de hongos",
          "Polenta grillada",
          "Wrap de espinaca"
        ]
      },
      {
        "id": "veggies",
        "label": "Vegetales",
        "items": [
          "Brócoli al vapor",
          "Ensalada mixta",
          "Espinaca salteada",
          "Zanahorias asadas",
          "Tomates cherry",
          "Calabacín grillado",
          "Espárragos al horno",
          "Col rizada salteada",
          "Pimientos morrones",
          "Coles de Bruselas",
          "Rúcula fresca",
          "Berenjena asada",
          "Coliflor gratinada",
          "Remolacha en cubos",
          "Champiñones salteados",
          "Pepino en rodajas",
          "Acelga hervida",
          "Repollo morado",
          "Alcachofas marinadas",
          "Judías verdes",
          "Apio cortado",
          "Radicheta amarga",
          "Calabaza butternut",
          "Puerro braseado",
          "Hinojo grillado"
        ]
      },
      {
        "id": "seasoning",
        "label": "Condimento",
        "items": [
          "con limón y hierbas",
          "al curry",
          "con ajo y perejil",
          "teriyaki",
          "con pimentón ahumado",
          "al romero",
          "con jengibre fresco",
          "estilo mediterráneo",
          "con salsa de soja",
          "al chimichurri",
          "con comino",
          "en salsa de tomate",
          "con mostaza Dijon",
          "al cilantro y lima",
          "con vinagre balsámico",
          "estilo cajún",
          "con albahaca fresca",
          "al tomillo",
          "con sriracha",
          "estilo thai",
          "con miso",
          "al orégano",
          "con tahini",
          "estilo mexicano",
          "con cúrcuma"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 7,
    "maxCount": 14,
    "content": [
      {
        "h2": "Por qué planificar las comidas de la semana",
        "body": "<p>El meal prep ahorra tiempo, dinero y estrés mental. Según estudios nutricionales, planificar reduce el desperdicio de alimentos hasta un 40% y mejora la calidad de la dieta. Cuando sabés qué cocinar de antemano, evitás compras impulsivas y pedidos delivery costosos.</p><p>Las combinaciones proteína-carbohidrato-vegetal garantizan macronutrientes balanceados. Rotá colores en los vegetales para cubrir distintos micronutrientes: verde oscuro (hierro, calcio), naranja (vitamina A), rojo (licopeno). Un plato completo debe llenar la mitad con vegetales, un cuarto con proteína y un cuarto con carbohidratos complejos.</p><p>Dedicá 20 minutos los domingos para planificar. Hacé la lista de compras basada en el plan generado y comprá una sola vez. Guardá los ingredientes frescos en contenedores herméticos. Las proteínas duran 3-4 días en heladera; los vegetales de hoja, 5-7 días si los lavás y secás bien.</p>"
      },
      {
        "h2": "Errores comunes al armar menús semanales",
        "body": "<p><strong>Repetir las mismas comidas:</strong> Comer pollo y arroz 5 días seguidos genera aburrimiento y déficit nutricional. Alterná entre pescado, legumbres, huevos y carnes rojas magras cada 2-3 días.</p><p><strong>Ignorar el batch cooking:</strong> Cociná proteínas en cantidad los fines de semana. Podés asar 4 pechugas de pollo, hervir lentejas y hornear batatas al mismo tiempo. Combiná diferente durante la semana con salsas y guarniciones distintas.</p><p><strong>No considerar sobras estratégicas:</strong> El salmón del lunes se transforma en ensalada de salmón el martes. Las verduras asadas del miércoles van en un wrap el jueves. Pensá en componentes reutilizables, no en platos cerrados.</p><p><strong>Subestimar los snacks:</strong> Entre comidas necesitás opciones saludables. Prepará hummus, cortá vegetales en bastones, porcioná frutos secos. Sin planificación, terminás comiendo galletitas o saltando comidas.</p>"
      },
      {
        "h2": "Cómo ajustar el plan a tus necesidades",
        "body": "<p>El generador da una base versátil que modificás según restricciones. <strong>Para veganos:</strong> reemplazá todas las proteínas animales por legumbres, tofu, tempeh o seitán. Sumá levadura nutricional para B12 y combiná cereales con legumbres para proteína completa.</p><p><strong>Para dietas bajas en carbos:</strong> cambiá arroz y pasta por arroz de coliflor, zoodles (fideos de zapallito) o más vegetales verdes. Aumentá la porción de proteína y añadí grasas saludables (palta, aceite de oliva, frutos secos).</p><p><strong>Para ganar masa muscular:</strong> duplicá las porciones de proteína (1.6-2g por kg de peso corporal) y sumá carbohidratos complejos post-entrenamiento. Incluí fuentes como yogur griego, queso cottage o batidos proteicos como colaciones.</p><p><strong>Para presupuestos ajustados:</strong> enfocate en huevos, legumbres, pollo y pescado congelado. Los vegetales de estación son más baratos. Comprá granos en bolsas grandes. Un plan semanal reduce gastos entre 30-50% versus comer afuera.</p>"
      },
      {
        "h2": "Técnicas para no abandonar el plan",
        "body": "<p>Empezá con 4-5 días planificados, dejá flexibilidad para imprevistos. Tener un día sin plan reduce la presión y permite salidas sociales. Usá apps para escanear recetas rápidas cuando necesités variar.</p><p><strong>Prep de ingredientes:</strong> Lavá y cortá vegetales el domingo. Guardá en contenedores de vidrio con papel absorbente. Cociná granos en cantidad y congelá porciones. Marinás proteínas la noche anterior para acelerar la cocción.</p><p><strong>Sistema de rotación:</strong> Seguí el patrón proteína-proteína-veggie (lunes pollo, martes pescado, miércoles omelette, jueves legumbres). Rotá los métodos de cocción: horno, plancha, vapor, salteado. Esto evita monotonía sin complicar la planificación.</p><p>Llevá contenedores con comida preparada al trabajo. Si comés afuera, aplicá la regla del plato: medio plato vegetales, cuarto proteína magra, cuarto carbohidrato complejo. Elegí cocciones simples (grillados, hervidos) antes que fritos. Pedí aderezos aparte para controlar calorías.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto tiempo dura la comida preparada en la heladera?",
        "a": "Las proteínas cocidas duran 3-4 días; los vegetales crudos cortados, 5-7 días; los granos cocidos, hasta 5 días. Congelá lo que no uses en 3 días para extender la vida útil hasta 3 meses."
      },
      {
        "q": "¿Puedo repetir algunas comidas durante la semana?",
        "a": "Sí, repetir componentes es eficiente. Cociná una proteína base y variá vegetales y condimentos cada día. Por ejemplo, pollo grillado el lunes con brócoli, martes con ensalada, miércoles en wrap."
      },
      {
        "q": "¿Qué hago si me aburro del plan a mitad de semana?",
        "a": "Cambiá el método de cocción o el condimento. Agregá una salsa diferente, convertí el almuerzo en wrap o bowl. Tené ingredientes de emergencia como salsas, especias y hierbas frescas."
      },
      {
        "q": "¿Cómo calculo las porciones correctas?",
        "a": "Usá tu mano como guía: palma = porción de proteína, puño = carbohidratos, dos puños = vegetales, pulgar = grasas. Ajustá según nivel de actividad física y objetivos (pérdida, mantenimiento o ganancia)."
      }
    ]
  },
  "en": {
    "pageTitle": "Weekly Meal Plan Generator | Genfy",
    "metaDesc": "Create your weekly menu in seconds with balanced combinations. Save time planning varied and nutritious breakfasts, lunches, and dinners.",
    "h1": "Weekly Meal Plan Generator",
    "intro": "Planning what to eat every day can be exhausting. This generator combines proteins, carbs, and veggies to build varied weekly menus in one click.",
    "tag": "Random",
    "filterLabel": "Day of week",
    "countLabel": "Days",
    "generateLabel": "Generate plan",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "protein",
        "label": "Protein",
        "items": [
          "Grilled chicken",
          "Baked salmon",
          "Lean beef",
          "Sautéed tofu",
          "Scrambled eggs",
          "Canned tuna",
          "Cooked lentils",
          "Spiced chickpeas",
          "Roasted turkey",
          "Garlic shrimp",
          "Marinated tempeh",
          "Sweet and sour pork",
          "Grilled cod",
          "Lemon sole",
          "Duck breast",
          "Meatballs",
          "Glazed seitan",
          "Lamb chops",
          "Quinoa burger",
          "Grilled sardines",
          "Cottage cheese",
          "Plain Greek yogurt",
          "Homemade hummus",
          "Steamed edamame",
          "Anchovies in oil"
        ]
      },
      {
        "id": "carbs",
        "label": "Carbohydrate",
        "items": [
          "Brown rice",
          "Whole wheat pasta",
          "Cooked quinoa",
          "Baked sweet potato",
          "Whole grain toast",
          "Cooked oatmeal",
          "Creamy polenta",
          "Rice noodles",
          "Moroccan couscous",
          "Boiled potatoes",
          "Corn tortillas",
          "Basmati rice",
          "Bulgur pilaf",
          "Homemade gnocchi",
          "Whole wheat pita",
          "Soba noodles",
          "Wild rice",
          "Tapioca",
          "Cooked millet",
          "Rye bread",
          "Lentil pasta",
          "Boiled farro",
          "Mushroom risotto",
          "Grilled polenta",
          "Spinach wrap"
        ]
      },
      {
        "id": "veggies",
        "label": "Vegetables",
        "items": [
          "Steamed broccoli",
          "Mixed salad",
          "Sautéed spinach",
          "Roasted carrots",
          "Cherry tomatoes",
          "Grilled zucchini",
          "Roasted asparagus",
          "Sautéed kale",
          "Bell peppers",
          "Brussels sprouts",
          "Fresh arugula",
          "Roasted eggplant",
          "Cauliflower gratin",
          "Diced beets",
          "Sautéed mushrooms",
          "Sliced cucumber",
          "Boiled chard",
          "Red cabbage",
          "Marinated artichokes",
          "Green beans",
          "Chopped celery",
          "Bitter radicchio",
          "Butternut squash",
          "Braised leeks",
          "Grilled fennel"
        ]
      },
      {
        "id": "seasoning",
        "label": "Seasoning",
        "items": [
          "with lemon and herbs",
          "curry-spiced",
          "with garlic and parsley",
          "teriyaki",
          "with smoked paprika",
          "rosemary-infused",
          "with fresh ginger",
          "Mediterranean-style",
          "with soy sauce",
          "chimichurri",
          "with cumin",
          "in tomato sauce",
          "with Dijon mustard",
          "cilantro-lime",
          "with balsamic vinegar",
          "Cajun-style",
          "with fresh basil",
          "thyme-roasted",
          "with sriracha",
          "Thai-style",
          "with miso",
          "oregano-seasoned",
          "with tahini",
          "Mexican-style",
          "with turmeric"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 7,
    "maxCount": 14,
    "content": [
      {
        "h2": "Why plan your weekly meals",
        "body": "<p>Meal prep saves time, money, and mental energy. According to nutritional studies, planning reduces food waste by up to 40% and improves overall diet quality. When you know what to cook ahead of time, you avoid impulse purchases and expensive takeout orders.</p><p>Protein-carb-veggie combinations guarantee balanced macronutrients. Rotate vegetable colors to cover different micronutrients: dark green (iron, calcium), orange (vitamin A), red (lycopene). A complete plate should be half vegetables, one quarter protein, and one quarter complex carbohydrates.</p><p>Dedicate 20 minutes on Sundays to plan. Create your shopping list based on the generated plan and shop once. Store fresh ingredients in airtight containers. Proteins last 3-4 days in the fridge; leafy vegetables last 5-7 days if washed and dried properly.</p>"
      },
      {
        "h2": "Common mistakes when building weekly menus",
        "body": "<p><strong>Repeating the same meals:</strong> Eating chicken and rice 5 days straight causes boredom and nutritional deficiency. Alternate between fish, legumes, eggs, and lean red meat every 2-3 days.</p><p><strong>Ignoring batch cooking:</strong> Cook proteins in bulk on weekends. You can roast 4 chicken breasts, boil lentils, and bake sweet potatoes simultaneously. Mix differently throughout the week with various sauces and sides.</p><p><strong>Not considering strategic leftovers:</strong> Monday's salmon transforms into Tuesday's salmon salad. Wednesday's roasted vegetables go into Thursday's wrap. Think in reusable components, not closed dishes.</p><p><strong>Underestimating snacks:</strong> Between meals you need healthy options. Prepare hummus, cut vegetables into sticks, portion out nuts. Without planning, you end up eating cookies or skipping meals.</p>"
      },
      {
        "h2": "How to adjust the plan to your needs",
        "body": "<p>The generator provides a versatile base you modify according to restrictions. <strong>For vegans:</strong> replace all animal proteins with legumes, tofu, tempeh, or seitan. Add nutritional yeast for B12 and combine grains with legumes for complete protein.</p><p><strong>For low-carb diets:</strong> swap rice and pasta for cauliflower rice, zoodles (zucchini noodles), or more green vegetables. Increase protein portions and add healthy fats (avocado, olive oil, nuts).</p><p><strong>For muscle building:</strong> double protein portions (1.6-2g per kg body weight) and add complex carbs post-workout. Include sources like Greek yogurt, cottage cheese, or protein shakes as snacks.</p><p><strong>For tight budgets:</strong> focus on eggs, legumes, chicken, and frozen fish. Seasonal vegetables are cheaper. Buy grains in bulk bags. A weekly plan reduces expenses by 30-50% versus eating out.</p>"
      },
      {
        "h2": "Techniques to stick with the plan",
        "body": "<p>Start with 4-5 planned days, leave flexibility for surprises. Having one unplanned day reduces pressure and allows social outings. Use apps to scan quick recipes when you need variety.</p><p><strong>Ingredient prep:</strong> Wash and chop vegetables on Sunday. Store in glass containers with paper towels. Cook grains in bulk and freeze portions. Marinate proteins the night before to speed up cooking.</p><p><strong>Rotation system:</strong> Follow the protein-protein-veggie pattern (Monday chicken, Tuesday fish, Wednesday omelet, Thursday legumes). Rotate cooking methods: oven, grill, steam, sauté. This prevents monotony without complicating planning.</p><p>Bring containers with prepared food to work. If eating out, apply the plate rule: half vegetables, quarter lean protein, quarter complex carb. Choose simple preparations (grilled, boiled) over fried. Ask for dressings on the side to control calories.</p>"
      }
    ],
    "faq": [
      {
        "q": "How long does prepared food last in the fridge?",
        "a": "Cooked proteins last 3-4 days; cut raw vegetables last 5-7 days; cooked grains last up to 5 days. Freeze what you won't use within 3 days to extend shelf life up to 3 months."
      },
      {
        "q": "Can I repeat some meals during the week?",
        "a": "Yes, repeating components is efficient. Cook a base protein and vary vegetables and seasonings each day. For example, grilled chicken Monday with broccoli, Tuesday with salad, Wednesday in a wrap."
      },
      {
        "q": "What if I get bored with the plan mid-week?",
        "a": "Change the cooking method or seasoning. Add a different sauce, convert lunch into a wrap or bowl. Keep emergency ingredients like sauces, spices, and fresh herbs on hand."
      },
      {
        "q": "How do I calculate correct portions?",
        "a": "Use your hand as a guide: palm = protein portion, fist = carbohydrates, two fists = vegetables, thumb = fats. Adjust according to activity level and goals (loss, maintenance, or gain)."
      }
    ]
  }
};
