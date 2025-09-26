'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/product';

interface FeaturedCarouselProps {
  products: Product[];
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function FeaturedCarousel({ products, locale }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const itemsToShow = 4; // Show 4 products at a time

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - itemsToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= products.length - itemsToShow ? 0 : prev + 1));
  };

  if (!isClient) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.slice(0, itemsToShow).map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale}
            priority={index < 2}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
            >
              <ProductCard
                product={product}
                locale={locale}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {products.length > itemsToShow && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors group"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800 group-hover:text-black" strokeWidth={1} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors group"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5 text-gray-800 group-hover:text-black" strokeWidth={1} />
          </button>
        </>
      )}
    </div>
  );
}