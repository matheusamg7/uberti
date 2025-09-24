import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  locale: 'en' | 'pt' | 'es';
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
  };

  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="group block"
    >
      <article className="product-card space-y-4">
        {/* Product Images */}
        <div className="relative aspect-square overflow-hidden bg-muted/30 rounded-sm">
          {/* Primary Image */}
          <Image
            src={primaryImage}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={priority}
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Secondary Image (Hover) */}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${productName} - view 2`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}

          {/* Out of Stock Overlay */}
          {product.stock_quantity === 0 && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stockStatus[locale]}
              </span>
            </div>
          )}

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 uppercase tracking-wide font-medium">
                {locale === 'pt' ? 'Destaque' : locale === 'es' ? 'Destacado' : 'Featured'}
              </span>
            </div>
          )}

          {/* Low Stock Badge */}
          {product.stock_quantity > 0 && product.stock_quantity <= 3 && (
            <div className="absolute top-3 right-3">
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 uppercase tracking-wide font-medium">
                {stockStatus[locale]}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Product Name */}
          <h3 className="font-sans text-base font-light tracking-wide text-foreground group-hover:text-muted-foreground transition-colors">
            {productName}
          </h3>

          {/* SKU */}
          <p className="caption text-muted-foreground text-xs">
            {product.sku}
          </p>

          {/* Price and Stock */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-light text-foreground">
              {formatPrice(product.price)}
            </span>

            {product.stock_quantity > 3 && (
              <span className="text-xs text-muted-foreground">
                {stockStatus[locale]}
              </span>
            )}
          </div>

          {/* Sizes (if applicable) */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-muted-foreground mr-2">
                {locale === 'pt' ? 'Tamanhos:' : locale === 'es' ? 'Tallas:' : 'Sizes:'}
              </span>
              {product.sizes.slice(0, 4).map((size, index) => (
                <span
                  key={size}
                  className="text-xs text-muted-foreground border border-border/50 px-1.5 py-0.5 rounded-sm"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{product.sizes.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}