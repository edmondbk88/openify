import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export const metadata: Metadata = {
  title: 'Actualizaciones de Producto - Changelog | Opinafy',
  description:
    'Todas las novedades, mejoras y correcciones de Opinafy. Mantente al dia con las ultimas actualizaciones de la plataforma de testimonios.',
  keywords: [
    'opinafy actualizaciones',
    'changelog opinafy',
    'novedades testimonios',
    'nuevas funciones opinafy',
    'actualizaciones plataforma',
  ],
  alternates: {
    canonical: 'https://opinafy.com/actualizaciones',
    languages: {
      es: 'https://opinafy.com/actualizaciones',
      en: 'https://opinafy.com/en/changelog',
      'x-default': 'https://opinafy.com/actualizaciones',
    },
  },
  openGraph: {
    title: 'Actualizaciones de Producto - Opinafy',
    description: 'Todas las novedades, mejoras y correcciones de Opinafy.',
    url: 'https://opinafy.com/actualizaciones',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
}

type UpdateCategory = 'nuevo' | 'mejora' | 'correccion'

interface ProductUpdate {
  date: string
  title: string
  description: string
  category: UpdateCategory
}

const categoryConfig: Record<UpdateCategory, { label: string; color: string }> = {
  nuevo: { label: 'Nuevo', color: 'bg-green-100 text-green-700 border-green-200' },
  mejora: { label: 'Mejora', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  correccion: { label: 'Correccion', color: 'bg-orange-100 text-orange-700 border-orange-200' },
}

const updates: ProductUpdate[] = [
  {
    date: '2026-03-23',
    title: 'Ranking de empresas mejor valoradas',
    description: 'Nueva pagina publica de ranking que muestra las empresas con mejores testimonios verificados en Opinafy, ordenadas por valoración media y número de testimonios.',
    category: 'nuevo',
  },
  {
    date: '2026-03-23',
    title: 'Plantillas de email para solicitar testimonios',
    description: '6 plantillas de email predefinidas para solicitar testimonios a tus clientes: post-compra, recordatorio, logro, temporada, feedback positivo y video. Disponibles en espanol e ingles con variables personalizables.',
    category: 'nuevo',
  },
  {
    date: '2026-03-23',
    title: 'Pagina de actualizaciones de producto',
    description: 'Nuevo changelog publico donde compartimos todas las novedades, mejoras y correcciones de la plataforma.',
    category: 'nuevo',
  },
  {
    date: '2026-03-22',
    title: 'Generador de posts para redes sociales',
    description: 'Convierte tus mejores testimonios en posts listos para compartir en Instagram, Twitter/X, LinkedIn y Facebook con disenos profesionales.',
    category: 'nuevo',
  },
  {
    date: '2026-03-22',
    title: 'Automatizacion de solicitud de testimonios',
    description: 'Configura emails automaticos para solicitar testimonios a tus clientes despues de una compra o servicio. Secuencias con recordatorios automaticos.',
    category: 'nuevo',
  },
  {
    date: '2026-03-21',
    title: 'Programa de certificación con insignias',
    description: 'Sistema de certificación con insignias Bronze, Silver, Gold y Platinum basado en el número de testimonios verificados. Inserta las insignias en tu web.',
    category: 'nuevo',
  },
  {
    date: '2026-03-21',
    title: 'Health Score de testimonios',
    description: 'Evaluación automática del estado de tu estrategia de testimonios con puntuación y recomendaciones personalizadas para mejorar.',
    category: 'nuevo',
  },
  {
    date: '2026-03-20',
    title: 'Exportacion a PDF profesional',
    description: 'Exporta tus testimonios como un informe PDF profesional con tu marca para presentaciones, propuestas comerciales y documentacion.',
    category: 'nuevo',
  },
  {
    date: '2026-03-20',
    title: 'Integraciones con plataformas externas',
    description: 'Conecta Opinafy con Zapier, Slack, Google Sheets y mas. Webhooks personalizables para automatizar tu flujo de trabajo.',
    category: 'nuevo',
  },
  {
    date: '2026-03-20',
    title: 'Analisis y estadisticas avanzadas',
    description: 'Dashboard de analytics con metricas de testimonios, conversion, sentimiento y tendencias temporales para cada proyecto.',
    category: 'nuevo',
  },
  {
    date: '2026-03-19',
    title: '100+ plantillas de widgets',
    description: 'Biblioteca de mas de 100 plantillas de widgets personalizables: carouseles, grids, muros, badges y mas. Cada plantilla con multiples temas.',
    category: 'nuevo',
  },
  {
    date: '2026-03-19',
    title: '30 plantillas de mini sitios',
    description: 'Temas profesionales para tu mini sitio de testimonios: corporate, creative, startup, minimal y muchos mas.',
    category: 'nuevo',
  },
  {
    date: '2026-03-19',
    title: 'Widget JavaScript con Shadow DOM',
    description: 'Widget ligero (~25KB) que se inserta en cualquier web con una linea de codigo. Shadow DOM para aislamiento CSS total.',
    category: 'nuevo',
  },
  {
    date: '2026-03-19',
    title: 'Testimonios en video',
    description: 'Soporte completo para testimonios en video: grabacion desde el navegador, reproduccion en widgets y mini sitios.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Verificación de email de autores',
    description: 'Sistema de verificación de identidad de autores de testimonios. Los testimonios verificados muestran un sello de autenticidad.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Mini sitios de testimonios',
    description: 'Pagina publica dedicada para cada usuario con sus testimonios, accesible en /s/tu-usuario. SEO optimizado con schema markup.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Importacion de testimonios',
    description: 'Importa testimonios desde CSV, Google Reviews y otras plataformas para centralizar todas tus opiniones en un solo lugar.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Solicitud de testimonios por enlace',
    description: 'Genera enlaces unicos para enviar a tus clientes y recopilar testimonios de forma sencilla con un formulario personalizado.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Paginas SEO por industria y ciudad',
    description: 'Mas de 160 paginas por industria y 400+ paginas por ciudad e industria para posicionamiento local en buscadores.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Blog con 160+ articulos',
    description: 'Blog completo con mas de 160 articulos en espanol e ingles sobre testimonios, prueba social, marketing y conversion.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Guías de integración',
    description: 'Guías paso a paso para integrar Opinafy en WordPress, Shopify, Wix, Squarespace, Webflow y Google Tag Manager.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Soporte bilingue completo',
    description: 'Toda la plataforma disponible en espanol e ingles, incluyendo dashboard, widgets, mini sitios y toda la documentacion.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Badge Verificado por Opinafy',
    description: 'Insignia SVG dinamica que muestra el numero de testimonios verificados de tu negocio. Insertable en cualquier web.',
    category: 'nuevo',
  },
  {
    date: '2026-03-18',
    title: 'Lanzamiento de Opinafy',
    description: 'Lanzamiento oficial de la plataforma con planes Free, Mini Sitio, Pro y Business. Recopila, gestiona y muestra testimonios de clientes.',
    category: 'nuevo',
  },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ActualizacionesPage() {
  // Group updates by date
  const grouped = updates.reduce<Record<string, ProductUpdate[]>>((acc, update) => {
    if (!acc[update.date]) acc[update.date] = []
    acc[update.date].push(update)
    return acc
  }, {})

  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Changelog
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Actualizaciones de Producto
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Todas las novedades, mejoras y correcciones de Opinafy. Nos encanta construir cosas nuevas.
          </p>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {Object.entries(categoryConfig).map(([key, config]) => (
            <span
              key={key}
              className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${config.color}`}
            >
              {config.label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-12">
          {dates.map((date) => (
            <div key={date}>
              <div className="sticky top-0 z-10 bg-white/80 py-2 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  {formatDate(date)}
                </h2>
              </div>
              <div className="mt-4 space-y-4">
                {grouped[date].map((update, index) => {
                  const config = categoryConfig[update.category]
                  return (
                    <div
                      key={`${date}-${index}`}
                      className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${config.color}`}>
                              {config.label}
                            </span>
                            <h3 className="font-semibold text-gray-900">{update.title}</h3>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Tienes alguna sugerencia?</h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Nos encanta escuchar a nuestros usuarios. Si tienes ideas para nuevas funciones o mejoras, escribenos.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Contactar
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
