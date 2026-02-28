export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; tr: string; de: string };
  company: string;
  avatar: string;
  rating: number;
  text: { en: string; tr: string; de: string };
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: {
      en: 'CEO & Founder',
      tr: 'CEO & Kurucu',
      de: 'CEO & Gründerin',
    },
    company: 'Fashion Forward',
    avatar: '/images/clients/client-1.jpg',
    rating: 5,
    text: {
      en: 'Working with AHK was an incredible experience. Our new Shopify store exceeded all expectations with a 150% increase in conversion rates. Highly recommended!',
      tr: 'AHK ile çalışmak inanılmaz bir deneyimdi. Yeni Shopify mağazamız %150 dönüşüm oranı artışıyla tüm beklentileri aştı. Kesinlikle tavsiye ederim!',
      de: 'Die Zusammenarbeit mit AHK war eine unglaubliche Erfahrung. Unser neuer Shopify-Shop übertraf alle Erwartungen mit einer Steigerung der Conversion-Rate um 150%. Sehr empfehlenswert!',
    },
  },
  {
    id: 'testimonial-2',
    name: 'Michael Weber',
    role: {
      en: 'Marketing Director',
      tr: 'Pazarlama Direktörü',
      de: 'Marketingdirektor',
    },
    company: 'NaturPlus',
    avatar: '/images/clients/client-2.jpg',
    rating: 5,
    text: {
      en: 'The migration from WooCommerce to Shopify was seamless. AHK handled everything professionally with zero downtime. Our site is now 40% faster.',
      tr: 'WooCommerce\'den Shopify\'a geçiş sorunsuz oldu. AHK her şeyi sıfır kesinti ile profesyonelce yönetti. Sitemiz şimdi %40 daha hızlı.',
      de: 'Die Migration von WooCommerce zu Shopify verlief nahtlos. AHK hat alles professionell und ohne Ausfallzeit abgewickelt. Unsere Website ist jetzt 40% schneller.',
    },
  },
  {
    id: 'testimonial-3',
    name: 'Emily Chen',
    role: {
      en: 'Product Manager',
      tr: 'Ürün Yöneticisi',
      de: 'Produktmanagerin',
    },
    company: 'TechGear Pro',
    avatar: '/images/clients/client-3.jpg',
    rating: 5,
    text: {
      en: 'The custom product configurator app AHK built for us transformed our business. Average order value increased by 200%. An absolute game changer!',
      tr: 'AHK\'nın bizim için geliştirdiği özel ürün yapılandırıcı uygulama işimizi dönüştürdü. Ortalama sipariş değeri %200 arttı. Kesinlikle oyun değiştirici!',
      de: 'Die individuelle Produkt-Konfigurator-App, die AHK für uns entwickelt hat, hat unser Geschäft transformiert. Der durchschnittliche Bestellwert stieg um 200%. Ein absoluter Gamechanger!',
    },
  },
];
