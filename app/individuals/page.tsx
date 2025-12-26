'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code2, Sparkles, Target, User } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

const programTypes = [
  {
    icon: Code2,
    title: 'AI Fellowship',
    subtitle: 'For Engineers & Builders',
    description:
      'Transform from Engineer to Applied Scientist. A rigorous, math-first program that builds deep understanding of AI systems from the ground up.',
    href: '/individuals/ai-fellowship',
    features: [
      'Math-first foundation (Linear Algebra, Probability, Optimization)',
      'Build from scratch - no black-box learning',
      'Production ML systems & deployment',
      'Industry mentors from Google, Amazon, Microsoft',
    ],
    color: 'coral',
    duration: '16 weeks',
  },
  {
    icon: Target,
    title: 'AI for Leaders',
    subtitle: 'For Decision Makers',
    description:
      'Understand AI deeply enough to lead teams building it. Intuition-first approach focused on product-level AI thinking and strategic decision-making.',
    href: '/individuals/ai-for-leaders',
    features: [
      'Intuition-first math - concepts without deep derivations',
      'Product-level AI understanding',
      'Strategic AI evaluation (feasibility, risk, ROI)',
      'Lead AI teams with confidence',
    ],
    color: 'purple',
    duration: '4-5 weeks',
  },
];

export default function IndividualsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50/50 via-white to-purple-50/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterInd">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterInd)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
                  <User className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">For Individuals</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Build Real <span className="italic text-coral-500">AI Capability</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Whether you&apos;re an engineer becoming an Applied Scientist or a leader building
                  AI intuition, we have a path designed for your goals.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>Math-first approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>Production-focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>Industry mentors</span>
                  </div>
                </div>
              </motion.div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-coral-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Two Learning Paths</p>
                        <p className="text-sm text-neutral-500">Choose what fits your goals</p>
                      </div>
                    </div>

                    {/* Mini preview of options */}
                    <div className="space-y-3">
                      <Link
                        href="/individuals/ai-fellowship"
                        className="flex items-center gap-3 p-3 bg-coral-50/50 rounded-xl border border-coral-100 hover:bg-coral-50 transition-colors"
                      >
                        <Code2 className="w-5 h-5 text-coral-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">AI Fellowship</p>
                          <p className="text-xs text-neutral-500">For engineers who build</p>
                        </div>
                        <span className="text-xs text-coral-500">16 wks</span>
                      </Link>
                      <Link
                        href="/individuals/ai-for-leaders"
                        className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors"
                      >
                        <Target className="w-5 h-5 text-purple-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">AI for Leaders</p>
                          <p className="text-xs text-neutral-500">For decision makers</p>
                        </div>
                        <span className="text-xs text-purple-500">4-5 wks</span>
                      </Link>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">500+</p>
                        <p className="text-xs text-neutral-500">Trained</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">4.9</p>
                        <p className="text-xs text-neutral-500">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">85%</p>
                        <p className="text-xs text-neutral-500">Growth</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Program Cards */}
      <section ref={cardsRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Choose Your Path
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">
              Two Programs, <span className="italic">One Goal</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Select the program that matches your background and career objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programTypes.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={program.href} className="block group h-full">
                  <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 hover:border-neutral-300 hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 ${program.color === 'coral' ? 'bg-coral-50' : 'bg-purple-50'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <program.icon
                          className={`w-8 h-8 ${program.color === 'coral' ? 'text-coral-500' : 'text-purple-500'}`}
                        />
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${program.color === 'coral' ? 'bg-coral-50 text-coral-600' : 'bg-purple-50 text-purple-600'}`}
                        >
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-sm font-medium ${program.color === 'coral' ? 'text-coral-500' : 'text-purple-500'}`}
                    >
                      {program.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mt-1 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 mb-6">{program.description}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-neutral-600"
                        >
                          <Sparkles
                            className={`w-4 h-4 ${program.color === 'coral' ? 'text-coral-400' : 'text-purple-400'} flex-shrink-0 mt-0.5`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`inline-flex items-center gap-2 font-medium ${program.color === 'coral' ? 'text-coral-500 group-hover:text-coral-600' : 'text-purple-500 group-hover:text-purple-600'} transition-colors`}
                    >
                      Explore Program
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
              Depth Over <span className="italic">Shortcuts</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              We don&apos;t sell certificates or quick wins. We build capability that compounds
              &mdash; mathematical intuition, production thinking, and strategic clarity that lasts
              a career.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { value: '500+', label: 'Engineers Trained' },
                { value: '4.9/5', label: 'Avg. Rating' },
                { value: '85%', label: 'Career Growth' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-serif text-neutral-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
