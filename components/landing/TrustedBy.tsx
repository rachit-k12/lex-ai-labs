'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const companies = [
  { name: 'Google' },
  { name: 'Amazon' },
  { name: 'Microsoft' },
  { name: 'Meta' },
  { name: 'Flipkart' },
  { name: 'Razorpay' },
  { name: 'CRED' },
  { name: 'Swiggy' },
];

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-base font-semibold text-neutral-500 uppercase tracking-wider mb-10"
        >
          Our members work at
        </motion.p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-max gap-12 md:gap-16"
            style={{ '--gap': '3rem' } as React.CSSProperties}
          >
            {/* First set */}
            <div
              className="flex shrink-0 items-center gap-12 md:gap-16 animate-marquee"
              style={{ '--duration': '20s' } as React.CSSProperties}
            >
              {companies.map((company, idx) => (
                <span
                  key={`first-${idx}`}
                  className="text-2xl font-semibold text-neutral-700 tracking-tight whitespace-nowrap hover:text-blue-600 transition-colors"
                >
                  {company.name}
                </span>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div
              className="flex shrink-0 items-center gap-12 md:gap-16 animate-marquee"
              style={{ '--duration': '20s' } as React.CSSProperties}
              aria-hidden="true"
            >
              {companies.map((company, idx) => (
                <span
                  key={`second-${idx}`}
                  className="text-2xl font-semibold text-neutral-700 tracking-tight whitespace-nowrap hover:text-blue-600 transition-colors"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
