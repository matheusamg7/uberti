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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-center gap-2 md:gap-3">
      {/* Scroll to Top Arrow - Only show when scrolled */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black transition-all duration-300 opacity-90 cursor-pointer flex items-center justify-center hover:opacity-100"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={1.5} />
        </button>
      )}

      {/* Message Icon with black background */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-black transition-all duration-300 opacity-90 cursor-pointer flex items-center justify-center hover:opacity-100"
        aria-label="Send Message"
      >
        <svg
          className="h-6 w-6 md:h-8 md:w-8"
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