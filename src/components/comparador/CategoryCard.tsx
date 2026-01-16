'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/lib/comparador/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/comparador/${category.id}`}>
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-700 transition-all cursor-pointer h-full"
      >
        <div className="text-6xl mb-4 text-center">{category.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">
          {category.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          {category.description}
        </p>
      </motion.div>
    </Link>
  );
}
