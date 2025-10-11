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
    'importancia-tosquia-bem-estar-ovelhas': {
      title: {
        en: 'The Importance of Shearing for Sheep Welfare',
        pt: 'A Importância da Tosquia para o Bem-Estar das Ovelhas',
        es: 'La Importancia del Esquileo para el Bienestar de las Ovejas',
        fr: 'L\'Importance de la Tonte pour le Bien-Être des Moutons',
      },
      category: {
        en: 'Animal Welfare',
        pt: 'Bem-Estar Animal',
        es: 'Bienestar Animal',
        fr: 'Bien-Être Animal',
      },
      date: '2024-10-15',
      readTime: '8 min',
      heroImage: '/blog/blog_tosquia_bem_estar_ovelhas.jpg',
      content: {
        en: [
          { type: 'paragraph', text: 'Shearing is not merely a step in wool production - it is an essential practice for the health and comfort of sheep. Domestic sheep, unlike their wild ancestors, have been bred over thousands of years to produce wool continuously. Without regular shearing, this natural fiber would continue to grow unchecked, creating serious health and welfare issues.' },
          { type: 'paragraph', text: 'A sheep\'s fleece provides necessary insulation during cold months, but as seasons change and temperatures rise, this thick coat becomes a burden rather than a benefit. Excessive wool can lead to heat stress, mobility issues, and increased vulnerability to parasites and infections.' },
          { type: 'heading', text: 'Health Benefits of Proper Shearing' },
          { type: 'paragraph', text: 'Regular shearing prevents a range of health problems. Overgrown fleece can trap moisture close to the skin, creating an ideal environment for bacterial and fungal infections. It also provides shelter for parasites like mites and lice, which can cause severe discomfort and skin conditions.' },
          { type: 'paragraph', text: 'Additionally, sheep with excessive wool face increased risk of "wool blindness," where overgrown fleece around the face obstructs their vision, making it difficult to find food and water or detect predators. Heavy fleece can also cause sheep to become "cast" - unable to right themselves if they fall on their backs - a potentially fatal situation.' },
          { type: 'heading', text: 'The Shearing Process' },
          { type: 'paragraph', text: 'Professional shearers are trained to remove fleece efficiently while prioritizing the sheep\'s welfare. The process, when done properly by experienced hands, is quick and causes no harm to the animal. Skilled shearers work methodically, ensuring sheep remain calm throughout the process.' },
          { type: 'paragraph', text: 'In our work with Pampa sheep farmers, we prioritize ethical shearing practices. The shepherds we collaborate with treat their animals with respect and care, viewing shearing not as an extraction of resources, but as a necessary service to the sheep\'s well-being.' },
          { type: 'heading', text: 'Seasonal Timing and Care' },
          { type: 'paragraph', text: 'Timing is crucial for ethical shearing. Most sheep are shorn in spring, after the coldest months have passed but before summer heat arrives. This timing ensures sheep are comfortable through temperature extremes - neither burdened by excessive fleece in heat nor left vulnerable to cold.' },
          { type: 'paragraph', text: 'Understanding the importance of shearing helps us appreciate wool not as a commodity taken from animals, but as part of a mutually beneficial relationship between humans and sheep - one that, when approached ethically, supports the health and dignity of these remarkable animals.' },
        ],
        pt: [
          { type: 'paragraph', text: 'A tosquia não é meramente uma etapa na produção de lã - é uma prática essencial para a saúde e conforto das ovelhas. Ovelhas domésticas, ao contrário de seus ancestrais selvagens, foram criadas ao longo de milhares de anos para produzir lã continuamente. Sem tosquia regular, esta fibra natural continuaria a crescer sem controle, criando sérios problemas de saúde e bem-estar.' },
          { type: 'paragraph', text: 'O velo de uma ovelha fornece isolamento necessário durante os meses frios, mas à medida que as estações mudam e as temperaturas sobem, este casaco grosso se torna um fardo em vez de um benefício. Lã excessiva pode levar ao estresse térmico, problemas de mobilidade e maior vulnerabilidade a parasitas e infecções.' },
          { type: 'heading', text: 'Benefícios da Tosquia Adequada para a Saúde' },
          { type: 'paragraph', text: 'A tosquia regular previne uma série de problemas de saúde. O velo crescido demais pode reter umidade próximo à pele, criando um ambiente ideal para infecções bacterianas e fúngicas. Também fornece abrigo para parasitas como ácaros e piolhos, que podem causar desconforto severo e condições de pele.' },
          { type: 'paragraph', text: 'Além disso, ovelhas com lã excessiva enfrentam maior risco de "cegueira por lã", onde o velo crescido em excesso ao redor do rosto obstrui sua visão, dificultando encontrar comida e água ou detectar predadores. Velo pesado também pode fazer com que as ovelhas fiquem "presas" - incapazes de se endireitarem se caírem de costas - uma situação potencialmente fatal.' },
          { type: 'heading', text: 'O Processo de Tosquia' },
          { type: 'paragraph', text: 'Tosquiadores profissionais são treinados para remover o velo eficientemente priorizando o bem-estar das ovelhas. O processo, quando feito adequadamente por mãos experientes, é rápido e não causa dano ao animal. Tosquiadores habilidosos trabalham metodicamente, garantindo que as ovelhas permaneçam calmas durante todo o processo.' },
          { type: 'paragraph', text: 'Em nosso trabalho com criadores de ovelhas do Pampa, priorizamos práticas éticas de tosquia. Os pastores com quem colaboramos tratam seus animais com respeito e cuidado, vendo a tosquia não como uma extração de recursos, mas como um serviço necessário ao bem-estar das ovelhas.' },
          { type: 'heading', text: 'Momento Sazonal e Cuidado' },
          { type: 'paragraph', text: 'O momento é crucial para a tosquia ética. A maioria das ovelhas é tosquiada na primavera, após os meses mais frios terem passado, mas antes do calor do verão chegar. Este momento garante que as ovelhas estejam confortáveis através de extremos de temperatura - nem sobrecarregadas com velo excessivo no calor nem deixadas vulneráveis ao frio.' },
          { type: 'paragraph', text: 'Entender a importância da tosquia nos ajuda a apreciar a lã não como uma mercadoria tirada dos animais, mas como parte de uma relação mutuamente benéfica entre humanos e ovelhas - uma que, quando abordada eticamente, apoia a saúde e dignidade destes animais notáveis.' },
        ],
        es: [
          { type: 'paragraph', text: 'El esquileo no es simplemente un paso en la producción de lana - es una práctica esencial para la salud y comodidad de las ovejas. Las ovejas domésticas, a diferencia de sus ancestros salvajes, han sido criadas durante miles de años para producir lana continuamente. Sin esquileo regular, esta fibra natural continuaría creciendo sin control, creando serios problemas de salud y bienestar.' },
          { type: 'paragraph', text: 'El vellón de una oveja proporciona el aislamiento necesario durante los meses fríos, pero a medida que cambian las estaciones y suben las temperaturas, este abrigo grueso se convierte en una carga en lugar de un beneficio. La lana excesiva puede conducir al estrés térmico, problemas de movilidad y mayor vulnerabilidad a parásitos e infecciones.' },
          { type: 'heading', text: 'Beneficios para la Salud del Esquileo Adecuado' },
          { type: 'paragraph', text: 'El esquileo regular previene una serie de problemas de salud. El vellón sobrecrecido puede atrapar la humedad cerca de la piel, creando un ambiente ideal para infecciones bacterianas y fúngicas. También proporciona refugio para parásitos como ácaros y piojos, que pueden causar malestar severo y afecciones cutáneas.' },
          { type: 'paragraph', text: 'Además, las ovejas con lana excesiva enfrentan un mayor riesgo de "ceguera por lana", donde el vellón sobrecrecido alrededor de la cara obstruye su visión, dificultando encontrar comida y agua o detectar depredadores. El vellón pesado también puede hacer que las ovejas queden "atrapadas" - incapaces de enderezarse si caen de espaldas - una situación potencialmente fatal.' },
          { type: 'heading', text: 'El Proceso de Esquileo' },
          { type: 'paragraph', text: 'Los esquiladores profesionales están capacitados para remover el vellón eficientemente priorizando el bienestar de las ovejas. El proceso, cuando se hace adecuadamente por manos experimentadas, es rápido y no causa daño al animal. Los esquiladores hábiles trabajan metódicamente, asegurando que las ovejas permanezcan calmadas durante todo el proceso.' },
          { type: 'paragraph', text: 'En nuestro trabajo con criadores de ovejas del Pampa, priorizamos prácticas éticas de esquileo. Los pastores con quienes colaboramos tratan a sus animales con respeto y cuidado, viendo el esquileo no como una extracción de recursos, sino como un servicio necesario para el bienestar de las ovejas.' },
          { type: 'heading', text: 'Momento Estacional y Cuidado' },
          { type: 'paragraph', text: 'El momento es crucial para el esquileo ético. La mayoría de las ovejas se esquilan en primavera, después de que hayan pasado los meses más fríos pero antes de que llegue el calor del verano. Este momento asegura que las ovejas estén cómodas a través de extremos de temperatura - ni sobrecargadas con vellón excesivo en el calor ni dejadas vulnerables al frío.' },
          { type: 'paragraph', text: 'Entender la importancia del esquileo nos ayuda a apreciar la lana no como una mercancía tomada de los animales, sino como parte de una relación mutuamente beneficiosa entre humanos y ovejas - una que, cuando se aborda éticamente, apoya la salud y dignidad de estos animales notables.' },
        ],
        fr: [
          { type: 'paragraph', text: 'La tonte n\'est pas simplement une étape de la production de laine - c\'est une pratique essentielle pour la santé et le confort des moutons. Les moutons domestiques, contrairement à leurs ancêtres sauvages, ont été élevés pendant des milliers d\'années pour produire de la laine en continu. Sans tonte régulière, cette fibre naturelle continuerait à pousser sans contrôle, créant de sérieux problèmes de santé et de bien-être.' },
          { type: 'paragraph', text: 'La toison d\'un mouton fournit l\'isolation nécessaire pendant les mois froids, mais à mesure que les saisons changent et que les températures augmentent, ce manteau épais devient un fardeau plutôt qu\'un avantage. Une laine excessive peut entraîner un stress thermique, des problèmes de mobilité et une vulnérabilité accrue aux parasites et aux infections.' },
          { type: 'heading', text: 'Avantages pour la Santé d\'une Tonte Appropriée' },
          { type: 'paragraph', text: 'La tonte régulière prévient une série de problèmes de santé. Une toison trop développée peut piéger l\'humidité près de la peau, créant un environnement idéal pour les infections bactériennes et fongiques. Elle fournit également un abri aux parasites comme les acariens et les poux, qui peuvent causer un inconfort sévère et des affections cutanées.' },
          { type: 'paragraph', text: 'De plus, les moutons avec une laine excessive font face à un risque accru de "cécité par la laine", où la toison trop développée autour du visage obstrue leur vision, rendant difficile de trouver de la nourriture et de l\'eau ou de détecter les prédateurs. Une toison lourde peut également faire en sorte que les moutons restent "bloqués" - incapables de se redresser s\'ils tombent sur le dos - une situation potentiellement fatale.' },
          { type: 'heading', text: 'Le Processus de Tonte' },
          { type: 'paragraph', text: 'Les tondeurs professionnels sont formés pour enlever la toison efficacement tout en priorisant le bien-être des moutons. Le processus, lorsqu\'il est fait correctement par des mains expérimentées, est rapide et ne cause aucun dommage à l\'animal. Les tondeurs qualifiés travaillent méthodiquement, s\'assurant que les moutons restent calmes tout au long du processus.' },
          { type: 'paragraph', text: 'Dans notre travail avec les éleveurs de moutons du Pampa, nous priorisons les pratiques éthiques de tonte. Les bergers avec qui nous collaborons traitent leurs animaux avec respect et soin, voyant la tonte non comme une extraction de ressources, mais comme un service nécessaire au bien-être des moutons.' },
          { type: 'heading', text: 'Moment Saisonnier et Soins' },
          { type: 'paragraph', text: 'Le moment est crucial pour une tonte éthique. La plupart des moutons sont tondus au printemps, après que les mois les plus froids soient passés mais avant l\'arrivée de la chaleur estivale. Ce moment assure que les moutons soient confortables à travers les extrêmes de température - ni surchargés de toison excessive dans la chaleur ni laissés vulnérables au froid.' },
          { type: 'paragraph', text: 'Comprendre l\'importance de la tonte nous aide à apprécier la laine non comme une marchandise prise aux animaux, mais comme partie d\'une relation mutuellement bénéfique entre humains et moutons - une qui, lorsqu\'elle est abordée éthiquement, soutient la santé et la dignité de ces animaux remarquables.' },
        ],
      },
    },
    'beneficios-pecas-feitas-la': {
      title: {
        en: 'Benefits of Wool Garments',
        pt: 'Benefícios das Peças Feitas de Lã',
        es: 'Beneficios de las Prendas de Lana',
        fr: 'Avantages des Vêtements en Laine',
      },
      category: {
        en: 'Wool Benefits',
        pt: 'Benefícios da Lã',
        es: 'Beneficios de la Lana',
        fr: 'Avantages de la Laine',
      },
      date: '2024-10-10',
      readTime: '6 min',
      heroImage: '/blog/blog_beneficios_das_pecas.jpg',
      content: {
        en: [
          { type: 'paragraph', text: 'Wool has been humanity\'s companion through millennia, and for good reason. This remarkable natural fiber possesses properties that modern synthetic materials struggle to replicate, even with advanced technology. Understanding wool\'s benefits helps us appreciate why it remains an exceptional choice for clothing.' },
          { type: 'heading', text: 'Natural Temperature Regulation' },
          { type: 'paragraph', text: 'Wool\'s structure creates tiny air pockets that provide natural insulation, keeping you warm in cold weather. Yet unlike synthetic insulation, wool is also breathable - it wicks moisture away from your skin and allows air circulation. This means wool garments keep you comfortable across a surprisingly wide range of temperatures.' },
          { type: 'paragraph', text: 'This thermoregulation is why traditional Pampa gauchos wear wool ponchos year-round. The same garment provides warmth during cold mornings and breathability under the afternoon sun - an adaptive quality that no synthetic fabric can truly match.' },
          { type: 'heading', text: 'Moisture Management and Odor Resistance' },
          { type: 'paragraph', text: 'Wool can absorb up to 30% of its weight in moisture while still feeling dry to the touch. This exceptional moisture-wicking property keeps your skin comfortable and prevents the clammy feeling associated with sweat-soaked synthetic fabrics.' },
          { type: 'paragraph', text: 'Additionally, wool has natural antibacterial properties. The fiber\'s structure and chemistry prevent bacteria from thriving, which means wool garments resist odors even after extended wear. A wool piece worn for several days will remain far fresher than its synthetic equivalent.' },
          { type: 'heading', text: 'Durability and Longevity' },
          { type: 'paragraph', text: 'Wool fibers are naturally elastic - they can be bent thousands of times without breaking. This resilience means quality wool garments resist wrinkles and maintain their shape through years of wear. Wool\'s natural durability is enhanced when combined with traditional construction techniques, resulting in pieces that can last decades with proper care.' },
          { type: 'paragraph', text: 'This longevity represents the ultimate sustainability - a single wool garment that lasts twenty years has far less environmental impact than synthetic pieces replaced every season.' },
          { type: 'heading', text: 'Natural and Renewable' },
          { type: 'paragraph', text: 'Unlike petroleum-based synthetic fibers, wool is completely natural and renewable. Sheep grow new fleece every year, making wool production inherently sustainable when managed ethically. At the end of its long life, wool biodegrades naturally, returning nutrients to the earth rather than persisting as microplastic pollution.' },
          { type: 'paragraph', text: 'Choosing wool means choosing a material that works with nature rather than against it - honoring both the past and the future through your daily wear.' },
        ],
        pt: [
          { type: 'paragraph', text: 'A lã tem sido companheira da humanidade por milênios, e por boas razões. Esta fibra natural notável possui propriedades que materiais sintéticos modernos lutam para replicar, mesmo com tecnologia avançada. Entender os benefícios da lã nos ajuda a apreciar por que ela permanece uma escolha excepcional para roupas.' },
          { type: 'heading', text: 'Regulação Natural de Temperatura' },
          { type: 'paragraph', text: 'A estrutura da lã cria pequenos bolsões de ar que fornecem isolamento natural, mantendo você aquecido em clima frio. No entanto, ao contrário do isolamento sintético, a lã também é respirável - ela afasta a umidade da sua pele e permite circulação de ar. Isso significa que peças de lã mantêm você confortável através de uma gama surpreendentemente ampla de temperaturas.' },
          { type: 'paragraph', text: 'Esta termorregulação é por que os gaúchos tradicionais do Pampa usam ponchos de lã o ano todo. A mesma peça fornece calor durante manhãs frias e respirabilidade sob o sol da tarde - uma qualidade adaptativa que nenhum tecido sintético pode verdadeiramente igualar.' },
          { type: 'heading', text: 'Gerenciamento de Umidade e Resistência a Odores' },
          { type: 'paragraph', text: 'A lã pode absorver até 30% de seu peso em umidade enquanto ainda parece seca ao toque. Esta propriedade excepcional de absorção de umidade mantém sua pele confortável e previne a sensação pegajosa associada a tecidos sintéticos encharcados de suor.' },
          { type: 'paragraph', text: 'Além disso, a lã tem propriedades antibacterianas naturais. A estrutura e química da fibra impedem que bactérias prosperem, o que significa que peças de lã resistem a odores mesmo após uso prolongado. Uma peça de lã usada por vários dias permanecerá muito mais fresca do que seu equivalente sintético.' },
          { type: 'heading', text: 'Durabilidade e Longevidade' },
          { type: 'paragraph', text: 'Fibras de lã são naturalmente elásticas - elas podem ser dobradas milhares de vezes sem quebrar. Esta resiliência significa que peças de lã de qualidade resistem a rugas e mantêm sua forma através de anos de uso. A durabilidade natural da lã é aprimorada quando combinada com técnicas de construção tradicionais, resultando em peças que podem durar décadas com cuidado adequado.' },
          { type: 'paragraph', text: 'Esta longevidade representa a sustentabilidade definitiva - uma única peça de lã que dura vinte anos tem muito menos impacto ambiental do que peças sintéticas substituídas a cada temporada.' },
          { type: 'heading', text: 'Natural e Renovável' },
          { type: 'paragraph', text: 'Ao contrário de fibras sintéticas à base de petróleo, a lã é completamente natural e renovável. Ovelhas crescem novo velo a cada ano, tornando a produção de lã inerentemente sustentável quando gerenciada eticamente. Ao final de sua longa vida, a lã se biodegrada naturalmente, retornando nutrientes à terra em vez de persistir como poluição microplástica.' },
          { type: 'paragraph', text: 'Escolher lã significa escolher um material que trabalha com a natureza em vez de contra ela - honrando tanto o passado quanto o futuro através do seu uso diário.' },
        ],
        es: [
          { type: 'paragraph', text: 'La lana ha sido compañera de la humanidad durante milenios, y por buenas razones. Esta notable fibra natural posee propiedades que los materiales sintéticos modernos luchan por replicar, incluso con tecnología avanzada. Entender los beneficios de la lana nos ayuda a apreciar por qué sigue siendo una elección excepcional para la ropa.' },
          { type: 'heading', text: 'Regulación Natural de Temperatura' },
          { type: 'paragraph', text: 'La estructura de la lana crea pequeñas bolsas de aire que proporcionan aislamiento natural, manteniéndote caliente en clima frío. Sin embargo, a diferencia del aislamiento sintético, la lana también es transpirable - aleja la humedad de tu piel y permite la circulación de aire. Esto significa que las prendas de lana te mantienen cómodo a través de un rango sorprendentemente amplio de temperaturas.' },
          { type: 'paragraph', text: 'Esta termorregulación es por qué los gauchos tradicionales del Pampa usan ponchos de lana todo el año. La misma prenda proporciona calor durante las mañanas frías y transpirabilidad bajo el sol de la tarde - una cualidad adaptativa que ningún tejido sintético puede verdaderamente igualar.' },
          { type: 'heading', text: 'Gestión de Humedad y Resistencia a Olores' },
          { type: 'paragraph', text: 'La lana puede absorber hasta el 30% de su peso en humedad mientras aún se siente seca al tacto. Esta excepcional propiedad de absorción de humedad mantiene tu piel cómoda y previene la sensación pegajosa asociada con tejidos sintéticos empapados de sudor.' },
          { type: 'paragraph', text: 'Además, la lana tiene propiedades antibacterianas naturales. La estructura y química de la fibra impiden que las bacterias prosperen, lo que significa que las prendas de lana resisten los olores incluso después de un uso prolongado. Una pieza de lana usada durante varios días permanecerá mucho más fresca que su equivalente sintético.' },
          { type: 'heading', text: 'Durabilidad y Longevidad' },
          { type: 'paragraph', text: 'Las fibras de lana son naturalmente elásticas - pueden doblarse miles de veces sin romperse. Esta resistencia significa que las prendas de lana de calidad resisten las arrugas y mantienen su forma a través de años de uso. La durabilidad natural de la lana se mejora cuando se combina con técnicas de construcción tradicionales, resultando en piezas que pueden durar décadas con el cuidado adecuado.' },
          { type: 'paragraph', text: 'Esta longevidad representa la sostenibilidad definitiva - una sola prenda de lana que dura veinte años tiene mucho menos impacto ambiental que piezas sintéticas reemplazadas cada temporada.' },
          { type: 'heading', text: 'Natural y Renovable' },
          { type: 'paragraph', text: 'A diferencia de las fibras sintéticas a base de petróleo, la lana es completamente natural y renovable. Las ovejas cultivan nuevo vellón cada año, haciendo que la producción de lana sea inherentemente sostenible cuando se gestiona éticamente. Al final de su larga vida, la lana se biodegrada naturalmente, devolviendo nutrientes a la tierra en lugar de persistir como contaminación microplástica.' },
          { type: 'paragraph', text: 'Elegir lana significa elegir un material que trabaja con la naturaleza en lugar de contra ella - honrando tanto el pasado como el futuro a través de tu uso diario.' },
        ],
        fr: [
          { type: 'paragraph', text: 'La laine est le compagnon de l\'humanité depuis des millénaires, et pour de bonnes raisons. Cette fibre naturelle remarquable possède des propriétés que les matériaux synthétiques modernes peinent à reproduire, même avec une technologie avancée. Comprendre les avantages de la laine nous aide à apprécier pourquoi elle reste un choix exceptionnel pour les vêtements.' },
          { type: 'heading', text: 'Régulation Naturelle de la Température' },
          { type: 'paragraph', text: 'La structure de la laine crée de petites poches d\'air qui fournissent une isolation naturelle, vous gardant au chaud par temps froid. Pourtant, contrairement à l\'isolation synthétique, la laine est également respirante - elle évacue l\'humidité de votre peau et permet la circulation de l\'air. Cela signifie que les vêtements en laine vous gardent confortable à travers une gamme étonnamment large de températures.' },
          { type: 'paragraph', text: 'Cette thermorégulation explique pourquoi les gauchos traditionnels du Pampa portent des ponchos en laine toute l\'année. Le même vêtement fournit de la chaleur pendant les matinées froides et une respirabilité sous le soleil de l\'après-midi - une qualité adaptative qu\'aucun tissu synthétique ne peut vraiment égaler.' },
          { type: 'heading', text: 'Gestion de l\'Humidité et Résistance aux Odeurs' },
          { type: 'paragraph', text: 'La laine peut absorber jusqu\'à 30% de son poids en humidité tout en restant sèche au toucher. Cette propriété exceptionnelle d\'évacuation de l\'humidité garde votre peau confortable et prévient la sensation moite associée aux tissus synthétiques imbibés de sueur.' },
          { type: 'paragraph', text: 'De plus, la laine a des propriétés antibactériennes naturelles. La structure et la chimie de la fibre empêchent les bactéries de prospérer, ce qui signifie que les vêtements en laine résistent aux odeurs même après un port prolongé. Une pièce en laine portée pendant plusieurs jours restera beaucoup plus fraîche que son équivalent synthétique.' },
          { type: 'heading', text: 'Durabilité et Longévité' },
          { type: 'paragraph', text: 'Les fibres de laine sont naturellement élastiques - elles peuvent être pliées des milliers de fois sans se casser. Cette résilience signifie que les vêtements en laine de qualité résistent aux plis et maintiennent leur forme à travers des années de port. La durabilité naturelle de la laine est renforcée lorsqu\'elle est combinée avec des techniques de construction traditionnelles, résultant en des pièces qui peuvent durer des décennies avec un soin approprié.' },
          { type: 'paragraph', text: 'Cette longévité représente la durabilité ultime - un seul vêtement en laine qui dure vingt ans a un impact environnemental bien moindre que des pièces synthétiques remplacées chaque saison.' },
          { type: 'heading', text: 'Naturel et Renouvelable' },
          { type: 'paragraph', text: 'Contrairement aux fibres synthétiques à base de pétrole, la laine est complètement naturelle et renouvelable. Les moutons développent une nouvelle toison chaque année, rendant la production de laine intrinsèquement durable lorsqu\'elle est gérée éthiquement. À la fin de sa longue vie, la laine se biodégrade naturellement, retournant des nutriments à la terre plutôt que de persister comme pollution microplastique.' },
          { type: 'paragraph', text: 'Choisir la laine signifie choisir un matériau qui travaille avec la nature plutôt que contre elle - honorant à la fois le passé et l\'avenir à travers votre port quotidien.' },
        ],
      },
    },
    'como-cuidar-pecas-la': {
      title: {
        en: 'How to Care for Your Wool Pieces',
        pt: 'Como Cuidar das Peças Feitas em Lã',
        es: 'Cómo Cuidar Prendas de Lana',
        fr: 'Comment Entretenir Vos Pièces en Laine',
      },
      category: {
        en: 'Care Guide',
        pt: 'Guia de Cuidados',
        es: 'Guía de Cuidado',
        fr: 'Guide d\'Entretien',
      },
      date: '2024-10-05',
      readTime: '7 min',
      heroImage: '/blog/blog_cuidados_peca_de_la.png',
      content: {
        en: [
          { type: 'paragraph', text: 'Wool garments, when properly cared for, can last for decades - becoming more beautiful with time and developing a unique character that tells the story of your journey together. Understanding how to care for wool ensures your investment in quality continues to reward you for years to come.' },
          { type: 'heading', text: 'Washing: Less is More' },
          { type: 'paragraph', text: 'The first rule of wool care might surprise you: wash less frequently than you think necessary. Wool\'s natural antibacterial and odor-resistant properties mean it stays fresh far longer than synthetic fabrics. Often, simply airing a wool garment outside for a few hours will refresh it completely.' },
          { type: 'paragraph', text: 'When washing is necessary, use cold water and a gentle wool-specific detergent. Never use regular detergent or hot water, as these can cause felting and shrinkage. Hand washing is ideal, but if using a machine, choose the gentle or wool cycle and place the garment in a mesh bag for protection.' },
          { type: 'heading', text: 'Drying and Storage' },
          { type: 'paragraph', text: 'Never wring out wool or hang it to dry - the weight of water can stretch the fibers. Instead, gently press out excess water by rolling the garment in a clean towel, then lay it flat on a dry towel in its natural shape. Reshape while damp if needed, and allow to air dry away from direct heat or sunlight.' },
          { type: 'paragraph', text: 'For storage, fold wool pieces rather than hanging them to prevent stretching. Store in a cool, dry place with good air circulation. Natural moth deterrents like cedar or lavender are preferable to chemical mothballs. If storing for extended periods, ensure garments are clean first, as moths are attracted to body oils and food residues.' },
          { type: 'heading', text: 'Managing Pills and Wear' },
          { type: 'paragraph', text: 'Pilling - those small balls of fiber that appear on the surface - is natural for wool garments, especially in areas of friction like underarms or where bags rest. This is not a defect but a characteristic of natural fibers. Remove pills gently with a sweater comb or fabric shaver; the garment will actually become smoother over time as shorter fibers are removed.' },
          { type: 'paragraph', text: 'If you notice a pulled thread or small hole, address it promptly. A pulled loop can often be worked back through to the inside with a blunt needle. Small holes can be invisibly mended using traditional darning techniques - a skill worth learning to extend the life of beloved pieces.' },
          { type: 'heading', text: 'Embracing the Patina of Time' },
          { type: 'paragraph', text: 'Unlike fast fashion that deteriorates with age, well-made wool garments develop character. The slight softening of the fabric, the way it molds to your body, the patina of wear in frequently loved spots - these are marks of a garment truly lived in. Proper care preserves your wool while allowing it to tell your story, creating a piece that becomes more uniquely yours with each passing year.' },
        ],
        pt: [
          { type: 'paragraph', text: 'Peças de lã, quando cuidadas adequadamente, podem durar décadas - tornando-se mais bonitas com o tempo e desenvolvendo um caráter único que conta a história da sua jornada juntos. Entender como cuidar da lã garante que seu investimento em qualidade continue a recompensá-lo por anos.' },
          { type: 'heading', text: 'Lavagem: Menos é Mais' },
          { type: 'paragraph', text: 'A primeira regra de cuidado com lã pode surpreendê-lo: lave com menos frequência do que você pensa ser necessário. As propriedades antibacterianas e resistentes a odores naturais da lã significam que ela permanece fresca muito mais tempo do que tecidos sintéticos. Muitas vezes, simplesmente arejar uma peça de lã ao ar livre por algumas horas a refrescará completamente.' },
          { type: 'paragraph', text: 'Quando a lavagem for necessária, use água fria e um detergente suave específico para lã. Nunca use detergente comum ou água quente, pois podem causar feltragem e encolhimento. Lavar à mão é ideal, mas se usar uma máquina, escolha o ciclo delicado ou para lã e coloque a peça em uma bolsa de malha para proteção.' },
          { type: 'heading', text: 'Secagem e Armazenamento' },
          { type: 'paragraph', text: 'Nunca torça a lã ou pendure para secar - o peso da água pode esticar as fibras. Em vez disso, pressione suavemente o excesso de água enrolando a peça em uma toalha limpa, depois coloque-a plana sobre uma toalha seca em sua forma natural. Remodele enquanto úmida se necessário, e deixe secar ao ar longe de calor direto ou luz solar.' },
          { type: 'paragraph', text: 'Para armazenamento, dobre as peças de lã em vez de pendurá-las para evitar esticamento. Armazene em local fresco e seco com boa circulação de ar. Repelentes naturais de traças como cedro ou lavanda são preferíveis a naftalinas químicas. Se armazenar por períodos prolongados, garanta que as peças estejam limpas primeiro, pois as traças são atraídas por óleos corporais e resíduos de alimentos.' },
          { type: 'heading', text: 'Gerenciando Bolinhas e Desgaste' },
          { type: 'paragraph', text: 'O pilling - aquelas pequenas bolas de fibra que aparecem na superfície - é natural para peças de lã, especialmente em áreas de atrito como axilas ou onde bolsas descansam. Isto não é um defeito, mas uma característica de fibras naturais. Remova as bolinhas suavemente com um pente para suéteres ou removedor de fiapos; a peça na verdade ficará mais lisa com o tempo à medida que fibras mais curtas são removidas.' },
          { type: 'paragraph', text: 'Se notar um fio puxado ou pequeno buraco, resolva prontamente. Um laço puxado muitas vezes pode ser trabalhado de volta para o interior com uma agulha sem ponta. Pequenos buracos podem ser remendados invisivelmente usando técnicas tradicionais de cerzido - uma habilidade que vale a pena aprender para estender a vida de peças amadas.' },
          { type: 'heading', text: 'Abraçando a Pátina do Tempo' },
          { type: 'paragraph', text: 'Ao contrário da fast fashion que se deteriora com a idade, peças de lã bem feitas desenvolvem caráter. O leve amolecimento do tecido, a forma como se molda ao seu corpo, a pátina de desgaste em pontos frequentemente amados - estas são marcas de uma peça verdadeiramente vivida. O cuidado adequado preserva sua lã permitindo que ela conte sua história, criando uma peça que se torna mais exclusivamente sua a cada ano que passa.' },
        ],
        es: [
          { type: 'paragraph', text: 'Las prendas de lana, cuando se cuidan adecuadamente, pueden durar décadas - volviéndose más hermosas con el tiempo y desarrollando un carácter único que cuenta la historia de su viaje juntos. Entender cómo cuidar la lana asegura que su inversión en calidad continúe recompensándole durante años.' },
          { type: 'heading', text: 'Lavado: Menos es Más' },
          { type: 'paragraph', text: 'La primera regla del cuidado de la lana puede sorprenderle: lave con menos frecuencia de lo que cree necesario. Las propiedades antibacterianas y resistentes a olores naturales de la lana significan que permanece fresca mucho más tiempo que los tejidos sintéticos. A menudo, simplemente airear una prenda de lana al aire libre durante unas horas la refrescará completamente.' },
          { type: 'paragraph', text: 'Cuando sea necesario lavar, use agua fría y un detergente suave específico para lana. Nunca use detergente regular o agua caliente, ya que pueden causar afieltrado y encogimiento. Lavar a mano es ideal, pero si usa una máquina, elija el ciclo delicado o para lana y coloque la prenda en una bolsa de malla para protección.' },
          { type: 'heading', text: 'Secado y Almacenamiento' },
          { type: 'paragraph', text: 'Nunca escurra la lana ni la cuelgue para secar - el peso del agua puede estirar las fibras. En su lugar, presione suavemente el exceso de agua enrollando la prenda en una toalla limpia, luego colóquela plana sobre una toalla seca en su forma natural. Remodele mientras está húmeda si es necesario, y deje secar al aire lejos del calor directo o la luz solar.' },
          { type: 'paragraph', text: 'Para el almacenamiento, doble las piezas de lana en lugar de colgarlas para evitar el estiramiento. Almacene en un lugar fresco y seco con buena circulación de aire. Los repelentes naturales de polillas como el cedro o la lavanda son preferibles a las bolas de naftalina químicas. Si almacena por períodos prolongados, asegúrese de que las prendas estén limpias primero, ya que las polillas se sienten atraídas por los aceites corporales y residuos de alimentos.' },
          { type: 'heading', text: 'Manejando Bolitas y Desgaste' },
          { type: 'paragraph', text: 'El pilling - esas pequeñas bolas de fibra que aparecen en la superficie - es natural para prendas de lana, especialmente en áreas de fricción como axilas o donde descansan los bolsos. Esto no es un defecto sino una característica de fibras naturales. Retire las bolitas suavemente con un peine para suéteres o afeitadora de tela; la prenda en realidad se volverá más suave con el tiempo a medida que se eliminan las fibras más cortas.' },
          { type: 'paragraph', text: 'Si nota un hilo tirado o un pequeño agujero, abórdelo de inmediato. Un bucle tirado a menudo puede trabajarse de nuevo hacia el interior con una aguja sin punta. Los agujeros pequeños pueden remendarse invisiblemente usando técnicas tradicionales de zurcido - una habilidad que vale la pena aprender para extender la vida de piezas amadas.' },
          { type: 'heading', text: 'Abrazando la Pátina del Tiempo' },
          { type: 'paragraph', text: 'A diferencia de la moda rápida que se deteriora con la edad, las prendas de lana bien hechas desarrollan carácter. El ligero suavizado de la tela, la forma en que se moldea a su cuerpo, la pátina de desgaste en puntos frecuentemente amados - estas son marcas de una prenda verdaderamente vivida. El cuidado adecuado preserva su lana mientras le permite contar su historia, creando una pieza que se vuelve más únicamente suya con cada año que pasa.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Les vêtements en laine, lorsqu\'ils sont correctement entretenus, peuvent durer des décennies - devenant plus beaux avec le temps et développant un caractère unique qui raconte l\'histoire de votre voyage ensemble. Comprendre comment prendre soin de la laine garantit que votre investissement dans la qualité continue à vous récompenser pendant des années.' },
          { type: 'heading', text: 'Lavage : Moins c\'est Plus' },
          { type: 'paragraph', text: 'La première règle de l\'entretien de la laine pourrait vous surprendre : lavez moins fréquemment que vous ne le pensez nécessaire. Les propriétés antibactériennes et résistantes aux odeurs naturelles de la laine signifient qu\'elle reste fraîche bien plus longtemps que les tissus synthétiques. Souvent, simplement aérer un vêtement en laine à l\'extérieur pendant quelques heures le rafraîchira complètement.' },
          { type: 'paragraph', text: 'Lorsque le lavage est nécessaire, utilisez de l\'eau froide et un détergent doux spécifique à la laine. N\'utilisez jamais de détergent ordinaire ou d\'eau chaude, car ceux-ci peuvent causer le feutrage et le rétrécissement. Le lavage à la main est idéal, mais si vous utilisez une machine, choisissez le cycle délicat ou laine et placez le vêtement dans un sac en filet pour la protection.' },
          { type: 'heading', text: 'Séchage et Stockage' },
          { type: 'paragraph', text: 'Ne tordez jamais la laine ni ne la suspendez pour sécher - le poids de l\'eau peut étirer les fibres. Au lieu de cela, pressez doucement l\'excès d\'eau en roulant le vêtement dans une serviette propre, puis posez-le à plat sur une serviette sèche dans sa forme naturelle. Reformez pendant qu\'il est humide si nécessaire, et laissez sécher à l\'air loin de la chaleur directe ou du soleil.' },
          { type: 'paragraph', text: 'Pour le stockage, pliez les pièces en laine plutôt que de les suspendre pour éviter l\'étirement. Stockez dans un endroit frais et sec avec une bonne circulation d\'air. Les répulsifs naturels contre les mites comme le cèdre ou la lavande sont préférables aux boules de naphtaline chimiques. Si vous stockez pendant de longues périodes, assurez-vous que les vêtements sont propres d\'abord, car les mites sont attirées par les huiles corporelles et les résidus alimentaires.' },
          { type: 'heading', text: 'Gérer les Bouloches et l\'Usure' },
          { type: 'paragraph', text: 'Le boulochage - ces petites boules de fibres qui apparaissent sur la surface - est naturel pour les vêtements en laine, en particulier dans les zones de friction comme les aisselles ou là où les sacs reposent. Ce n\'est pas un défaut mais une caractéristique des fibres naturelles. Retirez les bouloches doucement avec un peigne à pull ou une tondeuse à tissu; le vêtement deviendra en fait plus lisse au fil du temps à mesure que les fibres plus courtes sont retirées.' },
          { type: 'paragraph', text: 'Si vous remarquez un fil tiré ou un petit trou, traitez-le rapidement. Une boucle tirée peut souvent être retravaillée vers l\'intérieur avec une aiguille émoussée. Les petits trous peuvent être réparés invisiblement en utilisant des techniques traditionnelles de reprisage - une compétence qui vaut la peine d\'être apprise pour prolonger la vie de pièces bien-aimées.' },
          { type: 'heading', text: 'Embrasser la Patine du Temps' },
          { type: 'paragraph', text: 'Contrairement à la mode rapide qui se détériore avec l\'âge, les vêtements en laine bien faits développent du caractère. Le léger adoucissement du tissu, la façon dont il se moule à votre corps, la patine d\'usure dans les endroits fréquemment aimés - ce sont les marques d\'un vêtement vraiment vécu. Un soin approprié préserve votre laine tout en lui permettant de raconter votre histoire, créant une pièce qui devient plus uniquement la vôtre à chaque année qui passe.' },
        ],
      },
    },
    'tecnica-feltragem': {
      title: {
        en: 'Do You Know the Felting Technique?',
        pt: 'Você Conhece a Técnica de Feltragem?',
        es: '¿Conoces la Técnica del Fieltro?',
        fr: 'Connaissez-Vous la Technique du Feutrage?',
      },
      category: {
        en: 'Techniques',
        pt: 'Técnicas',
        es: 'Técnicas',
        fr: 'Techniques',
      },
      date: '2024-09-28',
      readTime: '9 min',
      heroImage: '/blog/blog_tecnica_de_feltragem.avif',
      content: {
        en: [
          { type: 'paragraph', text: 'Felting is one of humanity\'s oldest textile techniques, predating both spinning and weaving. This ancient art transforms loose wool fibers into a dense, matted fabric through the application of moisture, heat, and friction. The resulting material is warm, durable, and water-resistant - qualities that made felt essential to nomadic peoples across Central Asia for millennia.' },
          { type: 'heading', text: 'The Science of Felting' },
          { type: 'paragraph', text: 'Wool fibers are covered in microscopic scales that overlap like roof shingles. Normally, these scales lie flat, allowing fibers to slide past each other. But when wool is subjected to moisture, heat, and agitation, the scales open up and interlock with neighboring fibers. Once interlocked, they cannot easily be separated - the fibers have become felt.' },
          { type: 'paragraph', text: 'This unique property exists only in animal fibers with scaled surfaces, primarily wool. Synthetic fibers, lacking these scales, cannot be felted through traditional methods. This makes felting an inherently natural process, one that requires no adhesives or artificial binding agents.' },
          { type: 'heading', text: 'Traditional Felting Methods' },
          { type: 'paragraph', text: 'Wet felting is the most ancient technique. Layers of carded wool are laid out in desired patterns, then moistened with hot soapy water. The feltmaker then applies friction - traditionally by rolling the wool in reed mats or rubbing it between the hands. The combination of heat, moisture, soap, and agitation causes the fibers to migrate, tangle, and ultimately lock together into a cohesive fabric.' },
          { type: 'paragraph', text: 'Needle felting is a more recent innovation, developed in the industrial age but now widely used by artisans. Special barbed needles are repeatedly punched through layers of wool, mechanically tangling the fibers. This dry method allows for precise sculptural work and detailed surface designs without the shrinkage inherent in wet felting.' },
          { type: 'heading', text: 'Cultural Heritage' },
          { type: 'paragraph', text: 'Felt-making traditions span the globe, from Mongolian yurts to Turkish carpets to Scandinavian boots. Each culture developed unique approaches suited to their climate, available materials, and aesthetic traditions. In the Pampa region, while weaving dominated textile production, felting techniques were used for specialized items requiring extra warmth and water resistance.' },
          { type: 'paragraph', text: 'Today, feltmakers honor these ancient traditions while exploring contemporary applications. Felt\'s unique properties - its ability to be shaped three-dimensionally, its acoustic dampening qualities, its natural water resistance - make it relevant for modern design while maintaining connections to our textile heritage.' },
          { type: 'heading', text: 'Felting in Contemporary Practice' },
          { type: 'paragraph', text: 'In our work, we occasionally incorporate felted elements for their unique textural and structural qualities. A felted collar provides warmth without bulk. Felted accents add visual interest and depth. Small felted accessories showcase the technique\'s versatility.' },
          { type: 'paragraph', text: 'Learning to felt connects us to thousands of years of human ingenuity - to the first person who noticed that wet, warm wool, when agitated, transforms into something new and useful. It reminds us that sometimes the most sophisticated techniques are also the most elemental, arising from deep observation of natural materials and their possibilities.' },
        ],
        pt: [
          { type: 'paragraph', text: 'A feltragem é uma das técnicas têxteis mais antigas da humanidade, anterior tanto à fiação quanto à tecelagem. Esta arte antiga transforma fibras soltas de lã em um tecido denso e emaranhado através da aplicação de umidade, calor e fricção. O material resultante é quente, durável e resistente à água - qualidades que tornaram o feltro essencial para povos nômades da Ásia Central por milênios.' },
          { type: 'heading', text: 'A Ciência da Feltragem' },
          { type: 'paragraph', text: 'As fibras de lã são cobertas por escamas microscópicas que se sobrepõem como telhas de telhado. Normalmente, essas escamas ficam planas, permitindo que as fibras deslizem umas sobre as outras. Mas quando a lã é submetida à umidade, calor e agitação, as escamas se abrem e se entrelaçam com as fibras vizinhas. Uma vez entrelaçadas, não podem ser facilmente separadas - as fibras se tornaram feltro.' },
          { type: 'paragraph', text: 'Esta propriedade única existe apenas em fibras animais com superfícies escamosas, principalmente lã. Fibras sintéticas, sem essas escamas, não podem ser feltradas através de métodos tradicionais. Isso torna a feltragem um processo inerentemente natural, que não requer adesivos ou agentes de ligação artificiais.' },
          { type: 'heading', text: 'Métodos Tradicionais de Feltragem' },
          { type: 'paragraph', text: 'A feltragem úmida é a técnica mais antiga. Camadas de lã cardada são dispostas nos padrões desejados, depois umedecidas com água quente e sabão. O feltrador então aplica fricção - tradicionalmente enrolando a lã em esteiras de junco ou esfregando entre as mãos. A combinação de calor, umidade, sabão e agitação faz com que as fibras migrem, se emaranhem e finalmente se prendam juntas em um tecido coeso.' },
          { type: 'paragraph', text: 'A feltragem com agulha é uma inovação mais recente, desenvolvida na era industrial mas agora amplamente usada por artesãos. Agulhas especiais farpadas são repetidamente perfuradas através de camadas de lã, emaranhando mecanicamente as fibras. Este método seco permite trabalho escultural preciso e desenhos de superfície detalhados sem o encolhimento inerente à feltragem úmida.' },
          { type: 'heading', text: 'Patrimônio Cultural' },
          { type: 'paragraph', text: 'As tradições de fabricação de feltro abrangem o globo, de yurts mongóis a tapetes turcos a botas escandinavas. Cada cultura desenvolveu abordagens únicas adequadas ao seu clima, materiais disponíveis e tradições estéticas. Na região do Pampa, enquanto a tecelagem dominava a produção têxtil, técnicas de feltragem eram usadas para itens especializados que exigiam calor extra e resistência à água.' },
          { type: 'paragraph', text: 'Hoje, feltradores honram essas tradições antigas enquanto exploram aplicações contemporâneas. As propriedades únicas do feltro - sua capacidade de ser moldado tridimensionalmente, suas qualidades de amortecimento acústico, sua resistência natural à água - o tornam relevante para o design moderno mantendo conexões com nosso patrimônio têxtil.' },
          { type: 'heading', text: 'Feltragem na Prática Contemporânea' },
          { type: 'paragraph', text: 'Em nosso trabalho, ocasionalmente incorporamos elementos feltrados por suas qualidades texturais e estruturais únicas. Um colarinho feltrado fornece calor sem volume. Acentos feltrados adicionam interesse visual e profundidade. Pequenos acessórios feltrados mostram a versatilidade da técnica.' },
          { type: 'paragraph', text: 'Aprender a feltrar nos conecta a milhares de anos de engenhosidade humana - à primeira pessoa que notou que lã molhada e quente, quando agitada, se transforma em algo novo e útil. Nos lembra que às vezes as técnicas mais sofisticadas também são as mais elementares, surgindo da observação profunda de materiais naturais e suas possibilidades.' },
        ],
        es: [
          { type: 'paragraph', text: 'El afieltrado es una de las técnicas textiles más antiguas de la humanidad, anterior tanto al hilado como al tejido. Este arte antiguo transforma fibras sueltas de lana en un tejido denso y enmarañado a través de la aplicación de humedad, calor y fricción. El material resultante es cálido, duradero y resistente al agua - cualidades que hicieron el fieltro esencial para pueblos nómadas de Asia Central durante milenios.' },
          { type: 'heading', text: 'La Ciencia del Afieltrado' },
          { type: 'paragraph', text: 'Las fibras de lana están cubiertas de escamas microscópicas que se superponen como tejas de techo. Normalmente, estas escamas quedan planas, permitiendo que las fibras se deslicen unas sobre otras. Pero cuando la lana se somete a humedad, calor y agitación, las escamas se abren y se entrelazan con fibras vecinas. Una vez entrelazadas, no pueden separarse fácilmente - las fibras se han convertido en fieltro.' },
          { type: 'paragraph', text: 'Esta propiedad única existe solo en fibras animales con superficies escamosas, principalmente lana. Las fibras sintéticas, sin estas escamas, no pueden afieltrarse a través de métodos tradicionales. Esto hace que el afieltrado sea un proceso inherentemente natural, que no requiere adhesivos o agentes de unión artificiales.' },
          { type: 'heading', text: 'Métodos Tradicionales de Afieltrado' },
          { type: 'paragraph', text: 'El afieltrado húmedo es la técnica más antigua. Capas de lana cardada se disponen en patrones deseados, luego se humedecen con agua caliente y jabón. El fieltrero luego aplica fricción - tradicionalmente enrollando la lana en esteras de junco o frotándola entre las manos. La combinación de calor, humedad, jabón y agitación hace que las fibras migren, se enreden y finalmente se bloqueen juntas en un tejido cohesivo.' },
          { type: 'paragraph', text: 'El afieltrado con aguja es una innovación más reciente, desarrollada en la era industrial pero ahora ampliamente utilizada por artesanos. Agujas especiales con púas se perforan repetidamente a través de capas de lana, enredando mecánicamente las fibras. Este método seco permite un trabajo escultural preciso y diseños de superficie detallados sin la contracción inherente al afieltrado húmedo.' },
          { type: 'heading', text: 'Patrimonio Cultural' },
          { type: 'paragraph', text: 'Las tradiciones de fabricación de fieltro abarcan el globo, desde yurtas mongolas hasta alfombras turcas y botas escandinavas. Cada cultura desarrolló enfoques únicos adecuados a su clima, materiales disponibles y tradiciones estéticas. En la región del Pampa, mientras el tejido dominaba la producción textil, las técnicas de afieltrado se usaban para artículos especializados que requerían calor extra y resistencia al agua.' },
          { type: 'paragraph', text: 'Hoy, los fietreros honran estas antiguas tradiciones mientras exploran aplicaciones contemporáneas. Las propiedades únicas del fieltro - su capacidad de ser moldeado tridimensionalmente, sus cualidades de amortiguación acústica, su resistencia natural al agua - lo hacen relevante para el diseño moderno mientras mantiene conexiones con nuestro patrimonio textil.' },
          { type: 'heading', text: 'Afieltrado en la Práctica Contemporánea' },
          { type: 'paragraph', text: 'En nuestro trabajo, ocasionalmente incorporamos elementos afieltrados por sus cualidades texturales y estructurales únicas. Un cuello afieltrado proporciona calor sin volumen. Los acentos afieltrados añaden interés visual y profundidad. Los pequeños accesorios afieltrados muestran la versatilidad de la técnica.' },
          { type: 'paragraph', text: 'Aprender a afieltrar nos conecta con miles de años de ingenio humano - con la primera persona que notó que la lana húmeda y caliente, cuando se agita, se transforma en algo nuevo y útil. Nos recuerda que a veces las técnicas más sofisticadas también son las más elementales, surgiendo de la observación profunda de materiales naturales y sus posibilidades.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Le feutrage est l\'une des techniques textiles les plus anciennes de l\'humanité, antérieure à la fois au filage et au tissage. Cet art ancien transforme les fibres de laine lâches en un tissu dense et emmêlé grâce à l\'application d\'humidité, de chaleur et de friction. Le matériau résultant est chaud, durable et résistant à l\'eau - des qualités qui ont rendu le feutre essentiel pour les peuples nomades d\'Asie centrale pendant des millénaires.' },
          { type: 'heading', text: 'La Science du Feutrage' },
          { type: 'paragraph', text: 'Les fibres de laine sont couvertes d\'écailles microscopiques qui se chevauchent comme des tuiles de toit. Normalement, ces écailles restent à plat, permettant aux fibres de glisser les unes sur les autres. Mais lorsque la laine est soumise à l\'humidité, à la chaleur et à l\'agitation, les écailles s\'ouvrent et s\'imbriquent avec les fibres voisines. Une fois imbriquées, elles ne peuvent pas être facilement séparées - les fibres sont devenues du feutre.' },
          { type: 'paragraph', text: 'Cette propriété unique existe uniquement dans les fibres animales avec des surfaces écaillées, principalement la laine. Les fibres synthétiques, dépourvues de ces écailles, ne peuvent pas être feutrées par des méthodes traditionnelles. Cela fait du feutrage un processus intrinsèquement naturel, qui ne nécessite aucun adhésif ou agent liant artificiel.' },
          { type: 'heading', text: 'Méthodes Traditionnelles de Feutrage' },
          { type: 'paragraph', text: 'Le feutrage humide est la technique la plus ancienne. Des couches de laine cardée sont disposées selon les motifs souhaités, puis humidifiées avec de l\'eau chaude savonneuse. Le feutrier applique ensuite la friction - traditionnellement en roulant la laine dans des nattes de roseau ou en la frottant entre les mains. La combinaison de chaleur, d\'humidité, de savon et d\'agitation fait migrer les fibres, s\'emmêler et finalement se verrouiller ensemble dans un tissu cohésif.' },
          { type: 'paragraph', text: 'Le feutrage à l\'aiguille est une innovation plus récente, développée à l\'ère industrielle mais maintenant largement utilisée par les artisans. Des aiguilles spéciales barbelées sont répétitivement perforées à travers des couches de laine, emmêlant mécaniquement les fibres. Cette méthode sèche permet un travail sculptural précis et des designs de surface détaillés sans le rétrécissement inhérent au feutrage humide.' },
          { type: 'heading', text: 'Patrimoine Culturel' },
          { type: 'paragraph', text: 'Les traditions de fabrication de feutre s\'étendent sur le globe, des yourtes mongoles aux tapis turcs en passant par les bottes scandinaves. Chaque culture a développé des approches uniques adaptées à son climat, aux matériaux disponibles et aux traditions esthétiques. Dans la région du Pampa, alors que le tissage dominait la production textile, les techniques de feutrage étaient utilisées pour des articles spécialisés nécessitant une chaleur supplémentaire et une résistance à l\'eau.' },
          { type: 'paragraph', text: 'Aujourd\'hui, les feutriers honorent ces anciennes traditions tout en explorant des applications contemporaines. Les propriétés uniques du feutre - sa capacité à être façonné en trois dimensions, ses qualités d\'amortissement acoustique, sa résistance naturelle à l\'eau - le rendent pertinent pour le design moderne tout en maintenant des connexions avec notre patrimoine textile.' },
          { type: 'heading', text: 'Feutrage dans la Pratique Contemporaine' },
          { type: 'paragraph', text: 'Dans notre travail, nous incorporons occasionnellement des éléments feutrés pour leurs qualités texturales et structurales uniques. Un col feutré fournit de la chaleur sans volume. Les accents feutrés ajoutent de l\'intérêt visuel et de la profondeur. Les petits accessoires feutrés montrent la polyvalence de la technique.' },
          { type: 'paragraph', text: 'Apprendre à feutrer nous connecte à des milliers d\'années d\'ingéniosité humaine - à la première personne qui a remarqué que la laine humide et chaude, lorsqu\'elle est agitée, se transforme en quelque chose de nouveau et d\'utile. Cela nous rappelle que parfois les techniques les plus sophistiquées sont aussi les plus élémentaires, découlant d\'une observation profonde des matériaux naturels et de leurs possibilités.' },
        ],
      },
    },
    'slow-fashion-vs-fast-fashion': {
      title: {
        en: 'Slow Fashion vs Fast Fashion: Understanding the Difference',
        pt: 'Slow Fashion vs Fast Fashion: Qual a Diferença?',
        es: 'Slow Fashion vs Fast Fashion: ¿Cuál es la Diferencia?',
        fr: 'Slow Fashion vs Fast Fashion: Quelle est la Différence?',
      },
      category: {
        en: 'Sustainability',
        pt: 'Sustentabilidade',
        es: 'Sostenibilidad',
        fr: 'Durabilité',
      },
      date: '2024-09-20',
      readTime: '10 min',
      heroImage: '/blog/blog_diferenca_slow_fast_fashion.jpg',
      content: {
        en: [
          { type: 'paragraph', text: 'The fashion industry stands at a crossroads. On one path lies fast fashion - a model built on rapid production, constant consumption, and planned obsolescence. On the other stands slow fashion - a philosophy that values quality, longevity, and ethical production. Understanding this distinction is crucial for anyone who wants their clothing choices to reflect their values.' },
          { type: 'heading', text: 'The Fast Fashion Model' },
          { type: 'paragraph', text: 'Fast fashion emerged in the late 20th century, transforming clothing from an investment into a disposable commodity. The model is simple: produce garments as cheaply and quickly as possible, sell them at low prices, and encourage consumers to replace them constantly with new "trends." Collections that once changed seasonally now rotate weekly, creating artificial urgency and perpetual dissatisfaction.' },
          { type: 'paragraph', text: 'This system relies on cutting every possible cost - paying workers poverty wages in countries with minimal labor protections, using the cheapest materials regardless of environmental impact, and designing clothes to fall apart after minimal wear. The true costs of fast fashion are externalized onto vulnerable workers, local communities, and the global environment.' },
          { type: 'heading', text: 'Environmental Impact' },
          { type: 'paragraph', text: 'Fast fashion is one of the world\'s most polluting industries. Synthetic fabrics - petroleum products that will never biodegrade - shed microplastics with every wash, contaminating oceans and entering food chains. Textile dyeing pollutes rivers. Cotton cultivation consumes vast amounts of water and pesticides. And most devastating of all, the sheer volume of clothing produced vastly exceeds human need, with millions of tons discarded annually, ending up in landfills or incinerated.' },
          { type: 'paragraph', text: 'The carbon footprint of fast fashion is staggering. A single cheap garment might travel thousands of miles through its production chain - raw materials sourced in one country, spun into yarn in another, woven into fabric in a third, sewn in a fourth, then shipped globally for sale. All this so it can be worn a handful of times before disposal.' },
          { type: 'heading', text: 'The Slow Fashion Alternative' },
          { type: 'paragraph', text: 'Slow fashion rejects this destructive model entirely. It returns to principles that governed clothing for most of human history: garments should be well-made, timeless in design, produced under fair conditions, and cherished for years or decades. Quality replaces quantity. Craftsmanship replaces mass production. Mindfulness replaces mindless consumption.' },
          { type: 'paragraph', text: 'Slow fashion brands produce seasonally or not at all, releasing pieces when they\'re ready rather than adhering to arbitrary fashion weeks. They use natural, sustainable materials. They pay workers fairly and maintain safe working conditions. They design clothes to last and support repair rather than replacement. They embrace transparency, allowing consumers to know exactly where and how their clothes were made.' },
          { type: 'heading', text: 'Making the Shift' },
          { type: 'paragraph', text: 'Transitioning from fast to slow fashion doesn\'t mean immediately discarding your existing wardrobe - that would simply create more waste. Instead, it means becoming more mindful. Before buying something new, ask: Do I truly need this? Will I wear it repeatedly? Is it well-made enough to last? Who made it and under what conditions?' },
          { type: 'paragraph', text: 'Choose versatile pieces over trendy ones. Invest in quality basics that will anchor your wardrobe for years. Learn basic repair skills. Shop secondhand. And when buying new, support brands that align with your values - even if it means owning fewer items.' },
          { type: 'paragraph', text: 'Slow fashion represents more than an alternative consumer choice - it\'s a rejection of a system that treats both people and planet as expendable. Every thoughtful purchase is a vote for a more just and sustainable future, one garment at a time.' },
        ],
        pt: [
          { type: 'paragraph', text: 'A indústria da moda está em uma encruzilhada. Em um caminho está a fast fashion - um modelo construído sobre produção rápida, consumo constante e obsolescência planejada. No outro está a slow fashion - uma filosofia que valoriza qualidade, longevidade e produção ética. Entender essa distinção é crucial para quem quer que suas escolhas de roupas reflitam seus valores.' },
          { type: 'heading', text: 'O Modelo Fast Fashion' },
          { type: 'paragraph', text: 'A fast fashion emergiu no final do século 20, transformando roupas de um investimento em uma mercadoria descartável. O modelo é simples: produzir peças o mais barato e rápido possível, vendê-las a preços baixos e encorajar consumidores a substituí-las constantemente com novas "tendências". Coleções que antes mudavam sazonalmente agora giram semanalmente, criando urgência artificial e insatisfação perpétua.' },
          { type: 'paragraph', text: 'Este sistema depende de cortar todos os custos possíveis - pagar aos trabalhadores salários de pobreza em países com proteções trabalhistas mínimas, usar os materiais mais baratos independentemente do impacto ambiental, e projetar roupas para desmoronar após uso mínimo. Os verdadeiros custos da fast fashion são externalizados para trabalhadores vulneráveis, comunidades locais e o ambiente global.' },
          { type: 'heading', text: 'Impacto Ambiental' },
          { type: 'paragraph', text: 'A fast fashion é uma das indústrias mais poluentes do mundo. Tecidos sintéticos - produtos de petróleo que nunca se biodegrada - liberam microplásticos a cada lavagem, contaminando oceanos e entrando em cadeias alimentares. O tingimento têxtil polui rios. O cultivo de algodão consome vastas quantidades de água e pesticidas. E o mais devastador de tudo, o volume absoluto de roupas produzidas excede vastamente a necessidade humana, com milhões de toneladas descartadas anualmente, terminando em aterros ou incineradas.' },
          { type: 'paragraph', text: 'A pegada de carbono da fast fashion é impressionante. Uma única peça barata pode viajar milhares de milhas através de sua cadeia de produção - matérias-primas obtidas em um país, fiadas em fio em outro, tecidas em tecido em um terceiro, costuradas em um quarto, depois enviadas globalmente para venda. Tudo isso para que possa ser usada algumas vezes antes do descarte.' },
          { type: 'heading', text: 'A Alternativa Slow Fashion' },
          { type: 'paragraph', text: 'A slow fashion rejeita completamente este modelo destrutivo. Ela retorna aos princípios que governaram roupas pela maior parte da história humana: peças devem ser bem feitas, atemporais em design, produzidas sob condições justas e apreciadas por anos ou décadas. Qualidade substitui quantidade. Artesanato substitui produção em massa. Consciência substitui consumo inconsciente.' },
          { type: 'paragraph', text: 'Marcas de slow fashion produzem sazonalmente ou nem isso, lançando peças quando estão prontas em vez de aderir a semanas de moda arbitrárias. Elas usam materiais naturais e sustentáveis. Pagam trabalhadores justamente e mantêm condições de trabalho seguras. Projetam roupas para durar e apoiam reparo em vez de substituição. Abraçam a transparência, permitindo que consumidores saibam exatamente onde e como suas roupas foram feitas.' },
          { type: 'heading', text: 'Fazendo a Mudança' },
          { type: 'paragraph', text: 'A transição de fast para slow fashion não significa descartar imediatamente seu guarda-roupa existente - isso simplesmente criaria mais desperdício. Em vez disso, significa tornar-se mais consciente. Antes de comprar algo novo, pergunte: Eu realmente preciso disso? Vou usar repetidamente? É bem feito o suficiente para durar? Quem fez e sob quais condições?' },
          { type: 'paragraph', text: 'Escolha peças versáteis sobre as da moda. Invista em básicos de qualidade que ancorem seu guarda-roupa por anos. Aprenda habilidades básicas de reparo. Compre de segunda mão. E ao comprar novo, apoie marcas que se alinham com seus valores - mesmo que isso signifique possuir menos itens.' },
          { type: 'paragraph', text: 'Slow fashion representa mais do que uma escolha alternativa de consumidor - é uma rejeição de um sistema que trata tanto pessoas quanto o planeta como descartáveis. Cada compra pensada é um voto por um futuro mais justo e sustentável, uma peça de cada vez.' },
        ],
        es: [
          { type: 'paragraph', text: 'La industria de la moda está en una encrucijada. En un camino está la moda rápida - un modelo construido sobre producción rápida, consumo constante y obsolescencia planificada. En el otro está la moda lenta - una filosofía que valora la calidad, la longevidad y la producción ética. Entender esta distinción es crucial para cualquiera que quiera que sus elecciones de ropa reflejen sus valores.' },
          { type: 'heading', text: 'El Modelo de Moda Rápida' },
          { type: 'paragraph', text: 'La moda rápida surgió a finales del siglo XX, transformando la ropa de una inversión en una mercancía desechable. El modelo es simple: producir prendas lo más barato y rápido posible, venderlas a precios bajos y alentar a los consumidores a reemplazarlas constantemente con nuevas "tendencias". Las colecciones que antes cambiaban estacionalmente ahora rotan semanalmente, creando urgencia artificial e insatisfacción perpetua.' },
          { type: 'paragraph', text: 'Este sistema depende de cortar todos los costos posibles - pagar a los trabajadores salarios de pobreza en países con protecciones laborales mínimas, usar los materiales más baratos sin importar el impacto ambiental, y diseñar ropa para desmoronarse después de un uso mínimo. Los verdaderos costos de la moda rápida se externalizan a trabajadores vulnerables, comunidades locales y el medio ambiente global.' },
          { type: 'heading', text: 'Impacto Ambiental' },
          { type: 'paragraph', text: 'La moda rápida es una de las industrias más contaminantes del mundo. Los tejidos sintéticos - productos del petróleo que nunca se biodegradan - liberan microplásticos con cada lavado, contaminando océanos y entrando en cadenas alimentarias. El teñido textil contamina ríos. El cultivo de algodón consume vastas cantidades de agua y pesticidas. Y lo más devastador de todo, el volumen absoluto de ropa producida excede vastamente la necesidad humana, con millones de toneladas descartadas anualmente, terminando en vertederos o incineradas.' },
          { type: 'paragraph', text: 'La huella de carbono de la moda rápida es asombrosa. Una sola prenda barata puede viajar miles de millas a través de su cadena de producción - materias primas obtenidas en un país, hiladas en hilo en otro, tejidas en tela en un tercero, cosidas en un cuarto, luego enviadas globalmente para la venta. Todo esto para que pueda ser usada un puñado de veces antes del descarte.' },
          { type: 'heading', text: 'La Alternativa de Moda Lenta' },
          { type: 'paragraph', text: 'La moda lenta rechaza completamente este modelo destructivo. Regresa a principios que gobernaron la ropa durante la mayor parte de la historia humana: las prendas deben estar bien hechas, ser atemporales en diseño, producidas bajo condiciones justas y apreciadas durante años o décadas. La calidad reemplaza la cantidad. La artesanía reemplaza la producción en masa. La conciencia reemplaza el consumo inconsciente.' },
          { type: 'paragraph', text: 'Las marcas de moda lenta producen estacionalmente o no del todo, lanzando piezas cuando están listas en lugar de adherirse a semanas de moda arbitrarias. Usan materiales naturales y sostenibles. Pagan a los trabajadores justamente y mantienen condiciones de trabajo seguras. Diseñan ropa para durar y apoyan la reparación en lugar del reemplazo. Abrazan la transparencia, permitiendo que los consumidores sepan exactamente dónde y cómo se hizo su ropa.' },
          { type: 'heading', text: 'Haciendo el Cambio' },
          { type: 'paragraph', text: 'La transición de moda rápida a lenta no significa descartar inmediatamente tu guardarropa existente - eso simplemente crearía más desperdicio. En cambio, significa volverse más consciente. Antes de comprar algo nuevo, pregunta: ¿Realmente necesito esto? ¿Lo usaré repetidamente? ¿Está lo suficientemente bien hecho para durar? ¿Quién lo hizo y bajo qué condiciones?' },
          { type: 'paragraph', text: 'Elige piezas versátiles sobre las de moda. Invierte en básicos de calidad que anclen tu guardarropa durante años. Aprende habilidades básicas de reparación. Compra de segunda mano. Y al comprar nuevo, apoya marcas que se alineen con tus valores - incluso si eso significa poseer menos artículos.' },
          { type: 'paragraph', text: 'La moda lenta representa más que una elección alternativa de consumidor - es un rechazo de un sistema que trata tanto a las personas como al planeta como desechables. Cada compra reflexiva es un voto por un futuro más justo y sostenible, una prenda a la vez.' },
        ],
        fr: [
          { type: 'paragraph', text: 'L\'industrie de la mode est à la croisée des chemins. Sur un chemin se trouve la mode rapide - un modèle construit sur la production rapide, la consommation constante et l\'obsolescence programmée. Sur l\'autre se trouve la mode lente - une philosophie qui valorise la qualité, la longévité et la production éthique. Comprendre cette distinction est crucial pour quiconque veut que ses choix vestimentaires reflètent ses valeurs.' },
          { type: 'heading', text: 'Le Modèle de la Mode Rapide' },
          { type: 'paragraph', text: 'La mode rapide a émergé à la fin du 20e siècle, transformant les vêtements d\'un investissement en une marchandise jetable. Le modèle est simple : produire des vêtements le plus rapidement et le moins cher possible, les vendre à bas prix et encourager les consommateurs à les remplacer constamment par de nouvelles "tendances". Les collections qui changeaient autrefois de façon saisonnière tournent maintenant chaque semaine, créant une urgence artificielle et une insatisfaction perpétuelle.' },
          { type: 'paragraph', text: 'Ce système repose sur la réduction de tous les coûts possibles - payer aux travailleurs des salaires de pauvreté dans des pays avec des protections du travail minimales, utiliser les matériaux les moins chers sans tenir compte de l\'impact environnemental, et concevoir des vêtements pour s\'effondrer après une usure minimale. Les vrais coûts de la mode rapide sont externalisés sur les travailleurs vulnérables, les communautés locales et l\'environnement mondial.' },
          { type: 'heading', text: 'Impact Environnemental' },
          { type: 'paragraph', text: 'La mode rapide est l\'une des industries les plus polluantes au monde. Les tissus synthétiques - produits pétroliers qui ne se biodégraderont jamais - libèrent des microplastiques à chaque lavage, contaminant les océans et entrant dans les chaînes alimentaires. La teinture textile pollue les rivières. La culture du coton consomme de vastes quantités d\'eau et de pesticides. Et le plus dévastateur de tout, le volume absolu de vêtements produits dépasse largement les besoins humains, avec des millions de tonnes jetées annuellement, finissant dans des décharges ou incinérées.' },
          { type: 'paragraph', text: 'L\'empreinte carbone de la mode rapide est stupéfiante. Un seul vêtement bon marché peut parcourir des milliers de kilomètres à travers sa chaîne de production - matières premières provenant d\'un pays, filées en fil dans un autre, tissées en tissu dans un troisième, cousues dans un quatrième, puis expédiées mondialement pour la vente. Tout cela pour qu\'il puisse être porté quelques fois avant l\'élimination.' },
          { type: 'heading', text: 'L\'Alternative de la Mode Lente' },
          { type: 'paragraph', text: 'La mode lente rejette complètement ce modèle destructeur. Elle revient aux principes qui ont gouverné les vêtements pendant la majeure partie de l\'histoire humaine : les vêtements doivent être bien faits, intemporels dans le design, produits dans des conditions équitables et chéris pendant des années ou des décennies. La qualité remplace la quantité. L\'artisanat remplace la production de masse. La pleine conscience remplace la consommation inconsciente.' },
          { type: 'paragraph', text: 'Les marques de mode lente produisent de façon saisonnière ou pas du tout, lançant des pièces quand elles sont prêtes plutôt que d\'adhérer à des semaines de mode arbitraires. Elles utilisent des matériaux naturels et durables. Elles paient les travailleurs équitablement et maintiennent des conditions de travail sûres. Elles conçoivent des vêtements pour durer et soutiennent la réparation plutôt que le remplacement. Elles embrassent la transparence, permettant aux consommateurs de savoir exactement où et comment leurs vêtements ont été fabriqués.' },
          { type: 'heading', text: 'Faire le Changement' },
          { type: 'paragraph', text: 'La transition de la mode rapide à la mode lente ne signifie pas jeter immédiatement votre garde-robe existante - cela créerait simplement plus de déchets. Au lieu de cela, cela signifie devenir plus conscient. Avant d\'acheter quelque chose de nouveau, demandez : Ai-je vraiment besoin de cela ? Le porterai-je à plusieurs reprises ? Est-il assez bien fait pour durer ? Qui l\'a fait et dans quelles conditions ?' },
          { type: 'paragraph', text: 'Choisissez des pièces polyvalentes plutôt que tendance. Investissez dans des basiques de qualité qui ancreront votre garde-robe pendant des années. Apprenez des compétences de réparation de base. Achetez d\'occasion. Et lors de l\'achat de neuf, soutenez les marques qui s\'alignent avec vos valeurs - même si cela signifie posséder moins d\'articles.' },
          { type: 'paragraph', text: 'La mode lente représente plus qu\'un choix de consommateur alternatif - c\'est un rejet d\'un système qui traite à la fois les personnes et la planète comme jetables. Chaque achat réfléchi est un vote pour un avenir plus juste et durable, un vêtement à la fois.' },
        ],
      },
    },
    'poder-roupas-autoestima': {
      title: {
        en: 'The Power of Clothing on Self-Esteem',
        pt: 'O Poder das Roupas na Autoestima',
        es: 'El Poder de la Ropa en la Autoestima',
        fr: 'Le Pouvoir des Vêtements sur l\'Estime de Soi',
      },
      category: {
        en: 'Wellbeing',
        pt: 'Bem-Estar',
        es: 'Bienestar',
        fr: 'Bien-Être',
      },
      date: '2024-09-15',
      readTime: '8 min',
      heroImage: '/blog/blog_o_poder_que_as_roupas_tem_na_autoestima.jpg',
      content: {
        en: [
          { type: 'paragraph', text: 'What we wear is never just about covering our bodies. Clothing is a language we speak without words - a form of self-expression that shapes not only how others see us, but fundamentally how we see ourselves. The relationship between clothing and self-esteem runs deep, touching on psychology, culture, and our most intimate sense of identity.' },
          { type: 'heading', text: 'The Psychology of Dress' },
          { type: 'paragraph', text: 'Researchers have documented what many of us intuitively know: what we wear affects how we feel and perform. This phenomenon, called "enclothed cognition," demonstrates that clothing carries symbolic meaning that influences our psychological states. When we wear something we perceive as high quality or particularly meaningful, we often stand taller, feel more confident, and engage more assertively with the world.' },
          { type: 'paragraph', text: 'This isn\'t about vanity or superficiality - it\'s about the profound connection between our external presentation and internal experience. When we feel good in our clothes, when they fit well and reflect our values and aesthetic, we carry ourselves differently. We make bolder choices. We engage more authentically. The clothing becomes a form of self-affirmation, a daily reminder of our worth.' },
          { type: 'heading', text: 'Beyond Trends: Authentic Expression' },
          { type: 'paragraph', text: 'Fast fashion culture often undermines self-esteem by creating a perpetual sense of inadequacy. There\'s always a new trend, a new "must-have," a new way we supposedly fall short. This cycle encourages us to seek external validation through consumption, mistaking purchasing for self-expression.' },
          { type: 'paragraph', text: 'True clothing confidence comes from a different place - from understanding what genuinely makes you feel like yourself. Not what magazines suggest, not what influencers promote, but what resonates with your authentic identity. This might be the texture of natural fibers against your skin, the way a particular silhouette makes you feel grounded, or the connection to craftsmanship and tradition that certain pieces embody.' },
          { type: 'heading', text: 'The Ritual of Dressing' },
          { type: 'paragraph', text: 'Choosing what to wear can be a mindful practice, a daily ritual of self-care and intention-setting. When we approach our wardrobe not as a collection of disposable items but as tools for self-expression, getting dressed becomes meaningful. We\'re not just covering our bodies; we\'re choosing how we want to move through the world today.' },
          { type: 'paragraph', text: 'Quality pieces support this practice. A well-made garment that fits beautifully and will last for years carries a different energy than something cheap and temporary. It suggests that we\'re worth investing in, that we deserve things made with care, that our daily experience of embodiment matters.' },
          { type: 'heading', text: 'Clothing as Self-Respect' },
          { type: 'paragraph', text: 'Choosing slow fashion, choosing natural materials, choosing pieces made under ethical conditions - these decisions reflect self-respect that extends outward to encompass respect for others and the planet. When we wear something we know was created with care by artisans paid fairly, made from materials that respect environmental limits, we align our external presentation with our internal values.' },
          { type: 'paragraph', text: 'This alignment is powerful. It means that our clothing choices become acts of integrity, daily reminders that we can live according to our principles. This congruence between values and actions is fundamental to genuine self-esteem - the kind that doesn\'t depend on external validation but arises from knowing we\'re living authentically.' },
          { type: 'paragraph', text: 'Your clothing should make you feel more like yourself, not less. It should support your journey, not distract from it. When we choose pieces with intention and wear them with awareness, we transform the simple act of getting dressed into a practice of self-affirmation and authentic expression.' },
        ],
        pt: [
          { type: 'paragraph', text: 'O que vestimos nunca é apenas sobre cobrir nossos corpos. Roupas são uma linguagem que falamos sem palavras - uma forma de autoexpressão que molda não apenas como os outros nos veem, mas fundamentalmente como nós mesmos nos vemos. A relação entre roupas e autoestima é profunda, tocando em psicologia, cultura e nosso senso mais íntimo de identidade.' },
          { type: 'heading', text: 'A Psicologia do Vestir' },
          { type: 'paragraph', text: 'Pesquisadores documentaram o que muitos de nós intuitivamente sabemos: o que vestimos afeta como nos sentimos e performamos. Este fenômeno, chamado "cognição vestida", demonstra que roupas carregam significado simbólico que influencia nossos estados psicológicos. Quando usamos algo que percebemos como de alta qualidade ou particularmente significativo, frequentemente ficamos mais eretos, nos sentimos mais confiantes e nos engajamos mais assertivamente com o mundo.' },
          { type: 'paragraph', text: 'Isso não é sobre vaidade ou superficialidade - é sobre a conexão profunda entre nossa apresentação externa e experiência interna. Quando nos sentimos bem em nossas roupas, quando elas servem bem e refletem nossos valores e estética, nos portamos diferentemente. Fazemos escolhas mais ousadas. Nos engajamos mais autenticamente. A roupa se torna uma forma de autoafirmação, um lembrete diário do nosso valor.' },
          { type: 'heading', text: 'Além das Tendências: Expressão Autêntica' },
          { type: 'paragraph', text: 'A cultura da fast fashion frequentemente mina a autoestima criando um senso perpétuo de inadequação. Sempre há uma nova tendência, um novo "essencial", uma nova forma em que supostamente ficamos aquém. Este ciclo nos encoraja a buscar validação externa através do consumo, confundindo compra com autoexpressão.' },
          { type: 'paragraph', text: 'Verdadeira confiança nas roupas vem de um lugar diferente - de entender o que genuinamente faz você se sentir você mesmo. Não o que revistas sugerem, não o que influenciadores promovem, mas o que ressoa com sua identidade autêntica. Isso pode ser a textura de fibras naturais contra sua pele, a forma como uma silhueta particular faz você se sentir firme, ou a conexão com artesanato e tradição que certas peças incorporam.' },
          { type: 'heading', text: 'O Ritual de Se Vestir' },
          { type: 'paragraph', text: 'Escolher o que vestir pode ser uma prática consciente, um ritual diário de autocuidado e definição de intenção. Quando abordamos nosso guarda-roupa não como uma coleção de itens descartáveis mas como ferramentas para autoexpressão, se vestir se torna significativo. Não estamos apenas cobrindo nossos corpos; estamos escolhendo como queremos nos mover pelo mundo hoje.' },
          { type: 'paragraph', text: 'Peças de qualidade apoiam esta prática. Uma peça bem feita que veste lindamente e durará anos carrega uma energia diferente de algo barato e temporário. Sugere que valemos o investimento, que merecemos coisas feitas com cuidado, que nossa experiência diária de incorporação importa.' },
          { type: 'heading', text: 'Roupa como Autorrespeito' },
          { type: 'paragraph', text: 'Escolher slow fashion, escolher materiais naturais, escolher peças feitas sob condições éticas - essas decisões refletem autorrespeito que se estende para abranger respeito pelos outros e pelo planeta. Quando usamos algo que sabemos que foi criado com cuidado por artesãos pagos justamente, feito de materiais que respeitam limites ambientais, alinhamos nossa apresentação externa com nossos valores internos.' },
          { type: 'paragraph', text: 'Este alinhamento é poderoso. Significa que nossas escolhas de roupas se tornam atos de integridade, lembretes diários de que podemos viver de acordo com nossos princípios. Esta congruência entre valores e ações é fundamental para autoestima genuína - o tipo que não depende de validação externa mas surge de saber que estamos vivendo autenticamente.' },
          { type: 'paragraph', text: 'Suas roupas devem fazer você se sentir mais você mesmo, não menos. Elas devem apoiar sua jornada, não distrair dela. Quando escolhemos peças com intenção e as usamos com consciência, transformamos o simples ato de nos vestir em uma prática de autoafirmação e expressão autêntica.' },
        ],
        es: [
          { type: 'paragraph', text: 'Lo que vestimos nunca es solo sobre cubrir nuestros cuerpos. La ropa es un lenguaje que hablamos sin palabras - una forma de autoexpresión que moldea no solo cómo otros nos ven, sino fundamentalmente cómo nos vemos a nosotros mismos. La relación entre ropa y autoestima es profunda, tocando psicología, cultura y nuestro sentido más íntimo de identidad.' },
          { type: 'heading', text: 'La Psicología del Vestir' },
          { type: 'paragraph', text: 'Los investigadores han documentado lo que muchos de nosotros sabemos intuitivamente: lo que vestimos afecta cómo nos sentimos y rendimos. Este fenómeno, llamado "cognición vestida", demuestra que la ropa lleva significado simbólico que influye en nuestros estados psicológicos. Cuando usamos algo que percibimos como de alta calidad o particularmente significativo, a menudo nos paramos más erguidos, nos sentimos más confiados y nos comprometemos más asertivamente con el mundo.' },
          { type: 'paragraph', text: 'Esto no se trata de vanidad o superficialidad - se trata de la conexión profunda entre nuestra presentación externa y experiencia interna. Cuando nos sentimos bien con nuestra ropa, cuando nos queda bien y refleja nuestros valores y estética, nos comportamos diferentemente. Tomamos decisiones más audaces. Nos comprometemos más auténticamente. La ropa se convierte en una forma de autoafirmación, un recordatorio diario de nuestro valor.' },
          { type: 'heading', text: 'Más Allá de las Tendencias: Expresión Auténtica' },
          { type: 'paragraph', text: 'La cultura de la moda rápida a menudo socava la autoestima creando un sentido perpetuo de inadecuación. Siempre hay una nueva tendencia, un nuevo "imprescindible", una nueva forma en que supuestamente nos quedamos cortos. Este ciclo nos alienta a buscar validación externa a través del consumo, confundiendo la compra con la autoexpresión.' },
          { type: 'paragraph', text: 'La verdadera confianza en la ropa viene de un lugar diferente - de entender qué genuinamente te hace sentir tú mismo. No lo que las revistas sugieren, no lo que los influencers promueven, sino lo que resuena con tu identidad auténtica. Esto puede ser la textura de fibras naturales contra tu piel, la forma en que una silueta particular te hace sentir arraigado, o la conexión con la artesanía y tradición que ciertas piezas encarnan.' },
          { type: 'heading', text: 'El Ritual de Vestirse' },
          { type: 'paragraph', text: 'Elegir qué ponerse puede ser una práctica consciente, un ritual diario de autocuidado y establecimiento de intenciones. Cuando abordamos nuestro guardarropa no como una colección de artículos desechables sino como herramientas para la autoexpresión, vestirse se vuelve significativo. No solo estamos cubriendo nuestros cuerpos; estamos eligiendo cómo queremos movernos por el mundo hoy.' },
          { type: 'paragraph', text: 'Las piezas de calidad apoyan esta práctica. Una prenda bien hecha que viste hermosamente y durará años lleva una energía diferente a algo barato y temporal. Sugiere que valemos la inversión, que merecemos cosas hechas con cuidado, que nuestra experiencia diaria de encarnación importa.' },
          { type: 'heading', text: 'Ropa como Autorrespeto' },
          { type: 'paragraph', text: 'Elegir moda lenta, elegir materiales naturales, elegir piezas hechas bajo condiciones éticas - estas decisiones reflejan autorrespeto que se extiende para abarcar el respeto por otros y el planeta. Cuando usamos algo que sabemos fue creado con cuidado por artesanos pagados justamente, hecho de materiales que respetan los límites ambientales, alineamos nuestra presentación externa con nuestros valores internos.' },
          { type: 'paragraph', text: 'Este alineamiento es poderoso. Significa que nuestras elecciones de ropa se convierten en actos de integridad, recordatorios diarios de que podemos vivir según nuestros principios. Esta congruencia entre valores y acciones es fundamental para la autoestima genuina - el tipo que no depende de la validación externa sino que surge de saber que estamos viviendo auténticamente.' },
          { type: 'paragraph', text: 'Tu ropa debe hacerte sentir más tú mismo, no menos. Debe apoyar tu viaje, no distraer de él. Cuando elegimos piezas con intención y las usamos con conciencia, transformamos el simple acto de vestirnos en una práctica de autoafirmación y expresión auténtica.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Ce que nous portons n\'est jamais seulement une question de couvrir nos corps. Les vêtements sont un langage que nous parlons sans mots - une forme d\'expression de soi qui façonne non seulement comment les autres nous voient, mais fondamentalement comment nous nous voyons nous-mêmes. La relation entre vêtements et estime de soi est profonde, touchant la psychologie, la culture et notre sens le plus intime de l\'identité.' },
          { type: 'heading', text: 'La Psychologie de l\'Habillement' },
          { type: 'paragraph', text: 'Les chercheurs ont documenté ce que beaucoup d\'entre nous savent intuitivement : ce que nous portons affecte comment nous nous sentons et performons. Ce phénomène, appelé "cognition habillée", démontre que les vêtements portent une signification symbolique qui influence nos états psychologiques. Lorsque nous portons quelque chose que nous percevons comme de haute qualité ou particulièrement significatif, nous nous tenons souvent plus droits, nous nous sentons plus confiants et nous nous engageons plus affirmativement avec le monde.' },
          { type: 'paragraph', text: 'Il ne s\'agit pas de vanité ou de superficialité - il s\'agit de la connexion profonde entre notre présentation externe et notre expérience interne. Lorsque nous nous sentons bien dans nos vêtements, lorsqu\'ils nous vont bien et reflètent nos valeurs et notre esthétique, nous nous comportons différemment. Nous faisons des choix plus audacieux. Nous nous engageons plus authentiquement. Les vêtements deviennent une forme d\'affirmation de soi, un rappel quotidien de notre valeur.' },
          { type: 'heading', text: 'Au-Delà des Tendances : Expression Authentique' },
          { type: 'paragraph', text: 'La culture de la mode rapide mine souvent l\'estime de soi en créant un sentiment perpétuel d\'inadéquation. Il y a toujours une nouvelle tendance, un nouveau "must-have", une nouvelle façon dont nous sommes censés être insuffisants. Ce cycle nous encourage à rechercher la validation externe par la consommation, confondant l\'achat avec l\'expression de soi.' },
          { type: 'paragraph', text: 'La vraie confiance vestimentaire vient d\'un endroit différent - de comprendre ce qui vous fait vraiment vous sentir vous-même. Pas ce que les magazines suggèrent, pas ce que les influenceurs promeuvent, mais ce qui résonne avec votre identité authentique. Cela peut être la texture des fibres naturelles contre votre peau, la façon dont une silhouette particulière vous fait sentir ancré, ou la connexion à l\'artisanat et à la tradition que certaines pièces incarnent.' },
          { type: 'heading', text: 'Le Rituel de s\'Habiller' },
          { type: 'paragraph', text: 'Choisir quoi porter peut être une pratique consciente, un rituel quotidien de soins personnels et de définition d\'intention. Lorsque nous abordons notre garde-robe non pas comme une collection d\'articles jetables mais comme des outils d\'expression de soi, s\'habiller devient significatif. Nous ne couvrons pas seulement nos corps ; nous choisissons comment nous voulons nous déplacer dans le monde aujourd\'hui.' },
          { type: 'paragraph', text: 'Les pièces de qualité soutiennent cette pratique. Un vêtement bien fait qui va magnifiquement et durera des années porte une énergie différente de quelque chose de bon marché et temporaire. Il suggère que nous valons l\'investissement, que nous méritons des choses faites avec soin, que notre expérience quotidienne de l\'incarnation compte.' },
          { type: 'heading', text: 'Les Vêtements comme Respect de Soi' },
          { type: 'paragraph', text: 'Choisir la mode lente, choisir des matériaux naturels, choisir des pièces faites dans des conditions éthiques - ces décisions reflètent le respect de soi qui s\'étend pour englober le respect des autres et de la planète. Lorsque nous portons quelque chose que nous savons avoir été créé avec soin par des artisans payés équitablement, fabriqué à partir de matériaux qui respectent les limites environnementales, nous alignons notre présentation externe avec nos valeurs internes.' },
          { type: 'paragraph', text: 'Cet alignement est puissant. Cela signifie que nos choix vestimentaires deviennent des actes d\'intégrité, des rappels quotidiens que nous pouvons vivre selon nos principes. Cette congruence entre valeurs et actions est fondamentale pour une estime de soi authentique - le type qui ne dépend pas de la validation externe mais découle du fait de savoir que nous vivons authentiquement.' },
          { type: 'paragraph', text: 'Vos vêtements doivent vous faire sentir plus vous-même, pas moins. Ils doivent soutenir votre voyage, pas en distraire. Lorsque nous choisissons des pièces avec intention et les portons avec conscience, nous transformons le simple acte de s\'habiller en une pratique d\'affirmation de soi et d\'expression authentique.' },
        ],
      },
    },
    'tecidos-sinteticos-vs-la': {
      title: {
        en: 'Synthetic Fabrics vs Wool: Understanding the Difference',
        pt: 'Tecidos Sintéticos vs Lã: Qual a Diferença?',
        es: 'Tejidos Sintéticos vs Lana: ¿Cuál es la Diferencia?',
        fr: 'Tissus Synthétiques vs Laine: Quelle est la Différence?',
      },
      category: {
        en: 'Materials',
        pt: 'Materiais',
        es: 'Materiales',
        fr: 'Matériaux',
      },
      date: '2024-09-10',
      readTime: '9 min',
      heroImage: '/blog/blog_tecido_sintetico.avif',
      content: {
        en: [
          { type: 'paragraph', text: 'Walk into any clothing store and you\'ll find racks dominated by polyester, nylon, acrylic, and other synthetic fabrics. These materials have become ubiquitous in modern fashion, praised for their low cost and easy care. But understanding what these fabrics actually are - and how they compare to natural fibers like wool - reveals profound differences that affect not just garment performance, but environmental health and human wellbeing.' },
          { type: 'heading', text: 'What Are Synthetic Fabrics?' },
          { type: 'paragraph', text: 'Synthetic fabrics are manufactured from petroleum-based chemicals through industrial processes. Polyester, the most common, is essentially plastic - the same material used in plastic bottles, transformed into fiber form. These materials didn\'t exist until the 20th century; they\'re inventions of the petrochemical industry, not products of nature or traditional craft.' },
          { type: 'paragraph', text: 'The production of synthetic fabrics is energy-intensive and polluting. It requires extracting and processing crude oil, then using high heat and chemicals to transform petroleum into fiber. The process releases greenhouse gases and toxic substances. The resulting fabric is essentially plastic thread woven into cloth.' },
          { type: 'heading', text: 'Performance Differences' },
          { type: 'paragraph', text: 'While synthetic fabrics are marketed as high-performance, they have significant drawbacks. They don\'t breathe well, trapping heat and moisture against the skin. This creates the clammy, uncomfortable feeling familiar to anyone who\'s worn a polyester shirt on a warm day. Synthetic fabrics also absorb and retain odors - the bacteria that cause smell thrive in the warm, moist environment these fabrics create.' },
          { type: 'paragraph', text: 'Wool, by contrast, is naturally breathable and moisture-wicking. Its fiber structure allows air circulation while drawing moisture away from skin. Wool regulates temperature, keeping you warm when it\'s cold and cool when it\'s warm. Its natural antibacterial properties prevent odor even after extended wear. These aren\'t marketing claims but inherent characteristics of the fiber, refined by millions of years of evolution.' },
          { type: 'heading', text: 'Environmental Impact' },
          { type: 'paragraph', text: 'The environmental differences between synthetic and natural fibers are stark. Every time synthetic garments are washed, they shed microplastic fibers - tiny plastic particles that flow into waterways and oceans. These microplastics persist in the environment indefinitely, accumulating in marine ecosystems and entering food chains. Scientists have found microplastics in everything from Arctic ice to human blood.' },
          { type: 'paragraph', text: 'When synthetic garments are finally discarded - which happens quickly, as they don\'t age well - they don\'t biodegrade. They may spend centuries in landfills, slowly breaking down into smaller and smaller plastic particles but never truly returning to earth. Or they\'re incinerated, releasing toxic fumes.' },
          { type: 'paragraph', text: 'Wool, being completely natural, biodegrades readily. A wool garment buried in soil will decompose within years, its nutrients returning to enrich the earth. Wool production, when managed ethically and sustainably, works with natural cycles rather than against them. Sheep are renewable sources of fiber, producing new fleece annually without being harmed.' },
          { type: 'heading', text: 'Durability and Longevity' },
          { type: 'paragraph', text: 'Cheap synthetic garments are designed for short lifespans. The fabric pills quickly, colors fade, seams fail. They\'re part of the fast fashion cycle - worn briefly, then discarded. Even "technical" synthetic garments, while more durable than fast fashion pieces, degrade over time, losing their performance characteristics.' },
          { type: 'paragraph', text: 'Quality wool garments, properly cared for, can last decades. Wool fibers are naturally elastic and resilient, able to bend thousands of times without breaking. Wool fabric actually improves with age in some ways, becoming softer and developing character. A well-made wool piece is an investment that pays dividends for years.' },
          { type: 'heading', text: 'Making Informed Choices' },
          { type: 'paragraph', text: 'Understanding these differences empowers better choices. When you choose natural fibers like wool over synthetics, you\'re choosing materials that perform better, last longer, and align with environmental health. You\'re voting with your purchase for a textile industry that works with nature rather than treating the planet as a resource to extract and a dumping ground for waste.' },
          { type: 'paragraph', text: 'The choice between synthetic and natural isn\'t just about personal preference - it\'s about recognizing that our individual decisions collectively shape industry practices and environmental outcomes. Choosing wool means choosing to be part of a more sustainable, ethical, and ultimately more beautiful approach to clothing ourselves.' },
        ],
        pt: [
          { type: 'paragraph', text: 'Entre em qualquer loja de roupas e você encontrará araras dominadas por poliéster, nylon, acrílico e outros tecidos sintéticos. Esses materiais se tornaram onipresentes na moda moderna, elogiados por seu baixo custo e fácil cuidado. Mas entender o que esses tecidos realmente são - e como se comparam a fibras naturais como a lã - revela diferenças profundas que afetam não apenas o desempenho das peças, mas a saúde ambiental e o bem-estar humano.' },
          { type: 'heading', text: 'O Que São Tecidos Sintéticos?' },
          { type: 'paragraph', text: 'Tecidos sintéticos são fabricados a partir de produtos químicos baseados em petróleo através de processos industriais. Poliéster, o mais comum, é essencialmente plástico - o mesmo material usado em garrafas plásticas, transformado em forma de fibra. Esses materiais não existiam até o século 20; são invenções da indústria petroquímica, não produtos da natureza ou do artesanato tradicional.' },
          { type: 'paragraph', text: 'A produção de tecidos sintéticos consome muita energia e é poluente. Requer extração e processamento de petróleo bruto, depois usa alto calor e químicos para transformar petróleo em fibra. O processo libera gases de efeito estufa e substâncias tóxicas. O tecido resultante é essencialmente fio plástico tecido em pano.' },
          { type: 'heading', text: 'Diferenças de Desempenho' },
          { type: 'paragraph', text: 'Embora tecidos sintéticos sejam comercializados como de alto desempenho, eles têm desvantagens significativas. Não respiram bem, prendendo calor e umidade contra a pele. Isso cria a sensação pegajosa e desconfortável familiar a qualquer um que já usou uma camisa de poliéster em um dia quente. Tecidos sintéticos também absorvem e retêm odores - as bactérias que causam cheiro prosperam no ambiente quente e úmido que esses tecidos criam.' },
          { type: 'paragraph', text: 'A lã, por outro lado, é naturalmente respirável e absorve umidade. Sua estrutura de fibra permite circulação de ar enquanto afasta umidade da pele. A lã regula temperatura, mantendo você aquecido quando está frio e fresco quando está quente. Suas propriedades antibacterianas naturais previnem odor mesmo após uso prolongado. Estas não são afirmações de marketing mas características inerentes da fibra, refinadas por milhões de anos de evolução.' },
          { type: 'heading', text: 'Impacto Ambiental' },
          { type: 'paragraph', text: 'As diferenças ambientais entre fibras sintéticas e naturais são marcantes. Toda vez que peças sintéticas são lavadas, elas liberam fibras microplásticas - partículas plásticas minúsculas que fluem para cursos d\'água e oceanos. Esses microplásticos persistem no ambiente indefinidamente, acumulando em ecossistemas marinhos e entrando em cadeias alimentares. Cientistas encontraram microplásticos em tudo, desde gelo ártico até sangue humano.' },
          { type: 'paragraph', text: 'Quando peças sintéticas são finalmente descartadas - o que acontece rapidamente, pois não envelhecem bem - elas não se biodegradam. Podem passar séculos em aterros, lentamente se quebrando em partículas plásticas cada vez menores mas nunca verdadeiramente retornando à terra. Ou são incineradas, liberando fumaça tóxica.' },
          { type: 'paragraph', text: 'A lã, sendo completamente natural, se biodegrada prontamente. Uma peça de lã enterrada no solo se decompõe em anos, seus nutrientes retornando para enriquecer a terra. A produção de lã, quando gerenciada eticamente e sustentavelmente, trabalha com ciclos naturais em vez de contra eles. Ovelhas são fontes renováveis de fibra, produzindo novo velo anualmente sem serem prejudicadas.' },
          { type: 'heading', text: 'Durabilidade e Longevidade' },
          { type: 'paragraph', text: 'Peças sintéticas baratas são projetadas para curta vida útil. O tecido forma bolinhas rapidamente, cores desbotam, costuras falham. Fazem parte do ciclo da fast fashion - usadas brevemente, depois descartadas. Mesmo peças sintéticas "técnicas", embora mais duráveis que peças de fast fashion, se degradam com o tempo, perdendo suas características de desempenho.' },
          { type: 'paragraph', text: 'Peças de lã de qualidade, cuidadas adequadamente, podem durar décadas. Fibras de lã são naturalmente elásticas e resilientes, capazes de dobrar milhares de vezes sem quebrar. Tecido de lã na verdade melhora com a idade de algumas formas, tornando-se mais macio e desenvolvendo caráter. Uma peça de lã bem feita é um investimento que paga dividendos por anos.' },
          { type: 'heading', text: 'Fazendo Escolhas Informadas' },
          { type: 'paragraph', text: 'Entender essas diferenças capacita melhores escolhas. Quando você escolhe fibras naturais como lã sobre sintéticos, está escolhendo materiais que performam melhor, duram mais e se alinham com a saúde ambiental. Você está votando com sua compra por uma indústria têxtil que trabalha com a natureza em vez de tratar o planeta como um recurso a extrair e um depósito de lixo.' },
          { type: 'paragraph', text: 'A escolha entre sintético e natural não é apenas sobre preferência pessoal - é sobre reconhecer que nossas decisões individuais coletivamente moldam práticas da indústria e resultados ambientais. Escolher lã significa escolher fazer parte de uma abordagem mais sustentável, ética e, em última análise, mais bela para nos vestirmos.' },
        ],
        es: [
          { type: 'paragraph', text: 'Entra en cualquier tienda de ropa y encontrarás estantes dominados por poliéster, nylon, acrílico y otros tejidos sintéticos. Estos materiales se han vuelto omnipresentes en la moda moderna, elogiados por su bajo costo y fácil cuidado. Pero entender qué son realmente estos tejidos - y cómo se comparan con fibras naturales como la lana - revela diferencias profundas que afectan no solo el rendimiento de las prendas, sino la salud ambiental y el bienestar humano.' },
          { type: 'heading', text: '¿Qué Son los Tejidos Sintéticos?' },
          { type: 'paragraph', text: 'Los tejidos sintéticos se fabrican a partir de químicos basados en petróleo a través de procesos industriales. El poliéster, el más común, es esencialmente plástico - el mismo material usado en botellas de plástico, transformado en forma de fibra. Estos materiales no existían hasta el siglo XX; son invenciones de la industria petroquímica, no productos de la naturaleza o el oficio tradicional.' },
          { type: 'paragraph', text: 'La producción de tejidos sintéticos consume mucha energía y es contaminante. Requiere extraer y procesar petróleo crudo, luego usa alto calor y químicos para transformar petróleo en fibra. El proceso libera gases de efecto invernadero y sustancias tóxicas. El tejido resultante es esencialmente hilo de plástico tejido en tela.' },
          { type: 'heading', text: 'Diferencias de Rendimiento' },
          { type: 'paragraph', text: 'Aunque los tejidos sintéticos se comercializan como de alto rendimiento, tienen desventajas significativas. No respiran bien, atrapando calor y humedad contra la piel. Esto crea la sensación pegajosa e incómoda familiar para cualquiera que haya usado una camisa de poliéster en un día caluroso. Los tejidos sintéticos también absorben y retienen olores - las bacterias que causan olor prosperan en el ambiente cálido y húmedo que estos tejidos crean.' },
          { type: 'paragraph', text: 'La lana, por el contrario, es naturalmente transpirable y absorbe humedad. Su estructura de fibra permite la circulación de aire mientras aleja la humedad de la piel. La lana regula la temperatura, manteniéndote caliente cuando hace frío y fresco cuando hace calor. Sus propiedades antibacterianas naturales previenen el olor incluso después de un uso prolongado. Estas no son afirmaciones de marketing sino características inherentes de la fibra, refinadas por millones de años de evolución.' },
          { type: 'heading', text: 'Impacto Ambiental' },
          { type: 'paragraph', text: 'Las diferencias ambientales entre fibras sintéticas y naturales son marcadas. Cada vez que se lavan prendas sintéticas, liberan fibras microplásticas - partículas de plástico diminutas que fluyen hacia cursos de agua y océanos. Estos microplásticos persisten en el medio ambiente indefinidamente, acumulándose en ecosistemas marinos y entrando en cadenas alimentarias. Los científicos han encontrado microplásticos en todo, desde hielo ártico hasta sangre humana.' },
          { type: 'paragraph', text: 'Cuando las prendas sintéticas finalmente se descartan - lo que sucede rápidamente, ya que no envejecen bien - no se biodegradan. Pueden pasar siglos en vertederos, descomponiéndose lentamente en partículas de plástico cada vez más pequeñas pero nunca regresando verdaderamente a la tierra. O se incineran, liberando humos tóxicos.' },
          { type: 'paragraph', text: 'La lana, siendo completamente natural, se biodegrada fácilmente. Una prenda de lana enterrada en el suelo se descompondrá en años, sus nutrientes regresando para enriquecer la tierra. La producción de lana, cuando se gestiona ética y sosteniblemente, trabaja con ciclos naturales en lugar de contra ellos. Las ovejas son fuentes renovables de fibra, produciendo nuevo vellón anualmente sin ser dañadas.' },
          { type: 'heading', text: 'Durabilidad y Longevidad' },
          { type: 'paragraph', text: 'Las prendas sintéticas baratas están diseñadas para vidas útiles cortas. El tejido forma bolitas rápidamente, los colores se desvanecen, las costuras fallan. Son parte del ciclo de moda rápida - usadas brevemente, luego descartadas. Incluso las prendas sintéticas "técnicas", aunque más duraderas que las piezas de moda rápida, se degradan con el tiempo, perdiendo sus características de rendimiento.' },
          { type: 'paragraph', text: 'Las prendas de lana de calidad, cuidadas adecuadamente, pueden durar décadas. Las fibras de lana son naturalmente elásticas y resistentes, capaces de doblarse miles de veces sin romperse. El tejido de lana en realidad mejora con la edad de algunas maneras, volviéndose más suave y desarrollando carácter. Una pieza de lana bien hecha es una inversión que paga dividendos durante años.' },
          { type: 'heading', text: 'Tomando Decisiones Informadas' },
          { type: 'paragraph', text: 'Entender estas diferencias permite mejores elecciones. Cuando eliges fibras naturales como la lana sobre sintéticos, estás eligiendo materiales que rinden mejor, duran más y se alinean con la salud ambiental. Estás votando con tu compra por una industria textil que trabaja con la naturaleza en lugar de tratar al planeta como un recurso para extraer y un vertedero de basura.' },
          { type: 'paragraph', text: 'La elección entre sintético y natural no es solo sobre preferencia personal - se trata de reconocer que nuestras decisiones individuales colectivamente moldean las prácticas de la industria y los resultados ambientales. Elegir lana significa elegir ser parte de un enfoque más sostenible, ético y, en última instancia, más hermoso para vestirnos.' },
        ],
        fr: [
          { type: 'paragraph', text: 'Entrez dans n\'importe quel magasin de vêtements et vous trouverez des rayons dominés par le polyester, le nylon, l\'acrylique et d\'autres tissus synthétiques. Ces matériaux sont devenus omniprésents dans la mode moderne, loués pour leur faible coût et leur entretien facile. Mais comprendre ce que sont réellement ces tissus - et comment ils se comparent aux fibres naturelles comme la laine - révèle des différences profondes qui affectent non seulement la performance des vêtements, mais la santé environnementale et le bien-être humain.' },
          { type: 'heading', text: 'Que Sont les Tissus Synthétiques ?' },
          { type: 'paragraph', text: 'Les tissus synthétiques sont fabriqués à partir de produits chimiques à base de pétrole par des processus industriels. Le polyester, le plus courant, est essentiellement du plastique - le même matériau utilisé dans les bouteilles en plastique, transformé en forme de fibre. Ces matériaux n\'existaient pas avant le 20e siècle ; ce sont des inventions de l\'industrie pétrochimique, pas des produits de la nature ou de l\'artisanat traditionnel.' },
          { type: 'paragraph', text: 'La production de tissus synthétiques est énergivore et polluante. Elle nécessite l\'extraction et le traitement du pétrole brut, puis utilise une forte chaleur et des produits chimiques pour transformer le pétrole en fibre. Le processus libère des gaz à effet de serre et des substances toxiques. Le tissu résultant est essentiellement du fil de plastique tissé en tissu.' },
          { type: 'heading', text: 'Différences de Performance' },
          { type: 'paragraph', text: 'Bien que les tissus synthétiques soient commercialisés comme haute performance, ils ont des inconvénients significatifs. Ils ne respirent pas bien, piégeant la chaleur et l\'humidité contre la peau. Cela crée la sensation moite et inconfortable familière à quiconque a porté une chemise en polyester par une journée chaude. Les tissus synthétiques absorbent et retiennent également les odeurs - les bactéries qui causent les odeurs prospèrent dans l\'environnement chaud et humide que ces tissus créent.' },
          { type: 'paragraph', text: 'La laine, en revanche, est naturellement respirante et évacue l\'humidité. Sa structure de fibre permet la circulation de l\'air tout en éloignant l\'humidité de la peau. La laine régule la température, vous gardant au chaud quand il fait froid et frais quand il fait chaud. Ses propriétés antibactériennes naturelles préviennent les odeurs même après un port prolongé. Ce ne sont pas des affirmations marketing mais des caractéristiques inhérentes de la fibre, affinées par des millions d\'années d\'évolution.' },
          { type: 'heading', text: 'Impact Environnemental' },
          { type: 'paragraph', text: 'Les différences environnementales entre fibres synthétiques et naturelles sont frappantes. Chaque fois que des vêtements synthétiques sont lavés, ils libèrent des fibres microplastiques - de minuscules particules de plastique qui s\'écoulent dans les cours d\'eau et les océans. Ces microplastiques persistent dans l\'environnement indéfiniment, s\'accumulant dans les écosystèmes marins et entrant dans les chaînes alimentaires. Les scientifiques ont trouvé des microplastiques dans tout, de la glace arctique au sang humain.' },
          { type: 'paragraph', text: 'Lorsque les vêtements synthétiques sont finalement jetés - ce qui arrive rapidement, car ils ne vieillissent pas bien - ils ne se biodégradent pas. Ils peuvent passer des siècles dans des décharges, se décomposant lentement en particules de plastique de plus en plus petites mais ne retournant jamais vraiment à la terre. Ou ils sont incinérés, libérant des fumées toxiques.' },
          { type: 'paragraph', text: 'La laine, étant complètement naturelle, se biodégrade facilement. Un vêtement en laine enterré dans le sol se décomposera en quelques années, ses nutriments retournant enrichir la terre. La production de laine, lorsqu\'elle est gérée de manière éthique et durable, travaille avec les cycles naturels plutôt que contre eux. Les moutons sont des sources renouvelables de fibres, produisant une nouvelle toison chaque année sans être blessés.' },
          { type: 'heading', text: 'Durabilité et Longévité' },
          { type: 'paragraph', text: 'Les vêtements synthétiques bon marché sont conçus pour des durées de vie courtes. Le tissu bouloche rapidement, les couleurs se fanent, les coutures cèdent. Ils font partie du cycle de la mode rapide - portés brièvement, puis jetés. Même les vêtements synthétiques "techniques", bien que plus durables que les pièces de mode rapide, se dégradent avec le temps, perdant leurs caractéristiques de performance.' },
          { type: 'paragraph', text: 'Les vêtements en laine de qualité, correctement entretenus, peuvent durer des décennies. Les fibres de laine sont naturellement élastiques et résistantes, capables de se plier des milliers de fois sans se casser. Le tissu de laine s\'améliore en fait avec l\'âge de certaines manières, devenant plus doux et développant du caractère. Une pièce en laine bien faite est un investissement qui porte ses fruits pendant des années.' },
          { type: 'heading', text: 'Faire des Choix Éclairés' },
          { type: 'paragraph', text: 'Comprendre ces différences permet de meilleurs choix. Lorsque vous choisissez des fibres naturelles comme la laine plutôt que des synthétiques, vous choisissez des matériaux qui performent mieux, durent plus longtemps et s\'alignent avec la santé environnementale. Vous votez avec votre achat pour une industrie textile qui travaille avec la nature plutôt que de traiter la planète comme une ressource à extraire et un dépotoir pour les déchets.' },
          { type: 'paragraph', text: 'Le choix entre synthétique et naturel ne concerne pas seulement la préférence personnelle - il s\'agit de reconnaître que nos décisions individuelles façonnent collectivement les pratiques de l\'industrie et les résultats environnementaux. Choisir la laine signifie choisir de faire partie d\'une approche plus durable, éthique et, en fin de compte, plus belle pour nous habiller.' },
        ],
      },
    },
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
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title[localeKey]}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
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
