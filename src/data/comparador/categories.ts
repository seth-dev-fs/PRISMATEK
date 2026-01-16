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
    heroImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'laptops',
    name: 'Portáteis',
    icon: 'Laptop', // Lucide React icon name
    description: 'Laptops premium para trabalho, criatividade e gaming',
    heroImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'wearables',
    name: 'Wearables',
    icon: 'Watch', // Lucide React icon name
    description: 'Smartwatches e dispositivos vestíveis para fitness e produtividade',
    heroImage: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'headphones-in-ear',
    name: 'Headphones In-Ear',
    icon: 'Headphones',
    description: 'Os melhores auriculares true wireless com ANC e som premium',
    heroImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'headphones-over-ear',
    name: 'Headphones Over-Ear',
    icon: 'Headphones',
    description: 'Auscultadores over-ear com qualidade audiophile e conforto supremo',
    heroImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'tvs-42',
    name: 'TVs 42"',
    icon: 'Tv',
    description: 'TVs compactas perfeitas para quartos e escritórios',
    heroImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'tvs-55',
    name: 'TVs 55"',
    icon: 'Tv',
    description: 'O tamanho mais popular para salas de estar',
    heroImage: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'tvs-65',
    name: 'TVs 65"',
    icon: 'Tv',
    description: 'Imersão cinematográfica para home cinema',
    heroImage: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'tvs-75-plus',
    name: 'TVs 75"+',
    icon: 'Tv',
    description: 'Os maiores ecrãs premium para salas home theater',
    heroImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    productsCount: 3
  },
  {
    id: 'tablets',
    name: 'Tablets',
    icon: 'Tablet',
    description: 'Tablets premium para produtividade, criatividade e entretenimento',
    heroImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
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
