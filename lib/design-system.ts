// Modern Design System - Clean, Professional, Non-gradient
export const designSystem = {
  colors: {
    // Primary palette - Sophisticated dark theme with accent colors
    primary: {
      dark: '#0a0a0a',
      darker: '#050505',
      light: '#1a1a1a',
      lighter: '#2a2a2a',
    },
    // Accent colors - Inspired by Jasper's palette
    accent: {
      green: '#4ade80',
      lightGreen: '#bbf7d0',
      pink: '#f9a8d4',
      lightPink: '#fce7f3',
      yellow: '#fde047',
      lightYellow: '#fef3c7',
      blue: '#60a5fa',
      lightBlue: '#dbeafe',
      purple: '#c084fc',
      lightPurple: '#e9d5ff',
      orange: '#fb923c',
      lightOrange: '#fed7aa',
      red: '#f87171',
      lightRed: '#fecaca',
    },
    // Neutral palette
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    // Background colors
    background: {
      white: '#ffffff',
      light: '#fafafa',
      gray: '#f5f5f5',
      dark: '#0a0a0a',
      darker: '#050505',
    },
  },

  typography: {
    fonts: {
      heading: "'TWKEverett', 'Inter', system-ui, -apple-system, sans-serif",
      body: "'FoundersGrotesk', 'Inter', system-ui, -apple-system, sans-serif",
      mono: "'JetBrains Mono', 'SF Mono', monospace",
    },

    sizes: {
      // Mobile sizes
      mobile: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px
        '6xl': '3.5rem', // 56px
      },
      // Desktop sizes
      desktop: {
        xs: '0.875rem', // 14px
        sm: '1rem', // 16px
        base: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '2rem', // 32px
        '3xl': '2.5rem', // 40px
        '4xl': '3.5rem', // 56px
        '5xl': '4.5rem', // 72px
        '6xl': '5.5rem', // 88px
        '7xl': '6rem', // 96px
        '8xl': '7rem', // 112px
      },
    },

    lineHeights: {
      tight: '1.05',
      snug: '1.2',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    weights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },

  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
    '3xl': '6rem', // 96px
    '4xl': '8rem', // 128px
    '5xl': '12rem', // 192px
    '6xl': '16rem', // 256px
  },

  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },

  animation: {
    duration: {
      instant: '75ms',
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms',
      slowest: '750ms',
    },

    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  effects: {
    shadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 2px 8px -1px rgba(0, 0, 0, 0.1)',
      md: '0 4px 12px -2px rgba(0, 0, 0, 0.1)',
      lg: '0 8px 24px -4px rgba(0, 0, 0, 0.1)',
      xl: '0 16px 32px -8px rgba(0, 0, 0, 0.15)',
      '2xl': '0 24px 48px -12px rgba(0, 0, 0, 0.2)',
      '3xl': '0 32px 64px -16px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },

    blur: {
      xs: '2px',
      sm: '4px',
      base: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
  },

  radius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    '4xl': '2rem', // 32px
    full: '9999px',
  },
};
