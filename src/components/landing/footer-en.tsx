import Image from 'next/image'
import Link from 'next/link'

const productLinks = [
  { label: 'Features', href: '/en/#features' },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Templates', href: '/en/templates' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Guides', href: '/en/guides/wordpress' },
]

const legalLinks = [
  { label: 'Legal Notice', href: '/en/legal' },
  { label: 'Privacy Policy', href: '/en/legal/privacy' },
  { label: 'Terms of Service', href: '/en/legal/terms' },
  { label: 'Cookie Policy', href: '/en/legal/cookies' },
]

export function FooterEn() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/en">
              <Image src="/logo-opinafy.png?v=2" alt="Opinafy" width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              The testimonial platform that helps businesses build trust and
              increase sales.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-3" role="list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <Link
                  href="/en/contact"
                  className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                >
                  Contact form
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hola@opinafy.com"
                  className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                >
                  hola@opinafy.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/opinafy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-indigo-600"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language switcher */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-indigo-600">Espa&ntilde;ol</Link>
          <span>|</span>
          <span className="font-medium text-indigo-600">English</span>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Opinafy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
