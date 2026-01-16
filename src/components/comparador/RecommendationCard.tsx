'use client';

import { motion } from 'framer-motion';
import { ProductRecommendation } from '@/lib/comparador/types';

interface RecommendationCardProps {
  recommendation: ProductRecommendation;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const trackAffiliateClick = (store: string) => {
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_afiliado', {
        loja: store,
        produto: recommendation.productName,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-4 border-purple-600 dark:border-purple-700 shadow-2xl"
    >
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {recommendation.productName}
        </h2>
        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
          {recommendation.priceRange}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          PORQUÊ ESTA ESCOLHA?
        </h3>
        <ul className="space-y-2">
          {recommendation.justification.map((reason, idx) => (
            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-purple-600 mr-2 text-xl">•</span>
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
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            🛒 Ver na {link.store}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
