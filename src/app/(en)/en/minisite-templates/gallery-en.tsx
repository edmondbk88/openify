'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { MiniSiteTemplate } from '@/lib/minisite-templates'

const INITIAL_COUNT = 12

const CATEGORY_TRANSLATIONS: Record<string, string> = {
  'Todas': 'All',
  'Salud': 'Health',
  'Legal': 'Legal',
  'Creativos': 'Creatives',
  'Educacion': 'Education',
  'Tecnologia': 'Technology',
  'Bienestar': 'Wellness',
  'Hosteleria': 'Hospitality',
  'Negocios': 'Business',
  'Servicios': 'Services',
}

// Reverse map: English → Spanish (for filtering since templates use Spanish categories)
const REVERSE_TRANSLATIONS: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_TRANSLATIONS).map(([es, en]) => [en, es])
)

const TEMPLATE_NAME_TRANSLATIONS: Record<string, string> = {
  'Consultorio Sereno': 'Serene Clinic',
  'Sonrisa Dental': 'Dental Smile',
  'Mente en Calma': 'Calm Mind',
  'Vida Natural': 'Natural Life',
  'Movimiento Vital': 'Vital Movement',
  'Bufete Distinguido': 'Distinguished Firm',
  'Notaria Clasica': 'Classic Notary',
  'Asesoria Ejecutiva': 'Executive Advisory',
  'Lente Artistica': 'Artistic Lens',
  'Estudio Creativo': 'Creative Studio',
  'Plano Maestro': 'Master Plan',
  'Cine en Movimiento': 'Cinema in Motion',
  'Aula Inspirada': 'Inspired Classroom',
  'Impulso Coaching': 'Coaching Boost',
  'Academia del Saber': 'Academy of Knowledge',
  'Código Limpio': 'Clean Code',
  'Agencia Digital': 'Digital Agency',
  'Plataforma SaaS': 'SaaS Platform',
  'Salon Elegante': 'Elegant Salon',
  'Estetica Premium': 'Premium Aesthetics',
  'Fuerza Fitness': 'Fitness Power',
  'Mesa Gourmet': 'Gourmet Table',
  'Suite Dorada': 'Golden Suite',
  'Banquete Festivo': 'Festive Banquet',
  'Inmobiliaria Elite': 'Elite Real Estate',
  'Contabilidad Clara': 'Clear Accounting',
  'Finanzas Solidas': 'Solid Finance',
  'Fontaneria Pro': 'Pro Plumbing',
  'Chispa Electrica': 'Electric Spark',
  'Limpieza Brillante': 'Brilliant Cleaning',
}

