import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-payloads-webhook",
    "en": "webhook-payload-generator"
  },
  "category": "data",
  "emoji": "🪝",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Payloads Webhook | Genfy",
    "metaDesc": "Genera payloads de prueba realistas para webhooks JSON. Simula eventos GitHub, Stripe, Slack y más. Perfecto para testing y desarrollo de integraciones.",
    "h1": "Generador de Payloads Webhook",
    "intro": "Obtené payloads JSON realistas para testear webhooks sin depender de eventos reales. Cubren casos de éxito, errores y edge cases comunes.",
    "tag": "Datos",
    "filterLabel": "Tipo de evento",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "github",
        "label": "GitHub",
        "items": [
          "{\"event\":\"push\",\"ref\":\"refs/heads/main\",\"repository\":{\"name\":\"api-backend\",\"full_name\":\"acme/api-backend\"},\"commits\":[{\"id\":\"7fd1a60b01f91b314f59955a4e4d4e80d8edf11d\",\"message\":\"Fix authentication middleware\",\"author\":{\"name\":\"Sarah Chen\",\"email\":\"sarah@acme.io\"}}]}",
          "{\"action\":\"opened\",\"number\":42,\"pull_request\":{\"title\":\"Add rate limiting\",\"user\":{\"login\":\"devops-bot\"},\"head\":{\"ref\":\"feature/rate-limit\"},\"base\":{\"ref\":\"main\"}}}",
          "{\"action\":\"created\",\"issue\":{\"number\":156,\"title\":\"Memory leak in worker process\",\"state\":\"open\",\"labels\":[{\"name\":\"bug\"},{\"name\":\"priority-high\"}]}}",
          "{\"action\":\"published\",\"release\":{\"tag_name\":\"v2.3.1\",\"name\":\"Production Release 2.3.1\",\"draft\":false,\"prerelease\":false}}",
          "{\"ref_type\":\"branch\",\"ref\":\"hotfix/security-patch\",\"repository\":{\"name\":\"frontend\"},\"sender\":{\"login\":\"security-team\"}}",
          "{\"action\":\"synchronize\",\"number\":89,\"pull_request\":{\"merged\":false,\"mergeable\":true,\"additions\":127,\"deletions\":45}}",
          "{\"action\":\"closed\",\"issue\":{\"number\":203,\"title\":\"Update dependencies\",\"closed_at\":\"2024-01-15T14:32:00Z\"}}",
          "{\"ref\":\"refs/tags/v1.0.0-beta\",\"repository\":{\"name\":\"sdk-python\"},\"pusher\":{\"name\":\"ci-bot\"}}",
          "{\"action\":\"labeled\",\"label\":{\"name\":\"needs-review\"},\"pull_request\":{\"number\":67,\"title\":\"Refactor database layer\"}}",
          "{\"action\":\"assigned\",\"assignee\":{\"login\":\"tech-lead\"},\"issue\":{\"number\":99,\"title\":\"Performance optimization\"}}"
        ]
      },
      {
        "id": "stripe",
        "label": "Stripe",
        "items": [
          "{\"type\":\"payment_intent.succeeded\",\"data\":{\"object\":{\"id\":\"pi_3KJ2k3L9kFq2eZvn0O7rN6Yg\",\"amount\":4500,\"currency\":\"usd\",\"status\":\"succeeded\"}}}",
          "{\"type\":\"customer.subscription.created\",\"data\":{\"object\":{\"id\":\"sub_1KJ2k3L9kFq2eZvn\",\"customer\":\"cus_L4tGkKqU8vsYhz\",\"status\":\"active\",\"plan\":{\"id\":\"price_pro_monthly\"}}}}",
          "{\"type\":\"charge.refunded\",\"data\":{\"object\":{\"id\":\"ch_3KJ2k3L9kFq2eZvn0O7rN6Yh\",\"amount\":2000,\"amount_refunded\":2000,\"refunded\":true}}}",
          "{\"type\":\"invoice.payment_failed\",\"data\":{\"object\":{\"id\":\"in_1KJ2k3L9kFq2eZvn\",\"customer\":\"cus_failedpay123\",\"amount_due\":9900,\"attempt_count\":2}}}",
          "{\"type\":\"customer.created\",\"data\":{\"object\":{\"id\":\"cus_NewUser789\",\"email\":\"new.user@example.com\",\"created\":1673800000}}}",
          "{\"type\":\"payment_intent.payment_failed\",\"data\":{\"object\":{\"id\":\"pi_failed123\",\"amount\":15000,\"last_payment_error\":{\"code\":\"card_declined\"}}}}",
          "{\"type\":\"customer.subscription.deleted\",\"data\":{\"object\":{\"id\":\"sub_canceled456\",\"status\":\"canceled\",\"canceled_at\":1673800500}}}",
          "{\"type\":\"checkout.session.completed\",\"data\":{\"object\":{\"id\":\"cs_test_a1b2c3\",\"payment_status\":\"paid\",\"amount_total\":7500}}}",
          "{\"type\":\"charge.dispute.created\",\"data\":{\"object\":{\"id\":\"dp_1KJ2k3L9kFq2eZvn\",\"amount\":5000,\"reason\":\"fraudulent\"}}}",
          "{\"type\":\"payout.paid\",\"data\":{\"object\":{\"id\":\"po_1KJ2k3L9kFq2eZvn\",\"amount\":125000,\"arrival_date\":1674000000}}}"
        ]
      },
      {
        "id": "slack",
        "label": "Slack",
        "items": [
          "{\"type\":\"message\",\"channel\":\"C01ABC123\",\"user\":\"U01DEF456\",\"text\":\"Production deployment complete\",\"ts\":\"1673800000.123456\"}",
          "{\"type\":\"app_mention\",\"event\":{\"text\":\"<@U01BOT789> status check\",\"user\":\"U01USER123\",\"channel\":\"C01ALERTS\"}}",
          "{\"type\":\"reaction_added\",\"event\":{\"user\":\"U01ABC\",\"reaction\":\"white_check_mark\",\"item\":{\"type\":\"message\",\"channel\":\"C01PROJ\"}}}",
          "{\"type\":\"channel_created\",\"channel\":{\"id\":\"C01NEW999\",\"name\":\"project-phoenix\",\"creator\":\"U01ADMIN\"}}",
          "{\"type\":\"team_join\",\"user\":{\"id\":\"U01NEWCOMER\",\"name\":\"alex.martinez\",\"real_name\":\"Alex Martinez\"}}",
          "{\"type\":\"file_shared\",\"file\":{\"id\":\"F01FILE123\",\"name\":\"architecture-diagram.png\",\"user\":\"U01DESIGN\"}}",
          "{\"type\":\"message\",\"subtype\":\"bot_message\",\"bot_id\":\"B01BOT456\",\"text\":\"Daily standup reminder\"}",
          "{\"type\":\"member_joined_channel\",\"user\":\"U01DEV789\",\"channel\":\"C01BACKEND\",\"inviter\":\"U01LEAD\"}",
          "{\"type\":\"link_shared\",\"links\":[{\"domain\":\"github.com\",\"url\":\"https://github.com/acme/repo/pull/42\"}]}",
          "{\"type\":\"workflow_step_execute\",\"workflow_step\":{\"workflow_id\":\"W01FLOW123\",\"step_id\":\"S01STEP456\"}}"
        ]
      },
      {
        "id": "shopify",
        "label": "Shopify",
        "items": [
          "{\"topic\":\"orders/create\",\"id\":5001234567890,\"email\":\"customer@example.com\",\"total_price\":\"149.99\",\"line_items\":[{\"title\":\"Wireless Headphones\",\"quantity\":1}]}",
          "{\"topic\":\"orders/fulfilled\",\"id\":5001234567891,\"fulfillment_status\":\"fulfilled\",\"tracking_number\":\"1Z999AA10123456784\"}",
          "{\"topic\":\"products/update\",\"id\":7001234567890,\"title\":\"Smart Watch Pro\",\"variants\":[{\"id\":40012345,\"inventory_quantity\":23}]}",
          "{\"topic\":\"customers/create\",\"id\":6001234567890,\"email\":\"newcustomer@shop.com\",\"first_name\":\"Maria\",\"last_name\":\"Rodriguez\"}",
          "{\"topic\":\"orders/cancelled\",\"id\":5001234567892,\"cancel_reason\":\"customer\",\"cancelled_at\":\"2024-01-15T10:30:00Z\"}",
          "{\"topic\":\"inventory_levels/update\",\"inventory_item_id\":8001234567890,\"location_id\":9001234567890,\"available\":15}",
          "{\"topic\":\"app/uninstalled\",\"shop_id\":10001234567890,\"shop_domain\":\"example-store.myshopify.com\"}",
          "{\"topic\":\"refunds/create\",\"id\":3001234567890,\"order_id\":5001234567890,\"refund_line_items\":[{\"quantity\":1,\"subtotal\":49.99}]}",
          "{\"topic\":\"checkouts/create\",\"token\":\"checkout_token_abc123\",\"email\":\"shopper@email.com\",\"total_price\":\"89.50\"}",
          "{\"topic\":\"shop/update\",\"id\":10001234567890,\"name\":\"Acme Electronics\",\"currency\":\"USD\"}"
        ]
      },
      {
        "id": "twilio",
        "label": "Twilio",
        "items": [
          "{\"MessageSid\":\"SM1234567890abcdef\",\"From\":\"+15551234567\",\"To\":\"+15559876543\",\"Body\":\"Verification code: 482901\",\"MessageStatus\":\"delivered\"}",
          "{\"CallSid\":\"CA1234567890abcdef\",\"From\":\"+15551112222\",\"To\":\"+15553334444\",\"CallStatus\":\"completed\",\"Duration\":\"127\"}",
          "{\"MessageSid\":\"SM9876543210fedcba\",\"SmsStatus\":\"sent\",\"From\":\"+15555551234\",\"Body\":\"Your order has shipped\"}",
          "{\"CallSid\":\"CA9876543210fedcba\",\"CallStatus\":\"no-answer\",\"Direction\":\"outbound-api\",\"To\":\"+15551239999\"}",
          "{\"MessageSid\":\"SM1111222233334444\",\"MessageStatus\":\"failed\",\"ErrorCode\":\"30006\",\"ErrorMessage\":\"Landline or unreachable carrier\"}",
          "{\"CallSid\":\"CA5555666677778888\",\"RecordingSid\":\"RE1234567890abcdef\",\"RecordingUrl\":\"https://api.twilio.com/recordings/RE123\",\"CallStatus\":\"in-progress\"}",
          "{\"MessageSid\":\"SM9999888877776666\",\"NumMedia\":\"1\",\"MediaUrl0\":\"https://api.twilio.com/media/ME123\",\"Body\":\"Check this out\"}",
          "{\"CallSid\":\"CA3333444455556666\",\"Digits\":\"1\",\"CallStatus\":\"in-progress\",\"From\":\"+15552223333\"}",
          "{\"MessageSid\":\"SM7777888899990000\",\"SmsStatus\":\"undelivered\",\"ErrorCode\":\"30008\",\"To\":\"+15559998888\"}",
          "{\"ConferenceSid\":\"CF1234567890abcdef\",\"FriendlyName\":\"Support Call\",\"Status\":\"in-progress\",\"Participants\":\"3\"}"
        ]
      },
      {
        "id": "mailgun",
        "label": "Mailgun",
        "items": [
          "{\"event\":\"delivered\",\"recipient\":\"user@example.com\",\"message\":{\"headers\":{\"message-id\":\"<msg123@mailgun.net>\",\"subject\":\"Welcome aboard\"}}}",
          "{\"event\":\"opened\",\"recipient\":\"subscriber@domain.com\",\"timestamp\":1673800000,\"ip\":\"203.0.113.45\"}",
          "{\"event\":\"clicked\",\"recipient\":\"customer@shop.com\",\"url\":\"https://example.com/promo\",\"timestamp\":1673800100}",
          "{\"event\":\"bounced\",\"recipient\":\"invalid@nonexistent.xyz\",\"error\":\"550 5.1.1 User unknown\",\"code\":550}",
          "{\"event\":\"complained\",\"recipient\":\"complainer@email.com\",\"timestamp\":1673800200}",
          "{\"event\":\"unsubscribed\",\"recipient\":\"optout@domain.com\",\"timestamp\":1673800300,\"tag\":\"newsletter\"}",
          "{\"event\":\"failed\",\"severity\":\"permanent\",\"recipient\":\"fail@test.com\",\"reason\":\"Mailbox does not exist\"}",
          "{\"event\":\"delivered\",\"recipient\":\"vip@company.com\",\"message\":{\"size\":45678},\"timestamp\":1673800400}",
          "{\"event\":\"opened\",\"recipient\":\"reader@news.com\",\"client-name\":\"Gmail\",\"device-type\":\"mobile\"}",
          "{\"event\":\"clicked\",\"recipient\":\"clicker@site.com\",\"url\":\"https://example.com/unsubscribe\",\"link-type\":\"unsubscribe\"}"
        ]
      },
      {
        "id": "discord",
        "label": "Discord",
        "items": [
          "{\"type\":1,\"guild_id\":\"123456789012345678\",\"channel_id\":\"987654321098765432\",\"member\":{\"user\":{\"id\":\"111222333444555666\",\"username\":\"gamer123\"}}}",
          "{\"type\":2,\"data\":{\"name\":\"roll\",\"options\":[{\"name\":\"sides\",\"value\":20}]},\"member\":{\"user\":{\"username\":\"dungeonmaster\"}}}",
          "{\"type\":3,\"data\":{\"custom_id\":\"accept_rules\",\"component_type\":2},\"message\":{\"id\":\"999888777666555444\"}}",
          "{\"type\":0,\"content\":\"GG everyone!\",\"author\":{\"id\":\"222333444555666777\",\"username\":\"player_one\"},\"channel_id\":\"111222333444555666\"}",
          "{\"type\":4,\"data\":{\"name\":\"help\",\"options\":[{\"name\":\"command\",\"value\":\"moderation\",\"focused\":true}]}}",
          "{\"type\":2,\"data\":{\"name\":\"ban\",\"options\":[{\"name\":\"user\",\"value\":\"333444555666777888\"},{\"name\":\"reason\",\"value\":\"spam\"}]}}",
          "{\"type\":5,\"data\":{\"custom_id\":\"color_select\",\"values\":[\"blue\"]},\"message\":{\"id\":\"888777666555444333\"}}",
          "{\"type\":3,\"data\":{\"custom_id\":\"ticket_close\",\"component_type\":2},\"member\":{\"roles\":[\"444555666777888999\"]}}",
          "{\"type\":2,\"data\":{\"name\":\"poll\",\"options\":[{\"name\":\"question\",\"value\":\"Best programming language?\"}]}}",
          "{\"type\":0,\"content\":\"/play never gonna give you up\",\"author\":{\"bot\":true,\"username\":\"MusicBot\"}}"
        ]
      },
      {
        "id": "zoom",
        "label": "Zoom",
        "items": [
          "{\"event\":\"meeting.started\",\"payload\":{\"object\":{\"id\":\"123456789\",\"host_id\":\"abc-def-ghi\",\"topic\":\"Engineering Standup\",\"start_time\":\"2024-01-15T09:00:00Z\"}}}",
          "{\"event\":\"meeting.ended\",\"payload\":{\"object\":{\"id\":\"987654321\",\"duration\":45,\"participants_count\":12}}}",
          "{\"event\":\"meeting.participant_joined\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Sarah Johnson\",\"join_time\":\"2024-01-15T09:02:15Z\"}}}}",
          "{\"event\":\"recording.completed\",\"payload\":{\"object\":{\"id\":\"rec123456\",\"topic\":\"Q1 Planning\",\"recording_files\":[{\"file_size\":157286400}]}}}",
          "{\"event\":\"meeting.participant_left\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Mike Chen\",\"leave_time\":\"2024-01-15T09:45:00Z\"}}}}",
          "{\"event\":\"webinar.started\",\"payload\":{\"object\":{\"id\":\"webinar789\",\"topic\":\"Product Launch Event\",\"agenda\":\"New features demo\"}}}",
          "{\"event\":\"meeting.registration_created\",\"payload\":{\"object\":{\"registrant\":{\"email\":\"attendee@company.com\",\"first_name\":\"Alex\"}}}}",
          "{\"event\":\"meeting.sharing_started\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Presenter Bot\",\"sharing_details\":{\"content\":\"screen\"}}}}}",
          "{\"event\":\"recording.transcript_completed\",\"payload\":{\"object\":{\"id\":\"transcript456\",\"meeting_id\":\"222333444\"}}}",
          "{\"event\":\"meeting.alert\",\"payload\":{\"object\":{\"type\":\"JbhDisconnected\",\"meeting_number\":\"111222333\"}}}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué testear webhooks con payloads reales",
        "body": "<p>Desarrollar integraciones con webhooks sin payloads de prueba confiables lleva a bugs en producción. El error más común: asumir que todos los eventos tienen el mismo shape. GitHub puede enviar push events sin commits (forzado), Stripe incluye metadata variable según el plan del cliente, y Slack cambia structure según el tipo de mensaje.</p><p>Usar payloads generados evita tres problemas críticos: <strong>romper deploys cuando el proveedor actualiza su API</strong>, no manejar casos edge (refunds parciales, llamadas sin respuesta), y testear solo con happy path. Los payloads acá incluyen errores 550, disputas, y eventos cancelled que muchos devs olvidan.</p><p>Un ejemplo real: una startup perdió $12k porque su webhook de Stripe no manejaba <code>payment_intent.payment_failed</code> con error <code>card_declined</code>. Asumían que todos los pagos fallaban silenciosamente. Los payloads de testing revelan estos escenarios antes de deployar.</p>"
      },
      {
        "h2": "Estructura típica de payloads según proveedor",
        "body": "<p>GitHub estructura eventos con <code>action</code> (opened, closed), <code>repository</code>, y el objeto afectado (issue, PR, release). Siempre incluye <code>sender</code>. Stripe usa <code>type</code> (punto notación) y anida data en <code>object</code>. Su patrón: <code>resource.event</code> (customer.created, invoice.paid).</p><p>Slack y Discord usan <code>type</code> numérico o string. Slack incluye <code>event</code> nested para app mentions, Discord diferencia interactions (type 2 = slash command, type 3 = button). Shopify usa <code>topic</code> con slash notation: <code>orders/create</code>, <code>products/update</code>.</p><p>Twilio es REST-style: todos los campos top-level (<code>MessageSid</code>, <code>CallStatus</code>, <code>From</code>). Mailgun usa <code>event</code> simple (delivered, bounced) con metadata en <code>message</code>. Conocer estos patterns acelera debugging: si ves <code>type</code> string + <code>data.object</code>, es Stripe; si ves <code>MessageSid</code>, es Twilio.</p>"
      },
      {
        "h2": "Casos edge que rompen integraciones",
        "body": "<p>Los payloads de prueba deben incluir: <strong>arrays vacíos</strong> (GitHub push sin commits), <strong>null values</strong> (Stripe customer sin email), <strong>missing fields</strong> (Slack messages sin text cuando es file_share). También: eventos duplicados (Shopify reenvía si no recibe 200 en 5s), y payloads gigantes (Zoom recordings de 3 horas).</p><p>Errores comunes: no validar <code>refunded: true</code> en Stripe charges (el amount puede ser parcial), asumir que Discord interactions siempre tienen <code>member</code> (DMs no lo incluyen), y no chequear <code>attempt_count</code> en invoices (Stripe reintenta hasta 4 veces).</p><p>Un payload de Twilio con <code>NumMedia > 0</code> requiere parsear <code>MediaUrl0</code>, <code>MediaUrl1</code>... dinámicamente. GitHub pull_request puede tener <code>mergeable: null</code> (calculando), no solo true/false. Mailgun bounces permanent vs temporary cambian la lógica de retry.</p>"
      },
      {
        "h2": "Estrategia de testing local efectiva",
        "body": "<p>Usá herramientas como <code>ngrok</code> o <code>webhook.site</code> para recibir requests localmente. Configurá una ruta <code>/webhooks/:provider</code> que loguee el payload completo. Importante: <strong>verificá signatures</strong> (GitHub usa HMAC-SHA256, Stripe tiene su propia lib).</p><p>Estructura recomendada: un handler por provider con schema validation (Zod, Joi). Logueá payloads unknown en Sentry para detectar cambios de API. Implementá idempotency: guardá <code>event.id</code> o <code>MessageSid</code> en Redis/DB para ignorar duplicados.</p><p>Para CI/CD: commitéa payloads de ejemplo en <code>tests/fixtures/webhooks/</code> y escribí tests que los pasen por tu handler. Mockeá las signatures con el secret de test. Esto previene regressions cuando refactorizás el código del webhook. La mayoría de bugs de webhooks son validations que fallan silenciosamente.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Por qué los payloads tienen formato de string JSON escapado?",
        "a": "Para copiarlos directo a tu código. Podés hacer JSON.parse() o pegarlos en un test. También funciona para logs y debugging."
      },
      {
        "q": "¿Estos payloads son reales o ficticios?",
        "a": "Son estructuras reales basadas en la documentación oficial de cada provider, con datos ficticios (IDs, emails, timestamps inventados)."
      },
      {
        "q": "¿Cómo manejo payloads de proveedores no listados?",
        "a": "Buscá la sección 'Webhook Examples' en su API docs. La mayoría incluye payloads de muestra. Alternativamente, creá un endpoint temporal con webhook.site."
      },
      {
        "q": "¿Debo verificar signatures en desarrollo?",
        "a": "Sí, siempre. Usá el secret de test del provider. Esto previene bugs donde el payload pasa en dev pero falla en producción por signature inválida."
      }
    ]
  },
  "en": {
    "pageTitle": "Webhook Payload Generator | Genfy",
    "metaDesc": "Generate realistic test payloads for JSON webhooks. Simulate GitHub, Stripe, Slack events and more. Perfect for integration testing and development.",
    "h1": "Webhook Payload Generator",
    "intro": "Get realistic JSON payloads to test webhooks without relying on real events. Cover success cases, errors, and common edge cases.",
    "tag": "Data",
    "filterLabel": "Event type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "github",
        "label": "GitHub",
        "items": [
          "{\"event\":\"push\",\"ref\":\"refs/heads/main\",\"repository\":{\"name\":\"api-backend\",\"full_name\":\"acme/api-backend\"},\"commits\":[{\"id\":\"7fd1a60b01f91b314f59955a4e4d4e80d8edf11d\",\"message\":\"Fix authentication middleware\",\"author\":{\"name\":\"Sarah Chen\",\"email\":\"sarah@acme.io\"}}]}",
          "{\"action\":\"opened\",\"number\":42,\"pull_request\":{\"title\":\"Add rate limiting\",\"user\":{\"login\":\"devops-bot\"},\"head\":{\"ref\":\"feature/rate-limit\"},\"base\":{\"ref\":\"main\"}}}",
          "{\"action\":\"created\",\"issue\":{\"number\":156,\"title\":\"Memory leak in worker process\",\"state\":\"open\",\"labels\":[{\"name\":\"bug\"},{\"name\":\"priority-high\"}]}}",
          "{\"action\":\"published\",\"release\":{\"tag_name\":\"v2.3.1\",\"name\":\"Production Release 2.3.1\",\"draft\":false,\"prerelease\":false}}",
          "{\"ref_type\":\"branch\",\"ref\":\"hotfix/security-patch\",\"repository\":{\"name\":\"frontend\"},\"sender\":{\"login\":\"security-team\"}}",
          "{\"action\":\"synchronize\",\"number\":89,\"pull_request\":{\"merged\":false,\"mergeable\":true,\"additions\":127,\"deletions\":45}}",
          "{\"action\":\"closed\",\"issue\":{\"number\":203,\"title\":\"Update dependencies\",\"closed_at\":\"2024-01-15T14:32:00Z\"}}",
          "{\"ref\":\"refs/tags/v1.0.0-beta\",\"repository\":{\"name\":\"sdk-python\"},\"pusher\":{\"name\":\"ci-bot\"}}",
          "{\"action\":\"labeled\",\"label\":{\"name\":\"needs-review\"},\"pull_request\":{\"number\":67,\"title\":\"Refactor database layer\"}}",
          "{\"action\":\"assigned\",\"assignee\":{\"login\":\"tech-lead\"},\"issue\":{\"number\":99,\"title\":\"Performance optimization\"}}"
        ]
      },
      {
        "id": "stripe",
        "label": "Stripe",
        "items": [
          "{\"type\":\"payment_intent.succeeded\",\"data\":{\"object\":{\"id\":\"pi_3KJ2k3L9kFq2eZvn0O7rN6Yg\",\"amount\":4500,\"currency\":\"usd\",\"status\":\"succeeded\"}}}",
          "{\"type\":\"customer.subscription.created\",\"data\":{\"object\":{\"id\":\"sub_1KJ2k3L9kFq2eZvn\",\"customer\":\"cus_L4tGkKqU8vsYhz\",\"status\":\"active\",\"plan\":{\"id\":\"price_pro_monthly\"}}}}",
          "{\"type\":\"charge.refunded\",\"data\":{\"object\":{\"id\":\"ch_3KJ2k3L9kFq2eZvn0O7rN6Yh\",\"amount\":2000,\"amount_refunded\":2000,\"refunded\":true}}}",
          "{\"type\":\"invoice.payment_failed\",\"data\":{\"object\":{\"id\":\"in_1KJ2k3L9kFq2eZvn\",\"customer\":\"cus_failedpay123\",\"amount_due\":9900,\"attempt_count\":2}}}",
          "{\"type\":\"customer.created\",\"data\":{\"object\":{\"id\":\"cus_NewUser789\",\"email\":\"new.user@example.com\",\"created\":1673800000}}}",
          "{\"type\":\"payment_intent.payment_failed\",\"data\":{\"object\":{\"id\":\"pi_failed123\",\"amount\":15000,\"last_payment_error\":{\"code\":\"card_declined\"}}}}",
          "{\"type\":\"customer.subscription.deleted\",\"data\":{\"object\":{\"id\":\"sub_canceled456\",\"status\":\"canceled\",\"canceled_at\":1673800500}}}",
          "{\"type\":\"checkout.session.completed\",\"data\":{\"object\":{\"id\":\"cs_test_a1b2c3\",\"payment_status\":\"paid\",\"amount_total\":7500}}}",
          "{\"type\":\"charge.dispute.created\",\"data\":{\"object\":{\"id\":\"dp_1KJ2k3L9kFq2eZvn\",\"amount\":5000,\"reason\":\"fraudulent\"}}}",
          "{\"type\":\"payout.paid\",\"data\":{\"object\":{\"id\":\"po_1KJ2k3L9kFq2eZvn\",\"amount\":125000,\"arrival_date\":1674000000}}}"
        ]
      },
      {
        "id": "slack",
        "label": "Slack",
        "items": [
          "{\"type\":\"message\",\"channel\":\"C01ABC123\",\"user\":\"U01DEF456\",\"text\":\"Production deployment complete\",\"ts\":\"1673800000.123456\"}",
          "{\"type\":\"app_mention\",\"event\":{\"text\":\"<@U01BOT789> status check\",\"user\":\"U01USER123\",\"channel\":\"C01ALERTS\"}}",
          "{\"type\":\"reaction_added\",\"event\":{\"user\":\"U01ABC\",\"reaction\":\"white_check_mark\",\"item\":{\"type\":\"message\",\"channel\":\"C01PROJ\"}}}",
          "{\"type\":\"channel_created\",\"channel\":{\"id\":\"C01NEW999\",\"name\":\"project-phoenix\",\"creator\":\"U01ADMIN\"}}",
          "{\"type\":\"team_join\",\"user\":{\"id\":\"U01NEWCOMER\",\"name\":\"alex.martinez\",\"real_name\":\"Alex Martinez\"}}",
          "{\"type\":\"file_shared\",\"file\":{\"id\":\"F01FILE123\",\"name\":\"architecture-diagram.png\",\"user\":\"U01DESIGN\"}}",
          "{\"type\":\"message\",\"subtype\":\"bot_message\",\"bot_id\":\"B01BOT456\",\"text\":\"Daily standup reminder\"}",
          "{\"type\":\"member_joined_channel\",\"user\":\"U01DEV789\",\"channel\":\"C01BACKEND\",\"inviter\":\"U01LEAD\"}",
          "{\"type\":\"link_shared\",\"links\":[{\"domain\":\"github.com\",\"url\":\"https://github.com/acme/repo/pull/42\"}]}",
          "{\"type\":\"workflow_step_execute\",\"workflow_step\":{\"workflow_id\":\"W01FLOW123\",\"step_id\":\"S01STEP456\"}}"
        ]
      },
      {
        "id": "shopify",
        "label": "Shopify",
        "items": [
          "{\"topic\":\"orders/create\",\"id\":5001234567890,\"email\":\"customer@example.com\",\"total_price\":\"149.99\",\"line_items\":[{\"title\":\"Wireless Headphones\",\"quantity\":1}]}",
          "{\"topic\":\"orders/fulfilled\",\"id\":5001234567891,\"fulfillment_status\":\"fulfilled\",\"tracking_number\":\"1Z999AA10123456784\"}",
          "{\"topic\":\"products/update\",\"id\":7001234567890,\"title\":\"Smart Watch Pro\",\"variants\":[{\"id\":40012345,\"inventory_quantity\":23}]}",
          "{\"topic\":\"customers/create\",\"id\":6001234567890,\"email\":\"newcustomer@shop.com\",\"first_name\":\"Maria\",\"last_name\":\"Rodriguez\"}",
          "{\"topic\":\"orders/cancelled\",\"id\":5001234567892,\"cancel_reason\":\"customer\",\"cancelled_at\":\"2024-01-15T10:30:00Z\"}",
          "{\"topic\":\"inventory_levels/update\",\"inventory_item_id\":8001234567890,\"location_id\":9001234567890,\"available\":15}",
          "{\"topic\":\"app/uninstalled\",\"shop_id\":10001234567890,\"shop_domain\":\"example-store.myshopify.com\"}",
          "{\"topic\":\"refunds/create\",\"id\":3001234567890,\"order_id\":5001234567890,\"refund_line_items\":[{\"quantity\":1,\"subtotal\":49.99}]}",
          "{\"topic\":\"checkouts/create\",\"token\":\"checkout_token_abc123\",\"email\":\"shopper@email.com\",\"total_price\":\"89.50\"}",
          "{\"topic\":\"shop/update\",\"id\":10001234567890,\"name\":\"Acme Electronics\",\"currency\":\"USD\"}"
        ]
      },
      {
        "id": "twilio",
        "label": "Twilio",
        "items": [
          "{\"MessageSid\":\"SM1234567890abcdef\",\"From\":\"+15551234567\",\"To\":\"+15559876543\",\"Body\":\"Verification code: 482901\",\"MessageStatus\":\"delivered\"}",
          "{\"CallSid\":\"CA1234567890abcdef\",\"From\":\"+15551112222\",\"To\":\"+15553334444\",\"CallStatus\":\"completed\",\"Duration\":\"127\"}",
          "{\"MessageSid\":\"SM9876543210fedcba\",\"SmsStatus\":\"sent\",\"From\":\"+15555551234\",\"Body\":\"Your order has shipped\"}",
          "{\"CallSid\":\"CA9876543210fedcba\",\"CallStatus\":\"no-answer\",\"Direction\":\"outbound-api\",\"To\":\"+15551239999\"}",
          "{\"MessageSid\":\"SM1111222233334444\",\"MessageStatus\":\"failed\",\"ErrorCode\":\"30006\",\"ErrorMessage\":\"Landline or unreachable carrier\"}",
          "{\"CallSid\":\"CA5555666677778888\",\"RecordingSid\":\"RE1234567890abcdef\",\"RecordingUrl\":\"https://api.twilio.com/recordings/RE123\",\"CallStatus\":\"in-progress\"}",
          "{\"MessageSid\":\"SM9999888877776666\",\"NumMedia\":\"1\",\"MediaUrl0\":\"https://api.twilio.com/media/ME123\",\"Body\":\"Check this out\"}",
          "{\"CallSid\":\"CA3333444455556666\",\"Digits\":\"1\",\"CallStatus\":\"in-progress\",\"From\":\"+15552223333\"}",
          "{\"MessageSid\":\"SM7777888899990000\",\"SmsStatus\":\"undelivered\",\"ErrorCode\":\"30008\",\"To\":\"+15559998888\"}",
          "{\"ConferenceSid\":\"CF1234567890abcdef\",\"FriendlyName\":\"Support Call\",\"Status\":\"in-progress\",\"Participants\":\"3\"}"
        ]
      },
      {
        "id": "mailgun",
        "label": "Mailgun",
        "items": [
          "{\"event\":\"delivered\",\"recipient\":\"user@example.com\",\"message\":{\"headers\":{\"message-id\":\"<msg123@mailgun.net>\",\"subject\":\"Welcome aboard\"}}}",
          "{\"event\":\"opened\",\"recipient\":\"subscriber@domain.com\",\"timestamp\":1673800000,\"ip\":\"203.0.113.45\"}",
          "{\"event\":\"clicked\",\"recipient\":\"customer@shop.com\",\"url\":\"https://example.com/promo\",\"timestamp\":1673800100}",
          "{\"event\":\"bounced\",\"recipient\":\"invalid@nonexistent.xyz\",\"error\":\"550 5.1.1 User unknown\",\"code\":550}",
          "{\"event\":\"complained\",\"recipient\":\"complainer@email.com\",\"timestamp\":1673800200}",
          "{\"event\":\"unsubscribed\",\"recipient\":\"optout@domain.com\",\"timestamp\":1673800300,\"tag\":\"newsletter\"}",
          "{\"event\":\"failed\",\"severity\":\"permanent\",\"recipient\":\"fail@test.com\",\"reason\":\"Mailbox does not exist\"}",
          "{\"event\":\"delivered\",\"recipient\":\"vip@company.com\",\"message\":{\"size\":45678},\"timestamp\":1673800400}",
          "{\"event\":\"opened\",\"recipient\":\"reader@news.com\",\"client-name\":\"Gmail\",\"device-type\":\"mobile\"}",
          "{\"event\":\"clicked\",\"recipient\":\"clicker@site.com\",\"url\":\"https://example.com/unsubscribe\",\"link-type\":\"unsubscribe\"}"
        ]
      },
      {
        "id": "discord",
        "label": "Discord",
        "items": [
          "{\"type\":1,\"guild_id\":\"123456789012345678\",\"channel_id\":\"987654321098765432\",\"member\":{\"user\":{\"id\":\"111222333444555666\",\"username\":\"gamer123\"}}}",
          "{\"type\":2,\"data\":{\"name\":\"roll\",\"options\":[{\"name\":\"sides\",\"value\":20}]},\"member\":{\"user\":{\"username\":\"dungeonmaster\"}}}",
          "{\"type\":3,\"data\":{\"custom_id\":\"accept_rules\",\"component_type\":2},\"message\":{\"id\":\"999888777666555444\"}}",
          "{\"type\":0,\"content\":\"GG everyone!\",\"author\":{\"id\":\"222333444555666777\",\"username\":\"player_one\"},\"channel_id\":\"111222333444555666\"}",
          "{\"type\":4,\"data\":{\"name\":\"help\",\"options\":[{\"name\":\"command\",\"value\":\"moderation\",\"focused\":true}]}}",
          "{\"type\":2,\"data\":{\"name\":\"ban\",\"options\":[{\"name\":\"user\",\"value\":\"333444555666777888\"},{\"name\":\"reason\",\"value\":\"spam\"}]}}",
          "{\"type\":5,\"data\":{\"custom_id\":\"color_select\",\"values\":[\"blue\"]},\"message\":{\"id\":\"888777666555444333\"}}",
          "{\"type\":3,\"data\":{\"custom_id\":\"ticket_close\",\"component_type\":2},\"member\":{\"roles\":[\"444555666777888999\"]}}",
          "{\"type\":2,\"data\":{\"name\":\"poll\",\"options\":[{\"name\":\"question\",\"value\":\"Best programming language?\"}]}}",
          "{\"type\":0,\"content\":\"/play never gonna give you up\",\"author\":{\"bot\":true,\"username\":\"MusicBot\"}}"
        ]
      },
      {
        "id": "zoom",
        "label": "Zoom",
        "items": [
          "{\"event\":\"meeting.started\",\"payload\":{\"object\":{\"id\":\"123456789\",\"host_id\":\"abc-def-ghi\",\"topic\":\"Engineering Standup\",\"start_time\":\"2024-01-15T09:00:00Z\"}}}",
          "{\"event\":\"meeting.ended\",\"payload\":{\"object\":{\"id\":\"987654321\",\"duration\":45,\"participants_count\":12}}}",
          "{\"event\":\"meeting.participant_joined\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Sarah Johnson\",\"join_time\":\"2024-01-15T09:02:15Z\"}}}}",
          "{\"event\":\"recording.completed\",\"payload\":{\"object\":{\"id\":\"rec123456\",\"topic\":\"Q1 Planning\",\"recording_files\":[{\"file_size\":157286400}]}}}",
          "{\"event\":\"meeting.participant_left\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Mike Chen\",\"leave_time\":\"2024-01-15T09:45:00Z\"}}}}",
          "{\"event\":\"webinar.started\",\"payload\":{\"object\":{\"id\":\"webinar789\",\"topic\":\"Product Launch Event\",\"agenda\":\"New features demo\"}}}",
          "{\"event\":\"meeting.registration_created\",\"payload\":{\"object\":{\"registrant\":{\"email\":\"attendee@company.com\",\"first_name\":\"Alex\"}}}}",
          "{\"event\":\"meeting.sharing_started\",\"payload\":{\"object\":{\"participant\":{\"user_name\":\"Presenter Bot\",\"sharing_details\":{\"content\":\"screen\"}}}}}",
          "{\"event\":\"recording.transcript_completed\",\"payload\":{\"object\":{\"id\":\"transcript456\",\"meeting_id\":\"222333444\"}}}",
          "{\"event\":\"meeting.alert\",\"payload\":{\"object\":{\"type\":\"JbhDisconnected\",\"meeting_number\":\"111222333\"}}}"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why test webhooks with real payloads",
        "body": "<p>Developing webhook integrations without reliable test payloads leads to production bugs. Most common mistake: assuming all events have the same shape. GitHub can send push events with no commits (forced), Stripe includes variable metadata depending on customer plan, and Slack changes structure by message type.</p><p>Using generated payloads prevents three critical issues: <strong>breaking deploys when the provider updates their API</strong>, not handling edge cases (partial refunds, unanswered calls), and testing only happy path. Payloads here include 550 errors, disputes, and cancelled events many devs forget.</p><p>Real example: a startup lost $12k because their Stripe webhook didn't handle <code>payment_intent.payment_failed</code> with <code>card_declined</code> error. They assumed all failed payments happened silently. Test payloads reveal these scenarios before deploying.</p>"
      },
      {
        "h2": "Typical payload structure by provider",
        "body": "<p>GitHub structures events with <code>action</code> (opened, closed), <code>repository</code>, and the affected object (issue, PR, release). Always includes <code>sender</code>. Stripe uses <code>type</code> (dot notation) and nests data in <code>object</code>. Pattern: <code>resource.event</code> (customer.created, invoice.paid).</p><p>Slack and Discord use numeric or string <code>type</code>. Slack includes nested <code>event</code> for app mentions, Discord differentiates interactions (type 2 = slash command, type 3 = button). Shopify uses <code>topic</code> with slash notation: <code>orders/create</code>, <code>products/update</code>.</p><p>Twilio is REST-style: all fields top-level (<code>MessageSid</code>, <code>CallStatus</code>, <code>From</code>). Mailgun uses simple <code>event</code> (delivered, bounced) with metadata in <code>message</code>. Knowing these patterns speeds debugging: if you see <code>type</code> string + <code>data.object</code>, it's Stripe; if you see <code>MessageSid</code>, it's Twilio.</p>"
      },
      {
        "h2": "Edge cases that break integrations",
        "body": "<p>Test payloads must include: <strong>empty arrays</strong> (GitHub push with no commits), <strong>null values</strong> (Stripe customer without email), <strong>missing fields</strong> (Slack messages without text when it's file_share). Also: duplicate events (Shopify resends if no 200 in 5s), and giant payloads (Zoom 3-hour recordings).</p><p>Common errors: not validating <code>refunded: true</code> in Stripe charges (amount can be partial), assuming Discord interactions always have <code>member</code> (DMs don't include it), and not checking <code>attempt_count</code> in invoices (Stripe retries up to 4 times).</p><p>A Twilio payload with <code>NumMedia > 0</code> requires parsing <code>MediaUrl0</code>, <code>MediaUrl1</code>... dynamically. GitHub pull_request can have <code>mergeable: null</code> (calculating), not just true/false. Mailgun permanent vs temporary bounces change retry logic.</p>"
      },
      {
        "h2": "Effective local testing strategy",
        "body": "<p>Use tools like <code>ngrok</code> or <code>webhook.site</code> to receive requests locally. Set up a <code>/webhooks/:provider</code> route that logs the complete payload. Important: <strong>verify signatures</strong> (GitHub uses HMAC-SHA256, Stripe has its own lib).</p><p>Recommended structure: one handler per provider with schema validation (Zod, Joi). Log unknown payloads to Sentry to detect API changes. Implement idempotency: save <code>event.id</code> or <code>MessageSid</code> in Redis/DB to ignore duplicates.</p><p>For CI/CD: commit sample payloads to <code>tests/fixtures/webhooks/</code> and write tests that run them through your handler. Mock signatures with test secret. This prevents regressions when refactoring webhook code. Most webhook bugs are validations that fail silently.</p>"
      }
    ],
    "faq": [
      {
        "q": "Why are payloads formatted as escaped JSON strings?",
        "a": "To copy them directly into your code. You can JSON.parse() or paste into a test. Also works for logs and debugging."
      },
      {
        "q": "Are these payloads real or fictional?",
        "a": "They're real structures based on official provider documentation, with fictional data (invented IDs, emails, timestamps)."
      },
      {
        "q": "How do I handle payloads from unlisted providers?",
        "a": "Look for 'Webhook Examples' section in their API docs. Most include sample payloads. Alternatively, create a temporary endpoint with webhook.site."
      },
      {
        "q": "Should I verify signatures in development?",
        "a": "Yes, always. Use the provider's test secret. This prevents bugs where payload passes in dev but fails in production due to invalid signature."
      }
    ]
  }
};
