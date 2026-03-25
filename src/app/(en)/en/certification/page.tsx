import type { Metadata } from 'next'
import Link from 'next/link'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Certification Program - Bronze, Silver, Gold & Platinum Badges',
  description:
    'Earn your Opinafy certification badge. Prove the authenticity of your testimonials with Bronze, Silver, Gold or Platinum badges based on verified reviews.',
  keywords: [
    'testimonial certification',
    'verified testimonial badge',
    'social proof badge',
    'customer review certification',
    'trust seal website',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/certification',
    languages: {
      es: 'https://opinafy.com/certificacion',
      en: 'https://opinafy.com/en/certification',
      'x-default': 'https://opinafy.com/certificacion',
    },
  },
  openGraph: {
    title: 'Opinafy Certification Program',
    description: 'Prove the authenticity of your testimonials with verified Opinafy badges.',
    url: 'https://opinafy.com/en/certification',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
}

const tiers = [
  {
    name: 'Bronze',
    threshold: '5+',
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-300',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    benefits: [
      'Bronze badge for your website',
      'Prove you have real testimonials',
      'Increase basic visitor trust',
    ],
  },
  {
    name: 'Silver',
    threshold: '20+',
    color: 'from-gray-300 to-gray-500',
    borderColor: 'border-gray-300',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-600',
    benefits: [
      'Silver badge for your website',
      'Greater credibility with potential customers',
      'Stand out from competitors',
    ],
  },
  {
    name: 'Gold',
    threshold: '50+',
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    popular: true,
    benefits: [
      'Gold badge for your website',
      'Maximum impact on purchase decisions',
      'Position as a customer satisfaction leader',
      'Listed in Gold companies directory',
    ],
  },
  {
    name: 'Platinum',
    threshold: '200+',
    color: 'from-indigo-300 to-indigo-500',
    borderColor: 'border-indigo-300',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    benefits: [
      'Exclusive Platinum badge for your website',
      'Recognition as a reference company',
      'Elite social proof status',
      'Featured in our communications',
      'Priority support',
    ],
  },
]

export default function CertificationEnPage() {
  return (
    <>
      <NavbarEn />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy Certification Program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Earn certification badges based on the number of verified testimonials you collect.
            Show your visitors that your customer trust is real.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">How it works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">1</div>
              <h3 className="mt-4 font-semibold text-gray-900">Collect testimonials</h3>
              <p className="mt-2 text-sm text-gray-500">Use Opinafy to collect verified testimonials from your customers.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">2</div>
              <h3 className="mt-4 font-semibold text-gray-900">Level up</h3>
              <p className="mt-2 text-sm text-gray-500">Your certification updates automatically when you reach a new threshold.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">3</div>
              <h3 className="mt-4 font-semibold text-gray-900">Display your badge</h3>
              <p className="mt-2 text-sm text-gray-500">Embed the badge on your website to prove the authenticity of your reviews.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">Certification tiers</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border-2 ${tier.borderColor} ${tier.bgColor} p-6 ${tier.popular ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
                )}
                <div className={`inline-flex rounded-full bg-gradient-to-r ${tier.color} px-3 py-1 text-xs font-bold text-white`}>{tier.name}</div>
                <p className="mt-3 text-3xl font-bold text-gray-900">{tier.threshold}</p>
                <p className="text-sm text-gray-500">verified testimonials</p>
                <ul className="mt-4 space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.textColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-indigo-600 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Start certifying your testimonials</h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Create your free account, collect testimonials, and earn your first Bronze badge with just 5 reviews.
          </p>
          <Link
            href="/en/register"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Create free account
          </Link>
        </div>
      </main>
      <FooterEn />
    </>
  )
}
