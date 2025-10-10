import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AboutHelenaPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutHelenaPage({ params }: AboutHelenaPageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as 'en' | 'pt' | 'es' | 'fr';

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
        'Nasci em Garibaldi, Rio Grande do Sul, mas minhas raízes estão profundamente ligadas a Bagé, onde minha família sempre teve conexão com a pecuária e a agricultura. Desde pequena, aprendi o valor do trabalho manual com minha mãe e minha avó, que me transmitiram o amor por criar com as próprias mãos.',
        'Morei em Porto Alegre e Florianópolis, onde expandi meus horizontes artísticos. Foi nessa jornada que descobri a técnica de feltragem, aprendendo com uma designer de São Paulo que me apresentou às possibilidades únicas da lã. Passei dois anos pesquisando e experimentando antes de lançar minha primeira coleção.',
        'Hoje, cada peça que crio é 100% feita à mão, utilizando fibras naturais e processos sustentáveis. Acredito na slow fashion, em valorizar o que é único e autêntico.',
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative">
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

            {/* Photo Placeholder 1 */}
            <div className="max-w-2xl mx-auto">
              <div className="aspect-[3/4] bg-muted/30 border border-muted-foreground/10 flex items-center justify-center">
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
                    {content.photoPlaceholder[locale]} 1
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

            {/* Photo Placeholder 2 */}
            <div className="max-w-2xl mx-auto">
              <div className="aspect-[3/4] bg-muted/30 border border-muted-foreground/10 flex items-center justify-center">
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
                    {content.photoPlaceholder[locale]} 2
                  </p>
                </div>
              </div>
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
