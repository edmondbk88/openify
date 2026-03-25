import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Características de Opinafy - Todas las funciones de la plataforma de testimonios',
  description:
    'Descubre todas las funcionalidades de Opinafy: widgets embebibles, video testimonios, verificación doble, 100+ plantillas, mini sitio público, importación desde Google, A/B testing, Health Score y más. La plataforma de testimonios más completa en español.',
  keywords: [
    'características opinafy',
    'funciones plataforma testimonios',
    'widget testimonios embebible',
    'video testimonios',
    'verificación testimonios',
    'plantillas testimonios',
    'mini sitio testimonios',
    'importar reseñas google',
    'testimonios español',
    'prueba social funcionalidades',
  ],
  alternates: {
    canonical: 'https://opinafy.com/caracteristicas',
    languages: {
      'es': 'https://opinafy.com/caracteristicas',
      'en': 'https://opinafy.com/en/features',
      'x-default': 'https://opinafy.com/caracteristicas',
    },
  },
  openGraph: {
    title: 'Características de Opinafy - Todas las funciones de la plataforma de testimonios',
    description:
      'Widgets embebibles, video testimonios, verificación doble, 100+ plantillas, mini sitio y más. Todo lo que necesitas para gestionar testimonios.',
    url: 'https://opinafy.com/caracteristicas',
    type: 'website',
    siteName: 'Opinafy',
    locale: 'es_ES',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Características de Opinafy - Todas las funciones',
    description:
      'Widgets embebibles, video testimonios, verificación doble, 100+ plantillas y más. La plataforma de testimonios más completa en español.',
    images: ['/og.png'],
  },
}

/* ────────────────────────────────────────────── */
/*  Data arrays for feature sections              */
/* ────────────────────────────────────────────── */

const heroStats = [
  { value: '100+', label: 'Plantillas personalizables' },
  { value: '160+', label: 'Industrias cubiertas' },
  { value: '50+', label: 'Funcionalidades' },
  { value: '8', label: 'Integraciones' },
]

const coreFeatures = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Widget embebible con Shadow DOM',
    description:
      'Integra testimonios en cualquier web con un widget ligero (~25KB) que usa Shadow DOM para aislamiento CSS perfecto. 7 layouts disponibles: grid, masonry, carousel, lista, ticker, badge y FOMO popup.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: '100+ plantillas personalizables',
    description:
      'Elige entre más de 65 plantillas diseñadas profesionalmente para widgets y mini sitios. Personaliza colores, fuentes (8 Google Fonts), bordes, sombras y más para que coincidan con tu marca.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Verificación por email',
    description:
      'Cada testimonio se verifica automáticamente por email. El autor debe confirmar su dirección antes de que el testimonio se publique, garantizando autenticidad y reduciendo spam.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Verificación automática de empresa',
    description:
      'Opinafy cruza automáticamente el dominio del email del autor con la empresa mencionada. Verificación doble (email + empresa) para testimonios con la máxima credibilidad.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.264 2.16M12 10.5c2.998 0 5.74 1.1 7.843 2.918M3.264 11.91a8.959 8.959 0 00-.264 2.16" />
      </svg>
    ),
    title: 'Mini sitio público',
    description:
      'Cada cuenta tiene un mini sitio público en opinafy.com/s/tu-usuario con todos tus testimonios verificados. Ideal para compartir por WhatsApp, email o redes sociales. 30+ plantillas de mini sitio.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Video testimonios (webcam)',
    description:
      'Graba vídeo testimonios directamente desde el navegador con la webcam del cliente. Sin apps externas, sin complicaciones. La grabación webcam obligatoria maximiza la autenticidad.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Audio testimonios',
    description:
      'Para clientes que prefieren hablar, ofrece grabación de audio directa desde el navegador. Perfecto para capturar emociones genuinas y testimonios más detallados.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    title: 'Photo testimonios',
    description:
      'Los clientes pueden subir una foto junto a su testimonio. Las fotos reales aumentan la confianza y las conversiones hasta un 35% más que los testimonios solo texto.',
  },
]

