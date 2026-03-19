import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'
import { STRIPE_PRICES } from '@/lib/constants'
import type { Plan } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.redirect(absoluteUrl('/login'), 303)
    }

    // Support both form data (from HTML forms) and JSON
    let plan: string | null = null

    const contentType = request.headers.get('content-type') || ''
    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData()
      plan = formData.get('plan') as string | null
    } else {
      const body = await request.json().catch(() => ({}))
      plan = body.plan || null
      // Also support direct priceId for API callers
      if (!plan && body.priceId) {
        plan = body.priceId === STRIPE_PRICES.business.monthly ? 'business' : 'pro'
      }
    }

    if (!plan || !['pro', 'business'].includes(plan)) {
      return NextResponse.redirect(absoluteUrl('/facturacion?error=plan_invalido'), 303)
    }

    // Get price ID - use env vars directly as fallback in case STRIPE_PRICES was empty at build time
    let priceId = STRIPE_PRICES[plan as Exclude<Plan, 'free'>].monthly
    if (!priceId) {
      priceId = plan === 'pro'
        ? (process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID || '')
        : (process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID || '')
    }

    if (!priceId) {
      console.error('[Stripe Checkout] No price ID for plan:', plan)
      return NextResponse.redirect(absoluteUrl('/facturacion?error=precio_no_configurado'), 303)
    }

    // Get or create Stripe customer
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id, email, full_name')
      .eq('id', user.id)
      .single()

    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await getStripe().customers.create({
        email: user.email,
        name: profile?.full_name || undefined,
        metadata: { supabase_user_id: user.id },
      })
      customerId = customer.id

      await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id)
    }

    const session = await getStripe().checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: absoluteUrl('/dashboard?checkout=success'),
      cancel_url: absoluteUrl('/facturacion?checkout=cancelled'),
      metadata: { supabase_user_id: user.id },
    })

    if (session.url) {
      return NextResponse.redirect(session.url, 303)
    }

    return NextResponse.redirect(absoluteUrl('/facturacion?error=sesion_no_creada'), 303)
  } catch (err) {
    console.error('[Stripe Checkout Error]', err instanceof Error ? err.message : err)
    return NextResponse.redirect(absoluteUrl('/facturacion?error=error_interno'), 303)
  }
}
