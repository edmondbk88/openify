import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export const metadata: Metadata = {
  title: 'Connect Opinafy with Zapier - Automate your testimonials',
  description:
    'Integrate Opinafy with Zapier to automate workflows when you receive new testimonials. Connect with Slack, Google Sheets, Mailchimp and 5,000+ apps.',
  keywords: [
    'opinafy zapier',
    'zapier testimonial integration',
    'automate testimonials',
    'webhook testimonials',
    'opinafy integrations',
  ],
  alternates: {
    canonical: 'https://opinafy.com/en/integrations/zapier',
    languages: {
      es: 'https://opinafy.com/integraciones/zapier',
      en: 'https://opinafy.com/en/integrations/zapier',
      'x-default': 'https://opinafy.com/integraciones/zapier',
    },
  },
  openGraph: {
    title: 'Connect Opinafy with Zapier - Automate your testimonials',
    description:
      'Integrate Opinafy with Zapier to automate testimonial workflows.',
    url: 'https://opinafy.com/en/integrations/zapier',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
}

const TRIGGERS = [
  {
    name: 'New Testimonial',
    description: 'Fires when a customer submits a new testimonial to your project.',
    event: 'new_testimonial',
  },
  {
    name: 'Testimonial Approved',
    description: 'Fires when you approve a testimonial from the dashboard.',
    event: 'testimonial_approved',
  },
  {
    name: 'Testimonial Rejected',
    description: 'Fires when you reject a testimonial from the dashboard.',
    event: 'testimonial_rejected',
  },
]

const WORKFLOWS = [
  {
    title: 'Slack Notification',
    description: 'Get a Slack message every time a new testimonial is submitted.',
    apps: ['Opinafy', 'Slack'],
    trigger: 'New Testimonial',
    action: 'Send channel message',
  },
  {
    title: 'Save to Google Sheets',
    description: 'Automatically add each approved testimonial to a spreadsheet.',
    apps: ['Opinafy', 'Google Sheets'],
    trigger: 'Testimonial Approved',
    action: 'Create spreadsheet row',
  },
  {
    title: 'Email via Mailchimp',
    description: 'Send a thank-you email when a testimonial is approved.',
    apps: ['Opinafy', 'Mailchimp'],
    trigger: 'Testimonial Approved',
    action: 'Send thank-you email',
  },
]

export default function ZapierIntegrationPageEN() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b border-gray-100 bg-gradient-to-b from-orange-50 to-white px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2">
              <span className="text-2xl">&#9889;</span>
              <span className="text-sm font-medium text-gray-700">Zapier Integration</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connect Opinafy with Zapier
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Automate your workflows by connecting Opinafy with 5,000+ apps. Get notifications,
              save data, and trigger actions automatically when you receive new testimonials.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Create free account
              </Link>
              <a
                href="https://zapier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Go to Zapier
              </a>
            </div>
          </div>
        </section>

        {/* What you can do */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              What you can do with the integration
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Opinafy connects with Zapier via webhooks, letting you automate any workflow when
              your customers leave testimonials.
            </p>

            {/* Triggers */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Triggers</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {TRIGGERS.map((trigger) => (
                  <div
                    key={trigger.event}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <svg
                        className="h-5 w-5 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">{trigger.name}</h4>
                    <p className="mt-2 text-sm text-gray-600">{trigger.description}</p>
                    <p className="mt-3 text-xs text-gray-500 font-mono">
                      Event: {trigger.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Actions</h3>
              <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Request Testimonial</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Automatically send your collection URL to a contact to request a testimonial.
                  Great for integrating with CRMs and forms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup guide */}
        <section className="border-t border-gray-100 bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">Setup Guide</h2>
            <p className="mt-4 text-center text-gray-600">
              Connect Opinafy with Zapier in just 4 steps.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  step: 1,
                  title: 'Configure your webhook in Opinafy',
                  description:
                    'Go to your project in Opinafy, access the Integrations section, and configure your webhook URL. Select the events you want to notify.',
                },
                {
                  step: 2,
                  title: 'Create a Zap in Zapier',
                  description:
                    'In Zapier, create a new Zap and select "Webhooks by Zapier" as the trigger. Choose "Catch Hook" as the event.',
                },
                {
                  step: 3,
                  title: 'Copy the Zapier webhook URL',
                  description:
                    'Zapier will provide you with a unique URL. Copy this URL and paste it in the webhook configuration of your project in Opinafy.',
                },
                {
                  step: 4,
                  title: 'Configure the action',
                  description:
                    'Choose the destination app (Slack, Google Sheets, etc.) and configure which testimonial data you want to send. Activate the Zap and you\'re done.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    {item.step === 1 && (
                      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-500">
                        [Screenshot: Opinafy integrations panel]
                      </div>
                    )}
                    {item.step === 2 && (
                      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-500">
                        [Screenshot: Create Zap in Zapier]
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example workflows */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Example Workflows
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Get inspired with these popular automation workflows.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {WORKFLOWS.map((wf) => (
                <div
                  key={wf.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h4 className="font-semibold text-gray-900">{wf.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{wf.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="rounded bg-orange-100 px-2 py-0.5 font-medium text-orange-700">
                        Trigger
                      </span>
                      {wf.trigger}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="rounded bg-indigo-100 px-2 py-0.5 font-medium text-indigo-700">
                        Action
                      </span>
                      {wf.action}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1">
                    {wf.apps.map((app) => (
                      <span
                        key={app}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-100 bg-indigo-600 px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Ready to automate?</h2>
            <p className="mt-4 text-indigo-100">
              Configure your webhook from your project&apos;s integrations panel and start
              connecting Opinafy with all your favorite tools.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/register"
                className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
              >
                Create free account
              </Link>
              <Link
                href="/en/login"
                className="rounded-lg border border-indigo-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
