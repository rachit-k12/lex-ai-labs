'use client';

import Link from 'next/link';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

export default function RefundPolicyPage() {
  return (
    <div className="bg-white text-neutral-900 antialiased">
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl text-neutral-900 mb-4">Refund Policy</h1>
            <p className="text-neutral-500">Last updated: December 2025</p>
          </header>

          <div className="space-y-12">
            <section>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  If, for any reason, you are not completely satisfied with a purchase, we invite
                  you to review our policy on refunds and returns. Refund processing may take up to
                  5-7 business days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">
                Your Order Cancellation Rights
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We offer a{' '}
                  <strong className="text-neutral-900">
                    3-day no-questions-asked refund policy
                  </strong>{' '}
                  for &quot;The AI Fellowship&quot; offering.
                </p>
                <p>
                  In order to exercise your right of cancellation, you must inform us of your
                  decision by means of a clear statement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">How to Request a Refund</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>You can inform us of your decision by email:</p>
                <p>
                  <a href="mailto:contact@lexailabs.com" className="text-coral-600 hover:underline">
                    contact@lexailabs.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Processing Time</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Once your refund request is received and approved, refunds are typically processed
                  within 5-7 business days. The refund will be credited to your original payment
                  method.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  If you have any questions about our Returns and Refunds Policy, please contact us:
                </p>
                <p>
                  <a href="mailto:contact@lexailabs.com" className="text-coral-600 hover:underline">
                    contact@lexailabs.com
                  </a>
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-neutral-200">
              <p className="text-neutral-500">
                See also:{' '}
                <Link href="/terms" className="text-coral-600 hover:underline">
                  Terms & Conditions
                </Link>{' '}
                ·{' '}
                <Link href="/privacy" className="text-coral-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
