'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EditorialSectionProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function EditorialSection({ locale }: EditorialSectionProps) {
  const content = {
    title: {
      en: 'Culture',
      pt: 'Cultura',
      es: 'Cultura',
      fr: 'Culture',
    },
    subtitle: {
      en: 'Discover our culture, stories\nand creative process',
      pt: 'Conheça nossa cultura, histórias\ne processo criativo',
      es: 'Conoce nuestra cultura, historias\ny proceso creativo',
      fr: 'Découvrez notre culture, nos histoires\net notre processus créatif',
    },
    readMore: {
      en: 'Read More',
      pt: 'Leia Mais',
      es: 'Leer Más',
      fr: 'Lire Plus',
    },
  };

  // All 7 educational blog articles
  const allArticles = [
    {
      id: 1,
      category: {
        en: 'Animal Welfare',
        pt: 'Bem-Estar Animal',
        es: 'Bienestar Animal',
        fr: 'Bien-être Animal',
      },
      title: {
        en: 'The Importance of Shearing for Sheep Welfare',
        pt: 'A Importância da Tosquia para o Bem-Estar das Ovelhas',
        es: 'La Importancia del Esquileo para el Bienestar de las Ovejas',
        fr: 'L\'Importance de la Tonte pour le Bien-être des Moutons',
      },
      excerpt: {
        en: 'Understanding how proper shearing practices ensure the health and comfort of sheep throughout the year.',
        pt: 'Entenda como práticas adequadas de tosquia garantem a saúde e o conforto das ovelhas durante todo o ano.',
        es: 'Comprenda cómo las prácticas adecuadas de esquileo garantizan la salud y comodidad de las ovejas durante todo el año.',
        fr: 'Comprendre comment les bonnes pratiques de tonte garantissent la santé et le confort des moutons tout au long de l\'année.',
      },
      date: '15 Nov 2024',
      readTime: '8 min',
      image: '/blog/blog_tosquia_bem_estar_ovelhas.jpg',
      slug: 'importancia-tosquia-bem-estar-ovelhas',
    },
    {
      id: 2,
      category: {
        en: 'Benefits',
        pt: 'Benefícios',
        es: 'Beneficios',
        fr: 'Avantages',
      },
      title: {
        en: 'Benefits of Wool Pieces',
        pt: 'Benefícios das Peças Feitas em Lã',
        es: 'Beneficios de las Piezas de Lana',
        fr: 'Avantages des Pièces en Laine',
      },
      excerpt: {
        en: 'Discover the unique properties of wool that make it a superior natural fiber for clothing and accessories.',
        pt: 'Descubra as propriedades únicas da lã que a tornam uma fibra natural superior para roupas e acessórios.',
        es: 'Descubra las propiedades únicas de la lana que la convierten en una fibra natural superior para ropa y accesorios.',
        fr: 'Découvrez les propriétés uniques de la laine qui en font une fibre naturelle supérieure pour les vêtements et accessoires.',
      },
      date: '12 Nov 2024',
      readTime: '6 min',
      image: '/blog/blog_beneficios_das_pecas.jpg',
      slug: 'beneficios-pecas-feitas-la',
    },
    {
      id: 3,
      category: {
        en: 'Care',
        pt: 'Cuidados',
        es: 'Cuidado',
        fr: 'Entretien',
      },
      title: {
        en: 'How to Care for Wool Pieces',
        pt: 'Como Cuidar de Peças em Lã',
        es: 'Cómo Cuidar Piezas de Lana',
        fr: 'Comment Entretenir les Pièces en Laine',
      },
      excerpt: {
        en: 'Essential tips for washing, storing, and maintaining your wool garments to ensure their longevity and beauty.',
        pt: 'Dicas essenciais para lavar, armazenar e manter suas peças de lã, garantindo sua longevidade e beleza.',
        es: 'Consejos esenciales para lavar, guardar y mantener sus prendas de lana para asegurar su longevidad y belleza.',
        fr: 'Conseils essentiels pour laver, ranger et entretenir vos vêtements en laine afin d\'assurer leur longévité et leur beauté.',
      },
      date: '10 Nov 2024',
      readTime: '7 min',
      image: '/blog/blog_cuidados_peca_de_la.png',
      slug: 'como-cuidar-pecas-la',
    },
    {
      id: 4,
      category: {
        en: 'Technique',
        pt: 'Técnica',
        es: 'Técnica',
        fr: 'Technique',
      },
      title: {
        en: 'The Felting Technique',
        pt: 'A Técnica de Feltragem',
        es: 'La Técnica del Fieltro',
        fr: 'La Technique du Feutrage',
      },
      excerpt: {
        en: 'Explore the ancient art of felting and how this traditional technique creates unique, durable wool pieces.',
        pt: 'Explore a arte ancestral da feltragem e como essa técnica tradicional cria peças únicas e duráveis em lã.',
        es: 'Explore el arte ancestral del fieltro y cómo esta técnica tradicional crea piezas únicas y duraderas de lana.',
        fr: 'Explorez l\'art ancestral du feutrage et comment cette technique traditionnelle crée des pièces uniques et durables en laine.',
      },
      date: '08 Nov 2024',
      readTime: '9 min',
      image: '/blog/blog_tecnica_de_feltragem.avif',
      slug: 'tecnica-feltragem',
    },
    {
      id: 5,
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      title: {
        en: 'Slow Fashion vs Fast Fashion',
        pt: 'Slow Fashion vs Fast Fashion',
        es: 'Slow Fashion vs Fast Fashion',
        fr: 'Slow Fashion vs Fast Fashion',
      },
      excerpt: {
        en: 'Understanding the differences between slow and fast fashion and why conscious choices matter for our planet.',
        pt: 'Compreenda as diferenças entre slow fashion e fast fashion e por que escolhas conscientes importam para o planeta.',
        es: 'Comprenda las diferencias entre slow fashion y fast fashion y por qué las elecciones conscientes importan para el planeta.',
        fr: 'Comprendre les différences entre slow fashion et fast fashion et pourquoi les choix conscients sont importants pour notre planète.',
      },
      date: '05 Nov 2024',
      readTime: '10 min',
      image: '/blog/blog_diferenca_slow_fast_fashion.jpg',
      slug: 'slow-fashion-vs-fast-fashion',
    },
    {
      id: 6,
      category: {
        en: 'Lifestyle',
        pt: 'Estilo de Vida',
        es: 'Estilo de Vida',
        fr: 'Style de Vie',
      },
      title: {
        en: 'The Power of Clothing in Self-Esteem',
        pt: 'O Poder das Roupas na Autoestima',
        es: 'El Poder de la Ropa en la Autoestima',
        fr: 'Le Pouvoir des Vêtements sur l\'Estime de Soi',
      },
      excerpt: {
        en: 'How the clothes we wear influence our confidence, mood, and the way we present ourselves to the world.',
        pt: 'Como as roupas que usamos influenciam nossa confiança, humor e a forma como nos apresentamos ao mundo.',
        es: 'Cómo la ropa que usamos influye en nuestra confianza, estado de ánimo y la forma en que nos presentamos al mundo.',
        fr: 'Comment les vêtements que nous portons influencent notre confiance, notre humeur et la façon dont nous nous présentons au monde.',
      },
      date: '01 Nov 2024',
      readTime: '8 min',
      image: '/blog/blog_o_poder_que_as_roupas_tem_na_autoestima.jpg',
      slug: 'poder-roupas-autoestima',
    },
    {
      id: 7,
      category: {
        en: 'Materials',
        pt: 'Materiais',
        es: 'Materiales',
        fr: 'Matériaux',
      },
      title: {
        en: 'Synthetic Fabrics vs Wool',
        pt: 'Tecidos Sintéticos vs Lã',
        es: 'Tejidos Sintéticos vs Lana',
        fr: 'Tissus Synthétiques vs Laine',
      },
      excerpt: {
        en: 'A comprehensive comparison between synthetic fabrics and natural wool, examining sustainability and performance.',
        pt: 'Uma comparação abrangente entre tecidos sintéticos e lã natural, analisando sustentabilidade e desempenho.',
        es: 'Una comparación integral entre tejidos sintéticos y lana natural, analizando sostenibilidad y rendimiento.',
        fr: 'Une comparaison complète entre les tissus synthétiques et la laine naturelle, examinant la durabilité et la performance.',
      },
      date: '28 Oct 2024',
      readTime: '9 min',
      image: '/blog/blog_tecido_sintetico.avif',
      slug: 'tecidos-sinteticos-vs-la',
    },
  ];

  // Initialize with first 3 articles (for SSR)
  const [articles, setArticles] = useState(allArticles.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Randomize articles only on client side after mount
  useEffect(() => {
    const shuffled = [...allArticles].sort(() => Math.random() - 0.5);
    setArticles(shuffled.slice(0, 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation handlers for mobile carousel
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-12 pb-24 bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Title left on desktop with button, centralized on mobile */}
        <div className="mb-8">
          <div className="md:flex md:items-start md:justify-between">
            <div>
              <h2 className="heading-1 text-center md:text-left mb-0">{content.title[locale]}</h2>
              <p className="body-text text-muted-foreground text-center md:text-left mt-2">
                {content.subtitle[locale]}
              </p>
            </div>

            {/* View All Button - Desktop only, EM CIMA ao lado do título */}
            <div className="hidden md:block md:mt-2">
              <Link
                href={`/${locale}/blog`}
                className="inline-block px-8 py-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider whitespace-nowrap"
              >
                {locale === 'pt' ? 'Ver Todos os Artigos' : locale === 'es' ? 'Ver Todos los Artículos' : locale === 'fr' ? 'Voir Tous les Articles' : 'View All Articles'}
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Cards - 1 card no mobile com navegação, 3 columns no desktop */}
        <div className="relative">
          {/* Mobile Carousel - 1 card com navegação */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {articles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-4">
                    <Link
                      href={`/${locale}/blog/${article.slug}`}
                      className="group block"
                    >
                      <article className="space-y-4">
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                          <Image
                            src={article.image}
                            alt={article.title[locale]}
                            width={400}
                            height={300}
                            className={`h-full w-full object-cover ${
                              article.slug === 'poder-roupas-autoestima' ? 'object-top' : ''
                            }`}
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          {/* Category & Date */}
                          <div className="text-xs uppercase tracking-wider text-gray-500 text-center">
                            {article.category[locale]} • {article.date}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors text-center">
                            {article.title[locale]}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 text-center">
                            {article.excerpt[locale]}
                          </p>

                          {/* Read More Link */}
                          <div className="pt-2 text-center">
                            <span className="text-sm text-gray-900 border-b border-gray-900 group-hover:text-gray-600 group-hover:border-gray-600 transition-colors">
                              {content.readMore[locale]}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Bolinhas pretas com flechas brancas */}
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
              aria-label="Next article"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {articles.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid - 3 columns */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/blog/${article.slug}`}
                className="group block"
              >
                <article className="space-y-4">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title[locale]}
                      width={400}
                      height={300}
                      className={`h-full w-full object-cover ${
                        article.slug === 'poder-roupas-autoestima' ? 'object-top' : ''
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Category & Date */}
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      {article.category[locale]} • {article.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors">
                      {article.title[locale]}
                    </h3>

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
        </div>

        {/* View All Button - abaixo dos artigos - APENAS MOBILE */}
        <div className="flex justify-center mt-12 md:hidden">
          <Link
            href={`/${locale}/blog`}
            className="inline-block px-8 py-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
          >
            {locale === 'pt' ? 'Ver Todos os Artigos' : locale === 'es' ? 'Ver Todos los Artículos' : locale === 'fr' ? 'Voir Tous les Articles' : 'View All Articles'}
          </Link>
        </div>
      </div>
    </section>
  );
}