# 🏗️ Arquitetura do Projeto UBERTI

## Stack Técnica

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

## Estrutura de Pastas

```
uberti/
├── docs/                       # Documentação técnica
├── src/
│   ├── app/                    # App Router
│   │   ├── [locale]/           # Internacionalização
│   │   │   ├── (shop)/         # Grupo de rotas da loja
│   │   │   ├── (auth)/         # Grupo de autenticação
│   │   │   └── admin/          # Painel administrativo
│   │   ├── api/                # API Routes
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layouts/
│   │   ├── shop/
│   │   └── admin/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── i18n/
│   │   └── utils/
│   ├── stores/
│   ├── types/
│   └── styles/
├── public/
├── supabase/
│   ├── migrations/
│   └── seed.sql
└── [arquivos de config]
```

## Princípios Arquiteturais

### 1. Design Minimalista Alexander McQueen
- Espaço em branco generoso
- Tipografia como elemento principal
- Preto e branco dominantes
- Transições elegantes

### 2. Performance First
- Static Generation onde possível
- Next.js Image optimization
- Lazy loading de componentes
- Prefetch inteligente

### 3. Multi-idioma Nativo
- Rotas dinâmicas: /en, /pt, /es
- Inglês como idioma padrão
- Traduções em todos os componentes

### 4. Type Safety
- TypeScript em todo o projeto
- Zod para validação de dados
- Tipos gerados automaticamente do Supabase

### 5. Escalabilidade
- Componentes modulares
- Estado centralizado com Zustand
- API routes organizadas por contexto
- RLS no banco para segurança