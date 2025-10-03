'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckoutSteps } from '@/components/shop/checkout-steps';
import { OrderSummary } from '@/components/shop/order-summary';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'boleto' | 'pix'>('card');

  // Mock cart items
  const cartItems = [
    {
      id: '1',
      name: 'Casaco de Lã Merino',
      price: 450,
      quantity: 1,
      image: '/Helena_uberti_0158.jpg',
      size: 'M',
    },
    {
      id: '2',
      name: 'Lenço Artesanal',
      price: 120,
      quantity: 2,
      image: '/Helena_uberti_0421.jpg',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-6 sm:mb-8 text-center"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Finalizar Compra
        </h1>

        {/* Steps */}
        <CheckoutSteps currentStep={2} locale="pt" />

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Forms (2/3) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* 1. Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
              <h2
                className="text-xl font-light mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">
                  1
                </span>
                Informações de Contato
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Address */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
              <h2
                className="text-xl font-light mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">
                  2
                </span>
                Endereço de Entrega
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      CEP
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="00000-000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      &nbsp;
                    </label>
                    <button className="w-full px-4 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm">
                      Buscar CEP
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-3">
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Rua
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="Rua das Flores"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Número
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Complemento
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="Apto 45"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Bairro
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="Centro"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Cidade
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="São Paulo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Estado
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black">
                      <option value="">Selecione</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
              <h2
                className="text-xl font-light mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">
                  3
                </span>
                Método de Pagamento
              </h2>

              {/* Payment Options */}
              <div className="space-y-4 mb-6">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value as typeof paymentMethod)}
                    className="w-4 h-4"
                  />
                  <span>Cartão de Crédito</span>
                </label>

                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="boleto"
                    checked={paymentMethod === 'boleto'}
                    onChange={(e) => setPaymentMethod(e.target.value as typeof paymentMethod)}
                    className="w-4 h-4"
                  />
                  <span>Boleto Bancário</span>
                </label>

                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value as typeof paymentMethod)}
                    className="w-4 h-4"
                  />
                  <span>PIX</span>
                </label>
              </div>

              {/* Card Fields */}
              {paymentMethod === 'card' && (
                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                        placeholder="000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="MARIA SILVA"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'boleto' && (
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  O boleto será gerado após a confirmação do pedido e enviado para seu email.
                </p>
              )}

              {paymentMethod === 'pix' && (
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  O código PIX será gerado após a confirmação do pedido.
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Li e aceito os{' '}
                <Link href="/terms" className="underline hover:text-black">
                  termos de serviço
                </Link>{' '}
                e{' '}
                <Link href="/privacy" className="underline hover:text-black">
                  política de privacidade
                </Link>
              </label>
            </div>
          </div>

          {/* Right Column - Order Summary (1/3) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <OrderSummary
                items={cartItems}
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                locale="pt"
              />

              <button className="w-full mt-6 py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
                FINALIZAR COMPRA
              </button>

              <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
