export const revalidate = 3600

import type { Metadata } from 'next'
import { Suspense } from 'react'
import { blogArticlesEn } from '@/lib/blog-data-en'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { BlogListEn } from '@/components/landing/blog-list-en'
import { NavbarEn } from '@/components/landing/navbar-en'
import { FooterEn } from '@/components/landing/footer-en'

export const metadata: Metadata = {
  title: 'Blog | Tips on Testimonials and Social Proof',
  description:
    'Articles, guides, and strategies on customer testimonials, social proof, and how to increase your business conversions. Content by the Opinafy team.',
  keywords: [
    'testimonial blog',
    'social proof guide',
    'customer review tips',
    'testimonial marketing',
    'conversion strategies',
  ],
  alternates: {
    canonical: '/en/blog',
    languages: {
      'es': 'https://opinafy.com/blog',
      'en': 'https://opinafy.com/en/blog',
      'x-default': 'https://opinafy.com/blog',
    },
  },
  openGraph: {
    title: 'Blog | Tips on Testimonials and Social Proof',
    url: 'https://opinafy.com/en/blog',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function BlogPageEn() {
  const collectionJsonLd = collectionPageSchema({
    name: 'Opinafy Blog',
    url: 'https://opinafy.com/en/blog',
    description:
      'Articles, guides, and strategies on customer testimonials, social proof, and how to increase your business conversions.',
    lang: 'en',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: 'https://opinafy.com/en' },
    { name: 'Blog', url: 'https://opinafy.com/en/blog' },
  ])

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogArticlesEn.slice(0, 12).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://opinafy.com/en/blog/${article.slug}`,
      name: article.title,
    })),
  }

  return (
    <>
      <NavbarEn />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Opinafy Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tips, strategies, and guides on customer testimonials, social proof, and how to
            boost your business conversions.
          </p>
        </div>

        <Suspense fallback={null}>
          <BlogListEn articles={blogArticlesEn.map(({ slug, title, excerpt, category, keywords, date, readTime, image, tldr }) => ({ slug, title, excerpt, category, keywords, date, readTime, image, tldr }))} />
        </Suspense>
      </div>
      <FooterEn />
    </>
  )
}
