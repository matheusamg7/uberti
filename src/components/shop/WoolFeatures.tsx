'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WoolFeaturesProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function WoolFeatures({ locale }: WoolFeaturesProps) {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Pega a posição do scroll e converte em graus de rotação
      // A cada 10 pixels de scroll, roda 1 grau
      const rotation = window.scrollY / 10;
      setScrollRotation(rotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const content = {
    title: {
      en: 'Our Raw Material',
      pt: 'Nossa Matéria-Prima',
      es: 'Nuestra Materia Prima',
      fr: 'Notre Matière Première',
    },
    subtitle: {
      en: 'Wool from Pampa sheep, a natural fiber that combines\ncomfort, durability and sustainability.',
      pt: 'Lã de ovelha Pampa, uma fibra natural que combina\nconforto, durabilidade e sustentabilidade.',
      es: 'Lana de oveja Pampa, una fibra natural que combina\ncomodidad, durabilidad y sostenibilidad.',
      fr: 'Laine de mouton Pampa, une fibre naturelle qui allie\nconfort, durabilité et durabilité.',
    },
    features: [
      {
        en: '100% Natural',
        pt: '100% Natural',
        es: '100% Natural',
        fr: '100% Naturel',
      },
      {
        en: 'Thermal Insulation',
        pt: 'Isolamento Térmico',
        es: 'Aislamiento Térmico',
        fr: 'Isolation Thermique',
      },
      {
        en: 'Odor Resistant',
        pt: 'Resistência a Odores',
        es: 'Resistencia a Olores',
        fr: 'Résistant aux Odeurs',
      },
      {
        en: 'Biodegradable',
        pt: 'Biodegradável',
        es: 'Biodegradable',
        fr: 'Biodégradable',
      },
      {
        en: 'Long Lasting',
        pt: 'Duração Prolongada',
        es: 'Duración Prolongada',
        fr: 'Longue Durée',
      },
      {
        en: 'UV Protection',
        pt: 'Proteção UV',
        es: 'Protección UV',
        fr: 'Protection UV',
      },
    ],
  };

  return (
    <section className="bg-[#FEFDFE] pt-24 pb-16">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start gap-20 md:pl-16 lg:pl-32">

          {/* Left - Image */}
          <div
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex-shrink-0 transition-transform duration-100 ease-linear"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          >
            <Image
              src="/banners/cor_las.png"
              alt="Wool Colors"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col space-y-8 mt-12 md:mt-20 md:pl-16 lg:pl-24">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.title[locale]}
            </h2>

            {/* Subtitle */}
            <p className="text-base lg:text-lg font-light tracking-wide text-gray-600 max-w-2xl whitespace-pre-line" style={{ fontFamily: "'Inter', sans-serif" }}>
              {content.subtitle[locale]}
            </p>

            {/* Features Grid - 3 rows x 2 columns */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 max-w-xl">
              {content.features.map((feature, index) => (
                <div key={index} className="relative group inline-block w-fit">
                  <p
                    className="text-base lg:text-lg font-light tracking-wide text-gray-700 group-hover:text-black transition-colors duration-300 relative"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature[locale]}
                  </p>
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 h-[1px] bg-black w-3 group-hover:w-full transition-all duration-400"></span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
