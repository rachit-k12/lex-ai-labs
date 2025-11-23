'use client';
import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const isMobile = useIsMobile();
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const backgroundColors = [
    '#18181b', // zinc-900 (very dark gray)
    '#232323', // dark gray
    '#111111', // almost black
    '#262626', // neutral-800
    '#1a1a1a', // deep gray
  ];

  // Simple vertical layout for mobile
  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 w-full px-4 py-8">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}
            className="flex flex-col items-center justify-center gap-3 rounded-3xl p-4 pb-0 w-full"
          >
            <div className="w-full text-center">
              <p className="mb-3 text-base text-white/80">(Step {index + 1})</p>
              <h2 className="font-twk text-3xl font-bold leading-relaxed text-white">
                {item.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90">
                {item.description}
              </p>
            </div>
            <div
              className={cn(
                'flex h-[240px] w-full max-w-[350px] items-center justify-center overflow-hidden rounded-lg bg-transparent',
                contentClassName
              )}
            >
              {item.content ?? null}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Sticky scroll for desktop
  return (
    <div ref={ref} className="relative w-full" style={{ height: `${content.length * 100}vh` }}>
      {content.map((item, index) => {
        const targetScale = 1 - (content.length - index) * 0.05;
        const start = index / content.length;
        const end = (index + 1) / content.length;

        return (
          <Card
            key={item.title + index}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[start, end]}
            targetScale={targetScale}
            backgroundColor={backgroundColors[index % backgroundColors.length]}
            contentClassName={contentClassName}
            totalCards={content.length}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  item,
  index,
  progress,
  range,
  targetScale,
  backgroundColor,
  contentClassName,
  totalCards,
}: {
  item: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  };
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
  backgroundColor: string;
  contentClassName?: string;
  totalCards: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scale animation: starts at 1, ends at targetScale when next card comes
  const scaleRaw = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(scaleRaw, {
    stiffness: 300,
    damping: 40,
    mass: 0.5,
    restSpeed: 0.001,
  });

  // Opacity logic - first card always visible, others fade in and stay visible underneath
  const opacityRaw = useTransform(
    progress,
    index === 0 ? [0, range[0], range[1]] : [range[0] - 0.05, range[0], range[1]],
    index === 0 ? [1, 1, 1] : [0, 1, 1]
  );
  const opacity = useSpring(opacityRaw, {
    stiffness: 400,
    damping: 50,
    mass: 0.3,
    restSpeed: 0.001,
  });

  // Content opacity - fade out content of cards underneath to prevent text bleed-through
  // First card is always visible from the start
  const contentOpacityRaw = useTransform(
    progress,
    index === 0
      ? [0, range[0], range[1] - 0.05, range[1]]
      : [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    index === 0 ? [1, 1, 1, 0.7] : [0, 1, 1, 0.7]
  );
  const contentOpacity = useSpring(contentOpacityRaw, {
    stiffness: 400,
    damping: 50,
    mass: 0.3,
    restSpeed: 0.001,
  });

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor,
        scale,
        opacity,
        top: 32,
      }}
      className="sticky top-0 flex h-screen w-full origin-top items-center justify-center rounded-3xl"
    >
      <motion.div
        style={{ opacity: contentOpacity }}
        className="flex h-auto w-full flex-col items-center justify-center gap-8 px-6 py-8 md:flex-row md:justify-center md:gap-12 md:px-12 md:py-0 lg:gap-16 lg:px-16 xl:gap-20 xl:px-20"
      >
        <div className="relative flex w-full flex-1 items-center justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <div className="w-full text-center lg:text-left">
            <p className="mb-3 text-sm font-medium text-white/60 md:mb-4 md:text-sm lg:text-base">
              (Step {index + 1})
            </p>
            <h2 className="font-twk text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              {item.title}
            </h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-white/90 md:mt-6 md:text-lg lg:mx-0 lg:mt-8 lg:text-xl xl:text-2xl">
              {item.description}
            </p>
          </div>
        </div>
        <div
          className={cn(
            'flex w-full flex-1 flex-shrink-0 h-[320px] max-w-md items-center justify-center overflow-hidden rounded-lg bg-transparent lg:h-[450px] lg:max-w-lg xl:h-[550px] xl:max-w-2xl',
            contentClassName
          )}
        >
          {item.content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};
