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
  title: 'Lex AI | Break into AI',
  description:
    "Turning AI complexity into clarity. Join India's premier AI fellowships for engineers and leaders.",
  keywords:
    'Lex AI, AI education, AI fellowship, machine learning, data science, AI training India, AI Seekhega India',
  openGraph: {
    title: 'Lex AI | Break into AI',
    description:
      "Turning AI complexity into clarity. Join India's premier community for learning, building, and leading with Artificial Intelligence.",
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
