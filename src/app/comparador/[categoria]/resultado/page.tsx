'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ComparadorRecommendation } from '@/lib/comparador/types';
import RecommendationCard from '@/components/comparador/RecommendationCard';
import AlternativeCard from '@/components/comparador/AlternativeCard';

export default function ResultadoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dataParam = searchParams.get('data');

  if (!dataParam) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Erro: Dados não encontrados
        </h1>
        <Link href="/comparador">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl">
            Voltar ao Comparador
          </button>
        </Link>
      </div>
    );
  }

  let recommendation: ComparadorRecommendation;
  try {
    recommendation = JSON.parse(decodeURIComponent(dataParam));
  } catch (error) {
    console.error('Error parsing recommendation data:', error);
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Erro ao processar dados
        </h1>
        <Link href="/comparador">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl">
            Voltar ao Comparador
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          ✅ Encontrámos o Melhor para Ti!
        </h1>
      </div>

      {/* Main Recommendation */}
      <RecommendationCard recommendation={recommendation.main} />

      {/* Alternatives */}
      {recommendation.alternatives && recommendation.alternatives.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            📊 Alternativas a Considerar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendation.alternatives.map((alt, idx) => (
              <AlternativeCard key={idx} alternative={alt} />
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/comparador">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl transition-all w-full sm:w-auto">
            🔄 Nova Comparação
          </button>
        </Link>
        <button
          onClick={() => router.back()}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-bold py-3 px-8 rounded-xl transition-all w-full sm:w-auto"
        >
          ← Voltar às Perguntas
        </button>
      </div>
    </div>
  );
}
