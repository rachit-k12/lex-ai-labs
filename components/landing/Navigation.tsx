'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <Image
              src="/assets/lexailogo2.svg"
              alt="Lex AI Labs"
              width={56}
              height={56}
              className="w-10 h-10"
            />
            <span className="text-xl md:text-2xl font-serif italic text-neutral-900 tracking-tight">
              Lex AI
            </span>
          </Link>

          {/* CTA Button */}
          <button
            onClick={scrollToWaitlist}
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all"
          >
            Join Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
