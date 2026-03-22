import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Terms of Service - Opinafy',
  description:
    'Read the terms and conditions for using Opinafy. These terms govern the use of our testimonial collection and display platform.',
  alternates: {
    canonical: 'https://opinafy.com/en/legal/terms',
    languages: {
      'es': 'https://opinafy.com/terminos',
      'en': 'https://opinafy.com/en/legal/terms',
      'x-default': 'https://opinafy.com/terminos',
    },
  },
  openGraph: {
    title: 'Terms of Service - Opinafy',
    description: 'Terms and conditions for using the Opinafy platform.',
    url: 'https://opinafy.com/en/legal/terms',
    locale: 'en_US',
  },
}

export default function TermsPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Opinafy (the &ldquo;Service&rdquo;), you agree to be bound by these Terms
                of Service. If you do not agree with any part of these terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">2. Description of Service</h2>
              <p>
                Opinafy is a SaaS platform that allows users to collect, manage, and display customer
                testimonials on their websites through embeddable widgets and customizable collection
                forms. We offer both free and paid subscription plans.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">3. Account Registration</h2>
              <p>
                To use certain features of the Service, you must create an account. You are responsible for:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Providing accurate and complete registration information.</li>
                <li>Maintaining the confidentiality of your password.</li>
                <li>All activities that occur under your account.</li>
                <li>Notifying us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">4. Subscription Plans and Payments</h2>
              <p>
                Opinafy offers free and paid subscription plans. Paid plans are billed monthly or annually
                through Stripe. By subscribing to a paid plan, you agree to:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Pay the applicable fees for your chosen plan.</li>
                <li>Automatic renewal of your subscription unless canceled before the end of the billing period.</li>
                <li>Provide valid payment information.</li>
              </ul>
              <p className="mt-2">
                You may cancel your subscription at any time. Access to paid features will continue until
                the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">5. Refund Policy</h2>
              <p>
                We offer a 14-day money-back guarantee on all paid plans. If you are not satisfied
                with the Service within the first 14 days of your subscription, you may request a
                full refund by contacting us at hola@opinafy.com.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">6. User Content</h2>
              <p>
                You retain ownership of all content you create or upload to the Service, including
                testimonials, form configurations, and widget settings. By using the Service, you
                grant Opinafy a limited license to store, process, and display your content as
                necessary to provide the Service.
              </p>
              <p className="mt-2">You are responsible for ensuring that:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>You have the right to use and display the content you upload.</li>
                <li>Your content does not violate any laws or third-party rights.</li>
                <li>Testimonials displayed are authentic and not fabricated.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">7. Prohibited Use</h2>
              <p>You may not use the Service to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Create or display fake, fraudulent, or misleading testimonials.</li>
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe on the intellectual property rights of others.</li>
                <li>Distribute malware, spam, or other harmful content.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Use the Service for any illegal or unethical purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">8. Service Availability</h2>
              <p>
                We strive to maintain high availability of the Service but do not guarantee
                uninterrupted access. We may perform maintenance, updates, or modifications that
                temporarily affect the availability of the Service. We will endeavor to provide
                advance notice of planned maintenance.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Opinafy shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from
                or related to your use of the Service. Our total liability shall not exceed the
                amount paid by you for the Service in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you violate these
                Terms of Service. Upon termination, your right to use the Service will immediately
                cease. You may export your data before termination.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">11. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of
                significant changes by email or through the Service. Continued use of the Service
                after changes become effective constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Spain. Any disputes arising
                from these terms shall be subject to the jurisdiction of the courts of Spain.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">13. Contact</h2>
              <p>
                For any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> hola@opinafy.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
