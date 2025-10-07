import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as 'en' | 'pt' | 'es';

  const content = {
    hero: {
      title: {
        en: 'About Helena & UBERTI',
        pt: 'Sobre Helena & UBERTI',
        es: 'Sobre Helena & UBERTI',
      },
      subtitle: {
        en: 'A journey through craftsmanship, passion, and timeless elegance',
        pt: 'Uma jornada através do artesanato, paixão e elegância atemporal',
        es: 'Un viaje a través de la artesanía, la pasión y la elegancia atemporal',
      },
    },
    story: {
      title: {
        en: 'Our Story',
        pt: 'Nossa História',
        es: 'Nuestra Historia',
      },
      paragraphs: {
        en: [
          'Helena\'s journey into the world of artisanal fashion began over two decades ago in the cobblestone streets of São Paulo. What started as a personal passion for creating unique pieces has evolved into UBERTI - a brand that celebrates the intersection of traditional craftsmanship and contemporary design.',
          'Each collection tells a story, drawing inspiration from Helena\'s travels, her connection to nature, and the rich cultural tapestry of Brazil. From the citrus groves that inspired the Bergamot collection to the dramatic Atlantic coastline that birthed the Storm series, every piece carries within it a narrative of place, emotion, and artistry.',
          'At UBERTI, we believe that fashion should be more than just clothing - it should be wearable art that empowers the wearer and honors the craftsmanship behind each stitch. Our commitment to sustainable practices and ethical production ensures that beauty comes with responsibility.',
        ],
        pt: [
          'A jornada de Helena no mundo da moda artesanal começou há mais de duas décadas nas ruas de paralelepípedos de São Paulo. O que começou como uma paixão pessoal por criar peças únicas evoluiu para a UBERTI - uma marca que celebra a interseção entre o artesanato tradicional e o design contemporâneo.',
          'Cada coleção conta uma história, inspirando-se nas viagens de Helena, sua conexão com a natureza e a rica tapeçaria cultural do Brasil. Dos pomares de cítricos que inspiraram a coleção Bergamota ao litoral atlântico dramático que gerou a série Tempestade, cada peça carrega uma narrativa de lugar, emoção e arte.',
          'Na UBERTI, acreditamos que a moda deve ser mais do que apenas roupas - deve ser arte vestível que empodera quem a usa e honra o artesanato por trás de cada ponto. Nosso compromisso com práticas sustentáveis e produção ética garante que a beleza venha com responsabilidade.',
        ],
        es: [
          'El viaje de Helena al mundo de la moda artesanal comenzó hace más de dos décadas en las calles empedradas de São Paulo. Lo que comenzó como una pasión personal por crear piezas únicas ha evolucionado hacia UBERTI: una marca que celebra la intersección entre la artesanía tradicional y el diseño contemporáneo.',
          'Cada colección cuenta una historia, inspirándose en los viajes de Helena, su conexión con la naturaleza y el rico tapiz cultural de Brasil. Desde los huertos de cítricos que inspiraron la colección Bergamota hasta la dramática costa atlántica que dio origen a la serie Tormenta, cada pieza lleva consigo una narrativa de lugar, emoción y arte.',
          'En UBERTI, creemos que la moda debe ser más que solo ropa: debe ser arte portable que empodere a quien la usa y honre la artesanía detrás de cada puntada. Nuestro compromiso con las prácticas sostenibles y la producción ética garantiza que la belleza venga con responsabilidad.',
        ],
      },
    },
    philosophy: {
      title: {
        en: 'Our Philosophy',
        pt: 'Nossa Filosofia',
        es: 'Nuestra Filosofía',
      },
      values: [
        {
          title: {
            en: 'Craftsmanship',
            pt: 'Artesanato',
            es: 'Artesanía',
          },
          description: {
            en: 'Every piece is meticulously handcrafted with techniques passed down through generations, ensuring exceptional quality and uniqueness.',
            pt: 'Cada peça é meticulosamente feita à mão com técnicas transmitidas através de gerações, garantindo qualidade excepcional e singularidade.',
            es: 'Cada pieza está meticulosamente hecha a mano con técnicas transmitidas a través de generaciones, garantizando calidad excepcional y singularidad.',
          },
        },
        {
          title: {
            en: 'Sustainability',
            pt: 'Sustentabilidade',
            es: 'Sostenibilidad',
          },
          description: {
            en: 'We are committed to ethical sourcing, minimal waste production, and supporting local artisan communities.',
            pt: 'Estamos comprometidos com o fornecimento ético, produção com resíduo mínimo e apoio às comunidades artesãs locais.',
            es: 'Estamos comprometidos con el abastecimiento ético, la producción con residuos mínimos y el apoyo a las comunidades artesanas locales.',
          },
        },
        {
          title: {
            en: 'Storytelling',
            pt: 'Narrativa',
            es: 'Narrativa',
          },
          description: {
            en: 'Each collection is born from a story, an emotion, or a moment of inspiration, creating pieces that resonate on a deeper level.',
            pt: 'Cada coleção nasce de uma história, uma emoção ou um momento de inspiração, criando peças que ressoam em um nível mais profundo.',
            es: 'Cada colección nace de una historia, una emoción o un momento de inspiración, creando piezas que resuenan a un nivel más profundo.',
          },
        },
      ],
    },
    process: {
      title: {
        en: 'The Creative Process',
        pt: 'O Processo Criativo',
        es: 'El Proceso Creativo',
      },
      description: {
        en: 'From initial inspiration to final creation, each UBERTI piece undergoes a carefully orchestrated journey of design, development, and refinement.',
        pt: 'Desde a inspiração inicial até a criação final, cada peça UBERTI passa por uma jornada cuidadosamente orquestrada de design, desenvolvimento e refinamento.',
        es: 'Desde la inspiración inicial hasta la creación final, cada pieza UBERTI pasa por un viaje cuidadosamente orquestado de diseño, desarrollo y refinamiento.',
      },
    },
    cta: {
      title: {
        en: 'Experience UBERTI',
        pt: 'Experimente UBERTI',
        es: 'Experimenta UBERTI',
      },
      description: {
        en: 'Discover our collections and find pieces that speak to your unique style and story.',
        pt: 'Descubra nossas coleções e encontre peças que falam com seu estilo e história únicos.',
        es: 'Descubre nuestras colecciones y encuentra piezas que hablan con tu estilo e historia únicos.',
      },
      button: {
        en: 'Explore Collections',
        pt: 'Explorar Coleções',
        es: 'Explorar Colecciones',
      },
    },
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1200&fit=crop"
            alt="Helena's workspace"
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
            <p className="heading-2 font-light opacity-90">
              {content.hero.subtitle[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-6">{content.story.title[locale]}</h2>
        </div>

        <div className="space-y-8">
          {content.story.paragraphs[locale].map((paragraph, index) => (
            <p key={index} className="body-text leading-relaxed text-muted-foreground text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Helena's Portrait */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[3/4] overflow-hidden rounded bg-muted/30 hover-lift">
            <Image
              src="https://images.unsplash.com/photo-1494790108755-2616c6cc6811?w=600&h=800&fit=crop"
              alt="Helena, founder of UBERTI"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <blockquote className="text-xl font-light italic text-muted-foreground leading-relaxed">
              {locale === 'pt'
                ? '"Cada peça que crio é uma extensão da minha alma. Não é apenas sobre moda - é sobre criar algo que ressoa com a essência de quem a usa."'
                : locale === 'es'
                ? '"Cada pieza que creo es una extensión de mi alma. No se trata solo de moda: se trata de crear algo que resuene con la esencia de quien la usa."'
                : '"Every piece I create is an extension of my soul. It\'s not just about fashion - it\'s about creating something that resonates with the essence of the wearer."'
              }
            </blockquote>
            <cite className="block text-sm font-medium">
              — Helena, {locale === 'pt' ? 'Fundadora & Designer' : locale === 'es' ? 'Fundadora & Diseñadora' : 'Founder & Designer'}
            </cite>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-1">{content.philosophy.title[locale]}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.philosophy.values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <h3 className="heading-3">{value.title[locale]}</h3>
                <p className="body-text text-muted-foreground leading-relaxed">
                  {value.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="heading-1">{content.process.title[locale]}</h2>
            <p className="body-text text-muted-foreground leading-relaxed">
              {content.process.description[locale]}
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded bg-muted/30">
            <Image
              src="https://images.unsplash.com/photo-1558906844-e9ed4a4d3d91?w=600&h=450&fit=crop"
              alt="Creative process at UBERTI atelier"
              width={600}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="heading-1">{content.cta.title[locale]}</h2>
          <p className="body-text text-muted-foreground leading-relaxed">
            {content.cta.description[locale]}
          </p>
          <div className="pt-4">
            <Button size="lg" asChild>
              <Link href={`/${locale}/collections`}>
                {content.cta.button[locale]}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}