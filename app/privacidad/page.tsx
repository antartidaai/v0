import Link from "next/link"
import { Shield, Lock, Eye, FileText, Users, Database, Clock, Mail } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]">
      {/* Header */}
      <header className="border-b border-[#00C896]/20 bg-[#1A1A1A]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-[#00C896] hover:text-[#00A876] transition-colors">
            Vendedores con IA
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 mb-6">
            <Shield className="w-8 h-8 text-[#00C896]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Aviso de Privacidad</h1>
          <p className="text-lg text-gray-300 mb-2">
            Fecha de actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tu privacidad es nuestra prioridad. Este aviso explica cómo recopilamos, usamos y protegemos tus datos
            personales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introducción</h2>
            <p className="text-gray-300 mb-4">
              En <span className="text-[#00C896] font-semibold">Vendedores con IA</span>, tenemos un compromiso serio
              con la privacidad y la protección de los datos personales de todas las personas impactadas por nuestras
              actividades. Por eso, creamos este Aviso de Privacidad para informarte cómo recopilamos, utilizamos,
              procesamos y compartimos, cuando sea estrictamente necesario, datos personales cuando utilizas nuestra
              plataforma.
            </p>
            <p className="text-gray-300 mb-4">
              <span className="text-[#00C896] font-semibold">Vendedores con IA</span> es un Software as a Service (SaaS)
              que permite a sus usuarios crear y gestionar vendedores virtuales con inteligencia artificial para
              automatizar ventas a través de WhatsApp 24/7, durante el uso de la licencia por el período contratado en
              el Plan de Suscripción adquirido.
            </p>
            <p className="text-gray-300">
              Lee atentamente este documento y, si tienes alguna pregunta o deseas ejercer tus derechos como titular de
              datos, contáctanos inmediatamente a través de nuestro canal de atención o correo electrónico proporcionado
              al final de este aviso.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#00C896]" />
              Índice de Contenidos
            </h2>
            <ol className="space-y-2 text-gray-300">
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">1. Conceptos Importantes</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">
                2. ¿A Quién Se Aplica Este Aviso?
              </li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">
                3. Roles y Responsabilidades en el Tratamiento de Datos
              </li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">
                4. ¿Qué Datos Recopilamos y Cómo Los Usamos?
              </li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">5. Compartir Datos Personales</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">6. Enlaces a Sitios de Terceros</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">7. Cómo Protegemos Tus Datos</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">
                8. Tus Derechos y Cómo Ejercerlos
              </li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">
                9. ¿Por Cuánto Tiempo Almacenamos Tus Datos?
              </li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">10. Disposiciones Generales</li>
              <li className="hover:text-[#00C896] transition-colors cursor-pointer">11. Canal de Comunicación</li>
            </ol>
          </div>

          {/* Section 1: Important Concepts */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Conceptos Importantes</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Datos Personales</h3>
                <p>
                  Información que identifica a una persona natural, como por ejemplo: nombre, email, teléfono, dirección
                  IP, etc.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Datos Sensibles</h3>
                <p>
                  Datos personales sobre origen racial o étnico, opiniones políticas, creencias religiosas, datos de
                  salud, orientación sexual, datos biométricos o genéticos.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Controlador de Datos</h3>
                <p>
                  La entidad responsable de las decisiones referentes al tratamiento de datos personales. En este caso,
                  Vendedores con IA.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Procesador de Datos</h3>
                <p>Quien realiza el tratamiento de datos según las instrucciones del Controlador.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Usuario/Cliente</h3>
                <p>
                  Persona que contrata y utiliza la plataforma Vendedores con IA para crear y gestionar vendedores
                  virtuales con IA.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Anonimización</h3>
                <p>
                  Proceso por el cual los datos personales se transforman de manera que sea imposible identificar a la
                  persona a quien se refieren.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Who This Applies To */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#00C896]" />
              2. ¿A Quién Se Aplica Este Aviso?
            </h2>
            <p className="text-gray-300 mb-4">Este Aviso de Privacidad se aplica a:</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>
                <span className="text-[#00C896] font-semibold">Visitantes del sitio web:</span> Personas que navegan por
                nuestro sitio web sin crear una cuenta.
              </li>
              <li>
                <span className="text-[#00C896] font-semibold">Usuarios registrados:</span> Personas que crean una
                cuenta y utilizan nuestra plataforma para crear vendedores con IA.
              </li>
              <li>
                <span className="text-[#00C896] font-semibold">Clientes:</span> Personas que contratan nuestros
                servicios mediante un plan de suscripción.
              </li>
              <li>
                <span className="text-[#00C896] font-semibold">Contactos de WhatsApp:</span> Personas que interactúan
                con los vendedores virtuales creados por nuestros usuarios.
              </li>
            </ul>
          </div>

          {/* Section 3: Roles and Responsibilities */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Roles y Responsabilidades en el Tratamiento de Datos
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Vendedores con IA como Controlador</h3>
                <p className="mb-2">Actuamos como Controlador de Datos cuando:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Recopilamos datos de visitantes del sitio web</li>
                  <li>Procesamos información de registro y autenticación de usuarios</li>
                  <li>Gestionamos suscripciones y pagos</li>
                  <li>Enviamos comunicaciones de marketing (con consentimiento)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00C896] mb-2">Usuarios como Controladores</h3>
                <p className="mb-2">Nuestros usuarios actúan como Controladores de Datos cuando:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Configuran y personalizan sus vendedores virtuales con IA</li>
                  <li>Cargan y gestionan listas de contactos de WhatsApp</li>
                  <li>Definen las respuestas y flujos de conversación</li>
                  <li>Acceden a conversaciones y datos de sus clientes</li>
                </ul>
                <p className="mt-2 text-sm text-gray-400">
                  En estos casos, Vendedores con IA actúa como Procesador de Datos, siguiendo las instrucciones del
                  usuario.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Data Collection */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-[#00C896]" />
              4. ¿Qué Datos Recopilamos y Cómo Los Usamos?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.1. Datos de Registro y Cuenta</h3>
                <p className="text-gray-300 mb-2">Cuando creas una cuenta, recopilamos:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Contraseña (encriptada)</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Información de la empresa (opcional)</li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="text-[#00C896] font-semibold">Finalidad:</span> Crear y gestionar tu cuenta,
                  autenticación, comunicación sobre el servicio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.2. Datos de Pago</h3>
                <p className="text-gray-300 mb-2">Para procesar pagos, recopilamos:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Información de tarjeta de crédito/débito (procesada por Stripe)</li>
                  <li>Dirección de facturación</li>
                  <li>Historial de transacciones</li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="text-[#00C896] font-semibold">Nota importante:</span> No almacenamos información
                  completa de tarjetas de crédito. Utilizamos Stripe como procesador de pagos seguro.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.3. Datos de Uso de la Plataforma</h3>
                <p className="text-gray-300 mb-2">Recopilamos automáticamente:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de navegación</li>
                  <li>Configuraciones del vendedor con IA</li>
                  <li>Métricas de uso y rendimiento</li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="text-[#00C896] font-semibold">Finalidad:</span> Mejorar el servicio, análisis de uso,
                  soporte técnico, seguridad.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.4. Datos de Conversaciones de WhatsApp</h3>
                <p className="text-gray-300 mb-2">
                  Cuando tus vendedores con IA interactúan con clientes a través de WhatsApp, se almacenan:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Mensajes enviados y recibidos</li>
                  <li>Números de teléfono de contactos</li>
                  <li>Nombres de contactos (si están disponibles)</li>
                  <li>Historial de conversaciones</li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="text-[#00C896] font-semibold">Importante:</span> Tú eres el Controlador de estos
                  datos. Nosotros solo los procesamos según tus instrucciones y configuraciones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.5. Cookies y Tecnologías Similares</h3>
                <p className="text-gray-300 mb-2">Utilizamos cookies para:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Mantener tu sesión activa</li>
                  <li>Recordar tus preferencias</li>
                  <li>Análisis de tráfico web (Google Analytics)</li>
                  <li>Publicidad personalizada (con tu consentimiento)</li>
                </ul>
                <p className="text-gray-400 text-sm mt-2">
                  Puedes gestionar las cookies desde la configuración de tu navegador.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Data Sharing */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartir Datos Personales</h2>
            <p className="text-gray-300 mb-4">
              Compartimos tus datos personales solo cuando es estrictamente necesario:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-[#00C896] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Proveedores de Servicios</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>
                    <span className="text-[#00C896]">Stripe:</span> Procesamiento de pagos
                  </li>
                  <li>
                    <span className="text-[#00C896]">Vercel:</span> Hosting y infraestructura
                  </li>
                  <li>
                    <span className="text-[#00C896]">OpenAI/Anthropic:</span> Procesamiento de IA para vendedores
                    virtuales
                  </li>
                  <li>
                    <span className="text-[#00C896]">WhatsApp Business API:</span> Envío y recepción de mensajes
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-[#00C896] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Requisitos Legales</h3>
                <p className="text-gray-300">
                  Podemos divulgar datos si es requerido por ley, orden judicial, o para proteger nuestros derechos
                  legales.
                </p>
              </div>
              <div className="border-l-4 border-[#00C896] pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Transferencias Empresariales</h3>
                <p className="text-gray-300">
                  En caso de fusión, adquisición o venta de activos, tus datos pueden ser transferidos. Te notificaremos
                  de cualquier cambio.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Third-Party Links */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Enlaces a Sitios de Terceros</h2>
            <p className="text-gray-300">
              Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de
              privacidad de estos sitios. Te recomendamos leer sus políticas de privacidad antes de proporcionar
              información personal.
            </p>
          </div>

          {/* Section 7: Data Protection */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#00C896]" />
              7. Cómo Protegemos Tus Datos
            </h2>
            <p className="text-gray-300 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] border border-[#00C896]/10 rounded-lg p-4">
                <h3 className="text-[#00C896] font-semibold mb-2">Encriptación</h3>
                <p className="text-gray-300 text-sm">
                  Todos los datos se transmiten mediante SSL/TLS y se almacenan encriptados.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#00C896]/10 rounded-lg p-4">
                <h3 className="text-[#00C896] font-semibold mb-2">Acceso Restringido</h3>
                <p className="text-gray-300 text-sm">Solo personal autorizado tiene acceso a datos personales.</p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#00C896]/10 rounded-lg p-4">
                <h3 className="text-[#00C896] font-semibold mb-2">Monitoreo Continuo</h3>
                <p className="text-gray-300 text-sm">Sistemas de detección de intrusiones y auditorías regulares.</p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#00C896]/10 rounded-lg p-4">
                <h3 className="text-[#00C896] font-semibold mb-2">Backups Seguros</h3>
                <p className="text-gray-300 text-sm">Copias de seguridad encriptadas y almacenadas de forma segura.</p>
              </div>
            </div>
          </div>

          {/* Section 8: Your Rights */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-[#00C896]" />
              8. Tus Derechos y Cómo Ejercerlos
            </h2>
            <p className="text-gray-300 mb-4">Tienes los siguientes derechos sobre tus datos personales:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Acceso</h3>
                  <p className="text-gray-300 text-sm">
                    Solicitar una copia de los datos personales que tenemos sobre ti.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Rectificación</h3>
                  <p className="text-gray-300 text-sm">Corregir datos inexactos o incompletos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Eliminación</h3>
                  <p className="text-gray-300 text-sm">
                    Solicitar la eliminación de tus datos personales (derecho al olvido).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Portabilidad</h3>
                  <p className="text-gray-300 text-sm">Recibir tus datos en un formato estructurado y de uso común.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Oposición</h3>
                  <p className="text-gray-300 text-sm">Oponerte al procesamiento de tus datos para ciertos fines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho de Limitación</h3>
                  <p className="text-gray-300 text-sm">Solicitar la limitación del procesamiento de tus datos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold">Derecho a Retirar Consentimiento</h3>
                  <p className="text-gray-300 text-sm">
                    Retirar tu consentimiento en cualquier momento cuando el procesamiento se base en consentimiento.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#00C896]/10 border border-[#00C896]/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Para ejercer cualquiera de estos derechos, contáctanos a través de nuestro canal de comunicación al
                final de este aviso. Responderemos a tu solicitud dentro de 30 días.
              </p>
            </div>
          </div>

          {/* Section 9: Data Retention */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#00C896]" />
              9. ¿Por Cuánto Tiempo Almacenamos Tus Datos?
            </h2>
            <p className="text-gray-300 mb-4">
              Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en
              este aviso:
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-[#00C896] font-semibold">Datos de cuenta:</span> Mientras tu cuenta esté activa
                  o según sea necesario para prestarte servicios.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-[#00C896] font-semibold">Datos de facturación:</span> Hasta 7 años después de la
                  última transacción (requisitos legales y fiscales).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-[#00C896] font-semibold">Conversaciones de WhatsApp:</span> Según tu
                  configuración, puedes eliminarlas en cualquier momento desde tu panel.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00C896] mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-[#00C896] font-semibold">Datos de marketing:</span> Hasta que retires tu
                  consentimiento o solicites la eliminación.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Después de estos períodos, los datos se eliminan de forma segura o se anonimizan para análisis
              estadísticos.
            </p>
          </div>

          {/* Section 10: General Provisions */}
          <div className="bg-[#2A2A2A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Disposiciones Generales</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cambios a Este Aviso</h3>
                <p>
                  Podemos actualizar este Aviso de Privacidad periódicamente. Te notificaremos de cambios significativos
                  por correo electrónico o mediante un aviso destacado en nuestro sitio web. La fecha de la última
                  actualización se muestra al inicio de este documento.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Menores de Edad</h3>
                <p>
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente datos de
                  menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Transferencias Internacionales</h3>
                <p>
                  Tus datos pueden ser transferidos y procesados en países fuera de tu país de residencia. Implementamos
                  salvaguardas adecuadas para proteger tus datos según las leyes aplicables.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ley Aplicable</h3>
                <p>
                  Este Aviso de Privacidad se rige por las leyes de protección de datos aplicables, incluyendo GDPR
                  (Europa), LGPD (Brasil), y otras regulaciones locales según corresponda.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11: Contact */}
          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#00C896]" />
              11. Canal de Comunicación
            </h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre este Aviso de Privacidad, deseas ejercer tus derechos como titular de datos, o
              tienes alguna inquietud sobre cómo manejamos tu información personal, contáctanos:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00C896] flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Correo electrónico:</p>
                  <a
                    href="mailto:privacidad@vendedoresconai.com"
                    className="text-[#00C896] hover:text-[#00A876] font-semibold"
                  >
                    privacidad@vendedoresconai.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#00C896] flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Oficial de Protección de Datos:</p>
                  <a
                    href="mailto:dpo@vendedoresconai.com"
                    className="text-[#00C896] hover:text-[#00A876] font-semibold"
                  >
                    dpo@vendedoresconai.com
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Nos comprometemos a responder a todas las consultas dentro de 30 días hábiles.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#00C896] hover:text-[#00A876] font-semibold transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00C896]/20 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Vendedores con IA. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/terminos" className="hover:text-[#00C896] transition-colors">
              Términos y Condiciones
            </Link>
            <span>•</span>
            <Link href="/privacidad" className="hover:text-[#00C896] transition-colors">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
