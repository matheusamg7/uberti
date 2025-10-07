'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { LanguageWelcomeModal } from '@/components/ui/language-welcome-modal';

interface LocaleLayoutClientProps {
  locale: string;
  children: React.ReactNode;
}

export function LocaleLayoutClient({ locale, children }: LocaleLayoutClientProps) {
  const pathname = usePathname();

  // Check if we're on the home page - no padding needed
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <>
      <LanguageWelcomeModal currentLocale={locale} />
      <div className="min-h-screen flex flex-col">
        <Header locale={locale as 'en' | 'pt' | 'es' | 'fr'} />
        <main className={`flex-1 ${isHomePage ? '' : 'pt-24'}`}>
          {children}
        </main>
        <Footer locale={locale as 'en' | 'pt' | 'es' | 'fr'} />
      </div>
    </>
  );
}
