'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Srrimann Narayan',
    role: 'ML Engineer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content: 'A huge thank you to Lex AI & the team for creating such an impactful learning experience and to my fellow cohort members for the engaging discussions and knowledge sharing.',
    platform: 'linkedin',
  },
  {
    id: 2,
    name: 'Pratik R.',
    role: 'Tech & Sales',
    company: 'Ex-Flipkart, Philips',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    content: 'Thank you Lex AI for the opportunity! Fantastic peers, engaging discussions and a plethora of experiences! Couldn\'t have asked for more.',
    platform: 'linkedin',
  },
  {
    id: 3,
    name: 'Rohit Kesar',
    role: 'AI Engineer',
    company: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    content: 'The program offers a practical approach to breaking into the AI industry. The coursework provides a solid foundation, and the guest sessions effectively focus on real-world applications. I recommend this program to a friend who wants to accelerate their learning journey.',
    platform: 'linkedin',
  },
  {
    id: 4,
    name: 'Rounak',
    role: 'Founder\'s Office',
    company: 'Docquity',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content: 'Thank you for the best advice and helping me to learn more about the AI world. I achieved my goal, for which I joined the courses, best networking and I got new job as founder\'s office.',
    platform: 'whatsapp',
  },
  {
    id: 5,
    name: 'Archana Shivram',
    role: 'Data Scientist',
    company: 'General Catalyst',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    content: 'Thanks a lot took a while but worth the wait. Thanks for helping me in this process. Will continue to keep in touch.',
    platform: 'whatsapp',
  },
  {
    id: 6,
    name: 'Yashvi',
    role: 'Investment Banking Analyst',
    company: 'Leading IB Firm',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    content: 'I am super happy to share that I\'ve got into a leading IB firm. Grateful to Lex AI for laying a strong conceptual foundation and strengthening my profile. Thank you for being so approachable and encouraging throughout the process.',
    platform: 'whatsapp',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Trusted by the <span className="italic">Bold.</span>
            <span className="block">Backed by Our <span className="italic">Community.</span></span>
          </h2>
          <p className="text-lg text-neutral-600">
            We don&apos;t need to say much &mdash; our community already did.
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
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
