'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Lightbulb, Rocket, Play } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: Users,
    title: 'Connections That Count',
    description: 'Build relationships with decision-makers at Google, Amazon, top AI startups, and leading research labs.',
  },
  {
    icon: Lightbulb,
    title: 'Insider Knowledge',
    description: 'Get real-world AI frameworks and strategies straight from engineers and founders who build production systems.',
  },
  {
    icon: Rocket,
    title: 'Opportunities First',
    description: 'Hear about AI roles, collaborations, and partnerships before they hit the open market.',
  },
];

const skillTags = [
  { label: 'LLM Fine-tuning' },
  { label: 'Building AI Agents' },
  { label: 'Live Expert Sessions' },
  { label: 'Career Mentorship' },
];

export default function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="programs" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            From learning to leading, the Lex AI way.
          </span>
        </motion.div>

        {/* Main Headline - Instrument Serif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1]">
            The <span className="italic">Membership</span>
            <br className="hidden sm:block" />
            That Opens <span className="italic">Doors.</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Community Image with grainy overlay */}
            <div className="relative mb-10 rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative bg-neutral-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="AI Community Event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Grainy overlay on image */}
                <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
                  <svg className="w-full h-full">
                    <filter id="imageNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#imageNoise)" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-8">
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-neutral-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Program Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden mb-8">
              {/* Video Placeholder with gradient */}
              <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-coral-100 via-coral-50 to-white" />
                {/* Grainy texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <svg className="w-full h-full">
                    <filter id="videoNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#videoNoise)" opacity="0.4" />
                  </svg>
                </div>
                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-serif italic text-neutral-900 mb-2">
                    The Lex AI Experience
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Watch our community in action
                  </p>
                </div>
              </div>

              {/* Program Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-coral-50 text-neutral-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
                  AI Program
                </span>
                <h3 className="text-xl font-serif text-neutral-900 mb-3">
                  AI Fellowship
                </h3>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                  Lex AI is India&apos;s premier program equipping engineers, founders, and professionals with practical skills in AI/ML, LLMs, and multi-agent systems&mdash;featuring members from top institutions and 8+ countries.
                </p>
                <button className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all">
                  View more
                </button>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skillTags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full border border-neutral-200"
                >
                  <span className="w-1.5 h-1.5 bg-coral-400 rounded-full" />
                  {tag.label}
                </motion.span>
              ))}
            </div>

            {/* Stats Card to balance height */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 text-white"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">500+</p>
                  <p className="text-xs text-neutral-400 mt-1">AI Builders</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">8+</p>
                  <p className="text-xs text-neutral-400 mt-1">Countries</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">50+</p>
                  <p className="text-xs text-neutral-400 mt-1">Expert Sessions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
