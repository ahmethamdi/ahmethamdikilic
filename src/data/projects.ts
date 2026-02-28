export interface Project {
  id: string;
  image: string;
  tags: string[];
  title: { en: string; tr: string; de: string };
  description: { en: string; tr: string; de: string };
  highlights: { en: string[]; tr: string[]; de: string[] };
  tech: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'mega-menu-builder',
    image: '/images/portfolio/mega-menu.jpg',
    tags: ['Shopify App', 'React', 'Theme Extensions'],
    title: {
      en: 'Custom Shopify Mega Menu Builder',
      tr: 'Özel Shopify Mega Menü Oluşturucu',
      de: 'Individueller Shopify Mega-Menü-Builder',
    },
    description: {
      en: 'A custom Shopify application allowing merchants to build advanced mega menus without touching theme code.',
      tr: 'Satıcıların tema koduna dokunmadan gelişmiş mega menüler oluşturmasına olanak tanıyan özel bir Shopify uygulaması.',
      de: 'Eine individuelle Shopify-App, die Händlern ermöglicht, erweiterte Mega-Menüs ohne Theme-Code-Änderungen zu erstellen.',
    },
    highlights: {
      en: [
        'Admin-based drag-and-drop builder with multi-level navigation',
        'Support for images, icons, and campaign-focused content areas',
        'Separate mobile and desktop menu configurations',
        'Integrated via Theme App Extensions with high-performance rendering',
        'Fully compatible with Shopify Online Store 2.0',
      ],
      tr: [
        'Çok seviyeli navigasyonlu admin tabanlı sürükle-bırak oluşturucu',
        'Görseller, ikonlar ve kampanya odaklı içerik alanları desteği',
        'Ayrı mobil ve masaüstü menü yapılandırmaları',
        'Yüksek performanslı renderla Theme App Extensions ile entegre',
        'Shopify Online Store 2.0 ile tam uyumlu',
      ],
      de: [
        'Admin-basierter Drag-and-Drop-Builder mit mehrstufiger Navigation',
        'Unterstützung für Bilder, Icons und kampagnenfokussierte Inhaltsbereiche',
        'Separate Mobil- und Desktop-Menükonfigurationen',
        'Integriert über Theme App Extensions mit Hochleistungsrendering',
        'Vollständig kompatibel mit Shopify Online Store 2.0',
      ],
    },
    tech: ['Shopify', 'React', 'Liquid', 'Theme App Extensions', 'JavaScript'],
  },
  {
    id: 'etaly',
    image: '/images/portfolio/etaly.jpg',
    tags: ['Shopify App', 'Checkout Extensibility', 'Multi-language'],
    title: {
      en: 'ETAly – Delivery Date & Shipping Information',
      tr: 'ETAly – Teslimat Tarihi & Kargo Bilgisi',
      de: 'ETAly – Lieferdatum & Versandinformationen',
    },
    description: {
      en: 'A conversion-focused Shopify app displaying dynamic delivery dates on product, cart, checkout, and thank-you pages.',
      tr: 'Ürün, sepet, ödeme ve teşekkür sayfalarında dinamik teslimat tarihleri gösteren dönüşüm odaklı bir Shopify uygulaması.',
      de: 'Eine conversion-fokussierte Shopify-App, die dynamische Lieferdaten auf Produkt-, Warenkorb-, Checkout- und Danke-Seiten anzeigt.',
    },
    highlights: {
      en: [
        'Advanced ETA calculation based on shipping rules, cut-off times, weekends, holidays',
        'Product, collection, tag, and variant-level targeting',
        'Checkout Extensibility integration',
        'Multi-language and multi-country support',
        'Analytics dashboard to measure conversion impact',
      ],
      tr: [
        'Kargo kuralları, kesim saatleri, hafta sonları, tatillere göre gelişmiş ETA hesaplama',
        'Ürün, koleksiyon, etiket ve varyant seviyesinde hedefleme',
        'Checkout Extensibility entegrasyonu',
        'Çoklu dil ve ülke desteği',
        'Dönüşüm etkisini ölçmek için analitik paneli',
      ],
      de: [
        'Erweiterte ETA-Berechnung basierend auf Versandregeln, Cut-off-Zeiten, Wochenenden, Feiertagen',
        'Produkt-, Kollektion-, Tag- und Varianten-Level Targeting',
        'Checkout Extensibility Integration',
        'Mehrsprachige und Mehrlänger-Unterstützung',
        'Analytics-Dashboard zur Messung der Conversion-Auswirkung',
      ],
    },
    tech: ['Shopify', 'Node.js', 'React', 'Checkout Extensibility', 'GraphQL'],
  },
  {
    id: 'shopify-shopware',
    image: '/images/portfolio/shopify-shopware.jpg',
    tags: ['Integration', 'API', 'Shopware'],
    title: {
      en: 'Shopify ↔ Shopware Integration System',
      tr: 'Shopify ↔ Shopware Entegrasyon Sistemi',
      de: 'Shopify ↔ Shopware Integrationssystem',
    },
    description: {
      en: 'A custom integration system enabling bi-directional synchronization between Shopify and Shopware (5 & 6).',
      tr: 'Shopify ve Shopware (5 & 6) arasında çift yönlü senkronizasyon sağlayan özel bir entegrasyon sistemi.',
      de: 'Ein individuelles Integrationssystem für bidirektionale Synchronisation zwischen Shopify und Shopware (5 & 6).',
    },
    highlights: {
      en: [
        'Bi-directional synchronization of products, orders, customers, and inventory',
        'Order status, payment state, and fulfillment sync logic',
        'Robust API mapping layer with error handling and retry mechanisms',
        'Reduced manual operations and improved operational efficiency',
      ],
      tr: [
        'Ürünlerin, siparişlerin, müşterilerin ve envanterin çift yönlü senkronizasyonu',
        'Sipariş durumu, ödeme durumu ve karşılama senkronizasyon mantığı',
        'Hata yönetimi ve yeniden deneme mekanizmalarıyla güçlü API eşleme katmanı',
        'Manuel operasyonların azaltılması ve operasyonel verimliliğin artırılması',
      ],
      de: [
        'Bidirektionale Synchronisation von Produkten, Bestellungen, Kunden und Inventar',
        'Bestellstatus-, Zahlungsstatus- und Fulfillment-Synchronisationslogik',
        'Robuste API-Mapping-Schicht mit Fehlerbehandlung und Retry-Mechanismen',
        'Reduzierung manueller Operationen und Verbesserung der betrieblichen Effizienz',
      ],
    },
    tech: ['Shopify API', 'Shopware 5/6', 'REST APIs', 'Node.js', 'Webhooks'],
  },
  {
    id: 'walmart-integration',
    image: '/images/portfolio/walmart.jpg',
    tags: ['Integration', 'Marketplace', 'API'],
    title: {
      en: 'Shopify ↔ Walmart Marketplace Integration',
      tr: 'Shopify ↔ Walmart Marketplace Entegrasyonu',
      de: 'Shopify ↔ Walmart Marketplace Integration',
    },
    description: {
      en: 'A custom integration syncing Shopify products to Walmart Marketplace with automated inventory and order management.',
      tr: 'Shopify ürünlerini otomatik envanter ve sipariş yönetimiyle Walmart Marketplace\'e senkronize eden özel bir entegrasyon.',
      de: 'Eine individuelle Integration zur Synchronisation von Shopify-Produkten mit Walmart Marketplace mit automatisierter Bestands- und Auftragsverwaltung.',
    },
    highlights: {
      en: [
        'Automated inventory, pricing, and product data synchronization',
        'Imported Walmart orders into Shopify for centralized order management',
        'Background jobs, batching, and rate-limit handling',
        'Designed for scalability and production stability',
      ],
      tr: [
        'Otomatik envanter, fiyatlandırma ve ürün veri senkronizasyonu',
        'Merkezi sipariş yönetimi için Walmart siparişlerini Shopify\'a aktarma',
        'Arka plan işleri, toplu işlem ve hız limiti yönetimi',
        'Ölçeklenebilirlik ve üretim kararlılığı için tasarlandı',
      ],
      de: [
        'Automatisierte Bestands-, Preis- und Produktdatensynchronisation',
        'Walmart-Bestellungen in Shopify für zentrale Auftragsverwaltung importiert',
        'Hintergrundjobs, Batching und Rate-Limit-Handling',
        'Für Skalierbarkeit und Produktionsstabilität konzipiert',
      ],
    },
    tech: ['Shopify API', 'Walmart API', 'Node.js', 'REST APIs', 'Background Jobs'],
  },
  {
    id: 'custom-themes',
    image: '/images/portfolio/themes.jpg',
    tags: ['Theme Development', 'Figma', 'Liquid'],
    title: {
      en: 'Custom Shopify Themes (Figma → Shopify)',
      tr: 'Özel Shopify Temaları (Figma → Shopify)',
      de: 'Individuelle Shopify Themes (Figma → Shopify)',
    },
    description: {
      en: 'Developed 4 fully custom Shopify themes based on Figma designs with pixel-perfect implementation.',
      tr: 'Figma tasarımlarına dayalı piksel mükemmelliğinde 4 tamamen özel Shopify teması geliştirdim.',
      de: '4 vollständig individuelle Shopify-Themes basierend auf Figma-Designs mit pixelgenauer Umsetzung entwickelt.',
    },
    highlights: {
      en: [
        'Pixel-perfect Figma-to-Shopify implementation using Liquid, HTML, CSS, and JavaScript',
        'All sections and components fully editable via Shopify Admin',
        'Built reusable, modular sections optimized for performance',
        'Mobile-first, responsive layouts with conversion-focused UX',
        'Online Store 2.0 compliant architecture',
      ],
      tr: [
        'Liquid, HTML, CSS ve JavaScript ile piksel mükemmelliğinde Figma\'dan Shopify\'a uygulama',
        'Tüm bölümler ve bileşenler Shopify Admin üzerinden düzenlenebilir',
        'Performans için optimize edilmiş yeniden kullanılabilir, modüler bölümler',
        'Mobil öncelikli, dönüşüm odaklı responsive tasarım',
        'Online Store 2.0 uyumlu mimari',
      ],
      de: [
        'Pixelgenaue Figma-zu-Shopify-Umsetzung mit Liquid, HTML, CSS und JavaScript',
        'Alle Sections und Komponenten vollständig über Shopify Admin bearbeitbar',
        'Wiederverwendbare, modulare Sections für Performance optimiert',
        'Mobile-first, responsive Layouts mit Conversion-fokussierter UX',
        'Online Store 2.0 konforme Architektur',
      ],
    },
    tech: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript', 'Figma', 'Online Store 2.0'],
  },
  {
    id: 'plentymarkets-dropshipping',
    image: '/images/portfolio/plentymarkets.jpg',
    tags: ['Integration', 'Laravel', 'Dropshipping'],
    title: {
      en: 'Shopify ↔ Plentymarkets Dropshipping Integration',
      tr: 'Shopify ↔ Plentymarkets Dropshipping Entegrasyonu',
      de: 'Shopify ↔ Plentymarkets Dropshipping Integration',
    },
    description: {
      en: 'A fully automated dropshipping application connecting Shopify and Plentymarkets via REST APIs for Elfbargermany.',
      tr: 'Elfbargermany için Shopify ve Plentymarkets\'ı REST API\'ler aracılığıyla birbirine bağlayan tam otomatik dropshipping uygulaması.',
      de: 'Eine vollautomatische Dropshipping-Anwendung, die Shopify und Plentymarkets über REST-APIs für Elfbargermany verbindet.',
    },
    highlights: {
      en: [
        'End-to-end order synchronization with transformation pipeline',
        'Scalable backend architecture using Laravel',
        'Custom CMS for operations management and monitoring',
        'Optimized e-commerce workflows for accelerated fulfillment',
      ],
      tr: [
        'Dönüşüm hattıyla uçtan uca sipariş senkronizasyonu',
        'Laravel ile ölçeklenebilir backend mimarisi',
        'Operasyon yönetimi ve izleme için özel CMS',
        'Hızlandırılmış karşılama için optimize e-ticaret iş akışları',
      ],
      de: [
        'End-to-End Auftragssynchronisation mit Transformationspipeline',
        'Skalierbare Backend-Architektur mit Laravel',
        'Individuelles CMS für Betriebsmanagement und Monitoring',
        'Optimierte E-Commerce-Workflows für beschleunigte Auftragsabwicklung',
      ],
    },
    tech: ['Shopify API', 'Plentymarkets API', 'Laravel', 'PHP', 'MySQL', 'REST APIs'],
  },
];

