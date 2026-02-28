export interface Project {
  id: string;
  image: string;
  tags: string[];
  title: { en: string; tr: string; de: string };
  description: { en: string; tr: string; de: string };
  highlights: { en: string[]; tr: string[]; de: string[] };
  tech: string[];
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
        'Subscription-based pricing (Free / Pro / Advanced)',
      ],
      tr: [
        'Kargo kuralları, kesim saatleri, hafta sonları, tatillere göre gelişmiş ETA hesaplama',
        'Ürün, koleksiyon, etiket ve varyant seviyesinde hedefleme',
        'Checkout Extensibility entegrasyonu',
        'Çoklu dil ve ülke desteği',
        'Dönüşüm etkisini ölçmek için analitik paneli',
        'Abonelik bazlı fiyatlandırma (Ücretsiz / Pro / Gelişmiş)',
      ],
      de: [
        'Erweiterte ETA-Berechnung basierend auf Versandregeln, Cut-off-Zeiten, Wochenenden, Feiertagen',
        'Produkt-, Kollektion-, Tag- und Varianten-Level Targeting',
        'Checkout Extensibility Integration',
        'Mehrsprachige und Mehrlänger-Unterstützung',
        'Analytics-Dashboard zur Messung der Conversion-Auswirkung',
        'Abonnementbasierte Preisgestaltung (Kostenlos / Pro / Erweitert)',
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
