import AboutStats from '@/components/landing/AboutStats';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import InstructorSpotlight from '@/components/landing/InstructorSpotlight';
import Navigation from '@/components/landing/Navigation';
import Programs from '@/components/landing/Programs';
import Testimonials from '@/components/landing/Testimonials';
import TrustedBy from '@/components/landing/TrustedBy';

export default function Home() {
  return (
    <div className="bg-surface-50 text-slate-900 antialiased overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <AboutStats />
        <Programs />
        <InstructorSpotlight />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
