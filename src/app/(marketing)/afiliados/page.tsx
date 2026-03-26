import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { breadcrumbSchema, organizationSchema, webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Programa de Afiliados - Gana comisiones recomendando Opinafy',
  description:
    'Gana un 30% de comision recurrente recomendando Opinafy, la plataforma #1 de testimonios en español. Cookie de 90 dias, pagos mensuales y materiales de marketing incluidos.',
  keywords: [
    'programa afiliados testimonios',
    'ganar dinero recomendando software',
    'afiliados opinafy',
    'comisiones recurrentes saas',
    'programa referidos testimonios',
    'marketing de afiliados software',
  ],
  alternates: {
    canonical: 'https://opinafy.com/afiliados',
    languages: {
      es: 'https://opinafy.com/afiliados',
      en: 'https://opinafy.com/en/affiliates',
      'x-default': 'https://opinafy.com/afiliados',
    },
  },
  openGraph: {
    title: 'Programa de Afiliados de Opinafy - 30% comision recurrente',
    description:
      'Recomienda Opinafy y gana un 30% de comision recurrente. Cookie de 90 dias, pagos mensuales y dashboard de seguimiento.',
    url: 'https://opinafy.com/afiliados',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programa de Afiliados de Opinafy - 30% comision recurrente',
    description:
      'Recomienda Opinafy y gana un 30% de comision recurrente por cada cliente referido.',
    images: ['/og.png'],
  },
}

const steps = [
  {
    number: '1',
    title: 'Registrate como afiliado',
    description: 'Crea tu cuenta de afiliado en menos de 2 minutos. Recibiras tu enlace único de referido al instante.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Comparte tu enlace',
    description: 'Comparte tu enlace de referido en tu blog, redes sociales, newsletter o directamente con tus clientes.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Gana un 30% de comision recurrente',
    description: 'Por cada cliente que se registre a traves de tu enlace, ganas un 30% de su suscripcion mensual. Mientras el cliente pague, tu ganas.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
]

const benefits = [
  { title: '30% comision recurrente', description: 'Ganas mientras el cliente siga pagando, mes tras mes.' },
  { title: 'Cookie de 90 dias', description: 'Si alguien hace clic en tu enlace, tienes 90 dias para que se convierta.' },
  { title: 'Pagos mensuales', description: 'Recibe tus comisiones cada mes directamente en tu cuenta.' },
  { title: 'Dashboard de seguimiento', description: 'Monitoriza clics, conversiones y comisiones en tiempo real.' },
  { title: 'Materiales de marketing', description: 'Banners, textos y recursos listos para compartir.' },
  { title: 'Soporte dedicado', description: 'Un equipo que te ayuda a maximizar tus conversiones.' },
]

const audiences = [
  {
    title: 'Bloggers y creadores de contenido',
    description: 'Monetiza tu audiencia recomendando una herramienta que realmente ayuda a los negocios.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: 'Agencias de marketing',
    description: 'Recomienda Opinafy a tus clientes y gana comisiones adicionales por cada suscripcion.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Consultores y freelancers',
    description: 'Añade una fuente de ingresos pasivos recomendando una herramienta que ya usas o conoces.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Influencers',
    description: 'Comparte Opinafy con tu comunidad y genera ingresos recurrentes cada mes.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
]

const pricingExamples = [
  { clients: 5, plan: 'Pro', price: 9, commission: 13.5 },
  { clients: 10, plan: 'Pro', price: 9, commission: 27 },
  { clients: 10, plan: 'Business', price: 19, commission: 57 },
  { clients: 25, plan: 'Business', price: 19, commission: 142.5 },
]

const faqs = [
  {
    question: '¿Como funciona la comision del 30%?',
    answer: 'Recibes el 30% de la suscripcion mensual de cada cliente que se registre a traves de tu enlace de referido. La comision es recurrente: mientras el cliente siga pagando, tu sigues ganando.',
  },
  {
    question: '¿Cuando recibo mis pagos?',
    answer: 'Los pagos se procesan mensualmente. Las comisiones se calculan al final de cada mes y se transfieren en los primeros 10 dias del mes siguiente.',
  },
  {
    question: '¿Que es la cookie de 90 dias?',
    answer: 'Cuando alguien hace clic en tu enlace de referido, se guarda una cookie en su navegador durante 90 dias. Si esa persona se registra en cualquier momento dentro de esos 90 dias, tu recibes la comision.',
  },
  {
    question: '¿Necesito ser cliente de Opinafy para ser afiliado?',
    answer: 'No es obligatorio, pero te recomendamos probar la plataforma (tiene un plan gratuito) para que puedas hablar con conocimiento de causa sobre sus beneficios.',
  },
  {
    question: '¿Hay un minimo de pago?',
    answer: 'Si, el minimo de pago es de 50 EUR. Si tus comisiones no alcanzan ese monto en un mes, se acumulan para el siguiente.',
  },
  {
    question: '¿Puedo ser afiliado si estoy fuera de Espana?',
    answer: 'Si, el programa de afiliados esta abierto a personas de cualquier pais. Los pagos se realizan via transferencia bancaria o PayPal.',
  },
]

export default function AfiliadosPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Programa de Afiliados', url: 'https://opinafy.com/afiliados' },
  ])
  const orgJsonLd = organizationSchema()
  const webPageJsonLd = webPageSchema({
    name: 'Programa de Afiliados - Opinafy',
    url: 'https://opinafy.com/afiliados',
    description: 'Gana un 30% de comision recurrente recomendando Opinafy, la plataforma #1 de testimonios en español.',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Programa de Afiliados
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Programa de Afiliados de Opinafy
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Gana comisiones recomendando la plataforma #1 de testimonios en español.
            Un 30% de comision recurrente por cada cliente referido.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
            >
              Unete al programa
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Tres pasos para empezar a generar ingresos recurrentes
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  {step.icon}
                </div>
                <div className="mt-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Beneficios del programa
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing examples */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Cuanto puedes ganar
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Ejemplos reales de comisiones mensuales recurrentes
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Clientes referidos</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Plan</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Precio/mes</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-900">Tu comision/mes</th>
                </tr>
              </thead>
              <tbody>
                {pricingExamples.map((example, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-700">{example.clients}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{example.plan}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{example.price} EUR</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{example.commission} EUR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Si refieres 10 clientes Pro (9 EUR/mes), ganas 27 EUR/mes recurrente. Con 25 clientes Business, serian 142,50 EUR/mes.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Para quien es este programa
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  {audience.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{audience.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Empieza a ganar con Opinafy
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Unete al programa de afiliados y genera ingresos recurrentes recomendando la plataforma de testimonios más completa en español.
          </p>
          <Link
            href="/registro"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Unete al programa
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
