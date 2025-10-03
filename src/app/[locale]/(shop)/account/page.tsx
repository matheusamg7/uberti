'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Package, MapPin, Lock, LogOut } from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'password'>('profile');

  // Mock data
  const user = {
    name: 'Maria Silva',
    email: 'maria@email.com',
    phone: '+55 11 99999-9999',
  };

  const orders = [
    { id: '#HU-2024-001', date: '15/09/2024', status: 'Entregue', total: 'R$ 450,00' },
    { id: '#HU-2024-002', date: '28/09/2024', status: 'Em trânsito', total: 'R$ 320,00' },
    { id: '#HU-2024-003', date: '05/10/2024', status: 'Processando', total: 'R$ 680,00' },
  ];

  const addresses = [
    {
      id: 1,
      label: 'Casa',
      street: 'Rua das Flores, 123',
      complement: 'Apto 45',
      city: 'São Paulo - SP',
      zip: '01234-567',
      isPrimary: true,
    },
    {
      id: 2,
      label: 'Trabalho',
      street: 'Av. Paulista, 1000',
      complement: 'Sala 200',
      city: 'São Paulo - SP',
      zip: '01310-100',
      isPrimary: false,
    },
  ];

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'orders', label: 'Pedidos', icon: Package },
    { id: 'addresses', label: 'Endereços', icon: MapPin },
    { id: 'password', label: 'Senha', icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-8 sm:mb-12"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Minha Conta
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
              <button className="w-full flex items-center gap-3 px-6 py-4 text-left text-red-600 hover:bg-red-50 transition-colors border-t border-gray-200">
                <LogOut className="h-5 w-5" strokeWidth={1.5} />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Sair</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
                <h2
                  className="text-2xl font-light mb-8"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Informações Pessoais
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                  <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
                    Salvar Alterações
                  </button>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2
                  className="text-2xl font-light mb-8"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Meus Pedidos
                </h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="font-medium text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600 mt-1">Data: {order.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              order.status === 'Entregue'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'Em trânsito'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {order.status}
                          </span>
                          <p className="font-medium text-gray-900">{order.total}</p>
                        </div>
                      </div>
                      <Link
                        href={`/account/orders/${order.id}`}
                        className="text-sm text-black underline hover:text-gray-700 mt-4 inline-block"
                      >
                        Ver detalhes →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2
                    className="text-2xl font-light"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Meus Endereços
                  </h2>
                  <button className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm">
                    + Adicionar Novo
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 relative"
                    >
                      {address.isPrimary && (
                        <span className="absolute top-4 right-4 px-2 py-1 bg-black text-white text-xs rounded">
                          Principal
                        </span>
                      )}
                      <h3 className="font-medium text-gray-900 mb-3">{address.label}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {address.street}
                        {address.complement && `, ${address.complement}`}
                        <br />
                        {address.city}
                        <br />
                        CEP: {address.zip}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button className="text-sm text-black underline hover:text-gray-700">
                          Editar
                        </button>
                        <button className="text-sm text-red-600 underline hover:text-red-800">
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Password Tab */}
            {activeTab === 'password' && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
                <h2
                  className="text-2xl font-light mb-8"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Alterar Senha
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Senha Atual
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">
                      Confirmar Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
                    Atualizar Senha
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
