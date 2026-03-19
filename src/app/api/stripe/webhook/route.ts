import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import { STRIPE_PRICES } from '@/lib/constants'
import { enforceDowngradeLimits } from '@/lib/plan-enforcement'
import { Plan } from '@/types'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Firma no proporcionada' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Firma inválida'
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 })
  }

  const supabase = createAdminClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        if (session.mode !== 'subscription') break

        const subscriptionId = session.subscription as string
        const customerId = session.customer as string
        const userId = session.metadata?.supabase_user_id

        if (!userId) break

        // Get subscription to determine the plan
        const subscription = await getStripe().subscriptions.retrieve(subscriptionId)
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
        const subscription = event.data.object as Stripe.Subscription
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
          const planOrder: Record<Plan, number> = { free: 0, pro: 1, business: 2 }
          if (planOrder[plan] < planOrder[oldPlan]) {
            await enforceDowngradeLimits(profile.id, plan)
          }
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
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
  return 'free'
}
