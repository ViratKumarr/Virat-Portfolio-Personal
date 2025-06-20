import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          background: 'var(--color-background)',
          foreground: 'var(--color-foreground)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
        },
      },
      backgroundColor: {
        theme: {
          DEFAULT: 'var(--color-background)',
          foreground: 'var(--color-foreground)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          muted: 'var(--color-muted)',
        },
      },
      textColor: {
        theme: {
          DEFAULT: 'var(--color-foreground)',
          background: 'var(--color-background)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          muted: 'var(--color-muted)',
        },
      },
      borderColor: {
        theme: {
          DEFAULT: 'var(--color-border)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          muted: 'var(--color-muted)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config; 