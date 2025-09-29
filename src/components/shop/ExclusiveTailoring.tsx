'use client';

import { useState } from 'react';

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
      en: 'Each body is unique. Send us your measurements and receive a piece\nmade especially for you.',
      pt: 'Cada corpo é único. Envie suas medidas e receba uma peça\nfeita especialmente para você.',
      es: 'Cada cuerpo es único. Envía tus medidas y recibe una pieza\nhecha especialmente para ti.',
      fr: 'Chaque corps est unique. Envoyez vos mesures et recevez une pièce\nfaite spécialement pour vous.',
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
    <section className="py-8" style={{ backgroundColor: '#FEFDFE' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Title, Subtitle and Form */}
          <div className="order-1 lg:order-1 lg:pt-16">
            {/* Header */}
            <div className="mb-12">
              <h2 className="heading-1 mb-6 text-left" style={{ fontFamily: "'Cinzel', serif" }}>{content.title[locale]}</h2>
              <p className="body-text text-muted-foreground text-left mb-12 whitespace-pre-line">
                {content.subtitle[locale]}
              </p>
            </div>

            {/* Form - Personal Info Only */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
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

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-black border border-black text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  {content.button[locale]}
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Croqui */}
          <div className="order-2 lg:order-2">
            <div className="relative w-full max-w-xl mx-auto">
              {/* SVG Background */}
              <img
                src="/banners/Frame 49.svg"
                alt="Fashion Sketch"
                className="w-full h-auto"
              />

              {/* Interactive Input Fields Positioned Over SVG */}
              <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
                {/* Map measurements to SVG positions with better spacing */}
                {[
                  { field: 'alturaBusto', label: content.labels.alturaBusto[locale], position: { top: '5%', left: '2%' } },
                  { field: 'busto', label: content.labels.busto[locale], position: { top: '14%', left: '2%' } },
                  { field: 'comprimentoBraco', label: content.labels.comprimentoBraco[locale], position: { top: '23%', left: '2%' } },
                  { field: 'cintura', label: content.labels.cintura[locale], position: { top: '32%', left: '2%' } },
                  { field: 'quadril', label: content.labels.quadril[locale], position: { top: '41%', left: '2%' } },
                  { field: 'alturaJoelho', label: content.labels.alturaJoelho[locale], position: { top: '50%', left: '2%' } },
                  { field: 'costas', label: content.labels.costas[locale], position: { top: '65%', left: '2%' } },
                  { field: 'ombro', label: content.labels.ombro[locale], position: { top: '14%', right: '2%', left: 'auto' } },
                  { field: 'larguraBraco', label: content.labels.larguraBraco[locale], position: { top: '23%', right: '2%', left: 'auto' } },
                  { field: 'punhoComAbertura', label: content.labels.punhoComAbertura[locale], position: { top: '32%', right: '2%', left: 'auto' } },
                  { field: 'punhoSemAbertura', label: content.labels.punhoSemAbertura[locale], position: { top: '41%', right: '2%', left: 'auto' } },
                  { field: 'alturaCalca', label: content.labels.alturaCalca[locale], position: { top: '50%', right: '2%', left: 'auto' } },
                  { field: 'gancho', label: content.labels.gancho[locale], position: { top: '62%', right: '2%', left: 'auto' } },
                ].map((item) => (
                  <div
                    key={item.field}
                    className="absolute"
                    style={{
                      ...item.position,
                      width: '23%',
                    }}
                  >
                    <label className="text-xs text-gray-700 font-medium block mb-0.5">
                      {item.label}
                    </label>
                    <input
                      type="text"
                      name={item.field}
                      value={formData[item.field as keyof MeasurementData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 text-sm border border-gray-200 bg-white/95 rounded-md focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all shadow-sm hover:border-gray-300"
                      placeholder="cm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}