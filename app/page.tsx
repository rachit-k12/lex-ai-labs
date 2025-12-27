import CommunityLeaders from '@/components/landing/CommunityLeaders';
import EventsPreview from '@/components/landing/EventsPreview';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Testimonials from '@/components/landing/Testimonials';
import TrustedBy from '@/components/landing/TrustedBy';
import ValueProposition from '@/components/landing/ValueProposition';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">
      <main className="overflow-x-hidden">
        <Hero />
        {/* <TrustedBy /> */}
        {/* <ValueProposition />
        <CommunityLeaders />
        <EventsPreview />
        <Testimonials />
        <FinalCTA /> */}
      </main>
      <Footer />
    </div>
  );
}
