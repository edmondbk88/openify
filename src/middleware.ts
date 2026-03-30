import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

// Only run auth middleware on routes that need session management.
// Marketing pages (/blog, /plantillas, /precios, etc.) are ISR-cached
// and must NOT go through middleware that touches cookies/headers.
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/proyectos/:path*',
    '/configuración/:path*',
    '/facturación/:path*',
    '/mi-sitio/:path*',
    '/soporte/:path*',
    '/admin/:path*',
    '/login',
    '/registro',
    '/forgot-password',
    '/api/projects/:path*',
    '/api/testimonials/:path*',
    '/api/upload/:path*',
    '/api/profile/:path*',
    '/api/stripe/:path*',
    '/api/tickets/:path*',
    '/api/automation/:path*',
    '/api/admin/:path*',
    '/api/account/:path*',
    '/api/notifications/:path*',
    '/api/widget-preview/:path*',
    '/api/auth/:path*',
  ],
}
