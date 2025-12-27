'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  Clock,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Scale,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

const painPoints = [
  {
    icon: HelpCircle,
    title: 'Can\'t evaluate technical decisions',
    description: 'You manage AI teams but rely on engineers to explain what\'s feasible.',
  },
  {
    icon: Scale,
    title: 'Dependent on others for judgment',
    description: 'You can\'t independently assess AI project risks or ROI.',
  },
  {
    icon: Layers,
    title: 'Can\'t distinguish hype from substance',
    description: 'Every vendor claims AI magic. You need frameworks to cut through.',
  },
];

const outcomes = [
  {
    icon: CheckCircle2,
    title: 'Evaluate AI project feasibility',
    description: 'Understand what\'s possible, what\'s hard, and what\'s impossible.',
  },
  {
    icon: MessageSquare,
    title: 'Ask the right technical questions',
    description: 'Engage meaningfully with engineering teams without needing to code.',
  },
  {
    icon: Scale,
    title: 'Understand risk vs. reward',
    description: 'Make informed investment decisions about AI initiatives.',
  },
  {
    icon: Users,
    title: 'Lead technical discussions confidently',
    description: 'Participate in architecture reviews and strategy sessions.',
  },
];

const curriculum = [
  {
    week: '01',
    title: 'AI Foundations',
    subtitle: 'From buzzwords to deep clarity',
    topics: ['ML → Deep Learning → LLMs landscape', 'How models actually learn', 'What makes AI "work"'],
  },
  {
    week: '02',
    title: 'Applied AI Productivity',
    subtitle: 'Multiply your effectiveness today',
    topics: ['AI for decision-making', 'AI for communication & analysis', 'Building AI-augmented workflows'],
  },
  {
    week: '03',
    title: 'AI Agents & Automation',
    subtitle: 'The future of work is agentic',
    topics: ['What agents can & can\'t do', 'Evaluating AI vendors', 'Building vs. buying decisions'],
  },
  {
    week: '04',
    title: 'Strategic Integration',
    subtitle: 'Your custom playbook',
    topics: ['AI for your industry context', 'Team structure for AI', 'Your AI adoption roadmap'],
  },
];

export default function AIForLeadersPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [painRef, painInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [outcomesRef, outcomesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [curriculumRef, curriculumInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
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
                  <span className="text-neutral-600">AI for Leaders</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <Target className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">For Decision Makers</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Lead AI with <span className="italic text-coral-500">Confidence</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
                  For EMs, PMs, and senior ICs transitioning to leadership.
                  Intuition-first approach focused on strategic thinking, not coding.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-8 mb-10">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">4-5 Weeks</p>
                      <p className="text-neutral-500 text-sm">Duration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">2x / Week</p>
                      <p className="text-neutral-500 text-sm">Live Sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">Math-Lite</p>
                      <p className="text-neutral-500 text-sm">Intuition-Focused</p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Talk to Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* The Leadership Gap */}
      <section
        ref={painRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={painInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-2xl mx-auto">
              The Leadership Gap in <span className="italic">AI</span>
            </h2>
          </motion.div>

          {/* Pain Point Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={painInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 h-full">
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="font-serif text-neutral-900 text-lg mb-2">
                    {point.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain - Dark */}
      <section
        ref={outcomesRef}
        className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
      >
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="outcomesNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#outcomesNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              The Transformation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white max-w-xl">
              What You&apos;ll <span className="italic">Gain</span>
            </h2>
          </motion.div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 20 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <outcome.icon className="w-5 h-5 text-coral-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-lg mb-1">
                      {outcome.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section
        ref={curriculumRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                The Curriculum
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                4 Weeks of <span className="italic">Strategic Clarity</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                This isn&apos;t about learning to code. It&apos;s about developing the intuition
                to lead AI teams, evaluate opportunities, and make informed decisions.
              </p>

              <div className="bg-coral-50 border border-coral-100 rounded-2xl p-6">
                <h3 className="font-serif text-neutral-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-coral-500" />
                  Intuition-First Approach
                </h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                    Concepts explained without deep math derivations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                    Focus on mental models for decision-making
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                    Strategic frameworks, not technical implementation
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Curriculum Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {curriculum.map((week) => (
                <div
                  key={week.week}
                  className="bg-white rounded-2xl p-5 border border-neutral-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-coral-50 text-coral-600 rounded">
                      Week {week.week}
                    </span>
                    <h3 className="font-serif text-neutral-900">
                      {week.title}
                    </h3>
                  </div>
                  <p className="text-coral-500 text-sm mb-3">{week.subtitle}</p>
                  <ul className="flex flex-wrap gap-2">
                    {week.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-xs px-2 py-1 bg-neutral-50 text-neutral-600 rounded"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="testimonialNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#testimonialNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              From Leaders Like You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Confident Decisions, <span className="italic">Faster</span>
            </h2>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <blockquote className="text-2xl md:text-3xl text-white/90 font-serif leading-relaxed mb-8">
                &ldquo;I used to nod along in AI strategy meetings. Now I lead them.
                The intuition-first approach is exactly what leaders need.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center">
                  <span className="text-coral-400 font-medium">RM</span>
                </div>
                <div>
                  <p className="text-white font-medium">Rahul M.</p>
                  <p className="text-white/50 text-sm">VP of Product at a Series C Startup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Format */}
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
                Program Format
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
                Designed for <span className="italic">Busy Leaders</span>
              </h2>
            </motion.div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Schedule */}
                <div>
                  <h3 className="font-serif text-neutral-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-coral-500" />
                    Schedule
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      2 live sessions per week (90-120 min)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      1:1 brainstorming session included
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2" />
                      Async materials for flexible learning
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
                      Curated case studies from top companies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                      AI evaluation frameworks
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                      Your custom AI adoption playbook
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32 relative overflow-hidden"
      >
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
              Lead AI with <span className="italic">Confidence</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Join leaders from product, engineering, and strategy who&apos;ve transformed
              their ability to navigate AI decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Talk to Us First
              </button>
            </div>

            <p className="text-neutral-500 text-sm mt-6">
              Rolling cohorts. Join the next one starting in 2 weeks.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="ai-for-leaders"
      />
    </div>
  );
}
