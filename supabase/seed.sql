-- Seed data for UBERTI e-commerce

-- Insert sample collections
INSERT INTO collections (slug, name_en, name_pt, name_es, description_en, description_pt, description_es, story_en, story_pt, story_es, hero_image, display_order) VALUES
(
  'bergamota',
  'Bergamot',
  'Bergamota',
  'Bergamota',
  'A collection inspired by the fresh essence of bergamot, bringing lightness and elegance to everyday pieces.',
  'Uma coleção inspirada na essência fresca da bergamota, trazendo leveza e elegância para peças do dia a dia.',
  'Una colección inspirada en la esencia fresca de bergamota, aportando ligereza y elegancia a las piezas cotidianas.',
  'The Bergamot collection was born from Helena''s morning walks through the citrus groves of southern Italy. Each piece captures the delicate balance between freshness and sophistication, much like the bergamot fruit itself - bold yet refined. The flowing silhouettes and natural textures tell a story of simplicity that speaks volumes.',
  'A coleção Bergamota nasceu das caminhadas matinais de Helena pelos pomares de cítricos do sul da Itália. Cada peça captura o delicado equilíbrio entre frescor e sofisticação, muito parecido com a própria fruta bergamota - audaciosa, mas refinada. As silhuetas fluidas e texturas naturais contam uma história de simplicidade que fala muito.',
  'La colección Bergamota nació de los paseos matutinos de Helena por los huertos de cítricos del sur de Italia. Cada pieza captura el delicado equilibrio entre frescura y sofisticación, muy parecido a la propia fruta bergamota: audaz pero refinada. Las siluetas fluidas y las texturas naturales cuentan una historia de simplicidad que habla mucho.',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&h=800&fit=crop',
  1
),
(
  'tempestade',
  'Storm',
  'Tempestade',
  'Tormenta',
  'Dramatic pieces that embody the raw power and beauty of nature''s most intense moments.',
  'Peças dramáticas que incorporam o poder bruto e a beleza dos momentos mais intensos da natureza.',
  'Piezas dramáticas que encarnan el poder crudo y la belleza de los momentos más intensos de la naturaleza.',
  'Born from Helena''s fascination with the dramatic skies over the Atlantic coast, the Storm collection represents transformation and power. Each garment is designed to move like wind and water, creating poetry in motion. The darker palette and structured silhouettes reflect the duality of destruction and creation that storms represent.',
  'Nascida da fascinação de Helena pelos céus dramáticos da costa atlântica, a coleção Tempestade representa transformação e poder. Cada peça é projetada para se mover como vento e água, criando poesia em movimento. A paleta mais escura e silhuetas estruturadas refletem a dualidade de destruição e criação que as tempestades representam.',
  'Nacida de la fascinación de Helena por los cielos dramáticos de la costa atlántica, la colección Tormenta representa transformación y poder. Cada prenda está diseñada para moverse como el viento y el agua, creando poesía en movimiento. La paleta más oscura y las siluetas estructuradas reflejan la dualidad de destrucción y creación que representan las tormentas.',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
  2
),
(
  'aurora',
  'Aurora',
  'Aurora',
  'Aurora',
  'Ethereal pieces inspired by the first light of dawn, capturing hope and new beginnings.',
  'Peças etéreas inspiradas na primeira luz do amanhecer, capturando esperança e novos começos.',
  'Piezas etéreas inspiradas en la primera luz del amanecer, capturando esperanza y nuevos comienzos.',
  'The Aurora collection emerged from Helena''s early morning meditations, watching the sun paint the sky in soft pastels. These pieces embody renewal and possibility - each stitch a promise of brighter days. The flowing fabrics and delicate details create garments that seem to glow from within, much like the natural phenomenon that inspired them.',
  'A coleção Aurora emergiu das meditações matinais de Helena, observando o sol pintar o céu em pastéis suaves. Essas peças incorporam renovação e possibilidade - cada ponto é uma promessa de dias melhores. Os tecidos fluidos e detalhes delicados criam peças que parecem brilhar de dentro para fora, muito como o fenômeno natural que as inspirou.',
  'La colección Aurora surgió de las meditaciones matutinas de Helena, viendo al sol pintar el cielo en pasteles suaves. Estas piezas encarnan la renovación y la posibilidad: cada puntada es una promesa de días mejores. Los tejidos fluidos y los detalles delicados crean prendas que parecen brillar desde adentro, muy parecido al fenómeno natural que las inspiró.',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
  3
);

-- Get category IDs for reference
DO $$
DECLARE
  clothing_id UUID;
  decoration_id UUID;
  necklaces_id UUID;
  accessories_id UUID;
  bergamot_id UUID;
  storm_id UUID;
  aurora_id UUID;
