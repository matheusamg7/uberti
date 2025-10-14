'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import { SearchOverlay } from '@/components/ui/search-overlay';
import { MobileMenuOverlay } from '@/components/ui/mobile-menu-overlay';
import { AccountMenuOverlay } from '@/components/ui/account-menu-overlay';

interface HeaderProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

const staticNavigation = [
  { name: { en: 'About', pt: 'Sobre', es: 'Acerca', fr: 'À propos' }, href: '/about' },
  { name: { en: 'Blog', pt: 'Blog', es: 'Blog', fr: 'Blog' }, href: '/blog' },
  { name: { en: 'Where to Find', pt: 'Onde Encontrar', es: 'Dónde Encontrar', fr: 'Où Trouver' }, href: '/#where-to-find' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on the home page
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300); // Aumentado para 300px (aproximadamente 3 rolagens)
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger animations on load - instantâneo no mobile
    setIsLoaded(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === locale);

  // Determine header background
  const headerBackground = () => {
    if (isScrolled) {
      return 'bg-white/95 backdrop-blur-md shadow-sm';
    }
    if (isHomePage) {
      return 'bg-transparent';
    }
    return 'bg-white/95 backdrop-blur-md shadow-sm';
  };

  // Determine icon colors
  const iconColor = isScrolled || !isHomePage ? 'text-gray-800' : 'text-white drop-shadow-lg';

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInFast {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile: animação rápida sem delay - ignora animation-delay inline */
        .animate-fade-in-up {
          animation: fadeInFast 0.2s ease-out forwards !important;
          animation-delay: 0s !important;
          opacity: 0;
        }

        /* Desktop: animação com delay */
        @media (min-width: 768px) {
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards !important;
            opacity: 0;
          }
        }

        /* Mobile: animação rápida das linhas do menu */
        .animate-menu-line-1 {
          animation: slideInFromBottom 0.2s ease-out 0.1s forwards;
          opacity: 0;
        }

        .animate-menu-line-2 {
          animation: slideInFromBottom 0.2s ease-out 0.15s forwards;
          opacity: 0;
        }

        .animate-menu-line-3 {
          animation: slideInFromBottom 0.2s ease-out 0.2s forwards;
          opacity: 0;
        }

        /* Desktop: animação normal das linhas */
        @media (min-width: 768px) {
          .animate-menu-line-1 {
            animation: slideInFromBottom 0.4s ease-out 0.6s forwards;
            opacity: 0;
          }

          .animate-menu-line-2 {
            animation: slideInFromBottom 0.4s ease-out 0.7s forwards;
            opacity: 0;
          }

          .animate-menu-line-3 {
            animation: slideInFromBottom 0.4s ease-out 0.8s forwards;
            opacity: 0;
          }
        }

        /* Animação de slide apenas para desktop */
        .icons-container {
          /* Mobile: sem animação, ícones centralizados */
          transform: translateX(0);
          transition: none;
        }

        /* Desktop: com animação de slide para o centro */
        @media (min-width: 768px) {
          .icons-container {
            transition: transform 900ms ease-out;
          }

          .icons-container.scrolled {
            transform: translateX(calc(-50vw + 14rem));
          }

          .icons-container.not-scrolled {
            transform: translateX(0);
          }
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cursor-default overflow-x-hidden ${headerBackground()}`}>
        <nav className="mx-auto px-2 md:px-4 lg:px-8 cursor-default">
          <div className="relative flex h-24 items-center justify-between">
            {/* Logo na esquerda - sempre visível */}
            <div className="absolute left-2 md:left-8">
              <Link
                href={`/${locale}`}
                prefetch={true}
                className="flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Logo completa - apenas desktop (md e acima) */}
                <Image
                  src={isScrolled || !isHomePage ? "/logo/LOGO_UBERTI_MARROM_COMP.svg" : "/logo/LOGO_UBERTI_BRANCA_COMP.svg"}
                  alt="UBERTI"
                  width={280}
                  height={80}
                  className="hidden md:block h-16 w-auto transition-all duration-300"
                  priority
                />
                {/* Logo símbolo - apenas mobile (menor que md) */}
                <Image
                  src={isScrolled || !isHomePage ? "/logo/logo_marrom.svg" : "/logo/logo_branca.svg"}
                  alt="UBERTI"
                  width={56}
                  height={56}
                  className="md:hidden h-14 w-14 transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Container for icons (except hamburger) - centralizados no mobile, animação slide no desktop */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-28 flex items-center gap-6 md:gap-5 icons-container ${
                isScrolled ? 'scrolled' : 'not-scrolled'
              }`}
            >
              {/* Pesquisa - Segunda a aparecer */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-0 border-0 bg-transparent cursor-pointer group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                aria-label="Search"
              >
                <Search
                  className={`h-6 w-6 md:h-7 md:w-7 transition-all duration-300 ${iconColor}`}
                  strokeWidth={1}
                />
              </button>

              {/* Conta de Usuário - Terceira - APENAS DESKTOP */}
              <button
                onClick={() => setIsAccountMenuOpen(true)}
                className={`hidden md:block p-0 border-0 bg-transparent cursor-pointer group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                aria-label="Account"
              >
                <User
                  className={`h-7 w-7 transition-all duration-300 ${iconColor}`}
                  strokeWidth={1}
                />
              </button>

              {/* Sacola - Quarta */}
              <div
                className={`relative group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                <Link
                  href={`/${locale}/cart`}
                  className="relative block"
                >
                  <ShoppingBag
                    className={`h-6 w-6 md:h-7 md:w-7 transition-all duration-300 ${iconColor}`}
                    strokeWidth={1}
                  />
                  <span className={`absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full text-[10px] md:text-xs flex items-center justify-center font-medium ${
                    isScrolled || !isHomePage ? 'bg-gray-800 text-white' : 'bg-white text-black'
                  }`}>
                    0
                  </span>
                </Link>
              </div>
            </div>

            {/* Menu Hamburguer - fica fixo na direita */}
            <div className="absolute right-2 md:right-8 flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-0 border-0 bg-transparent cursor-pointer group"
                aria-label="Open menu"
              >
                <div className="flex flex-col gap-2">
                  <span className={`block h-[1px] w-8 transition-all duration-500 group-hover:translate-x-0.5 ${
                    isScrolled || !isHomePage ? 'bg-gray-800' : 'bg-white drop-shadow-lg'
                  } ${isLoaded ? 'animate-menu-line-1' : 'opacity-0'}`}></span>
                  <span className={`block h-[1px] w-8 transition-all duration-500 group-hover:-translate-x-0.5 ${
                    isScrolled || !isHomePage ? 'bg-gray-800' : 'bg-white drop-shadow-lg'
                  } ${isLoaded ? 'animate-menu-line-2' : 'opacity-0'}`}></span>
                  <span className={`block h-[1px] w-8 transition-all duration-500 group-hover:translate-x-0.5 ${
                    isScrolled || !isHomePage ? 'bg-gray-800' : 'bg-white drop-shadow-lg'
                  } ${isLoaded ? 'animate-menu-line-3' : 'opacity-0'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        locale={locale}
      />

      {/* Account Menu Overlay */}
      <AccountMenuOverlay
        isOpen={isAccountMenuOpen}
        onClose={() => setIsAccountMenuOpen(false)}
        locale={locale}
      />

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        locale={locale}
        staticNavigation={staticNavigation}
        languages={languages}
        currentLanguage={currentLanguage}
        onLanguageChange={(lang) => {
          const pathSegments = pathname.split('/');
          pathSegments[1] = lang.code;
          const newPath = pathSegments.join('/');
          router.push(newPath);
        }}
      />
    </>
  );
}