'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { PLAN_LIMITS, getEffectivePlan } from '@/lib/constants'
import { useToast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { miniSiteTemplates, MINISITE_CATEGORIES } from '@/lib/minisite-templates'
import type { MiniSiteTemplate } from '@/lib/minisite-templates'
import type { Plan } from '@/types'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

const ALL_CATEGORIES = ['Todas', ...MINISITE_CATEGORIES] as const

export default function MiSitioPage() {
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClient()
  const locale = useLocale()

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState({
    username: '',
    full_name: '',
    bio: '',
    website_url: '',
    plan: 'free' as Plan,
    minisite_config: null as Record<string, unknown> | null,
    minisite_testimonial_limit: 30,
  })
  const [copied, setCopied] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null)

  const siteUrl = profile.username ? `https://opinafy.com/s/${profile.username}` : ''
  const hasAccess = PLAN_LIMITS[getEffectivePlan(profile)].miniSite

  const loadProfile = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const { data } = await supabase
      .from('profiles')
      .select('username, full_name, bio, website_url, plan, minisite_config, minisite_testimonial_limit')
      .eq('id', user.id)
      .single()

    if (data) {
      setProfile({
        username: data.username || '',
        full_name: data.full_name || '',
        bio: data.bio || '',
        website_url: data.website_url || '',
        plan: (data.plan as Plan) || 'free',
        minisite_config: (data.minisite_config as Record<string, unknown>) || null,
        minisite_testimonial_limit: (data.minisite_testimonial_limit as number) || 30,
      })
      // Restore selected template if saved
      if (data.minisite_config && typeof data.minisite_config === 'object' && 'template_id' in (data.minisite_config as Record<string, unknown>)) {
        setSelectedTemplateId((data.minisite_config as Record<string, unknown>).template_id as string)
      }
    }

    setLoading(false)
  }, [supabase, router])

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  function applyTemplate(template: MiniSiteTemplate) {
    setSelectedTemplateId(template.id)
    const newConfig = {
      template_id: template.id,
      ...template.config,
    }
    setProfile((prev) => ({ ...prev, minisite_config: newConfig }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bio: profile.bio || null,
          website_url: profile.website_url || null,
          minisite_config: profile.minisite_config || null,
          minisite_testimonial_limit: profile.minisite_testimonial_limit,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || t('mysite.errorSaving', locale))
      }

      toast(t('mysite.savedSuccess', locale), 'success')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : t('mysite.errorSaving', locale), 'error')
    } finally {
      setSaving(false)
    }
  }

  function handleCopyUrl() {
    navigator.clipboard.writeText(siteUrl)
    setCopied(true)
    toast(t('mysite.urlCopied', locale), 'success')
    setTimeout(() => setCopied(false), 2000)
  }

  function handleShareWhatsApp() {
    const text = encodeURIComponent(t('mysite.shareWhatsappText', locale).replace('{url}', siteUrl))
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  function handleShareEmail() {
    const subject = encodeURIComponent(t('mysite.shareEmailSubject', locale).replace('{name}', profile.full_name))
    const body = encodeURIComponent(t('mysite.shareEmailBody', locale).replace('{url}', siteUrl).replace('{name}', profile.full_name))
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const filteredTemplates = selectedCategory === 'Todas'
    ? miniSiteTemplates
    : miniSiteTemplates.filter((tmpl) => tmpl.category === selectedCategory)

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

  // Free plan: show upgrade CTA
  if (!hasAccess) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('mysite.title', locale)}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {t('mysite.subtitle', locale)}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
            <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            {t('mysite.upgradeRequired', locale)}
          </h2>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            {t('mysite.upgradeDescription', locale)}
          </p>
          <Link
            href="/facturacion"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            {t('mysite.upgradePlan', locale)}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('mysite.title', locale)}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('mysite.subtitleVerified', locale)}
        </p>
      </div>

      {/* URL & Share */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">{t('mysite.url', locale)}</h2>

        {profile.username ? (
          <>
            {/* URL display */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 font-mono truncate">
                {siteUrl}
              </div>
              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t('mysite.copiedUrl', locale)}
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    {t('mysite.copyUrl', locale)}
                  </>
                )}
              </button>
            </div>

            {/* QR Code */}
            <div className="mt-6 flex justify-center">
              <div className="rounded-lg border border-gray-200 p-3 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(siteUrl)}&margin=0`}
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="rounded"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">
              {t('mysite.scanQr', locale)}
            </p>

            {/* Share buttons */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </button>
              <button
                onClick={handleShareEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email
              </button>
              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                {t('mysite.shareLink', locale)}
              </button>
            </div>

            {/* View site button */}
            <div className="mt-6 text-center">
              <a
                href={`/s/${profile.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t('mysite.viewSite', locale)}
              </a>
            </div>
          </>
        ) : (
          <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-sm text-yellow-800">
              {t('mysite.noUsernameNotice', locale)}{' '}
              {t('mysite.goToSettingsPrefix', locale)}{' '}
              <Link href="/configuracion" className="font-medium underline">
                {t('mysite.goToSettings', locale)}
              </Link>{' '}
              {t('mysite.goToSettingsSuffix', locale)}
            </p>
          </div>
        )}
      </div>

      {/* Template Selector */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {t('mysite.templatesBeta', locale)}
          <span className="ml-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Beta</span>
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {t('mysite.templatesDescription', locale)}
        </p>

        {/* Category filter tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template grid */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template)}
              className={cn(
                'group relative overflow-hidden rounded-xl border-2 text-left transition-all hover:shadow-md',
                selectedTemplateId === template.id
                  ? 'border-indigo-600 ring-2 ring-indigo-600/20'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              {/* Mini preview */}
              <div
                className="relative h-24 w-full p-3"
                style={{ backgroundColor: template.config.background_color }}
              >
                {/* Simulated header */}
                <div
                  className="mb-2 h-2.5 w-16 rounded-full opacity-60"
                  style={{ backgroundColor: template.config.accent_color }}
                />
                {/* Simulated cards */}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 flex-1"
                      style={{
                        backgroundColor: template.config.dark_mode
                          ? 'rgba(255,255,255,0.08)'
                          : 'rgba(0,0,0,0.04)',
                        borderRadius:
                          template.config.card_style === 'sharp' ? '0px'
                          : template.config.card_style === 'pill' ? '12px'
                          : template.config.card_style === 'glass' ? '8px'
                          : '6px',
                        border: template.config.card_style === 'bordered'
                          ? `1px solid ${template.config.accent_color}40`
                          : 'none',
                        boxShadow: template.config.card_style === 'shadow'
                          ? '0 2px 4px rgba(0,0,0,0.1)'
                          : 'none',
                      }}
                    />
                  ))}
                </div>
                {/* Layout indicator */}
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/20 px-1 py-0.5 text-[8px] font-medium text-white">
                  {template.config.layout}
                </div>
              </div>

              {/* Template info */}
              <div className="border-t border-gray-100 bg-white px-2.5 py-2">
                <p className="truncate text-xs font-medium text-gray-900">
                  {template.name}
                </p>
                <p className="truncate text-[10px] text-gray-500">
                  {template.category} · {template.config.card_style}
                </p>
              </div>

              {/* Selected checkmark */}
              {selectedTemplateId === template.id && (
                <div className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Settings */}
      <form onSubmit={handleSave} className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">{t('mysite.siteConfig', locale)}</h2>

        <div className="mt-6 space-y-4">
          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              {t('mysite.bioTagline', locale)}
            </label>
            <textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => {
                if (e.target.value.length <= 200) {
                  setProfile((prev) => ({ ...prev, bio: e.target.value }))
                }
              }}
              rows={3}
              placeholder="Ej: Consultor de marketing digital con 10 anos de experiencia"
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              {profile.bio.length}/200 {t('mysite.characters', locale)}
            </p>
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="website_url" className="block text-sm font-medium text-gray-700">
              {t('mysite.website', locale)}
            </label>
            <input
              id="website_url"
              type="url"
              value={profile.website_url}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, website_url: e.target.value }))
              }
              placeholder="https://tusitio.com"
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Testimonials per page */}
          <div>
            <label htmlFor="minisite_testimonial_limit" className="block text-sm font-medium text-gray-700">
              {t('mysite.testimonialsPerPage', locale)}
            </label>
            <input
              id="minisite_testimonial_limit"
              type="number"
              min={10}
              max={100}
              value={profile.minisite_testimonial_limit}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10)
                if (!isNaN(val) && val >= 10 && val <= 100) {
                  setProfile((prev) => ({ ...prev, minisite_testimonial_limit: val }))
                }
              }}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <p className="mt-1 text-xs text-gray-400">
              {t('mysite.testimonialsPerPageHelp', locale)}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving && (
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {saving ? t('mysite.savingBio', locale) : t('mysite.saveBio', locale)}
          </button>
        </div>
      </form>
    </div>
  )
}
