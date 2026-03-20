import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { STRIPE_PRICES } from '@/lib/constants'
import { enforceDowngradeLimits } from '@/lib/plan-enforcement'
import { Plan } from '@/types'
import crypto from 'crypto'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function verifyStripeWebhook(body: string, signature: string, secret: string): Record<string, any> {
  const parts = signature.split(',').reduce((acc, part) => {
    const [key, value] = part.split('=')
    acc[key] = value
    return acc
  }, {} as Record<string, string>)

  const timestamp = parts['t']
  const sig = parts['v1']

  if (!timestamp || !sig) throw new Error('Invalid signature format')

  const payload = `${timestamp}.${body}`
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex')

  if (expected !== sig) throw new Error('Invalid signature')

  return JSON.parse(body)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function stripeGet(endpoint: string): Promise<Record<string, any>> {
  const res = await fetch(`https://api.stripe.com/v1${endpoint}`, {
    headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` },
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error?.message || `Stripe API error: ${res.status}`)
  }
  return data
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Firma no proporcionada' }, { status: 400 })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let event: Record<string, any>

  try {
    event = verifyStripeWebhook(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Firma invalida'
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 })
  }

  const supabase = createAdminClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object

        if (session.mode !== 'subscription') break

        const subscriptionId = session.subscription as string
        const customerId = session.customer as string
        const userId = session.metadata?.supabase_user_id

        if (!userId) break

        // Get subscription to determine the plan via REST API
        const subscription = await stripeGet(`/subscriptions/${subscriptionId}`)
        const priceId = subscription.items.data[0]?.price.id
        const plan = getPlanFromPriceId(priceId)

        await supabase
          .from('profiles')
          .update({
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            plan,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer as string
        const priceId = subscription.items.data[0]?.price.id
        const plan = getPlanFromPriceId(priceId)

        // Find user by stripe_customer_id
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          // Fetch the old plan to detect downgrades
          const { data: oldProfile } = await supabase
            .from('profiles')
            .select('plan')
            .eq('id', profile.id)
            .single()

          const oldPlan = (oldProfile?.plan as Plan) || 'free'

          await supabase
            .from('profiles')
            .update({
              plan,
              stripe_subscription_id: subscription.id,
              updated_at: new Date().toISOString(),
            })
            .eq('id', profile.id)

          // If this is a downgrade, enforce the new plan limits
          const planOrder: Record<Plan, number> = { free: 0, minisite: 1, pro: 2, business: 3 }
          if (planOrder[plan] < planOrder[oldPlan]) {
            await enforceDowngradeLimits(profile.id, plan)
          }
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer as string

        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (profile) {
          await supabase
            .from('profiles')
            .update({
              plan: 'free',
              stripe_subscription_id: null,
              updated_at: new Date().toISOString(),
            })
            .eq('id', profile.id)

          // Enforce free plan limits on cancellation
          await enforceDowngradeLimits(profile.id, 'free')
        }

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: 'Error procesando webhook' }, { status: 500 })
  }
}

function getPlanFromPriceId(priceId: string): Plan {
  if (priceId === STRIPE_PRICES.business.monthly) return 'business'
  if (priceId === STRIPE_PRICES.pro.monthly) return 'pro'
  if (priceId === STRIPE_PRICES.minisite.monthly) return 'minisite'
  return 'free'
}
