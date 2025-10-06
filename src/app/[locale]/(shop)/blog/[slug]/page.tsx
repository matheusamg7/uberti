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
