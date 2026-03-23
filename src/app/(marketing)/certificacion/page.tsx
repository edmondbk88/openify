import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'

export const metadata: Metadata = {
  title: 'Programa de Certificacion Opinafy - Insignias Bronze, Silver, Gold y Platinum | Opinafy',
  description:
    'Obtén tu insignia de certificacion Opinafy. Demuestra la autenticidad de tus testimonios con insignias Bronze, Silver, Gold o Platinum segun el numero de opiniones verificadas.',
  keywords: [
    'certificacion testimonios',
    'insignia testimonios verificados',
    'badge prueba social',
    'certificado opiniones clientes',
    'sello confianza web',
  ],
  alternates: {
    canonical: 'https://opinafy.com/certificacion',
    languages: {
      es: 'https://opinafy.com/certificacion',
      en: 'https://opinafy.com/en/certification',
      'x-default': 'https://opinafy.com/certificacion',
    },
  },
  openGraph: {
    title: 'Programa de Certificacion Opinafy',
    description:
      'Demuestra la autenticidad de tus testimonios con insignias verificadas de Opinafy.',
    url: 'https://opinafy.com/certificacion',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
}

const tiers = [
  {
    name: 'Bronze',
    nameEs: 'Bronce',
    threshold: '5+',
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-300',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    benefits: [
      'Insignia Bronze para tu web',
      'Demuestra que tienes testimonios reales',
      'Aumenta la confianza basica de visitantes',
    ],
  },
  {
    name: 'Silver',
    nameEs: 'Plata',
    threshold: '20+',
    color: 'from-gray-300 to-gray-500',
    borderColor: 'border-gray-300',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-600',
    benefits: [
      'Insignia Silver para tu web',
      'Mayor credibilidad ante clientes potenciales',
      'Diferenciacion frente a competidores',
    ],
  },
  {
    name: 'Gold',
    nameEs: 'Oro',
    threshold: '50+',
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    popular: true,
    benefits: [
      'Insignia Gold para tu web',
      'Maximo impacto en la decision de compra',
      'Posicionamiento como lider en satisfaccion',
      'Inclusion en el directorio de empresas Gold',
    ],
  },
  {
    name: 'Platinum',
    nameEs: 'Platino',
    threshold: '200+',
    color: 'from-indigo-300 to-indigo-500',
    borderColor: 'border-indigo-300',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    benefits: [
      'Insignia Platinum exclusiva para tu web',
      'Reconocimiento como empresa de referencia',
      'Prueba social de elite',
      'Mencion destacada en nuestras comunicaciones',
      'Soporte prioritario',
    ],
  },
]

export default function CertificacionPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Programa de Certificacion Opinafy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Gana insignias de certificacion basadas en el numero de testimonios verificados
            que recopilas. Demuestra a tus visitantes que la confianza de tus clientes es real.
          </p>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">Como funciona</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                1
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Recopila testimonios</h3>
              <p className="mt-2 text-sm text-gray-500">
                Usa Opinafy para recopilar testimonios verificados de tus clientes.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                2
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Sube de nivel</h3>
              <p className="mt-2 text-sm text-gray-500">
                Tu certificacion se actualiza automaticamente cuando alcanzas un nuevo umbral.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                3
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Muestra tu insignia</h3>
              <p className="mt-2 text-sm text-gray-500">
                Inserta la insignia en tu web para demostrar la autenticidad de tus opiniones.
              </p>
            </div>
          </div>
        </div>

        {/* Tiers */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">Niveles de certificacion</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border-2 ${tier.borderColor} ${tier.bgColor} p-6 ${
                  tier.popular ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
                <div className={`inline-flex rounded-full bg-gradient-to-r ${tier.color} px-3 py-1 text-xs font-bold text-white`}>
                  {tier.name}
                </div>
                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {tier.threshold}
                </p>
                <p className="text-sm text-gray-500">testimonios verificados</p>
                <ul className="mt-4 space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.textColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-indigo-600 p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Empieza a certificar tus testimonios</h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Crea tu cuenta gratuita, recopila testimonios y obtén tu primera insignia Bronze con solo 5 opiniones.
          </p>
          <Link
            href="/registro"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
