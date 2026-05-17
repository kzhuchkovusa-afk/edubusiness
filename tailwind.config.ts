import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — now mapped to the dark theme
        bg: '#0D0D1A',
        surface: '#1A1A2E',
        text: {
          DEFAULT: '#E0E0F0',
          muted: '#9A9ABF',
        },
        primary: {
          DEFAULT: '#6C5CE7',
          dark: '#5B4BD4',
        },
        accent: '#00E676',
        warning: '#FF6B35',
        danger: '#EF4444',
        border: '#272740',

        // Dark theme tokens (gocoding.tech-style redesign)
        ink: {
          DEFAULT: '#0D0D1A',
          card: '#1A1A2E',
          card2: '#16213E',
        },
        brand: {
          DEFAULT: '#6C5CE7',
          light: '#A29BFE',
        },
        cyan: '#00D2FF',
        grass: '#00E676',
        flame: '#FF6B35',
        rose: '#FF6B9D',
        'ink-text': '#E0E0F0',
        'ink-muted': '#9A9ABF',
        'light-section': '#F8F9FE',
      },
      fontFamily: {
        heading: ['var(--font-space)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.04)',
        'card-hover':
          '0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)',
        'card-dark': '0 20px 60px rgba(0,0,0,0.3)',
        glow: '0 12px 40px rgba(108,92,231,0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        pulse: 'pulseDot 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
