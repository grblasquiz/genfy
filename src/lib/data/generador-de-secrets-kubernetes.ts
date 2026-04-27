import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-secrets-kubernetes",
    "en": "kubernetes-secret-generator"
  },
  "category": "security",
  "emoji": "☸️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Secrets Kubernetes | Genfy",
    "metaDesc": "Creá secrets seguros para tus manifests de Kubernetes al instante. Genera tokens, contraseñas y claves base64-encoded listas para producción.",
    "h1": "Generador de Secrets Kubernetes",
    "intro": "Generá credenciales, tokens y secrets codificados en base64 para tus manifests de Kubernetes sin exponer información sensible en tu terminal o historial.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de Secret",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de Secret",
        "items": [
          "API Token (32 bytes)",
          "Database Password",
          "JWT Secret Key",
          "TLS Certificate Data",
          "SSH Private Key",
          "Docker Registry Auth",
          "S3 Access Key",
          "Redis Password",
          "SMTP Credentials",
          "OAuth Client Secret",
          "Webhook Secret",
          "Encryption Key (AES-256)",
          "Service Account Token",
          "LDAP Bind Password",
          "RabbitMQ Credentials",
          "MongoDB Connection String",
          "GitHub Personal Access Token",
          "GitLab Runner Token",
          "Prometheus Basic Auth",
          "Grafana Admin Password",
          "Kafka SASL Password",
          "ElasticSearch Password",
          "PostgreSQL Superuser Password",
          "MySQL Root Password",
          "Azure Storage Key",
          "GCP Service Account JSON",
          "AWS Session Token",
          "Stripe API Key",
          "Twilio Auth Token",
          "SendGrid API Key",
          "Cloudflare API Token",
          "Datadog API Key",
          "New Relic License Key",
          "Sentry DSN",
          "Slack Webhook URL",
          "Discord Bot Token",
          "Telegram Bot Token",
          "Firebase Admin SDK",
          "Auth0 Client Secret",
          "Okta API Token",
          "HashiCorp Vault Token",
          "Consul ACL Token",
          "Nginx Basic Auth",
          "MinIO Access Key",
          "Ceph S3 Credentials",
          "NATS Server Password",
          "Consul Gossip Key",
          "etcd Peer Auth",
          "Harbor Registry Password",
          "Nexus Repository Token"
        ]
      },
      {
        "id": "encoding",
        "label": "Formato",
        "items": [
          "base64 (Standard Kubernetes)",
          "Plain Text (para referencia)",
          "JSON (Structured)",
          "YAML Snippet",
          "Hex String",
          "URL-Safe Base64"
        ]
      },
      {
        "id": "strength",
        "label": "Complejidad",
        "items": [
          "Alta (64 caracteres)",
          "Media (32 caracteres)",
          "Básica (16 caracteres)",
          "Paranoid (128 caracteres)",
          "Custom Length"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué necesitás un generador de secrets Kubernetes",
        "body": "<p>Crear secrets manualmente en Kubernetes implica riesgos: tu historial de bash guarda las credenciales en texto plano, los logs del sistema pueden exponerlas, y la codificación base64 manual es propensa a errores. Este generador produce valores seguros que podés inyectar directamente en tus manifests sin tocar la terminal.</p><p>Los secrets generados acá son criptográficamente aleatorios usando fuentes del sistema operativo, no pseudo-aleatorios predecibles. Cada ejecución produce valores únicos aptos para entornos de producción, desde passwords de bases de datos hasta tokens de API de terceros.</p><p><strong>Casos reales de uso:</strong> configurar PostgreSQL en un StatefulSet, integrar servicios externos vía ConfigMaps, autenticar registries privados de Docker, o rotar credenciales después de un incidente de seguridad.</p>"
      },
      {
        "h2": "Cómo aplicar secrets en tus manifests",
        "body": "<p>Una vez generado el secret, creás un archivo YAML tipo <code>my-secret.yaml</code> con la estructura básica: <code>apiVersion: v1</code>, <code>kind: Secret</code>, <code>metadata.name</code>, y el campo <code>data</code> con tus claves base64-encoded. Aplicás con <code>kubectl apply -f my-secret.yaml</code>.</p><p>Para consumirlo desde un Pod, lo montás como volumen (<code>volumes.secret.secretName</code>) o lo inyectás como variable de entorno (<code>valueFrom.secretKeyRef</code>). La segunda opción es más directa para credenciales simples; la primera es mejor para certificados TLS o archivos de configuración complejos.</p><p><strong>Error común:</strong> olvidar que base64 no es encriptación. Si tu cluster no tiene encryption-at-rest habilitado (EncryptionConfiguration), los secrets se guardan en plain text en etcd. Habilitá siempre el cifrado en producción.</p>"
      },
      {
        "h2": "Tipos de secrets y cuándo usar cada uno",
        "body": "<p>Kubernetes reconoce <code>Opaque</code> (genérico), <code>kubernetes.io/tls</code> (certificados), <code>kubernetes.io/dockerconfigjson</code> (registry), y <code>kubernetes.io/service-account-token</code>. El 90% de tus secrets serán Opaque: passwords, API keys, tokens custom.</p><p>Para registries privados, usá <code>docker-registry</code> type con <code>kubectl create secret docker-registry</code> o generá el JSON de <code>.dockerconfigjson</code> manualmente. Los TLS secrets esperan <code>tls.crt</code> y <code>tls.key</code> como claves obligatorias.</p><p><strong>Tip práctico:</strong> separá secrets por scope. Uno por base de datos, otro para APIs externas. Así rotás credenciales sin afectar servicios no relacionados. Usá labels y namespaces para aislar secrets críticos del resto del cluster.</p>"
      },
      {
        "h2": "Rotación y gestión de secrets en producción",
        "body": "<p>Un secret sin política de rotación es una bomba de tiempo. Establecé ventanas de rotación según criticidad: cada 30 días para admin passwords, cada 90 para tokens de lectura. Automatizá con CronJobs que llamen a APIs externas (Vault, AWS Secrets Manager) y actualicen los secrets vía <code>kubectl patch</code>.</p><p>Herramientas como Sealed Secrets o External Secrets Operator te permiten almacenar secrets encriptados en Git y sincronizarlos con el cluster. Así auditás cambios sin exponer valores reales. Nunca commitees secrets sin cifrar, ni siquiera en repos privados.</p><p><strong>Checklist de seguridad:</strong> <ul><li>RBAC estricto (solo ServiceAccounts necesarios leen secrets)</li><li>Encryption-at-rest habilitado en etcd</li><li>Logs de API server no imprimen secret values</li><li>Secrets con TTL donde sea posible (cert-manager para TLS)</li></ul></p>"
      }
    ],
    "faq": [
      {
        "q": "¿Base64 es suficiente para proteger mis secrets?",
        "a": "No. Base64 es encoding, no encriptación. Cualquiera con acceso a etcd puede decodificarlos. Habilitá encryption-at-rest y RBAC para protección real."
      },
      {
        "q": "¿Puedo versionar secrets en Git?",
        "a": "Solo si los encriptás primero con herramientas como Sealed Secrets o SOPS. Nunca commitees secrets en plain text o base64 sin cifrar."
      },
      {
        "q": "¿Cómo roto un secret sin downtime?",
        "a": "Creá un nuevo secret con otro nombre, actualizá los Deployments para usar el nuevo, esperá el rollout, y después eliminá el viejo. O usá un operador que maneje blue-green rotation."
      },
      {
        "q": "¿Qué longitud necesito para un JWT secret seguro?",
        "a": "Mínimo 256 bits (32 bytes) para HS256. Para producción crítica, considerá 512 bits (64 bytes) y algoritmos asimétricos como RS256."
      }
    ]
  },
  "en": {
    "pageTitle": "Kubernetes Secret Generator | Genfy",
    "metaDesc": "Create secure secrets for Kubernetes manifests instantly. Generate tokens, passwords, and base64-encoded keys ready for production clusters.",
    "h1": "Kubernetes Secret Generator",
    "intro": "Generate credentials, tokens, and base64-encoded secrets for your Kubernetes manifests without exposing sensitive data in your terminal or command history.",
    "tag": "Security",
    "filterLabel": "Secret Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Secret Type",
        "items": [
          "API Token (32 bytes)",
          "Database Password",
          "JWT Secret Key",
          "TLS Certificate Data",
          "SSH Private Key",
          "Docker Registry Auth",
          "S3 Access Key",
          "Redis Password",
          "SMTP Credentials",
          "OAuth Client Secret",
          "Webhook Secret",
          "Encryption Key (AES-256)",
          "Service Account Token",
          "LDAP Bind Password",
          "RabbitMQ Credentials",
          "MongoDB Connection String",
          "GitHub Personal Access Token",
          "GitLab Runner Token",
          "Prometheus Basic Auth",
          "Grafana Admin Password",
          "Kafka SASL Password",
          "ElasticSearch Password",
          "PostgreSQL Superuser Password",
          "MySQL Root Password",
          "Azure Storage Key",
          "GCP Service Account JSON",
          "AWS Session Token",
          "Stripe API Key",
          "Twilio Auth Token",
          "SendGrid API Key",
          "Cloudflare API Token",
          "Datadog API Key",
          "New Relic License Key",
          "Sentry DSN",
          "Slack Webhook URL",
          "Discord Bot Token",
          "Telegram Bot Token",
          "Firebase Admin SDK",
          "Auth0 Client Secret",
          "Okta API Token",
          "HashiCorp Vault Token",
          "Consul ACL Token",
          "Nginx Basic Auth",
          "MinIO Access Key",
          "Ceph S3 Credentials",
          "NATS Server Password",
          "Consul Gossip Key",
          "etcd Peer Auth",
          "Harbor Registry Password",
          "Nexus Repository Token"
        ]
      },
      {
        "id": "encoding",
        "label": "Format",
        "items": [
          "base64 (Standard Kubernetes)",
          "Plain Text (for reference)",
          "JSON (Structured)",
          "YAML Snippet",
          "Hex String",
          "URL-Safe Base64"
        ]
      },
      {
        "id": "strength",
        "label": "Complexity",
        "items": [
          "High (64 characters)",
          "Medium (32 characters)",
          "Basic (16 characters)",
          "Paranoid (128 characters)",
          "Custom Length"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why you need a Kubernetes secret generator",
        "body": "<p>Creating secrets manually in Kubernetes introduces risks: your bash history stores credentials in plain text, system logs can expose them, and manual base64 encoding is error-prone. This generator produces secure values you can inject directly into manifests without touching the terminal.</p><p>Secrets generated here are cryptographically random using OS-level sources, not predictable pseudo-random. Each execution produces unique values suitable for production environments, from database passwords to third-party API tokens.</p><p><strong>Real use cases:</strong> configuring PostgreSQL in a StatefulSet, integrating external services via ConfigMaps, authenticating private Docker registries, or rotating credentials after a security incident.</p>"
      },
      {
        "h2": "How to apply secrets in your manifests",
        "body": "<p>Once generated, create a YAML file like <code>my-secret.yaml</code> with basic structure: <code>apiVersion: v1</code>, <code>kind: Secret</code>, <code>metadata.name</code>, and the <code>data</code> field with your base64-encoded keys. Apply with <code>kubectl apply -f my-secret.yaml</code>.</p><p>To consume from a Pod, mount it as a volume (<code>volumes.secret.secretName</code>) or inject as environment variable (<code>valueFrom.secretKeyRef</code>). The second option is more direct for simple credentials; the first works better for TLS certificates or complex config files.</p><p><strong>Common mistake:</strong> forgetting that base64 isn't encryption. If your cluster doesn't have encryption-at-rest enabled (EncryptionConfiguration), secrets are stored plain text in etcd. Always enable encryption in production.</p>"
      },
      {
        "h2": "Secret types and when to use each",
        "body": "<p>Kubernetes recognizes <code>Opaque</code> (generic), <code>kubernetes.io/tls</code> (certificates), <code>kubernetes.io/dockerconfigjson</code> (registry), and <code>kubernetes.io/service-account-token</code>. 90% of your secrets will be Opaque: passwords, API keys, custom tokens.</p><p>For private registries, use <code>docker-registry</code> type with <code>kubectl create secret docker-registry</code> or generate the <code>.dockerconfigjson</code> JSON manually. TLS secrets expect <code>tls.crt</code> and <code>tls.key</code> as mandatory keys.</p><p><strong>Practical tip:</strong> separate secrets by scope. One per database, another for external APIs. This way you rotate credentials without affecting unrelated services. Use labels and namespaces to isolate critical secrets from the rest of the cluster.</p>"
      },
      {
        "h2": "Secret rotation and production management",
        "body": "<p>A secret without rotation policy is a ticking time bomb. Establish rotation windows by criticality: every 30 days for admin passwords, every 90 for read-only tokens. Automate with CronJobs calling external APIs (Vault, AWS Secrets Manager) and updating secrets via <code>kubectl patch</code>.</p><p>Tools like Sealed Secrets or External Secrets Operator let you store encrypted secrets in Git and sync them to the cluster. This way you audit changes without exposing real values. Never commit unencrypted secrets, not even in private repos.</p><p><strong>Security checklist:</strong> <ul><li>Strict RBAC (only necessary ServiceAccounts read secrets)</li><li>Encryption-at-rest enabled in etcd</li><li>API server logs don't print secret values</li><li>Secrets with TTL where possible (cert-manager for TLS)</li></ul></p>"
      }
    ],
    "faq": [
      {
        "q": "Is base64 enough to protect my secrets?",
        "a": "No. Base64 is encoding, not encryption. Anyone with etcd access can decode them. Enable encryption-at-rest and RBAC for real protection."
      },
      {
        "q": "Can I version secrets in Git?",
        "a": "Only if you encrypt them first with tools like Sealed Secrets or SOPS. Never commit plain text or base64 secrets without encryption."
      },
      {
        "q": "How do I rotate a secret without downtime?",
        "a": "Create a new secret with a different name, update Deployments to use the new one, wait for rollout, then delete the old one. Or use an operator that handles blue-green rotation."
      },
      {
        "q": "What length do I need for a secure JWT secret?",
        "a": "Minimum 256 bits (32 bytes) for HS256. For critical production, consider 512 bits (64 bytes) and asymmetric algorithms like RS256."
      }
    ]
  }
};
