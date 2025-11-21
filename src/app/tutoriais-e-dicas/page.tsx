'use client';

import React, { useState } from 'react';
import SimpleCard from '@/components/SimpleCard';

const content = {
  tutoriais: [
    {
      title: 'Como Configurar o Seu Novo Smartphone Android',
      description: 'Guia passo-a-passo para iniciantes para tirar o máximo partido do seu telemóvel Android.',
      slug: '#', // Placeholder slug
      imageUrl: 'https://picsum.photos/id/101/500/300',
    },
    {
      title: 'Introdução ao JavaScript: Variáveis e Tipos de Dados',
      description: 'Aprenda os conceitos básicos de JavaScript para começar a programar na web.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/102/500/300',
    },
    {
      title: 'Otimizar a Bateria do Seu Portátil: Dicas Essenciais',
      description: 'Aumente a autonomia do seu portátil com estas simples otimizações.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/103/500/300',
    },
    {
      title: 'Guia Completo de Cibersegurança para Usuários Domésticos',
      description: 'Proteja a sua rede doméstica e os seus dados pessoais com este guia abrangente.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/104/500/300',
    },
    {
      title: 'Dominar o Microsoft Excel: Funções Avançadas',
      description: 'Leve as suas habilidades no Excel para o próximo nível com estas funções poderosas.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/106/500/300',
    },
    {
      title: 'Primeiros Passos com o Raspberry Pi',
      description: 'Um tutorial para começar a construir os seus próprios projetos com Raspberry Pi.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/108/500/300',
    },
  ],
  dicas: [
    {
      title: 'Atalho Essencial do Windows: Win + Shift + S',
      description: 'Capture rapidamente recortes de ecrã personalizados sem esforço.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/110/500/300',
    },
    {
      title: 'Limpar Cache do Navegador para Melhor Performance',
      description: 'Um guia rápido para acelerar a sua navegação na web.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/111/500/300',
    },
    {
      title: 'Organize os Seus Ficheiros com Pastas Inteligentes',
      description: 'Dica para manter o seu computador arrumado e encontrar tudo rapidamente.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/112/500/300',
    },
    {
      title: 'Modo de Leitura no Smartphone: Menos Distrações',
      description: 'Transforme qualquer página web numa experiência de leitura limpa.',
      slug: '#',
      imageUrl: 'https://picsum.photos/id/113/500/300',
    },
  ],
};

type ContentType = 'tutoriais' | 'dicas';

export default function TutoriaisEDicasPage() {
  const [activeTab, setActiveTab] = useState<ContentType>('tutoriais');

  const tabs: { id: ContentType; name: string }[] = [
    { id: 'tutoriais', name: 'Tutoriais' },
    { id: 'dicas', name: 'Dicas' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-foreground mb-8">Tutoriais & Dicas</h1>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-2 border-b border-border">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-semibold transition-colors duration-200 -mb-px border-b-2 ${
              activeTab === tab.id
                ? 'text-primary border-primary'
                : 'text-muted border-transparent hover:text-foreground'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content[activeTab].map((item, index) => (
          <SimpleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
