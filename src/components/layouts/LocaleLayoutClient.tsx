'use client';

import { Header } from '@/components/layouts/Header';
import { LanguageWelcomeModal } from '@/components/ui/language-welcome-modal';

interface LocaleLayoutClientProps {
  locale: string;
  children: React.ReactNode;
}

export function LocaleLayoutClient({ locale, children }: LocaleLayoutClientProps) {
  return (
    <>
      <LanguageWelcomeModal currentLocale={locale} />
      <div className="min-h-screen flex flex-col">
        <Header locale={locale as 'en' | 'pt' | 'es' | 'fr'} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
