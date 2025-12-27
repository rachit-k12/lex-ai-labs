'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  GraduationCap,
  Link as LinkIcon,
  MessageSquare,
  Search,
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

const problems = [
  {
    icon: Brain,
    title: 'Teams don\'t understand AI deeply',
    description: 'Surface-level tool training without foundational understanding leads to poor decisions.',
  },
  {
    icon: LinkIcon,
    title: 'Over-dependence on vendors',
    description: 'External consultants and vendors own the AI knowledge. You own the invoices.',
  },
  {
    icon: Target,
    title: 'Tool adoption without strategy',
    description: 'Teams adopt AI tools without systems thinking. Activity without outcomes.',
  },
  {
    icon: Search,
    title: 'No internal AI leaders',
    description: 'No one who can evaluate, design, and drive AI initiatives from within.',
  },
];

const pillars = [
  {
    icon: GraduationCap,
    title: 'Enterprise AI Training',
    description: 'Math-first, production-focused training for engineering teams at all levels.',
  },
  {
    icon: Users,
    title: 'AI Talent & Hiring',
    description: 'Hiring rubrics and interview frameworks that identify real AI capability.',
  },
  {
    icon: Bot,
    title: 'Agentic AI Automation',
    description: 'Design and implement AI agents that automate complex workflows.',
  },
  {
    icon: Sparkles,
    title: 'AI Adoption Strategy',
    description: 'Long-term roadmaps for building internal capability, not just tool adoption.',
  },
];

const engagementModels = [
  {
    duration: 'Long-term',
    timeline: 'Multi-quarter to years',
    title: 'Strategic Partnership',
    description: 'Deep, ongoing collaboration to build organizational AI capability from the ground up.',
  },
  {
    duration: 'Medium-term',
    timeline: 'Multi-quarter',
    title: 'Capability Programs',
    description: 'Structured training and implementation programs with measurable outcomes.',
  },
  {
    duration: 'Short-term',
    timeline: 'Weeks to months',
    title: 'Workshops & Assessments',
    description: 'Focused interventions for specific needs like hiring frameworks or team assessments.',
  },
  {
    duration: 'Bespoke',
    timeline: 'Varies',
    title: 'Custom Programs',
    description: 'Tailored solutions for unique organizational challenges and contexts.',
  },
];

export default function EnterprisesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [engagementRef, engagementInView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <Building2 className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">For Organizations</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Build AI Capability <span className="italic text-coral-500">Inside Your Org</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
                  We help companies move from AI curiosity to AI leverage.
                  Not tools — real capability that compounds over time.
                </p>

                {/* Single CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* The Enterprise Problem */}
      <section
        ref={problemsRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Sound Familiar?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-2xl mx-auto">
              The Enterprise <span className="italic">AI Gap</span>
            </h2>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-5 h-5 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-neutral-900 text-lg mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Pillars - Dark */}
      <section
        ref={pillarsRef}
        className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
      >
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="pillarsNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#pillarsNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Four Capability <span className="italic">Pillars</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              We don&apos;t sell products. We build systemic AI capability across four integrated pillars.
            </p>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full group hover:border-coral-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-coral-500/30 transition-colors">
                      <pillar.icon className="w-6 h-6 text-coral-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-white text-xl mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <span className="text-coral-400 text-sm font-medium inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        ref={engagementRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={engagementInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Flexible Engagement
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-xl">
              Work With Us <span className="italic">Your Way</span>
            </h2>
          </motion.div>

          {/* Horizontal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={engagementInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 h-full hover:border-coral-200 hover:shadow-lg transition-all">
                  <span className="text-xs font-medium px-2 py-1 bg-coral-50 text-coral-600 rounded inline-block mb-3">
                    {model.duration}
                  </span>
                  <p className="text-neutral-400 text-xs mb-3">{model.timeline}</p>
                  <h3 className="font-serif text-neutral-900 text-lg mb-2">
                    {model.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section - Dark */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="credNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#credNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                Why Lex AI
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                We Think Like <span className="italic">Partners</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Our team has built AI systems at Google, Amazon, Microsoft, and MathWorks.
                We bring production experience, not just theory.
              </p>

              <div className="space-y-3">
                {[
                  'Math-first approach that builds real understanding',
                  'Production experience from Tier-1 tech companies',
                  'Long-term thinking over quick wins',
                  'Transparent, consultative engagement style',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Engineers Trained' },
                  { value: '50+', label: 'Organizations' },
                  { value: '15+', label: 'Enterprise Partners' },
                  { value: '4.9/5', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <p className="text-4xl font-serif text-coral-400 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Partner logos placeholder */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/30 text-sm uppercase tracking-wider mb-4">
                  Trusted by teams at
                </p>
                <div className="flex flex-wrap gap-6 opacity-50">
                  <span className="font-serif text-white text-lg">Google</span>
                  <span className="font-serif text-white text-lg">Amazon</span>
                  <span className="font-serif text-white text-lg">Microsoft</span>
                  <span className="font-serif text-white text-lg">Flipkart</span>
                </div>
              </div>
            </motion.div>
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
              Let&apos;s Build <span className="italic">Together</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              No generic sales pitch. We start with understanding your context,
              challenges, and goals. Then we design a path forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Start a Conversation
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Request Custom Proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="enterprise"
      />
    </div>
  );
}
