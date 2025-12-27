'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

const capabilityBuckets = [
  {
    icon: Code2,
    title: 'Foundational Depth',
    description: 'Master the mathematics and first principles that power modern AI systems.',
  },
  {
    icon: TrendingUp,
    title: 'Applied Systems Thinking',
    description: 'Build production ML systems that scale beyond notebooks and prototypes.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic AI Thinking',
    description: 'Evaluate AI initiatives, assess feasibility, and make informed decisions.',
  },
  {
    icon: Compass,
    title: 'Public Thinking',
    description: 'Develop the ability to communicate complex AI concepts with clarity.',
  },
];

const programs = [
  {
    title: 'AI Fellowship',
    tagline: 'Engineer → Applied Scientist',
    audience: 'For Engineers & Builders',
    description:
      'A rigorous, math-first program that builds deep understanding of AI systems from the ground up. Transform your engineering skills into applied science capability.',
    duration: '16 weeks',
    href: '/individuals/ai-fellowship',
    featured: true,
  },
  {
    title: 'AI for Leaders',
    tagline: 'Lead AI with Confidence',
    audience: 'For Decision Makers',
    description:
      'Understand AI deeply enough to lead teams building it. Intuition-first approach focused on strategic thinking.',
    duration: '4-5 weeks',
    href: '/individuals/ai-for-leaders',
    featured: false,
  },
];

export default function IndividualsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bucketsRef, bucketsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programsRef, programsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-coral-100/30" />

        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 left-10 w-80 h-80 bg-coral-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <Sparkles className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">For Individuals</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Build Real <span className="italic text-coral-500">AI Capability</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
                  For engineers, leaders, and professionals who want depth, not shortcuts. We build
                  the capability that compounds across your career.
                </p>

                {/* Stats Row */}
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
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Capability Buckets Section */}
      <section ref={bucketsRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bucketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              What We Build
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-xl">
              Four Pillars of <span className="italic">AI Capability</span>
            </h2>
          </motion.div>

          {/* Staggered Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilityBuckets.map((bucket, index) => (
              <motion.div
                key={bucket.title}
                initial={{ opacity: 0, y: 20 }}
                animate={bucketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${index === 1 || index === 3 ? 'md:mt-12' : ''}`}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 hover:border-coral-200 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center group-hover:bg-coral-100 transition-colors">
                      <bucket.icon className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-neutral-900 mb-2">{bucket.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{bucket.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Dark */}
      <section ref={programsRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="programNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#programNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Choose Your Path
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Two Programs, <span className="italic">One Goal</span>
            </h2>
          </motion.div>

          {/* Program Cards */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={programsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className={program.featured ? 'lg:col-span-7' : 'lg:col-span-5'}
              >
                <Link href={program.href} className="block h-full group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-coral-500/30 hover:bg-white/10 transition-all h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-coral-500/30 text-coral-400 bg-coral-500/10">
                        {program.audience}
                      </span>
                      <span className="text-white/40 text-sm">{program.duration}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-white text-3xl lg:text-4xl mb-2">
                        {program.title}
                      </h3>
                      <p className="text-lg mb-4 text-coral-400">{program.tagline}</p>
                      <p className="text-white/50 leading-relaxed">{program.description}</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="inline-flex items-center gap-2 font-medium text-coral-400 group-hover:text-coral-300 transition-colors">
                        Explore Program
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-16 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-neutral-400 text-sm uppercase tracking-wider">Alumni working at</p>
            <div className="flex items-center gap-12 opacity-40">
              <span className="font-serif text-neutral-900 text-lg">Google</span>
              <span className="font-serif text-neutral-900 text-lg">Amazon</span>
              <span className="font-serif text-neutral-900 text-lg">Microsoft</span>
              <span className="font-serif text-neutral-900 text-lg hidden md:block">Flipkart</span>
              <span className="font-serif text-neutral-900 text-lg hidden lg:block">Uber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                Depth Over <span className="italic">Shortcuts</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-16">
                We don&apos;t sell certificates or quick wins. We build capability that compounds —
                mathematical intuition, production thinking, and strategic clarity that lasts a
                career.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { value: '500+', label: 'Engineers Trained' },
                  { value: '4.9/5', label: 'Average Rating' },
                  { value: '85%', label: 'Career Growth' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-5xl text-neutral-900 mb-2">{stat.value}</p>
                    <p className="text-neutral-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 md:py-32 relative overflow-hidden">
        {/* Coral gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-coral-100/50" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="ctaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#ctaNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
              Find Your <span className="italic">Path</span>
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re building AI systems or leading AI teams, we have a program
              designed for your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/individuals/ai-fellowship"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
              >
                Explore Fellowship
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/individuals/ai-for-leaders"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Explore Leaders Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
