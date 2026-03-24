import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy on Shopify - Step by Step Guide',
  description:
    'Learn how to install the Opinafy testimonial widget on your Shopify store in minutes. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/shopify',
    languages: {
      es: 'https://opinafy.com/guias/shopify',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy on Shopify',
    description: 'Step-by-step guide to add customer testimonials to your Shopify store with Opinafy.',
    url: 'https://opinafy.com/en/guides/shopify',
  },
}

function CodeBlock({ code, language = 'html' }: { code: string; language?: string }) {
  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium uppercase text-gray-500">{language}</span>
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

export default function ShopifyGuidePageEn() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="YOUR_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.2-.214-.2-.1 0-1.239-.083-1.239-.083s-.875-.862-.975-.96c-.1-.1-.296-.07-.416-.035l-.263.08C16.67 2.882 16.34 2.34 15.79 1.9c-.81-.648-1.789-.955-2.823-.91-1.297.055-2.136.83-2.473 2.16-.05.2-.09.38-.13.58-.77-.14-1.31-.07-1.74.23-.43.29-.68.78-.75 1.45l-.08.77c-.58-.04-1.14.02-1.14.02s-.12.02-.14.14c-.02.12.5 8.16.5 8.16l6.52 1.31 2.53-8.22s-.01.01-.01.01c-.14-.06-.3-.1-.46-.13-.83-.17-1.71.14-2.35.81-.39.41-.65.93-.76 1.52l-.3 1.65 3.15.64-1.03 5.55z"/></svg>
            Shopify Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy on Shopify
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to your Shopify store in less than 5 minutes.
            Boost trust and conversions for your e-commerce.
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
            <li>Enter your Shopify store name and customize the form.</li>
            <li>Share the collection link with your customers or import existing reviews.</li>
          </ol>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
            [Screenshot: project creation panel]
          </div>
        </StepCard>

        <StepCard number={2} title="Get the embed code">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Inside your project, go to the <strong>&quot;Widget&quot;</strong> section.</li>
            <li>Customize the design: choose layout, colors, and typography that match your store.</li>
            <li>Copy the embed code.</li>
          </ol>
          <p className="mt-3">The code will look like this:</p>
          <CodeBlock code={embedCode} />
        </StepCard>

        <StepCard number={3} title="Add the code to your Shopify store">
          <p className="mb-4">You have several options to insert the widget:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option A: Edit theme (theme.liquid)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Online Store &gt; Themes</strong> in your Shopify admin.</li>
                <li>Click <strong>&quot;Actions&quot; &gt; &quot;Edit code&quot;</strong>.</li>
                <li>Open the <code className="rounded bg-gray-200 px-1 text-xs">theme.liquid</code> file.</li>
                <li>Paste the Opinafy code just before the <code className="rounded bg-gray-200 px-1 text-xs">&lt;/body&gt;</code> tag.</li>
                <li>Click <strong>&quot;Save&quot;</strong>.</li>
              </ol>
              <CodeBlock code={`<!-- Opinafy Testimonials Widget -->
${embedCode}
</body>`} />
              <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> This option displays testimonials on all pages of your store.
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option B: Custom section (recommended)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Online Store &gt; Themes &gt; Customize</strong>.</li>
                <li>Navigate to the page where you want testimonials.</li>
                <li>Click <strong>&quot;Add section&quot;</strong> and select <strong>&quot;Custom HTML&quot;</strong> or <strong>&quot;Custom Liquid&quot;</strong>.</li>
                <li>Paste the Opinafy code in the HTML/Liquid field.</li>
                <li>Save your changes.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Screenshot: Shopify theme editor with custom section]
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option C: Specific page</h4>
              <p className="mb-2">To add testimonials to a single page only:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Go to <strong>Online Store &gt; Pages</strong>.</li>
                <li>Edit or create the desired page.</li>
                <li>In the editor, click <strong>&quot;Show HTML&quot;</strong> (the <code className="rounded bg-gray-200 px-1 text-xs">&lt;/&gt;</code> icon).</li>
                <li>Paste the Opinafy code.</li>
                <li>Save the page.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visit your Shopify store and navigate to the page where you inserted the widget.</li>
            <li>It should automatically load and display your approved testimonials.</li>
            <li>If you don&apos;t see anything, verify you have testimonials with <strong>&quot;Approved&quot;</strong> status in your dashboard.</li>
            <li>Check that the project ID is correct.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-green-50 border border-green-200 p-4">
            <p className="text-sm text-green-800">
              <strong>Shopify tip:</strong> If you use a caching app or CDN, you may need to wait a few minutes
              or clear the cache to see the widget for the first time.
            </p>
          </div>
        </StepCard>

        {/* Shopify-specific tips */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-green-900">Shopify Tips</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-green-800">
            <li>Place testimonials on product pages, right before the buy button, to maximize conversions.</li>
            <li>Use the <strong>&quot;Carousel&quot;</strong> layout on product pages to save vertical space.</li>
            <li>Use the <strong>&quot;Grid&quot;</strong> or <strong>&quot;Wall&quot;</strong> layout on the homepage for greater visual impact.</li>
            <li>The widget automatically adapts to your Shopify theme width (responsive).</li>
            <li>Enable the <strong>social proof popup</strong> to show FOMO-style notifications across your store.</li>
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
                q: 'Does the widget affect my store speed?',
                a: 'No. The Opinafy script weighs less than 25 KB and loads asynchronously. It won\'t affect your Shopify Core Web Vitals.',
              },
              {
                q: 'Does it work with all Shopify themes?',
                a: 'Yes. The widget uses Shadow DOM to isolate its styles, ensuring compatibility with any Shopify theme without CSS conflicts.',
              },
              {
                q: 'Can I show different testimonials on different pages?',
                a: 'Yes. You can create multiple projects in Opinafy (one per product page, for example) and use different embed codes.',
              },
              {
                q: 'Is it compatible with Shopify Markets (multi-language)?',
                a: 'Yes. The widget automatically detects the browser language. You can create separate projects for each language if you prefer.',
              },
              {
                q: 'Do I need to install a Shopify app?',
                a: 'No. Opinafy works with a simple HTML script, no need to install additional apps in your store.',
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
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials to your Shopify store?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Create your free account and start showing social proof on your e-commerce in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Create free account
            </Link>
            <Link
              href="/en/guides/wordpress"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See WordPress guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
