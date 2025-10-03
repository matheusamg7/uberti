import Image from 'next/image';
import Link from 'next/link';

interface CollectionsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CollectionsPage({ params }: CollectionsPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es' | 'fr';

  const collections = [
    {
      id: 'raizes',
      slug: 'raizes',
      name: {
        en: 'Roots',
        pt: 'Raízes',
        es: 'Raíces',
        fr: 'Racines',
      },
      description: {
        en: 'A tribute to our origins, where tradition meets contemporary design',
        pt: 'Uma homenagem às nossas origens, onde a tradição encontra o design contemporâneo',
        es: 'Un homenaje a nuestros orígenes, donde la tradición se encuentra con el diseño contemporáneo',
        fr: 'Un hommage à nos origines, où la tradition rencontre le design contemporain',
      },
      image: '/coleção 1/capa_raizes_colecao.png',
    },
    {
      id: 'favos',
      slug: 'favos',
      name: {
        en: 'Honeycombs',
        pt: 'Favos',
        es: 'Panales',
        fr: 'Rayons',
      },
      description: {
        en: 'Inspired by nature\'s perfect geometry and the sweetness of life',
        pt: 'Inspirada na geometria perfeita da natureza e na doçura da vida',
        es: 'Inspirada en la geometría perfecta de la naturaleza y la dulzura de la vida',
        fr: 'Inspiré par la géométrie parfaite de la nature et la douceur de la vie',
      },
      image: '/coleção 2/capa_favos_colecao.png',
    },
  ];

  const pageContent = {
    title: {
      en: 'Collections',
      pt: 'Coleções',
      es: 'Colecciones',
      fr: 'Collections',
    },
    subtitle: {
      en: 'Each collection tells a unique story through handcrafted pieces',
      pt: 'Cada coleção conta uma história única através de peças artesanais',
      es: 'Cada colección cuenta una historia única a través de piezas artesanales',
      fr: 'Chaque collection raconte une histoire unique à travers des pièces artisanales',
    },
    explore: {
      en: 'Explore Collection',
      pt: 'Explorar Coleção',
      es: 'Explorar Colección',
      fr: 'Explorer la Collection',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Hero Header */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/banners/pampa_banner.png"
          alt="Collections"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {pageContent.title[locale]}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {pageContent.subtitle[locale]}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/${locale}/collections/${collection.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100"
            >
              {/* Collection Image */}
              <Image
                src={collection.image}
                alt={collection.name[locale]}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/50" />

              {/* Collection Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-3 sm:mb-4"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {collection.name[locale]}
                  </h2>

                  <p
                    className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-md leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {collection.description[locale]}
                  </p>

                  <div className="inline-flex items-center gap-2 text-white text-sm sm:text-base font-light uppercase tracking-wider border-b border-white/50 pb-1 transition-all duration-300 group-hover:border-white">
                    <span>{pageContent.explore[locale]}</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          src="/banners/hero_banner_2.png"
          alt="Craftsmanship"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt'
              ? 'Cada peça é única, feita com dedicação e amor'
              : locale === 'es'
              ? 'Cada pieza es única, hecha con dedicación y amor'
              : locale === 'fr'
              ? 'Chaque pièce est unique, faite avec dévouement et amour'
              : 'Every piece is unique, made with dedication and love'
            }
          </h2>
        </div>
      </section>
    </div>
  );
}
