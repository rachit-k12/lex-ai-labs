'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

interface SubLink {
  label: string;
  href: string;
}

interface NavLinkType {
  label: string;
  href: string;
  subLinks?: SubLink[];
}

const navLinks: NavLinkType[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Individuals',
    href: '/individuals',
    subLinks: [
      { label: 'AI Fellowship', href: '/individuals/ai-fellowship' },
      { label: 'AI for Leaders', href: '/individuals/ai-for-leaders' },
    ],
  },
  { label: 'Enterprises', href: '/enterprises' },
  {
    label: 'Institutions',
    href: '/institutions',
    subLinks: [
      { label: 'Higher Education', href: '/institutions/higher-ed' },
      { label: 'Schools (K-12)', href: '/institutions/schools' },
    ],
  },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

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
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image
                src="/assets/lexailogo.svg"
                alt="Lex AI Labs"
                width={72}
                height={72}
                className="w-10 h-10 sm:w-12 sm:h-12 p-1 mr-2 sm:p-2"
              />
              <span className="text-4xl md:text-4xl font-serif italic text-neutral-900 tracking-tight">
                Lex AI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.subLinks && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.subLinks ? (
                    <>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 px-4 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        />
                      </Link>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 overflow-hidden"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="block px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all"
              >
                Get Started
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
                className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-2xl max-h-[90vh] overflow-y-auto"
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
                      alt="Lex AI Labs"
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
                        {link.subLinks ? (
                          <div>
                            <button
                              onClick={() =>
                                setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                              }
                              className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-neutral-900 rounded-2xl hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                            >
                              {link.label}
                              <ChevronDown
                                className={`w-5 h-5 text-neutral-400 transition-transform ${mobileDropdown === link.label ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileDropdown === link.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 space-y-1 pb-2">
                                    {link.subLinks.map((subLink) => (
                                      <Link
                                        key={subLink.href}
                                        href={subLink.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-between py-3 px-4 text-base font-medium text-neutral-600 rounded-xl hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                                      >
                                        {subLink.label}
                                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-4 px-4 text-lg font-medium text-neutral-900 rounded-2xl hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                          >
                            {link.label}
                            <ArrowRight className="w-5 h-5 text-neutral-400" />
                          </Link>
                        )}
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
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-center text-sm text-neutral-500 mt-4">
                      Build Real AI Capability
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
