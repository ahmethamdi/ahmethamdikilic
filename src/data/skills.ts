export interface SkillGroup {
  category: string;
  label: { en: string; tr: string; de: string };
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'shopify',
    label: { en: 'Shopify', tr: 'Shopify', de: 'Shopify' },
    items: [
      'Liquid, Theme Development',
      'Shopify Apps (Custom & Public)',
      'Shopify Admin & Storefront API',
      'Metafields, Webhooks, Checkout Ext.',
      'Online Store 2.0',
      'Shopify Plus',
    ],
  },
  {
    category: 'frontend',
    label: { en: 'Frontend', tr: 'Frontend', de: 'Frontend' },
    items: [
      'HTML5, CSS3, Tailwind, Bootstrap',
      'JavaScript (ES6+)',
      'React',
      'Responsive & Performance UX',
    ],
  },
  {
    category: 'backend',
    label: { en: 'Backend / Integration', tr: 'Backend / Entegrasyon', de: 'Backend / Integration' },
    items: [
      'Node.js, Express',
      'REST / GraphQL APIs',
      'Plentymarkets, Shopware 5/6',
      'Webhooks & Middleware',
      'Laravel (PHP), MySQL',
    ],
  },
  {
    category: 'tools',
    label: { en: 'Tools', tr: 'Araçlar', de: 'Tools' },
    items: [
      'Git, GitHub',
      'Figma → Code',
      'Vercel, VPS, Linux',
      'Postman',
      'Docker',
    ],
  },
];