// Client reference stores — separate from main projects
export interface ReferenceStore {
  id: string;
  image: string;
  name: string;
  url: string;
  industry: { en: string; tr: string; de: string };
  description: { en: string; tr: string; de: string };
  tags: string[];
}

export const referenceStores: ReferenceStore[] = [
  {
    id: 'cesmeci',
    image: '/images/portfolio/ref-1.png',
    name: 'Çeşmeci Sıhhi Tesisat',
    url: 'https://cesmecisihhitesisat.com',
    industry: {
      en: 'Plumbing & Bathroom Fixtures',
      tr: 'Sıhhi Tesisat & Banyo',
      de: 'Sanitär & Badezimmerausstattung',
    },
    description: {
      en: 'Complete Shopify store development for a premium Turkish plumbing and bathroom fixtures retailer. Modern design with product categories, responsive layout, and Turkish localization.',
      tr: 'Premium Türk sıhhi tesisat ve banyo ürünleri perakendecisi için komple Shopify mağaza geliştirme. Ürün kategorileri, responsive tasarım ve Türkçe lokalizasyon.',
      de: 'Komplette Shopify-Shop-Entwicklung für einen Premium-Sanitär- und Badezimmerausstatter. Modernes Design mit Produktkategorien und türkischer Lokalisierung.',
    },
    tags: ['Shopify', 'Custom Theme', 'Turkish Market'],
  },
  {
    id: 'izmir-tesisat',
    image: '/images/portfolio/ref-2.png',
    name: 'İzmir\'de Sıhhi Tesisat',
    url: 'https://izmirdesihhitesisat.com',
    industry: {
      en: 'Plumbing & Home Renovation',
      tr: 'Sıhhi Tesisat & Ev Renovasyonu',
      de: 'Sanitär & Heimrenovierung',
    },
    description: {
      en: 'Custom Shopify theme for an Izmir-based plumbing store. Featuring a warm orange brand identity, quality product showcases, and seamless category navigation.',
      tr: 'İzmir merkezli bir tesisat mağazası için özel Shopify teması. Turuncu marka kimliği, kaliteli ürün vitrini ve kusursuz kategori navigasyonu.',
      de: 'Individuelles Shopify-Theme für einen Sanitärladen in Izmir. Warme orangefarbene Markenidentität und nahtlose Kategorienavigation.',
    },
    tags: ['Shopify', 'Custom Theme', 'E-Commerce'],
  },
  {
    id: 'juniper',
    image: '/images/portfolio/ref-3.png',
    name: 'Juniper Eco Shield',
    url: 'https://juniperecoshield.com',
    industry: {
      en: 'Natural Health & Eco Products',
      tr: 'Doğal Sağlık & Eko Ürünler',
      de: 'Naturgesundheit & Öko-Produkte',
    },
    description: {
      en: 'Shopify store for a natural insect repellent spray brand. Clean, eco-friendly design with botanical imagery, product education content, and trust-building elements.',
      tr: 'Doğal böcek kovucu sprey markası için Shopify mağazası. Botanik görseller, ürün eğitim içeriği ve güven oluşturan elementlerle temiz, çevre dostu tasarım.',
      de: 'Shopify-Shop für eine natürliche Insektenschutz-Marke. Sauberes, umweltfreundliches Design mit botanischen Bildern und Produktbildungsinhalten.',
    },
    tags: ['Shopify', 'Health & Beauty', 'Eco-Friendly'],
  },
  {
    id: 'dgn-zaun',
    image: '/images/portfolio/ref-4.png',
    name: 'DGN Zaun',
    url: 'https://dgn-zaun.myshopify.com',
    industry: {
      en: 'Fencing & Security Systems',
      tr: 'Çit & Güvenlik Sistemleri',
      de: 'Zaunsysteme & Sicherheit',
    },
    description: {
      en: 'German market Shopify store for professional fence and security systems. Industrial aesthetic with green accent, product configurator support, and B2B pricing capabilities.',
      tr: 'Profesyonel çit ve güvenlik sistemleri için Alman pazarı Shopify mağazası. Yeşil vurgu, ürün yapılandırıcı desteği ve B2B fiyatlandırma özellikli endüstriyel estetik.',
      de: 'Shopify-Shop für professionelle Zaunsysteme auf dem deutschen Markt. Industrielle Ästhetik mit grünem Akzent, Produktkonfigurator und B2B-Preisgestaltung.',
    },
    tags: ['Shopify', 'B2B', 'German Market'],
  },
  {
    id: 'aidia',
    image: '/images/portfolio/ref-5.png',
    name: 'Aidia Flower Designs',
    url: 'https://aidiaflowerdesigns.com',
    industry: {
      en: 'Floral Design & Gifts',
      tr: 'Çiçek Tasarımı & Hediye',
      de: 'Blumendesign & Geschenke',
    },
    description: {
      en: 'Elegant Shopify store for a bespoke flower design studio. Soft, romantic aesthetic with beautiful product photography integration, occasion-based shopping, and gift ordering features.',
      tr: 'Butik çiçek tasarım stüdyosu için zarif Shopify mağazası. Güzel ürün fotoğrafçılığı, özel günlere göre alışveriş ve hediye sipariş özellikleriyle yumuşak, romantik estetik.',
      de: 'Eleganter Shopify-Shop für ein Blumendesign-Studio. Sanfte, romantische Ästhetik mit schöner Produktfotografie und anlassbasiertem Shopping.',
    },
    tags: ['Shopify', 'Custom Theme', 'Lifestyle'],
  },
  {
    id: 'snug',
    image: '/images/portfolio/ref-6.png',
    name: 'SNUG Brandwear',
    url: 'https://snugbrandwear.com',
    industry: {
      en: 'Fashion & Streetwear',
      tr: 'Moda & Sokak Giyimi',
      de: 'Mode & Streetwear',
    },
    description: {
      en: 'Bold Shopify store for a Neo Retro fashion brand. Dynamic design with striking typography, collection lookbooks, and a modern shopping experience targeting young demographics.',
      tr: 'Neo Retro moda markası için cesur Shopify mağazası. Çarpıcı tipografi, koleksiyon lookbook\'ları ve genç demografiye yönelik modern alışveriş deneyimi.',
      de: 'Mutiger Shopify-Shop für eine Neo-Retro-Modemarke. Dynamisches Design mit auffälliger Typografie und modernem Shopping-Erlebnis.',
    },
    tags: ['Shopify', 'Fashion', 'Streetwear'],
  },
  {
    id: 'gianni',
    image: '/images/portfolio/ref-7.png',
    name: 'Gianni Armando',
    url: 'https://gianniarmando.com',
    industry: {
      en: 'Luxury Menswear',
      tr: 'Lüks Erkek Giyim',
      de: 'Luxus-Herrenbekleidung',
    },
    description: {
      en: 'Premium Shopify store for a luxury menswear brand. Sophisticated dark theme with elegant product presentation, business shirts & jacket collections, and a high-end shopping experience.',
      tr: 'Lüks erkek giyim markası için premium Shopify mağazası. Zarif ürün sunumu, iş gömlekleri & ceket koleksiyonları ve üst düzey alışveriş deneyimiyle sofistike karanlık tema.',
      de: 'Premium Shopify-Shop für eine Luxus-Herrenbekleidungsmarke. Elegante Produktpräsentation mit Business-Hemden & Jacken-Kollektionen.',
    },
    tags: ['Shopify', 'Luxury', 'Fashion'],
  },
  {
    id: 'jollyshop',
    image: '/images/portfolio/ref-8.png',
    name: 'Jolly Shop',
    url: 'https://jollyshop.com.tr',
    industry: {
      en: 'Consumer Electronics & Accessories',
      tr: 'Tüketici Elektroniği & Aksesuar',
      de: 'Unterhaltungselektronik & Zubehör',
    },
    description: {
      en: 'Turkish Shopify store for premium audio electronics and accessories featuring GUESS brand products. Dark, luxurious design with campaign banners, discount showcases, and conversion-optimized layouts.',
      tr: 'GUESS marka ürünleri içeren premium ses elektroniği ve aksesuarlar için Türk Shopify mağazası. Kampanya bannerları, indirim vitrini ve dönüşüm odaklı tasarımla karanlık, lüks görünüm.',
      de: 'Türkischer Shopify-Shop für Premium-Audio-Elektronik mit GUESS-Markenprodukten. Dunkles, luxuriöses Design mit Kampagnenbannern und Conversion-optimierten Layouts.',
    },
    tags: ['Shopify', 'Electronics', 'Turkish Market'],
  },
  {
    id: 'youngkit',
    image: '/images/portfolio/ref-9.png',
    name: 'YOUNGKIT',
    url: 'https://youngkit.com',
    industry: {
      en: 'Phone Cases & Tech Accessories',
      tr: 'Telefon Kılıfları & Teknoloji Aksesuarları',
      de: 'Handyhüllen & Tech-Zubehör',
    },
    description: {
      en: 'Colorful, vibrant Shopify store for designer iPhone cases and tech accessories. Playful design with artist collaborations, new product launches, and a personalized shopping experience.',
      tr: 'Tasarımcı iPhone kılıfları ve teknoloji aksesuarları için renkli, canlı Shopify mağazası. Sanatçı işbirlikleri, yeni ürün lansmanları ve kişiselleştirilmiş alışveriş deneyimi.',
      de: 'Farbenfroher Shopify-Shop für Designer-iPhone-Hüllen und Tech-Zubehör. Verspieltes Design mit Künstlerkooperationen und neuen Produkteinführungen.',
    },
    tags: ['Shopify', 'Tech Accessories', 'Design'],
  },
];
