import { CheckCircle, Code, MessageCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Two Programs. One Goal.
          </h2>
          <p className="text-lg text-slate-500">
            Learn to build and deploy production AI systems. Weekend format for working
            professionals. Live sessions, code reviews, 1:1 mentorship.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Card 1: Engineers */}
          <div className="bg-white rounded-[2rem] p-2 shadow-card hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="p-8 pb-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">AI Fellowship</h3>
              <p className="text-slate-500 mt-2 font-medium">For Engineers Building AI Systems</p>

              <div className="my-8 pt-8 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">₹25,500</span>
                  <span className="text-sm text-slate-400 font-medium">+ 18% GST</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-brand-600 w-5 h-5 shrink-0 mt-0.5" />
                  Build & Deploy ML Models
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-brand-600 w-5 h-5 shrink-0 mt-0.5" />
                  Fine-tune LLMs (GPT, Llama)
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-brand-600 w-5 h-5 shrink-0 mt-0.5" />
                  Create Multi-Agent Systems
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-brand-600 w-5 h-5 shrink-0 mt-0.5" />
                  Weekly Code Reviews + Mentorship
                </li>
              </ul>
            </div>
            <Link
              href="https://aiseekhegaindia.com/fellowship/"
              className="block w-full py-4 rounded-[1.5rem] bg-slate-50 text-slate-900 font-bold text-center hover:bg-slate-900 hover:text-white transition-colors duration-300"
            >
              Enroll Now
            </Link>
          </div>

          {/* Card 2: Leaders (Featured) */}
          <div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl shadow-brand-900/20 transform lg:-translate-y-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-glow">
              Most Popular
            </div>

            <div className="p-8 pb-6">
              <div className="w-12 h-12 bg-slate-800 text-brand-400 rounded-xl flex items-center justify-center text-2xl mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI for Leaders</h3>
              <p className="text-slate-400 mt-2 font-medium">For Executives Making AI Decisions</p>

              <div className="my-8 pt-8 border-t border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">₹25,500</span>
                  <span className="text-sm text-slate-500 font-medium">+ 18% GST</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle className="text-brand-500 w-5 h-5 shrink-0 mt-0.5" />
                  Evaluate AI Vendors & Tools
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle className="text-brand-500 w-5 h-5 shrink-0 mt-0.5" />
                  Build AI Adoption Roadmaps
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle className="text-brand-500 w-5 h-5 shrink-0 mt-0.5" />
                  Understand Technical Trade-offs
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle className="text-brand-500 w-5 h-5 shrink-0 mt-0.5" />
                  Lead AI Transformation Teams
                </li>
              </ul>
            </div>
            <Link
              href="https://aiseekhegaindia.com/fellowship/"
              className="block w-full py-4 rounded-[1.5rem] bg-brand-600 text-white font-bold text-center hover:bg-brand-500 transition-colors duration-300 shadow-lg shadow-brand-600/25"
            >
              Enroll Now
            </Link>
          </div>

          {/* Card 3: Consultation */}
          <div className="bg-white rounded-[2rem] p-2 shadow-card hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="p-8 pb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Free Consultation</h3>
              <p className="text-slate-500 mt-2 font-medium">30-Minute Strategy Session</p>

              <div className="my-8 pt-8 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">FREE</span>
                  <span className="text-sm text-slate-400 font-medium">/ 30 Mins</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  Assess Your Current AI Skills
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  Get Custom Learning Path
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  See if Program Fits You
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                  Zero Pressure, Just Advice
                </li>
              </ul>
            </div>
            <Link
              href="https://www.lexailabs.com/contact"
              className="block w-full py-4 rounded-[1.5rem] bg-slate-50 text-slate-900 font-bold text-center hover:bg-slate-900 hover:text-white transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
