'use client';

import Image from 'next/image';
import Link from 'next/link';

interface EditorialSectionProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function EditorialSection({ locale }: EditorialSectionProps) {
  const content = {
    title: {
      en: 'Editorial',
      pt: 'Editorial',
      es: 'Editorial',
      fr: 'Éditorial',
    },
    subtitle: {
      en: 'Stories, inspiration and craftsmanship',
      pt: 'Histórias, inspiração e artesanato',
      es: 'Historias, inspiración y artesanía',
      fr: 'Histoires, inspiration et artisanat',
    },
    readMore: {
      en: 'Read More',
      pt: 'Leia Mais',
      es: 'Leer Más',
      fr: 'Lire Plus',
    },
  };

  const articles = [
    {
      id: 1,
      category: {
        en: 'Heritage',
        pt: 'Patrimônio',
        es: 'Patrimonio',
        fr: 'Patrimoine',
      },
      title: {
        en: 'The Art of Pampa in Haute Couture',
        pt: 'A Arte do Pampa na Alta Costura',
        es: 'El Arte de la Pampa en la Alta Costura',
        fr: "L'Art de la Pampa dans la Haute Couture",
      },
      excerpt: {
        en: 'Exploring the rich cultural heritage of the South American plains and its influence on contemporary fashion.',
        pt: 'Explorando o rico patrimônio cultural das planícies sul-americanas e sua influência na moda contemporânea.',
        es: 'Explorando el rico patrimonio cultural de las llanuras sudamericanas y su influencia en la moda contemporánea.',
        fr: 'Explorer le riche patrimoine culturel des plaines sud-américaines et son influence sur la mode contemporaine.',
      },
      date: '15 Nov 2024',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
      slug: 'pampa-haute-couture',
    },
    {
      id: 2,
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      title: {
        en: 'Sustainability and Artisanal Fashion',
        pt: 'Sustentabilidade e Moda Artesanal',
        es: 'Sostenibilidad y Moda Artesanal',
        fr: 'Durabilité et Mode Artisanale',
      },
      excerpt: {
        en: 'How traditional craftsmanship techniques contribute to a more sustainable future in fashion.',
        pt: 'Como técnicas tradicionais de artesanato contribuem para um futuro mais sustentável na moda.',
        es: 'Cómo las técnicas artesanales tradicionales contribuyen a un futuro más sostenible en la moda.',
        fr: "Comment les techniques artisanales traditionnelles contribuent à un avenir plus durable dans la mode.",
      },
      date: '10 Nov 2024',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
      slug: 'sustainable-fashion',
    },
    {
      id: 3,
      category: {
        en: 'Profile',
        pt: 'Perfil',
        es: 'Perfil',
        fr: 'Profil',
      },
      title: {
        en: 'Helena Uberti: 30 Years of History',
        pt: 'Helena Uberti: 30 Anos de História',
        es: 'Helena Uberti: 30 Años de Historia',
        fr: "Helena Uberti: 30 Ans d'Histoire",
      },
      excerpt: {
        en: 'A journey through three decades of dedication to art and fashion, creating timeless pieces.',
        pt: 'Uma jornada através de três décadas de dedicação à arte e moda, criando peças atemporais.',
        es: 'Un viaje a través de tres décadas de dedicación al arte y la moda, creando piezas atemporales.',
        fr: "Un voyage à travers trois décennies de dévouement à l'art et à la mode, créant des pièces intemporelles.",
      },
      date: '05 Nov 2024',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop',
      slug: 'helena-uberti-history',
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{content.title[locale]}</h2>
          <p className="body-text text-muted-foreground">
            {content.subtitle[locale]}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/${locale}/blog/${article.slug}`}
              className="group block"
            >
              <article className="space-y-4">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    width={400}
                    height={533}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-gray-500">
                    <span>{article.category[locale]}</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light tracking-wide group-hover:text-gray-600 transition-colors">
                    {article.title[locale]}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt[locale]}
                  </p>

                  {/* Read More */}
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider border-b border-gray-800 group-hover:border-gray-600 transition-colors">
                      {content.readMore[locale]}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Articles */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            {locale === 'pt' ? 'Ver Todos os Artigos' : locale === 'es' ? 'Ver Todos los Artículos' : locale === 'fr' ? 'Voir Tous les Articles' : 'View All Articles'}
          </Link>
        </div>
      </div>
    </section>
  );
}