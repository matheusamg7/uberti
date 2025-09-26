'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CollectionsImmersiveProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CollectionsImmersive({ locale }: CollectionsImmersiveProps) {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);

  const collections = [
    {
      id: 'junho',
      name: {
        en: 'Junho Collection',
        pt: 'Coleção Junho',
        es: 'Colección Junho',
        fr: 'Collection Junho',
      },
      description: {
        en: 'Natural fibers and timeless silhouettes',
        pt: 'Fibras naturais e silhuetas atemporais',
        es: 'Fibras naturales y siluetas atemporales',
        fr: 'Fibres naturelles et silhouettes intemporelles',
      },
      year: '2024',
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
      description: {
        en: 'Organic patterns and bold statements',
        pt: 'Padrões orgânicos e declarações marcantes',
        es: 'Patrones orgánicos y declaraciones audaces',
        fr: 'Motifs organiques et déclarations audacieuses',
      },
      year: '2025',
      image: '/coleção 2/capa_collection_2.jpg',
      slug: 'favos',
    },
  ];

  return (
    <section className="relative h-[80vh] min-h-[600px] flex">
      {collections.map((collection, index) => (
        <Link
          key={collection.id}
          href={`/${locale}/collections/${collection.slug}`}
          className={`relative flex-1 overflow-hidden group transition-all duration-500 ease-out ${
            hoveredCollection === collection.id ? 'flex-[1.1]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredCollection(collection.id)}
          onMouseLeave={() => setHoveredCollection(null)}
        >
          {/* Background Image with subtle zoom */}
          <div className="absolute inset-0">
            <Image
              src={collection.image}
              alt={collection.name[locale]}
              fill
              className={`object-cover object-center transition-transform duration-700 ease-out ${
                hoveredCollection === collection.id ? 'scale-[1.03]' : 'scale-100'
              }`}
              sizes="50vw"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 ${
            hoveredCollection === collection.id ? 'opacity-90' : 'opacity-70'
          }`} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end p-8 md:p-12">
            <div className="text-white max-w-lg">
              {/* Year */}
              <span className={`text-xs tracking-[0.3em] uppercase opacity-80 mb-3 block transition-all duration-300 ${
                hoveredCollection === collection.id ? 'opacity-100' : 'opacity-70'
              }`}>
                {collection.year}
              </span>

              {/* Name */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-3 transition-all duration-300 ${
                hoveredCollection === collection.id ? 'translate-y-0' : 'translate-y-2'
              }`}>
                {collection.name[locale]}
              </h2>

              {/* Description - shows on hover */}
              <p className={`text-sm md:text-base opacity-90 mb-6 transition-all duration-300 transform ${
                hoveredCollection === collection.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}>
                {collection.description[locale]}
              </p>

              {/* CTA */}
              <div className={`inline-flex items-center gap-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                hoveredCollection === collection.id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              }`}>
                <span>
                  {locale === 'pt' ? 'Explorar' : locale === 'es' ? 'Explorar' : locale === 'fr' ? 'Explorer' : 'Explore'}
                </span>
                <ArrowRight className="h-4 w-4" strokeWidth={1} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}