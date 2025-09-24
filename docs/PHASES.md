# 📋 Fases de Desenvolvimento UBERTI

## FASE 1 - SETUP E ARQUITETURA (45-60 min)

### 1.1 Criar Projeto Base
- [ ] Next.js 15.5 com TypeScript, Tailwind, App Router, src/
- [ ] Configurar alias de importação @/*
- [ ] Configurar ESLint e Prettier

### 1.2 Instalar Dependências
**Core:**
- @supabase/supabase-js
- @supabase/auth-helpers-nextjs
- zustand
- react-hook-form + @hookform/resolvers
- zod

**UI:**
- shadcn/ui components
- lucide-react
- tailwindcss-animate
- embla-carousel-react

**i18n:**
- next-intl

### 1.3 Estrutura de Pastas
- [ ] Criar estrutura completa com src/
- [ ] Organizar por contextos (shop, auth, admin)
- [ ] Configurar grupos de rotas no App Router

### 1.4 Configurações
- [ ] tailwind.config.ts com design minimalista
- [ ] next.config.js com i18n
- [ ] Variáveis de ambiente

---

## FASE 2 - BACKEND COMPLETO (2-4 horas)

### 2.1 Schema Supabase
**Tabelas principais:**
- [ ] profiles (extensão do auth.users)
- [ ] collections (com campos multi-idioma)
- [ ] categories (Vestuário, Decoração, Colares, Acessórios)
- [ ] products (SKU, preço, estoque, imagens)
- [ ] cart_items
- [ ] orders + order_items

### 2.2 RLS e Segurança
- [ ] Configurar Row Level Security
- [ ] Policies para cada tabela
- [ ] Triggers para updated_at

### 2.3 Storage
- [ ] Bucket "collections" para imagens hero
- [ ] Bucket "products" para fotos de produtos
- [ ] Bucket "blog" para imagens do blog

### 2.4 API Routes
- [ ] /api/auth/* (login, register, logout)
- [ ] /api/products/* (CRUD + busca)
- [ ] /api/collections/* (listagem + detalhes)
- [ ] /api/cart/* (CRUD do carrinho)
- [ ] /api/admin/* (endpoints protegidos)

---

## FASE 3 - FRONTEND COM MOCK DATA (3-5 horas)

### 3.1 Design System
- [ ] Configurar fontes (Playfair Display + Inter)
- [ ] Paleta de cores minimalista
- [ ] Componentes base customizados

### 3.2 Componentes Core
- [ ] Header com navegação minimalista
- [ ] Footer elegante
- [ ] ProductCard com hover suave
- [ ] CartDrawer
- [ ] SearchModal

### 3.3 Páginas Principais
- [ ] Home com hero full-screen
- [ ] Collections com storytelling
- [ ] Products com galeria grande
- [ ] About Us com história da Helena
- [ ] Cart & Checkout funcional

### 3.4 Admin Panel
- [ ] Dashboard com métricas
- [ ] Gestão de produtos
- [ ] Gestão de coleções
- [ ] Gestão de pedidos

### 3.5 Features
- [ ] Internacionalização EN/PT/ES
- [ ] Carrinho com Zustand + localStorage
- [ ] Busca e filtros
- [ ] Mock data estruturado

---

## FASE 4 - INTEGRAÇÃO E POLIMENTO (1-2 horas)

### 4.1 Integração Real
- [ ] Substituir mock data por Supabase
- [ ] Conectar autenticação
- [ ] Implementar carrinho no banco
- [ ] Full-text search no Supabase

### 4.2 Otimizações
- [ ] Next.js Image optimization
- [ ] Lazy loading de componentes
- [ ] Prefetch de rotas críticas
- [ ] Static generation onde possível

### 4.3 SEO
- [ ] Meta tags dinâmicas multi-idioma
- [ ] Open Graph para produtos
- [ ] sitemap.xml
- [ ] Schema.org para e-commerce

### 4.4 Deploy
- [ ] Configurar Vercel
- [ ] Variáveis de ambiente de produção
- [ ] Testes de integração
- [ ] Monitoramento

---

## Checklist de Qualidade

### Design
- [ ] Estilo minimalista Alexander McQueen
- [ ] Tipografia elegante e hierárquica
- [ ] Espaçamento generoso
- [ ] Transições suaves

### Performance
- [ ] Lighthouse Score > 90
- [ ] Core Web Vitals otimizados
- [ ] Bundle size otimizado
- [ ] Imagens otimizadas

### Funcionalidade
- [ ] Carrinho funcional
- [ ] Checkout preparado
- [ ] Admin panel completo
- [ ] Multi-idioma funcionando

### Segurança
- [ ] RLS configurado
- [ ] Validação de dados
- [ ] Sanitização de inputs
- [ ] Headers de segurança