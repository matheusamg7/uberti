'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, User, Instagram, Phone, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';

interface HeaderProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

const navigation = [
  { name: { en: 'Home', pt: 'Início', es: 'Inicio', fr: 'Accueil' }, href: '' },
  { name: { en: 'Collections', pt: 'Coleções', es: 'Colecciones', fr: 'Collections' }, href: '/collections' },
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
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300); // Aumentado para 300px (aproximadamente 3 rolagens)
      setIsAtTop(window.scrollY < 10);
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

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBackground()}`}>
        <nav className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            {/* Logo na esquerda - sempre visível */}
            <div className="absolute left-8">
              <Link
                href={`/${locale}`}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src={isScrolled || !isHomePage ? "/logo/logo_marrom.svg" : "/logo/logo_branca.svg"}
                  alt="UBERTI"
                  width={200}
                  height={75}
                  className="h-20 w-auto transition-opacity duration-300"
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
                <DropdownMenuContent align="end" className="bg-white border-gray-200 min-w-[160px]">
                  <DropdownMenuItem asChild>
                    <Link href={`/${locale}/account`} className="text-gray-800 hover:text-black">
                      {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : locale === 'fr' ? 'Mon Compte' : 'My Account'}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/${locale}/login`} className="text-gray-800 hover:text-black">
                      {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : locale === 'fr' ? 'Connexion' : 'Sign In'}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Carrinho - Quarta */}
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
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
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
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] bg-white p-0">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    {/* Logo no Menu */}
                    <div className="px-8 py-8 border-b border-gray-100">
                      <Link
                        href={`/${locale}`}
                        onClick={() => setIsMobileMenuOpen(false)}
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
                    </div>

                    {/* Navegação Principal */}
                    <nav className="flex-1 overflow-y-auto">
                      <div className="px-8 py-8">
                        {navigation.map((item, index) => (
                          <Link
                            key={item.href}
                            href={`/${locale}${item.href}`}
                            className="block py-4 text-lg font-light text-gray-800 hover:text-black transition-colors border-b border-gray-100 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name[locale]}
                          </Link>
                        ))}
                      </div>

                      {/* Links de Conta */}
                      <div className="px-8 pb-8 border-t border-gray-100 pt-8">
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                          {locale === 'pt' ? 'Conta' : locale === 'es' ? 'Cuenta' : locale === 'fr' ? 'Compte' : 'Account'}
                        </h3>
                        <Link
                          href={`/${locale}/account`}
                          className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : locale === 'fr' ? 'Mon Compte' : 'My Account'}
                        </Link>
                        <Link
                          href={`/${locale}/login`}
                          className="block py-2 text-sm text-gray-700 hover:text-black transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : locale === 'fr' ? 'Connexion' : 'Sign In'}
                        </Link>
                      </div>
                    </nav>

                    {/* Footer do Menu */}
                    <div className="border-t border-gray-100 px-8 py-6 space-y-6">
                      {/* Contatos */}
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
                            <Instagram className="h-7 w-7 text-gray-700" strokeWidth={1} />
                          </a>
                          <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:opacity-70"
                          >
                            {/* WhatsApp Icon */}
                            <svg
                              className="h-7 w-7 text-gray-700"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                fill="currentColor"
                                strokeWidth="0.1"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Seletor de Idioma */}
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                          {locale === 'pt' ? 'Idioma' : locale === 'es' ? 'Idioma' : locale === 'fr' ? 'Langue' : 'Language'}
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => {
                                const currentPath = window.location.pathname;
                                const pathSegments = currentPath.split('/');
                                pathSegments[1] = lang.code;
                                window.location.pathname = pathSegments.join('/');
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
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}