'use client';

import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function SearchOverlay({ isOpen, onClose, locale }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const content = {
    title: {
      en: 'Search',
      pt: 'Buscar',
      es: 'Buscar',
      fr: 'Rechercher',
    },
    placeholder: {
      en: 'What are you looking for?',
      pt: 'O que você está procurando?',
      es: '¿Qué estás buscando?',
      fr: 'Que cherchez-vous?',
    },
    trending: {
      en: 'Trending',
      pt: 'Em Alta',
      es: 'Tendencias',
      fr: 'Tendances',
    },
    quickLinks: {
      en: 'Quick Links',
      pt: 'Links Rápidos',
      es: 'Enlaces Rápidos',
      fr: 'Liens Rapides',
    },
  };

  const trendingItems = [
    {
      name: {
        en: 'Raízes Collection',
        pt: 'Coleção Raízes',
        es: 'Colección Raízes',
        fr: 'Collection Raízes',
      },
      link: `/${locale}/collections/raizes`,
    },
    {
      name: {
        en: 'Favos Collection',
        pt: 'Coleção Favos',
        es: 'Colección Favos',
        fr: 'Collection Favos',
      },
      link: `/${locale}/collections/favos`,
    },
    {
      name: {
        en: 'Exclusive Tailoring',
        pt: 'Alfaiataria Exclusiva',
        es: 'Sastrería Exclusiva',
        fr: 'Couture Exclusive',
      },
      link: `/${locale}/exclusive-tailoring`,
    },
    {
      name: {
        en: 'Pampa Brasileiro',
        pt: 'Pampa Brasileiro',
        es: 'Pampa Brasileiro',
        fr: 'Pampa Brasileiro',
      },
      link: `/${locale}/collections/pampa`,
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/${locale}/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Search Panel - Slides from right */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-[500px] lg:w-[600px]`}
      >
        <div className="h-full flex flex-col">
          {/* Header - Same style as hamburger menu */}
          <div className="px-8 py-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light tracking-[0.1em]" style={{ fontFamily: "'Cinzel', serif" }}>
                {content.title[locale]}
              </h2>
              <button
                onClick={onClose}
                className="p-0 -mr-2 transition-all duration-300 hover:opacity-70"
                aria-label="Close search"
              >
                <X className="h-8 w-8" strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="px-8 py-6 border-b border-gray-100">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.placeholder[locale]}
                className="w-full px-0 py-4 pr-10 text-lg font-light border-b border-gray-200 focus:border-black outline-none transition-colors duration-300 bg-transparent placeholder:text-gray-400"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-400" strokeWidth={1.2} />
              </button>
            </form>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {/* Trending Section - Same style as menu sections */}
            <div className="px-8 pb-8 pt-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                {content.trending[locale]}
              </h3>
              <div className="space-y-0">
                {trendingItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block py-4 text-lg font-light text-gray-800 hover:text-black transition-colors border-b border-gray-100 last:border-0"
                    onClick={onClose}
                  >
                    {item.name[locale]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="px-8 pb-8 border-t border-gray-100 pt-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                {content.quickLinks[locale]}
              </h3>
              <div className="space-y-0">
                <Link
                  href={`/${locale}/products`}
                  className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                  onClick={onClose}
                >
                  {locale === 'pt' ? 'Ver Todos os Produtos' :
                   locale === 'es' ? 'Ver Todos los Productos' :
                   locale === 'fr' ? 'Voir Tous les Produits' :
                   'View All Products'}
                </Link>
                <Link
                  href={`/${locale}/collections`}
                  className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                  onClick={onClose}
                >
                  {locale === 'pt' ? 'Nossas Coleções' :
                   locale === 'es' ? 'Nuestras Colecciones' :
                   locale === 'fr' ? 'Nos Collections' :
                   'Our Collections'}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                  onClick={onClose}
                >
                  {locale === 'pt' ? 'Sobre Helena' :
                   locale === 'es' ? 'Sobre Helena' :
                   locale === 'fr' ? 'À Propos d\'Helena' :
                   'About Helena'}
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                  onClick={onClose}
                >
                  {locale === 'pt' ? 'Cultura' :
                   locale === 'es' ? 'Cultura' :
                   locale === 'fr' ? 'Culture' :
                   'Culture'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}