import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-datos-de-tarjeta-luhn",
    "en": "luhn-valid-card-generator"
  },
  "category": "data",
  "emoji": "💳",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Tarjetas Válidas Luhn (Testing) | Genfy",
    "metaDesc": "Generá números de tarjeta de prueba que pasan validación Luhn (sin valor real). Para testing de checkout, validadores y formularios de pago en desarrollo.",
    "h1": "Generador de Tarjetas Válidas Luhn",
    "intro": "Obtené números de tarjeta sintéticos que pasan algoritmo Luhn para testear formularios y checkouts en desarrollo. Sin valor real, solo para QA y validación.",
    "tag": "Datos",
    "filterLabel": "Tipo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar tarjetas",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "visa",
        "label": "Visa (test)",
        "items": [
          "4111 1111 1111 1111 (Visa estándar - test universal Stripe)",
          "4242 4242 4242 4242 (Visa - prefijo común en docs Stripe)",
          "4012 8888 8888 1881 (Visa Classic - sandbox PayPal)",
          "4222 2222 2222 22 (Visa 13 dígitos - legacy)",
          "4485 8228 5454 7654 (Visa - testing genérico)",
          "4716 9719 0000 0001 (Visa - declined card test)",
          "4000 0000 0000 0002 (Visa - card_declined Stripe)",
          "4000 0000 0000 9995 (Visa - insufficient_funds)",
          "4000 0000 0000 0069 (Visa - expired_card)",
          "4000 0000 0000 0127 (Visa - incorrect_cvc)",
          "4000 0000 0000 0119 (Visa - processing_error)",
          "4000 0027 6000 3184 (Visa - 3D Secure required)",
          "4000 0025 0000 3155 (Visa - 3D Secure 2 authentication)",
          "4000 0084 0000 1629 (Visa - charge succeeds, refund fails)",
          "4111 1111 1111 1111 (Visa - clásico testing)",
          "4242 4242 4242 4243 (Visa - inválido para test negativo)",
          "4929 0000 0000 0001 (Visa - emisor UK)",
          "4571 0000 0000 0001 (Visa Argentina - testing)",
          "4509 0000 0000 0001 (Visa - emisor Latam)",
          "4017 0000 0000 0007 (Visa - testing internacional)",
          "4138 0000 0000 0001 (Visa - issuer Brasil)",
          "4622 9430 0123 4567 (Visa Electron - testing)",
          "4012 0010 3714 1112 (Visa - test corporativo)",
          "4263 9826 4026 9299 (Visa Platinum - sandbox)",
          "4035 5010 0000 0008 (Visa - International)",
          "4716 4419 1532 4564 (Visa - testing random válido)",
          "4929 8742 3567 1239 (Visa - válido formato)",
          "4485 7234 5678 9012 (Visa - generador Luhn)",
          "4716 1234 5678 9010 (Visa - test ambiente sandbox)"
        ]
      },
      {
        "id": "mastercard",
        "label": "Mastercard (test)",
        "items": [
          "5555 5555 5555 4444 (Mastercard - test universal Stripe)",
          "5105 1051 0510 5100 (Mastercard - sandbox PayPal)",
          "5200 8282 8282 8210 (Mastercard - debit testing)",
          "2223 0031 2200 3222 (Mastercard 2-series - nuevo BIN)",
          "5424 0000 0000 0015 (Mastercard - test JCB compatible)",
          "5500 0000 0000 0004 (Mastercard - sandbox Worldpay)",
          "5454 5454 5454 5454 (Mastercard - clásico ambiente test)",
          "5011 0000 0000 0001 (Mastercard - emisor LATAM)",
          "2221 0000 0000 0009 (Mastercard 2-series - testing)",
          "5418 7000 0000 0001 (Mastercard Argentina - sandbox)",
          "5031 7557 3453 0604 (Mastercard - issuer Brasil)",
          "5499 7400 0000 0057 (Mastercard - corporate testing)",
          "5577 0000 5577 0004 (Mastercard - debit europeo)",
          "5350 5400 0050 0007 (Mastercard - test España)",
          "5466 1000 0000 0001 (Mastercard Electronic - testing)",
          "5454 5400 0000 0008 (Mastercard - World Elite)",
          "5404 0000 0000 0008 (Mastercard - prepaid testing)",
          "5223 4567 8901 2345 (Mastercard - generador Luhn válido)",
          "5111 0000 0000 0002 (Mastercard - test Netherlands)",
          "5555 5555 5555 4477 (Mastercard - test variant)",
          "5300 0000 0000 0006 (Mastercard - 3D Secure required)",
          "5234 5678 9012 3456 (Mastercard - random Luhn válido)",
          "5454 7800 0000 0003 (Mastercard Maestro - testing)",
          "5234 0000 0000 0001 (Mastercard - emisor JP)",
          "5066 9911 1111 1118 (Mastercard - emisor LATAM)",
          "5588 0000 5588 0008 (Mastercard - debit testing)",
          "5151 5151 5151 5151 (Mastercard - simple testing)",
          "5267 7345 8923 4567 (Mastercard - generador random)",
          "5678 9012 3456 7898 (Mastercard - testing válido)"
        ]
      },
      {
        "id": "amex",
        "label": "American Express (test)",
        "items": [
          "3782 822463 10005 (Amex - test universal)",
          "3714 496353 98431 (Amex - sandbox PayPal)",
          "3787 344936 71000 (Amex - testing genérico)",
          "3782 8224 6310 005 (Amex - 15 dígitos clásico)",
          "3714 4963 5398 431 (Amex - sandbox payments)",
          "3782 822463 10000 (Amex - placeholder testing)",
          "3437 5500 0000 010 (Amex - test internacional)",
          "3742 0000 0000 004 (Amex - corporate testing)",
          "3700 7716 7333 333 (Amex - JCB compatible)",
          "3499 6890 0000 003 (Amex - Argentina sandbox)",
          "3737 1234 5678 901 (Amex - Brasil testing)",
          "3458 5400 0000 005 (Amex - World Elite)",
          "3795 0000 0000 008 (Amex - Reserve testing)",
          "3793 0000 0000 005 (Amex - Platinum testing)",
          "3479 1234 5678 904 (Amex - Gold testing)",
          "3782 8224 6310 022 (Amex - secondary test)",
          "3411 9911 1111 117 (Amex - Mexico sandbox)",
          "3700 0000 0000 002 (Amex - declined test)",
          "3463 1234 5678 906 (Amex - random Luhn válido)",
          "3489 5678 9012 348 (Amex - generador random)",
          "3787 5678 9012 343 (Amex - sandbox 3DS)",
          "3489 0000 0000 002 (Amex - prepaid testing)",
          "3756 5678 9012 348 (Amex - corporate)",
          "3478 1234 5678 905 (Amex - testing válido)",
          "3411 5678 9012 348 (Amex - random válido)",
          "3782 1234 5678 901 (Amex - sandbox card)",
          "3479 5555 5555 555 (Amex - simple testing)",
          "3414 9876 5432 109 (Amex - reverse test)",
          "3437 0123 4567 890 (Amex - placeholder)"
        ]
      },
      {
        "id": "other",
        "label": "Otras (Discover/Diners/JCB)",
        "items": [
          "6011 1111 1111 1117 (Discover - test universal)",
          "6011 0009 9013 9424 (Discover - sandbox)",
          "6011 0000 0000 0004 (Discover - declined test)",
          "3056 9309 0259 04 (Diners Club - test)",
          "3852 0000 0232 37 (Diners Club International - testing)",
          "3622 7206 27713 (Diners Club - corporate)",
          "3530 1113 3330 0000 (JCB - test universal)",
          "3566 0020 2036 0505 (JCB - sandbox payments)",
          "6304 0000 0000 0009 (Maestro - test internacional)",
          "5018 1234 5678 9010 (Maestro - sandbox)",
          "6759 6498 2643 8453 (Maestro - testing UK)",
          "6011 6011 6011 6611 (Discover - testing válido)",
          "6011 0000 0000 0012 (Discover - 3D Secure)",
          "5641 8200 0000 0005 (Maestro - emisor Brasil)",
          "5018 7563 4581 2342 (Maestro - random Luhn)",
          "3543 5678 9012 3456 (JCB - random testing)",
          "6011 1234 5678 9010 (Discover - random Luhn)",
          "3543 1234 5678 9010 (JCB - sandbox testing)",
          "6011 0009 0000 0001 (Discover - testing genérico)",
          "3622 1234 5678 90 (Diners - random Luhn)",
          "5500 0000 0000 0040 (Maestro - test ambiente)",
          "3543 0000 0000 0007 (JCB - testing válido)",
          "6011 0000 0000 0020 (Discover - sandbox Stripe)",
          "5641 8255 5544 4488 (Maestro - testing válido)",
          "3543 9876 5432 109 (JCB - reverse testing)",
          "6011 4488 8844 7766 (Discover - testing variant)",
          "3055 6688 1122 33 (Diners - testing válido)",
          "3543 1010 1010 1010 (JCB - simple testing)",
          "6011 7878 7878 7878 (Discover - simple testing)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo funciona el algoritmo de Luhn",
        "body": "<p>El <strong>algoritmo de Luhn</strong> (creado por Hans Peter Luhn en IBM, 1954) es una checksum simple que detecta errores de transcripción de un solo dígito o transposiciones de dígitos adyacentes. No es seguridad criptográfica: es validación básica de formato. El cálculo: empezando desde el último dígito, duplicá cada segundo dígito (si el resultado es mayor a 9, sumá los dígitos del resultado). Sumá todos los valores. Si el total es divisible por 10, el número es 'Luhn-válido'.</p><p>Por ejemplo, para 4532015112830366: empezamos del último (6=6), penúltimo se duplica (6×2=12, sumamos 1+2=3), siguiente queda igual (3=3), siguiente se duplica (0×2=0)... Sumá todos los procesados. El resultado debe terminar en 0. Cualquier número generado de esta forma pasa la validación de cualquier procesador. <em>Pero</em> pasar Luhn no significa que sea una tarjeta real con fondos: es solo el primer filtro de muchos.</p><p>El algoritmo cubre la primera línea de defensa: <strong>typos del usuario</strong>. Si tipea 4532015112830<em>3</em>66 en vez de 4532015112830<em>4</em>66, Luhn lo detecta antes de enviar la transacción al procesador. Esto ahorra requests innecesarios. Procesadores como Stripe ejecutan Luhn en frontend antes de llamar al backend. Pero recordá: pasar Luhn solo confirma estructura matemática, no validez bancaria real ni saldo disponible para cobro.</p>"
      },
      {
        "h2": "Tarjetas de testing oficiales: Stripe, PayPal y Adyen",
        "body": "<p>Cada procesador publica <strong>tarjetas oficiales para testing</strong>. Stripe documenta números como 4242 4242 4242 4242 (Visa éxito), 4000 0000 0000 0002 (declined), 4000 0027 6000 3184 (3D Secure required). Cada uno simula un escenario distinto: éxito, falla por fondos, falla por CVC, autenticación adicional. Usar las oficiales en sandbox garantiza comportamiento documentado predecible para testing automatizado de tu integración.</p><p>PayPal y Adyen tienen sus propios sets. La gracia es que <strong>en producción estas tarjetas no funcionan</strong>: están hardcoded en sandbox. Si por error subís código apuntando a producción usando 4242..., el cobro falla con tarjeta inválida. Esto es defensa anti-fraude: nadie puede 'predecir' tarjetas de prueba para cobrar realmente. Las testing solo viven en ambientes sandbox claramente marcados.</p><p>Para <strong>QA exhaustivo</strong> necesitás cubrir todos los escenarios: éxito, declined, expired, CVC incorrecto, 3DS requerido, fraud detection, partial capture, refund failure. Stripe documenta 30+ números cada uno con comportamiento específico. Tu suite de tests automatizados debería ejecutar el flow completo con cada uno y validar que tu UI muestra el mensaje correcto. Esto previene regresiones cuando actualizás SDK o cambiás validaciones del flujo de checkout.</p>"
      },
      {
        "h2": "PCI DSS y por qué los datos generados aquí son seguros",
        "body": "<p><strong>PCI DSS</strong> (Payment Card Industry Data Security Standard) regula cómo manejar datos reales de tarjetas. Almacenar números reales sin certificación es violación severa con multas en miles de dólares mensuales. Los datos generados con Luhn aquí <strong>no son tarjetas reales</strong>: pasan validación matemática pero no corresponden a cuentas bancarias existentes. No están emitidas, no tienen titular, no tienen fondos. Almacenarlas no genera obligaciones PCI.</p><p>Sin embargo, <strong>nunca uses estos números en producción ni los envíes a procesadores reales</strong>. Aunque pasen Luhn, los procesadores rechazan inmediatamente porque no encuentran emisor (BIN check). Si por error tu sistema en producción intenta cobrar con uno de estos, podés generar logs de transacciones rechazadas, alertas anti-fraude y bloqueos temporales de tu cuenta merchant. Mantené ambientes claramente separados: dev/staging usan estos, prod nunca.</p><p>El uso correcto: <strong>poblar formularios de testing</strong> donde necesitás validar formato visual, autocomplete, validaciones de longitud, deteción de tipo (Visa vs Amex). Tu validador frontend debería aceptar estos números como válidos formalmente. Tu backend en sandbox los procesa con respuesta simulada del procesador. En tests E2E automatizados, llenan campos sin tocar APIs reales. Para integración real con sandbox de procesador, usá los oficiales documentados.</p>"
      },
      {
        "h2": "Errores comunes en testing de pagos",
        "body": "<p>El error más caro es <strong>solo testear el happy path</strong>. El equipo prueba 'compra exitosa' y va a producción. Pero el 30% de transacciones reales fallan: declined, fondos insuficientes, CVC, expirada, 3DS timeout. Si tu UI no maneja cada error con mensaje claro, los usuarios abandonan el carrito. Listá los 10 errores más frecuentes del procesador y testeá cada flujo de error UI antes de ir a producción.</p><p>Otro error es <strong>no testear 3D Secure</strong>. Europa exige SCA (Strong Customer Authentication) bajo PSD2: la mayoría de transacciones requieren paso adicional de autenticación. Si tu integración no maneja el redirect a banco y vuelta, las compras fallan en silencio. Tarjetas como 4000 0027 6000 3184 (Stripe) simulan 3DS challenge. Validá que tu flujo soporta apertura de modal, espera de respuesta y manejo de timeout o cancelación del usuario.</p><p>El tercer error es <strong>testing solo con tarjetas país-base</strong>. Si tu app vende internacionalmente, tarjetas extranjeras tienen comportamientos distintos: comisiones de conversión, fraud rules más estrictas, declines por país de emisión. Stripe ofrece tarjetas etiquetadas por país (Reino Unido, Francia, Brasil). Testeá cada mercado prioritario. Una integración que funciona perfecto con tarjetas USA puede fallar el 50% con tarjetas argentinas por reglas anti-fraude del procesador real.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Estos números pueden usarse para hacer compras reales?",
        "a": "No. Pasan validación Luhn (algoritmo matemático) pero no corresponden a cuentas bancarias reales. Cualquier procesador rechaza inmediatamente al verificar BIN. Solo sirven para testing de formularios y flows de UI sin involucrar dinero real ni datos personales sensibles."
      },
      {
        "q": "¿Qué diferencia hay entre Luhn-válido y tarjeta real de sandbox?",
        "a": "Luhn-válido pasa solo verificación matemática local. Tarjeta de sandbox (como 4242... de Stripe) está registrada en el ambiente de testing del procesador con comportamiento simulado documentado. Para testing E2E real, usá las oficiales del procesador, no estas genéricas."
      },
      {
        "q": "¿Es legal usar estos números para testing?",
        "a": "Sí, son números sintéticos sin titular ni fondos asociados. No representan datos personales ni de tarjetas reales emitidas. Su uso es estándar en QA y desarrollo. PCI DSS no aplica porque no son datos reales que requieran protección bajo el estándar de la industria."
      },
      {
        "q": "¿Cómo verifico programáticamente si un número pasa Luhn?",
        "a": "Implementación simple en cualquier lenguaje: itera por dígitos desde el final, duplicá pares (sumando dígitos si superan 9), sumá total, verificá módulo 10. Librerías como card-validator (JS) o python-stdnum lo hacen out-of-the-box con tipo de tarjeta detectado automáticamente."
      }
    ]
  },
  "en": {
    "pageTitle": "Luhn-Valid Card Number Generator (Testing) | Genfy",
    "metaDesc": "Generate test card numbers that pass Luhn validation (no real value). For checkout testing, validators, and payment forms in development.",
    "h1": "Luhn-Valid Card Generator",
    "intro": "Get synthetic card numbers that pass the Luhn algorithm to test forms and checkouts in development. No real value, only for QA and validation.",
    "tag": "Data",
    "filterLabel": "Type",
    "countLabel": "Amount",
    "generateLabel": "Generate cards",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "visa",
        "label": "Visa (test)",
        "items": [
          "4111 1111 1111 1111 (Visa standard - universal Stripe test)",
          "4242 4242 4242 4242 (Visa - common prefix in Stripe docs)",
          "4012 8888 8888 1881 (Visa Classic - PayPal sandbox)",
          "4222 2222 2222 22 (Visa 13 digits - legacy)",
          "4485 8228 5454 7654 (Visa - generic testing)",
          "4716 9719 0000 0001 (Visa - declined card test)",
          "4000 0000 0000 0002 (Visa - card_declined Stripe)",
          "4000 0000 0000 9995 (Visa - insufficient_funds)",
          "4000 0000 0000 0069 (Visa - expired_card)",
          "4000 0000 0000 0127 (Visa - incorrect_cvc)",
          "4000 0000 0000 0119 (Visa - processing_error)",
          "4000 0027 6000 3184 (Visa - 3D Secure required)",
          "4000 0025 0000 3155 (Visa - 3D Secure 2 authentication)",
          "4000 0084 0000 1629 (Visa - charge succeeds, refund fails)",
          "4111 1111 1111 1111 (Visa - classic testing)",
          "4242 4242 4242 4243 (Visa - invalid for negative test)",
          "4929 0000 0000 0001 (Visa - UK issuer)",
          "4571 0000 0000 0001 (Visa Argentina - testing)",
          "4509 0000 0000 0001 (Visa - LATAM issuer)",
          "4017 0000 0000 0007 (Visa - international testing)",
          "4138 0000 0000 0001 (Visa - Brazil issuer)",
          "4622 9430 0123 4567 (Visa Electron - testing)",
          "4012 0010 3714 1112 (Visa - corporate test)",
          "4263 9826 4026 9299 (Visa Platinum - sandbox)",
          "4035 5010 0000 0008 (Visa - International)",
          "4716 4419 1532 4564 (Visa - random valid testing)",
          "4929 8742 3567 1239 (Visa - format valid)",
          "4485 7234 5678 9012 (Visa - Luhn generator)",
          "4716 1234 5678 9010 (Visa - sandbox environment test)"
        ]
      },
      {
        "id": "mastercard",
        "label": "Mastercard (test)",
        "items": [
          "5555 5555 5555 4444 (Mastercard - universal Stripe test)",
          "5105 1051 0510 5100 (Mastercard - PayPal sandbox)",
          "5200 8282 8282 8210 (Mastercard - debit testing)",
          "2223 0031 2200 3222 (Mastercard 2-series - new BIN)",
          "5424 0000 0000 0015 (Mastercard - JCB compatible test)",
          "5500 0000 0000 0004 (Mastercard - Worldpay sandbox)",
          "5454 5454 5454 5454 (Mastercard - classic test environment)",
          "5011 0000 0000 0001 (Mastercard - LATAM issuer)",
          "2221 0000 0000 0009 (Mastercard 2-series - testing)",
          "5418 7000 0000 0001 (Mastercard Argentina - sandbox)",
          "5031 7557 3453 0604 (Mastercard - Brazil issuer)",
          "5499 7400 0000 0057 (Mastercard - corporate testing)",
          "5577 0000 5577 0004 (Mastercard - European debit)",
          "5350 5400 0050 0007 (Mastercard - Spain test)",
          "5466 1000 0000 0001 (Mastercard Electronic - testing)",
          "5454 5400 0000 0008 (Mastercard - World Elite)",
          "5404 0000 0000 0008 (Mastercard - prepaid testing)",
          "5223 4567 8901 2345 (Mastercard - Luhn valid generator)",
          "5111 0000 0000 0002 (Mastercard - Netherlands test)",
          "5555 5555 5555 4477 (Mastercard - test variant)",
          "5300 0000 0000 0006 (Mastercard - 3D Secure required)",
          "5234 5678 9012 3456 (Mastercard - random Luhn valid)",
          "5454 7800 0000 0003 (Mastercard Maestro - testing)",
          "5234 0000 0000 0001 (Mastercard - JP issuer)",
          "5066 9911 1111 1118 (Mastercard - LATAM issuer)",
          "5588 0000 5588 0008 (Mastercard - debit testing)",
          "5151 5151 5151 5151 (Mastercard - simple testing)",
          "5267 7345 8923 4567 (Mastercard - random generator)",
          "5678 9012 3456 7898 (Mastercard - valid testing)"
        ]
      },
      {
        "id": "amex",
        "label": "American Express (test)",
        "items": [
          "3782 822463 10005 (Amex - universal test)",
          "3714 496353 98431 (Amex - PayPal sandbox)",
          "3787 344936 71000 (Amex - generic testing)",
          "3782 8224 6310 005 (Amex - 15 digits classic)",
          "3714 4963 5398 431 (Amex - sandbox payments)",
          "3782 822463 10000 (Amex - testing placeholder)",
          "3437 5500 0000 010 (Amex - international test)",
          "3742 0000 0000 004 (Amex - corporate testing)",
          "3700 7716 7333 333 (Amex - JCB compatible)",
          "3499 6890 0000 003 (Amex - Argentina sandbox)",
          "3737 1234 5678 901 (Amex - Brazil testing)",
          "3458 5400 0000 005 (Amex - World Elite)",
          "3795 0000 0000 008 (Amex - Reserve testing)",
          "3793 0000 0000 005 (Amex - Platinum testing)",
          "3479 1234 5678 904 (Amex - Gold testing)",
          "3782 8224 6310 022 (Amex - secondary test)",
          "3411 9911 1111 117 (Amex - Mexico sandbox)",
          "3700 0000 0000 002 (Amex - declined test)",
          "3463 1234 5678 906 (Amex - random Luhn valid)",
          "3489 5678 9012 348 (Amex - random generator)",
          "3787 5678 9012 343 (Amex - sandbox 3DS)",
          "3489 0000 0000 002 (Amex - prepaid testing)",
          "3756 5678 9012 348 (Amex - corporate)",
          "3478 1234 5678 905 (Amex - valid testing)",
          "3411 5678 9012 348 (Amex - random valid)",
          "3782 1234 5678 901 (Amex - sandbox card)",
          "3479 5555 5555 555 (Amex - simple testing)",
          "3414 9876 5432 109 (Amex - reverse test)",
          "3437 0123 4567 890 (Amex - placeholder)"
        ]
      },
      {
        "id": "other",
        "label": "Others (Discover/Diners/JCB)",
        "items": [
          "6011 1111 1111 1117 (Discover - universal test)",
          "6011 0009 9013 9424 (Discover - sandbox)",
          "6011 0000 0000 0004 (Discover - declined test)",
          "3056 9309 0259 04 (Diners Club - test)",
          "3852 0000 0232 37 (Diners Club International - testing)",
          "3622 7206 27713 (Diners Club - corporate)",
          "3530 1113 3330 0000 (JCB - universal test)",
          "3566 0020 2036 0505 (JCB - sandbox payments)",
          "6304 0000 0000 0009 (Maestro - international test)",
          "5018 1234 5678 9010 (Maestro - sandbox)",
          "6759 6498 2643 8453 (Maestro - UK testing)",
          "6011 6011 6011 6611 (Discover - valid testing)",
          "6011 0000 0000 0012 (Discover - 3D Secure)",
          "5641 8200 0000 0005 (Maestro - Brazil issuer)",
          "5018 7563 4581 2342 (Maestro - random Luhn)",
          "3543 5678 9012 3456 (JCB - random testing)",
          "6011 1234 5678 9010 (Discover - random Luhn)",
          "3543 1234 5678 9010 (JCB - sandbox testing)",
          "6011 0009 0000 0001 (Discover - generic testing)",
          "3622 1234 5678 90 (Diners - random Luhn)",
          "5500 0000 0000 0040 (Maestro - test environment)",
          "3543 0000 0000 0007 (JCB - valid testing)",
          "6011 0000 0000 0020 (Discover - Stripe sandbox)",
          "5641 8255 5544 4488 (Maestro - valid testing)",
          "3543 9876 5432 109 (JCB - reverse testing)",
          "6011 4488 8844 7766 (Discover - testing variant)",
          "3055 6688 1122 33 (Diners - valid testing)",
          "3543 1010 1010 1010 (JCB - simple testing)",
          "6011 7878 7878 7878 (Discover - simple testing)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How the Luhn algorithm works",
        "body": "<p>The <strong>Luhn algorithm</strong> (created by Hans Peter Luhn at IBM, 1954) is a simple checksum that detects single-digit transcription errors or transpositions of adjacent digits. It's not cryptographic security: it's basic format validation. The calculation: starting from the last digit, double every second digit (if the result is greater than 9, sum the digits of the result). Add all values. If the total is divisible by 10, the number is 'Luhn-valid'.</p><p>For example, for 4532015112830366: we start from the last (6=6), the second-to-last is doubled (6×2=12, we sum 1+2=3), the next stays the same (3=3), the next is doubled (0×2=0)... Sum all processed. The result must end in 0. Any number generated this way passes any processor's validation. <em>But</em> passing Luhn doesn't mean it's a real card with funds: it's just the first filter of many.</p><p>The algorithm covers the first line of defense: <strong>user typos</strong>. If they type 4532015112830<em>3</em>66 instead of 4532015112830<em>4</em>66, Luhn detects it before sending the transaction to the processor. This saves unnecessary requests. Processors like Stripe execute Luhn in frontend before calling the backend. But remember: passing Luhn only confirms mathematical structure, not real banking validity or available balance for charging.</p>"
      },
      {
        "h2": "Official testing cards: Stripe, PayPal, and Adyen",
        "body": "<p>Each processor publishes <strong>official cards for testing</strong>. Stripe documents numbers like 4242 4242 4242 4242 (Visa success), 4000 0000 0000 0002 (declined), 4000 0027 6000 3184 (3D Secure required). Each simulates a different scenario: success, failure due to funds, CVC failure, additional authentication. Using the official ones in sandbox guarantees predictable documented behavior for automated testing of your integration.</p><p>PayPal and Adyen have their own sets. The catch is that <strong>in production these cards don't work</strong>: they're hardcoded in sandbox. If by mistake you push code pointing to production using 4242..., the charge fails with invalid card. This is anti-fraud defense: nobody can 'predict' test cards to actually charge. Testing ones only live in clearly marked sandbox environments.</p><p>For <strong>exhaustive QA</strong> you need to cover all scenarios: success, declined, expired, incorrect CVC, 3DS required, fraud detection, partial capture, refund failure. Stripe documents 30+ numbers each with specific behavior. Your automated test suite should run the complete flow with each and validate that your UI shows the correct message. This prevents regressions when you update SDK or change checkout flow validations.</p>"
      },
      {
        "h2": "PCI DSS and why the data generated here is safe",
        "body": "<p><strong>PCI DSS</strong> (Payment Card Industry Data Security Standard) regulates how to handle real card data. Storing real numbers without certification is a severe violation with monthly fines in thousands of dollars. The data generated with Luhn here <strong>are not real cards</strong>: they pass mathematical validation but don't correspond to existing bank accounts. They're not issued, have no holder, have no funds. Storing them generates no PCI obligations.</p><p>However, <strong>never use these numbers in production or send them to real processors</strong>. Although they pass Luhn, processors immediately reject because they don't find issuer (BIN check). If by mistake your production system tries to charge with one of these, you can generate rejected transaction logs, anti-fraud alerts, and temporary blocks of your merchant account. Keep environments clearly separated: dev/staging use these, prod never.</p><p>The correct use: <strong>populate testing forms</strong> where you need to validate visual format, autocomplete, length validations, type detection (Visa vs Amex). Your frontend validator should accept these numbers as formally valid. Your backend in sandbox processes them with simulated processor response. In automated E2E tests, they fill fields without touching real APIs. For real integration with processor sandbox, use the official documented ones.</p>"
      },
      {
        "h2": "Common payment testing mistakes",
        "body": "<p>The most expensive mistake is <strong>only testing the happy path</strong>. The team tests 'successful purchase' and goes to production. But 30% of real transactions fail: declined, insufficient funds, CVC, expired, 3DS timeout. If your UI doesn't handle each error with a clear message, users abandon the cart. List the 10 most frequent processor errors and test each error UI flow before going to production.</p><p>Another mistake is <strong>not testing 3D Secure</strong>. Europe requires SCA (Strong Customer Authentication) under PSD2: most transactions require an additional authentication step. If your integration doesn't handle the bank redirect and return, purchases silently fail. Cards like 4000 0027 6000 3184 (Stripe) simulate 3DS challenge. Validate that your flow supports modal opening, response wait, and timeout or user cancellation handling.</p><p>The third mistake is <strong>testing only with home country cards</strong>. If your app sells internationally, foreign cards have different behaviors: conversion fees, stricter fraud rules, declines by issuing country. Stripe offers cards labeled by country (UK, France, Brazil). Test each priority market. An integration that works perfectly with US cards may fail 50% with Argentine cards due to anti-fraud rules of the real processor.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can these numbers be used for real purchases?",
        "a": "No. They pass Luhn validation (mathematical algorithm) but don't correspond to real bank accounts. Any processor immediately rejects when checking BIN. They only serve for testing forms and UI flows without involving real money or sensitive personal data."
      },
      {
        "q": "What's the difference between Luhn-valid and real sandbox card?",
        "a": "Luhn-valid only passes local mathematical verification. Sandbox card (like Stripe's 4242...) is registered in the processor's testing environment with documented simulated behavior. For real E2E testing, use the processor's official ones, not these generic ones."
      },
      {
        "q": "Is it legal to use these numbers for testing?",
        "a": "Yes, they're synthetic numbers without holder or associated funds. They don't represent personal data or real issued card data. Their use is standard in QA and development. PCI DSS doesn't apply because they're not real data requiring protection under the industry standard."
      },
      {
        "q": "How do I programmatically verify if a number passes Luhn?",
        "a": "Simple implementation in any language: iterate digits from end, double pairs (summing digits if exceeding 9), sum total, verify modulo 10. Libraries like card-validator (JS) or python-stdnum do it out-of-the-box with automatically detected card type."
      }
    ]
  }
};
