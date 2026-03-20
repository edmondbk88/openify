import { Plan, PlanLimits, WidgetLayout } from '@/types'

export const PLAN_LIMITS: Record<Plan, PlanLimits> = {
  free: {
    projects: 1,
    testimonials: 10,
    video: false,
    audio: true,
    removeBranding: false,
    layouts: ['carousel', 'grid'] as WidgetLayout[],
    seats: 1,
    miniSite: false,
  },
  minisite: {
    projects: 1,
    testimonials: 20,
    video: false,
    audio: true,
    removeBranding: false,
    layouts: ['carousel', 'grid'] as WidgetLayout[],
    seats: 1,
    miniSite: true,
  },
  pro: {
    projects: 3,
    testimonials: Infinity,
    video: false,
    audio: true,
    removeBranding: true,
    layouts: ['carousel', 'grid', 'wall', 'single', 'badge', 'popup'] as WidgetLayout[],
    seats: 1,
    miniSite: true,
  },
  business: {
    projects: 20,
    testimonials: Infinity,
    video: true,
    audio: true,
    removeBranding: true,
    layouts: ['carousel', 'grid', 'wall', 'single', 'badge', 'popup'] as WidgetLayout[],
    seats: 3,
    miniSite: true,
  },
}

export const STRIPE_PRICES = {
  minisite: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_MINISITE_MONTHLY_PRICE_ID || '',
    name: 'Mini Sitio',
    price: 5,
  },
  pro: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID || '',
    name: 'Pro',
    price: 9,
  },
  business: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID || '',
    name: 'Business',
    price: 19,
  },
} as const

export const APP_CONFIG = {
  name: 'Opinafy',
  description: 'La plataforma #1 en español para recopilar y mostrar testimonios de clientes. Aumenta tu credibilidad y convierte más visitantes en clientes.',
  url: 'https://opinafy.com',
  ogImage: 'https://opinafy.com/og.png',
  creator: 'Opinafy',
  keywords: [
    'testimonios',
    'reseñas de clientes',
    'social proof',
    'prueba social',
    'widget testimonios',
    'recopilar testimonios',
    'testimonios clientes',
    'opiniones clientes',
    'reseñas web',
    'widget reseñas',
    'testimonios para web',
    'herramienta testimonios español',
    'plataforma testimonios',
    'testimonios SaaS',
    'opiniones para web',
  ],
}

export const WIDGET_LAYOUTS: { value: WidgetLayout; label: string; description: string; proOnly: boolean }[] = [
  { value: 'carousel', label: 'Carrusel', description: 'Testimonios que rotan automáticamente', proOnly: false },
  { value: 'grid', label: 'Cuadrícula', description: 'Testimonios en columnas ordenadas', proOnly: false },
  { value: 'wall', label: 'Muro (Masonry)', description: 'Diseño tipo Pinterest con alturas variables', proOnly: true },
  { value: 'single', label: 'Destacado', description: 'Un solo testimonio grande y prominente', proOnly: true },
  { value: 'badge', label: 'Badge Flotante', description: 'Badge compacto en esquina de la página', proOnly: true },
  { value: 'popup', label: 'Popup FOMO', description: 'Popup con la última reseña para generar confianza', proOnly: true },
]

export const DEFAULT_BRAND_COLOR = '#6366f1'
export const DEFAULT_COLLECTION_TITLE = '¿Qué opinas de nuestro servicio?'
export const DEFAULT_THANK_YOU_MESSAGE = '¡Muchas gracias por tu testimonio! Tu opinión es muy valiosa para nosotros.'

export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/webm']
export const MAX_VIDEO_SIZE = 50 * 1024 * 1024 // 50MB
export const ACCEPTED_AUDIO_TYPES = ['audio/webm', 'audio/ogg', 'audio/mp4']
export const MAX_AUDIO_SIZE = 10 * 1024 * 1024 // 10MB
