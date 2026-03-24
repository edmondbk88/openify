export const revalidate = 60

import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import { webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Pricing - Opinafy',
  description:
    'Check out Opinafy plans and pricing. Start for free and scale as you need. Flexible plans for freelancers, small businesses, and agencies.',
  alternates: {
    canonical: 'https://opinafy.com/en/pricing',
    languages: {
      'es': 'https://opinafy.com/precios',
      'en': 'https://opinafy.com/en/pricing',
      'x-default': 'https://opinafy.com/precios',
    },
  },
  openGraph: {
    title: 'Pricing - Opinafy',
    description:
      'Flexible plans to collect and display customer testimonials. Start for free.',
    url: 'https://opinafy.com/en/pricing',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Opinafy',
    description:
      'Flexible plans to collect and display customer testimonials. Start for free.',
    images: ['/og.png'],
  },
}

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out the platform.',
    features: [
      '1 project',
      '10 testimonials',
      '2 available layouts',
      'Opinafy branding on widget',
      'Company verification',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Mini Site',
    price: '5',
    description: 'Ideal for professionals and freelancers.',
    features: [
      '1 project',
      '20 testimonials',
      'Customizable public mini site',
      '2 available layouts',
      'Opinafy branding on widget',
      'Company verification',
    ],
    cta: 'Choose Mini Site',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '9',
    description: 'For businesses that want to grow.',
    features: [
      '3 projects',
      'Unlimited testimonials',
      'All layouts',
      'No Opinafy branding',
      'Public mini site',
      'Company verification',
      'Priority support',
    ],
    cta: 'Choose Pro',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '19',
    description: 'For teams and agencies.',
    features: [
      'Unlimited projects',
      'Unlimited testimonials',
      'Video testimonials',
      'Video templates',
      'Verified company badge',
      'Public mini site',
      'Company verification',
      '3 team seats',
      'Dedicated support',
      'Data export',
    ],
    cta: 'Choose Business',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'What is Opinafy?',
    answer:
      'Opinafy is a SaaS platform that lets you collect, manage, and display customer testimonials on your website. With customizable forms and embeddable widgets, you can showcase authentic social proof and boost conversions.',
  },
  {
    question: 'How do I install the widget on my website?',
    answer:
      'It is very simple. Once you have approved testimonials, go to the widget section in your dashboard, choose the layout you prefer, customize the colors, and copy the code snippet. Paste it in your website HTML where you want the testimonials to appear.',
  },
  {
    question: 'Can I customize the design?',
    answer:
      'Yes. You can customize the colors, typography, layout (carousel, grid, or wall), and other visual aspects of the widget so it integrates perfectly with your website design.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes, we offer a free plan that includes 1 project, up to 10 testimonials, and 2 layouts. It is perfect for trying out the platform with no commitment. You can upgrade to a paid plan at any time.',
  },
  {
    question: 'Do testimonials help with SEO?',
    answer:
      'Yes. Testimonials are rendered as real HTML content on your page, making them indexable by search engines. We also use structured data (schema markup) to improve visibility in search results.',
  },
  {
    question: 'Can I migrate from another platform?',
    answer:
      'Yes, you can manually import existing testimonials from your dashboard. If you need a bulk migration, our support team can help you with the process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit and debit cards (Visa, Mastercard, American Express) through Stripe, our secure payment gateway. All payments are protected with SSL encryption.',
  },
  {
    question: 'Does it work with WordPress/Shopify?',
    answer:
      'Yes, the Opinafy widget is compatible with any web platform, including WordPress, Shopify, Wix, Squarespace, and any custom HTML site. You just need to paste a code snippet.',
  },
]

