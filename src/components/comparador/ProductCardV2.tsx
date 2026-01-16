'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp, Award } from 'lucide-react';
import type { Product } from '@/types/comparador';

interface ProductCardV2Props {
  product: Product;
  index: number;
}

const BADGE_CONFIG = {
  editor: {
    label: 'Escolha do Editor',
    icon: Award,
    gradient: 'from-purple-600 to-purple-700',
    ring: 'ring-purple-600/50',
    textColor: 'text-purple-600'
  },
  value: {
    label: 'Melhor Relação Qualidade/Preço',
    icon: TrendingUp,
    gradient: 'from-amber-500 to-amber-600',
    ring: 'ring-amber-500/50',
    textColor: 'text-amber-500'
  },
  innovation: {
    label: 'Mais Inovador',
    icon: Star,
    gradient: 'from-blue-600 to-blue-700',
    ring: 'ring-blue-600/50',
    textColor: 'text-blue-600'
  }
};

/**
 * Premium ProductCard Component for VISÃO 100%
 * Displays Top 3 products with rank, badge, specs, and affiliate links
 */
export default function ProductCardV2({ product, index }: ProductCardV2Props) {
  const badgeConfig = BADGE_CONFIG[product.badge];
  const BadgeIcon = badgeConfig.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${product.rank === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Main Card */}
      <div className={`relative h-full rounded-3xl border border-border/50 bg-card overflow-hidden hover:border-purple-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/10 ${product.rank === 1 ? 'min-h-[600px]' : 'min-h-[500px]'}`}>

        {/* Rank Badge (Top Left) */}
        <div className="absolute top-4 left-4 z-10">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${badgeConfig.gradient} text-white font-bold text-lg shadow-lg`}>
            #{product.rank}
          </div>
        </div>

        {/* Award Badge (Top Right) */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border ${badgeConfig.ring} shadow-lg`}>
            <BadgeIcon className={`w-4 h-4 ${badgeConfig.textColor}`} />
            <span className={`text-xs font-semibold ${badgeConfig.textColor}`}>
              {badgeConfig.label}
            </span>
          </div>
        </div>

        {/* Product Image */}
        <div className={`relative ${product.rank === 1 ? 'h-80' : 'h-64'} bg-gradient-to-br from-muted/30 to-muted/10`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {product.manufacturer}
            </p>
            <h3 className={`${product.rank === 1 ? 'text-2xl' : 'text-xl'} font-bold text-foreground mt-1`}>
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating / 20) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {product.rating}/100
            </span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} análises)
            </span>
          </div>

          {/* Why This Wins */}
          <div className="space-y-2">
            {product.whyThis.slice(0, product.rank === 1 ? 4 : 3).map((reason, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          {/* Key Specs (for rank #1 only) */}
          {product.rank === 1 && (
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
              {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {key}
                  </p>
                  <p className="text-sm font-medium text-foreground mt-0.5">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="pt-4 space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                €{product.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {product.priceRange}
              </span>
            </div>

            {/* Affiliate Links - TEMPORARILY DISABLED (broken links) */}
            {/* <div className="grid grid-cols-2 gap-2">
              {product.affiliateLinks.slice(0, 2).map((link) => (
                <a
                  key={link.store}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors"
                >
                  {link.store}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div> */}

            {/* Coming Soon Message */}
            <div className="px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Links de compra em breve
              </p>
            </div>

            {/* Review Sources */}
            <p className="text-xs text-muted-foreground text-center pt-2">
              Baseado em análises de {product.sources.slice(0, 3).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
