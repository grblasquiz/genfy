import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-props-react",
    "en": "react-props-generator"
  },
  "category": "tools",
  "emoji": "🔧",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Props React | Genfy",
    "metaDesc": "Generá nombres de props idiomáticas para componentes React con tipos TypeScript. Mejorá tu API de componentes con convenciones claras y consistentes.",
    "h1": "Generador de Props React",
    "intro": "Diseñar buenas APIs de componentes es más difícil que escribir la lógica interna. Este generador te da nombres de props siguiendo convenciones de React, con tipos TypeScript incluidos para componentes más predecibles y fáciles de usar.",
    "tag": "Herramientas",
    "filterLabel": "Tipo de prop",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "handlers",
        "label": "Event Handlers",
        "items": [
          "onClick?: (event: React.MouseEvent<HTMLElement>) => void",
          "onChange?: (value: string) => void",
          "onSubmit?: (data: FormData) => void",
          "onFocus?: () => void",
          "onBlur?: () => void",
          "onSelect?: (item: T) => void",
          "onToggle?: (isOpen: boolean) => void",
          "onDelete?: (id: string) => void",
          "onEdit?: (id: string, data: Partial<T>) => void",
          "onCancel?: () => void",
          "onConfirm?: () => void",
          "onClose?: () => void",
          "onOpen?: () => void",
          "onLoad?: () => void",
          "onError?: (error: Error) => void",
          "onSuccess?: (result: T) => void",
          "onRetry?: () => void",
          "onSort?: (key: string, direction: 'asc' | 'desc') => void",
          "onFilter?: (filters: Record<string, unknown>) => void",
          "onSearch?: (query: string) => void",
          "onPageChange?: (page: number) => void",
          "onItemClick?: (item: T, index: number) => void",
          "onKeyDown?: (event: React.KeyboardEvent) => void",
          "onHover?: (isHovering: boolean) => void",
          "onDragStart?: (event: React.DragEvent) => void",
          "onDragEnd?: (event: React.DragEvent) => void",
          "onDrop?: (event: React.DragEvent) => void",
          "onScroll?: (scrollTop: number) => void",
          "onResize?: (width: number, height: number) => void",
          "onMount?: () => void",
          "onUnmount?: () => void",
          "onUpdate?: (prevProps: Props) => void",
          "onValidate?: (value: T) => string | undefined",
          "onBeforeSubmit?: () => boolean",
          "onAfterSubmit?: (result: T) => void"
        ]
      },
      {
        "id": "state",
        "label": "State Props",
        "items": [
          "isOpen?: boolean",
          "isLoading?: boolean",
          "isDisabled?: boolean",
          "isActive?: boolean",
          "isSelected?: boolean",
          "isVisible?: boolean",
          "isReadOnly?: boolean",
          "isRequired?: boolean",
          "isValid?: boolean",
          "isChecked?: boolean",
          "isExpanded?: boolean",
          "isCollapsed?: boolean",
          "hasError?: boolean",
          "hasChanges?: boolean",
          "value?: T",
          "defaultValue?: T",
          "selectedItem?: T",
          "selectedItems?: T[]",
          "currentPage?: number",
          "totalPages?: number",
          "error?: string | Error",
          "data?: T[]",
          "loading?: boolean",
          "success?: boolean",
          "items?: T[]",
          "activeIndex?: number",
          "hoveredIndex?: number",
          "focusedIndex?: number",
          "sortBy?: string",
          "sortDirection?: 'asc' | 'desc'",
          "filters?: Record<string, unknown>",
          "searchQuery?: string",
          "status?: 'idle' | 'pending' | 'success' | 'error'",
          "progress?: number"
        ]
      },
      {
        "id": "content",
        "label": "Content Props",
        "items": [
          "children?: React.ReactNode",
          "title?: string",
          "description?: string",
          "label?: string",
          "placeholder?: string",
          "icon?: React.ReactNode",
          "leftIcon?: React.ReactNode",
          "rightIcon?: React.ReactNode",
          "header?: React.ReactNode",
          "footer?: React.ReactNode",
          "emptyState?: React.ReactNode",
          "errorMessage?: string",
          "successMessage?: string",
          "helperText?: string",
          "tooltip?: string",
          "badge?: string | number",
          "prefix?: string",
          "suffix?: string",
          "items?: Array<{ id: string; label: string; value: unknown }>",
          "options?: Array<{ value: string; label: string }>",
          "tabs?: Array<{ id: string; label: string; content: React.ReactNode }>",
          "actions?: Array<{ label: string; onClick: () => void }>",
          "links?: Array<{ href: string; label: string }>",
          "avatar?: string",
          "image?: string",
          "imageAlt?: string"
        ]
      },
      {
        "id": "styling",
        "label": "Styling Props",
        "items": [
          "className?: string",
          "style?: React.CSSProperties",
          "size?: 'sm' | 'md' | 'lg' | 'xl'",
          "variant?: 'primary' | 'secondary' | 'ghost' | 'outline'",
          "color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'",
          "align?: 'left' | 'center' | 'right'",
          "justify?: 'start' | 'center' | 'end' | 'between'",
          "spacing?: 'none' | 'sm' | 'md' | 'lg'",
          "radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'",
          "shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'",
          "fullWidth?: boolean",
          "compact?: boolean",
          "bordered?: boolean",
          "rounded?: boolean",
          "elevated?: boolean",
          "transparent?: boolean"
        ]
      },
      {
        "id": "behavior",
        "label": "Behavior Props",
        "items": [
          "autoFocus?: boolean",
          "autoComplete?: string",
          "closeOnClick?: boolean",
          "closeOnEscape?: boolean",
          "closeOnBlur?: boolean",
          "preventScroll?: boolean",
          "stopPropagation?: boolean",
          "defaultOpen?: boolean",
          "allowClear?: boolean",
          "multiple?: boolean",
          "searchable?: boolean",
          "sortable?: boolean",
          "filterable?: boolean",
          "paginated?: boolean",
          "virtualized?: boolean",
          "lazy?: boolean",
          "debounce?: number",
          "throttle?: number",
          "maxLength?: number",
          "minLength?: number",
          "max?: number",
          "min?: number",
          "step?: number",
          "pattern?: string",
          "format?: (value: T) => string",
          "parse?: (value: string) => T",
          "validate?: (value: T) => boolean",
          "transform?: (value: T) => T",
          "portal?: boolean",
          "modal?: boolean",
          "trapFocus?: boolean"
        ]
      },
      {
        "id": "accessibility",
        "label": "Accessibility Props",
        "items": [
          "aria-label?: string",
          "aria-labelledby?: string",
          "aria-describedby?: string",
          "aria-expanded?: boolean",
          "aria-selected?: boolean",
          "aria-checked?: boolean",
          "aria-disabled?: boolean",
          "aria-hidden?: boolean",
          "aria-live?: 'off' | 'polite' | 'assertive'",
          "aria-controls?: string",
          "aria-haspopup?: boolean",
          "role?: string",
          "tabIndex?: number",
          "id?: string",
          "htmlFor?: string",
          "name?: string"
        ]
      },
      {
        "id": "data",
        "label": "Data Props",
        "items": [
          "data?: T[]",
          "items?: T[]",
          "dataSource?: () => Promise<T[]>",
          "fetchData?: (params: FetchParams) => Promise<T[]>",
          "initialData?: T[]",
          "defaultData?: T[]",
          "key?: keyof T | ((item: T) => string)",
          "getItemKey?: (item: T) => string",
          "renderItem?: (item: T, index: number) => React.ReactNode",
          "renderEmpty?: () => React.ReactNode",
          "renderLoading?: () => React.ReactNode",
          "renderError?: (error: Error) => React.ReactNode",
          "groupBy?: (item: T) => string",
          "sortBy?: (a: T, b: T) => number",
          "filterBy?: (item: T) => boolean",
          "transform?: (item: T) => T"
        ]
      },
      {
        "id": "composition",
        "label": "Composition Props",
        "items": [
          "as?: React.ElementType",
          "component?: React.ComponentType<P>",
          "render?: (props: RenderProps) => React.ReactNode",
          "slot?: React.ReactNode",
          "slots?: { [key: string]: React.ReactNode }",
          "renderProps?: (state: State) => React.ReactNode",
          "children?: React.ReactNode | ((props: ChildProps) => React.ReactNode)",
          "startContent?: React.ReactNode",
          "endContent?: React.ReactNode",
          "leftSection?: React.ReactNode",
          "rightSection?: React.ReactNode"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Convenciones de nomenclatura en React",
        "body": "<p>Los event handlers arrancan con 'on' seguido del verbo en pasado del evento: onClick, onChange, onSubmit. Esto diferencia handlers (callbacks que tu componente recibe) de métodos internos (handleClick, handleChange). Un componente Button debería recibir onClick, no handleClick. El prefijo 'handle' es para métodos privados de tu componente.</p><p>Props booleanas usan prefijos is/has/should: isOpen, hasError, shouldRender. Evitá negativos como isNotDisabled; mejor: isEnabled. Los negativos dobles (disabled={!isNotHidden}) confunden. Una excepción: disabled es idiomático en HTML, así que disabled (no isDisabled) está bien para consistencia con el DOM.</p><p>Props de contenido que aceptan React.ReactNode deberían tener nombres descriptivos: leftIcon no icon, emptyState no fallback, errorMessage no error (error es mejor para el objeto Error). Esto hace el código autodocumentado: <Button leftIcon={<Icon />}> es más claro que <Button icon={<Icon />}> cuando también existe rightIcon.</p>"
      },
      {
        "h2": "Patrones comunes de props",
        "body": "<p>El patrón value/onChange es estándar para componentes controlados. Tu componente recibe value y llama onChange cuando el usuario interactúa. Incluí siempre defaultValue para la versión no controlada. Por ejemplo, Input puede funcionar como <Input value={x} onChange={setX}> (controlado) o <Input defaultValue='foo'> (no controlado).</p><p>Para componentes con múltiples estados de carga, usá el patrón status: 'idle' | 'loading' | 'success' | 'error'. Esto es mejor que tres booleanas (isLoading, isSuccess, isError) porque los estados son mutuamente excluyentes. Un componente no puede estar loading y success simultáneamente; el enum lo expresa claramente.</p><p>Cuando necesités flexibilidad de renderizado, el patrón render props es potente: renderItem={(item) => ...}. Esto permite al consumidor customizar la presentación sin necesidad de que tu componente exponga toda su estructura interna. DataTable con renderItem es más flexible que DataTable con itemClassName.</p>"
      },
      {
        "h2": "Tipos TypeScript para props",
        "body": "<p>Usá genéricos para componentes reutilizables: List<T> donde T es el tipo de items. Así tu componente funciona con cualquier tipo sin perder type safety. Definí: interface ListProps<T> { items: T[]; renderItem: (item: T) => React.ReactNode }. Cuando el consumidor usa <List<User> items={users}>, TypeScript sabe que renderItem recibe User.</p><p>Props opcionales necesitan el modificador ?. No uses undefined explícito (onClick: undefined | (() => void)) cuando podés escribir onClick?. Son equivalentes pero la sintaxis corta es idiomática. Para valores por defecto, usá destructuring: function Button({ size = 'md' }: Props) en lugar de size?: Size y luego const actualSize = size ?? 'md'.</p><p>Event handlers tipificados previenen errores: onChange?: (value: string) => void es mejor que onChange?: Function. Especificá el tipo del parámetro. Si tu componente pasa múltiples argumentos, hacelo explícito: onItemClick?: (item: T, index: number) => void. Esto documenta el contrato y TypeScript verifica que lo cumplás.</p>"
      },
      {
        "h2": "Composición vs configuración",
        "body": "<p>Preferí composición cuando la customización es estructural. En lugar de <Modal header='Title' footer={<Button />}>, usá <Modal><Modal.Header>Title</Modal.Header><Modal.Footer><Button /></Modal.Footer></Modal>. Esto da al consumidor control total sin que expongas 50 props de configuración. El patrón compound components escala mejor.</p><p>Usá props de configuración para variaciones predecibles. Un Button con variant='primary' | 'secondary' | 'ghost' es apropiado porque los estilos están definidos. No necesitás compound components para esto. Pero si el consumidor necesita estructura custom, composición gana: Tabs compound mejor que <Tabs tabs={[...]}> con objetos de configuración.</p><p>El prop 'as' permite polimorfismo: <Button as='a' href='#'>. Tu Button renderiza un <a> pero mantiene sus estilos. Esto es mejor que duplicar componentes (Button y LinkButton). Tipificalo: as?: React.ElementType y extiende props: type ButtonProps<T extends React.ElementType = 'button'> = { as?: T } & React.ComponentPropsWithoutRef<T>. Complejo pero potente.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuándo usar props opcionales vs requeridas?",
        "a": "Hacé opcional lo que tiene un default razonable (size, variant). Requerí lo esencial para que el componente funcione (data en una DataTable, children en un Container). Props opcionales sin default deberían tener comportamiento de fallback claro."
      },
      {
        "q": "¿Debería usar prefijos para todas las props?",
        "a": "No. Prefijos como is/has/on son convenciones útiles pero no rígidas. Usá onClick para handlers, isOpen para booleanas. Pero children, className, title no necesitan prefijos; son idiomáticos sin ellos."
      },
      {
        "q": "¿Cómo nombrar props que aceptan componentes?",
        "a": "Usá sustantivos descriptivos: icon, header, footer, emptyState. Si tu prop es un componente completo, usá PascalCase: IconComponent, HeaderComponent. Esto diferencia instancias (<Icon />) de definiciones (Icon)."
      },
      {
        "q": "¿Qué convención seguir para props de estilo?",
        "a": "Siempre incluí className para permitir override de estilos. Considerá variant/size para variaciones predefinidas. Evitá exponer todas las props de CSS individualmente (backgroundColor, fontSize); eso rompe encapsulación. Usá className o style para casos edge."
      }
    ]
  },
  "en": {
    "pageTitle": "React Props Generator | Genfy",
    "metaDesc": "Generate idiomatic prop names for React components with TypeScript types. Improve your component API with clear and consistent conventions.",
    "h1": "React Props Generator",
    "intro": "Designing good component APIs is harder than writing internal logic. This generator gives you prop names following React conventions, with TypeScript types included for more predictable and user-friendly components.",
    "tag": "Tools",
    "filterLabel": "Prop type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "handlers",
        "label": "Event Handlers",
        "items": [
          "onClick?: (event: React.MouseEvent<HTMLElement>) => void",
          "onChange?: (value: string) => void",
          "onSubmit?: (data: FormData) => void",
          "onFocus?: () => void",
          "onBlur?: () => void",
          "onSelect?: (item: T) => void",
          "onToggle?: (isOpen: boolean) => void",
          "onDelete?: (id: string) => void",
          "onEdit?: (id: string, data: Partial<T>) => void",
          "onCancel?: () => void",
          "onConfirm?: () => void",
          "onClose?: () => void",
          "onOpen?: () => void",
          "onLoad?: () => void",
          "onError?: (error: Error) => void",
          "onSuccess?: (result: T) => void",
          "onRetry?: () => void",
          "onSort?: (key: string, direction: 'asc' | 'desc') => void",
          "onFilter?: (filters: Record<string, unknown>) => void",
          "onSearch?: (query: string) => void",
          "onPageChange?: (page: number) => void",
          "onItemClick?: (item: T, index: number) => void",
          "onKeyDown?: (event: React.KeyboardEvent) => void",
          "onHover?: (isHovering: boolean) => void",
          "onDragStart?: (event: React.DragEvent) => void",
          "onDragEnd?: (event: React.DragEvent) => void",
          "onDrop?: (event: React.DragEvent) => void",
          "onScroll?: (scrollTop: number) => void",
          "onResize?: (width: number, height: number) => void",
          "onMount?: () => void",
          "onUnmount?: () => void",
          "onUpdate?: (prevProps: Props) => void",
          "onValidate?: (value: T) => string | undefined",
          "onBeforeSubmit?: () => boolean",
          "onAfterSubmit?: (result: T) => void"
        ]
      },
      {
        "id": "state",
        "label": "State Props",
        "items": [
          "isOpen?: boolean",
          "isLoading?: boolean",
          "isDisabled?: boolean",
          "isActive?: boolean",
          "isSelected?: boolean",
          "isVisible?: boolean",
          "isReadOnly?: boolean",
          "isRequired?: boolean",
          "isValid?: boolean",
          "isChecked?: boolean",
          "isExpanded?: boolean",
          "isCollapsed?: boolean",
          "hasError?: boolean",
          "hasChanges?: boolean",
          "value?: T",
          "defaultValue?: T",
          "selectedItem?: T",
          "selectedItems?: T[]",
          "currentPage?: number",
          "totalPages?: number",
          "error?: string | Error",
          "data?: T[]",
          "loading?: boolean",
          "success?: boolean",
          "items?: T[]",
          "activeIndex?: number",
          "hoveredIndex?: number",
          "focusedIndex?: number",
          "sortBy?: string",
          "sortDirection?: 'asc' | 'desc'",
          "filters?: Record<string, unknown>",
          "searchQuery?: string",
          "status?: 'idle' | 'pending' | 'success' | 'error'",
          "progress?: number"
        ]
      },
      {
        "id": "content",
        "label": "Content Props",
        "items": [
          "children?: React.ReactNode",
          "title?: string",
          "description?: string",
          "label?: string",
          "placeholder?: string",
          "icon?: React.ReactNode",
          "leftIcon?: React.ReactNode",
          "rightIcon?: React.ReactNode",
          "header?: React.ReactNode",
          "footer?: React.ReactNode",
          "emptyState?: React.ReactNode",
          "errorMessage?: string",
          "successMessage?: string",
          "helperText?: string",
          "tooltip?: string",
          "badge?: string | number",
          "prefix?: string",
          "suffix?: string",
          "items?: Array<{ id: string; label: string; value: unknown }>",
          "options?: Array<{ value: string; label: string }>",
          "tabs?: Array<{ id: string; label: string; content: React.ReactNode }>",
          "actions?: Array<{ label: string; onClick: () => void }>",
          "links?: Array<{ href: string; label: string }>",
          "avatar?: string",
          "image?: string",
          "imageAlt?: string"
        ]
      },
      {
        "id": "styling",
        "label": "Styling Props",
        "items": [
          "className?: string",
          "style?: React.CSSProperties",
          "size?: 'sm' | 'md' | 'lg' | 'xl'",
          "variant?: 'primary' | 'secondary' | 'ghost' | 'outline'",
          "color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'",
          "align?: 'left' | 'center' | 'right'",
          "justify?: 'start' | 'center' | 'end' | 'between'",
          "spacing?: 'none' | 'sm' | 'md' | 'lg'",
          "radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'",
          "shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'",
          "fullWidth?: boolean",
          "compact?: boolean",
          "bordered?: boolean",
          "rounded?: boolean",
          "elevated?: boolean",
          "transparent?: boolean"
        ]
      },
      {
        "id": "behavior",
        "label": "Behavior Props",
        "items": [
          "autoFocus?: boolean",
          "autoComplete?: string",
          "closeOnClick?: boolean",
          "closeOnEscape?: boolean",
          "closeOnBlur?: boolean",
          "preventScroll?: boolean",
          "stopPropagation?: boolean",
          "defaultOpen?: boolean",
          "allowClear?: boolean",
          "multiple?: boolean",
          "searchable?: boolean",
          "sortable?: boolean",
          "filterable?: boolean",
          "paginated?: boolean",
          "virtualized?: boolean",
          "lazy?: boolean",
          "debounce?: number",
          "throttle?: number",
          "maxLength?: number",
          "minLength?: number",
          "max?: number",
          "min?: number",
          "step?: number",
          "pattern?: string",
          "format?: (value: T) => string",
          "parse?: (value: string) => T",
          "validate?: (value: T) => boolean",
          "transform?: (value: T) => T",
          "portal?: boolean",
          "modal?: boolean",
          "trapFocus?: boolean"
        ]
      },
      {
        "id": "accessibility",
        "label": "Accessibility Props",
        "items": [
          "aria-label?: string",
          "aria-labelledby?: string",
          "aria-describedby?: string",
          "aria-expanded?: boolean",
          "aria-selected?: boolean",
          "aria-checked?: boolean",
          "aria-disabled?: boolean",
          "aria-hidden?: boolean",
          "aria-live?: 'off' | 'polite' | 'assertive'",
          "aria-controls?: string",
          "aria-haspopup?: boolean",
          "role?: string",
          "tabIndex?: number",
          "id?: string",
          "htmlFor?: string",
          "name?: string"
        ]
      },
      {
        "id": "data",
        "label": "Data Props",
        "items": [
          "data?: T[]",
          "items?: T[]",
          "dataSource?: () => Promise<T[]>",
          "fetchData?: (params: FetchParams) => Promise<T[]>",
          "initialData?: T[]",
          "defaultData?: T[]",
          "key?: keyof T | ((item: T) => string)",
          "getItemKey?: (item: T) => string",
          "renderItem?: (item: T, index: number) => React.ReactNode",
          "renderEmpty?: () => React.ReactNode",
          "renderLoading?: () => React.ReactNode",
          "renderError?: (error: Error) => React.ReactNode",
          "groupBy?: (item: T) => string",
          "sortBy?: (a: T, b: T) => number",
          "filterBy?: (item: T) => boolean",
          "transform?: (item: T) => T"
        ]
      },
      {
        "id": "composition",
        "label": "Composition Props",
        "items": [
          "as?: React.ElementType",
          "component?: React.ComponentType<P>",
          "render?: (props: RenderProps) => React.ReactNode",
          "slot?: React.ReactNode",
          "slots?: { [key: string]: React.ReactNode }",
          "renderProps?: (state: State) => React.ReactNode",
          "children?: React.ReactNode | ((props: ChildProps) => React.ReactNode)",
          "startContent?: React.ReactNode",
          "endContent?: React.ReactNode",
          "leftSection?: React.ReactNode",
          "rightSection?: React.ReactNode"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "React naming conventions",
        "body": "<p>Event handlers start with 'on' followed by the past tense verb of the event: onClick, onChange, onSubmit. This differentiates handlers (callbacks your component receives) from internal methods (handleClick, handleChange). A Button component should receive onClick, not handleClick. The 'handle' prefix is for your component's private methods.</p><p>Boolean props use is/has/should prefixes: isOpen, hasError, shouldRender. Avoid negatives like isNotDisabled; prefer: isEnabled. Double negatives (disabled={!isNotHidden}) confuse. One exception: disabled is idiomatic in HTML, so disabled (not isDisabled) is fine for DOM consistency.</p><p>Content props accepting React.ReactNode should have descriptive names: leftIcon not icon, emptyState not fallback, errorMessage not error (error is better for the Error object). This makes code self-documenting: <Button leftIcon={<Icon />}> is clearer than <Button icon={<Icon />}> when rightIcon also exists.</p>"
      },
      {
        "h2": "Common prop patterns",
        "body": "<p>The value/onChange pattern is standard for controlled components. Your component receives value and calls onChange when the user interacts. Always include defaultValue for the uncontrolled version. For example, Input can work as <Input value={x} onChange={setX}> (controlled) or <Input defaultValue='foo'> (uncontrolled).</p><p>For components with multiple loading states, use the status pattern: 'idle' | 'loading' | 'success' | 'error'. This beats three booleans (isLoading, isSuccess, isError) because states are mutually exclusive. A component can't be loading and success simultaneously; the enum expresses this clearly.</p><p>When you need rendering flexibility, the render props pattern is powerful: renderItem={(item) => ...}. This lets consumers customize presentation without your component exposing its entire internal structure. DataTable with renderItem is more flexible than DataTable with itemClassName.</p>"
      },
      {
        "h2": "TypeScript types for props",
        "body": "<p>Use generics for reusable components: List<T> where T is the item type. This way your component works with any type without losing type safety. Define: interface ListProps<T> { items: T[]; renderItem: (item: T) => React.ReactNode }. When consumers use <List<User> items={users}>, TypeScript knows renderItem receives User.</p><p>Optional props need the ? modifier. Don't use explicit undefined (onClick: undefined | (() => void)) when you can write onClick?. They're equivalent but the short syntax is idiomatic. For default values, use destructuring: function Button({ size = 'md' }: Props) instead of size?: Size then const actualSize = size ?? 'md'.</p><p>Typed event handlers prevent errors: onChange?: (value: string) => void beats onChange?: Function. Specify the parameter type. If your component passes multiple arguments, make it explicit: onItemClick?: (item: T, index: number) => void. This documents the contract and TypeScript verifies you comply.</p>"
      },
      {
        "h2": "Composition vs configuration",
        "body": "<p>Prefer composition when customization is structural. Instead of <Modal header='Title' footer={<Button />}>, use <Modal><Modal.Header>Title</Modal.Header><Modal.Footer><Button /></Modal.Footer></Modal>. This gives consumers full control without you exposing 50 config props. The compound components pattern scales better.</p><p>Use configuration props for predictable variations. A Button with variant='primary' | 'secondary' | 'ghost' is appropriate because styles are defined. You don't need compound components for this. But if consumers need custom structure, composition wins: Tabs compound better than <Tabs tabs={[...]}> with config objects.</p><p>The 'as' prop enables polymorphism: <Button as='a' href='#'>. Your Button renders an <a> but keeps its styles. This beats duplicating components (Button and LinkButton). Type it: as?: React.ElementType and extend props: type ButtonProps<T extends React.ElementType = 'button'> = { as?: T } & React.ComponentPropsWithoutRef<T>. Complex but powerful.</p>"
      }
    ],
    "faq": [
      {
        "q": "When to use optional vs required props?",
        "a": "Make optional what has a reasonable default (size, variant). Require what's essential for the component to work (data in a DataTable, children in a Container). Optional props without defaults should have clear fallback behavior."
      },
      {
        "q": "Should I prefix all props?",
        "a": "No. Prefixes like is/has/on are useful conventions but not rigid. Use onClick for handlers, isOpen for booleans. But children, className, title don't need prefixes; they're idiomatic without them."
      },
      {
        "q": "How to name props that accept components?",
        "a": "Use descriptive nouns: icon, header, footer, emptyState. If your prop is a complete component, use PascalCase: IconComponent, HeaderComponent. This differentiates instances (<Icon />) from definitions (Icon)."
      },
      {
        "q": "What convention for styling props?",
        "a": "Always include className to allow style override. Consider variant/size for predefined variations. Avoid exposing all CSS props individually (backgroundColor, fontSize); that breaks encapsulation. Use className or style for edge cases."
      }
    ]
  }
};
