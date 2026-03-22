import type { Metadata } from 'next'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Downloads & Integrations - Opinafy',
  description:
    'Download the Opinafy plugin for WordPress, Shopify, Wix, Squarespace, and any website. Install verified testimonials in minutes.',
  alternates: {
    canonical: 'https://opinafy.com/en/downloads',
    languages: {
      es: 'https://opinafy.com/descargas',
      en: 'https://opinafy.com/en/downloads',
      'x-default': 'https://opinafy.com/descargas',
    },
  },
  openGraph: {
    title: 'Downloads & Integrations - Opinafy',
    description:
      'Plugins and snippets to integrate verified testimonials into WordPress, Shopify, Wix, Squarespace, and more.',
    url: 'https://opinafy.com/en/downloads',
    locale: 'en_US',
  },
}

const embedCode = `<div id="opinafy-widget" data-project="YOUR_PROJECT_ID"></div>
<script src="https://opinafy.com/widget.js" defer></script>`

const shopifyCode = `{% comment %}
  Opinafy Testimonials Widget
{% endcomment %}

{% assign opinafy_project_id = section.settings.project_id | default: 'YOUR_PROJECT_ID' %}

<div id="opinafy-widget" data-project="{{ opinafy_project_id }}"></div>
<script src="https://opinafy.com/widget.js" defer></script>

{% schema %}
{
  "name": "Opinafy Testimonials",
  "settings": [
    {
      "type": "text",
      "id": "project_id",
      "label": "Opinafy Project ID",
      "info": "Find your Project ID in your Opinafy dashboard"
    }
  ],
  "presets": [
    {
      "name": "Opinafy Testimonials"
    }
  ]
}
{% endschema %}`

