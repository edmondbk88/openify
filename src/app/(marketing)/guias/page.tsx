import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Guías de instalación - Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en WordPress, Shopify, Wix, Squarespace y más. Guías paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias',
    languages: {
      en: 'https://opinafy.com/en/guides',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Guías de instalación - Opinafy',
    description: 'Guías paso a paso para instalar Opinafy en las plataformas más populares.',
    url: 'https://opinafy.com/guias',
  },
}

const guides = [
  {
    name: 'WordPress',
    slug: 'wordpress',
    description: 'Instala el widget en tu sitio WordPress con bloques HTML, plugins de header/footer o shortcodes.',
    color: 'bg-indigo-100 text-indigo-700',
    iconColor: 'text-indigo-600',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21.469 6.825c.84 4.471.132 8.29-2.105 11.455-2.236 3.166-5.508 4.994-9.814 5.486-4.306.491-7.893-.925-10.762-4.249C-4.08 16.193-2.588 11.08 1.27 8.237 5.128 5.394 10.49 4.629 16.354 5.942c.39.088.756.203 1.098.339l3.67-2.918.347 3.462z"/></svg>
    ),
  },
  {
    name: 'Shopify',
    slug: 'shopify',
    description: 'Agrega testimonios a tu tienda Shopify editando el tema, con secciones personalizadas o en paginas especificas.',
    color: 'bg-green-100 text-green-700',
    iconColor: 'text-green-600',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.2-.214-.2-.1 0-1.239-.083-1.239-.083s-.875-.862-.975-.96c-.1-.1-.296-.07-.416-.035l-.263.08C16.67 2.882 16.34 2.34 15.79 1.9c-.81-.648-1.789-.955-2.823-.91-1.297.055-2.136.83-2.473 2.16-.05.2-.09.38-.13.58-.77-.14-1.31-.07-1.74.23-.43.29-.68.78-.75 1.45l-.08.77c-.58-.04-1.14.02-1.14.02s-.12.02-.14.14c-.02.12.5 8.16.5 8.16l6.52 1.31 2.53-8.22s-.01.01-.01.01c-.14-.06-.3-.1-.46-.13-.83-.17-1.71.14-2.35.81-.39.41-.65.93-.76 1.52l-.3 1.65 3.15.64-1.03 5.55z"/></svg>
    ),
  },
  {
    name: 'Wix',
    slug: 'wix',
    description: 'Integra Opinafy en tu sitio Wix mediante elementos HTML embebidos, Wix App Market o Wix Velo.',
    color: 'bg-blue-100 text-blue-700',
    iconColor: 'text-blue-600',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.72 7.46c-.36-.98.2-2.08 1.24-2.44l3.44-1.2c1.04-.36 2.16.16 2.52 1.16l2.68 7.48L17.12 5c.4-.96 1.52-1.44 2.52-1.08l3.32 1.2c1 .36 1.52 1.48 1.16 2.48l-4.96 13.48c-.28.76-.96 1.24-1.72 1.24-.2 0-.44-.04-.64-.12l-3.32-1.2c-.56-.2-.96-.64-1.16-1.12-.2.48-.6.88-1.12 1.08l-3.44 1.2c-.24.08-.48.12-.72.12-.76 0-1.48-.48-1.76-1.24L4.72 7.46z"/></svg>
    ),
  },
  {
    name: 'Squarespace',
    slug: 'squarespace',
    description: 'Muestra testimonios en Squarespace con bloques de codigo, inyeccion de codigo o configuracion por pagina.',
    color: 'bg-gray-200 text-gray-700',
    iconColor: 'text-gray-700',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
    ),
  },
  {
    name: 'Webflow',
    slug: 'webflow',
    description: 'Integra Opinafy en tu sitio Webflow con codigo personalizado del proyecto, por pagina o con elementos Embed.',
    color: 'bg-blue-100 text-blue-700',
    iconColor: 'text-blue-600',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.802 8.56l-1.986 6.496-1.95-6.46a.544.544 0 00-.526-.39.544.544 0 00-.525.39l-1.95 6.46L8.88 8.56a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56L2 18h3.18l1.95-6.46 1.95 6.46c.072.234.288.39.526.39.24 0 .456-.156.526-.39l1.95-6.46L14.032 18h3.18l-2.742-9.44a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56z"/></svg>
    ),
  },
  {
    name: 'Google Tag Manager',
    slug: 'google-tag-manager',
    description: 'Instala Opinafy con Google Tag Manager. Ideal si ya usas GTM para gestionar los scripts de tu sitio.',
    color: 'bg-orange-100 text-orange-700',
    iconColor: 'text-orange-600',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
  },
]

export default function GuiasIndexPage() {
  const webPageJsonLd = webPageSchema({
    name: 'Guías de instalación - Opinafy',
    url: 'https://opinafy.com/guias',
    description: 'Guías paso a paso para instalar Opinafy en las plataformas más populares.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Guías', url: 'https://opinafy.com/guias' },
  ])

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Guías de instalación
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Aprende a instalar el widget de testimonios de Opinafy en tu plataforma favorita.
            Todas las guías incluyen instrucciones paso a paso.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guias/${guide.slug}`}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-indigo-200"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`inline-flex items-center justify-center rounded-lg p-2 ${guide.color}`}>
                  <span className={guide.iconColor}>{guide.icon}</span>
                </span>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {guide.name}
                </h2>
              </div>
              <p className="text-sm text-gray-600">{guide.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
                Ver guia
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">No encuentras tu plataforma?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Opinafy funciona con cualquier sitio web que acepte HTML. Solo necesitas pegar una linea de codigo.
            Si necesitas ayuda, contactanos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/registro"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Contactar soporte
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
