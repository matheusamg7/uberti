'use client';

import { useEffect, useState } from 'react';
import { X, Instagram, ChevronRight, Globe, ChevronDown, User } from 'lucide-react';
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
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;

      // Bloqueia scroll no body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaura o scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restaura a posição do scroll
      window.scrollTo(0, parseInt(scrollY || '0') * -1);

      setExpandedCategory(null); // Reset expanded state when menu closes
      setIsLanguageDropdownOpen(false); // Reset language dropdown
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
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
          {/* Header with Logo, Language Selector and Close */}
          <div className="px-8 py-8 border-b border-gray-100">
            <div className="flex items-center justify-between gap-4">
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

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-gray-400 transition-colors"
                  aria-label="Select language"
                >
                  <Globe className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
                  <span className="text-sm font-light text-gray-800">{currentLanguage?.code.toUpperCase()}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                      isLanguageDropdownOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10">
                    {languages.map((lang) => (
                      <button
                        type="button"
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang);
                          setIsLanguageDropdownOpen(false);
                          onClose();
                        }}
                        className={`w-full flex items-center justify-center px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                          currentLanguage?.code === lang.code ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span
                          className="text-sm font-light text-gray-800"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-0 transition-all duration-300 hover:opacity-70"
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
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex flex-col md:flex-row items-center justify-between py-4 text-center md:text-left group"
                  >
                    <span
                      className="text-2xl md:text-lg font-light tracking-wide text-gray-800 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {category.name[locale]}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-600 transition-transform duration-300 mt-2 md:mt-0 ${
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
                    <div className="pl-0 md:pl-6 pb-3 text-center md:text-left">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.slug}
                          href={`/${locale}/${category.slug}/${subcategory.slug}`}
                          className="block py-2.5 text-lg md:text-base font-light text-gray-600 hover:text-black transition-colors"
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
              {staticNavigation.map((item) => {
                // Special handling for About - make it expandable
                if (item.href === '/about') {
                  const aboutSubcategories = [
                    {
                      name: {
                        en: 'About Helena',
                        pt: 'Sobre Helena',
                        es: 'Sobre Helena',
                        fr: 'À Propos d\'Helena'
                      },
                      href: '/sobre-helena'
                    },
                    {
                      name: {
                        en: 'About UBERTI',
                        pt: 'Sobre UBERTI',
                        es: 'Sobre UBERTI',
                        fr: 'À Propos d\'UBERTI'
                      },
                      href: '/sobre-uberti'
                    }
                  ];

                  return (
                    <div key={item.href} className="border-b border-gray-100">
                      <button
                        type="button"
                        onClick={() => toggleCategory(item.href)}
                        className="w-full flex flex-col md:flex-row items-center justify-between py-3 text-center md:text-left group"
                      >
                        <span
                          className="text-xl md:text-base font-light text-gray-700 group-hover:text-black transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.name[locale]}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 text-gray-600 transition-transform duration-300 mt-2 md:mt-0 ${
                            expandedCategory === item.href ? 'rotate-90' : ''
                          }`}
                          strokeWidth={1.5}
                        />
                      </button>

                      {/* About Subcategories */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedCategory === item.href ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-0 md:pl-6 pb-3 text-center md:text-left">
                          {aboutSubcategories.map((subcategory) => (
                            <Link
                              key={subcategory.href}
                              href={`/${locale}${subcategory.href}`}
                              className="block py-2 text-base md:text-sm font-light text-gray-600 hover:text-black transition-colors"
                              onClick={onClose}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {subcategory.name[locale]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular static navigation items
                return (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className="block py-3 text-xl md:text-base font-light text-gray-700 hover:text-black transition-colors text-center md:text-left"
                    onClick={onClose}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.name[locale]}
                  </Link>
                );
              })}
            </div>

          </nav>

          {/* Footer with Contact and Account */}
          <div className="border-t border-gray-100 px-8 py-6">
            <div className="flex items-start justify-between">
              {/* Contact - Left side */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                  {locale === 'pt' ? 'Contato' : locale === 'es' ? 'Contacto' : locale === 'fr' ? 'Contact' : 'Contact'}
                </h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/uberti_oficial/"
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

              {/* Account - Right side, visible only on mobile */}
              <div className="md:hidden flex flex-col items-center">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                  {locale === 'pt' ? 'Conta' : locale === 'es' ? 'Cuenta' : locale === 'fr' ? 'Compte' : 'Account'}
                </h3>
                <Link
                  href={`/${locale}/account`}
                  className="transition-all duration-300 hover:opacity-70"
                  onClick={onClose}
                  aria-label={locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : locale === 'fr' ? 'Mon Compte' : 'My Account'}
                >
                  <User className="h-6 w-6 text-gray-700" strokeWidth={1.2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
