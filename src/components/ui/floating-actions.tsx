'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function FloatingActions() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 300);

      // Get viewport dimensions
      const viewportHeight = window.innerHeight;
      const scrollBottom = scrollY + viewportHeight;

      // Hero section: 0 to 100vh
      const heroEnd = viewportHeight;

      // Collections section: roughly 100vh to 200vh
      const collectionsEnd = viewportHeight * 2;

      // Featured products (gray bg): starts around 200vh
      const featuredStart = viewportHeight * 2;
      const featuredEnd = viewportHeight * 3;

      // Pampa video: around 300vh
      const pampaStart = viewportHeight * 3;
      const pampaEnd = viewportHeight * 3.6;

      // Check where we are
      if (scrollBottom < heroEnd + 100) {
        // Hero - dark bg, need white icons
        setIsLightBg(false);
      } else if (scrollBottom < collectionsEnd) {
        // Collections - dark images, need white icons
        setIsLightBg(false);
      } else if (scrollBottom >= featuredStart && scrollBottom < pampaEnd) {
        // Featured section has gray bg but before pampa
        if (scrollBottom >= pampaStart && scrollBottom <= pampaEnd) {
          // Pampa video - dark, need white
          setIsLightBg(false);
        } else {
          // Gray sections - need black icons
          setIsLightBg(true);
        }
      } else {
        // Everything else (cultura, croqui, onde encontrar) - light bg
        setIsLightBg(true);
      }
    };

    window.addEventListener('scroll', checkBackground);
    checkBackground(); // Check initial state

    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Icons: black on light backgrounds, white on dark
  const iconColor = isLightBg ? 'text-gray-800' : 'text-white drop-shadow-lg';
  const hoverColor = isLightBg ? 'hover:text-black' : 'hover:text-gray-200';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Arrow - Only show when scrolled */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-white" strokeWidth={1.5} />
        </button>
      )}

      {/* Message Icon with black background */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-black hover:bg-gray-800 transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer hover:scale-110 flex items-center justify-center"
        aria-label="Send Message"
      >
        <svg
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}