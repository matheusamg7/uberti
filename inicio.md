
# 📋 Resumo do Projeto Configurado

## Decisões Técnicas:
- **Stack:** Next.js 15.5
- **Tipo:** E-commerce de moda (Loja UBERTI) + Seção institucional com storytelling
- **Banco:** Supabase
- **Estrutura:** com src/
- **Roteamento:** Dinâmico
- **Estilização:** Tailwind CSS + shadcn/ui
- **Auth:** Supabase Auth
- **Features:** Carrinho, checkout, estoque, coleções com storytelling, busca, painel admin
- **Navegação:** Home, About Us, Blog, Products (+ busca e carrinho)
- **Idioma:** Multi-idioma (EN principal, PT, ES)
- **Pagamento:** Preparar estrutura (a definir)
- **Imagens:** Supabase Storage
- **Estado:** Zustand
- **Validação:** Zod + React Hook Form
- **Deploy:** Vercel
- **Extras:** Nenhum (adicionar depois)

**Estilo Visual:** Minimalista inspirado em Alexander McQueen
**Estrutura de Produtos:** Coleções → Categorias (Vestuário, Decoração, Colares, Acessórios) → Produtos

---

## ⚠️ IMPORTANTE: DESENVOLVIMENTO EM FASES ESTRUTURADAS

### FLUXO DE DESENVOLVIMENTO OBRIGATÓRIO:

1. **FASE 1 - SETUP E ARQUITETURA** (45-60 min)
   - Configuração completa do projeto
   - Estrutura de pastas definitiva
   - Instalação de TODOS os pacotes
   - Configurações de ambiente

2. **FASE 2 - BACKEND COMPLETO** (2-4 horas)
   - Schema do banco Supabase
   - API Routes/Server Actions
   - Middlewares e autenticação
   - Validações e segurança

3. **FASE 3 - FRONTEND COM MOCK DATA** (3-5 horas)
   - TODOS os componentes UI
   - Páginas completas
   - Fluxos funcionando com dados fictícios
   - Preparado para integração

4. **FASE 4 - INTEGRAÇÃO E POLIMENTO** (1-2 horas)
   - Conectar frontend ao backend real
   - Testes de integração
   - Otimizações finais
   - Deploy

### ESTRUTURA DE DOCUMENTAÇÃO OBRIGATÓRIA

Antes de QUALQUER código, crie a estrutura de documentação:

```
uberti/
├── docs/
│   ├── ARCHITECTURE.md      # Decisões arquiteturais
│   ├── PHASES.md            # Detalhamento das fases
│   ├── API.md               # Documentação das APIs
│   ├── COMPONENTS.md        # Catálogo de componentes
│   └── DEPLOYMENT.md        # Guia de deploy
```

---

# Projeto: UBERTI - E-commerce de Moda Artesanal

## 🛠️ Stack Técnica Definitiva

| Categoria | Tecnologia | Versão | Finalidade |
|-----------|------------|--------|------------|
| Framework | Next.js | 15.5 | App Router, RSC, Turbopack |
| Database | Supabase | Latest | PostgreSQL + Auth + Storage |
| Styling | Tailwind CSS + shadcn/ui | Latest | Design system minimalista |
| Auth | Supabase Auth | Latest | Autenticação integrada |
| State | Zustand | Latest | Carrinho e estado global |
| Forms | Zod + React Hook Form | Latest | Validação type-safe |
| Images | Supabase Storage | Latest | Armazenamento de produtos |
| i18n | next-intl | Latest | EN/PT/ES |
| Deploy | Vercel | - | Otimizado para Next.js |

## 📐 FASE 1: SETUP E ARQUITETURA COMPLETA

### 1.1 Estrutura de Pastas Definitiva

Implemente EXATAMENTE esta estrutura com src/:

