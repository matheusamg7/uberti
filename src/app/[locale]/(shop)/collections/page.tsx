import Image from 'next/image';
import Link from 'next/link';
import { mockCollections } from '@/lib/mock-data';

interface CollectionsPageProps {
  params: { locale: string };
}

export default function CollectionsPage({ params }: CollectionsPageProps) {
  const locale = params.locale as 'en' | 'pt' | 'es';

  const pageContent = {
    title: {
      en: 'Our Collections',
      pt: 'Nossas Coleções',
      es: 'Nuestras Colecciones',
    },
    subtitle: {
      en: 'Each collection tells a unique story inspired by nature, emotion, and the beauty of handcrafted artistry.',
      pt: 'Cada coleção conta uma história única inspirada na natureza, na emoção e na beleza do artesanato.',
      es: 'Cada colección cuenta una historia única inspirada en la naturaleza, la emoción y la belleza de la artesanía.',
    },
    explore: {
      en: 'Explore Collection',
      pt: 'Explorar Coleção',
      es: 'Explorar Colección',
    },
  };

  return (
    <div className="space-y-16">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="display-2">
            {pageContent.title[locale]}
          </h1>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {pageContent.subtitle[locale]}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {mockCollections.map((collection, index) => {
            const collectionName = collection[`name_${locale}` as keyof typeof collection] as string;
            const collectionDescription = collection[`description_${locale}` as keyof typeof collection] as string;
            const collectionStory = collection[`story_${locale}` as keyof typeof collection] as string;
            const isEven = index % 2 === 0;

            return (
              <article
                key={collection.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Collection Image */}
                <div className={`aspect-[4/3] overflow-hidden rounded bg-muted/30 ${
                  isEven ? '' : 'lg:col-start-2'
                }`}>
                  <Link href={`/${locale}/collections/${collection.slug}`}>
                    <Image
                      src={collection.hero_image || '/placeholder-collection.jpg'}
                      alt={collectionName}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700"
                    />
                  </Link>
                </div>

                {/* Collection Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="space-y-4">
                    <h2 className="heading-1">
                      {collectionName}
                    </h2>
                    <p className="heading-3 font-light text-muted-foreground">
                      {collectionDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="body-text leading-relaxed text-muted-foreground">
                      {collectionStory}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/${locale}/collections/${collection.slug}`}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
                    >
                      {pageContent.explore[locale]}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="heading-2">
              {locale === 'pt'
                ? 'Descubra sua próxima peça favorita'
                : locale === 'es'
                ? 'Descubre tu próxima pieza favorita'
                : 'Discover your next favorite piece'
              }
            </h2>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              {locale === 'pt'
                ? 'Navegue por todas as nossas peças e encontre aquela que fala com seu estilo único.'
                : locale === 'es'
                ? 'Navega por todas nuestras piezas y encuentra la que habla con tu estilo único.'
                : 'Browse all our pieces and find the one that speaks to your unique style.'
              }
            </p>
            <div className="pt-4">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
              >
                {locale === 'pt' ? 'Ver Todos os Produtos' : locale === 'es' ? 'Ver Todos los Productos' : 'View All Products'}
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}