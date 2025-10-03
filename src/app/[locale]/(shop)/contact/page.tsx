import { PageBanner } from '@/components/ui/page-banner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const content = {
    title: {
      en: 'Get in Touch',
      pt: 'Entre em Contato',
      es: 'Contáctanos',
      fr: 'Contactez-nous',
    },
    subtitle: {
      en: 'We would love to hear from you',
      pt: 'Adoraríamos ouvir você',
      es: 'Nos encantaría saber de ti',
      fr: 'Nous aimerions vous entendre',
    },
    name: { en: 'Name', pt: 'Nome', es: 'Nombre', fr: 'Nom' },
    email: { en: 'Email', pt: 'Email', es: 'Correo', fr: 'Email' },
    subject: { en: 'Subject', pt: 'Assunto', es: 'Asunto', fr: 'Sujet' },
    message: { en: 'Message', pt: 'Mensagem', es: 'Mensaje', fr: 'Message' },
    send: {
      en: 'SEND MESSAGE',
      pt: 'ENVIAR MENSAGEM',
      es: 'ENVIAR MENSAJE',
      fr: 'ENVOYER MESSAGE',
    },
    hours: {
      en: 'Business Hours',
      pt: 'Horário de Atendimento',
      es: 'Horario de Atención',
      fr: 'Heures d\'Ouverture',
    },
  };

  const t = (key: keyof typeof content) =>
    content[key][locale as keyof (typeof content)[keyof typeof content]] ||
    content[key].en;

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Banner */}
      <PageBanner
        imageSrc="/banners/hero_banner_1.png"
        title={t('title')}
        subtitle={t('subtitle')}
        height="md"
      />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-light mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Envie uma Mensagem' : locale === 'es' ? 'Envía un Mensaje' : locale === 'fr' ? 'Envoyer un Message' : 'Send a Message'}
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Maria Silva"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="maria@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option value="">{locale === 'pt' ? 'Selecione' : locale === 'es' ? 'Selecciona' : locale === 'fr' ? 'Sélectionnez' : 'Select'}</option>
                  <option value="question">{locale === 'pt' ? 'Dúvida sobre produto' : locale === 'es' ? 'Pregunta sobre producto' : locale === 'fr' ? 'Question sur le produit' : 'Product question'}</option>
                  <option value="order">{locale === 'pt' ? 'Pedido' : locale === 'es' ? 'Pedido' : locale === 'fr' ? 'Commande' : 'Order'}</option>
                  <option value="partnership">{locale === 'pt' ? 'Parceria' : locale === 'es' ? 'Asociación' : locale === 'fr' ? 'Partenariat' : 'Partnership'}</option>
                  <option value="other">{locale === 'pt' ? 'Outro' : locale === 'es' ? 'Otro' : locale === 'fr' ? 'Autre' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">
                  {t('message')}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder={locale === 'pt' ? 'Escreva sua mensagem...' : locale === 'es' ? 'Escribe tu mensaje...' : locale === 'fr' ? 'Écrivez votre message...' : 'Write your message...'}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
              >
                {t('send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-light mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Informações' : locale === 'es' ? 'Información' : locale === 'fr' ? 'Informations' : 'Information'}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <Mail className="h-6 w-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:contato@helenauberti.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    contato@helenauberti.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <Phone className="h-6 w-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {locale === 'pt' ? 'Telefone' : locale === 'es' ? 'Teléfono' : locale === 'fr' ? 'Téléphone' : 'Phone'}
                  </h3>
                  <a
                    href="tel:+5511999999999"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <MapPin className="h-6 w-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {locale === 'pt' ? 'Endereço' : locale === 'es' ? 'Dirección' : locale === 'fr' ? 'Adresse' : 'Address'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rua das Artes, 456
                    <br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <Clock className="h-6 w-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{t('hours')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'pt' ? 'Seg-Sex: 9h às 18h' : locale === 'es' ? 'Lun-Vie: 9h a 18h' : locale === 'fr' ? 'Lun-Ven: 9h à 18h' : 'Mon-Fri: 9am to 6pm'}
                    <br />
                    {locale === 'pt' ? 'Sáb: 10h às 14h' : locale === 'es' ? 'Sáb: 10h a 14h' : locale === 'fr' ? 'Sam: 10h à 14h' : 'Sat: 10am to 2pm'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map (Placeholder) */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              {locale === 'pt' ? '[Mapa do Google Maps]' : locale === 'es' ? '[Mapa de Google Maps]' : locale === 'fr' ? '[Carte Google Maps]' : '[Google Maps Placeholder]'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
