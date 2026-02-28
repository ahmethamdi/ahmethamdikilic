export const languages = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Ahmet Hamdi Kılıç',
    'hero.title': 'Shopify Development Expert',
    'hero.subtitle': 'I build high-performance, conversion-optimized Shopify stores that drive revenue and deliver exceptional shopping experiences.',
    'hero.cta.primary': 'View My Work',
    'hero.cta.secondary': 'Get in Touch',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.tag': 'About Me',
    'about.title': 'Crafting E-Commerce Experiences That Convert',
    'about.description': 'I am a certified Shopify developer with extensive experience in building custom e-commerce solutions. From custom theme development to complex app integrations, I help brands establish and grow their online presence.',
    'about.description2': 'With a deep understanding of the Shopify ecosystem, Liquid templating, and modern web technologies, I deliver stores that are not only visually stunning but also optimized for performance and conversions.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'about.satisfaction': 'Satisfaction Rate',

    // Services
    'services.tag': 'Services',
    'services.title': 'What I Can Do For You',
    'services.subtitle': 'End-to-end Shopify development services tailored to your business needs.',
    'services.store.title': 'Store Development',
    'services.store.desc': 'Full custom Shopify store development from scratch. Pixel-perfect designs that reflect your brand identity and convert visitors into customers.',
    'services.theme.title': 'Theme Customization',
    'services.theme.desc': 'Expert modification and customization of existing Shopify themes. Tailored solutions that match your unique brand requirements.',
    'services.app.title': 'App Development',
    'services.app.desc': 'Custom Shopify app development to extend your store functionality. From private apps to public marketplace solutions.',
    'services.migration.title': 'Store Migration',
    'services.migration.desc': 'Seamless migration from WooCommerce, Magento, or other platforms to Shopify with zero data loss and minimal downtime.',
    'services.speed.title': 'Speed Optimization',
    'services.speed.desc': 'Performance auditing and optimization to improve Core Web Vitals, reduce load times, and boost search rankings.',
    'services.support.title': 'Ongoing Support',
    'services.support.desc': 'Continuous technical support and maintenance to keep your store running smoothly and up to date with the latest features.',

    // Portfolio
    'portfolio.tag': 'Portfolio',
    'portfolio.title': 'Selected Work',
    'portfolio.subtitle': 'A showcase of my recent Shopify development projects.',
    'portfolio.view': 'View Project',
    'portfolio.all': 'View All Projects',

    // Skills
    'skills.tag': 'Skills & Technologies',
    'skills.title': 'My Tech Stack',
    'skills.subtitle': 'Tools and technologies I use to build exceptional e-commerce experiences.',

    // Testimonials
    'testimonials.tag': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Feedback from clients I have had the pleasure of working with.',

    // Contact
    'contact.tag': 'Contact',
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Have a project in mind? Let\'s discuss how I can help your business grow.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.availability': 'Availability',
    'contact.info.available': 'Available for new projects',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Crafted with passion for e-commerce.',

    // Meta
    'meta.title': 'AHK | Shopify Developer & E-Commerce Expert',
    'meta.description': 'Expert Shopify developer specializing in custom store development, theme customization, app development, and e-commerce optimization. Based in Germany, serving clients worldwide.',
    'meta.keywords': 'Shopify developer, Shopify expert, e-commerce developer, Shopify theme development, Shopify app development, Liquid developer, custom Shopify store',
  },
  tr: {
    // Nav
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portföy',
    'nav.skills': 'Yetenekler',
    'nav.testimonials': 'Referanslar',
    'nav.contact': 'İletişim',
    'nav.cta': 'İletişime Geç',

    // Hero
    'hero.greeting': 'Merhaba, ben',
    'hero.name': 'Ahmet Hamdi Kılıç',
    'hero.title': 'Shopify Geliştirme Uzmanı',
    'hero.subtitle': 'Gelir artıran ve olağanüstü alışveriş deneyimleri sunan, yüksek performanslı ve dönüşüm odaklı Shopify mağazaları oluşturuyorum.',
    'hero.cta.primary': 'Çalışmalarımı Gör',
    'hero.cta.secondary': 'İletişime Geç',
    'hero.scroll': 'Keşfetmek için kaydır',

    // About
    'about.tag': 'Hakkımda',
    'about.title': 'Dönüşüm Sağlayan E-Ticaret Deneyimleri',
    'about.description': 'Özel e-ticaret çözümleri geliştirme konusunda kapsamlı deneyime sahip sertifikalı bir Shopify geliştiricisiyim. Özel tema geliştirmeden karmaşık uygulama entegrasyonlarına kadar, markaların çevrimiçi varlıklarını oluşturmalarına ve büyütmelerine yardımcı oluyorum.',
    'about.description2': 'Shopify ekosistemi, Liquid şablon dili ve modern web teknolojileri konusundaki derin bilgimle, yalnızca görsel olarak etkileyici değil, aynı zamanda performans ve dönüşümler için optimize edilmiş mağazalar sunuyorum.',
    'about.experience': 'Yıllık Deneyim',
    'about.projects': 'Tamamlanan Proje',
    'about.clients': 'Mutlu Müşteri',
    'about.satisfaction': 'Memnuniyet Oranı',

    // Services
    'services.tag': 'Hizmetler',
    'services.title': 'Sizin İçin Neler Yapabilirim',
    'services.subtitle': 'İş ihtiyaçlarınıza özel uçtan uca Shopify geliştirme hizmetleri.',
    'services.store.title': 'Mağaza Geliştirme',
    'services.store.desc': 'Sıfırdan tam özel Shopify mağaza geliştirme. Marka kimliğinizi yansıtan ve ziyaretçileri müşteriye dönüştüren piksel mükemmelliğinde tasarımlar.',
    'services.theme.title': 'Tema Özelleştirme',
    'services.theme.desc': 'Mevcut Shopify temalarının uzman düzeyinde modifikasyonu ve özelleştirilmesi. Benzersiz marka gereksinimlerinize uygun çözümler.',
    'services.app.title': 'Uygulama Geliştirme',
    'services.app.desc': 'Mağaza işlevselliğinizi genişletmek için özel Shopify uygulama geliştirme. Özel uygulamalardan halka açık pazar çözümlerine.',
    'services.migration.title': 'Mağaza Taşıma',
    'services.migration.desc': 'WooCommerce, Magento veya diğer platformlardan Shopify\'a sıfır veri kaybı ve minimum kesinti ile sorunsuz geçiş.',
    'services.speed.title': 'Hız Optimizasyonu',
    'services.speed.desc': 'Core Web Vitals iyileştirme, yükleme sürelerini azaltma ve arama sıralamalarını yükseltme için performans denetimi ve optimizasyonu.',
    'services.support.title': 'Sürekli Destek',
    'services.support.desc': 'Mağazanızın sorunsuz çalışmasını ve en son özelliklerle güncel kalmasını sağlamak için sürekli teknik destek ve bakım.',

    // Portfolio
    'portfolio.tag': 'Portföy',
    'portfolio.title': 'Seçili Çalışmalar',
    'portfolio.subtitle': 'Son Shopify geliştirme projelerimden bir vitrin.',
    'portfolio.view': 'Projeyi Gör',
    'portfolio.all': 'Tüm Projeleri Gör',

    // Skills
    'skills.tag': 'Yetenekler & Teknolojiler',
    'skills.title': 'Teknoloji Yığınım',
    'skills.subtitle': 'Olağanüstü e-ticaret deneyimleri oluşturmak için kullandığım araçlar ve teknolojiler.',

    // Testimonials
    'testimonials.tag': 'Referanslar',
    'testimonials.title': 'Müşteriler Ne Diyor',
    'testimonials.subtitle': 'Birlikte çalışma fırsatı bulduğum müşterilerden geri bildirimler.',

    // Contact
    'contact.tag': 'İletişim',
    'contact.title': 'Birlikte Çalışalım',
    'contact.subtitle': 'Aklınızda bir proje mi var? İşinizi nasıl büyütebileceğimi konuşalım.',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta Adresiniz',
    'contact.message': 'Mesajınız',
    'contact.send': 'Mesaj Gönder',
    'contact.info.email': 'E-posta',
    'contact.info.location': 'Konum',
    'contact.info.availability': 'Müsaitlik',
    'contact.info.available': 'Yeni projeler için müsait',

    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.made': 'E-ticaret tutkusuyla üretildi.',

    // Meta
    'meta.title': 'AHK | Shopify Geliştirici & E-Ticaret Uzmanı',
    'meta.description': 'Özel mağaza geliştirme, tema özelleştirme, uygulama geliştirme ve e-ticaret optimizasyonu konusunda uzmanlaşmış Shopify geliştiricisi. Almanya merkezli, dünya genelinde hizmet.',
    'meta.keywords': 'Shopify geliştirici, Shopify uzman, e-ticaret geliştirici, Shopify tema geliştirme, Shopify uygulama geliştirme, Liquid geliştirici, özel Shopify mağaza',
  },
  de: {
    // Nav
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.services': 'Leistungen',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Fähigkeiten',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakt aufnehmen',

    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Ahmet Hamdi Kılıç',
    'hero.title': 'Shopify Entwicklungsexperte',
    'hero.subtitle': 'Ich erstelle leistungsstarke, conversion-optimierte Shopify-Shops, die Umsatz steigern und außergewöhnliche Einkaufserlebnisse bieten.',
    'hero.cta.primary': 'Meine Arbeit ansehen',
    'hero.cta.secondary': 'Kontakt aufnehmen',
    'hero.scroll': 'Scrollen zum Entdecken',

    // About
    'about.tag': 'Über mich',
    'about.title': 'E-Commerce-Erlebnisse die konvertieren',
    'about.description': 'Ich bin ein zertifizierter Shopify-Entwickler mit umfassender Erfahrung in der Erstellung individueller E-Commerce-Lösungen. Von der individuellen Theme-Entwicklung bis hin zu komplexen App-Integrationen helfe ich Marken dabei, ihre Online-Präsenz aufzubauen und zu erweitern.',
    'about.description2': 'Mit einem tiefen Verständnis des Shopify-Ökosystems, Liquid-Templating und moderner Webtechnologien liefere ich Shops, die nicht nur visuell beeindruckend, sondern auch für Leistung und Conversions optimiert sind.',
    'about.experience': 'Jahre Erfahrung',
    'about.projects': 'Abgeschlossene Projekte',
    'about.clients': 'Zufriedene Kunden',
    'about.satisfaction': 'Zufriedenheitsrate',

    // Services
    'services.tag': 'Leistungen',
    'services.title': 'Was ich für Sie tun kann',
    'services.subtitle': 'End-to-End Shopify-Entwicklungsdienstleistungen, maßgeschneidert für Ihre Geschäftsanforderungen.',
    'services.store.title': 'Shop-Entwicklung',
    'services.store.desc': 'Vollständig individuelle Shopify-Shop-Entwicklung von Grund auf. Pixelgenaue Designs, die Ihre Markenidentität widerspiegeln und Besucher in Kunden verwandeln.',
    'services.theme.title': 'Theme-Anpassung',
    'services.theme.desc': 'Fachkundige Modifikation und Anpassung bestehender Shopify-Themes. Maßgeschneiderte Lösungen für Ihre einzigartigen Markenanforderungen.',
    'services.app.title': 'App-Entwicklung',
    'services.app.desc': 'Individuelle Shopify-App-Entwicklung zur Erweiterung Ihrer Shop-Funktionalität. Von privaten Apps bis hin zu öffentlichen Marktplatzlösungen.',
    'services.migration.title': 'Shop-Migration',
    'services.migration.desc': 'Nahtlose Migration von WooCommerce, Magento oder anderen Plattformen zu Shopify ohne Datenverlust und mit minimaler Ausfallzeit.',
    'services.speed.title': 'Speed-Optimierung',
    'services.speed.desc': 'Performance-Auditing und Optimierung zur Verbesserung der Core Web Vitals, Reduzierung der Ladezeiten und Steigerung der Suchrankings.',
    'services.support.title': 'Laufender Support',
    'services.support.desc': 'Kontinuierlicher technischer Support und Wartung, damit Ihr Shop reibungslos läuft und mit den neuesten Funktionen auf dem neuesten Stand bleibt.',

    // Portfolio
    'portfolio.tag': 'Portfolio',
    'portfolio.title': 'Ausgewählte Arbeiten',
    'portfolio.subtitle': 'Eine Auswahl meiner aktuellen Shopify-Entwicklungsprojekte.',
    'portfolio.view': 'Projekt ansehen',
    'portfolio.all': 'Alle Projekte ansehen',

    // Skills
    'skills.tag': 'Fähigkeiten & Technologien',
    'skills.title': 'Mein Tech-Stack',
    'skills.subtitle': 'Tools und Technologien, die ich für außergewöhnliche E-Commerce-Erlebnisse einsetze.',

    // Testimonials
    'testimonials.tag': 'Referenzen',
    'testimonials.title': 'Was Kunden sagen',
    'testimonials.subtitle': 'Feedback von Kunden, mit denen ich zusammenarbeiten durfte.',

    // Contact
    'contact.tag': 'Kontakt',
    'contact.title': 'Lassen Sie uns zusammenarbeiten',
    'contact.subtitle': 'Haben Sie ein Projekt im Sinn? Lassen Sie uns besprechen, wie ich Ihrem Unternehmen beim Wachstum helfen kann.',
    'contact.name': 'Ihr Name',
    'contact.email': 'Ihre E-Mail',
    'contact.message': 'Ihre Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.info.email': 'E-Mail',
    'contact.info.location': 'Standort',
    'contact.info.availability': 'Verfügbarkeit',
    'contact.info.available': 'Verfügbar für neue Projekte',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.made': 'Mit Leidenschaft für E-Commerce erstellt.',

    // Meta
    'meta.title': 'AHK | Shopify Entwickler & E-Commerce Experte',
    'meta.description': 'Experte Shopify-Entwickler spezialisiert auf individuelle Shop-Entwicklung, Theme-Anpassung, App-Entwicklung und E-Commerce-Optimierung. In Deutschland ansässig, weltweit tätig.',
    'meta.keywords': 'Shopify Entwickler, Shopify Experte, E-Commerce Entwickler, Shopify Theme Entwicklung, Shopify App Entwicklung, Liquid Entwickler, individueller Shopify Shop',
  },
} as const;
