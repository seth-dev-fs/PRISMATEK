import Image from 'next/image';
import { getArticleBySlug, getSortedArticlesData } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// Generate static pages for all articles to improve performance
export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Artigo Não Encontrado',
    };
  }

  return {
    title: article.title,
    // CORRECTED: Use 'description' instead of 'meta_description'
    description: article.description,
  };
}

// The page component
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  // If no article is found, render the 404 page
  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">{article.title}</h1>
        {/* CORRECTED: Use 'description' instead of 'meta_description' */}
        <p className="text-muted text-lg mb-6">{article.description}</p>
        <div className="flex items-center text-sm text-muted mb-6">
          <span>{new Date(article.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          {article.category && (
            <>
              <span className="mx-2">|</span>
              <span className="text-primary font-semibold uppercase">{article.category}</span>
            </>
          )}
        </div>

        {article.featured_image && (
          <Image
            src={article.featured_image}
            alt={article.title}
            width={900}
            height={500}
            className="rounded-lg mb-8 w-full object-cover"
            priority
          />
        )}
        
        <div
          className="prose prose-lg max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>
    </div>
  );
}
