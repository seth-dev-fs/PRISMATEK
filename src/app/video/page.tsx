interface Video {
  title: string;
  description: string;
  youtubeId: string;
  slug: string;
}

const videos: Video[] = [
  {
    title: 'Review: iPhone 17 Pro - Vídeo Completo',
    description: 'A nossa análise aprofundada do novo iPhone 17 Pro, com testes de câmara, bateria e performance.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder YouTube ID (Rick Astley)
    slug: 'review-iphone-17-pro-video',
  },
  {
    title: 'Tutorial: Primeiros Passos com o Raspberry Pi',
    description: 'Um guia visual para configurar e começar a usar o seu Raspberry Pi em projetos DIY.',
    youtubeId: 'mD1yVzH7y04', // Placeholder YouTube ID
    slug: 'tutorial-raspberry-pi-video',
  },
  {
    title: 'Dicas de Cibersegurança para Proteger os Seus Dados',
    description: 'Vídeo rápido com dicas essenciais para manter a sua vida digital segura.',
    youtubeId: 'kfJvX0hE9gE', // Placeholder YouTube ID
    slug: 'dicas-ciberseguranca-video',
  },
  {
    title: 'As 5 Maiores Inovações Tecnológicas de 2025',
    description: 'Um resumo das tecnologias que mais nos surpreenderam este ano.',
    youtubeId: 'tgbNymZ7vqY', // Placeholder YouTube ID
    slug: 'top-5-inovacoes-2025',
  },
];

export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Secção de Vídeo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.slug} className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
              <p className="text-muted text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
