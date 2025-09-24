import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es';

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}