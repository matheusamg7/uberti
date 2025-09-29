import Image from 'next/image';
import Link from 'next/link';
import { FeaturedGrid } from '@/components/shop/FeaturedGrid';
import { getFeaturedProducts } from '@/lib/mock-data';
import { HeroCarousel } from '@/components/shop/HeroCarousel';
import { CollectionsImmersive } from '@/components/shop/CollectionsImmersive';
import { ExclusiveTailoring } from '@/components/shop/ExclusiveTailoring';
import { EditorialSection } from '@/components/shop/EditorialSection';
import { WhereToFind } from '@/components/shop/WhereToFind';
import { FloatingActions } from '@/components/ui/floating-actions';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es' | 'fr';
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  const heroContent = {
    title: {
      en: 'The body wears,\nwhat the soul asks for',
      pt: 'O corpo veste,\no que a alma pede',
      es: 'El cuerpo viste,\nlo que el alma pide',
      fr: 'Le corps porte,\nce que l\'âme demande',
    },
    subtitle: {
      en: '',
      pt: '',
      es: '',
      fr: '',
    },
    description: {
      en: '',
      pt: '',
      es: '',
      fr: '',
    },
    cta: {
      en: 'Explore Our Collections',
      pt: 'Explore Nossas Coleções',
      es: 'Explora Nuestras Colecciones',
      fr: 'Explorez Nos Collections',
    },
  };

  const sectionsContent = {
    featured: {
      title: {
        en: 'Featured Pieces',
        pt: 'Peças em Destaque',
        es: 'Piezas Destacadas',
        fr: 'Pièces Vedettes',
      },
      subtitle: {
        en: 'Carefully selected pieces that embody our vision',
        pt: 'Peças cuidadosamente selecionadas que incorporam nossa visão',
        es: 'Piezas cuidadosamente seleccionadas que encarnan nuestra visión',
        fr: 'Pièces soigneusement sélectionnées qui incarnent notre vision',
      },
    },
    collections: {
      title: {
        en: 'Our Collections',
        pt: 'Nossas Coleções',
        es: 'Nuestras Colecciones',
        fr: 'Nos Collections',
      },
      subtitle: {
        en: 'Each collection tells a unique story inspired by nature and emotion',
        pt: 'Cada coleção conta uma história única inspirada na natureza e na emoção',
        es: 'Cada colección cuenta una historia única inspirada en la naturaleza y la emoción',
        fr: 'Chaque collection raconte une histoire unique inspirée par la nature et l\'émotion',
      },
      viewAll: {
        en: 'View All Collections',
        pt: 'Ver Todas as Coleções',
        es: 'Ver Todas las Colecciones',
        fr: 'Voir Toutes les Collections',
      },
    },
    about: {
      title: {
        en: 'About Helena',
        pt: 'Sobre Helena',
        es: 'Sobre Helena',
        fr: 'À Propos d\'Helena',
      },
      description: {
        en: 'Helena brings decades of craftsmanship experience to every piece, creating wearable art that celebrates the beauty of handmade quality and authentic design.',
        pt: 'Helena traz décadas de experiência em artesanato para cada peça, criando arte vestível que celebra a beleza da qualidade artesanal e do design autêntico.',
        es: 'Helena aporta décadas de experiencia en artesanía a cada pieza, creando arte portable que celebra la belleza de la calidad artesanal y el diseño auténtico.',
        fr: 'Helena apporte des décennies d\'expérience artisanale à chaque pièce, créant un art portable qui célèbre la beauté de la qualité artisanale et du design authentique.',
      },
      cta: {
        en: 'Learn More',
        pt: 'Saiba Mais',
        es: 'Conoce Más',
        fr: 'En Savoir Plus',
      },
    },
  };

  return (
    <div>
      {/* Hero Carousel Section */}
      <HeroCarousel locale={locale} heroContent={heroContent} />

      {/* Collections Immersive Section */}
      <CollectionsImmersive locale={locale} />

      {/* Featured Products Section */}
      <section className="bg-[#FEFDFE] py-24">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: "'Cinzel', serif" }}>
              {sectionsContent.featured.title[locale]}
            </h2>
          </div>

          <FeaturedGrid
            products={featuredProducts}
            locale={locale}
          />

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/products`}
              className="inline-block px-8 py-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
            >
              {locale === 'pt' ? 'Ver Todos os Produtos' : locale === 'es' ? 'Ver Todos los Productos' : locale === 'fr' ? 'Voir Tous les Produits' : 'View All Products'}
            </Link>
          </div>
        </div>
      </section>

      {/* Pampa Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        >
          <source src="/banners/pampa_brasileiro_video.mp4" type="video/mp4" />
        </video>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center" style={{ marginTop: '-10%' }}>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] leading-tight drop-shadow-lg" style={{ fontFamily: "'Cinzel', serif" }}>
              PAMPA<br/>BRASILEIRO
            </h2>
          </div>
        </div>
        {/* Logo no vídeo */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
          <Image
            src="/logo/logo_branca.svg"
            alt="UBERTI"
            width={60}
            height={60}
            className="opacity-80"
          />
        </div>
      </section>

      <div className="space-y-12" style={{ backgroundColor: '#FEFDFE' }}>
        {/* Editorial Section */}
        <EditorialSection locale={locale} />

        {/* Exclusive Tailoring Section */}
        <ExclusiveTailoring locale={locale} />

        {/* Where to Find Section */}
        <WhereToFind locale={locale} />
      </div>

      {/* Floating Actions - WhatsApp and Scroll to Top */}
      <FloatingActions />
    </div>
  );
}