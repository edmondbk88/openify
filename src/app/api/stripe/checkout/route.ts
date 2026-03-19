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
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // Parse plan from request body (JSON)
    const body = await request.json().catch(() => ({}))
    const plan = body.plan as string | null

    if (!plan || !['pro', 'business'].includes(plan)) {
      return NextResponse.json({ error: 'Plan inválido' }, { status: 400 })
    }

    // Get price ID
    let priceId = STRIPE_PRICES[plan as Exclude<Plan, 'free'>].monthly
    if (!priceId) {
      priceId = plan === 'pro'
        ? (process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID || '')
        : (process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID || '')
    }

    if (!priceId) {
      console.error('[Stripe Checkout] No price ID for plan:', plan)
      return NextResponse.json({ error: 'Precio no configurado' }, { status: 500 })
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

    if (!session.url) {
      return NextResponse.json({ error: 'No se pudo crear la sesión de pago' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[Stripe Checkout Error]', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
