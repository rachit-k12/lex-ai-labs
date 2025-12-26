'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Company logos mapping - using official logo URLs or placeholder SVGs
const companyLogos: Record<string, string> = {
  Google: '/assets/logos/google.png',
  Microsoft: '/assets/logos/microsoft.png',
  Meta: '/assets/logos/meta.png',
  Amazon: '/assets/logos/amazon.png',
  Oracle: '/assets/logos/oracle.png',
  Databricks: '/assets/logos/databricks.png',
  Stripe: '/assets/logos/stripe.png',
  BlueSemi: '/assets/logos/bluesemi.png',
  Meesho: '/assets/logos/meesho.png',
  'IIT Delhi': '/assets/logos/iit.png',
  IIITD: '/assets/logos/iiitd.png',
  'Single Store': '/assets/logos/singlestore.png',
  Demandbase: '/assets/logos/demandbase.png',
};

const leaders = [
  {
    id: 'puru',
    name: 'Puru Kathuria',
    role: 'Founder, Lex AI',
    company: 'Google',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQGQtno9QlQ5ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715758859402?e=1767225600&v=beta&t=G0mHi9hh51Fh1sdkCyQJTm9SbFX7TLtkfFBWodX1m58',
    linkedin: 'https://www.linkedin.com/in/purukathuria/',
  },
  {
    id: 'swati',
    name: 'Swati Nain',
    role: 'Program Manager',
    company: 'Amazon',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQH6h3OFjXZkew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657362997803?e=1767225600&v=beta&t=KZIw_NbtgXkOXBEh4wSQAcyGbRxktRdUgLYK8H17JEY',
    linkedin: 'https://www.linkedin.com/in/swati-nain-473a6710a/',
  },
  {
    id: 'nikhil',
    name: 'Nikhil Reddy',
    role: 'Scientist',
    company: 'IIT Delhi',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQGzNbl3r5lfhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655292247471?e=1768435200&v=beta&t=RAvsWZdl5082rrNBSdWFmsHb2PZEQt0IH_YASRwCBNw',
    linkedin: 'https://www.linkedin.com/in/nikhil-reddy-1632aa92/',
  },
  {
    id: 'nipun',
    name: 'Nipun Katyal',
    role: 'AI Engineer',
    company: 'Oracle',
    img: 'https://media.licdn.com/dms/image/v2/C5103AQF0X2dyoEZGdQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559472916576?e=1767225600&v=beta&t=0Vcs8FQPX1SzNk5_CCuRCdG2TzsHq-BRmLKhzOq5sLc',
    linkedin: 'https://www.linkedin.com/in/nipun-katyal/',
  },
  {
    id: 'rohan',
    name: 'Rohan Gurve',
    role: 'Software Engineer',
    company: 'Google',
    img: 'https://media.licdn.com/dms/image/v2/C4E03AQEOHQkWpJXSXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1608136537575?e=1767225600&v=beta&t=Cia_OCXvF67SDJuIcRVoKXpbdPjpkUS97AgohfDl0XQ',
    linkedin: 'https://www.linkedin.com/in/rohan-gurve-0a93931b5/',
  },
  {
    id: 'vidhi',
    name: 'Vidhi Gupta',
    role: 'Engineering Manager',
    company: 'Google',
    img: 'https://media.licdn.com/dms/image/v2/C5603AQEUVdi1H6CwOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516319494067?e=1767225600&v=beta&t=o6Z0raygf1cs-3FFOWkkHdHNovCVGCyuT-r8DT33kv8',
    linkedin: 'https://www.linkedin.com/in/vidhigupta8/',
  },
  {
    id: 'aakanksha',
    name: 'Aakanksha Malhotra',
    role: 'Tech Lead',
    company: 'Meesho',
    img: 'https://media.licdn.com/dms/image/v2/D4D35AQHtZML4R0SLgw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1693626102316?e=1767348000&v=beta&t=i8CVHOCZ3ur7jmLaV5y6KLRDvUvPn28mf8JiLqfdouo',
    linkedin: 'https://www.linkedin.com/in/akanksha-malhotra-ab5a60109/',
  },
  {
    id: 'sunil',
    name: 'Sunil Maddikatla',
    role: 'Founder',
    company: 'BlueSemi',
    img: 'https://media.licdn.com/dms/image/v2/C5103AQFhRRvdVN3eTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565704785697?e=1768435200&v=beta&t=pP2BGYqAX1IcJp0SgxqzsRq87oTGQ99Gqnv_3MlA6q4',
    linkedin: 'https://www.linkedin.com/in/sunilmaddikatla/',
  },
  {
    id: 'harsh',
    name: 'Harsh Parikh',
    role: 'SDE II',
    company: 'Single Store',
    img: 'https://media.licdn.com/dms/image/v2/C5103AQH0DRaAaiDFkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1557213078009?e=1768435200&v=beta&t=uf3nsbeFnb-eNxHt4lkydm3dkEPdtgypwmohr1oEXAQ',
    linkedin: 'https://www.linkedin.com/in/harsh-parikh-842985ab/',
  },
  {
    id: 'deepak',
    name: 'Deepak Yadav',
    role: 'Senior Software Engineer',
    company: 'IIITD',
    img: 'https://media.licdn.com/dms/image/v2/C4D03AQF4RCtxjkc3Kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598004644341?e=1768435200&v=beta&t=xC4RRs6XYZEVCjN4wot8fklQFa29DEIruwQKlqgdp5c',
    linkedin: 'https://www.linkedin.com/in/deepak--yadav/',
  },
  {
    id: 'aashish',
    name: 'Aashish Joshi',
    role: 'Engineering Manager',
    company: 'Google',
    img: '', // <- Add correct image if available
    linkedin: '', // <- Add correct linkedin if available
  },
  {
    id: 'saahil',
    name: 'Saahil Shah',
    role: 'SDE ॥',
    company: 'Demandbase',
    img: 'https://media.licdn.com/dms/image/v2/C4E03AQFwfxZ_d2XXOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1612031959755?e=1768435200&v=beta&t=hVhE0a60WWD6JybEHJRfqW8fqBr82gIC3av1knig_L4',
    linkedin: 'https://www.linkedin.com/in/saahilshah20/',
  },
];

