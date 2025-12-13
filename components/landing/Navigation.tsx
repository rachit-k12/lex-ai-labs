'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Network', href: '#network' },
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestInvite = () => {
    setMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <Image
                src="/assets/lexailogo.svg"
                alt="Lex AI Club"
                width={72}
                height={72}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-2xl md:text-3xl font-serif italic text-neutral-900 tracking-tight">
                Lex AI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all"
              >
                Request Invite
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Modern Overlay Style */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-100">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/assets/lexailogo.svg"
                      alt="Lex AI Club"
                      width={72}
                      height={72}
                      className="w-8 h-8"
                    />
                    <span className="text-2xl font-serif italic text-neutral-900">Lex AI</span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 py-6">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-4 px-4 text-lg font-medium text-neutral-900 rounded-2xl hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                        >
                          {link.label}
                          <ArrowRight className="w-5 h-5 text-neutral-400" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-6 border-t border-neutral-100"
                  >
                    <button
                      onClick={handleRequestInvite}
                      className="flex items-center justify-center gap-3 w-full py-4 text-base font-medium text-white bg-neutral-900 rounded-2xl hover:bg-neutral-800 active:scale-[0.98] transition-all"
                    >
                      Request an Invite
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-center text-sm text-neutral-500 mt-4">
                      Join India&apos;s most exclusive AI network
                    </p>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
