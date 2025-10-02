import { Collection, Product, Category } from '@/types/product';

// Mock Collections Data
export const mockCollections: Collection[] = [
  {
    id: '1',
    slug: 'bergamota',
    name_en: 'Bergamot',
    name_pt: 'Bergamota',
    name_es: 'Bergamota',
    description_en: 'A collection inspired by the fresh essence of bergamot, bringing lightness and elegance to everyday pieces.',
    description_pt: 'Uma coleção inspirada na essência fresca da bergamota, trazendo leveza e elegância para peças do dia a dia.',
    description_es: 'Una colección inspirada en la esencia fresca de bergamota, aportando ligereza y elegancia a las piezas cotidianas.',
    story_en: 'The Bergamot collection was born from Helena\'s morning walks through the citrus groves of southern Italy. Each piece captures the delicate balance between freshness and sophistication, much like the bergamot fruit itself - bold yet refined. The flowing silhouettes and natural textures tell a story of simplicity that speaks volumes.',
    story_pt: 'A coleção Bergamota nasceu das caminhadas matinais de Helena pelos pomares de cítricos do sul da Itália. Cada peça captura o delicado equilíbrio entre frescor e sofisticação, muito parecido com a própria fruta bergamota - audaciosa, mas refinada. As silhuetas fluidas e texturas naturais contam uma história de simplicidade que fala muito.',
    story_es: 'La colección Bergamota nació de los paseos matutinos de Helena por los huertos de cítricos del sur de Italia. Cada pieza captura el delicado equilibrio entre frescura y sofisticación, muy parecido a la propia fruta bergamota: audaz pero refinada. Las siluetas fluidas y las texturas naturales cuentan una historia de simplicidad que habla mucho.',
    hero_image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=800&fit=crop',
    is_active: true,
    display_order: 1,
    created_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    slug: 'tempestade',
    name_en: 'Storm',
    name_pt: 'Tempestade',
    name_es: 'Tormenta',
    description_en: 'Dramatic pieces that embody the raw power and beauty of nature\'s most intense moments.',
    description_pt: 'Peças dramáticas que incorporam o poder bruto e a beleza dos momentos mais intensos da natureza.',
    description_es: 'Piezas dramáticas que encarnan el poder crudo y la belleza de los momentos más intensos de la naturaleza.',
    story_en: 'Born from Helena\'s fascination with the dramatic skies over the Atlantic coast, the Storm collection represents transformation and power. Each garment is designed to move like wind and water, creating poetry in motion. The darker palette and structured silhouettes reflect the duality of destruction and creation that storms represent.',
    story_pt: 'Nascida da fascinação de Helena pelos céus dramáticos da costa atlântica, a coleção Tempestade representa transformação e poder. Cada peça é projetada para se mover como vento e água, criando poesia em movimento. A paleta mais escura e silhuetas estruturadas refletem a dualidade de destruição e criação que as tempestades representam.',
    story_es: 'Nacida de la fascinación de Helena por los cielos dramáticos de la costa atlántica, la colección Tormenta representa transformación y poder. Cada prenda está diseñada para moverse como el viento y el agua, creando poesía en movimiento. La paleta más oscura y las siluetas estructuradas reflejan la dualidad de destrucción y creación que representan las tormentas.',
    hero_image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    is_active: true,
    display_order: 2,
    created_at: '2024-02-10T00:00:00Z',
  },
  {
    id: '3',
    slug: 'aurora',
    name_en: 'Aurora',
    name_pt: 'Aurora',
    name_es: 'Aurora',
    description_en: 'Ethereal pieces inspired by the first light of dawn, capturing hope and new beginnings.',
    description_pt: 'Peças etéreas inspiradas na primeira luz do amanhecer, capturando esperança e novos começos.',
    description_es: 'Piezas etéreas inspiradas en la primera luz del amanecer, capturando esperanza y nuevos comienzos.',
    story_en: 'The Aurora collection emerged from Helena\'s early morning meditations, watching the sun paint the sky in soft pastels. These pieces embody renewal and possibility - each stitch a promise of brighter days. The flowing fabrics and delicate details create garments that seem to glow from within, much like the natural phenomenon that inspired them.',
    story_pt: 'A coleção Aurora emergiu das meditações matinais de Helena, observando o sol pintar o céu em pastéis suaves. Essas peças incorporam renovação e possibilidade - cada ponto é uma promessa de dias melhores. Os tecidos fluidos e detalhes delicados criam peças que parecem brilhar de dentro para fora, muito como o fenômeno natural que as inspirou.',
    story_es: 'La colección Aurora surgió de las meditaciones matutinas de Helena, viendo al sol pintar el cielo en pasteles suaves. Estas piezas encarnan la renovación y la posibilidad: cada puntada es una promesa de días mejores. Los tejidos fluidos y los detalles delicados crean prendas que parecen brillar desde adentro, muy parecido al fenómeno natural que las inspiró.',
    hero_image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
    is_active: true,
    display_order: 3,
    created_at: '2024-03-05T00:00:00Z',
  },
];