const TEMPLATE_DESC_TRANSLATIONS: Record<string, string> = {
  'Azul sanitario suave y limpio. Ideal para medicos y clinicas.': 'Soft, clean medical blue. Ideal for doctors and clinics.',
  'Blanco brillante con turquesa fresco. Perfecto para dentistas.': 'Bright white with fresh turquoise. Perfect for dentists.',
  'Violeta suave y sereno. Pensado para psicologos y terapeutas.': 'Soft, serene violet. Designed for psychologists and therapists.',
  'Verde organico y fresco. Para nutricionistas y dietistas.': 'Fresh organic green. For nutritionists and dietitians.',
  'Azul dinamico con energia. Ideal para fisioterapeutas.': 'Dynamic, energetic blue. Ideal for physiotherapists.',
  'Azul marino con tipografia serif. Para abogados con prestigio.': 'Navy blue with serif typography. For prestigious law firms.',
  'Tonos sepia y dorados. Transmite tradicion y confianza notarial.': 'Sepia and golden tones. Conveys notarial tradition and trust.',
  'Gris acero con acentos azules. Para consultores y asesores.': 'Steel gray with blue accents. For consultants and advisors.',
  'Negro elegante con detalles dorados. Para fotografos con estilo.': 'Elegant black with golden details. For stylish photographers.',
  'Rosa vibrante y moderno. Ideal para disenadores graficos.': 'Vibrant, modern pink. Ideal for graphic designers.',
  'Lineas limpias y minimalismo. Para arquitectos y estudios.': 'Clean lines and minimalism. For architects and studios.',
  'Oscuro cinematografico. Perfecto para videografos y productoras.': 'Cinematic dark theme. Perfect for videographers and producers.',
  'Azul educativo calido. Para profesores y formadores.': 'Warm educational blue. For teachers and trainers.',
  'Naranja energetico y motivador. Para coaches y mentores.': 'Energetic, motivating orange. For coaches and mentors.',
  'Ambar clasico academico. Para academias y centros de formacion.': 'Classic academic amber. For academies and training centers.',
  'Oscuro tipo IDE con verde terminal. Para desarrolladores.': 'Dark IDE-style with terminal green. For developers.',
  'Indigo moderno y brillante. Para agencias de marketing digital.': 'Modern, bright indigo. For digital marketing agencies.',
  'Cyan futurista sobre oscuro. Para productos SaaS y startups.': 'Futuristic cyan on dark. For SaaS products and startups.',
  'Rosa empolvado con toques dorados. Para peluquerias y salones.': 'Dusty pink with golden touches. For hair salons and beauty parlors.',
  'Blanco lujoso con oro rosa. Para centros de estetica.': 'Luxurious white with rose gold. For aesthetics centers.',
  'Negro potente con rojo energia. Para entrenadores personales.': 'Powerful black with energetic red. For personal trainers.',
  'Burdeos con crema calida. Para restaurantes y chefs.': 'Burgundy with warm cream. For restaurants and chefs.',
  'Dorado lujoso y oscuro. Para hoteles y alojamientos premium.': 'Luxurious dark gold. For hotels and premium accommodation.',
  'Coral calido y alegre. Para caterings y eventos.': 'Warm, cheerful coral. For catering and events.',
  'Gris pizarra con toques dorados. Para agencias inmobiliarias.': 'Slate gray with golden touches. For real estate agencies.',
  'Verde confianza y estructura limpia. Para contables y gestores.': 'Trustworthy green with clean structure. For accountants and managers.',
  'Azul corporativo serio. Para asesores financieros.': 'Serious corporate blue. For financial advisors.',
  'Azul agua con estilo profesional. Para fontaneros y técnicos.': 'Water blue with professional style. For plumbers and technicians.',
  'Amarillo electrico con negro. Para electricistas.': 'Electric yellow with black. For electricians.',
  'Celeste fresco y limpio. Para empresas de limpieza.': 'Fresh, clean sky blue. For cleaning companies.',
}

export function MiniSiteGalleryEn({
  templates,
  categories,
}: {
  templates: MiniSiteTemplate[]
  categories: readonly string[] | string[]
}) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const englishCategories = ['All', ...categories.map(c => CATEGORY_TRANSLATIONS[c] || c)]

  // Convert English category back to Spanish for filtering
  const esCategoryForFilter = REVERSE_TRANSLATIONS[activeCategory] || activeCategory

  const filtered =
    activeCategory === 'All'
      ? templates
      : templates.filter((t) => t.category === esCategoryForFilter)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setVisibleCount(INITIAL_COUNT)
  }

  return (
    <>
      {/* Category filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {englishCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        Showing {visible.length} of {filtered.length} template{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((template) => (
          <Link
            key={template.id}
            href={`/en/minisite-templates/${template.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg"
          >
            {/* Mini preview */}
            <div
              className="relative h-36 w-full p-4"
              style={{ backgroundColor: template.config.background_color }}
            >
              {/* Simulated header */}
              <div
                className="mb-3 h-3 w-20 rounded-full opacity-60"
                style={{ backgroundColor: template.config.accent_color }}
              />
              {/* Simulated cards */}
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-14 flex-1"
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
              <div className="absolute bottom-2 right-2 rounded bg-black/20 px-1.5 py-0.5 text-[9px] font-medium text-white">
                {template.config.layout}
              </div>
            </div>

            {/* Template info */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: template.config.accent_color }}
                />
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {TEMPLATE_NAME_TRANSLATIONS[template.name] || template.name}
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {TEMPLATE_DESC_TRANSLATIONS[template.description] || template.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {CATEGORY_TRANSLATIONS[template.category] || template.category}
                </span>
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {template.config.card_style}
                </span>
                {template.config.dark_mode && (
                  <span className="inline-block rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-200">
                    Dark
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="inline-flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Show more templates ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-gray-500">
          No templates found in this category.
        </p>
      )}
    </>
  )
}
