import { PageBanner } from '@/components/ui/page-banner';
import { InfoCard } from '@/components/ui/info-card';
import { Leaf, Recycle, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface SustainabilityPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SustainabilityPage({ params }: SustainabilityPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const content = {
    title: {
      en: 'Sustainability is Our Essence',
      pt: 'Sustentabilidade é Nossa Essência',
      es: 'La Sostenibilidad es Nuestra Esencia',
      fr: 'La Durabilité est Notre Essence',
    },
    intro: {
      en: 'Helena Uberti was born with the purpose of creating conscious fashion, respecting nature and the traditions of the Brazilian Pampa. Every piece tells a story of care, quality, and responsibility.',
      pt: 'A Helena Uberti nasceu com o propósito de criar moda consciente, respeitando a natureza e as tradições do Pampa brasileiro. Cada peça conta uma história de cuidado, qualidade e responsabilidade.',
      es: 'Helena Uberti nació con el propósito de crear moda consciente, respetando la naturaleza y las tradiciones del Pampa brasileño. Cada pieza cuenta una historia de cuidado, calidad y responsabilidad.',
      fr: 'Helena Uberti est née dans le but de créer une mode consciente, respectant la nature et les traditions du Pampa brésilien. Chaque pièce raconte une histoire de soin, de qualité et de responsabilité.',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Hero Banner */}
      <PageBanner
        imageSrc="/banners/pampa_banner.png"
        title={content.title[locale as keyof typeof content.title]}
        height="xl"
      />

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2
          className="text-2xl md:text-3xl font-light mb-6"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {locale === 'pt' ? 'Nossa Jornada Sustentável' : locale === 'es' ? 'Nuestro Viaje Sostenible' : locale === 'fr' ? 'Notre Voyage Durable' : 'Our Sustainable Journey'}
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {content.intro[locale as keyof typeof content.intro]}
        </p>
      </div>

      {/* Pillars */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <InfoCard
            icon={<Leaf />}
            title={locale === 'pt' ? 'Fibras Naturais' : locale === 'es' ? 'Fibras Naturales' : locale === 'fr' ? 'Fibres Naturelles' : 'Natural Fibers'}
            description={locale === 'pt' ? '100% lã natural do Pampa, biodegradável e renovável' : locale === 'es' ? '100% lana natural del Pampa, biodegradable y renovable' : locale === 'fr' ? '100% laine naturelle du Pampa, biodégradable et renouvelable' : '100% natural Pampa wool, biodegradable and renewable'}
          />
          <InfoCard
            icon={<Recycle />}
            title={locale === 'pt' ? 'Produção Local' : locale === 'es' ? 'Producción Local' : locale === 'fr' ? 'Production Locale' : 'Local Production'}
            description={locale === 'pt' ? 'Feito à mão por artesãos locais, reduzindo emissões de transporte' : locale === 'es' ? 'Hecho a mano por artesanos locales, reduciendo emisiones de transporte' : locale === 'fr' ? 'Fait à la main par des artisans locaux, réduisant les émissions de transport' : 'Handmade by local artisans, reducing transport emissions'}
          />
          <InfoCard
            icon={<Heart />}
            title={locale === 'pt' ? 'Bem-estar Animal' : locale === 'es' ? 'Bienestar Animal' : locale === 'fr' ? 'Bien-être Animal' : 'Animal Welfare'}
            description={locale === 'pt' ? 'Lã obtida de ovelhas criadas livres e com respeito' : locale === 'es' ? 'Lana obtenida de ovejas criadas libres y con respeto' : locale === 'fr' ? 'Laine obtenue de moutons élevés en liberté et avec respect' : 'Wool from free-range sheep raised with respect'}
          />
          <InfoCard
            icon={<Sparkles />}
            title={locale === 'pt' ? 'Durabilidade' : locale === 'es' ? 'Durabilidad' : locale === 'fr' ? 'Durabilité' : 'Durability'}
            description={locale === 'pt' ? 'Peças atemporais feitas para durar gerações' : locale === 'es' ? 'Piezas atemporales hechas para durar generaciones' : locale === 'fr' ? 'Pièces intemporelles faites pour durer des générations' : 'Timeless pieces made to last generations'}
          />
        </div>
      </div>

      {/* Alternating Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20 pb-12 sm:pb-16 lg:pb-20">
        {/* Section 1 - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/banners/hero_banner_1.png"
              alt="Natural wool"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Lã 100% Natural' : locale === 'es' ? 'Lana 100% Natural' : locale === 'fr' ? 'Laine 100% Naturelle' : '100% Natural Wool'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Nossa lã vem de ovelhas Pampa criadas em condições naturais, alimentadas com pasto orgânico e tratadas com o máximo respeito. Cada fibra carrega a essência dos campos do sul do Brasil, onde a tradição pastoril é preservada há gerações.'
                : 'Our wool comes from Pampa sheep raised in natural conditions, fed with organic pasture and treated with the utmost respect. Each fiber carries the essence of the fields of southern Brazil, where pastoral tradition has been preserved for generations.'}
            </p>
          </div>
        </div>

        {/* Section 2 - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Produção Artesanal' : locale === 'es' ? 'Producción Artesanal' : locale === 'fr' ? 'Production Artisanale' : 'Artisanal Production'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Cada peça é feita à mão por artesãos locais que dominam técnicas tradicionais passadas de geração em geração. Valorizamos o trabalho manual, o tempo dedicado e a conexão humana por trás de cada criação.'
                : 'Each piece is handmade by local artisans who master traditional techniques passed down from generation to generation. We value manual work, the time dedicated, and the human connection behind each creation.'}
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
            <Image
              src="/banners/hero_banner_2.png"
              alt="Artisans"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/banners/pampa_banner.png"
              alt="Pampa landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {locale === 'pt' ? 'Compromisso com o Futuro' : locale === 'es' ? 'Compromiso con el Futuro' : locale === 'fr' ? 'Engagement envers l\'Avenir' : 'Commitment to the Future'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {locale === 'pt'
                ? 'Acreditamos que moda e sustentabilidade devem caminhar juntas. Por isso, investimos em práticas que minimizam nosso impacto ambiental, desde a escolha da matéria-prima até a embalagem final. Nosso objetivo é deixar um legado positivo para as próximas gerações.'
                : 'We believe that fashion and sustainability must go hand in hand. Therefore, we invest in practices that minimize our environmental impact, from choosing raw materials to final packaging. Our goal is to leave a positive legacy for future generations.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
