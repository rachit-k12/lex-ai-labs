'use client';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const menuLinks = [
  { label: 'Individuals', href: '/individuals' },
  { label: 'Enterprises', href: '/enterprises' },
  { label: 'Institutions', href: '/institutions' },
  { label: 'Higher Education', href: '/institutions/higher-ed' },
  { label: 'Schools (K-12)', href: '/institutions/schools' },
];

const policyLinks = [
  { label: 'Refund Policy', href: '/refunds' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/106448852/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/labs_ai80315', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/lexailabs/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@LexAILabs', label: 'YouTube' },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/people/Lex-AI-Labs/61580454084785/',
    label: 'Facebook',
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      // className="bg-gradient-to-b from-neutral-50 to-white text-neutral-900 overflow-hidden border-t border-neutral-200"
      className=" text-neutral-900 overflow-hidden"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 !pb-10">
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
              className="w-56 h-56 p-4 mx-auto lg:mx-0"
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
                  href="tel:+919996692323"
                  className="text-neutral-600 hover:text-blue-600 transition-colors"
                >
                  +91 99966 92323
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
        <div className="pt-6 mt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-neutral-500">
            &copy; {new Date().getFullYear()} Lex AI Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-base text-neutral-600">Build Intelligence. Build India.</p>
            <span className="text-blue-500">•</span>
            <p className="text-base text-blue-600 font-semibold">#AISeekhegaIndia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
