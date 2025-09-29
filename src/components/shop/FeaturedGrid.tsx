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

  const ctaText = {
    en: 'View More',
    pt: 'Ver Mais',
    es: 'Ver Más',
    fr: 'Voir Plus',
  };

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
      {featuredProducts.map((product, index) => {
        const productName = getProductName(product);

        return (
          <div key={product.id} className="bg-white">
            {/* Product Image - Only this has hover */}
            <Link
              href={`/${locale}/products/${product.id}`}
              className="block group"
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

            {/* Product Info - Below image, centered (no hover here) */}
            <div className="pt-4 pb-8 text-center bg-white">
              {/* Product Name */}
              <h3 className="text-base font-normal mb-6 text-gray-800">
                {productName}
              </h3>

              {/* CTA Button */}
              <Link href={`/${locale}/products/${product.id}`}>
                <span className="inline-block px-10 py-3 border border-gray-900 text-gray-900 text-xs uppercase tracking-[0.25em] hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">
                  {ctaText[locale]}
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}