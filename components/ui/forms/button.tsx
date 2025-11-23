import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'font-grotesk relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-normal leading-3 transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default:
          'bg-defaultbutton hover:bg-defaultbutton/80 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25',
        outline:
          'border border-input/20 bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent/50 hover:shadow-md',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5',
        ghost: 'hover:bg-accent hover:text-accent-foreground hover:scale-105',
        link: 'text-primary underline-offset-4 hover:underline hover:text-agency-blue transition-colors',
        info: 'bg-info/10 text-info-foreground hover:bg-info/20 hover:shadow-lg hover:shadow-info/25',
        muted: 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground',
        accent:
          'bg-accent/50 text-accent-foreground hover:bg-accent/80 hover:shadow-lg hover:-translate-y-0.5',
        icon: 'bg-transparent text-muted-foreground hover:bg-accent/50 hover:text-foreground hover:scale-110',
        transparent: 'bg-transparent text-primary hover:bg-accent/50 hover:scale-105',
        white: 'bg-white text-primary hover:bg-gray-50 hover:shadow-lg border border-border/10',
        newdropdown:
          'bg-white text-primary hover:bg-gray-50 border border-border/10 hover:shadow-md',
        gradient:
          'gradient-agency text-white hover:opacity-90 hover:shadow-xl hover:shadow-agency-blue/25 hover:-translate-y-0.5',
        'gradient-grainy':
          'gradient-grainy text-white hover:opacity-90 hover:shadow-xl hover:shadow-agency-purple/25 border border-white/10 hover:-translate-y-0.5',
        // New Aceternity-inspired variants
        glow: 'bg-background border border-agency-blue/20 text-agency-blue hover:bg-agency-blue/10 hover:border-agency-blue hover:shadow-lg hover:shadow-agency-blue/25 hover:text-agency-blue',
        neon: 'bg-transparent border border-agency-purple text-agency-purple hover:bg-agency-purple hover:text-white hover:shadow-lg hover:shadow-agency-purple/50 glow-on-hover',
        glassmorphism:
          'glass-morphism text-white border-white/20 hover:bg-white/10 hover:border-white/30',
        shimmer:
          'bg-gradient-to-r from-agency-gradient-from to-agency-gradient-to text-white relative overflow-hidden hover:shadow-xl hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
      },
      size: {
        default: 'h-10 px-6 py-2 text-sm md:h-9 md:px-4 md:py-2 text-base',
        sm: 'h-8 text-xs px-3 md:h-8 md:px-3 md:text-sm',
        lg: 'h-12 px-8 text-base md:h-14 md:px-10 md:text-lg',
        xl: 'h-14 px-10 text-lg md:h-16 md:px-12 md:text-xl',
        icon: 'h-8 w-8 md:h-9 md:w-9',
        'icon-sm': 'h-6 w-6',
        'icon-lg': 'h-10 w-10 md:h-12 md:w-12',
      },
      animation: {
        none: '',
        subtle: 'hover:scale-105',
        bounce: 'hover:animate-scale-bounce',
        glow: 'hover:animate-glow',
        float: 'hover:animate-float',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'subtle',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showGradient?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      animation,
      showGradient,
      loading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, animation, className }),
          showGradient ? 'font-twk' : '',
          loading && 'cursor-not-allowed opacity-70',
          disabled && 'cursor-not-allowed'
        )}
        style={
          showGradient
            ? {
                background: '#323232',
              }
            : undefined
        }
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
