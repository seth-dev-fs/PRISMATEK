import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Zap } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import ProductCardV2 from '@/components/comparador/ProductCardV2';
import { categories, getCategoryById } from '@/data/comparador/categories';
import {
  smartphones2026,
  laptops2026,
  wearables2026
} from '@/data/comparador/products-2026';
import {
  inEarHeadphones2026,
  overEarHeadphones2026
} from '@/data/comparador/headphones-2026';
import {
  tvs42inch2026,
  tvs55inch2026,
  tvs65inch2026,
  tvs75inchPlus2026
} from '@/data/comparador/tvs-2026';
import tablets2026 from '@/data/comparador/tablets-2026';
import type { Product } from '@/types/comparador';

interface CategoryPageProps {
  params: {
    categoria: string;
  };
}

// Get products by category ID
function getProductsByCategory(categoryId: string): Product[] {
  const productMap: Record<string, Product[]> = {
    'smartphones': smartphones2026,
    'laptops': laptops2026,
    'wearables': wearables2026,
    'headphones-in-ear': inEarHeadphones2026,
    'headphones-over-ear': overEarHeadphones2026,
    'tvs-42': tvs42inch2026,
    'tvs-55': tvs55inch2026,
    'tvs-65': tvs65inch2026,
    'tvs-75-plus': tvs75inchPlus2026,
    'tablets': tablets2026
  };
  return productMap[categoryId] || [];
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((cat) => ({
    categoria: cat.id
  }));
}

// Generate metadata
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryById(params.categoria);

  if (!category) {
    return {
      title: 'Categoria não encontrada | PRISMATEK'
    };
  }

  return {
    title: `Top 3 ${category.name} 2026 | PRISMATEK`,
    description: `${category.description}. Editor's Choice, Melhor Valor e Melhor Inovação rigorosamente analisados.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.categoria);
  const products = getProductsByCategory(params.categoria);

  // 404 if category doesn't exist
  if (!category || products.length === 0) {
    notFound();
  }

  // Get Lucide icon component
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Package;

  // Sort products by rank
  const sortedProducts = [...products].sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/20 via-background to-background border-b border-border/50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Back Button */}
          <Link
            href="/comparador"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Comparador
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Category Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600/10 text-purple-600">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {category.name}
                </h1>
                <p className="text-muted-foreground mt-2">
                  {category.productsCount} produtos analisados • Janeiro 2026
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {category.description}
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating Médio</p>
                  <p className="text-sm font-semibold text-foreground">
                    {Math.round(sortedProducts.reduce((sum, p) => sum + p.rating, 0) / sortedProducts.length)}/100
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Reviews Analisadas</p>
                  <p className="text-sm font-semibold text-foreground">
                    {sortedProducts.reduce((sum, p) => sum + p.reviewCount, 0)}+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Top 3 {category.name}
            </h2>
            <p className="text-muted-foreground">
              Escolha do Editor • Melhor Valor • Melhor Inovação
            </p>
          </div>

          {/* Products Grid - Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProducts.map((product, index) => (
              <ProductCardV2 key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Methodology Note */}
          <div className="mt-16 p-6 rounded-2xl bg-muted/30 border border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              📊 Sobre a Nossa Metodologia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As nossas recomendações são baseadas numa análise rigorosa de dezenas de reviews
              de fontes premium como TechRadar, The Verge, GSMArena, MKBHD, e Engadget.
              Consideramos performance, design, valor, inovação, e disponibilidade no mercado português.
              Os preços são atualizados regularmente e refletem o mercado europeu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Enable ISR
export const revalidate = 3600; // Revalidate every hour
