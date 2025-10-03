import { LocaleLayoutClient } from '@/components/layouts/LocaleLayoutClient';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <LocaleLayoutClient locale={locale}>
      {children}
    </LocaleLayoutClient>
  );
}