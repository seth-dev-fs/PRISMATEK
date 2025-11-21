interface Opinion {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  author: string;
  date: string;
  content: string; // Full content of the opinion piece
}

const opinionPieces: Opinion[] = [
  {
    title: 'A Promessa e o Perigo da IA na Criação de Conteúdo',
    description: 'Serão os robôs os novos jornalistas? Uma reflexão sobre o futuro da criatividade humana na era da inteligência artificial.',
    imageUrl: 'https://picsum.photos/id/248/1000/600',
    slug: 'ia-criacao-conteudo',
    author: 'Dr. Sofia Almeida',
    date: '16 de Novembro de 2025',
    content: `
      <p>A inteligência artificial (IA) tem-se revelado uma ferramenta de produtividade sem precedentes, capaz de gerar texto, imagens e até música com uma velocidade e escala que desafiam as nossas conceções tradicionais de criação. No jornalismo e na produção de conteúdo, a sua promessa é tentadora: automatizar tarefas repetitivas, analisar vastos conjuntos de dados e até rascunhar artigos.</p>
      <h2>A Revolução na Redação</h2>
      <p>Muitas redações já estão a experimentar a IA para gerar resumos de notícias, traduzir textos ou até mesmo para criar relatórios financeiros baseados em dados. Isto liberta os jornalistas para se concentrarem em investigação aprofundada, entrevistas exclusivas e análises complexas, onde o toque humano e o pensamento crítico são insubstituíveis.</p>
      <p>A capacidade da IA para personalizar o conteúdo para audiências específicas também abre novas avenidas para o engajamento, entregando notícias relevantes no momento certo e no formato certo para cada leitor.</p>
      <h3>O Calcanhar de Aquiles: Originalidade e Ética</h3>
      <p>No entanto, o perigo reside na dependência excessiva da IA. Questões de originalidade, plágio e "alucinações" (informação falsa gerada pela IA) são riscos reais. A voz editorial, a sensibilidade cultural e a profundidade de análise que advêm da experiência humana são difíceis, se não impossíveis, de replicar por algoritmos.</p>
      <p>A ética na utilização da IA na criação de conteúdo é um campo minado. Quem é responsável por um erro factual num artigo gerado por IA? Como garantimos que os preconceitos inerentes aos dados de treino não se manifestam em conteúdo discriminatório?</p>
      <p>Em suma, a IA é uma ferramenta poderosa que pode complementar a criatividade humana, mas nunca a substituirá por completo. O futuro do jornalismo e da criação de conteúdo reside numa colaboração simbiótica entre a inteligência humana e a artificial, onde a primeira guia a segunda com um forte sentido de responsabilidade e propósito.</p>
    `,
  },
  {
    title: 'O Metaverso Morreu Antes de Nascer?',
    description: 'Uma análise crítica ao entusiasmo inicial e à realidade atual do metaverso, e o seu verdadeiro potencial.',
    imageUrl: 'https://picsum.photos/id/249/1000/600',
    slug: 'metaverso-morreu',
    author: 'Prof. Carlos Ribeiro',
    date: '17 de Novembro de 2025',
    content: `
      <p>Há alguns anos, o "metaverso" era a palavra da moda, a próxima grande fronteira da internet, prometendo mundos virtuais imersivos onde trabalharíamos, socializaríamos e jogaríamos. Grandes empresas investiram biliões, e o burburinho era ensurdecedor. Contudo, hoje, a narrativa mudou. Estaremos perante um conceito que morreu antes mesmo de ter a oportunidade de florescer plenamente?</p>
      <h2>A Queda do Hype</h2>
      <p>O entusiasmo inicial pelo metaverso foi alimentado por visões futuristas, mas a realidade da sua implementação revelou-se mais complexa e menos glamorosa. As plataformas existentes eram frequentemente rudimentares, exigindo hardware caro e oferecendo experiências que não justificavam o investimento ou o tempo dos utilizadores.</p>
      <p>Apesar dos investimentos colossais de empresas como a Meta, o público em geral não aderiu massivamente, e muitos começaram a questionar a utilidade prática e o valor real do metaverso no dia a dia.</p>
      <h3>Onde Falhou?</h3>
      <p>Vários fatores contribuíram para a desaceleração do hype: a falta de interoperabilidade entre plataformas, a tecnologia ainda imatura (especialmente em termos de VR/AR acessível e confortável), e a ausência de uma "killer app" que demonstrasse inequivocamente o seu potencial revolucionário. Além disso, a prioridade dada à IA por muitas empresas deslocou o foco dos investimentos e da inovação.</p>
      <h2>O Verdadeiro Potencial</h2>
      <p>No entanto, seria prematuro declarar a morte do metaverso. O conceito subjacente – ambientes virtuais imersivos e interconectados – continua a ter um potencial enorme em áreas como a formação, colaboração profissional, design e até terapia. O que estamos a assistir é talvez uma correção de rota, uma transição de um hype irrealista para um desenvolvimento mais pragmático e focado em casos de uso reais.</p>
      <p>O metaverso não será uma única plataforma, mas sim um ecossistema de experiências digitais, impulsionado por avanços em hardware (óculos AR/VR mais leves e poderosos), IA (para criar mundos mais dinâmicos e personagens mais inteligentes) e blockchain (para propriedade digital e economias virtuais). A sua evolução será gradual e integrada com o mundo real, em vez de uma revolução disruptiva instantânea.</p>
      <p>Portanto, o metaverso não morreu; está apenas a amadurecer. O futuro será menos sobre "entrar" num mundo virtual e mais sobre a fusão de experiências digitais e físicas, de forma fluida e útil.</p>
    `,
  },
];

export async function generateStaticParams() {
  return opinionPieces.map((opinion) => ({
    slug: opinion.slug,
  }));
}

export default function OpinionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const opinion = opinionPieces.find((op) => op.slug === slug);

  if (!opinion) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-foreground">
        <h1 className="text-3xl font-bold mb-4">Artigo de Opinião Não Encontrado</h1>
        <p>Pedimos desculpa, mas o artigo de opinião que procura não existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
        <Image
          src={opinion.imageUrl}
          alt={opinion.title}
          width={900}
          height={500}
          className="rounded-lg mb-6 w-full object-cover"
          priority
        />
        <p className="text-primary text-sm font-semibold uppercase mb-2">Por {opinion.author}</p>
        <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-4">{opinion.title}</h1>
        <p className="text-muted text-sm mb-6">{opinion.date}</p>

        <div
          className="prose prose-invert prose-lg max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: opinion.content }}
        />
      </article>
    </div>
  );
}
