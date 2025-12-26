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
    description:
      'Master production AI systems with hands-on projects. Build ML models, fine-tune LLMs, and create multi-agent systems.',
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
    iconBg: 'bg-coral-50 text-coral-600',
  },
  {
    id: 'leaders',
    icon: TrendingUp,
    title: 'AI for Leaders',
    subtitle: 'For Executives Making AI Decisions',
    description:
      'Understand AI deeply enough to lead transformation. Evaluate vendors, build roadmaps, and drive AI adoption.',
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
    iconBg: 'bg-neutral-800 text-coral-400',
  },
];

export default function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" ref={ref} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-6 block">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.1] mb-6">
            Learn With The
            <span className="block text-blue-500 italic mt-1">Community</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Structured cohort programs with lifetime community access. Learn alongside peers, get
            mentorship, and build your network.
          </p>
        </motion.div>

        {/* Community Benefit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-12 px-6 py-4 bg-coral-50 rounded-2xl border border-coral-100 max-w-2xl mx-auto"
        >
          <Users className="w-5 h-5 text-coral-600" />
          <p className="text-neutral-700 font-medium text-sm md:text-base">
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
              className={`relative rounded-2xl overflow-hidden ${
                program.featured
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200'
              }`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${program.iconBg} flex items-center justify-center mb-6`}
                >
                  <program.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-serif mb-2 ${program.featured ? 'text-white' : 'text-neutral-900'}`}
                >
                  {program.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-4 ${program.featured ? 'text-neutral-400' : 'text-neutral-500'}`}
                >
                  {program.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`text-sm mb-6 leading-relaxed ${program.featured ? 'text-neutral-300' : 'text-neutral-600'}`}
                >
                  {program.description}
                </p>

                {/* Pricing */}
                <div
                  className={`pb-6 mb-6 border-b ${program.featured ? 'border-neutral-700' : 'border-neutral-100'}`}
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-bold ${program.featured ? 'text-coral-400' : 'text-neutral-900'}`}
                    >
                      ₹{program.price}
                    </span>
                    <span
                      className={`text-sm ${program.featured ? 'text-neutral-400' : 'text-neutral-500'}`}
                    >
                      + 18% GST
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-1 ${program.featured ? 'text-neutral-400' : 'text-neutral-500'}`}
                  >
                    {program.duration} program
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 shrink-0 ${program.featured ? 'text-coral-400' : 'text-coral-500'}`}
                      />
                      <span
                        className={`text-sm ${program.featured ? 'text-neutral-300' : 'text-neutral-600'}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={program.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold transition-all duration-300 group ${
                    program.featured
                      ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
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
          <p className="text-neutral-500 mb-4">Not sure which program is right for you?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Book a free consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
