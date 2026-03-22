import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy on Webflow - Step by Step Guide | Opinafy',
  description:
    'Learn how to install the Opinafy testimonial widget on your Webflow site in minutes. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/webflow',
    languages: {
      es: 'https://opinafy.com/guias/webflow',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy on Webflow',
    description: 'Step-by-step guide to add customer testimonials to your Webflow site with Opinafy.',
    url: 'https://opinafy.com/en/guides/webflow',
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

export default function WebflowGuidePageEn() {
  const embedCode = `<div id="opinafy-widget" data-project="YOUR_PROJECT_ID"></div>
<script src="https://opinafy.com/widget.js" defer></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.802 8.56l-1.986 6.496-1.95-6.46a.544.544 0 00-.526-.39.544.544 0 00-.525.39l-1.95 6.46L8.88 8.56a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56L2 18h3.18l1.95-6.46 1.95 6.46c.072.234.288.39.526.39.24 0 .456-.156.526-.39l1.95-6.46L14.032 18h3.18l-2.742-9.44a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56z"/></svg>
            Webflow Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy on Webflow
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to your Webflow site in less than 5 minutes.
            No technical knowledge required.
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
            <li>Share the collection link with your customers or import existing testimonials.</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Get the embed code">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Inside your project, go to the <strong>&quot;Widget&quot;</strong> section.</li>
            <li>Customize the design: choose layout (carousel, grid, wall...), colors, and typography.</li>
            <li>Copy the embed code shown below the preview.</li>
          </ol>
          <p className="mt-3">The code will look like this:</p>
          <CodeBlock code={embedCode} />
          <p className="text-sm text-gray-500">
            Replace <code className="rounded bg-gray-200 px-1 text-xs">YOUR_PROJECT_ID</code> with your actual project ID.
          </p>
        </StepCard>

        <StepCard number={3} title="Add the code to Webflow">
          <p className="mb-4">You have three options to insert the widget on your Webflow site:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option A: Project custom code (all pages)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Project Settings</strong>.</li>
                <li>Click on the <strong>&quot;Custom Code&quot;</strong> tab.</li>
                <li>In the <strong>&quot;Footer Code&quot;</strong> field (before {'</body>'}), paste the Opinafy code.</li>
                <li>Save and publish your site.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option B: Page-specific custom code (single page)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Pages</strong> and select the desired page.</li>
                <li>Click the page settings icon (gear).</li>
                <li>Scroll down to <strong>&quot;Custom Code&quot;</strong> &rarr; <strong>&quot;Before {'</body>'} tag&quot;</strong>.</li>
                <li>Paste the Opinafy code.</li>
                <li>Save and publish.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option C: Embed element (exact position)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>In the Webflow Designer, add an <strong>&quot;Embed&quot;</strong> component where you want the testimonials.</li>
                <li>Paste the Opinafy code in the HTML field.</li>
                <li>Click <strong>&quot;Save & Close&quot;</strong>.</li>
                <li>Publish your site to see the changes.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> The Embed component doesn&apos;t show a preview in the Designer.
                  You need to publish your site to see the widget in action.
                </p>
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Publish your Webflow site.</li>
            <li>Visit the page where you inserted the widget.</li>
            <li>It should automatically load and display your approved testimonials.</li>
            <li>If you don&apos;t see anything, verify you have testimonials with <strong>&quot;Approved&quot;</strong> status in your dashboard.</li>
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
                q: 'Does the widget affect my Webflow site speed?',
                a: 'No. The Opinafy script weighs less than 25 KB and loads asynchronously with the defer attribute. It won\'t block your page loading.',
              },
              {
                q: 'Does it work with Webflow\'s free plan?',
                a: 'Yes. The widget works on any Webflow plan, including the free plan. You just need to be able to add custom code or Embed elements.',
              },
              {
                q: 'Can I add the widget to multiple pages?',
                a: 'Yes. Use Option A (Project Settings > Custom Code) to add the widget to all pages, or repeat Option B or C on each page where you need it.',
              },
              {
                q: 'Is the widget responsive?',
                a: 'Yes. The Opinafy widget is fully responsive and automatically adapts to the container width.',
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
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials to your Webflow site?</h2>
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
              href="/en/guides/google-tag-manager"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Google Tag Manager guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
