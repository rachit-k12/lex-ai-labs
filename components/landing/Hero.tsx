import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 md:mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            New Cohorts Starting Monthly
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-[1.1] px-2">
            Learn to build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-brand-400">
              production AI systems
            </span>{' '}
            in 12 weeks
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Weekend AI training for working professionals. Build real ML models, fine-tune LLMs, and
            deploy AI agents. Taught by a Google engineer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 px-4">
            <Link
              href="#programs"
              className="w-full sm:w-auto sm:min-w-[180px] px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1 text-center"
            >
              Explore Programs
            </Link>
            <Link
              href="https://www.lexailabs.com/contact"
              className="w-full sm:w-auto sm:min-w-[180px] px-8 py-4 text-base font-semibold text-slate-600 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 text-center"
            >
              Book Consultation
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-500 px-2">
            <span className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 whitespace-nowrap">
              Live Weekend Sessions
            </span>
            <span className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 whitespace-nowrap">
              1:1 Mentorship
            </span>
            <span className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 whitespace-nowrap">
              Career Support
            </span>
            <span className="px-3 sm:px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 whitespace-nowrap">
              Build Your Own GPT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