```
uberti/
├── docs/                       # Documentação técnica
├── src/
│   ├── app/                    # App Router
│   │   ├── [locale]/           # Internacionalização
│   │   │   ├── (shop)/         # Grupo de rotas da loja
│   │   │   │   ├── page.tsx    # Home
│   │   │   │   ├── products/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/
│   │   │   │   ├── collections/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [collection]/
│   │   │   │   │       ├── page.tsx
│   │   │   │   │       └── [category]/
│   │   │   │   ├── about/
│   │   │   │   ├── blog/
│   │   │   │   ├── cart/
│   │   │   │   └── checkout/
│   │   │   ├── (auth)/         # Grupo de autenticação
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── account/
│   │   │   └── admin/          # Painel administrativo
│   │   │       ├── layout.tsx
│   │   │       ├── dashboard/
│   │   │       ├── products/
│   │   │       ├── collections/
│   │   │       └── orders/
│   │   ├── api/                # API Routes
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── collections/
│   │   │   └── orders/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layouts/
│   │   │   ├── Header.tsx      # Navegação minimalista
│   │   │   ├── Footer.tsx
│   │   │   └── AdminSidebar.tsx
│   │   ├── shop/
│   │   │   ├── ProductCard.tsx # Nome, código, preço
│   │   │   ├── CollectionHero.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   └── SearchModal.tsx
│   │   └── admin/
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── middleware.ts
│   │   ├── i18n/
│   │   │   ├── config.ts
│   │   │   └── dictionaries/
│   │   │       ├── en.json
│   │   │       ├── pt.json
│   │   │       └── es.json
│   │   └── utils/
│   ├── stores/
│   │   ├── cart.ts             # Zustand store
│   │   └── user.ts
│   ├── types/
│   │   ├── database.ts         # Tipos do Supabase
│   │   └── product.ts
│   └── styles/
│       └── fonts.ts            # Fontes modernas
├── public/
│   └── images/
├── supabase/
│   ├── migrations/
│   └── seed.sql
└── [arquivos de config]
```

### 1.2 Comandos de Setup Completo

Execute NA ORDEM EXATA:

```bash
# 1. Criar projeto base
npx create-next-app@latest uberti \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd uberti

# 2. Instalar TODAS as dependências principais
npm install \
  @supabase/supabase-js \
  @supabase/auth-helpers-nextjs \
  zustand \
  react-hook-form \
  @hookform/resolvers \
  zod \
  next-intl \
  lucide-react \
  clsx \
  tailwind-merge \
  class-variance-authority \
  tailwindcss-animate \
  embla-carousel-react \
  date-fns \
  --save

# 3. Instalar dependências de desenvolvimento
npm install -D \
  @types/node \
  prettier \
  eslint-config-prettier \
  supabase

# 4. Inicializar Supabase localmente
npx supabase init

# 5. Configurar shadcn/ui (com flags para Next.js 15)
npx shadcn@latest init --legacy-peer-deps

# Quando perguntar, escolha:
# - Style: Default
# - Base color: Neutral
# - CSS variables: Yes

# 6. Adicionar componentes shadcn necessários
npx shadcn@latest add --legacy-peer-deps \
  button \
  card \
  dialog \
  dropdown-menu \
  form \
  input \
  label \
  navigation-menu \
  select \
  separator \
  sheet \
  skeleton \
  table \
  tabs \
  textarea \
  toast

# 7. Criar estrutura de pastas
mkdir -p src/app/\[locale\]/\{shop,auth,admin\}
mkdir -p src/components/\{layouts,shop,admin\}
mkdir -p src/lib/\{supabase,i18n\}
mkdir -p src/stores
mkdir -p src/types
mkdir -p docs
mkdir -p supabase/migrations

# 8. Configurar variáveis de ambiente
cat > .env.local << EOL
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOL
```

### 1.3 Arquivos de Configuração Base

**tailwind.config.ts** - Design minimalista Alexander McQueen:
```typescript
// Configurar com:
// - Fontes modernas (Inter para body, Playfair Display para títulos)
// - Espaçamento generoso
// - Cores neutras com preto e branco dominantes
// - Animações suaves
```

**next.config.js** - Com i18n:
```javascript
// Configurar internacionalização
// Domínios de imagem do Supabase
// Otimizações de produção
```

## 🗄️ FASE 2: BACKEND COMPLETO - SUPABASE

### 2.1 Schema do Banco de Dados

Implementar as seguintes tabelas com RLS:

