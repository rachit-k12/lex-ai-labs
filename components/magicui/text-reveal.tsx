'use client';

import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Use a spring for much smoother progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  });

  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string');
  }

  const words = children.split(' ');

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[100vh]', className)}>
      <div
        className={
          'sticky top-0 mx-auto flex h-auto max-w-5xl items-center bg-transparent px-4 py-12'
        }
      >
        <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-800 font-normal">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={smoothProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Transform from dim (0.4) to full opacity (1) for better readability
  const rawOpacity = useTransform(progress, range, [0.4, 1]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  return (
    <motion.span style={{ opacity }} className="inline-block mx-[0.15em]">
      {children}
    </motion.span>
  );
};
