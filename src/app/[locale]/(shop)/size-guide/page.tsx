import { SimpleTabs } from '@/components/ui/simple-tabs';

interface SizeGuidePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SizeGuidePage({ params }: SizeGuidePageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const womenTable = (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Tamanho' : 'Size'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Busto (cm)' : 'Bust (cm)'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Cintura (cm)' : 'Waist (cm)'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Quadril (cm)' : 'Hip (cm)'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Altura (cm)' : 'Height (cm)'}
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { size: 'PP', bust: '80-84', waist: '62-66', hip: '86-90', height: '155-165' },
            { size: 'P', bust: '84-88', waist: '66-70', hip: '90-94', height: '160-170' },
            { size: 'M', bust: '88-92', waist: '70-74', hip: '94-98', height: '165-175' },
            { size: 'G', bust: '92-96', waist: '74-78', hip: '98-102', height: '170-180' },
            { size: 'GG', bust: '96-100', waist: '78-82', hip: '102-106', height: '175-185' },
          ].map((row) => (
            <tr key={row.size} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-6 py-3 font-medium">{row.size}</td>
              <td className="border border-gray-200 px-6 py-3">{row.bust}</td>
              <td className="border border-gray-200 px-6 py-3">{row.waist}</td>
              <td className="border border-gray-200 px-6 py-3">{row.hip}</td>
              <td className="border border-gray-200 px-6 py-3">{row.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const menTable = (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Tamanho' : 'Size'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Peito (cm)' : 'Chest (cm)'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Cintura (cm)' : 'Waist (cm)'}
            </th>
            <th className="border border-gray-200 px-6 py-3 text-left text-sm font-medium text-gray-900">
              {locale === 'pt' ? 'Altura (cm)' : 'Height (cm)'}
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { size: 'P', chest: '88-92', waist: '76-80', height: '165-175' },
            { size: 'M', chest: '92-96', waist: '80-84', height: '170-180' },
            { size: 'G', chest: '96-100', waist: '84-88', height: '175-185' },
            { size: 'GG', chest: '100-104', waist: '88-92', height: '180-190' },
          ].map((row) => (
            <tr key={row.size} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-6 py-3 font-medium">{row.size}</td>
              <td className="border border-gray-200 px-6 py-3">{row.chest}</td>
              <td className="border border-gray-200 px-6 py-3">{row.waist}</td>
              <td className="border border-gray-200 px-6 py-3">{row.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const accessoriesInfo = (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        {locale === 'pt'
          ? 'Nossos acessórios são de tamanho único, projetados para se adaptarem a diferentes estilos e preferências.'
          : 'Our accessories are one size fits all, designed to adapt to different styles and preferences.'}
      </p>
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">
          {locale === 'pt' ? 'Lenços e Pashminas' : 'Scarves and Pashminas'}
        </h4>
        <p className="text-sm">
          {locale === 'pt' ? 'Dimensões aproximadas: 180cm x 70cm' : 'Approximate dimensions: 180cm x 70cm'}
        </p>
      </div>
    </div>
  );

  const tabs = [
    {
      label: locale === 'pt' ? 'FEMININO' : locale === 'es' ? 'FEMENINO' : locale === 'fr' ? 'FEMME' : 'WOMEN',
      content: womenTable,
    },
    {
      label: locale === 'pt' ? 'MASCULINO' : locale === 'es' ? 'MASCULINO' : locale === 'fr' ? 'HOMME' : 'MEN',
      content: menTable,
    },
    {
      label: locale === 'pt' ? 'ACESSÓRIOS' : locale === 'es' ? 'ACCESORIOS' : locale === 'fr' ? 'ACCESSOIRES' : 'ACCESSORIES',
      content: accessoriesInfo,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <div className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Guia de Tamanhos' : locale === 'es' ? 'Guía de Tallas' : locale === 'fr' ? 'Guide des Tailles' : 'Size Guide'}
          </h1>
        </div>

        {/* Tabs */}
        <SimpleTabs tabs={tabs} />

        {/* How to Measure */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 md:p-8 bg-white border border-gray-200 rounded-lg">
          <h2
            className="text-xl md:text-2xl font-light mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Como Medir' : locale === 'es' ? 'Cómo Medir' : locale === 'fr' ? 'Comment Mesurer' : 'How to Measure'}
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>{locale === 'pt' ? 'Busto/Peito:' : 'Bust/Chest:'}</strong>{' '}
              {locale === 'pt'
                ? 'Meça na parte mais larga do busto/peito, mantendo a fita métrica paralela ao chão.'
                : 'Measure at the fullest part of the bust/chest, keeping the measuring tape parallel to the floor.'}
            </li>
            <li>
              <strong>{locale === 'pt' ? 'Cintura:' : 'Waist:'}</strong>{' '}
              {locale === 'pt'
                ? 'Meça na parte mais estreita da cintura, geralmente logo acima do umbigo.'
                : 'Measure at the narrowest part of the waist, usually just above the navel.'}
            </li>
            <li>
              <strong>{locale === 'pt' ? 'Quadril:' : 'Hip:'}</strong>{' '}
              {locale === 'pt'
                ? 'Meça na parte mais larga do quadril, aproximadamente 20cm abaixo da cintura.'
                : 'Measure at the fullest part of the hip, approximately 20cm below the waist.'}
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            {locale === 'pt' ? 'Dúvidas sobre tamanhos?' : locale === 'es' ? '¿Dudas sobre tallas?' : locale === 'fr' ? 'Des questions sur les tailles?' : 'Questions about sizes?'}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            {locale === 'pt' ? 'Entre em Contato' : locale === 'es' ? 'Contáctanos' : locale === 'fr' ? 'Contactez-nous' : 'Contact Us'}
          </a>
        </div>
      </div>
    </div>
  );
}
