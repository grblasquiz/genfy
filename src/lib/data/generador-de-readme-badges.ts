import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-readme-badges",
    "en": "readme-badge-generator"
  },
  "category": "tools",
  "emoji": "🏷️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de README Badges | Genfy",
    "metaDesc": "Genera badges markdown para tus README con shields.io. Copiá y pegá insignias de build, coverage, versión, licencia y más. Personalización instantánea.",
    "h1": "Generador de README Badges",
    "intro": "Creá badges profesionales en markdown para tu documentación. Desde estado de build hasta estadísticas de npm, generá el código listo para usar.",
    "tag": "Herramientas",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar badges",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "build",
        "label": "Build & CI/CD",
        "items": [
          "![Build Status](https://img.shields.io/github/actions/workflow/status/usuario/repo/ci.yml?branch=main&style=flat-square)",
          "![CircleCI](https://img.shields.io/circleci/build/github/usuario/repo/main?style=flat-square)",
          "![Travis CI](https://img.shields.io/travis/usuario/repo/main?style=flat-square)",
          "![GitLab CI](https://img.shields.io/gitlab/pipeline/usuario/repo/main?style=flat-square)",
          "![Azure DevOps](https://img.shields.io/azure-devops/build/usuario/proyecto/definitionId?style=flat-square)",
          "![Jenkins](https://img.shields.io/jenkins/build?jobUrl=https://jenkins.example.com/job/proyecto&style=flat-square)",
          "![Bitbucket Pipelines](https://img.shields.io/bitbucket/pipelines/usuario/repo?style=flat-square)",
          "![AppVeyor](https://img.shields.io/appveyor/build/usuario/repo?style=flat-square)"
        ]
      },
      {
        "id": "coverage",
        "label": "Cobertura de tests",
        "items": [
          "![Codecov](https://img.shields.io/codecov/c/github/usuario/repo?style=flat-square)",
          "![Coveralls](https://img.shields.io/coveralls/github/usuario/repo?style=flat-square)",
          "![Code Climate coverage](https://img.shields.io/codeclimate/coverage/usuario/repo?style=flat-square)",
          "![Codacy coverage](https://img.shields.io/codacy/coverage/hash?style=flat-square)",
          "![SonarCloud Coverage](https://img.shields.io/sonar/coverage/proyecto?server=https://sonarcloud.io&style=flat-square)",
          "![Jest Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen?style=flat-square)",
          "![Pytest Coverage](https://img.shields.io/badge/coverage-92%25-green?style=flat-square)"
        ]
      },
      {
        "id": "version",
        "label": "Versión y releases",
        "items": [
          "![npm version](https://img.shields.io/npm/v/nombre-paquete?style=flat-square)",
          "![PyPI version](https://img.shields.io/pypi/v/nombre-paquete?style=flat-square)",
          "![GitHub release](https://img.shields.io/github/v/release/usuario/repo?style=flat-square)",
          "![GitHub tag](https://img.shields.io/github/v/tag/usuario/repo?style=flat-square)",
          "![Crates.io version](https://img.shields.io/crates/v/nombre-crate?style=flat-square)",
          "![Maven Central](https://img.shields.io/maven-central/v/group/artifact?style=flat-square)",
          "![NuGet version](https://img.shields.io/nuget/v/NombrePaquete?style=flat-square)",
          "![RubyGems version](https://img.shields.io/gem/v/nombre-gema?style=flat-square)",
          "![Packagist version](https://img.shields.io/packagist/v/vendor/package?style=flat-square)",
          "![Docker Image Version](https://img.shields.io/docker/v/usuario/imagen?style=flat-square)"
        ]
      },
      {
        "id": "license",
        "label": "Licencia",
        "items": [
          "![License MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)",
          "![License Apache-2.0](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)",
          "![License GPL-3.0](https://img.shields.io/badge/license-GPL%20v3-blue?style=flat-square)",
          "![License BSD-3](https://img.shields.io/badge/license-BSD--3-blue?style=flat-square)",
          "![License ISC](https://img.shields.io/badge/license-ISC-blue?style=flat-square)",
          "![License MPL-2.0](https://img.shields.io/badge/license-MPL%202.0-blue?style=square)",
          "![GitHub license](https://img.shields.io/github/license/usuario/repo?style=flat-square)"
        ]
      },
      {
        "id": "downloads",
        "label": "Descargas y uso",
        "items": [
          "![npm downloads](https://img.shields.io/npm/dm/nombre-paquete?style=flat-square)",
          "![npm total downloads](https://img.shields.io/npm/dt/nombre-paquete?style=flat-square)",
          "![PyPI downloads](https://img.shields.io/pypi/dm/nombre-paquete?style=flat-square)",
          "![Docker Pulls](https://img.shields.io/docker/pulls/usuario/imagen?style=flat-square)",
          "![GitHub downloads](https://img.shields.io/github/downloads/usuario/repo/total?style=flat-square)",
          "![Crates.io downloads](https://img.shields.io/crates/d/nombre-crate?style=flat-square)",
          "![NuGet downloads](https://img.shields.io/nuget/dt/NombrePaquete?style=flat-square)"
        ]
      },
      {
        "id": "quality",
        "label": "Calidad de código",
        "items": [
          "![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/usuario/repo?style=flat-square)",
          "![Codacy grade](https://img.shields.io/codacy/grade/hash?style=flat-square)",
          "![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/usuario/repo?style=flat-square)",
          "![SonarCloud Quality Gate](https://img.shields.io/sonar/quality_gate/proyecto?server=https://sonarcloud.io&style=flat-square)",
          "![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/usuario/repo?style=flat-square)",
          "![Scrutinizer quality](https://img.shields.io/scrutinizer/quality/g/usuario/repo?style=flat-square)",
          "![DeepSource issues](https://img.shields.io/deepsource/issues/github/usuario/repo?style=flat-square)"
        ]
      },
      {
        "id": "social",
        "label": "Social y comunidad",
        "items": [
          "![GitHub stars](https://img.shields.io/github/stars/usuario/repo?style=social)",
          "![GitHub forks](https://img.shields.io/github/forks/usuario/repo?style=social)",
          "![GitHub watchers](https://img.shields.io/github/watchers/usuario/repo?style=social)",
          "![GitHub followers](https://img.shields.io/github/followers/usuario?style=social)",
          "![Twitter Follow](https://img.shields.io/twitter/follow/usuario?style=social)",
          "![Discord](https://img.shields.io/discord/server-id?style=social)",
          "![Reddit User Karma](https://img.shields.io/reddit/user-karma/combined/usuario?style=social)",
          "![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/channel-id?style=social)"
        ]
      },
      {
        "id": "activity",
        "label": "Actividad del proyecto",
        "items": [
          "![GitHub last commit](https://img.shields.io/github/last-commit/usuario/repo?style=flat-square)",
          "![GitHub commit activity](https://img.shields.io/github/commit-activity/m/usuario/repo?style=flat-square)",
          "![GitHub issues](https://img.shields.io/github/issues/usuario/repo?style=flat-square)",
          "![GitHub closed issues](https://img.shields.io/github/issues-closed/usuario/repo?style=flat-square)",
          "![GitHub pull requests](https://img.shields.io/github/issues-pr/usuario/repo?style=flat-square)",
          "![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/usuario/repo?style=flat-square)",
          "![GitHub contributors](https://img.shields.io/github/contributors/usuario/repo?style=flat-square)",
          "![Maintenance](https://img.shields.io/maintenance/yes/2024?style=flat-square)"
        ]
      },
      {
        "id": "tech",
        "label": "Tecnologías",
        "items": [
          "![Node.js version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square)",
          "![Python version](https://img.shields.io/badge/python-3.9%2B-blue?style=flat-square)",
          "![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)",
          "![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)",
          "![Vue.js](https://img.shields.io/badge/Vue.js-3-4fc08d?style=flat-square&logo=vue.js)",
          "![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)",
          "![Docker](https://img.shields.io/badge/Docker-ready-2496ed?style=flat-square&logo=docker)",
          "![Kubernetes](https://img.shields.io/badge/Kubernetes-compatible-326ce5?style=flat-square&logo=kubernetes)",
          "![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)",
          "![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47a248?style=flat-square&logo=mongodb)"
        ]
      },
      {
        "id": "platform",
        "label": "Plataformas",
        "items": [
          "![Platform](https://img.shields.io/badge/platform-linux%20%7C%20macos%20%7C%20windows-lightgrey?style=flat-square)",
          "![OS Linux](https://img.shields.io/badge/OS-Linux-fcc624?style=flat-square&logo=linux&logoColor=black)",
          "![OS macOS](https://img.shields.io/badge/OS-macOS-000000?style=flat-square&logo=apple)",
          "![OS Windows](https://img.shields.io/badge/OS-Windows-0078d6?style=flat-square&logo=windows)",
          "![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)",
          "![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00c7b7?style=flat-square&logo=netlify)",
          "![Heroku](https://img.shields.io/badge/Deployed%20on-Heroku-430098?style=flat-square&logo=heroku)",
          "![AWS](https://img.shields.io/badge/Hosted%20on-AWS-ff9900?style=flat-square&logo=amazon-aws)"
        ]
      },
      {
        "id": "custom",
        "label": "Badges personalizados",
        "items": [
          "![Custom](https://img.shields.io/badge/custom-badge-blue?style=flat-square)",
          "![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=flat-square)",
          "![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)",
          "![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square)",
          "![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-ff69b4?style=flat-square)",
          "![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-orange?style=flat-square)",
          "![Status: Active](https://img.shields.io/badge/status-active-success?style=flat-square)",
          "![Status: Beta](https://img.shields.io/badge/status-beta-yellow?style=flat-square)",
          "![Status: Experimental](https://img.shields.io/badge/status-experimental-orange?style=flat-square)",
          "![Uptime 99.9%](https://img.shields.io/badge/uptime-99.9%25-brightgreen?style=flat-square)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de una URL de badge de shields.io",
        "body": "<p>Los badges de shields.io siguen la estructura: <strong>https://img.shields.io/{tipo}/{parámetros}?{opciones}</strong>. El tipo determina la fuente de datos (github, npm, badge) y los parámetros varían según el tipo. Por ejemplo, un badge de GitHub actions usa <code>/github/actions/workflow/status/usuario/repo/workflow.yml</code>, mientras que un badge estático usa <code>/badge/label-mensaje-color</code>.</p><p>Las opciones de query string más útiles: <code>style=</code> (flat, flat-square, plastic, for-the-badge, social), <code>logo=</code> (nombre de simple-icons), <code>logoColor=</code> (hex sin #), <code>label=</code> (override del texto izquierdo), <code>color=</code> (hex o named como brightgreen, blue, red). Ejemplo completo: <code>?style=flat-square&logo=github&logoColor=white&label=build</code>.</p><p>Para badges dinámicos (que consultan APIs), shields.io cachea resultados por 5 minutos normalmente. Podés forzar recarga agregando <code>&cacheBuster=timestamp</code>. Los badges estáticos son inmediatos porque no consultan nada externo. Si un badge tarda en cargar, probablemente la API externa esté lenta o el proyecto no existe con ese path exacto.</p>"
      },
      {
        "h2": "Estrategia de badges en README: cuáles incluir y cuáles evitar",
        "body": "<p>Un README efectivo muestra <strong>4-8 badges máximo en la parte superior</strong>: estado de build (crítico), cobertura de tests (si es +70%), versión actual, y licencia. Todo lo demás es secundario y puede ir en secciones específicas o se omite. Demasiados badges arriba crean 'banner blindness' y hacen que los visitantes ignoren todos.</p><p>Badges que SÍ agregan valor: build status (muestra si el proyecto funciona), coverage (indica calidad de tests), version (ayuda a saber si es estable), downloads/month (valida popularidad), last commit (indica actividad reciente), license (información legal clave). Badges que NO agregan valor real: 'made with love', badges de todos los lenguajes usados si son obvios del código, múltiples badges de lo mismo (no necesitás npm downloads diarios, semanales Y mensuales).</p><p>Para proyectos empresariales, priorizá badges de <strong>confiabilidad</strong>: uptime, security scanning (Snyk, Dependabot), compliance (SOC2, HIPAA si aplica). Para proyectos open source comunitarios, priorizá badges <strong>sociales</strong>: contributors, PRs welcome, Discord/chat. El contexto determina qué badges comunican seriedad versus accesibilidad.</p>"
      },
      {
        "h2": "Creación de badges personalizados: estáticos vs dinámicos",
        "body": "<p>Badges <strong>estáticos</strong> usan la sintaxis: <code>![Label](https://img.shields.io/badge/LABEL-MESSAGE-COLOR)</code>. Reemplazá espacios con %20 o guiones. Colores pueden ser hex (sin #) o nombres: brightgreen, green, yellowgreen, yellow, orange, red, blue, lightgrey, blueviolet, ff69b4. Ejemplo: <code>/badge/coverage-85%25-brightgreen</code> crea un badge que dice 'coverage 85%'.</p><p>Badges <strong>dinámicos con endpoint.json</strong>: shields.io puede consultar cualquier endpoint JSON público. Formato: <code>![Label](https://img.shields.io/endpoint?url=https://tu-api.com/badge)</code>. Tu endpoint debe devolver: <code>{\"schemaVersion\":1,\"label\":\"custom\",\"message\":\"valor\",\"color\":\"blue\"}</code>. Útil para métricas propias: usuarios activos, transacciones/día, latencia promedio. Implementá cache en tu lado para no saturar tu servidor.</p><p>Para badges de <strong>repositorios privados</strong>, algunos servicios requieren tokens. Shields.io soporta esto vía query params pero exponé el token públicamente en tu README. Mejor solución: generá el badge server-side en tu CI y subiló como artefacto, o usá servicios como Codecov que manejan repos privados con webhooks. No hardcodees tokens de acceso en URLs públicas nunca.</p>"
      },
      {
        "h2": "Automatización: generar badges en CI/CD",
        "body": "<p>En tu workflow de GitHub Actions, generá badges de coverage automáticamente: después de correr tests con <code>jest --coverage</code>, usá una action como <code>jest-coverage-badges</code> que parsea <code>coverage/coverage-summary.json</code> y actualiza un badge SVG en el repo. Commitea el SVG y referencialo en el README como <code>![Coverage](./badges/coverage.svg)</code>. Esto evita dependencias externas y funciona en repos privados.</p><p>Para badges de <strong>performance</strong> (bundle size, lighthouse scores), herramientas como <code>bundlesize</code> y <code>lighthouse-ci</code> pueden generar badges automáticamente. Ejemplo: corre Lighthouse en CI, extraé el score, postealo a un endpoint que devuelva JSON de shields.io, y referencialo en el README. El badge se actualiza en cada merge a main.</p><p>Errores frecuentes: olvidar actualizar los badges cuando cambiás el nombre del repo (las URLs quedan rotas), no configurar permisos para que el CI escriba en el repo (los badges no se actualizan), o generar badges en branches feature que nunca se mergean (nadie los ve). Configurá badges solo en la rama principal y hacé que el proceso sea parte del merge automáticamente usando branch protection rules.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Por qué mi badge muestra 'unknown' o 'invalid'?",
        "a": "Verificá que el usuario/repo en la URL sea correcto y que el proyecto sea público. Algunos badges requieren configuración previa en el servicio (ej: Codecov)."
      },
      {
        "q": "¿Cómo cambio el estilo de todos mis badges a la vez?",
        "a": "Agregá <code>?style=flat-square</code> (o el que prefieras) al final de cada URL. Considerá usar un script de find-replace en tu README."
      },
      {
        "q": "¿Los badges afectan el rendimiento de carga del README?",
        "a": "Mínimamente: shields.io usa CDN y los badges son pequeños. Pero +15 badges pueden sumar 200-300ms. GitHub cachea imágenes, así que el impacto es bajo."
      },
      {
        "q": "¿Puedo usar badges de shields.io comercialmente?",
        "a": "Sí, shields.io es open source (CC0) y el servicio es gratuito. Para alto volumen (>1M requests/mes), considerá self-hosting."
      }
    ]
  },
  "en": {
    "pageTitle": "README Badge Generator | Genfy",
    "metaDesc": "Generate markdown badges for your README with shields.io. Copy and paste build, coverage, version, license badges and more. Instant customization.",
    "h1": "README Badge Generator",
    "intro": "Create professional markdown badges for your documentation. From build status to npm stats, generate ready-to-use code instantly.",
    "tag": "Tools",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate badges",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "build",
        "label": "Build & CI/CD",
        "items": [
          "![Build Status](https://img.shields.io/github/actions/workflow/status/username/repo/ci.yml?branch=main&style=flat-square)",
          "![CircleCI](https://img.shields.io/circleci/build/github/username/repo/main?style=flat-square)",
          "![Travis CI](https://img.shields.io/travis/username/repo/main?style=flat-square)",
          "![GitLab CI](https://img.shields.io/gitlab/pipeline/username/repo/main?style=flat-square)",
          "![Azure DevOps](https://img.shields.io/azure-devops/build/username/project/definitionId?style=flat-square)",
          "![Jenkins](https://img.shields.io/jenkins/build?jobUrl=https://jenkins.example.com/job/project&style=flat-square)",
          "![Bitbucket Pipelines](https://img.shields.io/bitbucket/pipelines/username/repo?style=flat-square)",
          "![AppVeyor](https://img.shields.io/appveyor/build/username/repo?style=flat-square)"
        ]
      },
      {
        "id": "coverage",
        "label": "Test coverage",
        "items": [
          "![Codecov](https://img.shields.io/codecov/c/github/username/repo?style=flat-square)",
          "![Coveralls](https://img.shields.io/coveralls/github/username/repo?style=flat-square)",
          "![Code Climate coverage](https://img.shields.io/codeclimate/coverage/username/repo?style=flat-square)",
          "![Codacy coverage](https://img.shields.io/codacy/coverage/hash?style=flat-square)",
          "![SonarCloud Coverage](https://img.shields.io/sonar/coverage/project?server=https://sonarcloud.io&style=flat-square)",
          "![Jest Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen?style=flat-square)",
          "![Pytest Coverage](https://img.shields.io/badge/coverage-92%25-green?style=flat-square)"
        ]
      },
      {
        "id": "version",
        "label": "Version and releases",
        "items": [
          "![npm version](https://img.shields.io/npm/v/package-name?style=flat-square)",
          "![PyPI version](https://img.shields.io/pypi/v/package-name?style=flat-square)",
          "![GitHub release](https://img.shields.io/github/v/release/username/repo?style=flat-square)",
          "![GitHub tag](https://img.shields.io/github/v/tag/username/repo?style=flat-square)",
          "![Crates.io version](https://img.shields.io/crates/v/crate-name?style=flat-square)",
          "![Maven Central](https://img.shields.io/maven-central/v/group/artifact?style=flat-square)",
          "![NuGet version](https://img.shields.io/nuget/v/PackageName?style=flat-square)",
          "![RubyGems version](https://img.shields.io/gem/v/gem-name?style=flat-square)",
          "![Packagist version](https://img.shields.io/packagist/v/vendor/package?style=flat-square)",
          "![Docker Image Version](https://img.shields.io/docker/v/username/image?style=flat-square)"
        ]
      },
      {
        "id": "license",
        "label": "License",
        "items": [
          "![License MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)",
          "![License Apache-2.0](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)",
          "![License GPL-3.0](https://img.shields.io/badge/license-GPL%20v3-blue?style=flat-square)",
          "![License BSD-3](https://img.shields.io/badge/license-BSD--3-blue?style=flat-square)",
          "![License ISC](https://img.shields.io/badge/license-ISC-blue?style=flat-square)",
          "![License MPL-2.0](https://img.shields.io/badge/license-MPL%202.0-blue?style=flat-square)",
          "![GitHub license](https://img.shields.io/github/license/username/repo?style=flat-square)"
        ]
      },
      {
        "id": "downloads",
        "label": "Downloads and usage",
        "items": [
          "![npm downloads](https://img.shields.io/npm/dm/package-name?style=flat-square)",
          "![npm total downloads](https://img.shields.io/npm/dt/package-name?style=flat-square)",
          "![PyPI downloads](https://img.shields.io/pypi/dm/package-name?style=flat-square)",
          "![Docker Pulls](https://img.shields.io/docker/pulls/username/image?style=flat-square)",
          "![GitHub downloads](https://img.shields.io/github/downloads/username/repo/total?style=flat-square)",
          "![Crates.io downloads](https://img.shields.io/crates/d/crate-name?style=flat-square)",
          "![NuGet downloads](https://img.shields.io/nuget/dt/PackageName?style=flat-square)"
        ]
      },
      {
        "id": "quality",
        "label": "Code quality",
        "items": [
          "![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/username/repo?style=flat-square)",
          "![Codacy grade](https://img.shields.io/codacy/grade/hash?style=flat-square)",
          "![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/username/repo?style=flat-square)",
          "![SonarCloud Quality Gate](https://img.shields.io/sonar/quality_gate/project?server=https://sonarcloud.io&style=flat-square)",
          "![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/username/repo?style=flat-square)",
          "![Scrutinizer quality](https://img.shields.io/scrutinizer/quality/g/username/repo?style=flat-square)",
          "![DeepSource issues](https://img.shields.io/deepsource/issues/github/username/repo?style=flat-square)"
        ]
      },
      {
        "id": "social",
        "label": "Social and community",
        "items": [
          "![GitHub stars](https://img.shields.io/github/stars/username/repo?style=social)",
          "![GitHub forks](https://img.shields.io/github/forks/username/repo?style=social)",
          "![GitHub watchers](https://img.shields.io/github/watchers/username/repo?style=social)",
          "![GitHub followers](https://img.shields.io/github/followers/username?style=social)",
          "![Twitter Follow](https://img.shields.io/twitter/follow/username?style=social)",
          "![Discord](https://img.shields.io/discord/server-id?style=social)",
          "![Reddit User Karma](https://img.shields.io/reddit/user-karma/combined/username?style=social)",
          "![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/channel-id?style=social)"
        ]
      },
      {
        "id": "activity",
        "label": "Project activity",
        "items": [
          "![GitHub last commit](https://img.shields.io/github/last-commit/username/repo?style=flat-square)",
          "![GitHub commit activity](https://img.shields.io/github/commit-activity/m/username/repo?style=flat-square)",
          "![GitHub issues](https://img.shields.io/github/issues/username/repo?style=flat-square)",
          "![GitHub closed issues](https://img.shields.io/github/issues-closed/username/repo?style=flat-square)",
          "![GitHub pull requests](https://img.shields.io/github/issues-pr/username/repo?style=flat-square)",
          "![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/username/repo?style=flat-square)",
          "![GitHub contributors](https://img.shields.io/github/contributors/username/repo?style=flat-square)",
          "![Maintenance](https://img.shields.io/maintenance/yes/2024?style=flat-square)"
        ]
      },
      {
        "id": "tech",
        "label": "Technologies",
        "items": [
          "![Node.js version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square)",
          "![Python version](https://img.shields.io/badge/python-3.9%2B-blue?style=flat-square)",
          "![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)",
          "![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)",
          "![Vue.js](https://img.shields.io/badge/Vue.js-3-4fc08d?style=flat-square&logo=vue.js)",
          "![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)",
          "![Docker](https://img.shields.io/badge/Docker-ready-2496ed?style=flat-square&logo=docker)",
          "![Kubernetes](https://img.shields.io/badge/Kubernetes-compatible-326ce5?style=flat-square&logo=kubernetes)",
          "![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)",
          "![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47a248?style=flat-square&logo=mongodb)"
        ]
      },
      {
        "id": "platform",
        "label": "Platforms",
        "items": [
          "![Platform](https://img.shields.io/badge/platform-linux%20%7C%20macos%20%7C%20windows-lightgrey?style=flat-square)",
          "![OS Linux](https://img.shields.io/badge/OS-Linux-fcc624?style=flat-square&logo=linux&logoColor=black)",
          "![OS macOS](https://img.shields.io/badge/OS-macOS-000000?style=flat-square&logo=apple)",
          "![OS Windows](https://img.shields.io/badge/OS-Windows-0078d6?style=flat-square&logo=windows)",
          "![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)",
          "![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00c7b7?style=flat-square&logo=netlify)",
          "![Heroku](https://img.shields.io/badge/Deployed%20on-Heroku-430098?style=flat-square&logo=heroku)",
          "![AWS](https://img.shields.io/badge/Hosted%20on-AWS-ff9900?style=flat-square&logo=amazon-aws)"
        ]
      },
      {
        "id": "custom",
        "label": "Custom badges",
        "items": [
          "![Custom](https://img.shields.io/badge/custom-badge-blue?style=flat-square)",
          "![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=flat-square)",
          "![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)",
          "![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square)",
          "![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-ff69b4?style=flat-square)",
          "![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95-orange?style=flat-square)",
          "![Status: Active](https://img.shields.io/badge/status-active-success?style=flat-square)",
          "![Status: Beta](https://img.shields.io/badge/status-beta-yellow?style=flat-square)",
          "![Status: Experimental](https://img.shields.io/badge/status-experimental-orange?style=flat-square)",
          "![Uptime 99.9%](https://img.shields.io/badge/uptime-99.9%25-brightgreen?style=flat-square)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a shields.io badge URL",
        "body": "<p>Shields.io badges follow the structure: <strong>https://img.shields.io/{type}/{parameters}?{options}</strong>. The type determines the data source (github, npm, badge) and parameters vary by type. For example, a GitHub actions badge uses <code>/github/actions/workflow/status/username/repo/workflow.yml</code>, while a static badge uses <code>/badge/label-message-color</code>.</p><p>Most useful query string options: <code>style=</code> (flat, flat-square, plastic, for-the-badge, social), <code>logo=</code> (simple-icons name), <code>logoColor=</code> (hex without #), <code>label=</code> (override left text), <code>color=</code> (hex or named like brightgreen, blue, red). Complete example: <code>?style=flat-square&logo=github&logoColor=white&label=build</code>.</p><p>For dynamic badges (that query APIs), shields.io normally caches results for 5 minutes. You can force reload by adding <code>&cacheBuster=timestamp</code>. Static badges are immediate because they don't query anything external. If a badge is slow to load, likely the external API is slow or the project doesn't exist at that exact path.</p>"
      },
      {
        "h2": "README badge strategy: which to include and which to avoid",
        "body": "<p>An effective README shows <strong>4-8 badges maximum at the top</strong>: build status (critical), test coverage (if +70%), current version, and license. Everything else is secondary and can go in specific sections or be omitted. Too many badges at the top create 'banner blindness' and make visitors ignore all of them.</p><p>Badges that DO add value: build status (shows if project works), coverage (indicates test quality), version (helps know if stable), downloads/month (validates popularity), last commit (indicates recent activity), license (key legal information). Badges that DON'T add real value: 'made with love', badges of all languages used if obvious from code, multiple badges of the same thing (you don't need npm downloads daily, weekly AND monthly).</p><p>For enterprise projects, prioritize <strong>reliability badges</strong>: uptime, security scanning (Snyk, Dependabot), compliance (SOC2, HIPAA if applicable). For community open source projects, prioritize <strong>social badges</strong>: contributors, PRs welcome, Discord/chat. Context determines which badges communicate seriousness versus accessibility.</p>"
      },
      {
        "h2": "Creating custom badges: static vs dynamic",
        "body": "<p><strong>Static badges</strong> use the syntax: <code>![Label](https://img.shields.io/badge/LABEL-MESSAGE-COLOR)</code>. Replace spaces with %20 or hyphens. Colors can be hex (without #) or names: brightgreen, green, yellowgreen, yellow, orange, red, blue, lightgrey, blueviolet, ff69b4. Example: <code>/badge/coverage-85%25-brightgreen</code> creates a badge saying 'coverage 85%'.</p><p><strong>Dynamic badges with endpoint.json</strong>: shields.io can query any public JSON endpoint. Format: <code>![Label](https://img.shields.io/endpoint?url=https://your-api.com/badge)</code>. Your endpoint must return: <code>{\"schemaVersion\":1,\"label\":\"custom\",\"message\":\"value\",\"color\":\"blue\"}</code>. Useful for own metrics: active users, transactions/day, average latency. Implement caching on your side to avoid saturating your server.</p><p>For <strong>private repository badges</strong>, some services require tokens. Shields.io supports this via query params but exposes the token publicly in your README. Better solution: generate the badge server-side in your CI and upload as artifact, or use services like Codecov that handle private repos with webhooks. Never hardcode access tokens in public URLs.</p>"
      },
      {
        "h2": "Automation: generating badges in CI/CD",
        "body": "<p>In your GitHub Actions workflow, generate coverage badges automatically: after running tests with <code>jest --coverage</code>, use an action like <code>jest-coverage-badges</code> that parses <code>coverage/coverage-summary.json</code> and updates a badge SVG in the repo. Commit the SVG and reference it in README as <code>![Coverage](./badges/coverage.svg)</code>. This avoids external dependencies and works in private repos.</p><p>For <strong>performance badges</strong> (bundle size, lighthouse scores), tools like <code>bundlesize</code> and <code>lighthouse-ci</code> can generate badges automatically. Example: run Lighthouse in CI, extract the score, post it to an endpoint that returns shields.io JSON, and reference it in README. The badge updates on every merge to main.</p><p>Common mistakes: forgetting to update badges when changing repo name (URLs break), not configuring permissions for CI to write to repo (badges don't update), or generating badges in feature branches that never merge (nobody sees them). Configure badges only on main branch and make the process part of automatic merge using branch protection rules.</p>"
      }
    ],
    "faq": [
      {
        "q": "Why does my badge show 'unknown' or 'invalid'?",
        "a": "Verify the username/repo in the URL is correct and that the project is public. Some badges require prior configuration in the service (e.g., Codecov)."
      },
      {
        "q": "How do I change the style of all my badges at once?",
        "a": "Add <code>?style=flat-square</code> (or your preference) to the end of each URL. Consider using a find-replace script in your README."
      },
      {
        "q": "Do badges affect README loading performance?",
        "a": "Minimally: shields.io uses CDN and badges are small. But +15 badges can add 200-300ms. GitHub caches images, so impact is low."
      },
      {
        "q": "Can I use shields.io badges commercially?",
        "a": "Yes, shields.io is open source (CC0) and the service is free. For high volume (>1M requests/month), consider self-hosting."
      }
    ]
  }
};
