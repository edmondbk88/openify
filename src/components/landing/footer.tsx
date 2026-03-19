import Image from 'next/image'
import Link from 'next/link'

const productLinks = [
  { label: 'Características', href: '/#caracteristicas' },
  { label: 'Precios', href: '/precios' },
  { label: 'Plantillas', href: '/plantillas' },
  { label: 'Blog', href: '/blog' },
]

const legalLinks = [
  { label: 'Aviso Legal', href: '/legal' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Términos', href: '/terminos' },
  { label: 'Cookies', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image src="/logo-opinafy.png" alt="Opinafy" width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              La plataforma de testimonios que ayuda a los negocios a generar confianza y
              aumentar sus ventas.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Producto</h3>
            <ul className="mt-4 space-y-3" role="list">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contacto</h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href="mailto:hola@opinafy.com"
                  className="text-sm text-gray-500 transition-colors hover:text-indigo-600"
                >
                  hola@opinafy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Opinafy. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
