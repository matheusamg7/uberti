'use client';

import Image from 'next/image';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#FEFDFE] flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo/LOGO_UBERTI_MARROM_COMP.svg"
          alt="UBERTI"
          width={200}
          height={80}
          className="h-20 w-auto"
          priority
        />
      </div>

      {/* Loading Dots - Refinados e menores */}
      <div className="flex gap-1.5">
        <div className="dot w-1.5 h-1.5 bg-[#422B21] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="dot w-1.5 h-1.5 bg-[#422B21] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="dot w-1.5 h-1.5 bg-[#422B21] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        .dot {
          animation: bounce 1.4s infinite ease-in-out both;
        }
      `}</style>
    </div>
  );
}
