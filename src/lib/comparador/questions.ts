// Questions configuration for PRISMATEK Comparador
import { Question } from './types';

type QuestionsMap = {
  [key: string]: Question[];
};

export const questions: QuestionsMap = {
  // TELEMÓVEIS
  telemoveis: [
    {
      id: 'orcamento',
      question: 'Qual é o teu orçamento?',
      options: [
        { value: '300', label: '€300', description: 'Básico' },
        { value: '500', label: '€500', description: 'Médio' },
        { value: '800', label: '€800', description: 'Premium' },
        { value: '1000', label: '€1000+', description: 'Flagship' },
      ],
    },
    {
      id: 'prioridade',
      question: 'O que valorizas mais?',
      options: [
        { value: 'camara', label: '📷 Câmara', description: 'Fotos e vídeos top' },
        { value: 'desempenho', label: '⚡ Desempenho', description: 'Gaming e multitasking' },
        { value: 'bateria', label: '🔋 Bateria', description: 'Autonomia longa' },
        { value: 'ecra', label: '📱 Ecrã', description: 'Display de qualidade' },
      ],
    },
    {
      id: 'tamanho',
      question: 'Que tamanho preferes?',
      options: [
        { value: 'compacto', label: 'Compacto', description: 'Até 6.2"' },
        { value: 'normal', label: 'Normal', description: '6.3" - 6.6"' },
        { value: 'grande', label: 'Grande', description: '6.7"+ ' },
      ],
    },
    {
      id: 'marca',
      question: 'Tens preferência de marca?',
      options: [
        { value: 'qualquer', label: 'Qualquer', description: 'Melhor custo/benefício' },
        { value: 'apple', label: 'Apple', description: 'iPhone' },
        { value: 'samsung', label: 'Samsung', description: 'Galaxy' },
        { value: 'outras', label: 'Outras', description: 'Xiaomi, Google, etc' },
      ],
    },
    {
      id: 'uso',
      question: 'Uso principal?',
      options: [
        { value: 'redes-sociais', label: '📲 Redes Sociais', description: 'Instagram, TikTok' },
        { value: 'gaming', label: '🎮 Gaming', description: 'Jogos mobile' },
        { value: 'fotografia', label: '📸 Fotografia', description: 'Criar conteúdo' },
        { value: 'trabalho', label: '💼 Trabalho', description: 'Produtividade' },
      ],
    },
  ],

  // HEADPHONES
  headphones: [
    {
      id: 'orcamento',
      question: 'Qual é o teu orçamento?',
      options: [
        { value: '50', label: '€50', description: 'Básico' },
        { value: '100', label: '€100', description: 'Médio' },
        { value: '200', label: '€200', description: 'Premium' },
        { value: '300', label: '€300+', description: 'Audiophile' },
      ],
    },
    {
      id: 'tipo',
      question: 'Que tipo preferes?',
      options: [
        { value: 'true-wireless', label: 'True Wireless', description: 'Tipo AirPods' },
        { value: 'over-ear', label: 'Over-Ear', description: 'Cobre toda a orelha' },
        { value: 'on-ear', label: 'On-Ear', description: 'Assenta na orelha' },
        { value: 'in-ear', label: 'In-Ear', description: 'Com fio' },
      ],
    },
    {
      id: 'uso',
      question: 'Onde vais usar mais?',
      options: [
        { value: 'desporto', label: '🏃 Desporto', description: 'Treino e corrida' },
        { value: 'viagem', label: '✈️ Viagem', description: 'Transportes públicos' },
        { value: 'casa', label: '🏠 Casa', description: 'Relaxar em casa' },
        { value: 'trabalho', label: '💼 Trabalho', description: 'Calls e focus' },
      ],
    },
    {
      id: 'funcionalidade',
      question: 'Funcionalidade mais importante?',
      options: [
        { value: 'anc', label: 'ANC', description: 'Cancelamento de ruído' },
        { value: 'bateria', label: 'Bateria Longa', description: '24h+ autonomia' },
        { value: 'som', label: 'Som Premium', description: 'Melhor qualidade áudio' },
        { value: 'conforto', label: 'Conforto', description: 'Uso prolongado' },
      ],
    },
  ],

  // Placeholder for future categories
  tvs: [],
  tablets: [],
  smartwatches: [],
  laptops: [],
};
