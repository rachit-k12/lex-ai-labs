'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, School, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

const routes = [
  {
    icon: GraduationCap,
    title: 'Higher Education',
    subtitle: 'Colleges & Universities',
    description:
      'AI curriculum design, faculty enablement, and co-branded programs that produce industry-ready graduates.',
    href: '/institutions/higher-ed',
    stats: ['10+ Partners', '85% Placement', 'Full Curriculum'],
  },
  {
    icon: School,
    title: 'Schools (K-12)',
    subtitle: 'Building Future AI Leaders',
    description:
      'Age-appropriate AI literacy and the FutureMinds Fellowship for students preparing for top universities.',
    href: '/institutions/schools',
    stats: ['Grades 6-12', '100+ Alumni', 'Safe & Engaging'],
  },
];

export default function InstitutionsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [routerRef, routerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex flex-col overflow-hidden">
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
              className="text-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm mb-8">
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-neutral-700">
                  For Educational Institutions
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                Transform How <span className="italic text-coral-500">AI Is Taught</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                From curriculum design to faculty enablement. We help institutions build AI programs
                that produce graduates who can actually deliver.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Two Path Router */}
      <section ref={routerRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={routerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Choose Your Path
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
              How Can We <span className="italic">Help?</span>
            </h2>
          </motion.div>

          {/* Two Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <motion.div
                key={route.title}
                initial={{ opacity: 0, y: 30 }}
                animate={routerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                <Link href={route.href} className="block h-full group">
                  <div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-coral-200 hover:shadow-xl transition-all h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-coral-50 rounded-2xl flex items-center justify-center group-hover:bg-coral-100 transition-colors">
                        <route.icon className="w-7 h-7 text-coral-500" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-neutral-900 mb-1">{route.title}</h3>
                        <p className="text-coral-500 text-sm">{route.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed flex-1">{route.description}</p>

                    {/* Stats Pills */}
                    <div className="flex flex-wrap gap-2 mt-6 mb-6">
                      {route.stats.map((stat) => (
                        <span
                          key={stat}
                          className="text-xs font-medium px-3 py-1.5 bg-neutral-100 text-neutral-600 rounded-full"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-neutral-100">
                      <span className="inline-flex items-center gap-2 font-medium text-coral-500 group-hover:text-coral-600 transition-colors">
                        Explore Solutions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lex AI - Dark */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="whyNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#whyNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                Why Lex AI
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Not Just Curriculum. <span className="italic">Infrastructure.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                We don&apos;t just design courses. We build complete AI education infrastructure —
                curriculum, faculty training, assessment frameworks, and industry connections — that
                produces graduates who can actually contribute from day one.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { value: '15+', label: 'Institutions' },
                  { value: '85%', label: 'Placement Rate' },
                  { value: '4.8/5', label: 'Average Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-5xl text-coral-400 mb-2">{stat.value}</p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
