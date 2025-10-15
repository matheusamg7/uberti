'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AboutUbertiPageProps {
  params: Promise<{ locale: string }>;
}

export default function AboutUbertiPage({ params }: AboutUbertiPageProps) {
  const [locale, setLocale] = useState<'en' | 'pt' | 'es' | 'fr'>('pt');

  useEffect(() => {
    params.then(({ locale: localeParam }) => {
      setLocale(localeParam as 'en' | 'pt' | 'es' | 'fr');
    });
  }, [params]);

  const content = {
    hero: {
      title: {
        en: 'UBERTI',
        pt: 'UBERTI',
        es: 'UBERTI',
        fr: 'UBERTI',
      },
    },
    paragraphs: {
      en: [
        'UBERTI was born from my artistic vision and passion for wool. More than a fashion brand, it is a project of artistic expression, where each piece tells a story and carries part of my soul.',
        'I work with slow fashion, valuing handmade production and respect for time. The wool I use comes from the Bagé region, directly from local producers who share the same commitment to quality and sustainability.',
        'Each UBERTI piece is unique. There are no mass productions or repetitions. What you acquire is an exclusive creation, made especially to be part of your story.',
      ],
      pt: [
        'A Uberti nasceu do olhar artístico de Helena e de sua paixão pela lã, uma fibra viva, sustentável e carregada de significado. Mais do que uma marca, a Uberti é um projeto de expressão artística, que une moda, arte e natureza em criações autorais que valorizam o tempo, o fazer manual e a cultura dos pampas.',
        'Todas as peças são produzidas artesanalmente, dentro do conceito de slow fashion, respeitando o meio ambiente e o bem-estar animal. A lã utilizada é processada em Bagé e região, a partir de produtores locais, conectando cada criação às origens e à tradição dos pampas que inspiram a marca.',
        'Cada peça é única, resultado da fusão entre uma técnica ancestral e um olhar contemporâneo. A Uberti acredita que cada pessoa é única e deve se vestir como tal, expressando sua identidade de forma autêntica, consciente e sustentável.',
      ],
      es: [
        'UBERTI nació de mi visión artística y mi pasión por la lana. Más que una marca de moda, es un proyecto de expresión artística, donde cada pieza cuenta una historia y lleva parte de mi alma.',
        'Trabajo con moda lenta, valorando la producción artesanal y el respeto por el tiempo. La lana que utilizo proviene de la región de Bagé, directamente de productores locales que comparten el mismo compromiso con la calidad y la sostenibilidad.',
        'Cada pieza UBERTI es única. No hay producciones en masa ni repeticiones. Lo que adquieres es una creación exclusiva, hecha especialmente para ser parte de tu historia.',
      ],
      fr: [
        'UBERTI est né de ma vision artistique et de ma passion pour la laine. Plus qu\'une marque de mode, c\'est un projet d\'expression artistique, où chaque pièce raconte une histoire et porte une partie de mon âme.',
        'Je travaille avec la mode lente, en valorisant la production artisanale et le respect du temps. La laine que j\'utilise provient de la région de Bagé, directement de producteurs locaux qui partagent le même engagement envers la qualité et la durabilité.',
        'Chaque pièce UBERTI est unique. Il n\'y a pas de productions de masse ni de répétitions. Ce que vous acquérez est une création exclusive, faite spécialement pour faire partie de votre histoire.',
      ],
    },
    quote: {
      en: 'Wool was the way I found to express myself. Every artist needs a tool, and this was mine.',
      pt: 'A lã foi a forma de me expressar. Todo artista precisa de uma ferramenta, e essa foi a minha.',
      es: 'La lana fue la forma que encontré para expresarme. Todo artista necesita una herramienta, y esta fue la mía.',
      fr: 'La laine a été le moyen que j\'ai trouvé pour m\'exprimer. Tout artiste a besoin d\'un outil, et c\'était le mien.',
    },
    imagePlaceholder: {
      en: 'Image representing UBERTI',
      pt: 'Imagem representando UBERTI',
      es: 'Imagen representando UBERTI',
      fr: 'Image représentant UBERTI',
    },
    cta: {
      button: {
        en: 'View Collections',
        pt: 'Ver Coleções',
        es: 'Ver Colecciones',
        fr: 'Voir les Collections',
      },
    },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative h-[100vh] w-full flex items-center justify-center -mt-24 pt-24">
        <div className="absolute inset-0">
          <Image
            src="/about_uberti/foto_uberti.jpg"
            alt="UBERTI"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="display-1 text-white">
              {content.hero.title[locale]}
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to content"
        >
          <ChevronDown size={40} strokeWidth={1.5} />
        </button>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Photo and Text Side by Side - Reversed Order */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Photo - Left Side - Desktop only (sticky) */}
              <div className="hidden lg:block">
                <div className="relative aspect-[3/4] overflow-hidden sticky top-24">
                  <Image
                    src="/about_uberti/foto_uberti.jpg"
                    alt={content.imagePlaceholder[locale]}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="space-y-12">
                {/* Paragraphs - Desktop: all together, Mobile: first paragraph only */}
                <div className="space-y-8">
                  {/* Desktop: show all paragraphs */}
                  <div className="hidden lg:block space-y-8">
                    {content.paragraphs[locale].map((paragraph, index) => (
                      <p key={index} className="body-text text-lg leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Mobile: show only first paragraph */}
                  <div className="lg:hidden">
                    <p className="body-text text-lg leading-relaxed text-muted-foreground">
                      {content.paragraphs[locale][0]}
                    </p>
                  </div>
                </div>

                {/* Mobile: Photo after first paragraph */}
                <div className="lg:hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src="/about_uberti/foto_uberti.jpg"
                      alt={content.imagePlaceholder[locale]}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>

                {/* Mobile: Remaining paragraphs after photo */}
                <div className="lg:hidden space-y-8">
                  {content.paragraphs[locale].slice(1).map((paragraph, index) => (
                    <p key={index} className="body-text text-lg leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quote - Below Text */}
                <div className="pt-8">
                  <blockquote className="border-l-2 border-gray-300 pl-6">
                    <p className="text-xl font-light italic text-muted-foreground leading-relaxed">
                      &ldquo;{content.quote[locale]}&rdquo;
                    </p>
                    <cite className="block text-sm font-medium mt-6 not-italic text-muted-foreground/70">
                      — Helena Uberti
                    </cite>
                  </blockquote>
                </div>

                {/* CTA Button - Centered on mobile only */}
                <div className="pt-8 flex justify-center lg:justify-start">
                  <Button size="lg" asChild className="min-w-[200px]">
                    <Link href={`/${locale}/collections`}>
                      {content.cta.button[locale]}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
