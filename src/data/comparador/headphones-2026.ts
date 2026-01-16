/**
 * PRISMATEK Comparador - Best Headphones of 2026
 * Categoria: In-Ear & Over-Ear
 * Atualizado: 16 Janeiro 2026
 */

import { Product } from '@/types/comparador';

// ============================================
// IN-EAR HEADPHONES
// ============================================

export const inEarHeadphones2026: Product[] = [
  {
    id: 'sony-wf-1000xm6',
    name: 'Sony WF-1000XM6',
    manufacturer: 'Sony',
    category: 'headphones-in-ear',
    price: 299,
    priceRange: '€279-319',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'Melhor ANC do mercado com processador V2 e 8 microfones para cancelamento perfeito de ruído',
      'Qualidade áudio audiophile com drivers de 8.4mm e suporte LDAC/Hi-Res Audio',
      'Bateria de 8h (24h total) com carregamento rápido e design 20% mais pequeno que XM5',
      'DSEE Extreme AI upscaling para melhorar qualidade de streaming Spotify/Apple Music'
    ],
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    imageAlt: 'Sony WF-1000XM6',
    pressKitUrl: 'https://www.sony.com/electronics/truly-wireless/wf-1000xm6',
    rating: 95,
    reviewCount: 58,
    sources: ['TechRadar', 'The Verge', 'GSMArena', 'RTINGS', 'What Hi-Fi'],
    specs: {
      driver: '8.4mm dynamic',
      frequency: '20Hz - 40kHz',
      battery: '8h + 16h (case) = 24h total',
      anc: 'Yes - V2 Processor + 8-mic array',
      codec: 'SBC, AAC, LDAC',
      weight: '5.4g per earbud'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Sony-WF-1000XM6', price: 299 },
      { store: 'Worten', url: 'https://www.worten.pt/audio-hifi/auscultadores-e-earphones', price: 309 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'nothing-ear-2024',
    name: 'Nothing Ear (2024)',
    manufacturer: 'Nothing',
    category: 'headphones-in-ear',
    price: 149,
    priceRange: '€139-159',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'ANC de 45dB e som Hi-Res certificado a metade do preço dos Sony XM6',
      'Design transparente icónico com LEDs personalizáveis e app repleta de EQ presets',
      'Bateria excepcional: 8.5h (40h total) com carregamento wireless Qi2',
      'ChatGPT integrado para tradução em tempo real e assistente IA on-device'
    ],
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80',
    imageAlt: 'Nothing Ear (2024)',
    pressKitUrl: 'https://nothing.tech/products/ear',
    rating: 90,
    reviewCount: 42,
    sources: ['TechRadar', 'The Verge', 'GSMArena', 'Android Authority', 'MKBHD'],
    specs: {
      driver: '11mm graphene',
      frequency: '20Hz - 40kHz (Hi-Res)',
      battery: '8.5h + 31.5h (case) = 40h total',
      anc: 'Yes - 45dB hybrid ANC',
      codec: 'SBC, AAC, LDAC, LHDC 5.0',
      weight: '4.5g per earbud'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Nothing-Ear-2024', price: 149 },
      { store: 'Worten', url: 'https://www.worten.pt/audio-hifi/auscultadores-e-earphones', price: 154 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'apple-airpods-pro-3',
    name: 'Apple AirPods Pro 3',
    manufacturer: 'Apple',
    category: 'headphones-in-ear',
    price: 279,
    priceRange: '€269-289',
    rank: 3,
    badge: 'innovation',
    badgeLabel: 'Melhor Inovação',
    whyThis: [
      'Adaptive Audio 2.0 com IA on-device muda ANC automaticamente baseado em ambiente e atividade',
      'USB-C com carregamento magnético + Find My integration com speaker na case',
      'Sensores de saúde: monitorização cardíaca, temperatura e deteção de quedas',
      'Spatial Audio Personalizado com rastreamento de cabeça para imersão total em Dolby Atmos'
    ],
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80',
    imageAlt: 'Apple AirPods Pro 3',
    pressKitUrl: 'https://www.apple.com/newsroom/airpods-pro-3/',
    rating: 92,
    reviewCount: 67,
    sources: ['TechRadar', 'The Verge', 'CNET', 'RTINGS', 'iMore'],
    specs: {
      driver: '11mm + dual driver (bass + treble)',
      frequency: '20Hz - 20kHz',
      battery: '6h + 24h (case MagSafe) = 30h total',
      anc: 'Yes - Adaptive Audio 2.0 with H3 chip',
      codec: 'AAC',
      weight: '5.3g per earbud'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Apple-AirPods-Pro-3', price: 279 },
      { store: 'Worten', url: 'https://www.worten.pt/audio-hifi/auscultadores-e-earphones', price: 284 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

// ============================================
// OVER-EAR HEADPHONES
// ============================================

export const overEarHeadphones2026: Product[] = [
  {
    id: 'sony-wh-1000xm6',
    name: 'Sony WH-1000XM6',
    manufacturer: 'Sony',
    category: 'headphones-over-ear',
    price: 399,
    priceRange: '€379-419',
    rank: 1,
    badge: 'editor',
    badgeLabel: 'Escolha do Editor',
    whyThis: [
      'ANC líder absoluto com 8 microfones e processador V2, silencia até motores de avião',
      'Som audiophile com drivers de 40mm, LDAC e DSEE Extreme para upscaling de streaming',
      'Conforto premium: 254g, almofadas em espuma memory e headband ajustável para sessões longas',
      'Bateria insana: 30h (40h sem ANC) com carregamento rápido 3min = 3h de uso'
    ],
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    imageAlt: 'Sony WH-1000XM6',
    pressKitUrl: 'https://www.sony.com/electronics/headband-headphones/wh-1000xm6',
    rating: 96,
    reviewCount: 74,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'What Hi-Fi', 'SoundGuys'],
    specs: {
      driver: '40mm dome dynamic',
      frequency: '4Hz - 40kHz',
      battery: '30h (ANC on) / 40h (ANC off)',
      anc: 'Yes - V2 processor, 8-mic array',
      codec: 'SBC, AAC, LDAC',
      weight: '254g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Sony-WH-1000XM6', price: 399 },
      { store: 'Worten', url: 'https://www.worten.pt/audio-hifi/auscultadores-e-earphones', price: 409 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'anker-soundcore-space-one-pro',
    name: 'Anker Soundcore Space One Pro',
    manufacturer: 'Anker',
    category: 'headphones-over-ear',
    price: 199,
    priceRange: '€189-209',
    rank: 2,
    badge: 'value',
    badgeLabel: 'Melhor Custo-Benefício',
    whyThis: [
      'ANC de 50dB e som Hi-Res LDAC a metade do preço dos Sony XM6',
      'Bateria record: 50h (60h sem ANC) com carregamento USB-C rápido',
      'App completa com EQ de 10 bandas, perfis personalizados e modo gaming de baixa latência',
      'Construção premium em alumínio com almofadas substituíveis e cabo destacável de 3.5mm'
    ],
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
    imageAlt: 'Anker Soundcore Space One Pro',
    pressKitUrl: 'https://www.soundcore.com/products/space-one-pro',
    rating: 89,
    reviewCount: 38,
    sources: ['TechRadar', 'The Verge', 'RTINGS', 'Android Authority', 'SoundGuys'],
    specs: {
      driver: '40mm triple-layer composite',
      frequency: '20Hz - 40kHz (Hi-Res)',
      battery: '50h (ANC on) / 60h (ANC off)',
      anc: 'Yes - 50dB adaptive hybrid ANC',
      codec: 'SBC, AAC, LDAC',
      weight: '260g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Anker-Soundcore-Space-One-Pro', price: 199 },
      { store: 'Amazon.es', url: 'https://www.amazon.es/Anker-Soundcore', price: 189 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  },
  {
    id: 'bose-quietcomfort-ultra',
    name: 'Bose QuietComfort Ultra',
    manufacturer: 'Bose',
    category: 'headphones-over-ear',
    price: 449,
    priceRange: '€429-469',
    rank: 3,
    badge: 'innovation',
    badgeLabel: 'Melhor Inovação',
    whyThis: [
      'Immersive Audio espacial com rastreamento de cabeça para experiência 360° em todos os conteúdos',
      'ANC adaptativo Bose CustomTune calibra som para formato único das tuas orelhas',
      'Multi-device seamless: conecta 2 dispositivos simultaneamente com troca instantânea',
      'Modo transparência Aware com ActiveSense reduz ruídos súbitos (buzinas, alarmes) automaticamente'
    ],
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
    imageAlt: 'Bose QuietComfort Ultra',
    pressKitUrl: 'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-ultra-headphones.html',
    rating: 93,
    reviewCount: 51,
    sources: ['TechRadar', 'The Verge', 'CNET', 'RTINGS', 'SoundGuys'],
    specs: {
      driver: '40mm TriPort acoustic',
      frequency: '20Hz - 20kHz',
      battery: '24h (Immersive on) / 28h (Immersive off)',
      anc: 'Yes - CustomTune adaptive ANC',
      codec: 'SBC, AAC, aptX Adaptive',
      weight: '253g'
    },
    affiliateLinks: [
      { store: 'Fnac', url: 'https://www.fnac.pt/Bose-QuietComfort-Ultra', price: 449 },
      { store: 'Worten', url: 'https://www.worten.pt/audio-hifi/auscultadores-e-earphones', price: 459 }
    ],
    lastUpdated: '2026-01-16',
    available: true
  }
];

export const allHeadphones2026 = {
  'headphones-in-ear': inEarHeadphones2026,
  'headphones-over-ear': overEarHeadphones2026
};

export default allHeadphones2026;
