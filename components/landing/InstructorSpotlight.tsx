'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const instructors = [
  {
    name: 'Puru Kathuria',
    role: 'Software Engineer',
    company: 'Google',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGQtno9QlQ5ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715758859402?e=1765411200&v=beta&t=np7r7hUMfJbVL_DZWOulEPN2I7sCnSlxFurZSPg3LWs',
    linkedin: 'https://www.linkedin.com/in/purukathuria/',
  },
  {
    name: 'Ankit Sharma',
    role: 'ML Engineer',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Priya Menon',
    role: 'AI Lead',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    company: 'AI Startup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    linkedin: '#',
  },
];

export default function InstructorSpotlight() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-coral-50/30 relative overflow-hidden">
      {/* Subtle grainy texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full">
          <filter id="instructorNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#instructorNoise)" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Learn from the Ones
            <br />
            Who&apos;ve <span className="italic">Done It</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Meet the experts behind the insights &ndash; experienced engineers, founders & leaders helping you break into AI.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative w-64"
              >
                {/* Card */}
                <div className="relative">
                  {/* Coral shadow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-coral-200/50 to-coral-100/30 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300" />

                  {/* Image Container */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="256px"
                    />
                    {/* Grainy overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none mix-blend-overlay">
                      <svg className="w-full h-full">
                        <filter id={`cardNoise-${index}`}>
                          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter={`url(#cardNoise-${index})`} opacity="0.5" />
                      </svg>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Info - Outside the card */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-lg">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {instructor.role}, {instructor.company}
                      </p>
                    </div>
                    <Link
                      href={instructor.linkedin}
                      className="w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-[#0077b5] hover:text-white transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-1.5 mt-12"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === 3 ? 'w-8 bg-neutral-800' : 'w-1.5 bg-neutral-300'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
