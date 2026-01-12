import CategoryCard from '@/components/comparador/CategoryCard';
import categories from '@/data/comparador/categories.json';

export const metadata = {
  title: 'Comparador Inteligente | PRISMATEK',
  description:
    'Encontra o melhor tech "bang for buck" para o teu orçamento com IA Gemini. Recomendações personalizadas em 2 minutos.',
};

export default function ComparadorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          🔍 Comparador Inteligente
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Encontra o melhor tech "bang for buck" para o teu orçamento.
          <br />
          Recomendações personalizadas com IA em 2 minutos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      <p className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
        Powered by IA Gemini ✨
      </p>
    </div>
  );
}
