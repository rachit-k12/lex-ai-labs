'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Heart,
  MessageSquare,
  Rocket,
  School,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

const principles = [
  {
    icon: Brain,
    title: 'AI Literacy',
    description:
      'Understanding AI systems, their capabilities, and limitations without fear or hype.',
  },
  {
    icon: Shield,
    title: 'Safety & Ethics',
    description: "Responsible AI awareness and critical thinking about AI's role in society.",
  },
  {
    icon: Heart,
    title: 'Age-Appropriate',
    description: 'Content designed for young minds — engaging, not overwhelming.',
  },
];

const features = [
  {
    icon: Code2,
    title: 'Applied AI Projects',
    description: 'Hands-on ML & Deep Learning projects published on real platforms.',
  },
  {
    icon: Brain,
    title: 'Intuition-First Math',
    description: 'Linear algebra and probability taught through gamified, age-appropriate tools.',
  },
  {
    icon: BookOpen,
    title: 'High-Quality Content',
    description: 'Text, animations, interactive apps, and guided projects for young learners.',
  },
  {
    icon: Users,
    title: 'Industry Mentorship',
    description: 'Learn from engineers who build AI at scale at top tech companies.',
  },
];

const outcomes = [
  {
    num: '01',
    title: 'GitHub Portfolio',
    desc: 'Published AI/ML projects that showcase real coding skills',
  },
  { num: '02', title: 'Fellowship Certificate', desc: 'Official recognition from Lex AI Labs' },
  {
    num: '03',
    title: 'Recommendation Letter',
    desc: 'Personalized letter for university applications',
  },
  { num: '04', title: 'Published Articles', desc: 'Work published on AI Seekhega India & Medium' },
];

export default function SchoolsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programRef, programInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [outcomesRef, outcomesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col overflow-hidden">
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
                  <span className="text-neutral-600">Schools (K-12)</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                  <School className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Future AI Leaders
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  AI Literacy for the <span className="italic text-coral-500">Next Generation</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
                  Safe, age-appropriate, future-focused AI education. Building understanding, not
                  fear.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-8 mb-10">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">12 Weeks</p>
                      <p className="text-neutral-500 text-sm">Program Duration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">Grades 6-12</p>
                      <p className="text-neutral-500 text-sm">Age Range</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-coral-500" />
                    <div>
                      <p className="text-neutral-900 font-medium">100+ Alumni</p>
                      <p className="text-neutral-500 text-sm">And Growing</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 max-w-xl mx-auto">
              Three Principles for <span className="italic">Young Learners</span>
            </h2>
          </motion.div>

          {/* Principles Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 h-full text-center hover:border-coral-200 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-coral-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-coral-100 transition-colors">
                    <principle.icon className="w-7 h-7 text-coral-500" />
                  </div>
                  <h3 className="font-serif text-xl text-neutral-900 mb-3">{principle.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FutureMinds Fellowship - Dark */}
      <section ref={programRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                Flagship Program
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                FutureMinds AI <span className="italic">Fellowship</span>
              </h2>
              <p className="text-coral-400 text-lg mb-6">
                Build a competitive edge for MIT, Stanford, CMU, and the Ivy League.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Top universities select for initiative, depth, and applied problem-solving. This
                fellowship provides tangible evidence of all three.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={programInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-coral-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white mb-1">{feature.title}</h3>
                      <p className="text-white/50 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Curriculum */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="font-serif text-white text-xl mb-6">Program Modules</h3>
              <div className="space-y-4">
                {[
                  {
                    module: 'Module 1',
                    title: 'AI Foundations',
                    topics: 'What is AI & ML? How computers learn.',
                  },
                  {
                    module: 'Module 2',
                    title: 'Hands-on Building',
                    topics: 'Python basics. Your first ML model.',
                  },
                  {
                    module: 'Module 3',
                    title: 'Advanced Topics',
                    topics: 'Neural networks. NLP. Capstone project.',
                  },
                ].map((section) => (
                  <div
                    key={section.module}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-coral-400 px-2 py-0.5 bg-coral-500/20 rounded-full">
                        {section.module}
                      </span>
                      <h4 className="font-medium text-white">{section.title}</h4>
                    </div>
                    <p className="text-sm text-white/50">{section.topics}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-serif text-coral-400">12</p>
                    <p className="text-xs text-white/40">Weeks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-coral-400">4.9</p>
                    <p className="text-xs text-white/40">Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-coral-400">100+</p>
                    <p className="text-xs text-white/40">Alumni</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section ref={outcomesRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                What You Walk Away With
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                Tangible <span className="italic">Assets</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Unlike generic courses, the FutureMinds Fellowship produces real, verifiable
                outcomes that strengthen university applications.
              </p>

              <div className="space-y-4">
                {outcomes.map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 10 }}
                    animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <span className="text-3xl font-serif text-coral-400 flex-shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-neutral-900">{item.title}</h3>
                      <p className="text-neutral-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-neutral-900 rounded-2xl p-8 relative overflow-hidden">
                {/* Grainy texture */}
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

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-coral-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-coral-400" />
                    </div>
                    <span className="text-white/80 font-medium">Fellowship Outcomes</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <Rocket className="w-5 h-5 text-coral-400" />
                      <span className="text-white text-sm">3+ Published GitHub Projects</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <Award className="w-5 h-5 text-coral-400" />
                      <span className="text-white text-sm">Lex AI Labs Certification</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-coral-400" />
                      <span className="text-white text-sm">Personalized Recommendation</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-sm italic">
                      &ldquo;These are not participation trophies — they&apos;re earned through real
                      work.&rdquo;
                    </p>
                  </div>
                </div>
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
              Bring AI Education to <span className="italic">Your School</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Partner with us to offer the FutureMinds Fellowship to your students. We make AI
              education accessible, safe, and future-focused.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
              >
                Request Information
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Talk to Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="schools"
      />
    </div>
  );
}
