import { ExternalLink } from 'lucide-react';

interface PressPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function PressPage({ params }: PressPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const pressItems = [
    {
      outlet: 'Vogue Brasil',
      date: '15/08/2024',
      title: {
        pt: 'Helena Uberti revoluciona moda sustentável com lã do Pampa',
        en: 'Helena Uberti revolutionizes sustainable fashion with Pampa wool',
      },
      excerpt: {
        pt: 'A designer Helena Uberti traz para o cenário da moda brasileira uma proposta única: unir tradição, sustentabilidade e design contemporâneo através da lã natural do Pampa...',
        en: 'Designer Helena Uberti brings to the Brazilian fashion scene a unique proposal: combining tradition, sustainability and contemporary design through natural Pampa wool...',
      },
      link: '#',
    },
    {
      outlet: 'Elle Brasil',
      date: '10/07/2024',
      title: {
        pt: '10 marcas brasileiras para conhecer em 2024',
        en: '10 Brazilian brands to discover in 2024',
      },
      excerpt: {
        pt: 'Entre as marcas que estão redefinindo o conceito de luxo sustentável no Brasil, Helena Uberti se destaca pela qualidade impecável e respeito às tradições artesanais...',
        en: 'Among the brands redefining the concept of sustainable luxury in Brazil, Helena Uberti stands out for its impeccable quality and respect for artisanal traditions...',
      },
      link: '#',
    },
    {
      outlet: 'Casa Vogue',
      date: '22/06/2024',
      title: {
        pt: 'Texteis naturais: a volta das fibras orgânicas na decoração',
        en: 'Natural textiles: the return of organic fibers in decoration',
      },
      excerpt: {
        pt: 'A linha casa da Helena Uberti prova que é possível unir conforto, estética e consciência ambiental. Suas mantas e almofadas de lã natural transformam qualquer ambiente...',
        en: 'Helena Uberti\'s home line proves that it is possible to combine comfort, aesthetics and environmental awareness. Her natural wool blankets and pillows transform any environment...',
      },
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <div className="mb-16">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Imprensa' : locale === 'es' ? 'Prensa' : locale === 'fr' ? 'Presse' : 'Press'}
          </h1>
          <p className="text-lg text-gray-600">
            {locale === 'pt' ? 'Helena Uberti na Mídia' : locale === 'es' ? 'Helena Uberti en los Medios' : locale === 'fr' ? 'Helena Uberti dans les Médias' : 'Helena Uberti in the Media'}
          </p>
        </div>

        {/* Press Items */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20">
          {pressItems.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                    {item.outlet}
                  </h2>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>

              <h3
                className="text-xl md:text-2xl font-light mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {item.title[locale as 'pt' | 'en'] || item.title.en}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {item.excerpt[locale as 'pt' | 'en'] || item.excerpt.en}
              </p>

              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm text-black hover:text-gray-600 transition-colors underline"
              >
                {locale === 'pt' ? 'Ler matéria completa' : locale === 'es' ? 'Leer artículo completo' : locale === 'fr' ? 'Lire l\'article complet' : 'Read full article'}
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Press Kit */}
        <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12">
          <h2
            className="text-2xl md:text-3xl font-light mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Kit de Imprensa' : locale === 'es' ? 'Kit de Prensa' : locale === 'fr' ? 'Kit de Presse' : 'Press Kit'}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {locale === 'pt'
              ? 'Materiais para download incluindo logos em alta resolução, fotos de produtos e informações sobre a marca.'
              : 'Downloadable materials including high-resolution logos, product photos and brand information.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider">
              {locale === 'pt' ? 'Baixar Logo' : locale === 'es' ? 'Descargar Logo' : locale === 'fr' ? 'Télécharger Logo' : 'Download Logo'}
            </button>
            <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider">
              {locale === 'pt' ? 'Baixar Fotos' : locale === 'es' ? 'Descargar Fotos' : locale === 'fr' ? 'Télécharger Photos' : 'Download Photos'}
            </button>
            <a
              href={`/${locale}/contact`}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider"
            >
              {locale === 'pt' ? 'Contato Imprensa' : locale === 'es' ? 'Contacto Prensa' : locale === 'fr' ? 'Contact Presse' : 'Press Contact'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