const differentiators = [
  {
    icon: '🇪🇸',
    title: '100% en español (+ inglés)',
    description: 'Interfaz, emails, formularios y soporte nativos en español. Dashboard bilingüe ES/EN. La primera plataforma de testimonios pensada para el mercado hispanohablante.',
  },
  {
    icon: '💰',
    title: 'Precios desde 5 EUR/mes',
    description: 'Hasta 3 veces más barato que Testimonial.to o Senja. Plan gratuito sin límite de tiempo. Sin trucos, sin sorpresas.',
  },
  {
    icon: '✅',
    title: 'Verificación doble (email + empresa)',
    description: 'La única plataforma que verifica tanto el email del autor como la empresa asociada. Testimonios con credibilidad máxima.',
  },
  {
    icon: '🎥',
    title: 'Grabación webcam obligatoria',
    description: 'Opción de requerir vídeo en el formulario de recopilación. Testimonios en vídeo generan 2x más confianza que solo texto.',
  },
  {
    icon: '🌐',
    title: 'Mini sitio personalizable',
    description: 'Cada cuenta incluye una página pública con todos sus testimonios. URL corta para compartir por WhatsApp, email, LinkedIn o Instagram. 30 plantillas por profesión.',
  },
  {
    icon: '🔔',
    title: 'FOMO Popup widget',
    description: 'Widget tipo notificación que muestra testimonios recientes como popups discretos. Ideal para aumentar conversiones en páginas de venta.',
  },
  {
    icon: '🏆',
    title: 'Certificación y Ranking',
    description: 'Sistema de certificación por niveles (Bronce, Plata, Oro, Platino) y ranking/leaderboard público. Badge verificado dinámico (SVG) para tu web.',
  },
  {
    icon: '🩺',
    title: 'Health Score gratuito',
    description: 'Analizador gratuito de tu presencia online. Evalúa tu web y te da recomendaciones para mejorar tu prueba social y reputación.',
  },
  {
    icon: '📊',
    title: 'Calculadora ROI',
    description: 'Calcula el retorno de inversión de tus testimonios. Descubre cuánto impacto tienen en tus ventas con datos reales.',
  },
]

const businessFeatures = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    title: 'Importar desde 8 plataformas',
    description: 'Importa reseñas existentes desde Google Maps, TripAdvisor, Trustpilot, Facebook, Yelp, Capterra, G2 y Clutch. Centraliza toda tu prueba social.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'A/B testing de testimonios',
    description: 'Prueba diferentes testimonios en tu widget y descubre cuáles generan más conversiones. Optimiza tu prueba social con datos reales.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Sentiment analysis en español',
    description: 'Análisis automático del sentimiento de cada testimonio, optimizado para español. Identifica temas recurrentes y tendencias en tu feedback.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Analytics de conversión',
    description: 'Mide impresiones, clics y conversiones de tus widgets. Entiende qué testimonios y layouts generan más impacto en tus ventas.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Webhooks (Zapier, Make)',
    description: 'Recibe notificaciones automáticas cuando llega un nuevo testimonio. Conecta con Zapier, Make, n8n o cualquier herramienta de automatización.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'PDF export',
    description: 'Exporta tus mejores testimonios como un PDF profesional. Ideal para presentaciones comerciales, propuestas y material de ventas.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      </svg>
    ),
    title: 'QR code + WhatsApp sharing',
    description: 'Genera códigos QR para tu formulario de recopilación. Comparte por WhatsApp con un toque. Perfecto para negocios locales, restaurantes y comercios.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Automatización de solicitudes',
    description: 'Programa emails automáticos para solicitar testimonios a tus clientes. Secuencias de seguimiento inteligentes con 6 plantillas pre-diseñadas.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: 'Generador de posts sociales (IA)',
    description: 'Convierte testimonios en 5 formatos de posts para redes sociales con IA. Genera contenido para Instagram, LinkedIn, Twitter, Facebook y más.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    ),
    title: 'Respuesta del propietario',
    description: 'Responde públicamente a tus testimonios. Muestra atención al cliente y engagement con tu comunidad directamente en el widget.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Testimonios destacados/fijados',
    description: 'Fija tus mejores testimonios en la parte superior del widget. Controla qué opiniones ven primero tus visitantes.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'Smart widget (filtrado por data-tags)',
    description: 'Filtra testimonios por etiquetas directamente en el embed. Muestra testimonios relevantes según la página o producto.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-2.625 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    title: '4 modos de vídeo',
    description: 'Muestra vídeo testimonios en 4 formatos diferentes: inline, modal, galería y thumbnail. Elige el que mejor encaje en tu web.',
  },
]