interface LeaderCardProps {
  leader: (typeof leaders)[0];
}

function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <div className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] mx-2 md:mx-3">
      <div className="group relative">
        {/* Image Container */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
          <Image
            src={leader.img}
            alt={leader.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="280px"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info */}
        <div className="mt-4 md:mt-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col items-start min-w-0">
              <h3 className="font-medium text-neutral-900 text-lg md:text-xl truncate max-w-full">
                {leader.name}
              </h3>
              <p className="text-sm md:text-base text-neutral-500">{leader.role}</p>
            </div>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              {/* Company Logo */}
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center p-1.5">
                {companyLogos[leader.company] ? (
                  <Image
                    src={companyLogos[leader.company]}
                    alt={leader.company}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain rounded-[2px]"
                  />
                ) : (
                  <span className="text-[8px] md:text-[10px] font-medium text-neutral-600 text-center leading-tight">
                    {leader.company}
                  </span>
                )}
              </div>
              {/* LinkedIn Button */}
              <Link
                href={leader.linkedin}
                className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${leader.name} on LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommunityLeaders() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isPaused, setIsPaused] = useState(false);

  // Double for seamless CSS animation loop
  const doubledLeaders = [...leaders, ...leaders];

  return (
    <section
      ref={ref}
      id="network"
      className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden"
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
            Meet The Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1]">
            Connect With Those Building
            <span className="block text-blue-500 italic mt-1">AI&apos;s Future</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto mt-4 md:mt-6">
            Engineers, founders, and leaders from Google, Microsoft, Amazon, Meta and India&apos;s
            top AI startups
          </p>
        </motion.div>

        {/* Leaders Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

          <div
            className="flex sm:animate-sm-marquee-slow animate-marquee-slow"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {doubledLeaders.map((leader, index) => (
              <LeaderCard key={`leader-${leader.id}-${index}`} leader={leader} />
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
            {leaders.slice(0, 4).map((leader) => (
              <div
                key={leader.id}
                className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden ring-2 ring-neutral-50"
              >
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-neutral-600">
            Learn from <span className="font-semibold text-neutral-900">10+ Tier-1 mentors</span>{' '}
            who ship AI at scale
          </p>
        </motion.div>
      </div>
    </section>
  );
}
