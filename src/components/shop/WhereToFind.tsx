'use client';

import { MapPin } from 'lucide-react';
import { WorldMap } from '@/components/ui/world-map';

interface WhereToFindProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function WhereToFind({ locale }: WhereToFindProps) {
  const content = {
    title: {
      en: 'Where to Find',
      pt: 'Onde Encontrar',
      es: 'Dónde Encontrar',
      fr: 'Où Trouver',
    },
    subtitle: {
      en: 'Visit our galleries around the world',
      pt: 'Visite nossas galerias ao redor do mundo',
      es: 'Visita nuestras galerías alrededor del mundo',
      fr: 'Visitez nos galeries à travers le monde',
    },
  };

  const locations = [
    {
      city: {
        en: 'Paris',
        pt: 'Paris',
        es: 'París',
        fr: 'Paris',
      },
      country: 'France',
      gallery: "Galerie d'Art Moderne",
      address: '42 Rue de la Mode, 75001',
      coordinates: { top: '25%', left: '52%' },
    },
    {
      city: {
        en: 'Lisbon',
        pt: 'Lisboa',
        es: 'Lisboa',
        fr: 'Lisbonne',
      },
      country: 'Portugal',
      gallery: 'Espaço Cultural Contemporâneo',
      address: 'Rua do Chiado 15, 1200-108',
      coordinates: { top: '35%', left: '48%' },
    },
    {
      city: {
        en: 'London',
        pt: 'Londres',
        es: 'Londres',
        fr: 'Londres',
      },
      country: 'United Kingdom',
      gallery: 'The Art House',
      address: '88 New Bond Street, W1S 1RR',
      coordinates: { top: '22%', left: '50%' },
    },
    {
      city: {
        en: 'São Paulo',
        pt: 'São Paulo',
        es: 'São Paulo',
        fr: 'São Paulo',
      },
      country: 'Brasil',
      gallery: 'Galeria Uberti',
      address: 'Rua Oscar Freire 2500, 01426-002',
      coordinates: { top: '70%', left: '35%' },
    },
  ];

  return (
    <section id="where-to-find" className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{content.title[locale]}</h2>
          <p className="body-text text-muted-foreground">
            {content.subtitle[locale]}
          </p>
        </div>

        {/* Map and Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <WorldMap
              locations={[]}
            />
          </div>

          {/* Locations List */}
          <div className="order-1 lg:order-2 space-y-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-200 pl-4 hover:border-[#422B21] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#422B21] mt-1 flex-shrink-0" strokeWidth={1} />
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-900">
                      {location.city[locale]}, {location.country}
                    </h3>
                    <p className="text-sm text-gray-700">{location.gallery}</p>
                    <p className="text-xs text-gray-500">{location.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}