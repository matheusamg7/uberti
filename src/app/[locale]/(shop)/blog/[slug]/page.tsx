import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'image';
  text?: string;
  src?: string;
  alt?: string;
}

interface Article {
  title: Record<string, string>;
  category: Record<string, string>;
  date: string;
  readTime: string;
  heroImage: string;
  content: Record<string, ContentBlock[]>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  // Database de artigos
  const articlesDatabase: Record<string, Article> = {
    'a-arte-da-la-do-pampa': {
      title: {
        en: 'The Art of Pampa Wool',
        pt: 'A Arte da Lã do Pampa',
        es: 'El Arte de la Lana del Pampa',
        fr: 'L\'Art de la Laine du Pampa',
      },
      category: {
        en: 'Craftsmanship',
        pt: 'Artesanato',
        es: 'Artesanía',
        fr: 'Artisanat',
      },
      date: '2024-09-15',
      readTime: '8 min',
      heroImage: '/banners/pampa_banner.png',
      content: {
        en: [
          { type: 'paragraph', text: 'The Pampa, with its vast plains stretching across southern Brazil, Uruguay, and Argentina, has been home to sheep farming for centuries. The wool from these sheep, known for its exceptional quality and natural beauty, forms the foundation of our craft.' },
          { type: 'paragraph', text: 'Every piece in our collection begins with careful selection of the finest Pampa wool. Our artisans work closely with local shepherds who have been tending their flocks using traditional methods passed down through generations. This relationship ensures not only the highest quality materials but also supports sustainable farming practices that respect the land and animals.' },
          { type: 'image', src: '/banners/hero_banner_1.png', alt: 'Pampa wool processing' },
          { type: 'heading', text: 'The Traditional Process' },
          { type: 'paragraph', text: 'The journey from raw wool to finished garment is a labor of love. After shearing, the wool is carefully cleaned using natural methods that preserve its inherent oils and softness. Traditional hand-spinning techniques allow us to create yarns with unique textures and characteristics that machine-spun wool simply cannot achieve.' },
          { type: 'paragraph', text: 'Our master weavers then transform these yarns into fabric using looms that have been in their families for decades. The rhythm of the shuttle, the careful tension of each thread - these are skills refined over a lifetime, creating textiles with an incomparable quality and character.' },
          { type: 'image', src: '/banners/hero_banner_2.png', alt: 'Traditional weaving' },
          { type: 'heading', text: 'Sustainability and Ethics' },
          { type: 'paragraph', text: 'Working with Pampa wool is not just about creating beautiful garments - it\'s about preserving a way of life and supporting communities. We pay fair prices to our wool suppliers and artisans, ensuring that traditional crafts remain viable for future generations.' },
          { type: 'paragraph', text: 'The natural, undyed wool we use requires no harmful chemicals or processes. Its beautiful range of creams, browns, and grays comes directly from nature, making each piece truly unique and completely sustainable.' },
        ],
        pt: [
          { type: 'paragraph', text: 'O Pampa, com suas vastas planícies que se estendem pelo sul do Brasil, Uruguai e Argentina, é lar da criação de ovelhas há séculos. A lã dessas ovelhas, conhecida por sua qualidade excepcional e beleza natural, forma a base do nosso ofício.' },
          { type: 'paragraph', text: 'Cada peça em nossa coleção começa com a seleção cuidadosa da melhor lã do Pampa. Nossos artesãos trabalham em estreita colaboração com pastores locais que cuidam de seus rebanhos usando métodos tradicionais passados de geração em geração. Essa relação garante não apenas materiais da mais alta qualidade, mas também apoia práticas de pecuária sustentável que respeitam a terra e os animais.' },
          { type: 'image', src: '/banners/hero_banner_1.png', alt: 'Processamento da lã do Pampa' },
          { type: 'heading', text: 'O Processo Tradicional' },
          { type: 'paragraph', text: 'A jornada da lã bruta à peça acabada é um trabalho de amor. Após a tosquia, a lã é cuidadosamente limpa usando métodos naturais que preservam seus óleos e maciez inerentes. Técnicas tradicionais de fiação manual nos permitem criar fios com texturas e características únicas que a lã fiada à máquina simplesmente não pode alcançar.' },
          { type: 'paragraph', text: 'Nossos mestres tecelões então transformam esses fios em tecido usando teares que estão em suas famílias há décadas. O ritmo da lançadeira, a tensão cuidadosa de cada fio - estas são habilidades refinadas ao longo de uma vida, criando têxteis com qualidade e caráter incomparáveis.' },
          { type: 'image', src: '/banners/hero_banner_2.png', alt: 'Tecelagem tradicional' },
          { type: 'heading', text: 'Sustentabilidade e Ética' },
          { type: 'paragraph', text: 'Trabalhar com lã do Pampa não é apenas sobre criar belas peças - é sobre preservar um modo de vida e apoiar comunidades. Pagamos preços justos aos nossos fornecedores de lã e artesãos, garantindo que os ofícios tradicionais permaneçam viáveis para as gerações futuras.' },
          { type: 'paragraph', text: 'A lã natural e sem tingimento que usamos não requer produtos químicos ou processos nocivos. Sua bela gama de cremes, marrons e cinzas vem diretamente da natureza, tornando cada peça verdadeiramente única e completamente sustentável.' },
        ],
        es: [
          { type: 'paragraph', text: 'La Pampa, con sus vastas llanuras que se extienden por el sur de Brasil, Uruguay y Argentina, ha sido hogar de la cría de ovejas durante siglos. La lana de estas ovejas, conocida por su calidad excepcional y belleza natural, forma la base de nuestro oficio.' },
          { type: 'paragraph', text: 'Cada pieza de nuestra colección comienza con la selección cuidadosa de la mejor lana del Pampa. Nuestros artesanos trabajan en estrecha colaboración con pastores locales que cuidan sus rebaños usando métodos tradicionales transmitidos de generación en generación. Esta relación garantiza no solo materiales de la más alta calidad, sino también apoya prácticas ganaderas sostenibles que respetan la tierra y los animales.' },
          { type: 'image', src: '/banners/hero_banner_1.png', alt: 'Procesamiento de lana del Pampa' },
          { type: 'heading', text: 'El Proceso Tradicional' },
          { type: 'paragraph', text: 'El viaje de la lana cruda a la prenda terminada es un trabajo de amor. Después del esquileo, la lana se limpia cuidadosamente usando métodos naturales que preservan sus aceites y suavidad inherentes. Las técnicas tradicionales de hilado a mano nos permiten crear hilos con texturas y características únicas que la lana hilada a máquina simplemente no puede lograr.' },
          { type: 'paragraph', text: 'Nuestros maestros tejedores luego transforman estos hilos en tela usando telares que han estado en sus familias durante décadas. El ritmo de la lanzadera, la tensión cuidadosa de cada hilo - estas son habilidades refinadas a lo largo de una vida, creando textiles con calidad y carácter incomparables.' },
          { type: 'image', src: '/banners/hero_banner_2.png', alt: 'Tejido tradicional' },
          { type: 'heading', text: 'Sostenibilidad y Ética' },
          { type: 'paragraph', text: 'Trabajar con lana del Pampa no es solo sobre crear prendas hermosas - es sobre preservar un modo de vida y apoyar comunidades. Pagamos precios justos a nuestros proveedores de lana y artesanos, asegurando que los oficios tradicionales permanezcan viables para las generaciones futuras.' },
          { type: 'paragraph', text: 'La lana natural sin teñir que usamos no requiere químicos o procesos dañinos. Su hermosa gama de cremas, marrones y grises viene directamente de la naturaleza, haciendo que cada pieza sea verdaderamente única y completamente sostenible.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Le Pampa, avec ses vastes plaines s\'étendant sur le sud du Brésil, l\'Uruguay et l\'Argentine, abrite l\'élevage de moutons depuis des siècles. La laine de ces moutons, connue pour sa qualité exceptionnelle et sa beauté naturelle, constitue la base de notre métier.' },
          { type: 'paragraph', text: 'Chaque pièce de notre collection commence par une sélection soigneuse de la meilleure laine du Pampa. Nos artisans travaillent en étroite collaboration avec des bergers locaux qui s\'occupent de leurs troupeaux en utilisant des méthodes traditionnelles transmises de génération en génération. Cette relation garantit non seulement des matériaux de la plus haute qualité, mais soutient également des pratiques d\'élevage durables qui respectent la terre et les animaux.' },
          { type: 'image', src: '/banners/hero_banner_1.png', alt: 'Traitement de la laine du Pampa' },
          { type: 'heading', text: 'Le Processus Traditionnel' },
          { type: 'paragraph', text: 'Le voyage de la laine brute au vêtement fini est un travail d\'amour. Après la tonte, la laine est soigneusement nettoyée en utilisant des méthodes naturelles qui préservent ses huiles et sa douceur inhérentes. Les techniques traditionnelles de filage à la main nous permettent de créer des fils avec des textures et des caractéristiques uniques que la laine filée à la machine ne peut tout simplement pas atteindre.' },
          { type: 'paragraph', text: 'Nos maîtres tisserands transforment ensuite ces fils en tissu en utilisant des métiers à tisser qui appartiennent à leurs familles depuis des décennies. Le rythme de la navette, la tension soigneuse de chaque fil - ce sont des compétences affinées au cours d\'une vie, créant des textiles d\'une qualité et d\'un caractère incomparables.' },
          { type: 'image', src: '/banners/hero_banner_2.png', alt: 'Tissage traditionnel' },
          { type: 'heading', text: 'Durabilité et Éthique' },
          { type: 'paragraph', text: 'Travailler avec la laine du Pampa ne consiste pas seulement à créer de beaux vêtements - il s\'agit de préserver un mode de vie et de soutenir les communautés. Nous payons des prix équitables à nos fournisseurs de laine et artisans, garantissant que les métiers traditionnels restent viables pour les générations futures.' },
          { type: 'paragraph', text: 'La laine naturelle non teinte que nous utilisons ne nécessite aucun produit chimique ou processus nocif. Sa belle gamme de crèmes, marrons et gris vient directement de la nature, rendant chaque pièce vraiment unique et complètement durable.' },
        ],
      },
    },
    'colecao-raizes-inspiracao': {
      title: {
        en: 'Roots Collection: The Inspiration',
        pt: 'Coleção Raízes: A Inspiração',
        es: 'Colección Raíces: La Inspiración',
        fr: 'Collection Racines: L\'Inspiration',
      },
      category: {
        en: 'Collections',
        pt: 'Coleções',
        es: 'Colecciones',
        fr: 'Collections',
      },
      date: '2024-09-01',
      readTime: '6 min',
      heroImage: '/coleção 1/capa_raizes_colecao.png',
      content: {
        en: [
          { type: 'paragraph', text: 'The Roots collection emerged from deep conversations with the artisans who have been the guardians of traditional techniques for generations. Their stories, their connection to the land, and their unwavering dedication to their craft became the soul of this collection.' },
          { type: 'paragraph', text: 'Walking through the Pampa at dawn, feeling the earth beneath my feet, watching the sheep graze peacefully - these moments shaped every design decision. The collection celebrates not just gaucho culture, but the profound connection between people, land, and tradition.' },
          { type: 'image', src: '/banners/pampa_banner.png', alt: 'Pampa landscape' },
          { type: 'heading', text: 'Design Philosophy' },
          { type: 'paragraph', text: 'Every piece in Roots features earth tones that mirror the Pampa\'s natural palette - rich browns from the soil, soft creams from natural wool, deep grays from storm clouds. The silhouettes are intentionally relaxed, designed for comfort and movement, reflecting the practical needs of those who work the land.' },
          { type: 'paragraph', text: 'Traditional patterns are woven subtly into the fabric, a quiet homage to ancestral designs that have adorned gaucho clothing for centuries. These are not costume pieces, but contemporary garments that carry the weight of history with pride.' },
          { type: 'image', src: '/Helena_uberti_0158.jpg', alt: 'Roots collection piece' },
        ],
        pt: [
          { type: 'paragraph', text: 'A coleção Raízes surgiu de conversas profundas com os artesãos que têm sido os guardiões de técnicas tradicionais por gerações. Suas histórias, sua conexão com a terra e sua dedicação inabalável ao seu ofício se tornaram a alma desta coleção.' },
          { type: 'paragraph', text: 'Caminhando pelo Pampa ao amanhecer, sentindo a terra sob meus pés, observando as ovelhas pastarem pacificamente - esses momentos moldaram cada decisão de design. A coleção celebra não apenas a cultura gaúcha, mas a conexão profunda entre pessoas, terra e tradição.' },
          { type: 'image', src: '/banners/pampa_banner.png', alt: 'Paisagem do Pampa' },
          { type: 'heading', text: 'Filosofia de Design' },
          { type: 'paragraph', text: 'Cada peça em Raízes apresenta tons terrosos que espelham a paleta natural do Pampa - marrons ricos da terra, cremes suaves da lã natural, cinzas profundos de nuvens de tempestade. As silhuetas são intencionalmente relaxadas, projetadas para conforto e movimento, refletindo as necessidades práticas daqueles que trabalham a terra.' },
          { type: 'paragraph', text: 'Padrões tradicionais são tecidos sutilmente no tecido, uma homenagem silenciosa aos designs ancestrais que adornam roupas gaúchas há séculos. Estas não são peças de fantasia, mas peças contemporâneas que carregam o peso da história com orgulho.' },
          { type: 'image', src: '/Helena_uberti_0158.jpg', alt: 'Peça da coleção Raízes' },
        ],
        es: [
          { type: 'paragraph', text: 'La colección Raíces surgió de conversaciones profundas con los artesanos que han sido los guardianes de técnicas tradicionales durante generaciones. Sus historias, su conexión con la tierra y su dedicación inquebrantable a su oficio se convirtieron en el alma de esta colección.' },
          { type: 'paragraph', text: 'Caminando por el Pampa al amanecer, sintiendo la tierra bajo mis pies, observando a las ovejas pastar pacíficamente - estos momentos moldearon cada decisión de diseño. La colección celebra no solo la cultura gaucha, sino la profunda conexión entre las personas, la tierra y la tradición.' },
          { type: 'image', src: '/banners/pampa_banner.png', alt: 'Paisaje del Pampa' },
          { type: 'heading', text: 'Filosofía de Diseño' },
          { type: 'paragraph', text: 'Cada pieza en Raíces presenta tonos tierra que reflejan la paleta natural del Pampa - marrones ricos del suelo, cremas suaves de lana natural, grises profundos de nubes de tormenta. Las siluetas son intencionalmente relajadas, diseñadas para comodidad y movimiento, reflejando las necesidades prácticas de quienes trabajan la tierra.' },
          { type: 'paragraph', text: 'Los patrones tradicionales se tejen sutilmente en la tela, un homenaje silencioso a los diseños ancestrales que han adornado la ropa gaucha durante siglos. Estas no son piezas de disfraz, sino prendas contemporáneas que llevan el peso de la historia con orgullo.' },
          { type: 'image', src: '/Helena_uberti_0158.jpg', alt: 'Pieza de la colección Raíces' },
        ],
        fr: [
          { type: 'paragraph', text: 'La collection Racines est née de conversations profondes avec les artisans qui sont les gardiens des techniques traditionnelles depuis des générations. Leurs histoires, leur connexion avec la terre et leur dévouement inébranlable à leur métier sont devenus l\'âme de cette collection.' },
          { type: 'paragraph', text: 'Marchant dans le Pampa à l\'aube, sentant la terre sous mes pieds, regardant les moutons paître paisiblement - ces moments ont façonné chaque décision de design. La collection célèbre non seulement la culture gaucho, mais la connexion profonde entre les gens, la terre et la tradition.' },
          { type: 'image', src: '/banners/pampa_banner.png', alt: 'Paysage du Pampa' },
          { type: 'heading', text: 'Philosophie de Design' },
          { type: 'paragraph', text: 'Chaque pièce de Racines présente des tons terre qui reflètent la palette naturelle du Pampa - bruns riches du sol, crèmes doux de la laine naturelle, gris profonds des nuages d\'orage. Les silhouettes sont intentionnellement détendues, conçues pour le confort et le mouvement, reflétant les besoins pratiques de ceux qui travaillent la terre.' },
          { type: 'paragraph', text: 'Les motifs traditionnels sont tissés subtilement dans le tissu, un hommage silencieux aux designs ancestraux qui ornent les vêtements gaucho depuis des siècles. Ce ne sont pas des pièces de costume, mais des vêtements contemporains qui portent le poids de l\'histoire avec fierté.' },
          { type: 'image', src: '/Helena_uberti_0158.jpg', alt: 'Pièce de la collection Racines' },
        ],
      },
    },
    'sustentabilidade-moda-artesanal': {
      title: {
        en: 'Sustainability in Artisanal Fashion',
        pt: 'Sustentabilidade na Moda Artesanal',
        es: 'Sostenibilidad en la Moda Artesanal',
        fr: 'Durabilité dans la Mode Artisanale',
      },
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      date: '2024-08-20',
      readTime: '10 min',
      heroImage: '/banners/hero_banner_1.png',
      content: {
        en: [
          { type: 'paragraph', text: 'In an era of fast fashion and mass production, artisanal craftsmanship offers a sustainable alternative that honors both the environment and human dignity. Every piece we create is a statement against disposable culture and a celebration of slow, mindful creation.' },
          { type: 'paragraph', text: 'Our commitment to sustainability begins with material selection. The Pampa wool we use is naturally renewable, biodegradable, and requires minimal processing. Unlike synthetic fibers that shed microplastics, natural wool breaks down harmlessly, returning to the earth from which it came.' },
          { type: 'heading', text: 'Supporting Local Communities' },
          { type: 'paragraph', text: 'True sustainability extends beyond environmental concerns to encompass social responsibility. We work directly with artisan communities, paying fair wages and supporting traditional skills that might otherwise disappear in the face of industrialization.' },
          { type: 'paragraph', text: 'Each purchase directly supports families who have been practicing their crafts for generations. This economic sustainability ensures that these valuable skills and cultural traditions can be passed down to future generations.' },
          { type: 'heading', text: 'Quality Over Quantity' },
          { type: 'paragraph', text: 'Handcrafted pieces take time to create - and that\'s exactly the point. A garment that takes weeks to make is inherently precious, meant to be treasured for years rather than discarded after a season. This longevity is the ultimate sustainability.' },
          { type: 'paragraph', text: 'The natural durability of Pampa wool, combined with traditional construction techniques, results in pieces that become more beautiful with age, developing character and patina that tell the story of their journey with you.' },
        ],
        pt: [
          { type: 'paragraph', text: 'Em uma era de fast fashion e produção em massa, o artesanato oferece uma alternativa sustentável que honra tanto o meio ambiente quanto a dignidade humana. Cada peça que criamos é uma declaração contra a cultura descartável e uma celebração da criação lenta e consciente.' },
          { type: 'paragraph', text: 'Nosso compromisso com a sustentabilidade começa com a seleção de materiais. A lã do Pampa que usamos é naturalmente renovável, biodegradável e requer processamento mínimo. Ao contrário das fibras sintéticas que liberam microplásticos, a lã natural se decompõe de forma inofensiva, retornando à terra de onde veio.' },
          { type: 'heading', text: 'Apoiando Comunidades Locais' },
          { type: 'paragraph', text: 'A verdadeira sustentabilidade se estende além das preocupações ambientais para abranger a responsabilidade social. Trabalhamos diretamente com comunidades artesãs, pagando salários justos e apoiando habilidades tradicionais que de outra forma poderiam desaparecer diante da industrialização.' },
          { type: 'paragraph', text: 'Cada compra apoia diretamente famílias que praticam seus ofícios há gerações. Esta sustentabilidade econômica garante que essas habilidades valiosas e tradições culturais possam ser passadas para as gerações futuras.' },
          { type: 'heading', text: 'Qualidade Sobre Quantidade' },
          { type: 'paragraph', text: 'Peças artesanais levam tempo para criar - e esse é exatamente o ponto. Uma peça que leva semanas para fazer é inerentemente preciosa, destinada a ser valorizada por anos em vez de descartada após uma temporada. Esta longevidade é a sustentabilidade definitiva.' },
          { type: 'paragraph', text: 'A durabilidade natural da lã do Pampa, combinada com técnicas de construção tradicionais, resulta em peças que se tornam mais bonitas com a idade, desenvolvendo caráter e pátina que contam a história de sua jornada com você.' },
        ],
        es: [
          { type: 'paragraph', text: 'En una era de moda rápida y producción masiva, la artesanía ofrece una alternativa sostenible que honra tanto el medio ambiente como la dignidad humana. Cada pieza que creamos es una declaración contra la cultura desechable y una celebración de la creación lenta y consciente.' },
          { type: 'paragraph', text: 'Nuestro compromiso con la sostenibilidad comienza con la selección de materiales. La lana del Pampa que usamos es naturalmente renovable, biodegradable y requiere procesamiento mínimo. A diferencia de las fibras sintéticas que liberan microplásticos, la lana natural se descompone de forma inofensiva, volviendo a la tierra de donde vino.' },
          { type: 'heading', text: 'Apoyando Comunidades Locales' },
          { type: 'paragraph', text: 'La verdadera sostenibilidad se extiende más allá de las preocupaciones ambientales para abarcar la responsabilidad social. Trabajamos directamente con comunidades artesanas, pagando salarios justos y apoyando habilidades tradicionales que de otro modo podrían desaparecer ante la industrialización.' },
          { type: 'paragraph', text: 'Cada compra apoya directamente a familias que han estado practicando sus oficios durante generaciones. Esta sostenibilidad económica garantiza que estas valiosas habilidades y tradiciones culturales puedan ser transmitidas a las generaciones futuras.' },
          { type: 'heading', text: 'Calidad Sobre Cantidad' },
          { type: 'paragraph', text: 'Las piezas artesanales llevan tiempo crear - y ese es exactamente el punto. Una prenda que lleva semanas hacer es inherentemente preciosa, destinada a ser atesorada durante años en lugar de descartada después de una temporada. Esta longevidad es la sostenibilidad definitiva.' },
          { type: 'paragraph', text: 'La durabilidad natural de la lana del Pampa, combinada con técnicas de construcción tradicionales, resulta en piezas que se vuelven más hermosas con la edad, desarrollando carácter y pátina que cuentan la historia de su viaje contigo.' },
        ],
        fr: [
          { type: 'paragraph', text: 'À une époque de mode rapide et de production de masse, l\'artisanat offre une alternative durable qui honore à la fois l\'environnement et la dignité humaine. Chaque pièce que nous créons est une déclaration contre la culture jetable et une célébration de la création lente et consciente.' },
          { type: 'paragraph', text: 'Notre engagement envers la durabilité commence par la sélection des matériaux. La laine du Pampa que nous utilisons est naturellement renouvelable, biodégradable et nécessite un traitement minimal. Contrairement aux fibres synthétiques qui libèrent des microplastiques, la laine naturelle se décompose de manière inoffensive, retournant à la terre d\'où elle vient.' },
          { type: 'heading', text: 'Soutenir les Communautés Locales' },
          { type: 'paragraph', text: 'La véritable durabilité s\'étend au-delà des préoccupations environnementales pour englober la responsabilité sociale. Nous travaillons directement avec les communautés artisanales, payant des salaires équitables et soutenant les compétences traditionnelles qui pourraient autrement disparaître face à l\'industrialisation.' },
          { type: 'paragraph', text: 'Chaque achat soutient directement les familles qui pratiquent leurs métiers depuis des générations. Cette durabilité économique garantit que ces compétences précieuses et traditions culturelles peuvent être transmises aux générations futures.' },
          { type: 'heading', text: 'Qualité Plutôt que Quantité' },
          { type: 'paragraph', text: 'Les pièces artisanales prennent du temps à créer - et c\'est exactement le point. Un vêtement qui prend des semaines à fabriquer est intrinsèquement précieux, destiné à être chéri pendant des années plutôt que jeté après une saison. Cette longévité est la durabilité ultime.' },
          { type: 'paragraph', text: 'La durabilité naturelle de la laine du Pampa, combinée aux techniques de construction traditionnelles, donne des pièces qui deviennent plus belles avec l\'âge, développant un caractère et une patine qui racontent l\'histoire de leur voyage avec vous.' },
        ],
      },
    },
    'geometria-perfeita-favos': {
      title: {
        en: 'The Perfect Geometry of Honeycombs',
        pt: 'A Geometria Perfeita dos Favos',
        es: 'La Geometría Perfecta de los Panales',
        fr: 'La Géométrie Parfaite des Rayons',
      },
      category: {
        en: 'Collections',
        pt: 'Coleções',
        es: 'Colecciones',
        fr: 'Collections',
      },
      date: '2024-08-05',
      readTime: '7 min',
      heroImage: '/coleção 2/capa_favos_colecao.png',
      content: {
        en: [
          { type: 'paragraph', text: 'Nature is the ultimate designer. The hexagonal cells of a honeycomb represent mathematical perfection - the most efficient way to store honey while using the least amount of wax. This natural genius inspired our Honeycombs collection, where geometry meets organic beauty.' },
          { type: 'paragraph', text: 'When I first observed the intricate patterns of a honeycomb, I was struck by how something so mathematically precise could feel so organic and alive. The golden tones, the perfect symmetry, the sense of abundance and sweetness - all of these elements became the foundation for our design language.' },
          { type: 'heading', text: 'Translating Nature to Fabric' },
          { type: 'paragraph', text: 'The challenge was translating these geometric patterns into woven textiles while maintaining the warmth and fluidity of natural wool. Our artisans developed new techniques, adapting traditional looms to create the repeating hexagonal motifs that define this collection.' },
          { type: 'paragraph', text: 'Each pattern is carefully calculated to flow seamlessly across the fabric, creating visual harmony that echoes the perfection of nature\'s design. The golden and amber tones reference honey and sunlight, while the structured patterns provide a contemporary edge.' },
          { type: 'heading', text: 'Wearing Mathematics' },
          { type: 'paragraph', text: 'There\'s something magical about wearing a pattern that has existed in nature for millions of years. The Honeycombs collection allows you to carry this ancient wisdom with you, wrapped in the comfort of natural wool and the pride of handcrafted artistry.' },
        ],
        pt: [
          { type: 'paragraph', text: 'A natureza é a designer definitiva. As células hexagonais de um favo representam perfeição matemática - a maneira mais eficiente de armazenar mel usando a menor quantidade de cera. Este gênio natural inspirou nossa coleção Favos, onde a geometria encontra a beleza orgânica.' },
          { type: 'paragraph', text: 'Quando observei pela primeira vez os padrões intrincados de um favo, fiquei impressionada com como algo tão matematicamente preciso poderia parecer tão orgânico e vivo. Os tons dourados, a simetria perfeita, a sensação de abundância e doçura - todos esses elementos se tornaram a base para nossa linguagem de design.' },
          { type: 'heading', text: 'Traduzindo a Natureza em Tecido' },
          { type: 'paragraph', text: 'O desafio era traduzir esses padrões geométricos em têxteis tecidos mantendo o calor e a fluidez da lã natural. Nossos artesãos desenvolveram novas técnicas, adaptando teares tradicionais para criar os motivos hexagonais repetidos que definem esta coleção.' },
          { type: 'paragraph', text: 'Cada padrão é cuidadosamente calculado para fluir perfeitamente pelo tecido, criando harmonia visual que ecoa a perfeição do design da natureza. Os tons dourados e âmbar fazem referência ao mel e à luz do sol, enquanto os padrões estruturados fornecem uma vantagem contemporânea.' },
          { type: 'heading', text: 'Vestindo Matemática' },
          { type: 'paragraph', text: 'Há algo mágico em usar um padrão que existe na natureza há milhões de anos. A coleção Favos permite que você carregue essa sabedoria antiga com você, envolvida no conforto da lã natural e no orgulho da arte artesanal.' },
        ],
        es: [
          { type: 'paragraph', text: 'La naturaleza es el diseñador definitivo. Las celdas hexagonales de un panal representan perfección matemática: la forma más eficiente de almacenar miel usando la menor cantidad de cera. Este genio natural inspiró nuestra colección Panales, donde la geometría encuentra la belleza orgánica.' },
          { type: 'paragraph', text: 'Cuando observé por primera vez los patrones intrincados de un panal, me impresionó cómo algo tan matemáticamente preciso podía sentirse tan orgánico y vivo. Los tonos dorados, la simetría perfecta, la sensación de abundancia y dulzura - todos estos elementos se convirtieron en la base de nuestro lenguaje de diseño.' },
          { type: 'heading', text: 'Traduciendo la Naturaleza al Tejido' },
          { type: 'paragraph', text: 'El desafío era traducir estos patrones geométricos en textiles tejidos manteniendo el calor y la fluidez de la lana natural. Nuestros artesanos desarrollaron nuevas técnicas, adaptando telares tradicionales para crear los motivos hexagonales repetidos que definen esta colección.' },
          { type: 'paragraph', text: 'Cada patrón se calcula cuidadosamente para fluir perfectamente a través de la tela, creando armonía visual que hace eco de la perfección del diseño de la naturaleza. Los tonos dorados y ámbar hacen referencia a la miel y la luz del sol, mientras que los patrones estructurados proporcionan un borde contemporáneo.' },
          { type: 'heading', text: 'Vistiendo Matemáticas' },
          { type: 'paragraph', text: 'Hay algo mágico en usar un patrón que ha existido en la naturaleza durante millones de años. La colección Panales te permite llevar esta sabiduría antigua contigo, envuelta en la comodidad de la lana natural y el orgullo del arte artesanal.' },
        ],
        fr: [
          { type: 'paragraph', text: 'La nature est le designer ultime. Les cellules hexagonales d\'un rayon de miel représentent la perfection mathématique - la façon la plus efficace de stocker le miel en utilisant le moins de cire possible. Ce génie naturel a inspiré notre collection Rayons, où la géométrie rencontre la beauté organique.' },
          { type: 'paragraph', text: 'Lorsque j\'ai observé pour la première fois les motifs complexes d\'un rayon de miel, j\'ai été frappée par le fait que quelque chose de si mathématiquement précis puisse sembler si organique et vivant. Les tons dorés, la symétrie parfaite, le sens de l\'abondance et de la douceur - tous ces éléments sont devenus la base de notre langage de design.' },
          { type: 'heading', text: 'Traduire la Nature en Tissu' },
          { type: 'paragraph', text: 'Le défi était de traduire ces motifs géométriques en textiles tissés tout en maintenant la chaleur et la fluidité de la laine naturelle. Nos artisans ont développé de nouvelles techniques, adaptant les métiers à tisser traditionnels pour créer les motifs hexagonaux répétés qui définissent cette collection.' },
          { type: 'paragraph', text: 'Chaque motif est soigneusement calculé pour s\'écouler de manière transparente à travers le tissu, créant une harmonie visuelle qui fait écho à la perfection du design de la nature. Les tons dorés et ambrés font référence au miel et à la lumière du soleil, tandis que les motifs structurés apportent une touche contemporaine.' },
          { type: 'heading', text: 'Porter les Mathématiques' },
          { type: 'paragraph', text: 'Il y a quelque chose de magique à porter un motif qui existe dans la nature depuis des millions d\'années. La collection Rayons vous permet de porter cette sagesse ancienne avec vous, enveloppée dans le confort de la laine naturelle et la fierté de l\'artisanat.' },
        ],
      },
    },
    'tecnicas-ancestrais-tecelagem': {
      title: {
        en: 'Ancestral Weaving Techniques',
        pt: 'Técnicas Ancestrais de Tecelagem',
        es: 'Técnicas Ancestrales de Tejido',
        fr: 'Techniques Ancestrales de Tissage',
      },
      category: {
        en: 'Craftsmanship',
        pt: 'Artesanato',
        es: 'Artesanía',
        fr: 'Artisanat',
      },
      date: '2024-07-18',
      readTime: '12 min',
      heroImage: '/banners/hero_banner_2.png',
      content: {
        en: [
          { type: 'paragraph', text: 'The rhythmic clack of the loom shuttle has been the soundtrack to human civilization for millennia. The weaving techniques we employ today are direct descendants of methods developed by indigenous peoples of the Americas thousands of years ago.' },
          { type: 'paragraph', text: 'Working with master artisans who learned their craft from their grandparents, who learned from their grandparents before them, creates a direct link to this ancient wisdom. Every motion of their hands carries the weight of countless generations of knowledge.' },
          { type: 'heading', text: 'The Living Tradition' },
          { type: 'paragraph', text: 'What makes a technique "ancestral" is not merely its age, but its continuity - an unbroken chain of teaching and learning that stretches back through time. Our artisans don\'t recreate historical techniques; they practice living traditions that have evolved naturally while maintaining their essential character.' },
          { type: 'paragraph', text: 'The vertical loom, the backstrap loom, the careful counting of threads - these methods have survived because they produce results that modern machinery cannot replicate. The slight variations in tension, the human touch in every thread, create textiles with soul and character.' },
          { type: 'heading', text: 'Preserving Knowledge' },
          { type: 'paragraph', text: 'In our rapidly industrializing world, traditional crafts face an existential threat. When an elder artisan passes away without passing on their knowledge, we lose not just a skill, but a way of seeing and interacting with the world.' },
          { type: 'paragraph', text: 'By supporting traditional weaving, we do more than create beautiful textiles - we ensure that this precious knowledge continues to flow forward, enriching future generations with connections to our shared human heritage.' },
        ],
        pt: [
          { type: 'paragraph', text: 'O ritmo do tear tem sido a trilha sonora da civilização humana por milênios. As técnicas de tecelagem que empregamos hoje são descendentes diretas de métodos desenvolvidos por povos indígenas das Américas há milhares de anos.' },
          { type: 'paragraph', text: 'Trabalhar com mestres artesãos que aprenderam seu ofício com seus avós, que aprenderam com seus avós antes deles, cria uma ligação direta com essa sabedoria antiga. Cada movimento de suas mãos carrega o peso de incontáveis gerações de conhecimento.' },
          { type: 'heading', text: 'A Tradição Viva' },
          { type: 'paragraph', text: 'O que torna uma técnica "ancestral" não é apenas sua idade, mas sua continuidade - uma cadeia ininterrupta de ensino e aprendizagem que se estende através do tempo. Nossos artesãos não recriam técnicas históricas; eles praticam tradições vivas que evoluíram naturalmente mantendo seu caráter essencial.' },
          { type: 'paragraph', text: 'O tear vertical, o tear de cintura, a contagem cuidadosa de fios - esses métodos sobreviveram porque produzem resultados que a maquinaria moderna não pode replicar. As pequenas variações na tensão, o toque humano em cada fio, criam têxteis com alma e caráter.' },
          { type: 'heading', text: 'Preservando Conhecimento' },
          { type: 'paragraph', text: 'Em nosso mundo em rápida industrialização, os ofícios tradicionais enfrentam uma ameaça existencial. Quando um artesão ancião falece sem passar seu conhecimento, perdemos não apenas uma habilidade, mas uma forma de ver e interagir com o mundo.' },
          { type: 'paragraph', text: 'Ao apoiar a tecelagem tradicional, fazemos mais do que criar têxteis bonitos - garantimos que esse conhecimento precioso continue fluindo para frente, enriquecendo as gerações futuras com conexões com nossa herança humana compartilhada.' },
        ],
        es: [
          { type: 'paragraph', text: 'El ritmo del telar ha sido la banda sonora de la civilización humana durante milenios. Las técnicas de tejido que empleamos hoy son descendientes directas de métodos desarrollados por pueblos indígenas de las Américas hace miles de años.' },
          { type: 'paragraph', text: 'Trabajar con maestros artesanos que aprendieron su oficio de sus abuelos, quienes aprendieron de sus abuelos antes que ellos, crea un vínculo directo con esta sabiduría antigua. Cada movimiento de sus manos lleva el peso de incontables generaciones de conocimiento.' },
          { type: 'heading', text: 'La Tradición Viva' },
          { type: 'paragraph', text: 'Lo que hace que una técnica sea "ancestral" no es solo su edad, sino su continuidad: una cadena ininterrumpida de enseñanza y aprendizaje que se extiende a través del tiempo. Nuestros artesanos no recrean técnicas históricas; practican tradiciones vivas que han evolucionado naturalmente mientras mantienen su carácter esencial.' },
          { type: 'paragraph', text: 'El telar vertical, el telar de cintura, el conteo cuidadoso de hilos - estos métodos han sobrevivido porque producen resultados que la maquinaria moderna no puede replicar. Las ligeras variaciones en la tensión, el toque humano en cada hilo, crean textiles con alma y carácter.' },
          { type: 'heading', text: 'Preservando el Conocimiento' },
          { type: 'paragraph', text: 'En nuestro mundo en rápida industrialización, los oficios tradicionales enfrentan una amenaza existencial. Cuando un artesano anciano fallece sin transmitir su conocimiento, perdemos no solo una habilidad, sino una forma de ver e interactuar con el mundo.' },
          { type: 'paragraph', text: 'Al apoyar el tejido tradicional, hacemos más que crear textiles hermosos: garantizamos que este conocimiento precioso continúe fluyendo hacia adelante, enriqueciendo a las generaciones futuras con conexiones con nuestra herencia humana compartida.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Le rythme du métier à tisser a été la bande sonore de la civilisation humaine pendant des millénaires. Les techniques de tissage que nous employons aujourd\'hui sont des descendants directs de méthodes développées par les peuples indigènes des Amériques il y a des milliers d\'années.' },
          { type: 'paragraph', text: 'Travailler avec des artisans maîtres qui ont appris leur métier de leurs grands-parents, qui ont appris de leurs grands-parents avant eux, crée un lien direct avec cette sagesse ancienne. Chaque mouvement de leurs mains porte le poids d\'innombrables générations de connaissances.' },
          { type: 'heading', text: 'La Tradition Vivante' },
          { type: 'paragraph', text: 'Ce qui rend une technique "ancestrale" n\'est pas simplement son âge, mais sa continuité - une chaîne ininterrompue d\'enseignement et d\'apprentissage qui s\'étend à travers le temps. Nos artisans ne recréent pas des techniques historiques; ils pratiquent des traditions vivantes qui ont évolué naturellement tout en conservant leur caractère essentiel.' },
          { type: 'paragraph', text: 'Le métier à tisser vertical, le métier à tisser dorsal, le comptage minutieux des fils - ces méthodes ont survécu parce qu\'elles produisent des résultats que les machines modernes ne peuvent pas reproduire. Les légères variations de tension, le toucher humain dans chaque fil, créent des textiles avec âme et caractère.' },
          { type: 'heading', text: 'Préserver les Connaissances' },
          { type: 'paragraph', text: 'Dans notre monde en rapide industrialisation, les métiers traditionnels font face à une menace existentielle. Quand un artisan aîné décède sans transmettre ses connaissances, nous perdons non seulement une compétence, mais une façon de voir et d\'interagir avec le monde.' },
          { type: 'paragraph', text: 'En soutenant le tissage traditionnel, nous faisons plus que créer de beaux textiles - nous garantissons que ces connaissances précieuses continuent de se transmettre, enrichissant les générations futures avec des connexions à notre patrimoine humain partagé.' },
        ],
      },
    },
    'helena-uberti-jornada': {
      title: {
        en: 'Helena Uberti: A Creative Journey',
        pt: 'Helena Uberti: Uma Jornada Criativa',
        es: 'Helena Uberti: Un Viaje Creativo',
        fr: 'Helena Uberti: Un Voyage Créatif',
      },
      category: {
        en: 'Behind the Scenes',
        pt: 'Bastidores',
        es: 'Detrás de Escenas',
        fr: 'Coulisses',
      },
      date: '2024-07-01',
      readTime: '15 min',
      heroImage: '/Helena_uberti_0158.jpg',
      content: {
        en: [
          { type: 'paragraph', text: 'My journey into artisanal fashion began not in a design school, but in the cobblestone streets of my grandmother\'s neighborhood in southern Brazil. There, surrounded by women who knitted and wove as naturally as they breathed, I learned that creating with your hands is both a skill and a way of life.' },
          { type: 'paragraph', text: 'I watched my grandmother\'s hands transform raw wool into beautiful garments, each stitch a meditation, each pattern a story. She never called herself an artist, yet everything she made was art - functional, beautiful, and imbued with love.' },
          { type: 'heading', text: 'Finding My Voice' },
          { type: 'paragraph', text: 'For years, I struggled between the modern world\'s expectations and the traditional crafts I loved. Fashion school taught me about trends and markets, but it was my grandmother\'s lessons that taught me about truth and authenticity.' },
          { type: 'paragraph', text: 'The turning point came when I realized I didn\'t have to choose. I could honor traditional techniques while creating contemporary designs. I could build a sustainable business while supporting artisan communities. The apparent contradictions were actually complementary forces.' },
          { type: 'heading', text: 'Building UBERTI' },
          { type: 'paragraph', text: 'UBERTI began as a dream to create fashion that tells stories - of places, people, and traditions. Each collection is born from deep engagement with the communities and landscapes that inspire it. The Roots collection emerged from time spent with gaucho artisans in the Pampa. The Honeycombs collection came from observing nature\'s perfect mathematics.' },
          { type: 'paragraph', text: 'Today, UBERTI is more than a brand - it\'s a movement to prove that beautiful, sustainable, ethical fashion is not just possible, but essential. Every piece we create, every artisan we support, every customer who chooses quality over quantity is part of this larger story.' },
          { type: 'paragraph', text: 'This journey continues every day, with every new piece, every collaboration, every connection made through the universal language of craft and beauty.' },
        ],
        pt: [
          { type: 'paragraph', text: 'Minha jornada na moda artesanal começou não em uma escola de design, mas nas ruas de paralelepípedos do bairro da minha avó no sul do Brasil. Lá, cercada por mulheres que tricotavam e teciam tão naturalmente quanto respiravam, aprendi que criar com as mãos é tanto uma habilidade quanto um modo de vida.' },
          { type: 'paragraph', text: 'Observei as mãos da minha avó transformar lã bruta em belas peças, cada ponto uma meditação, cada padrão uma história. Ela nunca se chamou de artista, mas tudo o que fazia era arte - funcional, bonita e imbuída de amor.' },
          { type: 'heading', text: 'Encontrando Minha Voz' },
          { type: 'paragraph', text: 'Por anos, lutei entre as expectativas do mundo moderno e os ofícios tradicionais que amava. A escola de moda me ensinou sobre tendências e mercados, mas foram as lições da minha avó que me ensinaram sobre verdade e autenticidade.' },
          { type: 'paragraph', text: 'O ponto de virada veio quando percebi que não precisava escolher. Eu poderia honrar técnicas tradicionais enquanto criava designs contemporâneos. Eu poderia construir um negócio sustentável enquanto apoiava comunidades artesãs. As contradições aparentes eram na verdade forças complementares.' },
          { type: 'heading', text: 'Construindo UBERTI' },
          { type: 'paragraph', text: 'UBERTI começou como um sonho de criar moda que conta histórias - de lugares, pessoas e tradições. Cada coleção nasce de um profundo envolvimento com as comunidades e paisagens que a inspiram. A coleção Raízes surgiu do tempo passado com artesãos gaúchos no Pampa. A coleção Favos veio da observação da matemática perfeita da natureza.' },
          { type: 'paragraph', text: 'Hoje, UBERTI é mais do que uma marca - é um movimento para provar que moda bonita, sustentável e ética não é apenas possível, mas essencial. Cada peça que criamos, cada artesão que apoiamos, cada cliente que escolhe qualidade sobre quantidade faz parte desta história maior.' },
          { type: 'paragraph', text: 'Esta jornada continua todos os dias, com cada nova peça, cada colaboração, cada conexão feita através da linguagem universal do artesanato e da beleza.' },
        ],
        es: [
          { type: 'paragraph', text: 'Mi viaje en la moda artesanal comenzó no en una escuela de diseño, sino en las calles empedradas del barrio de mi abuela en el sur de Brasil. Allí, rodeada de mujeres que tejían y hacían punto tan naturalmente como respiraban, aprendí que crear con las manos es tanto una habilidad como una forma de vida.' },
          { type: 'paragraph', text: 'Observé las manos de mi abuela transformar lana cruda en hermosas prendas, cada puntada una meditación, cada patrón una historia. Nunca se llamó a sí misma artista, pero todo lo que hacía era arte: funcional, hermoso e imbuido de amor.' },
          { type: 'heading', text: 'Encontrando Mi Voz' },
          { type: 'paragraph', text: 'Durante años, luché entre las expectativas del mundo moderno y los oficios tradicionales que amaba. La escuela de moda me enseñó sobre tendencias y mercados, pero fueron las lecciones de mi abuela las que me enseñaron sobre verdad y autenticidad.' },
          { type: 'paragraph', text: 'El punto de inflexión llegó cuando me di cuenta de que no tenía que elegir. Podía honrar las técnicas tradicionales mientras creaba diseños contemporáneos. Podía construir un negocio sostenible mientras apoyaba a las comunidades artesanas. Las aparentes contradicciones eran en realidad fuerzas complementarias.' },
          { type: 'heading', text: 'Construyendo UBERTI' },
          { type: 'paragraph', text: 'UBERTI comenzó como un sueño de crear moda que cuenta historias: de lugares, personas y tradiciones. Cada colección nace de un profundo compromiso con las comunidades y paisajes que la inspiran. La colección Raíces surgió del tiempo pasado con artesanos gauchos en el Pampa. La colección Panales vino de observar la matemática perfecta de la naturaleza.' },
          { type: 'paragraph', text: 'Hoy, UBERTI es más que una marca: es un movimiento para demostrar que la moda hermosa, sostenible y ética no solo es posible, sino esencial. Cada pieza que creamos, cada artesano que apoyamos, cada cliente que elige calidad sobre cantidad es parte de esta historia mayor.' },
          { type: 'paragraph', text: 'Este viaje continúa todos los días, con cada nueva pieza, cada colaboración, cada conexión hecha a través del lenguaje universal del oficio y la belleza.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Mon voyage dans la mode artisanale n\'a pas commencé dans une école de design, mais dans les rues pavées du quartier de ma grand-mère dans le sud du Brésil. Là, entourée de femmes qui tricotaient et tissaient aussi naturellement qu\'elles respiraient, j\'ai appris que créer avec ses mains est à la fois une compétence et un mode de vie.' },
          { type: 'paragraph', text: 'J\'ai regardé les mains de ma grand-mère transformer la laine brute en beaux vêtements, chaque point une méditation, chaque motif une histoire. Elle ne s\'est jamais appelée artiste, pourtant tout ce qu\'elle faisait était de l\'art - fonctionnel, beau et imprégné d\'amour.' },
          { type: 'heading', text: 'Trouver Ma Voix' },
          { type: 'paragraph', text: 'Pendant des années, j\'ai lutté entre les attentes du monde moderne et les métiers traditionnels que j\'aimais. L\'école de mode m\'a appris les tendances et les marchés, mais ce sont les leçons de ma grand-mère qui m\'ont appris la vérité et l\'authenticité.' },
          { type: 'paragraph', text: 'Le tournant est venu quand j\'ai réalisé que je n\'avais pas à choisir. Je pouvais honorer les techniques traditionnelles tout en créant des designs contemporains. Je pouvais construire une entreprise durable tout en soutenant les communautés artisanales. Les contradictions apparentes étaient en fait des forces complémentaires.' },
          { type: 'heading', text: 'Construire UBERTI' },
          { type: 'paragraph', text: 'UBERTI a commencé comme un rêve de créer une mode qui raconte des histoires - de lieux, de personnes et de traditions. Chaque collection naît d\'un engagement profond avec les communautés et les paysages qui l\'inspirent. La collection Racines est née du temps passé avec des artisans gaucho dans le Pampa. La collection Rayons est venue de l\'observation des mathématiques parfaites de la nature.' },
          { type: 'paragraph', text: 'Aujourd\'hui, UBERTI est plus qu\'une marque - c\'est un mouvement pour prouver que la mode belle, durable et éthique n\'est pas seulement possible, mais essentielle. Chaque pièce que nous créons, chaque artisan que nous soutenons, chaque client qui choisit la qualité plutôt que la quantité fait partie de cette histoire plus large.' },
          { type: 'paragraph', text: 'Ce voyage continue chaque jour, avec chaque nouvelle pièce, chaque collaboration, chaque connexion faite à travers le langage universel de l\'artisanat et de la beauté.' },
        ],
      },
    },
    // Outros artigos podem ser adicionados aqui com estrutura similar
  };

