import Image from 'next/image';

interface CategoryBannerProps {
  category: string;
  subcategory: string;
  imageSrc: string;
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CategoryBanner({ category, subcategory, imageSrc, locale }: CategoryBannerProps) {
  const categoryTranslations: Record<string, Record<string, string>> = {
    women: { en: 'WOMEN', pt: 'MULHER', es: 'MUJER', fr: 'FEMME' },
    men: { en: 'MEN', pt: 'HOMEM', es: 'HOMBRE', fr: 'HOMME' },
    accessories: { en: 'ACCESSORIES', pt: 'ACESSÓRIOS', es: 'ACCESORIOS', fr: 'ACCESSOIRES' },
    home: { en: 'HOME', pt: 'CASA', es: 'CASA', fr: 'MAISON' },
    art: { en: 'ART', pt: 'ARTE', es: 'ARTE', fr: 'ART' },
  };

  return (
    <section className="relative h-[50vh] sm:h-[60vh] min-h-[350px] sm:min-h-[450px] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={`${category} ${subcategory}`}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white pb-8 sm:pb-12 md:pb-16 px-4 max-w-4xl mx-auto">
        <p
          className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 opacity-80"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {categoryTranslations[category]?.[locale] || category}
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide capitalize"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {subcategory.replace(/-/g, ' ')}
        </h1>
      </div>
    </section>
  );
}
