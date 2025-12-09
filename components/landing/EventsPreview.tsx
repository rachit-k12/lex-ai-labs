'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, MessageCircle, Users, Layers, Calendar, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 'event-1',
    type: 'roundtable',
    title: 'Investor Roundtable',
    description: 'Weekly sessions where 5 startups pitch to active AI investors',
    frequency: 'Every Sunday',
    icon: TrendingUp,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'event-2',
    type: 'ama',
    title: 'Ask Me Anything',
    description: 'Direct Q&A with industry leaders from top AI companies',
    frequency: 'Bi-weekly',
    icon: MessageCircle,
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'event-3',
    type: 'forum',
    title: 'Founder Forums',
    description: 'Peer support sessions for AI founders to share challenges and wins',
    frequency: 'Monthly',
    icon: Users,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'event-4',
    type: 'expert',
    title: 'Expert Deep-Dives',
    description: 'Technical sessions on LLMs, agents, and production ML systems',
    frequency: 'Weekly',
    icon: Layers,
    color: 'bg-coral-50 text-coral-600',
  },
];

export default function EventsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle grainy texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="eventsNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#eventsNoise)" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 block">
            Community events
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Every Week, New <span className="italic">Opportunities</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Investor roundtables, AMAs, founder forums, and expert sessions. The community never stops moving.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${event.color}`}>
                  <event.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm text-neutral-500">{event.frequency}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">
            Members get access to all events, recordings, and exclusive community channels.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Join the community
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
