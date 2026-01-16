/**
 * PRISMATEK Comparador - Category Metadata
 * Visão 100%: "Múltiplas Perspectivas. Uma Escolha Clara."
 */

import { Category } from '@/types/comparador';

export const categories: Category[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: 'Smartphone', // Lucide React icon name
    description: 'Os melhores telemóveis de 2026, desde flagship até value for money',
    heroImage: 'https://images.unsplash.com/photo-1592286927505-3207250a6b24?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'laptops',
    name: 'Portáteis',
    icon: 'Laptop', // Lucide React icon name
    description: 'Laptops premium para trabalho, criatividade e gaming',
    heroImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'wearables',
    name: 'Wearables',
    icon: 'Watch', // Lucide React icon name
    description: 'Smartwatches e dispositivos vestíveis para fitness e produtividade',
    heroImage: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=80',
    productsCount: 3
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getCategoryNames(): string[] {
  return categories.map(cat => cat.name);
}

export function getCategoryIds(): string[] {
  return categories.map(cat => cat.id);
}
