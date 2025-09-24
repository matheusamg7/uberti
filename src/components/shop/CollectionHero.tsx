import Image from 'next/image';
import { Collection } from '@/types/product';
import { Button } from '@/components/ui/button';

interface CollectionHeroProps {
  collection: Collection;
  locale: 'en' | 'pt' | 'es';
  onExploreProducts?: () => void;
}

export function CollectionHero({ collection, locale, onExploreProducts }: CollectionHeroProps) {
  const collectionName = collection[`name_${locale}` as keyof Collection] as string;
  const collectionDescription = collection[`description_${locale}` as keyof Collection] as string;
  const collectionStory = collection[`story_${locale}` as keyof Collection] as string;

  const exploreText = {
    en: 'Explore Products',
    pt: 'Explorar Produtos',
    es: 'Explorar Productos',
  };

  const scrollToProducts = () => {
    if (onExploreProducts) {
      onExploreProducts();
    } else {
      // Default behavior: scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={collection.hero_image || '/placeholder-hero.jpg'}
          alt={collectionName}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <div className="space-y-8 animate-fade-in-up">
          {/* Collection Name */}
          <h1 className="display-1 text-white tracking-wider">
            {collectionName}
          </h1>

          {/* Collection Description */}
          {collectionDescription && (
            <p className="heading-2 font-light max-w-2xl mx-auto opacity-90">
              {collectionDescription}
            </p>
          )}

          {/* Collection Story */}
          {collectionStory && (
            <div className="max-w-3xl mx-auto">
              <p className="body-text text-lg leading-relaxed opacity-85">
                {collectionStory}
              </p>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={scrollToProducts}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              {exploreText[locale]}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}