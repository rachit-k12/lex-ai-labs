'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    id: 'event-1',
    title: 'Investor Roundtable',
    description:
      'Weekly pitch sessions where AI startups meet active investors. Get feedback, make connections, close rounds.',
    frequency: 'Every Sunday',
    highlight: 'Live Pitches',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 'event-2',
    title: 'Expert AMAs',
    description:
      'Unfiltered Q&A with engineers and leaders from Google, Amazon, Microsoft, and top AI startups.',
    frequency: 'Weekly',
    highlight: 'Industry Leaders',
  },
  {
    id: 'event-3',
    title: 'Founder Forums',
    description:
      'Peer circles for AI founders. Share challenges, celebrate wins, and build together.',
    frequency: 'Monthly',
    highlight: 'Peer Support',
  },
  {
    id: 'event-4',
    title: 'Technical Deep-Dives',
    description:
      'Hands-on sessions on LLMs, agents, RAG, and production ML. Build real systems, not toy projects.',
    frequency: 'Weekly',
    highlight: 'Hands-on',
  },
  {
    id: 'event-5',
    title: 'AI Chai Meetups',
    description:
      'In-person gatherings in Bengaluru, Mumbai, and Delhi. Real conversations, real connections.',
    frequency: '3 Cities',
    highlight: 'In-Person',
  },
];

export default function EventsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-950 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-coral-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-6 block">
            Exclusive Events
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1]">
            Where Builders
            <span className="text-blue-500 italic">&nbsp;Connect</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed mt-6">
            High-signal gatherings designed for people who ship, not just talk.
          </p>
        </motion.div>

        {/* Events Cards - Bento Grid Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group relative cursor-pointer ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div
                className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeCard === index
                    ? 'bg-neutral-900 border-neutral-700'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                } ${index === 0 ? 'p-8 md:p-10 min-h-[400px]' : 'p-6'}`}
              >
                {/* Background image for first card only */}
                {index === 0 && event.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${event.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/0 to-neutral-950/0" />
                  </>
                )}

                {/* Gradient glow on hover for other cards */}
                {index !== 0 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-auto">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        index === 0
                          ? 'text-white bg-white/20 backdrop-blur-sm'
                          : 'text-neutral-500 bg-neutral-800/80'
                      }`}
                    >
                      {event.frequency}
                    </span>
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: activeCard === index ? 0 : -45,
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <ArrowUpRight
                        className={`w-5 h-5 ${index === 0 ? 'text-white' : 'text-blue-500'}`}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${index === 0 ? 'mt-auto' : 'mt-8'}`}>
                    <span
                      className={`text-xs font-medium mb-2 block ${
                        index === 0 ? 'text-coral-400' : 'text-blue-500'
                      }`}
                    >
                      {event.highlight}
                    </span>
                    <h3
                      className={`font-serif text-white mb-3 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${index === 0 ? 'text-neutral-300 text-base' : 'text-neutral-400 text-sm'}`}
                    >
                      {event.description}
                    </p>
                  </div>

                  {/* Bottom indicator line */}
                  <motion.div
                    className={`h-px mt-6 origin-left ${
                      index === 0
                        ? 'bg-gradient-to-r from-coral-500 to-coral-400'
                        : 'bg-gradient-to-r from-blue-500 to-blue-400'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeCard === index ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
