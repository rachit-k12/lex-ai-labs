'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Braces,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Lightbulb,
  Sigma,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CurriculumDownloadModal from '@/components/landing/CurriculumDownloadModal';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';
import Testimonials from '@/components/landing/Testimonials';

const pillars = [
  {
    icon: Sigma,
    title: 'Math-First',
    description:
      'Linear algebra, probability, and optimization form the bedrock. You understand why, not just how.',
  },
  {
    icon: Braces,
    title: 'Code-Backed',
    description:
      'Every concept is implemented from scratch. No hiding behind libraries until you understand the internals.',
  },
  {
    icon: Lightbulb,
    title: 'No Black-Box',
    description:
      'We open every layer. Transformers, attention, backprop — you build them, you own them.',
  },
];

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Core ML',
    description:
      'Build the mathematical intuition and implement classical ML algorithms from scratch.',
    topics: [
      'Linear Algebra & Matrix Operations',
      'Probability & Statistics',
      'Optimization Theory',
      'Supervised Learning from Scratch',
      'Neural Networks Fundamentals',
      'Backpropagation Deep Dive',
    ],
    color: 'from-violet-500 to-purple-600',
  },
  {
    phase: 'Phase 2',
    title: 'Deep Learning',
    description: 'Master neural architectures and understand what makes modern AI systems work.',
    topics: [
      'CNNs & Computer Vision',
      'Sequence Models & RNNs',
      'Attention Mechanisms',
      'Transformer Architecture',
      'Training at Scale',
      'Model Optimization',
    ],
    color: 'from-coral-500 to-orange-500',
  },
  {
    phase: 'Phase 3',
    title: 'Modern AI',
    description: 'Apply cutting-edge techniques and build production-ready AI systems.',
    topics: [
      'Large Language Models',
      'Generative AI & Diffusion',
      'MLOps & Deployment',
      'System Design for ML',
      'Capstone Project',
      'Career Preparation',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
];

const personas = [
  {
    title: 'Software Engineers',
    description: 'Backend or full-stack developers who want ML depth beyond API calls.',
  },
  {
    title: 'Data Scientists',
    description: 'Seeking first-principles understanding of the models you use daily.',
  },
  {
    title: 'MLEs Wanting Research Depth',
    description: 'Production experience but want to think like researchers.',
  },
];

const antiPersonas = [
  'Those seeking quick certifications',
  'Looking for no-code AI solutions',
  'Unable to commit 20+ hours/week',
];

export default function AIFellowshipPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [curriculumRef, curriculumInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [personasRef, personasInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCurriculumModalOpen, setIsCurriculumModalOpen] = useState(false);

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
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
                  <Link href="/individuals" className="hover:text-neutral-600 transition-colors">
                    Individuals
                  </Link>
                  <span>/</span>
                  <span className="text-neutral-600">AI Fellowship</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <Code2 className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Engineers & Builders
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Engineer <span className="italic text-coral-500">→</span> Applied Scientist
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
                  A rigorous, math-first program that builds deep understanding of AI systems from
                  the ground up. No shortcuts. No black boxes.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-8 mb-10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">16 Weeks</p>
                      <p className="text-neutral-500 text-sm">Duration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">Rolling Cohorts</p>
                      <p className="text-neutral-500 text-sm">Ongoing Admissions</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsCurriculumModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    View Curriculum
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* What Makes It Different */}
      <section ref={pillarsRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              What Makes It Different
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-2xl mx-auto">
              Three Pillars of <span className="italic">Deep Learning</span>
            </h2>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 hover:border-coral-200 hover:shadow-lg transition-all h-full text-center group">
                  <div className="w-14 h-14 bg-coral-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-coral-100 transition-colors">
                    <pillar.icon className="w-7 h-7 text-coral-500" />
                  </div>
                  <h3 className="font-serif text-xl text-neutral-900 mb-3">{pillar.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section - Dark */}
      <section
        ref={curriculumRef}
        className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
      >
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="curriculumNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#curriculumNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              The Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl mx-auto">
              Three Phases to <span className="italic">Mastery</span>
            </h2>
          </motion.div>

          {/* Phases */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="group"
              >
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 h-full hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                  {/* Phase indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r ${phase.color} text-white`}
                    >
                      {phase.phase}
                    </span>
                    <span className="text-white/20 font-serif text-3xl">0{index + 1}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-white text-2xl mb-3">{phase.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{phase.description}</p>

                  {/* Topics */}
                  <div className="space-y-2.5">
                    {phase.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 text-white/60 text-sm group-hover:text-white/70 transition-colors"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} flex-shrink-0`}
                        />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={curriculumInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="flex items-center gap-2">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="flex items-center gap-2">
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${phase.color}`} />
                  {index < phases.length - 1 && <div className="w-4 h-px bg-white/20" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section ref={personasRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Target Personas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={personasInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Who This Is For
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                Built for <span className="italic">Serious Engineers</span>
              </h2>

              <div className="space-y-4">
                {personas.map((persona, index) => (
                  <motion.div
                    key={persona.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={personasInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-white rounded-2xl p-5 border border-neutral-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-neutral-900 mb-1">{persona.title}</h3>
                      <p className="text-neutral-600 text-sm">{persona.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Anti-Personas & Prerequisites */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={personasInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Not For */}
              <div className="bg-neutral-50 rounded-2xl p-6 mb-6">
                <h3 className="font-medium text-neutral-500 text-sm uppercase tracking-wider mb-4">
                  Not the right fit if you&apos;re...
                </h3>
                <ul className="space-y-2">
                  {antiPersonas.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-neutral-500 text-sm">
                      <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-serif text-neutral-900 mb-4">Prerequisites</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium px-2 py-1 bg-coral-50 text-coral-600 rounded">
                      Required
                    </span>
                    <p className="text-neutral-600 text-sm">
                      Comfortable with Python or another programming language
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium px-2 py-1 bg-coral-50 text-coral-600 rounded">
                      Required
                    </span>
                    <p className="text-neutral-600 text-sm">
                      High school level algebra and basic statistics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium px-2 py-1 bg-neutral-100 text-neutral-500 rounded">
                      Not Needed
                    </span>
                    <p className="text-neutral-600 text-sm">
                      Prior ML experience — we start from fundamentals
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Investment Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Investment
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                Your <span className="italic">Commitment</span>
              </h2>
            </motion.div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Time */}
                <div>
                  <h3 className="font-serif text-neutral-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-coral-500" />
                    Time Investment
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      20+ hours per week for 16 weeks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      Live weekend sessions (4-5 hours)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      Weekly assignments and reviews
                    </li>
                  </ul>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="font-serif text-neutral-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-coral-500" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                      1:1 mentorship from FAANG engineers
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />3
                      production-ready projects
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                      Career support and interview prep
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                      Lifetime alumni network access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
                <p className="text-neutral-500 text-sm">
                  Full refund available within the first 2 weeks if the program isn&apos;t right for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
              Ready to <span className="italic">Transform?</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              The application takes 10 minutes. We review every application personally and respond
              within 48 hours.
            </p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <span className="text-neutral-600">Apply online</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-neutral-200" />
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <span className="text-neutral-600">Brief interview</span>
              </div>
              <div className="hidden md:block w-8 h-px bg-neutral-200" />
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <span className="text-neutral-600">Start building</span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
            >
              Apply for AI Fellowship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <p className="text-neutral-500 text-sm mt-6">
              Rolling admissions. Apply now to secure your spot.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="ai-fellowship"
      />

      <CurriculumDownloadModal
        isOpen={isCurriculumModalOpen}
        onClose={() => setIsCurriculumModalOpen(false)}
        programName="AI Fellowship"
        redirectUrl="https://lexailabs.com/curriculum"
      />
    </div>
  );
}
