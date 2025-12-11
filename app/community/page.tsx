'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, Calendar, MessageCircle, Video, Award, Zap } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import LeadCaptureDialog from '@/components/shared/LeadCaptureDialog';

const benefits = [
  {
    icon: Users,
    title: 'Elite Private Network',
    description: 'Access a curated group of 500+ AI professionals from Google, Microsoft, Amazon, and top startups.',
  },
  {
    icon: Calendar,
    title: 'Weekly Events',
    description: 'Roundtables, AMAs, and workshops with industry leaders every week.',
  },
  {
    icon: MessageCircle,
    title: 'Peer Support',
    description: 'Get feedback on your work, code reviews, and guidance from experienced practitioners.',
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: '90-minute expert-led sessions on trending AI topics every week.',
  },
  {
    icon: Award,
    title: 'Mentorship',
    description: '1:1 mentorship access with Tier-1 engineers and founders.',
  },
  {
    icon: Zap,
    title: 'AI Credits',
    description: 'Exclusive credits and perks from top AI tools worth ₹2L+.',
  },
];

const upcomingEvents = [
  {
    title: 'How to Build AI Agents That Actually Work',
    speaker: 'Aashish Joshi',
    company: 'Google',
    date: 'Dec 15, 2024',
    time: '7:00 PM IST',
    type: 'Live Session',
  },
  {
    title: 'AI Startup Pitch Night',
    speaker: 'Multiple Founders',
    company: 'Lex AI',
    date: 'Dec 17, 2024',
    time: '6:00 PM IST',
    type: 'Roundtable',
  },
  {
    title: 'RAG Systems in Production',
    speaker: 'Nipun Katyal',
    company: 'US Tech',
    date: 'Dec 20, 2024',
    time: '7:30 PM IST',
    type: 'Workshop',
  },
];

export default function CommunityPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              India&apos;s Most Exclusive
              <br />
              <span className="italic text-blue-500">AI Community</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
              Access Tier-1 engineers, founders, and investors. Your network becomes your strongest career asset.
            </p>

            <button
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full transition-all"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section ref={benefitsRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
              What you get as a member
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Pay once, get indefinite long-term value through a premium AI community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gradient-to-br from-coral-50/50 to-white rounded-2xl p-6 border border-neutral-100 hover:border-coral-200 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center mb-4 group-hover:bg-coral-100 transition-colors">
                  <benefit.icon className="w-6 h-6 text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
                Upcoming Events
              </h2>
              <p className="text-neutral-600 text-lg">
                Weekly sessions with industry experts and community roundtables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-coral-200 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-coral-50 text-coral-600 text-xs font-medium rounded-full mb-4">
                  {event.type}
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4">
                  {event.speaker} • {event.company}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">{event.date}</span>
                  <span className="text-blue-600 font-medium">{event.time}</span>
                </div>
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
            Your network is your net worth.
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Join the inner circle of India&apos;s top AI professionals.
          </p>

          <button
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
          >
            Apply to Join
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        source="community"
      />
    </div>
  );
}