  const article = articlesDatabase[slug];

  if (!article) {
    notFound();
  }

  const localeKey = locale as 'en' | 'pt' | 'es' | 'fr';
  const content = article.content[localeKey] || article.content.en;

  const labels = {
    backToBlog: {
      en: '← Back to Journal',
      pt: '← Voltar ao Diário',
      es: '← Volver al Diario',
      fr: '← Retour au Journal',
    },
    relatedArticles: {
      en: 'Related Articles',
      pt: 'Artigos Relacionados',
      es: 'Artículos Relacionados',
      fr: 'Articles Connexes',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE]">
      {/* Hero Image */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title[localeKey]}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Article Header */}
        <header className="bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-lg mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3 text-xs uppercase tracking-wider text-gray-500 font-light">
            <span>{article.category[localeKey]}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString(
                localeKey === 'pt' ? 'pt-BR' : localeKey === 'es' ? 'es-ES' : localeKey === 'fr' ? 'fr-FR' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {article.title[localeKey]}
          </h1>

          <p className="text-sm text-gray-600 font-light">
            {localeKey === 'pt' ? 'por' : localeKey === 'es' ? 'por' : localeKey === 'fr' ? 'par' : 'by'}{' '}
            <span className="text-gray-900">Helena Uberti</span>
          </p>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-16">
          {content.map((block: ContentBlock, index: number) => {
            if (block.type === 'paragraph') {
              return (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="text-2xl sm:text-3xl font-light tracking-wide mt-12 mb-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {block.text}
                </h2>
              );
            }

            // Imagens removidas do artigo
            // if (block.type === 'image' && block.src) {
            //   return (
            //     <div key={index} className="relative aspect-[16/10] overflow-hidden my-12">
            //       <Image
            //         src={block.src}
            //         alt={block.alt || ''}
            //         fill
            //         className="object-cover"
            //         sizes="(max-width: 896px) 100vw, 896px"
            //       />
            //     </div>
            //   );
            // }

            return null;
          })}
        </div>

        {/* Back to Blog */}
        <div className="border-t border-gray-200 pt-8 mb-16">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
          >
            {labels.backToBlog[localeKey]}
          </Link>
        </div>
      </article>
    </div>
  );
}
