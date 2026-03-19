import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Opinafy',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-2 text-sm text-gray-400">
            Última actualización: marzo 2026
          </p>
          <h1 className="mb-10 text-3xl font-bold text-gray-900 sm:text-4xl">
            Términos y Condiciones
          </h1>

          {/* 1. Identificación del titular */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. Identificación del titular
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El presente sitio web y plataforma de servicios es operado por:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
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
              <li>
                <strong>Moneda:</strong> EUR (Euro)
              </li>
            </ul>
          </section>

          {/* 2. Aceptación de los términos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. Aceptación de los términos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Al acceder, registrarte o utilizar los servicios de Opinafy, aceptas quedar vinculado por
              los presentes Términos y Condiciones, así como por nuestra Política de Privacidad y
              Política de Cookies. Si no estás de acuerdo con alguna parte de estos términos, no
              deberás utilizar nuestros servicios.
            </p>
            <p className="leading-relaxed text-gray-600">
              Estos términos constituyen un acuerdo legal entre tú (el &quot;Usuario&quot;) y Opinafy (el
              &quot;Proveedor&quot;) que rige el acceso y uso de la plataforma, incluyendo todas las
              funcionalidades, herramientas y contenidos disponibles a través de opinafy.com.
            </p>
          </section>

          {/* 3. Descripción del servicio */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Descripción del servicio
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy es una plataforma SaaS (Software como Servicio) de recopilación y gestión de
              testimonios de clientes que permite a los usuarios:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                Crear formularios personalizados para solicitar testimonios a sus clientes.
              </li>
              <li>
                Gestionar, moderar y organizar los testimonios recibidos desde un panel de
                administración.
              </li>
              <li>
                Mostrar testimonios en sitios web externos mediante widgets embebibles
                personalizables.
              </li>
              <li>
                Importar testimonios existentes de otras plataformas.
              </li>
              <li>
                Acceder a métricas y estadísticas sobre los testimonios recopilados.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar, actualizar o discontinuar cualquier
              funcionalidad del servicio, con notificación previa razonable a los usuarios afectados.
            </p>
          </section>

          {/* 4. Registro de cuenta */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Registro de cuenta
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Para utilizar los servicios de Opinafy, es necesario crear una cuenta proporcionando
              información veraz, completa y actualizada. Al registrarte, te comprometes a:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                Proporcionar datos exactos y verídicos durante el proceso de registro.
              </li>
              <li>
                Mantener la confidencialidad de tus credenciales de acceso (correo electrónico y
                contraseña).
              </li>
              <li>
                Notificar inmediatamente a Opinafy cualquier uso no autorizado de tu cuenta o
                cualquier vulneración de seguridad.
              </li>
              <li>
                No crear más de una cuenta por persona o entidad, salvo autorización expresa.
              </li>
              <li>
                Ser mayor de 18 años o tener la capacidad legal para contratar servicios.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de suspender o cancelar cuentas que incumplan estos
              requisitos o que se utilicen de forma fraudulenta.
            </p>
          </section>

          {/* 5. Planes y facturación */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Planes y facturación
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy ofrece los siguientes planes de suscripción:
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              5.1. Plan Gratis
            </h3>
            <p className="leading-relaxed text-gray-600">
              Permite acceder a las funcionalidades básicas de la plataforma sin coste alguno, con
              limitaciones en el número de testimonios, proyectos y funcionalidades disponibles. Este
              plan no requiere datos de pago.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              5.2. Plan Pro - 9&euro;/mes
            </h3>
            <p className="leading-relaxed text-gray-600">
              Plan de pago mensual con funcionalidades ampliadas, mayor capacidad de testimonios y
              proyectos, personalización avanzada de widgets y acceso a características premium. La
              facturación se realiza mensualmente de forma automática a través de Stripe.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              5.3. Plan Business - 19&euro;/mes
            </h3>
            <p className="leading-relaxed text-gray-600">
              Plan premium con todas las funcionalidades disponibles, sin limitaciones de testimonios ni
              proyectos, soporte prioritario, integraciones avanzadas y funcionalidades exclusivas para
              equipos y agencias. La facturación se realiza mensualmente de forma automática a través de
              Stripe.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              5.4. Facturación
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Todos los pagos se procesan de forma segura a través de Stripe. Al suscribirte a un plan
              de pago, autorizas a Opinafy a realizar cargos recurrentes mensuales en el método de pago
              proporcionado. Los precios se muestran en euros (EUR) e incluyen los impuestos aplicables
              según la legislación vigente.
            </p>
            <p className="leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar los precios de los planes con un preaviso
              mínimo de 30 días. Los cambios de precio no afectarán al periodo de facturación en curso.
            </p>
          </section>

          {/* 6. Uso aceptable */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Uso aceptable
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Al utilizar Opinafy, te comprometes a no realizar ninguna de las siguientes acciones:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                Utilizar la plataforma para publicar testimonios falsos, engañosos o fraudulentos.
              </li>
              <li>
                Recopilar testimonios sin el consentimiento del autor o de forma ilegal.
              </li>
              <li>
                Utilizar el servicio para enviar spam, contenido no solicitado o comunicaciones masivas
                no autorizadas.
              </li>
              <li>
                Intentar acceder de forma no autorizada a cuentas de otros usuarios, sistemas o redes
                de Opinafy.
              </li>
              <li>
                Realizar ingeniería inversa, descompilar o desensamblar cualquier parte del software
                de la plataforma.
              </li>
              <li>
                Utilizar la plataforma para alojar, transmitir o distribuir contenido ilegal,
                difamatorio, obsceno, discriminatorio o que viole derechos de terceros.
              </li>
              <li>
                Sobrecargar o interferir con el funcionamiento normal de la plataforma mediante
                ataques, scripts automatizados u otros medios.
              </li>
              <li>
                Revender, sublicenciar o redistribuir los servicios de Opinafy sin autorización
                expresa.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              El incumplimiento de estas normas podrá resultar en la suspensión o cancelación inmediata
              de tu cuenta, sin derecho a reembolso.
            </p>
          </section>

          {/* 7. Contenido del usuario */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              7. Contenido del usuario
            </h2>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              7.1. Testimonios recopilados
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Los testimonios recopilados a través de Opinafy son proporcionados por los clientes de los
              usuarios de la plataforma. Como usuario, eres responsable de obtener el consentimiento
              adecuado de tus clientes para recopilar, almacenar y mostrar públicamente sus testimonios,
              de conformidad con la normativa de protección de datos aplicable.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              7.2. Derechos sobre el contenido
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Conservas todos los derechos sobre el contenido que subes o recopilas a través de la
              plataforma. Al utilizar Opinafy, nos concedes una licencia limitada, no exclusiva y
              revocable para almacenar, procesar y mostrar dicho contenido exclusivamente en el contexto
              de la prestación del servicio.
            </p>
            <p className="leading-relaxed text-gray-600">
              Opinafy no reclama la propiedad sobre los testimonios ni sobre ningún contenido generado
              por los usuarios. En caso de cancelación de la cuenta, los datos serán eliminados conforme
              a los plazos establecidos en nuestra Política de Privacidad.
            </p>
          </section>

          {/* 8. Propiedad intelectual */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              8. Propiedad intelectual
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              La plataforma Opinafy, incluyendo su código fuente, diseño, logotipos, marcas, textos,
              gráficos y demás elementos, es propiedad exclusiva de Opinafy y está protegida por las
              leyes de propiedad intelectual e industrial aplicables.
            </p>
            <p className="leading-relaxed text-gray-600">
              La suscripción a Opinafy te otorga una licencia limitada, personal, no exclusiva, no
              transferible y revocable para acceder y utilizar la plataforma conforme a estos términos.
              Esta licencia no incluye el derecho a copiar, modificar, distribuir o crear obras
              derivadas del software o cualquier parte de la plataforma.
            </p>
          </section>

          {/* 9. Limitación de responsabilidad */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              9. Limitación de responsabilidad
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              En la medida máxima permitida por la ley, Opinafy no será responsable de:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                Daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso
                o la imposibilidad de uso de la plataforma.
              </li>
              <li>
                La pérdida de datos, beneficios, ingresos o reputación comercial.
              </li>
              <li>
                Interrupciones del servicio, errores, virus o fallos técnicos ajenos a nuestro control
                razonable.
              </li>
              <li>
                La veracidad, exactitud o legalidad de los testimonios publicados por los usuarios o
                sus clientes.
              </li>
              <li>
                Las acciones de terceros proveedores de servicios (Stripe, Supabase, Vercel).
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              En cualquier caso, la responsabilidad total de Opinafy frente al usuario no superará el
              importe total abonado por el usuario durante los 12 meses anteriores al evento que origine
              la reclamación.
            </p>
          </section>

          {/* 10. Cancelación y reembolsos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              10. Cancelación y reembolsos
            </h2>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              10.1. Cancelación por parte del usuario
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Puedes cancelar tu suscripción en cualquier momento desde tu panel de cuenta. Al cancelar,
              mantendrás el acceso a las funcionalidades de tu plan hasta el final del periodo de
              facturación en curso. Una vez finalizado dicho periodo, tu cuenta se revertirá al plan
              gratuito.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              10.2. Cancelación por parte de Opinafy
            </h3>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de suspender o cancelar tu cuenta en caso de incumplimiento
              de estos términos, uso fraudulento o actividades que perjudiquen la plataforma o a otros
              usuarios. En caso de cancelación justificada por incumplimiento, no se realizarán
              reembolsos.
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              10.3. Política de reembolsos
            </h3>
            <p className="leading-relaxed text-gray-600">
              Dado que Opinafy ofrece un plan gratuito que permite evaluar el servicio antes de
              contratar un plan de pago, con carácter general no se realizan reembolsos. No obstante, se
              podrán estudiar casos excepcionales de forma individualizada contactando a
              hola@opinafy.com dentro de los primeros 14 días naturales desde la contratación del plan,
              en consonancia con el derecho de desistimiento reconocido por la legislación española de
              consumidores.
            </p>
          </section>

          {/* 11. Modificaciones de los términos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              11. Modificaciones de los términos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar estos Términos y Condiciones en cualquier
              momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. Para
              cambios sustanciales, notificaremos a los usuarios registrados con un preaviso mínimo de
              30 días a través del correo electrónico asociado a su cuenta.
            </p>
            <p className="leading-relaxed text-gray-600">
              El uso continuado de la plataforma tras la entrada en vigor de los nuevos términos
              constituirá la aceptación de los mismos. Si no estás de acuerdo con las modificaciones,
              deberás dejar de utilizar el servicio y cancelar tu cuenta.
            </p>
          </section>

          {/* 12. Contacto */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              12. Contacto
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Para cualquier consulta, sugerencia o reclamación relacionada con estos Términos y
              Condiciones, puedes ponerte en contacto con nosotros a través de:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>
                <strong>Correo electrónico:</strong> hola@opinafy.com
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Para la resolución de controversias, ambas partes se someten a los Juzgados y Tribunales
              competentes conforme a la legislación española. Asimismo, de conformidad con el
              Reglamento (UE) 524/2013, informamos de que la Comisión Europea facilita una plataforma
              de resolución de litigios en línea disponible en{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
