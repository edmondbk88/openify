'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface EmailTemplate {
  id: string
  nameEs: string
  nameEn: string
  subjectEs: string
  subjectEn: string
  bodyEs: string
  bodyEn: string
  category: 'post-purchase' | 'reminder' | 'milestone' | 'seasonal' | 'positive-feedback' | 'video'
}

const templates: EmailTemplate[] = [
  {
    id: 'post-purchase',
    nameEs: 'Agradecimiento post-compra',
    nameEn: 'Post-purchase thank you',
    category: 'post-purchase',
    subjectEs: 'Tu opinion nos importa, {name}',
    subjectEn: 'Your opinion matters, {name}',
    bodyEs: `Hola {name},

Muchas gracias por confiar en {company}. Esperamos que tu experiencia haya sido excelente.

Nos encantaria conocer tu opinion. Tu testimonio nos ayuda a seguir mejorando y a que otros clientes puedan tomar una decision informada.

Solo te tomara 2 minutos:
{collection_url}

Muchas gracias por tu tiempo.

Un saludo,
El equipo de {company}`,
    bodyEn: `Hi {name},

Thank you for choosing {company}. We hope you had a great experience.

We'd love to hear your feedback. Your testimonial helps us keep improving and helps other customers make informed decisions.

It only takes 2 minutes:
{collection_url}

Thank you for your time.

Best regards,
The {company} team`,
  },
  {
    id: 'reminder',
    nameEs: 'Recordatorio amable',
    nameEn: 'Gentle reminder',
    category: 'reminder',
    subjectEs: 'Aun estamos esperando tu opinion, {name}',
    subjectEn: 'We\'d still love to hear from you, {name}',
    bodyEs: `Hola {name},

Hace unos dias te enviamos un email pidiendo tu opinion sobre tu experiencia con {company}. Entendemos que la vida esta llena de cosas, así que te lo recordamos amablemente.

Tu testimonio es muy valioso para nosotros y solo te tomara un par de minutos:
{collection_url}

Si ya lo has hecho, muchas gracias! Puedes ignorar este mensaje.

Un abrazo,
El equipo de {company}`,
    bodyEn: `Hi {name},

A few days ago we sent you an email asking about your experience with {company}. We understand life gets busy, so here's a gentle reminder.

Your testimonial is very valuable to us and will only take a couple of minutes:
{collection_url}

If you've already submitted one, thank you! Please disregard this message.

Best,
The {company} team`,
  },
  {
    id: 'milestone',
    nameEs: 'Despues de un logro',
    nameEn: 'After a milestone',
    category: 'milestone',
    subjectEs: 'Celebramos tu éxito, {name}!',
    subjectEn: 'Celebrating your success, {name}!',
    bodyEs: `Hola {name},

Estamos encantados de ver los resultados que has conseguido trabajando con {company}. Tu éxito es nuestro éxito.

Nos encantaria que compartieras tu experiencia con otros. Un breve testimonio sobre como te ha ayudado nuestro servicio seria increible:
{collection_url}

Tu historia puede inspirar a otros a dar el paso.

Enhorabuena y gracias por todo,
El equipo de {company}`,
    bodyEn: `Hi {name},

We're thrilled to see the results you've achieved working with {company}. Your success is our success.

We'd love it if you could share your experience with others. A brief testimonial about how our service has helped you would be amazing:
{collection_url}

Your story could inspire others to take the leap.

Congratulations and thank you,
The {company} team`,
  },
  {
    id: 'seasonal',
    nameEs: 'De temporada / Fin de año',
    nameEn: 'Seasonal / End of year',
    category: 'seasonal',
    subjectEs: 'Gracias por un gran año, {name}',
    subjectEn: 'Thank you for an amazing year, {name}',
    bodyEs: `Hola {name},

Mientras cerramos este año, queremos agradecerte por ser parte de la comunidad de {company}. Ha sido un placer trabajar contigo.

Como parte de nuestra reflexion de fin de año, nos encantaria escuchar como ha sido tu experiencia. Tu opinion nos ayuda a planificar como seguir mejorando:
{collection_url}

Te deseamos lo mejor para el proximo año.

Con gratitud,
El equipo de {company}`,
    bodyEn: `Hi {name},

As we close out this year, we want to thank you for being part of the {company} community. It's been a pleasure working with you.

As part of our year-end reflection, we'd love to hear about your experience. Your feedback helps us plan how to keep improving:
{collection_url}

Wishing you all the best for the coming year.

With gratitude,
The {company} team`,
  },
  {
    id: 'positive-feedback',
    nameEs: 'Despues de feedback positivo',
    nameEn: 'After positive feedback',
    category: 'positive-feedback',
    subjectEs: 'Nos alegro mucho tu comentario, {name}',
    subjectEn: 'Your kind words meant a lot, {name}',
    bodyEs: `Hola {name},

Nos hizo muchisima ilusion recibir tus palabras positivas sobre {company}. Comentarios como el tuyo son los que nos motivan a seguir dando lo mejor.

Nos preguntabamos si estarias dispuesto/a a compartir esa experiencia de forma pública para que otros puedan verlo. Es muy fácil y rápido:
{collection_url}

Tu testimonio puede marcar la diferencia para otros que estan considerando trabajar con nosotros.

Muchas gracias,
El equipo de {company}`,
    bodyEn: `Hi {name},

We were so happy to receive your positive words about {company}. Comments like yours are what motivate us to keep giving our best.

We were wondering if you'd be willing to share that experience publicly so others can see it. It's quick and easy:
{collection_url}

Your testimonial could make all the difference for others considering working with us.

Thank you so much,
The {company} team`,
  },
  {
    id: 'video',
    nameEs: 'Solicitud de video testimonio',
    nameEn: 'Video testimonial request',
    category: 'video',
    subjectEs: 'Quieres compartir tu experiencia en video, {name}?',
    subjectEn: 'Would you share your experience on video, {name}?',
    bodyEs: `Hola {name},

Los testimonios en video son increiblemente poderosos: generan hasta 3x más confianza que el texto. Por eso, nos encantaria invitarte a grabar un breve video (30-60 segundos) compartiendo tu experiencia con {company}.

No necesitas nada especial, tu movil y una buena luz son suficientes. Puedes hacerlo directamente desde aqui:
{collection_url}

Algunas ideas de lo que puedes mencionar:
- Que problema tenias antes de trabajar con nosotros
- Como te ayudamos a resolverlo
- Que resultado has conseguido

Gracias por considerar esta opcion,
El equipo de {company}`,
    bodyEn: `Hi {name},

Video testimonials are incredibly powerful: they generate up to 3x more trust than text. That's why we'd love to invite you to record a brief video (30-60 seconds) sharing your experience with {company}.

You don't need anything special - your phone and good lighting are enough. You can do it right here:
{collection_url}

Some ideas for what to mention:
- What problem you had before working with us
- How we helped you solve it
- What results you've achieved

Thank you for considering this,
The {company} team`,
  },
]

