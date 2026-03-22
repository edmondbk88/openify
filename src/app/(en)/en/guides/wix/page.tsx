import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy on Wix - Step by Step Guide | Opinafy',
  description:
    'Learn how to install the Opinafy testimonial widget on your Wix site in minutes. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/wix',
    languages: {
      es: 'https://opinafy.com/guias/wix',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy on Wix',
    description: 'Step-by-step guide to add customer testimonials to your Wix site with Opinafy.',
    url: 'https://opinafy.com/en/guides/wix',
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

export default function WixGuidePageEn() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="YOUR_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.72 7.46c-.36-.98.2-2.08 1.24-2.44l3.44-1.2c1.04-.36 2.16.16 2.52 1.16l2.68 7.48L17.12 5c.4-.96 1.52-1.44 2.52-1.08l3.32 1.2c1 .36 1.52 1.48 1.16 2.48l-4.96 13.48c-.28.76-.96 1.24-1.72 1.24-.2 0-.44-.04-.64-.12l-3.32-1.2c-.56-.2-.96-.64-1.16-1.12-.2.48-.6.88-1.12 1.08l-3.44 1.2c-.24.08-.48.12-.72.12-.76 0-1.48-.48-1.76-1.24L4.72 7.46z"/></svg>
            Wix Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy on Wix
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to your Wix site in less than 5 minutes.
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

        <StepCard number={3} title="Add the code to Wix">
          <p className="mb-4">You have two options to insert the widget on your Wix site:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option A: HTML Embed Element (recommended)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Open the <strong>Wix Editor</strong> and navigate to the page where you want testimonials.</li>
                <li>Click <strong>&quot;Add&quot;</strong> (+ icon) in the left sidebar.</li>
                <li>Select <strong>&quot;Embeds&quot;</strong> &gt; <strong>&quot;Embed a Widget&quot;</strong> (or &quot;HTML embed&quot;).</li>
                <li>Drag the element to the desired position on your page.</li>
                <li>Click <strong>&quot;Enter Code&quot;</strong> and paste the Opinafy code.</li>
                <li>Click <strong>&quot;Update&quot;</strong> and then <strong>&quot;Publish&quot;</strong>.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option B: Wix App Market</h4>
              <p className="mb-2">If you prefer using a Wix App Market application:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to the <strong>Wix App Market</strong> and search for <strong>&quot;Custom Element&quot;</strong> or <strong>&quot;HTML iFrame&quot;</strong>.</li>
                <li>Install the app on your site.</li>
                <li>Configure the app by pasting the Opinafy code.</li>
                <li>Adjust the element size and publish your site.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option C: Wix Velo (advanced users)</h4>
              <p className="mb-2">If you use Wix Velo (formerly Corvid):</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Add a <strong>Custom Element</strong> to your page.</li>
                <li>In the component code, dynamically load the Opinafy script.</li>
                <li>This gives you full control over when and where the widget appears.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Publish your Wix site and visit it.</li>
            <li>The widget should automatically load and display your approved testimonials.</li>
            <li>If you don&apos;t see anything, verify you have testimonials with <strong>&quot;Approved&quot;</strong> status in your dashboard.</li>
            <li>Check that the project ID is correct.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Tip:</strong> The widget may not render correctly in the Wix editor.
              Always verify on the published version of your site.
            </p>
          </div>
        </StepCard>

        {/* Wix-specific tips */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">Wix Tips</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-blue-800">
            <li>Adjust the height of the HTML embed element to properly display all widget content.</li>
            <li>Use the <strong>&quot;Carousel&quot;</strong> layout if your page has limited width.</li>
            <li>Use the <strong>&quot;Grid&quot;</strong> or <strong>&quot;Wall&quot;</strong> layout in full-width sections.</li>
            <li>The widget automatically adapts to the container width (responsive).</li>
            <li>Works on both classic Wix sites and Wix Studio.</li>
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
                q: 'Does the widget affect my Wix site speed?',
                a: 'No. The Opinafy script weighs less than 25 KB and loads asynchronously. It won\'t affect your Wix site performance.',
              },
              {
                q: 'Does it work with Wix Studio?',
                a: 'Yes. The widget works on both the classic Wix editor and Wix Studio. You just need to add an HTML embed element.',
              },
              {
                q: 'Can I customize the widget size?',
                a: 'Yes. The widget automatically adapts to the container width. You can adjust the HTML embed element height in Wix to control the visible space.',
              },
              {
                q: 'Do I need to update the code when I add new testimonials?',
                a: 'No. The widget updates automatically. When you approve a new testimonial, it appears on your site without touching any code.',
              },
              {
                q: 'Is it compatible with custom domains on Wix?',
                a: 'Yes. The widget works regardless of the domain you use on your Wix site.',
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
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials to your Wix site?</h2>
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
              href="/en/guides/squarespace"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Squarespace guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
