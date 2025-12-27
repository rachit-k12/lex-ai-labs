'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const avatarGradients = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-green-500',
  'from-fuchsia-500 to-pink-500',
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const testimonials = [
  {
    id: 1,
    name: 'Nipun Katyal',
    role: 'AI Vector Search Engineer',
    company: 'Oracle',
    content:
      'I had the pleasure of working with Puru at MathWorks. My peers and I always appreciated the depth with which Puru approached engineering problems as well as his philosophy towards designing solutions. He has a commendable grasp on a variety of domains like natural language processing and audio processing.',
    outcome: 'Mastered AI model optimization',
  },
  {
    id: 2,
    name: 'Nishchay Anand',
    role: 'Senior Software Engineer',
    company: 'Tech',
    content:
      'I had the privilege of learning from Puru during the System Design Fellowship. He turns each learning session into an approachable conversation, bridging the gap between theory and real-world intuition. His sessions will always leave you smarter, more confident, and genuinely excited to build.',
    outcome: 'Advanced system design expertise',
  },
  {
    id: 3,
    name: 'Shiv Singh',
    role: 'Enterprise Architect',
    company: 'Enterprise',
    content:
      "I've had the chance to interact with Puru and learn valuable insights into Machine Learning through him. He has a natural ability to simplify complex topics and explain them in a way that makes sense, no matter how technical they are.",
    outcome: 'Achieved ML leadership skills',
  },
  {
    id: 4,
    name: 'Abhinav Srivastava',
    role: 'Consultant',
    company: 'Deloitte',
    content:
      'Puru has a way of making machine learning feel less like rocket science and more like a conversation. During my time at the LexAI Fellowship, he made topics that usually seem intimidating feel surprisingly manageable.',
    outcome: 'Built production ML confidence',
  },
  {
    id: 5,
    name: 'Maneet Kaur Bagga',
    role: 'UX Researcher',
    company: 'MathWorks',
    content:
      'His mentoring and teaching abilities are truly outstanding, especially his approach of focusing on practical, industry-applicable knowledge. He equipped me with real-world Machine Learning skills and insights needed to thrive.',
    outcome: 'Accelerated career trajectory',
  },
  {
    id: 6,
    name: 'Riddhi Menroy',
    role: 'Computer Engineering Student',
    company: 'Thapar Institute',
    content:
      "I've had the opportunity to learn from Puru during the Lex AI Fellowship. He breaks down complex concepts, especially the math, into simple, intuitive steps. Even the most abstract ideas feel approachable.",
    outcome: 'Transformed from theory to practice',
  },
  {
    id: 7,
    name: 'Deepak Sharma',
    role: 'Software Engineer',
    company: 'Tech',
    content:
      'Working with Puru has been one of the most enriching experiences of my journey. His technical depth across system design, AI/ML, and large-scale engineering challenges is truly exceptional. He has a rare ability to simplify complex problems.',
    outcome: 'Leveled up to senior engineer',
  },
  {
    id: 8,
    name: 'Karan Bhutani',
    role: 'Consultant',
    company: 'Deloitte',
    content:
      "Puru didn't just shape how I write code, he changed how I think about technology and its purpose. Watching him work is like seeing someone translate philosophy into engineering: grounded in first principles, deeply thoughtful.",
    outcome: 'Developed engineering philosophy',
  },
];
interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const gradient = avatarGradients[index % avatarGradients.length];

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] mx-2 md:mx-3">
      <div className="flex flex-col gap-4 justify-between bg-white rounded-xl md:rounded-2xl p-4 md:p-6 h-full border border-neutral-100 shadow-sm hover:shadow-lg hover:border-neutral-200 transition-all duration-300">
        {/* Quote icon */}
        <div className="flex flex-col gap-2">
          <Quote className="w-6 h-6 md:w-8 md:h-8 text-coral-400 mb-3 md:mb-4" />
          {/* Content */}

          <p className="text-neutral-700 text-left leading-relaxed mb-4 md:mb-6 text-sm md:text-[15px]">
            &ldquo;{testimonial.content}&rdquo;
          </p>
        </div>
        <div className="flex flex-col gap-2">
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
            <div
              className={`flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br ${gradient} shadow-sm`}
            >
              <span className="text-white font-medium text-xs md:text-sm tracking-tight">
                {getInitials(testimonial.name)}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 text-xs md:text-sm">
                {testimonial.name}
              </h4>
              <p className="text-neutral-500 text-[10px] md:text-xs">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
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
            Transformation Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1]">
            Careers Transformed,
            <span className="block text-blue-500 italic mt-1">Results That Speak.</span>
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

          <div className="flex sm:animate-sm-marquee-slow animate-marquee-slow">
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index % testimonials.length}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
