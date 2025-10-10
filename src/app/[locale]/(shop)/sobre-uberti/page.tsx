import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AboutUbertiPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutUbertiPage({ params }: AboutUbertiPageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as 'en' | 'pt' | 'es' | 'fr';

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
        'A UBERTI nasceu da minha visão artística e da paixão pela lã. Mais do que uma marca de moda, é um projeto de expressão artística, onde cada peça conta uma história e carrega parte da minha alma.',
        'Trabalho com slow fashion, valorizando a produção artesanal e o respeito ao tempo. A lã que utilizo vem da região de Bagé, diretamente de produtores locais que compartilham do mesmo compromisso com a qualidade e a sustentabilidade.',
        'Cada peça UBERTI é única. Não há produções em massa nem repetições. O que você adquire é uma criação exclusiva, feita especialmente para fazer parte da sua história.',
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0">
          <Image
            src="/banners/pampa_banner.png"
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
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Text Content */}
            <div className="space-y-8">
              {content.paragraphs[locale].map((paragraph, index) => (
                <p key={index} className="body-text text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Photo Placeholder */}
            <div className="max-w-2xl mx-auto">
              <div className="aspect-square bg-muted/30 border border-muted-foreground/10 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <svg
                    className="mx-auto h-16 w-16 text-muted-foreground/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-muted-foreground/60 font-light">
                    {content.imagePlaceholder[locale]}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="py-16">
              <blockquote className="text-center max-w-3xl mx-auto">
                <p className="text-2xl font-light italic text-muted-foreground leading-relaxed">
                  "{content.quote[locale]}"
                </p>
                <cite className="block text-sm font-medium mt-8 not-italic text-muted-foreground/70">
                  — Helena Uberti
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Button size="lg" asChild className="min-w-[200px]">
            <Link href={`/${locale}/collections`}>
              {content.cta.button[locale]}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
