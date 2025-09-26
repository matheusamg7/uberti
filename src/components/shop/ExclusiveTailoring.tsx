'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';

interface ExclusiveTailoringProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

interface MeasurementData {
  name: string;
  email: string;
  phone: string;
  alturaBusto: string;
  busto: string;
  comprimentoBraco: string;
  cintura: string;
  quadril: string;
  alturaJoelho: string;
  costas: string;
  ombro: string;
  larguraBraco: string;
  punhoComAbertura: string;
  punhoSemAbertura: string;
  alturaCalca: string;
  gancho: string;
}

export function ExclusiveTailoring({ locale }: ExclusiveTailoringProps) {
  const [formData, setFormData] = useState<MeasurementData>({
    name: '',
    email: '',
    phone: '',
    alturaBusto: '',
    busto: '',
    comprimentoBraco: '',
    cintura: '',
    quadril: '',
    alturaJoelho: '',
    costas: '',
    ombro: '',
    larguraBraco: '',
    punhoComAbertura: '',
    punhoSemAbertura: '',
    alturaCalca: '',
    gancho: '',
  });

  const content = {
    title: {
      en: 'Exclusive Tailoring',
      pt: 'Exclusivo Sob Medida',
      es: 'Exclusivo a Medida',
      fr: 'Sur Mesure Exclusif',
    },
    subtitle: {
      en: 'Each body is unique. Send us your measurements and receive a piece made especially for you.',
      pt: 'Cada corpo é único. Envie suas medidas e receba uma peça feita especialmente para você.',
      es: 'Cada cuerpo es único. Envía tus medidas y recibe una pieza hecha especialmente para ti.',
      fr: 'Chaque corps est unique. Envoyez vos mesures et recevez une pièce faite spécialement pour vous.',
    },
    labels: {
      name: {
        en: 'Full Name',
        pt: 'Nome Completo',
        es: 'Nombre Completo',
        fr: 'Nom Complet',
      },
      email: {
        en: 'Email',
        pt: 'E-mail',
        es: 'Correo',
        fr: 'Email',
      },
      phone: {
        en: 'Phone/WhatsApp',
        pt: 'Telefone/WhatsApp',
        es: 'Teléfono/WhatsApp',
        fr: 'Téléphone/WhatsApp',
      },
      alturaBusto: {
        en: 'Bust Height',
        pt: 'Altura do Busto',
        es: 'Altura del Busto',
        fr: 'Hauteur du Buste',
      },
      busto: {
        en: 'Bust',
        pt: 'Busto',
        es: 'Busto',
        fr: 'Buste',
      },
      comprimentoBraco: {
        en: 'Arm Length',
        pt: 'Comprimento do Braço',
        es: 'Largo del Brazo',
        fr: 'Longueur du Bras',
      },
      cintura: {
        en: 'Waist',
        pt: 'Cintura',
        es: 'Cintura',
        fr: 'Taille',
      },
      quadril: {
        en: 'Hip',
        pt: 'Quadril',
        es: 'Cadera',
        fr: 'Hanche',
      },
      alturaJoelho: {
        en: 'Knee Height',
        pt: 'Altura do Joelho',
        es: 'Altura de la Rodilla',
        fr: 'Hauteur du Genou',
      },
      costas: {
        en: 'Back',
        pt: 'Costas',
        es: 'Espalda',
        fr: 'Dos',
      },
      ombro: {
        en: 'Shoulder',
        pt: 'Ombro',
        es: 'Hombro',
        fr: 'Épaule',
      },
      larguraBraco: {
        en: 'Arm Width',
        pt: 'Largura do Braço',
        es: 'Ancho del Brazo',
        fr: 'Largeur du Bras',
      },
      punhoComAbertura: {
        en: 'Cuff with Opening',
        pt: 'Punho com Abertura',
        es: 'Puño con Abertura',
        fr: 'Poignet avec Ouverture',
      },
      punhoSemAbertura: {
        en: 'Cuff without Opening',
        pt: 'Punho sem Abertura',
        es: 'Puño sin Abertura',
        fr: 'Poignet sans Ouverture',
      },
      alturaCalca: {
        en: 'Pants Length',
        pt: 'Altura da Calça',
        es: 'Largo del Pantalón',
        fr: 'Longueur du Pantalon',
      },
      gancho: {
        en: 'Crotch',
        pt: 'Gancho',
        es: 'Tiro',
        fr: 'Entrejambe',
      },
    },
    button: {
      en: 'Send My Measurements',
      pt: 'Enviar Minhas Medidas',
      es: 'Enviar Mis Medidas',
      fr: 'Envoyer Mes Mesures',
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criar mensagem para WhatsApp
    const message = `
Olá, gostaria de solicitar um pedido exclusivo sob medida.

*Dados Pessoais:*
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}

*Medidas Superiores:*
Altura do Busto: ${formData.alturaBusto}
Busto: ${formData.busto}
Comprimento do Braço: ${formData.comprimentoBraco}
Costas: ${formData.costas}
Ombro: ${formData.ombro}
Largura do Braço: ${formData.larguraBraco}
Punho com Abertura: ${formData.punhoComAbertura}
Punho sem Abertura: ${formData.punhoSemAbertura}

*Medidas Inferiores:*
Cintura: ${formData.cintura}
Quadril: ${formData.quadril}
Altura do Joelho: ${formData.alturaJoelho}
Altura da Calça: ${formData.alturaCalca}
Gancho: ${formData.gancho}
    `.trim();

    // Número do WhatsApp (adicione o número real aqui)
    const phoneNumber = '5511999999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{content.title[locale]}</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle[locale]}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Croqui SVG with Interactive Fields */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* SVG Background */}
              <img
                src="/banners/Frame 49.svg"
                alt="Fashion Sketch"
                className="w-full h-auto"
              />

              {/* Interactive Input Fields Positioned Over SVG */}
              <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
                {/* Map measurements to SVG positions */}
                {[
                  { field: 'alturaBusto', label: content.labels.alturaBusto[locale], position: { top: '8%', left: '5%' } },
                  { field: 'busto', label: content.labels.busto[locale], position: { top: '16%', left: '5%' } },
                  { field: 'comprimentoBraco', label: content.labels.comprimentoBraco[locale], position: { top: '24%', left: '5%' } },
                  { field: 'cintura', label: content.labels.cintura[locale], position: { top: '32%', left: '5%' } },
                  { field: 'quadril', label: content.labels.quadril[locale], position: { top: '40%', left: '5%' } },
                  { field: 'alturaJoelho', label: content.labels.alturaJoelho[locale], position: { top: '48%', left: '5%' } },
                  { field: 'costas', label: content.labels.costas[locale], position: { top: '60%', left: '5%' } },
                  { field: 'ombro', label: content.labels.ombro[locale], position: { top: '16%', right: '5%', left: 'auto' } },
                  { field: 'larguraBraco', label: content.labels.larguraBraco[locale], position: { top: '24%', right: '5%', left: 'auto' } },
                  { field: 'punhoComAbertura', label: content.labels.punhoComAbertura[locale], position: { top: '32%', right: '5%', left: 'auto' } },
                  { field: 'punhoSemAbertura', label: content.labels.punhoSemAbertura[locale], position: { top: '40%', right: '5%', left: 'auto' } },
                  { field: 'alturaCalca', label: content.labels.alturaCalca[locale], position: { top: '48%', right: '5%', left: 'auto' } },
                  { field: 'gancho', label: content.labels.gancho[locale], position: { top: '56%', right: '5%', left: 'auto' } },
                ].map((item) => (
                  <div
                    key={item.field}
                    className="absolute"
                    style={{
                      ...item.position,
                      width: '25%',
                    }}
                  >
                    <label className="text-[10px] text-gray-600 block mb-1">
                      {item.label}
                    </label>
                    <input
                      type="text"
                      name={item.field}
                      value={formData[item.field as keyof MeasurementData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 text-xs border border-gray-300 bg-white/90 focus:border-gray-800 focus:outline-none"
                      placeholder="cm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form - Personal Info Only */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Instructions */}
              <div className="p-4 bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-700">
                  {locale === 'pt'
                    ? 'Preencha suas medidas diretamente no croqui ao lado. Depois, adicione suas informações pessoais abaixo para enviar o pedido.'
                    : locale === 'es'
                    ? 'Complete sus medidas directamente en el croquis al lado. Luego, agregue su información personal a continuación para enviar el pedido.'
                    : locale === 'fr'
                    ? 'Remplissez vos mesures directement sur le croquis ci-contre. Ensuite, ajoutez vos informations personnelles ci-dessous pour envoyer la commande.'
                    : 'Fill in your measurements directly on the sketch beside. Then, add your personal information below to send the order.'}
                </p>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-gray-600">
                  {locale === 'pt' ? 'Informações Pessoais' : locale === 'es' ? 'Información Personal' : locale === 'fr' ? 'Informations Personnelles' : 'Personal Information'}
                </h3>

                <input
                  type="text"
                  name="name"
                  placeholder={content.labels.name[locale]}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-800 focus:outline-none transition-colors bg-transparent placeholder:text-gray-400"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder={content.labels.email[locale]}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-800 focus:outline-none transition-colors bg-transparent placeholder:text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder={content.labels.phone[locale]}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-800 focus:outline-none transition-colors bg-transparent placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Measurements Summary */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-gray-600">
                  {locale === 'pt' ? 'Resumo das Medidas' : locale === 'es' ? 'Resumen de Medidas' : locale === 'fr' ? 'Résumé des Mesures' : 'Measurements Summary'}
                </h3>
                <p className="text-xs text-gray-500">
                  {locale === 'pt'
                    ? 'As medidas preenchidas no croqui serão enviadas junto com seu pedido.'
                    : locale === 'es'
                    ? 'Las medidas completadas en el croquis se enviarán con su pedido.'
                    : locale === 'fr'
                    ? 'Les mesures remplies sur le croquis seront envoyées avec votre commande.'
                    : 'The measurements filled in the sketch will be sent with your order.'}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <Phone className="h-5 w-5" strokeWidth={1} />
                <span className="text-sm uppercase tracking-wider">
                  {content.button[locale]}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}