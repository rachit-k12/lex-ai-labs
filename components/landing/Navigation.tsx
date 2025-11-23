'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, X, Menu } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Lex AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              Home
            </Link>
            <Link
              href="https://www.lexailabs.com/about"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              About Lex AI
            </Link>
            <Link
              href="https://aiseekhegaindia.com/fellowship/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              Programs
            </Link>
            <Link
              href="https://www.lexailabs.com/companies"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              Companies
            </Link>
            <Link
              href="https://www.lexailabs.com/contact"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="https://aiseekhegaindia.com/fellowship/"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl z-50">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/"
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="https://www.lexailabs.com/about"
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              About Lex AI
            </Link>
            <Link
              href="https://aiseekhegaindia.com/fellowship/"
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              Programs
            </Link>
            <Link
              href="https://www.lexailabs.com/companies"
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              Companies
            </Link>
            <Link
              href="https://www.lexailabs.com/contact"
              className="block text-base font-medium text-slate-600 hover:text-slate-900"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="https://aiseekhegaindia.com/fellowship/"
                className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-slate-900 rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