const devFeatures = [
  { title: 'Widget Shadow DOM (~25KB)', description: 'Aislamiento CSS total, sin conflictos con tu sitio. Carga ultrarrápida.' },
  { title: '8 Google Fonts incluidas', description: 'Inter, Poppins, Roboto, Open Sans, Lato, Montserrat, Playfair Display y Raleway.' },
  { title: 'REST API completa', description: 'Accede a testimonios, widgets y analytics programáticamente.' },
  { title: 'WordPress plugin', description: 'Instala el widget en WordPress con un plugin dedicado. Sin código.' },
  { title: 'Shopify app', description: 'Integra testimonios en tu tienda Shopify con un bloque nativo.' },
  { title: 'Wix, Squarespace, Webflow', description: 'Guías paso a paso y código embed para cada plataforma.' },
  { title: 'PrestaShop y WooCommerce', description: 'Compatibilidad total con las plataformas de ecommerce más usadas en España.' },
  { title: 'Google Tag Manager', description: 'Integra el widget vía GTM sin tocar el código de tu web.' },
  { title: 'Embed code (1 línea)', description: 'Copia y pega una sola línea de HTML. Funciona en cualquier web.' },
]

const securityFeatures = [
  { title: 'RGPD compliant', description: 'Cumplimiento total del Reglamento General de Protección de Datos de la UE. Consentimiento explícito, derecho al olvido y portabilidad.' },
  { title: 'Cookie consent integrado', description: 'Banner de cookies conforme a la normativa europea incluido en todos los widgets y mini sitios.' },
  { title: 'Cifrado HTTPS', description: 'Todas las comunicaciones cifradas con TLS 1.3. Datos en tránsito siempre protegidos.' },
  { title: 'RLS en base de datos', description: 'Row Level Security en PostgreSQL (Supabase). Cada usuario solo accede a sus propios datos, a nivel de base de datos.' },
  { title: 'Stripe para pagos', description: 'Procesamiento de pagos mediante Stripe, certificado PCI DSS nivel 1. Nunca almacenamos datos de tarjeta.' },
]

const supportFeatures = [
  { title: 'Sistema de tickets', description: 'Soporte técnico con seguimiento de tickets desde el dashboard. Respuesta en menos de 24h.' },
  { title: 'Notificaciones in-app', description: 'Recibe alertas cuando llegan nuevos testimonios, se verifican o requieren moderación. Centro de notificaciones integrado.' },
  { title: 'Dashboard multiidioma (ES/EN)', description: 'Cambia el idioma del dashboard con un clic. Interfaz completa en español e inglés.' },
  { title: 'Guías de instalación', description: 'Guías paso a paso para WordPress, Shopify, Wix, Squarespace, Webflow y Google Tag Manager.' },
  { title: 'Changelog público', description: 'Mantente al día de todas las novedades y mejoras de la plataforma. Actualizaciones frecuentes con nuevas funcionalidades.' },
  { title: '421 páginas de ciudad+industria', description: 'Contenido SEO específico para tu ciudad e industria. Descubre cómo Opinafy ayuda a negocios como el tuyo en tu zona.' },
]