const categoryLabels: Record<string, { es: string; en: string }> = {
  'post-purchase': { es: 'Post-compra', en: 'Post-purchase' },
  'reminder': { es: 'Recordatorio', en: 'Reminder' },
  'milestone': { es: 'Logro', en: 'Milestone' },
  'seasonal': { es: 'Temporada', en: 'Seasonal' },
  'positive-feedback': { es: 'Feedback', en: 'Feedback' },
  'video': { es: 'Video', en: 'Video' },
}

const categoryColors: Record<string, string> = {
  'post-purchase': 'bg-green-100 text-green-700 border-green-200',
  'reminder': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'milestone': 'bg-purple-100 text-purple-700 border-purple-200',
  'seasonal': 'bg-blue-100 text-blue-700 border-blue-200',
  'positive-feedback': 'bg-pink-100 text-pink-700 border-pink-200',
  'video': 'bg-indigo-100 text-indigo-700 border-indigo-200',
}

export default function PlantillasEmailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [locale, setLocale] = useState<'es' | 'en'>('es')
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [collectionUrl, setCollectionUrl] = useState('')

  useEffect(() => {
    // Detect locale from cookie or default
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1]
    if (cookieLocale === 'en') setLocale('en')

    // Build collection URL based on current domain
    const origin = window.location.origin
    // We need username - fetch it
    fetch('/api/profile')
      .then((r) => r.json())
      .then((data) => {
        if (data.profile?.username) {
          setCollectionUrl(`${origin}/p/${data.profile.username}/${slug}`)
        }
      })
      .catch(() => {
        setCollectionUrl(`https://opinafy.com/p/tu-usuario/${slug}`)
      })
  }, [slug])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const processText = (text: string): string => {
    return text.replace(/\{collection_url\}/g, collectionUrl || `https://opinafy.com/p/tu-usuario/${slug}`)
  }

  const isEs = locale === 'es'

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {isEs ? 'Volver al proyecto' : 'Back to project'}
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEs ? 'Plantillas de Email' : 'Email Templates'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {isEs
              ? 'Plantillas listas para copiar y enviar a tus clientes para solicitar testimonios.'
              : 'Ready-to-copy templates to send to your clients requesting testimonials.'}
          </p>
        </div>
        {/* Language toggle */}
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1">
          <button
            onClick={() => setLocale('es')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${locale === 'es' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            ES
          </button>
          <button
            onClick={() => setLocale('en')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${locale === 'en' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Info box */}
      <div className="mt-6 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
        <div className="flex gap-3">
          <svg className="h-5 w-5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <div className="text-sm text-indigo-700">
            <p className="font-medium">
              {isEs ? 'Como usar estas plantillas' : 'How to use these templates'}
            </p>
            <p className="mt-1">
              {isEs
                ? 'Reemplaza {name} con el nombre de tu cliente y {company} con tu empresa. La URL de recopilacion ({collection_url}) se reemplaza automáticamente.'
                : 'Replace {name} with your client\'s name and {company} with your business. The collection URL ({collection_url}) is auto-replaced.'}
            </p>
          </div>
        </div>
      </div>

      {/* Template Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => { setSelectedTemplate(template); setPreviewMode(false) }}
            className={`rounded-xl border p-5 text-left transition-all hover:shadow-md ${
              selectedTemplate?.id === template.id
                ? 'border-indigo-300 bg-indigo-50 ring-2 ring-indigo-200'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${categoryColors[template.category]}`}>
                {isEs ? categoryLabels[template.category].es : categoryLabels[template.category].en}
              </span>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">
              {isEs ? template.nameEs : template.nameEn}
            </h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {isEs ? template.subjectEs : template.subjectEn}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Template Detail */}
      {selectedTemplate && (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {isEs ? selectedTemplate.nameEs : selectedTemplate.nameEn}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  previewMode
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {previewMode
                  ? (isEs ? 'Modo edicion' : 'Edit mode')
                  : (isEs ? 'Vista previa' : 'Preview')}
              </button>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Subject */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  {isEs ? 'Asunto' : 'Subject'}
                </label>
                <button
                  onClick={() =>
                    copyToClipboard(
                      previewMode
                        ? processText(isEs ? selectedTemplate.subjectEs : selectedTemplate.subjectEn)
                        : (isEs ? selectedTemplate.subjectEs : selectedTemplate.subjectEn),
                      'subject'
                    )
                  }
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                >
                  {copied === 'subject' ? (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {isEs ? 'Copiado!' : 'Copied!'}
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                      </svg>
                      {isEs ? 'Copiar' : 'Copy'}
                    </>
                  )}
                </button>
              </div>
              <div className="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800">
                {previewMode
                  ? processText(isEs ? selectedTemplate.subjectEs : selectedTemplate.subjectEn)
                  : (isEs ? selectedTemplate.subjectEs : selectedTemplate.subjectEn)}
              </div>
            </div>

            {/* Body */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  {isEs ? 'Cuerpo del email' : 'Email body'}
                </label>
                <button
                  onClick={() =>
                    copyToClipboard(
                      previewMode
                        ? processText(isEs ? selectedTemplate.bodyEs : selectedTemplate.bodyEn)
                        : (isEs ? selectedTemplate.bodyEs : selectedTemplate.bodyEn),
                      'body'
                    )
                  }
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                >
                  {copied === 'body' ? (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {isEs ? 'Copiado!' : 'Copied!'}
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                      </svg>
                      {isEs ? 'Copiar' : 'Copy'}
                    </>
                  )}
                </button>
              </div>
              <div className="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                {previewMode
                  ? processText(isEs ? selectedTemplate.bodyEs : selectedTemplate.bodyEn)
                  : (isEs ? selectedTemplate.bodyEs : selectedTemplate.bodyEn)}
              </div>
            </div>

            {/* Placeholders legend */}
            {!previewMode && (
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="text-xs font-medium text-gray-500 mb-2">
                  {isEs ? 'Variables disponibles:' : 'Available variables:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <code className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700">{'{name}'}</code>
                  <code className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700">{'{company}'}</code>
                  <code className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">{'{collection_url}'} = {isEs ? 'auto' : 'auto'}</code>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
