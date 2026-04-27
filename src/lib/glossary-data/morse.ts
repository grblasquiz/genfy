import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "morse",
    "en": "morse-code"
  },
  "emoji": "📻",
  "category": "general",
  "es": {
    "pageTitle": "Código Morse — Glosario | Genfy",
    "metaDesc": "Código Morse: sistema de codificación con puntos y rayas creado en 1830s. Descubrí cómo funciona, cuándo usarlo y ejemplos prácticos de telegrafía.",
    "h1": "Código Morse",
    "short": "El Código Morse es un sistema de comunicación que representa letras y números mediante combinaciones de señales cortas (puntos) y largas (rayas). Creado por Samuel Morse en la década de 1830, revolucionó las telecomunicaciones al permitir transmitir mensajes a larga distancia por telégrafo.",
    "body": [
      {
        "title": "¿Qué es el Código Morse?",
        "content": "<p>El Código Morse es un método de codificación de caracteres alfanuméricos mediante secuencias de señales de duración variable. Cada letra del alfabeto, número y signo de puntuación se representa con una combinación única de puntos (•) y rayas (−).</p><p>Desarrollado en 1836 por Samuel Morse y Alfred Vail para el sistema telegráfico, se convirtió en el estándar internacional de comunicación a distancia durante más de un siglo. Su diseño inteligente asignaba códigos más cortos a las letras más frecuentes: <strong>E</strong> es solo un punto (•), mientras que <strong>T</strong> es una raya (−).</p><p>Aunque hoy existen tecnologías más eficientes, el Código Morse sigue vigente en radioafición, señalización marítima de emergencia, y como símbolo cultural de la era telegráfica. La señal SOS (•••−−−•••) es universalmente reconocida como llamado de auxilio.</p>"
      },
      {
        "title": "¿Cómo funciona el sistema?",
        "content": "<p>El Código Morse funciona con tres elementos temporales básicos: el punto (señal corta), la raya (señal tres veces más larga que el punto), y los espacios de separación. Un punto dura una unidad de tiempo, una raya dura tres unidades.</p><p>Los espacios son cruciales para la interpretación: <strong>entre elementos de una letra</strong> hay una pausa de una unidad, <strong>entre letras</strong> tres unidades, y <strong>entre palabras</strong> siete unidades. Por ejemplo, la palabra \"HOLA\" se codifica como: •••• −−− •−•• •− (con espacios entre letras).</p><p>Existen dos variantes principales: el <strong>Morse Internacional</strong> (usado globalmente) y el <strong>Morse Americano</strong> (obsoleto). El código puede transmitirse mediante sonido (pitidos), luz (linternas, señales luminosas), o pulsos eléctricos. Los operadores expertos alcanzan velocidades de 20-30 palabras por minuto.</p><p>El diseño estadístico del código optimiza la velocidad: las letras más frecuentes en inglés (E, T, I, A, N) tienen los códigos más cortos, mientras que letras raras (Q, X, Z) requieren secuencias más largas.</p>"
      },
      {
        "title": "¿Cuándo usar el Código Morse?",
        "content": "<p>A pesar de su antigüedad, el Código Morse sigue siendo útil en contextos específicos. Los <strong>radioaficionados</strong> lo usan porque permite comunicación clara incluso con señales débiles o interferidas. En emergencias marítimas, la señal SOS en Morse puede transmitirse con luz, sonido o reflejo solar.</p><p>En <strong>accesibilidad</strong>, el Morse se adapta a interfaces de switch único: personas con movilidad limitada pueden escribir usando dos pulsadores (punto/raya). Google integró un teclado Morse en Gboard específicamente para usuarios con discapacidades motoras.</p><p>Los servicios de <strong>inteligencia y militar</strong> todavía entrenan operadores en Morse como canal de respaldo ante fallas tecnológicas. Es inmune a hackeos y funciona con equipos mínimos. También aparece en cultura geek, easter eggs de videojuegos, y como método de cifrado básico en juegos de escape.</p><p>Para proyectos educativos o nostálgicos, el Morse enseña conceptos de codificación binaria variable y optimización estadística de forma tangible y divertida.</p>"
      },
      {
        "title": "Limitaciones y alternativas modernas",
        "content": "<p>El principal problema del Código Morse es su <strong>baja velocidad</strong>: incluso operadores expertos no superan las 40 palabras por minuto, muy por debajo del habla (150-200 ppm) o la escritura digital. Requiere entrenamiento intensivo para alcanzar fluidez.</p><p>No transmite información más allá de texto básico: no hay emojis, tipografía o formato. Los espacios son ambiguos y pueden perderse con ruido en la señal. Para comunicación moderna, tecnologías como <strong>PSK31</strong> (Phase Shift Keying) transmiten datos digitales por radio de forma más eficiente.</p><p>En contextos de emergencia, los teléfonos satelitales y dispositivos GPS con SOS automático han reemplazado al Morse. Sin embargo, como último recurso con tecnología mínima (una linterna, un silbato), sigue siendo insuperable.</p>"
      }
    ],
    "examples": [
      "SOS: ••• −−− ••• (señal universal de auxilio)",
      "HOLA: •••• −−− •−•• •−",
      "GENFY: −−• • −• ••−• −•−−",
      "Alfabeto completo: A=•−, B=−•••, C=−•−•, D=−••, E=•, etc.",
      "En radioafición: 'CQ' (−•−• −−•−) significa llamado general para contacto"
    ],
    "related": [
      "codigo-morse",
      "alfabeto-fonetico-otan"
    ],
    "faq": [
      {
        "q": "¿Por qué SOS es ••• −−− •••?",
        "a": "SOS no significa 'Save Our Souls'. Se eligió porque es una secuencia fácil de reconocer y difícil de confundir: tres puntos, tres rayas, tres puntos, sin espacios internos. Es un patrón visual y auditivo distintivo que puede detectarse incluso en señales débiles."
      },
      {
        "q": "¿Todavía se usa el Código Morse profesionalmente?",
        "a": "Sí, aunque marginalmente. La aviación lo eliminó en 1999, pero radioaficionados y militares lo mantienen como canal de respaldo. Algunos faros marítimos automáticos transmiten identificación en Morse. Es más cultural y de respaldo que de uso diario."
      },
      {
        "q": "¿Puedo aprender Código Morse en apps?",
        "a": "Sí, apps como Morse Mania, Gboard (teclado Morse de Google) y IZ2UUF Morse Koch ofrecen entrenamiento progresivo. El método Koch entrena primero a velocidad alta con pocas letras, agregando gradualmente más caracteres. Alcanzar fluidez toma semanas de práctica diaria."
      }
    ]
  },
  "en": {
    "pageTitle": "Morse Code — Glossary | Genfy",
    "metaDesc": "Morse Code: encoding system with dots and dashes from the 1830s. Learn how it works, when to use it, and practical telegraphy examples.",
    "h1": "Morse Code",
    "short": "Morse Code is a communication system that represents letters and numbers through combinations of short (dots) and long (dashes) signals. Created by Samuel Morse in the 1830s, it revolutionized telecommunications by enabling long-distance message transmission via telegraph.",
    "body": [
      {
        "title": "What is Morse Code?",
        "content": "<p>Morse Code is a character encoding method using sequences of variable-duration signals. Each letter, number, and punctuation mark is represented by a unique combination of dots (•) and dashes (−).</p><p>Developed in 1836 by Samuel Morse and Alfred Vail for the telegraph system, it became the international standard for distance communication for over a century. Its intelligent design assigned shorter codes to the most frequent letters: <strong>E</strong> is just a dot (•), while <strong>T</strong> is a dash (−).</p><p>Although more efficient technologies exist today, Morse Code remains relevant in amateur radio, maritime emergency signaling, and as a cultural symbol of the telegraph era. The SOS signal (•••−−−•••) is universally recognized as a distress call.</p>"
      },
      {
        "title": "How does the system work?",
        "content": "<p>Morse Code operates with three basic temporal elements: the dot (short signal), the dash (signal three times longer than the dot), and separation spaces. A dot lasts one time unit, a dash lasts three units.</p><p>Spaces are crucial for interpretation: <strong>between elements of a letter</strong> there's a one-unit pause, <strong>between letters</strong> three units, and <strong>between words</strong> seven units. For example, the word 'HELLO' encodes as: •••• • •−•• •−•• −−− (with spaces between letters).</p><p>Two main variants exist: <strong>International Morse</strong> (used globally) and <strong>American Morse</strong> (obsolete). The code can be transmitted via sound (beeps), light (flashlights, signals), or electrical pulses. Expert operators reach speeds of 20-30 words per minute.</p><p>The code's statistical design optimizes speed: the most frequent English letters (E, T, I, A, N) have the shortest codes, while rare letters (Q, X, Z) require longer sequences.</p>"
      },
      {
        "title": "When to use Morse Code?",
        "content": "<p>Despite its age, Morse Code remains useful in specific contexts. <strong>Amateur radio operators</strong> use it because it allows clear communication even with weak or interfered signals. In maritime emergencies, the SOS signal in Morse can be transmitted via light, sound, or solar reflection.</p><p>In <strong>accessibility</strong>, Morse adapts to single-switch interfaces: people with limited mobility can type using two buttons (dot/dash). Google integrated a Morse keyboard in Gboard specifically for users with motor disabilities.</p><p><strong>Intelligence and military</strong> services still train operators in Morse as a backup channel during technological failures. It's immune to hacking and works with minimal equipment. It also appears in geek culture, video game easter eggs, and as basic encryption in escape rooms.</p><p>For educational or nostalgic projects, Morse teaches concepts of variable binary encoding and statistical optimization in a tangible and fun way.</p>"
      },
      {
        "title": "Limitations and modern alternatives",
        "content": "<p>Morse Code's main problem is its <strong>low speed</strong>: even expert operators don't exceed 40 words per minute, far below speech (150-200 wpm) or digital typing. It requires intensive training to achieve fluency.</p><p>It doesn't transmit information beyond basic text: no emojis, typography, or formatting. Spaces are ambiguous and can be lost in signal noise. For modern communication, technologies like <strong>PSK31</strong> (Phase Shift Keying) transmit digital data over radio more efficiently.</p><p>In emergency contexts, satellite phones and GPS devices with automatic SOS have replaced Morse. However, as a last resort with minimal technology (a flashlight, a whistle), it remains unbeatable.</p>"
      }
    ],
    "examples": [
      "SOS: ••• −−− ••• (universal distress signal)",
      "HELLO: •••• • •−•• •−•• −−−",
      "GENFY: −−• • −• ••−• −•−−",
      "Complete alphabet: A=•−, B=−•••, C=−•−•, D=−••, E=•, etc.",
      "In ham radio: 'CQ' (−•−• −−•−) means general call for contact"
    ],
    "related": [
      "morse-code-translator",
      "nato-phonetic-spelling"
    ],
    "faq": [
      {
        "q": "Why is SOS ••• −−− •••?",
        "a": "SOS doesn't stand for 'Save Our Souls'. It was chosen because it's an easy-to-recognize sequence that's hard to confuse: three dots, three dashes, three dots, with no internal spaces. It's a distinctive visual and auditory pattern detectable even in weak signals."
      },
      {
        "q": "Is Morse Code still used professionally?",
        "a": "Yes, though marginally. Aviation eliminated it in 1999, but amateur radio operators and military maintain it as a backup channel. Some automated maritime lighthouses transmit identification in Morse. It's more cultural and backup than daily use."
      },
      {
        "q": "Can I learn Morse Code with apps?",
        "a": "Yes, apps like Morse Mania, Gboard (Google's Morse keyboard), and IZ2UUF Morse Koch offer progressive training. The Koch method trains first at high speed with few letters, gradually adding more characters. Achieving fluency takes weeks of daily practice."
      }
    ]
  }
};
