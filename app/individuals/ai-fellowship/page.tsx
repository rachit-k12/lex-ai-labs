'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  MessageSquare,
  Rocket,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

export default function AIFellowshipPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programRef, programInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [outcomesRef, outcomesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-coral-100/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterFellowship">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterFellowship)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

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
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
                  <Link href="/individuals" className="hover:text-neutral-900 transition-colors">
                    Individuals
                  </Link>
                  <span>/</span>
                  <span className="text-neutral-900">AI Fellowship</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-100 rounded-full mb-8">
                  <Code2 className="w-4 h-4 text-coral-600" />
                  <span className="text-sm font-medium text-coral-700">
                    For Engineers & Builders
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Build serious AI skills in <span className="italic text-coral-500">16 weeks</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Transform from coding basics to deploying production-ready AI applications. This
                  is for YOU if you&apos;re ready to break into the AI engineering career.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-coral-500" />
                    <span>16 weeks intensive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-coral-500" />
                    <span>Live weekend sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-coral-500" />
                    <span>1:1 mentorship</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-coral-500 rounded-full hover:bg-coral-600 transition-all shadow-lg"
                >
                  Apply for Fellowship
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
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
                        <p className="font-semibold text-neutral-900">AI Fellowship</p>
                        <p className="text-sm text-neutral-500">Engineer to Applied Scientist</p>
                      </div>
                    </div>

                    {/* Program highlights */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-coral-50/50 rounded-xl border border-coral-100">
                        <Code2 className="w-5 h-5 text-coral-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Math-First Foundation
                          </p>
                          <p className="text-xs text-neutral-500">
                            Linear Algebra, Probability, Optimization
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Rocket className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Production ML Systems
                          </p>
                          <p className="text-xs text-neutral-500">
                            Deploy 3 working AI applications
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">16</p>
                        <p className="text-xs text-neutral-500">Weeks</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">20+</p>
                        <p className="text-xs text-neutral-500">Hrs/Week</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">500+</p>
                        <p className="text-xs text-neutral-500">Alumni</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Who This Is For - Quote block */}
      <section className="py-16 bg-coral-50/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-coral-600 uppercase tracking-wider mb-6">
            For Ambitious Professionals
          </p>
          <blockquote className="text-2xl md:text-3xl font-serif text-neutral-800 italic leading-relaxed">
            &ldquo;We don&apos;t sell certificates. We build capability that compounds &mdash;
            mathematical intuition, production thinking, and strategic clarity that lasts a
            career.&rdquo;
          </blockquote>
          <div className="mt-6 w-16 h-1 bg-coral-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Who This Is For - Split Layout */}
      <section ref={programRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Who This Is For
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                Targeted for <span className="italic">ambitious professionals</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Code2,
                    title: 'Software Engineers',
                    desc: "Backend developers, QA engineers, or full-stack developers who've solved 100+ coding problems. Ready to move beyond CRUD apps and build intelligent systems.",
                  },
                  {
                    icon: TrendingUp,
                    title: 'Data Analysts',
                    desc: 'Tired of just creating dashboards. Want to build predictive models, understand the math behind ML algorithms, and create AI systems.',
                  },
                  {
                    icon: Rocket,
                    title: 'Career Changers',
                    desc: 'Solid engineering background and passionate about AI. Ready to invest 16 weeks of intense learning to unlock a future-proof career.',
                  },
                ].map((persona, index) => (
                  <motion.div
                    key={persona.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={programInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <persona.icon className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{persona.title}</h3>
                      <p className="text-sm text-neutral-600">{persona.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Dark Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg className="w-full h-full">
                  <filter id="problemNoise">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.8"
                      numOctaves="4"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#problemNoise)" opacity="0.4" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-6">Problems We Solve</h3>
                <div className="space-y-4">
                  {[
                    {
                      problem: 'Lack of Hands-on AI Exposure',
                      solution:
                        'Real datasets, actual ML models to build, and production deployment experience. Deploy 3 working AI applications.',
                    },
                    {
                      problem: 'Career Transition Uncertainty',
                      solution:
                        'Proven path with 1:1 mentorship, industry connections, and a portfolio that impresses hiring managers at top tech companies.',
                    },
                  ].map((item) => (
                    <div
                      key={item.problem}
                      className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                    >
                      <h4 className="font-medium text-white mb-2">{item.problem}</h4>
                      <p className="text-sm text-neutral-400">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Achieve - Split Layout */}
      <section ref={outcomesRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Dark Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <svg className="w-full h-full">
                      <filter id="outcomeNoise">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.8"
                          numOctaves="4"
                          stitchTiles="stitch"
                        />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#outcomeNoise)" opacity="0.4" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-coral-500/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-coral-400" />
                      </div>
                      <span className="text-white/80 font-medium">Career Transformation</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <p className="text-3xl font-serif text-white">40-60%</p>
                        <p className="text-xs text-neutral-400 mt-1">Salary Increase</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                        <p className="text-3xl font-serif text-white">6 mo</p>
                        <p className="text-xs text-neutral-400 mt-1">Avg. Transition</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-coral-400" />
                        <span className="text-white text-sm">ML Engineering roles at top tech</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-coral-400" />
                        <span className="text-white text-sm">Exclusive AI job opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral-500/10 rounded-xl -z-10" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                What You&apos;ll Achieve
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                Measurable <span className="italic">outcomes</span>
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Not just learning, but tangible results that transform your career and open doors at
                top tech companies.
              </p>

              {/* Technical Mastery list */}
              <div className="space-y-4">
                <h3 className="font-semibold text-neutral-900">Technical Mastery</h3>
                {[
                  'Deploy production-ready AI platforms',
                  'Build 3 industry-standard ML projects for your portfolio',
                  'Master modern AI frameworks (TensorFlow, PyTorch, Hugging Face)',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-neutral-900">Master Industry-Standard Tools</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                category: 'ML & AI',
                tools: ['TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn'],
              },
              { category: 'Cloud', tools: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
              { category: 'Languages', tools: ['Python', 'SQL', 'NumPy', 'Pandas'] },
              { category: 'Dev Tools', tools: ['Git', 'MLflow', 'Weights & Biases', 'FastAPI'] },
            ].map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-xl p-4 border border-neutral-200"
              >
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details - Two Column */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How it works */}
            <div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Program Structure
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4 mb-6">
                How It <span className="italic">Works</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                A rigorous, math-first program that builds deep understanding of AI systems from the
                ground up.
              </p>

              <ul className="space-y-3">
                {[
                  'Live weekend sessions with industry mentors',
                  'Math-first foundation (Linear Algebra, Probability, Optimization)',
                  'Build from scratch - no black-box learning',
                  'Weekly assignments and project reviews',
                  '1:1 mentorship from Google, Amazon, Microsoft engineers',
                  '20+ hours/week commitment expected',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-neutral-50 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Prerequisites</h3>
              <div className="space-y-4">
                {[
                  {
                    req: 'Coding Experience',
                    desc: 'Comfortable with at least one programming language (Python preferred)',
                    level: 'Required',
                  },
                  {
                    req: 'Basic Math',
                    desc: 'High school level algebra and statistics',
                    level: 'Required',
                  },
                  {
                    req: 'Time Commitment',
                    desc: '20+ hours per week for 16 weeks',
                    level: 'Required',
                  },
                  {
                    req: 'ML Background',
                    desc: 'Prior ML experience not required - we start from fundamentals',
                    level: 'Not Required',
                  },
                ].map((item) => (
                  <div
                    key={item.req}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200"
                  >
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ${
                        item.level === 'Required'
                          ? 'bg-coral-100 text-coral-600'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {item.level}
                    </span>
                    <div>
                      <p className="font-medium text-neutral-900">{item.req}</p>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="fellowshipCtaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#fellowshipCtaNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Ready to Build <span className="italic">Serious AI Skills?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
                Join our next cohort and start your AI engineering journey. Limited to 25 students
                per cohort.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-coral-500 text-white text-lg font-medium rounded-full hover:bg-coral-600 transition-all shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white border border-white/30 rounded-full hover:border-white/50 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Talk to Us
                </button>
              </div>
              <p className="text-sm text-white/50 mt-6">Next cohort starts in 2 weeks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-coral-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Brain className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                <div className="absolute top-8 left-12 w-4 h-4 bg-coral-400 rounded-full animate-pulse" />
                <div
                  className="absolute top-20 right-8 w-3 h-3 bg-white/60 rounded-full animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                />
                <div
                  className="absolute bottom-16 left-8 w-2 h-2 bg-white/40 rounded-full animate-pulse"
                  style={{ animationDelay: '0.6s' }}
                />
                <div className="absolute inset-0 border border-white/10 rounded-full" />
                <div className="absolute inset-8 border border-white/5 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source="ai-fellowship" />
    </div>
  );
}
