import Link from 'next/link';
import Image from 'next/image';

interface Opinion {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  author: string;
  date: string;
}

const opinionPieces: Opinion[] = [
  {
    title: 'A Promessa e o Perigo da IA na Criação de Conteúdo',
    description: 'Serão os robôs os novos jornalistas? Uma reflexão sobre o futuro da criatividade humana na era da inteligência artificial.',
    imageUrl: 'https://picsum.photos/id/248/500/300',
    slug: 'ia-criacao-conteudo',
    author: 'Dr. Sofia Almeida',
    date: '16 de Novembro de 2025',
  },
  {
    title: 'O Metaverso Morreu Antes de Nascer?',
    description: 'Uma análise crítica ao entusiasmo inicial e à realidade atual do metaverso, e o seu verdadeiro potencial.',
    imageUrl: 'https://picsum.photos/id/249/500/300',
    slug: 'metaverso-morreu',
    author: 'Prof. Carlos Ribeiro',
    date: '17 de Novembro de 2025',
  },
  {
    title: 'A Ditadura dos Algoritmos: Como as Nossas Escolhas São Moldadas',
    description: 'Exploramos o impacto dos algoritmos na nossa vida diária, desde o que vemos online até às decisões que tomamos.',
    imageUrl: 'https://picsum.photos/id/250/500/300',
    slug: 'ditadura-algoritmos',
    author: 'Eng.ª Ana Santos',
    date: '18 de Novembro de 2025',
  },
];

export default function OpiniaoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Opinião</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opinionPieces.map((opinion) => (
          <Link key={opinion.slug} href={`/opiniao/${opinion.slug}`} className="block bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={opinion.imageUrl}
                alt={opinion.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground mt-2 leading-tight">{opinion.title}</h3>
              <p className="text-muted text-sm mt-2">{opinion.description}</p>
              <p className="text-sm text-primary mt-3">Por {opinion.author}</p>
              <p className="text-xs text-muted mt-1">{opinion.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
