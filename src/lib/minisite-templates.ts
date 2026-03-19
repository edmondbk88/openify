export interface MiniSiteTemplate {
  id: string
  name: string
  category: string
  description: string
  config: {
    accent_color: string
    background_color: string
    text_color: string
    card_style: 'rounded' | 'sharp' | 'pill' | 'bordered' | 'shadow' | 'glass'
    layout: 'masonry' | 'grid' | 'list' | 'cards' | 'timeline'
    header_style: 'centered' | 'left' | 'hero' | 'minimal' | 'banner'
    font_style: 'modern' | 'serif' | 'rounded' | 'minimal' | 'bold'
    show_stats: boolean
    show_contact: boolean
    dark_mode: boolean
  }
}

export const MINISITE_CATEGORIES = [
  'Salud',
  'Legal',
  'Creativos',
  'Educacion',
  'Tecnologia',
  'Bienestar',
  'Hosteleria',
  'Negocios',
  'Servicios',
] as const

export type MiniSiteCategory = (typeof MINISITE_CATEGORIES)[number]

export const miniSiteTemplates: MiniSiteTemplate[] = [
  // ═══════════════════════════════════════════════════
  // SALUD (5)
  // ═══════════════════════════════════════════════════
  {
    id: 'consultorio-sereno',
    name: 'Consultorio Sereno',
    category: 'Salud',
    description: 'Azul sanitario suave y limpio. Ideal para medicos y clinicas.',
    config: {
      accent_color: '#0284c7',
      background_color: '#f0f9ff',
      text_color: '#0c4a6e',
      card_style: 'rounded',
      layout: 'grid',
      header_style: 'centered',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'sonrisa-dental',
    name: 'Sonrisa Dental',
    category: 'Salud',
    description: 'Blanco brillante con turquesa fresco. Perfecto para dentistas.',
    config: {
      accent_color: '#14b8a6',
      background_color: '#ffffff',
      text_color: '#134e4a',
      card_style: 'pill',
      layout: 'cards',
      header_style: 'hero',
      font_style: 'rounded',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'mente-en-calma',
    name: 'Mente en Calma',
    category: 'Salud',
    description: 'Violeta suave y sereno. Pensado para psicologos y terapeutas.',
    config: {
      accent_color: '#8b5cf6',
      background_color: '#faf5ff',
      text_color: '#4c1d95',
      card_style: 'shadow',
      layout: 'list',
      header_style: 'minimal',
      font_style: 'serif',
      show_stats: false,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'vida-natural',
    name: 'Vida Natural',
    category: 'Salud',
    description: 'Verde organico y fresco. Para nutricionistas y dietistas.',
    config: {
      accent_color: '#16a34a',
      background_color: '#f0fdf4',
      text_color: '#14532d',
      card_style: 'bordered',
      layout: 'masonry',
      header_style: 'left',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'movimiento-vital',
    name: 'Movimiento Vital',
    category: 'Salud',
    description: 'Azul dinamico con energia. Ideal para fisioterapeutas.',
    config: {
      accent_color: '#2563eb',
      background_color: '#eff6ff',
      text_color: '#1e3a8a',
      card_style: 'glass',
      layout: 'grid',
      header_style: 'banner',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },

  // ═══════════════════════════════════════════════════
  // LEGAL (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'bufete-distinguido',
    name: 'Bufete Distinguido',
    category: 'Legal',
    description: 'Azul marino con tipografia serif. Para abogados con prestigio.',
    config: {
      accent_color: '#1e3a8a',
      background_color: '#f8fafc',
      text_color: '#0f172a',
      card_style: 'sharp',
      layout: 'list',
      header_style: 'left',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'notaria-clasica',
    name: 'Notaria Clasica',
    category: 'Legal',
    description: 'Tonos sepia y dorados. Transmite tradicion y confianza notarial.',
    config: {
      accent_color: '#92400e',
      background_color: '#fffbeb',
      text_color: '#78350f',
      card_style: 'bordered',
      layout: 'timeline',
      header_style: 'centered',
      font_style: 'serif',
      show_stats: false,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'asesoria-ejecutiva',
    name: 'Asesoria Ejecutiva',
    category: 'Legal',
    description: 'Gris acero con acentos azules. Para consultores y asesores.',
    config: {
      accent_color: '#475569',
      background_color: '#f1f5f9',
      text_color: '#1e293b',
      card_style: 'shadow',
      layout: 'grid',
      header_style: 'minimal',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },

  // ═══════════════════════════════════════════════════
  // CREATIVOS (4)
  // ═══════════════════════════════════════════════════
  {
    id: 'lente-artistica',
    name: 'Lente Artistica',
    category: 'Creativos',
    description: 'Negro elegante con detalles dorados. Para fotografos con estilo.',
    config: {
      accent_color: '#fbbf24',
      background_color: '#0a0a0a',
      text_color: '#e5e7eb',
      card_style: 'glass',
      layout: 'masonry',
      header_style: 'hero',
      font_style: 'minimal',
      show_stats: true,
      show_contact: true,
      dark_mode: true,
    },
  },
  {
    id: 'estudio-creativo',
    name: 'Estudio Creativo',
    category: 'Creativos',
    description: 'Rosa vibrante y moderno. Ideal para disenadores graficos.',
    config: {
      accent_color: '#ec4899',
      background_color: '#fdf2f8',
      text_color: '#831843',
      card_style: 'pill',
      layout: 'grid',
      header_style: 'centered',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'plano-maestro',
    name: 'Plano Maestro',
    category: 'Creativos',
    description: 'Lineas limpias y minimalismo. Para arquitectos y estudios.',
    config: {
      accent_color: '#171717',
      background_color: '#fafafa',
      text_color: '#262626',
      card_style: 'sharp',
      layout: 'list',
      header_style: 'left',
      font_style: 'minimal',
      show_stats: false,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'cine-en-movimiento',
    name: 'Cine en Movimiento',
    category: 'Creativos',
    description: 'Oscuro cinematografico. Perfecto para videografos y productoras.',
    config: {
      accent_color: '#ef4444',
      background_color: '#18181b',
      text_color: '#d4d4d8',
      card_style: 'rounded',
      layout: 'cards',
      header_style: 'banner',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: true,
    },
  },

  // ═══════════════════════════════════════════════════
  // EDUCACION (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'aula-inspirada',
    name: 'Aula Inspirada',
    category: 'Educacion',
    description: 'Azul educativo calido. Para profesores y formadores.',
    config: {
      accent_color: '#3b82f6',
      background_color: '#eff6ff',
      text_color: '#1e40af',
      card_style: 'rounded',
      layout: 'grid',
      header_style: 'hero',
      font_style: 'rounded',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'impulso-coaching',
    name: 'Impulso Coaching',
    category: 'Educacion',
    description: 'Naranja energetico y motivador. Para coaches y mentores.',
    config: {
      accent_color: '#ea580c',
      background_color: '#fff7ed',
      text_color: '#9a3412',
      card_style: 'shadow',
      layout: 'cards',
      header_style: 'centered',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'academia-saber',
    name: 'Academia del Saber',
    category: 'Educacion',
    description: 'Ambar clasico academico. Para academias y centros de formacion.',
    config: {
      accent_color: '#b45309',
      background_color: '#fffbeb',
      text_color: '#78350f',
      card_style: 'bordered',
      layout: 'timeline',
      header_style: 'left',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },

  // ═══════════════════════════════════════════════════
  // TECNOLOGIA (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'codigo-limpio',
    name: 'Codigo Limpio',
    category: 'Tecnologia',
    description: 'Oscuro tipo IDE con verde terminal. Para desarrolladores.',
    config: {
      accent_color: '#22c55e',
      background_color: '#0f172a',
      text_color: '#cbd5e1',
      card_style: 'sharp',
      layout: 'list',
      header_style: 'minimal',
      font_style: 'minimal',
      show_stats: true,
      show_contact: false,
      dark_mode: true,
    },
  },
  {
    id: 'agencia-digital',
    name: 'Agencia Digital',
    category: 'Tecnologia',
    description: 'Indigo moderno y brillante. Para agencias de marketing digital.',
    config: {
      accent_color: '#6366f1',
      background_color: '#eef2ff',
      text_color: '#312e81',
      card_style: 'glass',
      layout: 'masonry',
      header_style: 'hero',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'plataforma-saas',
    name: 'Plataforma SaaS',
    category: 'Tecnologia',
    description: 'Cyan futurista sobre oscuro. Para productos SaaS y startups.',
    config: {
      accent_color: '#06b6d4',
      background_color: '#0c0a09',
      text_color: '#a8a29e',
      card_style: 'rounded',
      layout: 'grid',
      header_style: 'banner',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: true,
    },
  },

  // ═══════════════════════════════════════════════════
  // BIENESTAR (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'salon-elegante',
    name: 'Salon Elegante',
    category: 'Bienestar',
    description: 'Rosa empolvado con toques dorados. Para peluquerias y salones.',
    config: {
      accent_color: '#be185d',
      background_color: '#fdf2f8',
      text_color: '#9d174d',
      card_style: 'pill',
      layout: 'cards',
      header_style: 'centered',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'estetica-premium',
    name: 'Estetica Premium',
    category: 'Bienestar',
    description: 'Blanco lujoso con oro rosa. Para centros de estetica.',
    config: {
      accent_color: '#a16207',
      background_color: '#fffbeb',
      text_color: '#713f12',
      card_style: 'shadow',
      layout: 'masonry',
      header_style: 'hero',
      font_style: 'serif',
      show_stats: false,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'fuerza-fitness',
    name: 'Fuerza Fitness',
    category: 'Bienestar',
    description: 'Negro potente con rojo energia. Para entrenadores personales.',
    config: {
      accent_color: '#dc2626',
      background_color: '#0a0a0a',
      text_color: '#e5e7eb',
      card_style: 'sharp',
      layout: 'grid',
      header_style: 'banner',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: true,
    },
  },

  // ═══════════════════════════════════════════════════
  // HOSTELERIA (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'mesa-gourmet',
    name: 'Mesa Gourmet',
    category: 'Hosteleria',
    description: 'Burdeos con crema calida. Para restaurantes y chefs.',
    config: {
      accent_color: '#991b1b',
      background_color: '#fef2f2',
      text_color: '#450a0a',
      card_style: 'bordered',
      layout: 'masonry',
      header_style: 'hero',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'suite-dorada',
    name: 'Suite Dorada',
    category: 'Hosteleria',
    description: 'Dorado lujoso y oscuro. Para hoteles y alojamientos premium.',
    config: {
      accent_color: '#d97706',
      background_color: '#1c1917',
      text_color: '#d6d3d1',
      card_style: 'glass',
      layout: 'cards',
      header_style: 'banner',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: true,
    },
  },
  {
    id: 'banquete-festivo',
    name: 'Banquete Festivo',
    category: 'Hosteleria',
    description: 'Coral calido y alegre. Para caterings y eventos.',
    config: {
      accent_color: '#f97316',
      background_color: '#fff7ed',
      text_color: '#7c2d12',
      card_style: 'pill',
      layout: 'grid',
      header_style: 'centered',
      font_style: 'rounded',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },

  // ═══════════════════════════════════════════════════
  // NEGOCIOS (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'inmobiliaria-elite',
    name: 'Inmobiliaria Elite',
    category: 'Negocios',
    description: 'Gris pizarra con toques dorados. Para agencias inmobiliarias.',
    config: {
      accent_color: '#475569',
      background_color: '#f8fafc',
      text_color: '#1e293b',
      card_style: 'shadow',
      layout: 'cards',
      header_style: 'left',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'contabilidad-clara',
    name: 'Contabilidad Clara',
    category: 'Negocios',
    description: 'Verde confianza y estructura limpia. Para contables y gestores.',
    config: {
      accent_color: '#059669',
      background_color: '#ecfdf5',
      text_color: '#064e3b',
      card_style: 'bordered',
      layout: 'list',
      header_style: 'minimal',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'finanzas-solidas',
    name: 'Finanzas Solidas',
    category: 'Negocios',
    description: 'Azul corporativo serio. Para asesores financieros.',
    config: {
      accent_color: '#1d4ed8',
      background_color: '#f0f4ff',
      text_color: '#1e3a5f',
      card_style: 'sharp',
      layout: 'grid',
      header_style: 'centered',
      font_style: 'serif',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },

  // ═══════════════════════════════════════════════════
  // SERVICIOS (3)
  // ═══════════════════════════════════════════════════
  {
    id: 'fontaneria-pro',
    name: 'Fontaneria Pro',
    category: 'Servicios',
    description: 'Azul agua con estilo profesional. Para fontaneros y tecnicos.',
    config: {
      accent_color: '#0369a1',
      background_color: '#f0f9ff',
      text_color: '#0c4a6e',
      card_style: 'rounded',
      layout: 'list',
      header_style: 'banner',
      font_style: 'bold',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'chispa-electrica',
    name: 'Chispa Electrica',
    category: 'Servicios',
    description: 'Amarillo electrico con negro. Para electricistas.',
    config: {
      accent_color: '#ca8a04',
      background_color: '#fefce8',
      text_color: '#713f12',
      card_style: 'shadow',
      layout: 'grid',
      header_style: 'hero',
      font_style: 'modern',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
  {
    id: 'limpieza-brillante',
    name: 'Limpieza Brillante',
    category: 'Servicios',
    description: 'Celeste fresco y limpio. Para empresas de limpieza.',
    config: {
      accent_color: '#0891b2',
      background_color: '#ecfeff',
      text_color: '#164e63',
      card_style: 'pill',
      layout: 'cards',
      header_style: 'centered',
      font_style: 'rounded',
      show_stats: true,
      show_contact: true,
      dark_mode: false,
    },
  },
]

export function getMiniSiteTemplateById(id: string): MiniSiteTemplate | undefined {
  return miniSiteTemplates.find((t) => t.id === id)
}

export function getMiniSiteTemplatesByCategory(category: string): MiniSiteTemplate[] {
  if (category === 'Todas') return miniSiteTemplates
  return miniSiteTemplates.filter((t) => t.category === category)
}
