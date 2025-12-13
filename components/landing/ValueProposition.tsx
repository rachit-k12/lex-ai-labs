'use client';

import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar, Compass, Network, Users } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from './VideoPlayer';

const benefits = [
  {
    icon: Users,
    title: 'Peer-to-Peer Support',
    description:
      "Post what you're building. Get solutions and support from practitioners who've solved the same problems.",
  },
  {
    icon: Compass,
    title: 'Tier-1 Mentorship',
    description:
      'Direct access to engineers and scientists from Google, Microsoft, and Amazon who review your work and guide your career.',
  },
  {
    icon: Network,
    title: 'High-Value Networking',
    description:
      'Connect with AI-focused recruiters, active investors, successful founders, and engineers from FAANG and unicorns.',
  },
  {
    icon: Briefcase,
    title: 'Exclusive Opportunities',
    description:
      'Hear about AI roles, collaborations, and partnerships before they hit the market. Your next opportunity is one conversation away.',
  },
];

const communityPerks = [
  { icon: Calendar, label: 'Weekly Roundtables' },
  { icon: Users, label: 'Founder Forums' },
  { icon: BookOpen, label: 'Expert Sessions' },
  { icon: BookOpen, label: 'Elite Private Group' },
  { icon: BookOpen, label: 'AI Fellowship Curriculum' },
  { icon: BookOpen, label: 'AI for Leaders Curriculum' },
];

export default function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="community" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            More than a program
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1]">
            Access <span className="italic">People,</span>
            <br className="hidden sm:block" />
            Not Just <span className="italic">Content.</span>
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-lg text-neutral-600 max-w-2xl mx-auto mb-16"
        >
          The Lex AI Club gives you something no course can: direct connections to the people
          shaping AI&apos;s future.
        </motion.p>

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
                  alt="Lex AI Club Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Grainy overlay on image */}
                <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
                  <svg className="w-full h-full">
                    <filter id="imageNoise">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
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

          {/* Right Column - Video & Perks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Experience Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden mb-8">
              {/* Video Player */}
              <VideoPlayer
                src="https://www.youtube.com/watch?v=7ARBJQn6QkM&pp=ygUfYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgcG9kY2FzdA%3D%3D"
                title="Inside the Club"
                subtitle="See how members connect and grow"
              />

              {/* Community Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-coral-50 text-neutral-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
                  Membership Includes
                </span>
                <h3 className="text-xl font-serif text-neutral-900 mb-3">Your All-Access Pass</h3>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                  Unlimited community access, mentor network, weekly events, recruiter and investor
                  connections, plus our self-paced AI fellowship curriculum and AI for Leaders
                  curriculum.
                </p>
                <button className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all">
                  See what&apos;s included
                </button>
              </div>
            </div>

            {/* Community Perks */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {communityPerks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 bg-neutral-50 text-neutral-700 text-sm font-medium rounded-xl border border-neutral-100"
                >
                  <perk.icon className="w-5 h-5 text-coral-500" />
                  {perk.label}
                </motion.div>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-9 text-white"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-4xl font-bold">500+</p>
                  <p className="text-xs text-neutral-400 mt-1">Members</p>
                </div>
                <div>
                  <p className="text-2xl md:text-4xl font-bold">10+</p>
                  <p className="text-xs text-neutral-400 mt-1">Tier-1 Mentors</p>
                </div>
                <div>
                  <p className="text-2xl md:text-4xl font-bold">8+</p>
                  <p className="text-xs text-neutral-400 mt-1">Countries</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
