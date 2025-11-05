import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
      {/* Header */}
      <header className="border-b border-[#00C896]/20 bg-[#1A1A1A]/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#00C896] hover:text-[#00A876] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Términos y Condiciones de Uso</h1>
          <p className="text-gray-400 text-sm">
            Fecha de última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            ¡Hola! Bienvenido a nuestro servicio de{" "}
            <span className="text-[#00C896] font-semibold">Vendedor con IA</span>, una plataforma que te permite crear y
            gestionar un asistente de ventas automatizado con Inteligencia Artificial que funciona 24/7 a través de
            WhatsApp.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Estos Términos y Condiciones de Uso son de lectura obligatoria y su aceptación es condición para la
            contratación, registro y utilización de nuestro servicio.
          </p>
          <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-lg p-4 mt-6">
            <p className="text-[#FFB800] font-semibold mb-2">⚠️ IMPORTANTE</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              SI TIENES ALGUNA DUDA O NO ESTÁS DE ACUERDO CON ALGUNA DE LAS DISPOSICIONES DE ESTOS TÉRMINOS, NO DEBES
              CONTRATAR O UTILIZAR NUESTRO SERVICIO. EN SU LUGAR, CONTÁCTANOS A TRAVÉS DE NUESTRO CANAL DE ATENCIÓN PARA
              QUE PODAMOS EVALUAR TU SOLICITUD Y ACLARAR LO QUE SEA NECESARIO.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Índice de Contenidos</h2>
          <nav className="space-y-2">
            {[
              "1. Conceptos Importantes",
              "2. Descripción del Servicio",
              "3. Cómo Acceder al Servicio",
              "4. Condiciones para Usar el Servicio",
              "5. Requisitos de Suscripción",
              "6. Obligaciones del Proveedor",
              "7. Limitación de Responsabilidad",
              "8. Obligaciones del Usuario",
              "9. Conductas Prohibidas",
              "10. Política de Reembolsos",
              "11. Cancelación del Servicio",
              "12. Propiedad Intelectual",
              "13. Aviso de Privacidad",
              "14. Disposiciones Generales",
              "15. Soporte Técnico",
              "16. Contacto",
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="block text-gray-400 hover:text-[#00C896] transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section id="section-1" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">1. Conceptos Importantes</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-[#00C896] font-semibold mb-2">Cliente</h3>
                <p className="text-sm leading-relaxed">
                  Persona que efectúa el pago de la licencia de uso del Vendedor con IA y determina quiénes son los
                  usuarios autorizados.
                </p>
              </div>
              <div>
                <h3 className="text-[#00C896] font-semibold mb-2">Usuario</h3>
                <p className="text-sm leading-relaxed">
                  Persona autorizada por el Cliente para utilizar el servicio de Vendedor con IA.
                </p>
              </div>
              <div>
                <h3 className="text-[#00C896] font-semibold mb-2">Vendedor con IA</h3>
                <p className="text-sm leading-relaxed">
                  Software as a Service (SaaS) que proporciona un asistente de ventas automatizado con Inteligencia
                  Artificial que funciona 24/7 a través de WhatsApp, respondiendo mensajes, dando seguimiento y cerrando
                  ventas de forma automática.
                </p>
              </div>
              <div>
                <h3 className="text-[#00C896] font-semibold mb-2">Plan de Suscripción</h3>
                <p className="text-sm leading-relaxed">
                  Plan de contratación elegido por el Usuario, con características y precios específicos según el nivel
                  seleccionado.
                </p>
              </div>
              <div>
                <h3 className="text-[#00C896] font-semibold mb-2">Plataforma WhatsApp</h3>
                <p className="text-sm leading-relaxed">
                  Plataforma de propiedad de WhatsApp LLC, sobre la cual se ejecuta el Vendedor con IA, de acuerdo con
                  los términos de uso de WhatsApp disponibles en{" "}
                  <a
                    href="https://www.whatsapp.com/legal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C896] hover:underline"
                  >
                    https://www.whatsapp.com/legal/
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">2. Descripción del Servicio</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                El Vendedor con IA es un Software as a Service que permite al Cliente crear y gestionar un asistente de
                ventas automatizado con Inteligencia Artificial que funciona 24/7 a través de WhatsApp.
              </p>
              <p className="font-semibold text-white">El servicio incluye:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respuestas automáticas a mensajes de clientes potenciales</li>
                <li>Seguimiento automatizado de conversaciones</li>
                <li>Cierre de ventas automatizado</li>
                <li>Gestión de leads y clientes</li>
                <li>Personalización del agente de IA según tu negocio</li>
                <li>Integración con WhatsApp Business</li>
                <li>Panel de control para monitorear conversaciones</li>
                <li>Reportes y análisis de rendimiento</li>
                <li>Configuración de respuestas personalizadas</li>
                <li>Soporte técnico</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. Cómo Acceder al Servicio</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Para acceder al Vendedor con IA, el Usuario debe:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contratar un Plan de Suscripción activo</li>
                <li>Completar el registro con información válida</li>
                <li>Configurar su cuenta de WhatsApp Business</li>
                <li>Personalizar su agente de IA según las instrucciones proporcionadas</li>
                <li>Activar el servicio siguiendo el proceso de configuración</li>
              </ol>
              <p className="mt-4">
                El acceso al servicio se proporciona inmediatamente después de la confirmación del pago y completar el
                proceso de configuración inicial.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Condiciones para Usar el Servicio</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Para utilizar el Vendedor con IA, el Usuario debe:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ser mayor de 18 años o tener autorización de un tutor legal</li>
                <li>Proporcionar información verdadera, precisa y actualizada durante el registro</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Tener una cuenta activa de WhatsApp Business</li>
                <li>Cumplir con las políticas de uso de WhatsApp</li>
                <li>Utilizar el servicio de manera ética y legal</li>
                <li>No compartir su acceso con terceros no autorizados</li>
                <li>Mantener su Plan de Suscripción activo y al día</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">5. Requisitos de Suscripción</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                El uso del Vendedor con IA requiere un Plan de Suscripción activo. Los planes disponibles incluyen
                diferentes niveles de funcionalidades y límites de uso.
              </p>
              <p>
                El pago de la suscripción se realiza de forma anticipada según el período contratado (mensual,
                trimestral, anual, etc.).
              </p>
              <p>
                En caso de falta de pago o vencimiento de la suscripción, el acceso al servicio será suspendido hasta
                que se regularice el pago.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">6. Obligaciones del Proveedor</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Nos comprometemos a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar acceso al servicio de Vendedor con IA según el plan contratado</li>
                <li>Mantener la plataforma operativa y funcional</li>
                <li>Realizar mantenimientos programados con aviso previo cuando sea posible</li>
                <li>Proteger los datos del Usuario según nuestra Política de Privacidad</li>
                <li>Proporcionar soporte técnico según el plan contratado</li>
                <li>Actualizar y mejorar el servicio continuamente</li>
                <li>Notificar cambios importantes en los términos de servicio</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">7. Limitación de Responsabilidad</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                El Vendedor con IA es una herramienta de automatización que utiliza Inteligencia Artificial. Si bien nos
                esforzamos por proporcionar un servicio de alta calidad, no podemos garantizar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Resultados específicos de ventas o conversiones</li>
                <li>
                  Disponibilidad ininterrumpida del servicio (pueden ocurrir mantenimientos o interrupciones técnicas)
                </li>
                <li>Compatibilidad con todas las versiones y actualizaciones de WhatsApp</li>
                <li>Que las respuestas de la IA sean 100% precisas en todos los casos</li>
              </ul>
              <p className="mt-4">No somos responsables por:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pérdidas de ventas o ingresos</li>
                <li>Daños indirectos, incidentales o consecuentes</li>
                <li>Problemas causados por el mal uso del servicio por parte del Usuario</li>
                <li>Suspensión de cuentas de WhatsApp por violación de sus políticas</li>
                <li>Interrupciones causadas por terceros (WhatsApp, proveedores de internet, etc.)</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">8. Obligaciones del Usuario</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>El Usuario se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilizar el servicio de manera ética y legal</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                <li>Respetar las políticas de uso de WhatsApp</li>
                <li>No utilizar el servicio para spam o mensajes no solicitados</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Proporcionar información verdadera y actualizada</li>
                <li>Pagar puntualmente su suscripción</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Configurar y personalizar su agente de IA de manera responsable</li>
                <li>Monitorear las conversaciones y respuestas de su agente de IA</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">9. Conductas Prohibidas</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Está estrictamente prohibido utilizar el Vendedor con IA para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enviar spam o mensajes no solicitados masivos</li>
                <li>Realizar actividades ilegales o fraudulentas</li>
                <li>Promover contenido ofensivo, discriminatorio o ilegal</li>
                <li>Violar derechos de propiedad intelectual de terceros</li>
                <li>Intentar hackear, dañar o comprometer la seguridad del servicio</li>
                <li>Revender o redistribuir el acceso al servicio sin autorización</li>
                <li>Utilizar el servicio para competir directamente con nosotros</li>
                <li>Realizar ingeniería inversa del software</li>
                <li>Violar las políticas de WhatsApp o cualquier otra plataforma integrada</li>
                <li>Recopilar datos de usuarios sin su consentimiento</li>
              </ul>
              <p className="mt-4 font-semibold text-[#FFB800]">
                La violación de estas prohibiciones puede resultar en la suspensión o cancelación inmediata de la cuenta
                sin derecho a reembolso.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">10. Política de Reembolsos</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold text-white">Garantía de 7 Días</p>
              <p>
                Ofrecemos una garantía de satisfacción de 7 días. Si no estás satisfecho con el servicio, puedes
                solicitar un reembolso completo dentro de los primeros 7 días después de la compra.
              </p>
              <p className="font-semibold text-white mt-4">Condiciones para el Reembolso:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La solicitud debe realizarse dentro de los 7 días posteriores a la compra</li>
                <li>El Usuario debe haber intentado utilizar el servicio de buena fe</li>
                <li>No se otorgan reembolsos por violación de los términos de uso</li>
                <li>Los reembolsos se procesan en un plazo de 5-10 días hábiles</li>
              </ul>
              <p className="mt-4">
                Después del período de garantía de 7 días, no se otorgan reembolsos por suscripciones ya pagadas.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">11. Cancelación del Servicio</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold text-white">Por Decisión del Usuario:</p>
              <p>
                El Usuario puede cancelar su suscripción en cualquier momento desde su panel de control. La cancelación
                será efectiva al final del período de facturación actual.
              </p>
              <p className="mt-4 font-semibold text-white">Por Decisión del Proveedor:</p>
              <p>Nos reservamos el derecho de suspender o cancelar el acceso al servicio en caso de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violación de estos Términos y Condiciones</li>
                <li>Falta de pago</li>
                <li>Uso fraudulento o ilegal del servicio</li>
                <li>Conductas prohibidas</li>
                <li>Riesgo para la seguridad o integridad del servicio</li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">12. Propiedad Intelectual</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Todos los derechos de propiedad intelectual relacionados con el Vendedor con IA, incluyendo pero no
                limitado a software, diseño, contenido, marcas y logotipos, son propiedad exclusiva nuestra o de
                nuestros licenciantes.
              </p>
              <p>
                El Usuario recibe únicamente una licencia limitada, no exclusiva, no transferible y revocable para
                utilizar el servicio según estos términos.
              </p>
              <p>El Usuario no puede:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copiar, modificar o crear obras derivadas del software</li>
                <li>Realizar ingeniería inversa</li>
                <li>Vender, alquilar o sublicenciar el servicio</li>
                <li>Utilizar nuestras marcas sin autorización expresa</li>
              </ul>
            </div>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">13. Aviso de Privacidad</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                La recopilación, uso y protección de datos personales se rige por nuestra Política de Privacidad, que
                forma parte integral de estos Términos y Condiciones.
              </p>
              <p>
                Al utilizar el servicio, el Usuario acepta la recopilación y uso de información según lo descrito en
                nuestra Política de Privacidad.
              </p>
              <p>
                Nos comprometemos a proteger la privacidad y seguridad de los datos del Usuario mediante medidas
                técnicas y organizativas apropiadas.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">14. Disposiciones Generales</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold text-white">Modificaciones:</p>
              <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios
                serán notificados a los Usuarios y entrarán en vigor inmediatamente después de su publicación.
              </p>
              <p className="font-semibold text-white mt-4">Ley Aplicable:</p>
              <p>Estos términos se rigen por las leyes aplicables en la jurisdicción correspondiente.</p>
              <p className="font-semibold text-white mt-4">Divisibilidad:</p>
              <p>
                Si alguna disposición de estos términos se considera inválida o inaplicable, las demás disposiciones
                permanecerán en pleno vigor y efecto.
              </p>
              <p className="font-semibold text-white mt-4">Acuerdo Completo:</p>
              <p>
                Estos Términos y Condiciones, junto con la Política de Privacidad, constituyen el acuerdo completo entre
                el Usuario y nosotros respecto al uso del servicio.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section id="section-15" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">15. Soporte Técnico</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>Proporcionamos soporte técnico a nuestros Usuarios según el plan de suscripción contratado.</p>
              <p>El soporte incluye:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Asistencia con la configuración inicial</li>
                <li>Resolución de problemas técnicos</li>
                <li>Orientación sobre el uso de funcionalidades</li>
                <li>Actualizaciones y mejoras del servicio</li>
              </ul>
              <p className="mt-4">
                Los tiempos de respuesta varían según el plan contratado y la naturaleza de la consulta.
              </p>
            </div>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">16. Contacto</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Si tienes preguntas, dudas o necesitas asistencia relacionada con estos Términos y Condiciones o con el
                servicio de Vendedor con IA, puedes contactarnos a través de:
              </p>
              <div className="bg-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-4 mt-4">
                <p className="text-white font-semibold mb-2">Canales de Contacto:</p>
                <ul className="space-y-2">
                  <li>
                    <span className="text-[#00C896]">WhatsApp:</span> [Tu número de WhatsApp]
                  </li>
                  <li>
                    <span className="text-[#00C896]">Email:</span> [Tu email de soporte]
                  </li>
                  <li>
                    <span className="text-[#00C896]">Horario de atención:</span> Lunes a Viernes, 9:00 AM - 6:00 PM
                  </li>
                </ul>
              </div>
              <p className="mt-4">Estamos comprometidos a responder todas las consultas en el menor tiempo posible.</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#00C896]/20">
          <p className="text-center text-gray-400 text-sm">
            Al utilizar nuestro servicio, aceptas estos Términos y Condiciones en su totalidad.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </main>
    </div>
  )
}
