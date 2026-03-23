import type { Metadata } from 'next'
import Link from 'next/link'
import { ResendVerificationButton } from './resend-button'

export const metadata: Metadata = {
  title: 'Verificación - Opinafy',
  robots: { index: false, follow: false },
}

interface PageProps {
  searchParams: Promise<{ estado?: string; id?: string }>
}

export default async function VerificadoPage({ searchParams }: PageProps) {
  const { estado, id } = await searchParams

  const isSuccess = estado === 'ok'
  const isAlreadyVerified = estado === 'ya_verificado'
  const isExpired = estado === 'expirado'

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-lg text-center">
        {isSuccess ? (
          <>
            {/* Green Checkmark */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              ¡Tu testimonio ha sido verificado!
            </h1>
            <p className="mt-4 text-gray-600">
              Gracias por verificar tu testimonio. El propietario del negocio lo revisará pronto.
            </p>
          </>
        ) : isAlreadyVerified ? (
          <>
            {/* Info Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Testimonio ya verificado
            </h1>
            <p className="mt-4 text-gray-600">
              Este testimonio ya ha sido verificado anteriormente. No necesitas hacer nada más.
            </p>
          </>
        ) : isExpired ? (
          <>
            {/* Clock/Expired Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
              <svg
                className="h-10 w-10 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Tu enlace de verificación ha expirado
            </h1>
            <p className="mt-4 text-gray-600">
              El enlace de verificación tiene una validez de 7 días. Puedes solicitar uno nuevo haciendo clic en el botón de abajo.
            </p>
            {id && (
              <div className="mt-6">
                <ResendVerificationButton testimonialId={id} />
              </div>
            )}
          </>
        ) : (
          <>
            {/* Error Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-10 w-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Error de verificación
            </h1>
            <p className="mt-4 text-gray-600">
              No se pudo verificar el testimonio. El enlace puede ser inválido o haber expirado.
            </p>
          </>
        )}

        <div className="mt-8">
          <Link
            href="https://opinafy.com"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Ir a Opinafy
          </Link>
        </div>
      </div>
    </div>
  )
}
