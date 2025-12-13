'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, Network, Users, Briefcase, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Premium AI Curriculum',
    description: 'Access AI Fellowship and AI for Leaders programs with lectures, notes, and templates.',
  },
  {
    icon: Users,
    title: 'Elite Private Community',
    description: 'Join a curated group of ambitious engineers, founders, and AI practitioners.',
  },
  {
    icon: MessageSquare,
    title: '1:1 Mentorship',
    description: 'Get direct guidance from industry leaders at Google, Microsoft, and top startups.',
  },
  {
    icon: Calendar,
    title: 'Weekly Events',
    description: 'Investor roundtables, founder forums, expert deep-dives, and AMAs.',
  },
  {
    icon: Network,
    title: 'Career Opportunities',
    description: 'Exclusive access to AI roles, collaborations, and investor connections.',
  },
  {
    icon: Briefcase,
    title: 'In-Person Workshops',
    description: 'Private events and hands-on workshops with top AI practitioners.',
  },
];

export default function WhatYouGet() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 block">
            What you get
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-5">
            More Than Just
            <br />
            <span className="italic">A Community</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to accelerate your AI journey and transform your career.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-100 transition-colors">
                <benefit.icon className="w-6 h-6 text-coral-500" />
              </div>
              <h3 className="font-semibold text-neutral-900 text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-neutral-400 mt-1">Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
              <p className="text-sm text-neutral-400 mt-1">Tier-1 Mentors</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">8+</p>
              <p className="text-sm text-neutral-400 mt-1">Countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
