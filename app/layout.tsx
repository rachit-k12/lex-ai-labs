import { cn } from '@/lib/utils';
import ClientProviders from '@/providers/client-providers';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lex AI | Build Intelligence. Build India.',
  description:
    "Join India's most ambitious community of engineers, founders & leaders building real AI. Get access to elite training, mentorship, and a network that accelerates your career.",
  keywords:
    'Lex AI, AI community India, AI fellowship, machine learning, AI engineering, AI mentorship, AI training India, AI leaders',
  icons: {
    icon: '/assets/lexailogo.svg',
    shortcut: '/assets/lexailogo.svg',
    apple: '/assets/lexailogo.svg',
  },
  openGraph: {
    title: 'Lex AI | Build Intelligence. Build India.',
    description:
      "Join India's most ambitious community of engineers, founders & leaders building real AI. Elite training, mentorship, and a network that accelerates your career.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn('antialiased bg-surface-50 overflow-x-hidden', plusJakartaSans.className)}
      >
        <ClientProviders>
          {children}
          <Toaster position="top-right" offset={15} />
        </ClientProviders>
      </body>
    </html>
  );
}
