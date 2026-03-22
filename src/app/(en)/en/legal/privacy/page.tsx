import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Privacy Policy - Opinafy',
  description:
    'Learn how Opinafy collects, uses, and protects your personal data. Our privacy policy explains your rights under GDPR and how we handle your information.',
  alternates: {
    canonical: 'https://opinafy.com/en/legal/privacy',
    languages: {
      'es': 'https://opinafy.com/privacidad',
      'en': 'https://opinafy.com/en/legal/privacy',
      'x-default': 'https://opinafy.com/privacidad',
    },
  },
  openGraph: {
    title: 'Privacy Policy - Opinafy',
    description: 'Learn how Opinafy collects, uses, and protects your personal data.',
    url: 'https://opinafy.com/en/legal/privacy',
    locale: 'en_US',
  },
}

export default function PrivacyPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">1. Data Controller</h2>
              <p>
                The data controller responsible for your personal data is Opinafy, contactable at
                hola@opinafy.com. We are committed to protecting your privacy and handling your
                personal information in compliance with the General Data Protection Regulation (GDPR)
                and Spanish data protection laws (LOPDGDD).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">2. Data We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Account data:</strong> Name, email address, and password when you register.</li>
                <li><strong>Payment data:</strong> Payment information processed securely through Stripe. We do not store your card details.</li>
                <li><strong>Usage data:</strong> Information about how you use our platform (pages visited, features used).</li>
                <li><strong>Testimonial data:</strong> Content submitted by your customers through collection forms.</li>
                <li><strong>Contact data:</strong> Name, email, and message content when you contact us.</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">3. Purpose of Data Processing</h2>
              <p>We process your personal data for the following purposes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>To provide and maintain our services.</li>
                <li>To process payments and manage subscriptions.</li>
                <li>To communicate with you about your account or support requests.</li>
                <li>To send service-related notifications.</li>
                <li>To improve our platform and user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">4. Legal Basis</h2>
              <p>We process your data based on the following legal grounds:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Contract performance:</strong> Processing necessary to provide you with our services.</li>
                <li><strong>Legitimate interest:</strong> To improve our services and ensure security.</li>
                <li><strong>Consent:</strong> For analytics cookies and marketing communications.</li>
                <li><strong>Legal obligation:</strong> To comply with applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">5. Data Sharing</h2>
              <p>We may share your data with the following third parties:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Supabase:</strong> Database and authentication provider.</li>
                <li><strong>Stripe:</strong> Payment processing.</li>
                <li><strong>Vercel:</strong> Hosting provider.</li>
                <li><strong>Resend:</strong> Email delivery service.</li>
                <li><strong>Google Analytics:</strong> Website usage analytics (with your consent).</li>
              </ul>
              <p className="mt-2">We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">6. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as needed to
                provide you with our services. If you close your account, we will delete your personal
                data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">7. Your Rights</h2>
              <p>Under GDPR, you have the following rights:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Right of access:</strong> Request a copy of your personal data.</li>
                <li><strong>Right to rectification:</strong> Correct inaccurate personal data.</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data.</li>
                <li><strong>Right to restriction:</strong> Restrict the processing of your data.</li>
                <li><strong>Right to data portability:</strong> Receive your data in a structured format.</li>
                <li><strong>Right to object:</strong> Object to data processing based on legitimate interest.</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time.</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at hola@opinafy.com.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">8. International Transfers</h2>
              <p>
                Some of our service providers may be located outside the European Economic Area (EEA).
                In such cases, we ensure that appropriate safeguards are in place, such as Standard
                Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">9. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal data against unauthorized access, alteration, disclosure, or destruction.
                This includes SSL encryption, secure authentication, and regular security reviews.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">10. Contact</h2>
              <p>
                If you have any questions about this privacy policy or wish to exercise your rights,
                please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> hola@opinafy.com
              </p>
              <p className="mt-2">
                You also have the right to file a complaint with the Spanish Data Protection Agency
                (AEPD) at www.aepd.es.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
