'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { widgetTemplates, TEMPLATE_CATEGORIES } from '@/lib/widget-templates'
import type { WidgetTemplate } from '@/lib/widget-templates'
import { TemplatePreview } from '@/components/landing/template-preview'
import type { WidgetConfig, WidgetLayout, WidgetTheme } from '@/types'

type EditableConfig = Omit<WidgetConfig, 'id' | 'project_id' | 'filter_tags' | 'custom_css' | 'created_at' | 'updated_at'>

interface WidgetConfiguratorProps {
  config: EditableConfig
  onChange: (config: EditableConfig) => void
}

const layoutOptions: { value: WidgetLayout; label: string; beta?: boolean }[] = [
  { value: 'carousel', label: 'Carrusel' },
  { value: 'grid', label: 'Cuadrícula' },
  { value: 'wall', label: 'Muro' },
  { value: 'single', label: 'Individual' },
  { value: 'badge', label: 'Insignia' },
  { value: 'popup', label: 'Popup FOMO', beta: true },
]

const themeOptions: { value: WidgetTheme; label: string }[] = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'auto', label: 'Automático' },
]

const ALL_CATEGORIES = ['Todas', ...TEMPLATE_CATEGORIES] as const

export default function WidgetConfigurator({ config, onChange }: WidgetConfiguratorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null)

  function update<K extends keyof EditableConfig>(key: K, value: EditableConfig[K]) {
    onChange({ ...config, [key]: value })
  }

  function applyTemplate(template: WidgetTemplate) {
    setSelectedTemplateId(template.id)
    onChange({
      ...config,
      layout: template.layout,
      theme: template.config.theme,
      primary_color: template.config.primary_color,
      background_color: template.config.background_color,
      text_color: template.config.text_color,
      border_radius: template.config.border_radius,
      show_rating: template.config.show_rating,
      show_date: template.config.show_date,
      show_avatar: template.config.show_avatar,
      show_company: template.config.show_company,
      show_branding: config.show_branding,
      font_style: template.config.font_style,
    })
  }

  const filteredTemplates = selectedCategory === 'Todas'
    ? widgetTemplates
    : widgetTemplates.filter((t) => t.category === selectedCategory)

  return (
    <div className="space-y-10">
      {/* Personaliza tu plantilla CTA */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 text-center">
        <button
          type="button"
          onClick={() => {
            document.getElementById('personalizacion-avanzada')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 transition-colors hover:text-indigo-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
          </svg>
          No encuentras lo que buscas? Personaliza tu plantilla
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </button>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* TEMPLATE SELECTOR */}
      {/* ═══════════════════════════════════════════ */}
      <section>
        <h3 className="text-base font-semibold text-gray-900">Elige una plantilla</h3>
        <p className="mt-1 text-sm text-gray-500">
          Selecciona una plantilla prediseñada y luego ajusta los detalles abajo.
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
              {/* Template preview thumbnail */}
              <div className="pointer-events-none aspect-[4/3] w-full overflow-hidden">
                <div className="h-full w-full origin-top-left scale-[0.5] transform" style={{ width: '200%', height: '200%' }}>
                  <TemplatePreview template={template} compact />
                </div>
              </div>

              {/* Template name */}
              <div className="border-t border-gray-100 bg-white px-2.5 py-2">
                <p className="truncate text-xs font-medium text-gray-900">
                  {template.name}
                </p>
                <p className="truncate text-[10px] text-gray-500">
                  {template.category} · {template.layout}
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
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* MANUAL CUSTOMIZATION */}
      {/* ═══════════════════════════════════════════ */}
      <div id="personalizacion-avanzada" className="border-t border-gray-200 pt-8 scroll-mt-8">
        <h3 className="text-base font-semibold text-gray-900">Personalización avanzada</h3>
        <p className="mt-1 text-sm text-gray-500">
          Ajusta cada detalle manualmente.
        </p>
      </div>

      {/* Layout */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Diseño</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {layoutOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update('layout', opt.value)}
              className={cn(
                'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                config.layout === opt.value
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              )}
            >
              {opt.label}
              {opt.beta && (
                <span className="ml-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Beta</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Theme */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Tema</h3>
        <div className="mt-3 flex gap-2">
          {themeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update('theme', opt.value)}
              className={cn(
                'rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors',
                config.theme === opt.value
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Colores</h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-gray-500">Color primario</label>
            <div className="mt-1.5 flex items-center gap-2">
              <input
                type="color"
                value={config.primary_color}
                onChange={(e) => update('primary_color', e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-gray-200"
              />
              <input
                type="text"
                value={config.primary_color}
                onChange={(e) => update('primary_color', e.target.value)}
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500">Color de fondo</label>
            <div className="mt-1.5 flex items-center gap-2">
              <input
                type="color"
                value={config.background_color}
                onChange={(e) => update('background_color', e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-gray-200"
              />
              <input
                type="text"
                value={config.background_color}
                onChange={(e) => update('background_color', e.target.value)}
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500">Color de texto</label>
            <div className="mt-1.5 flex items-center gap-2">
              <input
                type="color"
                value={config.text_color}
                onChange={(e) => update('text_color', e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-gray-200"
              />
              <input
                type="text"
                value={config.text_color}
                onChange={(e) => update('text_color', e.target.value)}
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Radio de borde</h3>
        <div className="mt-3 flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            value={config.border_radius}
            onChange={(e) => update('border_radius', Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="w-12 text-right text-sm text-gray-600">{config.border_radius}px</span>
        </div>
      </section>

      {/* Toggles */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Opciones de visualización</h3>
        <div className="mt-3 space-y-3">
          {([
            { key: 'show_rating' as const, label: 'Mostrar valoración' },
            { key: 'show_date' as const, label: 'Mostrar fecha' },
            { key: 'show_avatar' as const, label: 'Mostrar avatar' },
            { key: 'show_company' as const, label: 'Mostrar empresa' },
            { key: 'show_branding' as const, label: 'Mostrar marca Opinafy' },
          ]).map(({ key, label }) => (
            <label key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{label}</span>
              <button
                type="button"
                role="switch"
                aria-checked={config[key]}
                onClick={() => update(key, !config[key])}
                className={cn(
                  'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
                  config[key] ? 'bg-indigo-600' : 'bg-gray-200'
                )}
              >
                <span
                  className={cn(
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform',
                    config[key] ? 'translate-x-5' : 'translate-x-0'
                  )}
                />
              </button>
            </label>
          ))}
        </div>
      </section>

      {/* Video Display Mode */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Modo de video</h3>
        <p className="mt-1 text-xs text-gray-500">
          Controla qué información se muestra junto a los testimonios en vídeo.
        </p>
        <select
          value={config.video_display_mode || 'full'}
          onChange={(e) => update('video_display_mode', e.target.value)}
          className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="full">Completo (video + todo)</option>
          <option value="video_only">Solo video</option>
          <option value="video_stars">Video + estrellas</option>
          <option value="video_name">Video + nombre</option>
        </select>
      </section>

      {/* Auto-play */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Reproducción automática</h3>
        <div className="mt-3 space-y-3">
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Activar auto-play</span>
            <button
              type="button"
              role="switch"
              aria-checked={config.auto_play}
              onClick={() => update('auto_play', !config.auto_play)}
              className={cn(
                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
                config.auto_play ? 'bg-indigo-600' : 'bg-gray-200'
              )}
            >
              <span
                className={cn(
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform',
                  config.auto_play ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </button>
          </label>
          {config.auto_play && (
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-500">Velocidad (ms)</label>
              <input
                type="range"
                min={1000}
                max={10000}
                step={500}
                value={config.auto_play_speed}
                onChange={(e) => update('auto_play_speed', Number(e.target.value))}
                className="flex-1 accent-indigo-600"
              />
              <span className="w-16 text-right text-sm text-gray-600">{config.auto_play_speed}ms</span>
            </div>
          )}
        </div>
      </section>

      {/* Max testimonials & min rating */}
      <section>
        <h3 className="text-sm font-semibold text-gray-900">Filtros</h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-gray-500">Máximo de testimonios</label>
            <input
              type="number"
              min={1}
              max={100}
              value={config.max_testimonials}
              onChange={(e) => update('max_testimonials', Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500">Valoración mínima</label>
            <select
              value={config.min_rating}
              onChange={(e) => update('min_rating', Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'estrella' : 'estrellas'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  )
}
