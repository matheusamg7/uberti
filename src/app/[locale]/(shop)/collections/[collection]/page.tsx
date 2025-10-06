import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/mock-data';

interface CollectionPageProps {
  params: Promise<{ locale: string; collection: string }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const resolvedParams = await params;
  const { locale, collection } = resolvedParams;

  // Coleções Raízes e Favos
  const collections = {
    raizes: {
      name: {
        en: 'Roots',
        pt: 'Raízes',
        es: 'Raíces',
        fr: 'Racines',
      },
      subtitle: {
        en: 'A tribute to our origins',
        pt: 'Uma homenagem às nossas origens',
        es: 'Un homenaje a nuestros orígenes',
        fr: 'Un hommage à nos origines',
      },
      story: {
        en: 'The Roots collection is born from a deep connection with the land and traditions of the Brazilian Pampa. Each piece tells the story of generations of artisans who dedicated their lives to preserving ancestral techniques. The natural wool, carefully selected from local sheep, carries the essence of wide fields and the authentic spirit of the South.',
        pt: 'A coleção Raízes nasce de uma conexão profunda com a terra e as tradições do Pampa brasileiro. Cada peça conta a história de gerações de artesãos que dedicaram suas vidas a preservar técnicas ancestrais. A lã natural, cuidadosamente selecionada de ovelhas locais, carrega a essência dos campos amplos e o espírito autêntico do Sul.',
        es: 'La colección Raíces nace de una profunda conexión con la tierra y las tradiciones del Pampa brasileño. Cada pieza cuenta la historia de generaciones de artesanos que dedicaron sus vidas a preservar técnicas ancestrales. La lana natural, cuidadosamente seleccionada de ovejas locales, lleva la esencia de los campos amplios y el espíritu auténtico del Sur.',
        fr: 'La collection Racines naît d\'une profonde connexion avec la terre et les traditions du Pampa brésilien. Chaque pièce raconte l\'histoire de générations d\'artisans qui ont consacré leur vie à préserver les techniques ancestrales. La laine naturelle, soigneusement sélectionnée auprès des moutons locaux, porte l\'essence des vastes champs et l\'esprit authentique du Sud.',
      },
      inspiration: {
        en: 'Inspired by the deep roots of gaucho culture, this collection celebrates the strength and resilience found in our origins. Earth tones and organic textures evoke the connection between man and nature.',
        pt: 'Inspirada nas raízes profundas da cultura gaúcha, esta coleção celebra a força e a resiliência encontradas em nossas origens. Tons terrosos e texturas orgânicas evocam a conexão entre o homem e a natureza.',
        es: 'Inspirada en las profundas raíces de la cultura gaucha, esta colección celebra la fuerza y la resiliencia encontradas en nuestros orígenes. Tonos tierra y texturas orgánicas evocan la conexión entre el hombre y la naturaleza.',
        fr: 'Inspirée par les racines profondes de la culture gaucho, cette collection célèbre la force et la résilience trouvées dans nos origines. Les tons terreux et les textures organiques évoquent la connexion entre l\'homme et la nature.',
      },
      heroBanner: '/coleção 1/capa_raizes_colecao.png',
      secondaryBanner: '/Helena_uberti_0158.jpg',
    },
    favos: {
      name: {
        en: 'Honeycombs',
        pt: 'Favos',
        es: 'Panales',
        fr: 'Rayons',
      },
      subtitle: {
        en: 'The perfect geometry of nature',
        pt: 'A geometria perfeita da natureza',
        es: 'La geometría perfecta de la naturaleza',
        fr: 'La géométrie parfaite de la nature',
      },
      story: {
        en: 'The Honeycombs collection draws inspiration from nature\'s most perfect structures. Like bees that meticulously build their honeycombs, each piece is crafted with precision and dedication. The hexagonal patterns, present in subtle details, symbolize harmony, collaboration, and the sweetness of life.',
        pt: 'A coleção Favos se inspira nas estruturas mais perfeitas da natureza. Como as abelhas que constroem meticulosamente seus favos, cada peça é elaborada com precisão e dedicação. Os padrões hexagonais, presentes em detalhes sutis, simbolizam harmonia, colaboração e a doçura da vida.',
        es: 'La colección Panales se inspira en las estructuras más perfectas de la naturaleza. Como las abejas que construyen meticulosamente sus panales, cada pieza se elabora con precisión y dedicación. Los patrones hexagonales, presentes en detalles sutiles, simbolizan armonía, colaboración y la dulzura de la vida.',
        fr: 'La collection Rayons s\'inspire des structures les plus parfaites de la nature. Comme les abeilles qui construisent méticuleusement leurs rayons, chaque pièce est élaborée avec précision et dévouement. Les motifs hexagonaux, présents dans des détails subtils, symbolisent l\'harmonie, la collaboration et la douceur de la vie.',
      },
      inspiration: {
        en: 'Geometric patterns meet organic textures in a unique fusion. Golden and amber tones reference honey, while structured silhouettes evoke the architectural perfection of honeycombs.',
        pt: 'Padrões geométricos encontram texturas orgânicas em uma fusão única. Tons dourados e âmbar fazem referência ao mel, enquanto silhuetas estruturadas evocam a perfeição arquitetônica dos favos.',
        es: 'Los patrones geométricos se encuentran con texturas orgánicas en una fusión única. Tonos dorados y ámbar hacen referencia a la miel, mientras que siluetas estructuradas evocan la perfección arquitectónica de los panales.',
        fr: 'Les motifs géométriques rencontrent les textures organiques dans une fusion unique. Les tons dorés et ambrés font référence au miel, tandis que les silhouettes structurées évoquent la perfection architecturale des rayons.',
      },
      heroBanner: '/coleção 2/capa_favos_colecao.png',
      secondaryBanner: '/Helena_uberti_0421.jpg',
    },
  };

