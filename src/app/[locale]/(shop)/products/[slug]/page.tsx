'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/shop/ProductCard';
import { getProductBySlug, mockProducts, mockCollections, mockCategories } from '@/lib/mock-data';
import { Minus, Plus, ShoppingBag, Heart } from 'lucide-react';

interface ProductPageProps {
  params: { locale: string; slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const locale = params.locale as 'en' | 'pt' | 'es';
  const product = getProductBySlug(params.slug);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  const collection = mockCollections.find(c => c.id === product.collection_id);
  const category = mockCategories.find(c => c.id === product.category_id);

  // Get related products from the same collection
  const relatedProducts = mockProducts
    .filter(p => p.collection_id === product.collection_id && p.id !== product.id)
    .slice(0, 4);

  const productName = product[`name_${locale}` as keyof typeof product] as string;
  const productDescription = product[`description_${locale}` as keyof typeof product] as string;
  const collectionName = collection ? collection[`name_${locale}` as keyof typeof collection] as string : '';
  const categoryName = category ? category[`name_${locale}` as keyof typeof category] as string : '';

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

  const labels = {
    sku: { en: 'SKU:', pt: 'SKU:', es: 'SKU:' },
    collection: { en: 'Collection:', pt: 'Coleção:', es: 'Colección:' },
    category: { en: 'Category:', pt: 'Categoria:', es: 'Categoría:' },
    size: { en: 'Size', pt: 'Tamanho', es: 'Talla' },
    selectSize: { en: 'Select size', pt: 'Selecione o tamanho', es: 'Selecciona la talla' },
    quantity: { en: 'Quantity', pt: 'Quantidade', es: 'Cantidad' },
    addToCart: { en: 'Add to Cart', pt: 'Adicionar ao Carrinho', es: 'Añadir al Carrito' },
    outOfStock: { en: 'Out of Stock', pt: 'Esgotado', es: 'Agotado' },
    onlyLeft: { en: 'Only {count} left', pt: 'Apenas {count} restante(s)', es: 'Solo quedan {count}' },
    relatedProducts: { en: 'Related Products', pt: 'Produtos Relacionados', es: 'Productos Relacionados' },
    viewCollection: { en: 'View Collection', pt: 'Ver Coleção', es: 'Ver Colección' },
    backToProducts: { en: '← Back to Products', pt: '← Voltar aos Produtos', es: '← Volver a Productos' },
  };

  const handleAddToCart = async () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert(locale === 'pt' ? 'Por favor, selecione um tamanho' : locale === 'es' ? 'Por favor, selecciona una talla' : 'Please select a size');
      return;
    }

    // Mock add to cart - in real app, this would call the API
    console.log('Adding to cart:', {
      productId: product.id,
      quantity,
      size: selectedSize || null,
    });

    alert(locale === 'pt' ? 'Produto adicionado ao carrinho!' : locale === 'es' ? '¡Producto añadido al carrito!' : 'Product added to cart!');
  };

  return (
    <div className="space-y-16">
      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href={`/${locale}/products`} className="hover:text-foreground">
            {locale === 'pt' ? 'Produtos' : locale === 'es' ? 'Productos' : 'Products'}
          </Link>
          {collection && (
            <>
              <span>/</span>
              <Link href={`/${locale}/collections/${collection.slug}`} className="hover:text-foreground">
                {collectionName}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-foreground">{productName}</span>
        </div>
      </nav>

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded bg-muted/30">
              <Image
                src={product.images[selectedImageIndex] || '/placeholder-product.jpg'}
                alt={productName}
                width={600}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded bg-muted/30 border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground/30'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${productName} view ${index + 1}`}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="heading-1">{productName}</h1>
              <div className="text-2xl font-light">{formatPrice(product.price)}</div>

              {/* Product Meta */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium">{labels.sku[locale]}</span> {product.sku}</p>
                {collection && (
                  <p>
                    <span className="font-medium">{labels.collection[locale]}</span>{' '}
                    <Link href={`/${locale}/collections/${collection.slug}`} className="hover:text-foreground underline">
                      {collectionName}
                    </Link>
                  </p>
                )}
                {category && (
                  <p><span className="font-medium">{labels.category[locale]}</span> {categoryName}</p>
                )}
              </div>

              {/* Stock Status */}
              {product.stock_quantity === 0 ? (
                <div className="text-destructive font-medium">
                  {labels.outOfStock[locale]}
                </div>
              ) : product.stock_quantity <= 3 ? (
                <div className="text-amber-600 font-medium">
                  {labels.onlyLeft[locale].replace('{count}', product.stock_quantity.toString())}
                </div>
              ) : null}
            </div>

            {/* Product Description */}
            {productDescription && (
              <div className="space-y-4">
                <p className="body-text leading-relaxed">{productDescription}</p>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <label className="text-sm font-medium">{labels.size[locale]}</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={labels.selectSize[locale]} />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">{labels.quantity[locale]}</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                  onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                  disabled={quantity >= product.stock_quantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock_quantity === 0}
                className="w-full"
                size="lg"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {product.stock_quantity === 0 ? labels.outOfStock[locale] : labels.addToCart[locale]}
              </Button>

              {/* Wishlist Button */}
              <Button variant="outline" className="w-full" size="lg">
                <Heart className="mr-2 h-4 w-4" />
                {locale === 'pt' ? 'Adicionar aos Favoritos' : locale === 'es' ? 'Añadir a Favoritos' : 'Add to Wishlist'}
              </Button>
            </div>

            {/* Collection Link */}
            {collection && (
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <Link href={`/${locale}/collections/${collection.slug}`}>
                    {labels.viewCollection[locale]}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 mb-8 text-center">
            {labels.relatedProducts[locale]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                locale={locale}
              />
            ))}
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href={`/${locale}/products`}>
              {labels.backToProducts[locale]}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}