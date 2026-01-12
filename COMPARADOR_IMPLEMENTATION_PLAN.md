# 🚀 COMPARADOR INTELIGENTE - PLANO DE IMPLEMENTAÇÃO

**Projeto:** PRISMATEK Comparador
**Data:** 12 Janeiro 2026
**Status:** PRONTO PARA DESENVOLVIMENTO
**Prioridade:** 🔥 ALTA

---

## 📋 ÍNDICE

1. [Visão Geral](#visão-geral)
2. [Arquitetura Técnica](#arquitetura-técnica)
3. [Fases de Implementação](#fases-de-implementação)
4. [Componentes Frontend](#componentes-frontend)
5. [Backend & APIs](#backend--apis)
6. [Integração Gemini AI](#integração-gemini-ai)
7. [Base de Dados](#base-de-dados)
8. [Monetização (Afiliados)](#monetização-afiliados)
9. [Testing & QA](#testing--qa)
10. [Deploy & Lançamento](#deploy--lançamento)
11. [Checklist Completo](#checklist-completo)

---

## 🎯 VISÃO GERAL

### Objetivo
Criar comparador "bang for buck" WOW, INCRÍVEL, PERFEITO que recomenda produtos tech através de 4-5 perguntas simples + IA Gemini.

### Stack Tecnológico Aprovado
```
Frontend:
✅ Next.js 14 App Router (já existe)
✅ TailwindCSS (já configurado)
✅ Framer Motion (adicionar - animações)
✅ React Hook Form (adicionar - gestão de perguntas)

Backend:
✅ Next.js API Routes
✅ Gemini API (2.5 Flash ou 2.0 Flash)
✅ Cache: Vercel KV ou Redis (opcional Fase 1)

Database (Opcional - Fase 2):
⏸️ PostgreSQL ou Supabase
⏸️ Guardar: histórico comparações, analytics

Analytics:
✅ Vercel Analytics (já existe)
✅ Google Analytics (já existe)
✅ Custom events: categoria_selecionada, comparacao_concluida, click_afiliado
```

---

## 🏗️ ARQUITETURA TÉCNICA

### Estrutura de Pastas
```
src/
├── app/
│   ├── comparador/
│   │   ├── page.tsx                    # Landing page (seleção categorias)
│   │   ├── [categoria]/
│   │   │   ├── page.tsx                # Fluxo de perguntas
│   │   │   └── resultado/
│   │   │       └── page.tsx            # Página de resultados
│   │   └── layout.tsx                  # Layout específico comparador
│   └── api/
│       └── comparador/
│           ├── recommend/route.ts      # POST - Gemini recommendation
│           └── track/route.ts          # POST - Analytics tracking
│
├── components/
│   └── comparador/
│       ├── CategoryCard.tsx            # Card seleção categoria
│       ├── QuestionFlow.tsx            # Fluxo de perguntas
│       ├── QuestionCard.tsx            # Card pergunta individual
│       ├── ProgressBar.tsx             # Barra progresso (1/5, 2/5...)
│       ├── LoadingState.tsx            # Estado loading + mensagens
│       ├── RecommendationCard.tsx      # Card recomendação principal
│       ├── AlternativeCard.tsx         # Card alternativas
│       └── ResultsPage.tsx             # Página completa de resultados
│
├── lib/
│   └── comparador/
│       ├── questions.ts                # Configuração perguntas por categoria
│       ├── gemini.ts                   # Client Gemini API
│       ├── prompts.ts                  # Prompt engineering templates
│       ├── cache.ts                    # Cache logic (Vercel KV)
│       └── types.ts                    # TypeScript types
│
└── data/
    └── comparador/
        ├── categories.json             # Categorias disponíveis
        └── products/                   # Dados produtos (Fase 2)
            ├── smartphones.json
            ├── tvs.json
            └── ...
```

---

## 📅 FASES DE IMPLEMENTAÇÃO

### **FASE 1 - MVP (1-2 semanas)**
**Objetivo:** Comparador funcional com 2 categorias piloto

**Escopo:**
- ✅ Landing page com seleção de categorias
- ✅ Implementar 2 categorias: **Telemóveis** + **Headphones**
- ✅ Fluxo de 4-5 perguntas com animações
- ✅ Integração Gemini 2.5 Flash
- ✅ Página de resultados básica (1 recomendação + 2 alternativas)
- ✅ Links de afiliados Amazon (hardcoded inicial)
- ✅ Analytics básico (GA4 events)
- ✅ Mobile-first design
- ❌ Sem cache (chamar Gemini sempre)
- ❌ Sem database

**Entregável:**
Comparador funcional em `/comparador` acessível publicamente.

---

### **FASE 2 - Otimização (1 semana)**
**Objetivo:** Performance + mais categorias

**Escopo:**
- ✅ Adicionar 4 categorias restantes: **TVs, Tablets, Smartwatches, Laptops**
- ✅ Implementar cache (Vercel KV): 24h por combinação de respostas
- ✅ Rate limiting: 3 comparações/hora por IP (free tier)
- ✅ Optimizar prompts Gemini (custo + qualidade)
- ✅ Melhorar loading states (mensagens dinâmicas)
- ✅ A/B testing de variantes de prompt
- ✅ Analytics detalhado: funil de conversão
- ⏸️ Database (opcional): guardar histórico comparações

**Entregável:**
Comparador completo com 6 categorias + cache funcionante.

---

### **FASE 3 - Monetização (1 semana)**
**Objetivo:** Escalar afiliados + features premium

**Escopo:**
- ✅ Integrar TradeTracker + Awin (além de Amazon)
- ✅ Sistema de links dinâmicos (não hardcoded)
- ✅ Tracking de clicks em afiliados
- ✅ Relatório: conversões por categoria
- ⏸️ Premium tier: unlimited comparações (€4.99/mês)
- ⏸️ Auth system (NextAuth.js)
- ⏸️ Dashboard user: histórico comparações

**Entregável:**
Monetização multi-plataforma funcionante + base para premium.

---

### **FASE 4 - Features WOW (Futuro)**
**Objetivo:** Diferenciação competitiva

**Escopo:**
- 🔔 Alertas de preço ("Avisa-me quando descer €X")
- 💾 Guardar comparações (perfil user)
- 🤝 Partilhar recomendação (social sharing)
- 📊 Dashboard utilizador
- 🏆 Community voting ("Concordas?")
- 📈 Trending products

**Entregável:**
Features avançadas que criam lock-in e engagement.

---

## 🎨 COMPONENTES FRONTEND

### 1. Landing Page (`/comparador/page.tsx`)

**Responsabilidade:** Mostrar categorias disponíveis como cards clicáveis.

**Layout:**
```tsx
export default function ComparadorPage() {
  const categories = [
    { id: 'telemoveis', name: 'Telemóveis', icon: '📱', description: 'Smartphones Android e iPhone' },
    { id: 'headphones', name: 'Headphones', icon: '🎧', description: 'Auriculares e auscultadores' },
    { id: 'tvs', name: 'TVs', icon: '📺', description: 'Televisões Smart TV' },
    { id: 'tablets', name: 'Tablets', icon: '📱', description: 'iPad e tablets Android' },
    { id: 'smartwatches', name: 'Smartwatches', icon: '⌚', description: 'Relógios inteligentes' },
    { id: 'laptops', name: 'Laptops', icon: '💻', description: 'Portáteis e ultrabooks' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">🔍 Comparador Inteligente</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Encontra o melhor tech "bang for buck" para o teu orçamento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      <p className="text-center mt-12 text-sm text-gray-500">
        Powered by IA Gemini ✨
      </p>
    </div>
  );
}
```

**CategoryCard Component:**
```tsx
// components/comparador/CategoryCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/comparador/${category.id}`}>
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all cursor-pointer"
      >
        <div className="text-6xl mb-4 text-center">{category.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-center">{category.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          {category.description}
        </p>
      </motion.div>
    </Link>
  );
}
```

---

### 2. Question Flow (`/comparador/[categoria]/page.tsx`)

**Responsabilidade:** Gerir fluxo de 4-5 perguntas, navegação, state.

**State Management:**
```tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/comparador/questions';
import QuestionCard from '@/components/comparador/QuestionCard';
import ProgressBar from '@/components/comparador/ProgressBar';
import LoadingState from '@/components/comparador/LoadingState';

interface Answer {
  questionId: string;
  value: string;
}

export default function CategoryQuestionPage({ params }: { params: { categoria: string } }) {
  const router = useRouter();
  const categoryQuestions = questions[params.categoria];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [
      ...answers,
      { questionId: categoryQuestions[currentStep].id, value }
    ];
    setAnswers(newAnswers);

    if (currentStep < categoryQuestions.length - 1) {
      // Próxima pergunta
      setCurrentStep(currentStep + 1);
    } else {
      // Última pergunta → chamar API
      submitToGemini(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      router.push('/comparador');
    }
  };

  const submitToGemini = async (finalAnswers: Answer[]) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/comparador/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoria: params.categoria,
          respostas: finalAnswers,
        }),
      });

      const data = await response.json();

      // Track evento GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'comparacao_concluida', {
          categoria: params.categoria,
        });
      }

      // Redirecionar para página de resultados com dados
      router.push(`/comparador/${params.categoria}/resultado?data=${encodeURIComponent(JSON.stringify(data))}`);
    } catch (error) {
      console.error('Erro ao obter recomendação:', error);
      alert('Erro ao processar recomendação. Tenta novamente.');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  const currentQuestion = categoryQuestions[currentStep];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <ProgressBar current={currentStep + 1} total={categoryQuestions.length} />

      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    </div>
  );
}
```

**QuestionCard Component:**
```tsx
// components/comparador/QuestionCard.tsx
'use client';

import { motion } from 'framer-motion';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; description?: string }[];
}

