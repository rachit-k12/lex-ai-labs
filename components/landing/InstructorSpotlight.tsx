import { Code, Globe, GraduationCap, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function InstructorSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-20 relative overflow-hidden border border-slate-100">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-white via-brand-50 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 opacity-50"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGQtno9QlQ5ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715758859402?e=1765411200&v=beta&t=np7r7hUMfJbVL_DZWOulEPN2I7sCnSlxFurZSPg3LWs"
                    alt="Puru Kathuria"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg border border-slate-100">
                  <p className="font-bold text-slate-900">Ex-Google</p>
                  <p className="text-xs text-slate-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-slate-900"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                  Meet The Founder
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
                Puru Kathuria
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-6 md:mb-8 leading-relaxed">
                Software Engineer at Google working on Cloud Security. Previously at MathWorks
                building ML systems for self-driving cars and speech recognition. I teach engineers
                how to build production AI systems - the same techniques I use at work every day.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Production Experience</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Built distributed ML systems at Google & MathWorks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-600 border border-slate-100 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Teaching Track Record</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Taught ML to Google engineers and IIIT Delhi students.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.linkedin.com/in/purukathuria/"
                  className="px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" /> Follow on LinkedIn
                </Link>
                <Link
                  href="https://purukathuria.com/"
                  className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" /> Personal Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
