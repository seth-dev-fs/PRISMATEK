export const revalidate = 60;
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesSortedByDate, getAllCategories } from '@/lib/markdown';
import { getCategoryDisplayName } from '@/lib/categories';

export const metadata = {
  title: 'Todas as Notícias',
  description: 'Explore todas as notícias de tecnologia da PRISMATEK - smartphones, wearables, gaming, IA e inovação.',
};

export default async function NoticiasPage() {
  const allArticles = getArticlesSortedByDate(); // Get all published articles
  const allCategories = getAllCategories();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Todas as Notícias
        </h1>
        <p className="text-lg sm:text-xl text-muted">
          Explore {allArticles.length} {allArticles.length === 1 ? 'artigo' : 'artigos'} sobre tecnologia, inovação e tendências digitais.
        </p>
      </div>

      {/* Category Filter */}
      {allCategories.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Categorias</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/noticias"
              className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Todas
            </Link>
            {allCategories.map((category) => (
              <Link
                key={category}
                href={`/categoria/${category}`}
                className="px-4 py-2 bg-card text-foreground border border-border rounded-full text-sm font-semibold hover:bg-muted transition-colors duration-200"
              >
                {getCategoryDisplayName(category)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {allArticles.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ainda não há artigos publicados
          </h2>
          <p className="text-muted mb-8">
            Volte em breve para novas notícias sobre tecnologia!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Voltar à página inicial
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
