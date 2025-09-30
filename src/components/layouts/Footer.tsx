import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterProps {
  locale: 'en' | 'pt' | 'es';
}

const footerLinks = {
  collections: {
    title: { en: 'Collections', pt: 'Coleções', es: 'Colecciones' },
    links: [
      { name: { en: 'Bergamot', pt: 'Bergamota', es: 'Bergamota' }, href: '/collections/bergamota' },
      { name: { en: 'Storm', pt: 'Tempestade', es: 'Tormenta' }, href: '/collections/tempestade' },
      { name: { en: 'Aurora', pt: 'Aurora', es: 'Aurora' }, href: '/collections/aurora' },
    ]
  },
  categories: {
    title: { en: 'Categories', pt: 'Categorias', es: 'Categorías' },
    links: [
      { name: { en: 'Clothing', pt: 'Vestuário', es: 'Ropa' }, href: '/products?category=clothing' },
      { name: { en: 'Decoration', pt: 'Decoração', es: 'Decoración' }, href: '/products?category=decoration' },
      { name: { en: 'Necklaces', pt: 'Colares', es: 'Collares' }, href: '/products?category=necklaces' },
      { name: { en: 'Accessories', pt: 'Acessórios', es: 'Accesorios' }, href: '/products?category=accessories' },
    ]
  },
  support: {
    title: { en: 'Support', pt: 'Suporte', es: 'Soporte' },
    links: [
      { name: { en: 'Contact Us', pt: 'Contato', es: 'Contacto' }, href: '/contact' },
      { name: { en: 'Size Guide', pt: 'Guia de Tamanhos', es: 'Guía de Tallas' }, href: '/size-guide' },
      { name: { en: 'Shipping', pt: 'Envios', es: 'Envío' }, href: '/shipping' },
      { name: { en: 'Returns', pt: 'Devoluções', es: 'Devoluciones' }, href: '/returns' },
    ]
  },
  company: {
    title: { en: 'Company', pt: 'Empresa', es: 'Empresa' },
    links: [
      { name: { en: 'About Helena', pt: 'Sobre Helena', es: 'Sobre Helena' }, href: '/about' },
      { name: { en: 'Our Story', pt: 'Nossa História', es: 'Nuestra Historia' }, href: '/about#story' },
      { name: { en: 'Sustainability', pt: 'Sustentabilidade', es: 'Sostenibilidad' }, href: '/sustainability' },
      { name: { en: 'Press', pt: 'Imprensa', es: 'Prensa' }, href: '/press' },
    ]
  }
};

const contactInfo = {
  email: 'hello@uberti.com',
  phone: '+55 11 99999-9999',
  address: {
    en: 'São Paulo, Brazil',
    pt: 'São Paulo, Brasil',
    es: 'São Paulo, Brasil'
  }
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/uberti' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/uberti' },
];

const newsletterText = {
  title: {
    en: 'Subscribe to our newsletter',
    pt: 'Assine nossa newsletter',
    es: 'Suscríbete a nuestro boletín'
  },
  description: {
    en: 'Be the first to know about new collections and exclusive events.',
    pt: 'Seja o primeiro a saber sobre novas coleções e eventos exclusivos.',
    es: 'Sé el primero en conocer las nuevas colecciones y eventos exclusivos.'
  },
  placeholder: {
    en: 'Enter your email',
    pt: 'Digite seu email',
    es: 'Ingresa tu email'
  },
  button: {
    en: 'Subscribe',
    pt: 'Assinar',
    es: 'Suscribirse'
  }
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <Link
              href={`/${locale}`}
              className="font-serif text-2xl font-light tracking-wider text-foreground"
            >
              UBERTI
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {locale === 'pt'
                ? 'Peças artesanais que misturam elegância com narrativas únicas, criadas por Helena com paixão e dedicação.'
                : locale === 'es'
                ? 'Piezas artesanales que mezclan elegancia con narrativas únicas, creadas por Helena con pasión y dedicación.'
                : 'Handcrafted pieces that blend elegance with unique storytelling, created by Helena with passion and dedication.'
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-foreground transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3" />
                <span>{contactInfo.address[locale]}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Collections */}
              <div>
                <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">
                  {footerLinks.collections.title[locale]}
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.collections.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">
                  {footerLinks.categories.title[locale]}
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.categories.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Support */}
              <div>
                <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">
                  {footerLinks.support.title[locale]}
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.support.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">
                  {footerLinks.company.title[locale]}
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.company.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="max-w-md">
            <h3 className="text-sm font-medium text-foreground tracking-wide uppercase">
              {newsletterText.title[locale]}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {newsletterText.description[locale]}
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder={newsletterText.placeholder[locale]}
                className="flex-1"
                required
              />
              <Button type="submit" className="btn-minimal">
                {newsletterText.button[locale]}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} UBERTI. {' '}
                {locale === 'pt'
                  ? 'Todos os direitos reservados.'
                  : locale === 'es'
                  ? 'Todos los derechos reservados.'
                  : 'All rights reserved.'
                }
              </p>
            </div>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {locale === 'pt'
                  ? 'Política de Privacidade'
                  : locale === 'es'
                  ? 'Política de Privacidad'
                  : 'Privacy Policy'
                }
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {locale === 'pt'
                  ? 'Termos de Uso'
                  : locale === 'es'
                  ? 'Términos de Uso'
                  : 'Terms of Service'
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}