import Image from "next/image";

interface Opinion {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  author: string;
  date: string;
  content: string;
}

const opinionPieces: Opinion[] = [
  {
    title: "A Promessa e o Perigo da IA na Criação de Conteúdo",
    description:
      "Serão os robôs os novos jornalistas? Uma reflexão sobre o futuro da criatividade humana na era da IA.",
    imageUrl: "https://picsum.photos/id/248/1000/600",
    slug: "ia-criacao-conteudo",
    author: "João Fonseca",
    date: "2024-01-15",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent non felis vitae urna volutpat pharetra.
      <br /><br />
      Donec feugiat erat sit amet velit tempus, sed semper sapien volutpat.
    `,
  },
  // ... outros artigos
];

export default function OpinionPage({ params }: { params: { slug: string } }) {
  const opinion = opinionPieces.find((p) => p.slug === params.slug);

  if (!opinion) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground">Artigo não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">

        {/* 🚀 FIX: Image agora tem width + height obrigatórios */}
        <Image
          src={opinion.imageUrl || "/placeholder.png"}
          alt={opinion.title}
          width={1000}
          height={600}
          className="rounded-lg object-cover mb-6"
          priority
        />

        <p className="text-primary text-sm font-semibold uppercase mb-2">
          Por {opinion.author}
        </p>

        <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-4">
          {opinion.title}
        </h1>

        <p className="text-muted text-sm mb-6">{opinion.date}</p>

        <div
          className="prose prose-lg max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: opinion.content }}
        />
      </article>
    </div>
  );
}
