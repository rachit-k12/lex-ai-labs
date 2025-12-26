'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Lightbulb, Target } from 'lucide-react';
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
      'We teach the mathematics and reasoning behind AI systems, not just how to call APIs. Understanding fundamentals creates capability that compounds.',
  },
  {
    icon: Target,
    title: 'Depth Over Shortcuts',
    description:
      "Real AI capability takes time and rigor. We don't sell quick wins or certificates. We build understanding that lasts a career.",
  },
  {
    icon: BookOpen,
    title: 'Built by Engineers, Not Influencers',
    description:
      "Our curriculum comes from practitioners who've built production AI systems at scale. No hype, no fluff—just what actually works.",
  },
  {
    icon: Lightbulb,
    title: 'Capability Over Tool Worship',
    description:
      "Tools change. Thinking doesn't. We focus on building AI intuition and judgment that transfers across any technology stack.",
  },
];

const milestones = [
  {
    year: '2024',
    event: 'Founded with a mission to bridge the gap between AI education and industry reality',
  },
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

  return (
    <div className="bg-white text-neutral-900 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col overflow-hidden">
        <Navigation />

        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-white" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-coral-50/50 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                About Lex AI
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mt-4 mb-8 tracking-tight">
                Where Serious AI <span className="italic text-coral-500">Gets Built</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                We&apos;re not a bootcamp. We&apos;re not a course marketplace. We&apos;re an AI
                capability company that builds real understanding—in individuals, teams, and
                institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section ref={storyRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              The Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mt-4 mb-8">
              Why We <span className="italic">Exist</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="prose prose-lg max-w-none text-neutral-600"
          >
            <div className="space-y-6 leading-relaxed">
              <p className="text-xl">
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
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-16 border-t border-neutral-200"
          >
            <h3 className="font-serif text-2xl text-neutral-900 mb-8">The Journey</h3>
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
      </section>

      {/* Beliefs Section */}
      <section ref={beliefsRef} className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              What We Believe
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mt-4 mb-6">
              Our <span className="italic">Philosophy</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These aren&apos;t values on a poster. They&apos;re how we make every decision about
              curriculum, partnerships, and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl border border-neutral-200"
              >
                <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-5">
                  <belief.icon className="w-6 h-6 text-coral-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{belief.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section ref={founderRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden">
                  {/* Placeholder for founder image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4D03AQGQtno9QlQ5ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715758859402?e=1768435200&v=beta&t=O2wdoVMutypgbVukVNbdVMu8v1WjbXmcd0rvVM1mjTA"
                      alt="Puru, Founder of Lex AI Labs"
                      fill
                      className="object-cover object-center rounded-xl"
                      sizes="(min-width: 1024px) 350px, 100vw"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral-100 rounded-xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Founder
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mt-4 mb-6">
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
                <p className="text-sm text-neutral-500 mb-4">Background</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700">
                    Ex-Google
                  </span>
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700">
                    Ex-MathWorks
                  </span>
                  <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700">
                    IIT Delhi
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
            &ldquo;We don&apos;t sell AI education. We build AI capability. There&apos;s a
            difference.&rdquo;
          </blockquote>
          <p className="text-neutral-400">— The Lex AI Philosophy</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
            Ready to Build <span className="italic text-coral-500">Real Capability</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
            Whether you&apos;re an individual looking to grow, an enterprise building AI teams, or
            an institution modernizing education—we&apos;d like to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/individuals"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              For Individuals
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enterprises"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-200 rounded-full font-medium hover:border-neutral-300 transition-colors"
            >
              For Organizations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
