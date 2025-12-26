'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Handshake,
  MessageSquare,
  Rocket,
  School,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import LeadCaptureModal from '@/components/landing/LeadCaptureModal';
import Navigation from '@/components/landing/Navigation';

// Target Universities
const targetUniversities = [
  'MIT',
  'Stanford',
  'CMU',
  'Harvard',
  'Princeton',
  'Yale',
  'Columbia',
  'Berkeley',
];

export default function SchoolsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programRef, programInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [outcomesRef, outcomesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [deliveryRef, deliveryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-purple-50/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterSchool">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterSchool)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-coral-500/15 rounded-full blur-3xl" />
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
                  <Link href="/institutions" className="hover:text-neutral-900 transition-colors">
                    Institutions
                  </Link>
                  <span>/</span>
                  <span className="text-neutral-900">Schools (K-12)</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
                  <School className="w-4 h-4 text-coral-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Future AI Leaders
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  <span className="italic text-coral-500">FutureMinds</span>
                  <br />
                  AI Fellowship
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Build a competitive edge for MIT, Stanford, CMU, and the Ivy League. They select
                  for initiative, depth, and applied problem-solving.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>Project-based</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>Industry mentors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral-500 rounded-full" />
                    <span>GitHub portfolio</span>
                  </div>
                </div>

                {/* CTAs */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-lg"
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
                  {/* Main visual card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-coral-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">FutureMinds Fellowship</p>
                        <p className="text-sm text-neutral-500">For Ivy League aspirants</p>
                      </div>
                    </div>

                    {/* Target Universities */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {targetUniversities.slice(0, 6).map((uni) => (
                        <span
                          key={uni}
                          className="px-2.5 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>

                    {/* Program highlights */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-coral-50/50 rounded-xl border border-coral-100">
                        <Code2 className="w-5 h-5 text-coral-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Hands-on AI Projects
                          </p>
                          <p className="text-xs text-neutral-500">
                            ML, Deep Learning, Neural Networks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Award className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">Tangible Outcomes</p>
                          <p className="text-xs text-neutral-500">
                            Portfolio, Certificate, Recommendation
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">12</p>
                        <p className="text-xs text-neutral-500">Weeks</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">4.9</p>
                        <p className="text-xs text-neutral-500">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">100+</p>
                        <p className="text-xs text-neutral-500">Alumni</p>
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

      {/* Why This Matters - Quote block */}
      <section className="py-16 bg-coral-50/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-coral-600 uppercase tracking-wider mb-6">
            The Opportunity
          </p>
          <blockquote className="text-2xl md:text-3xl font-serif text-neutral-800 italic leading-relaxed">
            &ldquo;Top universities don&apos;t select for certificates. They select for students who
            demonstrate initiative, depth, and the ability to apply knowledge to real
            problems.&rdquo;
          </blockquote>
          <div className="mt-6 w-16 h-1 bg-coral-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Program Features - Split layout */}
      <section ref={programRef} id="program" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                The Program
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                What You&apos;ll <span className="italic">Learn</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Code2,
                    title: 'Applied AI Projects',
                    desc: 'Hands-on ML & Deep Learning projects, built and published on real platforms.',
                  },
                  {
                    icon: Brain,
                    title: 'Intuition-First Math',
                    desc: 'Linear algebra, probability, optimization taught through gamified, age-appropriate tools.',
                  },
                  {
                    icon: BookOpen,
                    title: 'High-Quality Content',
                    desc: 'Text, animations, interactive web apps, and guided projects designed for young learners.',
                  },
                  {
                    icon: Users,
                    title: 'Industry Mentorship',
                    desc: 'Learn directly from engineers who build AI at scale at top tech companies.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={programInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-neutral-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Curriculum modules */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={programInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Grainy texture */}
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
                <h3 className="text-xl font-semibold text-white mb-6">Program Modules</h3>
                <div className="space-y-4">
                  {[
                    {
                      module: 'Module 1',
                      title: 'AI Foundations',
                      topics: 'What is AI & ML? How computers learn. Real-world applications.',
                    },
                    {
                      module: 'Module 2',
                      title: 'Hands-on Building',
                      topics: 'Python basics. Your first ML model. Image recognition project.',
                    },
                    {
                      module: 'Module 3',
                      title: 'Advanced Topics',
                      topics: 'Neural networks. NLP. Capstone project.',
                    },
                  ].map((section) => (
                    <div
                      key={section.module}
                      className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-coral-400 px-2 py-0.5 bg-coral-500/20 rounded-full">
                          {section.module}
                        </span>
                        <h4 className="font-medium text-white">{section.title}</h4>
                      </div>
                      <p className="text-sm text-neutral-400">{section.topics}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes - Tangible Assets */}
      <section ref={outcomesRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 relative overflow-hidden">
                  {/* Grainy texture */}
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
                        <Trophy className="w-5 h-5 text-coral-400" />
                      </div>
                      <span className="text-white/80 font-medium">Fellowship Outcomes</span>
                    </div>

                    {/* Visual representation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <Rocket className="w-5 h-5 text-coral-400" />
                        <span className="text-white text-sm">3+ Published GitHub Projects</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span className="text-white text-sm">Lex AI Labs Certification</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <Star className="w-5 h-5 text-coral-400" />
                        <span className="text-white text-sm">Personalized Recommendation</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-white/60 text-sm italic">
                        &ldquo;These are not participation trophies — they&apos;re earned through
                        real work.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-xl -z-10" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                What You Walk Away With
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                Tangible <span className="italic">Assets</span>
              </h2>
              <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
                Unlike generic courses, the FutureMinds Fellowship produces real, verifiable
                outcomes that strengthen university applications and demonstrate genuine capability.
              </p>

              {/* Numbered list */}
              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'GitHub Portfolio',
                    desc: 'Published AI/ML projects that showcase real coding skills',
                  },
                  {
                    num: '02',
                    title: 'Fellowship Certificate',
                    desc: 'Official recognition from Lex AI Labs',
                  },
                  {
                    num: '03',
                    title: 'Recommendation Letter',
                    desc: 'Personalized letter for university applications',
                  },
                  {
                    num: '04',
                    title: 'Published Articles',
                    desc: 'Work published on AI Seekhega India & Medium',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 10 }}
                    animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <span className="text-3xl font-serif text-coral-300 flex-shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Model - Two column */}
      <section ref={deliveryRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={deliveryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4 mb-6">
                Hybrid <span className="italic">Learning</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                Live sessions for depth, recorded content for flexibility &mdash; led by engineers
                from top-tier tech firms.
              </p>

              <ul className="space-y-3">
                {[
                  'Live instructor-led sessions with Q&A',
                  'Recorded content for self-paced learning',
                  'One-on-one mentorship from industry engineers',
                  'Weekly project reviews and feedback',
                  'Community access with fellow Fellows',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who it's for */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={deliveryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-50 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Who This Is For</h3>
              <div className="space-y-4">
                {[
                  {
                    grade: 'Grades 9-12',
                    desc: 'Students targeting Ivy League & top universities',
                    color: 'coral',
                  },
                  {
                    grade: 'Grades 6-8',
                    desc: 'Early starters building computational thinking',
                    color: 'blue',
                  },
                  {
                    grade: 'Parents',
                    desc: "Investing in their child's competitive edge",
                    color: 'purple',
                  },
                  {
                    grade: 'Counselors',
                    desc: 'Looking for differentiated programs',
                    color: 'coral',
                  },
                ].map((item) => (
                  <div
                    key={item.grade}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200"
                  >
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full flex-shrink-0 ${
                        item.color === 'coral'
                          ? 'bg-coral-100 text-coral-600'
                          : item.color === 'blue'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      {item.grade}
                    </span>
                    <span className="text-neutral-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section - B2B Focus */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-100 mb-6">
                <Handshake className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-700">For Education Partners</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
                Partner With <span className="italic text-purple-500">Us</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                We co-partner with educational consultancies, counseling services, and schools to
                deliver the FutureMinds Fellowship to their student communities.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'White-label delivery options available',
                  'Revenue sharing partnership model',
                  'Marketing and enrollment support',
                  'Dedicated partner success manager',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-purple-600 bg-purple-50 border border-purple-200 rounded-full hover:bg-purple-100 transition-all"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right - Visual Card */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">Ideal Partners</h3>
              <div className="space-y-4">
                {[
                  {
                    type: 'Educational Consultancies',
                    desc: 'Helping students with college admissions and profile building',
                  },
                  {
                    type: 'Schools & Academies',
                    desc: 'K-12 institutions wanting to offer AI programs to students',
                  },
                  {
                    type: 'Tutoring Centers',
                    desc: 'After-school programs looking for differentiated offerings',
                  },
                  {
                    type: 'International Counselors',
                    desc: 'Guiding students to US/UK university admissions',
                  },
                ].map((partner) => (
                  <div
                    key={partner.type}
                    className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-900">{partner.type}</p>
                      <p className="text-sm text-neutral-500">{partner.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Illustration */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="schoolCtaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#schoolCtaNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Start Building Your <span className="italic">Future</span> Today
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
                Applications for the next cohort are now open. Limited seats available.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
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
            </motion.div>

            {/* Right - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72">
                {/* Rocket illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-coral-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Rocket className="w-16 h-16 text-white/70 transform -rotate-45" />
                  </div>
                </div>

                {/* Stars */}
                <div className="absolute top-8 left-12 w-4 h-4 bg-coral-400 rounded-full animate-pulse" />
                <div
                  className="absolute top-20 right-8 w-3 h-3 bg-white/60 rounded-full animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                />
                <div
                  className="absolute bottom-16 left-8 w-2 h-2 bg-white/40 rounded-full animate-pulse"
                  style={{ animationDelay: '0.6s' }}
                />
                <div
                  className="absolute bottom-8 right-16 w-3 h-3 bg-coral-400/70 rounded-full animate-pulse"
                  style={{ animationDelay: '0.9s' }}
                />

                {/* Orbits */}
                <div className="absolute inset-0 border border-white/10 rounded-full" />
                <div className="absolute inset-8 border border-white/5 rounded-full" />

                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-12 right-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
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
