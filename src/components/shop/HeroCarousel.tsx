'use client';

import { useState, useEffect } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = ['/banners/hero_banner_1.png', '/banners/hero_banner_2.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 12000); // Change slide every 12 seconds - more time to appreciate each image

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Banner Images with Fade Transition Only */}
        {banners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentSlide
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={banner}
              alt="Helena's atelier"
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 from-0% via-black/25 via-40% to-transparent to-100%" />
          </div>
        ))}


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic tracking-wide text-white max-w-5xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {heroContent.title[locale]}
          </h1>
          {heroContent.subtitle[locale] && (
            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto opacity-95">
              {heroContent.subtitle[locale]}
            </p>
          )}
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {heroContent.description[locale]}
          </p>
          <div className="pt-8">
            <a
              href={`/${locale}/collections`}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              {heroContent.cta[locale]}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Minimal Lines */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[2px] transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-8 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}