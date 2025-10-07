import { Collection, Product, Category } from '@/types/product';

// Mock Collections Data
export const mockCollections: Collection[] = [
  {
    id: '1',
    slug: 'raizes',
    name_en: 'Roots',
    name_pt: 'Raízes',
    name_es: 'Raíces',
    description_en: 'A tribute to our origins, where tradition meets contemporary design',
    description_pt: 'Uma homenagem às nossas origens, onde a tradição encontra o design contemporâneo',
    description_es: 'Un homenaje a nuestros orígenes, donde la tradición encuentra el diseño contemporáneo',
    story_en: 'The Roots collection is born from a deep connection with the land and traditions of the Brazilian Pampa. Each piece tells the story of generations of artisans who kept ancestral techniques alive. Earth tones and organic textures celebrate the strength that comes from knowing where we come from.',
    story_pt: 'A coleção Raízes nasce de uma conexão profunda com a terra e as tradições do Pampa brasileiro. Cada peça conta a história de gerações de artesãos que mantiveram vivas técnicas ancestrais. Tons terrosos e texturas orgânicas celebram a força que vem de saber de onde viemos.',
    story_es: 'La colección Raíces nace de una conexión profunda con la tierra y las tradiciones del Pampa brasileño. Cada pieza cuenta la historia de generaciones de artesanos que mantuvieron vivas técnicas ancestrales. Tonos tierra y texturas orgánicas celebran la fuerza que viene de saber de dónde venimos.',
    hero_image: '/coleção 1/capa_raizes_colecao.png',
    is_active: true,
    display_order: 1,
    created_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    slug: 'favos',
    name_en: 'Honeycombs',
    name_pt: 'Favos',
    name_es: 'Panales',
    description_en: 'Inspired by nature\'s perfect geometry and the sweetness of life',
    description_pt: 'Inspirada na geometria perfeita da natureza e na doçura da vida',
    description_es: 'Inspirada en la geometría perfecta de la naturaleza y la dulzura de la vida',
    story_en: 'The Honeycombs collection draws inspiration from nature\'s most perfect structures. Like bees that meticulously build their honeycombs with mathematical precision, each piece is crafted with attention to detail and dedication. Golden and amber tones reference honey and sunlight, while geometric patterns create a unique visual language.',
    story_pt: 'A coleção Favos se inspira nas estruturas mais perfeitas da natureza. Como as abelhas que constroem meticulosamente seus favos com precisão matemática, cada peça é elaborada com atenção aos detalhes e dedicação. Tons dourados e âmbar fazem referência ao mel e à luz do sol, enquanto padrões geométricos criam uma linguagem visual única.',
    story_es: 'La colección Panales se inspira en las estructuras más perfectas de la naturaleza. Como las abejas que construyen meticulosamente sus panales con precisión matemática, cada pieza se elabora con atención al detalle y dedicación. Tonos dorados y ámbar hacen referencia a la miel y la luz del sol, mientras que los patrones geométricos crean un lenguaje visual único.',
    hero_image: '/coleção 2/capa_favos_colecao.png',
    is_active: true,
    display_order: 2,
    created_at: '2024-02-10T00:00:00Z',
  },
];

