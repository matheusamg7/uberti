import Image from 'next/image';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function OrderSummary({ items, subtotal, shipping, total, locale }: OrderSummaryProps) {
  const labels = {
    en: {
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      total: 'Total',
    },
    pt: {
      orderSummary: 'Resumo do Pedido',
      subtotal: 'Subtotal',
      shipping: 'Frete',
      total: 'Total',
    },
    es: {
      orderSummary: 'Resumen del Pedido',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      total: 'Total',
    },
    fr: {
      orderSummary: 'Résumé de Commande',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      total: 'Total',
    },
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : locale === 'en' ? 'en-US' : locale, {
      style: 'currency',
      currency: locale === 'pt' ? 'BRL' : 'USD',
    }).format(price);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2
        className="text-xl md:text-2xl font-light mb-6"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {labels[locale].orderSummary}
      </h2>

      {/* Items */}
      <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="text-sm font-light text-gray-900 truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </h3>
              {item.size && (
                <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            {labels[locale].subtotal}
          </span>
          <span className="text-gray-900 font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            {labels[locale].shipping}
          </span>
          <span className="text-gray-900 font-medium">{formatPrice(shipping)}</span>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <div className="flex justify-between">
            <span
              className="text-lg font-light"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {labels[locale].total}
            </span>
            <span className="text-lg font-medium text-gray-900">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