// Mock Categories Data
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
  // Bergamot Collection Products
  {
    id: 'prod-1',
    sku: 'UBT-BG-001',
    slug: 'flowing-dress-bergamot',
    collection_id: '1',
    category_id: 'cat-1',
    name_en: 'Flowing Bergamot Dress',
    name_pt: 'Vestido Fluido Bergamota',
    name_es: 'Vestido Fluido Bergamota',
    description_en: 'An ethereal flowing dress that captures the essence of bergamot groves in its delicate silhouette and natural movement.',
    description_pt: 'Um vestido fluido etéreo que captura a essência dos pomares de bergamota em sua silhueta delicada e movimento natural.',
    description_es: 'Un vestido fluido etéreo que captura la esencia de los huertos de bergamota en su silueta delicada y movimiento natural.',
    price: 890.00,
    stock_quantity: 12,
    images: [
      '/Helena_uberti_0158.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    is_active: true,
    featured: true,
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
  },
  {
    id: 'prod-2',
    sku: 'UBT-BG-002',
    slug: 'citrus-blouse',
    collection_id: '1',
    category_id: 'cat-1',
    name_en: 'Citrus Blouse',
    name_pt: 'Blusa Cítrica',
    name_es: 'Blusa Cítrica',
    description_en: 'A lightweight blouse with subtle citrus-inspired details and flowing sleeves.',
    description_pt: 'Uma blusa leve com detalhes sutis inspirados em cítricos e mangas fluidas.',
    description_es: 'Una blusa ligera con detalles sutiles inspirados en cítricos y mangas fluidas.',
    price: 450.00,
    stock_quantity: 18,
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    is_active: true,
    featured: false,
    created_at: '2024-01-22T00:00:00Z',
    updated_at: '2024-01-22T00:00:00Z',
  },
  {
    id: 'prod-3',
    sku: 'UBT-BG-003',
    slug: 'bergamot-pendant',
    collection_id: '1',
    category_id: 'cat-3',
    name_en: 'Bergamot Pendant',
    name_pt: 'Pingente Bergamota',
    name_es: 'Colgante Bergamota',
    description_en: 'Handcrafted pendant inspired by bergamot leaves, featuring delicate silver work.',
    description_pt: 'Pingente artesanal inspirado nas folhas da bergamota, com delicado trabalho em prata.',
    description_es: 'Colgante artesanal inspirado en hojas de bergamota, con delicado trabajo en plata.',
    price: 280.00,
    stock_quantity: 25,
    images: [
      '/Helena_uberti_0421.jpg',
    ],
    sizes: null,
    is_active: true,
    featured: true,
    created_at: '2024-01-25T00:00:00Z',
    updated_at: '2024-01-25T00:00:00Z',
  },

  // Storm Collection Products
  {
    id: 'prod-4',
    sku: 'UBT-ST-001',
    slug: 'storm-coat',
    collection_id: '2',
    category_id: 'cat-1',
    name_en: 'Storm Coat',
    name_pt: 'Casaco Tempestade',
    name_es: 'Abrigo Tormenta',
    description_en: 'A dramatic overcoat with structured shoulders and flowing lines that embody the power of nature.',
    description_pt: 'Um sobretudo dramático com ombros estruturados e linhas fluidas que incorporam o poder da natureza.',
    description_es: 'Un abrigo dramático con hombros estructurados y líneas fluidas que encarnan el poder de la naturaleza.',
    price: 1200.00,
    stock_quantity: 8,
    images: [
      '/Helena_uberti_0477.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    is_active: true,
    featured: true,
    created_at: '2024-02-15T00:00:00Z',
    updated_at: '2024-02-15T00:00:00Z',
  },
  {
    id: 'prod-5',
    sku: 'UBT-ST-002',
    slug: 'thunder-scarf',
    collection_id: '2',
    category_id: 'cat-4',
    name_en: 'Thunder Scarf',
    name_pt: 'Lenço Trovão',
    name_es: 'Bufanda Trueno',
    description_en: 'An asymmetrical scarf that moves like captured lightning, perfect for dramatic styling.',
    description_pt: 'Um lenço assimétrico que se move como um raio capturado, perfeito para um styling dramático.',
    description_es: 'Una bufanda asimétrica que se mueve como un rayo capturado, perfecta para un estilo dramático.',
    price: 320.00,
    stock_quantity: 15,
    images: [
      'https://images.unsplash.com/photo-1601762650768-8c4d0e43c2c6?w=800&h=800&fit=crop'
    ],
    sizes: null,
    is_active: true,
    featured: false,
    created_at: '2024-02-20T00:00:00Z',
    updated_at: '2024-02-20T00:00:00Z',
  },

  // Aurora Collection Products
  {
    id: 'prod-6',
    sku: 'UBT-AU-001',
    slug: 'dawn-dress',
    collection_id: '3',
    category_id: 'cat-1',
    name_en: 'Dawn Dress',
    name_pt: 'Vestido Aurora',
    name_es: 'Vestido Amanecer',
    description_en: 'An ethereal dress in soft pastels that seems to glow with the first light of dawn.',
    description_pt: 'Um vestido etéreo em pastéis suaves que parece brilhar com a primeira luz do amanhecer.',
    description_es: 'Un vestido etéreo en pasteles suaves que parece brillar con la primera luz del amanecer.',
    price: 750.00,
    stock_quantity: 10,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    is_active: true,
    featured: true,
    created_at: '2024-03-10T00:00:00Z',
    updated_at: '2024-03-10T00:00:00Z',
  },
  {
    id: 'prod-7',
    sku: 'UBT-AU-002',
    slug: 'morning-light-vase',
    collection_id: '3',
    category_id: 'cat-2',
    name_en: 'Morning Light Vase',
    name_pt: 'Vaso Luz da Manhã',
    name_es: 'Jarrón Luz Matutina',
    description_en: 'A handcrafted ceramic vase that captures the gentle glow of morning light.',
    description_pt: 'Um vaso de cerâmica artesanal que captura o brilho suave da luz matinal.',
    description_es: 'Un jarrón de cerámica artesanal que captura el brillo suave de la luz matutina.',
    price: 180.00,
    stock_quantity: 20,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop'
    ],
    sizes: null,
    is_active: true,
    featured: false,
    created_at: '2024-03-15T00:00:00Z',
    updated_at: '2024-03-15T00:00:00Z',
  },

  // Additional Products for variety
  {
    id: 'prod-8',
    sku: 'UBT-BG-004',
    slug: 'bergamot-earrings',
    collection_id: '1',
    category_id: 'cat-4',
    name_en: 'Bergamot Earrings',
    name_pt: 'Brincos Bergamota',
    name_es: 'Pendientes Bergamota',
    description_en: 'Delicate drop earrings with citrus-inspired motifs, perfect for everyday elegance.',
    description_pt: 'Brincos pendentes delicados com motivos inspirados em cítricos, perfeitos para elegância diária.',
    description_es: 'Pendientes colgantes delicados con motivos inspirados en cítricos, perfectos para elegancia diaria.',
    price: 195.00,
    stock_quantity: 30,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop'
    ],
    sizes: null,
    is_active: true,
    featured: false,
    created_at: '2024-01-28T00:00:00Z',
    updated_at: '2024-01-28T00:00:00Z',
  },
  {
    id: 'prod-9',
    sku: 'UBT-ST-003',
    slug: 'storm-bracelet',
    collection_id: '2',
    category_id: 'cat-4',
    name_en: 'Storm Bracelet',
    name_pt: 'Pulseira Tempestade',
    name_es: 'Brazalete Tormenta',
    description_en: 'A bold statement bracelet with angular forms reminiscent of lightning strikes.',
    description_pt: 'Uma pulseira statement audaciosa com formas angulares que lembram raios.',
    description_es: 'Una brazalete statement audaz con formas angulares que recuerdan rayos.',
    price: 350.00,
    stock_quantity: 2,
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop'
    ],
    sizes: null,
    is_active: true,
    featured: false,
    created_at: '2024-02-25T00:00:00Z',
    updated_at: '2024-02-25T00:00:00Z',
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