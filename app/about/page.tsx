'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Linkedin } from 'lucide-react';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import LeadCaptureDialog from '@/components/shared/LeadCaptureDialog';

const teamMembers = [
  {
    name: 'Puru Kathuria',
    role: 'Founder',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Aashish Joshi',
    role: 'Engineering Manager',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Nikhil Reedy',
    role: 'Scientist',
    company: 'IIT Delhi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Nipun Katyal',
    role: 'AI Engineer',
    company: 'US Tech',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Rohan Gurve',
    role: 'Software Engineer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Vidhi Gupta',
    role: 'Engineering Manager',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Aakanksha',
    role: 'Tech Lead',
    company: 'Meesho',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Divish',
    role: 'Tech Lead',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Sunil',
    role: 'Founder',
    company: 'BlueSemi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
  {
    name: 'Nitin Bansal',
    role: 'Engineer',
    company: 'Databricks',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
  },
];

const values = [
  {
    title: 'Community First',
    description: 'We believe the best learning happens through collaboration. Our community is our product.',
  },
  {
    title: 'Access to People',
    description: 'We sell access to people, not just content. The network is the real value.',
  },
  {
    title: 'Real-world Focus',
    description: 'Everything we teach is applicable to real-world AI problems. No theory without practice.',
  },
  {
    title: 'Elite Standards',
    description: 'We maintain high standards for both our content and our community members.',
  },
];

export default function AboutPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-coral-100/30" />

        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.4" />
          </svg>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6">
              Building India&apos;s
              <br />
              <span className="italic text-blue-500">AI Future</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
              Lex AI is not a course or a program — it is an elite network of applied scientists, engineers, founders, investors, and recruiters who are shaping the future of AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6 italic">
                Our Mission
              </h2>
              <p className="text-neutral-600 text-lg mb-6">
                We&apos;re on a mission to create India&apos;s most impactful AI community — where ambitious engineers, founders, and leaders come together to learn, build, and grow.
              </p>
              <p className="text-neutral-600 text-lg mb-8">
                We believe the best way to learn AI is not through passive courses, but through active participation in a community of practitioners building real things.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, idx) => (
                  <div key={idx} className="p-4 bg-coral-50 rounded-xl border border-coral-100">
                    <h3 className="font-semibold text-neutral-900 mb-2">{value.title}</h3>
                    <p className="text-neutral-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Coral shadow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-coral-200/50 to-coral-100/30 rounded-3xl transform rotate-2" />
              <div
                className="relative aspect-square rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-coral-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 italic">
              Meet the Team
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Our mentors and leaders come from the world&apos;s top AI companies and research labs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="group"
              >
                <div className="relative">
                  {/* Coral shadow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-coral-200/50 to-coral-100/30 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300" />

                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                    <a
                      href={member.linkedin}
                      className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-neutral-900 text-sm">{member.name}</h3>
                  <p className="text-neutral-500 text-xs">{member.role}</p>
                  <p className="text-blue-600 text-xs">{member.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full">
            <filter id="ctaNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ctaNoise)" opacity="0.4" />
          </svg>
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 italic">
            Get in Touch
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Have questions? Want to partner with us? We&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:team@lexailabs.in"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all border border-neutral-700"
            >
              team@lexailabs.in
            </a>
            <a
              href="tel:+911169266219"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all border border-neutral-700"
            >
              +91 11-69266219
            </a>
          </div>

          <button
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-neutral-900 text-lg font-medium rounded-full hover:bg-neutral-100 transition-all shadow-xl"
          >
            Join the Community
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        source="about"
      />
    </div>
  );
}
