import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-casos-edge-testing",
    "en": "edge-case-test-generator"
  },
  "category": "data",
  "emoji": "🧪",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Casos Edge para Testing | Genfy",
    "metaDesc": "Generá casos edge para testing: valores null, vacíos, límites numéricos, caracteres especiales. Mejorá cobertura de tests con inputs problemáticos reales.",
    "h1": "Generador de Casos Edge para Testing",
    "intro": "Casos límite que rompen código: null, undefined, cadenas vacías, límites numéricos, Unicode raro, inputs maliciosos. Los tests que deberías haber escrito antes del bug en producción.",
    "tag": "Datos",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "nullish",
        "label": "Nullish",
        "items": [
          "null",
          "undefined",
          "NaN",
          "Infinity",
          "-Infinity",
          "void 0",
          "Object.create(null)",
          "new Proxy({}, {})",
          "Symbol()",
          "BigInt(0)",
          "[]",
          "{}",
          "new Map()",
          "new Set()",
          "new WeakMap()",
          "new WeakSet()",
          "Promise.resolve()",
          "async function(){}",
          "function*(){}",
          "class {}"
        ]
      },
      {
        "id": "strings",
        "label": "Strings",
        "items": [
          "''",
          "' '",
          "'\\n'",
          "'\\t'",
          "'\\r\\n'",
          "'\\u0000'",
          "'\\uFEFF'",
          "'\\u200B'",
          "'<script>alert(1)</script>'",
          "'../../etc/passwd'",
          "'DROP TABLE users;--'",
          "'${process.env.SECRET}'",
          "'`rm -rf /`'",
          "'🚀'",
          "'�'",
          "'👨‍👩‍👧‍👦'",
          "'﷽'",
          "'Iñtërnâtiônàlizætiøn'",
          "'A'.repeat(10000)",
          "'\\\\\\\\server\\\\share'",
          "'javascript:void(0)'",
          "'data:text/html,<script>alert(1)</script>'",
          "'%00'",
          "'%0d%0a'",
          "'..//..//..//etc/passwd'"
        ]
      },
      {
        "id": "numbers",
        "label": "Números",
        "items": [
          "0",
          "-0",
          "1",
          "-1",
          "0.1 + 0.2",
          "Number.MAX_VALUE",
          "Number.MIN_VALUE",
          "Number.MAX_SAFE_INTEGER",
          "Number.MIN_SAFE_INTEGER",
          "Number.EPSILON",
          "2**53",
          "2**53 + 1",
          "-2**53",
          "1e308",
          "1e-308",
          "9007199254740992",
          "0.999999999999999",
          "1.0000000000000001",
          "-0.0",
          "Math.PI",
          "Math.E",
          "0x7FFFFFFF",
          "-2147483648",
          "4294967295",
          "0b11111111111111111111111111111111"
        ]
      },
      {
        "id": "dates",
        "label": "Fechas",
        "items": [
          "new Date(0)",
          "new Date(-1)",
          "new Date(8640000000000000)",
          "new Date(-8640000000000000)",
          "new Date('Invalid')",
          "new Date(NaN)",
          "new Date('1970-01-01T00:00:00.000Z')",
          "new Date('9999-12-31T23:59:59.999Z')",
          "new Date('0000-01-01T00:00:00.000Z')",
          "new Date('2038-01-19T03:14:07.000Z')",
          "new Date('1900-01-01')",
          "new Date('2100-12-31')",
          "new Date('2000-02-29')",
          "new Date('2001-02-29')",
          "new Date(Date.now() + 1e15)"
        ]
      },
      {
        "id": "arrays",
        "label": "Arrays",
        "items": [
          "[]",
          "[null]",
          "[undefined]",
          "[,,,]",
          "Array(1000000)",
          "[...Array(100).keys()]",
          "[[[[[[]]]]]]",
          "[1, '2', null, undefined, {}, []]",
          "new Array(-1)",
          "[NaN, Infinity, -Infinity]",
          "Object.assign([], {length: 2**32})",
          "[].concat(undefined)",
          "Array.from({length: 5})",
          "[...'💩']",
          "new Uint8Array(0)"
        ]
      },
      {
        "id": "objects",
        "label": "Objetos",
        "items": [
          "{}",
          "{a: undefined}",
          "{[Symbol()]: 'value'}",
          "{__proto__: null}",
          "Object.create(null)",
          "new Proxy({}, {get: () => {}})",
          "{get prop() { throw new Error() }}",
          "{constructor: {name: 'Array'}}",
          "{length: 0, [0]: 'fake array'}",
          "Object.freeze({})",
          "Object.seal({})",
          "{toString: () => { throw new Error() }}",
          "{valueOf: () => NaN}",
          "JSON.parse('{}')",
          "JSON.parse('null')",
          "{a: {b: {c: {d: {e: 'deep'}}}}}",
          "new WeakMap([[{}, 'value']])",
          "new Error('test')",
          "new Date('Invalid')",
          "/(?:)/"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué los edge cases rompen tu código",
        "body": "<p>El usuario promedio es predecible. El usuario real pega 'undefined' como texto en un campo, copia emojis compuestos que JavaScript cuenta como 4 caracteres, manda fechas del año 9999, o sube archivos llamados <code>../../etc/passwd</code>. Si tus tests solo prueban el happy path, el código explota en producción.</p><p>Los edge cases no son raros: son inevitables a escala. Con 10 usuarios nunca ves <code>null</code> inesperado. Con 10,000 usuarios pasa 3 veces al día. Con 1M de usuarios, todo input inválido posible va a ocurrir. El problema no es la probabilidad, es la superficie de ataque. Cada input sin validar es un bug esperando a manifestarse.</p><p>Los bugs más caros vienen de asumir. Asumís que <code>user.name</code> siempre existe. Asumís que el ID es número positivo. Asumís que el string no tiene caracteres especiales. Un solo <code>null</code> no manejado en función crítica tira el sistema. Tests con edge cases convierten esas asunciones en verificaciones explícitas. No es paranoia, es experiencia acumulada de toda la industria.</p>"
      },
      {
        "h2": "Categorías de edge cases que importan",
        "body": "<p><strong>Nullish:</strong> <code>null</code>, <code>undefined</code>, <code>NaN</code>. JavaScript tiene 7+ maneras de representar 'nada'. <code>== null</code> cubre <code>null</code> y <code>undefined</code>, pero <code>NaN</code> necesita <code>Number.isNaN()</code>. <code>Infinity</code> y <code>-Infinity</code> son números válidos pero rompen aritmética normal. Testeá divisiones por cero, <code>Math.log(0)</code>, <code>Math.sqrt(-1)</code>.</p><p><strong>Strings problemáticos:</strong> vacío, espacios, saltos de línea, caracteres Unicode raros (zero-width, control chars, emojis compuestos). Un emoji como 👨‍👩‍👧‍👦 es técnicamente 7 code points pero visualmente 1 caracter. <code>string.length</code> miente. <code>[...string].length</code> también miente con algunos casos. Usá librerías tipo <code>grapheme-splitter</code> para contar correctamente.</p><p><strong>Números límite:</strong> <code>Number.MAX_SAFE_INTEGER</code> (2^53 - 1) es el último entero que JavaScript maneja sin pérdida de precisión. Más allá necesitás <code>BigInt</code>. <code>0.1 + 0.2 !== 0.3</code> es famoso pero sigue rompiendo cálculos financieros. Nunca compares floats con <code>===</code>. Usá tolerancia: <code>Math.abs(a - b) < Number.EPSILON</code>. O mejor: trabajá con enteros (centavos en lugar de dólares).</p>"
      },
      {
        "h2": "Cómo estructurar tests de edge cases",
        "body": "<p>No pongas 50 edge cases en un solo test. Si falla, no sabés cuál input lo rompió. Un test por edge case, con nombre descriptivo: <code>test('should handle null user id')</code>, <code>test('should reject negative amounts')</code>. Cuando falle, el nombre del test te dice exactamente qué está roto.</p><p>Usá test.each o describe.each para parametrizar: <code>test.each([null, undefined, NaN])('handles %p gracefully', (value) => { ... })</code>. Mantiene DRY sin sacrificar claridad. El output muestra qué valor específico falló. En Jest, <code>%p</code> pretty-printa el valor; en Vitest es igual.</p><p>Priorizá edge cases por riesgo. Inputs financieros (cantidades negativas, decimales raros) son críticos—pueden costar plata real. Inputs de autenticación (bypass con <code>admin'--</code>, SQL injection) son security. Inputs de UI (strings largos que rompen layout) son UX. Testeá críticos primero, cosméticos después. No todo edge case tiene igual peso.</p>"
      },
      {
        "h2": "Herramientas y estrategias avanzadas",
        "body": "<p>Property-based testing con <code>fast-check</code>: en lugar de testear casos específicos, definís propiedades que deben cumplirse para cualquier input. Ejemplo: 'serializar y deserializar JSON debe retornar valor idéntico'. La librería genera cientos de inputs random (incluyendo edge cases) y verifica la propiedad. Encuentra bugs que nunca hubieras imaginado.</p><p>Fuzzing: herramientas como <code>jsfuzz</code> o <code>jazzer.js</code> generan inputs inválidos masivos y mutados para buscar crashes. Útil para parsers, deserializadores, validadores. Si tu código procesa input externo (APIs, uploads, formularios), el fuzzing encuentra vulnerabilidades que tests manuales no cubren.</p><p>Mutation testing con <code>Stryker</code>: modifica tu código (cambia <code>></code> por <code>>=</code>, <code>&&</code> por <code>||</code>) y re-corre tests. Si los tests siguen pasando con código mutado, significa que no están cubriendo esos casos. Te fuerza a escribir mejores aserciones. Es lento pero expone huecos reales en cobertura. Correlo en CI una vez por semana, no en cada commit.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos edge cases debería testear?",
        "a": "Los críticos para tu dominio. Financiero: negativos, decimales, overflow. Auth: injection, bypass. APIs: null, strings vacíos, payloads gigantes."
      },
      {
        "q": "¿Es mejor testear edge cases en unit o integration tests?",
        "a": "Unit tests para validación de inputs individuales; integration para cómo se propagan esos valores a través del sistema."
      },
      {
        "q": "¿Cómo encuentro edge cases que no conozco?",
        "a": "Property-based testing y fuzzing. Generan miles de inputs, incluyendo combinaciones inesperadas que rompen asunciones ocultas."
      },
      {
        "q": "¿Los edge cases reemplazan tests normales?",
        "a": "No. Necesitás happy path + edge cases. Los edge cases validan robustez; los happy path validan funcionalidad correcta."
      }
    ]
  },
  "en": {
    "pageTitle": "Edge Case Test Generator | Genfy",
    "metaDesc": "Generate edge cases for testing: null values, empty strings, numeric boundaries, special characters. Improve test coverage with real problematic inputs.",
    "h1": "Edge Case Test Generator",
    "intro": "Boundary cases that break code: null, undefined, empty strings, numeric limits, weird Unicode, malicious inputs. The tests you should have written before the production bug.",
    "tag": "Data",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "nullish",
        "label": "Nullish",
        "items": [
          "null",
          "undefined",
          "NaN",
          "Infinity",
          "-Infinity",
          "void 0",
          "Object.create(null)",
          "new Proxy({}, {})",
          "Symbol()",
          "BigInt(0)",
          "[]",
          "{}",
          "new Map()",
          "new Set()",
          "new WeakMap()",
          "new WeakSet()",
          "Promise.resolve()",
          "async function(){}",
          "function*(){}",
          "class {}"
        ]
      },
      {
        "id": "strings",
        "label": "Strings",
        "items": [
          "''",
          "' '",
          "'\\n'",
          "'\\t'",
          "'\\r\\n'",
          "'\\u0000'",
          "'\\uFEFF'",
          "'\\u200B'",
          "'<script>alert(1)</script>'",
          "'../../etc/passwd'",
          "'DROP TABLE users;--'",
          "'${process.env.SECRET}'",
          "'`rm -rf /`'",
          "'🚀'",
          "'�'",
          "'👨‍👩‍👧‍👦'",
          "'﷽'",
          "'Iñtërnâtiônàlizætiøn'",
          "'A'.repeat(10000)",
          "'\\\\\\\\server\\\\share'",
          "'javascript:void(0)'",
          "'data:text/html,<script>alert(1)</script>'",
          "'%00'",
          "'%0d%0a'",
          "'..//..//..//etc/passwd'"
        ]
      },
      {
        "id": "numbers",
        "label": "Numbers",
        "items": [
          "0",
          "-0",
          "1",
          "-1",
          "0.1 + 0.2",
          "Number.MAX_VALUE",
          "Number.MIN_VALUE",
          "Number.MAX_SAFE_INTEGER",
          "Number.MIN_SAFE_INTEGER",
          "Number.EPSILON",
          "2**53",
          "2**53 + 1",
          "-2**53",
          "1e308",
          "1e-308",
          "9007199254740992",
          "0.999999999999999",
          "1.0000000000000001",
          "-0.0",
          "Math.PI",
          "Math.E",
          "0x7FFFFFFF",
          "-2147483648",
          "4294967295",
          "0b11111111111111111111111111111111"
        ]
      },
      {
        "id": "dates",
        "label": "Dates",
        "items": [
          "new Date(0)",
          "new Date(-1)",
          "new Date(8640000000000000)",
          "new Date(-8640000000000000)",
          "new Date('Invalid')",
          "new Date(NaN)",
          "new Date('1970-01-01T00:00:00.000Z')",
          "new Date('9999-12-31T23:59:59.999Z')",
          "new Date('0000-01-01T00:00:00.000Z')",
          "new Date('2038-01-19T03:14:07.000Z')",
          "new Date('1900-01-01')",
          "new Date('2100-12-31')",
          "new Date('2000-02-29')",
          "new Date('2001-02-29')",
          "new Date(Date.now() + 1e15)"
        ]
      },
      {
        "id": "arrays",
        "label": "Arrays",
        "items": [
          "[]",
          "[null]",
          "[undefined]",
          "[,,,]",
          "Array(1000000)",
          "[...Array(100).keys()]",
          "[[[[[[]]]]]]",
          "[1, '2', null, undefined, {}, []]",
          "new Array(-1)",
          "[NaN, Infinity, -Infinity]",
          "Object.assign([], {length: 2**32})",
          "[].concat(undefined)",
          "Array.from({length: 5})",
          "[...'💩']",
          "new Uint8Array(0)"
        ]
      },
      {
        "id": "objects",
        "label": "Objects",
        "items": [
          "{}",
          "{a: undefined}",
          "{[Symbol()]: 'value'}",
          "{__proto__: null}",
          "Object.create(null)",
          "new Proxy({}, {get: () => {}})",
          "{get prop() { throw new Error() }}",
          "{constructor: {name: 'Array'}}",
          "{length: 0, [0]: 'fake array'}",
          "Object.freeze({})",
          "Object.seal({})",
          "{toString: () => { throw new Error() }}",
          "{valueOf: () => NaN}",
          "JSON.parse('{}')",
          "JSON.parse('null')",
          "{a: {b: {c: {d: {e: 'deep'}}}}}",
          "new WeakMap([[{}, 'value']])",
          "new Error('test')",
          "new Date('Invalid')",
          "/(?:)/"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why edge cases break your code",
        "body": "<p>The average user is predictable. The real user pastes 'undefined' as text in a field, copies compound emojis that JavaScript counts as 4 characters, sends dates from year 9999, or uploads files named <code>../../etc/passwd</code>. If your tests only cover the happy path, code explodes in production.</p><p>Edge cases aren't rare: they're inevitable at scale. With 10 users you never see unexpected <code>null</code>. With 10,000 users it happens 3 times a day. With 1M users, every possible invalid input will occur. The problem isn't probability, it's attack surface. Every unvalidated input is a bug waiting to manifest.</p><p>The most expensive bugs come from assumptions. You assume <code>user.name</code> always exists. You assume ID is positive number. You assume string has no special characters. A single unhandled <code>null</code> in critical function crashes the system. Tests with edge cases convert those assumptions into explicit verifications. It's not paranoia, it's accumulated industry experience.</p>"
      },
      {
        "h2": "Edge case categories that matter",
        "body": "<p><strong>Nullish:</strong> <code>null</code>, <code>undefined</code>, <code>NaN</code>. JavaScript has 7+ ways to represent 'nothing'. <code>== null</code> covers <code>null</code> and <code>undefined</code>, but <code>NaN</code> needs <code>Number.isNaN()</code>. <code>Infinity</code> and <code>-Infinity</code> are valid numbers but break normal arithmetic. Test divisions by zero, <code>Math.log(0)</code>, <code>Math.sqrt(-1)</code>.</p><p><strong>Problematic strings:</strong> empty, spaces, line breaks, weird Unicode (zero-width, control chars, compound emojis). An emoji like 👨‍👩‍👧‍👦 is technically 7 code points but visually 1 character. <code>string.length</code> lies. <code>[...string].length</code> also lies with some cases. Use libraries like <code>grapheme-splitter</code> to count correctly.</p><p><strong>Boundary numbers:</strong> <code>Number.MAX_SAFE_INTEGER</code> (2^53 - 1) is the last integer JavaScript handles without precision loss. Beyond that you need <code>BigInt</code>. <code>0.1 + 0.2 !== 0.3</code> is famous but still breaks financial calculations. Never compare floats with <code>===</code>. Use tolerance: <code>Math.abs(a - b) < Number.EPSILON</code>. Or better: work with integers (cents instead of dollars).</p>"
      },
      {
        "h2": "How to structure edge case tests",
        "body": "<p>Don't put 50 edge cases in a single test. If it fails, you don't know which input broke it. One test per edge case, with descriptive name: <code>test('should handle null user id')</code>, <code>test('should reject negative amounts')</code>. When it fails, the test name tells you exactly what's broken.</p><p>Use test.each or describe.each to parametrize: <code>test.each([null, undefined, NaN])('handles %p gracefully', (value) => { ... })</code>. Keeps DRY without sacrificing clarity. Output shows which specific value failed. In Jest, <code>%p</code> pretty-prints the value; in Vitest it's the same.</p><p>Prioritize edge cases by risk. Financial inputs (negative amounts, weird decimals) are critical—they can cost real money. Auth inputs (bypass with <code>admin'--</code>, SQL injection) are security. UI inputs (long strings breaking layout) are UX. Test critical first, cosmetic later. Not all edge cases have equal weight.</p>"
      },
      {
        "h2": "Advanced tools and strategies",
        "body": "<p>Property-based testing with <code>fast-check</code>: instead of testing specific cases, you define properties that must hold for any input. Example: 'serializing and deserializing JSON must return identical value'. The library generates hundreds of random inputs (including edge cases) and verifies the property. Finds bugs you would never have imagined.</p><p>Fuzzing: tools like <code>jsfuzz</code> or <code>jazzer.js</code> generate massive invalid and mutated inputs to find crashes. Useful for parsers, deserializers, validators. If your code processes external input (APIs, uploads, forms), fuzzing finds vulnerabilities manual tests don't cover.</p><p>Mutation testing with <code>Stryker</code>: modifies your code (changes <code>></code> to <code>>=</code>, <code>&&</code> to <code>||</code>) and re-runs tests. If tests still pass with mutated code, it means they're not covering those cases. Forces you to write better assertions. It's slow but exposes real coverage gaps. Run it in CI once a week, not on every commit.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many edge cases should I test?",
        "a": "The critical ones for your domain. Financial: negatives, decimals, overflow. Auth: injection, bypass. APIs: null, empty strings, giant payloads."
      },
      {
        "q": "Is it better to test edge cases in unit or integration tests?",
        "a": "Unit tests for individual input validation; integration for how those values propagate through the system."
      },
      {
        "q": "How do I find edge cases I don't know about?",
        "a": "Property-based testing and fuzzing. They generate thousands of inputs, including unexpected combinations that break hidden assumptions."
      },
      {
        "q": "Do edge cases replace normal tests?",
        "a": "No. You need happy path + edge cases. Edge cases validate robustness; happy path validates correct functionality."
      }
    ]
  }
};
