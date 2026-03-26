import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy en Webflow - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en tu sitio Webflow en minutos. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/webflow',
    languages: {
      en: 'https://opinafy.com/en/guides/webflow',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy en Webflow',
    description: 'Guia paso a paso para agregar testimonios de clientes a tu sitio Webflow con Opinafy.',
    url: 'https://opinafy.com/guias/webflow',
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

export default function WebflowGuidePage() {
  const embedCode = `<div id="opinafy-widget" data-project="TU_PROJECT_ID"></div>
<script src="https://opinafy.com/widget.js" defer></script>`

  return (
    <div className="bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.802 8.56l-1.986 6.496-1.95-6.46a.544.544 0 00-.526-.39.544.544 0 00-.525.39l-1.95 6.46L8.88 8.56a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56L2 18h3.18l1.95-6.46 1.95 6.46c.072.234.288.39.526.39.24 0 .456-.156.526-.39l1.95-6.46L14.032 18h3.18l-2.742-9.44a2.158 2.158 0 00-2.07-1.56 2.158 2.158 0 00-2.07 1.56z"/></svg>
            Guia Webflow
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy en Webflow
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a tu sitio Webflow en menos de 5 minutos.
            Sin necesidad de conocimientos técnicos.
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

        <StepCard number={3} title="Agrega el código a Webflow">
          <p className="mb-4">Tienes tres opciones para insertar el widget en tu sitio Webflow:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion A: Código personalizado del proyecto (todas las páginas)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Project Settings</strong> (Configuracion del proyecto).</li>
                <li>Haz clic en la pestana <strong>&quot;Custom Code&quot;</strong>.</li>
                <li>En el campo <strong>&quot;Footer Code&quot;</strong> (antes de {'</body>'}), pega el código de Opinafy.</li>
                <li>Guarda y pública tu sitio.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion B: Código personalizado por página (página específica)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Pages</strong> y selecciona la página deseada.</li>
                <li>Haz clic en el icono de configuración de la página (engranaje).</li>
                <li>Desplazate hasta <strong>&quot;Custom Code&quot;</strong> &rarr; <strong>&quot;Before {'</body>'} tag&quot;</strong>.</li>
                <li>Pega el código de Opinafy.</li>
                <li>Guarda y pública.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion C: Elemento Embed (posicion exacta)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>En el Designer de Webflow, añade un componente <strong>&quot;Embed&quot;</strong> donde quieras mostrar los testimonios.</li>
                <li>Pega el código de Opinafy en el campo HTML.</li>
                <li>Haz clic en <strong>&quot;Save & Close&quot;</strong>.</li>
                <li>Publica tu sitio para ver los cambios.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> El componente Embed no muestra vista previa en el Designer.
                  Debes publicar el sitio para ver el widget funcionando.
                </p>
              </div>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Publica tu sitio Webflow.</li>
            <li>Visita la página donde insertaste el widget.</li>
            <li>Deberia cargar automáticamente mostrando tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica que tienes testimonios con estado <strong>&quot;Aprobado&quot;</strong> en tu panel.</li>
          </ol>
        </StepCard>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'El widget afecta la velocidad de mi sitio Webflow?',
                a: 'No. El script de Opinafy pesa menos de 25 KB y se carga de forma asincrona con el atributo defer. No bloquea la carga de tu página.',
              },
              {
                q: 'Funciona con el plan gratuito de Webflow?',
                a: 'Si. El widget funciona en cualquier plan de Webflow, incluyendo el plan gratuito. Solo necesitas poder añadir código personalizado o elementos Embed.',
              },
              {
                q: 'Puedo poner el widget en varias páginas?',
                a: 'Si. Usa la opcion A (Project Settings > Custom Code) para añadir el widget a todas las páginas, o repite la opcion B o C en cada página donde lo necesites.',
              },
              {
                q: 'El widget se adapta al diseño responsive?',
                a: 'Si. El widget de Opinafy es completamente responsive y se adapta automáticamente al ancho del contenedor.',
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
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios a tu sitio Webflow?</h2>
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
              href="/guias/google-tag-manager"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para Google Tag Manager
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
