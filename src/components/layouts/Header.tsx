'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Search, ShoppingBag, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { SearchOverlay } from '@/components/ui/search-overlay';
import { MobileMenuOverlay } from '@/components/ui/mobile-menu-overlay';

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
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on the home page
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300); // Aumentado para 300px (aproximadamente 3 rolagens)
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger animations on load
    setTimeout(() => setIsLoaded(true), 100);

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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

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
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cursor-default ${headerBackground()}`}>
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 cursor-default">
          <div className="relative flex h-24 items-center justify-between">
            {/* Logo na esquerda - sempre visível */}
            <div className="absolute left-8">
              <Link
                href={`/${locale}`}
                prefetch={true}
                className="flex items-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={isScrolled || !isHomePage ? "/logo/LOGO_UBERTI_MARROM_COMP.svg" : "/logo/LOGO_UBERTI_BRANCA_COMP.svg"}
                  alt="UBERTI"
                  width={280}
                  height={80}
                  className="h-16 w-auto transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Container for icons (except hamburger) - smooth sliding animation to exact center */}
            <div
              className="absolute right-28 flex items-center gap-5 transition-transform duration-[900ms] ease-out"
              style={{
                transform: isScrolled ? 'translateX(calc(-50vw + 14rem))' : 'translateX(0)'
              }}
            >
              {/* Pesquisa - Segunda a aparecer */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-0 border-0 bg-transparent cursor-pointer group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.15s' }}
                aria-label="Search"
              >
                <Search
                  className={`h-7 w-7 transition-all duration-300 ${iconColor}`}
                  strokeWidth={1}
                />
              </button>

              {/* Conta de Usuário - Terceira */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`p-0 border-0 bg-transparent cursor-pointer group ${
                      isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '0.3s' }}
                  >
                    <User
                      className={`h-7 w-7 transition-all duration-300 ${iconColor}`}
                      strokeWidth={1}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white border border-gray-200 min-w-[180px] rounded-none shadow-lg p-0 mt-2"
                >
                  <DropdownMenuItem asChild className="rounded-none px-6 py-3 text-sm font-light tracking-wide hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                    <Link href={`/${locale}/account`} className="text-gray-800 hover:text-black transition-colors">
                      {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : locale === 'fr' ? 'Mon Compte' : 'My Account'}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-none px-6 py-3 text-sm font-light tracking-wide hover:bg-gray-50 focus:bg-gray-50 cursor-pointer border-t border-gray-100">
                    <Link href={`/${locale}/login`} className="text-gray-800 hover:text-black transition-colors">
                      {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : locale === 'fr' ? 'Connexion' : 'Sign In'}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sacola - Quarta */}
              <div
                className={`relative group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.45s' }}
              >
                <Link
                  href={`/${locale}/cart`}
                  className="relative block"
                >
                  <ShoppingBag
                    className={`h-7 w-7 transition-all duration-300 ${iconColor}`}
                    strokeWidth={1}
                  />
                  <span className={`absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs flex items-center justify-center font-medium ${
                    isScrolled || !isHomePage ? 'bg-gray-800 text-white' : 'bg-white text-black'
                  }`}>
                    0
                  </span>
                </Link>
              </div>
            </div>

            {/* Menu Hamburguer - fica fixo na direita */}
            <div className="absolute right-8 flex items-center">
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