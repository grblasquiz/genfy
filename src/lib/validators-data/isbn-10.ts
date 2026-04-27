import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "isbn-10",
  "slug": {
    "es": "validador-isbn-10",
    "en": "isbn-10-validator"
  },
  "emoji": "📕",
  "category": "data",
  "es": {
    "pageTitle": "Validador de ISBN-10 | Genfy",
    "metaDesc": "Validá códigos ISBN-10 de libros con el algoritmo módulo 11. Acepta formato con guiones y dígito X. Gratis para editoriales y bibliotecas.",
    "h1": "Validador de ISBN-10",
    "intro": "Verificá si un ISBN de 10 dígitos (libros publicados antes de 2007) es válido. Compatible con el dígito especial X.",
    "tag": "Datos",
    "inputLabel": "Ingresá un ISBN-10",
    "placeholder": "0-306-40615-2",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "Clásico válido",
        "value": "0-306-40615-2"
      },
      {
        "label": "Con X",
        "value": "0-19-852663-X"
      },
      {
        "label": "Sin guiones",
        "value": "0306406152"
      },
      {
        "label": "Inválido",
        "value": "0-306-40615-3"
      }
    ],
    "reasons": {
      "must-be-10-chars": "Debe tener 10 caracteres (último puede ser X)",
      "checksum-fail": "El checksum mod 11 no coincide"
    },
    "body": [
      {
        "h2": "¿Qué es el ISBN-10?",
        "html": "<p>El <strong>ISBN-10</strong> (International Standard Book Number) es el sistema de identificación de libros usado desde 1970 hasta 2006. Consta de <strong>10 caracteres</strong>: 9 dígitos más un dígito verificador que puede ser un número (0-9) o la letra <strong>X</strong> (que representa el valor 10).</p><p>El formato estándar es <code>G-EEEE-TTTT-C</code>, donde:</p><ul><li><strong>G</strong>: Grupo lingüístico o país (ej: 0/1 inglés, 84 España, 950 Argentina)</li><li><strong>EEEE</strong>: Editorial</li><li><strong>TTTT</strong>: Título específico</li><li><strong>C</strong>: Dígito de control (checksum)</li></ul><p>Desde 2007 se reemplazó por <strong>ISBN-13</strong> (compatible con códigos EAN), pero millones de libros antiguos aún usan ISBN-10. Este validador verifica el checksum pero <strong>no confirma si el libro existe</strong>.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El cálculo del <strong>dígito de control</strong> usa módulo 11 con pesos decrecientes:</p><ul><li><strong>1. Tomar los primeros 9 dígitos</strong>.</li><li><strong>2. Multiplicar cada uno</strong> por su posición en reversa: el primero ×10, el segundo ×9, ..., el noveno ×2.</li><li><strong>3. Sumar todos los resultados</strong>.</li><li><strong>4. Calcular</strong> <code>suma % 11</code>.</li><li><strong>5. El dígito de control debe hacer que</strong> <code>(suma + control) % 11 = 0</code>. Si el control calculado es 10, se representa como <strong>X</strong>.</li></ul><p>Ejemplo con <code>0-306-40615-2</code>:</p><ul><li>Dígitos: <code>0 3 0 6 4 0 6 1 5</code></li><li>Multiplicar: <code>0×10 + 3×9 + 0×8 + 6×7 + 4×6 + 0×5 + 6×4 + 1×3 + 5×2 = 0+27+0+42+24+0+24+3+10 = 130</code></li><li>Control esperado: <code>11 - (130 % 11) = 11 - 9 = 2</code> ✓</li></ul><p>Ejemplo con <code>0-19-852663-X</code>:</p><ul><li>El cálculo da 10 → Se representa como <strong>X</strong> ✓</li></ul>"
      },
      {
        "h2": "Cuándo y por qué validar ISBN-10",
        "html": "<p>La validación de ISBN-10 es útil en varios contextos:</p><ul><li><strong>Sistemas de bibliotecas</strong>: Catalogación de libros antiguos. Muchas bibliotecas aún manejan ISBN-10 en sus bases de datos legacy.</li><li><strong>Comercio de libros usados</strong>: Plataformas como Amazon, MercadoLibre o Bookfinder permiten buscar por ISBN-10.</li><li><strong>Bases de datos editoriales</strong>: Editoriales con catálogo histórico necesitan validar ISBNs viejos al migrar sistemas.</li><li><strong>APIs de búsqueda de libros</strong>: Google Books API, Open Library y WorldCat aceptan ISBN-10.</li></ul><p>Hacer la validación <strong>antes de consultar APIs externas</strong> evita requests inútiles. Muchos servicios rechazan ISBNs inválidos con error 400. Validar del lado del cliente mejora UX en buscadores y formularios de ingreso de inventario.</p><p>Nota: Si tenés un ISBN-13 que empieza con <code>978</code>, podés convertirlo a ISBN-10 quitando el prefijo y recalculando el dígito de control.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador <strong>no verifica</strong>:</p><ul><li>Si el libro <strong>existe en algún catálogo</strong> (WorldCat, Google Books, etc.).</li><li>Si está <strong>disponible, descatalogado o agotado</strong>.</li><li>Si los metadatos (título, autor, editorial) son correctos.</li><li>Si el ISBN fue asignado oficialmente por una agencia ISBN.</li></ul><p><strong>Errores frecuentes al implementar validación:</strong></p><ul><li><strong>No soportar la X mayúscula/minúscula</strong>: Siempre normalizar a mayúscula antes de validar.</li><li><strong>Rechazar guiones o espacios</strong>: Los usuarios escriben <code>0-306-40615-2</code>, <code>0 306 40615 2</code> o <code>0306406152</code>. Debes aceptar todos.</li><li><strong>Confundir ISBN-10 con ISBN-13</strong>: Si el input tiene 13 dígitos, usa el validador de ISBN-13.</li><li><strong>No validar que X solo puede estar al final</strong>: La X solo es válida como último carácter.</li></ul><p>Para <strong>buscar información del libro</strong>, usá APIs como:</p><ul><li>Google Books API: <code>https://www.googleapis.com/books/v1/volumes?q=isbn:0306406152</code></li><li>Open Library: <code>https://openlibrary.org/api/books?bibkeys=ISBN:0306406152</code></li></ul>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué significa la X en el ISBN-10?",
        "a": "La X representa el valor 10 en el algoritmo módulo 11. Solo es válida como último carácter (dígito de control)."
      },
      {
        "q": "¿Este validador busca el libro en Google o Amazon?",
        "a": "No. Solo verifica que el checksum sea correcto. Para buscar el libro, usá APIs de Google Books, Open Library o la web de la editorial."
      },
      {
        "q": "¿Puedo convertir un ISBN-13 a ISBN-10?",
        "a": "Sí, si el ISBN-13 empieza con 978. Quitá el prefijo 978 y el último dígito, luego recalculá el dígito de control con el algoritmo ISBN-10."
      },
      {
        "q": "¿Los libros nuevos usan ISBN-10?",
        "a": "No. Desde 2007 todos los libros nuevos usan ISBN-13. El ISBN-10 solo se usa para libros publicados antes de esa fecha o conversiones de ISBNs antiguos."
      }
    ],
    "relatedSlugs": [
      "generador-titulo-libro",
      "generador-de-numeros-aleatorios"
    ]
  },
  "en": {
    "pageTitle": "ISBN-10 validator | Genfy",
    "metaDesc": "Validate ISBN-10 book codes with the modulo 11 algorithm. Accepts format with hyphens and X digit. Free for publishers and libraries.",
    "h1": "ISBN-10 validator",
    "intro": "Verify if a 10-digit ISBN (books published before 2007) is valid. Compatible with the special X digit.",
    "tag": "Data",
    "inputLabel": "Enter an ISBN-10",
    "placeholder": "0-306-40615-2",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid classic",
        "value": "0-306-40615-2"
      },
      {
        "label": "With X",
        "value": "0-19-852663-X"
      },
      {
        "label": "Without hyphens",
        "value": "0306406152"
      },
      {
        "label": "Invalid",
        "value": "0-306-40615-3"
      }
    ],
    "reasons": {
      "must-be-10-chars": "Must be 10 characters (last can be X)",
      "checksum-fail": "Mod 11 checksum does not match"
    },
    "body": [
      {
        "h2": "What is ISBN-10?",
        "html": "<p>The <strong>ISBN-10</strong> (International Standard Book Number) is the book identification system used from 1970 to 2006. It consists of <strong>10 characters</strong>: 9 digits plus a check digit that can be a number (0-9) or the letter <strong>X</strong> (representing the value 10).</p><p>The standard format is <code>G-EEEE-TTTT-C</code>, where:</p><ul><li><strong>G</strong>: Language group or country (e.g., 0/1 English, 84 Spain, 950 Argentina)</li><li><strong>EEEE</strong>: Publisher</li><li><strong>TTTT</strong>: Specific title</li><li><strong>C</strong>: Check digit (checksum)</li></ul><p>Since 2007 it was replaced by <strong>ISBN-13</strong> (compatible with EAN codes), but millions of old books still use ISBN-10. This validator verifies the checksum but <strong>does not confirm if the book exists</strong>.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>The <strong>check digit</strong> calculation uses modulo 11 with decreasing weights:</p><ul><li><strong>1. Take the first 9 digits</strong>.</li><li><strong>2. Multiply each one</strong> by its position in reverse: first ×10, second ×9, ..., ninth ×2.</li><li><strong>3. Sum all results</strong>.</li><li><strong>4. Calculate</strong> <code>sum % 11</code>.</li><li><strong>5. The check digit must make</strong> <code>(sum + check) % 11 = 0</code>. If calculated check is 10, it's represented as <strong>X</strong>.</li></ul><p>Example with <code>0-306-40615-2</code>:</p><ul><li>Digits: <code>0 3 0 6 4 0 6 1 5</code></li><li>Multiply: <code>0×10 + 3×9 + 0×8 + 6×7 + 4×6 + 0×5 + 6×4 + 1×3 + 5×2 = 0+27+0+42+24+0+24+3+10 = 130</code></li><li>Expected check: <code>11 - (130 % 11) = 11 - 9 = 2</code> ✓</li></ul><p>Example with <code>0-19-852663-X</code>:</p><ul><li>Calculation produces 10 → Represented as <strong>X</strong> ✓</li></ul>"
      },
      {
        "h2": "When and why to validate ISBN-10",
        "html": "<p>ISBN-10 validation is useful in several contexts:</p><ul><li><strong>Library systems</strong>: Cataloging old books. Many libraries still manage ISBN-10 in their legacy databases.</li><li><strong>Used book commerce</strong>: Platforms like Amazon, eBay, or AbeBooks allow searching by ISBN-10.</li><li><strong>Publisher databases</strong>: Publishers with historical catalogs need to validate old ISBNs when migrating systems.</li><li><strong>Book search APIs</strong>: Google Books API, Open Library, and WorldCat accept ISBN-10.</li></ul><p>Doing validation <strong>before querying external APIs</strong> prevents useless requests. Many services reject invalid ISBNs with 400 error. Client-side validation improves UX in search engines and inventory entry forms.</p><p>Note: If you have an ISBN-13 starting with <code>978</code>, you can convert it to ISBN-10 by removing the prefix and recalculating the check digit.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator <strong>does not verify</strong>:</p><ul><li>If the book <strong>exists in any catalog</strong> (WorldCat, Google Books, etc.).</li><li>If it's <strong>available, out of print, or out of stock</strong>.</li><li>If metadata (title, author, publisher) are correct.</li><li>If the ISBN was officially assigned by an ISBN agency.</li></ul><p><strong>Common implementation mistakes:</strong></p><ul><li><strong>Not supporting uppercase/lowercase X</strong>: Always normalize to uppercase before validating.</li><li><strong>Rejecting hyphens or spaces</strong>: Users type <code>0-306-40615-2</code>, <code>0 306 40615 2</code>, or <code>0306406152</code>. You should accept all.</li><li><strong>Confusing ISBN-10 with ISBN-13</strong>: If input has 13 digits, use the ISBN-13 validator.</li><li><strong>Not validating X can only be at the end</strong>: X is only valid as the last character.</li></ul><p>To <strong>search book information</strong>, use APIs like:</p><ul><li>Google Books API: <code>https://www.googleapis.com/books/v1/volumes?q=isbn:0306406152</code></li><li>Open Library: <code>https://openlibrary.org/api/books?bibkeys=ISBN:0306406152</code></li></ul>"
      }
    ],
    "faq": [
      {
        "q": "What does the X in ISBN-10 mean?",
        "a": "X represents the value 10 in the modulo 11 algorithm. It's only valid as the last character (check digit)."
      },
      {
        "q": "Does this validator search the book on Google or Amazon?",
        "a": "No. It only verifies the checksum is correct. To search the book, use Google Books API, Open Library, or the publisher's website."
      },
      {
        "q": "Can I convert an ISBN-13 to ISBN-10?",
        "a": "Yes, if the ISBN-13 starts with 978. Remove the 978 prefix and last digit, then recalculate the check digit with the ISBN-10 algorithm."
      },
      {
        "q": "Do new books use ISBN-10?",
        "a": "No. Since 2007 all new books use ISBN-13. ISBN-10 is only used for books published before that date or conversions of old ISBNs."
      }
    ],
    "relatedSlugs": [
      "book-title-generator",
      "random-number-generator"
    ]
  }
};
