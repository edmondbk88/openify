import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn about how Opinafy uses cookies on our website. This policy explains what cookies we use, why, and how you can manage your preferences.',
  alternates: {
    canonical: 'https://opinafy.com/en/legal/cookies',
    languages: {
      'es': 'https://opinafy.com/cookies',
      'en': 'https://opinafy.com/en/legal/cookies',
      'x-default': 'https://opinafy.com/cookies',
    },
  },
  openGraph: {
    title: 'Cookie Policy',
    description: 'Learn about how Opinafy uses cookies on our website.',
    url: 'https://opinafy.com/en/legal/cookies',
    locale: 'en_US',
  },
}

export default function CookiesPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Cookie Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or
                mobile phone) when you visit a website. They are widely used to make websites work
                more efficiently and to provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">2. Cookies We Use</h2>
              <p>We use the following types of cookies on opinafy.com:</p>

              <h3 className="mb-2 mt-4 font-semibold text-gray-800">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core
                functionality such as user authentication, session management, and security. These
                cookies cannot be disabled.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>sb-*-auth-token:</strong> Supabase authentication session (persistent, expires on logout).</li>
                <li><strong>cookie-consent:</strong> Stores your cookie preferences (persistent, 1 year).</li>
              </ul>

              <h3 className="mb-2 mt-4 font-semibold text-gray-800">Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting
                and reporting information anonymously. They are only activated with your consent.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>_ga:</strong> Google Analytics - Distinguishes unique users (persistent, 2 years).</li>
                <li><strong>_ga_*:</strong> Google Analytics - Maintains session state (persistent, 2 years).</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">3. How to Manage Cookies</h2>
              <p>
                When you first visit our website, we will show you a cookie consent banner where
                you can accept or reject non-essential cookies. You can change your preferences at
                any time by:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Clearing your browser cookies and revisiting the website.</li>
                <li>Using your browser settings to block or delete cookies.</li>
              </ul>
              <p className="mt-2">
                Please note that blocking certain cookies may affect the functionality of the website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">4. Third-Party Cookies</h2>
              <p>
                Some cookies on our website are set by third-party services. These include:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Google Analytics:</strong> Web analytics service by Google LLC. For more information, visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Google Privacy Policy</a>.</li>
                <li><strong>Stripe:</strong> Payment processing. Stripe may set cookies for fraud prevention. See the <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">Stripe Privacy Policy</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">5. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our
                practices or for other operational, legal, or regulatory reasons. We recommend
                reviewing this page periodically.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">6. Contact</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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