  const currentCollection = collections[collection as keyof typeof collections];

  if (!currentCollection) {
    notFound();
  }

  // Mock products - em produção, filtrar por collection
  const products = mockProducts.slice(0, 8);

  const content = {
    ourStory: {
      en: 'Our Story',
      pt: 'Nossa História',
      es: 'Nuestra Historia',
      fr: 'Notre Histoire',
    },
    inspiration: {
      en: 'Inspiration',
      pt: 'Inspiração',
      es: 'Inspiración',
      fr: 'Inspiration',
    },
    products: {
      en: 'Products',
      pt: 'Produtos',
      es: 'Productos',
      fr: 'Produits',
    },
    viewAll: {
      en: 'View All Products',
      pt: 'Ver Todos os Produtos',
      es: 'Ver Todos los Productos',
      fr: 'Voir Tous les Produits',
    },
    backToCollections: {
      en: '← Back to Collections',
      pt: '← Voltar para Coleções',
      es: '← Volver a Colecciones',
      fr: '← Retour aux Collections',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Hero Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={currentCollection.heroBanner}
          alt={currentCollection.name[locale as keyof typeof currentCollection.name]}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {currentCollection.name[locale as keyof typeof currentCollection.name]}
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {currentCollection.subtitle[locale as keyof typeof currentCollection.subtitle]}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {content.ourStory[locale as keyof typeof content.ourStory]}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {currentCollection.story[locale as keyof typeof currentCollection.story]}
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={currentCollection.secondaryBanner}
              alt="Collection detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {content.inspiration[locale as keyof typeof content.inspiration]}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {currentCollection.inspiration[locale as keyof typeof currentCollection.inspiration]}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {content.products[locale as keyof typeof content.products]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale as 'en' | 'pt' | 'es' | 'fr'}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/products`}
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
          >
            {content.viewAll[locale as keyof typeof content.viewAll]}
          </Link>
        </div>
      </section>

      {/* Back to Collections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center">
          <Link
            href={`/${locale}/collections`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {content.backToCollections[locale as keyof typeof content.backToCollections]}
          </Link>
        </div>
      </section>
    </div>
  );
}
