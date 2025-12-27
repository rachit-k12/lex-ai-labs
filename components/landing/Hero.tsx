'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, ChevronRight, GraduationCap, Sparkles, User } from 'lucide-react';
import Link from 'next/link';
import Navigation from './Navigation';

const personaOptions = [
  {
    icon: User,
    label: 'Individual',
    title: 'Build AI for your career and leadership',
    href: '/individuals',
    hoverColor: 'coral',
  },
  {
    icon: Building2,
    label: 'Enterprise',
    title: 'Build AI capability across your organization',
    href: '/enterprises',
    hoverColor: 'blue',
  },
  {
    icon: GraduationCap,
    label: 'Institution',
    title: 'Modernize AI education at scale',
    href: '/institutions',
    hoverColor: 'purple',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-40 right-10 w-80 h-80 bg-coral-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Headlines */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-neutral-700">
                  Enterprise AI Capability
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight"
            >
              Building &nbsp;
              <span className="italic text-blue-500">AI Capability </span>for the world
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-md text-neutral-600 max-w-lg leading-relaxed mb-8"
            >
              We help organizations design, deploy, and scale AI systems grounded in first
              principles — beyond tools and point solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-sm text-neutral-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral-500 rounded-full" />
                <span>500+ Engineers Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral-500 rounded-full" />
                <span>30+ Production AI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral-500 rounded-full" />
                <span>Enterprise AI Deployments</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Persona Selection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Are you an...
            </p>

            {personaOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Link href={option.href} className="block group">
                  <div
                    className={`relative flex items-center gap-5 p-5 rounded-2xl border-2 bg-white/60 border-neutral-200 transition-all duration-300 ${
                      option.hoverColor === 'coral'
                        ? 'hover:border-coral-300 hover:bg-coral-50/50'
                        : option.hoverColor === 'blue'
                          ? 'hover:border-blue-300 hover:bg-blue-50/50'
                          : option.hoverColor === 'purple'
                            ? 'hover:border-purple-300 hover:bg-purple-50/50'
                            : 'hover:border-neutral-400 hover:bg-white'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-neutral-100 transition-all group-hover:scale-110 ${
                        option.hoverColor === 'coral'
                          ? 'group-hover:bg-coral-100'
                          : option.hoverColor === 'blue'
                            ? 'group-hover:bg-blue-100'
                            : option.hoverColor === 'purple'
                              ? 'group-hover:bg-purple-100'
                              : 'group-hover:bg-neutral-200'
                      }`}
                    >
                      <option.icon
                        className={`w-7 h-7 text-neutral-600 transition-colors ${
                          option.hoverColor === 'coral'
                            ? 'group-hover:text-coral-500'
                            : option.hoverColor === 'blue'
                              ? 'group-hover:text-blue-500'
                              : option.hoverColor === 'purple'
                                ? 'group-hover:text-purple-500'
                                : 'group-hover:text-neutral-800'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-0.5">
                        {option.label}
                      </h3>
                      <p className="text-sm text-neutral-600">{option.title}</p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-500 transition-all group-hover:translate-x-1 ${
                        option.hoverColor === 'coral'
                          ? 'group-hover:bg-coral-500 group-hover:text-white'
                          : option.hoverColor === 'blue'
                            ? 'group-hover:bg-blue-500 group-hover:text-white'
                            : option.hoverColor === 'purple'
                              ? 'group-hover:bg-purple-500 group-hover:text-white'
                              : 'group-hover:bg-neutral-900 group-hover:text-white'
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
