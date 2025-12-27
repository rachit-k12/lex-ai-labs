'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Lightbulb, Mail, Target, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

const beliefs = [
  {
    icon: Code2,
    title: 'First Principles Over Frameworks',
    description:
      'We teach the mathematics and reasoning behind AI systems, not just how to call APIs.',
  },
  {
    icon: Target,
    title: 'Depth Over Shortcuts',
    description:
      'Real AI capability takes time and rigor. We don\'t sell quick wins or certificates.',
  },
  {
    icon: BookOpen,
    title: 'Built by Engineers, Not Influencers',
    description:
      'Our curriculum comes from practitioners who\'ve built production AI systems at scale.',
  },
  {
    icon: Lightbulb,
    title: 'Capability Over Tool Worship',
    description:
      'Tools change. Thinking doesn\'t. We focus on building AI intuition that transfers.',
  },
];

const milestones = [
  { year: '2024', event: 'Founded with a mission to bridge the gap between AI education and industry reality' },
  { year: '2024', event: 'Launched AI Fellowship program for working engineers' },
  { year: '2024', event: 'Partnered with first enterprise clients for team capability building' },
  { year: '2025', event: 'Expanded to institutions—helping universities modernize AI curriculum' },
  { year: '2025', event: '500+ engineers trained, 50+ organizations served' },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [beliefsRef, beliefsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [founderRef, founderInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col overflow-hidden"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">
                About Lex AI
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-8 tracking-tight">
                Where Serious Engineers Build{' '}
                <span className="italic text-coral-500">Serious AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                We&apos;re not a bootcamp. We&apos;re not a course marketplace. We&apos;re an AI
                capability company that builds real understanding—in individuals, teams, and
                institutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* The Story Section */}
      <section
        ref={storyRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                The Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-10">
                Why We <span className="italic">Exist</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6 text-neutral-600 text-lg leading-relaxed"
            >
              <p className="text-xl text-neutral-800">
                The AI industry has a problem. There&apos;s an enormous gap between what&apos;s
                taught in courses and what&apos;s needed to actually build AI systems that work in
                production.
              </p>
              <p>
                Most AI education today falls into two traps: either it&apos;s too theoretical
                (papers and proofs with no practical application) or it&apos;s too shallow (call
                this API, use this tool, skip the fundamentals). Neither approach creates engineers
                who can think independently about AI systems.
              </p>
              <p>
                We founded Lex AI Labs in 2024 because we&apos;d seen this problem firsthand—in
                hiring, in team capability gaps, in engineers who could use frameworks but
                couldn&apos;t debug them. The solution wasn&apos;t another course. It was a
                different approach entirely: math-first, code-backed, production-focused education
                that treats learners as professionals, not consumers.
              </p>
              <p>
                Today, we work across three fronts: training individuals to become Applied
                Scientists, building AI capability inside enterprises, and helping institutions
                modernize how they teach AI. Different audiences, same philosophy—depth over
                shortcuts, capability over credentials.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 pt-16 border-t border-neutral-200"
            >
              <h3 className="font-serif text-neutral-900 text-xl mb-8">The Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <span className="text-sm font-medium text-coral-500 w-12 flex-shrink-0 pt-1">
                      {milestone.year}
                    </span>
                    <p className="text-neutral-600">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Dark */}
      <section
        ref={beliefsRef}
        className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
      >
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="beliefsNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#beliefsNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              What We Believe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Our <span className="italic">Philosophy</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              These aren&apos;t values on a poster. They&apos;re how we make every decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coral-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <belief.icon className="w-5 h-5 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white text-lg mb-2">
                        {belief.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        ref={founderRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGQtno9QlQ5ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715758859402?e=1768435200&v=beta&t=O2wdoVMutypgbVukVNbdVMu8v1WjbXmcd0rvVM1mjTA"
                    alt="Puru, Founder of Lex AI Labs"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 350px, 100vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral-100 rounded-xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                Founder
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
                Puru Kathuria
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Before starting Lex AI Labs, Puru spent years building AI systems at scale—working
                  on problems where getting the fundamentals wrong meant systems that didn&apos;t
                  work in production.
                </p>
                <p>
                  That experience shaped a conviction: the gap in AI education isn&apos;t about
                  access to content. There&apos;s plenty of content. The gap is in how we teach
                  people to <em>think</em> about AI systems—the mathematical intuition, the
                  architectural judgment, the debugging instincts that separate engineers who copy
                  code from engineers who build systems.
                </p>
                <p>
                  Lex AI Labs is built on that conviction. Every curriculum choice, every
                  partnership, every hire is evaluated against one question: does this help people
                  build real AI capability, or does it just look like education?
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">Background</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700 font-medium">
                    Ex-Google
                  </span>
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700 font-medium">
                    Ex-MathWorks
                  </span>
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700 font-medium">
                    IIIT Delhi
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Dark */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="quoteNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#quoteNoise)" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              &ldquo;We don&apos;t sell AI education. We build AI capability. There&apos;s a
              difference.&rdquo;
            </blockquote>
            <p className="text-white/40">— The Lex AI Philosophy</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                The Mission
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                Build Intelligence. <span className="italic">Build India.</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-12">
                India has the talent. It has the ambition. What it needs is infrastructure
                for building real AI capability—not more courses, but a fundamentally different
                approach to how AI is taught and learned. That&apos;s what we&apos;re building.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                {[
                  { value: '500+', label: 'Engineers Trained' },
                  { value: '50+', label: 'Organizations' },
                  { value: '15+', label: 'Institutions' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-serif text-neutral-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-neutral-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
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
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
              Ready to Build Real <span className="italic">Capability?</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Whether you&apos;re an individual looking to grow, an enterprise building AI teams, or
              an institution modernizing education—we&apos;d like to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/individuals" className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all">
                For Individuals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/enterprises"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
              >
                For Organizations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section - Dark */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-white text-xl mb-2">
                Stay Connected
              </h3>
              <p className="text-white/50">
                Follow our journey and insights on AI education.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@lexailabs.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/10 rounded-full text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="https://twitter.com/lexailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/10 rounded-full text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
