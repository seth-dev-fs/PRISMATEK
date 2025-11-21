import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  category: string;
  date: string;
  content: string; // Full content of the article
}

// Placeholder data - in a real app, this would come from a CMS/API based on the slug
const articles: Article[] = [
  {
    title: 'O Futuro da Inteligência Artificial: Desafios e Oportunidades em Portugal',
    description: 'Exploramos como a IA está a moldar o panorama tecnológico português, desde startups inovadoras a desafios éticos e sociais.',
    imageUrl: 'https://picsum.photos/id/237/1000/600',
    slug: 'futuro-ia-portugal',
    category: 'Inteligência Artificial',
    date: '15 de Novembro de 2025',
    content: `
      <p>A inteligência artificial (IA) está a transformar rapidamente todos os setores da economia global, e Portugal não é exceção. Desde startups a gigantes tecnológicos, a IA está a ser integrada em produtos e serviços, prometendo otimizar processos, criar novas oportunidades de negócio e melhorar a qualidade de vida.</p>
      <p>Em Portugal, o ecossistema de startups tem demonstrado um dinamismo notável na área da IA, com empresas a desenvolver soluções inovadoras em áreas como a saúde, finanças, agricultura e mobilidade. A aposta na investigação e desenvolvimento por parte de universidades e centros tecnológicos também é crucial, garantindo que o país se mantém na vanguarda desta revolução.</p>
      <h2>Desafios e Considerações Éticas</h2>
      <p>No entanto, a ascensão da IA não vem sem os seus desafios. Questões relacionadas com a ética, privacidade de dados, segurança cibernética e o impacto no mercado de trabalho são de suma importância. É fundamental que Portugal desenvolva uma estratégia nacional robusta para a IA que aborde estas preocupações, promovendo uma IA responsável e centrada no ser humano.</p>
      <p>A formação de novos talentos e a requalificação de profissionais existentes são igualmente críticas para garantir que a força de trabalho portuguesa está preparada para as exigências da era da IA. Iniciativas governamentais e parcerias entre o setor público e privado são essenciais para colmatar estas lacunas.</p>
      <h3>Oportunidades de Crescimento</h3>
      <p>Apesar dos desafios, as oportunidades que a IA oferece a Portugal são imensas. A capacidade de automatizar tarefas repetitivas, analisar grandes volumes de dados para extrair insights valiosos e personalizar experiências pode impulsionar a produtividade e a competitividade do país a nível global.</p>
      <p>Com um investimento contínuo em educação, infraestruturas e um quadro regulatório adaptado, Portugal tem o potencial para se afirmar como um polo de inovação em IA, atraindo investimento estrangeiro e fomentando o desenvolvimento de soluções que beneficiem a sociedade como um todo.</p>
    `,
  },
  {
    title: 'Novos Gadgets Essenciais para o Natal 2025',
    description: 'Uma seleção dos melhores presentes tecnológicos para este Natal, com opções para todos os gostos e orçamentos.',
    imageUrl: 'https://picsum.photos/id/238/1000/600',
    slug: 'gadgets-natal-2025',
    category: 'Gadgets',
    date: '14 de Novembro de 2025',
    content: `
      <p>O Natal de 2025 promete ser recheado de novidades tecnológicas que farão as delícias de miúdos e graúdos. Se procura o presente perfeito para um entusiasta de tecnologia ou para alguém que quer simplificar o seu dia a dia, veio ao sítio certo. A nossa equipa testou e selecionou os gadgets mais inovadores e úteis que chegaram ao mercado.</p>
      <h2>Smartphones e Wearables</h2>
      <p>Os novos smartphones vêm equipados com câmaras ainda mais poderosas, processadores ultrarrápidos e baterias de longa duração. Destaque para o "PhoneX Pro", com o seu ecrã dobrável e caneta inteligente, e o "Galaxy Ultra", que redefine a experiência móvel com a sua integração perfeita com o ecossistema doméstico. Nos wearables, os smartwatches e anéis inteligentes continuam a evoluir, oferecendo monitorização de saúde cada vez mais precisa e funcionalidades de pagamento e segurança.</p>
      <h2>Casa Inteligente</h2>
      <p>A casa inteligente está mais acessível e integrada do que nunca. Desde termostatos que aprendem os seus hábitos a assistentes de voz com IA que gerem toda a sua casa, as opções são vastas. As novas fechaduras inteligentes com reconhecimento facial e os sistemas de iluminação adaptativa prometem um conforto e segurança sem precedentes.</p>
      <h3>Entretenimento e Gaming</h3>
      <p>Para os amantes de entretenimento, as TVs de próxima geração com tecnologia MicroLED oferecem uma qualidade de imagem inigualável. Na área do gaming, as consolas portáteis ganharam uma nova vida, com modelos que permitem jogar os títulos mais exigentes em qualquer lugar. Os headsets de Realidade Virtual e Aumentada também estão mais leves e imersivos, abrindo portas para novas experiências de jogo e interação social.</p>
      <p>Não se esqueça dos drones de última geração com câmaras 8K e tempo de voo alargado, perfeitos para capturar momentos inesquecíveis. E para os mais criativos, as impressoras 3D domésticas estão mais rápidas e precisas, permitindo dar vida a qualquer ideia.</p>
    `,
  },
  // Add more placeholder articles as needed for other categories
];

// Function to generate static params for Next.js
// In a real application, this would fetch slugs from a CMS/API
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    // In a real app, you might want to redirect to a 404 page
    return (
      <div className="container mx-auto px-4 py-8 text-center text-foreground">
        <h1 className="text-3xl font-bold mb-4">Artigo Não Encontrado</h1>
        <p>Pedimos desculpa, mas o artigo que procura não existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={900}
          height={500}
          className="rounded-lg mb-6 w-full object-cover"
          priority
        />
        <p className="text-primary text-sm font-semibold uppercase mb-2">{article.category}</p>
        <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-4">{article.title}</h1>
        <p className="text-muted text-sm mb-6">{article.date}</p>

        <div
          className="prose prose-invert prose-lg max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}
