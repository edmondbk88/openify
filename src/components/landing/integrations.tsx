import Link from 'next/link'

const platforms = [
  {
    name: 'WordPress',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.508 14.59L7.36 8.388c.582-.03 1.106-.088 1.106-.088.52-.06.46-.843-.06-.813 0 0-1.564.122-2.574.122-.183 0-.398-.006-.623-.016A8.003 8.003 0 0112 4c2.34 0 4.47.9 6.063 2.37-.039-.002-.076-.007-.116-.007-.96 0-1.64.838-1.64 1.737 0 .806.466 1.49.962 2.296.373.65.81 1.49.81 2.698 0 .838-.323 1.81-.746 3.163l-.978 3.27-3.543-10.54c.582-.028 1.104-.087 1.104-.087.52-.06.46-.843-.06-.814 0 0-1.563.123-2.573.123-.146 0-.31-.003-.483-.01l5.694 16.95A7.972 7.972 0 0112 20c-1.096 0-2.14-.22-3.093-.616l2.585-7.794zM4.073 12.93L7.88 23.336A8.014 8.014 0 014 12c0-.37.027-.733.073-1.07zm16.274-1.568c0 .974-.363 2.072-.838 3.618l-1.094 3.654-3.96-11.786c.583-.03 1.107-.088 1.107-.088.52-.06.46-.843-.06-.814 0 0-.864.068-1.695.106A8 8 0 0120 12c0 .21-.012.416-.034.62-.006-.086-.01-.173-.02-.258z" />
      </svg>
    ),
    color: 'group-hover:text-blue-600',
  },
  {
    name: 'Shopify',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M15.337 3.415c-.022-.165-.174-.247-.29-.26-.115-.012-2.42-.182-2.42-.182s-1.61-1.597-1.79-1.78c-.18-.183-.534-.128-.67-.085-.02.007-.34.105-.87.27A4.67 4.67 0 007.88.497C7.25-.297 6.453-.042 5.816.723 5.07 1.625 4.337 3.14 4.046 4.303c-1.3.403-2.21.685-2.323.72C1.07 5.22 1.04 5.25.997 5.89.963 6.396 0 14.08 0 14.08l11.07 2.077L18.68 14.4s-.006-.04-.013-.123c-.17-2.092-3.33-10.862-3.33-10.862zM10.4 4.88l-1.55.48c.003-.16.003-.334.003-.518 0-1.577-.217-2.848-.576-3.766.714.134 1.196 1.803 2.123 3.804zm-3.06.947c-.003-.175-.003-.366-.003-.575 0-1.528-.21-2.763-.555-3.65A3.37 3.37 0 018.05 3.4c-.32.82-.539 1.988-.539 3.268 0 .072 0 .14.003.206l-1.175.364zm-1.37-4.41c.12 0 .238.013.354.04-.678 2.016-.71 3.702-.71 4.35l-1.43.443c.325-1.564 1.04-3.517 1.786-4.832z" />
      </svg>
    ),
    color: 'group-hover:text-green-600',
  },
  {
    name: 'WooCommerce',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M2.227 4.857A2.228 2.228 0 000 7.088v7.478a2.23 2.23 0 002.227 2.233h7.09l3.96 2.343-.588-2.343h9.084A2.23 2.23 0 0024 14.566V7.088a2.228 2.228 0 00-2.227-2.231H2.227zm.76 1.545c.337 0 .614.098.83.293.216.196.36.505.434.93l1.12 5.996 2.164-5.29c.096-.234.215-.417.358-.55a.77.77 0 01.534-.196c.24 0 .43.082.574.247.144.164.238.41.283.738l.858 5.63 1.608-4.71c.18-.533.41-.93.69-1.188.28-.26.585-.388.915-.388.228 0 .41.072.546.216.137.144.205.336.205.575 0 .15-.022.308-.066.474-.043.166-.11.353-.2.56L10.69 14.51c-.198.48-.39.823-.575 1.032-.186.208-.415.313-.686.313-.25 0-.455-.087-.614-.26-.16-.173-.27-.43-.336-.773l-.87-5.47-2.123 5.22c-.193.477-.38.82-.558 1.028-.18.208-.41.312-.693.312-.23 0-.42-.084-.572-.252-.152-.168-.26-.41-.32-.724L2.06 7.244c-.05-.258-.076-.45-.076-.573 0-.268.072-.48.216-.634.145-.155.344-.233.597-.233h.19z" />
      </svg>
    ),
    color: 'group-hover:text-purple-600',
  },
  {
    name: 'Wix',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    color: 'group-hover:text-gray-900',
  },
  {
    name: 'Squarespace',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.65 13.65c-.39.39-1.02.39-1.41 0L12 13.41l-2.24 2.24c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 8.35 9.76c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.24-2.24c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.24 2.24c.39.39.39 1.02 0 1.41z" />
      </svg>
    ),
    color: 'group-hover:text-gray-900',
  },
  {
    name: 'Webflow',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M17.802 8.56s-1.478 4.536-1.592 4.9c-.036-.45-.803-4.9-.803-4.9-1.74 0-2.665 1.218-3.146 2.52 0 0-1.098 2.892-1.17 3.086-.01-.264-.21-3.086-.21-3.086-.115-1.69-1.678-2.52-2.88-2.52l1.236 7.92c1.84-.004 2.828-1.225 3.327-2.535 0 0 .92-2.376 .97-2.51.036.432.79 5.045.79 5.045 1.85-.004 2.845-1.156 3.37-2.447L20 8.56h-2.198z" />
      </svg>
    ),
    color: 'group-hover:text-blue-500',
  },
  {
    name: 'PrestaShop',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 font-bold" fill="currentColor">
        <text x="4" y="18" fontSize="16" fontWeight="bold" fontFamily="system-ui">P</text>
      </svg>
    ),
    color: 'group-hover:text-pink-600',
  },
  {
    name: 'Google Tag Manager',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M12 2l-2 2 3 3-4.5 4.5-3-3-2 2L7 14l-5 5 3 3 5-5 3.5 3.5 2-2-3-3L17 11l3 3 2-2L12 2zm0 6.5L14.5 11 12 13.5 9.5 11 12 8.5z" />
      </svg>
    ),
    color: 'group-hover:text-blue-400',
  },
  {
    name: 'Next.js / React',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.77 14.358L10 7.5v9h1.5V10.33l4.847 6.297a7.992 7.992 0 01-.577.731zM17.5 12a5.496 5.496 0 01-.377 2.003l-1.308-1.697V8h-1.5v2.273L12 7.5z" />
      </svg>
    ),
    color: 'group-hover:text-gray-900',
  },
  {
    name: 'HTML',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'group-hover:text-orange-500',
  },
]

export function Integrations() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Se integra con cualquier plataforma
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Instala Opinafy en tu web en menos de 2 minutos. Compatible con todas las plataformas.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group flex flex-col items-center gap-3 text-gray-400 transition-colors duration-200"
            >
              <div className={`transition-colors duration-200 ${platform.color}`}>
                {platform.icon}
              </div>
              <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/descargas"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
          >
            Ver todas las integraciones
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
