'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function FloatingActions() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 300);
    };

    window.addEventListener('scroll', checkBackground);
    checkBackground(); // Check initial state

    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Arrow - Only show when scrolled */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-black transition-all duration-300 opacity-90 cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-white" strokeWidth={1.5} />
        </button>
      )}

      {/* Message Icon with black background */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-black transition-all duration-300 opacity-90 cursor-pointer flex items-center justify-center"
        aria-label="Send Message"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-6.5L9 21v-4H5c-1.1 0-2-.9-2-2V5z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}