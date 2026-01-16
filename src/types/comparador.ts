/**
 * PRISMATEK Comparador - Type Definitions
 * Visão 100%: "Múltiplas Perspectivas. Uma Escolha Clara."
 */

export type ProductBadge = 'editor' | 'value' | 'innovation';
export type ProductRank = 1 | 2 | 3;
export type Store = 'Fnac' | 'Worten' | 'Amazon.es' | 'PcComponentes';

export interface AffiliateLink {
  store: Store;
  url: string;
  price: number; // EUR
}

export interface ProductSpecs {
  display?: string;
  processor?: string;
  camera?: string;
  battery?: string;
  ram?: string;
  storage?: string;
  weight?: string;
  [key: string]: string | undefined;
}

export interface Product {
  // Identification
  id: string;
  name: string;
  manufacturer: string;
  category: string;

  // Pricing
  price: number;        // EUR (base price)
  priceRange: string;   // "€600-700"

  // Ranking
  rank: ProductRank;
  badge: ProductBadge;
  badgeLabel: string;   // "Escolha do Editor"

  // Content
  whyThis: string[];    // 3-4 bullet points explaining why this product

  // Media
  image: string;        // URL to product image (preferably transparent background)
  imageAlt: string;
  pressKitUrl?: string; // Official press kit URL

  // Rating & Reviews
  rating: number;       // 0-100 score
  reviewCount: number;  // Number of reviews analyzed
  sources: string[];    // ["TechRadar", "The Verge", "Marques Brownlee"]

  // Technical Specs
  specs: ProductSpecs;

  // Shopping Links
  affiliateLinks: AffiliateLink[];

  // Metadata
  lastUpdated: string;  // ISO date
  available: boolean;   // Is it available in PT/EU?
}

export interface Category {
  id: string;
  name: string;
  icon: string;         // Lucide icon name
  description: string;
  heroImage?: string;   // Featured product image for category card
  productsCount: number;
}

export interface ComparadorData {
  categories: Category[];
  products: Record<string, Product[]>; // Keyed by category id
  lastUpdate: string;
  version: string;
}
