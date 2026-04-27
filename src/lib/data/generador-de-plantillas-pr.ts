import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-plantillas-pr",
    "en": "pr-template-generator"
  },
  "category": "work",
  "emoji": "🔀",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Plantillas de Pull Request | Genfy",
    "metaDesc": "Plantillas de PR con checklist y secciones estructuradas. Mejorá code review con descripciones claras que facilitan la revisión y aprobación de cambios.",
    "h1": "Generador de Plantillas de Pull Request",
    "intro": "Creá pull requests que se revisen solos con plantillas estructuradas. Cada template incluye secciones claras, checklist de validación y contexto suficiente para que tus reviewers entiendan el cambio sin necesidad de arqueología de código.",
    "tag": "Trabajo",
    "filterLabel": "Tipo de PR",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "feature",
        "label": "Nueva funcionalidad",
        "items": [
          "## 🎯 Descripción\n\n<!-- Explicá qué funcionalidad agregaste y por qué -->\n\n## 📋 Contexto\n\n**Problema que resuelve:**\n<!-- Linkeá el issue o describí el pain point -->\n\n**Decisiones de diseño:**\n<!-- Por qué elegiste este approach vs otras alternativas -->\n\n## 🧪 Testing\n\n- [ ] Tests unitarios agregados\n- [ ] Tests de integración actualizados\n- [ ] Testeado manualmente en entorno local\n- [ ] Edge cases considerados\n\n**Escenarios testeados:**\n<!-- Listá los casos que validaste -->\n\n## 📸 Screenshots/GIFs\n\n<!-- Si hay cambios visuales, mostralos acá -->\n\n## 🚀 Deploy considerations\n\n- [ ] Migrations incluidas\n- [ ] Variables de entorno documentadas\n- [ ] Backwards compatible\n- [ ] Feature flags configurados (si aplica)\n\n## 👀 Review focus\n\n<!-- Guiá a tus reviewers: qué querés que miren especialmente -->\n\n## 📚 Docs actualizadas\n\n- [ ] README\n- [ ] API docs\n- [ ] Comentarios en código",
          "## ✨ Feature: [Nombre corto]\n\n### ¿Qué hace este PR?\n\n<!-- Una línea que explique el cambio -->\n\n### ¿Por qué lo necesitamos?\n\n<!-- Business value o problema técnico que resuelve -->\n\n### Cómo funciona\n\n<!-- High-level de la implementación -->\n\n### Testing manual\n\n**Setup:**\n```bash\n# Pasos para reproducir localmente\n```\n\n**Happy path:**\n1. \n2. \n\n**Error scenarios:**\n- \n\n### Checklist técnico\n\n- [ ] Código cumple style guide\n- [ ] Sin console.logs o debuggers\n- [ ] Tests pasan en CI\n- [ ] Sin warnings nuevos\n- [ ] Performance considerado\n\n### Impacto\n\n**Archivos cambiados:** X files, +Y/-Z lines\n**Dependencias nuevas:** Ninguna / [Lista]\n**Breaking changes:** No / [Descripción]",
          "## 🔧 Nueva funcionalidad: [Título]\n\n**Issue relacionado:** #XXX\n\n### Resumen ejecutivo\n\n<!-- 2-3 frases para reviewers con poco tiempo -->\n\n### Cambios principales\n\n1. **[Componente/Módulo]:** Descripción\n2. **[Componente/Módulo]:** Descripción\n\n### Antes y Después\n\n**Antes:**\n<!-- Comportamiento previo -->\n\n**Después:**\n<!-- Nuevo comportamiento -->\n\n### Testing\n\n**Unit tests:**\n- `describe(...)`: Qué cubre\n\n**Integration:**\n- Escenario testeado\n\n**Manual:**\n- [ ] Chrome\n- [ ] Firefox\n- [ ] Safari (si aplica)\n- [ ] Mobile\n\n### Security considerations\n\n<!-- Input validation, autenticación, etc -->\n\n### Rollback plan\n\n<!-- Cómo revertir si algo falla en prod -->\n\n### Pre-merge checklist\n\n- [ ] Branch actualizado con main/develop\n- [ ] Conflicts resueltos\n- [ ] CI verde\n- [ ] Al menos 1 approval\n- [ ] Docs actualizadas"
        ]
      },
      {
        "id": "bugfix",
        "label": "Corrección de bugs",
        "items": [
          "## 🐛 Bugfix: [Título del bug]\n\n**Issue:** #XXX\n**Severidad:** Critical / High / Medium / Low\n\n### Síntoma\n\n<!-- Qué estaba rompiendo y cómo se manifestaba -->\n\n### Reproducción\n\n**Antes del fix:**\n1. Paso 1\n2. Paso 2\n3. 💥 Error observado\n\n### Root cause\n\n<!-- Análisis técnico: qué línea/lógica causaba el bug -->\n\n### Solución implementada\n\n<!-- Explicá el fix en términos técnicos -->\n\n### Tests agregados\n\n- [ ] Regression test para este bug específico\n- [ ] Tests para edge cases relacionados\n\n**Cobertura:**\n<!-- Porcentaje o áreas cubiertas -->\n\n### Validación\n\n- [ ] Bug ya no se reproduce localmente\n- [ ] Tests pasan\n- [ ] No introduce regresiones (testeado X escenarios)\n\n### Side effects\n\n<!-- Otros comportamientos que cambian con este fix -->\n\n### Needs backport\n\n- [ ] Sí, a versión X.Y\n- [ ] No aplica",
          "## 🔥 Hotfix: [Descripción urgente]\n\n**Producción afectada:** Sí / No\n**Downtime:** X minutos\n**Users impactados:** ~N users\n\n### El problema\n\n<!-- Qué está fallando ahora mismo -->\n\n### Causa identificada\n\n<!-- Root cause rápido -->\n\n### Fix aplicado\n\n```diff\n- código viejo\n+ código nuevo\n```\n\n### Verificación\n\n- [ ] Testeado en staging\n- [ ] Logs monitoreados\n- [ ] Métricas validadas\n\n### Post-mortem\n\n<!-- Link al análisis completo (si aplica) -->\n\n### TODO después del hotfix\n\n- [ ] Tests comprehensivos\n- [ ] Refactor si el fix es sucio\n- [ ] Documentar en runbook",
          "## 🛠️ Bug resuelto: [Título]\n\n**Reporter:** @usuario\n**Discovered:** YYYY-MM-DD\n**Environment:** Prod / Staging / Dev\n\n### Descripción del bug\n\n<!-- Síntomas y comportamiento erróneo -->\n\n### Steps to reproduce\n\n```\n1. \n2. \n3. \n```\n\n**Expected:** ...\n**Actual:** ...\n\n### Investigation\n\n<!-- Cómo debuggeaste, qué pistas seguiste -->\n\n### The fix\n\n**Files changed:**\n- `path/to/file.ext`: Qué se modificó\n\n**Logic:**\n<!-- Explicación técnica del cambio -->\n\n### Regression prevention\n\n- [ ] Test case agregado\n- [ ] Edge cases cubiertos\n- [ ] Linter rules actualizados (si aplica)\n\n### Performance impact\n\n<!-- Si el fix cambia performance, mediciones antes/después -->\n\n### Release notes\n\n```\nFixed: [Descripción user-facing del bug]\n```"
        ]
      },
      {
        "id": "refactor",
        "label": "Refactoring",
        "items": [
          "## ♻️ Refactor: [Componente/Módulo]\n\n### Motivación\n\n<!-- Por qué este refactor ahora -->\n\n### Problemas del código actual\n\n1. \n2. \n3. \n\n### Cambios arquitecturales\n\n**Antes:**\n```\n[Estructura vieja]\n```\n\n**Después:**\n```\n[Estructura nueva]\n```\n\n### Beneficios\n\n- **Mantenibilidad:** ...\n- **Performance:** ...\n- **Testability:** ...\n\n### Comportamiento funcional\n\n- [ ] **Cero cambios funcionales** (pure refactor)\n- [ ] Algunos ajustes menores: [Detallar]\n\n### Testing strategy\n\n- [ ] Tests existentes siguen pasando\n- [ ] Coverage mantenido o mejorado\n- [ ] Smoke tests en staging\n\n### Migration path\n\n<!-- Si hay deprecations o cambios de API -->\n\n### Reviewers: enfóquense en\n\n- Lógica de negocio sin cambios\n- Nombres más claros\n- Acoplamiento reducido",
          "## 🔨 Refactor técnico: [Scope]\n\n**Deuda técnica relacionada:** #XXX\n**Esfuerzo:** S / M / L / XL\n\n### Contexto\n\n<!-- Historia del código: cuándo se escribió, por qué está así -->\n\n### Code smells identificados\n\n- [ ] Duplicación\n- [ ] God class/function\n- [ ] Acoplamiento alto\n- [ ] Complejidad ciclomática\n- [ ] Otros: ...\n\n### Refactorings aplicados\n\n1. **Extract method:** ...\n2. **Rename:** ...\n3. **Move:** ...\n\n### Métricas\n\n**Antes:**\n- Complejidad: X\n- Líneas: Y\n- Coverage: Z%\n\n**Después:**\n- Complejidad: X'\n- Líneas: Y'\n- Coverage: Z'%\n\n### Risk assessment\n\n**Riesgo:** Low / Medium / High\n**Mitigation:** ...\n\n### Rollout plan\n\n- [ ] Feature flag (si aplica)\n- [ ] Canary deploy\n- [ ] Monitor logs/metrics",
          "## 🏗️ Architectural refactor: [Sistema]\n\n### Vision\n\n<!-- End state deseado -->\n\n### Current pain points\n\n1. \n2. \n\n### Proposed architecture\n\n<!-- Diagramas, links a design docs -->\n\n### This PR scope\n\n<!-- Qué parte del refactor total cubre este PR -->\n\n### Breaking changes\n\n- [ ] Ninguno\n- [ ] API changes: [Detallar]\n- [ ] Database schema: [Migrations]\n\n### Backwards compatibility\n\n<!-- Cómo mantenés compatibilidad durante transición -->\n\n### Testing\n\n- [ ] Unit tests refactorizados\n- [ ] Integration tests actualizados\n- [ ] E2E scenarios validados\n\n### Documentation\n\n- [ ] Architecture decision record (ADR)\n- [ ] API docs\n- [ ] Runbooks actualizados\n\n### Next steps\n\n<!-- Siguientes PRs en la serie -->"
        ]
      },
      {
        "id": "docs",
        "label": "Documentación",
        "items": [
          "## 📚 Docs: [Tema]\n\n### Qué se documenta\n\n<!-- Scope del PR -->\n\n### Audiencia\n\n- [ ] Desarrolladores del equipo\n- [ ] Usuarios finales\n- [ ] Ops/DevOps\n- [ ] Contribuidores externos\n\n### Cambios\n\n1. **Agregado:**\n   - \n\n2. **Actualizado:**\n   - \n\n3. **Eliminado:**\n   - \n\n### Links\n\n- Preview: [URL si es doc deployeable]\n\n### Checklist\n\n- [ ] Sin typos\n- [ ] Ejemplos testeados\n- [ ] Screenshots actuales\n- [ ] Links funcionan\n- [ ] Formato consistente",
          "## 📖 Documentation update\n\n**Type:** Tutorial / Reference / Guide / API docs\n\n### Motivation\n\n<!-- Por qué esta doc es necesaria ahora -->\n\n### What's new\n\n<!-- Resumen de contenido nuevo -->\n\n### Structure\n\n```\n- Section 1\n  - Subsection\n- Section 2\n```\n\n### Examples included\n\n- [ ] Code snippets\n- [ ] Screenshots\n- [ ] Diagrams\n- [ ] Videos\n\n### Review checklist\n\n- [ ] Técnicamente correcto\n- [ ] Fácil de seguir\n- [ ] Completo (no gaps)\n- [ ] Cross-links apropiados\n\n### Related docs\n\n<!-- Otras docs que conectan con esta -->"
        ]
      },
      {
        "id": "performance",
        "label": "Mejora de performance",
        "items": [
          "## ⚡ Performance: [Optimización]\n\n### Problema\n\n<!-- Bottleneck identificado -->\n\n**Métricas antes:**\n- Tiempo de respuesta: Xms\n- Throughput: Y req/s\n- Uso de recursos: Z%\n\n### Profiling\n\n<!-- Herramientas usadas, findings -->\n\n### Optimizaciones aplicadas\n\n1. \n2. \n\n### Resultados\n\n**Métricas después:**\n- Tiempo de respuesta: X'ms (**±N%**)\n- Throughput: Y' req/s (**±N%**)\n- Uso de recursos: Z'% (**±N%**)\n\n### Tradeoffs\n\n<!-- Qué sacrificaste por performance (si algo) -->\n\n### Testing\n\n- [ ] Load tests ejecutados\n- [ ] Benchmarks comparativos\n- [ ] No regresiones funcionales\n\n### Monitoring\n\n<!-- Qué métricas trackear post-deploy -->",
          "## 🚀 Optimization: [Component]\n\n**Impact:** Frontend / Backend / Database / Network\n\n### Baseline\n\n```\n[Benchmark results antes]\n```\n\n### Root cause analysis\n\n<!-- Qué estaba causando lentitud -->\n\n### Solution\n\n**Approach:** Caching / Indexing / Algorithm / Other\n\n**Implementation details:**\n\n### Benchmarks\n\n| Scenario | Before | After | Improvement |\n|----------|--------|-------|-------------|\n| Case 1   | Xms    | X'ms  | Y%          |\n\n### Side effects\n\n<!-- Memoria, latencia, complejidad -->\n\n### Rollback\n\n- [ ] Feature flag disponible\n- [ ] Métricas para detectar regresión"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué las plantillas de PR mejoran tu flujo de trabajo",
        "body": "<p>Un PR sin contexto es una invitación al rechazo. Tus reviewers no deberían tener que leer 20 commits, buscar el issue asociado y adivinar qué estás intentando solucionar. Las plantillas estructuradas resuelven esto forzando buenas prácticas desde el inicio.</p><p>Equipos que usan templates reportan <strong>30-50% menos ciclos de review</strong>. ¿Por qué? Porque el autor anticipa preguntas: 'Por qué este approach?', 'Cómo lo testeaste?', 'Qué pasa si falla?'. Una buena plantilla es como un checklist pre-vuelo: asegura que no olvidaste nada crítico.</p><p>GitHub/GitLab soportan templates automáticos: creá <code>.github/pull_request_template.md</code> y se auto-llena en cada PR. Podés tener múltiples templates para diferentes tipos (feature, bugfix, hotfix) usando query params o directorios específicos.</p>"
      },
      {
        "h2": "Anatomía de un PR que se aprueba rápido",
        "body": "<p>Los mejores PRs tienen estas características en común:</p><p><strong>Título descriptivo:</strong> No 'fix bug' sino 'Fix race condition in payment processor timeout handling'. El título aparece en git log, que sea útil.</p><p><strong>Descripción con contexto:</strong> Explicá el 'por qué' antes del 'cómo'. Link al issue, ticket de Jira o conversación de Slack que originó el cambio.</p><p><strong>Scope limitado:</strong> Un PR hace una cosa. Si estás tentado de escribir 'y también...' en la descripción, probablemente deberías hacer dos PRs.</p><p><strong>Testing explícito:</strong> No escribas solo 'agregué tests'. Decí qué casos cubren, qué edge cases consideraste, qué testeaste manualmente.</p><p><strong>Screenshots/GIFs:</strong> Para cambios visuales, mostrar es mejor que describir. Un GIF de 5 segundos ahorra 10 minutos de setup local.</p><p><strong>Guía para reviewers:</strong> 'Enfóquense en la lógica de X, el resto es refactor mecánico' ayuda a priorizar la atención.</p>"
      },
      {
        "h2": "Errores comunes que hacen PRs difíciles de revisar",
        "body": "<p><strong>PRs gigantes:</strong> Más de 400 líneas cambiadas ya es difícil. Más de 1000 es prácticamente imposible de revisar bien. Split en PRs incrementales que se pueden mergear independientemente.</p><p><strong>Mezclar concerns:</strong> 'Agregué feature X, arreglé bug Y, refactoricé Z' en un solo PR. Cada cosa merece su propio PR con contexto específico.</p><p><strong>Falta de self-review:</strong> Antes de marcar ready for review, revisá tu propio PR. Encontrá los console.logs, variables mal nombradas, comentarios TODO que dejaste.</p><p><strong>Tests que no prueban nada:</strong> Test que siempre pasan o solo testean happy path no agregan valor. Los reviewers buscan edge cases cubiertos.</p><p><strong>Descripción copy-paste del issue:</strong> El PR debe explicar la solución, no repetir el problema. El issue ya describe el problema.</p><p><strong>Sin plan de rollback:</strong> Para features grandes o riesgosas, explicá cómo revertir si algo falla en prod. Feature flags, database migrations reversibles, etc.</p>"
      },
      {
        "h2": "Automatización y buenas prácticas avanzadas",
        "body": "<p>Llevá tus PRs al siguiente nivel con estas técnicas:</p><p><strong>CI checks obligatorios:</strong> Configurá GitHub Actions/GitLab CI para que bloquee merge si tests fallan, linter tiene warnings o coverage baja. El PR no debería ser mergeable hasta que esté verde.</p><p><strong>Danger/Peril:</strong> Bots que comentan en PRs automáticamente. Ejemplos: 'Este PR toca archivos de migración sin actualizar docs', 'Falta changelog entry', 'PR muy grande, considerá split'.</p><p><strong>Semantic PR titles:</strong> Forzá formato tipo conventional commits: <code>feat:</code>, <code>fix:</code>, <code>docs:</code>. Permite generar changelogs automáticos.</p><p><strong>Draft PRs:</strong> Usá draft mode para PRs work-in-progress. Pedís feedback temprano sin marcar como 'listo para aprobar'.</p><p><strong>Review assignments:</strong> Configurá CODEOWNERS para auto-asignar reviewers según archivos modificados. El dueño del módulo siempre revisa cambios en su área.</p><p><strong>Squash on merge:</strong> Para features con muchos commits intermedios, squash a un commit limpio en main. El historial queda legible.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos reviewers debería asignar a un PR?",
        "a": "1-2 reviewers es óptimo. Más de 3 genera difusión de responsabilidad ('alguien más lo revisará') y PRs que quedan sin aprobar por semanas."
      },
      {
        "q": "¿Qué hago si mi PR es urgente y necesito merge rápido?",
        "a": "Marcalo como hotfix en el título, explicá el impacto en producción y por qué no puede esperar. Igual necesitás approval, pero reviewers priorizan."
      },
      {
        "q": "¿Debería hacer PRs para cambios triviales tipo typos?",
        "a": "Sí, pero son candidatos a fast-track. Un typo en docs no necesita la misma review que código crítico. Algunos equipos permiten self-merge para docs."
      },
      {
        "q": "¿Cómo manejo feedback conflictivo de múltiples reviewers?",
        "a": "Pedí que los reviewers discutan entre ellos primero y lleguen a consenso. Si no hay acuerdo, escalá a tech lead o arquitecto para decisión final."
      }
    ]
  },
  "en": {
    "pageTitle": "PR Template Generator | Genfy",
    "metaDesc": "Pull request templates with checklist and structured sections. Improve code review with clear descriptions that facilitate review and approval of changes.",
    "h1": "Pull Request Template Generator",
    "intro": "Create pull requests that review themselves with structured templates. Each template includes clear sections, validation checklist and enough context so your reviewers understand the change without code archaeology.",
    "tag": "Work",
    "filterLabel": "PR Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "feature",
        "label": "New feature",
        "items": [
          "## 🎯 Description\n\n<!-- Explain what functionality you added and why -->\n\n## 📋 Context\n\n**Problem it solves:**\n<!-- Link the issue or describe the pain point -->\n\n**Design decisions:**\n<!-- Why you chose this approach vs other alternatives -->\n\n## 🧪 Testing\n\n- [ ] Unit tests added\n- [ ] Integration tests updated\n- [ ] Manually tested in local environment\n- [ ] Edge cases considered\n\n**Tested scenarios:**\n<!-- List the cases you validated -->\n\n## 📸 Screenshots/GIFs\n\n<!-- If there are visual changes, show them here -->\n\n## 🚀 Deploy considerations\n\n- [ ] Migrations included\n- [ ] Environment variables documented\n- [ ] Backwards compatible\n- [ ] Feature flags configured (if applicable)\n\n## 👀 Review focus\n\n<!-- Guide your reviewers: what you want them to look at especially -->\n\n## 📚 Docs updated\n\n- [ ] README\n- [ ] API docs\n- [ ] Code comments",
          "## ✨ Feature: [Short name]\n\n### What does this PR do?\n\n<!-- One line explaining the change -->\n\n### Why do we need it?\n\n<!-- Business value or technical problem it solves -->\n\n### How it works\n\n<!-- High-level implementation -->\n\n### Manual testing\n\n**Setup:**\n```bash\n# Steps to reproduce locally\n```\n\n**Happy path:**\n1. \n2. \n\n**Error scenarios:**\n- \n\n### Technical checklist\n\n- [ ] Code meets style guide\n- [ ] No console.logs or debuggers\n- [ ] Tests pass in CI\n- [ ] No new warnings\n- [ ] Performance considered\n\n### Impact\n\n**Files changed:** X files, +Y/-Z lines\n**New dependencies:** None / [List]\n**Breaking changes:** No / [Description]",
          "## 🔧 New feature: [Title]\n\n**Related issue:** #XXX\n\n### Executive summary\n\n<!-- 2-3 sentences for time-constrained reviewers -->\n\n### Main changes\n\n1. **[Component/Module]:** Description\n2. **[Component/Module]:** Description\n\n### Before and After\n\n**Before:**\n<!-- Previous behavior -->\n\n**After:**\n<!-- New behavior -->\n\n### Testing\n\n**Unit tests:**\n- `describe(...)`: What it covers\n\n**Integration:**\n- Tested scenario\n\n**Manual:**\n- [ ] Chrome\n- [ ] Firefox\n- [ ] Safari (if applicable)\n- [ ] Mobile\n\n### Security considerations\n\n<!-- Input validation, authentication, etc -->\n\n### Rollback plan\n\n<!-- How to revert if something fails in prod -->\n\n### Pre-merge checklist\n\n- [ ] Branch updated with main/develop\n- [ ] Conflicts resolved\n- [ ] CI green\n- [ ] At least 1 approval\n- [ ] Docs updated"
        ]
      },
      {
        "id": "bugfix",
        "label": "Bug fix",
        "items": [
          "## 🐛 Bugfix: [Bug title]\n\n**Issue:** #XXX\n**Severity:** Critical / High / Medium / Low\n\n### Symptom\n\n<!-- What was breaking and how it manifested -->\n\n### Reproduction\n\n**Before the fix:**\n1. Step 1\n2. Step 2\n3. 💥 Observed error\n\n### Root cause\n\n<!-- Technical analysis: what line/logic caused the bug -->\n\n### Implemented solution\n\n<!-- Explain the fix in technical terms -->\n\n### Tests added\n\n- [ ] Regression test for this specific bug\n- [ ] Tests for related edge cases\n\n**Coverage:**\n<!-- Percentage or covered areas -->\n\n### Validation\n\n- [ ] Bug no longer reproduces locally\n- [ ] Tests pass\n- [ ] Doesn't introduce regressions (tested X scenarios)\n\n### Side effects\n\n<!-- Other behaviors that change with this fix -->\n\n### Needs backport\n\n- [ ] Yes, to version X.Y\n- [ ] Doesn't apply",
          "## 🔥 Hotfix: [Urgent description]\n\n**Production affected:** Yes / No\n**Downtime:** X minutes\n**Impacted users:** ~N users\n\n### The problem\n\n<!-- What's failing right now -->\n\n### Identified cause\n\n<!-- Quick root cause -->\n\n### Applied fix\n\n```diff\n- old code\n+ new code\n```\n\n### Verification\n\n- [ ] Tested in staging\n- [ ] Logs monitored\n- [ ] Metrics validated\n\n### Post-mortem\n\n<!-- Link to full analysis (if applicable) -->\n\n### TODO after hotfix\n\n- [ ] Comprehensive tests\n- [ ] Refactor if fix is dirty\n- [ ] Document in runbook",
          "## 🛠️ Bug resolved: [Title]\n\n**Reporter:** @user\n**Discovered:** YYYY-MM-DD\n**Environment:** Prod / Staging / Dev\n\n### Bug description\n\n<!-- Symptoms and erroneous behavior -->\n\n### Steps to reproduce\n\n```\n1. \n2. \n3. \n```\n\n**Expected:** ...\n**Actual:** ...\n\n### Investigation\n\n<!-- How you debugged, what clues you followed -->\n\n### The fix\n\n**Files changed:**\n- `path/to/file.ext`: What was modified\n\n**Logic:**\n<!-- Technical explanation of the change -->\n\n### Regression prevention\n\n- [ ] Test case added\n- [ ] Edge cases covered\n- [ ] Linter rules updated (if applicable)\n\n### Performance impact\n\n<!-- If fix changes performance, before/after measurements -->\n\n### Release notes\n\n```\nFixed: [User-facing bug description]\n```"
        ]
      },
      {
        "id": "refactor",
        "label": "Refactoring",
        "items": [
          "## ♻️ Refactor: [Component/Module]\n\n### Motivation\n\n<!-- Why this refactor now -->\n\n### Current code problems\n\n1. \n2. \n3. \n\n### Architectural changes\n\n**Before:**\n```\n[Old structure]\n```\n\n**After:**\n```\n[New structure]\n```\n\n### Benefits\n\n- **Maintainability:** ...\n- **Performance:** ...\n- **Testability:** ...\n\n### Functional behavior\n\n- [ ] **Zero functional changes** (pure refactor)\n- [ ] Some minor adjustments: [Detail]\n\n### Testing strategy\n\n- [ ] Existing tests still pass\n- [ ] Coverage maintained or improved\n- [ ] Smoke tests in staging\n\n### Migration path\n\n<!-- If there are deprecations or API changes -->\n\n### Reviewers: focus on\n\n- Business logic unchanged\n- Clearer names\n- Reduced coupling",
          "## 🔨 Technical refactor: [Scope]\n\n**Related tech debt:** #XXX\n**Effort:** S / M / L / XL\n\n### Context\n\n<!-- Code history: when written, why it's like this -->\n\n### Identified code smells\n\n- [ ] Duplication\n- [ ] God class/function\n- [ ] High coupling\n- [ ] Cyclomatic complexity\n- [ ] Others: ...\n\n### Applied refactorings\n\n1. **Extract method:** ...\n2. **Rename:** ...\n3. **Move:** ...\n\n### Metrics\n\n**Before:**\n- Complexity: X\n- Lines: Y\n- Coverage: Z%\n\n**After:**\n- Complexity: X'\n- Lines: Y'\n- Coverage: Z'%\n\n### Risk assessment\n\n**Risk:** Low / Medium / High\n**Mitigation:** ...\n\n### Rollout plan\n\n- [ ] Feature flag (if applicable)\n- [ ] Canary deploy\n- [ ] Monitor logs/metrics",
          "## 🏗️ Architectural refactor: [System]\n\n### Vision\n\n<!-- Desired end state -->\n\n### Current pain points\n\n1. \n2. \n\n### Proposed architecture\n\n<!-- Diagrams, links to design docs -->\n\n### This PR scope\n\n<!-- What part of total refactor this PR covers -->\n\n### Breaking changes\n\n- [ ] None\n- [ ] API changes: [Detail]\n- [ ] Database schema: [Migrations]\n\n### Backwards compatibility\n\n<!-- How you maintain compatibility during transition -->\n\n### Testing\n\n- [ ] Unit tests refactored\n- [ ] Integration tests updated\n- [ ] E2E scenarios validated\n\n### Documentation\n\n- [ ] Architecture decision record (ADR)\n- [ ] API docs\n- [ ] Runbooks updated\n\n### Next steps\n\n<!-- Following PRs in the series -->"
        ]
      },
      {
        "id": "docs",
        "label": "Documentation",
        "items": [
          "## 📚 Docs: [Topic]\n\n### What's being documented\n\n<!-- PR scope -->\n\n### Audience\n\n- [ ] Team developers\n- [ ] End users\n- [ ] Ops/DevOps\n- [ ] External contributors\n\n### Changes\n\n1. **Added:**\n   - \n\n2. **Updated:**\n   - \n\n3. **Removed:**\n   - \n\n### Links\n\n- Preview: [URL if deployable doc]\n\n### Checklist\n\n- [ ] No typos\n- [ ] Examples tested\n- [ ] Current screenshots\n- [ ] Links work\n- [ ] Consistent formatting",
          "## 📖 Documentation update\n\n**Type:** Tutorial / Reference / Guide / API docs\n\n### Motivation\n\n<!-- Why this doc is needed now -->\n\n### What's new\n\n<!-- Summary of new content -->\n\n### Structure\n\n```\n- Section 1\n  - Subsection\n- Section 2\n```\n\n### Examples included\n\n- [ ] Code snippets\n- [ ] Screenshots\n- [ ] Diagrams\n- [ ] Videos\n\n### Review checklist\n\n- [ ] Technically correct\n- [ ] Easy to follow\n- [ ] Complete (no gaps)\n- [ ] Appropriate cross-links\n\n### Related docs\n\n<!-- Other docs connecting to this one -->"
        ]
      },
      {
        "id": "performance",
        "label": "Performance improvement",
        "items": [
          "## ⚡ Performance: [Optimization]\n\n### Problem\n\n<!-- Identified bottleneck -->\n\n**Metrics before:**\n- Response time: Xms\n- Throughput: Y req/s\n- Resource usage: Z%\n\n### Profiling\n\n<!-- Tools used, findings -->\n\n### Applied optimizations\n\n1. \n2. \n\n### Results\n\n**Metrics after:**\n- Response time: X'ms (**±N%**)\n- Throughput: Y' req/s (**±N%**)\n- Resource usage: Z'% (**±N%**)\n\n### Tradeoffs\n\n<!-- What you sacrificed for performance (if anything) -->\n\n### Testing\n\n- [ ] Load tests executed\n- [ ] Comparative benchmarks\n- [ ] No functional regressions\n\n### Monitoring\n\n<!-- What metrics to track post-deploy -->",
          "## 🚀 Optimization: [Component]\n\n**Impact:** Frontend / Backend / Database / Network\n\n### Baseline\n\n```\n[Benchmark results before]\n```\n\n### Root cause analysis\n\n<!-- What was causing slowness -->\n\n### Solution\n\n**Approach:** Caching / Indexing / Algorithm / Other\n\n**Implementation details:**\n\n### Benchmarks\n\n| Scenario | Before | After | Improvement |\n|----------|--------|-------|-------------|\n| Case 1   | Xms    | X'ms  | Y%          |\n\n### Side effects\n\n<!-- Memory, latency, complexity -->\n\n### Rollback\n\n- [ ] Feature flag available\n- [ ] Metrics to detect regression"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why PR templates improve your workflow",
        "body": "<p>A PR without context is an invitation to rejection. Your reviewers shouldn't have to read 20 commits, search for the associated issue and guess what you're trying to fix. Structured templates solve this by forcing good practices from the start.</p><p>Teams using templates report <strong>30-50% fewer review cycles</strong>. Why? Because the author anticipates questions: 'Why this approach?', 'How did you test it?', 'What happens if it fails?'. A good template is like a pre-flight checklist: ensures you didn't forget anything critical.</p><p>GitHub/GitLab support automatic templates: create <code>.github/pull_request_template.md</code> and it auto-fills on each PR. You can have multiple templates for different types (feature, bugfix, hotfix) using query params or specific directories.</p>"
      },
      {
        "h2": "Anatomy of a PR that gets approved quickly",
        "body": "<p>The best PRs have these characteristics in common:</p><p><strong>Descriptive title:</strong> Not 'fix bug' but 'Fix race condition in payment processor timeout handling'. The title appears in git log, make it useful.</p><p><strong>Description with context:</strong> Explain the 'why' before the 'how'. Link to the issue, Jira ticket or Slack conversation that originated the change.</p><p><strong>Limited scope:</strong> A PR does one thing. If you're tempted to write 'and also...' in the description, you probably should make two PRs.</p><p><strong>Explicit testing:</strong> Don't just write 'added tests'. Say what cases they cover, what edge cases you considered, what you tested manually.</p><p><strong>Screenshots/GIFs:</strong> For visual changes, showing is better than describing. A 5-second GIF saves 10 minutes of local setup.</p><p><strong>Guide for reviewers:</strong> 'Focus on the logic of X, the rest is mechanical refactor' helps prioritize attention.</p>"
      },
      {
        "h2": "Common mistakes that make PRs hard to review",
        "body": "<p><strong>Giant PRs:</strong> More than 400 changed lines is already difficult. More than 1000 is practically impossible to review well. Split into incremental PRs that can be merged independently.</p><p><strong>Mixing concerns:</strong> 'Added feature X, fixed bug Y, refactored Z' in one PR. Each thing deserves its own PR with specific context.</p><p><strong>Lack of self-review:</strong> Before marking ready for review, review your own PR. Find the console.logs, poorly named variables, TODO comments you left.</p><p><strong>Tests that don't test anything:</strong> Tests that always pass or only test happy path don't add value. Reviewers look for covered edge cases.</p><p><strong>Copy-paste description from issue:</strong> The PR should explain the solution, not repeat the problem. The issue already describes the problem.</p><p><strong>No rollback plan:</strong> For large or risky features, explain how to revert if something fails in prod. Feature flags, reversible database migrations, etc.</p>"
      },
      {
        "h2": "Automation and advanced best practices",
        "body": "<p>Take your PRs to the next level with these techniques:</p><p><strong>Mandatory CI checks:</strong> Configure GitHub Actions/GitLab CI to block merge if tests fail, linter has warnings or coverage drops. PR shouldn't be mergeable until it's green.</p><p><strong>Danger/Peril:</strong> Bots that comment on PRs automatically. Examples: 'This PR touches migration files without updating docs', 'Missing changelog entry', 'PR too large, consider split'.</p><p><strong>Semantic PR titles:</strong> Enforce conventional commits format: <code>feat:</code>, <code>fix:</code>, <code>docs:</code>. Allows automatic changelog generation.</p><p><strong>Draft PRs:</strong> Use draft mode for work-in-progress PRs. Request early feedback without marking as 'ready to approve'.</p><p><strong>Review assignments:</strong> Configure CODEOWNERS to auto-assign reviewers based on modified files. Module owner always reviews changes in their area.</p><p><strong>Squash on merge:</strong> For features with many intermediate commits, squash to one clean commit in main. History stays readable.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many reviewers should I assign to a PR?",
        "a": "1-2 reviewers is optimal. More than 3 generates diffusion of responsibility ('someone else will review it') and PRs that stay unapproved for weeks."
      },
      {
        "q": "What do I do if my PR is urgent and needs quick merge?",
        "a": "Mark it as hotfix in the title, explain production impact and why it can't wait. Still needs approval, but reviewers prioritize."
      },
      {
        "q": "Should I make PRs for trivial changes like typos?",
        "a": "Yes, but they're candidates for fast-track. A typo in docs doesn't need the same review as critical code. Some teams allow self-merge for docs."
      },
      {
        "q": "How do I handle conflicting feedback from multiple reviewers?",
        "a": "Ask reviewers to discuss among themselves first and reach consensus. If there's no agreement, escalate to tech lead or architect for final decision."
      }
    ]
  }
};
