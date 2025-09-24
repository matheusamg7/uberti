import { Inter } from 'next/font/google';

// Fonte principal - Inter (limpa e moderna)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

// Classes CSS combinadas para usar no layout root
export const fontClasses = `${inter.variable}`;