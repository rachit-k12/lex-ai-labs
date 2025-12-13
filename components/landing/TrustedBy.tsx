'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const companies = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Meesho' },
  { name: 'Databricks' },
  { name: 'IIT Delhi' },
  { name: 'BlueSemi' },
  { name: 'Meta' },
];

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-8 md:py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-medium text-neutral-400 uppercase tracking-wider mb-5 md:mb-12"
        >
          Our members work at
        </motion.p>

        {/* Mobile: Simple inline list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
        >
          {companies.map((company, idx) => (
            <span key={idx} className="text-sm font-medium text-black">
              {company.name}
              {idx < companies.length - 1 && <span className="ml-4 text-neutral-600">•</span>}
            </span>
          ))}
        </motion.div>

        {/* Desktop: Auto-scrolling marquee */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 via-neutral-50/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-max"
          >
            {/* First set */}
            <div className="flex shrink-0 items-center gap-20 animate-[marquee_25s_linear_infinite]">
              {companies.map((company, idx) => (
                <span
                  key={`first-${idx}`}
                  className="text-2xl font-semibold text-neutral-700 tracking-tight whitespace-nowrap hover:text-blue-600 transition-colors duration-300"
                >
                  {company.name}
                </span>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div
              className="flex shrink-0 items-center gap-20 animate-[marquee_25s_linear_infinite]"
              aria-hidden="true"
            >
              {companies.map((company, idx) => (
                <span
                  key={`second-${idx}`}
                  className="text-2xl font-semibold text-neutral-700 tracking-tight whitespace-nowrap hover:text-blue-600 transition-colors duration-300"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
