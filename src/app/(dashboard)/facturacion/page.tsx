import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PLAN_LIMITS, STRIPE_PRICES } from '@/lib/constants'
import { UpgradeButton } from '@/components/dashboard/upgrade-button'
import { getUserLocale } from '@/lib/get-locale'
import { t } from '@/lib/i18n'
import type { Plan } from '@/types'
import type { Locale } from '@/lib/i18n'

export const metadata = {
  title: 'Facturaci\u00f3n - Opinafy',
}

function getPlanLabel(plan: Plan, locale: Locale): string {
  const labels: Record<Locale, Record<Plan, string>> = {
    es: { free: 'Gratuito', minisite: 'Mini Sitio', pro: 'Pro', business: 'Business' },
    en: { free: 'Free', minisite: 'Mini Site', pro: 'Pro', business: 'Business' },
  }
  return labels[locale][plan]
}

const planBadgeColors: Record<Plan, string> = {
  free: 'bg-gray-100 text-gray-700',
  minisite: 'bg-teal-100 text-teal-700',
  pro: 'bg-indigo-100 text-indigo-700',
  business: 'bg-purple-100 text-purple-700',
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  )
}

// ManageSubscriptionButton is now a client component import
import { ManageSubscriptionButton } from '@/components/dashboard/manage-subscription-button'

async function getSubscriptionDetails(subscriptionId: string) {
  if (!subscriptionId || !process.env.STRIPE_SECRET_KEY) return null

  try {
    const res = await fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
      headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = await res.json()
    return {
      currentPeriodEnd: new Date(data.current_period_end * 1000),
      cancelAtPeriodEnd: data.cancel_at_period_end as boolean,
      status: data.status as string,
    }
  } catch {
    return null
  }
}

