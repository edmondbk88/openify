import type { Metadata } from 'next'
import Link from 'next/link'
import { blogArticles } from '@/lib/blog-data'
import { collectionPageSchema, breadcrumbSchema } from '@/lib/schema'

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
    canonical: 'https://opinafy.com/blog',
  },
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

        {/* Articles Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/10">
                  <svg
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime} de lectura</span>
                </div>

                <h2 className="mt-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
                  {article.title}
                </h2>

                <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                    Leer articulo &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
