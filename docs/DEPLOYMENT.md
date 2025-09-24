# 🚀 Guia de Deploy UBERTI

## Preparação para Produção

### 1. Configuração do Supabase

#### Projeto Supabase de Produção
```bash
# Criar projeto no dashboard do Supabase
# Anotar as credenciais:
- Project URL
- Anon key
- Service role key
```

#### Migrations
```bash
# Executar todas as migrations
npx supabase db push

# Verificar status
npx supabase migration list
```

#### Storage Buckets
- `collections`: Imagens hero das coleções
- `products`: Imagens dos produtos
- `blog`: Imagens do blog

**Políticas de Storage:**
```sql
-- Bucket collections (público para leitura)
CREATE POLICY "Anyone can view collections images"
ON storage.objects FOR SELECT
USING (bucket_id = 'collections');

-- Bucket products (público para leitura)
CREATE POLICY "Anyone can view product images"
ON storage.objects FOR SELECT
USING (bucket_id = 'products');

-- Upload apenas para admins
CREATE POLICY "Admins can upload images"
ON storage.objects FOR INSERT
WITH CHECK (auth.jwt() ->> 'role' = 'admin');
```

### 2. Configuração do Vercel

#### Deploy Automático
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy inicial
vercel

# Deploy de produção
vercel --prod
```

#### Variáveis de Ambiente
No dashboard do Vercel, configurar:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# App
NEXT_PUBLIC_APP_URL=https://uberti.vercel.app
NEXT_PUBLIC_SITE_NAME=UBERTI

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Otimizações de Produção

#### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/lib/i18n/config.ts');

const nextConfig = {
  // Otimizações de imagem
  images: {
    domains: [
      'your-project.supabase.co',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },

  // Compressão
  compress: true,

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ];
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
};

module.exports = withNextIntl(nextConfig);
```

### 4. Performance

#### Core Web Vitals
- **LCP**: < 2.5s (Next.js Image + Supabase CDN)
- **FID**: < 100ms (Code splitting + lazy loading)
- **CLS**: < 0.1 (Skeleton loaders)

#### Bundle Optimization
```bash
# Analisar bundle
npm run build
npm run analyze # se configurado

# Principais otimizações:
- Tree shaking automático
- Code splitting por rota
- Dynamic imports para componentes pesados
- Prefetch inteligente
```

#### Lighthouse Score Alvo
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 5. SEO

#### Meta Tags Dinâmicas
```typescript
// Por página e idioma
export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('product.title'),
    description: t('product.description'),
    openGraph: {
      title: t('product.title'),
      description: t('product.description'),
      images: [product.images[0]],
      locale: locale,
    },
  };
}
```

#### Sitemap.xml
```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const collections = await getCollections();

  return [
    {
      url: 'https://uberti.vercel.app/en',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...products.map(product => ({
      url: `https://uberti.vercel.app/en/products/${product.slug}`,
      lastModified: product.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ];
}
```

### 6. Monitoramento

#### Analytics
```typescript
// Google Analytics 4
// components/Analytics.tsx
'use client';

export function Analytics() {
  useEffect(() => {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  return null;
}
```

#### Error Tracking
```bash
# Sentry (opcional)
npm install @sentry/nextjs

# Configuração automática
npx @sentry/wizard@latest -i nextjs
```

### 7. Domínio Personalizado

#### DNS Configuration
```
# Cloudflare/Route53
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

#### SSL Certificate
- Automático no Vercel
- Force HTTPS habilitado
- HSTS headers configurados

### 8. Backup e Segurança

#### Database Backups
- Backups automáticos do Supabase (Point-in-time recovery)
- Export manual semanal das migrations

#### Security Checklist
- [ ] RLS habilitado em todas as tabelas
- [ ] API keys em variáveis de ambiente
- [ ] Rate limiting configurado
- [ ] Input sanitization implementada
- [ ] Headers de segurança configurados
- [ ] CORS configurado adequadamente

### 9. CI/CD Pipeline

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### 10. Checklist Pré-Deploy

#### Funcionalidade
- [ ] Todas as páginas carregam sem erro
- [ ] Autenticação funciona
- [ ] Carrinho persiste entre sessões
- [ ] Admin panel acessível apenas para admins
- [ ] Internacionalização funcionando
- [ ] Imagens carregam corretamente
- [ ] Formulários enviam dados
- [ ] Search funciona

#### Performance
- [ ] Lighthouse score > 90
- [ ] Imagens otimizadas
- [ ] Bundle size < 1MB
- [ ] TTI < 3s
- [ ] Mobile responsivo

#### SEO
- [ ] Meta tags configuradas
- [ ] Sitemap.xml gerado
- [ ] robots.txt configurado
- [ ] Schema.org implementado
- [ ] Open Graph configurado

#### Segurança
- [ ] HTTPS forçado
- [ ] Headers de segurança
- [ ] RLS ativo
- [ ] Input validation
- [ ] Rate limiting

### 11. Pós-Deploy

#### Testes de Produção
```bash
# Performance
npm run lighthouse

# E2E tests
npm run test:e2e

# Security scan
npm audit

# Dependencies check
npm outdated
```

#### Configuração de Domínio
1. Adicionar domínio no Vercel
2. Configurar DNS
3. Aguardar propagação (24-48h)
4. Verificar certificado SSL
5. Testar todas as rotas

#### Go Live Checklist
- [ ] Domínio configurado
- [ ] SSL ativo
- [ ] Analytics configurado
- [ ] Error tracking ativo
- [ ] Backups configurados
- [ ] Team access configurado
- [ ] Documentação atualizada