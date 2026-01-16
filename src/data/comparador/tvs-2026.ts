/**
 * PRISMATEK Comparador - Best TVs of 2026
 * Organizado por tamanhos: 42", 55", 65", 75"+
 * Atualizado: 16 Janeiro 2026
 */

import { Product } from '@/types/comparador';

// ============================================
// TVs 42 POLEGADAS
// ============================================

export const tvs42inch2026: Product[] = [
  {
    id: 'lg-c4-42-oled',
    name: 'LG C4 42" OLED',
    manufacturer: 'LG',
    category: 'tvs-42',
    price: 999,
    priceRange: '€949-1,049',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'OLED perfeito para gaming: 4K 144Hz, VRR, ALLM, input lag de 5ms e G-Sync/FreeSync',
      'Processador α9 Gen7 AI com Dolby Vision IQ e Filmmaker Mode para cinema em casa',
      'webOS 24 com Magic Remote, AirPlay 2, HomeKit e todas as apps de streaming',
      'Ideal para escritórios e quartos: 42" é o sweet spot para distâncias 1.5-2.5m'
    ],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    imageAlt: 'LG C4 42" OLED',
    pressKitUrl: 'https://www.lg.com/us/tvs/lg-oled42c4pua',
    rating: 94,
    reviewCount: 67,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'HDTVTest', 'Digital Trends'],
    specs: {
      panel: 'OLED Evo (W-OLED)',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz native',
      hdr: 'Dolby Vision IQ, HDR10, HLG',
      hdmi: '4x HDMI 2.1 (48Gbps)',
      smartOS: 'webOS 24',
      brightness: '~800 nits peak (HDR)',
      gaming: 'VRR, ALLM, G-Sync, FreeSync Premium'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/LG-C4-42-OLED', price: 999 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 1029 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'samsung-qn90d-43-qled',
    name: 'Samsung QN90D 43" Neo QLED',
    manufacturer: 'Samsung',
    category: 'tvs-42',
    price: 799,
    priceRange: '€769-829',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'Mini-LED com 1,000+ zonas de dimming local oferece contraste quase OLED a preço acessível',
      'Gaming 4K 120Hz com FreeSync Premium Pro e OneConnect Box para organização de cabos',
      'Brilho anti-reflexo de 2000 nits funciona perfeitamente em salas iluminadas',
      'Tizen OS com Gaming Hub unifica Xbox Cloud, GeForce Now e PlayStation Plus numa só interface'
    ],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    imageAlt: 'Samsung QN90D 43" Neo QLED',
    pressKitUrl: 'https://news.samsung.com/global/samsung-neo-qled-qn90d',
    rating: 90,
    reviewCount: 54,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'CNET', 'Tom\'s Guide'],
    specs: {
      panel: 'Neo QLED (Mini-LED)',
      resolution: '4K (3840x2160)',
      refreshRate: '120Hz',
      hdr: 'HDR10+, HLG, HDR10',
      hdmi: '4x HDMI 2.1',
      smartOS: 'Tizen',
      brightness: '~2000 nits peak',
      gaming: 'FreeSync Premium Pro, ALLM, VRR'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-QN90D-43', price: 799 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 819 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'tcl-c855-43-mini-led',
    name: 'TCL C855 43" Mini-LED',
    manufacturer: 'TCL',
    category: 'tvs-42',
    price: 599,
    priceRange: '€569-629',
    rank: 3,
    badge: 'value',
    badgeLabel: 'Budget King',
    whyThis: [
      'Mini-LED com 500+ zonas a €599 - impossível bater este custo-benefício',
      '144Hz VRR para gaming e QLED Quantum Dot oferece 95% do DCI-P3',
      'Google TV com Chromecast built-in e suporte a Dolby Vision e Atmos',
      'Perfeito para segunda TV ou quarto: qualidade premium sem o preço premium'
    ],
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    imageAlt: 'TCL C855 43" Mini-LED',
    pressKitUrl: 'https://www.tcl.com/global/en/tvs/c-series/c855',
    rating: 85,
    reviewCount: 38,
    sources: ['TechRadar', 'RTINGS', 'Digital Trends', 'Tom\'s Guide', 'CNET'],
    specs: {
      panel: 'QLED Mini-LED',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision, HDR10+, HLG',
      hdmi: '2x HDMI 2.1 + 2x HDMI 2.0',
      smartOS: 'Google TV',
      brightness: '~1200 nits peak',
      gaming: 'VRR, ALLM, Game Master 2.0'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/TCL-C855-43', price: 599 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 609 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

// ============================================
// TVs 55 POLEGADAS
// ============================================

export const tvs55inch2026: Product[] = [
  {
    id: 'sony-a95l-55-qd-oled',
    name: 'Sony A95L 55" QD-OLED',
    manufacturer: 'Sony',
    category: 'tvs-55',
    price: 2199,
    priceRange: '€2,099-2,299',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Melhor imagem do mercado: QD-OLED da Samsung Display com cores 200% mais brilhantes que W-OLED',
      'Processador Cognitive XR processa imagem como o olho humano, upscaling perfeito de HD/FHD para 4K',
      'Perfeito para cinema: Dolby Vision, Filmmaker Mode, Netflix Calibrated e IMAX Enhanced',
      'Acoustic Surface Audio+ vibra o ecrã para som que vem da imagem, ideal para diálogos'
    ],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    imageAlt: 'Sony A95L 55" QD-OLED',
    pressKitUrl: 'https://www.sony.com/electronics/televisions/a95l-series',
    rating: 98,
    reviewCount: 89,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'HDTVTest', 'What Hi-Fi'],
    specs: {
      panel: 'QD-OLED (Samsung Display)',
      resolution: '4K (3840x2160)',
      refreshRate: '120Hz',
      hdr: 'Dolby Vision, HDR10, HLG',
      hdmi: '4x HDMI 2.1',
      smartOS: 'Google TV',
      brightness: '~1300 nits peak (HDR)',
      gaming: 'VRR, ALLM, Auto HDR Tone Mapping'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Sony-A95L-55', price: 2199 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 2249 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'lg-c4-55-oled',
    name: 'LG C4 55" OLED',
    manufacturer: 'LG',
    category: 'tvs-55',
    price: 1399,
    priceRange: '€1,349-1,449',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'OLED Evo com brightness boost oferece 95% da qualidade do Sony a 60% do preço',
      'α9 Gen7 AI upscaling transforma conteúdo 1080p em quase 4K nativo',
      'Gaming perfeito: 4K 144Hz, 4x HDMI 2.1, G-Sync/FreeSync e dashboard HUD',
      'webOS 24 é a melhor smart TV interface com Magic Remote e HomeKit integration'
    ],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    imageAlt: 'LG C4 55" OLED',
    pressKitUrl: 'https://www.lg.com/us/tvs/lg-oled55c4pua',
    rating: 95,
    reviewCount: 103,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'CNET', 'Digital Trends'],
    specs: {
      panel: 'OLED Evo (W-OLED)',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision IQ, HDR10, HLG',
      hdmi: '4x HDMI 2.1 (48Gbps)',
      smartOS: 'webOS 24',
      brightness: '~900 nits peak',
      gaming: 'G-Sync, FreeSync Premium, VRR, ALLM'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/LG-C4-55', price: 1399 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 1429 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'hisense-u8n-55-mini-led',
    name: 'Hisense U8N 55" Mini-LED',
    manufacturer: 'Hisense',
    category: 'tvs-55',
    price: 899,
    priceRange: '€849-949',
    rank: 3,
    badge: 'value',
    badgeLabel: 'Budget King',
    whyThis: [
      'Mini-LED com 1,500+ zonas oferece contraste e brilho competitivos a €899',
      '144Hz VRR + Game Mode Pro com 10ms input lag rivaliza TVs gaming de €2,000+',
      'Quantum Dot Wide Color Gamut cobre 98% DCI-P3 para cores vibrantes',
      'Dolby Vision IQ + Atmos com 60W 2.1.2 soundbar integrado dispensa soundbar externa'
    ],
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    imageAlt: 'Hisense U8N 55" Mini-LED',
    pressKitUrl: 'https://www.hisense.com/us/televisions/u8n-series',
    rating: 88,
    reviewCount: 52,
    sources: ['TechRadar', 'RTINGS', 'CNET', 'Tom\'s Guide', 'Digital Trends'],
    specs: {
      panel: 'QLED Mini-LED',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision IQ, HDR10+, HLG',
      hdmi: '2x HDMI 2.1 + 2x HDMI 2.0',
      smartOS: 'Google TV (VIDAA U8)',
      brightness: '~2500 nits peak',
      gaming: 'VRR, ALLM, Game Mode Pro'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Hisense-U8N-55', price: 899 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 929 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

// ============================================
// TVs 65 POLEGADAS
// ============================================

export const tvs65inch2026: Product[] = [
  {
    id: 'lg-g4-65-oled-evo',
    name: 'LG G4 65" OLED Evo',
    manufacturer: 'LG',
    category: 'tvs-65',
    price: 2799,
    priceRange: '€2,699-2,899',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Gallery Edition com brightness de 1500 nits (3x C4) e MLA+ panel é o OLED mais brilhante do mundo',
      'Design flush-to-wall de 20mm de espessura com Zero Connect Box wireless para 0 cabos visíveis',
      'α11 Gen7 AI processor com upscaling neural de 120fps transforma qualquer conteúdo em 4K',
      'Dolby Vision + Atmos com 80W 7.1.2 soundbar integrado dispensa sistema de som externo'
    ],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    imageAlt: 'LG G4 65" OLED Evo',
    pressKitUrl: 'https://www.lg.com/us/tvs/lg-oled65g4pua',
    rating: 97,
    reviewCount: 78,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'HDTVTest', 'What Hi-Fi'],
    specs: {
      panel: 'OLED Evo MLA+ (Micro Lens Array)',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision IQ, HDR10, HLG',
      hdmi: '4x HDMI 2.1 (48Gbps)',
      smartOS: 'webOS 24',
      brightness: '~1500 nits peak',
      gaming: 'G-Sync Ultimate, FreeSync Premium Pro, VRR, ALLM'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/LG-G4-65', price: 2799 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 2849 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'samsung-s95d-65-qd-oled',
    name: 'Samsung S95D 65" QD-OLED',
    manufacturer: 'Samsung',
    category: 'tvs-65',
    price: 2199,
    priceRange: '€2,099-2,299',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'QD-OLED com 2000 nits e anti-reflexo OLED Glare Free funciona perfeitamente em salas iluminadas',
      'Neural Quantum Processor 4K com AI upscaling de 120fps rivaliza LG α11',
      'OneConnect Box slim organiza todos os cabos numa só caixa elegante',
      'Gaming Hub unifica todas as plataformas cloud gaming sem consola'
    ],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    imageAlt: 'Samsung S95D 65" QD-OLED',
    pressKitUrl: 'https://news.samsung.com/global/samsung-s95d-qd-oled',
    rating: 96,
    reviewCount: 91,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'CNET', 'Digital Trends'],
    specs: {
      panel: 'QD-OLED Gen 3',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'HDR10+, HDR10, HLG',
      hdmi: '4x HDMI 2.1',
      smartOS: 'Tizen',
      brightness: '~2000 nits peak',
      gaming: 'FreeSync Premium Pro, VRR, ALLM'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-S95D-65', price: 2199 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 2249 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'tcl-c955-65-mini-led',
    name: 'TCL C955 65" Mini-LED',
    manufacturer: 'TCL',
    category: 'tvs-65',
    price: 1299,
    priceRange: '€1,249-1,349',
    rank: 3,
    badge: 'value',
    badgeLabel: 'Budget King',
    whyThis: [
      '2,000+ zonas Mini-LED com 3000 nits oferece brilho superior a muitos OLEDs',
      '144Hz VRR + Game Accelerator 240 com motion clarity de 240Hz efectivo',
      'QLED Pro Quantum Dot com 98% DCI-P3 e AiPQ 3.0 upscaling de IA',
      'Onkyo 70W 2.1.2 soundbar integrado com Dolby Atmos dispensa soundbar externa'
    ],
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    imageAlt: 'TCL C955 65" Mini-LED',
    pressKitUrl: 'https://www.tcl.com/global/en/tvs/c-series/c955',
    rating: 90,
    reviewCount: 63,
    sources: ['TechRadar', 'RTINGS', 'CNET', 'Tom\'s Guide', 'Digital Trends'],
    specs: {
      panel: 'QLED Pro Mini-LED',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision IQ, HDR10+, HLG',
      hdmi: '2x HDMI 2.1 + 2x HDMI 2.0',
      smartOS: 'Google TV',
      brightness: '~3000 nits peak',
      gaming: 'VRR, ALLM, Game Accelerator 240'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/TCL-C955-65', price: 1299 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 1329 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

// ============================================
// TVs 75 POLEGADAS OU MAIS
// ============================================

export const tvs75inchPlus2026: Product[] = [
  {
    id: 'samsung-s95d-77-qd-oled',
    name: 'Samsung S95D 77" QD-OLED',
    manufacturer: 'Samsung',
    category: 'tvs-75-plus',
    price: 3999,
    priceRange: '€3,799-4,199',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Maior QD-OLED do mercado com 77" oferece imersão de cinema sem burn-in de W-OLED',
      'OLED Glare Free com 2000 nits funciona perfeitamente em salas home cinema iluminadas',
      'Neural Quantum 4K AI transforma streaming 1080p em 4K com clareza impressionante',
      'Object Tracking Sound Pro com 70W 6.2.4 soundbar acompanha objetos no ecrã'
    ],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    imageAlt: 'Samsung S95D 77" QD-OLED',
    pressKitUrl: 'https://news.samsung.com/global/samsung-s95d-77-qd-oled',
    rating: 97,
    reviewCount: 58,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'HDTVTest', 'What Hi-Fi'],
    specs: {
      panel: 'QD-OLED Gen 3',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'HDR10+, HDR10, HLG',
      hdmi: '4x HDMI 2.1',
      smartOS: 'Tizen',
      brightness: '~2000 nits peak',
      gaming: 'FreeSync Premium Pro, VRR, ALLM'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Samsung-S95D-77', price: 3999 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 4099 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'tcl-x955-75-mini-led',
    name: 'TCL X955 75" Mini-LED',
    manufacturer: 'TCL',
    category: 'tvs-75-plus',
    price: 2199,
    priceRange: '€2,099-2,299',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      '3,000+ zonas Mini-LED com 5000 nits peak oferece brilho impossível para OLED',
      '144Hz VRR + 120fps upscaling transforma 60fps em 120fps smooth para gaming',
      'QLED Ultra Quantum Dot com 99% DCI-P3 e HDR1000 certificado',
      'Onkyo 90W 3.1.2 soundbar com subwoofer integrado dispensa sistema de som de €500+'
    ],
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    imageAlt: 'TCL X955 75" Mini-LED',
    pressKitUrl: 'https://www.tcl.com/global/en/tvs/x-series/x955',
    rating: 92,
    reviewCount: 49,
    sources: ['TechRadar', 'RTINGS', 'CNET', 'Digital Trends', 'Tom\'s Guide'],
    specs: {
      panel: 'QLED Ultra Mini-LED',
      resolution: '4K (3840x2160)',
      refreshRate: '144Hz',
      hdr: 'Dolby Vision IQ, HDR10+ Adaptive, HLG',
      hdmi: '4x HDMI 2.1',
      smartOS: 'Google TV',
      brightness: '~5000 nits peak',
      gaming: 'VRR, ALLM, Game Master Pro'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/TCL-X955-75', price: 2199 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 2249 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'hisense-u7n-75-qled',
    name: 'Hisense U7N 75" QLED',
    manufacturer: 'Hisense',
    category: 'tvs-75-plus',
    price: 1599,
    priceRange: '€1,549-1,649',
    rank: 3,
    badge: 'value',
    badgeLabel: 'Budget King',
    whyThis: [
      'QLED de 75" com local dimming a €1,599 - impossível bater este preço',
      '120Hz VRR + Game Mode com 15ms lag para gaming casual PS5/Xbox',
      'Dolby Vision + Atmos com 50W soundbar integrado decente',
      'Perfeito para sala grande ou home cinema entry-level com orçamento apertado'
    ],
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    imageAlt: 'Hisense U7N 75" QLED',
    pressKitUrl: 'https://www.hisense.com/us/televisions/u7n-series',
    rating: 84,
    reviewCount: 41,
    sources: ['TechRadar', 'RTINGS', 'CNET', 'Tom\'s Guide', 'Digital Trends'],
    specs: {
      panel: 'QLED',
      resolution: '4K (3840x2160)',
      refreshRate: '120Hz',
      hdr: 'Dolby Vision, HDR10+, HLG',
      hdmi: '2x HDMI 2.1 + 2x HDMI 2.0',
      smartOS: 'Google TV (VIDAA U7)',
      brightness: '~1000 nits peak',
      gaming: 'VRR, ALLM, Game Mode Plus'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Hisense-U7N-75', price: 1599 },
      { store: 'Worten', url: 'https://www.worten.pt/casa-lazer/imagem-e-som/televisoes', price: 1629 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

export const allTVs2026 = {
  'tvs-42': tvs42inch2026,
  'tvs-55': tvs55inch2026,
  'tvs-65': tvs65inch2026,
  'tvs-75-plus': tvs75inchPlus2026
};

export default allTVs2026;
