'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BlogCalloutProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function BlogCallout({ locale }: BlogCalloutProps) {
  const content = {
    title: {
      en: 'Stories & Craftsmanship',
      pt: 'Histórias & Artesanato',
      es: 'Historias y Artesanía',
      fr: 'Histoires et Artisanat',
    },
    subtitle: {
      en: 'Discover the inspiration behind each piece',
      pt: 'Descubra a inspiração por trás de cada peça',
      es: 'Descubre la inspiración detrás de cada pieza',
      fr: "Découvrez l'inspiration derrière chaque pièce",
    },
    cta: {
      en: 'Visit Our Blog',
      pt: 'Visite Nosso Blog',
      es: 'Visita Nuestro Blog',
      fr: 'Visitez Notre Blog',
    },
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
          alt="Blog"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
              {content.title[locale]}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-10 font-light">
              {content.subtitle[locale]}
            </p>

            {/* CTA Button - Glassmorphism */}
            <Link
              href={`/${locale}/blog`}
              className="group inline-flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-wider">
                {content.cta[locale]}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}