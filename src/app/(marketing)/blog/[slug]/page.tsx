import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogArticles } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)

  if (!article) {
    return { title: 'Artículo no encontrado' }
  }

  return {
    title: `${article.title} | Blog Opinafy`,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: 'Equipo Opinafy' }],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      locale: 'es_ES',
      url: `https://opinafy.com/blog/${article.slug}`,
      siteName: 'Opinafy',
      publishedTime: article.date,
      authors: ['Equipo Opinafy'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://opinafy.com/blog/${article.slug}`,
    },
  }
}

const categoryColors: Record<string, string> = {
  Guías: 'bg-blue-100 text-blue-700',
  Estrategias: 'bg-green-100 text-green-700',
  Marketing: 'bg-purple-100 text-purple-700',
  'Diseño Web': 'bg-pink-100 text-pink-700',
  Plantillas: 'bg-yellow-100 text-yellow-700',
  Video: 'bg-red-100 text-red-700',
  Técnico: 'bg-gray-100 text-gray-700',
  Datos: 'bg-indigo-100 text-indigo-700',
  Ecommerce: 'bg-orange-100 text-orange-700',
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Equipo Opinafy',
      url: 'https://opinafy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Opinafy',
      url: 'https://opinafy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://opinafy.com/og-image.png',
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://opinafy.com/blog/${article.slug}`,
    },
    keywords: article.keywords.join(', '),
    inLanguage: 'es',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-indigo-600">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}
            >
              {article.category}
            </span>
            <span className="text-sm text-gray-500">{article.readTime} de lectura</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              EO
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Equipo Opinafy</p>
              <p className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg prose-gray mx-auto max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-6 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Empieza a recopilar testimonios gratis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Opinafy te ayuda a recopilar, gestionar y mostrar testimonios de clientes de forma
            profesional. Sin tarjeta de crédito. Sin compromiso.
          </p>
          <Link
            href="/registro"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50"
          >
            Crear cuenta gratis
          </Link>
        </div>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Artículos relacionados</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-xl border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[related.category] || 'bg-gray-100 text-gray-700'}`}
                >
                  {related.category}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-gray-900 transition-colors group-hover:text-indigo-600 line-clamp-2">
                  {related.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500">
                  {new Date(related.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
