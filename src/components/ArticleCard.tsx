import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  category: string;
  date: string;
}

export default function ArticleCard({ title, description, imageUrl, slug, category, date }: ArticleCardProps) {
  return (
    <Link href={`/noticias/${slug}`} className="block group">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <p className="text-primary text-sm font-bold uppercase">{category}</p>
        <h3 className="text-xl font-bold text-foreground mt-2 leading-tight group-hover:text-primary-light transition-colors duration-200">{title}</h3>
        <p className="text-muted text-sm mt-2">{description}</p>
        <p className="text-muted text-xs mt-3">{date}</p>
      </div>
    </Link>
  );
}
