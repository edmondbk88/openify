'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Features', href: '/en/features' },
  { label: 'Pricing', href: '/en/pricing' },
  { label: 'Templates', href: '/en/templates' },
  { label: 'Industries', href: '/en/testimonials-for' },
  { label: 'Blog', href: '/en/blog' },
  { label: 'Help', href: '/en/help' },
]

export function NavbarEn() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/en">
          <Image src="/logo-opinafy.png?v=2" alt="Opinafy" width={140} height={40} className="h-10 w-auto" sizes="(max-width: 768px) 120px, 140px" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language switcher */}
          <div className="ml-2 flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <Link href="/" className="transition-colors hover:text-indigo-600">ES</Link>
            <span>|</span>
            <span className="text-indigo-600">EN</span>
          </div>
          <Link
            href="/en/login"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
          >
            Sign In
          </Link>
          <Link
            href="/en/register"
            className="inline-flex h-10 items-center rounded-lg bg-indigo-600 px-5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md p-3 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Open menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-3 border-gray-100" />
            {/* Language switcher mobile */}
            <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500">
              <Link href="/" className="hover:text-indigo-600">ES</Link>
              <span>|</span>
              <span className="text-indigo-600">EN</span>
            </div>
            <Link
              href="/en/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Sign In
            </Link>
            <Link
              href="/en/register"
              className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
