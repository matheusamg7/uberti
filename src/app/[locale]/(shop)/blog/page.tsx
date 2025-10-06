import Image from 'next/image';
import Link from 'next/link';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es' | 'fr';

  // Artigos do blog
  const articles = [
    {
      slug: 'a-arte-da-la-do-pampa',
      title: {
        en: 'The Art of Pampa Wool',
        pt: 'A Arte da Lã do Pampa',
        es: 'El Arte de la Lana del Pampa',
        fr: 'L\'Art de la Laine du Pampa',
      },
      excerpt: {
        en: 'Transforming natural Pampa wool into wearable art.',
        pt: 'Transformando lã do Pampa em arte vestível.',
        es: 'Transformando lana del Pampa en arte usable.',
        fr: 'Transformer la laine du Pampa en art portable.',
      },
      category: {
        en: 'Craftsmanship',
        pt: 'Artesanato',
        es: 'Artesanía',
        fr: 'Artisanat',
      },
      image: '/banners/pampa_banner.png',
      date: '2024-09-15',
      readTime: '8 min',
    },
    {
      slug: 'colecao-raizes-inspiracao',
      title: {
        en: 'Roots Collection: The Inspiration',
        pt: 'Coleção Raízes: A Inspiração',
        es: 'Colección Raíces: La Inspiración',
        fr: 'Collection Racines: L\'Inspiration',
      },
      excerpt: {
        en: 'Celebrating gaucho culture and southern traditions.',
        pt: 'Celebrando a cultura gaúcha e tradições do sul.',
        es: 'Celebrando la cultura gaucha y tradiciones del sur.',
        fr: 'Célébrant la culture gaucho et les traditions du sud.',
      },
      category: {
        en: 'Collections',
        pt: 'Coleções',
        es: 'Colecciones',
        fr: 'Collections',
      },
      image: '/coleção 1/capa_raizes_colecao.png',
      date: '2024-09-01',
      readTime: '6 min',
    },
    {
      slug: 'sustentabilidade-moda-artesanal',
      title: {
        en: 'Sustainability in Artisanal Fashion',
        pt: 'Sustentabilidade na Moda Artesanal',
        es: 'Sostenibilidad en la Moda Artesanal',
        fr: 'Durabilité dans la Mode Artisanale',
      },
      excerpt: {
        en: 'Traditional craftsmanship meets sustainable practices.',
        pt: 'Artesanato tradicional encontra práticas sustentáveis.',
        es: 'Artesanía tradicional encuentra prácticas sostenibles.',
        fr: 'L\'artisanat traditionnel rencontre les pratiques durables.',
      },
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      image: '/banners/hero_banner_1.png',
      date: '2024-08-20',
      readTime: '10 min',
    },
    {
      slug: 'geometria-perfeita-favos',
      title: {
        en: 'The Perfect Geometry of Honeycombs',
        pt: 'A Geometria Perfeita dos Favos',
        es: 'La Geometría Perfecta de los Panales',
        fr: 'La Géométrie Parfaite des Rayons',
      },
      excerpt: {
        en: 'Nature\'s perfect geometry inspires unique design.',
        pt: 'A geometria perfeita da natureza inspira design único.',
        es: 'La geometría perfecta de la naturaleza inspira diseño único.',
        fr: 'La géométrie parfaite de la nature inspire un design unique.',
      },
      category: {
        en: 'Collections',
        pt: 'Coleções',
        es: 'Colecciones',
        fr: 'Collections',
      },
      image: '/coleção 2/capa_favos_colecao.png',
      date: '2024-08-05',
      readTime: '7 min',
    },
    {
      slug: 'tecnicas-ancestrais-tecelagem',
      title: {
        en: 'Ancestral Weaving Techniques',
        pt: 'Técnicas Ancestrais de Tecelagem',
        es: 'Técnicas Ancestrales de Tejido',
        fr: 'Techniques Ancestrales de Tissage',
      },
      excerpt: {
        en: 'Master artisans keeping centuries-old traditions alive.',
        pt: 'Mestres artesãos mantendo tradições centenárias vivas.',
        es: 'Maestros artesanos manteniendo tradiciones centenarias vivas.',
        fr: 'Maîtres artisans gardant vivantes les traditions séculaires.',
      },
      category: {
        en: 'Craftsmanship',
        pt: 'Artesanato',
        es: 'Artesanía',
        fr: 'Artisanat',
      },
      image: '/banners/hero_banner_2.png',
      date: '2024-07-18',
      readTime: '12 min',
    },
    {
      slug: 'helena-uberti-jornada',
      title: {
        en: 'Helena Uberti: A Creative Journey',
        pt: 'Helena Uberti: Uma Jornada Criativa',
        es: 'Helena Uberti: Un Viaje Creativo',
        fr: 'Helena Uberti: Un Voyage Créatif',
      },
      excerpt: {
        en: 'The story behind a sustainable fashion brand.',
        pt: 'A história por trás de uma marca sustentável.',
        es: 'La historia detrás de una marca sostenible.',
        fr: 'L\'histoire derrière une marque durable.',
      },
      category: {
        en: 'Behind the Scenes',
        pt: 'Bastidores',
        es: 'Detrás de Escenas',
        fr: 'Coulisses',
      },
      image: '/Helena_uberti_0158.jpg',
      date: '2024-07-01',
      readTime: '15 min',
    },
  ];

  const content = {
    title: {
      en: 'Journal',
      pt: 'Diário',
      es: 'Diario',
      fr: 'Journal',
    },
    subtitle: {
      en: 'Stories, inspiration, and insights from our creative journey',
      pt: 'Histórias, inspiração e insights da nossa jornada criativa',
      es: 'Historias, inspiración y perspectivas de nuestro viaje creativo',
      fr: 'Histoires, inspiration et perspectives de notre voyage créatif',
    },
    readMore: {
      en: 'Read More',
      pt: 'Ler Mais',
      es: 'Leer Más',
      fr: 'Lire Plus',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Header */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/banners/pampa_banner.png"
          alt="Blog"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 w-full text-center text-white px-4 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {content.title[locale]}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.subtitle[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/blog/${article.slug}`}
              className="group"
            >
              <article className="h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Category & Date */}
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    {article.category[locale]} • {new Date(article.date).toLocaleDateString(
                      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-US',
                      { day: 'numeric', month: 'short', year: 'numeric' }
                    ).toUpperCase()}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
                    {article.title[locale]}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {article.excerpt[locale]}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <span className="text-sm text-gray-900 border-b border-gray-900 group-hover:text-gray-600 group-hover:border-gray-600 transition-colors">
                      {content.readMore[locale]}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
