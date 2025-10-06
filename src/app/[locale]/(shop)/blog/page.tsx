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
        en: 'Discover how we transform natural Pampa wool into unique pieces of wearable art, preserving ancestral techniques.',
        pt: 'Descubra como transformamos a lã natural do Pampa em peças únicas de arte vestível, preservando técnicas ancestrais.',
        es: 'Descubre cómo transformamos la lana natural del Pampa en piezas únicas de arte usable, preservando técnicas ancestrales.',
        fr: 'Découvrez comment nous transformons la laine naturelle du Pampa en pièces uniques d\'art portable, en préservant les techniques ancestrales.',
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
        en: 'A deep dive into the creative process behind our Roots collection, celebrating gaucho culture and southern traditions.',
        pt: 'Um mergulho profundo no processo criativo por trás da nossa coleção Raízes, celebrando a cultura gaúcha e as tradições do sul.',
        es: 'Una inmersión profunda en el proceso creativo detrás de nuestra colección Raíces, celebrando la cultura gaucha y las tradiciones del sur.',
        fr: 'Une plongée profonde dans le processus créatif derrière notre collection Racines, célébrant la culture gaucho et les traditions du sud.',
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
        en: 'How traditional craftsmanship and sustainable practices come together to create timeless, eco-friendly pieces.',
        pt: 'Como o artesanato tradicional e práticas sustentáveis se unem para criar peças atemporais e ecológicas.',
        es: 'Cómo la artesanía tradicional y las prácticas sostenibles se unen para crear piezas atemporales y ecológicas.',
        fr: 'Comment l\'artisanat traditionnel et les pratiques durables se rejoignent pour créer des pièces intemporelles et écologiques.',
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
        en: 'Exploring how nature\'s most perfect structures inspired our Honeycombs collection and its unique design language.',
        pt: 'Explorando como as estruturas mais perfeitas da natureza inspiraram nossa coleção Favos e sua linguagem de design única.',
        es: 'Explorando cómo las estructuras más perfectas de la naturaleza inspiraron nuestra colección Panales y su lenguaje de diseño único.',
        fr: 'Explorer comment les structures les plus parfaites de la nature ont inspiré notre collection Rayons et son langage de design unique.',
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
        en: 'Meet the master artisans who keep centuries-old weaving traditions alive through their dedicated craftsmanship.',
        pt: 'Conheça os mestres artesãos que mantêm vivas as tradições de tecelagem centenárias através de seu artesanato dedicado.',
        es: 'Conoce a los maestros artesanos que mantienen vivas las tradiciones de tejido centenarias a través de su artesanía dedicada.',
        fr: 'Rencontrez les maîtres artisans qui maintiennent vivantes les traditions de tissage séculaires grâce à leur artisanat dévoué.',
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
        en: 'From childhood in southern Brazil to creating a sustainable fashion brand - the story behind Helena Uberti.',
        pt: 'Da infância no sul do Brasil à criação de uma marca de moda sustentável - a história por trás de Helena Uberti.',
        es: 'Desde la infancia en el sur de Brasil hasta la creación de una marca de moda sostenible - la historia detrás de Helena Uberti.',
        fr: 'De l\'enfance dans le sud du Brésil à la création d\'une marque de mode durable - l\'histoire derrière Helena Uberti.',
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
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/banners/pampa_banner.png"
          alt="Blog"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/blog/${article.slug}`}
              className="group"
            >
              <article className="h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider text-gray-500">
                    <span>{article.category[locale]}</span>
                    <span>•</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString(
                        locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-US',
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}
                    </time>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-light tracking-wide mb-3 group-hover:text-gray-600 transition-colors"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {article.title[locale]}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {article.excerpt[locale]}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-sm font-light uppercase tracking-wider">
                    <span className="border-b border-black pb-1 group-hover:border-gray-400 transition-colors">
                      {content.readMore[locale]}
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
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
