'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Code, TrendingUp, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 'fellowship',
    icon: Code,
    title: 'AI Fellowship',
    subtitle: 'For Engineers Building AI Systems',
    description: 'Master production AI systems with hands-on projects. Build ML models, fine-tune LLMs, and create multi-agent systems.',
    price: '25,500',
    duration: '12 weeks',
    features: [
      'Build & Deploy ML Models',
      'Fine-tune LLMs (GPT, Llama)',
      'Create Multi-Agent Systems',
      'Weekly Code Reviews',
      '1-on-1 Mentorship Sessions',
      'Lifetime Community Access',
    ],
    cta: 'Apply Now',
    href: 'https://aiseekhegaindia.com/fellowship/',
    featured: false,
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'leaders',
    icon: TrendingUp,
    title: 'AI for Leaders',
    subtitle: 'For Executives Making AI Decisions',
    description: 'Understand AI deeply enough to lead transformation. Evaluate vendors, build roadmaps, and drive AI adoption.',
    price: '25,500',
    duration: '8 weeks',
    features: [
      'Evaluate AI Vendors & Tools',
      'Build AI Adoption Roadmaps',
      'Understand Technical Trade-offs',
      'Lead AI Transformation Teams',
      'Lifetime Community Access',
    ],
    cta: 'Apply Now',
    href: 'https://aiseekhegaindia.com/fellowship/',
    featured: true,
    iconBg: 'bg-slate-800 text-brand-400',
  },
];

export default function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4">
            Community Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Learn with the community
          </h2>
          <p className="text-lg text-slate-500">
            Structured cohort programs that come with lifetime community access. Learn alongside peers, get mentorship, and build your network.
          </p>
        </motion.div>

        {/* Community Benefit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-12 px-6 py-4 bg-brand-50 rounded-2xl border border-brand-100 max-w-2xl mx-auto"
        >
          <Users className="w-5 h-5 text-brand-600" />
          <p className="text-brand-700 font-medium text-sm md:text-base">
            Every program includes lifetime access to the AI Professional Community
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden ${
                program.featured
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200'
              }`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${program.iconBg} flex items-center justify-center mb-6`}>
                  <program.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-2 ${program.featured ? 'text-white' : 'text-slate-900'}`}>
                  {program.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${program.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  {program.subtitle}
                </p>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${program.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {program.description}
                </p>

                {/* Pricing */}
                <div className={`pb-6 mb-6 border-b ${program.featured ? 'border-slate-700' : 'border-slate-100'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${program.featured ? 'text-white' : 'text-slate-900'}`}>
                      ₹{program.price}
                    </span>
                    <span className={`text-sm ${program.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                      + 18% GST
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${program.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {program.duration} program
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 shrink-0 ${program.featured ? 'text-brand-400' : 'text-brand-600'}`} />
                      <span className={`text-sm ${program.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={program.href}
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 group ${
                    program.featured
                      ? 'bg-brand-500 text-white hover:bg-brand-400'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {program.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">Not sure which program is right for you?</p>
          <Link
            href="https://www.lexailabs.com/contact"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            Book a free consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
