'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const leaders = [
  {
    id: 'puru',
    name: 'Puru Kathuria',
    role: 'Founder, Lex AI',
    company: 'Google',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/puru-kathuria',
  },
  {
    id: 'swati',
    name: 'Swati Nain',
    role: 'Senior Engineer',
    company: 'Microsoft',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/swati-nain',
  },
  {
    id: 'aashish',
    name: 'Aashish Joshi',
    role: 'Engineering Manager',
    company: 'Google',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/aashish-joshi',
  },
  {
    id: 'nikhil',
    name: 'Nikhil Reedy',
    role: 'Research Scientist',
    company: 'IIT Delhi',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/nikhil-reedy',
  },
  {
    id: 'nipun',
    name: 'Nipun Katyal',
    role: 'AI Engineer',
    company: 'Meta',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/nipun-katyal',
  },
  {
    id: 'rohan',
    name: 'Rohan Gurve',
    role: 'Software Engineer',
    company: 'Google',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/rohan-gurve',
  },
  {
    id: 'vidhi',
    name: 'Vidhi Gupta',
    role: 'Engineering Manager',
    company: 'Google',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/vidhi-gupta',
  },
  {
    id: 'aakanksha',
    name: 'Aakanksha',
    role: 'Tech Lead',
    company: 'Meesho',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/aakanksha',
  },
  {
    id: 'divish',
    name: 'Divish',
    role: 'Tech Lead',
    company: 'Google',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/divish',
  },
  {
    id: 'sunil',
    name: 'Sunil',
    role: 'Founder',
    company: 'BlueSemi',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/sunil',
  },
  {
    id: 'nitin',
    name: 'Nitin Bansal',
    role: 'Staff Engineer',
    company: 'Databricks',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/nitin-bansal',
  },
  {
    id: 'harsh',
    name: 'Harsh Parikh',
    role: 'Senior SDE',
    company: 'Amazon',
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/harsh-parikh',
  },
  {
    id: 'deepak',
    name: 'Deepak Kumar',
    role: 'ML Engineer',
    company: 'IIIT Hyderabad',
    img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/deepak-kumar',
  },
  {
    id: 'saahil',
    name: 'Saahil Shah',
    role: 'Product Lead',
    company: 'Stripe',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/saahil-shah',
  },
];

export default function CommunityLeaders() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, leaders.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      ref={ref}
      id="network"
      className="py-24 md:py-36 bg-neutral-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-6 block">
              The Network
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-[1.1]">
              Learn from those who&apos;ve
              <span className="block text-blue-500 italic mt-1">been there</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 border border-neutral-600 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 disabled:opacity-30 hover:bg-neutral-200 disabled:cursor-not-allowed transition-all duration-500"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 border border-neutral-600 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 disabled:opacity-30 hover:bg-neutral-200 disabled:cursor-not-allowed transition-all duration-500"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{
                x: -currentIndex * (280 + 20),
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex-shrink-0 w-[280px]"
                  onMouseEnter={() => setHoveredId(leader.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="group relative">
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
                      <Image
                        src={leader.img}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="280px"
                      />

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* LinkedIn - appears on hover */}
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredId === leader.id ? 1 : 0,
                          y: hoveredId === leader.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <Link
                          href={leader.linkedin}
                          className="flex items-center gap-2 text-white/90 text-sm hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="font-light">Connect</span>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="mt-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-neutral-900 text-base">{leader.name}</h3>
                          <p className="text-sm text-neutral-500 mt-0.5">{leader.role}</p>
                        </div>
                        <span className="text-xs text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">
                          {leader.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-neutral-200 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-neutral-900"
                animate={{
                  width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
            <span className="text-xs text-neutral-400 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
            </span>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-neutral-400 text-sm mt-16"
        >
          Mentors from Google, Microsoft, Amazon, Meta & leading AI startups
        </motion.p>
      </div>
    </section>
  );
}
