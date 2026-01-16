/**
 * PRISMATEK Comparador - Best Tablets of 2026
 * Atualizado: 16 Janeiro 2026
 */

import { Product } from '@/types/comparador';

export const tablets2026: Product[] = [
  {
    id: 'ipad-pro-13-m4',
    name: 'iPad Pro 13" (M4)',
    manufacturer: 'Apple',
    category: 'tablets',
    price: 1199,
    priceRange: '€1,149-1,299',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Chip M4 líder absoluto: 10-core CPU/GPU rivaliza MacBooks, perfeito para Final Cut Pro e Logic Pro',
      'Tandem OLED revolucionário de 13" com 1600 nits HDR e ProMotion 120Hz adaptativo',
      'Magic Keyboard com trackpad premium e Apple Pencil Pro com haptic feedback transformam em laptop',
      'iPadOS 18 com Stage Manager, desktop-class apps e ecossistema Apple perfeito'
    ],
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    imageAlt: 'iPad Pro 13" M4',
    pressKitUrl: 'https://www.apple.com/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip/',
    rating: 96,
    reviewCount: 82,
    sources: ['TechRadar', 'The Verge', 'Engadget', 'iMore', 'MKBHD'],
    specs: {
      display: '13" Tandem OLED 2752x2064 ProMotion 120Hz 1600 nits HDR',
      processor: 'Apple M4 (3nm) - 10-core CPU, 10-core GPU, 16-core Neural Engine',
      camera: '12MP Wide (back) + 12MP Ultra Wide TrueDepth (front)',
      battery: '~10h web browsing / video playback',
      ram: '8GB / 16GB unified memory',
      storage: '256GB / 512GB / 1TB / 2TB',
      weight: '582g (Wi-Fi) / 584g (5G)'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Apple-iPad-Pro-13-M4', price: 1199 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/tablets', price: 1219 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'samsung-galaxy-tab-s10-plus',
    name: 'Samsung Galaxy Tab S10+',
    manufacturer: 'Samsung',
    category: 'tablets',
    price: 799,
    priceRange: '€769-829',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'AMOLED de 12.4" a 120Hz com S Pen incluído e DeX mode transforma em desktop completo',
      'Snapdragon 8 Gen 3 for Galaxy oferece 90% da performance do M4 a 35% do preço',
      'Ecossistema Galaxy: sincronização perfeita com Galaxy S25, Buds, Watch via Samsung Flow',
      'Bateria de 10,090mAh dura 12-14h de uso real com carregamento rápido de 45W'
    ],
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
    imageAlt: 'Samsung Galaxy Tab S10+',
    pressKitUrl: 'https://news.samsung.com/global/samsung-unveils-galaxy-tab-s10',
    rating: 92,
    reviewCount: 64,
    sources: ['TechRadar', 'The Verge', 'Android Authority', 'GSMArena', 'Android Central'],
    specs: {
      display: '12.4" Dynamic AMOLED 2X 2800x1752 120Hz 930 nits',
      processor: 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      camera: '13MP + 8MP Ultra Wide (back) / 12MP (front)',
      battery: '10,090mAh (~13h mixed use)',
      ram: '12GB / 16GB',
      storage: '256GB / 512GB (expandable microSD)',
      weight: '571g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-Galaxy-Tab-S10-Plus', price: 799 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/tablets', price: 819 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'lenovo-tab-p12-pro-2026',
    name: 'Lenovo Tab P12 Pro (2026)',
    manufacturer: 'Lenovo',
    category: 'tablets',
    price: 549,
    priceRange: '€519-579',
    rank: 3,
    badge: 'value',
    badgeLabel: 'Budget Premium',
    whyThis: [
      'OLED de 12.7" a 120Hz com 400 nits e Dolby Vision a preço acessível de €549',
      'MediaTek Dimensity 9300+ oferece performance excelente para multitasking e gaming casual',
      'Inclui Lenovo Precision Pen 3 e capa com teclado destacável na caixa (€150 de valor)',
      'Android 14 puro com 4 anos de atualizações garantidas e modo desktop produtivo'
    ],
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404f677?w=800&q=80',
    imageAlt: 'Lenovo Tab P12 Pro 2026',
    pressKitUrl: 'https://news.lenovo.com/pressroom/press-releases/lenovo-tab-p12-pro-2026/',
    rating: 87,
    reviewCount: 41,
    sources: ['TechRadar', 'The Verge', 'Android Authority', 'Laptop Mag', 'Android Central'],
    specs: {
      display: '12.7" OLED 2944x1840 120Hz 400 nits Dolby Vision',
      processor: 'MediaTek Dimensity 9300+ (4nm)',
      camera: '13MP (back) / 13MP (front)',
      battery: '10,200mAh (~12h web)',
      ram: '8GB / 12GB',
      storage: '128GB / 256GB (expandable microSD)',
      weight: '615g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Lenovo-Tab-P12-Pro', price: 549 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/tablets', price: 569 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

export default tablets2026;
