import { Database } from './database';

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

export type Profile = Tables<'profiles'>;
export type Collection = Tables<'collections'>;
export type Category = Tables<'categories'>;
export type Product = Tables<'products'>;
export type CartItem = Tables<'cart_items'>;
export type Order = Tables<'orders'>;
export type OrderItem = Tables<'order_items'>;

export type OrderStatus = Enums<'order_status'>;

// Tipos para multi-idioma
export type Locale = 'en' | 'pt' | 'es';

export interface LocalizedContent<T = string> {
  en: T;
  pt: T;
  es: T;
}

// Produto com dados relacionados (para páginas de detalhes)
export interface ProductWithRelations extends Product {
  collection: Collection;
  category: Category;
}

// Coleção com produtos
export interface CollectionWithProducts extends Collection {
  products: Product[];
}

// Item do carrinho com produto
export interface CartItemWithProduct extends CartItem {
  product: Product;
}

// Pedido com itens
export interface OrderWithItems extends Order {
  order_items: (OrderItem & { product: Product })[];
}

// Filtros para produtos
export interface ProductFilters {
  collection?: string;
  category?: string;
  featured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  message?: string;
}

// Endereço de entrega
export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
}