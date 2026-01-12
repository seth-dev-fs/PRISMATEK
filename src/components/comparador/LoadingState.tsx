'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-8xl mb-8"
        >
          🔍
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-700 dark:text-gray-300"
          >
            {loadingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
