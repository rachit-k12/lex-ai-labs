/**
 * Production-ready Animation System for Veyu
 * Centralized configuration for all animations used throughout the application
 */

import { cva, type VariantProps } from 'class-variance-authority';

// Animation Timing Functions
export const EASING = {
  // Standard easing functions
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  linear: 'linear',

  // Custom cubic-bezier functions for smooth animations
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  snappy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  gentle: 'cubic-bezier(0.16, 1, 0.3, 1)',
  bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',

  // UI-specific easing
  drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
  modal: 'cubic-bezier(0.16, 1, 0.3, 1)',
  dropdown: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

// Animation Durations
export const DURATION = {
  instant: '0ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '750ms',

  // Component-specific durations
  tooltip: '150ms',
  dropdown: '200ms',
  modal: '300ms',
  page: '500ms',
} as const;

// Animation Delays
export const DELAY = {
  none: '0ms',
  short: '100ms',
  medium: '200ms',
  long: '300ms',
} as const;

// Fade Animation Variants
export const fadeVariants = cva('transition-all', {
  variants: {
    variant: {
      in: 'animate-fade-in',
      out: 'animate-fade-out',
      inUp: 'animate-fade-in-up',
      inDown: 'animate-fade-in-down',
      inLeft: 'animate-fade-in-left',
      inRight: 'animate-fade-in-right',
    },
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
      slow: 'duration-300',
      slower: 'duration-500',
    },
    delay: {
      none: 'delay-0',
      short: 'delay-100',
      medium: 'delay-200',
      long: 'delay-300',
    },
  },
  defaultVariants: {
    variant: 'in',
    duration: 'normal',
    delay: 'none',
  },
});

// Scale Animation Variants
export const scaleVariants = cva('transition-transform', {
  variants: {
    variant: {
      in: 'animate-scale-in',
      out: 'animate-scale-out',
      bounce: 'animate-scale-bounce',
      hover: 'hover:scale-105',
      press: 'active:scale-95',
    },
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
      slow: 'duration-300',
    },
    origin: {
      center: 'origin-center',
      top: 'origin-top',
      bottom: 'origin-bottom',
      left: 'origin-left',
      right: 'origin-right',
    },
  },
  defaultVariants: {
    variant: 'in',
    duration: 'normal',
    origin: 'center',
  },
});

// Slide Animation Variants
export const slideVariants = cva('transition-transform', {
  variants: {
    variant: {
      inUp: 'animate-slide-in-up',
      inDown: 'animate-slide-in-down',
      inLeft: 'animate-slide-in-left',
      inRight: 'animate-slide-in-right',
      outUp: 'animate-slide-out-up',
      outDown: 'animate-slide-out-down',
      outLeft: 'animate-slide-out-left',
      outRight: 'animate-slide-out-right',
    },
    duration: {
      fast: 'duration-150',
      normal: 'duration-200',
      slow: 'duration-300',
    },
  },
  defaultVariants: {
    variant: 'inUp',
    duration: 'normal',
  },
});

