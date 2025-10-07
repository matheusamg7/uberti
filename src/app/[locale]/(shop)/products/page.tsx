'use client';

import { use, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProducts, mockCollections, mockCategories } from '@/lib/mock-data';

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const { locale: localeParam } = use(params);
  const locale = localeParam as 'en' | 'pt' | 'es';
  const searchParams = useSearchParams();

  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    searchParams.get('collection')
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [showFeatured, setShowFeatured] = useState<boolean>(
    searchParams.get('featured') === 'true'
  );
  const [sortBy, setSortBy] = useState<string>('newest');

  // Filter products based on selected filters
  let filteredProducts = [...mockProducts];

  if (selectedCollection) {
    const collection = mockCollections.find(c => c.slug === selectedCollection);
    if (collection) {
      filteredProducts = filteredProducts.filter(p => p.collection_id === collection.id);
    }
  }

  if (selectedCategory) {
    const category = mockCategories.find(c => c.slug === selectedCategory);
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category_id === category.id);
    }
  }

  if (showFeatured) {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }

  // Sort products
  switch (sortBy) {
    case 'newest':
      filteredProducts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    case 'oldest':
      filteredProducts.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      break;
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => {
        const aName = a[`name_${locale}` as keyof typeof a] as string;
        const bName = b[`name_${locale}` as keyof typeof b] as string;
        return aName.localeCompare(bName);
      });
      break;
  }

  const pageContent = {
    title: {
      en: 'All Products',
      pt: 'Todos os Produtos',
      es: 'Todos los Productos',
    },
    subtitle: {
      en: 'Discover our complete collection of handcrafted pieces.',
      pt: 'Descubra nossa coleção completa de peças artesanais.',
      es: 'Descubre nuestra colección completa de piezas artesanales.',
    },
    filters: {
      collection: { en: 'Collection', pt: 'Coleção', es: 'Colección' },
      category: { en: 'Category', pt: 'Categoria', es: 'Categoría' },
      sortBy: { en: 'Sort by', pt: 'Ordenar por', es: 'Ordenar por' },
      all: { en: 'All', pt: 'Todos', es: 'Todos' },
      featured: { en: 'Featured', pt: 'Destaques', es: 'Destacados' },
      showing: { en: 'Showing', pt: 'Mostrando', es: 'Mostrando' },
      products: { en: 'products', pt: 'produtos', es: 'productos' },
      clearFilters: { en: 'Clear Filters', pt: 'Limpar Filtros', es: 'Limpiar Filtros' },
      noProducts: {
        en: 'No products found with the selected filters.',
        pt: 'Nenhum produto encontrado com os filtros selecionados.',
        es: 'No se encontraron productos con los filtros seleccionados.',
      },
    },
    sort: {
      newest: { en: 'Newest First', pt: 'Mais Recentes', es: 'Más Recientes' },
      oldest: { en: 'Oldest First', pt: 'Mais Antigos', es: 'Más Antiguos' },
      'price-low': { en: 'Price: Low to High', pt: 'Preço: Menor para Maior', es: 'Precio: Menor a Mayor' },
      'price-high': { en: 'Price: High to Low', pt: 'Preço: Maior para Menor', es: 'Precio: Mayor a Menor' },
      name: { en: 'Name: A to Z', pt: 'Nome: A a Z', es: 'Nombre: A a Z' },
    },
  };

  const clearFilters = () => {
    setSelectedCollection(null);
    setSelectedCategory(null);
    setShowFeatured(false);
    setSortBy('newest');
    window.history.pushState({}, '', `/${locale}/products`);
  };

  const hasActiveFilters = selectedCollection || selectedCategory || showFeatured;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="display-2">
            {pageContent.title[locale]}
          </h1>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {pageContent.subtitle[locale]}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Collection Filter */}
            <div className="min-w-[150px]">
              <Select
                value={selectedCollection || 'all'}
                onValueChange={(value) => setSelectedCollection(value === 'all' ? null : value)}
              >
                <SelectTrigger className="btn-minimal">
                  <SelectValue placeholder={pageContent.filters.collection[locale]} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{pageContent.filters.all[locale]}</SelectItem>
                  {mockCollections.map((collection) => (
                    <SelectItem key={collection.id} value={collection.slug}>
                      {collection[`name_${locale}` as keyof typeof collection] as string}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="min-w-[150px]">
              <Select
                value={selectedCategory || 'all'}
                onValueChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
              >
                <SelectTrigger className="btn-minimal">
                  <SelectValue placeholder={pageContent.filters.category[locale]} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{pageContent.filters.all[locale]}</SelectItem>
                  {mockCategories.map((category) => (
                    <SelectItem key={category.id} value={category.slug}>
                      {category[`name_${locale}` as keyof typeof category] as string}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Featured Filter */}
            <Button
              variant={showFeatured ? 'default' : 'outline'}
              onClick={() => setShowFeatured(!showFeatured)}
              size="sm"
              className="btn-minimal"
            >
              {pageContent.filters.featured[locale]}
            </Button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                {pageContent.filters.clearFilters[locale]}
              </Button>
            )}
          </div>

          {/* Sort */}
          <div className="min-w-[200px]">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="btn-minimal">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(pageContent.sort).map(([key, labels]) => (
                  <SelectItem key={key} value={key}>
                    {labels[locale]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            {pageContent.filters.showing[locale]} {filteredProducts.length} {pageContent.filters.products[locale]}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
                priority={index < 8}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              {pageContent.filters.noProducts[locale]}
            </p>
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters}>
                {pageContent.filters.clearFilters[locale]}
              </Button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}