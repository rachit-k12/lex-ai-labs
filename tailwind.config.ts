import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '1.75rem', // 28px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        grotesk: ['FoundersGrotesk', 'Inter', 'system-ui', 'sans-serif'],
        twk: ['TWKEverett', 'Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        // New Premium Design System Colors
        dark: {
          DEFAULT: '#0A0F1C',
          50: '#1A2235',
          100: '#151B2C',
          200: '#121826',
          300: '#0F1420',
          400: '#0C101A',
          500: '#0A0F1C',
          600: '#080C17',
          700: '#060912',
          800: '#04060D',
          900: '#020308',
        },
        light: {
          DEFAULT: '#F5F2ED',
          50: '#FFFFFF',
          100: '#FAF9F7',
          200: '#F5F2ED',
          300: '#EBE6DE',
          400: '#E0D9CE',
          500: '#D5CCBF',
        },
        cyan: {
          DEFAULT: '#00D4AA',
          50: '#E6FFF9',
          100: '#B3FFED',
          200: '#80FFE0',
          300: '#4DFFD4',
          400: '#1AFFC7',
          500: '#00D4AA',
          600: '#00A886',
          700: '#007C63',
          800: '#005040',
          900: '#00241D',
        },
        amber: {
          DEFAULT: '#C9A962',
          50: '#FBF8F0',
          100: '#F5EDD8',
          200: '#EBD9B0',
          300: '#E1C588',
          400: '#D4B270',
          500: '#C9A962',
          600: '#B8954A',
          700: '#96783C',
          800: '#745C2E',
          900: '#524120',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Legacy colors for backward compatibility
        navy: {
          DEFAULT: '#1e3a5f',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1e3a5f',
          900: '#0d1f2d',
        },
        coral: {
          DEFAULT: '#FF7F50',
          50: '#fffbfa',
          100: '#fff5f2',
          200: '#ffe6db',
          300: '#ffcdb8',
          400: '#ffb494',
          500: '#FF7F50',
          600: '#e66a3d',
          700: '#cc552a',
          800: '#b34017',
          900: '#992b04',
        },
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          400: '#627d98',
          500: '#1e3a5f',
          600: '#334e68',
          700: '#243b53',
          900: '#0d1f2d',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#020617',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        heading: 'var(--heading)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        chart: {
          '1': 'hsl(0, 100%, 63%)',
          '2': 'hsl(270, 100%, 63%)',
          '3': 'hsl(210, 100%, 63%)',
          '4': 'hsl(195, 100%, 63%)',
          '5': 'hsl(90, 100%, 63%)',
        },
      },
      boxShadow: {
        card: '0 2px 8px rgba(15, 23, 42, 0.04), 0 12px 24px rgba(15, 23, 42, 0.04)',
        glow: '0 0 40px rgba(59, 130, 246, 0.15)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      lineHeight: {
        heading: '1.3',
      },
      keyframes: {
        // Accordion animations (existing)
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        // Fade animations
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translateX(10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },

        // Scale animations
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },
        'scale-bounce': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },

        // Slide animations
        'slide-in-up': {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          from: { opacity: '0', transform: 'translateY(-100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-out-up': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-100%)' },
        },
        'slide-out-down': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(100%)' },
        },
        'slide-out-left': {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-100%)' },
        },
        'slide-out-right': {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(100%)' },
        },

        // Loading animations
        typing: {
          '0%, 100%': { transform: 'scale(0.6)', opacity: '0.6' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        dots: {
          '0%, 20%': { color: 'transparent' },
          '50%': { color: 'currentColor' },
          '100%': { color: 'transparent' },
        },
        skeleton: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },

        // Special effects
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(56, 189, 248, 0.6)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        // Gradient animations
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },

        // Magic UI animations
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'marquee-slow': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-slow-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        shine: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        'spin-around': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
      },
      animation: {
        // Accordion animations (existing)
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        // Fade animations
        'fade-in': 'fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-out': 'fade-out 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fade-in-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-left': 'fade-in-left 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-right': 'fade-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

        // Scale animations
        'scale-in': 'scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-out': 'scale-out 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-bounce': 'scale-bounce 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)',

        // Slide animations
        'slide-in-up': 'slide-in-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-down': 'slide-in-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slide-in-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-up': 'slide-out-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-down': 'slide-out-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-left': 'slide-out-left 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-right': 'slide-out-right 0.2s cubic-bezier(0.16, 1, 0.3, 1)',

        // Loading animations
        typing: 'typing 1.4s infinite both',
        dots: 'dots 1.5s infinite linear',
        skeleton: 'skeleton 2s ease-in-out infinite',

        // Special effects
        aurora: 'aurora 60s ease infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        shake: 'shake 0.5s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',

        // Gradient animations
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 4s ease infinite',

        // Enhanced standard animations
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',

        // Magic UI animations
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration, 40s) linear infinite',
        'sm-marquee-slow': 'marquee-slow 30s linear infinite',
        'marquee-slow': 'marquee-slow 10s linear infinite',
        'marquee-slow-reverse': 'marquee-slow-reverse 30s linear infinite',
        'border-beam': 'border-beam calc(var(--duration) * 1s) infinite linear',
        shine: 'shine var(--shine-pulse-duration, 2s) linear infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        ripple: 'ripple 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
