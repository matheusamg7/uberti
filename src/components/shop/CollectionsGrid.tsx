'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CollectionsGridProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CollectionsGrid({ locale }: CollectionsGridProps) {
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
      image: '/coleção 2/capa_collection_2.jpg',
      slug: 'favos',
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/${locale}/collections/${collection.slug}`}
              className="group block"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={collection.image}
                    alt={collection.name[locale]}
                    fill
                    className="object-cover object-center transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Text below image */}
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {collection.year}
                  </p>
                  <h3 className="text-2xl font-light tracking-wide text-gray-900 group-hover:text-gray-600 transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                    {collection.name[locale]}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}