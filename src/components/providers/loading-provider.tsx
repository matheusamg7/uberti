'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { LoadingScreen } from '@/components/ui/loading-screen';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true); // Inicia como TRUE para loading aparecer primeiro
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initial loading (apenas na primeira vez)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Loading nas mudanças de rota (só depois do initial load)
  useEffect(() => {
    if (isInitialLoad) return; // Não executa no primeiro carregamento

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, isInitialLoad]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {/* Children só aparecem quando não está loading */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
}
