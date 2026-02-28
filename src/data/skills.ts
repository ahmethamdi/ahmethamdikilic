export interface Skill {
  name: string;
  category: 'shopify' | 'frontend' | 'backend' | 'tools';
  level: number; // 1-100
}

export const skills: Skill[] = [
  // Shopify
  { name: 'Shopify', category: 'shopify', level: 95 },
  { name: 'Liquid', category: 'shopify', level: 95 },
  { name: 'Shopify CLI', category: 'shopify', level: 90 },
  { name: 'Shopify APIs', category: 'shopify', level: 90 },
  { name: 'Theme Development', category: 'shopify', level: 95 },
  { name: 'Shopify Plus', category: 'shopify', level: 85 },

  // Frontend
  { name: 'JavaScript', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'React', category: 'frontend', level: 85 },
  { name: 'HTML/CSS', category: 'frontend', level: 95 },
  { name: 'Tailwind CSS', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 80 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'GraphQL', category: 'backend', level: 80 },
  { name: 'REST APIs', category: 'backend', level: 90 },
  { name: 'PostgreSQL', category: 'backend', level: 75 },

  // Tools
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Figma', category: 'tools', level: 80 },
  { name: 'VS Code', category: 'tools', level: 95 },
  { name: 'Docker', category: 'tools', level: 70 },
];

export const skillCategories = {
  shopify: { en: 'Shopify', tr: 'Shopify', de: 'Shopify' },
  frontend: { en: 'Frontend', tr: 'Frontend', de: 'Frontend' },
  backend: { en: 'Backend', tr: 'Backend', de: 'Backend' },
  tools: { en: 'Tools', tr: 'Araçlar', de: 'Tools' },
};
