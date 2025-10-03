'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CollectionsImmersiveProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CollectionsImmersive({ locale }: CollectionsImmersiveProps) {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);

  const collections = [
    {
      id: 'raizes',
      name: {
        en: 'Raízes',
        pt: 'Raízes',
        es: 'Raízes',
        fr: 'Raízes',
      },
      description: {
        en: 'Natural fibers and timeless silhouettes',
        pt: 'Fibras naturais e silhuetas atemporais',
        es: 'Fibras naturales y siluetas atemporales',
        fr: 'Fibres naturelles et silhouettes intemporelles',
      },
      year: '2024',
      image: '/coleção 1/capa_raizes_colecao.png',
      slug: 'raizes',
    },
    {
      id: 'favos',
      name: {
        en: 'Favos',
        pt: 'Favos',
        es: 'Favos',
        fr: 'Favos',
      },
      description: {
        en: 'Organic patterns and bold statements',
        pt: 'Padrões orgânicos e declarações marcantes',
        es: 'Patrones orgánicos y declaraciones audaces',
        fr: 'Motifs organiques et déclarations audacieuses',
      },
      year: '2025',
      image: '/coleção 2/capa_favos_colecao.png',
      slug: 'favos',
    },
  ];

  return (
    <section className="relative h-[80vh] min-h-[600px] flex">
      {collections.map((collection) => (
        <Link
          key={collection.id}
          href={`/${locale}/collections/${collection.slug}`}
          className={`relative flex-1 overflow-hidden group cursor-pointer transition-all duration-500 ease-out ${
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
                hoveredCollection === collection.id ? 'scale-[1.26]' : 'scale-125'
              }`}
              sizes="50vw"
              priority
            />
          </div>

          {/* Gradient Overlay - Bottom to top */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
            hoveredCollection === collection.id ? 'opacity-100' : 'opacity-90'
          }`} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end p-8 md:p-12">
            <div className="text-white text-center w-full">
              {/* Collection label */}
              <p className="text-sm font-normal mb-4 opacity-80 uppercase tracking-wider">
                {locale === 'pt' ? 'coleção' : locale === 'es' ? 'colección' : locale === 'fr' ? 'collection' : 'collection'}
              </p>

              {/* Name */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 transition-all duration-500"
                  style={{ fontFamily: "'Cinzel', serif" }}>
                {collection.name[locale]}
              </h2>

              {/* CTA */}
              <div className={`text-sm uppercase tracking-[0.2em] transition-all duration-500 ${
                hoveredCollection === collection.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}>
                {locale === 'pt' ? 'Explorar' : locale === 'es' ? 'Explorar' : locale === 'fr' ? 'Explorer' : 'Explore'}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}