export default function QuestionCard({
  question,
  onAnswer,
  onBack,
}: {
  question: Question;
  onAnswer: (value: string) => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">{question.question}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer(option.value)}
            className="bg-gray-100 dark:bg-gray-700 hover:bg-cyan-50 dark:hover:bg-cyan-900 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-600 rounded-xl p-6 text-left transition-all"
          >
            <div className="font-bold text-lg mb-2">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-600 dark:text-gray-400">{option.description}</div>
            )}
          </motion.button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      >
        ← Voltar
      </button>
    </motion.div>
  );
}
```

---

### 3. Loading State (`components/comparador/LoadingState.tsx`)

**Responsabilidade:** Mostrar animação + mensagens enquanto Gemini processa.

```tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const loadingMessages = [
  'A analisar o mercado...',
  'A comparar centenas de produtos...',
  'A encontrar o melhor bang for buck...',
  'A calcular relação qualidade/preço...',
  'Quase lá...',
];

export default function LoadingState() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-8xl mb-8"
        >
          🔍
        </motion.div>

        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-2xl font-semibold text-gray-700 dark:text-gray-300"
        >
          {loadingMessages[messageIndex]}
        </motion.p>
      </div>
    </div>
  );
}
```

---

### 4. Results Page (`/comparador/[categoria]/resultado/page.tsx`)

**Responsabilidade:** Mostrar recomendação principal + alternativas + CTAs.

```tsx
'use client';

