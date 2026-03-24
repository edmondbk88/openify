import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy en Shopify - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en tu tienda Shopify en minutos. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/shopify',
    languages: {
      en: 'https://opinafy.com/en/guides/shopify',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy en Shopify',
    description: 'Guia paso a paso para agregar testimonios de clientes a tu tienda Shopify con Opinafy.',
    url: 'https://opinafy.com/guias/shopify',
  },
}

function CodeBlock({ code, language = 'html' }: { code: string; language?: string }) {
  return (
    <div className="relative my-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium uppercase text-gray-500">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function StepCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}

export default function ShopifyGuidePage() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="TU_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.2-.214-.2-.1 0-1.239-.083-1.239-.083s-.875-.862-.975-.96c-.1-.1-.296-.07-.416-.035l-.263.08C16.67 2.882 16.34 2.34 15.79 1.9c-.81-.648-1.789-.955-2.823-.91-1.297.055-2.136.83-2.473 2.16-.05.2-.09.38-.13.58-.77-.14-1.31-.07-1.74.23-.43.29-.68.78-.75 1.45l-.08.77c-.58-.04-1.14.02-1.14.02s-.12.02-.14.14c-.02.12.5 8.16.5 8.16l6.52 1.31 2.53-8.22s-.01.01-.01.01c-.14-.06-.3-.1-.46-.13-.83-.17-1.71.14-2.35.81-.39.41-.65.93-.76 1.52l-.3 1.65 3.15.64-1.03 5.55z"/></svg>
            Guia Shopify
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy en Shopify
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a tu tienda Shopify en menos de 5 minutos.
            Aumenta la confianza y las conversiones de tu e-commerce.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 pb-16 sm:px-6 lg:px-8">
        <StepCard number={1} title="Crea tu proyecto en Opinafy">
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              <Link href="/registro" className="text-indigo-600 hover:underline">Registrate en Opinafy</Link> (es gratis).
            </li>
            <li>Ve al <strong>Panel de control</strong> y haz clic en <strong>&quot;Nuevo Proyecto&quot;</strong>.</li>
            <li>Introduce el nombre de tu tienda Shopify y personaliza el formulario.</li>
            <li>Comparte el enlace de recogida con tus clientes o importa resenas existentes.</li>
          </ol>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
            [Captura de pantalla: panel de creacion de proyecto]
          </div>
        </StepCard>

        <StepCard number={2} title="Obtener el codigo de integracion">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Dentro de tu proyecto, ve a la seccion <strong>&quot;Widget&quot;</strong>.</li>
            <li>Personaliza el diseno: elige layout, colores y tipografia que combinen con tu tienda.</li>
            <li>Copia el codigo de integracion.</li>
          </ol>
          <p className="mt-3">El codigo tendra esta forma:</p>
          <CodeBlock code={embedCode} />
        </StepCard>

        <StepCard number={3} title="Agrega el codigo a tu tienda Shopify">
          <p className="mb-4">Tienes varias opciones para insertar el widget:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion A: Editar el tema (theme.liquid)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Tienda online &gt; Temas</strong> en tu admin de Shopify.</li>
                <li>Haz clic en <strong>&quot;Acciones&quot; &gt; &quot;Editar codigo&quot;</strong>.</li>
                <li>Abre el archivo <code className="rounded bg-gray-200 px-1 text-xs">theme.liquid</code>.</li>
                <li>Pega el codigo de Opinafy justo antes de la etiqueta <code className="rounded bg-gray-200 px-1 text-xs">&lt;/body&gt;</code>.</li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong>.</li>
              </ol>
              <CodeBlock code={`<!-- Opinafy Testimonials Widget -->
${embedCode}
</body>`} />
              <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> Esta opcion muestra los testimonios en todas las paginas de tu tienda.
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion B: Seccion personalizada (recomendado)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Tienda online &gt; Temas &gt; Personalizar</strong>.</li>
                <li>Navega a la pagina donde quieres los testimonios.</li>
                <li>Haz clic en <strong>&quot;Agregar seccion&quot;</strong> y selecciona <strong>&quot;HTML personalizado&quot;</strong> o <strong>&quot;Liquid personalizado&quot;</strong>.</li>
                <li>Pega el codigo de Opinafy en el campo HTML/Liquid.</li>
                <li>Guarda los cambios.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Captura de pantalla: editor de tema de Shopify con seccion personalizada]
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion C: Pagina especifica</h4>
              <p className="mb-2">Para agregar testimonios solo en una pagina:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Tienda online &gt; Paginas</strong>.</li>
                <li>Edita o crea la pagina deseada.</li>
                <li>En el editor, haz clic en <strong>&quot;Mostrar HTML&quot;</strong> (icono <code className="rounded bg-gray-200 px-1 text-xs">&lt;/&gt;</code>).</li>
                <li>Pega el codigo de Opinafy.</li>
                <li>Guarda la pagina.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visita tu tienda Shopify y navega a la pagina donde insertaste el widget.</li>
            <li>Deberia cargar automaticamente mostrando tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica que tienes testimonios con estado <strong>&quot;Aprobado&quot;</strong> en tu panel.</li>
            <li>Comprueba que el ID del proyecto es correcto.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-green-50 border border-green-200 p-4">
            <p className="text-sm text-green-800">
              <strong>Consejo para Shopify:</strong> Si usas una aplicacion de cache o CDN, puede que necesites esperar
              unos minutos o limpiar la cache para ver el widget por primera vez.
            </p>
          </div>
        </StepCard>

        {/* Shopify-specific tips */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-green-900">Consejos para Shopify</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-green-800">
            <li>Ubica los testimonios en la pagina de producto, justo antes del boton de compra, para maximizar conversiones.</li>
            <li>Usa el layout <strong>&quot;Carrusel&quot;</strong> en paginas de producto para ahorrar espacio vertical.</li>
            <li>Usa el layout <strong>&quot;Cuadricula&quot;</strong> o <strong>&quot;Muro&quot;</strong> en la pagina de inicio para mayor impacto visual.</li>
            <li>El widget se adapta automaticamente al ancho de tu tema Shopify (responsive).</li>
            <li>Activa el <strong>popup de prueba social</strong> para mostrar notificaciones tipo FOMO en toda tu tienda.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'El widget afecta la velocidad de mi tienda?',
                a: 'No. El script de Opinafy pesa menos de 25 KB y se carga de forma asincrona. No afecta a las metricas Core Web Vitals de Shopify.',
              },
              {
                q: 'Funciona con todos los temas de Shopify?',
                a: 'Si. El widget usa Shadow DOM para aislar sus estilos, lo que garantiza compatibilidad con cualquier tema de Shopify sin conflictos de CSS.',
              },
              {
                q: 'Puedo mostrar testimonios diferentes en distintas paginas?',
                a: 'Si. Puedes crear multiples proyectos en Opinafy (uno por pagina de producto, por ejemplo) y usar diferentes codigos de integracion.',
              },
              {
                q: 'Es compatible con Shopify Markets (multi-idioma)?',
                a: 'Si. El widget detecta automaticamente el idioma del navegador. Puedes crear proyectos separados para cada idioma si lo prefieres.',
              },
              {
                q: 'Necesito instalar alguna app de Shopify?',
                a: 'No. Opinafy funciona con un simple script HTML, sin necesidad de instalar apps adicionales en tu tienda.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="mt-2 text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios a tu tienda Shopify?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Crea tu cuenta gratis y empieza a mostrar prueba social en tu e-commerce en minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/registro"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/guias/wordpress"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para WordPress
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
