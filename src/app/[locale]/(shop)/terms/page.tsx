interface TermsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
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
            {locale === 'pt' ? 'Termos de Serviço' : locale === 'es' ? 'Términos de Servicio' : locale === 'fr' ? 'Conditions de Service' : 'Terms of Service'}
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
              1. {locale === 'pt' ? 'Aceitação dos Termos' : locale === 'es' ? 'Aceptación de los Términos' : locale === 'fr' ? 'Acceptation des Conditions' : 'Acceptance of Terms'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Ao acessar e usar este site, você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, está proibido de usar ou acessar este site.'
                : 'By accessing and using this website, you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              2. {locale === 'pt' ? 'Uso do Site' : locale === 'es' ? 'Uso del Sitio' : locale === 'fr' ? 'Utilisation du Site' : 'Use of Site'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {locale === 'pt' ? 'Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros.' : 'You agree to use the site only for lawful purposes and in a manner that does not infringe the rights of third parties.'}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt' ? 'É proibido:' : 'It is prohibited to:'}
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mt-4">
              <li>{locale === 'pt' ? 'Usar o site de forma fraudulenta ou ilegal' : 'Use the site fraudulently or illegally'}</li>
              <li>{locale === 'pt' ? 'Tentar obter acesso não autorizado ao sistema' : 'Attempt to gain unauthorized access to the system'}</li>
              <li>{locale === 'pt' ? 'Transmitir vírus ou códigos maliciosos' : 'Transmit viruses or malicious code'}</li>
              <li>{locale === 'pt' ? 'Reproduzir ou copiar conteúdo sem autorização' : 'Reproduce or copy content without authorization'}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              3. {locale === 'pt' ? 'Produtos e Preços' : locale === 'es' ? 'Productos y Precios' : locale === 'fr' ? 'Produits et Prix' : 'Products and Prices'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Todos os produtos estão sujeitos à disponibilidade. Reservamo-nos o direito de descontinuar qualquer produto a qualquer momento. Os preços estão sujeitos a alterações sem aviso prévio.'
                : 'All products are subject to availability. We reserve the right to discontinue any product at any time. Prices are subject to change without notice.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              4. {locale === 'pt' ? 'Pedidos e Pagamentos' : locale === 'es' ? 'Pedidos y Pagos' : locale === 'fr' ? 'Commandes et Paiements' : 'Orders and Payments'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Ao fazer um pedido, você garante que todas as informações fornecidas são verdadeiras e precisas. Reservamo-nos o direito de recusar ou cancelar qualquer pedido por qualquer motivo.'
                : 'By placing an order, you warrant that all information provided is true and accurate. We reserve the right to refuse or cancel any order for any reason.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              5. {locale === 'pt' ? 'Propriedade Intelectual' : locale === 'es' ? 'Propiedad Intelectual' : locale === 'fr' ? 'Propriété Intellectuelle' : 'Intellectual Property'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens, e software, é propriedade da Helena Uberti e está protegido por leis de direitos autorais.'
                : 'All content on this site, including text, graphics, logos, images, and software, is the property of Helena Uberti and is protected by copyright laws.'}
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              6. {locale === 'pt' ? 'Limitação de Responsabilidade' : locale === 'es' ? 'Limitación de Responsabilidad' : locale === 'fr' ? 'Limitation de Responsabilité' : 'Limitation of Liability'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Helena Uberti não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar este site.'
                : 'Helena Uberti shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use this site.'}
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-light mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              7. {locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : locale === 'fr' ? 'Contact' : 'Contact'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Para questões sobre estes Termos de Serviço, entre em contato:'
                : 'For questions about these Terms of Service, contact:'}
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
