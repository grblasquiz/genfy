import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-reducers-redux",
    "en": "redux-reducer-generator"
  },
  "category": "tools",
  "emoji": "🔄",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Reducers Redux | Genfy",
    "metaDesc": "Genera nombres de reducers Redux con actions asociadas. Patrones consistentes para state management, async thunks y best practices de arquitectura.",
    "h1": "Generador de Reducers Redux",
    "intro": "Armá reducers Redux con nomenclatura consistente y actions claras. Desde CRUD básico hasta async patterns con Redux Toolkit.",
    "tag": "Herramientas",
    "filterLabel": "Patrón",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "entity-crud",
        "label": "CRUD Entidades",
        "items": [
          "users → fetchUsers, addUser, updateUser, deleteUser, setUsers",
          "posts → fetchPosts, createPost, editPost, removePost, setPosts",
          "products → loadProducts, addProduct, updateProduct, deleteProduct, setProducts",
          "orders → fetchOrders, placeOrder, updateOrder, cancelOrder, setOrders",
          "comments → loadComments, addComment, editComment, deleteComment, setComments",
          "categories → fetchCategories, createCategory, updateCategory, deleteCategory, setCategories",
          "tasks → loadTasks, addTask, updateTask, completeTask, setTasks",
          "projects → fetchProjects, createProject, updateProject, archiveProject, setProjects",
          "notifications → fetchNotifications, markAsRead, dismissNotification, clearNotifications",
          "messages → loadMessages, sendMessage, editMessage, deleteMessage, setMessages",
          "invoices → fetchInvoices, createInvoice, updateInvoice, voidInvoice, setInvoices",
          "customers → loadCustomers, addCustomer, updateCustomer, removeCustomer, setCustomers",
          "inventory → fetchInventory, addItem, updateStock, removeItem, setInventory",
          "reviews → loadReviews, submitReview, editReview, deleteReview, setReviews",
          "bookings → fetchBookings, createBooking, updateBooking, cancelBooking, setBookings"
        ]
      },
      {
        "id": "ui-state",
        "label": "Estado UI",
        "items": [
          "modal → openModal, closeModal, setModalContent, resetModal",
          "sidebar → toggleSidebar, openSidebar, closeSidebar, setSidebarState",
          "theme → setTheme, toggleTheme, setDarkMode, setLightMode",
          "toast → showToast, hideToast, clearToasts, queueToast",
          "loader → showLoader, hideLoader, setLoading, resetLoader",
          "filters → setFilters, clearFilters, updateFilter, resetFilters",
          "pagination → setPage, setPageSize, nextPage, previousPage, resetPagination",
          "search → setQuery, clearSearch, updateSearch, resetSearch",
          "tabs → setActiveTab, nextTab, previousTab, resetTabs",
          "drawer → openDrawer, closeDrawer, toggleDrawer, setDrawerContent",
          "dropdown → openDropdown, closeDropdown, toggleDropdown, setDropdownValue",
          "tooltip → showTooltip, hideTooltip, setTooltipContent, resetTooltip",
          "banner → showBanner, hideBanner, dismissBanner, setBannerMessage",
          "accordion → expandAccordion, collapseAccordion, toggleAccordion, setAccordionState",
          "carousel → nextSlide, previousSlide, goToSlide, setCarouselIndex"
        ]
      },
      {
        "id": "async-thunk",
        "label": "Async Thunks",
        "items": [
          "auth → loginPending, loginFulfilled, loginRejected, logoutFulfilled",
          "data → fetchDataPending, fetchDataFulfilled, fetchDataRejected, retryFetch",
          "upload → uploadPending, uploadProgress, uploadFulfilled, uploadRejected",
          "api → apiRequestPending, apiRequestFulfilled, apiRequestRejected, apiRetry",
          "sync → syncPending, syncFulfilled, syncRejected, syncConflict",
          "payment → paymentPending, paymentFulfilled, paymentRejected, paymentRetry",
          "import → importPending, importProgress, importFulfilled, importRejected",
          "export → exportPending, exportProgress, exportFulfilled, exportRejected",
          "process → processPending, processFulfilled, processRejected, processCancel",
          "deploy → deployPending, deployFulfilled, deployRejected, deployRollback",
          "search → searchPending, searchFulfilled, searchRejected, searchDebounce",
          "validate → validatePending, validateFulfilled, validateRejected, validateRetry",
          "backup → backupPending, backupFulfilled, backupRejected, backupRestore",
          "migration → migrationPending, migrationFulfilled, migrationRejected, migrationRollback",
          "webhook → webhookPending, webhookFulfilled, webhookRejected, webhookRetry"
        ]
      },
      {
        "id": "auth-session",
        "label": "Auth & Sesión",
        "items": [
          "session → setSession, clearSession, refreshSession, expireSession",
          "token → setToken, clearToken, refreshToken, validateToken",
          "permissions → setPermissions, updatePermissions, revokePermission, checkPermission",
          "profile → setProfile, updateProfile, clearProfile, syncProfile",
          "credentials → setCredentials, clearCredentials, updatePassword, resetPassword",
          "oauth → setOAuthToken, clearOAuth, refreshOAuth, revokeOAuth",
          "mfa → enableMFA, disableMFA, verifyMFA, resetMFA",
          "devices → addDevice, removeDevice, updateDevice, setTrustedDevice",
          "roles → setRole, updateRole, revokeRole, assignRole",
          "access → grantAccess, revokeAccess, checkAccess, updateAccess"
        ]
      },
      {
        "id": "forms",
        "label": "Formularios",
        "items": [
          "form → setFieldValue, setFieldError, clearField, resetForm, submitForm",
          "validation → validateField, setFieldValid, setFieldInvalid, clearValidation",
          "wizard → nextStep, previousStep, goToStep, completeWizard, resetWizard",
          "draft → saveDraft, loadDraft, clearDraft, autoSaveDraft",
          "fields → addField, removeField, updateField, reorderFields, clearFields",
          "input → setInputValue, clearInput, setInputFocus, validateInput",
          "select → setSelectedOption, clearSelection, setMultiSelect, filterOptions",
          "checkbox → toggleCheckbox, checkAll, uncheckAll, setCheckboxValue",
          "radio → setRadioValue, clearRadio, setRadioGroup",
          "file → addFile, removeFile, clearFiles, setFileProgress, validateFile"
        ]
      },
      {
        "id": "realtime",
        "label": "Realtime & WebSocket",
        "items": [
          "socket → connectSocket, disconnectSocket, socketConnected, socketError, socketReconnect",
          "presence → userJoined, userLeft, updatePresence, clearPresence",
          "channel → joinChannel, leaveChannel, channelMessage, channelError",
          "broadcast → broadcastMessage, receiveBroadcast, acknowledgeBroadcast",
          "sync → syncUpdate, syncConflict, syncResolved, syncFailed",
          "live → liveUpdate, liveError, liveReconnect, livePause, liveResume",
          "stream → streamStart, streamData, streamEnd, streamError",
          "room → joinRoom, leaveRoom, roomUpdate, roomClosed",
          "event → eventReceived, eventAcknowledged, eventFailed, eventRetry",
          "queue → queueMessage, processQueue, clearQueue, queueError"
        ]
      },
      {
        "id": "cache-storage",
        "label": "Cache & Storage",
        "items": [
          "cache → setCacheItem, getCacheItem, invalidateCache, clearCache, refreshCache",
          "storage → setStorageItem, removeStorageItem, clearStorage, syncStorage",
          "offline → setOfflineMode, syncOfflineData, clearOfflineQueue, offlineError",
          "persist → persistState, hydrateState, clearPersistedState, migrateState",
          "temp → setTempData, clearTempData, expireTempData, refreshTempData",
          "index → indexData, updateIndex, rebuildIndex, clearIndex",
          "prefetch → prefetchData, cancelPrefetch, clearPrefetch, prefetchError",
          "buffer → addToBuffer, processBuffer, clearBuffer, bufferOverflow",
          "snapshot → saveSnapshot, restoreSnapshot, deleteSnapshot, listSnapshots",
          "archive → archiveData, unarchiveData, clearArchive, restoreArchive"
        ]
      },
      {
        "id": "analytics",
        "label": "Analytics & Tracking",
        "items": [
          "analytics → trackEvent, trackPageView, trackError, setUserProperties, clearTracking",
          "metrics → recordMetric, incrementCounter, setGauge, resetMetrics",
          "logs → logAction, logError, logWarning, clearLogs, exportLogs",
          "telemetry → sendTelemetry, batchTelemetry, clearTelemetry, pauseTelemetry",
          "audit → logAudit, queryAudit, exportAudit, clearAudit",
          "debug → enableDebug, disableDebug, logDebug, clearDebugLogs",
          "profiler → startProfiling, stopProfiling, recordProfile, clearProfiles",
          "experiments → trackExperiment, setVariant, completeExperiment, clearExperiments",
          "feedback → submitFeedback, dismissFeedback, rateFeedback, clearFeedback",
          "errors → captureError, resolveError, ignoreError, clearErrors"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Nomenclatura consistente en Redux",
        "body": "<p>Los action types en Redux siguen el patrón <code>domain/ACTION_NAME</code> o <code>DOMAIN_ACTION_NAME</code>. Con Redux Toolkit, esto se simplifica: <code>createSlice</code> genera automáticamente action creators con nombres tipo <code>sliceName/reducerName</code>. El error más común: mezclar convenciones (camelCase vs UPPER_SNAKE_CASE) en el mismo proyecto.</p><p>Estructura recomendada: <strong>un slice por feature</strong>, no por tipo de dato. Ejemplo: <code>cartSlice</code> maneja items, totals, discounts (todo cart-related), no <code>itemsSlice</code> + <code>totalsSlice</code> separados. Esto reduce boilerplate y facilita refactoring.</p><p>Para async actions con thunks, el patrón estándar es <code>fetchUsers</code> (thunk) que dispara <code>fetchUsersPending</code>, <code>fetchUsersFulfilled</code>, <code>fetchUsersRejected</code>. Redux Toolkit los genera automáticamente con <code>createAsyncThunk</code>. No inventar variantes como <code>fetchUsersStart</code> o <code>fetchUsersSuccess</code>.</p>"
      },
      {
        "h2": "Patrones de actions según caso de uso",
        "body": "<p>CRUD básico usa 5 actions mínimas: <code>fetch</code> (load data), <code>add/create</code> (POST), <code>update/edit</code> (PUT/PATCH), <code>delete/remove</code> (DELETE), y <code>set</code> (reemplazar state completo). UI state necesita <code>toggle</code>, <code>open</code>, <code>close</code>, <code>reset</code> para modals, sidebars, dropdowns.</p><p>Formularios requieren <code>setFieldValue</code> (individual), <code>setFieldError</code> (validación), <code>resetForm</code> (limpiar), y <code>submitForm</code> (async). Wizard forms agregan <code>nextStep</code>, <code>previousStep</code>, <code>goToStep</code>. Auto-save usa <code>saveDraft</code> + debounce.</p><p>Realtime con WebSocket: <code>connectSocket</code> (initiate), <code>socketConnected</code> (success), <code>socketError</code> (fail), <code>socketReconnect</code> (retry), <code>disconnectSocket</code> (cleanup). Actions de presence: <code>userJoined</code>, <code>userLeft</code>, <code>updatePresence</code> (typing indicators, online status).</p>"
      },
      {
        "h2": "Manejar side effects y async logic",
        "body": "<p>Redux Toolkit recomienda <code>createAsyncThunk</code> para cualquier lógica async. Ejemplo típico: <code>fetchUsers</code> hace GET, dispara pending → fulfilled/rejected automáticamente. En el slice, <code>extraReducers</code> escucha estos actions. Evitar lógica async directamente en reducers (son pure functions).</p><p>Patrones avanzados: <strong>optimistic updates</strong> (update UI antes de confirmar server, rollback si falla), <strong>polling</strong> (refetch cada N segundos con <code>setInterval</code> en thunk), <strong>retry logic</strong> (reintentar request fallido con exponential backoff). Ejemplo: payment thunk reintenta 3 veces antes de fallar.</p><p>Error handling: guardar error messages en state (<code>error: string | null</code>), no solo booleanos. Actions rejected deben incluir <code>action.error.message</code> para debugging. Para múltiples requests simultáneos, usar <code>Promise.allSettled</code> en lugar de <code>Promise.all</code> (no rompe si uno falla).</p>"
      },
      {
        "h2": "Organización de slices en proyectos grandes",
        "body": "<p>Estructura de carpetas recomendada: <code>/features/[feature]/[feature]Slice.ts</code> + <code>[feature]Thunks.ts</code> + <code>[feature]Selectors.ts</code>. Ejemplo: <code>/features/auth/authSlice.ts</code> contiene login, logout, session. No mezclar todos los slices en <code>/store/index.ts</code>.</p><p>Usar <code>configureStore</code> con <code>combineReducers</code> implícito. Para state normalizado (evitar nested objects), usar <code>createEntityAdapter</code>: maneja ids, entities, CRUD automático. Ejemplo: <code>usersAdapter.addOne</code>, <code>usersAdapter.updateMany</code> son más eficientes que spread manual.</p><p>Selectores con <code>createSelector</code> (memoizados) previenen re-renders innecesarios. Ejemplo: <code>selectActiveUsers = createSelector([selectUsers], users => users.filter(u => u.active))</code>. Si el state de users no cambió, devuelve mismo array. Testing: mockeá store con <code>configureStore({ reducer, preloadedState })</code>, no uses el store real en tests.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuándo usar Redux vs Context API?",
        "a": "Redux para state complejo compartido entre múltiples features (auth, user, cart). Context para state simple localizado (theme, idioma). Redux ofrece devtools, middleware, time-travel debugging."
      },
      {
        "q": "¿Debo crear un action por cada campo del form?",
        "a": "No. Usá un action genérico setFieldValue(field, value) que actualiza cualquier campo. Esto reduce boilerplate masivo en forms grandes."
      },
      {
        "q": "¿Cómo manejar loading states de múltiples requests?",
        "a": "Usá un objeto loading: { users: 'idle' | 'pending' | 'succeeded' | 'failed' } en lugar de un booleano global. Permite tracking granular por entity."
      },
      {
        "q": "¿Puedo despachar actions desde un reducer?",
        "a": "No, reducers son pure functions. Para side effects (dispatch otro action), usá middleware (thunks, sagas) o listeners (RTK Listener API)."
      }
    ]
  },
  "en": {
    "pageTitle": "Redux Reducer Generator | Genfy",
    "metaDesc": "Generate Redux reducer names with associated actions. Consistent patterns for state management, async thunks, and architecture best practices.",
    "h1": "Redux Reducer Generator",
    "intro": "Build Redux reducers with consistent naming and clear actions. From basic CRUD to async patterns with Redux Toolkit.",
    "tag": "Tools",
    "filterLabel": "Pattern",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "entity-crud",
        "label": "CRUD Entities",
        "items": [
          "users → fetchUsers, addUser, updateUser, deleteUser, setUsers",
          "posts → fetchPosts, createPost, editPost, removePost, setPosts",
          "products → loadProducts, addProduct, updateProduct, deleteProduct, setProducts",
          "orders → fetchOrders, placeOrder, updateOrder, cancelOrder, setOrders",
          "comments → loadComments, addComment, editComment, deleteComment, setComments",
          "categories → fetchCategories, createCategory, updateCategory, deleteCategory, setCategories",
          "tasks → loadTasks, addTask, updateTask, completeTask, setTasks",
          "projects → fetchProjects, createProject, updateProject, archiveProject, setProjects",
          "notifications → fetchNotifications, markAsRead, dismissNotification, clearNotifications",
          "messages → loadMessages, sendMessage, editMessage, deleteMessage, setMessages",
          "invoices → fetchInvoices, createInvoice, updateInvoice, voidInvoice, setInvoices",
          "customers → loadCustomers, addCustomer, updateCustomer, removeCustomer, setCustomers",
          "inventory → fetchInventory, addItem, updateStock, removeItem, setInventory",
          "reviews → loadReviews, submitReview, editReview, deleteReview, setReviews",
          "bookings → fetchBookings, createBooking, updateBooking, cancelBooking, setBookings"
        ]
      },
      {
        "id": "ui-state",
        "label": "UI State",
        "items": [
          "modal → openModal, closeModal, setModalContent, resetModal",
          "sidebar → toggleSidebar, openSidebar, closeSidebar, setSidebarState",
          "theme → setTheme, toggleTheme, setDarkMode, setLightMode",
          "toast → showToast, hideToast, clearToasts, queueToast",
          "loader → showLoader, hideLoader, setLoading, resetLoader",
          "filters → setFilters, clearFilters, updateFilter, resetFilters",
          "pagination → setPage, setPageSize, nextPage, previousPage, resetPagination",
          "search → setQuery, clearSearch, updateSearch, resetSearch",
          "tabs → setActiveTab, nextTab, previousTab, resetTabs",
          "drawer → openDrawer, closeDrawer, toggleDrawer, setDrawerContent",
          "dropdown → openDropdown, closeDropdown, toggleDropdown, setDropdownValue",
          "tooltip → showTooltip, hideTooltip, setTooltipContent, resetTooltip",
          "banner → showBanner, hideBanner, dismissBanner, setBannerMessage",
          "accordion → expandAccordion, collapseAccordion, toggleAccordion, setAccordionState",
          "carousel → nextSlide, previousSlide, goToSlide, setCarouselIndex"
        ]
      },
      {
        "id": "async-thunk",
        "label": "Async Thunks",
        "items": [
          "auth → loginPending, loginFulfilled, loginRejected, logoutFulfilled",
          "data → fetchDataPending, fetchDataFulfilled, fetchDataRejected, retryFetch",
          "upload → uploadPending, uploadProgress, uploadFulfilled, uploadRejected",
          "api → apiRequestPending, apiRequestFulfilled, apiRequestRejected, apiRetry",
          "sync → syncPending, syncFulfilled, syncRejected, syncConflict",
          "payment → paymentPending, paymentFulfilled, paymentRejected, paymentRetry",
          "import → importPending, importProgress, importFulfilled, importRejected",
          "export → exportPending, exportProgress, exportFulfilled, exportRejected",
          "process → processPending, processFulfilled, processRejected, processCancel",
          "deploy → deployPending, deployFulfilled, deployRejected, deployRollback",
          "search → searchPending, searchFulfilled, searchRejected, searchDebounce",
          "validate → validatePending, validateFulfilled, validateRejected, validateRetry",
          "backup → backupPending, backupFulfilled, backupRejected, backupRestore",
          "migration → migrationPending, migrationFulfilled, migrationRejected, migrationRollback",
          "webhook → webhookPending, webhookFulfilled, webhookRejected, webhookRetry"
        ]
      },
      {
        "id": "auth-session",
        "label": "Auth & Session",
        "items": [
          "session → setSession, clearSession, refreshSession, expireSession",
          "token → setToken, clearToken, refreshToken, validateToken",
          "permissions → setPermissions, updatePermissions, revokePermission, checkPermission",
          "profile → setProfile, updateProfile, clearProfile, syncProfile",
          "credentials → setCredentials, clearCredentials, updatePassword, resetPassword",
          "oauth → setOAuthToken, clearOAuth, refreshOAuth, revokeOAuth",
          "mfa → enableMFA, disableMFA, verifyMFA, resetMFA",
          "devices → addDevice, removeDevice, updateDevice, setTrustedDevice",
          "roles → setRole, updateRole, revokeRole, assignRole",
          "access → grantAccess, revokeAccess, checkAccess, updateAccess"
        ]
      },
      {
        "id": "forms",
        "label": "Forms",
        "items": [
          "form → setFieldValue, setFieldError, clearField, resetForm, submitForm",
          "validation → validateField, setFieldValid, setFieldInvalid, clearValidation",
          "wizard → nextStep, previousStep, goToStep, completeWizard, resetWizard",
          "draft → saveDraft, loadDraft, clearDraft, autoSaveDraft",
          "fields → addField, removeField, updateField, reorderFields, clearFields",
          "input → setInputValue, clearInput, setInputFocus, validateInput",
          "select → setSelectedOption, clearSelection, setMultiSelect, filterOptions",
          "checkbox → toggleCheckbox, checkAll, uncheckAll, setCheckboxValue",
          "radio → setRadioValue, clearRadio, setRadioGroup",
          "file → addFile, removeFile, clearFiles, setFileProgress, validateFile"
        ]
      },
      {
        "id": "realtime",
        "label": "Realtime & WebSocket",
        "items": [
          "socket → connectSocket, disconnectSocket, socketConnected, socketError, socketReconnect",
          "presence → userJoined, userLeft, updatePresence, clearPresence",
          "channel → joinChannel, leaveChannel, channelMessage, channelError",
          "broadcast → broadcastMessage, receiveBroadcast, acknowledgeBroadcast",
          "sync → syncUpdate, syncConflict, syncResolved, syncFailed",
          "live → liveUpdate, liveError, liveReconnect, livePause, liveResume",
          "stream → streamStart, streamData, streamEnd, streamError",
          "room → joinRoom, leaveRoom, roomUpdate, roomClosed",
          "event → eventReceived, eventAcknowledged, eventFailed, eventRetry",
          "queue → queueMessage, processQueue, clearQueue, queueError"
        ]
      },
      {
        "id": "cache-storage",
        "label": "Cache & Storage",
        "items": [
          "cache → setCacheItem, getCacheItem, invalidateCache, clearCache, refreshCache",
          "storage → setStorageItem, removeStorageItem, clearStorage, syncStorage",
          "offline → setOfflineMode, syncOfflineData, clearOfflineQueue, offlineError",
          "persist → persistState, hydrateState, clearPersistedState, migrateState",
          "temp → setTempData, clearTempData, expireTempData, refreshTempData",
          "index → indexData, updateIndex, rebuildIndex, clearIndex",
          "prefetch → prefetchData, cancelPrefetch, clearPrefetch, prefetchError",
          "buffer → addToBuffer, processBuffer, clearBuffer, bufferOverflow",
          "snapshot → saveSnapshot, restoreSnapshot, deleteSnapshot, listSnapshots",
          "archive → archiveData, unarchiveData, clearArchive, restoreArchive"
        ]
      },
      {
        "id": "analytics",
        "label": "Analytics & Tracking",
        "items": [
          "analytics → trackEvent, trackPageView, trackError, setUserProperties, clearTracking",
          "metrics → recordMetric, incrementCounter, setGauge, resetMetrics",
          "logs → logAction, logError, logWarning, clearLogs, exportLogs",
          "telemetry → sendTelemetry, batchTelemetry, clearTelemetry, pauseTelemetry",
          "audit → logAudit, queryAudit, exportAudit, clearAudit",
          "debug → enableDebug, disableDebug, logDebug, clearDebugLogs",
          "profiler → startProfiling, stopProfiling, recordProfile, clearProfiles",
          "experiments → trackExperiment, setVariant, completeExperiment, clearExperiments",
          "feedback → submitFeedback, dismissFeedback, rateFeedback, clearFeedback",
          "errors → captureError, resolveError, ignoreError, clearErrors"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Consistent naming in Redux",
        "body": "<p>Action types in Redux follow the pattern <code>domain/ACTION_NAME</code> or <code>DOMAIN_ACTION_NAME</code>. With Redux Toolkit, this simplifies: <code>createSlice</code> automatically generates action creators with names like <code>sliceName/reducerName</code>. Most common mistake: mixing conventions (camelCase vs UPPER_SNAKE_CASE) in the same project.</p><p>Recommended structure: <strong>one slice per feature</strong>, not per data type. Example: <code>cartSlice</code> handles items, totals, discounts (all cart-related), not separate <code>itemsSlice</code> + <code>totalsSlice</code>. This reduces boilerplate and facilitates refactoring.</p><p>For async actions with thunks, standard pattern is <code>fetchUsers</code> (thunk) which dispatches <code>fetchUsersPending</code>, <code>fetchUsersFulfilled</code>, <code>fetchUsersRejected</code>. Redux Toolkit generates them automatically with <code>createAsyncThunk</code>. Don't invent variants like <code>fetchUsersStart</code> or <code>fetchUsersSuccess</code>.</p>"
      },
      {
        "h2": "Action patterns by use case",
        "body": "<p>Basic CRUD uses 5 minimum actions: <code>fetch</code> (load data), <code>add/create</code> (POST), <code>update/edit</code> (PUT/PATCH), <code>delete/remove</code> (DELETE), and <code>set</code> (replace complete state). UI state needs <code>toggle</code>, <code>open</code>, <code>close</code>, <code>reset</code> for modals, sidebars, dropdowns.</p><p>Forms require <code>setFieldValue</code> (individual), <code>setFieldError</code> (validation), <code>resetForm</code> (clear), and <code>submitForm</code> (async). Wizard forms add <code>nextStep</code>, <code>previousStep</code>, <code>goToStep</code>. Auto-save uses <code>saveDraft</code> + debounce.</p><p>Realtime with WebSocket: <code>connectSocket</code> (initiate), <code>socketConnected</code> (success), <code>socketError</code> (fail), <code>socketReconnect</code> (retry), <code>disconnectSocket</code> (cleanup). Presence actions: <code>userJoined</code>, <code>userLeft</code>, <code>updatePresence</code> (typing indicators, online status).</p>"
      },
      {
        "h2": "Handle side effects and async logic",
        "body": "<p>Redux Toolkit recommends <code>createAsyncThunk</code> for any async logic. Typical example: <code>fetchUsers</code> makes GET, dispatches pending → fulfilled/rejected automatically. In slice, <code>extraReducers</code> listens to these actions. Avoid async logic directly in reducers (they're pure functions).</p><p>Advanced patterns: <strong>optimistic updates</strong> (update UI before server confirm, rollback if fails), <strong>polling</strong> (refetch every N seconds with <code>setInterval</code> in thunk), <strong>retry logic</strong> (retry failed request with exponential backoff). Example: payment thunk retries 3 times before failing.</p><p>Error handling: save error messages in state (<code>error: string | null</code>), not just booleans. Rejected actions should include <code>action.error.message</code> for debugging. For multiple simultaneous requests, use <code>Promise.allSettled</code> instead of <code>Promise.all</code> (doesn't break if one fails).</p>"
      },
      {
        "h2": "Slice organization in large projects",
        "body": "<p>Recommended folder structure: <code>/features/[feature]/[feature]Slice.ts</code> + <code>[feature]Thunks.ts</code> + <code>[feature]Selectors.ts</code>. Example: <code>/features/auth/authSlice.ts</code> contains login, logout, session. Don't mix all slices in <code>/store/index.ts</code>.</p><p>Use <code>configureStore</code> with implicit <code>combineReducers</code>. For normalized state (avoid nested objects), use <code>createEntityAdapter</code>: handles ids, entities, automatic CRUD. Example: <code>usersAdapter.addOne</code>, <code>usersAdapter.updateMany</code> are more efficient than manual spread.</p><p>Selectors with <code>createSelector</code> (memoized) prevent unnecessary re-renders. Example: <code>selectActiveUsers = createSelector([selectUsers], users => users.filter(u => u.active))</code>. If users state didn't change, returns same array. Testing: mock store with <code>configureStore({ reducer, preloadedState })</code>, don't use real store in tests.</p>"
      }
    ],
    "faq": [
      {
        "q": "When to use Redux vs Context API?",
        "a": "Redux for complex state shared across multiple features (auth, user, cart). Context for simple localized state (theme, language). Redux offers devtools, middleware, time-travel debugging."
      },
      {
        "q": "Should I create an action per form field?",
        "a": "No. Use a generic setFieldValue(field, value) action that updates any field. This reduces massive boilerplate in large forms."
      },
      {
        "q": "How to handle loading states of multiple requests?",
        "a": "Use an object loading: { users: 'idle' | 'pending' | 'succeeded' | 'failed' } instead of a global boolean. Allows granular tracking per entity."
      },
      {
        "q": "Can I dispatch actions from a reducer?",
        "a": "No, reducers are pure functions. For side effects (dispatch another action), use middleware (thunks, sagas) or listeners (RTK Listener API)."
      }
    ]
  }
};