export default function CaracteristicasPage() {
  const pageJsonLd = webPageSchema({
    name: 'Características de Opinafy - Todas las funciones de la plataforma de testimonios',
    url: 'https://opinafy.com/caracteristicas',
    description:
      'Descubre todas las funcionalidades de Opinafy: widgets embebibles, video testimonios, verificación doble, 100+ plantillas, A/B testing, Health Score, automatización y más.',
  })

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Inicio', url: 'https://opinafy.com' },
    { name: 'Características', url: 'https://opinafy.com/caracteristicas' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Plataforma completa de testimonios
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Todo lo que necesitas para gestionar testimonios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100 sm:text-xl">
            La plataforma de testimonios más completa en español. Recopila, verifica, gestiona y muestra prueba social que convierte visitantes en clientes.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-sm">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-indigo-200">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/registro"
              className="inline-flex h-12 items-center rounded-xl bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Empieza gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex h-12 items-center rounded-xl border-2 border-white/30 px-8 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Funcionalidades principales</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitas, nada que te sobre
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Cada función diseñada para maximizar la recopilación y el impacto de tus testimonios.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Dashboard screenshot */}
          <div className="mt-16 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/dashboard.png" alt="Panel de control de Opinafy con estadísticas y sidebar" width={1440} height={900} className="w-full" />
          </div>
        </div>
      </section>

      {/* ── Diferenciadores ── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Lo que nos hace diferentes</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Por qué elegir Opinafy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              No somos una copia más de herramientas anglosajonas. Somos la alternativa pensada para ti.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Templates screenshot */}
          <div className="mt-16 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/plantilla-detalle.png" alt="Detalle de plantilla con vista previa del widget de testimonios" width={1440} height={900} className="w-full" />
          </div>
        </div>
      </section>

      {/* ── Para Negocios ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Para negocios</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Herramientas avanzadas para crecer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Importa reseñas, analiza sentimientos, automatiza procesos y mide el impacto de tus testimonios en las ventas.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businessFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Collection form & mini site screenshots */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/collection-form.png" alt="Formulario público de recopilación de testimonios" width={1440} height={900} className="w-full" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
              <Image src="https://rckjevsqxkfixkdloqjv.supabase.co/storage/v1/object/public/logos/site/screenshots/mini-site.png" alt="Mini sitio público con testimonios verificados" width={1440} height={900} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Para Desarrolladores ── */}
      <section className="bg-gray-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Para desarrolladores</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Integración en minutos, no en días
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Una línea de código para empezar. REST API, plugins nativos y documentación completa para cuando necesites más.
            </p>
          </div>

          {/* Code snippet */}
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-gray-700 bg-gray-800">
            <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500">index.html</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="text-green-400">{'<script src="https://opinafy.com/widget.js" data-id="TU_ID"></script>'}</code>
            </pre>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 transition-all hover:border-indigo-500/50 hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/guias"
              className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Ver guías de instalación &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Seguridad y Legal ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Seguridad y legal</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tus datos, siempre protegidos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Cumplimiento normativo europeo, cifrado en todas las capas y seguridad a nivel de base de datos.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-5"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Soporte ── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Soporte</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nunca estarás solo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Soporte en español, documentación completa y guías paso a paso para cada plataforma.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {supportFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Empieza a recopilar testimonios hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Plan gratuito sin límite de tiempo. Sin tarjeta de crédito. Configura tu primer widget en menos de 5 minutos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/registro"
              className="inline-flex h-12 items-center rounded-xl bg-white px-8 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
            >
              Empieza gratis
            </Link>
            <Link
              href="/precios"
              className="inline-flex h-12 items-center rounded-xl border-2 border-white/30 px-8 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Comparar planes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
