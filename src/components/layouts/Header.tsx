'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface HeaderProps {
  locale: 'en' | 'pt' | 'es';
}

const navigation = [
  { name: { en: 'Home', pt: 'Início', es: 'Inicio' }, href: '' },
  { name: { en: 'Collections', pt: 'Coleções', es: 'Colecciones' }, href: '/collections' },
  { name: { en: 'About', pt: 'Sobre', es: 'Acerca' }, href: '/about' },
  { name: { en: 'Blog', pt: 'Blog', es: 'Blog' }, href: '/blog' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-border/50'
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}`}
              className="font-serif text-2xl font-light tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              UBERTI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide"
              >
                {item.name[locale]}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="btn-minimal">
                  {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild>
                    <Link href={`/${lang.code}`}>
                      {lang.flag} {lang.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              className="btn-minimal"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="btn-minimal">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/account`}>
                    {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : 'My Account'}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${locale}/login`}>
                    {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="btn-minimal relative"
              aria-label="Shopping cart"
              asChild
            >
              <Link href={`/${locale}/cart`}>
                <ShoppingBag className="h-4 w-4" />
                {/* Cart count badge - will be populated dynamically */}
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center text-[10px]">
                  0
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden btn-minimal"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <Link
                    href={`/${locale}`}
                    className="font-serif text-xl font-light tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    UBERTI
                  </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <div className="space-y-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={`/${locale}${item.href}`}
                        className="block text-lg font-light text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name[locale]}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Account Links */}
                  <div className="mt-8 pt-6 border-t space-y-4">
                    <Link
                      href={`/${locale}/account`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'pt' ? 'Minha Conta' : locale === 'es' ? 'Mi Cuenta' : 'My Account'}
                    </Link>
                    <Link
                      href={`/${locale}/login`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'pt' ? 'Entrar' : locale === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                    </Link>
                  </div>
                </nav>

                {/* Mobile Bottom Actions */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    {/* Language Switcher */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {languages.map((lang) => (
                          <DropdownMenuItem key={lang.code} asChild>
                            <Link href={`/${lang.code}`}>
                              {lang.flag} {lang.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Cart & Search */}
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" aria-label="Search">
                        <Search className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="relative"
                        aria-label="Shopping cart"
                        asChild
                      >
                        <Link href={`/${locale}/cart`}>
                          <ShoppingBag className="h-4 w-4" />
                          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center text-[10px]">
                            0
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}