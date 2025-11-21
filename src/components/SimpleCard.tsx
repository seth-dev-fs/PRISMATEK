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
    <Link href={slug} className="block group">
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
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <p className="text-muted text-sm">{description}</p>
      </div>
    </Link>
  );
}
