'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Linkedin, Play } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import LeadCaptureDialog from '@/components/shared/LeadCaptureDialog';

const transformations = [
  {
    name: 'Deepak Kumar',
    before: 'Software Engineer at TCS',
    after: 'ML Engineer at Google',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    story: 'The fellowship completely transformed my career trajectory. The mentorship from Google engineers gave me insights I couldn\'t get anywhere else. Within 6 months of completing the program, I landed my dream role.',
    outcome: '3x salary increase',
  },
  {
    name: 'Karan Sharma',
    before: 'Data Analyst at Flipkart',
    after: 'Applied Scientist at Amazon',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    story: 'The hands-on projects and code reviews from senior engineers helped me build a portfolio that stood out. The community connections were invaluable for interview prep.',
    outcome: 'Career transition to ML',
  },
  {
    name: 'Priya Patel',
    before: 'Product Manager',
    after: 'AI Product Lead at Microsoft',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    story: 'As a PM, I needed to understand AI deeply to lead AI product initiatives. The AI for Leaders program gave me exactly that - strategic understanding without getting lost in implementation details.',
    outcome: 'Leading $10M AI initiative',
  },
  {
    name: 'Rahul Singh',
    before: 'Backend Developer',
    after: 'Founder, AI Startup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    story: 'Found my co-founder through the Lex AI community. The investor roundtables helped us raise our seed round. The network effect is real.',
    outcome: 'Raised ₹2Cr seed funding',
  },
  {
    name: 'Sneha Reddy',
    before: 'Research Associate',
    after: 'AI Research Engineer at DeepMind',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    story: 'The research-focused modules and connections to top AI labs helped me transition from academic research to industry research. The mentors helped refine my research direction.',
    outcome: 'Published at NeurIPS',
  },
  {
    name: 'Amit Verma',
    before: 'Full-stack Developer',
    after: 'LLM Engineer at OpenAI',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    story: 'The LLM and AI agents curriculum was exactly what I needed. Building real projects with guidance from experts accelerated my learning by years.',
    outcome: 'Moved to San Francisco',
  },
];

const stats = [
  { number: '500+', label: 'Members Transformed' },
  { number: '8+', label: 'Countries' },
  { number: '150%', label: 'Avg. Salary Increase' },
  { number: '50+', label: 'Companies Hired From Us' },
];

export default function StoriesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storiesRef, storiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6">
              Transformation
              <br />
              <span className="italic text-blue-500">Stories</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
              Real stories from our members who transformed their careers, landed dream roles, and built successful AI ventures.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-coral-100">
                <p className="font-serif text-4xl md:text-5xl text-neutral-900 mb-2">{stat.number}</p>
                <p className="text-neutral-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section ref={storiesRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gradient-to-br from-coral-50/50 to-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                {/* Header */}
                <div className="relative h-48 bg-neutral-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${story.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{story.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-neutral-300 text-sm line-through">{story.before}</span>
                      <ArrowRight className="w-3 h-3 text-coral-400" />
                      <span className="text-coral-400 text-sm font-medium">{story.after}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {story.outcome}
                    </span>
                    <button className="text-[#0077b5] hover:text-[#005885] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
              Watch Their Stories
            </h2>
            <p className="text-neutral-600 text-lg">
              Video testimonials from our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="relative aspect-video bg-gradient-to-br from-coral-100 to-coral-50 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Grainy texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <svg className="w-full h-full">
                    <filter id={`videoNoise-${idx}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.7"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#videoNoise-${idx})`} opacity="0.4" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-800 transition-all shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <p className="absolute bottom-4 left-4 text-neutral-700 font-medium">
                  Coming Soon
                </p>
              </div>
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
            Write your transformation story.
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Join the community that&apos;s helping professionals break into AI.
          </p>

          <button
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        source="stories"
      />
    </div>
  );
}
