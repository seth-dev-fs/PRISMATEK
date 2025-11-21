import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#FFFFFF', // White background
        card: '#F5F5F7',      // Very light gray for cards
        foreground: '#1d1d1f', // Dark gray for text, from Apple's site
        muted: '#6e6e73',      // Lighter gray for secondary text
        border: '#d2d2d7',      // Subtle light gray for borders
        primary: {
          DEFAULT: '#0071e3', // Apple's classic blue
          light: '#2997ff',
          dark: '#0056b3',
        },
        accent: '#0071e3', // Using the same blue as the primary accent
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
