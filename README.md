# Lex AI Labs - Landing Page

A modern, conversion-optimized landing page for Lex AI Labs, an AI education company that teaches working professionals to build production AI systems through weekend training programs.

## Project Overview

This is a revamped Next.js landing page for **Lex AI Technologies Private Limited** (Lex AI Labs), built following Y Combinator Design Review principles and modern web best practices. The landing page showcases the AI Fellowship program - weekend training where engineers learn to deploy ML models, fine-tune LLMs, and build AI agents.

### About Lex AI Labs

- **Founder**: Puru Kathuria (Software Engineer at Google, Cloud Security)
- **Mission**: Practitioner-led AI training for working professionals
- **Program**: 12-week AI Fellowship with live weekend sessions, 1:1 mentorship, and hands-on projects
- **Focus**: 70% practical implementation, 30% theory - no academic fluff
- **Location**: India (Gurgaon HQ, Bangalore operations)
- **Website**: https://www.lexailabs.com

## Design Principles Applied

This landing page follows a comprehensive design framework emphasizing:

### Core Principles

1. **Clarity > Cleverness** - Direct, specific headlines over vague marketing speak
2. **Specificity > Generality** - "Build & Deploy ML Models" not "Production-Ready Projects"
3. **Show > Tell** - "70/30 Practical vs Theory" not "Top 1% Curriculum"
4. **Authenticity** - Verifiable facts over self-proclaimed authority
5. **Customer Language** - Words actual customers use, not internal jargon
6. **One Goal Per View** - Each section has one primary focus
7. **Mobile-First** - 99% of users are on mobile devices

### Key Improvements

- **Hero Section**: Changed "Break into AI" → "Learn to build production AI systems in 12 weeks"
- **Programs Section**: Features now focus on outcomes (what you'll build) not process
- **AboutStats**: Removed unverifiable claims ("50k+ learners"), added specific metrics ("Weekend Format")
- **Testimonials**: "Wall of Love" → "What Engineers Say"
- **Instructor**: Removed "passionate about" fluff, added specific roles and projects

See `website-improvements-principles.md` for detailed before/after analysis.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **UI Components**: 
  - shadcn/ui (buttons, forms)
  - MagicUI (flickering grid, shimmer effects, text reveal)
  - Aceternity UI (sparkles, sticky scroll, cover effects)
- **Animations**: Framer Motion
- **Fonts**: Founders Grotesk, TWK Everett (custom fonts)
- **Icons**: Lucide React

## Project Structure

```
lexailabs/
├── app/
│   ├── layout.tsx              # Root layout with fonts and providers
│   ├── page.tsx                # Homepage (landing page)
│   ├── global-error.tsx        # Global error handler
│   └── globals.css             # Global styles and Tailwind
├── components/
│   ├── landing/                # Landing page sections
│   │   ├── Hero.tsx            # Hero with headline and CTA
│   │   ├── TrustedBy.tsx       # Logo cloud
│   │   ├── AboutStats.tsx      # Company overview with stats
│   │   ├── Programs.tsx        # AI Fellowship and AI for Leaders
│   │   ├── InstructorSpotlight.tsx  # Founder credentials
│   │   ├── Testimonials.tsx    # Student reviews
│   │   ├── FinalCTA.tsx        # Bottom conversion section
│   │   ├── Navigation.tsx      # Header navigation
│   │   └── Footer.tsx          # Footer with links
│   ├── magicui/                # Animated UI components
│   └── ui/                     # Base UI components
├── lib/
│   ├── design-system.ts        # Design tokens and theme
│   ├── constants.tsx           # Site-wide constants
│   ├── animations.ts           # Animation configurations
│   └── utils.ts                # Utility functions
├── hooks/
│   └── useIsMobile.tsx         # Mobile detection hook
├── public/
│   ├── assets/                 # Images and logos
│   └── fonts/                  # Custom font files
└── utils/
    ├── handlers.ts             # Event handlers
    └── logger.ts               # Logging utilities
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd lexailabs
   npm install
   ```

2. **Environment Setup** (if needed)

   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_SITE_URL=https://www.lexailabs.com
   NEXT_PUBLIC_CONTACT_EMAIL=contact@lexailabs.com
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Production server
npm run start

# Code linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Key Features

### Landing Page Sections

1. **Hero Section**
   - Clear value proposition: "Learn to build production AI systems in 12 weeks"
   - Specific target audience: Working professionals
   - Primary CTA: "Start Your AI Journey"

2. **Trusted By**
   - Logo cloud of partner companies
   - Social proof

3. **About & Stats**
   - Weekend format emphasis
   - 70/30 practical vs theory ratio
   - Real AI systems description

4. **Programs**
   - AI Fellowship (for engineers)
   - AI for Leaders (for executives)
   - 30-minute strategy session CTA

5. **Instructor Spotlight**
   - Founder credentials (Google engineer)
   - Specific projects and experience
   - Teaching track record

6. **Testimonials**
   - Student reviews
   - Real outcomes and feedback

7. **Final CTA**
   - Conversion-focused section
   - Clear next steps

### Design System

- **Colors**: Minimalist palette (see `lib/design-system.ts`)
- **Typography**: Custom fonts optimized for readability
- **Spacing**: Consistent scale following design tokens
- **Animations**: Subtle, purposeful motion
- **Mobile-First**: All components responsive

## Deployment

### Vercel (Recommended)

```bash
# Connect to Vercel
vercel

# Deploy to production
vercel --prod
```

### Static Export

```bash
# Generate static site
npm run build
npm run export

# Output in /out directory
```

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://www.lexailabs.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@lexailabs.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919996692323
```

## Content Strategy

### What Works (Included)

- Specific outcomes with timelines
- Verifiable facts and features
- Clear audience identification
- Concrete descriptions of student activities
- Customer-friendly language

### What's Avoided

- Generic platform language ("democratizing", "empowering")
- Unverifiable claims ("top 1%", "thousands of professionals")
- Vague value propositions ("turning complexity into clarity")
- Marketing jargon without specifics
- Self-proclaimed authority without proof

## Mobile Optimization

99% of Lex AI Labs users are on mobile devices, so:

- Mobile-first responsive design
- Touch-friendly interactive elements
- Optimized font sizes for small screens
- Fast loading with optimized assets
- Minimal scrolling to see value proposition

## Performance

- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundle
- Lazy loading for below-fold content
- Fast Time to Interactive (TTI)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

### Lex AI Labs

- **Email**: contact@lexailabs.com
- **Phone**: +91 999 669 2323
- **WhatsApp**: +91 999 669 2323
- **Website**: https://www.lexailabs.com
- **Instagram**: @lexailabs
- **LinkedIn**: Lex AI Labs

### Support

For website issues or technical questions about this implementation, contact the development team.

## References

- `website-improvements-principles.md` - Detailed design principles applied
- `lex-ai-report.md` - Comprehensive company information
- `comprehensive-design-framework.md` - Full design framework
- `current-website-copy.txt` - Original website copy for reference

## License

Website design and code © 2025 Lex AI Technologies Private Limited. All rights reserved.

**CIN**: U58201HR2025PTC128914
