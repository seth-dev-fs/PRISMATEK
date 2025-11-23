import Link from 'next/link';
import Image from 'next/image';

interface SimpleCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default function SimpleCard({ title, description, slug, imageUrl }: SimpleCardProps) {
  return (
    <article>
      <Link
        href={slug}
        className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
        aria-label={`Ler artigo: ${title}`}
      >
        {/* Image Container with Fallback */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 via-card to-primary/10">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-primary/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
}
