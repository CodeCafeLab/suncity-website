import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        headline: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Solis Power Inspired Color Palette
        navy: {
          DEFAULT: '#05203D',
          50: '#E8EDF2',
          100: '#C4D1DE',
          200: '#9BB3C8',
          300: '#7295B2',
          400: '#4F7AA0',
          500: '#2C5F8E',
          600: '#05203D',
          700: '#041A32',
          800: '#031427',
          900: '#020E1C',
        },
        gold: {
          DEFAULT: '#F4C44D',
          50: '#FEF9E8',
          100: '#FDF0C5',
          200: '#FBE59E',
          300: '#F9DA77',
          400: '#F6CF50',
          500: '#F4C44D',
          600: '#E5B03A',
          700: '#D19C28',
          800: '#BD8816',
          900: '#A97404',
        },
        teal: {
          DEFAULT: '#2DD4BF',
          50: '#E6FBF9',
          100: '#B3F5ED',
          200: '#80EFE1',
          300: '#4DE9D5',
          400: '#2DD4BF',
          500: '#1ABFA9',
          600: '#16A893',
          700: '#12917D',
          800: '#0E7A67',
          900: '#0A6351',
        },
        // Keep legacy names for compatibility
        solar: {
          DEFAULT: '#F4C44D',
          50: '#FEF9E8',
          100: '#FDF0C5',
          200: '#FBE59E',
          300: '#F9DA77',
          400: '#F6CF50',
          500: '#F4C44D',
          600: '#E5B03A',
          700: '#D19C28',
          800: '#BD8816',
          900: '#A97404',
        },
        suncity: {
          green: '#2DD4BF',
          'green-light': '#4DE9D5',
          'green-dark': '#1ABFA9',
        },
        // Neutral colors
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px rgba(5, 32, 61, 0.08)',
        'card-hover': '0 12px 40px rgba(5, 32, 61, 0.12)',
        'gold': '0 4px 20px rgba(244, 196, 77, 0.25)',
        'gold-lg': '0 8px 30px rgba(244, 196, 77, 0.3)',
        'orange': '0 4px 20px rgba(244, 196, 77, 0.25)', // Alias for gold
        'orange-lg': '0 8px 30px rgba(244, 196, 77, 0.3)', // Alias for gold-lg
        'navy': '0 4px 20px rgba(5, 32, 61, 0.15)',
        'teal': '0 4px 20px rgba(45, 212, 191, 0.25)',
        'premium': '0 10px 40px rgba(5, 32, 61, 0.1)',
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
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 140, 0, 0.6)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      backgroundImage: {
        'gradient-solar': 'linear-gradient(135deg, #F4C44D 0%, #E5B03A 100%)',
        'gradient-solar-hover': 'linear-gradient(135deg, #E5B03A 0%, #D19C28 100%)',
        'gradient-navy': 'linear-gradient(135deg, #05203D 0%, #041A32 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(5, 32, 61, 0.95) 0%, rgba(5, 32, 61, 0.85) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-teal': 'linear-gradient(135deg, #2DD4BF 0%, #1ABFA9 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F4C44D 0%, #E5B03A 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
