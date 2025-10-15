import Link from 'next/link';
import Image from 'next/image';
import { CheckoutSteps } from '@/components/shop/checkout-steps';

interface ConfirmationPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ConfirmationPage({ params }: ConfirmationPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Mock order data
  const order = {
    id: '#HU-2024-001234',
    customerName: 'Maria Silva',
    email: 'maria@email.com',
    items: [
      {
        id: '1',
        name: 'Casaco de Lã Merino',
        price: 450,
        quantity: 1,
        image: '/Helena_uberti_0158.jpg',
        size: 'M',
      },
      {
        id: '2',
        name: 'Lenço Artesanal',
        price: 120,
        quantity: 2,
        image: '/Helena_uberti_0421.jpg',
      },
    ],
    subtotal: 690,
    shipping: 25,
    total: 715,
    address: {
      street: 'Rua das Flores, 123',
      complement: 'Apto 45',
      city: 'São Paulo',
      state: 'SP',
      zip: '01234-567',
    },
    estimatedDelivery: '7-10 dias úteis',
  };

  const content = {
    title: {
      en: 'Order Confirmed!',
      pt: 'Pedido Confirmado!',
      es: '¡Pedido Confirmado!',
      fr: 'Commande Confirmée!',
    },
    thankYou: {
      en: 'Thank you for your purchase',
      pt: 'Obrigado pela sua compra',
      es: 'Gracias por tu compra',
      fr: 'Merci pour votre achat',
    },
    orderNumber: {
      en: 'Order number',
      pt: 'Número do pedido',
      es: 'Número de pedido',
      fr: 'Numéro de commande',
    },
    emailSent: {
      en: 'We sent a confirmation email to:',
      pt: 'Enviamos um email de confirmação para:',
      es: 'Enviamos un correo de confirmación a:',
      fr: 'Nous avons envoyé un email de confirmation à:',
    },
    trackOrder: {
      en: 'You can track your order at:',
      pt: 'Você pode acompanhar seu pedido em:',
      es: 'Puedes seguir tu pedido en:',
      fr: 'Vous pouvez suivre votre commande sur:',
    },
    orderDetails: {
      en: 'Order Details',
      pt: 'Detalhes do Pedido',
      es: 'Detalles del Pedido',
      fr: 'Détails de la Commande',
    },
    deliveryAddress: {
      en: 'Delivery Address',
      pt: 'Endereço de Entrega',
      es: 'Dirección de Entrega',
      fr: 'Adresse de Livraison',
    },
    estimatedDelivery: {
      en: 'Estimated delivery',
      pt: 'Prazo de entrega',
      es: 'Entrega estimada',
      fr: 'Livraison estimée',
    },
    continueShopping: {
      en: 'CONTINUE SHOPPING',
      pt: 'CONTINUAR COMPRANDO',
      es: 'CONTINUAR COMPRANDO',
      fr: 'CONTINUER LES ACHATS',
    },
    viewOrders: {
      en: 'VIEW ORDERS',
      pt: 'VER PEDIDOS',
      es: 'VER PEDIDOS',
      fr: 'VOIR LES COMMANDES',
    },
  };

  const t = (key: keyof typeof content) => content[key][locale as keyof typeof content[keyof typeof content]] || content[key].en;

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Steps */}
        <CheckoutSteps currentStep={3} locale={locale as 'en' | 'pt' | 'es' | 'fr'} />

        {/* Success Icon */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-4 sm:mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t('title')}
          </h1>
          <p
            className="text-lg text-gray-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('thankYou')}, {order.customerName}
          </p>
          <p className="text-sm text-gray-500">
            {t('orderNumber')}: <span className="font-medium text-gray-900">{order.id}</span>
          </p>
        </div>

        {/* Email Confirmation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12 text-center">
          <p className="text-sm text-blue-900 mb-2">{t('emailSent')}</p>
          <p className="font-medium text-blue-900">{order.email}</p>
          <p className="text-sm text-blue-700 mt-4">{t('trackOrder')}</p>
          <Link
            href={`/${locale}/account/orders`}
            className="inline-block mt-2 text-sm font-medium text-blue-900 underline hover:text-blue-700"
          >
            {locale === 'pt' ? 'Minha Conta > Pedidos' : 'My Account > Orders'}
          </Link>
        </div>

        {/* Order Details */}
        <div className="mb-8 sm:mb-12">
          <h2
            className="text-xl sm:text-2xl font-light mb-4 sm:mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t('orderDetails')}
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            {/* Items */}
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    {item.size && <p className="text-xs text-gray-500 mt-1">Tamanho: {item.size}</p>}
                    <p className="text-xs text-gray-500 mt-1">Quantidade: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Frete:</span>
                <span className="text-gray-900">R$ {order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium pt-3 border-t border-gray-200">
                <span>Total:</span>
                <span>R$ {order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
          <h3
            className="text-lg font-light mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {t('deliveryAddress')}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {order.address.street}
            {order.address.complement && `, ${order.address.complement}`}
            <br />
            {order.address.city} - {order.address.state}
            <br />
            CEP: {order.address.zip}
          </p>
          <p className="text-sm text-gray-600 mt-4">
            {t('estimatedDelivery')}: <span className="font-medium text-gray-900">{order.estimatedDelivery}</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}`}
            className="flex-1 py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider text-center"
          >
            {t('continueShopping')}
          </Link>
          <Link
            href={`/${locale}/account/orders`}
            className="flex-1 py-4 border border-black hover:bg-black hover:text-white transition-colors text-sm uppercase tracking-wider text-center"
          >
            {t('viewOrders')}
          </Link>
        </div>

        {/* Social Banner */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 sm:p-8 md:p-12 text-white">
            <h2
              className="text-2xl md:text-3xl font-light mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Siga-nos no Instagram' : 'Follow us on Instagram'}
            </h2>
            <p className="text-lg mb-6">@uberti_oficial</p>
            <a
              href="https://www.instagram.com/uberti_oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
            >
              {locale === 'pt' ? 'Seguir' : 'Follow'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
