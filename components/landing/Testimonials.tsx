'use client';

import { motion } from 'framer-motion';
import { Linkedin, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Sample testimonial data - use "Sample" names/details instead of "PLACEHOLDER"
const testimonials = [
  {
    id: 1,
    name: 'Amit Verma',
    role: 'Applied Scientist',
    company: 'Google',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content:
      'Joining Lex AI Club helped me discover new opportunities in applied AI. The mentorship from industry leaders is something you won’t find anywhere else.',
    platform: 'linkedin',
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
      'The peer group here is second to none. I found both co-founders and technical collaborators through the Club’s events.',
    platform: 'linkedin',
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
    platform: 'linkedin',
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
    platform: 'whatsapp',
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
    platform: 'whatsapp',
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
    platform: 'linkedin',
    outcome: 'Received offer from top global lab',
  },
  // Add more sample testimonials to increase placeholder diversity
  {
    id: 7,
    name: 'Siddharth Rao',
    role: 'Technical Lead',
    company: 'Flipkart',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face',
    content:
      'I found learning partners and built real-world projects here. Everyone is pushing themselves to the next level.',
    platform: 'linkedin',
    outcome: 'Led AI project impacting millions',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="stories" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4 block">
            Member stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Careers <span className="italic">Transformed.</span>
            <span className="block">
              Connections <span className="italic">Made.</span>
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Our members don&apos;t just learn &mdash; they land roles, find co-founders, and build
            their network.
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="bg-gradient-to-br from-coral-50/50 to-white rounded-2xl p-6 border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  {/* Platform icon */}
                  {testimonial.platform === 'linkedin' ? (
                    <div className="w-8 h-8 bg-[#0077b5]/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                  {testimonial.content}
                </p>

                {/* Outcome Tag */}
                {testimonial.outcome && testimonial.outcome !== 'PLACEHOLDER_OUTCOME' && (
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    {testimonial.outcome}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
