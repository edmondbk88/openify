import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { PLAN_LIMITS, STRIPE_PRICES } from '@/lib/constants'
import { UpgradeButton } from '@/components/dashboard/upgrade-button'
import type { Plan } from '@/types'

export const metadata = {
  title: 'Facturación - Opinafy',
}

const planLabels: Record<Plan, string> = {
  free: 'Gratuito',
  pro: 'Pro',
  business: 'Business',
}

const planBadgeColors: Record<Plan, string> = {
  free: 'bg-gray-100 text-gray-700',
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

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan, stripe_subscription_id')
    .eq('id', user.id)
    .single()

  const currentPlan: Plan = (profile?.plan as Plan) ?? 'free'
  const hasSubscription = !!profile?.stripe_subscription_id
  const limits = PLAN_LIMITS[currentPlan]

  return (
    <div className="mx-auto max-w-4xl">
      {/* Error/Success messages */}
      {params.error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {params.error === 'error_interno' && 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.'}
          {params.error === 'plan_invalido' && 'El plan seleccionado no es válido.'}
          {params.error === 'precio_no_configurado' && 'El precio no está configurado. Contacta con soporte.'}
          {params.error === 'sin_suscripcion' && 'No tienes una suscripción activa.'}
        </div>
      )}
      {params.checkout === 'success' && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ¡Tu plan ha sido actualizado correctamente! Los cambios pueden tardar unos segundos en reflejarse.
        </div>
      )}
      {params.checkout === 'cancelled' && (
        <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
          Has cancelado el proceso de pago. No se ha realizado ningún cargo.
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Facturación</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gestiona tu plan y suscripción.
        </p>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Plan actual
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${planBadgeColors[currentPlan]}`}
              >
                {planLabels[currentPlan]}
              </span>
              {currentPlan === 'free' && (
                <span className="text-sm text-gray-500">
                  {limits.projects} proyecto, {limits.testimonials} testimonios
                </span>
              )}
              {currentPlan !== 'free' && (
                <span className="text-sm text-gray-500">
                  {limits.projects === Infinity
                    ? 'Proyectos ilimitados'
                    : `${limits.projects} proyectos`}
                  , testimonios ilimitados
                </span>
              )}
            </div>
          </div>
          {hasSubscription && <ManageSubscriptionButton />}
        </div>
      </div>

      {/* Upgrade Cards (only if free plan) */}
      {currentPlan === 'free' && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Mejora tu plan
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Desbloquea más funciones para hacer crecer tu negocio.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Pro Plan */}
            <div className="rounded-xl border-2 border-indigo-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Popular
                </span>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {STRIPE_PRICES.pro.price}€
                </span>
                <span className="text-sm text-gray-500">/mes</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> 3 proyectos
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Testimonios ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Todos los diseños de widget
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Sin marca de Opinafy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CrossIcon />
                  <span className="text-gray-400">Testimonios en vídeo</span>
                </li>
              </ul>
              <div className="mt-6">
                <UpgradeButton
                  plan="pro"
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
                >
                  Mejorar a Pro
                </UpgradeButton>
              </div>
            </div>

            {/* Business Plan */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">Business</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {STRIPE_PRICES.business.price}€
                </span>
                <span className="text-sm text-gray-500">/mes</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Proyectos ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Testimonios ilimitados
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Todos los diseños de widget
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Sin marca de Opinafy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> Testimonios en vídeo
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> 3 usuarios del equipo
                </li>
              </ul>
              <div className="mt-6">
                <UpgradeButton
                  plan="business"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
                >
                  Mejorar a Business
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
            Comparación de planes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left font-medium text-gray-500">
                  Característica
                </th>
                <th className="px-6 py-3 text-center font-medium text-gray-500">
                  Gratuito
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
                <td className="px-6 py-3 text-gray-700">Proyectos</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">3</td>
                <td className="px-6 py-3 text-center text-gray-600">
                  Ilimitados
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">Testimonios</td>
                <td className="px-6 py-3 text-center text-gray-600">10</td>
                <td className="px-6 py-3 text-center text-gray-600">
                  Ilimitados
                </td>
                <td className="px-6 py-3 text-center text-gray-600">
                  Ilimitados
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">Diseños de widget</td>
                <td className="px-6 py-3 text-center text-gray-600">2</td>
                <td className="px-6 py-3 text-center text-gray-600">5</td>
                <td className="px-6 py-3 text-center text-gray-600">5</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">
                  Eliminar marca Opinafy
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
                  Testimonios en vídeo
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
                <td className="px-6 py-3 text-gray-700">Usuarios del equipo</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">1</td>
                <td className="px-6 py-3 text-center text-gray-600">3</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-gray-700">Precio</td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  0€
                </td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  {STRIPE_PRICES.pro.price}€/mes
                </td>
                <td className="px-6 py-3 text-center font-medium text-gray-900">
                  {STRIPE_PRICES.business.price}€/mes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
