'use client';

import Link from 'next/link';
import Footer from '@/components/landing/Footer';
import Navigation from '@/components/landing/Navigation';

export default function TermsPage() {
  return (
    <div className="bg-white text-neutral-900 antialiased">
      <Navigation />

      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl text-neutral-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-neutral-500">Last updated: December 2025</p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Introduction</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Welcome to Lex AI Technologies Pvt Ltd (&quot;Company&quot;, &quot;we&quot;,
                  &quot;our&quot;, &quot;us&quot;). These Terms of Service (&quot;Terms&quot;)
                  govern your use of our website located at LexAILabs.com (the &quot;Service&quot;)
                  operated by Lex AI Technologies Pvt Ltd.
                </p>
                <p>
                  Our{' '}
                  <Link href="/privacy" className="text-coral-600 hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  also governs your use of our Service and explains how we collect, safeguard and
                  disclose information that results from your use of our web pages.
                </p>
                <p>
                  Your agreement with us includes these Terms and our Privacy Policy
                  (&quot;Agreements&quot;). You acknowledge that you have read and understood
                  Agreements, and agree to be bound by them.
                </p>
                <p>
                  If you do not agree with (or cannot comply with) Agreements, then you may not use
                  the Service, but please let us know by emailing at contact@LexAILabs.com so we can
                  try to find a solution. These Terms apply to all visitors, users and others who
                  wish to access or use Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Communications</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  By using our Service, you agree to subscribe to newsletters, marketing or
                  promotional materials and other information we may send. However, you may opt out
                  of receiving any, or all, of these communications from us by following the
                  unsubscribe link or by emailing at contact@LexAILabs.com.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Purchases</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  If you wish to purchase any product or service made available through Service
                  (&quot;Purchase&quot;), you may be asked to supply certain information relevant to
                  your Purchase including but not limited to, your credit or debit card number, the
                  expiration date of your card, your billing address, and your shipping information.
                </p>
                <p>You represent and warrant that:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    You have the legal right to use any card(s) or other payment method(s) in
                    connection with any Purchase
                  </li>
                  <li>The information you supply to us is true, correct and complete</li>
                </ul>
                <p>
                  We may employ the use of third party services for the purpose of facilitating
                  payment and the completion of Purchases. By submitting your information, you grant
                  us the right to provide information to these third parties subject to our Privacy
                  Policy.
                </p>
                <p>
                  We reserve the right to refuse or cancel your order at any time for reasons
                  including but not limited to: product or service availability, errors in the
                  description or price of the product or service, error in your order or other
                  reasons. We reserve the right to refuse or cancel your order if fraud or an
                  unauthorized or illegal transaction is suspected.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Refunds</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Read our{' '}
                  <Link href="/refunds" className="text-coral-600 hover:underline">
                    refund policy
                  </Link>{' '}
                  for details on returns and refunds.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Content</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Our Service allows you to post, link, store, share and otherwise make available
                  certain information, text, graphics, videos, or other material
                  (&quot;Content&quot;). You are responsible for Content that you post on or through
                  Service, including its legality, reliability, and appropriateness.
                </p>
                <p>By posting Content on or through Service, You represent and warrant that:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    Content is yours (you own it) and/or you have the right to use it and the right
                    to grant us the rights and license as provided in these Terms
                  </li>
                  <li>
                    The posting of your Content on or through Service does not violate the privacy
                    rights, publicity rights, copyrights, contract rights or any other rights of any
                    person or entity
                  </li>
                </ul>
                <p>
                  We reserve the right to terminate the account of anyone found to be infringing on
                  a copyright. You retain any and all of your rights to any Content you submit, post
                  or display on or through Service and you are responsible for protecting those
                  rights.
                </p>
                <p>
                  We take no responsibility and assume no liability for Content you or any third
                  party posts on or through Service. However, by posting Content using Service you
                  grant us the right and license to use, modify, publicly perform, publicly display,
                  reproduce, and distribute such Content on and through Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Prohibited Uses</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  You may use Service only for lawful purposes and in accordance with Terms. You
                  agree not to use Service:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    In any way that violates any applicable national or international law or
                    regulation
                  </li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors
                    in any way by exposing them to inappropriate content or otherwise
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material,
                    including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot;
                    or any other similar solicitation
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Company, a Company employee, another
                    user, or any other person or entity
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in any way is illegal,
                    threatening, fraudulent, or harmful
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits anyone&apos;s use or
                    enjoyment of Service
                  </li>
                </ul>
                <p>Additionally, you agree not to:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    Use Service in any manner that could disable, overburden, damage, or impair
                    Service
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process, or means to access
                    Service for any purpose
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with the proper working of
                    Service
                  </li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or other material
                    which is malicious or technologically harmful
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with, damage, or disrupt any
                    parts of Service
                  </li>
                  <li>
                    Attack Service via a denial-of-service attack or a distributed denial-of-service
                    attack
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Analytics</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We may use third-party Service Providers to monitor and analyze the use of our
                  Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">No Use By Minors</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Service is intended only for access and use by individuals at least eighteen (18)
                  years old. By accessing or using Service, you warrant and represent that you are
                  at least eighteen (18) years of age and with the full authority, right, and
                  capacity to enter into this agreement and abide by all of the terms and conditions
                  of Terms. If you are not at least eighteen (18) years old, you are prohibited from
                  both the access and usage of Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Accounts</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  When you create an account with us, you guarantee that you are above the age of
                  18, and that the information you provide us is accurate, complete, and current at
                  all times. Inaccurate, incomplete, or obsolete information may result in the
                  immediate termination of your account on Service.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account and
                  password, including but not limited to the restriction of access to your computer
                  and/or account. You agree to accept responsibility for any and all activities or
                  actions that occur under your account and/or password.
                </p>
                <p>
                  You must notify us immediately upon becoming aware of any breach of security or
                  unauthorized use of your account. You may be sent a one time password SMS on your
                  mobile number by Lex AI Technologies Pvt Ltd to verify your identity.
                </p>
                <p>
                  We reserve the right to refuse service, terminate accounts, remove or edit
                  content, or cancel orders in our sole discretion.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Service and its original content (excluding Content provided by users), features
                  and functionality are and will remain the exclusive property of Lex AI
                  Technologies Pvt Ltd and its licensors. Service is protected by copyright,
                  trademark, and other laws of and foreign countries. Our trademarks may not be used
                  in connection with any product or service without the prior written consent of Lex
                  AI Technologies Pvt Ltd.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Copyright Policy</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We respect the intellectual property rights of others. It is our policy to respond
                  to any claim that Content posted on Service infringes on the copyright or other
                  intellectual property rights of any person or entity.
                </p>
                <p>
                  If you are a copyright owner, or authorized on behalf of one, and you believe that
                  the copyrighted work has been copied in a way that constitutes copyright
                  infringement, please submit your claim via email to contact@LexAILabs.com, with
                  the subject line: &quot;Copyright Infringement&quot; and include a detailed
                  description of the alleged Infringement.
                </p>
              </div>

              <h3 className="font-serif text-xl text-neutral-900 mt-8 mb-4">
                Required Information for a Copyright Infringement Notice
              </h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>To file a valid complaint, please include:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    Your contact details, including your full name, address, phone number, and email
                  </li>
                  <li>
                    A description of the copyrighted work that you claim has been infringed, along
                    with proof of ownership
                  </li>
                  <li>
                    The exact URL or location on our platform where the allegedly infringing
                    material is hosted
                  </li>
                  <li>
                    A statement confirming that you have a good faith belief that the use of the
                    copyrighted content is unauthorized
                  </li>
                  <li>
                    A declaration that the information provided in your complaint is accurate and
                    that you are the rightful owner or authorized to act on behalf of the copyright
                    owner
                  </li>
                  <li>Your physical or electronic signature</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">
                Error Reporting and Feedback
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  You may provide us either directly at contact@LexAILabs.com or via third party
                  sites and tools with information and feedback concerning errors, suggestions for
                  improvements, ideas, problems, complaints, and other matters related to our
                  Service (&quot;Feedback&quot;).
                </p>
                <p>
                  You acknowledge and agree that: (i) you shall not retain, acquire or assert any
                  intellectual property right or other right, title or interest in or to the
                  Feedback; (ii) Company may have development ideas similar to the Feedback; (iii)
                  Feedback does not contain confidential information or proprietary information from
                  you or any third party; and (iv) Company is not under any obligation of
                  confidentiality with respect to the Feedback.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">
                Subscription to Email and Mobile Notifications
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  By registering on the website, you consent to receiving emails and mobile messages
                  on WhatsApp and SMS from Lex AI Technologies Pvt Ltd for announcements,
                  promotions, alerts and other events. You may unsubscribe from this service by
                  contacting Lex AI Technologies Pvt Ltd.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">
                Links To Other Web Sites
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Our Service may contain links to third party web sites or services that are not
                  owned or controlled by Lex AI Technologies Pvt Ltd.
                </p>
                <p>
                  Lex AI Technologies Pvt Ltd has no control over, and assumes no responsibility for
                  the content, privacy policies, or practices of any third party web sites or
                  services. We do not warrant the offerings of any of these entities/individuals or
                  their websites.
                </p>
                <p>
                  We strongly advise you to read the terms of service and privacy policies of any
                  third party web sites or services that you visit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Disclaimer Of Warranty</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  These services are provided by company on an &quot;as is&quot; and &quot;as
                  available&quot; basis. Company makes no representations or warranties of any kind,
                  express or implied, as to the operation of their services, or the information,
                  content or materials included therein. You expressly agree that your use of these
                  services, their content, and any services or items obtained from us is at your
                  sole risk.
                </p>
                <p>
                  Neither company nor any person associated with company makes any warranty or
                  representation with respect to the completeness, security, reliability, quality,
                  accuracy, or availability of the services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Limitation Of Liability</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Except as prohibited by law, you will hold us and our officers, directors,
                  employees, and agents harmless for any indirect, punitive, special, incidental, or
                  consequential damage, however it arises, whether in an action of contract,
                  negligence, or other tortious action, or arising out of or in connection with this
                  agreement, including without limitation any claim for personal injury or property
                  damage, arising from this agreement and any violation by you of any federal,
                  state, or local laws, statutes, rules, or regulations.
                </p>
                <p>
                  Except as prohibited by law, if there is liability found on the part of company,
                  it will be limited to the amount paid for the products and/or services, and under
                  no circumstances will there be consequential or punitive damages.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Termination</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We may terminate or suspend your account and bar access to Service immediately,
                  without prior notice or liability, under our sole discretion, for any reason
                  whatsoever and without limitation, including but not limited to a breach of Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using Service.
                </p>
                <p>
                  All provisions of Terms which by their nature should survive termination shall
                  survive termination, including, without limitation, ownership provisions, warranty
                  disclaimers, indemnity and limitations of liability.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Governing Law</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of India,
                  which governing law applies to agreement without regard to its conflict of law
                  provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be
                  considered a waiver of those rights. If any provision of these Terms is held to be
                  invalid or unenforceable by a court, the remaining provisions of these Terms will
                  remain in effect. These Terms constitute the entire agreement between us regarding
                  our Service and supersede and replace any prior agreements we might have had
                  between us regarding Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Changes To Service</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We reserve the right to withdraw or amend our Service, and any service or material
                  we provide via Service, in our sole discretion without notice. We will not be
                  liable if for any reason all or any part of Service is unavailable at any time or
                  for any period. From time to time, we may restrict access to some parts of
                  Service, or the entire Service, to users, including registered users.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Amendments To Terms</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  We may amend Terms at any time by posting the amended terms on this site. It is
                  your responsibility to review these Terms periodically.
                </p>
                <p>
                  Your continued use of the Platform following the posting of revised Terms means
                  that you accept and agree to the changes. You are expected to check this page
                  frequently so you are aware of any changes, as they are binding on you.
                </p>
                <p>
                  By continuing to access or use our Service after any revisions become effective,
                  you agree to be bound by the revised terms. If you do not agree to the new terms,
                  you are no longer authorized to use Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Waiver And Severability</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  No waiver by Company of any term or condition set forth in Terms shall be deemed a
                  further or continuing waiver of such term or condition or a waiver of any other
                  term or condition, and any failure of Company to assert a right or provision under
                  Terms shall not constitute a waiver of such right or provision.
                </p>
                <p>
                  If any provision of Terms is held by a court or other tribunal of competent
                  jurisdiction to be invalid, illegal or unenforceable for any reason, such
                  provision shall be eliminated or limited to the minimum extent such that the
                  remaining provisions of Terms will continue in full force and effect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Acknowledgement</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  By using Service or other services provided by us, you acknowledge that you have
                  read these Terms of Service and agree to be bound by them.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-neutral-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>Please send your feedback, comments, requests for technical support by email:</p>
                <p>
                  <a href="mailto:contact@LexAILabs.com" className="text-coral-600 hover:underline">
                    contact@LexAILabs.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
