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
      slug: 'importancia-tosquia-bem-estar-ovelhas',
      title: {
        en: 'The Importance of Shearing for Sheep Welfare',
        pt: 'A Importância da Tosquia para o Bem-Estar das Ovelhas',
        es: 'La Importancia del Esquileo para el Bienestar de las Ovejas',
        fr: 'L\'Importance de la Tonte pour le Bien-Être des Moutons',
      },
      excerpt: {
        en: 'Understanding why shearing is essential for sheep health and comfort.',
        pt: 'Entendendo por que a tosquia é essencial para a saúde e conforto das ovelhas.',
        es: 'Entendiendo por qué el esquileo es esencial para la salud y comodidad de las ovejas.',
        fr: 'Comprendre pourquoi la tonte est essentielle pour la santé et le confort des moutons.',
      },
      category: {
        en: 'Animal Welfare',
        pt: 'Bem-Estar Animal',
        es: 'Bienestar Animal',
        fr: 'Bien-Être Animal',
      },
      image: '/blog/blog_tosquia_bem_estar_ovelhas.jpg',
      date: '2024-10-15',
      readTime: '8 min',
    },
    {
      slug: 'beneficios-pecas-feitas-la',
      title: {
        en: 'Benefits of Wool Garments',
        pt: 'Benefícios das Peças Feitas de Lã',
        es: 'Beneficios de las Prendas de Lana',
        fr: 'Avantages des Vêtements en Laine',
      },
      excerpt: {
        en: 'Discover the natural properties that make wool an exceptional choice.',
        pt: 'Descubra as propriedades naturais que tornam a lã uma escolha excepcional.',
        es: 'Descubre las propiedades naturales que hacen de la lana una elección excepcional.',
        fr: 'Découvrez les propriétés naturelles qui font de la laine un choix exceptionnel.',
      },
      category: {
        en: 'Wool Benefits',
        pt: 'Benefícios da Lã',
        es: 'Beneficios de la Lana',
        fr: 'Avantages de la Laine',
      },
      image: '/blog/blog_beneficios_das_pecas.jpg',
      date: '2024-10-10',
      readTime: '6 min',
    },
    {
      slug: 'como-cuidar-pecas-la',
      title: {
        en: 'How to Care for Your Wool Pieces',
        pt: 'Como Cuidar das Peças Feitas em Lã',
        es: 'Cómo Cuidar Prendas de Lana',
        fr: 'Comment Entretenir Vos Pièces en Laine',
      },
      excerpt: {
        en: 'Essential tips to preserve the beauty and quality of your wool garments.',
        pt: 'Dicas essenciais para preservar a beleza e qualidade de suas peças de lã.',
        es: 'Consejos esenciales para preservar la belleza y calidad de tus prendas de lana.',
        fr: 'Conseils essentiels pour préserver la beauté et la qualité de vos vêtements en laine.',
      },
      category: {
        en: 'Care Guide',
        pt: 'Guia de Cuidados',
        es: 'Guía de Cuidado',
        fr: 'Guide d\'Entretien',
      },
      image: '/blog/blog_cuidados_peca_de_la.png',
      date: '2024-10-05',
      readTime: '7 min',
    },
    {
      slug: 'tecnica-feltragem',
      title: {
        en: 'Do You Know the Felting Technique?',
        pt: 'Você Conhece a Técnica de Feltragem?',
        es: '¿Conoces la Técnica del Fieltro?',
        fr: 'Connaissez-Vous la Technique du Feutrage?',
      },
      excerpt: {
        en: 'Exploring the ancient art of transforming wool into felt.',
        pt: 'Explorando a arte ancestral de transformar lã em feltro.',
        es: 'Explorando el arte ancestral de transformar lana en fieltro.',
        fr: 'Explorer l\'art ancestral de transformer la laine en feutre.',
      },
      category: {
        en: 'Techniques',
        pt: 'Técnicas',
        es: 'Técnicas',
        fr: 'Techniques',
      },
      image: '/blog/blog_tecnica_de_feltragem.avif',
      date: '2024-09-28',
      readTime: '9 min',
    },
    {
      slug: 'slow-fashion-vs-fast-fashion',
      title: {
        en: 'Slow Fashion vs Fast Fashion: Understanding the Difference',
        pt: 'Slow Fashion vs Fast Fashion: Qual a Diferença?',
        es: 'Slow Fashion vs Fast Fashion: ¿Cuál es la Diferencia?',
        fr: 'Slow Fashion vs Fast Fashion: Quelle est la Différence?',
      },
      excerpt: {
        en: 'How your fashion choices impact the planet and communities.',
        pt: 'Como suas escolhas de moda impactam o planeta e as comunidades.',
        es: 'Cómo tus elecciones de moda impactan el planeta y las comunidades.',
        fr: 'Comment vos choix de mode impactent la planète et les communautés.',
      },
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      image: '/blog/blog_diferenca_slow_fast_fashion.jpg',
      date: '2024-09-20',
      readTime: '10 min',
    },
    {
      slug: 'poder-roupas-autoestima',
      title: {
        en: 'The Power of Clothing in Self-Esteem',
        pt: 'O Poder que as Roupas Têm na Autoestima',
        es: 'El Poder que la Ropa Tiene en la Autoestima',
        fr: 'Le Pouvoir des Vêtements sur l\'Estime de Soi',
      },
      excerpt: {
        en: 'How what we wear influences how we feel about ourselves.',
        pt: 'Como o que vestimos influencia como nos sentimos sobre nós mesmos.',
        es: 'Cómo lo que vestimos influye en cómo nos sentimos sobre nosotros mismos.',
        fr: 'Comment ce que nous portons influence notre perception de nous-mêmes.',
      },
      category: {
        en: 'Wellbeing',
        pt: 'Bem-Estar',
        es: 'Bienestar',
        fr: 'Bien-Être',
      },
      image: '/blog/blog_o_poder_que_as_roupas_tem_na_autoestima.jpg',
      date: '2024-09-12',
      readTime: '8 min',
    },
    {
      slug: 'tecidos-sinteticos-vs-la',
      title: {
        en: 'Synthetic Fabrics vs Wool: What\'s the Difference?',
        pt: 'Tecidos Sintéticos vs Lã: Qual a Diferença?',
        es: 'Tejidos Sintéticos vs Lana: ¿Cuál es la Diferencia?',
        fr: 'Tissus Synthétiques vs Laine: Quelle Différence?',
      },
      excerpt: {
        en: 'Comparing natural wool with synthetic alternatives.',
        pt: 'Comparando a lã natural com alternativas sintéticas.',
        es: 'Comparando la lana natural con alternativas sintéticas.',
        fr: 'Comparer la laine naturelle aux alternatives synthétiques.',
      },
      category: {
        en: 'Education',
        pt: 'Educação',
        es: 'Educación',
        fr: 'Éducation',
      },
      image: '/blog/blog_tecido_sintetico.avif',
      date: '2024-09-05',
      readTime: '11 min',
    },
  ];

  const content = {
    title: {
      en: 'Blog',
      pt: 'Blog',
      es: 'Blog',
      fr: 'Blog',
    },
    subtitle: {
      en: 'Articles about our culture, wool craftsmanship, and sustainable fashion',
      pt: 'Artigos sobre nossa cultura, artesanato em lã e moda sustentável',
      es: 'Artículos sobre nuestra cultura, artesanía en lana y moda sostenible',
      fr: 'Articles sur notre culture, artisanat en laine et mode durable',
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
          src="/blog/banner_blog.png"
          alt="Blog"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 w-full text-center text-white px-4 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo/logo_branca.svg"
                alt="UBERTI"
                width={120}
                height={120}
                className="h-20 sm:h-24 w-auto"
              />
            </div>

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
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      article.slug === 'poder-roupas-autoestima' ? 'object-top' : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Category & Date */}
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                    {article.category[locale]} • {new Date(article.date).toLocaleDateString(
                      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-US',
                      { day: 'numeric', month: 'short', year: 'numeric' }
                    ).toUpperCase()}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors mb-3">
                    {article.title[locale]}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt[locale]}
                  </p>

                  {/* Read More Link - pushed to bottom */}
                  <div className="mt-auto pt-2">
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