import { useSearchParams } from 'next/navigation';
import RecommendationCard from '@/components/comparador/RecommendationCard';
import AlternativeCard from '@/components/comparador/AlternativeCard';
import Link from 'next/link';

export default function ResultadoPage() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get('data');

  if (!dataParam) {
    return <div>Erro: Dados não encontrados</div>;
  }

  const recommendation = JSON.parse(decodeURIComponent(dataParam));

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">✅ Encontrámos o Melhor para Ti!</h1>
      </div>

      {/* Recomendação Principal */}
      <RecommendationCard recommendation={recommendation.main} />

      {/* Alternativas */}
      {recommendation.alternatives && recommendation.alternatives.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">📊 Alternativas a Considerar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendation.alternatives.map((alt: any, idx: number) => (
              <AlternativeCard key={idx} alternative={alt} />
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-12 flex justify-center gap-4">
        <Link href="/comparador">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-xl">
            🔄 Nova Comparação
          </button>
        </Link>
      </div>
    </div>
  );
}
```

**RecommendationCard:**
```tsx
// components/comparador/RecommendationCard.tsx
'use client';

import { motion } from 'framer-motion';

interface Recommendation {
  productName: string;
  priceRange: string;
  justification: string[];
  specs: string[];
  affiliateLinks: { store: string; url: string }[];
}

