'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AboutHelenaPageProps {
  params: Promise<{ locale: string }>;
}

export default function AboutHelenaPage({ params }: AboutHelenaPageProps) {
  const [locale, setLocale] = useState<'en' | 'pt' | 'es' | 'fr'>('pt');

  useEffect(() => {
    params.then(({ locale: localeParam }) => {
      setLocale(localeParam as 'en' | 'pt' | 'es' | 'fr');
    });
  }, [params]);

  const content = {
    hero: {
      title: {
        en: 'Helena Uberti',
        pt: 'Helena Uberti',
        es: 'Helena Uberti',
        fr: 'Helena Uberti',
      },
    },
    paragraphs: {
      en: [
        'I was born in Garibaldi, Rio Grande do Sul, but my roots run deep in Bagé, where my family has always been connected to livestock and agriculture. From an early age, I learned the value of handmade work with my mother and grandmother, who passed down to me the love for creating with my own hands.',
        'I lived in Porto Alegre and Florianópolis, where I expanded my artistic horizons. It was during this journey that I discovered the felting technique, learning from a designer in São Paulo who introduced me to the unique possibilities of wool. I spent two years researching and experimenting before launching my first collection.',
        'Today, each piece I create is 100% handmade, using natural fibers and sustainable processes. I believe in slow fashion, in valuing what is unique and authentic.',
      ],
      pt: [
        'Nascida em Garibaldi, no Rio Grande do Sul, Helena Uberti carrega em sua essência a cultura e a força dos pampas. Sua família, originária de Bagé, sempre viveu da pecuária e da agricultura, um cenário em que a lã não era apenas matéria-prima, mas símbolo de sustento e tradição. Desde cedo, cresceu cercada por mulheres habilidosas. Sua mãe e sua avó cultivaram o amor pelo feito à mão, pela moda e pela arte, influenciando diretamente o olhar criativo que Helena desenvolveu ainda criança.',
        'Apaixonada por arte e moda, Helena viveu em Porto Alegre e Florianópolis, onde conheceu uma designer paulista que a apresentou à técnica da feltragem, um dos processos têxteis mais antigos da humanidade, utilizado há séculos por povos nômades, especialmente os mongóis, para criar mantos e chapéus. Encantada pela textura e pelas possibilidades da lã, mergulhou em pesquisa e experimentação por dois anos até apresentar sua primeira coleção, recebida com entusiasmo e admiração pelo público.',
        'Desde então, Helena vem se dedicando integralmente à lã, transformando a fibra em obras de arte vestíveis. Suas criações unem moda, arte e sustentabilidade, sempre produzidas 100% à mão, com fibras naturais e sem qualquer dano ao meio ambiente ou aos animais. Hoje, já reconhecida em eventos de moda e arte na América Latina, Helena vê suas peças ultrapassarem fronteiras, atravessando continentes e marcando presença em diferentes partes do mundo, vestindo pessoas influentes e apaixonadas por autenticidade.',
      ],
      es: [
        'Nací en Garibaldi, Rio Grande do Sul, pero mis raíces están profundamente arraigadas en Bagé, donde mi familia siempre ha estado conectada con la ganadería y la agricultura. Desde pequeña, aprendí el valor del trabajo manual con mi madre y mi abuela, quienes me transmitieron el amor por crear con mis propias manos.',
        'Viví en Porto Alegre y Florianópolis, donde expandí mis horizontes artísticos. Fue durante este viaje que descubrí la técnica del fieltro, aprendiendo de una diseñadora de São Paulo que me introdujo a las posibilidades únicas de la lana. Pasé dos años investigando y experimentando antes de lanzar mi primera colección.',
        'Hoy, cada pieza que creo es 100% hecha a mano, utilizando fibras naturales y procesos sostenibles. Creo en la moda lenta, en valorar lo que es único y auténtico.',
      ],
      fr: [
        'Je suis née à Garibaldi, Rio Grande do Sul, mais mes racines sont profondément ancrées à Bagé, où ma famille a toujours été liée à l\'élevage et à l\'agriculture. Dès mon plus jeune âge, j\'ai appris la valeur du travail manuel avec ma mère et ma grand-mère, qui m\'ont transmis l\'amour de créer de mes propres mains.',
        'J\'ai vécu à Porto Alegre et Florianópolis, où j\'ai élargi mes horizons artistiques. C\'est au cours de ce voyage que j\'ai découvert la technique du feutrage, en apprenant d\'une designer de São Paulo qui m\'a fait découvrir les possibilités uniques de la laine. J\'ai passé deux ans à rechercher et à expérimenter avant de lancer ma première collection.',
        'Aujourd\'hui, chaque pièce que je crée est 100% faite à la main, en utilisant des fibres naturelles et des processus durables. Je crois en la mode lente, en valorisant ce qui est unique et authentique.',
      ],
    },
    quote: {
      en: 'Luxury lies in the exclusive, in the handmade, and in creativity. My pieces are timeless, true works of art.',
      pt: 'O luxo está no exclusivo, no feito à mão e na criatividade. Minhas peças são atemporais, verdadeiras obras de arte.',
      es: 'El lujo está en lo exclusivo, en lo hecho a mano y en la creatividad. Mis piezas son atemporales, verdaderas obras de arte.',
      fr: 'Le luxe réside dans l\'exclusif, dans le fait-main et dans la créativité. Mes pièces sont intemporelles, de véritables œuvres d\'art.',
    },
    photoPlaceholder: {
      en: 'Photo of Helena',
      pt: 'Foto de Helena',
      es: 'Foto de Helena',
      fr: 'Photo d\'Helena',
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
            src="/Helena_uberti_0158.jpg"
            alt="Helena Uberti"
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
            {/* Text and Photo Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-12">
                {/* Paragraphs */}
                <div className="space-y-8">
                  {content.paragraphs[locale].map((paragraph, index) => (
                    <p key={index} className="body-text text-lg leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quote - Below Text */}
                <div className="pt-8">
                  <blockquote className="border-l-2 border-gray-300 pl-6">
                    <p className="text-xl font-light italic text-muted-foreground leading-relaxed">
                      "{content.quote[locale]}"
                    </p>
                    <cite className="block text-sm font-medium mt-6 not-italic text-muted-foreground/70">
                      — Helena Uberti
                    </cite>
                  </blockquote>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <Button size="lg" asChild className="min-w-[200px]">
                    <Link href={`/${locale}/collections`}>
                      {content.cta.button[locale]}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Photo */}
              <div>
                <div className="relative aspect-[3/4] overflow-hidden sticky top-24">
                  <Image
                    src="/about_helena/foto_dela.jpg"
                    alt={content.photoPlaceholder[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
