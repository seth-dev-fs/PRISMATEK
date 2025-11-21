import Image from 'next/image';

interface Review {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  product: string;
  score: number;
  pros: string[];
  cons: string[];
  content: string;
}

const reviews: Review[] = [
  {
    title: 'Review: iPhone 17 Pro - Onde a Inovação Encontra a Perfeição',
    description: 'A nossa análise completa ao mais recente smartphone da Apple, com todos os prós e contras.',
    imageUrl: 'https://picsum.photos/id/242/1000/600',
    slug: 'iphone-17-pro',
    product: 'iPhone 17 Pro',
    score: 9.5,
    pros: [
      'Performance Excecional (Chip A19 Bionic)',
      'Sistema de Câmara Revolucionário (Melhor da Categoria)',
      'Ecrã ProMotion XDR com Brilho Inigualável',
      'Design Premium e Resistência Aprimorada',
      'Duração da Bateria Melhorada',
    ],
    cons: [
      'Preço Elevado',
      'Inovação Incremental no Design',
      'Porta USB-C Ainda Limitada em Alguns Modelos',
    ],
    content: `
      <p>O iPhone 17 Pro chega ao mercado com a promessa de elevar a fasquia para os smartphones premium. Depois de semanas de testes intensivos, podemos confirmar que a Apple mais uma vez entregou um dispositivo que combina hardware de ponta com um software impecável.</p>
      <h2>Performance e Ecrã</h2>
      <p>Equipado com o novo chip A19 Bionic, o iPhone 17 Pro oferece uma performance excecional, lidando com as tarefas mais exigentes, desde jogos gráficos intensos a edição de vídeo 4K, sem qualquer esforço. O ecrã ProMotion XDR continua a ser um dos melhores do mercado, com cores vibrantes, pretos profundos e um brilho máximo que torna a visualização de conteúdo uma experiência fantástica, mesmo sob luz solar direta.</p>
      <h2>Câmara</h2>
      <p>O sistema de câmara é, sem dúvida, o ponto alto. A Apple refinou ainda mais os seus algoritmos e introduziu novos sensores que capturam detalhes incríveis, mesmo em condições de pouca luz. O modo cinematográfico está mais versátil, e a nova lente teleobjetiva oferece um zoom ótico impressionante sem perda de qualidade.</p>
      <h2>Duração da Bateria e Conectividade</h2>
      <p>A duração da bateria foi uma agradável surpresa, conseguindo facilmente um dia inteiro de uso intenso. A introdução da porta USB-C é um passo na direção certa, embora ainda haja algumas limitações dependendo do modelo. A conectividade 5G é robusta e fiável.</p>
      <h3>Conclusão</h3>
      <p>O iPhone 17 Pro é um smartphone impressionante que redefine o que é possível num dispositivo móvel. Embora o preço seja proibitivo para muitos e o design não traga grandes revoluções, a experiência de utilização, a performance e a qualidade da câmara justificam o investimento para os entusiastas da tecnologia que procuram o melhor do mercado.</p>
    `,
  },
  {
    title: 'Samsung Galaxy Watch 7: O Novo Rei dos Smartwatches?',
    description: 'Testámos o Galaxy Watch 7 e revelamos se ele consegue superar a concorrência.',
    imageUrl: 'https://picsum.photos/id/245/1000/600',
    slug: 'galaxy-watch-7',
    product: 'Samsung Galaxy Watch 7',
    score: 8.8,
    pros: [
      'Ecrã AMOLED Brilhante e Nítido',
      'Rastreamento de Saúde Abrangente e Preciso',
      'Integração Fluida com o Ecossistema Samsung',
      'Duração da Bateria Melhorada em Relação ao Antecessor',
      'Design Elegante e Confortável',
    ],
    cons: [
      'Funcionalidades de IA Ainda em Desenvolvimento',
      'Experiência Completa Limitada a Utilizadores Samsung',
      'Preço Ligeiramente Elevado',
    ],
    content: `
      <p>O Samsung Galaxy Watch 7 chega ao mercado com grandes ambições, prometendo ser um dos melhores smartwatches Android disponíveis. A nossa análise detalhada revela um dispositivo que cumpre grande parte das suas promessas, com algumas áreas para melhoria.</p>
      <h2>Design e Ecrã</h2>
      <p>O design do Galaxy Watch 7 é refinado e elegante, confortável de usar durante todo o dia. O ecrã AMOLED é vibrante e nítido, com excelente visibilidade mesmo sob luz solar direta. A coroa rotativa virtual, embora funcional, exige um pouco de hábito.</p>
      <h2>Funcionalidades de Saúde e Fitness</h2>
      <p>O rastreamento de saúde é um dos pontos fortes, com monitorização precisa de batimentos cardíacos, sono, stress e até composição corporal. A Samsung continua a inovar nesta área, tornando o Galaxy Watch 7 um excelente companheiro para quem leva a sério a sua saúde e fitness.</p>
      <h2>Performance e Duração da Bateria</h2>
      <p>A performance é fluida, com o novo processador a garantir uma experiência sem engasgos. A duração da bateria, uma preocupação em modelos anteriores, foi notavelmente melhorada, permitindo até dois dias de uso moderado com uma única carga.</p>
      <h3>Conclusão</h3>
      <p>O Samsung Galaxy Watch 7 é um smartwatch altamente competente e elegante, que se destaca pelas suas capacidades de rastreamento de saúde e fitness, e pela integração perfeita com o ecossistema Samsung. Embora as funcionalidades de IA ainda precisem de amadurecer e o preço seja um fator, é uma excelente opção para utilizadores Android, especialmente os que já possuem dispositivos Samsung.</p>
    `,
  },
];

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const review = reviews.find((rev) => rev.slug === slug);

  if (!review) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-foreground">
        <h1 className="text-3xl font-bold mb-4">Review Não Encontrada</h1>
        <p>Pedimos desculpa, mas a review que procura não existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-6">
          <Image
            src={review.imageUrl}
            alt={review.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <p className="text-primary font-bold uppercase mb-2">{review.product}</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">{review.title}</h1>
        <p className="text-lg text-muted mb-8">{review.description}</p>

        <div className="mb-10 p-6 border border-border rounded-lg flex flex-col md:flex-row justify-around items-center text-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted text-lg">Pontuação Final</p>
            <p className="font-display text-6xl font-bold text-primary">{review.score}<span className="text-2xl text-muted">/10</span></p>
          </div>
          <div className="w-px bg-border self-stretch mx-8 hidden md:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Prós</h2>
              <ul className="list-disc list-inside text-muted space-y-1">
                {review.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Contras</h2>
              <ul className="list-disc list-inside text-muted space-y-1">
                {review.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="prose prose-lg prose-invert max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </article>
    </div>
  );
}
