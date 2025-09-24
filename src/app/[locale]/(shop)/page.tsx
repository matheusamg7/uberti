import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shop/ProductCard';
import { mockCollections, getFeaturedProducts } from '@/lib/mock-data';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es';
  const featuredProducts = getFeaturedProducts().slice(0, 6);

  const heroContent = {
    title: {
      en: 'Handcrafted Elegance',
      pt: 'Elegância Artesanal',
      es: 'Elegancia Artesanal',
    },
    subtitle: {
      en: 'Where every piece tells a story',
      pt: 'Onde cada peça conta uma história',
      es: 'Donde cada pieza cuenta una historia',
    },
    description: {
      en: 'Discover Helena\'s unique vision through carefully crafted collections that blend timeless elegance with contemporary storytelling.',
      pt: 'Descubra a visão única de Helena através de coleções cuidadosamente elaboradas que misturam elegância atemporal com narrativas contemporâneas.',
      es: 'Descubre la visión única de Helena a través de colecciones cuidadosamente elaboradas que mezclan elegancia atemporal con narrativas contemporáneas.',
    },
    cta: {
      en: 'Explore Collections',
      pt: 'Explorar Coleções',
      es: 'Explorar Colecciones',
    },
  };

  const sectionsContent = {
    featured: {
      title: {
        en: 'Featured Pieces',
        pt: 'Peças em Destaque',
        es: 'Piezas Destacadas',
      },
      subtitle: {
        en: 'Carefully selected pieces that embody our vision',
        pt: 'Peças cuidadosamente selecionadas que incorporam nossa visão',
        es: 'Piezas cuidadosamente seleccionadas que encarnan nuestra visión',
      },
    },
    collections: {
      title: {
        en: 'Our Collections',
        pt: 'Nossas Coleções',
        es: 'Nuestras Colecciones',
      },
      subtitle: {
        en: 'Each collection tells a unique story inspired by nature and emotion',
        pt: 'Cada coleção conta uma história única inspirada na natureza e na emoção',
        es: 'Cada colección cuenta una historia única inspirada en la naturaleza y la emoción',
      },
      viewAll: {
        en: 'View All Collections',
        pt: 'Ver Todas as Coleções',
        es: 'Ver Todas las Colecciones',
      },
    },
    about: {
      title: {
        en: 'About Helena',
        pt: 'Sobre Helena',
        es: 'Sobre Helena',
      },
      description: {
        en: 'Helena brings decades of craftsmanship experience to every piece, creating wearable art that celebrates the beauty of handmade quality and authentic design.',
        pt: 'Helena traz décadas de experiência em artesanato para cada peça, criando arte vestível que celebra a beleza da qualidade artesanal e do design autêntico.',
        es: 'Helena aporta décadas de experiencia en artesanía a cada pieza, creando arte portable que celebra la belleza de la calidad artesanal y el diseño auténtico.',
      },
      cta: {
        en: 'Learn More',
        pt: 'Saiba Mais',
        es: 'Conoce Más',
      },
    },
  };

  return (
    <div className="space-y-20 sm:space-y-32">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=1200&fit=crop"
            alt="Helena's atelier"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="display-1 text-white max-w-4xl mx-auto">
              {heroContent.title[locale]}
            </h1>
            <p className="heading-2 font-light max-w-2xl mx-auto opacity-90">
              {heroContent.subtitle[locale]}
            </p>
            <p className="body-text text-lg leading-relaxed max-w-3xl mx-auto opacity-80">
              {heroContent.description[locale]}
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
                asChild
              >
                <Link href={`/${locale}/collections`}>
                  {heroContent.cta[locale]}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-1">
            {sectionsContent.featured.title[locale]}
          </h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {sectionsContent.featured.subtitle[locale]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              priority={index < 3}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href={`/${locale}/products?featured=true`}>
              {locale === 'pt' ? 'Ver Todos os Destaques' : locale === 'es' ? 'Ver Todos los Destacados' : 'View All Featured'}
            </Link>
          </Button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="heading-1">
            {sectionsContent.collections.title[locale]}
          </h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {sectionsContent.collections.subtitle[locale]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockCollections.slice(0, 3).map((collection) => {
            const collectionName = collection[`name_${locale}` as keyof typeof collection] as string;
            const collectionDescription = collection[`description_${locale}` as keyof typeof collection] as string;

            return (
              <Link
                key={collection.id}
                href={`/${locale}/collections/${collection.slug}`}
                className="group block"
              >
                <article className="space-y-4">
                  <div className="aspect-[4/5] overflow-hidden rounded bg-muted/30 hover-lift">
                    <Image
                      src={collection.hero_image || '/placeholder-collection.jpg'}
                      alt={collectionName}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="heading-3 group-hover:text-muted-foreground transition-colors">
                      {collectionName}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {collectionDescription}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href={`/${locale}/collections`}>
              {sectionsContent.collections.viewAll[locale]}
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="heading-1">
                {sectionsContent.about.title[locale]}
              </h2>
              <p className="body-text text-muted-foreground leading-relaxed">
                {sectionsContent.about.description[locale]}
              </p>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <Link href={`/${locale}/about`}>
                    {sectionsContent.about.cta[locale]}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded bg-muted/30">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Helena at work"
                width={600}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}