'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/toast'
import WidgetConfigurator from '@/components/dashboard/widget-configurator'
import WidgetRealPreview from '@/components/dashboard/widget-real-preview'
import EmbedCode from '@/components/dashboard/embed-code'
import { createClient } from '@/lib/supabase/client'
import type { WidgetConfig } from '@/types'

type EditableConfig = Omit<
  WidgetConfig,
  'id' | 'project_id' | 'filter_tags' | 'custom_css' | 'created_at' | 'updated_at'
>

const defaultConfig: EditableConfig = {
  layout: 'carousel',
  theme: 'light',
  primary_color: '#6366f1',
  background_color: '#ffffff',
  text_color: '#111827',
  border_radius: 12,
  show_rating: true,
  show_date: true,
  show_avatar: true,
  show_company: true,
  show_branding: true,
  auto_play: true,
  auto_play_speed: 5000,
  max_testimonials: 10,
  min_rating: 1,
  video_display_mode: 'full',
  font_style: 'modern',
}

export default function WidgetPage() {
  const params = useParams()
  const slug = params.slug as string
  const router = useRouter()
  const { toast } = useToast()

  const [projectId, setProjectId] = useState<string | null>(null)
  const [config, setConfig] = useState<EditableConfig>(defaultConfig)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function loadData() {
      const supabase = createClient()

      // Get project
      const { data: project } = await supabase
        .from('projects')
        .select('id')
        .eq('slug', slug)
        .single()

      if (!project) {
        router.push('/proyectos')
        return
      }

      setProjectId(project.id)

      // Get widget config
      const { data: widgetConfig } = await supabase
        .from('widget_configs')
        .select('*')
        .eq('project_id', project.id)
        .single()

      if (widgetConfig) {
        setConfig({
          layout: widgetConfig.layout,
          theme: widgetConfig.theme,
          primary_color: widgetConfig.primary_color,
          background_color: widgetConfig.background_color,
          text_color: widgetConfig.text_color,
          border_radius: widgetConfig.border_radius,
          show_rating: widgetConfig.show_rating,
          show_date: widgetConfig.show_date,
          show_avatar: widgetConfig.show_avatar,
          show_company: widgetConfig.show_company,
          show_branding: widgetConfig.show_branding,
          auto_play: widgetConfig.auto_play,
          auto_play_speed: widgetConfig.auto_play_speed,
          max_testimonials: widgetConfig.max_testimonials,
          min_rating: widgetConfig.min_rating,
          video_display_mode: widgetConfig.video_display_mode || 'full',
          font_style: widgetConfig.font_style || 'modern',
        })
      }

      setLoading(false)
    }

    loadData()
  }, [slug, router])

  async function handleSave() {
    if (!projectId) return
    setSaving(true)

    try {
      const supabase = createClient()

      // Check if widget config already exists
      const { data: existing } = await supabase
        .from('widget_configs')
        .select('id')
        .eq('project_id', projectId)
        .single()

      let error

      if (existing) {
        // Update existing config
        const result = await supabase
          .from('widget_configs')
          .update({ ...config, updated_at: new Date().toISOString() })
          .eq('project_id', projectId)
        error = result.error
      } else {
        // Insert new config
        const result = await supabase
          .from('widget_configs')
          .insert({ ...config, project_id: projectId })
        error = result.error
      }

      if (error) {
        throw new Error(error.message)
      }

      toast('Configuración del widget guardada', 'success')
    } catch (err: unknown) {
      toast(err instanceof Error ? err.message : 'Error al guardar la configuración', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg
          className="h-8 w-8 animate-spin text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Configurar Widget
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Personaliza cómo se muestran los testimonios en tu sitio web.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving && (
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {/* Left: Configurator */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <WidgetConfigurator config={config} onChange={setConfig} />
        </div>

        {/* Right: Preview + Embed Code */}
        <div className="space-y-6">
          {projectId && <WidgetRealPreview projectId={projectId} config={config} />}
          {projectId && <EmbedCode projectId={projectId} />}
        </div>
      </div>
    </div>
  )
}
