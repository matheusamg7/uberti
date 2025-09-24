import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartPageProps {
  params: { locale: string };
}

export default function CartPage({ params }: CartPageProps) {
  const locale = params.locale as 'en' | 'pt' | 'es';

  const content = {
    title: {
      en: 'Shopping Cart',
      pt: 'Carrinho de Compras',
      es: 'Carrito de Compras',
    },
    empty: {
      title: {
        en: 'Your cart is empty',
        pt: 'Seu carrinho está vazio',
        es: 'Tu carrito está vacío',
      },
      description: {
        en: 'Discover our beautiful collections and add some pieces to your cart.',
        pt: 'Descubra nossas belas coleções e adicione algumas peças ao seu carrinho.',
        es: 'Descubre nuestras hermosas colecciones y añade algunas piezas a tu carrito.',
      },
      button: {
        en: 'Continue Shopping',
        pt: 'Continuar Comprando',
        es: 'Continuar Comprando',
      },
    },
    comingSoon: {
      title: {
        en: 'Cart Functionality Coming Soon',
        pt: 'Funcionalidade do Carrinho em Breve',
        es: 'Funcionalidad del Carrito Próximamente',
      },
      description: {
        en: 'We\'re currently building an amazing shopping experience for you. In the meantime, explore our collections and discover your next favorite piece.',
        pt: 'Estamos construindo uma experiência de compra incrível para você. Enquanto isso, explore nossas coleções e descubra sua próxima peça favorita.',
        es: 'Estamos construyendo una experiencia de compra increíble para ti. Mientras tanto, explora nuestras colecciones y descubre tu próxima pieza favorita.',
      },
    },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="heading-1 mb-8">{content.title[locale]}</h1>

        {/* Empty Cart State */}
        <div className="space-y-8">
          <div className="mx-auto w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground/50" />
          </div>

          <div className="space-y-4">
            <h2 className="heading-2 font-light">{content.empty.title[locale]}</h2>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              {content.empty.description[locale]}
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="heading-3 mb-4">{content.comingSoon.title[locale]}</h3>
            <p className="body-text text-muted-foreground leading-relaxed">
              {content.comingSoon.description[locale]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={`/${locale}/collections`}>
                {locale === 'pt' ? 'Ver Coleções' : locale === 'es' ? 'Ver Colecciones' : 'View Collections'}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/products`}>
                {locale === 'pt' ? 'Ver Produtos' : locale === 'es' ? 'Ver Productos' : 'View Products'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}