export const revalidate = 3600

import type { Metadata } from 'next'
import { Suspense } from 'react'
import { blogArticles } from '@/lib/blog-data'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'
import { BlogList } from '@/components/landing/blog-list'

export const metadata: Metadata = {
  title: 'Blog - Opinafy | Consejos sobre Testimonios y Prueba Social',
  description:
    'Artículos, guías y estrategias sobre testimonios de clientes, prueba social y cómo aumentar las conversiones de tu negocio. Contenido en español por el equipo de Opinafy.',
  keywords: [
    'blog testimonios',
    'guía prueba social',
    'consejos reseñas clientes',
    'marketing testimonios',
    'estrategias conversión',
  ],
  alternates: {
    canonical: '/blog',
    languages: {
      'es': 'https://opinafy.com/blog',
      'en': 'https://opinafy.com/en/blog',
      'x-default': 'https://opinafy.com/blog',
    },
  },
  openGraph: {
    title: 'Blog - Opinafy | Consejos sobre Testimonios y Prueba Social',
    url: 'https://opinafy.com/blog',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  const collectionJsonLd = collectionPageSchema({
    name: 'Blog de Opinafy',
    url: 'https://opinafy.com/blog',
    description:
      'Artículos, guías y estrategias sobre testimonios de clientes, prueba social y cómo aumentar las conversiones de tu negocio.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Blog', url: 'https://opinafy.com/blog' },
  ])

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogArticles.slice(0, 12).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://opinafy.com/blog/${article.slug}`,
      name: article.title,
    })),
  }

  return (
    <>
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

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog de Opinafy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Consejos, estrategias y guías sobre testimonios de clientes, prueba social y cómo
            aumentar las conversiones de tu negocio.
          </p>
        </div>

        <Suspense fallback={null}>
          <BlogList articles={blogArticles.map(({ slug, title, excerpt, category, keywords, date, readTime, image, tldr }) => ({ slug, title, excerpt, category, keywords, date, readTime, image, tldr }))} />
        </Suspense>
      </div>
    </>
  )
}
