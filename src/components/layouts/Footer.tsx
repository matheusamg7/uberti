'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function Footer({ locale }: FooterProps) {
  const content = {
    shop: {
      title: {
        en: 'Shop',
        pt: 'Loja',
        es: 'Tienda',
        fr: 'Boutique',
      },
      links: [
        {
          label: { en: 'All Products', pt: 'Todos os Produtos', es: 'Todos los Productos', fr: 'Tous les Produits' },
          href: '/products',
        },
        {
          label: { en: 'Collections', pt: 'Coleções', es: 'Colecciones', fr: 'Collections' },
          href: '/collections',
        },
        {
          label: { en: 'New Arrivals', pt: 'Novidades', es: 'Novedades', fr: 'Nouveautés' },
          href: '/products?filter=new',
        },
      ],
    },
    about: {
      title: {
        en: 'About',
        pt: 'Sobre',
        es: 'Acerca de',
        fr: 'À Propos',
      },
      links: [
        {
          label: { en: 'Our Story', pt: 'Nossa História', es: 'Nuestra Historia', fr: 'Notre Histoire' },
          href: '/about',
        },
        {
          label: { en: 'Sustainability', pt: 'Sustentabilidade', es: 'Sostenibilidad', fr: 'Durabilité' },
          href: '/sustainability',
        },
        {
          label: { en: 'Press', pt: 'Imprensa', es: 'Prensa', fr: 'Presse' },
          href: '/press',
        },
        {
          label: { en: 'Journal', pt: 'Diário', es: 'Diario', fr: 'Journal' },
          href: '/blog',
        },
      ],
    },
    support: {
      title: {
        en: 'Support',
        pt: 'Suporte',
        es: 'Soporte',
        fr: 'Support',
      },
      links: [
        {
          label: { en: 'Contact', pt: 'Contato', es: 'Contacto', fr: 'Contact' },
          href: '/contact',
        },
        {
          label: { en: 'Size Guide', pt: 'Guia de Tamanhos', es: 'Guía de Tallas', fr: 'Guide des Tailles' },
          href: '/size-guide',
        },
        {
          label: { en: 'Shipping', pt: 'Envio', es: 'Envío', fr: 'Livraison' },
          href: '/shipping',
        },
        {
          label: { en: 'Returns', pt: 'Devoluções', es: 'Devoluciones', fr: 'Retours' },
          href: '/returns',
        },
      ],
    },
    legal: {
      title: {
        en: 'Legal',
        pt: 'Legal',
        es: 'Legal',
        fr: 'Légal',
      },
      links: [
        {
          label: { en: 'Privacy Policy', pt: 'Política de Privacidade', es: 'Política de Privacidad', fr: 'Politique de Confidentialité' },
          href: '/privacy',
        },
        {
          label: { en: 'Terms of Service', pt: 'Termos de Serviço', es: 'Términos de Servicio', fr: 'Conditions d\'Utilisation' },
          href: '/terms',
        },
      ],
    },
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Top Section - Logo + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/logo/logo_branca.svg"
                alt="Helena Uberti"
                width={80}
                height={80}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.shop.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.shop.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.about.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.about.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.support.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              {content.legal.title[locale]}
            </h3>
            <ul className="space-y-3">
              {content.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              © {new Date().getFullYear()} Helena Uberti. {locale === 'pt' ? 'Todos os direitos reservados.' : locale === 'es' ? 'Todos los derechos reservados.' : locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-6">
              {/* Social Media Links */}
              <a
                href="https://instagram.com/helenauberti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
