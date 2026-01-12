'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/comparador/questions';
import { Answer } from '@/lib/comparador/types';
import QuestionCard from '@/components/comparador/QuestionCard';
import ProgressBar from '@/components/comparador/ProgressBar';
import LoadingState from '@/components/comparador/LoadingState';

interface PageProps {
  params: {
    categoria: string;
  };
}

export default function CategoryQuestionPage({ params }: PageProps) {
  const router = useRouter();
  const categoryQuestions = questions[params.categoria];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // If category doesn't exist or has no questions, redirect
  if (!categoryQuestions || categoryQuestions.length === 0) {
    router.push('/comparador');
    return null;
  }

  const handleAnswer = (value: string) => {
    const newAnswers = [
      ...answers,
      { questionId: categoryQuestions[currentStep].id, value },
    ];
    setAnswers(newAnswers);

    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pergunta_respondida', {
        categoria: params.categoria,
        pergunta: categoryQuestions[currentStep].id,
        resposta: value,
        progresso: `${currentStep + 1}/${categoryQuestions.length}`,
      });
    }

    if (currentStep < categoryQuestions.length - 1) {
      // Next question
      setCurrentStep(currentStep + 1);
    } else {
      // Last question → call API
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

      if (!response.ok) {
        throw new Error('Failed to get recommendation');
      }

      const data = await response.json();

      // Track GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'comparacao_concluida', {
          categoria: params.categoria,
        });
      }

      // Redirect to results page with data
      router.push(
        `/comparador/${params.categoria}/resultado?data=${encodeURIComponent(
          JSON.stringify(data)
        )}`
      );
    } catch (error) {
      console.error('Error getting recommendation:', error);
      alert(
        'Erro ao processar recomendação. Por favor tenta novamente.'
      );
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
