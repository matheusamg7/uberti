'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface FeaturedGridProps {
  products: Product[];
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function FeaturedGrid({ products, locale }: FeaturedGridProps) {
  const [, setHoveredProduct] = useState<string | null>(null);

  // Take only first 3 products
  const featuredProducts = products.slice(0, 3);

  // Helper to get product name based on locale
  const getProductName = (product: Product) => {
    switch(locale) {
      case 'pt': return product.name_pt || product.name_en || '';
      case 'es': return product.name_es || product.name_en || '';
      case 'fr': return product.name_en || ''; // fallback to English for French
      default: return product.name_en || '';
    }
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-2 flex md:flex-none overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0">
      {featuredProducts.map((product, index) => {
        const productName = getProductName(product);

        return (
          <div key={product.id} className="bg-white w-[calc(100vw-8rem)] max-w-[320px] md:w-auto md:max-w-none snap-center flex-shrink-0 md:flex-shrink">
            {/* Product Image - Only this has hover */}
            <Link
              href={`/${locale}/products/${product.id}`}
              className="block group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={productName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1800px) 33vw, 600px"
                  priority={index < 3}
                />
              </div>
            </Link>

            {/* Product Info - Below image, centered */}
            <div className="pt-4 pb-8 text-center bg-white">
              {/* Product Name */}
              <Link href={`/${locale}/products/${product.id}`}>
                <h3 className="text-base font-normal text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                  {productName}
                </h3>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}