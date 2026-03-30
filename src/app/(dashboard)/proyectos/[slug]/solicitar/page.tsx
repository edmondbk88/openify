'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import { createClient } from '@/lib/supabase/client'
import { QRCodeSVG } from 'qrcode.react'
import Link from 'next/link'
import type { Project } from '@/types'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

const DEFAULT_WHATSAPP_TEMPLATE = `\u00a1Hola! \ud83d\udc4b

Me encantar\u00eda conocer tu opini\u00f3n sobre mi servicio. \u00bfPodr\u00edas tomarte un momento para dejar tu testimonio? Solo te tomar\u00e1 2 minutos.

\ud83d\udc49 {collection_url}

\u00a1Muchas gracias! Tu opini\u00f3n es muy valiosa para m\u00ed. \ud83d\ude4f`

const DEFAULT_EMAIL_TEMPLATE = `\u00a1Hola!

Me encantar\u00eda conocer tu opini\u00f3n sobre mi servicio. \u00bfPodr\u00edas tomarte un momento para dejar tu testimonio? Solo te tomar\u00e1 2 minutos.

Puedes hacerlo aqu\u00ed: {collection_url}

\u00a1Muchas gracias! Tu opini\u00f3n es muy valiosa para m\u00ed.`

export default function SolicitarPage() {
  const params = useParams()
  const slug = params.slug as string
  const router = useRouter()
  const { toast } = useToast()
  const locale = useLocale()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [copied, setCopied] = useState(false)

  const [whatsappMessage, setWhatsappMessage] = useState(DEFAULT_WHATSAPP_TEMPLATE)
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [emailMessage, setEmailMessage] = useState(DEFAULT_EMAIL_TEMPLATE)
  const [emailAddresses, setEmailAddresses] = useState('')

  const qrRef = useRef<HTMLDivElement>(null)

  const publicUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/p/${username}/${slug}`
    : `/p/${username}/${slug}`

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const [{ data: projectData }, { data: { user } }] = await Promise.all([
        supabase.from('projects').select('*').eq('slug', slug).single(),
        supabase.auth.getUser(),
      ])

      if (!projectData) {
        router.push('/proyectos')
        return
      }

      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single()
        setUsername(profile?.username || '')
      }

      setProject(projectData as Project)
      setLoading(false)
    }
    load()
  }, [slug, router])

  function getProcessedMessage(template: string): string {
    return template.replace(/\{collection_url\}/g, publicUrl)
  }

  function handleSendWhatsApp() {
    const message = getProcessedMessage(whatsappMessage)
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  function handleSendWhatsAppToNumber() {
    if (!whatsappNumber.trim()) {
      toast('Introduce un número de teléfono', 'error')
      return
    }
    const number = whatsappNumber.replace(/[^0-9+]/g, '').replace(/^\+/, '')
    const message = getProcessedMessage(whatsappMessage)
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  function handleSendEmail() {
    const emails = emailAddresses.split(',').map(e => e.trim()).filter(Boolean)
    const to = emails.length > 0 ? emails.join(',') : ''
    const subject = encodeURIComponent(`Tu opinión es importante - ${project?.name || ''}`)
    const body = encodeURIComponent(getProcessedMessage(emailMessage))
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_self')
  }

  async function handleCopyUrl() {
    try {
      await navigator.clipboard.writeText(publicUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast('URL copiada al portapapeles', 'success')
    } catch {
      toast('Error al copiar la URL', 'error')
    }
  }

  const handleDownloadQR = useCallback(() => {
    if (!qrRef.current) return
    const svg = qrRef.current.querySelector('svg')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 200
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, 200, 200)
      ctx.drawImage(img, 0, 0)
      const link = document.createElement('a')
      link.download = `qr-${slug}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }, [slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="h-8 w-8 animate-spin text-indigo-600" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href={`/proyectos/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {t('projects.backToProject', locale)}
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('request.title', locale)}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('request.subtitle', locale)}
        </p>
      </div>

      {/* WhatsApp Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <h2 className="text-sm font-semibold text-gray-900">{t('request.sendWhatsapp', locale)}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="wa-message" className="block text-sm font-medium text-gray-700 mb-1">
              {t('request.messageEditable', locale)}
            </label>
            <textarea
              id="wa-message"
              rows={6}
              value={whatsappMessage}
              onChange={(e) => setWhatsappMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              Usa <code className="bg-gray-100 px-1 rounded">{'{collection_url}'}</code> para insertar el enlace de recopilación.
            </p>
          </div>

          <button
            onClick={handleSendWhatsApp}
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {t('request.sendWhatsapp', locale)}
          </button>

          <div className="border-t border-gray-100 pt-4">
            <label htmlFor="wa-number" className="block text-sm font-medium text-gray-700 mb-1">
              {t('request.sendToNumber', locale)}
            </label>
            <div className="flex gap-2">
              <input
                id="wa-number"
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="+34612345678"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                onClick={handleSendWhatsAppToNumber}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {t('request.send', locale)}
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-400">Incluye el código de pais (ej: +34 para España)</p>
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <h2 className="text-sm font-semibold text-gray-900">{t('request.sendEmail', locale)}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="email-addresses" className="block text-sm font-medium text-gray-700 mb-1">
              {t('request.emailAddresses', locale)}
            </label>
            <input
              id="email-addresses"
              type="text"
              value={emailAddresses}
              onChange={(e) => setEmailAddresses(e.target.value)}
              placeholder="cliente1@email.com, cliente2@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email-message" className="block text-sm font-medium text-gray-700 mb-1">
              {t('request.messageEditable', locale)}
            </label>
            <textarea
              id="email-message"
              rows={6}
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              Usa <code className="bg-gray-100 px-1 rounded">{'{collection_url}'}</code> para insertar el enlace de recopilación.
            </p>
          </div>

          <button
            onClick={handleSendEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {t('request.sendEmail', locale)}
          </button>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
          </svg>
          <h2 className="text-sm font-semibold text-gray-900">{t('collect.qrCode', locale)}</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4" ref={qrRef}>
            <QRCodeSVG
              value={publicUrl}
              size={200}
              fgColor="#4f46e5"
              bgColor="#ffffff"
              level="M"
            />
          </div>
          <button
            onClick={handleDownloadQR}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {t('collect.downloadQr', locale)}
          </button>
        </div>
      </div>

      {/* Copy Link Section */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          <h2 className="text-sm font-semibold text-gray-900">{t('collect.copyLink', locale)}</h2>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={publicUrl}
            className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700"
          />
          <button
            onClick={handleCopyUrl}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              copied
                ? 'bg-green-50 text-green-700'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {copied ? (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Copiado
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
