import Link from 'next/link'

function PlatformIcon({ letter, bg }: { letter: string; bg: string }) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white transition-transform group-hover:scale-110"
      style={{ backgroundColor: bg }}
    >
      {letter}
    </div>
  )
}

const platforms = [
  { name: 'WordPress', letter: 'W', bg: '#21759b' },
  { name: 'Shopify', letter: 'S', bg: '#96bf48' },
  { name: 'WooCommerce', letter: 'Woo', bg: '#7f54b3' },
  { name: 'Wix', letter: 'Wix', bg: '#0C6EFC' },
  { name: 'Squarespace', letter: 'Sq', bg: '#000000' },
  { name: 'Webflow', letter: 'Wf', bg: '#4353FF' },
  { name: 'PrestaShop', letter: 'Ps', bg: '#DF0067' },
  { name: 'GTM', letter: 'GTM', bg: '#4285F4' },
  { name: 'React / Next.js', letter: 'R', bg: '#61DAFB' },
  { name: 'HTML', letter: '</>', bg: '#E44D26' },
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
              className="group flex flex-col items-center gap-3 transition-colors duration-200"
            >
              <PlatformIcon letter={platform.letter} bg={platform.bg} />
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
