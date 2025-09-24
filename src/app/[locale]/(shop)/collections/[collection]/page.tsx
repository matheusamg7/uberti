'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import { CollectionHero } from '@/components/shop/CollectionHero';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { getCollectionBySlug, getProductsByCollection, mockCategories } from '@/lib/mock-data';

interface CollectionPageProps {
  params: { locale: string; collection: string };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const locale = params.locale as 'en' | 'pt' | 'es';
  const collection = getCollectionBySlug(params.collection);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (!collection) {
    notFound();
  }

  const allProducts = getProductsByCollection(collection.id);
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => {
        const category = mockCategories.find(cat => cat.id === product.category_id);
        return category?.slug === selectedCategory;
      })
    : allProducts;

  // Get categories that have products in this collection
  const availableCategories = mockCategories.filter(category =>
    allProducts.some(product => product.category_id === category.id)
  );

  const filterLabels = {
    all: { en: 'All', pt: 'Todos', es: 'Todos' },
    products: { en: 'Products', pt: 'Produtos', es: 'Productos' },
    showing: { en: 'Showing', pt: 'Mostrando', es: 'Mostrando' },
    of: { en: 'of', pt: 'de', es: 'de' },
  };

  return (
    <div>
      {/* Collection Hero */}
      <CollectionHero
        collection={collection}
        locale={locale}
        onExploreProducts={() => {
          const productsSection = document.getElementById('products');
          if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Products Section */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Filters */}
        {availableCategories.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
                size="sm"
                className="btn-minimal"
              >
                {filterLabels.all[locale]}
              </Button>
              {availableCategories.map((category) => {
                const categoryName = category[`name_${locale}` as keyof typeof category] as string;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.slug ? null : category.slug
                    )}
                    size="sm"
                    className="btn-minimal"
                  >
                    {categoryName}
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {/* Products Count */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            {filterLabels.showing[locale]} {filteredProducts.length} {filterLabels.of[locale]} {allProducts.length} {filterLabels.products[locale].toLowerCase()}
          </p>
        </div>

        {/* Products Grid */}
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
            <p className="text-muted-foreground">
              {locale === 'pt'
                ? 'Nenhum produto encontrado nesta categoria.'
                : locale === 'es'
                ? 'No se encontraron productos en esta categoría.'
                : 'No products found in this category.'
              }
            </p>
          </div>
        )}

        {/* Back to Collections */}
        <div className="mt-16 text-center">
          <Button variant="outline" asChild>
            <a href={`/${locale}/collections`}>
              {locale === 'pt'
                ? '← Ver Todas as Coleções'
                : locale === 'es'
                ? '← Ver Todas las Colecciones'
                : '← View All Collections'
              }
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}