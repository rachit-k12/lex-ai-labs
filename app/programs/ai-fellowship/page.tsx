'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check, Clock, Users, BookOpen, Award, Zap } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import LeadCaptureDialog from '@/components/shared/LeadCaptureDialog';

const curriculum = [
  {
    module: 'Module 1',
    title: 'Foundations of AI & Machine Learning',
    topics: ['Python for ML', 'Mathematics for AI', 'Data Processing', 'Model Basics'],
  },
  {
    module: 'Module 2',
    title: 'Deep Learning & Neural Networks',
    topics: ['Neural Network Architecture', 'CNNs & RNNs', 'Training Strategies', 'Optimization'],
  },
  {
    module: 'Module 3',
    title: 'Large Language Models (LLMs)',
    topics: ['Transformer Architecture', 'GPT & BERT', 'Fine-tuning', 'Prompt Engineering'],
  },
  {
    module: 'Module 4',
    title: 'AI Agents & RAG Systems',
    topics: ['Agent Architecture', 'Tool Use', 'RAG Implementation', 'Vector Databases'],
  },
  {
    module: 'Module 5',
    title: 'Production ML Systems',
    topics: ['MLOps', 'Model Deployment', 'Monitoring', 'Scaling'],
  },
  {
    module: 'Module 6',
    title: 'Capstone Project',
    topics: ['Real-world Problem', 'End-to-end Implementation', 'Presentation', 'Portfolio'],
  },
];

const features = [
  { icon: Clock, title: '12 Weeks', description: 'Intensive program' },
  { icon: Users, title: 'Cohort-based', description: 'Learn with peers' },
  { icon: BookOpen, title: '50+ Sessions', description: 'Expert-led classes' },
  { icon: Award, title: 'Certificate', description: 'Industry recognized' },
];

const outcomes = [
  'Build production-ready AI applications',
  'Master LLMs, RAG, and AI Agents',
  'Get mentorship from FAANG engineers',
  'Join an elite peer network',
  'Land high-paying AI roles',
  'Build your professional portfolio',
];

export default function AIFellowshipPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [curriculumRef, curriculumInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6 border border-blue-100">
              <Zap className="w-4 h-4" />
              Applications Open for Cohort 3
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6">
              AI Fellowship
              <br />
              <span className="italic text-blue-500">for Engineers</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
              A 12-week intensive program to master AI engineering. Learn LLMs, RAG systems, and AI agents from engineers at Google, Microsoft, and Amazon.
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
                Download Curriculum
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
                Who is this for?
              </h2>
              <p className="text-neutral-600 text-lg mb-8">
                The AI Fellowship is designed for software engineers who want to transition into AI/ML roles or level up their existing AI skills.
              </p>

              <div className="space-y-4">
                {[
                  'Software engineers with 1+ years experience',
                  'Backend/Full-stack developers interested in AI',
                  'Data engineers moving into ML',
                  'CS graduates looking to specialize in AI',
                ].map((item, idx) => (
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section ref={curriculumRef} className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
              Curriculum
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              A comprehensive curriculum designed by engineers from Google, Microsoft, and leading AI startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-coral-200 hover:shadow-lg transition-all"
              >
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {module.module}
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 mt-2 mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 italic">
                What you&apos;ll achieve
              </h2>

              <div className="space-y-4">
                {outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-coral-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-coral-400" />
                    </div>
                    <span className="text-neutral-200">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <p className="text-neutral-400 line-through text-lg mb-2">₹49,999</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-neutral-400 text-2xl">₹</span>
                  <span className="font-serif text-6xl text-white">39,999</span>
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
          </div>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        source="ai-fellowship"
      />
    </div>
  );
}
