import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pt', 'es', 'fr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number];

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({
  locales,
  defaultLocale,
});

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const possibleLocale = segments[1];

  return locales.includes(possibleLocale as Locale)
    ? (possibleLocale as Locale)
    : defaultLocale;
}