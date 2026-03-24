import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal - Opinafy',
  description: 'Aviso legal y condiciones de uso de Opinafy. Información sobre el titular del sitio web, propiedad intelectual y limitaciones de responsabilidad.',
  alternates: {
    canonical: 'https://opinafy.com/legal',
    languages: {
      'es': 'https://opinafy.com/legal',
      'en': 'https://opinafy.com/en/legal',
      'x-default': 'https://opinafy.com/legal',
    },
  },
}

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-2 text-sm text-gray-500">
            Última actualización: marzo 2026
          </p>
          <h1 className="mb-10 text-3xl font-bold text-gray-900 sm:text-4xl">
            Aviso Legal
          </h1>

          {/* 1. Datos identificativos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. Datos identificativos del titular
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los
              usuarios de los siguientes datos identificativos del titular de este sitio web:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>Responsable:</strong> El titular del NIF indicado
              </li>
              <li>
                <strong>NIF:</strong> Y6804922H
              </li>
              <li>
                <strong>Nombre comercial:</strong> Opinafy
              </li>
              <li>
                <strong>Dominio:</strong> opinafy.com
              </li>
              <li>
                <strong>Correo electrónico:</strong> hola@opinafy.com
              </li>
              <li>
                <strong>País:</strong> España
              </li>
            </ul>
          </section>

          {/* 2. Objeto y descripción del servicio */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. Objeto y descripción del servicio
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy es una plataforma SaaS (Software como Servicio) diseñada para la recopilación,
              gestión y publicación de testimonios de clientes. A través de opinafy.com, los usuarios
              pueden crear formularios personalizados para solicitar opiniones a sus clientes, gestionar
              dichos testimonios desde un panel de control y mostrarlos en sus sitios web mediante
              widgets embebibles.
            </p>
            <p className="leading-relaxed text-gray-600">
              El presente aviso legal regula el acceso y uso del sitio web opinafy.com, así como de
              todos los subdominios y servicios asociados. El acceso al sitio web atribuye la condición
              de usuario e implica la aceptación plena y sin reservas de todas las disposiciones
              incluidas en este aviso legal.
            </p>
          </section>

          {/* 3. Propiedad intelectual e industrial */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Todos los contenidos del sitio web opinafy.com, incluyendo a título enunciativo pero no
              limitativo, textos, fotografías, gráficos, imágenes, iconos, logotipos, tecnología,
              software, enlaces, diseño gráfico, código fuente y demás contenidos audiovisuales o
              sonoros, así como su diseño gráfico y estructura de navegación, son propiedad intelectual
              de Opinafy o de sus licenciantes, sin que puedan entenderse cedidos al usuario ninguno de
              los derechos de explotación reconocidos por la legislación vigente en materia de propiedad
              intelectual.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Las marcas, nombres comerciales y signos distintivos que aparecen en el sitio web son
              propiedad de Opinafy. Queda prohibida su reproducción, imitación, utilización o inserción
              sin la debida autorización previa y por escrito.
            </p>
            <p className="leading-relaxed text-gray-600">
              La reproducción, distribución, comercialización o transformación no autorizada de estos
              contenidos constituye una infracción de los derechos de propiedad intelectual e industrial
              de Opinafy, y podrá dar lugar a las acciones legales correspondientes.
            </p>
          </section>

          {/* 4. Condiciones de uso */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Condiciones de uso
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El usuario se compromete a utilizar el sitio web y sus servicios de conformidad con la
              ley, el presente aviso legal, las buenas costumbres y el orden público. El usuario se
              obliga a no utilizar el sitio web o los servicios con fines ilícitos, contrarios a lo
              establecido en el presente aviso legal, lesivos de los derechos e intereses de terceros,
              o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web
              o impedir la normal utilización por parte de otros usuarios.
            </p>
            <p className="leading-relaxed text-gray-600">
              Queda expresamente prohibido el uso del sitio web para transmitir, difundir o poner a
              disposición de terceros cualquier tipo de material que sea difamatorio, ofensivo,
              discriminatorio, que incite a la violencia o que contravenga la moral, el orden público o
              los derechos fundamentales. El usuario responderá de los daños y perjuicios de toda
              naturaleza que Opinafy pueda sufrir como consecuencia del incumplimiento de cualquiera de
              las obligaciones anteriores.
            </p>
          </section>

          {/* 5. Exclusión de responsabilidad */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Exclusión de responsabilidad
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy no se hace responsable de los daños y perjuicios de cualquier naturaleza que
              pudieran derivarse del uso indebido de los servicios y contenidos del sitio web por parte
              del usuario, incluyendo, sin limitación, errores u omisiones en los contenidos, falta de
              disponibilidad del sitio web o la transmisión de virus o programas maliciosos.
            </p>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho a actualizar, modificar o eliminar la información contenida
              en el sitio web, pudiendo incluso limitar o no permitir el acceso a dicha información, sin
              necesidad de aviso previo. En especial, Opinafy no se responsabiliza de las interrupciones
              del servicio, retrasos, errores o mal funcionamiento del mismo, ni de los problemas
              técnicos derivados de causas ajenas a su control.
            </p>
            <p className="leading-relaxed text-gray-600">
              Los testimonios publicados por los usuarios a través de la plataforma son responsabilidad
              exclusiva de quienes los proporcionan. Opinafy no verifica la veracidad ni la exactitud
              de los testimonios recopilados y no asume responsabilidad alguna sobre su contenido.
            </p>
          </section>

          {/* 6. Enlaces externos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Enlaces externos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El sitio web opinafy.com puede contener enlaces (links) a otros sitios web gestionados por
              terceros, con objeto de facilitar el acceso del usuario a información de entidades
              colaboradoras o patrocinadores. Opinafy no se hace responsable del contenido de dichos
              sitios web, ni se encuentra en posición de garantizar o controlar la legalidad de sus
              contenidos, productos o servicios.
            </p>
            <p className="leading-relaxed text-gray-600">
              En ningún caso, la existencia de enlaces externos debe presuponer la existencia de
              relaciones comerciales con los responsables de dichas páginas, ni la recomendación,
              promoción o identificación de Opinafy con las manifestaciones, contenidos o servicios
              proporcionados por dichos terceros.
            </p>
          </section>

          {/* 7. Legislación aplicable */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              7. Legislación aplicable
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El presente aviso legal se rige en todos y cada uno de sus extremos por la legislación
              española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o
              uso del sitio web, Opinafy y el usuario acuerdan someterse a los Juzgados y Tribunales
              competentes conforme a la legislación española vigente.
            </p>
            <p className="leading-relaxed text-gray-600">
              En particular, el presente aviso legal se rige por la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), la Ley
              Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
              derechos digitales (LOPDGDD), el Reglamento (UE) 2016/679 General de Protección de Datos
              (RGPD) y demás normativa aplicable.
            </p>
          </section>

          {/* 8. Modificaciones del aviso legal */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              8. Modificaciones del aviso legal
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar el presente aviso legal en cualquier momento,
              siendo vigente la última versión publicada en el sitio web. Se recomienda a los usuarios
              que revisen periódicamente este aviso legal para mantenerse informados de cualquier cambio.
            </p>
            <p className="leading-relaxed text-gray-600">
              En caso de que alguna disposición del presente aviso legal sea declarada nula o
              inaplicable, dicha disposición será excluida sin que ello afecte a la validez y
              aplicabilidad del resto de disposiciones. Para cualquier consulta o sugerencia relacionada
              con este aviso legal, puede contactar con nosotros a través de hola@opinafy.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
