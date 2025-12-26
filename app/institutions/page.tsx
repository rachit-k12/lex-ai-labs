'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building, GraduationCap, School, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

const institutionTypes = [
  {
    icon: GraduationCap,
    title: 'Higher Education',
    subtitle: 'Colleges & Universities',
    description:
      'Upgrade curriculum, faculty capability, and industry readiness for engineering programs.',
    href: '/institutions/higher-ed',
    features: [
      'Full AI curriculum design',
      'Faculty enablement programs',
      'Co-branded semester programs',
      'Accreditation support',
    ],
    color: 'blue',
  },
  {
    icon: School,
    title: 'Schools (K-12)',
    subtitle: 'For Future AI Leaders',
    description:
      'Age-appropriate AI literacy and the FutureMinds Fellowship for students targeting top universities.',
    href: '/institutions/schools',
    features: [
      'FutureMinds AI Fellowship',
      'Ivy League profile building',
      'Computational thinking',
      'Project-based learning',
    ],
    color: 'coral',
  },
];

export default function InstitutionsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <filter id="noiseFilterInst">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterInst)" opacity="0.4" />
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
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-8">
                  <Building className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-neutral-700">
                    For Educational Institutions
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-[1.05] mb-6 tracking-tight">
                  Modernize <span className="italic text-purple-500">AI Education</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-8">
                  Lex AI&apos;s institutional offerings solve capability gaps at the system level
                  &mdash; by upgrading curriculum, faculty, and outcomes together.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Curriculum design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Faculty enablement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Student outcomes</span>
                  </div>
                </div>
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
                        <Building className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">Two Institution Types</p>
                        <p className="text-sm text-neutral-500">Tailored for your needs</p>
                      </div>
                    </div>

                    {/* Mini preview of options */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <GraduationCap className="w-5 h-5 text-neutral-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">Higher Education</p>
                          <p className="text-xs text-neutral-500">Colleges & Universities</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-coral-50/50 rounded-xl border border-coral-100">
                        <School className="w-5 h-5 text-coral-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900">Schools (K-12)</p>
                          <p className="text-xs text-neutral-500">FutureMinds Fellowship</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-coral-400" />
                      </div>
                    </div>

                    {/* Philosophy */}
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <p className="text-sm text-neutral-600 italic">
                        &ldquo;We don&apos;t just deliver content. We upgrade the entire
                        system.&rdquo;
                      </p>
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

      {/* Institution Type Cards */}
      <section ref={cardsRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Choose Your Path
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">
              Who Are <span className="italic">You?</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Select your institution type to explore tailored solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {institutionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={type.href} className="block group">
                  <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 hover:border-neutral-300 hover:shadow-xl transition-all h-full">
                    <div
                      className={`w-16 h-16 ${type.color === 'blue' ? 'bg-blue-50' : 'bg-coral-50'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <type.icon
                        className={`w-8 h-8 ${type.color === 'blue' ? 'text-blue-500' : 'text-coral-500'}`}
                      />
                    </div>

                    <span
                      className={`text-sm font-medium ${type.color === 'blue' ? 'text-blue-500' : 'text-coral-500'}`}
                    >
                      {type.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mt-1 mb-4">
                      {type.title}
                    </h3>
                    <p className="text-neutral-600 mb-6">{type.description}</p>

                    <ul className="space-y-3 mb-8">
                      {type.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <Sparkles
                            className={`w-4 h-4 ${type.color === 'blue' ? 'text-blue-400' : 'text-coral-400'}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`inline-flex items-center gap-2 font-medium ${type.color === 'blue' ? 'text-blue-500 group-hover:text-blue-600' : 'text-coral-500 group-hover:text-coral-600'} transition-colors`}
                    >
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lex AI for Institutions */}
      <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-6">
              Education Infrastructure, <span className="italic">Not Courses</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              We don&apos;t just add courses. We upgrade the entire system &mdash; curriculum
              design, faculty capability, and hiring standards &mdash; so institutions can produce
              genuinely capable AI practitioners.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { value: '15+', label: 'Partner Institutions' },
                { value: '100+', label: 'Faculty Trained' },
                { value: '2000+', label: 'Students Impacted' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-serif text-neutral-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