```sql
-- TABELAS PRINCIPAIS:

1. profiles (extends auth.users)
   - id (uuid, FK auth.users)
   - full_name
   - phone
   - is_admin (boolean)
   - created_at
   - updated_at

2. collections
   - id (uuid)
   - slug (unique)
   - name_en, name_pt, name_es
   - description_en, description_pt, description_es
   - story_en, story_pt, story_es (TEXT - história completa)
   - hero_image
   - is_active
   - display_order
   - created_at

3. categories
   - id (uuid)
   - slug (unique)
   - name_en, name_pt, name_es
   - display_order
   Valores fixos: 'clothing', 'decoration', 'necklaces', 'accessories'

4. products
   - id (uuid)
   - sku (unique - código do produto)
   - slug (unique)
   - collection_id (FK)
   - category_id (FK)
   - name_en, name_pt, name_es
   - description_en, description_pt, description_es
   - price (decimal)
   - stock_quantity
   - images (jsonb - array de URLs)
   - sizes (jsonb - se aplicável)
   - is_active
   - featured (boolean)
   - created_at
   - updated_at

5. cart_items
   - id (uuid)
   - user_id (FK)
   - product_id (FK)
   - quantity
   - size (se aplicável)
   - created_at

6. orders
   - id (uuid)
   - order_number (unique)
   - user_id (FK)
   - status (pending, processing, shipped, delivered)
   - subtotal
   - shipping
   - total
   - shipping_address (jsonb)
   - created_at

7. order_items
   - id (uuid)
   - order_id (FK)
   - product_id (FK)
   - quantity
   - size
   - price_at_time
   - created_at

-- CONFIGURAR RLS para todas as tabelas
-- Criar triggers para updated_at
-- Criar funções para operações complexas
```

### 2.2 Storage Buckets

Configurar buckets no Supabase Storage:
- `collections` - Imagens hero das coleções
- `products` - Imagens dos produtos
- `blog` - Imagens do blog

### 2.3 API Routes / Server Actions

Implementar endpoints seguindo padrão REST:

```
/api/
├── auth/
│   ├── login/
│   ├── register/
│   └── logout/
├── products/
│   ├── GET (listar com filtros)
│   ├── [id]/GET (detalhes)
│   └── search/
├── collections/
│   ├── GET (listar)
│   └── [slug]/GET (detalhes + produtos)
├── cart/
│   ├── GET (carrinho do usuário)
│   ├── POST (adicionar item)
│   ├── PUT (atualizar quantidade)
│   └── DELETE (remover item)
└── admin/ (protegido)
    ├── products/
    ├── collections/
    └── orders/
```

## 🎨 FASE 3: FRONTEND COMPLETO COM MOCK DATA

### 3.1 Design System - Estilo Alexander McQueen

**Princípios de Design:**
- Minimalismo extremo
- Muito espaço em branco
- Tipografia como elemento principal
- Imagens em alta qualidade com tratamento artístico
- Preto e branco dominantes
- Transições suaves e elegantes

**Componentes Base (UI Kit):**

```typescript
// Typography system - FUNDAMENTAL
// Configurar fontes modernas com hierarquia clara:
- Heading1: Playfair Display, 48-64px, weight 300
- Heading2: Playfair Display, 36-48px, weight 300  
- Heading3: Inter, 24-32px, weight 400
- Body: Inter, 16px, weight 400
- Caption: Inter, 14px, weight 500 (para código do produto)

// Product Card - Minimalista
- Imagem quadrada com hover suave
- Nome do produto (elegante)
- Código do produto (sutil)
- Preço (destaque moderado)
- Sem bordas, apenas espaçamento
```

### 3.2 Páginas Principais

**1. Home Page:**
- Hero minimalista com imagem full-screen
- Grid de coleções com storytelling visual
- Seção "About Helena" resumida
- Footer elegante

**2. Collections Page:**
- Hero com nome e história da coleção
- Filtro por categoria (Vestuário, Decoração, Colares, Acessórios)
- Grid de produtos minimalista
- Navegação entre coleções

**3. Product Detail:**
- Galeria de imagens grande (60% da tela)
- Informações do produto elegantes
- Seletor de tamanho (se aplicável)
- Botão de adicionar ao carrinho sutil

**4. About Us:**
- História da Helena e da UBERTI
- Filosofia da marca
- Processo criativo
- Imagens artísticas

