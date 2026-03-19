import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Opinafy',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-2 text-sm text-gray-400">
            Última actualización: marzo 2026
          </p>
          <h1 className="mb-10 text-3xl font-bold text-gray-900 sm:text-4xl">
            Política de Privacidad
          </h1>

          {/* 1. Responsable del tratamiento */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              1. Responsable del tratamiento
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El responsable del tratamiento de los datos personales recogidos a través del sitio web
              opinafy.com es:
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
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Opinafy se compromete a cumplir con la normativa vigente en materia de protección de datos
              personales, en especial el Reglamento (UE) 2016/679 General de Protección de Datos (RGPD)
              y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía
              de los derechos digitales (LOPDGDD).
            </p>
          </section>

          {/* 2. Datos que recopilamos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              2. Datos que recopilamos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              En función de cómo interactúes con nuestra plataforma, podemos recopilar los siguientes
              datos personales:
            </p>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.1. Datos de registro y cuenta
            </h3>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Contraseña (almacenada de forma cifrada)</li>
              <li>Nombre de la empresa u organización (opcional)</li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.2. Datos de facturación y pago
            </h3>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>Información de facturación (nombre, dirección, NIF/CIF)</li>
              <li>
                Datos de pago procesados a través de Stripe. Opinafy no almacena directamente los
                datos de tu tarjeta de crédito o débito; estos son gestionados de forma segura por
                Stripe conforme a los estándares PCI DSS.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.3. Testimonios y contenido del usuario
            </h3>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>Textos de los testimonios recopilados</li>
              <li>Nombre y datos del autor del testimonio (proporcionados por tus clientes)</li>
              <li>Fotografías de perfil o avatares asociados a testimonios</li>
              <li>Valoraciones numéricas (estrellas)</li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.4. Datos de uso y técnicos
            </h3>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Datos de interacción con los widgets de testimonios</li>
              <li>Cookies y tecnologías similares (consulta nuestra Política de Cookies)</li>
            </ul>
          </section>

          {/* 3. Finalidad del tratamiento */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              3. Finalidad del tratamiento
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Los datos personales que recopilamos son tratados con las siguientes finalidades:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>Prestación del servicio:</strong> gestionar tu cuenta, procesar tus
                suscripciones, recopilar y mostrar testimonios, y proporcionar soporte técnico.
              </li>
              <li>
                <strong>Facturación y cobros:</strong> gestionar los pagos asociados a los planes de
                suscripción a través de Stripe.
              </li>
              <li>
                <strong>Comunicaciones:</strong> enviarte notificaciones relacionadas con el servicio,
                actualizaciones importantes y, previo consentimiento, comunicaciones comerciales.
              </li>
              <li>
                <strong>Mejora del servicio:</strong> analizar el uso de la plataforma para mejorar la
                experiencia del usuario, corregir errores y desarrollar nuevas funcionalidades.
              </li>
              <li>
                <strong>Cumplimiento legal:</strong> cumplir con obligaciones legales, fiscales y
                regulatorias aplicables.
              </li>
              <li>
                <strong>Seguridad:</strong> prevenir fraudes, accesos no autorizados y otros usos
                indebidos de la plataforma.
              </li>
            </ul>
          </section>

          {/* 4. Base legal */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              4. Base legal del tratamiento (RGPD)
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              El tratamiento de tus datos personales se fundamenta en las siguientes bases legales
              conforme al artículo 6 del RGPD:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>Ejecución de un contrato (art. 6.1.b):</strong> el tratamiento es necesario
                para la prestación de los servicios contratados a través de la plataforma, incluyendo
                la gestión de tu cuenta y la suscripción.
              </li>
              <li>
                <strong>Consentimiento (art. 6.1.a):</strong> para el envío de comunicaciones
                comerciales y el uso de cookies no esenciales. Puedes retirar tu consentimiento en
                cualquier momento.
              </li>
              <li>
                <strong>Interés legítimo (art. 6.1.f):</strong> para la mejora del servicio, la
                seguridad de la plataforma y la prevención de fraudes.
              </li>
              <li>
                <strong>Obligación legal (art. 6.1.c):</strong> para el cumplimiento de obligaciones
                legales y fiscales, como la conservación de facturas y datos de facturación.
              </li>
            </ul>
          </section>

          {/* 5. Destinatarios de datos */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              5. Destinatarios de datos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Tus datos personales pueden ser comunicados a los siguientes terceros que actúan como
              encargados del tratamiento, con los que se han formalizado los correspondientes acuerdos
              de procesamiento de datos:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-600">
              <li>
                <strong>Supabase (base de datos):</strong> utilizado para el almacenamiento seguro de
                datos de usuarios, testimonios y configuración de la plataforma. Supabase opera con
                infraestructura en la Unión Europea y cumple con el RGPD.
              </li>
              <li>
                <strong>Stripe (procesador de pagos):</strong> encargado del procesamiento seguro de
                pagos y suscripciones. Stripe cumple con los estándares PCI DSS Nivel 1 y el RGPD.
                Los datos de tarjetas de crédito son procesados exclusivamente por Stripe.
              </li>
              <li>
                <strong>Vercel (hosting y despliegue):</strong> proveedor de infraestructura para el
                alojamiento y entrega del sitio web y la aplicación. Vercel cumple con el RGPD y
                ofrece opciones de alojamiento en la Unión Europea.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              No vendemos, alquilamos ni cedemos tus datos personales a terceros con fines comerciales.
              Solo se compartirán datos con terceros cuando sea estrictamente necesario para la
              prestación del servicio o cuando exista una obligación legal.
            </p>
          </section>

          {/* 6. Derechos del usuario */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              6. Derechos del usuario
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              De acuerdo con el RGPD y la LOPDGDD, como usuario tienes los siguientes derechos en
              relación con tus datos personales:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>Derecho de acceso:</strong> solicitar información sobre qué datos personales
                tuyos están siendo tratados.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos o
                incompletos.
              </li>
              <li>
                <strong>Derecho de supresión:</strong> solicitar la eliminación de tus datos personales
                cuando ya no sean necesarios para la finalidad para la que fueron recogidos.
              </li>
              <li>
                <strong>Derecho de portabilidad:</strong> recibir tus datos personales en un formato
                estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> oponerte al tratamiento de tus datos en
                determinadas circunstancias, incluyendo el envío de comunicaciones comerciales.
              </li>
              <li>
                <strong>Derecho de limitación:</strong> solicitar la limitación del tratamiento de tus
                datos en los supuestos previstos por la normativa.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Para ejercer cualquiera de estos derechos, puedes enviarnos un correo electrónico a{' '}
              <strong>hola@opinafy.com</strong> indicando el derecho que deseas ejercer y acompañando
              una copia de tu documento de identidad. Responderemos a tu solicitud en un plazo máximo
              de 30 días.
            </p>
          </section>

          {/* 7. Plazo de conservación */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              7. Plazo de conservación
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la
              finalidad para la que fueron recogidos:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>Datos de cuenta:</strong> mientras mantengas tu cuenta activa en la plataforma.
                Tras la cancelación, los datos se conservarán bloqueados durante los plazos legalmente
                establecidos.
              </li>
              <li>
                <strong>Datos de facturación:</strong> durante un mínimo de 5 años conforme a la
                legislación fiscal española.
              </li>
              <li>
                <strong>Testimonios:</strong> mientras el usuario que los recopiló mantenga su cuenta
                activa, salvo que el autor del testimonio solicite su eliminación.
              </li>
              <li>
                <strong>Datos de uso y analíticas:</strong> durante un máximo de 26 meses.
              </li>
            </ul>
          </section>

          {/* 8. Medidas de seguridad */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              8. Medidas de seguridad
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Opinafy implementa medidas técnicas y organizativas apropiadas para garantizar la
              seguridad de tus datos personales y protegerlos contra el tratamiento no autorizado o
              ilícito, la pérdida accidental, la destrucción o el daño. Entre estas medidas se
              incluyen:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                <strong>HTTPS:</strong> todas las comunicaciones entre tu navegador y nuestros
                servidores están cifradas mediante protocolo TLS/SSL.
              </li>
              <li>
                <strong>Cifrado de datos:</strong> las contraseñas se almacenan cifradas utilizando
                algoritmos de hashing seguros. Los datos sensibles se cifran en reposo y en tránsito.
              </li>
              <li>
                <strong>Row Level Security (RLS):</strong> nuestra base de datos implementa políticas
                de seguridad a nivel de fila que garantizan que cada usuario solo pueda acceder a sus
                propios datos.
              </li>
              <li>
                <strong>Copias de seguridad:</strong> se realizan copias de seguridad periódicas de
                los datos para prevenir pérdidas accidentales.
              </li>
              <li>
                <strong>Control de acceso:</strong> acceso restringido a los datos personales
                únicamente al personal autorizado que necesite tratar dichos datos.
              </li>
            </ul>
          </section>

          {/* 9. Transferencias internacionales */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              9. Transferencias internacionales
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Algunos de nuestros proveedores de servicios pueden tratar datos fuera del Espacio
              Económico Europeo (EEE). En esos casos, nos aseguramos de que existan garantías
              adecuadas para la protección de tus datos, tales como:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-600">
              <li>
                Decisión de adecuación de la Comisión Europea (por ejemplo, el Marco de Privacidad de
                Datos UE-EE.UU. para proveedores estadounidenses que estén certificados).
              </li>
              <li>
                Cláusulas contractuales tipo aprobadas por la Comisión Europea.
              </li>
              <li>
                Otras garantías adecuadas conforme al artículo 46 del RGPD.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Puedes solicitar más información sobre las garantías específicas aplicables a cada
              transferencia internacional escribiendo a hola@opinafy.com.
            </p>
          </section>

          {/* 10. Modificaciones */}
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              10. Modificaciones de la política de privacidad
            </h2>
            <p className="leading-relaxed text-gray-600">
              Opinafy se reserva el derecho de modificar la presente política de privacidad en cualquier
              momento para adaptarla a novedades legislativas, jurisprudenciales o a cambios en nuestros
              servicios. Cualquier modificación será publicada en esta página con la fecha de la última
              actualización. En caso de cambios significativos, te notificaremos a través del correo
              electrónico asociado a tu cuenta o mediante un aviso destacado en la plataforma.
            </p>
          </section>

          {/* 11. Contacto y AEPD */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              11. Contacto y Agencia Española de Protección de Datos
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">
              Para cualquier consulta, solicitud o reclamación relacionada con el tratamiento de tus
              datos personales, puedes ponerte en contacto con nosotros a través de:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-600">
              <li>
                <strong>Correo electrónico:</strong> hola@opinafy.com
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Si consideras que tus derechos en materia de protección de datos no han sido debidamente
              atendidos, tienes derecho a presentar una reclamación ante la Agencia Española de
              Protección de Datos (AEPD):
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
              <li>
                <strong>Sitio web:</strong>{' '}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  www.aepd.es
                </a>
              </li>
              <li>
                <strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Madrid, España
              </li>
              <li>
                <strong>Teléfono:</strong> 901 100 099 / 91 266 35 17
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
