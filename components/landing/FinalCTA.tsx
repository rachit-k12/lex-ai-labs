import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          Ready to build production AI systems?
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          Join working professionals learning to deploy ML models, fine-tune LLMs, 
          and build AI agents. Weekend format. Live sessions. 1:1 mentorship.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://aiseekhegaindia.com/fellowship/"
            className="px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold transition-all shadow-lg shadow-brand-600/30"
          >
            Apply for Fellowship
          </Link>
          <Link
            href="https://www.lexailabs.com/contact"
            className="px-8 py-4 rounded-full bg-transparent border border-slate-700 hover:bg-white hover:text-slate-900 text-white font-bold transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

