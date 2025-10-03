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
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className={`bg-white rounded-lg shadow-2xl max-w-md w-full transition-all duration-500 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header */}
          <div className="text-center pt-12 pb-8 px-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo/logo_marrom.svg"
                alt="UBERTI"
                width={180}
                height={70}
                className="h-20 w-auto"
                priority
              />
            </div>

            <h2
              className="text-3xl md:text-4xl font-light tracking-tight mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {selectedLanguage
                ? languages.find(l => l.code === selectedLanguage)?.welcome
                : languages.find(l => l.code === currentLocale)?.welcome || 'Welcome'}
            </h2>
            <p
              className="text-base font-light text-gray-600"
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
          <div className="px-8 pb-8 space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedLanguage === lang.code
                    ? 'border-black bg-black text-white scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-400 hover:scale-[1.01]'
                }`}
              >
                <span
                  className="text-lg font-light"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {lang.name}
                </span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="px-8 pb-8">
            <button
              onClick={handleContinue}
              disabled={!selectedLanguage}
              className={`w-full py-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                selectedLanguage
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Continue"
            >
              <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
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