export default async function FacturacionPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; checkout?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const locale = await getUserLocale()

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan, stripe_subscription_id')
    .eq('id', user.id)
    .single()

  const currentPlan: Plan = (profile?.plan as Plan) ?? 'free'
  const hasSubscription = !!profile?.stripe_subscription_id
  const limits = PLAN_LIMITS[currentPlan]

  const subscriptionDetails = hasSubscription
    ? await getSubscriptionDetails(profile!.stripe_subscription_id)
    : null

  const dateLocale = locale === 'en' ? 'en-US' : 'es-ES'

  return (
    <div className="mx-auto max-w-4xl">
      {/* Error/Success messages */}
      {params.error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {params.error === 'error_interno' && t('billing.errorInternal', locale)}
          {params.error === 'plan_invalido' && t('billing.errorInvalidPlan', locale)}
          {params.error === 'precio_no_configurado' && t('billing.errorPriceNotConfigured', locale)}
          {params.error === 'sin_suscripcion' && t('billing.errorNoSubscription', locale)}
        </div>
      )}
      {params.checkout === 'success' && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {t('billing.checkoutSuccess', locale)}
        </div>
      )}
      {params.checkout === 'cancelled' && (
        <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
          {t('billing.checkoutCancelled', locale)}
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('billing.title', locale)}</h1>
        <p className="mt-1 text-sm text-gray-500">
          {t('billing.subtitle', locale)}
        </p>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {t('billing.currentPlan', locale)}
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${planBadgeColors[currentPlan]}`}
              >
                {getPlanLabel(currentPlan, locale)}
              </span>
              {currentPlan === 'free' && (
                <span className="text-sm text-gray-500">
                  {limits.projects} {t('billing.project', locale)}, {limits.testimonials} {t('billing.testimonials', locale)}
                </span>
              )}
              {currentPlan !== 'free' && (
                <span className="text-sm text-gray-500">
                  {limits.projects === Infinity
                    ? t('billing.unlimitedProjects', locale)
                    : `${limits.projects} ${limits.projects === 1 ? t('billing.project', locale) : t('billing.projects', locale)}`}
                  , {limits.testimonials === Infinity
                    ? t('billing.unlimitedTestimonials', locale)
                    : `${limits.testimonials} ${t('billing.testimonials', locale)}`}
                </span>
              )}
            </div>
            {subscriptionDetails && (
              <p className={`mt-2 text-sm ${subscriptionDetails.cancelAtPeriodEnd ? 'text-red-600' : 'text-green-600'}`}>
                {subscriptionDetails.cancelAtPeriodEnd
                  ? `${t('billing.cancelsOn', locale)} ${subscriptionDetails.currentPeriodEnd.toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}`
                  : `${t('billing.renewsOn', locale)} ${subscriptionDetails.currentPeriodEnd.toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}`}
              </p>
            )}
          </div>
          {hasSubscription && <ManageSubscriptionButton />}
        </div>
      </div>

      {/* Upgrade Cards (show if not on highest plan) */}
      {currentPlan !== 'business' && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            {t('billing.upgrade', locale)}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {t('billing.upgradeSubtitle', locale)}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Mini Sitio Plan */}
            {currentPlan === 'free' && (
              <div className="rounded-xl border border-teal-200 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">{getPlanLabel('minisite', locale)}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {STRIPE_PRICES.minisite.price}€
                  </span>
                  <span className="text-sm text-gray-500">{t('billing.month', locale)}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon /> 1 {t('billing.project', locale)}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon /> 20 {t('billing.testimonials', locale)}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon /> {t('billing.miniSiteCustomizable', locale)}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon /> 2 {t('billing.layouts', locale)}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CrossIcon />
                    <span className="text-gray-400">{t('billing.noBranding', locale)}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <UpgradeButton
                    plan="minisite"
                    className="w-full rounded-lg border border-teal-300 bg-white px-4 py-2.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50 disabled:opacity-50"
                  >
                    {t('billing.upgradeTo', locale).replace('{plan}', getPlanLabel('minisite', locale))}
                  </UpgradeButton>
                </div>
              </div>
            )}

            {/* Pro Plan */}
            {(currentPlan === 'free' || currentPlan === 'minisite') && (
            <div className="rounded-xl border-2 border-indigo-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {t('billing.popular', locale)}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {STRIPE_PRICES.pro.price}€
                </span>
                <span className="text-sm text-gray-500">{t('billing.month', locale)}</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> 3 {t('billing.projects', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.unlimited', locale)} {t('billing.testimonials', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.allWidgets', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.noBranding', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.miniSitePublic', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CrossIcon />
                  <span className="text-gray-400">{t('billing.videoTestimonials', locale)}</span>
                </li>
              </ul>
              <div className="mt-6">
                <UpgradeButton
                  plan="pro"
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                >
                  {t('billing.upgradeTo', locale).replace('{plan}', 'Pro')}
                </UpgradeButton>
              </div>
            </div>
            )}

            {/* Business Plan */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">Business</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {STRIPE_PRICES.business.price}€
                </span>
                <span className="text-sm text-gray-500">{t('billing.month', locale)}</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> 20 {t('billing.projects', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.unlimited', locale)} {t('billing.testimonials', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.allWidgets', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.noBranding', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {t('billing.videoTestimonials', locale)}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> 3 {t('billing.teamUsers', locale)}
                </li>
              </ul>
              <div className="mt-6">
                <UpgradeButton
                  plan="business"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
                >
                  {t('billing.upgradeTo', locale).replace('{plan}', 'Business')}
                </UpgradeButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plan Comparison Table */}
      <div className="mt-10 rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {t('billing.comparison', locale)}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left font-medium text-gray-500">
                  {t('billing.feature', locale)}
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-500">
                  {getPlanLabel('free', locale)}
                </th>
                <th className="px-6 py-3 text-center font-medium text-teal-600">
                  {getPlanLabel('minisite', locale)}
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-500">
                  Pro
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-500">
                  Business
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.projects', locale)}</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">3</td>
                <td className="px-6 py-3 text-center text-gray-600">20</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.testimonials', locale)}</td>
                <td className="px-6 py-3 text-center text-gray-600">10</td>
                <td className="px-6 py-3 text-center text-gray-600">20</td>
                <td className="px-6 py-3 text-center text-gray-600">
                  {t('billing.unlimited', locale)}
                </td>
                <td className="px-6 py-3 text-center text-gray-600">
                  {t('billing.unlimited', locale)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.miniSitePublic', locale)}</td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.widgetDesigns', locale)}</td>
                <td className="px-6 py-3 text-center text-gray-600">2</td>
                <td className="px-6 py-3 text-center text-gray-600">2</td>
                <td className="px-6 py-3 text-center text-gray-600">6</td>
                <td className="px-6 py-3 text-center text-gray-600">6</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">
                  {t('billing.removeBranding', locale)}
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">
                  {t('billing.videoTestimonials', locale)}
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CrossIcon />
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex justify-center">
                    <CheckIcon />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.teamUsers', locale)}</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">3</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">{t('billing.price', locale)}</td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  0€
                </td>
                <td className="px-6 py-3 text-center font-medium text-teal-700">
                  {STRIPE_PRICES.minisite.price}€{t('billing.month', locale)}
                </td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  {STRIPE_PRICES.pro.price}€{t('billing.month', locale)}
                </td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  {STRIPE_PRICES.business.price}€{t('billing.month', locale)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
