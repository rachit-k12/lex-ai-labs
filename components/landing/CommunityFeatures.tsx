'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Users, Briefcase, Coffee, Slack, Calendar } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Weekly Expert AMAs',
    description:
      'Live sessions with AI practitioners from top companies. Ask questions, get insights, and learn from real-world experience.',
    tag: 'Every Thursday',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Mastermind Groups',
    description:
      'Small group sessions with peers at similar career stages. Accountability, feedback, and deep discussions.',
    tag: '8-person groups',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Briefcase,
    title: 'Exclusive Job Board',
    description:
      'AI roles from our network of 50+ companies. Get referrals from community members working at your target companies.',
    tag: 'Members only',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Coffee,
    title: 'AI Chai Meetups',
    description:
      'Monthly in-person meetups in Bengaluru, Mumbai, and Delhi. Network, learn, and make lifelong connections.',
    tag: '3 Cities',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Slack,
    title: 'Private Community',
    description:
      'Active Slack workspace with channels for job opportunities, tech discussions, startup advice, and more.',
    tag: '24/7 Access',
    gradient: 'from-rose-500 to-red-600',
  },
  {
    icon: Calendar,
    title: 'Cohort Programs',
    description:
      'Structured learning with the AI Fellowship and AI for Leaders programs. Build skills with community support.',
    tag: 'Monthly cohorts',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function CommunityFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full mb-4 border border-slate-200">
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            More than just a community
          </h2>
          <p className="text-lg text-slate-500">
            Access a complete ecosystem designed to help you succeed in AI: from learning and
            networking to career opportunities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Tag */}
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-3">
                {feature.tag}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
