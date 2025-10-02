'use client';

import { useEffect, useState } from 'react';
import { X, Instagram, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationMenu } from '@/lib/mock-data';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'pt' | 'es' | 'fr';
  staticNavigation: Array<{
    name: { en: string; pt: string; es: string; fr: string };
    href: string;
  }>;
  languages: Array<{
    code: string;
    name: string;
    flag: string;
  }>;
  currentLanguage: { code: string; name: string; flag: string } | undefined;
  onLanguageChange: (lang: { code: string; name: string; flag: string }) => void;
}

export function MobileMenuOverlay({
  isOpen,
  onClose,
  locale,
  staticNavigation,
  languages,
  currentLanguage,
  onLanguageChange
}: MobileMenuOverlayProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedCategory(null); // Reset expanded state when menu closes
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
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

      {/* Menu Panel - Slides from right */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-[480px]`}
      >
        <div className="h-full flex flex-col">
          {/* Header with Logo and Close */}
          <div className="px-8 py-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Link
                href={`/${locale}`}
                onClick={onClose}
              >
                <Image
                  src="/logo/logo_marrom.svg"
                  alt="UBERTI"
                  width={160}
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={onClose}
                className="p-0 -mr-2 transition-all duration-300 hover:opacity-70"
                aria-label="Close menu"
              >
                <X className="h-8 w-8" strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Main Navigation - Scrollable */}
          <nav className="flex-1 overflow-y-auto">
            {/* Hierarchical Categories */}
            <div className="px-8 py-6">
              {navigationMenu.map((category) => (
                <div key={category.id} className="border-b border-gray-100">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span
                      className="text-lg font-light tracking-wide text-gray-800 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {category.name[locale]}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                        expandedCategory === category.id ? 'rotate-90' : ''
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  {/* Subcategories */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCategory === category.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-6 pb-3">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.slug}
                          href={`/${locale}/${category.slug}/${subcategory.slug}`}
                          className="block py-2.5 text-base font-light text-gray-600 hover:text-black transition-colors"
                          onClick={onClose}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {subcategory.name[locale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Navigation (About, Blog, etc.) */}
            <div className="px-8 py-4 border-t border-gray-100">
              {staticNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="block py-3 text-base font-light text-gray-700 hover:text-black transition-colors"
                  onClick={onClose}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.name[locale]}
                </Link>
              ))}
            </div>

            {/* Account Links */}
            <div className="px-8 pb-8 border-t border-gray-100 pt-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                {locale === 'pt' ? 'Conta' : locale === 'es' ? 'Cuenta' : locale === 'fr' ? 'Compte' : 'Account'}
              </h3>
              <Link
                href={`/${locale}/account`}
                className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                onClick={onClose}
              >
                {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : locale === 'fr' ? 'Mon Compte' : 'My Account'}
              </Link>
              <Link
                href={`/${locale}/login`}
                className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                onClick={onClose}
              >
                {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : locale === 'fr' ? 'Connexion' : 'Sign In'}
              </Link>
            </div>
          </nav>

          {/* Footer with Contact and Language */}
          <div className="border-t border-gray-100 px-8 py-6 space-y-6">
            {/* Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                {locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : locale === 'fr' ? 'Contact' : 'Contact'}
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/uberti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:opacity-70"
                >
                  <Instagram className="h-6 w-6 text-gray-700" strokeWidth={1.2} />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:opacity-70"
                >
                  {/* WhatsApp Icon */}
                  <svg
                    className="h-6 w-6 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Language Selector */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                {locale === 'pt' ? 'Idioma' : locale === 'es' ? 'Idioma' : locale === 'fr' ? 'Langue' : 'Language'}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang);
                      onClose();
                    }}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                      currentLanguage?.code === lang.code
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'border-gray-300 text-gray-700 hover:border-gray-800'
                    }`}
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
