'use client';

import { useState } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ChevronRight } from 'lucide-react';

interface CartPageProps {
  params: Promise<{ locale: string }>;
}

export default function CartPage({ params }: CartPageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es' | 'fr';

  return <CartContent locale={locale} />;
}

function CartContent({ locale }: { locale: 'en' | 'pt' | 'es' | 'fr' }) {
  // Mock cart items for now
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Vestido Raízes',
      price: 285000,
      quantity: 1,
      size: 'M',
      color: 'Natural',
      image: '/Helena_uberti_0158.jpg',
    },
    {
      id: '2',
      name: 'Blusa Favos',
      price: 145000,
      quantity: 2,
      size: 'P',
      color: 'Branco',
      image: '/Helena_uberti_0421.jpg',
    },
  ]);

  const content = {
    title: {
      en: 'Shopping Bag',
      pt: 'Sacola de Compras',
      es: 'Bolsa de Compras',
      fr: 'Sac d\'Achats',
    },
    empty: {
      en: 'Your bag is empty',
      pt: 'Sua sacola está vazia',
      es: 'Tu bolsa está vacía',
      fr: 'Votre sac est vide',
    },
    continueShopping: {
      en: 'Continue Shopping',
      pt: 'Continuar Comprando',
      es: 'Continuar Comprando',
      fr: 'Continuer vos achats',
    },
    subtotal: {
      en: 'Subtotal',
      pt: 'Subtotal',
      es: 'Subtotal',
      fr: 'Sous-total',
    },
    shipping: {
      en: 'Shipping',
      pt: 'Frete',
      es: 'Envío',
      fr: 'Livraison',
    },
    total: {
      en: 'Total',
      pt: 'Total',
      es: 'Total',
      fr: 'Total',
    },
    checkout: {
      en: 'Proceed to Checkout',
      pt: 'Finalizar Compra',
      es: 'Finalizar Compra',
      fr: 'Passer à la caisse',
    },
    remove: {
      en: 'Remove',
      pt: 'Remover',
      es: 'Eliminar',
      fr: 'Supprimer',
    },
    size: {
      en: 'Size',
      pt: 'Tamanho',
      es: 'Talla',
      fr: 'Taille',
    },
    color: {
      en: 'Color',
      pt: 'Cor',
      es: 'Color',
      fr: 'Couleur',
    },
    promotionalTitle: {
      en: 'Complete Your Look',
      pt: 'Complete Seu Visual',
      es: 'Completa Tu Look',
      fr: 'Complétez Votre Look',
    },
    promotionalSubtitle: {
      en: 'Handcrafted pieces that celebrate your unique style',
      pt: 'Peças artesanais que celebram seu estilo único',
      es: 'Piezas artesanales que celebran tu estilo único',
      fr: 'Des pièces artisanales qui célèbrent votre style unique',
    },
    viewCollection: {
      en: 'View Collection',
      pt: 'Ver Coleção',
      es: 'Ver Colección',
      fr: 'Voir la Collection',
    },
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-light mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
          {content.empty[locale]}
        </h1>
        <Link
          href={`/${locale}/products`}
          className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wider"
        >
          {content.continueShopping[locale]}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
            {content.title[locale]}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Cart Items - Left Side */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-8 pb-12 border-b border-gray-100 last:border-0">
                  {/* Product Image */}
                  <div className="relative w-32 h-40 bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-light mb-2">{item.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>{content.size[locale]}: {item.size}</p>
                          <p>{content.color[locale]}: {item.color}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 h-fit hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label={content.remove[locale]}
                      >
                        <X className="h-4 w-4" strokeWidth={1} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3 border border-gray-200 px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="text-sm min-w-[30px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-lg font-light">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Summary and Promotional */}
          <div className="space-y-12">
            {/* Order Summary */}
            <div className="bg-gray-50 p-10">
              <h2 className="text-xl font-light mb-6 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                {locale === 'pt' ? 'Resumo' : locale === 'es' ? 'Resumen' : locale === 'fr' ? 'Résumé' : 'Summary'}
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{content.subtotal[locale]}</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{content.shipping[locale]}</span>
                  <span className="text-green-600">
                    {locale === 'pt' ? 'Grátis' : locale === 'es' ? 'Gratis' : locale === 'fr' ? 'Gratuit' : 'Free'}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-light">
                    <span>{content.total[locale]}</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wider cursor-pointer">
                {content.checkout[locale]}
                <ChevronRight className="inline-block ml-2 h-4 w-4" strokeWidth={1} />
              </button>

              <Link
                href={`/${locale}/products`}
                className="block text-center mt-4 text-sm text-gray-600 hover:text-black transition-colors"
              >
                {content.continueShopping[locale]}
              </Link>
            </div>

            {/* Promotional Banner 1 */}
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/collections/raizes`}>
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop"
                  alt="Model wearing UBERTI collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Promotional Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light mb-2 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                    {content.promotionalTitle[locale]}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    {content.promotionalSubtitle[locale]}
                  </p>
                  <span className="inline-block px-6 py-2 border border-white text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                    {content.viewCollection[locale]}
                  </span>
                </div>
              </Link>
            </div>

            {/* Benefits */}
            <div className="border border-gray-200 p-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {locale === 'pt' ? 'Compra Segura' : locale === 'es' ? 'Compra Segura' : locale === 'fr' ? 'Achat Sécurisé' : 'Secure Purchase'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {locale === 'pt' ? 'SSL e proteção de dados' : locale === 'es' ? 'SSL y protección de datos' : locale === 'fr' ? 'SSL et protection des données' : 'SSL & data protection'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8 5-8-5M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7m-8-3v3m0 0l4-3m-4 3L8 4" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {locale === 'pt' ? 'Embalagem Premium' : locale === 'es' ? 'Embalaje Premium' : locale === 'fr' ? 'Emballage Premium' : 'Premium Packaging'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {locale === 'pt' ? 'Presente especial incluído' : locale === 'es' ? 'Regalo especial incluido' : locale === 'fr' ? 'Cadeau spécial inclus' : 'Special gift included'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {locale === 'pt' ? 'Parcelamento' : locale === 'es' ? 'Financiación' : locale === 'fr' ? 'Paiement échelonné' : 'Installments'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {locale === 'pt' ? 'Até 12x sem juros' : locale === 'es' ? 'Hasta 12x sin interés' : locale === 'fr' ? "Jusqu'à 12x sans intérêt" : 'Up to 12x interest-free'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Promotional Banner - Full Width */}
      <div className="border-t bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion models"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="py-8 md:py-0">
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                {locale === 'pt' ? 'Experiência UBERTI' : locale === 'es' ? 'Experiencia UBERTI' : locale === 'fr' ? 'Expérience UBERTI' : 'UBERTI Experience'}
              </h2>
              <p className="text-gray-600 mb-6">
                {locale === 'pt' ? 'Cada peça é cuidadosamente criada à mão, refletindo a essência da alta costura brasileira e a beleza natural do Pampa.' :
                 locale === 'es' ? 'Cada pieza está cuidadosamente hecha a mano, reflejando la esencia de la alta costura brasileña y la belleza natural de la Pampa.' :
                 locale === 'fr' ? 'Chaque pièce est soigneusement créée à la main, reflétant l\'essence de la haute couture brésilienne et la beauté naturelle de la Pampa.' :
                 'Each piece is carefully handcrafted, reflecting the essence of Brazilian haute couture and the natural beauty of the Pampa.'}
              </p>
              <div className="flex gap-4">
                <Link
                  href={`/${locale}/collections`}
                  className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  {locale === 'pt' ? 'Ver Coleções' : locale === 'es' ? 'Ver Colecciones' : locale === 'fr' ? 'Voir Collections' : 'View Collections'}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  {locale === 'pt' ? 'Nossa História' : locale === 'es' ? 'Nuestra Historia' : locale === 'fr' ? 'Notre Histoire' : 'Our Story'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}