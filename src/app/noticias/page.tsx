'use client'; // This page uses React hooks (useState)

import ArticleCard from '@/components/ArticleCard';
import React from 'react';

// Placeholder for fetching categories (would be from an API or CMS)
const categories = [
  'Todas', 'Tecnologia', 'Inovação', 'Ciência', 'Mobilidade', 'IA', 'Startups'
];

// Placeholder data for articles (would be from an API or CMS)
const newsArticles = [
  {
    title: 'O Futuro da Inteligência Artificial: Desafios e Oportunidades em Portugal',
    description: 'Exploramos como a IA está a moldar o panorama tecnológico português, desde startups inovadoras a desafios éticos e sociais.',
    imageUrl: 'https://picsum.photos/id/237/500/300',
    slug: 'futuro-ia-portugal',
    category: 'Inteligência Artificial',
    date: '15 de Novembro de 2025',
  },
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
  {
    title: 'Gaming: Os Lançamentos Mais Esperados de 2026',
    description: 'Um olhar exclusivo sobre os títulos que prometem revolucionar o mundo dos videojogos no próximo ano.',
    imageUrl: 'https://picsum.photos/id/243/500/300',
    slug: 'gaming-lancamentos-2026',
    category: 'Tecnologia',
    date: '09 de Novembro de 2025',
  },
  {
    title: 'Wearables: A Nova Geração de Dispositivos Inteligentes',
    description: 'Smartwatches, anéis inteligentes e outros gadgets que prometem mudar a forma como interagimos com a tecnologia.',
    imageUrl: 'https://picsum.photos/id/244/500/300',
    slug: 'wearables-nova-geracao',
    category: 'Gadgets',
    date: '08 de Novembro de 2025',
  },
];

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('Todas');

  const filteredArticles = newsArticles.filter(article =>
    selectedCategory === 'Todas' || article.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8">Notícias</h1>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 border ${
              selectedCategory === category
                ? 'bg-primary text-white border-primary'
                : 'bg-transparent text-muted border-border hover:bg-card hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Article List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}