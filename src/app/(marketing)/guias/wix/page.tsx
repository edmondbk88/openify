import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Como instalar Opinafy en Wix - Guia paso a paso | Opinafy',
  description:
    'Aprende a instalar el widget de testimonios de Opinafy en tu sitio Wix en minutos. Guia completa con instrucciones paso a paso.',
  alternates: {
    canonical: 'https://opinafy.com/guias/wix',
    languages: {
      en: 'https://opinafy.com/en/guides/wix',
    },
  },
  openGraph: {
    title: 'Como instalar Opinafy en Wix',
    description: 'Guia paso a paso para agregar testimonios de clientes a tu sitio Wix con Opinafy.',
    url: 'https://opinafy.com/guias/wix',
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

export default function WixGuidePage() {
  const embedCode = `<script src="https://opinafy.com/widget.js" data-project="TU_PROJECT_ID"></script>`

  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.72 7.46c-.36-.98.2-2.08 1.24-2.44l3.44-1.2c1.04-.36 2.16.16 2.52 1.16l2.68 7.48L17.12 5c.4-.96 1.52-1.44 2.52-1.08l3.32 1.2c1 .36 1.52 1.48 1.16 2.48l-4.96 13.48c-.28.76-.96 1.24-1.72 1.24-.2 0-.44-.04-.64-.12l-3.32-1.2c-.56-.2-.96-.64-1.16-1.12-.2.48-.6.88-1.12 1.08l-3.44 1.2c-.24.08-.48.12-.72.12-.76 0-1.48-.48-1.76-1.24L4.72 7.46z"/></svg>
            Guia Wix
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como instalar Opinafy en Wix
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Agrega testimonios de clientes verificados a tu sitio Wix en menos de 5 minutos.
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

        <StepCard number={3} title="Agrega el codigo a Wix">
          <p className="mb-4">Tienes dos opciones para insertar el widget en tu sitio Wix:</p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion A: Elemento HTML embebido (recomendado)</h4>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Abre el <strong>Editor de Wix</strong> y navega a la pagina donde quieres mostrar los testimonios.</li>
                <li>Haz clic en <strong>&quot;Agregar&quot;</strong> (icono +) en la barra lateral izquierda.</li>
                <li>Selecciona <strong>&quot;Embeds&quot;</strong> &gt; <strong>&quot;HTML embebido&quot;</strong> (o &quot;Embed a Widget&quot;).</li>
                <li>Arrastra el elemento a la posicion deseada en tu pagina.</li>
                <li>Haz clic en <strong>&quot;Introducir codigo&quot;</strong> y pega el codigo de Opinafy.</li>
                <li>Haz clic en <strong>&quot;Actualizar&quot;</strong> y luego <strong>&quot;Publicar&quot;</strong>.</li>
              </ol>
              <div className="mt-3 rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
                [Captura de pantalla: elemento HTML embebido en Wix]
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion B: Wix App Market</h4>
              <p className="mb-2">Si prefieres usar una aplicacion del mercado de Wix:</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Ve a <strong>Wix App Market</strong> y busca <strong>&quot;Custom Element&quot;</strong> o <strong>&quot;HTML iFrame&quot;</strong>.</li>
                <li>Instala la aplicacion en tu sitio.</li>
                <li>Configura la aplicacion pegando el codigo de Opinafy.</li>
                <li>Ajusta el tamano del elemento y publica tu sitio.</li>
              </ol>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Opcion C: Wix Velo (usuarios avanzados)</h4>
              <p className="mb-2">Si usas Wix Velo (antes Corvid):</p>
              <ol className="ml-4 list-decimal space-y-2">
                <li>Agrega un elemento <strong>HTML personalizado</strong> (Custom Element) a tu pagina.</li>
                <li>En el codigo del componente, carga el script de Opinafy dinamicamente.</li>
                <li>Esto te permite controlar cuando y donde se muestra el widget.</li>
              </ol>
            </div>
          </div>
        </StepCard>

        <StepCard number={4} title="Verifica que funciona">
          <ol className="ml-4 list-decimal space-y-2">
            <li>Publica tu sitio Wix y visitalo.</li>
            <li>El widget deberia cargar automaticamente mostrando tus testimonios aprobados.</li>
            <li>Si no ves nada, verifica que tienes testimonios con estado <strong>&quot;Aprobado&quot;</strong> en tu panel.</li>
            <li>Comprueba que el ID del proyecto es correcto.</li>
          </ol>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Consejo:</strong> En el editor de Wix el widget puede no renderizar correctamente.
              Siempre verifica en la version publicada de tu sitio.
            </p>
          </div>
        </StepCard>

        {/* Wix-specific tips */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-blue-900">Consejos para Wix</h3>
          <ul className="ml-4 list-disc space-y-2 text-sm text-blue-800">
            <li>Ajusta la altura del elemento HTML embebido para que se muestre correctamente todo el contenido del widget.</li>
            <li>Usa el layout <strong>&quot;Carrusel&quot;</strong> si tu pagina tiene un ancho limitado.</li>
            <li>Usa el layout <strong>&quot;Cuadricula&quot;</strong> o <strong>&quot;Muro&quot;</strong> en secciones de ancho completo.</li>
            <li>El widget se adapta automaticamente al ancho del contenedor (responsive).</li>
            <li>Funciona tanto en sitios Wix clasicos como en Wix Studio.</li>
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
                q: 'El widget afecta la velocidad de mi sitio Wix?',
                a: 'No. El script de Opinafy pesa menos de 25 KB y se carga de forma asincrona. No afecta al rendimiento de tu sitio Wix.',
              },
              {
                q: 'Funciona con Wix Studio?',
                a: 'Si. El widget funciona tanto en el editor clasico de Wix como en Wix Studio. Solo necesitas agregar un elemento HTML embebido.',
              },
              {
                q: 'Puedo personalizar el tamano del widget?',
                a: 'Si. El widget se adapta automaticamente al ancho del contenedor. Puedes ajustar la altura del elemento HTML embebido en Wix para controlar el espacio visible.',
              },
              {
                q: 'Necesito actualizar el codigo cuando agrego nuevos testimonios?',
                a: 'No. El widget se actualiza automaticamente. Cuando apruebas un nuevo testimonio, aparece en tu sitio sin tocar codigo.',
              },
              {
                q: 'Es compatible con dominios personalizados en Wix?',
                a: 'Si. El widget funciona independientemente del dominio que uses en tu sitio Wix.',
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
          <h2 className="text-2xl font-bold text-gray-900">Listo para agregar testimonios a tu sitio Wix?</h2>
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
              href="/guias/squarespace"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver guia para Squarespace
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
