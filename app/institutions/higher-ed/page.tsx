'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  MessageSquare,
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
    icon: BookOpen,
    title: 'Outdated Curriculum',
    description:
      'Most programs teach 5-year-old techniques. AI moves too fast for traditional syllabus updates.',
  },
  {
    icon: Users,
    title: 'Faculty Gap',
    description:
      'Professors lack industry experience with modern AI tools and production ML systems.',
  },
  {
    icon: Briefcase,
    title: 'Industry Disconnect',
    description:
      "Graduates struggle in interviews. Theory without practice doesn't build real capability.",
  },
];

const offerings = [
  {
    icon: BookOpen,
    title: 'Academic Excellence Suite',
    description:
      'Plug-and-play instructor guide with curriculum, pedagogy frameworks, and assessments.',
    features: ['Complete curriculum', 'Mental models', 'Assessment frameworks'],
  },
  {
    icon: GraduationCap,
    title: 'Full AI Curriculum Design',
    description:
      'Custom curriculum: Foundations → Math → Classical ML → Deep Learning → Agentic AI.',
    features: ['Industry-aligned', 'Project-based', 'Capstone design'],
  },
  {
    icon: Users,
    title: 'Faculty Enablement',
    description:
      'Train-the-Trainers program. Upgrade instructor capability and pedagogical approach.',
    features: ['Intensive workshops', 'Ongoing mentorship', 'Material support'],
  },
  {
    icon: Award,
    title: 'Co-branded Programs',
    description:
      'Partner to design and deliver co-branded AI/ML programmes with joint certification.',
    features: ['Joint certification', 'Guest lectures', 'Placement support'],
  },
];

export default function HigherEdPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [offeringsRef, offeringsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  <Link href="/institutions" className="hover:text-neutral-600 transition-colors">
                    Institutions
                  </Link>
                  <span>/</span>
                  <span className="text-neutral-600">Higher Education</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <GraduationCap className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Colleges & Universities
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  AI Education for <span className="italic text-coral-500">Universities</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-12">
                  From curriculum to faculty enablement to industry readiness. Build an AI program
                  that produces graduates who can actually deliver.
                </p>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* The Problem */}
      <section ref={problemsRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              The Challenge
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-2xl mx-auto">
              Why Traditional AI Education <span className="italic">Falls Short</span>
            </h2>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 h-full">
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="font-serif text-neutral-900 text-lg mb-2">{problem.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Dark */}
      <section
        ref={offeringsRef}
        className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
      >
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="offeringsNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#offeringsNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Our Solutions
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white max-w-xl">
              What We <span className="italic">Offer</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl">
              Education infrastructure, not courses. We upgrade the entire system.
            </p>
          </motion.div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <offering.icon className="w-6 h-6 text-coral-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-white text-xl mb-2">{offering.title}</h3>
                      <p className="text-white/50 leading-relaxed mb-4">{offering.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {offering.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 bg-coral-500/10 text-coral-400 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-neutral-900 rounded-2xl p-8 relative overflow-hidden">
                {/* Grainy texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <svg className="w-full h-full">
                    <filter id="statsNoise">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#statsNoise)" opacity="0.4" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-white text-xl mb-8">Graduate Outcomes</h3>
                  <div className="space-y-6">
                    <div className="flex items-end gap-4">
                      <span className="text-5xl font-serif text-coral-400">85%</span>
                      <span className="text-white/60 pb-1">placement rate</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="text-5xl font-serif text-coral-400">4.8</span>
                      <span className="text-white/60 pb-1">average rating</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="text-5xl font-serif text-coral-400">10+</span>
                      <span className="text-white/60 pb-1">partner institutions</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/40 text-sm">
                      Results from partner institutions over 3 years
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Measurable Results
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                Outcomes That <span className="italic">Matter</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                We measure success by what matters: placement rates, interview performance, and
                real-world capability.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: 'Industry-Aligned Graduates',
                    desc: 'Students ready for Applied Scientist and MLE roles.',
                  },
                  {
                    icon: Briefcase,
                    title: 'Placement Readiness',
                    desc: 'Graduates who clear technical interviews and contribute from day one.',
                  },
                  {
                    icon: Award,
                    title: 'Accreditation Support',
                    desc: 'Curriculum designed to meet accreditation requirements.',
                  },
                ].map((outcome) => (
                  <div key={outcome.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <outcome.icon className="w-5 h-5 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-neutral-900 mb-1">{outcome.title}</h3>
                      <p className="text-neutral-600 text-sm">{outcome.desc}</p>
                    </div>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
              Transform Your <span className="italic">AI Program</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Let&apos;s discuss how we can help your institution produce industry-ready AI
              graduates.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Request Partnership Details
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="higher-ed"
      />
    </div>
  );
}
