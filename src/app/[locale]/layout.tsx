import { Header } from '@/components/layouts/Header';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as 'en' | 'pt' | 'es' | 'fr';

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}