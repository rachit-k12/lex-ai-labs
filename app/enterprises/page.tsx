'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

// Capability Pillars
const capabilityPillars = [
  {
    icon: GraduationCap,
    title: 'Enterprise AI Training',
    description:
      'Math-first, production-focused training programs for engineering teams at all levels.',
    color: 'coral',
  },
  {
    icon: Users,
    title: 'AI / ML Hiring & Staffing',
    description:
      'Hiring rubrics, interview frameworks, and question banks that identify real AI capability.',
    color: 'blue',
  },
  {
    icon: Bot,
    title: 'Agentic AI Automation',
    description:
      'Design and implement AI agents that automate complex workflows with human oversight.',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'AI Adoption Strategy',
    description: 'Long-term roadmaps for building internal AI capability, not just tool adoption.',
    color: 'coral',
  },
];

export default function EnterprisesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-coral-50/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterEnt">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterEnt)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

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
                  <Building2 className="w-4 h-4 text-neutral-700" />
                  <span className="text-sm font-medium text-neutral-700">For Organizations</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Build AI Capability
                  <br />
                  <span className="italic text-coral-500">Inside Your Org</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  We help companies move from AI curiosity to AI leverage. Not just tools &mdash;
                  real capability that compounds over time.
                </p>

                {/* CTAs */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-lg"
                >
                  Start a Conversation
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
                  {/* Main visual card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-neutral-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Four Capability Pillars</p>
                        <p className="text-sm text-neutral-500">Building systemic AI strength</p>
                      </div>
                    </div>

                    {/* Mini preview of pillars */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 p-3 bg-coral-50/50 rounded-xl border border-coral-100">
                        <GraduationCap className="w-4 h-4 text-coral-500" />
                        <span className="text-xs font-medium text-neutral-700">AI Training</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Users className="w-4 h-4 text-neutral-600" />
                        <span className="text-xs font-medium text-neutral-700">
                          Hiring & Staffing
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-xl border border-purple-100">
                        <Bot className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-medium text-neutral-700">Agentic AI</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-coral-50/50 rounded-xl border border-coral-100">
                        <Brain className="w-4 h-4 text-coral-500" />
                        <span className="text-xs font-medium text-neutral-700">AI Strategy</span>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">50+</p>
                        <p className="text-xs text-neutral-500">Orgs</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">15+</p>
                        <p className="text-xs text-neutral-500">Enterprise</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">4.9</p>
                        <p className="text-xs text-neutral-500">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Problems Section - Horizontal scroll text */}
      <section ref={problemsRef} className="py-16 bg-neutral-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={problemsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-neutral-500 text-sm uppercase tracking-wider mb-6">
            Sound Familiar?
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto px-4">
            {[
              'No internal AI capability',
              'Tool adoption without understanding',
              'Hiring signals vs real skill',
              'Fragmented upskilling',
            ].map((problem, index) => (
              <motion.span
                key={problem}
                initial={{ opacity: 0, y: 10 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-lg md:text-xl text-white/80 px-4 py-2 bg-white/5 rounded-full border border-white/10"
              >
                {problem}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Capability Pillars - Horizontal Layout */}
      <section
        ref={pillarsRef}
        id="capabilities"
        className="py-20 md:py-32 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">
              Four Capability <span className="italic">Pillars</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We don&apos;t sell products. We build systemic AI capability across four integrated
              pillars.
            </p>
          </motion.div>

          {/* Horizontal pillars with alternating layout */}
          <div className="space-y-8">
            {capabilityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                {/* Number */}
                <div className="hidden md:flex w-20 h-20 flex-shrink-0 items-center justify-center">
                  <span className="text-6xl font-serif text-neutral-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content bar */}
                <div
                  className={`flex-1 flex items-center gap-6 p-6 md:p-8 rounded-2xl border transition-all hover:shadow-lg ${
                    pillar.color === 'coral'
                      ? 'border-coral-200 bg-coral-50/30 hover:border-coral-300'
                      : pillar.color === 'blue'
                        ? 'border-blue-200 bg-blue-50/30 hover:border-blue-300'
                        : pillar.color === 'purple'
                          ? 'border-purple-200 bg-purple-50/30 hover:border-purple-300'
                          : 'border-coral-200 bg-coral-50/30 hover:border-coral-300'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      pillar.color === 'coral'
                        ? 'bg-coral-100'
                        : pillar.color === 'blue'
                          ? 'bg-blue-100'
                          : pillar.color === 'purple'
                            ? 'bg-purple-100'
                            : 'bg-coral-100'
                    }`}
                  >
                    <pillar.icon
                      className={`w-7 h-7 ${
                        pillar.color === 'coral'
                          ? 'text-coral-500'
                          : pillar.color === 'blue'
                            ? 'text-blue-500'
                            : pillar.color === 'purple'
                              ? 'text-purple-500'
                              : 'text-coral-500'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Timeline Style */}
      <section ref={processRef} className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Engagement Models
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">
              Flexible <span className="italic">Engagement</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 -translate-x-1/2" />

            {[
              {
                duration: 'Long-term',
                time: 'Multi-quarter to years',
                title: 'Strategic Partnership',
                desc: 'Deep, ongoing collaboration to build organizational AI capability from the ground up.',
                side: 'left',
              },
              {
                duration: 'Medium-term',
                time: 'Multi-quarter',
                title: 'Capability Programs',
                desc: 'Structured training and implementation programs with measurable outcomes.',
                side: 'right',
              },
              {
                duration: 'Short-term',
                time: 'Weeks',
                title: 'Workshops & Assessments',
                desc: 'Focused interventions for specific needs like hiring frameworks or team assessments.',
                side: 'left',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className={`relative flex items-center mb-12 last:mb-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 z-10 ring-4 ring-white" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${item.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                >
                  <span className="text-sm font-medium text-blue-500">{item.duration}</span>
                  <span className="text-xs text-neutral-400 ml-2">({item.time})</span>
                  <h3 className="text-xl font-semibold text-neutral-900 mt-1 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lex AI - Split layout with stats */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Text content */}
            <div className="lg:col-span-3">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Why Lex AI
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                We Think Like <span className="italic">Partners</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our team has built AI systems at Google, Amazon, Microsoft, and MathWorks. We bring
                production experience, not just theory.
              </p>

              <div className="space-y-4">
                {[
                  'Math-first approach that builds real understanding',
                  'Production experience from Tier-1 tech companies',
                  'Long-term thinking over quick wins',
                  'Transparent, consultative engagement style',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Engineers Trained', color: 'coral' },
                  { value: '50+', label: 'Organizations', color: 'blue' },
                  { value: '15+', label: 'Enterprise Partners', color: 'purple' },
                  { value: '4.9/5', label: 'Satisfaction', color: 'coral' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-6 rounded-2xl ${
                      stat.color === 'coral'
                        ? 'bg-coral-50'
                        : stat.color === 'blue'
                          ? 'bg-blue-50'
                          : stat.color === 'purple'
                            ? 'bg-purple-50'
                            : 'bg-coral-50'
                    }`}
                  >
                    <p
                      className={`text-3xl md:text-4xl font-serif ${
                        stat.color === 'coral'
                          ? 'text-coral-600'
                          : stat.color === 'blue'
                            ? 'text-blue-600'
                            : stat.color === 'purple'
                              ? 'text-purple-600'
                              : 'text-coral-600'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA with Illustration */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="entCtaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#entCtaNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center lg:col-span-1"
            >
              <div className="relative w-80 h-80">
                {/* Building blocks illustration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-20 h-20 bg-blue-500/30 rounded-lg backdrop-blur-sm" />
                  <div className="w-20 h-20 bg-coral-500/30 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-coral-500/30 rounded-lg backdrop-blur-sm" />
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-white/60" />
                </div>
                <div className="absolute top-16 right-8 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Layers className="w-6 h-6 text-white/60" />
                </div>
                <div className="absolute bottom-24 right-4 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-5 h-5 text-white/60" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Ready to Build <span className="italic">Real</span> AI Capability?
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
                Let&apos;s discuss how we can help your organization move from AI curiosity to AI
                leverage.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
                >
                  <MessageSquare className="w-5 h-5" />
                  Start a Conversation
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white border border-white/30 rounded-full hover:border-white/50 transition-all"
                >
                  Request Custom Proposal
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
