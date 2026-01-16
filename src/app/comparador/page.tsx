import { Sparkles, Target, Shield, Wand2 } from 'lucide-react';
import Link from 'next/link';
import CategoryCardV2 from '@/components/comparador/CategoryCardV2';
import { categories } from '@/data/comparador/categories';

export const metadata = {
  title: 'Comparador de Tecnologia | PRISMATEK',
  description:
    'Top 3 produtos em cada categoria. Múltiplas perspectivas, análises rigorosas, uma escolha clara. PRISMATEK - A tecnologia certa para ti.',
};

export default function ComparadorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/20 via-background to-background">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-600 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Múltiplas Perspectivas. Uma Escolha Clara.
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              A Tecnologia Certa
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                Para Ti
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Top 3 produtos rigorosamente analisados em cada categoria.
              Baseado em dezenas de reviews de fontes premium internacionais.
            </p>

            {/* CTA Button - Comparador Personalizado */}
            <div className="pt-6">
              <Link
                href="/comparador/smartphones/resultado"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg font-semibold shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/40"
              >
                <Wand2 className="w-6 h-6" />
                Criar o Meu Comparador Personalizado
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                IA Gemini ajuda-te a encontrar o produto perfeito em 2 minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCardV2 key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Trust Builder Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Porque Confiar no PRISMATEK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600/10 text-purple-600">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Análise Rigorosa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sintetizamos dezenas de reviews de TechRadar, The Verge, GSMArena e outros líderes da indústria.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Múltiplas Perspectivas
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Não há um "melhor para todos". Apresentamos Editor's Choice, Melhor Valor e Melhor Inovação.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Mercado Português
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Preços em EUR, disponibilidade em Portugal, lojas nacionais. Zero informação irrelevante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Última atualização: Janeiro 2026 • Powered by PRISMATEK
          </p>
        </div>
      </section>
    </div>
  );
}