export default function PricingPageEn() {
  const webPageJsonLd = webPageSchema({
    name: 'Pricing - Opinafy',
    url: 'https://opinafy.com/en/pricing',
    description: 'Check out Opinafy plans and pricing. Start for free and scale as you need.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Pricing', url: 'https://opinafy.com/en/pricing' },
  ])

  const pricingFaqJsonLd = faqPageSchema([
    {
      question: 'Can I change plans at any time?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time from your dashboard. If you upgrade, the change takes effect immediately and the cost is prorated. If you downgrade, the change will apply at the beginning of the next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit and debit cards (Visa, Mastercard, American Express). Payments are processed securely through Stripe. We do not store card data on our servers.',
    },
    {
      question: 'Is there a discount for annual billing?',
      answer:
        'Yes, we offer a 20% discount on all plans if you choose annual billing. This means the Pro plan goes from EUR 9/mo to EUR 7.20/mo and the Business plan from EUR 19/mo to EUR 15.20/mo. You can switch between monthly and annual billing at any time.',
    },
    {
      question: 'What happens if I exceed the free plan testimonial limit?',
      answer:
        'If you reach the 10-testimonial limit on the free plan, your existing testimonials will continue to display normally, but you won\'t be able to add new ones until you upgrade to a paid plan. Your data is never deleted.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Absolutely. You can cancel your subscription at any time without penalties. You will continue to have access to your plan features until the end of the current billing period. After that, your account will automatically switch to the free plan.',
    },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />
      <NavbarEn />
      <div className="pt-16">
        {/* H1 Header */}
        <section className="bg-white px-4 pb-0 pt-8 sm:pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Plans & Pricing
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Choose the perfect plan for your business. Start free, scale when you need to.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section id="pricing" className="bg-white py-10 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simple and transparent pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Start for free and scale when you need to. No surprises or hidden costs.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    plan.highlighted
                      ? 'border-indigo-600 shadow-xl shadow-indigo-100 ring-1 ring-indigo-600'
                      : 'border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">&euro;{plan.price}</span>
                    <span className="ml-1 text-base text-gray-500">/mo</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3" role="list">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/en/register"
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Feature Comparison Table */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Detailed plan comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Free</th>
                  <th className="px-6 py-4 text-center font-semibold text-teal-600">Mini Site</th>
                  <th className="px-6 py-4 text-center font-semibold text-indigo-600">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Projects</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">3</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Testimonials</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">10</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">20</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Unlimited</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Public mini site</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-teal-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Available layouts</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">2</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">2</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">All</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">All</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Premium templates</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">No Opinafy branding</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Video testimonials</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Team seats</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">1</td>
                  <td className="px-6 py-3.5 text-center text-gray-600">3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Priority support</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">Dedicated support</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 text-gray-700">Data export</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-3.5 text-gray-700">CSS customization</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-gray-500">&mdash;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                  <td className="px-6 py-3.5 text-center text-indigo-600">&#10003;</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-gray-900">Price</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-gray-900">&euro;0/mo</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-teal-600">&euro;5/mo</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-indigo-600">&euro;9/mo</td>
                  <td className="px-6 py-3.5 text-center font-semibold text-gray-900">&euro;19/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            14-day money-back guarantee
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            14-day money-back guarantee. If you are not satisfied, we will refund your money with no questions asked.
            We want you to try Opinafy with complete peace of mind and zero risk.
          </p>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Can I change plans at any time?
                <svg className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time from your dashboard.
                If you upgrade, the change takes effect immediately and the cost is prorated. If you downgrade,
                the change will apply at the beginning of the next billing cycle.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                What payment methods do you accept?
                <svg className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                We accept all major credit and debit cards (Visa, Mastercard, American Express).
                Payments are processed securely through Stripe. We do not store card data on our servers.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Is there a discount for annual billing?
                <svg className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Yes, we offer a 20% discount on all plans if you choose annual billing.
                This means the Pro plan goes from &euro;9/mo to &euro;7.20/mo and the Business plan
                from &euro;19/mo to &euro;15.20/mo. You can switch between monthly and annual billing at any time.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                What happens if I exceed the free plan testimonial limit?
                <svg className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                If you reach the 10-testimonial limit on the free plan, your existing testimonials
                will continue to display normally, but you won&apos;t be able to add new ones until you upgrade to
                a paid plan. Your data is never deleted.
              </div>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                Can I cancel my subscription at any time?
                <svg className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                Absolutely. You can cancel your subscription at any time without penalties.
                You will continue to have access to your plan features until the end of the current
                billing period. After that, your account will automatically switch to the free plan.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to the most common questions about Opinafy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-5">
                <summary className="flex w-full cursor-pointer items-center justify-between text-left list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className="ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FooterEn />
    </>
  )
}
