import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-datos-stripe-test",
    "en": "stripe-test-data-generator"
  },
  "category": "data",
  "emoji": "💳",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Datos de Prueba para Stripe | Genfy",
    "metaDesc": "Genera datos de prueba válidos para Stripe API: tarjetas, tokens, webhooks y casos edge. Acelera tu desarrollo sin usar datos reales de producción.",
    "h1": "Generador de Datos de Prueba para Stripe",
    "intro": "Creá datos de testing realistas para integrar Stripe sin tocar cuentas reales. Cubre casos de éxito, rechazos, 3D Secure y edge cases en segundos.",
    "tag": "Datos",
    "filterLabel": "Tipo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de Dato",
        "items": [
          "Tarjetas de Éxito",
          "Tarjetas de Error",
          "3D Secure",
          "Tokens de Test",
          "Customer IDs",
          "Payment Methods",
          "Webhooks",
          "Monedas y Montos"
        ]
      },
      {
        "id": "data",
        "label": "Datos",
        "items": [
          "4242424242424242 (Visa - éxito)",
          "4000002500003155 (Visa - requiere auth)",
          "4000000000009995 (Visa - declinada)",
          "5555555555554444 (Mastercard - éxito)",
          "4000002760003184 (3DS required)",
          "4000008260003178 (3DS optional)",
          "tok_visa (token genérico Visa)",
          "tok_mastercard (token Mastercard)",
          "tok_amex (token American Express)",
          "pm_card_visa (PaymentMethod Visa)",
          "pm_card_mastercard (PaymentMethod MC)",
          "cus_test123456789 (Customer ID test)",
          "ch_test123456789 (Charge ID test)",
          "pi_test123456789 (PaymentIntent ID)",
          "sub_test123456789 (Subscription ID)",
          "4000000000000077 (charge_exceeds_source_limit)",
          "4000000000009987 (lost_card)",
          "4000000000009979 (stolen_card)",
          "4000000000000069 (expired_card)",
          "4000000000000127 (incorrect_cvc)",
          "4000000000006975 (declined - generic)",
          "378282246310005 (Amex - éxito)",
          "6011111111111117 (Discover - éxito)",
          "3056930009020004 (Diners Club - éxito)",
          "5200828282828210 (Debit Mastercard)",
          "4000056655665556 (Debit Visa)",
          "4000002500001001 (insufficient_funds)",
          "4000008400001629 (3DS auth required)",
          "4000002760003184 (3DS redirect)",
          "pm_usBankAccount (ACH test)",
          "ba_test123456789 (Bank Account ID)",
          "src_test123456789 (Source ID test)",
          "invoice.payment_succeeded (webhook)",
          "charge.failed (webhook event)",
          "customer.subscription.deleted (webhook)",
          "payment_intent.succeeded (webhook)",
          "USD 1000 ($10.00)",
          "EUR 2000 (€20.00)",
          "GBP 1500 (£15.00)",
          "JPY 100000 (¥100,000)",
          "card_1234567890 (Card token)",
          "sk_test_51ABC... (Secret key format)",
          "pk_test_51ABC... (Publishable key)",
          "whsec_test123... (Webhook secret)",
          "4000000000000341 (attaching fails)",
          "4000000000009235 (processing error)",
          "rct_test123456789 (Refund ID)",
          "py_test123456789 (Payout ID)",
          "re_test123456789 (Review ID)",
          "fee_test123456789 (Fee ID)",
          "card_declined (error code)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de los datos de test de Stripe",
        "body": "<p>Stripe provee <strong>test card numbers</strong> específicos que simulan comportamientos reales sin tocar dinero. '4242424242424242' es el comodín de éxito: siempre funciona, útil para smoke tests. '4000000000009995' simula declinación genérica. La diferencia está en <strong>el dígito de control</strong>: Stripe lo valida con algoritmo Luhn, así que números random fallan.</p><p>Los <strong>tokens como 'tok_visa'</strong> son shortcuts para testing rápido en el dashboard de Stripe, pero en código real deberías usar Stripe.js para tokenizar. Los Payment Methods ('pm_card_visa') son la API moderna; los tokens son legacy pero todavía válidos para backward compatibility.</p><p>Los <strong>IDs de recursos</strong> (cus_, ch_, pi_) siguen patrones: prefijo + underscore + string alfanumérico. En test mode, cualquier string después del prefijo es válido ('cus_123', 'cus_fake') siempre que el prefijo coincida con el resource type. En producción, Stripe genera IDs reales de 24-28 caracteres.</p>"
      },
      {
        "h2": "Estrategia de testing: más allá del happy path",
        "body": "<p>El <strong>error más común</strong>: solo testear '4242424242424242' y asumir que todo funciona. Tu código debe manejar al menos 5 escenarios: éxito, declinación genérica, requires_action (3DS), processing error, insufficient funds. Cada uno retorna estructuras diferentes en la respuesta.</p><p>Para <strong>3D Secure (SCA)</strong>, usá '4000002760003184'. Este card number trigger el flujo completo: tu frontend debe mostrar el modal de auth, el usuario 'aprueba', y recién ahí el payment succeeds. Si tu test pasa sin modal, no implementaste SCA correctamente y fallarás en producción europea.</p><p>Los <strong>webhooks</strong> son el pain point #1. En local dev, usá Stripe CLI ('stripe listen --forward-to localhost:3000/webhook') para recibir eventos reales. Testeá idempotency: Stripe puede enviar el mismo webhook múltiples veces; tu endpoint debe ser idempotent (chequear 'event.id' antes de procesar).</p>"
      },
      {
        "h2": "Casos edge que rompen integraciones",
        "body": "<p><strong>Montos en decimales</strong>: Stripe usa integers, no floats. $10.00 = 1000 (en USD). Yen no tiene decimales, ¥1000 = 1000. Si pasás '10.00' como número, Stripe lo rechaza. La conversión correcta es: <code>Math.round(amount * 100)</code> para monedas con 2 decimales.</p><p><strong>Metadata limits</strong>: podés pasar hasta 50 keys de metadata, cada valor max 500 caracteres. Útil para tracking interno, pero si tratás de pasar un JSON gigante serializado, falla silenciosamente. Testeá con metadata excesivo para catchear este edge case.</p><p><strong>Webhooks out-of-order</strong>: podés recibir 'payment_intent.succeeded' ANTES que 'payment_intent.created'. Stripe no garantiza orden. Tu lógica debe ser stateless o checkear estado actual del recurso con un GET antes de procesar. Un bug clásico: asumir que 'created' siempre llega primero y setear flags que después no se actualizan.</p>"
      },
      {
        "h2": "Setup de entorno de test robusto",
        "body": "<p><strong>Separación de keys</strong>: usá variables de entorno distintas para test/prod. Pattern común: <code>STRIPE_SECRET_KEY</code> en prod, <code>STRIPE_TEST_SECRET_KEY</code> en dev. Nunca commitees las keys a git. Usá un .env local y gestión de secrets en producción (AWS Secrets Manager, Doppler, etc).</p><p>Para <strong>CI/CD</strong>, creá un Stripe test account separado (no uses tu account personal). Esto permite que múltiples devs y pipelines corran tests sin colisiones. Cada PR puede crear recursos efímeros (customers, subscriptions) que se limpian automáticamente después.</p><p><strong>Test data factories</strong>: en vez de hardcodear '4242424242424242' en cada test, creá helpers: <code>createSuccessfulCard()</code>, <code>createDeclinedCard()</code>, <code>create3DSCard()</code>. Esto centraliza los test data y facilita actualizarlos si Stripe cambia números. Ejemplo: cuando 3DS2 reemplazó 3DS1, solo tuviste que actualizar una función en vez de 50 tests.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar tarjetas de test en producción?",
        "a": "No. Los números de test solo funcionan con keys que empiezan en 'sk_test_' o 'pk_test_'. En producción con keys 'sk_live_', esas tarjetas son rechazadas automáticamente."
      },
      {
        "q": "¿Cómo testeo subscriptions recurrentes sin esperar un mes?",
        "a": "Usá el parámetro 'billing_cycle_anchor' para forzar fechas, o creá trial periods de 1 día. También podés usar Stripe CLI para simular el paso del tiempo: 'stripe trigger invoice.payment_succeeded'."
      },
      {
        "q": "¿Los webhooks de test llegan a mi localhost?",
        "a": "Solo con Stripe CLI. Instalá 'stripe-cli', corrés 'stripe listen --forward-to http://localhost:3000/webhook', y copiás el webhook secret que te da. Sin esto, los webhooks solo llegan a URLs públicas."
      },
      {
        "q": "¿Qué hago si mi test pasa en local pero falla en CI?",
        "a": "Probablemente timing issues con webhooks asíncronos. En CI, agregá delays o polling: después de crear un PaymentIntent, esperá 2-3 segundos o hacé GET hasta que el status cambie antes de assertear."
      }
    ]
  },
  "en": {
    "pageTitle": "Stripe Test Data Generator | Genfy",
    "metaDesc": "Generate valid test data for Stripe API: cards, tokens, webhooks and edge cases. Speed up your development without using real production data.",
    "h1": "Stripe Test Data Generator",
    "intro": "Create realistic testing data to integrate Stripe without touching real accounts. Cover success cases, declines, 3D Secure and edge cases in seconds.",
    "tag": "Data",
    "filterLabel": "Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Data Type",
        "items": [
          "Success Cards",
          "Error Cards",
          "3D Secure",
          "Test Tokens",
          "Customer IDs",
          "Payment Methods",
          "Webhooks",
          "Currencies & Amounts"
        ]
      },
      {
        "id": "data",
        "label": "Data",
        "items": [
          "4242424242424242 (Visa - success)",
          "4000002500003155 (Visa - requires auth)",
          "4000000000009995 (Visa - declined)",
          "5555555555554444 (Mastercard - success)",
          "4000002760003184 (3DS required)",
          "4000008260003178 (3DS optional)",
          "tok_visa (generic Visa token)",
          "tok_mastercard (Mastercard token)",
          "tok_amex (American Express token)",
          "pm_card_visa (PaymentMethod Visa)",
          "pm_card_mastercard (PaymentMethod MC)",
          "cus_test123456789 (Customer ID test)",
          "ch_test123456789 (Charge ID test)",
          "pi_test123456789 (PaymentIntent ID)",
          "sub_test123456789 (Subscription ID)",
          "4000000000000077 (charge_exceeds_source_limit)",
          "4000000000009987 (lost_card)",
          "4000000000009979 (stolen_card)",
          "4000000000000069 (expired_card)",
          "4000000000000127 (incorrect_cvc)",
          "4000000000006975 (declined - generic)",
          "378282246310005 (Amex - success)",
          "6011111111111117 (Discover - success)",
          "3056930009020004 (Diners Club - success)",
          "5200828282828210 (Debit Mastercard)",
          "4000056655665556 (Debit Visa)",
          "4000002500001001 (insufficient_funds)",
          "4000008400001629 (3DS auth required)",
          "4000002760003184 (3DS redirect)",
          "pm_usBankAccount (ACH test)",
          "ba_test123456789 (Bank Account ID)",
          "src_test123456789 (Source ID test)",
          "invoice.payment_succeeded (webhook)",
          "charge.failed (webhook event)",
          "customer.subscription.deleted (webhook)",
          "payment_intent.succeeded (webhook)",
          "USD 1000 ($10.00)",
          "EUR 2000 (€20.00)",
          "GBP 1500 (£15.00)",
          "JPY 100000 (¥100,000)",
          "card_1234567890 (Card token)",
          "sk_test_51ABC... (Secret key format)",
          "pk_test_51ABC... (Publishable key)",
          "whsec_test123... (Webhook secret)",
          "4000000000000341 (attaching fails)",
          "4000000000009235 (processing error)",
          "rct_test123456789 (Refund ID)",
          "py_test123456789 (Payout ID)",
          "re_test123456789 (Review ID)",
          "fee_test123456789 (Fee ID)",
          "card_declined (error code)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of Stripe test data",
        "body": "<p>Stripe provides <strong>test card numbers</strong> that simulate real behaviors without touching money. '4242424242424242' is the success wildcard: always works, useful for smoke tests. '4000000000009995' simulates generic decline. The difference is in <strong>the check digit</strong>: Stripe validates it with Luhn algorithm, so random numbers fail.</p><p><strong>Tokens like 'tok_visa'</strong> are shortcuts for quick testing in Stripe dashboard, but in real code you should use Stripe.js to tokenize. Payment Methods ('pm_card_visa') are the modern API; tokens are legacy but still valid for backward compatibility.</p><p><strong>Resource IDs</strong> (cus_, ch_, pi_) follow patterns: prefix + underscore + alphanumeric string. In test mode, any string after the prefix is valid ('cus_123', 'cus_fake') as long as the prefix matches the resource type. In production, Stripe generates real 24-28 character IDs.</p>"
      },
      {
        "h2": "Testing strategy: beyond the happy path",
        "body": "<p>The <strong>most common error</strong>: only testing '4242424242424242' and assuming everything works. Your code must handle at least 5 scenarios: success, generic decline, requires_action (3DS), processing error, insufficient funds. Each returns different response structures.</p><p>For <strong>3D Secure (SCA)</strong>, use '4000002760003184'. This card number triggers the complete flow: your frontend must show the auth modal, user 'approves', and only then the payment succeeds. If your test passes without modal, you didn't implement SCA correctly and will fail in European production.</p><p><strong>Webhooks</strong> are pain point #1. In local dev, use Stripe CLI ('stripe listen --forward-to localhost:3000/webhook') to receive real events. Test idempotency: Stripe can send the same webhook multiple times; your endpoint must be idempotent (check 'event.id' before processing).</p>"
      },
      {
        "h2": "Edge cases that break integrations",
        "body": "<p><strong>Decimal amounts</strong>: Stripe uses integers, not floats. $10.00 = 1000 (in USD). Yen has no decimals, ¥1000 = 1000. If you pass '10.00' as a number, Stripe rejects it. Correct conversion: <code>Math.round(amount * 100)</code> for currencies with 2 decimals.</p><p><strong>Metadata limits</strong>: you can pass up to 50 metadata keys, each value max 500 characters. Useful for internal tracking, but if you try to pass a giant serialized JSON, it silently fails. Test with excessive metadata to catch this edge case.</p><p><strong>Out-of-order webhooks</strong>: you can receive 'payment_intent.succeeded' BEFORE 'payment_intent.created'. Stripe doesn't guarantee order. Your logic must be stateless or check current resource state with a GET before processing. Classic bug: assuming 'created' always arrives first and setting flags that don't update later.</p>"
      },
      {
        "h2": "Robust test environment setup",
        "body": "<p><strong>Key separation</strong>: use different environment variables for test/prod. Common pattern: <code>STRIPE_SECRET_KEY</code> in prod, <code>STRIPE_TEST_SECRET_KEY</code> in dev. Never commit keys to git. Use local .env and secrets management in production (AWS Secrets Manager, Doppler, etc).</p><p>For <strong>CI/CD</strong>, create a separate Stripe test account (don't use your personal account). This allows multiple devs and pipelines to run tests without collisions. Each PR can create ephemeral resources (customers, subscriptions) that clean up automatically after.</p><p><strong>Test data factories</strong>: instead of hardcoding '4242424242424242' in each test, create helpers: <code>createSuccessfulCard()</code>, <code>createDeclinedCard()</code>, <code>create3DSCard()</code>. This centralizes test data and makes updating easier if Stripe changes numbers. Example: when 3DS2 replaced 3DS1, you only had to update one function instead of 50 tests.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use test cards in production?",
        "a": "No. Test numbers only work with keys starting with 'sk_test_' or 'pk_test_'. In production with 'sk_live_' keys, those cards are automatically rejected."
      },
      {
        "q": "How do I test recurring subscriptions without waiting a month?",
        "a": "Use the 'billing_cycle_anchor' parameter to force dates, or create 1-day trial periods. You can also use Stripe CLI to simulate time passing: 'stripe trigger invoice.payment_succeeded'."
      },
      {
        "q": "Do test webhooks reach my localhost?",
        "a": "Only with Stripe CLI. Install 'stripe-cli', run 'stripe listen --forward-to http://localhost:3000/webhook', and copy the webhook secret it gives you. Without this, webhooks only reach public URLs."
      },
      {
        "q": "What if my test passes locally but fails in CI?",
        "a": "Probably timing issues with async webhooks. In CI, add delays or polling: after creating a PaymentIntent, wait 2-3 seconds or do GET until status changes before asserting."
      }
    ]
  }
};