export default function DownloadsPage() {
  return (
    <>
      <NavbarEn />
      <div className="min-h-screen bg-gray-50 pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Downloads & Integrations
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Integrate verified Opinafy testimonials into your website in
              minutes. Choose your platform and follow the instructions.
            </p>
          </div>

          <div className="space-y-8">
            {/* WordPress */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.158.236-2.261.662-3.265l3.647 9.993A8.564 8.564 0 013.443 12zm8.557 8.557c-.883 0-1.736-.142-2.533-.404l2.69-7.81 2.756 7.552a.805.805 0 00.06.112 8.528 8.528 0 01-2.973.55zm1.175-12.564c.54-.028 1.027-.084 1.027-.084.484-.057.427-.768-.057-.74 0 0-1.454.113-2.393.113-.883 0-2.365-.113-2.365-.113-.484-.028-.54.712-.057.74 0 0 .459.056.943.084l1.4 3.838-1.967 5.9-3.27-9.738c.54-.028 1.027-.084 1.027-.084.484-.057.427-.768-.057-.74 0 0-1.454.113-2.393.113-.168 0-.367-.004-.578-.012A8.538 8.538 0 0112 3.443c2.251 0 4.305.866 5.84 2.283-.037-.002-.072-.007-.11-.007-.883 0-1.51.768-1.51 1.596 0 .74.427 1.368.883 2.108.343.6.74 1.368.74 2.478 0 .768-.296 1.66-.684 2.903l-.896 2.994-3.088-9.205zm4.904 11.29l2.174-6.283c.406-1.015.54-1.823.54-2.546 0-.262-.017-.505-.05-.732A8.546 8.546 0 0120.557 12a8.535 8.535 0 01-2.478 6.283z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      WordPress
                    </h2>
                    <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-700">
                      Official plugin
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Official plugin for WordPress. Install, set your Project ID,
                    and testimonials appear automatically. Supports shortcodes,
                    widgets, and Gutenberg.
                  </p>

                  <div className="mt-6">
                    <a
                      href="/downloads/opinafy-wordpress.zip"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Download plugin v1.0.0
                    </a>
                  </div>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Quick install:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>Download the ZIP file.</li>
                      <li>
                        In WordPress, go to{' '}
                        <strong>Plugins &rarr; Add New &rarr; Upload Plugin</strong>.
                      </li>
                      <li>Upload the ZIP and activate the plugin.</li>
                      <li>
                        Go to <strong>Settings &rarr; Opinafy</strong> and paste
                        your Project ID.
                      </li>
                    </ol>
                    <p className="mt-3 text-sm text-gray-500">
                      You can also use the shortcode{' '}
                      <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">
                        [opinafy]
                      </code>{' '}
                      on any page.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WooCommerce */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                  <svg
                    className="h-8 w-8 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.3 5.4C1.9 5.6 1.6 6 1.5 6.5L.1 13.4c-.3 1.2.5 2.4 1.7 2.6.1 0 .2 0 .4 0 1.1 0 2-.8 2.2-1.9l.8-4.2 1.3 5.1c.2.8.9 1.3 1.7 1.3.7 0 1.4-.5 1.6-1.2l2-5.7-.3 4.7c-.1 1.2.8 2.2 2 2.3h.1c1.1 0 2.1-.9 2.2-2l.5-7.5c.1-1.2-.7-2.3-1.9-2.5-.1 0-.3 0-.4 0-1 0-1.8.6-2.1 1.5l-1.8 5.1-1-4.1c-.2-.9-1-1.6-2-1.6-.8 0-1.6.5-1.9 1.3L3.5 11l-.3-4.1c-.1-.7-.5-1.2-.9-1.5zM20.8 5c-1.5 0-2.8 1-3.1 2.5l-.8 4.3c-.4 2 .9 3.9 2.8 4.3.2 0 .4.1.6.1 1.5 0 2.8-1 3.1-2.5l.8-4.3c.4-2-.9-3.9-2.8-4.3-.2-.1-.4-.1-.6-.1z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      WooCommerce
                    </h2>
                    <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-medium text-purple-700">
                      Extension
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    WooCommerce extension that automatically displays testimonials on product pages.
                    Supports global or per-product Project ID.
                  </p>

                  <div className="mt-6">
                    <a
                      href="/downloads/opinafy-woocommerce.zip"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Download extension v1.0.0
                    </a>
                  </div>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Installation:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>Requires the main Opinafy WordPress plugin (download above).</li>
                      <li>Download the WooCommerce ZIP file.</li>
                      <li>
                        In WordPress, go to{' '}
                        <strong>Plugins &rarr; Add New &rarr; Upload Plugin</strong>.
                      </li>
                      <li>Upload the ZIP and activate the plugin.</li>
                      <li>Testimonials will automatically appear on product pages.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopify */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50">
                  <svg
                    className="h-8 w-8 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.337 3.415c-.025-.018-.05-.028-.084-.028-.033 0-.158.015-.158.015s-1.259-1.262-1.413-1.416c-.152-.154-.452-.107-.568-.072l-.782.241A4.267 4.267 0 0011.988.99c-.148-.187-.33-.367-.58-.494-.744-.378-1.654-.267-2.502.3A4.96 4.96 0 007.63 2.551c-.726.224-1.122.346-1.328.41-.383.118-.399.132-.449.497C5.808 3.815 4.8 11.723 4.8 11.723l7.87 1.477 4.353-1.063s-1.66-8.698-1.686-8.722zM11.14 2.42l-.94.291c0-.282-.04-.68-.15-1.1.578.11.89.72 1.09 1.1v-.291zm-1.595.494l-1.912.592c.195-.748.57-1.49 1.027-1.977.17-.181.406-.382.68-.498.267.548.222 1.324.205 1.883zm-1.263-2.42c.222 0 .404.047.564.14-.258.122-.508.312-.746.572-.565.613-1 1.568-1.171 2.493l-1.52.47C6.01 2.505 7.173.494 8.282.494z" />
                    <path d="M15.253 3.387s-.158-.083-.337-.083c-1.264 0-1.329 1.58-1.329 1.58s-.545-1.069-1.53-1.069c-1.192 0-2.36 1.493-2.36 3.234 0 1.1.567 1.86 1.364 1.86.948 0 1.387-.782 1.387-.782l-.217.745s.23.04.425.04c.347 0 .497-.22.56-.392.06-.168 1.026-4.405 1.07-4.67.067-.38.317-.463.633-.463h.334z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Shopify
                    </h2>
                    <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                      Liquid snippet
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Add testimonials to your Shopify store with a custom section.
                    Copy the Liquid snippet and paste it into your theme.
                  </p>

                  <div className="mt-6">
                    <div className="rounded-lg border border-gray-200 bg-gray-900 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          opinafy-section.liquid
                        </span>
                      </div>
                      <pre className="overflow-x-auto text-sm text-green-400">
                        <code>{shopifyCode}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Installation:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>
                        Go to{' '}
                        <strong>
                          Online Store &rarr; Themes &rarr; Edit Code
                        </strong>
                        .
                      </li>
                      <li>
                        In the <strong>Sections</strong> folder, create a new
                        file called{' '}
                        <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">
                          opinafy-testimonials.liquid
                        </code>
                        .
                      </li>
                      <li>Paste the code above.</li>
                      <li>
                        Go to the <strong>Theme Customizer</strong> and add the
                        &quot;Opinafy Testimonials&quot; section.
                      </li>
                      <li>Enter your Project ID in the section settings.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Wix */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
                  <svg
                    className="h-8 w-8 text-yellow-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.377 4.97c-.478.268-1.032.652-1.354 1.26-.336.63-.407 1.42-.407 2.304v7.462c0 .005.001.009.001.014 0 .004-.001.008-.001.013v.003c.001.078.042.153.115.204l.004.003a.293.293 0 00.105.048.374.374 0 00.134.005c.043-.007.081-.023.115-.045l3.734-2.522c.135-.091.177-.26.177-.421V5.476c0-.282-.29-.418-.53-.277l-.093.053zm-5.132.77a.297.297 0 00-.238.057L12 8.692l-3.99-2.895a.303.303 0 00-.243-.058.263.263 0 00-.21.16c-.016.04-.024.085-.024.134v7.968c0 .17.052.34.177.421l3.734 2.522c.034.022.072.038.115.045a.374.374 0 00.134-.005.293.293 0 00.109-.051l3.734-2.522c.125-.08.177-.25.177-.421V6.022c0-.046-.008-.088-.023-.126a.268.268 0 00-.213-.165l-.106.009zM2.631 4.97C2.39 4.829 2.1 4.965 2.1 5.247v7.822c0 .16.043.33.177.421l3.734 2.522c.034.022.072.038.115.045a.374.374 0 00.134-.005.293.293 0 00.105-.048l.004-.003a.239.239 0 00.115-.204v-.003c0-.005-.001-.009-.001-.013 0-.005.001-.009.001-.014V8.305c0-.884-.071-1.674-.407-2.304-.322-.608-.876-.992-1.354-1.26l-.092-.053V4.97z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Wix</h2>
                  <p className="mt-2 text-gray-600">
                    Integrate Opinafy into your Wix site using the custom HTML
                    embed element.
                  </p>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Installation:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>
                        In the Wix editor, click{' '}
                        <strong>Add (+) &rarr; Embed &rarr; Custom HTML</strong>
                        .
                      </li>
                      <li>
                        Paste the following code (replace YOUR_PROJECT_ID):
                      </li>
                    </ol>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-900 p-4">
                      <pre className="overflow-x-auto text-sm text-green-400">
                        <code>{embedCode}</code>
                      </pre>
                    </div>
                    <ol
                      className="mt-3 list-inside list-decimal space-y-1 text-sm text-gray-600"
                      start={3}
                    >
                      <li>Resize the HTML element in the editor.</li>
                      <li>Publish your site.</li>
                    </ol>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Check our{' '}
                    <Link
                      href="/en/guides/wix"
                      className="text-indigo-600 hover:underline"
                    >
                      complete Wix guide
                    </Link>{' '}
                    for more details.
                  </p>
                </div>
              </div>
            </div>

            {/* Squarespace */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                  <svg
                    className="h-8 w-8 text-gray-800"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.624 8.656l1.778-1.778a2.236 2.236 0 013.161 0l5.625 5.625a2.236 2.236 0 010 3.161L14.41 17.44a2.236 2.236 0 01-3.161 0L5.624 11.82a2.236 2.236 0 010-3.164zm1.778.888a.745.745 0 00-1.054 0 .745.745 0 000 1.054l5.625 5.625a.745.745 0 001.054 0l1.778-1.778a.745.745 0 000-1.054L9.18 7.766a.745.745 0 00-1.054 0L6.402 9.544zm-3.9-1.888c-1.218 1.218-1.218 3.193 0 4.411l5.625 5.625c1.218 1.218 3.193 1.218 4.411 0l.845-.845-1.054-1.054-.845.845a1.682 1.682 0 01-2.303 0L3.556 11.02a1.682 1.682 0 010-2.303l.845-.845L3.347 6.82l-.845.845zm15.848-.845c1.218 1.218 1.218 3.193 0 4.411l-5.625 5.625c-1.218 1.218-3.193 1.218-4.411 0l-.845.845 1.054 1.054.845-.845a1.682 1.682 0 012.303 0l5.625-5.625a1.682 1.682 0 000-2.303l-.845-.845 1.054-1.054.845.845z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Squarespace
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Add verified testimonials to your Squarespace site with a
                    code block.
                  </p>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Installation:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>
                        Edit the page where you want to display testimonials.
                      </li>
                      <li>
                        Add a <strong>Code Block</strong>.
                      </li>
                      <li>
                        Paste the following code (replace YOUR_PROJECT_ID):
                      </li>
                    </ol>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-900 p-4">
                      <pre className="overflow-x-auto text-sm text-green-400">
                        <code>{embedCode}</code>
                      </pre>
                    </div>
                    <ol
                      className="mt-3 list-inside list-decimal space-y-1 text-sm text-gray-600"
                      start={4}
                    >
                      <li>
                        Uncheck &quot;Display Source&quot;.
                      </li>
                      <li>Save and publish.</li>
                    </ol>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Check our{' '}
                    <Link
                      href="/en/guides/squarespace"
                      className="text-indigo-600 hover:underline"
                    >
                      complete Squarespace guide
                    </Link>{' '}
                    for more details.
                  </p>
                </div>
              </div>
            </div>

            {/* PrestaShop */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink-50">
                  <svg
                    className="h-8 w-8 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.8 13.4V9.2c0-.5.4-.9.9-.9h2.6c.5 0 .9.4.9.9v4.2c0 .5-.4.9-.9.9h-2.6c-.5 0-.9-.4-.9-.9zm-4.5-1.8c0-3.7 3-6.6 6.7-6.6s6.7 3 6.7 6.6c0 3.7-3 6.6-6.7 6.6s-6.7-2.9-6.7-6.6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      PrestaShop
                    </h2>
                    <span className="rounded-full bg-pink-100 px-3 py-0.5 text-xs font-medium text-pink-700">
                      Module
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Official module for PrestaShop. Configure your Project ID from the back office
                    and testimonials appear automatically in your store&apos;s footer.
                  </p>

                  <div className="mt-6">
                    <a
                      href="/downloads/opinafy-prestashop.zip"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Download module v1.0.0
                    </a>
                  </div>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Installation:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>Download the ZIP file.</li>
                      <li>
                        In PrestaShop, go to{' '}
                        <strong>Modules &rarr; Module Manager &rarr; Upload Module</strong>.
                      </li>
                      <li>Upload the ZIP and install the module.</li>
                      <li>
                        Click <strong>Configure</strong> and paste your Project ID.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Webflow */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.802 8.56l-1.986 6.496-1.95-6.46a.544.544 0 00-.526-.39.544.544 0 00-.525.39l-1.95 6.46L8.88 8.56a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56L2 18h3.18l1.95-6.46 1.95 6.46c.072.234.288.39.526.39.24 0 .456-.156.526-.39l1.95-6.46L14.032 18h3.18l-2.742-9.44a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Webflow</h2>
                  <p className="mt-2 text-gray-600">
                    Integrate Opinafy into your Webflow site using project custom code,
                    page-specific code, or Embed elements.
                  </p>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Quick install:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>
                        Go to <strong>Project Settings &rarr; Custom Code</strong>.
                      </li>
                      <li>
                        Paste the Opinafy code in the <strong>Footer Code</strong> field.
                      </li>
                      <li>
                        Or use an <strong>Embed</strong> element for exact positioning.
                      </li>
                    </ol>
                    <div className="mt-3 rounded-lg border border-gray-200 bg-gray-900 p-4">
                      <pre className="overflow-x-auto text-sm text-green-400">
                        <code>{embedCode}</code>
                      </pre>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Check our{' '}
                    <Link
                      href="/en/guides/webflow"
                      className="text-indigo-600 hover:underline"
                    >
                      complete Webflow guide
                    </Link>{' '}
                    for more details.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Tag Manager */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                  <svg
                    className="h-8 w-8 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Google Tag Manager
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Install the Opinafy widget via Google Tag Manager.
                    Ideal if you already use GTM to manage your site scripts.
                  </p>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Quick install:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>
                        In GTM, create a new <strong>Custom HTML</strong> tag.
                      </li>
                      <li>Paste the Opinafy code.</li>
                      <li>Set the trigger (All Pages or specific pages).</li>
                      <li>Publish the changes.</li>
                    </ol>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Check our{' '}
                    <Link
                      href="/en/guides/google-tag-manager"
                      className="text-indigo-600 hover:underline"
                    >
                      complete Google Tag Manager guide
                    </Link>{' '}
                    for more details.
                  </p>
                </div>
              </div>
            </div>

            {/* Generic HTML */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                  <svg
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    HTML / Any website
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Paste this code into any website to display your
                    testimonials. Works with any platform, CMS, or static site.
                  </p>

                  <div className="mt-6 rounded-lg border border-gray-200 bg-gray-900 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs text-gray-400">HTML</span>
                    </div>
                    <pre className="overflow-x-auto text-sm text-green-400">
                      <code>{embedCode}</code>
                    </pre>
                  </div>

                  <div className="mt-4 rounded-lg bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Instructions:
                    </h3>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-gray-600">
                      <li>Copy the code above.</li>
                      <li>
                        Replace{' '}
                        <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">
                          YOUR_PROJECT_ID
                        </code>{' '}
                        with your actual Opinafy Project ID.
                      </li>
                      <li>
                        Paste the code into your page&apos;s HTML where you want
                        the testimonials to appear.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-indigo-600 p-8 text-center text-white sm:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Don&apos;t have an Opinafy account?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-indigo-100">
                Sign up for free and start collecting verified testimonials from
                your customers in minutes.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/en/register"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
                >
                  Create free account
                </Link>
                <Link
                  href="/en/pricing"
                  className="rounded-lg border border-indigo-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterEn />
    </>
  )
}
