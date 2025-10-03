import { Suspense } from 'react';
import { ProductCard } from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/mock-data';

interface SearchPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    q?: string;
  }>;
}

async function SearchResults({ locale, query }: { locale: string; query: string }) {
  // Mock: Em produção, fazer busca real
  const allProducts = mockProducts;
  const results = allProducts.filter((p) =>
    p.name_en.toLowerCase().includes(query.toLowerCase()) ||
    p.name_pt.toLowerCase().includes(query.toLowerCase()) ||
    p.name_es.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    return (
      <div className="text-center py-20">
        <p
          className="text-xl text-gray-600 mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {locale === 'pt' ? 'Nenhum resultado encontrado para' : locale === 'es' ? 'No se encontraron resultados para' : locale === 'fr' ? 'Aucun résultat trouvé pour' : 'No results found for'}{' '}
          <strong>&quot;{query}&quot;</strong>
        </p>
        <p className="text-gray-500 mb-8">
          {locale === 'pt' ? 'Tente buscar por outras palavras-chave' : locale === 'es' ? 'Intenta buscar con otras palabras clave' : locale === 'fr' ? 'Essayez de rechercher avec d\'autres mots-clés' : 'Try searching with different keywords'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {results.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale as 'en' | 'pt' | 'es' | 'fr'}
          />
        ))}
      </div>

      {/* Você também pode gostar */}
      <section className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-gray-200">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-8 sm:mb-12"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {locale === 'pt' ? 'Você também pode gostar' : locale === 'es' ? 'También te puede gustar' : locale === 'fr' ? 'Vous pourriez aussi aimer' : 'You might also like'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {allProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale as 'en' | 'pt' | 'es' | 'fr'}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { locale } = resolvedParams;
  const query = resolvedSearchParams.q || '';

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-light tracking-wide mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Resultados para' : locale === 'es' ? 'Resultados para' : locale === 'fr' ? 'Résultats pour' : 'Results for'}{' '}
            <span className="italic">&quot;{query}&quot;</span>
          </h1>
        </div>

        {/* Results */}
        <Suspense
          fallback={
            <div className="text-center py-20">
              <p className="text-gray-500">
                {locale === 'pt' ? 'Carregando...' : locale === 'es' ? 'Cargando...' : locale === 'fr' ? 'Chargement...' : 'Loading...'}
              </p>
            </div>
          }
        >
          <SearchResults locale={locale} query={query} />
        </Suspense>
      </div>
    </div>
  );
}
