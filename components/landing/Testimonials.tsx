'use client';

import { ChevronLeft, ChevronRight, Linkedin, Star } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    {
      text: '"My peers and I always appreciated the depth with which Puru approached engineering problems... I believe in Puru\'s ability to make complex ideas simple and their execution simpler."',
      name: 'Nipun Katyal',
      title: 'AI Vector Search @ Oracle',
      initials: 'NK',
      linkedin: 'https://www.linkedin.com/in/nipun-katyal/',
    },
    {
      text: '"I\'ve rarely met someone who combines such deep technical mastery with an effortless knack for teaching. Collaborating with him reshaped how I think about technology."',
      name: 'Nishchay Anand',
      title: 'Senior Software Engineer',
      initials: 'NA',
      linkedin: 'https://www.linkedin.com/in/nishchay-anand-ba3768170/',
    },
    {
      text: '"Puru has a way of making machine learning feel less like rocket science and more like a conversation. You leave each session feeling a little smarter and a lot more confident."',
      name: 'Abhinav Srivastava',
      title: 'Consultant @ Deloitte',
      initials: 'AS',
      linkedin: '#',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              What Engineers Say
            </h2>
            <p className="text-slate-500">Feedback from engineers who have learned with Puru.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-brand-500 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-brand-500 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-10 hide-scroll snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[350px] md:min-w-[450px] p-8 rounded-[2rem] bg-surface-50 border border-slate-100 snap-center flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">{testimonial.text}</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs font-medium text-slate-500">{testimonial.title}</div>
                </div>
                <Link
                  href={testimonial.linkedin}
                  className="ml-auto text-slate-300 hover:text-[#0077b5] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="min-w-[1rem]"></div>
        </div>
      </div>
    </section>
  );
}