BEGIN
  SELECT id INTO clothing_id FROM categories WHERE slug = 'clothing';
  SELECT id INTO decoration_id FROM categories WHERE slug = 'decoration';
  SELECT id INTO necklaces_id FROM categories WHERE slug = 'necklaces';
  SELECT id INTO accessories_id FROM categories WHERE slug = 'accessories';
  SELECT id INTO bergamot_id FROM collections WHERE slug = 'bergamota';
  SELECT id INTO storm_id FROM collections WHERE slug = 'tempestade';
  SELECT id INTO aurora_id FROM collections WHERE slug = 'aurora';

  -- Insert sample products for Bergamot collection
  INSERT INTO products (sku, slug, collection_id, category_id, name_en, name_pt, name_es, description_en, description_pt, description_es, price, stock_quantity, images, sizes, featured) VALUES
  (
    'UBT-BG-001',
    'flowing-dress-bergamot',
    bergamot_id,
    clothing_id,
    'Flowing Bergamot Dress',
    'Vestido Fluido Bergamota',
    'Vestido Fluido Bergamota',
    'An ethereal flowing dress that captures the essence of bergamot groves in its delicate silhouette and natural movement.',
    'Um vestido fluido etéreo que captura a essência dos pomares de bergamota em sua silhueta delicada e movimento natural.',
    'Un vestido fluido etéreo que captura la esencia de los huertos de bergamota en su silueta delicada y movimiento natural.',
    890.00,
    12,
    ARRAY['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop'],
    ARRAY['XS', 'S', 'M', 'L', 'XL'],
    true
  ),
  (
    'UBT-BG-002',
    'citrus-blouse',
    bergamot_id,
    clothing_id,
    'Citrus Blouse',
    'Blusa Cítrica',
    'Blusa Cítrica',
    'A lightweight blouse with subtle citrus-inspired details and flowing sleeves.',
    'Uma blusa leve com detalhes sutis inspirados em cítricos e mangas fluidas.',
    'Una blusa ligera con detalles sutiles inspirados en cítricos y mangas fluidas.',
    450.00,
    18,
    ARRAY['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop'],
    ARRAY['XS', 'S', 'M', 'L'],
    false
  ),
  (
    'UBT-BG-003',
    'bergamot-pendant',
    bergamot_id,
    necklaces_id,
    'Bergamot Pendant',
    'Pingente Bergamota',
    'Colgante Bergamota',
    'Handcrafted pendant inspired by bergamot leaves, featuring delicate silver work.',
    'Pingente artesanal inspirado nas folhas da bergamota, com delicado trabalho em prata.',
    'Colgante artesanal inspirado en hojas de bergamota, con delicado trabajo en plata.',
    280.00,
    25,
    ARRAY['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop'],
    NULL,
    true
  );

  -- Insert sample products for Storm collection
  INSERT INTO products (sku, slug, collection_id, category_id, name_en, name_pt, name_es, description_en, description_pt, description_es, price, stock_quantity, images, sizes, featured) VALUES
  (
    'UBT-ST-001',
    'storm-coat',
    storm_id,
    clothing_id,
    'Storm Coat',
    'Casaco Tempestade',
    'Abrigo Tormenta',
    'A dramatic overcoat with structured shoulders and flowing lines that embody the power of nature.',
    'Um sobretudo dramático com ombros estruturados e linhas fluidas que incorporam o poder da natureza.',
    'Un abrigo dramático con hombros estructurados y líneas fluidas que encarnan el poder de la naturaleza.',
    1200.00,
    8,
    ARRAY['https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop'],
    ARRAY['S', 'M', 'L', 'XL'],
    true
  ),
  (
    'UBT-ST-002',
    'thunder-scarf',
    storm_id,
    accessories_id,
    'Thunder Scarf',
    'Lenço Trovão',
    'Bufanda Trueno',
    'An asymmetrical scarf that moves like captured lightning, perfect for dramatic styling.',
    'Um lenço assimétrico que se move como um raio capturado, perfeito para um styling dramático.',
    'Una bufanda asimétrica que se mueve como un rayo capturado, perfecta para un estilo dramático.',
    320.00,
    15,
    ARRAY['https://images.unsplash.com/photo-1601762650768-8c4d0e43c2c6?w=800&h=800&fit=crop'],
    NULL,
    false
  );

  -- Insert sample products for Aurora collection
  INSERT INTO products (sku, slug, collection_id, category_id, name_en, name_pt, name_es, description_en, description_pt, description_es, price, stock_quantity, images, sizes, featured) VALUES
  (
    'UBT-AU-001',
    'dawn-dress',
    aurora_id,
    clothing_id,
    'Dawn Dress',
    'Vestido Aurora',
    'Vestido Amanecer',
    'An ethereal dress in soft pastels that seems to glow with the first light of dawn.',
    'Um vestido etéreo em pastéis suaves que parece brilhar com a primeira luz do amanhecer.',
    'Un vestido etéreo en pasteles suaves que parece brillar con la primera luz del amanecer.',
    750.00,
    10,
    ARRAY['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop'],
    ARRAY['XS', 'S', 'M', 'L'],
    true
  ),
  (
    'UBT-AU-002',
    'morning-light-vase',
    aurora_id,
    decoration_id,
    'Morning Light Vase',
    'Vaso Luz da Manhã',
    'Jarrón Luz Matutina',
    'A handcrafted ceramic vase that captures the gentle glow of morning light.',
    'Um vaso de cerâmica artesanal que captura o brilho suave da luz matinal.',
    'Un jarrón de cerámica artesanal que captura el brillo suave de la luz matutina.',
    180.00,
    20,
    ARRAY['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop'],
    NULL,
    false
  );

END $$;