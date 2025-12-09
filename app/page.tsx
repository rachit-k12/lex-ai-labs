import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import InstructorSpotlight from '@/components/landing/InstructorSpotlight';
import Navigation from '@/components/landing/Navigation';
import Testimonials from '@/components/landing/Testimonials';
import TrustedBy from '@/components/landing/TrustedBy';
import ValueProposition from '@/components/landing/ValueProposition';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <ValueProposition />
        <InstructorSpotlight />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
