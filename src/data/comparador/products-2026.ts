/**
 * PRISMATEK Comparador - Best Products of 2026
 *
 * Curadoria Premium: "Múltiplas Perspectivas. Uma Escolha Clara."
 *
 * Atualizado: 16 Janeiro 2026
 * Próxima revisão: 1 Fevereiro 2026
 *
 * Metodologia:
 * - Análise de 50+ reviews por categoria
 * - Fontes: TechRadar, The Verge, GSMArena, MKBHD, Wirecutter
 * - Contexto: Mercado Português/Europeu
 * - Preços: EUR, lojas portuguesas
 */

import { Product } from '@/types/comparador';

// ============================================
// SMARTPHONES
// ============================================

export const smartphones2026: Product[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    manufacturer: 'Apple',
    category: 'smartphones',
    price: 1229,
    priceRange: '€1,199-1,299',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Melhor sistema de câmaras do mercado com sensor principal de 48MP e zoom ótico 5x',
      'Chip A18 Pro lidera em performance, eficiência energética e capacidades de IA on-device',
      'Ecossistema Apple completo com integração perfeita entre dispositivos',
      'Suporte e atualizações garantidas por 7+ anos, melhor valor de revenda'
    ],
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80',
    imageAlt: 'iPhone 16 Pro em titânio natural',
    pressKitUrl: 'https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-pro-and-iphone-16-pro-max/',
    rating: 94,
    reviewCount: 52,
    sources: ['TechRadar', 'The Verge', 'GSMArena', 'Marques Brownlee', 'Engadget'],
    specs: {
      display: '6.3" Super Retina XDR OLED 120Hz ProMotion',
      processor: 'Apple A18 Pro (3nm)',
      camera: 'Triple 48MP (Main) + 48MP (Ultra-wide) + 12MP (5x Telephoto)',
      battery: '3,582 mAh (~27h video)',
      ram: '8GB',
      storage: '128GB / 256GB / 512GB / 1TB',
      weight: '199g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Apple-iPhone-16-Pro', price: 1229 },
      { store: 'Worten', url: 'https://www.worten.pt/telemoveis-tablets/telemoveis', price: 1249 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro',
    manufacturer: 'Google',
    category: 'smartphones',
    price: 899,
    priceRange: '€849-949',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'Fotografia IA líder de mercado com Magic Editor e Best Take a preço competitivo',
      'Android puro com atualizações garantidas por 7 anos',
      'Tensor G4 otimizado para IA on-device e eficiência energética',
      'Ecrã Super Actua de 6.3" a 120Hz com 3.000 nits de brilho'
    ],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
    imageAlt: 'Google Pixel 9 Pro em Obsidian',
    pressKitUrl: 'https://blog.google/products/pixel/google-pixel-9-pro/',
    rating: 91,
    reviewCount: 48,
    sources: ['TechRadar', 'The Verge', 'GSMArena', 'Android Authority', 'MKBHD'],
    specs: {
      display: '6.3" LTPO OLED 120Hz Super Actua (3000 nits)',
      processor: 'Google Tensor G4',
      camera: 'Triple 50MP (Main) + 48MP (Ultrawide) + 48MP (5x Telephoto)',
      battery: '4,700 mAh (~24h active use)',
      ram: '16GB',
      storage: '128GB / 256GB / 512GB',
      weight: '199g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Google-Pixel-9-Pro', price: 899 },
      { store: 'Worten', url: 'https://www.worten.pt/telemoveis-tablets/telemoveis', price: 919 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'samsung-galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    manufacturer: 'Samsung',
    category: 'smartphones',
    price: 1899,
    priceRange: '€1,799-1,999',
    rank: 3,
    badge: 'innovation',
    badgeLabel: 'Melhor Inovação',
    whyThis: [
      'Ecr㫠dobrável de 7.6" que transforma smartphone em tablet, ideal para multitasking',
      'Samsung DEX mode transforma o dispositivo num desktop completo',
      'S Pen integrada para produtividade e criatividade profissional',
      'Snapdragon 8 Gen 3 for Galaxy, a versão mais potente do processador'
    ],
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
    imageAlt: 'Samsung Galaxy Z Fold 6 aberto',
    pressKitUrl: 'https://news.samsung.com/global/samsung-unveils-galaxy-z-fold6',
    rating: 89,
    reviewCount: 41,
    sources: ['TechRadar', 'The Verge', 'GSMArena', 'Android Central', 'Tom\'s Guide'],
    specs: {
      display: '7.6" QXGA+ Dynamic AMOLED 2X 120Hz (Main) + 6.3" HD+ (Cover)',
      processor: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: 'Triple 50MP (Main) + 12MP (Ultrawide) + 10MP (3x Telephoto)',
      battery: '4,400 mAh (~23h mixed use)',
      ram: '12GB',
      storage: '256GB / 512GB / 1TB',
      weight: '239g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-Galaxy-Z-Fold-6', price: 1899 },
      { store: 'Worten', url: 'https://www.worten.pt/telemoveis-tablets/telemoveis', price: 1949 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
];

// ============================================
// LAPTOPS
// ============================================

export const laptops2026: Product[] = [
  {
    id: 'macbook-air-m3-15',
    name: 'MacBook Air 15" M3',
    manufacturer: 'Apple',
    category: 'laptops',
    price: 1749,
    priceRange: '€1,699-1,849',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Melhor equilíbrio entre performance, bateria (18h real) e portabilidade em alumínio premium',
      'Chip M3 com 8-core CPU e até 10-core GPU oferece performance Pro sem ventoinhas',
      'Ecrã Liquid Retina de 15.3" com suporte para 1 bilião de cores e 500 nits',
      'macOS Sonoma com continuidade perfeita entre dispositivos Apple e ecossistema profissional'
    ],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    imageAlt: 'MacBook Air 15" M3 em Midnight',
    pressKitUrl: 'https://www.apple.com/newsroom/2024/03/apple-unveils-macbook-air-15-and-13-inch-with-m3-chip/',
    rating: 93,
    reviewCount: 47,
    sources: ['TechRadar', 'The Verge', 'Tom\'s Guide', 'Engadget', 'MKBHD'],
    specs: {
      display: '15.3" Liquid Retina (2880x1864) 500 nits',
      processor: 'Apple M3 (3nm) - 8-core CPU, 10-core GPU',
      battery: '66.5Wh (~18h web browsing)',
      ram: '8GB / 16GB / 24GB unified memory',
      storage: '256GB / 512GB / 1TB / 2TB SSD',
      weight: '1.51kg'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Apple-MacBook-Air-15-M3', price: 1749 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/computadores/portateis', price: 1769 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'dell-xps-14-2025',
    name: 'Dell XPS 14 (2025)',
    manufacturer: 'Dell',
    category: 'laptops',
    price: 1399,
    priceRange: '€1,299-1,599',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'Performance Intel Core Ultra 7 (Meteor Lake) com NPU dedicada para IA a preço competitivo',
      'Ecrã OLED 14.5" 3.2K touch com 400 nits e 100% DCI-P3, ideal para criadores',
      'Windows 11 Pro com Copilot+ AI e compatibilidade universal de software',
      'Design CNC alumínio premium com teclado magnético destacável e trackpad invisível'
    ],
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
    imageAlt: 'Dell XPS 14 em Platinum',
    pressKitUrl: 'https://www.dell.com/en-us/shop/dell-laptops/xps-14-laptop/spd/xps-14-9440-laptop',
    rating: 90,
    reviewCount: 39,
    sources: ['TechRadar', 'The Verge', 'Laptop Mag', 'Tom\'s Hardware', 'PCWorld'],
    specs: {
      display: '14.5" OLED Touch 3.2K (3200x2000) 400 nits 100% DCI-P3',
      processor: 'Intel Core Ultra 7 155H (16-core, up to 4.8GHz)',
      battery: '69Wh (~12h productivity)',
      ram: '16GB / 32GB / 64GB LPDDR5X',
      storage: '512GB / 1TB / 2TB PCIe 4.0 SSD',
      weight: '1.68kg'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Dell-XPS-14', price: 1399 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/computadores/portateis', price: 1449 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'asus-zenbook-duo-2024',
    name: 'ASUS Zenbook Duo (2024)',
    manufacturer: 'ASUS',
    category: 'laptops',
    price: 1899,
    priceRange: '€1,799-2,099',
    rank: 3,
    badge: 'innovation',
    badgeLabel: 'Melhor Inovação',
    whyThis: [
      'Dois ecrãs OLED 14" destacáveis transformam laptop num workstation dual-screen portátil',
      'Modo Desktop com teclado Bluetooth removível e dois displays independentes lado-a-lado',
      'Intel Core Ultra 9 com Arc Graphics para criadores e profissionais multitasking',
      'Certificação Evo garantindo performance, bateria e wake instantâneo'
    ],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    imageAlt: 'ASUS Zenbook Duo com dois ecrãs OLED',
    pressKitUrl: 'https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-duo-2024-ux8406/',
    rating: 87,
    reviewCount: 28,
    sources: ['TechRadar', 'The Verge', 'Laptop Mag', 'PC Gamer', 'Tom\'s Hardware'],
    specs: {
      display: 'Dual 14" OLED 3K (2880x1800) Touch 120Hz 500 nits',
      processor: 'Intel Core Ultra 9 185H (16-core, up to 5.1GHz)',
      battery: '75Wh (~10h single screen)',
      ram: '32GB LPDDR5X',
      storage: '1TB / 2TB PCIe 4.0 SSD',
      weight: '1.65kg (without keyboard)'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/ASUS-Zenbook-Duo', price: 1899 },
      { store: 'Worten', url: 'https://www.worten.pt/informatica-acessorios/computadores/portateis', price: 1949 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
];

// ============================================
// WEARABLES
// ============================================

export const wearables2026: Product[] = [
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    manufacturer: 'Apple',
    category: 'wearables',
    price: 449,
    priceRange: '€429-529',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Melhor smartwatch overall com ecrã maior (46mm), mais fino (9.7mm) e carregamento rápido (80% em 30min)',
      'Sensores de saúde líderes: ECG, SpO2, temperatura corporal e deteção de queda/crash',
      'watchOS 11 com widgets interativos, Siri on-device e integração perfeita com iPhone',
      'Resistência à água 50m, certificação IP6X para poeira e caixa em alumínio reciclado'
    ],
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
    imageAlt: 'Apple Watch Series 10 com bracelete Sport Loop',
    pressKitUrl: 'https://www.apple.com/newsroom/2024/09/apple-unveils-apple-watch-series-10/',
    rating: 92,
    reviewCount: 44,
    sources: ['TechRadar', 'The Verge', 'Wired', 'CNET', 'Wareable'],
    specs: {
      display: '1.96" LTPO3 OLED Always-On Retina (46mm) 2000 nits',
      processor: 'Apple S10 SiP (64-bit dual-core)',
      battery: '~18h mixed use (Fast charge 80% em 30min)',
      ram: '1GB',
      storage: '32GB / 64GB',
      weight: '36.4g (alumínio 46mm)'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Apple-Watch-Series-10', price: 449 },
      { store: 'Worten', url: 'https://www.worten.pt/wearables/smartwatches', price: 469 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'garmin-forerunner-265',
    name: 'Garmin Forerunner 265',
    manufacturer: 'Garmin',
    category: 'wearables',
    price: 349,
    priceRange: '€329-369',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'Melhor relógio para runners com GPS multi-banda preciso, métricas avançadas e treinos adaptativos',
      'Ecrã AMOLED vibrante 1.3" com bateria de 13 dias em smartwatch mode (20h GPS contínuo)',
      'Training Readiness Score, HRV Status e Body Battery para otimizar recuperação',
      'Mapas offline, música (8GB), Garmin Pay e compatibilidade Android + iOS'
    ],
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    imageAlt: 'Garmin Forerunner 265 em Aqua',
    pressKitUrl: 'https://www.garmin.com/en-US/p/891632',
    rating: 90,
    reviewCount: 52,
    sources: ['DC Rainmaker', 'TechRadar', 'Wareable', 'Runner\'s World', 'The Verge'],
    specs: {
      display: '1.3" AMOLED Touch (416x416) até 1000 nits',
      processor: 'Proprietary Garmin chip',
      battery: '13 days smartwatch / 20h GPS / 24h music+GPS',
      ram: 'N/A',
      storage: '8GB (music)',
      weight: '47g (silicone band)'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Garmin-Forerunner-265', price: 349 },
      { store: 'Worten', url: 'https://www.worten.pt/wearables/smartwatches', price: 359 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'samsung-galaxy-ring',
    name: 'Samsung Galaxy Ring',
    manufacturer: 'Samsung',
    category: 'wearables',
    price: 449,
    priceRange: '€419-449',
    rank: 3,
    badge: 'innovation',
    badgeLabel: 'Melhor Inovação',
    whyThis: [
      'Primeiro smart ring mainstream com monitorização 24/7 de saúde sem carregar durante 7 dias',
      'Leitura precisa de sono, frequência cardíaca, SpO2 e temperatura corporal em titanium ultraleve (2.3-3g)',
      'Integração perfeita com Galaxy Watch e Samsung Health para análise holística de bem-estar',
      'Resistência à água 10ATM, 9 tamanhos disponíveis e carregamento sem fios em estojo portátil'
    ],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    imageAlt: 'Samsung Galaxy Ring em Gold',
    pressKitUrl: 'https://news.samsung.com/global/samsung-unveils-galaxy-ring',
    rating: 85,
    reviewCount: 31,
    sources: ['TechRadar', 'The Verge', 'Wired', 'Wareable', 'CNET'],
    specs: {
      display: 'N/A (LED status indicator)',
      processor: 'Proprietary Samsung BioProcessor',
      battery: '18-23.5 mAh (7 days autonomy)',
      ram: 'N/A',
      storage: 'N/A',
      weight: '2.3-3.0g (depends on size)'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-Galaxy-Ring', price: 449 },
      { store: 'Worten', url: 'https://www.worten.pt/wearables', price: 449 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
];

// ============================================
// EXPORT ALL
// ============================================

export const allProducts2026: Record<string, Product[]> = {
  smartphones: smartphones2026,
  laptops: laptops2026,
  wearables: wearables2026
};

export default allProducts2026;
