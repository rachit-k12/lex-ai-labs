'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Linkedin, Sparkles, Trophy, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Mentor data with placeholder images and LinkedIn
const mentors = [
  { name: 'Puru Kathuria', role: 'Founder, Lex AI', org: 'Google', image: 'https://randomuser.me/api/portraits/men/32.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Aashish Joshi', role: 'Engineering Manager', org: 'Google', image: 'https://randomuser.me/api/portraits/men/44.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Nikhil Reedy', role: 'Scientist', org: 'IIT Delhi', image: 'https://randomuser.me/api/portraits/men/22.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Nipun Katyal', role: 'AI Engineer', org: 'US', image: 'https://randomuser.me/api/portraits/men/55.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Rohan Gurve', role: 'Software Engineer', org: 'Google', image: 'https://randomuser.me/api/portraits/men/67.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Vidhi Gupta', role: 'Engineering Manager', org: 'Google', image: 'https://randomuser.me/api/portraits/women/44.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Aakanksha', role: 'Tech Lead', org: 'Meesho', image: 'https://randomuser.me/api/portraits/women/65.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Divish', role: 'Tech Lead', org: 'Google', image: 'https://randomuser.me/api/portraits/men/75.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Sunil', role: 'Founder', org: 'BlueSemi', image: 'https://randomuser.me/api/portraits/men/86.jpg', linkedin: 'https://linkedin.com/in/' },
  { name: 'Nitin Bansal', role: 'Engineer', org: 'Databricks', image: 'https://randomuser.me/api/portraits/men/91.jpg', linkedin: 'https://linkedin.com/in/' },
];

const valueProps = [
  {
    icon: BookOpen,
    title: 'Real-World AI Training',
    description:
      'Learn practical AI engineering from engineers who build at Google, Amazon, and top startups.',
  },
  {
    icon: Users,
    title: 'Elite Cohort Experience',
    description:
      'Join a curated group of ambitious engineers, founders, and leaders building real AI products.',
  },
  {
    icon: Zap,
    title: '1:1 Mentorship Access',
    description:
      'Get direct guidance from world-class AI leaders who have shipped products at scale.',
  },
  {
    icon: Trophy,
    title: 'Accelerated Transformation',
    description:
      'Fast-track your career or company with hands-on projects and a powerful professional network.',
  },
];

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call - replace with actual waitlist API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-white text-neutral-900 antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/assets/lexailogo.svg"
                alt="Lex AI"
                width={32}
                height={32}
                className="w-16 h-16"
              />
              <span className="font-serif italic text-xl text-neutral-900">Lex AI</span>
            </div>
            <a
              href="#waitlist"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden">
          {/* Gradient Background - Coral tones */}
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

          {/* Decorative gradient blobs - Coral */}
          <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-coral-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-coral-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-coral-200/20 to-transparent rounded-full blur-2xl" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-24 pb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-neutral-200 mb-6 sm:mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-coral-500" />
              <span className="text-sm font-medium text-neutral-700">
                Early Access Opening Soon
              </span>
            </motion.div>

            {/* Main Headline - neutral-900 with blue-500 accent */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-[1.1] mb-6 sm:mb-8 tracking-tight"
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
              className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4"
            >
              Join India&apos;s most ambitious community of engineers, founders &amp; leaders
              building real AI. Get access to elite training, mentorship, and a network that accelerates your career.
            </motion.p>

            {/* Waitlist Form */}
            <motion.div
              id="waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl mx-auto px-4"
            >
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">You&apos;re on the list!</h3>
                  <p className="text-sm text-neutral-600">We&apos;ll notify you when early access opens.</p>
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
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
                  <p className="text-xs text-neutral-500 mt-3">
                    Join 500+ engineers already on the waitlist
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* Value Propositions Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 block">
                What You Get
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4">
                Your Path to <span className="italic text-blue-500">AI Excellence</span>
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Everything you need to transition into AI or level up your expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 sm:p-8 bg-white border border-neutral-200 rounded-2xl hover:border-coral-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-5">
                    <prop.icon className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">{prop.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-coral-50/30 relative overflow-hidden">
          {/* Subtle coral glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-coral-200/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 block">
                Learn From The Best
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4">
                Mentors from <span className="italic text-blue-500">World-Class Teams</span>
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Get direct access to engineers and leaders from Google, Databricks, Meesho, and top AI startups
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group text-center"
                >
                  {/* Avatar */}
                  <div className="relative mx-auto mb-5 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
                    <div className="relative w-full h-full rounded-full border-4 border-neutral-100 shadow-md group-hover:border-coral-200 group-hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-lg sm:text-xl text-neutral-900 mb-1 group-hover:text-neutral-800 transition-colors">
                    {mentor.name}
                  </h4>

                  {/* Role */}
                  <p className="text-sm text-neutral-500 mb-1">{mentor.role}</p>

                  {/* Organization */}
                  <p className="text-sm font-medium text-blue-500 mb-3">{mentor.org}</p>

                  {/* LinkedIn Button */}
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 bg-neutral-100 rounded-full text-neutral-500 hover:bg-[#0077b5] hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-28 bg-neutral-900 relative overflow-hidden">
          {/* Decorative coral blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />

          {/* Grainy texture overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <svg className="w-full h-full">
              <filter id="noiseFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter2)" opacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
                Your Network Becomes Your
                <br />
                <span className="italic text-coral-400">Net Worth</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                Stop learning alone. Join a community of builders who push each other to ship real AI products.
              </p>

              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-100 transition-all shadow-xl"
              >
                Request Early Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/lexailogo.svg"
                alt="Lex AI"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-serif italic text-lg text-neutral-900">Lex AI</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-blue-500 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Lex AI. All rights reserved.
            </p>
            <p className="text-sm text-neutral-600 mt-2">
              Building India&apos;s AI future, one engineer at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
