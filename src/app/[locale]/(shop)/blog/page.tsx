import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPageProps {
  params: { locale: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const locale = params.locale as 'en' | 'pt' | 'es';

  const content = {
    title: {
      en: 'The UBERTI Journal',
      pt: 'O Diário UBERTI',
      es: 'El Diario UBERTI',
    },
    subtitle: {
      en: 'Stories, inspiration, and insights from Helena\'s creative journey',
      pt: 'Histórias, inspiração e insights da jornada criativa de Helena',
      es: 'Historias, inspiración y perspectivas del viaje creativo de Helena',
    },
    comingSoon: {
      title: {
        en: 'Coming Soon',
        pt: 'Em Breve',
        es: 'Próximamente',
      },
      description: {
        en: 'We\'re preparing beautiful stories about our creative process, behind-the-scenes moments, and the inspiration behind each collection. Stay tuned for updates.',
        pt: 'Estamos preparando belas histórias sobre nosso processo criativo, momentos dos bastidores e a inspiração por trás de cada coleção. Fique atento às novidades.',
        es: 'Estamos preparando hermosas historias sobre nuestro proceso creativo, momentos detrás de escena y la inspiración detrás de cada colección. Mantente atento a las novedades.',
      },
    },
    newsletter: {
      title: {
        en: 'Get Notified',
        pt: 'Seja Notificado',
        es: 'Recibe Notificaciones',
      },
      description: {
        en: 'Subscribe to our newsletter to be the first to know when we publish new stories.',
        pt: 'Assine nossa newsletter para ser o primeiro a saber quando publicarmos novas histórias.',
        es: 'Suscríbete a nuestro boletín para ser el primero en saber cuándo publiquemos nuevas historias.',
      },
    },
    topics: [
      {
        title: {
          en: 'Behind the Scenes',
          pt: 'Bastidores',
          es: 'Detrás de Escenas',
        },
        description: {
          en: 'Glimpses into Helena\'s atelier and the creative process',
          pt: 'Vislumbres do ateliê de Helena e do processo criativo',
          es: 'Vislumbres del taller de Helena y el proceso creativo',
        },
      },
      {
        title: {
          en: 'Collection Stories',
          pt: 'Histórias das Coleções',
          es: 'Historias de Colecciones',
        },
        description: {
          en: 'The inspiration and journey behind each collection',
          pt: 'A inspiração e jornada por trás de cada coleção',
          es: 'La inspiración y el viaje detrás de cada colección',
        },
      },
      {
        title: {
          en: 'Craftsmanship',
          pt: 'Artesanato',
          es: 'Artesanía',
        },
        description: {
          en: 'Traditional techniques and sustainable practices',
          pt: 'Técnicas tradicionais e práticas sustentáveis',
          es: 'Técnicas tradicionales y prácticas sostenibles',
        },
      },
      {
        title: {
          en: 'Style & Inspiration',
          pt: 'Estilo e Inspiração',
          es: 'Estilo e Inspiración',
        },
        description: {
          en: 'Styling tips and creative inspiration from Helena',
          pt: 'Dicas de estilo e inspiração criativa de Helena',
          es: 'Consejos de estilo e inspiración creativa de Helena',
        },
      },
    ],
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="display-2">{content.title[locale]}</h1>
          <p className="heading-3 font-light text-muted-foreground">
            {content.subtitle[locale]}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-muted/20 rounded-lg p-8 lg:p-12">
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <h2 className="heading-2">{content.comingSoon.title[locale]}</h2>
              <p className="body-text text-muted-foreground leading-relaxed">
                {content.comingSoon.description[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            {locale === 'pt' ? 'O que Esperar' : locale === 'es' ? 'Qué Esperar' : 'What to Expect'}
          </h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Nosso blog será um espaço para compartilhar as histórias por trás de cada criação.'
              : locale === 'es'
              ? 'Nuestro blog será un espacio para compartir las historias detrás de cada creación.'
              : 'Our blog will be a space to share the stories behind each creation.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.topics.map((topic, index) => (
            <div key={index} className="space-y-4 p-6 border border-border/50 rounded-lg hover-lift">
              <h3 className="heading-3">{topic.title[locale]}</h3>
              <p className="body-text text-muted-foreground">
                {topic.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="heading-2">{content.newsletter.title[locale]}</h2>
            <p className="body-text text-muted-foreground">
              {content.newsletter.description[locale]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/${locale}/collections`}>
                  {locale === 'pt' ? 'Explorar Coleções' : locale === 'es' ? 'Explorar Colecciones' : 'Explore Collections'}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/about`}>
                  {locale === 'pt' ? 'Sobre Helena' : locale === 'es' ? 'Sobre Helena' : 'About Helena'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}