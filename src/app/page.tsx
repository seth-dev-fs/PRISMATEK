import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup'; // Import the new component

export default function Home() {
  const heroArticle = {
    title: 'O Futuro da Inteligência Artificial: Desafios e Oportunidades em Portugal',
    description: 'Exploramos como a IA está a moldar o panorama tecnológico português, desde startups inovadoras a desafios éticos e sociais.',
    imageUrl: 'https://picsum.photos/id/237/1000/600', // Placeholder image
    slug: 'futuro-ia-portugal',
    category: 'Inteligência Artificial',
    date: '15 de Novembro de 2025',
  };

  const recentArticles = [
    {
      title: 'Novos Gadgets Essenciais para o Natal 2025',
      description: 'Uma seleção dos melhores presentes tecnológicos para este Natal, com opções para todos os gostos e orçamentos.',
      imageUrl: 'https://picsum.photos/id/238/500/300',
      slug: 'gadgets-natal-2025',
      category: 'Gadgets',
      date: '14 de Novembro de 2025',
    },
    {
      title: 'A Revolução da Mobilidade Elétrica: Carros e Trotinetes em Destaque',
      description: 'Análise aprofundada das últimas tendências em veículos elétricos e micro-mobilidade, e o seu impacto nas cidades portuguesas.',
      imageUrl: 'https://picsum.photos/id/239/500/300',
      slug: 'mobilidade-eletrica',
      category: 'Mobilidade',
      date: '13 de Novembro de 2025',
    },
    {
      title: 'Cibersegurança para Iniciantes: Proteja-se Online em 5 Passos',
      description: 'Um guia simples e eficaz para quem quer começar a proteger a sua vida digital, com dicas práticas para o dia-a-dia.',
      imageUrl: 'https://picsum.photos/id/240/500/300',
      slug: 'ciberseguranca-iniciantes',
      category: 'Segurança Digital',
      date: '12 de Novembro de 2025',
    },
    {
      title: 'Startups Portuguesas que Estão a Conquistar o Mundo',
      description: 'Conheça as empresas de tecnologia nacionais que estão a inovar e a ganhar reconhecimento internacional.',
      imageUrl: 'https://picsum.photos/id/241/500/300',
      slug: 'startups-portuguesas',
      category: 'Startups',
      date: '11 de Novembro de 2025',
    },
    {
      title: 'Review: iPhone 17 Pro - Onde a Inovação Encontra a Perfeição',
      description: 'A nossa análise completa ao mais recente smartphone da Apple, com todos os prós e contras.',
      imageUrl: 'https://picsum.photos/id/242/500/300',
      slug: 'review-iphone-17-pro',
      category: 'Reviews',
      date: '10 de Novembro de 2025',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-12">
        <Image
          src={heroArticle.imageUrl}
          alt={heroArticle.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-primary [text-shadow:0_1px_2px_rgba(255,255,255,0.4)]">{heroArticle.category}</p>
            <Link href={`/noticias/${heroArticle.slug}`}>
              <h2 className="font-sans text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-foreground hover:text-primary transition-colors duration-200 [text-shadow:0_2px_4px_rgba(255,255,255,0.2)]">
                {heroArticle.title}
              </h2>
            </Link>
            <p className="mt-4 text-lg text-muted hidden md:block">{heroArticle.description}</p>
            <p className="mt-2 text-sm text-muted">{heroArticle.date}</p>
          </div>
        </div>
      </section>

      {/* Seções Organizadas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.slice(0, 3).map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.slice(3, 6).map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Adicionar mais seções conforme necessário */}
    </div>
  );
}
