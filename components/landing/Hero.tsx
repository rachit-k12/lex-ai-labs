'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';
export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden">
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

      {/* Decorative gradient blobs - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-96 h-96 bg-coral-500/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="hidden sm:block absolute bottom-20 right-10 w-80 h-80 bg-coral-500/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-coral-100/30 to-transparent rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-16 pb-8 sm:pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-5 sm:mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-coral-500" />
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            Early Access Opening Soon
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-neutral-900 leading-[1.05] mb-5 sm:mb-6 tracking-tight"
        >
          Build Intelligence.
          <br />
          <span className="italic text-blue-500">Build India.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
        >
          Join India&apos;s most ambitious community of engineers, founders &amp; leaders building
          real AI. Get mentorship from Google, Amazon, and Microsoft engineers.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          id="waitlist"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto px-2 sm:px-4"
        >
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">You&apos;re on the list!</h3>
              <p className="text-sm text-neutral-600">
                We&apos;ll notify you when early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 text-base bg-white border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all placeholder:text-neutral-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 mt-4 text-center">
                Join 500+ engineers already on the waitlist. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-coral-500 rounded-full"></span>
            Real-world AI engineering
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-coral-500 rounded-full"></span>
            Elite cohort-based learning
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-coral-500 rounded-full"></span>
            World-class mentorship
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