// Hierarchical Navigation Structure (Editorial Model - McQueen Style)
export const navigationMenu = [
  {
    id: 'women',
    slug: 'women',
    name: { en: 'WOMEN', pt: 'MULHER', es: 'MUJER', fr: 'FEMME' },
    subcategories: [
      { slug: 'coats', name: { en: 'Coats', pt: 'Casacos', es: 'Abrigos', fr: 'Manteaux' } },
      { slug: 'blouses', name: { en: 'Blouses', pt: 'Blusas', es: 'Blusas', fr: 'Chemisiers' } },
      { slug: 'sweaters', name: { en: 'Sweaters', pt: 'Blusões', es: 'Suéteres', fr: 'Pulls' } },
      { slug: 'pants', name: { en: 'Pants', pt: 'Calças', es: 'Pantalones', fr: 'Pantalons' } },
      { slug: 'shirts', name: { en: 'Shirts', pt: 'Camisas', es: 'Camisas', fr: 'Chemises' } },
      { slug: 'dresses', name: { en: 'Dresses', pt: 'Vestidos', es: 'Vestidos', fr: 'Robes' } },
      { slug: 'tunics', name: { en: 'Tunics', pt: 'Túnicas', es: 'Túnicas', fr: 'Tuniques' } },
      { slug: 'kimonos', name: { en: 'Kimonos', pt: 'Kimonos', es: 'Kimonos', fr: 'Kimonos' } },
      { slug: 'skirts', name: { en: 'Skirts', pt: 'Saias', es: 'Faldas', fr: 'Jupes' } },
    ]
  },
  {
    id: 'men',
    slug: 'men',
    name: { en: 'MEN', pt: 'HOMEM', es: 'HOMBRE', fr: 'HOMME' },
    subcategories: [
      { slug: 'shirts', name: { en: 'Shirts', pt: 'Camisas', es: 'Camisas', fr: 'Chemises' } },
      { slug: 'pants', name: { en: 'Pants', pt: 'Calças', es: 'Pantalones', fr: 'Pantalons' } },
      { slug: 'coats', name: { en: 'Coats', pt: 'Casacos', es: 'Abrigos', fr: 'Manteaux' } },
      { slug: 'sweaters', name: { en: 'Sweaters', pt: 'Blusões', es: 'Suéteres', fr: 'Pulls' } },
      { slug: 'kimonos', name: { en: 'Kimonos', pt: 'Kimonos', es: 'Kimonos', fr: 'Kimonos' } },
    ]
  },
  {
    id: 'accessories',
    slug: 'accessories',
    name: { en: 'ACCESSORIES', pt: 'ACESSÓRIOS', es: 'ACCESORIOS', fr: 'ACCESSOIRES' },
    subcategories: [
      { slug: 'necklaces', name: { en: 'Necklaces', pt: 'Colares', es: 'Collares', fr: 'Colliers' } },
      { slug: 'scarves', name: { en: 'Scarves', pt: 'Cachecóis', es: 'Bufandas', fr: 'Écharpes' } },
      { slug: 'pashminas', name: { en: 'Pashminas', pt: 'Pashminas', es: 'Pashminas', fr: 'Pashminas' } },
      { slug: 'blankets', name: { en: 'Blankets', pt: 'Mantas', es: 'Mantas', fr: 'Couvertures' } },
      { slug: 'leg-warmers', name: { en: 'Leg Warmers', pt: 'Polainas', es: 'Calentadores', fr: 'Jambières' } },
      { slug: 'bracelets', name: { en: 'Bracelets', pt: 'Pulseiras', es: 'Pulseras', fr: 'Bracelets' } },
    ]
  },
  {
    id: 'home',
    slug: 'home',
    name: { en: 'HOME', pt: 'CASA', es: 'HOGAR', fr: 'MAISON' },
    subcategories: [
      { slug: 'pillows', name: { en: 'Pillows', pt: 'Almofadas', es: 'Almohadas', fr: 'Coussins' } },
      { slug: 'table-runners', name: { en: 'Table Runners', pt: 'Trilhos de Mesa', es: 'Caminos de Mesa', fr: 'Chemins de Table' } },
      { slug: 'lamps', name: { en: 'Lamps', pt: 'Luminárias', es: 'Lámparas', fr: 'Lampes' } },
      { slug: 'table-necklaces', name: { en: 'Table Necklaces', pt: 'Colares de Mesa', es: 'Collares de Mesa', fr: 'Colliers de Table' } },
    ]
  },
  {
    id: 'art',
    slug: 'art',
    name: { en: 'ART', pt: 'ARTE', es: 'ARTE', fr: 'ART' },
    subcategories: [
      { slug: 'paintings', name: { en: 'Paintings', pt: 'Quadros', es: 'Cuadros', fr: 'Tableaux' } },
      { slug: 'textile-installations', name: { en: 'Textile Installations', pt: 'Instalações Têxteis', es: 'Instalaciones Textiles', fr: 'Installations Textiles' } },
      { slug: 'hybrid-sculptures', name: { en: 'Hybrid Sculptures', pt: 'Esculturas Híbridas', es: 'Esculturas Híbridas', fr: 'Sculptures Hybrides' } },
    ]
  },
];

// Mock Categories Data (kept for backward compatibility)
export const mockCategories: Category[] = [
  {
    id: 'cat-1',
    slug: 'clothing',
    name_en: 'Clothing',
    name_pt: 'Vestuário',
    name_es: 'Ropa',
    display_order: 1,
  },
  {
    id: 'cat-2',
    slug: 'decoration',
    name_en: 'Decoration',
    name_pt: 'Decoração',
    name_es: 'Decoración',
    display_order: 2,
  },
  {
    id: 'cat-3',
    slug: 'necklaces',
    name_en: 'Necklaces',
    name_pt: 'Colares',
    name_es: 'Collares',
    display_order: 3,
  },
  {
    id: 'cat-4',
    slug: 'accessories',
    name_en: 'Accessories',
    name_pt: 'Acessórios',
    name_es: 'Accesorios',
    display_order: 4,
  },
];

