import type { ValidatorEntry } from './types';

export const entry: ValidatorEntry = {
  "id": "isbn-13",
  "slug": {
    "es": "validador-isbn-13",
    "en": "isbn-13-validator"
  },
  "emoji": "📘",
  "category": "data",
  "es": {
    "pageTitle": "Validador de ISBN-13 | Genfy",
    "metaDesc": "Validá códigos ISBN-13 de libros (desde 2007) con el algoritmo módulo 10. Compatible con EAN-13. Gratis para editoriales y librerías.",
    "h1": "Validador de ISBN-13",
    "intro": "Verificá si un ISBN de 13 dígitos (libros desde 2007) es válido. Compatible con códigos de barras EAN-13.",
    "tag": "Datos",
    "inputLabel": "Ingresá un ISBN-13",
    "placeholder": "978-3-16-148410-0",
    "validateLabel": "Validar",
    "validLabel": "Válido",
    "invalidLabel": "Inválido",
    "examples": [
      {
        "label": "ISBN-13 válido",
        "value": "978-3-16-148410-0"
      },
      {
        "label": "Sin guiones",
        "value": "9783161484100"
      },
      {
        "label": "Otro válido",
        "value": "978-0-306-40615-7"
      },
      {
        "label": "Inválido",
        "value": "978-3-16-148410-1"
      }
    ],
    "reasons": {
      "must-be-13-digits": "Debe tener 13 dígitos",
      "checksum-fail": "El checksum no coincide"
    },
    "body": [
      {
        "h2": "¿Qué es el ISBN-13?",
        "html": "<p>El <strong>ISBN-13</strong> (International Standard Book Number, 13 dígitos) es el sistema global de identificación de libros vigente desde 2007. Reemplazó al ISBN-10 y es compatible con el estándar <strong>EAN-13</strong> (European Article Number) usado en códigos de barras de productos.</p><p>Todos los ISBN-13 de libros empiezan con el prefijo <strong>978</strong> (Bookland) o <strong>979</strong>. La estructura es:</p><ul><li><strong>978/979</strong>: Prefijo GS1 (identifica que es un libro)</li><li><strong>Grupo lingüístico</strong>: País o idioma (ej: 0/1 inglés, 84 España, 987 Argentina)</li><li><strong>Editor</strong>: Identificador de la editorial</li><li><strong>Título</strong>: Identificador del libro específico</li><li><strong>Dígito de control</strong>: Checksum calculado con módulo 10</li></ul><p>Este validador verifica el checksum pero <strong>no confirma si el libro existe</strong> en catálogos comerciales.</p>"
      },
      {
        "h2": "Cómo funciona el algoritmo de validación",
        "html": "<p>El cálculo del <strong>dígito de control</strong> usa módulo 10 con pesos alternados:</p><ul><li><strong>1. Tomar los primeros 12 dígitos</strong>.</li><li><strong>2. Multiplicar alternativamente</strong> por 1 y 3: el primer dígito ×1, el segundo ×3, el tercero ×1, etc.</li><li><strong>3. Sumar todos los resultados</strong>.</li><li><strong>4. Calcular</strong> <code>(10 - (suma % 10)) % 10</code>.</li><li><strong>5. El resultado debe coincidir</strong> con el último dígito del ISBN-13.</li></ul><p>Ejemplo con <code>978-3-16-148410-0</code>:</p><ul><li>Dígitos: <code>9 7 8 3 1 6 1 4 8 4 1 0</code></li><li>Multiplicar: <code>9×1 + 7×3 + 8×1 + 3×3 + 1×1 + 6×3 + 1×1 + 4×3 + 8×1 + 4×3 + 1×1 + 0×3</code></li><li>Suma: <code>9+21+8+9+1+18+1+12+8+12+1+0 = 100</code></li><li>Control: <code>(10 - (100 % 10)) % 10 = (10 - 0) % 10 = 0</code> ✓</li></ul><p>Otro ejemplo con <code>978-0-306-40615-7</code>:</p><ul><li>Suma: 100, control esperado 7 (después del cálculo completo) ✓</li></ul>"
      },
      {
        "h2": "Cuándo y por qué validar ISBN-13",
        "html": "<p>La validación de ISBN-13 es esencial en:</p><ul><li><strong>Librerías y e-commerce</strong>: Verificar códigos antes de buscar en inventario o APIs de distribuidores.</li><li><strong>Sistemas de punto de venta (POS)</strong>: Al escanear códigos de barras de libros (EAN-13 = ISBN-13).</li><li><strong>Plataformas de autopublicación</strong>: Amazon KDP, Lulu, etc., requieren ISBN-13 válidos para vender internacionalmente.</li><li><strong>Bibliotecas y catálogos</strong>: Migración de ISBN-10 a ISBN-13 en bases de datos legacy.</li><li><strong>APIs de búsqueda de libros</strong>: Google Books, Open Library, Goodreads, etc., aceptan ISBN-13 como identificador único.</li></ul><p>Validar <strong>antes de llamar a APIs externas</strong> reduce costos (algunos servicios cobran por request) y mejora UX al dar feedback inmediato en formularios de búsqueda o inventario.</p><p>Los lectores de códigos de barras retornan el ISBN-13 completo. Validarlo antes de procesar evita errores por escaneos sucios o parciales.</p>"
      },
      {
        "h2": "Limitaciones y errores comunes",
        "html": "<p>Este validador <strong>no verifica</strong>:</p><ul><li>Si el libro <strong>existe en WorldCat, Google Books o Amazon</strong>.</li><li>Si está <strong>disponible, agotado o descatalogado</strong>.</li><li>Si los metadatos (título, autor, editorial, precio) son correctos.</li><li>Si el ISBN fue oficialmente asignado por una agencia ISBN.</li></ul><p><strong>Errores frecuentes al implementar validación:</strong></p><ul><li><strong>Rechazar guiones o espacios</strong>: Los usuarios escriben <code>978-3-16-148410-0</code>, <code>978 3 16 148410 0</code> o <code>9783161484100</code>. Debes limpiar el input.</li><li><strong>Confundir con códigos EAN de otros productos</strong>: No todos los EAN-13 son ISBNs. Solo los que empiezan con 978 o 979 son libros.</li><li><strong>No validar largo exacto</strong>: Deben ser exactamente 13 dígitos (sin contar guiones).</li><li><strong>Asumir que todos los ISBN-13 empiezan con 978</strong>: Desde 2007 también se usan prefijos 979 (inicialmente 979-10 para Francia, ahora más países).</li></ul><p>Para <strong>buscar datos del libro</strong>:</p><ul><li>Google Books API: <code>https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100</code></li><li>Open Library: <code>https://openlibrary.org/api/books?bibkeys=ISBN:9783161484100</code></li><li>ISBNdb (requiere API key): <code>https://api2.isbndb.com/book/9783161484100</code></li></ul>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre ISBN-10 e ISBN-13?",
        "a": "ISBN-10 tiene 10 dígitos y se usó hasta 2006. ISBN-13 tiene 13 dígitos (prefijo 978/979 + ISBN-10 convertido) y es obligatorio desde 2007."
      },
      {
        "q": "¿Este validador busca el libro en Amazon o Google?",
        "a": "No. Solo verifica el checksum. Para buscar el libro, usá APIs de Google Books, Open Library, Goodreads o la web de la editorial."
      },
      {
        "q": "¿Puedo usar este validador para escanear códigos de barras?",
        "a": "Sí. Los códigos de barras de libros son EAN-13, que coinciden exactamente con el ISBN-13. Validá el número escaneado antes de procesarlo."
      },
      {
        "q": "¿Todos los ISBN-13 empiezan con 978?",
        "a": "La mayoría sí, pero también existen ISBNs que empiezan con 979 (introducidos cuando el rango 978 se estaba agotando)."
      }
    ],
    "relatedSlugs": [
      "generador-titulo-libro",
      "generador-titulo-ebook"
    ]
  },
  "en": {
    "pageTitle": "ISBN-13 validator | Genfy",
    "metaDesc": "Validate ISBN-13 book codes (since 2007) with the modulo 10 algorithm. Compatible with EAN-13. Free for publishers and bookstores.",
    "h1": "ISBN-13 validator",
    "intro": "Verify if a 13-digit ISBN (books since 2007) is valid. Compatible with EAN-13 barcodes.",
    "tag": "Data",
    "inputLabel": "Enter an ISBN-13",
    "placeholder": "978-3-16-148410-0",
    "validateLabel": "Validate",
    "validLabel": "Valid",
    "invalidLabel": "Invalid",
    "examples": [
      {
        "label": "Valid ISBN-13",
        "value": "978-3-16-148410-0"
      },
      {
        "label": "Without hyphens",
        "value": "9783161484100"
      },
      {
        "label": "Another valid",
        "value": "978-0-306-40615-7"
      },
      {
        "label": "Invalid",
        "value": "978-3-16-148410-1"
      }
    ],
    "reasons": {
      "must-be-13-digits": "Must be 13 digits",
      "checksum-fail": "Checksum does not match"
    },
    "body": [
      {
        "h2": "What is ISBN-13?",
        "html": "<p>The <strong>ISBN-13</strong> (International Standard Book Number, 13 digits) is the global book identification system in effect since 2007. It replaced ISBN-10 and is compatible with the <strong>EAN-13</strong> (European Article Number) standard used in product barcodes.</p><p>All book ISBN-13s start with prefix <strong>978</strong> (Bookland) or <strong>979</strong>. The structure is:</p><ul><li><strong>978/979</strong>: GS1 prefix (identifies it's a book)</li><li><strong>Language group</strong>: Country or language (e.g., 0/1 English, 84 Spain, 987 Argentina)</li><li><strong>Publisher</strong>: Publisher identifier</li><li><strong>Title</strong>: Specific book identifier</li><li><strong>Check digit</strong>: Checksum calculated with modulo 10</li></ul><p>This validator verifies the checksum but <strong>does not confirm if the book exists</strong> in commercial catalogs.</p>"
      },
      {
        "h2": "How the validation algorithm works",
        "html": "<p>The <strong>check digit</strong> calculation uses modulo 10 with alternating weights:</p><ul><li><strong>1. Take the first 12 digits</strong>.</li><li><strong>2. Multiply alternately</strong> by 1 and 3: first digit ×1, second ×3, third ×1, etc.</li><li><strong>3. Sum all results</strong>.</li><li><strong>4. Calculate</strong> <code>(10 - (sum % 10)) % 10</code>.</li><li><strong>5. The result must match</strong> the last digit of the ISBN-13.</li></ul><p>Example with <code>978-3-16-148410-0</code>:</p><ul><li>Digits: <code>9 7 8 3 1 6 1 4 8 4 1 0</code></li><li>Multiply: <code>9×1 + 7×3 + 8×1 + 3×3 + 1×1 + 6×3 + 1×1 + 4×3 + 8×1 + 4×3 + 1×1 + 0×3</code></li><li>Sum: <code>9+21+8+9+1+18+1+12+8+12+1+0 = 100</code></li><li>Check: <code>(10 - (100 % 10)) % 10 = (10 - 0) % 10 = 0</code> ✓</li></ul><p>Another example with <code>978-0-306-40615-7</code>:</p><ul><li>Sum: 100, expected check 7 (after full calculation) ✓</li></ul>"
      },
      {
        "h2": "When and why to validate ISBN-13",
        "html": "<p>ISBN-13 validation is essential in:</p><ul><li><strong>Bookstores and e-commerce</strong>: Verify codes before searching inventory or distributor APIs.</li><li><strong>Point of sale (POS) systems</strong>: When scanning book barcodes (EAN-13 = ISBN-13).</li><li><strong>Self-publishing platforms</strong>: Amazon KDP, Lulu, etc., require valid ISBN-13s to sell internationally.</li><li><strong>Libraries and catalogs</strong>: Migrating ISBN-10 to ISBN-13 in legacy databases.</li><li><strong>Book search APIs</strong>: Google Books, Open Library, Goodreads, etc., accept ISBN-13 as unique identifier.</li></ul><p>Validating <strong>before calling external APIs</strong> reduces costs (some services charge per request) and improves UX by providing immediate feedback in search or inventory forms.</p><p>Barcode scanners return the full ISBN-13. Validating it before processing prevents errors from dirty or partial scans.</p>"
      },
      {
        "h2": "Limitations and common mistakes",
        "html": "<p>This validator <strong>does not verify</strong>:</p><ul><li>If the book <strong>exists in WorldCat, Google Books, or Amazon</strong>.</li><li>If it's <strong>available, out of stock, or out of print</strong>.</li><li>If metadata (title, author, publisher, price) are correct.</li><li>If the ISBN was officially assigned by an ISBN agency.</li></ul><p><strong>Common implementation mistakes:</strong></p><ul><li><strong>Rejecting hyphens or spaces</strong>: Users type <code>978-3-16-148410-0</code>, <code>978 3 16 148410 0</code>, or <code>9783161484100</code>. You should sanitize input.</li><li><strong>Confusing with EAN codes of other products</strong>: Not all EAN-13s are ISBNs. Only those starting with 978 or 979 are books.</li><li><strong>Not validating exact length</strong>: Must be exactly 13 digits (excluding hyphens).</li><li><strong>Assuming all ISBN-13s start with 978</strong>: Since 2007, prefixes 979 are also used (initially 979-10 for France, now more countries).</li></ul><p>To <strong>search book data</strong>:</p><ul><li>Google Books API: <code>https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100</code></li><li>Open Library: <code>https://openlibrary.org/api/books?bibkeys=ISBN:9783161484100</code></li><li>ISBNdb (requires API key): <code>https://api2.isbndb.com/book/9783161484100</code></li></ul>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between ISBN-10 and ISBN-13?",
        "a": "ISBN-10 has 10 digits and was used until 2006. ISBN-13 has 13 digits (prefix 978/979 + converted ISBN-10) and has been mandatory since 2007."
      },
      {
        "q": "Does this validator search the book on Amazon or Google?",
        "a": "No. It only verifies the checksum. To search the book, use Google Books API, Open Library, Goodreads, or the publisher's website."
      },
      {
        "q": "Can I use this validator to scan barcodes?",
        "a": "Yes. Book barcodes are EAN-13, which exactly match ISBN-13. Validate the scanned number before processing it."
      },
      {
        "q": "Do all ISBN-13s start with 978?",
        "a": "Most do, but ISBNs starting with 979 also exist (introduced when the 978 range was running out)."
      }
    ],
    "relatedSlugs": [
      "book-title-generator",
      "ebook-title-generator"
    ]
  }
};
