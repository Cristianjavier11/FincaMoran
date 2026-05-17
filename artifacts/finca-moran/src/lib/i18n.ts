export type Language = "es" | "en" | "fr" | "pt" | "de" | "ja" | "zh";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    gallery: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
  };
  products: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  gallery: {
    heading: string;
  };
  contact: {
    visitHeading: string;
    location: string;
    quote: string;
    contactHeading: string;
    call: string;
    follow: string;
    copyright: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      products: "Productos",
      gallery: "Galería",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Café de especialidad cultivado bajo sombra en las montañas volcánicas de Nayarit.",
      cta: "Conoce nuestro café",
    },
    about: {
      heading: "Nuestra Historia",
      p1: "En el corazón del Eje Volcánico Transversal, en Xalisco, Nayarit, nace Finca Moran. Un espacio donde el tiempo parece detenerse y la naturaleza dicta el ritmo.",
      p2: "Nuestro café crece lentamente en un sistema agroforestal bajo sombra. La altitud, los ricos suelos volcánicos y los microclimas únicos de nuestra montaña se entrelazan para crear un grano de especialidad excepcional.",
      p3: "No solo cultivamos café; preservamos un ecosistema. Cada taza es un tributo a la biodiversidad de nuestra tierra, al esfuerzo de nuestros agricultores locales y a la herencia del café premium mexicano.",
    },
    products: {
      heading: "Nuestra Esencia",
      items: [
        { title: "Café de Especialidad", desc: "Selección rigurosa de granos con perfiles de taza excepcionales." },
        { title: "Producción Propia", desc: "Cuidado absoluto desde la semilla hasta tu taza." },
        { title: "Agricultores Locales", desc: "Trabajo justo y mano a mano con la comunidad de Nayarit." },
        { title: "Café Bajo Sombra", desc: "Maduración lenta que intensifica los sabores y aromas." },
        { title: "Sistema Agroforestal", desc: "Respeto por la biodiversidad y el equilibrio del bosque." },
        { title: "Premium Mexicano", desc: "Orgullosamente cultivado en tierras volcánicas." },
      ],
    },
    gallery: {
      heading: "Nuestra Tierra",
    },
    contact: {
      visitHeading: "Visítanos",
      location: "Nayarit, México",
      quote: '"El buen café es un reflejo de la tierra que lo vio nacer."',
      contactHeading: "Contacto",
      call: "Llamar",
      follow: "Seguir",
      copyright: "© 2026 Finca Moran. Todos los derechos reservados.",
      tagline: "De Nayarit para el mundo.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      subtitle: "Specialty coffee grown under shade in the volcanic mountains of Nayarit.",
      cta: "Discover our coffee",
    },
    about: {
      heading: "Our Story",
      p1: "In the heart of the Trans-Mexican Volcanic Belt, in Xalisco, Nayarit, Finca Moran was born. A place where time seems to stand still and nature dictates the rhythm.",
      p2: "Our coffee grows slowly in a shade-grown agroforestry system. The altitude, the rich volcanic soils, and the unique microclimates of our mountain intertwine to create an exceptional specialty bean.",
      p3: "We don't just grow coffee — we preserve an ecosystem. Every cup is a tribute to the biodiversity of our land, the effort of our local farmers, and the legacy of premium Mexican coffee.",
    },
    products: {
      heading: "Our Essence",
      items: [
        { title: "Specialty Coffee", desc: "A rigorous selection of beans with exceptional cup profiles." },
        { title: "Own Production", desc: "Complete care from seed to cup." },
        { title: "Local Farmers", desc: "Fair work hand in hand with the Nayarit community." },
        { title: "Shade-Grown Coffee", desc: "Slow ripening that intensifies flavors and aromas." },
        { title: "Agroforestry System", desc: "Respect for biodiversity and the balance of the forest." },
        { title: "Premium Mexican", desc: "Proudly grown on volcanic lands." },
      ],
    },
    gallery: {
      heading: "Our Land",
    },
    contact: {
      visitHeading: "Visit Us",
      location: "Nayarit, Mexico",
      quote: '"Good coffee is a reflection of the land that saw it born."',
      contactHeading: "Contact",
      call: "Call",
      follow: "Follow",
      copyright: "© 2026 Finca Moran. All rights reserved.",
      tagline: "From Nayarit to the world.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      products: "Produits",
      gallery: "Galerie",
      contact: "Contact",
    },
    hero: {
      subtitle: "Café de spécialité cultivé à l'ombre dans les montagnes volcaniques de Nayarit.",
      cta: "Découvrez notre café",
    },
    about: {
      heading: "Notre Histoire",
      p1: "Au cœur de la Ceinture Volcanique Trans-Mexicaine, à Xalisco, Nayarit, Finca Moran est née. Un endroit où le temps semble s'arrêter et où la nature dicte le rythme.",
      p2: "Notre café pousse lentement dans un système agroforestier à l'ombre. L'altitude, les riches sols volcaniques et les microclimats uniques de notre montagne s'entrelacent pour créer un grain d'exception.",
      p3: "Nous ne cultivons pas seulement du café — nous préservons un écosystème. Chaque tasse est un hommage à la biodiversité de notre terre, à l'effort de nos agriculteurs locaux et à l'héritage du café mexicain premium.",
    },
    products: {
      heading: "Notre Essence",
      items: [
        { title: "Café de Spécialité", desc: "Sélection rigoureuse de grains aux profils de tasse exceptionnels." },
        { title: "Production Propre", desc: "Soin absolu de la graine à la tasse." },
        { title: "Agriculteurs Locaux", desc: "Travail équitable en partenariat avec la communauté de Nayarit." },
        { title: "Café à l'Ombre", desc: "Maturation lente qui intensifie les saveurs et les arômes." },
        { title: "Système Agroforestier", desc: "Respect de la biodiversité et de l'équilibre de la forêt." },
        { title: "Premium Mexicain", desc: "Fièrement cultivé sur des terres volcaniques." },
      ],
    },
    gallery: {
      heading: "Notre Terre",
    },
    contact: {
      visitHeading: "Visitez-nous",
      location: "Nayarit, Mexique",
      quote: '"Un bon café est le reflet de la terre qui l\'a vu naître."',
      contactHeading: "Contact",
      call: "Appeler",
      follow: "Suivre",
      copyright: "© 2026 Finca Moran. Tous droits réservés.",
      tagline: "De Nayarit pour le monde.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      products: "Produtos",
      gallery: "Galeria",
      contact: "Contato",
    },
    hero: {
      subtitle: "Café especial cultivado à sombra nas montanhas vulcânicas de Nayarit.",
      cta: "Conheça nosso café",
    },
    about: {
      heading: "Nossa História",
      p1: "No coração do Cinturão Vulcânico Trans-Mexicano, em Xalisco, Nayarit, nasce a Finca Moran. Um lugar onde o tempo parece parar e a natureza dita o ritmo.",
      p2: "Nosso café cresce lentamente em um sistema agroflorestal sombreado. A altitude, os ricos solos vulcânicos e os microclimas únicos de nossa montanha se entrelaçam para criar um grão de especialidade excepcional.",
      p3: "Não apenas cultivamos café — preservamos um ecossistema. Cada xícara é uma homenagem à biodiversidade de nossa terra, ao esforço de nossos agricultores locais e ao legado do café premium mexicano.",
    },
    products: {
      heading: "Nossa Essência",
      items: [
        { title: "Café Especial", desc: "Seleção rigorosa de grãos com perfis de xícara excepcionais." },
        { title: "Produção Própria", desc: "Cuidado absoluto desde a semente até sua xícara." },
        { title: "Agricultores Locais", desc: "Trabalho justo de mãos dadas com a comunidade de Nayarit." },
        { title: "Café Sombreado", desc: "Maturação lenta que intensifica sabores e aromas." },
        { title: "Sistema Agroflorestal", desc: "Respeito pela biodiversidade e equilíbrio da floresta." },
        { title: "Premium Mexicano", desc: "Cultivado com orgulho em terras vulcânicas." },
      ],
    },
    gallery: {
      heading: "Nossa Terra",
    },
    contact: {
      visitHeading: "Visite-nos",
      location: "Nayarit, México",
      quote: '"O bom café é um reflexo da terra que o viu nascer."',
      contactHeading: "Contato",
      call: "Ligar",
      follow: "Seguir",
      copyright: "© 2026 Finca Moran. Todos os direitos reservados.",
      tagline: "De Nayarit para o mundo.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      products: "Produkte",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    hero: {
      subtitle: "Spezialkaffee, im Schatten der Vulkanberge von Nayarit angebaut.",
      cta: "Entdecke unseren Kaffee",
    },
    about: {
      heading: "Unsere Geschichte",
      p1: "Im Herzen des Transversalen Vulkangürtels, in Xalisco, Nayarit, wurde Finca Moran geboren. Ein Ort, an dem die Zeit stillzustehen scheint und die Natur den Rhythmus vorgibt.",
      p2: "Unser Kaffee wächst langsam in einem beschatteten Agroforstsystem. Die Höhenlage, die reichen Vulkanböden und das einzigartige Mikroklima unseres Berges verbinden sich zu einer außergewöhnlichen Spezialitätsbohne.",
      p3: "Wir bauen nicht nur Kaffee an — wir bewahren ein Ökosystem. Jede Tasse ist eine Hommage an die Artenvielfalt unserer Erde, die Mühe unserer lokalen Bauern und das Erbe des mexikanischen Premiumkaffees.",
    },
    products: {
      heading: "Unser Wesen",
      items: [
        { title: "Spezialkaffee", desc: "Strenge Auswahl von Bohnen mit außergewöhnlichen Geschmacksprofilen." },
        { title: "Eigene Produktion", desc: "Absolute Sorgfalt vom Samen bis zur Tasse." },
        { title: "Lokale Bauern", desc: "Faire Arbeit Hand in Hand mit der Gemeinschaft in Nayarit." },
        { title: "Schattenkaffee", desc: "Langsame Reifung, die Aromen und Düfte intensiviert." },
        { title: "Agroforstsystem", desc: "Respekt für die Artenvielfalt und das Gleichgewicht des Waldes." },
        { title: "Mexikanisches Premium", desc: "Stolz auf vulkanischen Böden angebaut." },
      ],
    },
    gallery: {
      heading: "Unser Land",
    },
    contact: {
      visitHeading: "Besuche uns",
      location: "Nayarit, Mexiko",
      quote: '"Guter Kaffee ist ein Spiegelbild der Erde, die ihn hervorgebracht hat."',
      contactHeading: "Kontakt",
      call: "Anrufen",
      follow: "Folgen",
      copyright: "© 2026 Finca Moran. Alle Rechte vorbehalten.",
      tagline: "Von Nayarit für die Welt.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私たちについて",
      products: "製品",
      gallery: "ギャラリー",
      contact: "お問い合わせ",
    },
    hero: {
      subtitle: "ナヤリットの火山山脈の木陰で育てたスペシャルティコーヒー。",
      cta: "私たちのコーヒーを知る",
    },
    about: {
      heading: "私たちの物語",
      p1: "横断火山帯の中心、ナヤリット州ハリスコ市に、フィンカ・モランが誕生しました。時間が止まり、自然がリズムを刻む場所です。",
      p2: "私たちのコーヒーは、木陰の農林業システムの中でゆっくりと育ちます。標高、豊かな火山性土壌、そして山の独特のマイクロクライメートが絡み合い、卓越したスペシャルティビーンが生まれます。",
      p3: "私たちはコーヒーを育てるだけでなく、生態系を守っています。一杯一杯が、私たちの大地の生物多様性、地元農家の努力、そしてメキシコプレミアムコーヒーの遺産への敬意です。",
    },
    products: {
      heading: "私たちの本質",
      items: [
        { title: "スペシャルティコーヒー", desc: "例外的なカッププロファイルを持つ豆の厳格な選定。" },
        { title: "自社生産", desc: "種から一杯まで徹底したケア。" },
        { title: "地元農家", desc: "ナヤリットのコミュニティと手を取り合う公正な労働。" },
        { title: "シェードグロウンコーヒー", desc: "風味と香りを高めるゆっくりとした熟成。" },
        { title: "農林業システム", desc: "生物多様性と森のバランスへの敬意。" },
        { title: "メキシカンプレミアム", desc: "誇りを持って火山性の土地で栽培。" },
      ],
    },
    gallery: {
      heading: "私たちの大地",
    },
    contact: {
      visitHeading: "訪問する",
      location: "ナヤリット、メキシコ",
      quote: "「良いコーヒーは、それを生んだ大地の鏡である。」",
      contactHeading: "お問い合わせ",
      call: "電話する",
      follow: "フォロー",
      copyright: "© 2026 Finca Moran. 全著作権所有。",
      tagline: "ナヤリットから世界へ。",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品",
      gallery: "图库",
      contact: "联系我们",
    },
    hero: {
      subtitle: "在纳亚里特火山山脉的荫庇下种植的精品咖啡。",
      cta: "了解我们的咖啡",
    },
    about: {
      heading: "我们的故事",
      p1: "菲恩卡·莫兰诞生于横贯墨西哥火山带的中心——纳亚里特州哈利斯科市。这里时间仿佛静止，大自然主宰着节奏。",
      p2: "我们的咖啡在遮荫农林系统中缓慢生长。海拔、丰富的火山土壤和山地独特的小气候交织在一起，孕育出卓越的精品咖啡豆。",
      p3: "我们不仅仅在种植咖啡，更在守护一个生态系统。每一杯咖啡都是对我们土地生物多样性、当地农民辛勤付出以及墨西哥高端咖啡遗产的致敬。",
    },
    products: {
      heading: "我们的精髓",
      items: [
        { title: "精品咖啡", desc: "严格筛选，杯测表现卓越的咖啡豆。" },
        { title: "自主生产", desc: "从种子到杯中，全程用心呵护。" },
        { title: "本地农民", desc: "与纳亚里特社区携手，践行公平劳动。" },
        { title: "遮荫咖啡", desc: "缓慢成熟，风味与香气更加浓郁。" },
        { title: "农林复合系统", desc: "尊重生物多样性，维护森林生态平衡。" },
        { title: "墨西哥精品", desc: "自豪地生长于火山土地之上。" },
      ],
    },
    gallery: {
      heading: "我们的土地",
    },
    contact: {
      visitHeading: "拜访我们",
      location: "墨西哥纳亚里特",
      quote: "「好咖啡是孕育它的土地的镜子。」",
      contactHeading: "联系方式",
      call: "致电",
      follow: "关注",
      copyright: "© 2026 Finca Moran。保留所有权利。",
      tagline: "从纳亚里特走向世界。",
    },
  },
};

export default translations;
