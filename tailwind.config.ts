import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        'foreground-shade': 'var(--foreground-shade)',
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        body: 'var(--body)',
        'accent-2': 'var(--accent-2)',
        white: '#ffffff',
        active: 'var(--text-active)',
        danger: 'hsl(15, 85%, 48%)',
        success: '#00C6C2',
        warning: '#F9B163',
        'custom-shadow': 'var(--custom-shadow)',
        'form-active': '#0071e3',
        glass: 'var(--glassBg)',
        'glass-invert': 'var(--glassBgInvert)',
        'glass-tint': 'var(--glassBgTint)',
        transparent: 'transparent',
        'color-shadow': 'var(--color-shadow)',
        'arbxz-accent': 'var(--arbxz-accent)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: '#040202',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }: any) {
      addBase({
        html: { scrollBehaviour: 'smooth' },
        h1: {
          letterSpacing: '-2%',
        },
        h2: {
          letterSpacing: '-2%',
        },
      });
      addComponents({
        '.highlight': {
          display: 'inline-block',
          width: 'auto',
          padding: '0 1rem',
          marginBottom: '3px',
          color: theme('colors.background'),
          background: theme('colors.foreground'),
        },
        '.glass': {
          background: theme('colors.glass'),
          backdropFilter: 'blur( 10px )',
          borderColor: 'var(--glassBgTint)',
          borderWidth: '1px',
        },
      });
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
      });
    }),
  ],
};

export default config;
