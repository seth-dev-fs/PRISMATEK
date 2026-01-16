'use client';

import { motion } from 'framer-motion';
import { AlternativeRecommendation } from '@/lib/comparador/types';

interface AlternativeCardProps {
  alternative: AlternativeRecommendation;
}

export default function AlternativeCard({ alternative }: AlternativeCardProps) {
  const trackAffiliateClick = (store: string) => {
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_afiliado_alternativa', {
        loja: store,
        produto: alternative.productName,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-800 transition-all shadow-md"
    >
      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {alternative.productName}
      </h4>
      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">
        {alternative.priceRange}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <strong>Quando considerar:</strong> {alternative.reason}
      </p>

      <div className="flex flex-wrap gap-2">
        {alternative.affiliateLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAffiliateClick(link.store)}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg transition-all text-sm"
          >
            Ver na {link.store}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
