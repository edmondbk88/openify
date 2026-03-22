import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { ContactFormEn } from '@/components/contact-form-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - Opinafy',
  description:
    'Contact the Opinafy team. We are here to help you with any questions about testimonials, widgets, or your account.',
  alternates: {
    canonical: 'https://opinafy.com/en/contact',
    languages: {
      'es': 'https://opinafy.com/contacto',
      'en': 'https://opinafy.com/en/contact',
      'x-default': 'https://opinafy.com/contacto',
    },
  },
  openGraph: {
    title: 'Contact - Opinafy',
    description:
      'Contact the Opinafy team. We are here to help you.',
    url: 'https://opinafy.com/en/contact',
    locale: 'en_US',
  },
}

export default function ContactPageEn() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 px-4 py-16 pt-28">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Contact
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Have a question, suggestion, or need help? We are here
              for you. Write to us and we will respond as soon as possible.
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <ContactFormEn />

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:hola@opinafy.com"
                          className="text-sm text-indigo-600 hover:text-indigo-700"
                        >
                          hola@opinafy.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Business hours
                        </p>
                        <p className="text-sm text-gray-600">
                          Monday to Friday, 9:00 AM - 6:00 PM (CET)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="mb-3 text-base font-semibold text-gray-900">
                    Need help?
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    Check out our resources for quick answers
                    to the most frequently asked questions.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/en/blog"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      Blog & guides
                    </Link>
                    <Link
                      href="/en/pricing#faq"
                      className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Frequently asked questions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