// Mock Products Data
export const mockProducts: Product[] = [
  // Raízes Collection Products
  {
    id: 'prod-1',
    sku: 'UBT-RZ-001',
    slug: 'poncho-terracota',
    collection_id: '1',
    category_id: 'cat-1',
    name_en: 'Terracotta Poncho',
    name_pt: 'Poncho Terracota',
    name_es: 'Poncho Terracota',
    description_en: 'Handwoven poncho in earth tones that celebrates gaucho traditions. Made with 100% natural Pampa wool, featuring geometric patterns inspired by ancestral designs.',
    description_pt: 'Poncho artesanal em tons terrosos que celebra as tradições gaúchas. Feito com 100% lã natural do Pampa, com padrões geométricos inspirados em desenhos ancestrais.',
    description_es: 'Poncho artesanal en tonos tierra que celebra las tradiciones gauchas. Hecho con 100% lana natural del Pampa, con patrones geométricos inspirados en diseños ancestrales.',
    price: 1200.00,
    stock_quantity: 8,
    images: [
      '/Helena_uberti_0158.jpg',
      '/Helena_uberti_0477.jpg',
      '/Helena_uberti_0421.jpg',
    ],
    sizes: ['Único'],
    is_active: true,
    featured: true,
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  {
    id: 'prod-2',
    sku: 'UBT-RZ-002',
    slug: 'manta-raizes',
    collection_id: '1',
    category_id: 'cat-4',
    name_en: 'Roots Blanket',
    name_pt: 'Manta Raízes',
    name_es: 'Manta Raíces',
    description_en: 'Luxurious wool blanket with traditional patterns. Perfect for adding warmth and authenticity to any space. Each piece tells a story of generations.',
    description_pt: 'Manta de lã luxuosa com padrões tradicionais. Perfeita para adicionar calor e autenticidade a qualquer ambiente. Cada peça conta uma história de gerações.',
    description_es: 'Manta de lana lujosa con patrones tradicionales. Perfecta para agregar calidez y autenticidad a cualquier espacio. Cada pieza cuenta una historia de generaciones.',
    price: 850.00,
    stock_quantity: 12,
    images: [
      '/Helena_uberti_0477.jpg',
      '/Helena_uberti_0158.jpg',
    ],
    sizes: null,
    is_active: true,
    featured: true,
    created_at: '2024-01-22T00:00:00Z',
    updated_at: '2024-01-22T00:00:00Z',
  },

  // Favos Collection Products
  {
    id: 'prod-3',
    sku: 'UBT-FV-001',
    slug: 'kimono-dourado',
    collection_id: '2',
    category_id: 'cat-1',
    name_en: 'Golden Kimono',
    name_pt: 'Kimono Dourado',
    name_es: 'Kimono Dorado',
    description_en: 'Flowing kimono with honeycomb-inspired geometric patterns in golden tones. A masterpiece that combines tradition with contemporary design.',
    description_pt: 'Kimono fluido com padrões geométricos inspirados em favos em tons dourados. Uma obra-prima que combina tradição com design contemporâneo.',
    description_es: 'Kimono fluido con patrones geométricos inspirados en panales en tonos dorados. Una obra maestra que combina tradición con diseño contemporáneo.',
    price: 1450.00,
    stock_quantity: 6,
    images: [
      '/Helena_uberti_0421.jpg',
      '/Helena_uberti_0477.jpg',
      '/Helena_uberti_0158.jpg',
    ],
    sizes: ['Único'],
    is_active: true,
    featured: true,
    created_at: '2024-02-15T00:00:00Z',
    updated_at: '2024-02-15T00:00:00Z',
  },
  {
    id: 'prod-4',
    sku: 'UBT-FV-002',
    slug: 'cachecol-geometrico',
    collection_id: '2',
    category_id: 'cat-4',
    name_en: 'Geometric Scarf',
    name_pt: 'Cachecol Geométrico',
    name_es: 'Bufanda Geométrica',
    description_en: 'Handcrafted scarf with honeycomb patterns in amber tones. Soft natural wool that provides warmth with unparalleled elegance.',
    description_pt: 'Cachecol artesanal com padrões de favos em tons âmbar. Lã natural macia que proporciona calor com elegância incomparável.',
    description_es: 'Bufanda artesanal con patrones de panales en tonos ámbar. Lana natural suave que proporciona calor con elegancia incomparable.',
    price: 480.00,
    stock_quantity: 15,
    images: [
      '/Helena_uberti_0477.jpg',
      '/Helena_uberti_0421.jpg',
    ],
    sizes: null,
    is_active: true,
    featured: false,
    created_at: '2024-02-20T00:00:00Z',
    updated_at: '2024-02-20T00:00:00Z',
  },
];

// Helper functions
export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return mockCollections.find(collection => collection.slug === slug);
};

export const getProductsByCollection = (collectionId: string): Product[] => {
  return mockProducts.filter(product => product.collection_id === collectionId);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = mockCategories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return mockProducts.filter(product => product.category_id === category.id);
};

export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return mockProducts.find(product => product.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name_en.toLowerCase().includes(searchTerm) ||
    product.name_pt.toLowerCase().includes(searchTerm) ||
    product.name_es.toLowerCase().includes(searchTerm) ||
    product.sku.toLowerCase().includes(searchTerm) ||
    (product.description_en && product.description_en.toLowerCase().includes(searchTerm)) ||
    (product.description_pt && product.description_pt.toLowerCase().includes(searchTerm)) ||
    (product.description_es && product.description_es.toLowerCase().includes(searchTerm))
  );
};