'use client';

import { motion } from 'framer-motion';
import { Question } from '@/lib/comparador/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string) => void;
  onBack: () => void;
}

export default function QuestionCard({ question, onAnswer, onBack }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        {question.question}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer(option.value)}
            className="bg-gray-100 dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-800 rounded-xl p-6 text-left transition-all"
          >
            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
              {option.label}
            </div>
            {option.description && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {option.description}
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
      >
        ← Voltar
      </button>
    </motion.div>
  );
}
