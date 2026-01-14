import Link from 'next/link';
import { ArticleMeta, getArticleFreshness } from '@/lib/markdown';
import { getCategoryDisplayName } from '@/lib/categories';
import TimeAgo from './TimeAgo';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  if (!article) return null;

  const categoryDisplayName = getCategoryDisplayName(article.category);
  const freshness = getArticleFreshness(article.date);

  // Determine which badge to show (priority: new > recent)
  const showNewBadge = freshness === 'new';
  const showRecentBadge = freshness === 'recent' && !showNewBadge;

  return (
    <article className="group/card h-full">
      <Link
        href={`/noticias/${article.slug}`}
        className="
          flex flex-col h-full
          bg-white dark:bg-dark-secondary/40 backdrop-blur-md
          border border-border dark:border-dark-border
          rounded-2xl overflow-hidden
          shadow-elevation-2 dark:shadow-dark-elevation-2
          hover:shadow-elevation-4 dark:hover:shadow-dark-elevation-4 hover:shadow-glow-purple-sm
          hover:border-purple-600/30
          transform hover:-translate-y-2
          transition-all duration-350 ease-apple
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary
          relative
        "
      >
        {/* Gradient Glow Border on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-purple-gold opacity-0 group-hover/card:opacity-10 transition-opacity duration-350 pointer-events-none" />

        {/* Image Container - NATIVE IMG ONLY */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
          {article.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.image}
              alt={article.title}
              className="
                absolute inset-0 w-full h-full object-cover
                brightness-90 group-hover/card:brightness-100
                scale-100 group-hover/card:scale-105
                transition-all duration-350 ease-apple
              "
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-transparent">
              <svg
                className="w-16 h-16 text-purple-500/20 animate-float"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-350" />

          {/* Category Badge - PURPLE GRADIENT */}
          {article.category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="
                inline-flex items-center gap-1.5
                px-3 py-1.5
                text-xs font-bold uppercase tracking-wide
                bg-gradient-purple text-white
                rounded-full shadow-glow-purple-sm
                backdrop-blur-md
                border border-purple-500/20
                transform group-hover/card:scale-110 group-hover/card:shadow-glow-purple
                transition-all duration-250 ease-bounce-soft
              ">
                {categoryDisplayName}
              </span>
            </div>
          )}

          {/* NEW/RECENT Badge (Top Right, above reading time) */}
          {(showNewBadge || showRecentBadge) && (
            <div className="absolute top-4 right-4 z-10">
              <span className={`
                inline-flex items-center gap-1.5
                px-3 py-1.5
                text-xs font-extrabold uppercase tracking-wide
                rounded-full shadow-elevation-2
                backdrop-blur-md
                border
                transform group-hover/card:scale-110
                transition-all duration-250 ease-bounce-soft
                ${showNewBadge
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-400/30 animate-pulse-soft shadow-glow-purple-sm'
                  : 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-400/30 shadow-glow-gold-sm'
                }
              `}>
                {showNewBadge ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Novo
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    Hot
                  </>
                )}
              </span>
            </div>
          )}

          {/* Reading Time Badge - GOLD ACCENT */}
          <div className={`absolute right-4 z-10 ${showNewBadge || showRecentBadge ? 'top-16' : 'top-4'}`}>
            <div className="
              flex items-center gap-1.5
              px-2.5 py-1
              bg-white/90 dark:bg-dark-secondary/90 backdrop-blur-md
              border border-gold-600/20
              rounded-full shadow-soft
              text-xs font-semibold text-gold-600 dark:text-gold-400
              opacity-0 group-hover/card:opacity-100
              transform translate-y-2 group-hover/card:translate-y-0
              transition-all duration-300 ease-smooth
            ">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readingTime} min</span>
            </div>
          </div>
        </div>

        {/* Content Section with Enhanced Spacing */}
        <div className="flex flex-col flex-1 p-6 sm:p-7 relative z-10">
          {/* Purple Accent Line (Left Border) */}
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-purple opacity-0 group-hover/card:opacity-100 transition-opacity duration-350" />

          {/* Title with Premium Typography - PURPLE ON HOVER */}
          <h3 className="
            text-xl sm:text-2xl font-extrabold
            bg-gradient-to-r from-text-primary to-text-primary bg-clip-text
            group-hover/card:from-purple-300 group-hover/card:to-gold-300
            leading-tight tracking-tight
            mb-3
            line-clamp-2
            min-h-[3.5rem]
            transition-all duration-350 ease-smooth
          ">
            {article.title}
          </h3>

          {/* Description with Better Readability */}
          <p className="
            text-sm sm:text-base text-text-secondary
            group-hover/card:text-text-primary
            leading-relaxed-plus
            mb-5
            line-clamp-2
            min-h-[3rem]
            flex-1
            transition-colors duration-250
          ">
            {article.description}
          </p>

          {/* Metadata Footer with Enhanced Design */}
          <div className="flex items-center justify-between pt-5 border-t border-border dark:border-dark-border/50 group-hover/card:border-purple-600/30 transition-colors duration-350">
            {/* Date Display with TimeAgo */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted font-medium">
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <TimeAgo date={article.date} />
            </div>

            {/* Read More CTA - PURPLE + GOLD GRADIENT */}
            <span className="
              flex items-center gap-1.5
              text-sm font-bold
              text-purple-400
              group-hover/card:gap-2.5
              group-hover/card:text-gold-400
              transition-all duration-250 ease-smooth
              relative
            ">
              <span className="relative z-10">Ler mais</span>
              <svg
                className="
                  w-4 h-4 relative z-10
                  transform group-hover/card:translate-x-1
                  transition-transform duration-250 ease-smooth
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
