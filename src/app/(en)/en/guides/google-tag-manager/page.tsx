import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy with Google Tag Manager - Step by Step Guide | Opinafy',
  description:
    'Learn how to install the Opinafy testimonial widget using Google Tag Manager. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/google-tag-manager',
    languages: {
      es: 'https://opinafy.com/guias/google-tag-manager',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy with Google Tag Manager',
    description: 'Step-by-step guide to add customer testimonials using Google Tag Manager and Opinafy.',
    url: 'https://opinafy.com/en/guides/google-tag-manager',
  },
}

function CodeBlock({ code, language = 'html' }: { code: string; language?: string }) {
  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium uppercase text-gray-400">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}

export default function GTMGuidePageEn() {
  const gtmCode = `<div id="opinafy-widget" data-project="YOUR_PROJECT_ID"></div>
<script src="https://opinafy.com/widget.js" defer></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Google Tag Manager Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy with Google Tag Manager
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to any website using Google Tag Manager.
            Ideal if you already use GTM to manage your scripts.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 pb-16 sm:px-6 lg:px-8">
        <StepCard number={1} title="Create your Opinafy project">
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              <Link href="/en/register" className="text-indigo-600 hover:underline">Sign up for Opinafy</Link> (it&apos;s free).
            </li>
            <li>Go to the <strong>Dashboard</strong> and click <strong>&quot;New Project&quot;</strong>.</li>
            <li>Enter your website name and customize the collection form.</li>
            <li>Copy your <strong>Project ID</strong> from the dashboard.</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Create a Custom HTML tag in GTM">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Open <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Tag Manager</a> and sign in.</li>
            <li>Select your container.</li>
            <li>Go to <strong>Tags</strong> and click <strong>&quot;New&quot;</strong>.</li>
            <li>Name it: <strong>&quot;Opinafy Testimonials Widget&quot;</strong>.</li>
            <li>In <strong>Tag Configuration</strong>, select <strong>&quot;Custom HTML&quot;</strong>.</li>
            <li>Paste the following code:</li>
          </ol>
          <CodeBlock code={gtmCode} />
          <p className="text-sm text-gray-500">
            Replace <code className="rounded bg-gray-200 px-1 text-xs">YOUR_PROJECT_ID</code> with your actual project ID.
          </p>
        </StepCard>

        <StepCard number={3} title="Configure the trigger">
          <ol className="ml-4 list-decimal space-y-2">
            <li>In the <strong>&quot;Triggering&quot;</strong> section, click to select a trigger.</li>
            <li>Choose <strong>&quot;All Pages - Page View&quot;</strong> if you want the widget on all pages.</li>
            <li>Or create a custom trigger for specific pages:
              <ul className="ml-4 mt-2 list-disc space-y-1">
                <li>Type: <strong>Page View</strong></li>
                <li>Condition: <strong>Page URL contains</strong> the desired path (e.g., <code className="rounded bg-gray-200 px-1 text-xs">/testimonials</code>)</li>
              </ul>
            </li>
          </ol>
        </StepCard>

        <StepCard number={4} title="Publish the changes">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Save the tag.</li>
            <li>Click <strong>&quot;Submit&quot;</strong> in the top-right corner.</li>
            <li>Add a version name (e.g., &quot;Add Opinafy widget&quot;).</li>
            <li>Click <strong>&quot;Publish&quot;</strong>.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Tip:</strong> Use GTM&apos;s <strong>&quot;Preview&quot;</strong> mode before publishing
              to verify the tag fires correctly on the desired pages.
            </p>
          </div>
        </StepCard>

        <StepCard number={5} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visit your website in an incognito window.</li>
            <li>The widget should load with your approved testimonials.</li>
            <li>If you don&apos;t see anything, check GTM&apos;s Preview mode to verify the tag is firing.</li>
            <li>Verify the Project ID is correct.</li>
          </ol>
        </StepCard>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is it better to use GTM or paste the code directly?',
                a: 'If you already use GTM, it\'s more convenient to manage it from there. If you don\'t use GTM, pasting the code directly is simpler. Both methods work equally well.',
              },
              {
                q: 'Does the widget load with a delay when using GTM?',
                a: 'The delay is minimal (milliseconds). GTM loads the script asynchronously, just like direct installation.',
              },
              {
                q: 'Can I control which pages show the widget?',
                a: 'Yes. That\'s one of the advantages of using GTM: you can create triggers to show the widget only on specific pages.',
              },
              {
                q: 'Does it work with any website?',
                a: 'Yes. If your site has Google Tag Manager installed, you can use this method regardless of the platform (WordPress, Shopify, custom site, etc.).',
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="mt-2 text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials with GTM?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Create your free account and start showing social proof on your site in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Create free account
            </Link>
            <Link
              href="/en/guides/webflow"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Webflow guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