**5. Cart & Checkout:**
- Design limpo e funcional
- Steps claros
- Preparado para integração com gateway

**6. Admin Panel:**
- Dashboard com métricas
- CRUD de produtos
- Gestão de coleções
- Gestão de pedidos

### 3.3 Mock Data Structure

```typescript
// lib/mock-data.ts
export const mockCollections = [
  {
    id: '1',
    slug: 'bergamota',
    name: { en: 'Bergamot', pt: 'Bergamota', es: 'Bergamota' },
    story: {
      en: 'The Bergamot collection tells a story...',
      pt: 'A coleção Bergamota conta uma história...',
      es: 'La colección Bergamota cuenta una historia...'
    },
    hero_image: '/mock/bergamot-hero.jpg'
  }
  // ... mais coleções
];

export const mockProducts = [
  {
    id: '1',
    sku: 'UBT-001',
    slug: 'flowing-dress-black',
    collection_id: '1',
    category: 'clothing',
    name: { 
      en: 'Flowing Black Dress',
      pt: 'Vestido Fluido Preto',
      es: 'Vestido Fluido Negro'
    },
    price: 890.00,
    images: ['/mock/dress-1.jpg'],
    stock: 5
  }
  // ... mais produtos
];
```

### 3.4 Internacionalização

Configurar next-intl com 3 idiomas:
- Rotas: /en, /pt, /es
- Switcher de idioma elegante no header
- Traduções para todos os textos
- Inglês como padrão

### 3.5 Estado Global com Zustand

```typescript
// stores/cart.ts
- Adicionar/remover produtos
- Atualizar quantidades
- Calcular totais
- Persistir no localStorage

// stores/user.ts
- Dados do usuário autenticado
- Preferências
- Idioma selecionado
```

## 🔄 FASE 4: INTEGRAÇÃO E POLIMENTO

### 4.1 Conectar Frontend ao Backend

1. Substituir mock data por chamadas ao Supabase
2. Implementar autenticação real
3. Conectar carrinho ao banco
4. Implementar busca com Supabase full-text search

### 4.2 Otimizações

**Performance:**
- Next.js Image optimization
- Lazy loading de componentes
- Prefetch de rotas
- Static generation onde possível

**SEO:**
- Meta tags dinâmicas multi-idioma
- Open Graph para produtos
- Sitemap.xml
- Schema.org para e-commerce

**UX:**
- Loading skeletons elegantes
- Transições suaves
- Feedback visual sutil
- Mensagens de erro amigáveis

### 4.3 Preparação para Deploy

1. Configurar Vercel
2. Variáveis de ambiente de produção
3. Configurar domínio
4. SSL e segurança

## 📋 CHECKLIST DE ENTREGA

### Fase 1 ✓
- [ ] Projeto Next.js 15.5 criado
- [ ] Todas dependências instaladas
- [ ] Estrutura de pastas completa
- [ ] Supabase configurado
- [ ] shadcn/ui instalado

### Fase 2 ✓
- [ ] Schema do banco completo
- [ ] RLS configurado
- [ ] API routes implementadas
- [ ] Autenticação funcionando
- [ ] Storage configurado

### Fase 3 ✓
- [ ] Design system minimalista implementado
- [ ] Todas páginas com mock data
- [ ] Internacionalização funcionando
- [ ] Carrinho funcional (local)
- [ ] Admin panel básico

### Fase 4 ✓
- [ ] Frontend integrado ao Supabase
- [ ] Performance otimizada
- [ ] SEO implementado
- [ ] Pronto para Vercel
- [ ] Documentação completa

## ⚠️ OBSERVAÇÕES CRÍTICAS

1. **ESTILO É FUNDAMENTAL** - O site deve respirar elegância e minimalismo
2. **TIPOGRAFIA É ARTE** - Cada texto deve ser cuidadosamente tratado
3. **STORYTELLING** - Cada coleção conta uma história única
4. **PERFORMANCE** - Site rápido é essencial para conversão
5. **MOBILE-FIRST** - Design responsivo impecável

---

**INÍCIO DO DESENVOLVIMENTO: Comece SEMPRE pela Fase 1, criando primeiro a documentação e depois o setup completo!**