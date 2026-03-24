import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy en WordPress - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en tu sitio WordPress en minutos. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/wordpress',
    languages: {
      en: 'https://opinafy.com/en/guides/wordpress',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy en WordPress',
    description: 'Guia paso a paso para agregar testimonios de clientes a tu sitio WordPress con Opinafy.',
    url: 'https://opinafy.com/guias/wordpress',
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

export default function WordPressGuidePage() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="TU_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.469 6.825c.84 4.471.132 8.29-2.105 11.455-2.236 3.166-5.508 4.994-9.814 5.486-4.306.491-7.893-.925-10.762-4.249C-4.08 16.193-2.588 11.08 1.27 8.237 5.128 5.394 10.49 4.629 16.354 5.942c.39.088.756.203 1.098.339l3.67-2.918.347 3.462z"/></svg>
            Guia WordPress
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy en WordPress
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a tu sitio WordPress en menos de 5 minutos.
            Sin necesidad de conocimientos tecnicos.
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
            <li>Introduce el nombre de tu sitio web y personaliza el formulario de recogida.</li>
            <li>Comparte el enlace de recogida con tus clientes o importa testimonios existentes.</li>
          </ol>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
            [Captura de pantalla: panel de creación de proyecto]
          </div>
        </StepCard>

        <StepCard number={2} title="Obtener el código de integración">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Dentro de tu proyecto, ve a la seccion <strong>&quot;Widget&quot;</strong>.</li>
            <li>Personaliza el diseno: elige layout (carrusel, cuadricula, muro...), colores y tipografia.</li>
            <li>Copia el código de integración que aparece debajo de la vista previa.</li>
          </ol>
          <p className="mt-3">El codigo tendra esta forma:</p>
          <CodeBlock code={embedCode} />
          <p className="text-sm text-gray-500">
            Sustituye <code className="rounded bg-gray-200 px-1 text-xs">TU_PROJECT_ID</code> por el ID real de tu proyecto.
          </p>
        </StepCard>

        <StepCard number={3} title="Agrega el codigo a WordPress">
          <p className="mb-4">Tienes dos opciones para insertar el widget en tu sitio WordPress:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion A: Bloque HTML personalizado (recomendado)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Edita la pagina o entrada donde quieres mostrar los testimonios.</li>
                <li>Agrega un bloque <strong>&quot;HTML personalizado&quot;</strong> (Custom HTML).</li>
                <li>Pega el código de integración de Opinafy.</li>
                <li>Publica o actualiza la pagina.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Captura de pantalla: bloque HTML personalizado en WordPress]
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion B: Plugin de Header/Footer</h4>
              <p className="mb-2">Si quieres que los testimonios aparezcan en todas las paginas:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Instala un plugin como <strong>&quot;Insert Headers and Footers&quot;</strong> (WPCode) o <strong>&quot;Header Footer Code Manager&quot;</strong>.</li>
                <li>Ve a <strong>Ajustes &gt; Insert Headers and Footers</strong>.</li>
                <li>Pega el codigo de Opinafy en la seccion <strong>&quot;Footer&quot;</strong>.</li>
                <li>Guarda los cambios.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion C: Shortcode (usuarios avanzados)</h4>
              <p className="mb-2">Agrega esto a tu archivo <code className="rounded bg-gray-200 px-1 text-xs">functions.php</code>:</p>
              <CodeBlock code={`function opinafy_widget_shortcode() {
  return '<script src="https://opinafy.com/widget.js" data-project="TU_PROJECT_ID"></script>';
}
add_shortcode('opinafy', 'opinafy_widget_shortcode');`} language="php" />
              <p className="text-sm text-gray-500">
                Despues usa <code className="rounded bg-gray-200 px-1 text-xs">[opinafy]</code> en cualquier pagina o entrada.
              </p>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visita la pagina donde insertaste el widget.</li>
            <li>Deberia cargar automaticamente mostrando tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica que tienes testimonios con estado <strong>&quot;Aprobado&quot;</strong> en tu panel.</li>
            <li>Comprueba que el ID del proyecto es correcto.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Consejo:</strong> Si usas un plugin de cache (WP Super Cache, W3 Total Cache, etc.),
              limpia la cache despues de agregar el widget para ver los cambios inmediatamente.
            </p>
          </div>
        </StepCard>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'El widget afecta la velocidad de mi sitio?',
                a: 'No. El script de Opinafy pesa menos de 25 KB y se carga de forma asincrona. No bloquea la carga de tu pagina.',
              },
              {
                q: 'Funciona con Elementor, Divi u otros page builders?',
                a: 'Si. Puedes pegar el codigo en cualquier bloque HTML o modulo de codigo de tu page builder favorito.',
              },
              {
                q: 'Puedo personalizar el diseno del widget?',
                a: 'Por supuesto. Desde el panel de Opinafy puedes cambiar colores, tipografia, layout, bordes y mas. Los cambios se aplican en tiempo real.',
              },
              {
                q: 'Necesito actualizar el codigo cuando agrego nuevos testimonios?',
                a: 'No. El widget se actualiza automaticamente. Cuando apruebas un nuevo testimonio, aparece en tu sitio sin tocar codigo.',
              },
              {
                q: 'Es compatible con WooCommerce?',
                a: 'Si. Puedes agregar el widget en paginas de producto, la pagina de inicio de tu tienda o cualquier otra pagina de WooCommerce.',
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
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios a tu WordPress?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Crea tu cuenta gratis y empieza a mostrar prueba social en tu sitio en minutos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/registro"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/guias/shopify"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para Shopify
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
