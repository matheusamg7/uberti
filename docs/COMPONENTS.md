# 🧩 Catálogo de Componentes UBERTI

## Design System - Estilo Alexander McQueen

### Tipografia
```typescript
// Hierarquia tipográfica
Heading1: Playfair Display, 48-64px, weight 300
Heading2: Playfair Display, 36-48px, weight 300
Heading3: Inter, 24-32px, weight 400
Body: Inter, 16px, weight 400
Caption: Inter, 14px, weight 500 (código do produto)
```

### Cores
```typescript
// Paleta minimalista
Primary: #000000 (Preto)
Secondary: #FFFFFF (Branco)
Accent: #F5F5F5 (Cinza claro)
Muted: #9CA3AF (Cinza médio)
Border: #E5E7EB (Cinza borda)
```

## Componentes Base (shadcn/ui customizados)

### Button
- Variantes: default, ghost, outline
- Tamanhos: sm, md, lg
- Estados: hover, active, disabled
- Transições suaves

### Card
- Sem bordas por padrão
- Sombra sutil opcional
- Padding generoso

### Input/Form
- Bordas minimalistas
- Focus states elegantes
- Validação integrada com Zod

## Componentes de Layout

### Header
```typescript
// components/layouts/Header.tsx
- Logo UBERTI minimalista
- Navegação horizontal (Home, Collections, About, Blog)
- Language switcher (EN/PT/ES)
- Search modal trigger
- Cart drawer trigger
- User menu
```

### Footer
```typescript
// components/layouts/Footer.tsx
- Links organizados em colunas
- Newsletter signup
- Redes sociais
- Copyright e informações legais
```

### AdminSidebar
```typescript
// components/layouts/AdminSidebar.tsx
- Navegação vertical
- Dashboard, Products, Collections, Orders
- User profile
- Logout
```

## Componentes da Loja

### ProductCard
```typescript
// components/shop/ProductCard.tsx
Props: {
  product: Product;
  locale: Locale;
}

Features:
- Imagem quadrada com hover suave
- Nome do produto elegante
- Código SKU sutil
- Preço em destaque
- Link para detalhes
```

### CollectionHero
```typescript
// components/shop/CollectionHero.tsx
Props: {
  collection: Collection;
  locale: Locale;
}

Features:
- Imagem hero full-width
- Título da coleção sobreposto
- História da coleção
- CTA para produtos
```

### CartDrawer
```typescript
// components/shop/CartDrawer.tsx
Props: {
  isOpen: boolean;
  onClose: () => void;
}

Features:
- Slide-in da direita
- Lista de itens no carrinho
- Atualizar quantidades
- Remover itens
- Subtotal
- Botão de checkout
```

### SearchModal
```typescript
// components/shop/SearchModal.tsx
Props: {
  isOpen: boolean;
  onClose: () => void;
}

Features:
- Modal full-screen
- Search input com debounce
- Resultados em tempo real
- Filtros por categoria
- Histórico de buscas
```

### ProductGallery
```typescript
// components/shop/ProductGallery.tsx
Props: {
  images: string[];
  alt: string;
}

Features:
- Imagem principal grande
- Thumbnails na lateral
- Zoom on hover
- Swipe para mobile
- Lightbox opcional
```

### SizeSelector
```typescript
// components/shop/SizeSelector.tsx
Props: {
  sizes: string[];
  selected?: string;
  onChange: (size: string) => void;
}

Features:
- Grid de tamanhos
- Estados: available, selected, unavailable
- Validação visual
```

## Componentes Admin

### DataTable
```typescript
// components/admin/DataTable.tsx
Props: {
  columns: Column[];
  data: T[];
  pagination?: boolean;
}

Features:
- Sorting
- Filtering
- Pagination
- Ações por linha (edit, delete)
```

### ProductForm
```typescript
// components/admin/ProductForm.tsx
Props: {
  product?: Product;
  onSubmit: (data: ProductData) => void;
}

Features:
- Multi-idioma fields
- Image upload
- Category/Collection selectors
- Size management
- Validation com Zod
```

### StatsCard
```typescript
// components/admin/StatsCard.tsx
Props: {
  title: string;
  value: number | string;
  change?: number;
  icon: ReactNode;
}

Features:
- Número destacado
- Trend indicator
- Icon contextual
- Período de comparação
```

## Componentes UI Específicos

### LanguageSwitcher
```typescript
// components/ui/LanguageSwitcher.tsx
Features:
- Dropdown com bandeiras
- Transição suave entre idiomas
- Mantém estado da página
```

### LoadingSkeleton
```typescript
// components/ui/LoadingSkeleton.tsx
Variantes:
- ProductCardSkeleton
- ProductPageSkeleton
- AdminTableSkeleton
```

### EmptyState
```typescript
// components/ui/EmptyState.tsx
Props: {
  title: string;
  description: string;
  action?: ReactNode;
}

Features:
- Ilustração minimalista
- Mensagem contextual
- CTA opcional
```

## Padrões de Uso

### Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid system baseado em Tailwind

### Acessibilidade
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast AA
- Focus indicators

### Performance
- Lazy loading de imagens
- Code splitting por rota
- Prefetch de componentes críticos
- Memoização onde necessário

### Animações
```typescript
// Transições padrão
transition-all duration-200 ease-in-out

// Hover effects
hover:scale-105 hover:shadow-lg

// Loading states
animate-pulse animate-spin
```