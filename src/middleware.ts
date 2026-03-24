import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)

  // Set locale header based on path for root layout to read
  const isEnglish = request.nextUrl.pathname.startsWith('/en')
  const res = response || NextResponse.next()
  res.headers.set('x-locale', isEnglish ? 'en' : 'es')

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|widget.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