export default function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const trackAffiliateClick = (store: string) => {
    // Track GA4 event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_afiliado', {
        loja: store,
        produto: recommendation.productName,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-4 border-cyan-400 dark:border-cyan-600 shadow-2xl"
    >
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-4xl font-bold mb-2">{recommendation.productName}</h2>
        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
          {recommendation.priceRange}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">PORQUÊ ESTA ESCOLHA?</h3>
        <ul className="space-y-2">
          {recommendation.justification.map((reason, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-cyan-500 mr-2">•</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {recommendation.specs && recommendation.specs.length > 0 && (
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          <strong>Specs:</strong> {recommendation.specs.join(' | ')}
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        {recommendation.affiliateLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAffiliateClick(link.store)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
          >
            🛒 Ver na {link.store}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
```

---

## 🔧 BACKEND & APIs

### 1. Recommendation API (`/api/comparador/recommend/route.ts`)

**Responsabilidade:** Receber respostas user → chamar Gemini → retornar recomendação.

```typescript
// src/app/api/comparador/recommend/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getRecommendation } from '@/lib/comparador/gemini';
import { getCachedRecommendation, setCachedRecommendation } from '@/lib/comparador/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categoria, respostas } = body;

    if (!categoria || !respostas) {
      return NextResponse.json(
        { error: 'Categoria e respostas são obrigatórias' },
        { status: 400 }
      );
    }

    // Criar cache key baseado em categoria + respostas
    const cacheKey = `comparador:${categoria}:${JSON.stringify(respostas)}`;

    // Verificar cache (Fase 2)
    // const cached = await getCachedRecommendation(cacheKey);
    // if (cached) {
    //   return NextResponse.json(cached);
    // }

    // Chamar Gemini
    const recommendation = await getRecommendation(categoria, respostas);

    // Guardar em cache por 24h (Fase 2)
    // await setCachedRecommendation(cacheKey, recommendation, 86400);

    return NextResponse.json(recommendation);
  } catch (error) {
    console.error('Erro na API de recomendação:', error);
    return NextResponse.json(
      { error: 'Erro ao processar recomendação' },
      { status: 500 }
    );
  }
}
```

---

## 🤖 INTEGRAÇÃO GEMINI AI

### Gemini Client (`lib/comparador/gemini.ts`)

```typescript
// src/lib/comparador/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildPrompt } from './prompts';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function getRecommendation(categoria: string, respostas: any[]) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = buildPrompt(categoria, respostas);

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse JSON response from Gemini
    const recommendation = JSON.parse(responseText);

    return recommendation;
  } catch (error) {
    console.error('Erro ao chamar Gemini API:', error);
    throw new Error('Falha ao gerar recomendação');
  }
}
```

### Prompt Engineering (`lib/comparador/prompts.ts`)

```typescript
// src/lib/comparador/prompts.ts

export function buildPrompt(categoria: string, respostas: any[]): string {
  // Extrair valores das respostas
  const orcamento = respostas.find(r => r.questionId === 'orcamento')?.value || 'médio';
  const prioridades = respostas.find(r => r.questionId === 'prioridades')?.value || '';

  const systemPrompt = `
És um especialista em tecnologia "bang-for-buck" para o mercado português.

Tom: Confiável, direto, útil, português de Portugal natural.
Foco: Melhor relação qualidade/preço (não o mais caro, nem o mais barato).

TAREFA:
Categoria: ${categoria}
Orçamento: ${orcamento}
Prioridades: ${prioridades}
Outras preferências: ${JSON.stringify(respostas)}

IMPORTANTE:
- Recomenda produtos disponíveis no mercado português/europeu
- Usa faixas de preço (ex: "€450-500"), nunca preços exatos
- Justifica PORQUÊ esta escolha é melhor que alternativas
- Mercado: Portugal, Amazon.es, Worten, Fnac, PCDiga

OUTPUT (JSON ESTRITO):
{
  "main": {
    "productName": "Nome completo do produto",
    "priceRange": "€X-Y",
    "justification": [
      "Razão 1 concreta",
      "Razão 2 concreta",
      "Razão 3 concreta"
    ],
    "specs": ["Spec 1", "Spec 2", "Spec 3"],
    "affiliateLinks": [
      { "store": "Amazon", "url": "https://amazon.es/..." },
      { "store": "Worten", "url": "https://worten.pt/..." }
    ]
  },
  "alternatives": [
    {
      "productName": "Alternativa 1",
      "priceRange": "€X-Y",
      "reason": "Quando considerar (ex: Se orçamento mais apertado)",
      "affiliateLinks": [...]
    },
    {
      "productName": "Alternativa 2",
      "priceRange": "€X-Y",
      "reason": "Quando considerar",
      "affiliateLinks": [...]
    }
  ]
}

RETORNA APENAS O JSON, sem markdown ou texto extra.
`;

  return systemPrompt;
}
```

---

## 💾 BASE DE DADOS (Opcional - Fase 2)

### Schema PostgreSQL/Supabase

```sql
-- Tabela: Comparações guardadas
CREATE TABLE comparacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  categoria VARCHAR(50) NOT NULL,
  respostas JSONB NOT NULL,
  recomendacao JSONB NOT NULL,
  ip_address VARCHAR(45),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela: Clicks em afiliados (tracking)
CREATE TABLE affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comparacao_id UUID REFERENCES comparacoes(id) ON DELETE CASCADE,
  produto VARCHAR(255) NOT NULL,
  loja VARCHAR(50) NOT NULL,
  url TEXT NOT NULL,
  clicked_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_comparacoes_categoria ON comparacoes(categoria);
CREATE INDEX idx_comparacoes_created_at ON comparacoes(created_at);
CREATE INDEX idx_affiliate_clicks_loja ON affiliate_clicks(loja);

-- Tabela: Users (para premium - Fase 3)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscription_tier VARCHAR(20) DEFAULT 'free', -- 'free', 'premium'
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 💰 MONETIZAÇÃO (AFILIADOS)

### Affiliate Links Structure

**Fase 1 (Hardcoded):**
```typescript
// Exemplo básico (Gemini pode retornar URLs genéricos)
const affiliateLinks = [
  {
    store: 'Amazon',
    url: 'https://amazon.es/dp/PRODUCT_ID?tag=prismatek-21'
  },
  {
    store: 'Worten',
    url: 'https://worten.pt/produto/PRODUCT_SLUG'
  }
];
```

**Fase 2 (Dinâmico - Database):**
```typescript
// products/smartphones.json
{
  "google-pixel-8a": {
    "name": "Google Pixel 8a",
    "priceRange": "€450-500",
    "affiliateLinks": {
      "amazon": "https://amazon.es/dp/B0D15ZJLBX?tag=prismatek-21",
      "worten": "https://www.worten.pt/...",
      "fnac": "https://www.fnac.pt/..."
    }
  }
}
```

**Tracking Clicks:**
```typescript
// components/comparador/RecommendationCard.tsx
const trackAffiliateClick = async (store: string, url: string) => {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_afiliado', {
      loja: store,
      produto: recommendation.productName,
    });
  }

  // Backend tracking (Fase 2)
  await fetch('/api/comparador/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'affiliate_click',
      produto: recommendation.productName,
      loja: store,
      url: url,
    }),
  });
};
```

---

## 🧪 TESTING & QA

### Checklist de Testes

**Frontend:**
- [ ] Landing page carrega todas as categorias
- [ ] CategoryCards têm hover animations
- [ ] Click num card navega para /comparador/[categoria]
- [ ] Question flow mostra barra de progresso
- [ ] Botão "Voltar" funciona em todas as perguntas
- [ ] Última resposta submete para API
- [ ] Loading state mostra mensagens rotativas
- [ ] Página de resultados mostra recomendação + alternativas
- [ ] Links de afiliados abrem em nova tab
- [ ] Design responsivo em mobile (< 768px)
- [ ] Dark mode funciona corretamente

**Backend:**
- [ ] `/api/comparador/recommend` retorna 400 se params faltarem
- [ ] Gemini API retorna JSON válido
- [ ] Parsing de JSON não quebra com respostas inesperadas
- [ ] Rate limiting funciona (Fase 2)
- [ ] Cache funciona corretamente (Fase 2)

**Analytics:**
- [ ] GA4 event `categoria_selecionada` dispara no click
- [ ] GA4 event `comparacao_concluida` dispara ao concluir
- [ ] GA4 event `click_afiliado` dispara ao clicar em link

**Edge Cases:**
- [ ] Gemini API falha → mostrar erro amigável
- [ ] User fecha browser mid-flow → state preservado?
- [ ] User navega com back button do browser
- [ ] Gemini retorna JSON malformado → catch error

---

## 🚀 DEPLOY & LANÇAMENTO

### Pré-Deploy Checklist

**Environment Variables (Vercel):**
```bash
GEMINI_API_KEY=your_gemini_key_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Já existe
REVALIDATE_TOKEN=your_token     # Já existe

# Fase 2 (Cache):
KV_URL=your_vercel_kv_url
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...

# Fase 3 (Database):
DATABASE_URL=postgresql://...
```

**Build Test:**
```bash
npm run build
# Verificar: 0 build errors
# Verificar: todas as rotas generateStaticParams OK
```

**Deploy Steps:**
1. Commit all changes to `main`
2. Push to GitHub
3. Vercel auto-deploys
4. Verificar: `https://prismatek-pt.vercel.app/comparador` acessível
5. Testar fluxo completo em produção
6. Verificar GA4 events chegam

**Soft Launch:**
- [ ] Publicar na homepage link para `/comparador`
- [ ] Testar com tráfego real (5-10 users)
- [ ] Monitorizar erros (Vercel logs + Sentry se disponível)
- [ ] Verificar custos Gemini API (não ultrapassar budget)

**Marketing:**
- [ ] Criar artigo: "Lançamos Comparador Inteligente"
- [ ] Social media posts (Beatriz - agente)
- [ ] SEO: otimizar meta tags `/comparador`

---

## ✅ CHECKLIST COMPLETO DE IMPLEMENTAÇÃO

### **FASE 1 - MVP**

**Setup Inicial:**
- [ ] Instalar dependências: `npm install framer-motion react-hook-form @google/generative-ai`
- [ ] Criar estrutura de pastas: `app/comparador/`, `components/comparador/`, `lib/comparador/`
- [ ] Adicionar `GEMINI_API_KEY` a `.env.local` e Vercel

**Configuração de Dados:**
- [ ] Criar `lib/comparador/questions.ts` com perguntas para Telemóveis + Headphones
- [ ] Criar `lib/comparador/prompts.ts` com prompt engineering templates
- [ ] Criar `lib/comparador/types.ts` com TypeScript interfaces

**Frontend - Landing:**
- [ ] Criar `app/comparador/page.tsx` (landing page)
- [ ] Criar `components/comparador/CategoryCard.tsx`
- [ ] Testar: Navegação funciona para `/comparador/telemoveis` e `/comparador/headphones`

**Frontend - Question Flow:**
- [ ] Criar `app/comparador/[categoria]/page.tsx`
- [ ] Criar `components/comparador/QuestionCard.tsx`
- [ ] Criar `components/comparador/ProgressBar.tsx`
- [ ] Criar `components/comparador/LoadingState.tsx`
- [ ] Implementar state management (useState para respostas)
- [ ] Testar: Fluxo completo de perguntas até submit

**Frontend - Results:**
- [ ] Criar `app/comparador/[categoria]/resultado/page.tsx`
- [ ] Criar `components/comparador/RecommendationCard.tsx`
- [ ] Criar `components/comparador/AlternativeCard.tsx`
- [ ] Testar: Resultados renderizam corretamente

**Backend - API:**
- [ ] Criar `app/api/comparador/recommend/route.ts`
- [ ] Criar `lib/comparador/gemini.ts` (Gemini client)
- [ ] Testar: API retorna JSON válido do Gemini

**Analytics:**
- [ ] Adicionar GA4 events: `categoria_selecionada`, `comparacao_concluida`, `click_afiliado`
- [ ] Testar: Events aparecem no GA4 DebugView

**Testing & Deploy:**
- [ ] Testar fluxo completo local
- [ ] Build test: `npm run build`
- [ ] Deploy para Vercel
- [ ] Testar em produção
- [ ] Smoke test: 5 comparações reais

---

### **FASE 2 - Otimização**

**Categorias Adicionais:**
- [ ] Adicionar perguntas: TVs, Tablets, Smartwatches, Laptops
- [ ] Atualizar prompts para novas categorias
- [ ] Testar cada categoria individualmente

**Cache (Vercel KV):**
- [ ] Setup Vercel KV store
- [ ] Criar `lib/comparador/cache.ts` (getCached, setCached)
- [ ] Integrar cache em `/api/comparador/recommend`
- [ ] Testar: Cache hit/miss funcionam

**Rate Limiting:**
- [ ] Implementar rate limiting (3 req/hora por IP)
- [ ] Criar mensagem: "Limite atingido. Tenta em X minutos."
- [ ] Testar: Rate limiting funciona

**Otimização Prompts:**
- [ ] A/B test de variantes de prompt
- [ ] Medir: custo médio por recomendação
- [ ] Reduzir tokens no prompt se possível

**Analytics Avançado:**
- [ ] Criar funil: categoria → pergunta 1 → ... → conclusão
- [ ] Taxa de abandono por pergunta
- [ ] Categoria mais popular

---

### **FASE 3 - Monetização**

**Affiliate Links:**
- [ ] Registar em Amazon Associates (amazon.es)
- [ ] Registar em TradeTracker Portugal
- [ ] Registar em Awin
- [ ] Criar `data/comparador/products/` com JSON por categoria
- [ ] Integrar links dinâmicos (não hardcoded)

**Tracking:**
- [ ] Criar `app/api/comparador/track/route.ts`
- [ ] Guardar clicks em DB
- [ ] Dashboard: clicks por loja, conversões estimadas

**Premium (Opcional):**
- [ ] Setup NextAuth.js
- [ ] Criar plano Premium (€4.99/mês)
- [ ] Unlimited comparações para Premium
- [ ] Stripe/Paypal integration

---

## 📊 MÉTRICAS DE SUCESSO

**Semana 1:**
- [ ] 50+ comparações concluídas
- [ ] Taxa de conclusão > 60%
- [ ] 0 erros críticos em produção
- [ ] 10+ clicks em afiliados

**Mês 1:**
- [ ] 500+ comparações concluídas
- [ ] Taxa de conclusão > 70%
- [ ] Taxa de click em afiliado > 10%
- [ ] Primeira venda confirmada via afiliado

**Mês 3:**
- [ ] 2000+ comparações/mês
- [ ] Taxa de click em afiliado > 15%
- [ ] €100-300 receita afiliados
- [ ] Comparador na homepage PRISMATEK

---

## 🎯 PRÓXIMOS PASSOS IMEDIATOS

1. **AGORA:** Começar implementação Fase 1 (MVP)
2. **Prioridade:** Telemóveis + Headphones funcionais
3. **Timeline:** 1-2 semanas para MVP completo
4. **Deploy:** Soft launch com tráfego limitado
5. **Validação:** 50 comparações reais → ajustes → escalar

---

**Status:** ✅ PLANO COMPLETO E PRONTO PARA DESENVOLVIMENTO

**Criado por:** Seth + Claude Sonnet 4.5
**Data:** 12 Janeiro 2026
**Versão:** 1.0 FINAL

---

*PRISMATEK - O Comparador mais Inteligente de Portugal* 🏆✨
