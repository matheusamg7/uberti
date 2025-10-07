'use client';

import { notFound } from 'next/navigation';
import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shop/ProductCard';
import { getProductBySlug, mockProducts } from '@/lib/mock-data';
import { ShoppingBag, ChevronLeft } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { locale: localeParam, slug } = use(params);
  const locale = localeParam as 'en' | 'pt' | 'es' | 'fr';
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'care'>('description');

  if (!product) {
    notFound();
  }

  const relatedProducts = mockProducts
    .filter(p => p.collection_id === product.collection_id && p.id !== product.id)
    .slice(0, 4);

  const productName = product[`name_${locale}` as keyof typeof product] as string;
  const productDescription = product[`description_${locale}` as keyof typeof product] as string;

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat(
      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-US',
      {
        style: 'currency',
        currency: locale === 'pt' ? 'BRL' : locale === 'es' ? 'EUR' : locale === 'fr' ? 'EUR' : 'USD',
      }
    );
    return formatter.format(price);
  };

  const content = {
    addToCart: { en: 'Add to Bag', pt: 'Adicionar à Sacola', es: 'Añadir a la Bolsa', fr: 'Ajouter au Sac' },
    buyNow: { en: 'Buy Now', pt: 'Comprar Agora', es: 'Comprar Ahora', fr: 'Acheter Maintenant' },
    outOfStock: { en: 'Out of Stock', pt: 'Esgotado', es: 'Agotado', fr: 'Épuisé' },
    selectSize: { en: 'Select size', pt: 'Selecione o tamanho', es: 'Selecciona la talla', fr: 'Sélectionnez la taille' },
    size: { en: 'Size', pt: 'Tamanho', es: 'Talla', fr: 'Taille' },
    quantity: { en: 'Quantity', pt: 'Quantidade', es: 'Cantidad', fr: 'Quantité' },
    relatedProducts: { en: 'You May Also Like', pt: 'Você Também Pode Gostar', es: 'También Te Puede Gustar', fr: 'Vous Aimerez Aussi' },
    backToProducts: { en: 'Back to Products', pt: 'Voltar aos Produtos', es: 'Volver a Productos', fr: 'Retour aux Produits' },
    description: { en: 'Description', pt: 'Descrição', es: 'Descripción', fr: 'Description' },
    details: { en: 'Details', pt: 'Detalhes', es: 'Detalles', fr: 'Détails' },
    care: { en: 'Care', pt: 'Cuidados', es: 'Cuidado', fr: 'Entretien' },
    composition: { en: 'Composition', pt: 'Composição', es: 'Composición', fr: 'Composition' },
    handmade: { en: '100% Handmade', pt: '100% Artesanal', es: '100% Artesanal', fr: '100% Fait Main' },
    material: { en: 'Natural Pampa Wool', pt: 'Lã Natural do Pampa', es: 'Lana Natural del Pampa', fr: 'Laine Naturelle du Pampa' },
    washCare: {
      en: 'Hand wash only in cold water. Dry flat.',
      pt: 'Lavar à mão em água fria. Secar na horizontal.',
      es: 'Lavar a mano en agua fría. Secar en posición horizontal.',
      fr: 'Laver à la main à l\'eau froide. Sécher à plat.',
    },
  };

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert(content.selectSize[locale]);
      return;
    }
    alert(content.addToCart[locale] + '!');
  };

  const handleBuyNow = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert(content.selectSize[locale]);
      return;
    }
    alert(content.buyNow[locale] + '!');
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors font-light"
        >
          <ChevronLeft className="w-4 h-4" />
          {content.backToProducts[locale]}
        </Link>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Images Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails - Vertical Column */}
            {product.images.length > 1 && (
              <div className="flex flex-col gap-3 w-20 sm:w-24">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square bg-gray-100 overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? 'border-black scale-105'
                        : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${productName} ${index + 1}`}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden sticky top-32">
                <Image
                  src={product.images[selectedImageIndex] || '/placeholder-product.jpg'}
                  alt={productName}
                  width={800}
                  height={1067}
                  className="h-full w-full object-cover transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              <h1
                className="text-3xl md:text-4xl font-light tracking-wide"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {productName}
              </h1>
              <p className="text-2xl font-light">{formatPrice(product.price)}</p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-wider text-gray-600 font-light">
                  {content.size[locale]}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm uppercase tracking-wider border transition-colors font-light ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-wider text-gray-600 font-light">
                {content.quantity[locale]}
              </div>
              <div className="flex items-center border border-gray-300 w-40">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="flex-1 text-center font-light">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity >= product.stock_quantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Buy Now - Primary (Black) */}
              <Button
                onClick={handleBuyNow}
                disabled={product.stock_quantity === 0}
                className="w-full h-14 bg-black text-white hover:bg-gray-800 text-sm uppercase tracking-wider font-light"
              >
                {product.stock_quantity === 0 ? content.outOfStock[locale] : content.buyNow[locale]}
              </Button>

              {/* Add to Cart - Secondary (White with border) */}
              <Button
                onClick={handleAddToCart}
                disabled={product.stock_quantity === 0}
                variant="outline"
                className="w-full h-14 bg-white text-black border-2 border-black hover:bg-gray-50 text-sm uppercase tracking-wider font-light"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {content.addToCart[locale]}
              </Button>
            </div>

            {/* Tabs */}
            <div className="pt-8 border-t border-gray-200">
              {/* Tab Headers */}
              <div className="flex gap-8 mb-6">
                {(['description', 'details', 'care'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm uppercase tracking-wider pb-2 transition-colors font-light ${
                      activeTab === tab
                        ? 'text-black border-b-2 border-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {content[tab][locale]}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="text-sm text-gray-700 leading-relaxed font-light">
                {activeTab === 'description' && <p>{productDescription}</p>}
                {activeTab === 'details' && (
                  <div className="space-y-3">
                    <p><span className="font-normal text-black">{content.composition[locale]}:</span> {content.material[locale]}</p>
                    <p><span className="font-normal text-black">SKU:</span> {product.sku}</p>
                    <p>{content.handmade[locale]}</p>
                  </div>
                )}
                {activeTab === 'care' && <p>{content.washCare[locale]}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-light text-center mb-12"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {content.relatedProducts[locale]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
