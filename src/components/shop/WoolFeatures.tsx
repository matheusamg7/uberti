'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WoolFeaturesProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function WoolFeatures({ locale }: WoolFeaturesProps) {
  const [scrollRotation, setScrollRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      // Apenas no desktop: rotação baseada no scroll
      if (window.innerWidth >= 768) {
        const rotation = window.scrollY / 10;
        setScrollRotation(rotation);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const content = {
    title: {
      en: 'Our Raw Material',
      pt: 'Nossa Matéria-Prima',
      es: 'Nuestra Materia Prima',
      fr: 'Notre Matière Première',
    },
    subtitle: {
      en: 'Wool from Pampa sheep, a natural fiber\nthat combines comfort, durability\nand sustainability.',
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

  // Reorder features for mobile: move Thermal Insulation to last
  const displayFeatures = isMobile
    ? [
        content.features[0], // 100% Natural
        content.features[2], // Odor Resistant
        content.features[3], // Biodegradable
        content.features[4], // Long Lasting
        content.features[5], // UV Protection
        content.features[1], // Thermal Insulation (movido para o final)
      ]
    : content.features;

  return (
    <section className="bg-[#FEFDFE] pt-24 pb-16">
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-mobile {
          animation: rotate 20s linear infinite;
        }
      `}</style>
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 md:pl-16 lg:pl-32">

          {/* Content - vem primeiro no mobile, à esquerda no desktop */}
          <div className="flex-1 flex flex-col space-y-8 md:mt-20 md:pl-16 lg:pl-24 order-1 md:order-2">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-center md:text-left" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.title[locale]}
            </h2>

            {/* Subtitle */}
            <p className="text-base lg:text-lg font-light tracking-wide text-gray-600 max-w-2xl whitespace-pre-line text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
              {content.subtitle[locale]}
            </p>

            {/* Features Grid - 3 rows x 2 columns */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 max-w-xl mx-auto md:mx-0">
              {displayFeatures.map((feature, index) => (
                <div key={index} className="relative group inline-block w-fit mx-auto md:mx-0">
                  <p
                    className="text-base lg:text-lg font-light tracking-wide text-gray-700 group-hover:text-black transition-colors duration-300 relative text-center md:text-left"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature[locale]}
                  </p>
                  {/* Underline effect - apenas no desktop */}
                  <span className="hidden md:block absolute bottom-0 left-0 h-[1px] bg-black w-3 group-hover:w-full transition-all duration-400"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - vem depois no mobile (abaixo), à esquerda no desktop */}
          <div
            className={`w-full max-w-[350px] mx-auto md:max-w-none md:w-[500px] h-[350px] md:h-[500px] flex-shrink-0 order-2 md:order-1 ${
              isMobile ? 'rotate-mobile' : 'transition-transform duration-100 ease-linear'
            }`}
            style={!isMobile ? { transform: `rotate(${scrollRotation}deg)` } : {}}
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

        </div>
      </div>
    </section>
  );
}
