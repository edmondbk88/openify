import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy con Google Tag Manager - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy con Google Tag Manager. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/google-tag-manager',
    languages: {
      en: 'https://opinafy.com/en/guides/google-tag-manager',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy con Google Tag Manager',
    description: 'Guia paso a paso para agregar testimonios de clientes con Google Tag Manager y Opinafy.',
    url: 'https://opinafy.com/guias/google-tag-manager',
  },
}

function CodeBlock({ code, language = 'html' }: { code: string; language?: string }) {
  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium uppercase text-gray-500">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}

export default function GTMGuidePage() {
  const gtmCode = `<div id="opinafy-widget" data-project="TU_PROJECT_ID"></div>
<script src="https://opinafy.com/widget.js" defer></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Guia Google Tag Manager
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy con Google Tag Manager
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a cualquier sitio web usando Google Tag Manager.
            Ideal si ya usas GTM para gestionar tus scripts.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 pb-16 sm:px-6 lg:px-8">
        <StepCard number={1} title="Crea tu proyecto en Opinafy">
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              <Link href="/registro" className="text-indigo-600 hover:underline">Registrate en Opinafy</Link> (es gratis).
            </li>
            <li>Ve al <strong>Panel de control</strong> y haz clic en <strong>&quot;Nuevo Proyecto&quot;</strong>.</li>
            <li>Introduce el nombre de tu sitio web y personaliza el formulario de recogida.</li>
            <li>Copia tu <strong>Project ID</strong> desde el panel.</li>
          </ol>
        </StepCard>

        <StepCard number={2} title="Crea una etiqueta Custom HTML en GTM">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Abre <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Tag Manager</a> e inicia sesion.</li>
            <li>Selecciona tu contenedor.</li>
            <li>Ve a <strong>Etiquetas</strong> (Tags) y haz clic en <strong>&quot;Nueva&quot;</strong>.</li>
            <li>Ponle nombre: <strong>&quot;Opinafy Testimonials Widget&quot;</strong>.</li>
            <li>En <strong>Configuracion de la etiqueta</strong>, selecciona <strong>&quot;HTML personalizado&quot;</strong> (Custom HTML).</li>
            <li>Pega el siguiente código:</li>
          </ol>
          <CodeBlock code={gtmCode} />
          <p className="text-sm text-gray-500">
            Sustituye <code className="rounded bg-gray-200 px-1 text-xs">TU_PROJECT_ID</code> por el ID real de tu proyecto.
          </p>
        </StepCard>

        <StepCard number={3} title="Configura el activador (trigger)">
          <ol className="ml-4 list-decimal space-y-2">
            <li>En la seccion <strong>&quot;Activacion&quot;</strong> (Triggering), haz clic para seleccionar un activador.</li>
            <li>Elige <strong>&quot;All Pages - Page View&quot;</strong> si quieres el widget en todas las páginas.</li>
            <li>O crea un activador personalizado para páginas especificas:
              <ul className="ml-4 mt-2 list-disc space-y-1">
                <li>Tipo: <strong>Page View</strong></li>
                <li>Condicion: <strong>Page URL contiene</strong> la ruta deseada (ej: <code className="rounded bg-gray-200 px-1 text-xs">/testimonios</code>)</li>
              </ul>
            </li>
          </ol>
        </StepCard>

        <StepCard number={4} title="Publica los cambios">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Guarda la etiqueta.</li>
            <li>Haz clic en <strong>&quot;Enviar&quot;</strong> (Submit) en la esquina superior derecha.</li>
            <li>Añade un nombre de version (ej: &quot;Añadir widget Opinafy&quot;).</li>
            <li>Haz clic en <strong>&quot;Publicar&quot;</strong>.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Consejo:</strong> Usa el modo <strong>&quot;Vista previa&quot;</strong> (Preview) de GTM antes de publicar
              para verificar que la etiqueta se activa correctamente en las páginas deseadas.
            </p>
          </div>
        </StepCard>

        <StepCard number={5} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visita tu sitio web en una ventana de incognito.</li>
            <li>Deberia cargar el widget con tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica en el modo Preview de GTM que la etiqueta se esta activando.</li>
            <li>Comprueba que el Project ID es correcto.</li>
          </ol>
        </StepCard>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Es mejor usar GTM o pegar el código directamente?',
                a: 'Si ya usas GTM, es más conveniente gestionarlo desde ahi. Si no usas GTM, pegar el código directamente es más simple. Ambos métodos funcionan igual de bien.',
              },
              {
                q: 'El widget se carga con retraso al usar GTM?',
                a: 'El retraso es minimo (milisegundos). GTM carga el script de forma asincrona, igual que la instalacion directa.',
              },
              {
                q: 'Puedo controlar en que páginas aparece el widget?',
                a: 'Si. Esa es una de las ventajas de usar GTM: puedes crear activadores (triggers) para mostrar el widget solo en páginas especificas.',
              },
              {
                q: 'Funciona con cualquier sitio web?',
                a: 'Si. Si tu sitio tiene Google Tag Manager instalado, puedes usar este método independientemente de la plataforma (WordPress, Shopify, sitio personalizado, etc.).',
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="mt-2 text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios con GTM?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Crea tu cuenta gratis y empieza a mostrar prueba social en tu sitio en minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/registro"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/guias/webflow"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para Webflow
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
