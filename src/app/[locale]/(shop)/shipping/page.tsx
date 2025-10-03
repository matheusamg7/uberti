import { InfoCard } from '@/components/ui/info-card';
import { Truck, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

interface ShippingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ShippingPage({ params }: ShippingPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const content = {
    title: {
      en: 'Shipping Information',
      pt: 'Informações de Entrega',
      es: 'Información de Envío',
      fr: 'Informations de Livraison',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {content.title[locale as keyof typeof content.title]}
          </h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <InfoCard
            icon={<Truck />}
            title={locale === 'pt' ? 'Frete Grátis' : locale === 'es' ? 'Envío Gratis' : locale === 'fr' ? 'Livraison Gratuite' : 'Free Shipping'}
            description={locale === 'pt' ? 'Em compras acima de R$ 500' : locale === 'es' ? 'En compras superiores a R$ 500' : locale === 'fr' ? 'Pour les achats supérieurs à R$ 500' : 'On orders over R$ 500'}
          />
          <InfoCard
            icon={<Zap />}
            title={locale === 'pt' ? 'Entrega Expressa' : locale === 'es' ? 'Entrega Express' : locale === 'fr' ? 'Livraison Express' : 'Express Delivery'}
            description={locale === 'pt' ? 'Opção disponível no checkout' : locale === 'es' ? 'Opción disponible en el checkout' : locale === 'fr' ? 'Option disponible au checkout' : 'Available at checkout'}
          />
          <InfoCard
            icon={<Globe />}
            title={locale === 'pt' ? 'Todo o Brasil' : locale === 'es' ? 'Todo Brasil' : locale === 'fr' ? 'Tout le Brésil' : 'All of Brazil'}
            description={locale === 'pt' ? 'Enviamos para todos os estados' : locale === 'es' ? 'Enviamos a todos los estados' : locale === 'fr' ? 'Nous livrons dans tous les états' : 'We ship to all states'}
          />
        </div>

        {/* Delivery Times */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Prazos de Entrega' : locale === 'es' ? 'Plazos de Entrega' : locale === 'fr' ? 'Délais de Livraison' : 'Delivery Times'}
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
            <ul className="space-y-4">
              <li className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{locale === 'pt' ? 'Região Sudeste:' : locale === 'es' ? 'Región Sudeste:' : locale === 'fr' ? 'Région Sud-Est:' : 'Southeast Region:'}</span>
                <span className="font-medium">{locale === 'pt' ? '3-5 dias úteis' : locale === 'es' ? '3-5 días hábiles' : locale === 'fr' ? '3-5 jours ouvrables' : '3-5 business days'}</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{locale === 'pt' ? 'Região Sul:' : locale === 'es' ? 'Región Sur:' : locale === 'fr' ? 'Région Sud:' : 'South Region:'}</span>
                <span className="font-medium">{locale === 'pt' ? '5-7 dias úteis' : locale === 'es' ? '5-7 días hábiles' : locale === 'fr' ? '5-7 jours ouvrables' : '5-7 business days'}</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{locale === 'pt' ? 'Região Centro-Oeste:' : locale === 'es' ? 'Región Centro-Oeste:' : locale === 'fr' ? 'Région Centre-Ouest:' : 'Central-West Region:'}</span>
                <span className="font-medium">{locale === 'pt' ? '7-10 dias úteis' : locale === 'es' ? '7-10 días hábiles' : locale === 'fr' ? '7-10 jours ouvrables' : '7-10 business days'}</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-700">{locale === 'pt' ? 'Região Nordeste:' : locale === 'es' ? 'Región Nordeste:' : locale === 'fr' ? 'Région Nord-Est:' : 'Northeast Region:'}</span>
                <span className="font-medium">{locale === 'pt' ? '8-12 dias úteis' : locale === 'es' ? '8-12 días hábiles' : locale === 'fr' ? '8-12 jours ouvrables' : '8-12 business days'}</span>
              </li>
              <li className="flex items-center justify-between py-3">
                <span className="text-gray-700">{locale === 'pt' ? 'Região Norte:' : locale === 'es' ? 'Región Norte:' : locale === 'fr' ? 'Région Nord:' : 'North Region:'}</span>
                <span className="font-medium">{locale === 'pt' ? '10-15 dias úteis' : locale === 'es' ? '10-15 días hábiles' : locale === 'fr' ? '10-15 jours ouvrables' : '10-15 business days'}</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-6 italic">
              {locale === 'pt' ? '*Prazos contados a partir da confirmação do pagamento' : locale === 'es' ? '*Plazos contados desde la confirmación del pago' : locale === 'fr' ? '*Délais comptés à partir de la confirmation du paiement' : '*Times counted from payment confirmation'}
            </p>
          </div>
        </div>

        {/* Tracking */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Rastreamento' : locale === 'es' ? 'Rastreo' : locale === 'fr' ? 'Suivi' : 'Tracking'}
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              {locale === 'pt'
                ? 'Após o envio, você receberá um código de rastreamento por email para acompanhar sua entrega em tempo real.'
                : locale === 'es'
                ? 'Después del envío, recibirás un código de rastreo por correo electrónico para seguir tu entrega en tiempo real.'
                : locale === 'fr'
                ? 'Après l\'expédition, vous recevrez un code de suivi par e-mail pour suivre votre livraison en temps réel.'
                : 'After shipping, you will receive a tracking code by email to follow your delivery in real time.'}
            </p>
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
              {locale === 'pt' ? 'Rastrear minha encomenda' : locale === 'es' ? 'Rastrear mi pedido' : locale === 'fr' ? 'Suivre ma commande' : 'Track my order'}
            </button>
          </div>
        </div>

        {/* Banner */}
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/banners/hero_banner_2.png"
            alt="Packaging"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-2xl md:text-3xl text-white font-light text-center px-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Embalagem cuidadosa para cada pedido' : locale === 'es' ? 'Empaque cuidadoso para cada pedido' : locale === 'fr' ? 'Emballage soigné pour chaque commande' : 'Careful packaging for every order'}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
