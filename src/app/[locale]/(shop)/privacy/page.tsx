interface PrivacyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <div className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Política de Privacidade' : locale === 'es' ? 'Política de Privacidad' : locale === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-gray-500">
            {locale === 'pt' ? 'Última atualização: 03 de outubro de 2025' : locale === 'es' ? 'Última actualización: 03 de octubre de 2025' : locale === 'fr' ? 'Dernière mise à jour: 03 octobre 2025' : 'Last updated: October 03, 2025'}
          </p>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              1. {locale === 'pt' ? 'Informações que Coletamos' : locale === 'es' ? 'Información que Recopilamos' : locale === 'fr' ? 'Informations que Nous Collectons' : 'Information We Collect'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {locale === 'pt'
                ? 'Coletamos informações que você nos fornece diretamente, como nome, endereço de email, endereço de entrega, e informações de pagamento quando você cria uma conta, faz uma compra, ou entra em contato conosco.'
                : 'We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you create an account, make a purchase, or contact us.'}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Também coletamos informações automaticamente sobre seu dispositivo e como você interage com nosso site, incluindo endereço IP, tipo de navegador, páginas visitadas, e tempo de permanência.'
                : 'We also automatically collect information about your device and how you interact with our site, including IP address, browser type, pages visited, and time spent.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              2. {locale === 'pt' ? 'Como Usamos Suas Informações' : locale === 'es' ? 'Cómo Usamos Su Información' : locale === 'fr' ? 'Comment Nous Utilisons Vos Informations' : 'How We Use Your Information'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {locale === 'pt' ? 'Utilizamos suas informações para:' : 'We use your information to:'}
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>{locale === 'pt' ? 'Processar e enviar seus pedidos' : 'Process and ship your orders'}</li>
              <li>{locale === 'pt' ? 'Comunicar sobre seus pedidos e entregas' : 'Communicate about your orders and deliveries'}</li>
              <li>{locale === 'pt' ? 'Enviar newsletters e ofertas promocionais (com seu consentimento)' : 'Send newsletters and promotional offers (with your consent)'}</li>
              <li>{locale === 'pt' ? 'Melhorar nosso site e experiência do usuário' : 'Improve our website and user experience'}</li>
              <li>{locale === 'pt' ? 'Prevenir fraudes e garantir a segurança' : 'Prevent fraud and ensure security'}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              3. {locale === 'pt' ? 'Compartilhamento de Informações' : locale === 'es' ? 'Compartir Información' : locale === 'fr' ? 'Partage d\'Informations' : 'Information Sharing'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Não vendemos suas informações pessoais. Compartilhamos suas informações apenas com parceiros essenciais para o funcionamento do negócio, como processadores de pagamento e transportadoras, e sempre em conformidade com a LGPD.'
                : 'We do not sell your personal information. We share your information only with essential business partners such as payment processors and shipping carriers, always in compliance with applicable laws.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              4. {locale === 'pt' ? 'Seus Direitos' : locale === 'es' ? 'Sus Derechos' : locale === 'fr' ? 'Vos Droits' : 'Your Rights'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Você tem o direito de acessar, corrigir, ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do email contato@helenauberti.com.'
                : 'You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at contato@helenauberti.com.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              5. {locale === 'pt' ? 'Segurança' : locale === 'es' ? 'Seguridad' : locale === 'fr' ? 'Sécurité' : 'Security'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda, ou alteração.'
                : 'We implement technical and organizational security measures to protect your information against unauthorized access, loss, or alteration.'}
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              6. {locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : locale === 'fr' ? 'Contact' : 'Contact'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:'
                : 'If you have questions about this Privacy Policy, contact us:'}
            </p>
            <p className="text-gray-700 mt-4">
              Email: <a href="mailto:contato@helenauberti.com" className="underline">contato@helenauberti.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
