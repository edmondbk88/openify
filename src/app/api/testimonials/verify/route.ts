import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

const VERIFICATION_EXPIRY_DAYS = 7

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  const id = request.nextUrl.searchParams.get('id')

  if (!token || !id) {
    return NextResponse.redirect(new URL('/verificado?estado=error', request.url))
  }

  try {
    const supabase = createAdminClient()

    // Find testimonial by id where verification_token matches
    const { data: testimonial } = await supabase
      .from('testimonials')
      .select('id, status, verification_token, created_at')
      .eq('id', id)
      .eq('verification_token', token)
      .single()

    if (!testimonial) {
      return NextResponse.redirect(new URL('/verificado?estado=error', request.url))
    }

    if (testimonial.status !== 'pending_verification') {
      // Already verified or in another state
      return NextResponse.redirect(new URL('/verificado?estado=ya_verificado', request.url))
    }

    // Check if the verification link has expired (7 days)
    const createdAt = new Date(testimonial.created_at)
    const now = new Date()
    const diffMs = now.getTime() - createdAt.getTime()
    const diffDays = diffMs / (1000 * 60 * 60 * 24)

    if (diffDays > VERIFICATION_EXPIRY_DAYS) {
      return NextResponse.redirect(
        new URL(`/verificado?estado=expirado&id=${id}`, request.url)
      )
    }

    // Update status to pending (awaiting owner approval)
    const { error } = await supabase
      .from('testimonials')
      .update({ status: 'pending' })
      .eq('id', id)

    if (error) {
      console.error('Error updating testimonial status:', error)
      return NextResponse.redirect(new URL('/verificado?estado=error', request.url))
    }

    return NextResponse.redirect(new URL('/verificado?estado=ok', request.url))
  } catch (err) {
    console.error('Verification error:', err)
    return NextResponse.redirect(new URL('/verificado?estado=error', request.url))
  }
}
