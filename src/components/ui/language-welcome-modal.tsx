'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface LanguageWelcomeModalProps {
  currentLocale: string;
}

const languages = [
  { code: 'en', name: 'English', welcome: 'Welcome' },
  { code: 'pt', name: 'Português', welcome: 'Bem-vindo' },
  { code: 'es', name: 'Español', welcome: 'Bienvenido' },
  { code: 'fr', name: 'Français', welcome: 'Bienvenue' },
];

export function LanguageWelcomeModal({ currentLocale }: LanguageWelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelected = localStorage.getItem('language-selected');

    if (!hasSelected) {
      // Small delay for better UX
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  // Block scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      // Prevent touch move on mobile
      const preventScroll = (e: TouchEvent) => {
        e.preventDefault();
      };
      document.body.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        document.body.removeEventListener('touchmove', preventScroll);
      };
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
  };

  const handleContinue = () => {
    if (!selectedLanguage) return;

    // Save to localStorage
    localStorage.setItem('language-selected', 'true');
    localStorage.setItem('preferred-language', selectedLanguage);

    // Close modal with animation
    setIsOpen(false);

    // Navigate to selected language
    if (selectedLanguage !== currentLocale) {
      const pathSegments = pathname.split('/');
      pathSegments[1] = selectedLanguage;
      const newPath = pathSegments.join('/');

      setTimeout(() => {
        router.push(newPath);
      }, 300);
    }
  };

  const handleClose = () => {
    // Close without changing language
    localStorage.setItem('language-selected', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div
          className={`bg-white rounded-lg shadow-2xl max-w-sm w-full transition-all duration-500 max-h-[90vh] overflow-y-auto ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header */}
          <div className="text-center pt-8 pb-6 px-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo/logo_marrom.svg"
                alt="UBERTI"
                width={140}
                height={55}
                className="h-14 w-auto"
                priority
              />
            </div>

            <h2
              className="text-2xl md:text-3xl font-light tracking-tight mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {selectedLanguage
                ? languages.find(l => l.code === selectedLanguage)?.welcome
                : languages.find(l => l.code === currentLocale)?.welcome || 'Welcome'}
            </h2>
            <p
              className="text-sm font-light text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {selectedLanguage
                ? languages.find(l => l.code === selectedLanguage)?.code === 'pt' ? 'Selecione seu idioma'
                  : languages.find(l => l.code === selectedLanguage)?.code === 'es' ? 'Seleccione su idioma'
                  : languages.find(l => l.code === selectedLanguage)?.code === 'fr' ? 'Sélectionnez votre langue'
                  : 'Select your language'
                : currentLocale === 'pt' ? 'Selecione seu idioma'
                : currentLocale === 'es' ? 'Seleccione su idioma'
                : currentLocale === 'fr' ? 'Sélectionnez votre langue'
                : 'Select your language'}
            </p>
          </div>

          {/* Language Options */}
          <div className="px-6 pb-6 space-y-2.5">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedLanguage === lang.code
                    ? 'border-black bg-black text-white scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-400 hover:scale-[1.01]'
                }`}
              >
                <span
                  className="text-base font-light"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {lang.name}
                </span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="px-6 pb-6">
            <button
              type="button"
              onClick={handleContinue}
              disabled={!selectedLanguage}
              className={`w-full py-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                selectedLanguage
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Continue"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
