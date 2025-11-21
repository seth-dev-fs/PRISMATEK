import Link from 'next/link';
import Image from 'next/image';

interface Review {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  product: string;
  score: number;
}

const reviews: Review[] = [
  {
    title: 'Review: iPhone 17 Pro - Onde a Inovação Encontra a Perfeição',
    description: 'A nossa análise completa ao mais recente smartphone da Apple, com todos os prós e contras.',
    imageUrl: 'https://picsum.photos/id/242/500/300',
    slug: 'iphone-17-pro',
    product: 'iPhone 17 Pro',
    score: 9.5,
  },
  {
    title: 'Samsung Galaxy Watch 7: O Novo Rei dos Smartwatches?',
    description: 'Testámos o Galaxy Watch 7 e revelamos se ele consegue superar a concorrência.',
    imageUrl: 'https://picsum.photos/id/245/500/300',
    slug: 'galaxy-watch-7',
    product: 'Samsung Galaxy Watch 7',
    score: 8.8,
  },
  {
    title: 'PlayStation 6: Primeiras Impressões e Expectativas',
    description: 'Um olhar exclusivo sobre o que esperar da próxima geração de consolas da Sony.',
    imageUrl: 'https://picsum.photos/id/246/500/300',
    slug: 'playstation-6-primeiras-impressoes',
    product: 'PlayStation 6',
    score: 9.0, // Score can be subjective for 'expectations'
  },
  {
    title: 'MacBook Air M4: Potência e Portabilidade Sem Compromissos',
    description: 'Análise detalhada ao novo MacBook Air com o chip M4 da Apple.',
    imageUrl: 'https://picsum.photos/id/247/500/300',
    slug: 'macbook-air-m4',
    product: 'MacBook Air M4',
    score: 9.2,
  },
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Link key={review.slug} href={`/reviews/${review.slug}`} className="block bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={review.imageUrl}
                alt={review.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground mt-2 leading-tight">{review.title}</h3>
              <p className="text-muted text-sm mt-2">{review.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-primary font-semibold">{review.product}</span>
                <span className="text-lg font-bold text-accent">{review.score}/10</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
