import { InfoCard } from '@/components/ui/info-card';
import { Accordion } from '@/components/ui/accordion';
import { RotateCcw, CreditCard, Truck } from 'lucide-react';

interface ReturnsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ReturnsPage({ params }: ReturnsPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const faqItems = [
    {
      question: locale === 'pt' ? 'Qual o prazo para solicitar uma troca?' : 'What is the deadline to request a return?',
      answer: locale === 'pt' ? 'Você tem até 30 dias corridos após o recebimento do produto para solicitar troca ou devolução.' : 'You have up to 30 calendar days after receiving the product to request an exchange or return.',
    },
    {
      question: locale === 'pt' ? 'O produto precisa estar com a etiqueta?' : 'Does the product need to have the tag?',
      answer: locale === 'pt' ? 'Sim, o produto deve estar sem uso, sem lavagem e com todas as etiquetas originais.' : 'Yes, the product must be unused, unwashed and with all original tags.',
    },
    {
      question: locale === 'pt' ? 'Quanto tempo demora o reembolso?' : 'How long does the refund take?',
      answer: locale === 'pt' ? 'Após recebermos o produto de volta, o reembolso é processado em até 7 dias úteis.' : 'After we receive the product back, the refund is processed within 7 business days.',
    },
    {
      question: locale === 'pt' ? 'Posso trocar por outro produto?' : 'Can I exchange for another product?',
      answer: locale === 'pt' ? 'Sim! Você pode trocar por qualquer produto do site de mesmo valor ou superior (pagando a diferença).' : 'Yes! You can exchange for any product on the site of equal or higher value (paying the difference).',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Trocas e Devoluções' : locale === 'es' ? 'Cambios y Devoluciones' : locale === 'fr' ? 'Échanges et Retours' : 'Exchanges and Returns'}
          </h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <InfoCard
            icon={<RotateCcw />}
            title={locale === 'pt' ? '30 Dias' : '30 Days'}
            description={locale === 'pt' ? 'Prazo para trocar ou devolver' : locale === 'es' ? 'Plazo para cambiar o devolver' : locale === 'fr' ? 'Délai pour échanger ou retourner' : 'Deadline to exchange or return'}
          />
          <InfoCard
            icon={<Truck />}
            title={locale === 'pt' ? 'Frete Grátis' : locale === 'es' ? 'Envío Gratis' : locale === 'fr' ? 'Livraison Gratuite' : 'Free Shipping'}
            description={locale === 'pt' ? 'Na primeira troca' : locale === 'es' ? 'En el primer cambio' : locale === 'fr' ? 'Au premier échange' : 'On first exchange'}
          />
          <InfoCard
            icon={<CreditCard />}
            title={locale === 'pt' ? 'Reembolso Garantido' : locale === 'es' ? 'Reembolso Garantizado' : locale === 'fr' ? 'Remboursement Garanti' : 'Guaranteed Refund'}
            description={locale === 'pt' ? 'Em até 7 dias úteis' : locale === 'es' ? 'En hasta 7 días hábiles' : locale === 'fr' ? 'Sous 7 jours ouvrables' : 'Within 7 business days'}
          />
        </div>

        {/* Steps */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Como Solicitar uma Troca' : locale === 'es' ? 'Cómo Solicitar un Cambio' : locale === 'fr' ? 'Comment Demander un Échange' : 'How to Request an Exchange'}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {[1, 2, 3, 4].map((step) => {
              const steps = {
                1: {
                  pt: 'Acesse sua conta e vá em "Meus Pedidos"',
                  en: 'Access your account and go to "My Orders"',
                },
                2: {
                  pt: 'Selecione o pedido e clique em "Solicitar Troca"',
                  en: 'Select the order and click "Request Exchange"',
                },
                3: {
                  pt: 'Escolha o motivo da troca e o novo produto (se aplicável)',
                  en: 'Choose the reason for the exchange and the new product (if applicable)',
                },
                4: {
                  pt: 'Aguarde o código de postagem por email e envie o produto',
                  en: 'Wait for the shipping code by email and send the product',
                },
              };

              return (
                <div
                  key={step}
                  className="flex items-start gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white flex-shrink-0">
                    {step}
                  </div>
                  <p className="text-gray-700 pt-2">
                    {steps[step as keyof typeof steps][locale as 'pt' | 'en'] || steps[step as keyof typeof steps].en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl md:text-3xl font-light mb-8"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Perguntas Frequentes' : locale === 'es' ? 'Preguntas Frecuentes' : locale === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