// Loading Animation Variants
export const loadingVariants = cva('', {
  variants: {
    variant: {
      spinner: 'animate-spin',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce',
      typing: 'animate-typing',
      dots: 'animate-dots',
      skeleton: 'animate-skeleton',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'md',
  },
});

// Hover Effects
export const hoverVariants = cva('transition-all duration-200', {
  variants: {
    variant: {
      lift: 'hover:shadow-lg hover:-translate-y-1',
      glow: 'hover:shadow-glow',
      scale: 'hover:scale-105',
      rotate: 'hover:rotate-3',
      tilt: 'hover:rotate-1 hover:scale-105',
      gradient:
        'hover:bg-gradient-to-r hover:from-agency-gradient-from hover:to-agency-gradient-to',
      border: 'hover:border-agency-blue',
      brightness: 'hover:brightness-110',
    },
  },
  defaultVariants: {
    variant: 'lift',
  },
});

// Button Animation Presets
export const buttonAnimations = {
  primary: `${fadeVariants()} ${scaleVariants({ variant: 'hover' })} ${hoverVariants({ variant: 'glow' })}`,
  secondary: `${fadeVariants()} ${hoverVariants({ variant: 'lift' })}`,
  ghost: `${fadeVariants()} ${hoverVariants({ variant: 'scale' })}`,
  destructive: `${fadeVariants()} ${scaleVariants({ variant: 'press' })}`,
} as const;

// Card Animation Presets
export const cardAnimations = {
  default: `${fadeVariants({ variant: 'inUp', delay: 'short' })} ${hoverVariants({ variant: 'lift' })}`,
  interactive: `${fadeVariants()} ${hoverVariants({ variant: 'tilt' })} cursor-pointer`,
  static: fadeVariants({ variant: 'in' }),
} as const;

// Modal Animation Presets
export const modalAnimations = {
  backdrop: 'animate-fade-in duration-300',
  content: 'animate-scale-in duration-300',
  drawer: 'animate-slide-in-right duration-300',
} as const;

// Animation utility functions
export const createAnimationClasses = (config: {
  type: 'fade' | 'scale' | 'slide' | 'loading' | 'hover';
  variant?: string;
  duration?: keyof typeof DURATION;
  delay?: keyof typeof DELAY;
  customClasses?: string;
}) => {
  const baseClasses: Record<string, (props: Record<string, unknown>) => string> = {
    fade: fadeVariants as (props: Record<string, unknown>) => string,
    scale: scaleVariants as (props: Record<string, unknown>) => string,
    slide: slideVariants as (props: Record<string, unknown>) => string,
    loading: loadingVariants as (props: Record<string, unknown>) => string,
    hover: hoverVariants as (props: Record<string, unknown>) => string,
  };

  const animationClass = baseClasses[config.type]({
    variant: config.variant,
    duration: config.duration,
    delay: config.delay,
  });

  return `${animationClass} ${config.customClasses || ''}`.trim();
};

// CSS custom property helpers for dynamic animations
export const createAnimationStyles = (config: {
  duration?: string;
  delay?: string;
  easing?: keyof typeof EASING;
  fillMode?: 'forwards' | 'backwards' | 'both' | 'none';
}) => {
  return {
    animationDuration: config.duration || DURATION.normal,
    animationDelay: config.delay || DELAY.none,
    animationTimingFunction: EASING[config.easing || 'gentle'],
    animationFillMode: config.fillMode || 'forwards',
  };
};

// Staggered animation utility
export const createStaggeredAnimation = (
  totalItems: number,
  baseDelay: number = 100,
  variant: 'fade' | 'slide' = 'fade'
) => {
  return Array.from({ length: totalItems }, (_, index) => ({
    className:
      variant === 'fade' ? fadeVariants({ variant: 'inUp' }) : slideVariants({ variant: 'inUp' }),
    style: {
      animationDelay: `${index * baseDelay}ms`,
    },
  }));
};

// Export types for TypeScript support
export type FadeVariants = VariantProps<typeof fadeVariants>;
export type ScaleVariants = VariantProps<typeof scaleVariants>;
export type SlideVariants = VariantProps<typeof slideVariants>;
export type LoadingVariants = VariantProps<typeof loadingVariants>;
export type HoverVariants = VariantProps<typeof hoverVariants>;

// Animation presets for common UI patterns
export const ANIMATION_PRESETS = {
  // Page transitions
  pageTransition: 'animate-fade-in duration-500 ease-gentle',

  // Navigation
  navbarSlide: 'animate-slide-in-down duration-300 ease-gentle',
  sidebarSlide: 'animate-slide-in-left duration-300 ease-gentle',

  // Forms
  formValidation: 'animate-shake duration-300',
  inputFocus: 'transition-all duration-200 ease-smooth',

  // Loading states
  skeletonPulse: 'animate-pulse duration-1000',
  spinnerRotate: 'animate-spin duration-1000 linear',

  // Notifications
  toastSlideIn: 'animate-slide-in-right duration-300 ease-gentle',
  alertFadeIn: 'animate-fade-in duration-200 ease-smooth',

  // Interactive elements
  buttonPress: 'transition-all duration-150 active:scale-95',
  cardHover: 'transition-all duration-200 hover:scale-105 hover:shadow-xl',
  linkHover: 'transition-colors duration-200 hover:text-agency-blue',
} as const;
