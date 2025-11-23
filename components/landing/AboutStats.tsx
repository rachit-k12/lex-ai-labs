import Image from 'next/image';

export default function AboutStats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Practitioner-led AI training <br />
              for working professionals
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Lex AI Technologies runs the{' '}
              <strong className="text-slate-900">AI Fellowship program</strong> - weekend training
              where you build production ML systems, fine-tune language models, and deploy AI
              agents. No academic theory. Just hands-on implementation.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We offer specialized tracks for engineers who want to build AI systems and leaders who
              need to make AI decisions. Both taught by industry practitioners.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-50 border border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">Weekend</div>
                <div className="text-sm text-slate-500">Format - Keep Your Job</div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-50 border border-slate-100">
                <div className="text-3xl font-bold text-slate-900 mb-1">70/30</div>
                <div className="text-sm text-slate-500">Practical vs Theory</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative shadow-2xl">
              <Image
                src="https://i.postimg.cc/wvcYFbT3/homepage-image-1.jpg"
                alt="Team working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-2xl font-bold mb-2">Build Real AI Systems</div>
                <p className="text-slate-200">
                  Deploy models, fine-tune LLMs, build multi-agent systems.
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
