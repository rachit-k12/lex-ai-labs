'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  Lightbulb,
  MessageSquare,
  Target,
  Video,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

export default function AIForLeadersPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programRef, programInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [curriculumRef, curriculumInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [outcomesRef, outcomesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterLeaders">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterLeaders)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

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
                  <span className="text-neutral-900">AI for Leaders</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-8">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">For Decision Makers</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Strategic AI Mastery for{' '}
                  <span className="italic text-purple-500">Visionary Leaders</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Not a tools-demo course. This is a strategic AI program for leaders who want to
                  understand AI deeply, apply it effectively, and integrate it pervasively.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>4-5 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-purple-500" />
                    <span>2 sessions/week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>90-120 min/session</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-all shadow-lg"
                >
                  Enroll Now
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
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">AI for Leaders</p>
                        <p className="text-sm text-neutral-500">Strategic AI mastery</p>
                      </div>
                    </div>

                    {/* Program highlights */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                        <Brain className="w-5 h-5 text-purple-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Intuition-First Math
                          </p>
                          <p className="text-xs text-neutral-500">
                            Concepts without deep derivations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Zap className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">Product-Level AI</p>
                          <p className="text-xs text-neutral-500">Strategic evaluation & ROI</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">4-5</p>
                        <p className="text-xs text-neutral-500">Weeks</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">2x</p>
                        <p className="text-xs text-neutral-500">Per Week</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">1:1</p>
                        <p className="text-xs text-neutral-500">Brainstorm</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Quote block */}
      <section className="py-16 bg-purple-50/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-purple-600 uppercase tracking-wider mb-6">
            For Visionary Leaders
          </p>
          <blockquote className="text-2xl md:text-3xl font-serif text-neutral-800 italic leading-relaxed">
            &ldquo;This is not about becoming a coder. It&apos;s about developing the intuition to
            lead AI teams, evaluate AI opportunities, and make informed strategic decisions.&rdquo;
          </blockquote>
          <div className="mt-6 w-16 h-1 bg-purple-500 mx-auto rounded-full" />
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
                Visionary leaders ready to master <span className="italic">AI strategy</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Briefcase,
                    title: 'C-Suite Executives',
                    desc: 'CEOs, CTOs, VPs who need to understand AI beyond surface-level tools. Develop a deep strategic framework for AI implementation.',
                  },
                  {
                    icon: Layers,
                    title: 'Product & Engineering Leaders',
                    desc: 'Directors and VPs who need to go beyond AI tool demos. Architect AI-driven product strategies and build teams that execute.',
                  },
                  {
                    icon: Lightbulb,
                    title: 'Innovation Managers',
                    desc: 'Responsible for driving digital transformation and AI adoption. Strategic frameworks for evaluating AI opportunities.',
                  },
                ].map((persona, index) => (
                  <motion.div
                    key={persona.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={programInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <persona.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{persona.title}</h3>
                      <p className="text-sm text-neutral-600">{persona.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Comparison Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* What it's NOT */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">Not This</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Surface-level tool demonstrations</li>
                  <li>• One-size-fits-all generic content</li>
                  <li>• Learning tools without strategy</li>
                </ul>
              </div>

              {/* What it IS */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-500 font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900">Strategic AI Mastery</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Deep AI understanding & principles</li>
                  <li>• Strategic implementation frameworks</li>
                  <li>• Organizational integration playbook</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum - Split Layout */}
      <section ref={curriculumRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Curriculum Modules */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg className="w-full h-full">
                  <filter id="currNoise">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.8"
                      numOctaves="4"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#currNoise)" opacity="0.4" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-6">4-Week Curriculum</h3>
                <div className="space-y-4">
                  {[
                    {
                      week: '01',
                      title: 'Foundations & Design Thinking',
                      subtitle: 'From buzzwords to deep clarity',
                      topics: [
                        'AI Landscape: ML → Deep Learning → LLMs',
                        'Design case studies: NNs, CNNs, Transformers',
                      ],
                    },
                    {
                      week: '02',
                      title: 'Applicative Engineering',
                      subtitle: 'Multiply productivity today',
                      topics: [
                        'AI for writing, presentations, content',
                        'AI for decision-making and data analysis',
                      ],
                    },
                    {
                      week: '03',
                      title: 'AI Agents & Automation',
                      subtitle: 'The future of work is agents',
                      topics: [
                        'What are AI Agents? Autonomous workflows',
                        'Research agents, coding copilots',
                      ],
                    },
                    {
                      week: '04',
                      title: 'Industry-Specific Integration',
                      subtitle: 'Bespoke strategy for your context',
                      topics: [
                        'Mapping AI to Critical User Journeys',
                        'Building your AI adoption playbook',
                      ],
                    },
                  ].map((week) => (
                    <div
                      key={week.week}
                      className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-full">
                          Week {week.week}
                        </span>
                        <h4 className="font-medium text-white">{week.title}</h4>
                      </div>
                      <p className="text-xs text-purple-300 mb-2">{week.subtitle}</p>
                      <ul className="space-y-1">
                        {week.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-xs text-neutral-400"
                          >
                            <ChevronRight className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Curriculum
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                4 weeks of strategic <span className="italic">AI mastery</span>
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Each session builds on the last, taking you from AI fundamentals to developing your
                own organizational AI adoption playbook.
              </p>

              {/* Program Format */}
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Program Format</h3>
                <div className="space-y-3">
                  {[
                    { icon: Video, text: '2 live sessions per week (90-120 min each)' },
                    { icon: MessageSquare, text: '1:1 brainstorming session included' },
                    { icon: BookOpen, text: 'Curated reading materials and case studies' },
                    { icon: Zap, text: 'Hands-on exercises with AI tools' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-purple-500" />
                      <span className="text-neutral-700 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Outcomes - Split Layout */}
      <section ref={outcomesRef} className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Key Outcomes
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4">
              What you&apos;ll achieve <span className="italic">by the end</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: 'Deep AI Understanding',
                desc: 'Understand how AI systems are designed & work at a conceptual level',
              },
              {
                icon: Zap,
                title: 'Productivity Mastery',
                desc: 'Apply AI tools for maximum productivity in leadership work',
              },
              {
                icon: BookOpen,
                title: 'Custom Playbook',
                desc: 'Have a custom AI adoption playbook for your industry & product',
              },
            ].map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 20 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 border border-neutral-200 text-center"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <outcome.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">{outcome.title}</h4>
                <p className="text-neutral-600">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="leadersCtaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#leadersCtaNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Ready to Master <span className="italic">AI Strategy?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
                Join our strategic AI mastery program and transform how you lead in the AI era.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-purple-500 text-white text-lg font-medium rounded-full hover:bg-purple-600 transition-all shadow-xl"
                >
                  Enroll Now
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
              <p className="text-sm text-white/50 mt-6">Rolling cohorts every month</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Target className="w-16 h-16 text-white/70" />
                  </div>
                </div>
                <div className="absolute top-8 left-12 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
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

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source="ai-for-leaders" />
    </div>
  );
}
