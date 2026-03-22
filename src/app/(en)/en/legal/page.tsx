import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Notice - Opinafy',
  description:
    'Legal notice and company information for Opinafy. Learn about our legal entity, contact details, and regulatory information.',
  alternates: {
    canonical: 'https://opinafy.com/en/legal',
    languages: {
      'es': 'https://opinafy.com/legal',
      'en': 'https://opinafy.com/en/legal',
      'x-default': 'https://opinafy.com/legal',
    },
  },
  openGraph: {
    title: 'Legal Notice - Opinafy',
    description: 'Legal notice and company information for Opinafy.',
    url: 'https://opinafy.com/en/legal',
    locale: 'en_US',
  },
}

export default function LegalPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Legal Notice</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Website Owner</h2>
              <p>
                This website, opinafy.com, is owned and operated by Opinafy.
              </p>
              <ul className="mt-3 space-y-1">
                <li><strong>Contact email:</strong> hola@opinafy.com</li>
                <li><strong>Website:</strong> https://opinafy.com</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Purpose of the Website</h2>
              <p>
                Opinafy is a SaaS (Software as a Service) platform designed for the collection,
                management, and display of customer testimonials. Through our service, businesses
                can gather authentic reviews and display them on their websites using customizable widgets.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to texts, graphics, images,
                logos, icons, software, and design, is the property of Opinafy or its licensors
                and is protected by intellectual property laws. Reproduction, distribution, or
                modification without express written consent is prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Limitation of Liability</h2>
              <p>
                Opinafy strives to ensure that the information on this website is accurate and
                up to date. However, we do not guarantee the completeness, accuracy, or reliability
                of the information provided. Use of this website and our services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Applicable Law</h2>
              <p>
                This legal notice is governed by the laws of Spain. Any disputes arising from the
                use of this website shall be subject to the jurisdiction of the courts of Spain.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Related Legal Documents</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/en/legal/privacy" className="text-indigo-600 hover:text-indigo-700">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/en/legal/terms" className="text-indigo-600 hover:text-indigo-700">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/en/legal/cookies" className="text-indigo-600 hover:text-indigo-700">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
