import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { absoluteUrl } from '@/lib/utils'
import { STRIPE_PRICES } from '@/lib/constants'
import type { Plan } from '@/types'

const STRIPE_API = 'https://api.stripe.com/v1'

async function stripeRequest(endpoint: string, params: Record<string, string>) {
  const res = await fetch(`${STRIPE_API}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params).toString(),
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error?.message || `Stripe API error: ${res.status}`)
  }
  return data
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json().catch(() => ({}))
    const plan = body.plan as string | null

    if (!plan || !['pro', 'business'].includes(plan)) {
      return NextResponse.json({ error: 'Plan inválido' }, { status: 400 })
    }

    let priceId = STRIPE_PRICES[plan as Exclude<Plan, 'free'>].monthly
    if (!priceId) {
      priceId = plan === 'pro'
        ? (process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID || '')
        : (process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID || '')
    }

    if (!priceId) {
      return NextResponse.json({ error: 'Precio no configurado' }, { status: 500 })
    }

    const admin = createAdminClient()
    const { data: profile } = await admin
      .from('profiles')
      .select('stripe_customer_id, email, full_name')
      .eq('id', user.id)
      .single()

    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await stripeRequest('/customers', {
        email: user.email || profile?.email || '',
        ...(profile?.full_name ? { name: profile.full_name } : {}),
        'metadata[supabase_user_id]': user.id,
      })
      customerId = customer.id

      await admin
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id)
    }

    const session = await stripeRequest('/checkout/sessions', {
      customer: customerId!,
      mode: 'subscription',
      'payment_method_types[0]': 'card',
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      success_url: absoluteUrl('/dashboard?checkout=success'),
      cancel_url: absoluteUrl('/facturacion?checkout=cancelled'),
      'metadata[supabase_user_id]': user.id,
    })

    if (!session.url) {
      return NextResponse.json({ error: 'No se pudo crear la sesión de pago' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[Stripe Checkout Error]', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
