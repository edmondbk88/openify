import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Opinafy on WordPress - Step by Step Guide | Opinafy',
  description:
    'Learn how to install the Opinafy testimonial widget on your WordPress site in minutes. Complete step-by-step guide.',
  alternates: {
    canonical: 'https://opinafy.com/en/guides/wordpress',
    languages: {
      es: 'https://opinafy.com/guias/wordpress',
    },
  },
  openGraph: {
    title: 'How to Install Opinafy on WordPress',
    description: 'Step-by-step guide to add customer testimonials to your WordPress site with Opinafy.',
    url: 'https://opinafy.com/en/guides/wordpress',
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

export default function WordPressGuidePageEn() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="YOUR_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.469 6.825c.84 4.471.132 8.29-2.105 11.455-2.236 3.166-5.508 4.994-9.814 5.486-4.306.491-7.893-.925-10.762-4.249C-4.08 16.193-2.588 11.08 1.27 8.237 5.128 5.394 10.49 4.629 16.354 5.942c.39.088.756.203 1.098.339l3.67-2.918.347 3.462z"/></svg>
            WordPress Guide
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Install Opinafy on WordPress
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Add verified customer testimonials to your WordPress site in less than 5 minutes.
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
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
            [Screenshot: project creation panel]
          </div>
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

        <StepCard number={3} title="Add the code to WordPress">
          <p className="mb-4">You have two options to insert the widget on your WordPress site:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option A: Custom HTML Block (recommended)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Edit the page or post where you want to display testimonials.</li>
                <li>Add a <strong>&quot;Custom HTML&quot;</strong> block.</li>
                <li>Paste the Opinafy embed code.</li>
                <li>Publish or update the page.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Screenshot: Custom HTML block in WordPress]
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option B: Header/Footer Plugin</h4>
              <p className="mb-2">If you want testimonials on every page:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Install a plugin like <strong>&quot;Insert Headers and Footers&quot;</strong> (WPCode) or <strong>&quot;Header Footer Code Manager&quot;</strong>.</li>
                <li>Go to <strong>Settings &gt; Insert Headers and Footers</strong>.</li>
                <li>Paste the Opinafy code in the <strong>&quot;Footer&quot;</strong> section.</li>
                <li>Save changes.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Option C: Shortcode (advanced users)</h4>
              <p className="mb-2">Add this to your <code className="rounded bg-gray-200 px-1 text-xs">functions.php</code> file:</p>
              <CodeBlock code={`function opinafy_widget_shortcode() {
  return '<script src="https://opinafy.com/widget.js" data-project="YOUR_PROJECT_ID"></script>';
}
add_shortcode('opinafy', 'opinafy_widget_shortcode');`} language="php" />
              <p className="text-sm text-gray-500">
                Then use <code className="rounded bg-gray-200 px-1 text-xs">[opinafy]</code> in any page or post.
              </p>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verify it works">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visit the page where you inserted the widget.</li>
            <li>It should automatically load and display your approved testimonials.</li>
            <li>If you don&apos;t see anything, verify you have testimonials with <strong>&quot;Approved&quot;</strong> status in your dashboard.</li>
            <li>Check that the project ID is correct.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Tip:</strong> If you use a caching plugin (WP Super Cache, W3 Total Cache, etc.),
              clear the cache after adding the widget to see changes immediately.
            </p>
          </div>
        </StepCard>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Does the widget affect my site speed?',
                a: 'No. The Opinafy script weighs less than 25 KB and loads asynchronously. It won\'t block your page loading.',
              },
              {
                q: 'Does it work with Elementor, Divi, or other page builders?',
                a: 'Yes. You can paste the code in any HTML block or code module in your favorite page builder.',
              },
              {
                q: 'Can I customize the widget design?',
                a: 'Absolutely. From the Opinafy dashboard you can change colors, typography, layout, borders, and more. Changes apply in real time.',
              },
              {
                q: 'Do I need to update the code when I add new testimonials?',
                a: 'No. The widget updates automatically. When you approve a new testimonial, it appears on your site without touching any code.',
              },
              {
                q: 'Is it compatible with WooCommerce?',
                a: 'Yes. You can add the widget on product pages, your store homepage, or any other WooCommerce page.',
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
          <h2 className="text-2xl font-bold text-gray-900">Ready to add testimonials to your WordPress site?</h2>
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
              href="/en/guides/shopify"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Shopify guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
