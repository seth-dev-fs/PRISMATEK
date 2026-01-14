import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // 🎨 PRISMATEK PREMIUM COLOR SYSTEM
      // World-class palette: Purple + Gold + Dark
      // ============================================
      colors: {
        // === CSS Variable Colors (for theme switching) ===
        background: 'rgb(var(--color-background) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',

        // === PRISMATEK Purple Spectrum (Primary) ===
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // Base purple
          600: '#8B5CF6',  // PRIMARY - FS WEB DESIGN purple
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#5b21b6',
          950: '#4c1d95',
        },

        // === PRISMATEK Gold Spectrum (Accent) ===
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#D4AF37',  // PRIMARY - FS WEB DESIGN gold
          700: '#B8941F',  // Dark gold
          800: '#a16207',
          900: '#854d0e',
          950: '#713f12',
        },

        // === Dark Backgrounds (Premium) ===
        dark: {
          primary: '#0A0A0A',    // Deepest black
          secondary: '#121212',  // Card background
          tertiary: '#1A1A1A',   // Elevated elements
          border: '#262626',     // Subtle borders
        },

        // === Text Hierarchy ===
        text: {
          primary: '#F5F5F5',    // High contrast
          secondary: '#A3A3A3',  // Medium contrast
          muted: '#737373',      // Low contrast
          disabled: '#525252',   // Disabled state
        },

        // === Legacy support (will migrate) ===
        primary: {
          DEFAULT: '#8B5CF6',  // Purple 600
          light: '#c084fc',    // Purple 400
          dark: '#7c3aed',     // Purple 700
        },
        accent: '#D4AF37',     // Gold 600
      },

      // ============================================
      // 📝 TYPOGRAPHY SYSTEM (Inter Hierarchy)
      // Apple/Google-level text scaling
      // ============================================
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        // Display (Hero sections)
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],  // 72px
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],  // 60px
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],    // 48px

        // Headlines
        'headline-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }], // 36px
        'headline-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }], // 30px
        'headline-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],         // 24px

        // Titles
        'title-lg': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],    // 20px
        'title-md': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '500' }],   // 18px
        'title-sm': ['1rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '500' }],       // 16px

        // Body
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' }],   // 18px
        'body-md': ['1rem', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' }],       // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],    // 14px

        // Captions & Labels
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '500' }], // 12px
        'overline': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600' }], // 11px (use uppercase class separately)
      },

      // ============================================
      // 🎭 SHADOWS & ELEVATION SYSTEM
      // Multi-level depth (Material Design inspired)
      // ============================================
      boxShadow: {
        // === Neutral Shadows (Light mode) ===
        'elevation-0': 'none',
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

        // === Dark Shadows (Dark mode) ===
        'dark-elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'dark-elevation-2': '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
        'dark-elevation-3': '0 8px 16px 0 rgba(0, 0, 0, 0.5)',
        'dark-elevation-4': '0 16px 32px 0 rgba(0, 0, 0, 0.6)',
        'dark-elevation-5': '0 24px 48px 0 rgba(0, 0, 0, 0.7)',

        // === Glow Effects (Purple) ===
        'glow-purple-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-purple-lg': '0 0 40px rgba(139, 92, 246, 0.5)',
        'glow-purple-xl': '0 0 60px rgba(139, 92, 246, 0.6)',

        // === Glow Effects (Gold) ===
        'glow-gold-sm': '0 0 10px rgba(212, 175, 55, 0.3)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-gold-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
        'glow-gold-xl': '0 0 60px rgba(212, 175, 55, 0.6)',

        // === Colored Shadows (Hover states) ===
        'purple-soft': '0 4px 16px rgba(139, 92, 246, 0.2)',
        'gold-soft': '0 4px 16px rgba(212, 175, 55, 0.2)',

        // === Inner Shadows (Glassmorphism) ===
        'inner-soft': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        'inner-glow-purple': 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
      },

      // ============================================
      // 🎬 ANIMATIONS & KEYFRAMES
      // Micro-interactions and smooth transitions
      // ============================================
      animation: {
        // === Entrance Animations ===
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-down': 'fadeInDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.4, 0, 0.2, 1)',

        // === Loop Animations ===
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',

        // === Micro-interactions ===
        'hover-lift': 'hoverLift 0.2s ease-out',
        'press': 'press 0.1s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },

      keyframes: {
        // === Entrance Keyframes ===
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        // === Loop Keyframes ===
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },

        // === Micro-interaction Keyframes ===
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        press: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.96)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
      },

      // ============================================
      // 🌈 GRADIENTS & BACKGROUNDS
      // Premium mesh gradients and effects
      // ============================================
      backgroundImage: {
        // === Radial Gradients ===
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        // === Purple Gradients ===
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)',
        'gradient-purple-gold': 'linear-gradient(135deg, #8B5CF6 0%, #D4AF37 100%)',
        'gradient-purple-radial': 'radial-gradient(circle at top left, #8B5CF6, #7c3aed)',

        // === Gold Gradients ===
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        'gradient-gold-purple': 'linear-gradient(135deg, #D4AF37 0%, #8B5CF6 100%)',

        // === Mesh Gradients (Hero backgrounds) ===
        'mesh-purple': 'radial-gradient(at 40% 20%, #8B5CF6 0px, transparent 50%), radial-gradient(at 80% 0%, #7c3aed 0px, transparent 50%), radial-gradient(at 0% 50%, #a855f7 0px, transparent 50%)',
        'mesh-gold': 'radial-gradient(at 60% 80%, #D4AF37 0px, transparent 50%), radial-gradient(at 20% 100%, #B8941F 0px, transparent 50%), radial-gradient(at 100% 50%, #eab308 0px, transparent 50%)',

        // === Animated Gradients ===
        'gradient-animated': 'linear-gradient(-45deg, #8B5CF6, #7c3aed, #D4AF37, #B8941F)',

        // === Glass Effects ===
        'glass-purple': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
        'glass-gold': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(184, 148, 31, 0.05) 100%)',

        // === Shine/Shimmer ===
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },

      // ============================================
      // 🔲 BORDERS & RADIUS
      // Consistent border system
      // ============================================
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',     // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.75rem',     // 12px
        'lg': '1rem',        // 16px
        'xl': '1.5rem',      // 24px
        '2xl': '2rem',       // 32px
        '3xl': '3rem',       // 48px
        'full': '9999px',
      },

      // ============================================
      // 🎯 SPACING SYSTEM
      // Harmonious 8px-based scale
      // ============================================
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },

      // ============================================
      // ⚡ TRANSITIONS
      // Premium timing functions
      // ============================================
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      // ============================================
      // 💫 BACKDROP BLUR (Glassmorphism)
      // ============================================
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // ============================================
      // 📐 Z-INDEX SCALE
      // Layering system
      // ============================================
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
