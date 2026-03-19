'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Qué es Opinafy?',
    answer:
      'Opinafy es una plataforma SaaS que te permite recopilar, gestionar y mostrar testimonios de tus clientes en tu sitio web. Con formularios personalizables y widgets embebibles, puedes mostrar prueba social de forma profesional y aumentar tus conversiones.',
  },
  {
    question: '¿Cómo instalo el widget en mi web?',
    answer:
      'Es muy sencillo. Una vez que tengas testimonios aprobados, ve a la sección de widget en tu panel, elige el layout que prefieras, personaliza los colores y copia el fragmento de código. Pégalo en el HTML de tu web donde quieras que aparezcan los testimonios.',
  },
  {
    question: '¿Puedo personalizar el diseño?',
    answer:
      'Sí. Puedes personalizar los colores, la tipografía, el layout (carrusel, cuadrícula o muro) y otros aspectos visuales del widget para que se integre perfectamente con el diseño de tu web.',
  },
  {
    question: '¿Hay plan gratuito?',
    answer:
      'Sí, ofrecemos un plan gratuito que incluye 1 proyecto, hasta 10 testimonios y 2 layouts. Es perfecto para probar la plataforma sin compromiso. Puedes mejorar a un plan de pago en cualquier momento.',
  },
  {
    question: '¿Los testimonios afectan al SEO?',
    answer:
      'Sí. Los testimonios se renderizan como contenido HTML real en tu página, lo que los hace indexables por los motores de búsqueda. Además, utilizamos datos estructurados (schema markup) para mejorar la visibilidad en los resultados de búsqueda.',
  },
  {
    question: '¿Puedo migrar desde otra plataforma?',
    answer:
      'Sí, puedes importar testimonios existentes de forma manual desde tu panel de control. Si necesitas una migración masiva, nuestro equipo de soporte puede ayudarte con el proceso.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) a través de Stripe, nuestra pasarela de pago segura. Todos los pagos están protegidos con encriptación SSL.',
  },
  {
    question: '¿Funciona con WordPress/Shopify?',
    answer:
      'Sí, el widget de Opinafy es compatible con cualquier plataforma web, incluyendo WordPress, Shopify, Wix, Squarespace y cualquier sitio HTML personalizado. Solo necesitas pegar un fragmento de código.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Encuentra respuestas a las dudas más comunes sobre Opinafy.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
