# 🔌 Documentação das APIs UBERTI

## Estrutura das API Routes

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

## Endpoints Detalhados

### Autenticação

#### POST /api/auth/login
```typescript
Request: {
  email: string;
  password: string;
}

Response: {
  user: User;
  session: Session;
}
```

#### POST /api/auth/register
```typescript
Request: {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
}

Response: {
  user: User;
  session: Session;
}
```

### Produtos

#### GET /api/products
```typescript
Query Parameters: {
  collection?: string;
  category?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}

Response: {
  products: Product[];
  total: number;
}
```

#### GET /api/products/[id]
```typescript
Response: {
  product: Product & {
    collection: Collection;
    category: Category;
  };
}
```

#### GET /api/products/search
```typescript
Query Parameters: {
  q: string; // termo de busca
  limit?: number;
}

Response: {
  products: Product[];
  total: number;
}
```

### Coleções

#### GET /api/collections
```typescript
Query Parameters: {
  active?: boolean;
}

Response: {
  collections: Collection[];
}
```

#### GET /api/collections/[slug]
```typescript
Response: {
  collection: Collection & {
    products: Product[];
  };
}
```

### Carrinho

#### GET /api/cart
```typescript
Headers: {
  Authorization: "Bearer <token>";
}

Response: {
  items: CartItem[];
  total: number;
}
```

#### POST /api/cart
```typescript
Headers: {
  Authorization: "Bearer <token>";
}

Request: {
  productId: string;
  quantity: number;
  size?: string;
}

Response: {
  item: CartItem;
}
```

### Admin (Protegido)

#### GET /api/admin/products
```typescript
Headers: {
  Authorization: "Bearer <admin-token>";
}

Query Parameters: {
  limit?: number;
  offset?: number;
  active?: boolean;
}

Response: {
  products: Product[];
  total: number;
}
```

## Tipos TypeScript

### User
```typescript
type User = {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};
```

### Product
```typescript
type Product = {
  id: string;
  sku: string;
  slug: string;
  collectionId: string;
  categoryId: string;
  name: {
    en: string;
    pt: string;
    es: string;
  };
  description: {
    en: string;
    pt: string;
    es: string;
  };
  price: number;
  stockQuantity: number;
  images: string[];
  sizes?: string[];
  isActive: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};
```

### Collection
```typescript
type Collection = {
  id: string;
  slug: string;
  name: {
    en: string;
    pt: string;
    es: string;
  };
  description: {
    en: string;
    pt: string;
    es: string;
  };
  story: {
    en: string;
    pt: string;
    es: string;
  };
  heroImage: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
};
```

### CartItem
```typescript
type CartItem = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  size?: string;
  createdAt: string;
  product: Product;
};
```

## Padrões de Response

### Sucesso
```typescript
{
  success: true;
  data: T;
  message?: string;
}
```

### Erro
```typescript
{
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
}
```

## Validação com Zod

Todos os endpoints utilizam schemas Zod para validação:

```typescript
// Exemplo: Schema para criar produto
const createProductSchema = z.object({
  sku: z.string().min(3),
  collectionId: z.string().uuid(),
  categoryId: z.string().uuid(),
  name: z.object({
    en: z.string().min(1),
    pt: z.string().min(1),
    es: z.string().min(1),
  }),
  price: z.number().positive(),
  stockQuantity: z.number().min(0),
});
```