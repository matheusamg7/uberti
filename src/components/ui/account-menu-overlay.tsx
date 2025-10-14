'use client';

import { useEffect } from 'react';
import { X, User, LogIn } from 'lucide-react';
import Link from 'next/link';

interface AccountMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function AccountMenuOverlay({
  isOpen,
  onClose,
  locale
}: AccountMenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const accountLabels = {
    en: {
      title: 'Account',
      myAccount: 'My Account',
      signIn: 'Sign In'
    },
    pt: {
      title: 'Conta',
      myAccount: 'Minha Conta',
      signIn: 'Entrar'
    },
    es: {
      title: 'Cuenta',
      myAccount: 'Mi Cuenta',
      signIn: 'Iniciar Sesión'
    },
    fr: {
      title: 'Compte',
      myAccount: 'Mon Compte',
      signIn: 'Connexion'
    }
  };

  const labels = accountLabels[locale];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel - Slides from right */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-[400px]`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-8 py-8 border-b border-gray-100 flex items-center justify-between">
            <h2
              className="text-2xl font-light tracking-wide text-gray-800"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {labels.title}
            </h2>
            <button
              onClick={onClose}
              className="p-0 transition-all duration-300 hover:opacity-70"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" strokeWidth={1} />
            </button>
          </div>

          {/* Account Links */}
          <nav className="flex-1 px-8 py-8">
            <div className="space-y-6">
              <Link
                href={`/${locale}/account`}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all group"
                onClick={onClose}
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <User className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                </div>
                <span
                  className="text-lg font-light text-gray-800"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {labels.myAccount}
                </span>
              </Link>

              <Link
                href={`/${locale}/login`}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all group"
                onClick={onClose}
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <LogIn className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
                </div>
                <span
                  className="text-lg font-light text-gray-800"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {labels.signIn}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
