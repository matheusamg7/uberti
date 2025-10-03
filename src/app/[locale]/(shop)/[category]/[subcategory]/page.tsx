import { CategoryBanner } from '@/components/shop/category-banner';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { ProductCard } from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/mock-data';
import Image from 'next/image';

interface CategorySubcategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
  }>;
}

export default async function CategorySubcategoryPage({ params }: CategorySubcategoryPageProps) {
  const resolvedParams = await params;
  const { locale, category, subcategory } = resolvedParams;

  // Mock: Pegar produtos (em produção, filtrar por categoria/subcategoria)
  const allProducts = mockProducts;
  const products = allProducts.slice(0, 9); // Limitar para exemplo

  // Banner images mockados (você vai substituir com banners reais)
  const bannerImages: Record<string, string> = {
    'women-coats': '/banners/hero_banner_1.png',
    'women-dresses': '/banners/hero_banner_2.png',
    'men-shirts': '/banners/hero_banner_1.png',
    default: '/banners/hero_banner_1.png',
  };

  const bannerKey = `${category}-${subcategory}`;
  const bannerSrc = bannerImages[bannerKey] || bannerImages.default;

  const breadcrumbItems = [
    {
      label: category.charAt(0).toUpperCase() + category.slice(1),
      href: `/${locale}/${category}`,
    },
    {
      label: subcategory.charAt(0).toUpperCase() + subcategory.slice(1),
      href: `/${locale}/${category}/${subcategory}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Banner Hero */}
      <CategoryBanner
        category={category}
        subcategory={subcategory}
        imageSrc={bannerSrc}
        locale={locale as 'en' | 'pt' | 'es' | 'fr'}
      />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} locale={locale} />

        {/* Title & Count */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h1
              className="text-3xl md:text-4xl font-light tracking-wide capitalize mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {subcategory.replace(/-/g, ' ')}
            </h1>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {products.length} {locale === 'pt' ? 'produtos encontrados' : locale === 'es' ? 'productos encontrados' : locale === 'fr' ? 'produits trouvés' : 'products found'}
            </p>
          </div>

          {/* Filtros (futuro) */}
          <button className="px-4 py-2 border border-gray-300 rounded hover:border-gray-400 transition-colors text-sm">
            {locale === 'pt' ? 'Filtros' : locale === 'es' ? 'Filtros' : locale === 'fr' ? 'Filtres' : 'Filters'}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale as 'en' | 'pt' | 'es' | 'fr'}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
            {locale === 'pt' ? 'Carregar mais produtos' : locale === 'es' ? 'Cargar más productos' : locale === 'fr' ? 'Charger plus de produits' : 'Load more products'}
          </button>
        </div>
      </div>

      {/* Editorial Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/banners/pampa_banner.png"
          alt="Editorial banner"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {locale === 'pt' ? 'Cada peça conta uma história' : locale === 'es' ? 'Cada pieza cuenta una historia' : locale === 'fr' ? 'Chaque pièce raconte une histoire' : 'Each piece tells a story'}
          </h2>
        </div>
      </section>
    </div>
  );
}
