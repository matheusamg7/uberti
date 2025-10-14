'use client';

import Image from 'next/image';

interface HeroCarouselProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
  heroContent: {
    title: Record<string, string>;
    subtitle: Record<string, string>;
    description: Record<string, string>;
    cta: Record<string, string>;
  };
}

export function HeroCarousel({ locale, heroContent }: HeroCarouselProps) {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Banner Image - Banner 2 fixo */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/banners/hero_banner_2.png"
            alt="Helena's atelier"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradiente suave de cima */}
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
          {/* Gradiente de baixo para o texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 from-0% via-black/60 via-35% to-transparent to-70%" />
        </div>


      {/* Content - posicionado na parte inferior (mais alto no mobile para evitar barra do navegador) */}
      <div className="absolute bottom-36 md:bottom-20 left-0 right-0 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-3 md:space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white max-w-5xl mx-auto whitespace-pre-line" style={{ fontFamily: "'Cinzel', serif" }}>
            {heroContent.title[locale]}
          </h1>
          {heroContent.description[locale] && (
            <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {heroContent.description[locale]}
            </p>
          )}
          <div className="pt-2 md:pt-4">
            <a
              href={`/${locale}/collections`}
              className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-medium text-white border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              {heroContent.cta[locale]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}