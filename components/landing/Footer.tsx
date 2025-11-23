import Link from 'next/link';
import { Brain, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-50 border-t border-slate-200 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">Lex AI Labs</span>
            </Link>
            <p className="text-sm text-slate-500 mb-6">
              Empowering India to learn, build, and lead with AI.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/lex-ai-labs"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/lexailabs/"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-200 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  href="https://aiseekhegaindia.com/fellowship/"
                  className="hover:text-brand-600 transition-colors"
                >
                  AI Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="https://aiseekhegaindia.com/fellowship/"
                  className="hover:text-brand-600 transition-colors"
                >
                  AI for Leaders
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lexailabs.com/companies"
                  className="hover:text-brand-600 transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  href="https://www.lexailabs.com/about"
                  className="hover:text-brand-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lexailabs.com/support"
                  className="hover:text-brand-600 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lexailabs.com/contact"
                  className="hover:text-brand-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contact@lexailabs.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 999 669 2323
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Gurgaon, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; 2025 LexAI Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="https://www.lexailabs.com/terms"
              className="hover:text-slate-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="https://www.lexailabs.com/privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="https://www.lexailabs.com/refunds"
              className="hover:text-slate-600 transition-colors"
            >
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

