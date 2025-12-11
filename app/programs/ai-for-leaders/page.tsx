'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check, Briefcase, Target, TrendingUp, Users } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import LeadCaptureDialog from '@/components/shared/LeadCaptureDialog';

const modules = [
  {
    title: 'AI Strategy & Vision',
    description: 'Understand the AI landscape and define your organization\'s AI roadmap',
  },
  {
    title: 'Building AI Teams',
    description: 'Learn to hire, structure, and lead high-performing AI teams',
  },
  {
    title: 'AI Product Development',
    description: 'From ideation to launch - building AI-first products that scale',
  },
  {
    title: 'AI Implementation',
    description: 'Technical foundations for leaders - making informed decisions',
  },
  {
    title: 'AI Ethics & Governance',
    description: 'Responsible AI practices and regulatory compliance',
  },
  {
    title: 'AI Transformation',
    description: 'Change management and organizational transformation with AI',
  },
];

const features = [
  { icon: Briefcase, title: '8 Weeks', description: 'Executive program' },
  { icon: Target, title: 'Strategy Focus', description: 'Business outcomes' },
  { icon: TrendingUp, title: 'Case Studies', description: 'Real-world examples' },
  { icon: Users, title: 'Peer Network', description: 'C-suite connections' },
];

const targetAudience = [
  'CTOs and VPs of Engineering',
  'Product Leaders building AI products',
  'Founders of AI-first startups',
  'Business leaders driving AI transformation',
  'Executives evaluating AI investments',
];

export default function AIForLeadersPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [modulesRef, modulesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral-50 text-coral-600 rounded-full text-sm font-medium mb-6 border border-coral-100">
              <Briefcase className="w-4 h-4" />
              Executive Program
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6">
              AI for Leaders
              <br />
              <span className="italic text-blue-500">& Executives</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
              An 8-week executive program for leaders who want to drive AI transformation. Learn AI strategy, build teams, and make informed technology decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full transition-all"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-full transition-all border border-neutral-200">
                Download Brochure
              </button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200"
                >
                  <feature.icon className="w-5 h-5 text-coral-500" />
                  <div>
                    <p className="text-neutral-900 font-medium text-sm">{feature.title}</p>
                    <p className="text-neutral-500 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6 italic">
                Designed for Leaders
              </h2>
              <p className="text-neutral-600 text-lg mb-8">
                This program is built for executives and leaders who need to understand AI at a strategic level to drive transformation in their organizations.
              </p>

              <div className="space-y-4">
                {targetAudience.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-coral-600" />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Coral shadow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-coral-200/50 to-coral-100/30 rounded-3xl transform rotate-2" />
              <div
                className="relative aspect-[4/3] rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1000&auto=format&fit=crop')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section ref={modulesRef} className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
              Program Modules
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Six comprehensive modules covering everything you need to lead AI initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-coral-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center mb-4">
                  <span className="text-coral-600 font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-neutral-600">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="ctaNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ctaNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">
            Ready to lead AI transformation?
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Join a cohort of executives from leading companies. Limited seats available.
          </p>

          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 border border-white/10">
            <p className="text-neutral-400 line-through text-lg mb-2">₹79,999</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-neutral-400 text-2xl">₹</span>
              <span className="font-serif text-6xl text-white">59,999</span>
            </div>
            <p className="text-neutral-500 mb-8">One-time payment</p>

            <button
              onClick={() => setDialogOpen(true)}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-100 transition-all"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        source="ai-for-leaders"
      />
    </div>
  );
}
