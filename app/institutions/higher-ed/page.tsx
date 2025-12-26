'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Layers,
  MessageSquare,
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

export default function HigherEdPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [offeringsRef, offeringsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-coral-50/30" />

        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilterHE">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterHE)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
                  <Link href="/institutions" className="hover:text-neutral-900 transition-colors">
                    Institutions
                  </Link>
                  <span>/</span>
                  <span className="text-neutral-900">Higher Education</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Colleges & Universities
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Transform AI <span className="italic text-purple-500">Education</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Upgrade curriculum, faculty capability, and student outcomes together. Build an AI
                  program that produces industry-ready graduates.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Curriculum design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Faculty training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Accreditation support</span>
                  </div>
                </div>

                {/* CTAs */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-lg"
                >
                  Partner With Us
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
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Academic Excellence Suite</p>
                        <p className="text-sm text-neutral-500">
                          Complete AI program infrastructure
                        </p>
                      </div>
                    </div>

                    {/* Offerings preview */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                        <BookOpen className="w-5 h-5 text-purple-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Full Curriculum Design
                          </p>
                          <p className="text-xs text-neutral-500">
                            Foundations → ML → Deep Learning → Agentic AI
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Users className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">Faculty Enablement</p>
                          <p className="text-xs text-neutral-500">Train-the-trainers program</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <Award className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            Co-branded Programs
                          </p>
                          <p className="text-xs text-neutral-500">
                            Joint certification & placement support
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">85%</p>
                        <p className="text-xs text-neutral-500">Placement</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">10+</p>
                        <p className="text-xs text-neutral-500">Partners</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-serif text-neutral-900">4.8</p>
                        <p className="text-xs text-neutral-500">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-2xl -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Problems Section - Modern Cards */}
      <section ref={problemsRef} className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mt-4">
              Why Traditional AI Education{' '}
              <span className="italic text-purple-500">Falls Short</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: 'Outdated Curriculum',
                desc: 'Most programs teach 5-year-old techniques. AI moves too fast for traditional syllabus updates.',
                stat: '70%',
                statLabel: 'of programs are outdated',
              },
              {
                icon: Users,
                title: 'Faculty Gap',
                desc: 'Professors lack industry experience with modern AI tools and production ML systems.',
                stat: '85%',
                statLabel: "haven't shipped AI",
              },
              {
                icon: Briefcase,
                title: 'Industry Disconnect',
                desc: "Graduates struggle in interviews. Theory without practice doesn't build real capability.",
                stat: '60%',
                statLabel: 'fail technical rounds',
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                  <problem.icon className="w-6 h-6 text-neutral-600 group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{problem.desc}</p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-2xl font-serif text-purple-500">{problem.stat}</p>
                  <p className="text-xs text-neutral-500">{problem.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section - Two Column Layout */}
      <section
        ref={offeringsRef}
        id="offerings"
        className="py-20 md:py-32 bg-neutral-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Header & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={offeringsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Our Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                What We <span className="italic text-purple-500">Offer</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Education infrastructure, not courses. We upgrade the entire system &mdash;
                curriculum, faculty, and outcomes together.
              </p>

              {/* Key differentiator */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-neutral-900">Our Approach</span>
                </div>
                <p className="text-sm text-neutral-600">
                  We don&apos;t just deliver content. We partner with your institution to build
                  sustainable AI capability that outlasts any single program.
                </p>
              </div>
            </motion.div>

            {/* Right - Offering Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: 'Academic Excellence Suite',
                  desc: 'Plug-and-play instructor guide with curriculum, pedagogy frameworks, and assessments.',
                  features: ['Complete curriculum', 'Mental models', 'Assessment frameworks'],
                },
                {
                  icon: GraduationCap,
                  title: 'Full AI Curriculum Design',
                  desc: 'Custom curriculum: Foundations → Math → Classical ML → Deep Learning → Agentic AI.',
                  features: ['Industry-aligned', 'Project-based', 'Capstone design'],
                },
                {
                  icon: Users,
                  title: 'Faculty Enablement',
                  desc: 'Train-the-Trainers program. Upgrade instructor capability and pedagogical approach.',
                  features: ['Intensive workshops', 'Ongoing mentorship', 'Material support'],
                },
                {
                  icon: Award,
                  title: 'Co-branded Programs',
                  desc: 'Partner to design and deliver co-branded AI/ML programmes with joint certification.',
                  features: ['Joint certification', 'Guest lectures', 'Placement support'],
                },
              ].map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                      <offering.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">{offering.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {offering.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 bg-purple-50 text-purple-600 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section - Modern Split Layout */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={offeringsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                {/* Grainy texture */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
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
                  <h3 className="text-xl font-semibold text-white mb-8">Graduate Outcomes</h3>

                  {/* Big stats */}
                  <div className="space-y-6">
                    <div className="flex items-end gap-4">
                      <span className="text-6xl font-serif text-purple-400">85%</span>
                      <span className="text-white/60 pb-2">placement rate</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="text-6xl font-serif text-coral-400">4.8</span>
                      <span className="text-white/60 pb-2">average rating</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="text-6xl font-serif text-white/80">10+</span>
                      <span className="text-white/60 pb-2">partner institutions</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      Results from partner institutions over 3 years
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={offeringsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Measurable Results
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
                Outcomes That <span className="italic">Matter</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We measure success by what matters: placement rates, interview performance, and
                real-world capability.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: 'Industry-Aligned Graduates',
                    desc: 'Students ready for Applied Scientist and MLE roles at top companies.',
                  },
                  {
                    icon: Briefcase,
                    title: 'Placement Readiness',
                    desc: 'Graduates who clear technical interviews and contribute from day one.',
                  },
                  {
                    icon: Award,
                    title: 'Accreditation Support',
                    desc: 'Curriculum designed to meet accreditation requirements and industry standards.',
                  },
                ].map((outcome, index) => (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={offeringsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <outcome.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{outcome.title}</h3>
                      <p className="text-sm text-neutral-600">{outcome.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section ref={processRef} className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">
              How We <span className="italic text-purple-500">Partner</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A structured approach to transforming your AI education program.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Assessment',
                desc: 'We evaluate your current curriculum, faculty capabilities, and desired outcomes to understand the gap.',
              },
              {
                step: '02',
                title: 'Design',
                desc: 'Together, we design a customized curriculum and faculty development program tailored to your institution.',
              },
              {
                step: '03',
                title: 'Implement',
                desc: 'We deploy training, provide materials, and support your faculty as they begin delivering the new curriculum.',
              },
              {
                step: '04',
                title: 'Measure',
                desc: 'Continuous tracking of outcomes with regular reviews to optimize and improve the program.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-serif text-xl">
                    {item.step}
                  </div>
                  {index < 3 && <div className="w-0.5 h-16 bg-purple-200 my-2" />}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Illustration */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="heCtaNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#heCtaNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-72">
                {/* Graduation cap illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <GraduationCap className="w-24 h-24 text-white/70" />
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm animate-bounce"
                  style={{ animationDelay: '0s' }}
                >
                  <BookOpen className="w-5 h-5 text-white/70" />
                </div>
                <div
                  className="absolute top-8 right-8 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Users className="w-5 h-5 text-white/70" />
                </div>
                <div
                  className="absolute bottom-8 left-12 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Award className="w-5 h-5 text-white/70" />
                </div>
                <div
                  className="absolute bottom-12 right-4 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm animate-bounce"
                  style={{ animationDelay: '0.6s' }}
                >
                  <Layers className="w-5 h-5 text-white/70" />
                </div>

                {/* Orbits */}
                <div className="absolute inset-0 border border-white/10 rounded-full" />
                <div className="absolute inset-8 border border-white/5 rounded-full" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Ready to Transform Your <span className="italic">AI Program?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
                Let&apos;s discuss how we can help your institution produce industry-ready AI
                graduates.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
              >
                <MessageSquare className="w-5 h-5" />
                Partner With Us
              </button>
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
