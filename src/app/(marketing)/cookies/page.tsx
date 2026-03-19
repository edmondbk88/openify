import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies - Opinafy',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-2 text-sm text-gray-400">
            Última actualización: marzo 2026
          </p>
          <h1 className="mb-10 text-3xl font-bold text-gray-900 sm:text-4xl">
            Política de Cookies
          </h1>

          {/* 1. ¿Qué son las cookies? */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. ¿Qué son las cookies?
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador
              cuando los visitas. Estos archivos permiten que el sitio web recuerde información sobre
              tu visita, como tus preferencias de idioma, sesión de usuario y otros ajustes, lo que
              facilita tu próxima visita y hace que el sitio web sea más útil para ti.
            </p>
            <p className="leading-relaxed text-gray-600">
              Las cookies no pueden acceder a otros datos de tu ordenador ni ejecutar programas. Son
              una tecnología estándar utilizada por la gran mayoría de sitios web en Internet para
              mejorar la experiencia del usuario y ofrecer servicios personalizados.
            </p>
          </section>

          {/* 2. Tipos de cookies que utilizamos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. Tipos de cookies que utilizamos
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              En opinafy.com utilizamos los siguientes tipos de cookies:
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.1. Cookies esenciales (estrictamente necesarias)
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Estas cookies son imprescindibles para el funcionamiento básico del sitio web y de la
              plataforma. Sin ellas, el servicio no puede funcionar correctamente. No requieren tu
              consentimiento ya que son necesarias para la prestación del servicio que has solicitado.
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full text-left text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Cookie</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Finalidad</th>
                    <th className="py-2 font-semibold text-gray-800">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">sb-access-token</td>
                    <td className="py-2 pr-4">Token de autenticación de sesión (Supabase Auth)</td>
                    <td className="py-2">Sesión / 1 hora</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">sb-refresh-token</td>
                    <td className="py-2 pr-4">Token de refresco para mantener la sesión activa</td>
                    <td className="py-2">7 días</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">cookie-consent</td>
                    <td className="py-2 pr-4">Almacena tu preferencia sobre el uso de cookies</td>
                    <td className="py-2">12 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-2 mt-6 text-lg font-medium text-gray-800">
              2.2. Cookies funcionales
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Estas cookies permiten recordar tus preferencias y personalizar tu experiencia en la
              plataforma. Aunque no son estrictamente necesarias, mejoran significativamente la
              usabilidad del servicio.
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full text-left text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Cookie</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Finalidad</th>
                    <th className="py-2 font-semibold text-gray-800">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">theme-preference</td>
                    <td className="py-2 pr-4">Preferencia de tema visual (claro/oscuro)</td>
                    <td className="py-2">12 meses</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">dashboard-layout</td>
                    <td className="py-2 pr-4">Configuración del diseño del panel de control</td>
                    <td className="py-2">12 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-2 mt-6 text-lg font-medium text-gray-800">
              2.3. Cookies analíticas
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Estas cookies nos ayudan a entender cómo los usuarios interactúan con la plataforma y
              los widgets de testimonios. La información recopilada es agregada y anónima, y se
              utiliza exclusivamente para mejorar el funcionamiento del servicio.
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full text-left text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Cookie</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Finalidad</th>
                    <th className="py-2 font-semibold text-gray-800">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">_va</td>
                    <td className="py-2 pr-4">Analíticas de Vercel - identificador de visitante</td>
                    <td className="py-2">12 meses</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">widget-views</td>
                    <td className="py-2 pr-4">Seguimiento del rendimiento de los widgets de testimonios</td>
                    <td className="py-2">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Cookies de terceros */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Cookies de terceros
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Algunos de nuestros proveedores de servicios pueden establecer sus propias cookies en tu
              navegador. Opinafy no controla estas cookies, que están sujetas a las políticas de
              privacidad de cada proveedor:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-600">
              <li>
                <strong>Supabase:</strong> cookies necesarias para la autenticación y gestión de
                sesiones de usuario. Más información en{' '}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  supabase.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>Stripe:</strong> cookies utilizadas durante el proceso de pago para prevenir
                el fraude y procesar transacciones de forma segura. Los datos de pago son procesados
                exclusivamente por Stripe. Más información en{' '}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  stripe.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics:</strong> cookies analíticas para medir el rendimiento del
                sitio web y la experiencia del usuario de forma agregada y anónima. Más información en{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 4. Cómo gestionar las cookies */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Cómo gestionar las cookies
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Puedes configurar tu navegador para rechazar cookies, eliminar las cookies almacenadas o
              recibir una alerta antes de que se almacene una cookie. Ten en cuenta que si desactivas
              las cookies esenciales, algunas funcionalidades de la plataforma podrían no estar
              disponibles o funcionar correctamente.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              A continuación te indicamos cómo gestionar las cookies en los navegadores más populares:
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              4.1. Google Chrome
            </h3>
            <p className="leading-relaxed text-gray-600">
              Accede a Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
              Desde ahí podrás bloquear cookies de terceros, borrar cookies al cerrar el navegador o
              gestionar las excepciones por sitio web. Más información en{' '}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                support.google.com
              </a>
              .
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              4.2. Mozilla Firefox
            </h3>
            <p className="leading-relaxed text-gray-600">
              Accede a Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio. Firefox
              ofrece protección mejorada contra el rastreo con diferentes niveles de restricción
              (estándar, estricto, personalizado). Más información en{' '}
              <a
                href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-rastreo-en-firefox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                support.mozilla.org
              </a>
              .
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              4.3. Safari
            </h3>
            <p className="leading-relaxed text-gray-600">
              Accede a Preferencias &gt; Privacidad. Safari bloquea por defecto las cookies de terceros
              y ofrece la opción de bloquear todas las cookies. También puedes gestionar los datos
              almacenados por cada sitio web. Más información en{' '}
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                support.apple.com
              </a>
              .
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              4.4. Microsoft Edge
            </h3>
            <p className="leading-relaxed text-gray-600">
              Accede a Configuración &gt; Cookies y permisos del sitio &gt; Administrar y eliminar
              cookies y datos del sitio. Edge permite bloquear cookies de terceros y gestionar
              excepciones por sitio. Más información en{' '}
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                support.microsoft.com
              </a>
              .
            </p>
          </section>

          {/* 5. Consentimiento */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Consentimiento
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Al acceder a opinafy.com por primera vez, se te mostrará un banner informativo sobre el
              uso de cookies. Al hacer clic en &quot;Aceptar&quot;, consientes el uso de todas las categorías de
              cookies descritas en esta política.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Las cookies esenciales no requieren consentimiento ya que son necesarias para el
              funcionamiento del servicio. Para las cookies funcionales y analíticas, puedes retirar tu
              consentimiento en cualquier momento eliminando las cookies de tu navegador según las
              instrucciones proporcionadas en la sección anterior.
            </p>
            <p className="leading-relaxed text-gray-600">
              De conformidad con el artículo 22.2 de la Ley 34/2002 (LSSI-CE), Opinafy te informa del
              uso de cookies y te solicita tu consentimiento para la instalación de cookies no
              esenciales en tu dispositivo.
            </p>
          </section>

          {/* 6. Contacto */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Contacto
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Si tienes alguna pregunta sobre nuestra política de cookies o necesitas más información,
              puedes ponerte en contacto con nosotros a través de:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>
                <strong>Correo electrónico:</strong> hola@opinafy.com
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar esta política de cookies en cualquier momento
              para adaptarla a cambios legislativos o a modificaciones en los servicios utilizados. La
              versión vigente será siempre la publicada en esta página con la fecha de última
              actualización.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
