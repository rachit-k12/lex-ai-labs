'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const menuLinks = [
  { label: 'The Network', href: '#network' },
  { label: 'Community', href: '#community' },
  { label: 'Member Stories', href: '#stories' },
  { label: 'Apply', href: '#apply' },
];

const policyLinks = [
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/lex-ai-labs', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/lexailabs', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/lexailabs/', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-neutral-50 to-white text-neutral-900 overflow-hidden border-t border-neutral-200"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-neutral-900 mb-6 text-base uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <Image
              src="/assets/lexailogo.svg"
              alt="Lex AI Club"
              width={80}
              height={80}
              className="w-56 h-56 mx-auto lg:mx-0"
            />
          </div>

          {/* Get in Touch */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-neutral-900 mb-6 text-base uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-base">
              <p>
                <a
                  href="mailto:team@lexailabs.in"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  team@lexailabs.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+911169266219"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  +91 11-69266219
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-neutral-900 mb-6 text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {menuLinks.concat(policyLinks).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-neutral-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-neutral-500">
            &copy; {new Date().getFullYear()} Lex AI Club. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-base text-neutral-600">Built for the future of AI</p>
            <span className="text-blue-500">•</span>
            <p className="text-base text-blue-600 font-semibold">#AISeekhegaIndia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
