'use client';

import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/lex-ai-labs', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/lexailabs', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/lexailabs/', label: 'Instagram' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-neutral-900 text-white overflow-hidden relative">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="footerNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#footerNoise)" opacity="0.4" />
        </svg>
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-coral-400/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Ready to <span className="italic">Transform</span> Your AI Journey?
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto lg:mx-0">
              Join 500+ engineers, founders, and leaders building the future of AI in India.
            </p>

            {/* Waitlist Form */}
            {isSubmitted ? (
              <div className="inline-flex items-center gap-2 px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-full">
                <svg
                  className="w-5 h-5 text-green-400"
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
                <span className="text-green-400 text-sm font-medium">
                  You&apos;re on the waitlist!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 text-base bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-500 transition-all placeholder:text-white/40 text-white"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-100 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  {!isSubmitting && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right - Info */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6">
              <Image
                src="/assets/lexailogo2.svg"
                alt="Lex AI Labs"
                width={48}
                height={48}
                className="w-20 h-20"
              />
              <span className="text-6xl font-serif italic">Lex AI</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center lg:justify-end mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-white hover:text-neutral-900 transition-all"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-1 text-sm text-white/50">
              <p>
                <a href="mailto:team@lexailabs.in" className="hover:text-white transition-colors">
                  team@lexailabs.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Lex AI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-white/40">Built for the future of AI</p>
            <span className="text-coral-400">•</span>
            <p className="text-sm text-coral-400 font-medium">#AISeekhegaIndia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
