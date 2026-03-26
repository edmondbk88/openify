// Platform definitions for imported testimonials

export interface Platform {
  name: string
  color: string
  icon: string // Inline SVG
  description: string
}

export const PLATFORMS: Record<string, Platform> = {
  google: {
    name: 'Google Reviews',
    color: '#4285F4',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',
    description: 'Copia y pega tus reseñas de Google Maps',
  },
  tripadvisor: {
    name: 'TripAdvisor',
    color: '#00AF87',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6.5" cy="13.5" r="2.5" fill="#00AF87"/><circle cx="17.5" cy="13.5" r="2.5" fill="#00AF87"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00AF87"/><path d="M12 8l-2 4h4l-2-4z" fill="#00AF87"/></svg>',
    description: 'Importa tus opiniones de TripAdvisor',
  },
  trustpilot: {
    name: 'Trustpilot',
    color: '#00B67A',
    icon: '<svg viewBox="0 0 24 24" fill="#00B67A"><path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/></svg>',
    description: 'Trae tus reseñas de Trustpilot',
  },
  facebook: {
    name: 'Facebook',
    color: '#1877F2',
    icon: '<svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    description: 'Importa recomendaciones de Facebook',
  },
  yelp: {
    name: 'Yelp',
    color: '#D32323',
    icon: '<svg viewBox="0 0 24 24" fill="#D32323"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
    description: 'Importa reseñas de Yelp',
  },
  capterra: {
    name: 'Capterra',
    color: '#FF9D28',
    icon: '<svg viewBox="0 0 24 24" fill="#FF9D28"><path d="M2 4l8 2v12l-8 2V4zm10 0l8 2v12l-8 2V4zm-1 0v16l1-0.25V4.25L11 4z"/></svg>',
    description: 'Importa reseñas de Capterra',
  },
  g2: {
    name: 'G2',
    color: '#FF492C',
    icon: '<svg viewBox="0 0 24 24" fill="#FF492C"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4.5-4.5c0 1.38-1.12 2.5-2.5 2.5h-2v-2h2c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5H11c-1.38 0-2.5-1.12-2.5-2.5v-1C8.5 5.62 9.62 4.5 11 4.5h4v2h-4c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h2c1.38 0 2.5 1.12 2.5 2.5v1z"/></svg>',
    description: 'Importa reseñas de G2',
  },
  form: {
    name: 'Formulario',
    color: '#6366f1',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/></svg>',
    description: 'Recibido por formulario',
  },
}

export const IMPORTABLE_PLATFORMS = Object.entries(PLATFORMS)
  .filter(([key]) => key !== 'form')
  .map(([key, platform]) => ({ key, ...platform }))

export function getPlatform(key: string): Platform | undefined {
  return PLATFORMS[key]
}
