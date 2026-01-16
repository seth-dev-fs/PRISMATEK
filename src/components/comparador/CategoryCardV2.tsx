'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { Category } from '@/types/comparador';

interface CategoryCardV2Props {
  category: Category;
  index: number;
}

/**
 * Premium CategoryCard Component for VISÃO 100%
 * Design: Apple/Google Material Design 3 inspired
 * No emojis, no glassmorphism, pure class
 */
export default function CategoryCardV2({ category, index }: CategoryCardV2Props) {
  // Dynamically get Lucide icon component
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/comparador/${category.id}`}
        className="group block relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-purple-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/20"
      >
        {/* Hero Image Background */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={category.heroImage || '/images/placeholder.svg'}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.productsCount} produtos analisados
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {category.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-purple-600 group-hover:gap-3 transition-all">
            Ver Top 3
            <LucideIcons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-600/50" />
        </div>
      </Link>
    </motion.div>
  );
}
