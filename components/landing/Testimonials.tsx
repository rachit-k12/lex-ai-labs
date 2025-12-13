'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Amit Verma',
    role: 'Applied Scientist',
    company: 'Google',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content:
      "Joining Lex AI Club helped me discover new opportunities in applied AI. The mentorship from industry leaders is something you won't find anywhere else.",
    outcome: 'Landed a senior ML role at a unicorn',
  },
  {
    id: 2,
    name: 'Priya Shah',
    role: 'AI Product Manager',
    company: 'Microsoft',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    content:
      "The peer group here is second to none. I found both co-founders and technical collaborators through the Club's events.",
    outcome: 'Started an AI-commerce startup with peers',
  },
  {
    id: 3,
    name: 'Rahul Singh',
    role: 'Machine Learning Engineer',
    company: 'Amazon',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    content:
      'I got direct feedback from mentors at FAANG companies, which really accelerated my project. I now contribute to open source on a global stage.',
    outcome: 'Published research & contributed to OSS',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Founder',
    company: 'AI HealthTech Startup',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content:
      'Thanks to the Lex community, I found investors and advisors for my healthcare AI venture. The support is genuine and ongoing.',
    outcome: 'Secured early-stage funding',
  },
  {
    id: 5,
    name: 'Karan Desai',
    role: 'Data Scientist',
    company: 'Swiggy',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    content:
      'The regular roundtables and AMAs helped me learn from the best in the business. My technical confidence skyrocketed.',
    outcome: 'Promoted to lead Data Science team',
  },
  {
    id: 6,
    name: 'Ananya Iyer',
    role: 'Research Associate',
    company: 'IIT Bombay',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    content:
      'The guidance and code reviews from senior mentors steered my research in the right direction and expanded my professional network.',
    outcome: 'Received offer from top global lab',
  },
  {
    id: 7,
    name: 'Siddharth Rao',
    role: 'Technical Lead',
    company: 'Flipkart',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face',
    content:
      'I found learning partners and built real-world projects here. Everyone is pushing themselves to the next level.',
    outcome: 'Led AI project impacting millions',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} id="stories" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-[0.2em] mb-6 block">
            Member Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-[1.1]">
            Real results from
            <span className="block text-blue-500 italic mt-1">real members</span>
          </h2>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative">
            {/* Quote icon */}
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-400 mb-6 sm:mb-8" />

            {/* Content - Using relative positioning instead of absolute for mobile */}
            <div className="min-h-[300px] sm:min-h-[200px] md:min-h-[200px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-neutral-900 leading-relaxed mb-6 sm:mb-8">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </blockquote>

                  {/* Outcome badge */}
                  {currentTestimonial.outcome && (
                    <div className="mb-6 sm:mb-8">
                      <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-900 text-white text-xs sm:text-sm rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {currentTestimonial.outcome}
                      </span>
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-neutral-200">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 text-base sm:text-lg">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-neutral-500 text-xs sm:text-sm">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-200">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? 'w-8 bg-neutral-900'
                        : 'w-1 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-neutral-600 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 disabled:opacity-30 hover:bg-neutral-200 disabled:cursor-not-allowed transition-all duration-500"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-neutral-600 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 disabled:opacity-30 hover:bg-neutral-200 disabled:cursor-not-allowed transition-all duration-500"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
