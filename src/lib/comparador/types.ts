// TypeScript types for PRISMATEK Comparador

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
}

export interface Answer {
  questionId: string;
  value: string;
}

export interface AffiliateLink {
  store: string;
  url: string;
}

export interface ProductRecommendation {
  productName: string;
  priceRange: string;
  justification: string[];
  specs?: string[];
  affiliateLinks: AffiliateLink[];
}

export interface AlternativeRecommendation {
  productName: string;
  priceRange: string;
  reason: string;
  affiliateLinks: AffiliateLink[];
}

export interface ComparadorRecommendation {
  main: ProductRecommendation;
  alternatives: AlternativeRecommendation[];
}

export interface ComparadorRequestPayload {
  categoria: string;
  respostas: Answer[];
}
