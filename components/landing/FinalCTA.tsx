'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import LeadCaptureModal from './LeadCaptureModal';

const communityImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=200&fit=crop',
];

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      id="apply"
      className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden"
    >
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="ctaNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#ctaNoise)" opacity="0.4" />
        </svg>
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Top left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-0 left-[5%] w-24 h-24 rounded-full overflow-hidden border-4 border-white/10"
          >
            <Image
              src={communityImages[0]}
              alt="Community member"
              fill
              className="object-cover"
              sizes="96px"
            />
            {/* Grainy overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <svg className="w-full h-full">
                <filter id="imgNoise1">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="1"
                    numOctaves="4"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#imgNoise1)" opacity="0.5" />
              </svg>
            </div>
          </motion.div>
          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-8 right-[8%] w-28 h-28 rounded-full overflow-hidden border-4 border-white/10"
          >
            <Image
              src={communityImages[1]}
              alt="Community member"
              fill
              className="object-cover"
              sizes="112px"
            />
          </motion.div>
          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-16 left-[10%] w-20 h-20 rounded-full overflow-hidden border-4 border-white/10"
          >
            <Image
              src={communityImages[2]}
              alt="Community member"
              fill
              className="object-cover"
              sizes="80px"
            />
          </motion.div>
          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-8 right-[5%] w-24 h-24 rounded-full overflow-hidden border-4 border-white/10"
          >
            <Image
              src={communityImages[3]}
              alt="Community member"
              fill
              className="object-cover"
              sizes="96px"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Ready to Build <span className="italic">What&apos;s Next?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 mb-4"
          >
            Join 500+ engineers, founders, and leaders who chose to stop watching from the
            sidelines.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-white/50 mb-3"
          >
            Applications are reviewed within 48 hours. Limited seats per cohort.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-coral-400 font-medium mb-10"
          >
            Membership starts at ₹39,999/year
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
            >
              Apply Now
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
