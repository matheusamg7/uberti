'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CollectionsShowcaseProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CollectionsShowcase({ locale }: CollectionsShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const collections = [
    {
      id: 'junho',
      name: {
        en: 'Junho Collection',
        pt: 'Coleção Junho',
        es: 'Colección Junho',
        fr: 'Collection Junho',
      },
      year: '2024',
      description: {
        en: 'Inspired by the vast plains and natural textures',
        pt: 'Inspirada nas vastas planícies e texturas naturais',
        es: 'Inspirada en las vastas llanuras y texturas naturales',
        fr: 'Inspirée des vastes plaines et textures naturelles',
      },
      image: '/coleção 1/capa_collection_1.jpg',
      slug: 'junho',
    },
    {
      id: 'favos',
      name: {
        en: 'Favos Collection',
        pt: 'Coleção Favos',
        es: 'Colección Favos',
        fr: 'Collection Favos',
      },
      year: '2025',
      description: {
        en: 'Organic patterns and contemporary silhouettes',
        pt: 'Padrões orgânicos e silhuetas contemporâneas',
        es: 'Patrones orgánicos y siluetas contemporáneas',
        fr: 'Motifs organiques et silhouettes contemporaines',
      },
      image: '/coleção 2/capa_collection_2.jpg',
      slug: 'favos',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? collections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            {locale === 'pt' ? 'Coleções' : locale === 'es' ? 'Colecciones' : locale === 'fr' ? 'Collections' : 'Collections'}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <Image
                        src={collection.image}
                        alt={collection.name[locale]}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
                          {collection.year}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4">
                          {collection.name[locale]}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {collection.description[locale]}
                        </p>
                      </div>

                      <Link
                        href={`/${locale}/collections/${collection.slug}`}
                        className="inline-block px-8 py-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
                      >
                        {locale === 'pt' ? 'Explorar Coleção' : locale === 'es' ? 'Explorar Colección' : locale === 'fr' ? 'Explorer Collection' : 'Explore Collection'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrevious}
              className="p-3 border border-gray-300 hover:border-gray-800 transition-colors group"
              aria-label="Previous collection"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-gray-900" strokeWidth={1} />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2 px-4">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-gray-800'
                      : 'w-2 bg-gray-300 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to collection ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 border border-gray-300 hover:border-gray-800 transition-colors group"
              aria-label="Next collection"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-gray-900" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}