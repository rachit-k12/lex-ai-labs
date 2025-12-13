'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
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
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    content:
      "The peer group here is second to none. I found both co-founders and technical collaborators through the Club's events.",
    outcome: 'Started an AI-commerce startup',
  },
  {
    id: 3,
    name: 'Rahul Singh',
    role: 'Machine Learning Engineer',
    company: 'Amazon',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    content:
      'I got direct feedback from mentors at FAANG companies, which really accelerated my project.',
    outcome: 'Published research & OSS',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Founder',
    company: 'AI HealthTech',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content:
      'Thanks to the Lex community, I found investors and advisors for my healthcare AI venture.',
    outcome: 'Secured early-stage funding',
  },
  {
    id: 5,
    name: 'Karan Desai',
    role: 'Data Scientist',
    company: 'Swiggy',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    content: 'The regular roundtables and AMAs helped me learn from the best in the business.',
    outcome: 'Promoted to lead DS team',
  },
  {
    id: 6,
    name: 'Ananya Iyer',
    role: 'Research Associate',
    company: 'IIT Bombay',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    content: 'The guidance from senior mentors steered my research in the right direction.',
    outcome: 'Received offer from top lab',
  },
  {
    id: 7,
    name: 'Siddharth Rao',
    role: 'Technical Lead',
    company: 'Flipkart',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face',
    content:
      'I found learning partners and built real-world projects here. Everyone is pushing themselves.',
    outcome: 'Led AI project impacting millions',
  },
];

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] mx-2 md:mx-3">
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 h-full border border-neutral-100 shadow-sm hover:shadow-lg hover:border-neutral-200 transition-all duration-300">
        {/* Quote icon */}
        <Quote className="w-6 h-6 md:w-8 md:h-8 text-coral-300 mb-3 md:mb-4" />

        {/* Content */}
        <p className="text-neutral-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-[15px]">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Outcome badge */}
        {testimonial.outcome && (
          <div className="mb-4 md:mb-5">
            <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 bg-neutral-900 text-white text-[10px] md:text-xs rounded-full">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400 rounded-full" />
              {testimonial.outcome}
            </span>
          </div>
        )}

        {/* Author */}
        <div className="flex items-center gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-neutral-100">
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden bg-neutral-200">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 text-xs md:text-sm">{testimonial.name}</h4>
            <p className="text-neutral-500 text-[10px] md:text-xs">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={ref}
      id="stories"
      className="py-16 md:py-24 lg:py-32 bg-neutral-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-radial from-coral-50 to-transparent rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10 md:mb-16 px-4"
        >
          <span className="text-[10px] md:text-xs font-medium text-neutral-400 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6 block">
            Member Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1]">
            Real results from
            <span className="block text-blue-500 italic mt-1">real members</span>
          </h2>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6"
        >
          {/* Left fade - smaller on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          {/* Right fade - smaller on mobile */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-slow">
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 md:gap-4 mt-10 md:mt-16 px-4"
        >
          <div className="flex -space-x-2">
            {testimonials.slice(0, 4).map((t) => (
              <div
                key={t.id}
                className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden ring-2 ring-neutral-50"
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-neutral-600">
            Join <span className="font-semibold text-neutral-900">500+ members</span> growing
            together
          </p>
        </motion.div>
      </div>
    </section>
  );
}
