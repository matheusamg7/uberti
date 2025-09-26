'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CollectionsSplitProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CollectionsSplit({ locale }: CollectionsSplitProps) {
  const [activeCollection, setActiveCollection] = useState(0);

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
        en: 'Inspired by the vast plains',
        pt: 'Inspirada nas vastas planícies',
        es: 'Inspirada en las vastas llanuras',
        fr: 'Inspirée des vastes plaines',
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
        en: 'Earthly tones and textures',
        pt: 'Tons e texturas terrosas',
        es: 'Tonos y texturas terrestres',
        fr: 'Tons et textures terrestres',
      },
      image: '/coleção 2/capa_collection_2.jpg',
      slug: 'favos',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">
            {locale === 'pt' ? 'Nossas Coleções' : locale === 'es' ? 'Nuestras Colecciones' : locale === 'fr' ? 'Nos Collections' : 'Our Collections'}
          </h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Cada coleção conta uma história única inspirada na natureza e na emoção'
              : locale === 'es'
              ? 'Cada colección cuenta una historia única inspirada en la naturaleza y la emoción'
              : locale === 'fr'
              ? 'Chaque collection raconte une histoire unique inspirée par la nature et l\'u00e9motion'
              : 'Each collection tells a unique story inspired by nature and emotion'}
          </p>
        </div>

        {/* Collections Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Image Display */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeCollection === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.name[locale]}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Collections List */}
          <div className="flex flex-col justify-center space-y-8">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeCollection === index ? 'opacity-100' : 'opacity-60'
                }`}
                onMouseEnter={() => setActiveCollection(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">
                      {collection.year}
                    </span>
                    <h3 className="text-3xl font-light tracking-wide text-gray-900 mb-3">
                      {collection.name[locale]}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                      {collection.description[locale]}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${locale}/collections/${collection.slug}`}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gray-800 hover:text-black transition-colors"
                >
                  <span>
                    {locale === 'pt' ? 'Explorar Coleção' : locale === 'es' ? 'Explorar Colección' : locale === 'fr' ? 'Explorer Collection' : 'Explore Collection'}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1} />
                </Link>

                {/* Divider */}
                {index < collections.length - 1 && (
                  <div className="mt-8 border-b border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}