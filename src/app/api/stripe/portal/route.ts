import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.redirect(absoluteUrl('/login'))
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (!profile?.stripe_customer_id) {
      return NextResponse.redirect(absoluteUrl('/facturacion?error=sin_suscripcion'))
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: absoluteUrl('/facturacion'),
    })

    return NextResponse.redirect(session.url)
  } catch {
    return NextResponse.redirect(absoluteUrl('/facturacion?error=error_interno'))
  }
}
