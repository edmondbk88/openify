import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy en Squarespace - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en tu sitio Squarespace en minutos. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/squarespace',
    languages: {
      en: 'https://opinafy.com/en/guides/squarespace',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy en Squarespace',
    description: 'Guia paso a paso para agregar testimonios de clientes a tu sitio Squarespace con Opinafy.',
    url: 'https://opinafy.com/guias/squarespace',
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

export default function SquarespaceGuidePage() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="TU_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-gray-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Guia Squarespace
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy en Squarespace
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a tu sitio Squarespace en menos de 5 minutos.
            Perfectamente integrado con tu diseño.
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
            <li>Personaliza el diseño: elige layout (carrusel, cuadricula, muro...), colores y tipografia.</li>
            <li>Copia el código de integración que aparece debajo de la vista previa.</li>
          </ol>
          <p className="mt-3">El código tendra esta forma:</p>
          <CodeBlock code={embedCode} />
          <p className="text-sm text-gray-500">
            Sustituye <code className="rounded bg-gray-200 px-1 text-xs">TU_PROJECT_ID</code> por el ID real de tu proyecto.
          </p>
        </StepCard>

        <StepCard number={3} title="Agrega el código a Squarespace">
          <p className="mb-4">Tienes dos opciones para insertar el widget en tu sitio Squarespace:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion A: Bloque de código (recomendado)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Abre el <strong>Editor de Squarespace</strong> y navega a la página donde quieres los testimonios.</li>
                <li>Haz clic en <strong>&quot;Editar&quot;</strong> en la página.</li>
                <li>Haz clic en un punto de insercion y selecciona <strong>&quot;Bloque de código&quot;</strong> (Code Block).</li>
                <li>Pega el código de Opinafy en el bloque.</li>
                <li>Desactiva la opcion <strong>&quot;Mostrar fuente&quot;</strong> (Display Source).</li>
                <li>Haz clic en <strong>&quot;Aplicar&quot;</strong> y luego <strong>&quot;Guardar&quot;</strong>.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Captura de pantalla: bloque de código en Squarespace]
              </div>
              <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> Los bloques de código solo estan disponibles en planes Business y superiores de Squarespace.
                </p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion B: Inyeccion de código (Code Injection)</h4>
              <p className="mb-2">Si quieres que los testimonios aparezcan en todas las páginas:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Ajustes &gt; Avanzado &gt; Inyeccion de código</strong> (Settings &gt; Advanced &gt; Code Injection).</li>
                <li>Pega el código de Opinafy en la seccion <strong>&quot;Footer&quot;</strong>.</li>
                <li>Haz clic en <strong>&quot;Guardar&quot;</strong>.</li>
              </ol>
              <CodeBlock code={`<!-- Opinafy Testimonials Widget -->
<div id="opinafy-widget" class="opinafy-widget" data-project="TU_PROJECT_ID"></div>
${embedCode}`} />
              <p className="mt-2 text-sm text-gray-500">
                Con esta opcion necesitas agregar un <code className="rounded bg-gray-200 px-1 text-xs">div</code> contenedor donde quieres que aparezca el widget.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion C: Inyeccion por página</h4>
              <p className="mb-2">Para agregar testimonios solo en una página específica:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Abre la página deseada en el editor de Squarespace.</li>
                <li>Ve a la <strong>configuración de la página</strong> (icono de engranaje).</li>
                <li>Selecciona la pestana <strong>&quot;Avanzado&quot;</strong> (Advanced).</li>
                <li>Pega el código de Opinafy en el campo <strong>&quot;Inyeccion de código en la cabecera de la página&quot;</strong>.</li>
                <li>Guarda los cambios.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Visita tu sitio Squarespace y navega a la página donde insertaste el widget.</li>
            <li>Deberia cargar automáticamente mostrando tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica que tienes testimonios con estado <strong>&quot;Aprobado&quot;</strong> en tu panel.</li>
            <li>Comprueba que el ID del proyecto es correcto.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm text-gray-700">
              <strong>Consejo:</strong> Squarespace puede tardar unos minutos en reflejar los cambios.
              Si no ves el widget inmediatamente, espera unos minutos y recarga la página.
            </p>
          </div>
        </StepCard>

        {/* Squarespace-specific tips */}
        <div className="rounded-xl border border-gray-300 bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Consejos para Squarespace</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
            <li>El widget se integra perfectamente con la estetica minimalista de Squarespace.</li>
            <li>Usa el layout <strong>&quot;Muro&quot;</strong> para un efecto visual tipo masonry que combina bien con los diseños de Squarespace.</li>
            <li>Usa el tema <strong>&quot;Oscuro&quot;</strong> si tu sitio tiene un fondo oscuro.</li>
            <li>El widget es totalmente responsive y se adapta a todos los breakpoints de Squarespace.</li>
            <li>Funciona con todas las plantillas de Squarespace, incluyendo la version 7.1.</li>
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
                q: 'El widget afecta la velocidad de mi sitio Squarespace?',
                a: 'No. El script de Opinafy pesa menos de 25 KB y se carga de forma asincrona. No afecta al rendimiento de tu sitio.',
              },
              {
                q: 'Funciona con todas las plantillas de Squarespace?',
                a: 'Si. El widget usa Shadow DOM para aislar sus estilos, lo que garantiza compatibilidad con cualquier plantilla de Squarespace sin conflictos de CSS.',
              },
              {
                q: 'Necesito un plan Business de Squarespace?',
                a: 'Para usar bloques de código, si. Sin embargo, puedes usar la inyeccion de código general (disponible en todos los planes de pago) como alternativa.',
              },
              {
                q: 'Puedo personalizar el diseño del widget?',
                a: 'Por supuesto. Desde el panel de Opinafy puedes cambiar colores, tipografia, layout, bordes y más para que combine perfectamente con tu sitio Squarespace.',
              },
              {
                q: 'Necesito actualizar el código cuando agrego nuevos testimonios?',
                a: 'No. El widget se actualiza automáticamente. Cuando apruebas un nuevo testimonio, aparece en tu sitio sin tocar código.',
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
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios a tu sitio Squarespace?</h2>
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
              href="/guias/wix"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para Wix
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
