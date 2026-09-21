/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy base — premium, institutional feel
        navy: {
          950: '#060b16',
          900: '#0a1122',
          800: '#0f1a33',
          700: '#152443',
          600: '#1d3059',
        },
        // Gold — a nod to Navoi's Muruntau gold mine / NMMC
        gold: {
          400: '#f5c860',
          500: '#e6b13e',
          600: '#c8912a',
        },
        // Teal secondary accent (interactive elements)
        teal: {
          400: '#3fd0c9',
          500: '#20b8b0',
          600: '#159a93',
        },
        // ── Semantic, theme-aware tokens (see :root / .dark in index.css) ──
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        bgalt: 'rgb(var(--c-bg-alt) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--c-surface-2) / <alpha-value>)',
        line: 'rgb(var(--c-border) / <alpha-value>)',
        heading: 'rgb(var(--c-heading) / <alpha-value>)',
        body: 'rgb(var(--c-body) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        subtle: 'rgb(var(--c-subtle) / <alpha-value>)',
        accenttext: 'rgb(var(--c-accent-text) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
      },
    },
  },
  plugins: [],
}
