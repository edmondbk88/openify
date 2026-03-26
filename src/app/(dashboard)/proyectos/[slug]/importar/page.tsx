'use client'

import { useState, useRef, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { IMPORTABLE_PLATFORMS, PLATFORMS } from '@/lib/platform-logos'
import { useLocale } from '@/components/dashboard/locale-context'
import { t } from '@/lib/i18n'

type Tab = 'platform' | 'manual' | 'csv'

interface ImportTestimonial {
  author_name: string
  content: string
  rating: number
  author_company: string
  author_role: string
  source_platform: string
  source_url: string
}

const emptyTestimonial: ImportTestimonial = {
  author_name: '',
  content: '',
  rating: 5,
  author_company: '',
  author_role: '',
  source_platform: '',
  source_url: '',
}

export default function ImportarPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const locale = useLocale()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [activeTab, setActiveTab] = useState<Tab>('platform')
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [testimonials, setTestimonials] = useState<ImportTestimonial[]>([{ ...emptyTestimonial }])
  const [csvData, setCsvData] = useState<ImportTestimonial[]>([])
  const [csvFileName, setCsvFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [projectId, setProjectId] = useState<string | null>(null)

  // Fetch project ID from slug
  const fetchProjectId = useCallback(async (): Promise<string | null> => {
    if (projectId) return projectId
    try {
      const res = await fetch(`/api/projects?slug=${slug}`)
      if (!res.ok) return null
      const data = await res.json()
      const project = Array.isArray(data) ? data.find((p: { slug: string }) => p.slug === slug) : data
      if (project?.id) {
        setProjectId(project.id)
        return project.id
      }
      return null
    } catch {
      return null
    }
  }, [slug, projectId])

  const handlePlatformSelect = (platformKey: string) => {
    setSelectedPlatform(platformKey)
    setTestimonials([{ ...emptyTestimonial, source_platform: platformKey }])
    setError('')
    setSuccess('')
  }

  const addTestimonial = () => {
    setTestimonials(prev => [
      ...prev,
      { ...emptyTestimonial, source_platform: selectedPlatform || '' },
    ])
  }

  const removeTestimonial = (index: number) => {
    setTestimonials(prev => prev.filter((_, i) => i !== index))
  }

  const updateTestimonial = (index: number, field: keyof ImportTestimonial, value: string | number) => {
    setTestimonials(prev =>
      prev.map((t, i) => (i === index ? { ...t, [field]: value } : t))
    )
  }

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setCsvFileName(file.name)
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string
        const lines = text.split('\n').filter(l => l.trim())
        if (lines.length < 2) {
          setError('El archivo CSV debe tener al menos una fila de datos además del encabezado.')
          return
        }

        const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''))
        const rows = lines.slice(1).map(line => {
          const values = line.match(/(".*?"|[^,]+)/g)?.map(v => v.replace(/^"|"$/g, '').trim()) || []
          const row: Record<string, string> = {}
          headers.forEach((h, i) => {
            row[h] = values[i] || ''
          })
          return row
        })

        const parsed: ImportTestimonial[] = rows
          .filter(row => row.author_name && row.content)
          .map(row => ({
            author_name: row.author_name || '',
            content: row.content || '',
            rating: Math.min(5, Math.max(1, parseInt(row.rating) || 5)),
            author_company: row.author_company || '',
            author_role: row.author_role || '',
            source_platform: row.source_platform || 'google',
            source_url: row.source_url || '',
          }))

        if (parsed.length === 0) {
          setError('No se encontraron testimonios validos en el CSV. Asegurate de tener columnas author_name y content.')
          return
        }

        setCsvData(parsed)
        setError('')
      } catch {
        setError('Error al procesar el archivo CSV.')
      }
    }
    reader.readAsText(file)
  }

  const handleImport = async (data: ImportTestimonial[]) => {
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const pid = await fetchProjectId()
      if (!pid) {
        setError('No se pudo encontrar el proyecto.')
        setLoading(false)
        return
      }

      // Validate
      const invalid = data.filter(t => !t.author_name || !t.content || !t.source_platform)
      if (invalid.length > 0) {
        setError('Todos los testimonios deben tener nombre, contenido y plataforma.')
        setLoading(false)
        return
      }

      const res = await fetch('/api/testimonials/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: pid,
          testimonials: data,
        }),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || 'Error al importar testimonios.')
        setLoading(false)
        return
      }

      setSuccess(`Se importaron ${result.count} testimonios correctamente.`)
      setTimeout(() => {
        router.push(`/proyectos/${slug}`)
      }, 2000)
    } catch {
      setError('Error de conexion. Intentalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const renderPlatformIcon = (platformKey: string, size: string = 'h-8 w-8') => {
    const platform = PLATFORMS[platformKey]
    if (!platform) return null
    return (
      <span
        className={`inline-block ${size}`}
        dangerouslySetInnerHTML={{ __html: platform.icon }}
      />
    )
  }

  return (
    <div>
      {/* Header */}
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

      <h1 className="text-2xl font-bold text-gray-900">
        {t('import.title', locale)}
        <span className="ml-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Beta</span>
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        {t('import.subtitle', locale)}
      </p>

      {/* Alerts */}
      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          {success}
        </div>
      )}

      {/* Tabs */}
      <div className="mt-6 flex gap-1 rounded-lg bg-gray-100 p-1">
        {([
          { key: 'platform' as Tab, label: t('import.byPlatform', locale) },
          { key: 'manual' as Tab, label: t('import.manual', locale) },
          { key: 'csv' as Tab, label: t('import.csv', locale) },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key)
              setError('')
              setSuccess('')
            }}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content: Platform */}
      {activeTab === 'platform' && !selectedPlatform && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMPORTABLE_PLATFORMS.map((platform) => (
            <button
              key={platform.key}
              onClick={() => handlePlatformSelect(platform.key)}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 text-left transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: platform.color + '15' }}
              >
                {renderPlatformIcon(platform.key, 'h-7 w-7')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{platform.name}</p>
                <p className="text-sm text-gray-500">{platform.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Tab Content: Platform selected - form */}
      {activeTab === 'platform' && selectedPlatform && (
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedPlatform(null)
                  setTestimonials([{ ...emptyTestimonial }])
                }}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cambiar plataforma
              </button>
              <div className="flex items-center gap-2">
                {renderPlatformIcon(selectedPlatform, 'h-5 w-5')}
                <span className="font-medium text-gray-900">
                  {PLATFORMS[selectedPlatform]?.name}
                </span>
              </div>
            </div>
            <button
              onClick={addTestimonial}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Añadir otro
            </button>
          </div>

          {testimonials.map((t, index) => (
            <div key={index} className="mb-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Testimonio {index + 1}</span>
                {testimonials.length > 1 && (
                  <button
                    onClick={() => removeTestimonial(index)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nombre del autor *
                  </label>
                  <input
                    type="text"
                    value={t.author_name}
                    onChange={(e) => updateTestimonial(index, 'author_name', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Juan Garcia"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Puntuacion *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => updateTestimonial(index, 'rating', star)}
                        className={`h-8 w-8 ${star <= t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Testimonio *
                </label>
                <textarea
                  value={t.content}
                  onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Pega aquí el texto de la reseña..."
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={t.author_company}
                    onChange={(e) => updateTestimonial(index, 'author_company', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Empresa S.L."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Cargo
                  </label>
                  <input
                    type="text"
                    value={t.author_role}
                    onChange={(e) => updateTestimonial(index, 'author_role', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Director de marketing"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  URL de la reseña original
                </label>
                <input
                  type="url"
                  value={t.source_url}
                  onChange={(e) => updateTestimonial(index, 'source_url', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://..."
                />
              </div>
            </div>
          ))}

          <button
            onClick={() => handleImport(testimonials)}
            disabled={loading}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Importando...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Importar {testimonials.length} {testimonials.length === 1 ? 'testimonio' : 'testimonios'}
              </>
            )}
          </button>
        </div>
      )}

      {/* Tab Content: Manual */}
      {activeTab === 'manual' && (
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Importa testimonios de cualquier fuente. Selecciona la plataforma de origen.
            </p>
            <button
              onClick={addTestimonial}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Añadir otro
            </button>
          </div>

          {testimonials.map((t, index) => (
            <div key={index} className="mb-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Testimonio {index + 1}</span>
                {testimonials.length > 1 && (
                  <button
                    onClick={() => removeTestimonial(index)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nombre del autor *
                  </label>
                  <input
                    type="text"
                    value={t.author_name}
                    onChange={(e) => updateTestimonial(index, 'author_name', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Juan Garcia"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Plataforma *
                  </label>
                  <select
                    value={t.source_platform}
                    onChange={(e) => updateTestimonial(index, 'source_platform', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="">Seleccionar...</option>
                    {IMPORTABLE_PLATFORMS.map((p) => (
                      <option key={p.key} value={p.key}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Puntuacion *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => updateTestimonial(index, 'rating', star)}
                        className={`h-8 w-8 ${star <= t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Testimonio *
                </label>
                <textarea
                  value={t.content}
                  onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Pega aquí el texto de la reseña..."
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={t.author_company}
                    onChange={(e) => updateTestimonial(index, 'author_company', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Empresa S.L."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Cargo
                  </label>
                  <input
                    type="text"
                    value={t.author_role}
                    onChange={(e) => updateTestimonial(index, 'author_role', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Director"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    URL original
                  </label>
                  <input
                    type="url"
                    value={t.source_url}
                    onChange={(e) => updateTestimonial(index, 'source_url', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => handleImport(testimonials)}
            disabled={loading}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Importando...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Importar {testimonials.length} {testimonials.length === 1 ? 'testimonio' : 'testimonios'}
              </>
            )}
          </button>
        </div>
      )}

      {/* Tab Content: CSV */}
      {activeTab === 'csv' && (
        <div className="mt-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Importar desde CSV</h3>
            <p className="mt-1 text-sm text-gray-500">
              Sube un archivo CSV con las siguientes columnas: <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">author_name</code>,{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">content</code>,{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">rating</code>,{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">author_company</code>,{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">author_role</code>,{' '}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">source_platform</code>
            </p>

            <div className="mt-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-6 py-4 text-sm font-medium text-gray-600 transition-colors hover:border-indigo-400 hover:text-indigo-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                {csvFileName ? csvFileName : 'Seleccionar archivo CSV'}
              </button>
            </div>

            {/* CSV Preview */}
            {csvData.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-700">
                  Vista previa ({csvData.length} testimonios)
                </h4>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Autor</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Testimonio</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Rating</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Plataforma</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Empresa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {csvData.slice(0, 10).map((row, i) => (
                        <tr key={i}>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-900">{row.author_name}</td>
                          <td className="max-w-xs truncate px-4 py-2 text-gray-600">{row.content}</td>
                          <td className="px-4 py-2 text-gray-600">{row.rating}/5</td>
                          <td className="px-4 py-2">
                            <span
                              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
                              style={{
                                backgroundColor: (PLATFORMS[row.source_platform]?.color || '#6366f1') + '20',
                                color: PLATFORMS[row.source_platform]?.color || '#6366f1',
                              }}
                            >
                              {PLATFORMS[row.source_platform]?.name || row.source_platform}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-gray-600">{row.author_company || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {csvData.length > 10 && (
                    <p className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-center text-xs text-gray-500">
                      ...y {csvData.length - 10} mas
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleImport(csvData)}
                  disabled={loading}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Importando...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                      Importar {csvData.length} testimonios
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
