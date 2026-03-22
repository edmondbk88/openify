import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy on Squarespace - Step by Step Guide | Opinafy',
  description:
    'Learn how to install the Opinafy testimonial widget on your Squarespace site in minutes. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/squarespace',
    languages: {
      es: 'https://opinafy.com/guias/squarespace',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy on Squarespace',
    description: 'Step-by-step guide to add customer testimonials to your Squarespace site with Opinafy.',
    url: 'https://opinafy.com/en/guides/squarespace',
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

export default function SquarespaceGuidePageEn() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="YOUR_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-gray-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Squarespace Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy on Squarespace
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to your Squarespace site in less than 5 minutes.
            Perfectly integrated with your design.
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

        <StepCard number={3} title="Add the code to Squarespace">
          <p className="mb-4">You have two options to insert the widget on your Squarespace site:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option A: Code Block (recommended)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Open the <strong>Squarespace Editor</strong> and navigate to the page where you want testimonials.</li>
                <li>Click <strong>&quot;Edit&quot;</strong> on the page.</li>
                <li>Click on an insertion point and select <strong>&quot;Code Block&quot;</strong>.</li>
                <li>Paste the Opinafy code into the block.</li>
                <li>Turn off the <strong>&quot;Display Source&quot;</strong> option.</li>
                <li>Click <strong>&quot;Apply&quot;</strong> and then <strong>&quot;Save&quot;</strong>.</li>
              </ol>
              <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Code Blocks are only available on Squarespace Business plans and above.
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option B: Code Injection</h4>
              <p className="mb-2">If you want testimonials on every page:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Settings &gt; Advanced &gt; Code Injection</strong>.</li>
                <li>Paste the Opinafy code in the <strong>&quot;Footer&quot;</strong> section.</li>
                <li>Click <strong>&quot;Save&quot;</strong>.</li>
              </ol>
              <CodeBlock code={`<!-- Opinafy Testimonials Widget -->
<div id="opinafy-widget" class="opinafy-widget" data-project="YOUR_PROJECT_ID"></div>
${embedCode}`} />
              <p className="mt-2 text-sm text-gray-500">
                With this option you need to add a <code className="rounded bg-gray-200 px-1 text-xs">div</code> container where you want the widget to appear.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option C: Per-page injection</h4>
              <p className="mb-2">To add testimonials to a specific page only:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Open the desired page in the Squarespace editor.</li>
                <li>Go to <strong>Page Settings</strong> (gear icon).</li>
                <li>Select the <strong>&quot;Advanced&quot;</strong> tab.</li>
                <li>Paste the Opinafy code in the <strong>&quot;Page Header Code Injection&quot;</strong> field.</li>
                <li>Save your changes.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visit your Squarespace site and navigate to the page where you inserted the widget.</li>
            <li>It should automatically load and display your approved testimonials.</li>
            <li>If you don&apos;t see anything, verify you have testimonials with <strong>&quot;Approved&quot;</strong> status in your dashboard.</li>
            <li>Check that the project ID is correct.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm text-gray-700">
              <strong>Tip:</strong> Squarespace may take a few minutes to reflect changes.
              If you don&apos;t see the widget immediately, wait a few minutes and reload the page.
            </p>
          </div>
        </StepCard>

        {/* Squarespace-specific tips */}
        <div className="rounded-xl border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Squarespace Tips</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
            <li>The widget integrates perfectly with Squarespace&apos;s minimalist aesthetic.</li>
            <li>Use the <strong>&quot;Wall&quot;</strong> layout for a masonry-style visual effect that blends well with Squarespace designs.</li>
            <li>Use the <strong>&quot;Dark&quot;</strong> theme if your site has a dark background.</li>
            <li>The widget is fully responsive and adapts to all Squarespace breakpoints.</li>
            <li>Works with all Squarespace templates, including version 7.1.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Does the widget affect my Squarespace site speed?',
                a: 'No. The Opinafy script weighs less than 25 KB and loads asynchronously. It won\'t affect your site performance.',
              },
              {
                q: 'Does it work with all Squarespace templates?',
                a: 'Yes. The widget uses Shadow DOM to isolate its styles, ensuring compatibility with any Squarespace template without CSS conflicts.',
              },
              {
                q: 'Do I need a Business plan on Squarespace?',
                a: 'To use Code Blocks, yes. However, you can use general Code Injection (available on all paid plans) as an alternative.',
              },
              {
                q: 'Can I customize the widget design?',
                a: 'Absolutely. From the Opinafy dashboard you can change colors, typography, layout, borders, and more to perfectly match your Squarespace site.',
              },
              {
                q: 'Do I need to update the code when I add new testimonials?',
                a: 'No. The widget updates automatically. When you approve a new testimonial, it appears on your site without touching any code.',
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
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials to your Squarespace site?</h2>
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
              href="/en/guides/wix"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Wix guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
