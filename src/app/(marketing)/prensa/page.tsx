import type { Metadata } from 'next'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prensa - Opinafy',
  description:
    'Kit de prensa de Opinafy. Descarga logos, capturas de pantalla y encuentra informacion para medios de comunicacion sobre la plataforma de testimonios.',
  alternates: {
    canonical: 'https://opinafy.com/prensa',
    languages: {
      'es': 'https://opinafy.com/prensa',
      'en': 'https://opinafy.com/en/press',
      'x-default': 'https://opinafy.com/prensa',
    },
  },
  openGraph: {
    title: 'Prensa - Opinafy',
    description:
      'Kit de prensa de Opinafy. Logos, capturas y recursos para medios.',
    url: 'https://opinafy.com/prensa',
  },
}

const stats = [
  { label: 'Plantillas de widgets', value: '80+' },
  { label: 'Plantillas de mini sitio', value: '30+' },
  { label: 'Idiomas soportados', value: '2' },
  { label: 'Articulos de blog', value: '320+' },
  { label: 'Paginas de industria', value: '320+' },
  { label: 'Paginas ciudad+industria', value: '421' },
  { label: 'Integraciones', value: '8+' },
  { label: 'Plan gratuito', value: 'Si' },
]

const screenshots = [
  {
    title: 'Dashboard principal',
    description: 'Panel de control con metricas de testimonios, widgets activos y actividad reciente.',
  },
  {
    title: 'Editor de widgets',
    description: 'Interfaz de personalizacion con 100+ plantillas: grid, masonry, carrusel, terminal, polaroid y mas.',
  },
  {
    title: 'Formulario de recopilacion',
    description: 'Formulario de envio de testimonios con verificacion por email y grabacion de video/audio.',
  },
  {
    title: 'Mini sitio profesional',
    description: 'Pagina de testimonios independiente para profesionales y negocios sin web propia.',
  },
  {
    title: 'A/B Testing',
    description: 'Panel de pruebas A/B mostrando comparativa de rendimiento entre diferentes widgets.',
  },
  {
    title: 'Importacion de resenas',
    description: 'Herramienta de importacion compatible con Google Business, TripAdvisor, Trustpilot y mas.',
  },
]

export default function PrensaPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/en/press"
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                English version &rarr;
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Kit de prensa
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Recursos oficiales de Opinafy para periodistas, bloggers y medios de comunicacion.
              Aqui encontraras logos, estadisticas y toda la informacion que necesitas.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hola@opinafy.com"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto de prensa: hola@opinafy.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
          {/* Boilerplate */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre Opinafy</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Opinafy es la primera plataforma de gestion de testimonios de clientes creada nativamente en espanol.
                Permite a negocios y profesionales recopilar, verificar y mostrar testimonios autenticos en sus sitios web
                mediante widgets embebibles con mas de 100 plantillas profesionales.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                La plataforma ofrece verificacion doble (por email y por dominio de empresa), grabacion de video testimonios
                directamente desde el navegador (sin subida de archivos para garantizar autenticidad), mini sitios profesionales
                para quienes no tienen web propia, A/B testing integrado, analisis de sentimiento e importacion de resenas
                desde Google Business, TripAdvisor y otras plataformas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fundada en marzo de 2026, Opinafy nacio para llenar el vacio en el mercado de herramientas de prueba social
                para los mas de 580 millones de hispanohablantes en el mundo. Mientras todas las alternativas existentes
                (Testimonial.to, Senja, Famewall) operan exclusivamente en ingles, Opinafy ofrece una experiencia completamente
                nativa en espanol, ademas de soporte en ingles. Los planes comienzan en 5 euros al mes, siendo 3-4 veces mas
                asequible que la competencia.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cifras clave</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Logos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Logotipos</h2>
            <p className="text-gray-600 mb-6">
              Descarga los logotipos oficiales de Opinafy. Por favor, no modifiques los colores ni las proporciones.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 mb-4">
                  <span className="text-2xl font-bold text-indigo-600">Opinafy</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Logo principal</p>
                <p className="text-xs text-gray-500 mt-1">Fondo claro - PNG / SVG</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-indigo-600 mb-4">
                  <span className="text-2xl font-bold text-white">Opinafy</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Logo invertido</p>
                <p className="text-xs text-gray-500 mt-1">Fondo oscuro - PNG / SVG</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">O</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">Icono / Favicon</p>
                <p className="text-xs text-gray-500 mt-1">Cuadrado - PNG / SVG</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Para solicitar archivos de alta resolucion, contacta a{' '}
              <a href="mailto:hola@opinafy.com" className="text-indigo-600 hover:text-indigo-700">
                hola@opinafy.com
              </a>
            </p>
          </section>

          {/* Screenshots */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Capturas de pantalla</h2>
            <p className="text-gray-600 mb-6">
              Capturas de las principales funcionalidades de la plataforma. Solicita versiones en alta resolucion por email.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {screenshots.map((shot) => (
                <div
                  key={shot.title}
                  className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center px-4">
                      <svg className="mx-auto h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="mt-2 text-sm text-indigo-400">{shot.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{shot.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{shot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Founder */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fundador</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">EB</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Edmond Bojalil</h3>
                  <p className="text-indigo-600 font-medium">Fundador y CEO</p>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Desarrollador full-stack con sede en Espana. Creo Opinafy tras detectar que no existia
                    ninguna plataforma de testimonios nativa en espanol, a pesar de que el mercado SaaS
                    hispanohablante crece un 19% anual. Su objetivo es democratizar el acceso a herramientas
                    de prueba social para los mas de 580 millones de hispanohablantes en el mundo.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="mailto:hola@opinafy.com"
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      hola@opinafy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Facts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Datos clave</h2>
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Nombre del producto</dt>
                  <dd className="text-sm text-gray-700">Opinafy</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Sitio web</dt>
                  <dd className="text-sm text-gray-700">
                    <a href="https://opinafy.com" className="text-indigo-600 hover:text-indigo-700">opinafy.com</a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Fundacion</dt>
                  <dd className="text-sm text-gray-700">Marzo 2026</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Sede</dt>
                  <dd className="text-sm text-gray-700">Espana</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Categoria</dt>
                  <dd className="text-sm text-gray-700">SaaS - Gestion de testimonios de clientes</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Mercado objetivo</dt>
                  <dd className="text-sm text-gray-700">Negocios hispanohablantes (580M+ hablantes)</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Precios</dt>
                  <dd className="text-sm text-gray-700">Plan gratuito disponible. Planes de pago desde 5 euros/mes</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Stack tecnologico</dt>
                  <dd className="text-sm text-gray-700">Next.js 14, Supabase, Stripe, Vercel, Tailwind CSS</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4 border-t border-gray-50 pt-4">
                  <dt className="text-sm font-semibold text-gray-900 sm:w-48 flex-shrink-0">Contacto de prensa</dt>
                  <dd className="text-sm text-gray-700">
                    <a href="mailto:hola@opinafy.com" className="text-indigo-600 hover:text-indigo-700">hola@opinafy.com</a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
