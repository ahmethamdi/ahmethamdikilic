export interface Project {
  id: string;
  image: string;
  url: string;
  tags: string[];
  title: { en: string; tr: string; de: string };
  description: { en: string; tr: string; de: string };
  results: { en: string; tr: string; de: string };
}

export const projects: Project[] = [
  {
    id: 'project-1',
    image: '/images/portfolio/project-1.jpg',
    url: '#',
    tags: ['Shopify', 'Custom Theme', 'Liquid'],
    title: {
      en: 'Fashion E-Commerce Store',
      tr: 'Moda E-Ticaret Mağazası',
      de: 'Mode E-Commerce Shop',
    },
    description: {
      en: 'A fully custom Shopify store for a premium fashion brand with advanced filtering, quick-view, and seamless checkout experience.',
      tr: 'Gelişmiş filtreleme, hızlı görüntüleme ve sorunsuz ödeme deneyimi sunan premium bir moda markası için tamamen özel Shopify mağazası.',
      de: 'Ein vollständig individueller Shopify-Shop für eine Premium-Modemarke mit erweiterter Filterung, Schnellansicht und nahtlosem Checkout-Erlebnis.',
    },
    results: {
      en: '+150% conversion rate increase',
      tr: '%150 dönüşüm oranı artışı',
      de: '+150% Conversion-Rate-Steigerung',
    },
  },
  {
    id: 'project-2',
    image: '/images/portfolio/project-2.jpg',
    url: '#',
    tags: ['Shopify', 'Migration', 'SEO'],
    title: {
      en: 'Health & Wellness Brand',
      tr: 'Sağlık & Wellness Markası',
      de: 'Gesundheits- & Wellness-Marke',
    },
    description: {
      en: 'Complete migration from WooCommerce to Shopify with custom theme development and SEO preservation for a health supplement brand.',
      tr: 'Bir sağlık takviyesi markası için WooCommerce\'den Shopify\'a tam geçiş, özel tema geliştirme ve SEO koruması.',
      de: 'Komplette Migration von WooCommerce zu Shopify mit individueller Theme-Entwicklung und SEO-Erhaltung für eine Nahrungsergänzungsmarke.',
    },
    results: {
      en: 'Zero downtime migration, 40% faster load time',
      tr: 'Sıfır kesinti ile geçiş, %40 daha hızlı yükleme',
      de: 'Migration ohne Ausfallzeit, 40% schnellere Ladezeit',
    },
  },
  {
    id: 'project-3',
    image: '/images/portfolio/project-3.jpg',
    url: '#',
    tags: ['Shopify', 'App', 'React'],
    title: {
      en: 'Custom Product Configurator',
      tr: 'Özel Ürün Yapılandırıcı',
      de: 'Individueller Produkt-Konfigurator',
    },
    description: {
      en: 'A custom Shopify app that allows customers to configure products in real-time with 3D preview and dynamic pricing.',
      tr: '3D önizleme ve dinamik fiyatlandırma ile müşterilerin ürünleri gerçek zamanlı olarak yapılandırmasına olanak tanıyan özel bir Shopify uygulaması.',
      de: 'Eine individuelle Shopify-App, die Kunden ermöglicht, Produkte in Echtzeit mit 3D-Vorschau und dynamischer Preisgestaltung zu konfigurieren.',
    },
    results: {
      en: '+200% average order value increase',
      tr: '%200 ortalama sipariş değeri artışı',
      de: '+200% durchschnittliche Bestellwert-Steigerung',
    },
  },
];
