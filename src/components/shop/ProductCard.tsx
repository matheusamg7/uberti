import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  locale: 'en' | 'pt' | 'es' | 'fr';
  priority?: boolean;
}

export function ProductCard({ product, locale, priority = false }: ProductCardProps) {
  const productName = product[`name_${locale}` as keyof Product] as string;
  const primaryImage = product.images?.[0] || '/placeholder-product.jpg';
  const secondaryImage = product.images?.[1];

  // Format price based on locale
  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat(
      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en-US',
      {
        style: 'currency',
        currency: locale === 'pt' ? 'BRL' : locale === 'es' ? 'EUR' : 'USD',
      }
    );
    return formatter.format(price);
  };

  const stockStatus = {
    en: product.stock_quantity > 0
      ? product.stock_quantity <= 3
        ? 'Only few left'
        : 'In Stock'
      : 'Out of Stock',
    pt: product.stock_quantity > 0
      ? product.stock_quantity <= 3
        ? 'Últimas peças'
        : 'Em Estoque'
      : 'Esgotado',
    es: product.stock_quantity > 0
      ? product.stock_quantity <= 3
        ? 'Últimas piezas'
        : 'En Stock'
      : 'Agotado',
    fr: product.stock_quantity > 0
      ? product.stock_quantity <= 3
        ? 'Dernières pièces'
        : 'En Stock'
      : 'Épuisé',
  };

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group block"
    >
      <article className="space-y-3">
        {/* Product Images */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 group">
          {/* Primary Image */}
          <Image
            src={primaryImage}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Secondary Image (Hover) */}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${productName} - alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}

          {/* Out of Stock Overlay */}
          {product.stock_quantity === 0 && (
            <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                {stockStatus[locale]}
              </span>
            </div>
          )}
        </div>

        {/* Product Info - Minimalist Style */}
        <div className="space-y-1">
          {/* Product Name */}
          <h3 className="text-sm font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
            {productName}
          </h3>

          {/* SKU */}
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {product.sku}
          </p>

          {/* Price */}
          <p className="text-sm font-light text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    </Link>
  );
}