'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'pt' | 'es';
}

export function SearchModal({ isOpen, onClose, locale }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('uberti-recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    if (searchQuery.length < 2) return;

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/products/search?q=${encodeURIComponent(searchQuery)}&locale=${locale}&limit=20`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setSearchResults(data.data.products || []);
          }
        }
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, locale]);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;

    // Add to recent searches
    const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('uberti-recent-searches', JSON.stringify(newRecent));

    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    inputRef.current?.focus();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('uberti-recent-searches');
  };

  const searchPlaceholder = {
    en: 'Search products...',
    pt: 'Buscar produtos...',
    es: 'Buscar productos...',
  };

  const labels = {
    search: { en: 'Search', pt: 'Buscar', es: 'Buscar' },
    recentSearches: { en: 'Recent Searches', pt: 'Buscas Recentes', es: 'Búsquedas Recientes' },
    noResults: {
      en: 'No products found',
      pt: 'Nenhum produto encontrado',
      es: 'No se encontraron productos'
    },
    clear: { en: 'Clear', pt: 'Limpar', es: 'Limpiar' },
    viewAll: { en: 'View all results', pt: 'Ver todos os resultados', es: 'Ver todos los resultados' },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <h2>{labels.search[locale]}</h2>
        </DialogHeader>

        {/* Search Input */}
        <div className="border-b border-border/50 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder={searchPlaceholder[locale]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchQuery);
                }
              }}
              className="pl-10 pr-10 h-12 text-lg border-0 focus-visible:ring-0 bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">
                {locale === 'pt' ? 'Buscando...' : locale === 'es' ? 'Buscando...' : 'Searching...'}
              </span>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.slice(0, 6).map((product) => (
                  <div key={product.id} onClick={onClose}>
                    <ProductCard product={product} locale={locale} />
                  </div>
                ))}
              </div>

              {searchResults.length > 6 && (
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      window.location.href = `/${locale}/products?search=${encodeURIComponent(searchQuery)}`;
                      onClose();
                    }}
                  >
                    {labels.viewAll[locale]} ({searchResults.length})
                  </Button>
                </div>
              )}
            </div>
          ) : searchQuery.length >= 2 && !isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-center">
                {labels.noResults[locale]}
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                {locale === 'pt'
                  ? 'Tente usar palavras-chave diferentes'
                  : locale === 'es'
                  ? 'Intenta usar palabras clave diferentes'
                  : 'Try using different keywords'
                }
              </p>
            </div>
          ) : (
            /* Recent Searches */
            <div className="p-4">
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
                      {labels.recentSearches[locale]}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearRecentSearches}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      {labels.clear[locale]}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-sm transition-colors"
                      >
                        <Search className="inline h-3 w-3 mr-2" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Categories */}
              <div>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3">
                  {locale === 'pt' ? 'Categorias' : locale === 'es' ? 'Categorías' : 'Categories'}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'clothing', en: 'Clothing', pt: 'Vestuário', es: 'Ropa' },
                    { key: 'necklaces', en: 'Necklaces', pt: 'Colares', es: 'Collares' },
                    { key: 'accessories', en: 'Accessories', pt: 'Acessórios', es: 'Accesorios' },
                    { key: 'decoration', en: 'Decoration', pt: 'Decoração', es: 'Decoración' },
                  ].map((category) => (
                    <button
                      key={category.key}
                      onClick={() => {
                        window.location.href = `/${locale}/products?category=${category.key}`;
                        onClose();
                      }}
                      className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-sm transition-colors"
                    >
                      {category[locale as keyof typeof category]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}