import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export const metadata: Metadata = {
  title: 'Conecta Opinafy con Zapier - Automatiza tus testimonios',
  description:
    'Integra Opinafy con Zapier para automatizar flujos de trabajo cuando recibes nuevos testimonios. Conecta con Slack, Google Sheets, Mailchimp y más de 5000 aplicaciones.',
  keywords: [
    'opinafy zapier',
    'integración zapier testimonios',
    'automatizar testimonios',
    'webhook testimonios',
    'zapier testimonials',
    'opinafy integraciones',
  ],
  alternates: {
    canonical: 'https://opinafy.com/integraciones/zapier',
    languages: {
      es: 'https://opinafy.com/integraciones/zapier',
      en: 'https://opinafy.com/en/integrations/zapier',
      'x-default': 'https://opinafy.com/integraciones/zapier',
    },
  },
  openGraph: {
    title: 'Conecta Opinafy con Zapier - Automatiza tus testimonios',
    description:
      'Integra Opinafy con Zapier para automatizar flujos de trabajo con testimonios.',
    url: 'https://opinafy.com/integraciones/zapier',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

const TRIGGERS = [
  {
    name: 'Nuevo Testimonio',
    description: 'Se dispara cuando un cliente envia un nuevo testimonio a tu proyecto.',
    event: 'new_testimonial',
  },
  {
    name: 'Testimonio Aprobado',
    description: 'Se dispara cuando apruebas un testimonio desde el panel de control.',
    event: 'testimonial_approved',
  },
  {
    name: 'Testimonio Rechazado',
    description: 'Se dispara cuando rechazas un testimonio desde el panel de control.',
    event: 'testimonial_rejected',
  },
]

const WORKFLOWS = [
  {
    title: 'Notificación en Slack',
    description: 'Recibe un mensaje en Slack cada vez que llega un nuevo testimonio.',
    apps: ['Opinafy', 'Slack'],
    trigger: 'Nuevo Testimonio',
    action: 'Enviar mensaje al canal',
  },
  {
    title: 'Guardar en Google Sheets',
    description: 'Agrega automáticamente cada testimonio aprobado a una hoja de calculo.',
    apps: ['Opinafy', 'Google Sheets'],
    trigger: 'Testimonio Aprobado',
    action: 'Crear fila en hoja de calculo',
  },
  {
    title: 'Email via Mailchimp',
    description: 'Envia un email de agradecimiento cuando un testimonio es aprobado.',
    apps: ['Opinafy', 'Mailchimp'],
    trigger: 'Testimonio Aprobado',
    action: 'Enviar email de agradecimiento',
  },
]

export default function ZapierIntegrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b border-gray-100 bg-gradient-to-b from-orange-50 to-white px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-4 py-2">
              <span className="text-2xl">&#9889;</span>
              <span className="text-sm font-medium text-gray-700">Integracion con Zapier</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Conecta Opinafy con Zapier
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Automatiza tus flujos de trabajo conectando Opinafy con más de 5,000 aplicaciones.
              Recibe notificaciones, guarda datos y dispara acciones automáticamente cuando recibes
              nuevos testimonios.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/registro"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Crear cuenta gratis
              </Link>
              <a
                href="https://zapier.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Ir a Zapier
              </a>
            </div>
          </div>
        </section>

        {/* What you can do */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Qué puedes hacer con la integración
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Opinafy se conecta con Zapier mediante webhooks, permitiendote automatizar
              cualquier flujo cuando tus clientes dejan testimonios.
            </p>

            {/* Triggers */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Triggers disponibles</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {TRIGGERS.map((trigger) => (
                  <div
                    key={trigger.event}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <svg
                        className="h-5 w-5 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">{trigger.name}</h4>
                    <p className="mt-2 text-sm text-gray-600">{trigger.description}</p>
                    <p className="mt-3 text-xs text-gray-500 font-mono">
                      Evento: {trigger.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Acciones disponibles</h3>
              <div className="max-w-md rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Solicitar Testimonio</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Envía automáticamente tu URL de recopilación a un contacto para solicitar un
                  testimonio. Ideal para integrar con CRMs y formularios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup guide */}
        <section className="border-t border-gray-100 bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Guía de configuración
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Conecta Opinafy con Zapier en solo 4 pasos.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  step: 1,
                  title: 'Configura tu webhook en Opinafy',
                  description:
                    'Ve a tu proyecto en Opinafy, accede a la sección de Integraciones y configura tu URL de webhook. Selecciona los eventos que quieres notificar.',
                },
                {
                  step: 2,
                  title: 'Crea un Zap en Zapier',
                  description:
                    'En Zapier, crea un nuevo Zap y selecciona "Webhooks by Zapier" como trigger. Elige "Catch Hook" como evento.',
                },
                {
                  step: 3,
                  title: 'Copia la URL del webhook de Zapier',
                  description:
                    'Zapier te proporcionará una URL única. Copia esta URL y pégala en la configuración de webhook de tu proyecto en Opinafy.',
                },
                {
                  step: 4,
                  title: 'Configura la acción',
                  description:
                    'Elige la aplicacion destino (Slack, Google Sheets, etc.) y configura que datos del testimonio quieres enviar. Activa el Zap y listo.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    {item.step === 1 && (
                      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-500">
                        [Captura de pantalla: Panel de integraciones de Opinafy]
                      </div>
                    )}
                    {item.step === 2 && (
                      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-500">
                        [Captura de pantalla: Crear Zap en Zapier]
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example workflows */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Flujos de trabajo de ejemplo
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Inspira tu automatización con estos flujos populares.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {WORKFLOWS.map((wf) => (
                <div
                  key={wf.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h4 className="font-semibold text-gray-900">{wf.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{wf.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="rounded bg-orange-100 px-2 py-0.5 font-medium text-orange-700">
                        Trigger
                      </span>
                      {wf.trigger}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="rounded bg-indigo-100 px-2 py-0.5 font-medium text-indigo-700">
                        Accion
                      </span>
                      {wf.action}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1">
                    {wf.apps.map((app) => (
                      <span
                        key={app}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webhook config link */}
        <section className="border-t border-gray-100 bg-indigo-600 px-4 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Listo para automatizar?</h2>
            <p className="mt-4 text-indigo-100">
              Configura tu webhook desde el panel de integraciones de tu proyecto y empieza a
              conectar Opinafy con todas tus herramientas favoritas.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/registro"
                className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
              >
                Crear cuenta gratis
              </Link>
              <Link
                href="/login"
                className="rounded-lg border border-indigo-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
