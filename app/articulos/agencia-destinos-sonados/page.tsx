"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function AgenciaDestinosSonadosPage() {
  usePageTracking("article_agencia_destinos_sonados")

  const handleCTAClick = (buttonText: string, location: string, destination?: string) => {
    analytics.ctaClick(buttonText, location, destination)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#1A1A1A]/95 to-[#2A2A2A]/95 backdrop-blur-sm border-b border-[#00C896] shadow-lg shadow-[#00C896]/20 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-5 py-3">
          <Link href="/" className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </Link>
          <Link
            href="/demo"
            className="bg-gradient-to-br from-[#00C896] to-[#00A876] text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#00C896]/30"
            onClick={() => handleCTAClick("Demo Gratis", "header", "/demo")}
          >
            <span>🚀</span> <span className="hidden sm:inline">Demo Gratis</span>
            <span className="sm:hidden">Demo</span>
          </Link>
        </div>
      </header>

      {/* Back Button */}
      <div className="pt-20 pb-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#00C896] hover:text-[#00A876] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Volver a casos de estudio
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Servicios
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Agencia de Viajes 'Destinos Soñados' se declara en bancarrota
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              La imposibilidad de atender consultas urgentes de viajeros las 24/7 llevó a cancelaciones masivas y
              demandas legales.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Carmen López</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>5 de enero, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/agencia-destinos-sonados-HWuoC4bYP95Vm6szGePmPQhLldKy1M.jpg"
              alt="Agencia Destinos Soñados cerrada"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* El Problema */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
                <AlertTriangle size={28} />
                Cuando las Emergencias No Pueden Esperar
              </h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  "Destinos Soñados" era una agencia de viajes respetada con 12 años organizando vacaciones familiares.
                  Su especialidad: paquetes internacionales para familias de clase media. Todo se desmoronó cuando los
                  viajeros comenzaron a necesitar asistencia 24/7.
                </p>
                <p>
                  <strong className="text-red-400">El problema crítico:</strong> Los viajeros enfrentan emergencias a
                  cualquier hora - vuelos cancelados, hoteles sobreventa, documentos perdidos. Pero "Destinos Soñados"
                  solo respondía WhatsApp de 9 AM a 6 PM, lunes a viernes.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">La Crisis en Números:</h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <strong className="text-white">127 emergencias sin atender</strong> en horarios nocturnos
                    </li>
                    <li>
                      • <strong className="text-white">89 cancelaciones</strong> por falta de soporte
                    </li>
                    <li>
                      • <strong className="text-white">23 demandas legales</strong> por incumplimiento de servicios
                    </li>
                    <li>
                      • <strong className="text-white">$180,000 en reembolsos forzosos</strong>
                    </li>
                    <li>
                      • <strong className="text-white">456 reseñas negativas</strong> en plataformas de viajes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Las Dificultades que los Destruyeron</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🌍 Husos Horarios</h3>
                  <p className="text-gray-300 text-sm">
                    Clientes viajando por el mundo necesitaban ayuda a cualquier hora. Un problema en Tokio a las 3 AM
                    era una emergencia real.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⚠️ Emergencias Reales</h3>
                  <p className="text-gray-300 text-sm">
                    Vuelos cancelados, hoteles cerrados, documentos perdidos. Los viajeros necesitaban soluciones
                    inmediatas, no "te respondo mañana".
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">💸 Costos de Cancelación</h3>
                  <p className="text-gray-300 text-sm">
                    Sin soporte inmediato, los clientes cancelaban viajes completos. Perdían comisiones y enfrentaban
                    penalizaciones.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⚖️ Problemas Legales</h3>
                  <p className="text-gray-300 text-sm">
                    Familias varadas demandaron por incumplimiento. Los costos legales superaron las ganancias anuales.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso Real Devastador */}
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">📖 El Caso que los Hundió: Familia Rodríguez</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  <strong className="text-white">Diciembre 2023:</strong> La familia Rodríguez (2 adultos, 3 niños) viajó a Europa con un
                  paquete de $12,000. El 23 de diciembre, su vuelo de conexión en Madrid fue cancelado por tormenta.
                </p>
                <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-4">
                  <h3 className="text-orange-300 font-semibold mb-2">Cronología del Desastre:</h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li>
                      <strong className="text-yellow-500">11:30 PM (Madrid):</strong> Vuelo cancelado. Familia varada en aeropuerto con 3 niños
                      pequeños.
                    </li>
                    <li>
                      <strong className="text-yellow-500">11:35 PM:</strong> Envían WhatsApp urgente a "Destinos Soñados". Sin respuesta.
                    </li>
                    <li>
                      <strong className="text-yellow-500">2:00 AM:</strong> Niños llorando, sin hotel. Siguen enviando mensajes desesperados.
                    </li>
                    <li>
                      <strong className="text-yellow-500">6:00 AM:</strong> Gastan $800 en hotel de emergencia del aeropuerto.
                    </li>
                    <li>
                      <strong className="text-yellow-500">9:00 AM:</strong> Finalmente responde la agencia: "Buenos días, ¿en qué puedo ayudarle?"
                    </li>
                    <li>
                      <strong className="text-yellow-500">Resultado:</strong> Demanda por $25,000 + gastos legales. La agencia perdió el caso.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">Cómo la IA Hubiera Salvado la Agencia</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">asistente de viajes con IA</strong> hubiera manejado
                  perfectamente todas las emergencias:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Soporte 24/7 global:</strong> Respuesta inmediata sin importar la hora o zona horaria
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Base de datos de emergencias:</strong> Protocolos automáticos para cada tipo de crisis
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Conexión con proveedores:</strong> Rebooking automático de vuelos y hoteles
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Escalación inteligente:</strong> Alerta automática a humanos solo cuando es necesario
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplo Práctico */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ejemplo: Cómo Hubiera Funcionado con IA</h2>
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 11:35 PM
                    </div>
                    <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "URGENTE! Nuestro vuelo Madrid-Roma cancelado. Estamos varados con 3 niños. ¡Ayuda!"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">
                      IA 11:35 PM
                    </div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "¡Entiendo la urgencia! Ya estoy gestionando alternativas. He encontrado: 1) Hotel Marriott
                        Madrid (5 min del aeropuerto) - habitación familiar disponible. 2) Vuelo alternativo mañana 8:30
                        AM. ¿Confirmo ambos? Todo cubierto por el seguro."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 11:36 PM
                    </div>
                    <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">"¡SÍ! Por favor confirma todo. ¿Cómo llegamos al hotel?"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">
                      IA 11:37 PM
                    </div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "✅ Confirmado! Hotel reservado, vuelo rebookeado. Taxi ya en camino (10 min). Conductor:
                        Miguel, auto blanco ABC-123. Te envío vouchers por email. ¡Todo resuelto!"
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Crisis resuelta en 2 minutos vs. 9 horas de sufrimiento
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights Críticos para Agencias</h2>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 89% de emergencias de viaje ocurren fuera de horario comercial
                    </strong>
                    <p className="text-sm mt-1">
                      Los problemas no esperan. Vuelos se cancelan de madrugada, hoteles cierran inesperadamente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">Una emergencia sin resolver cuesta promedio $8,500</strong>
                    <p className="text-sm mt-1">
                      Entre reembolsos, penalizaciones, costos legales y pérdida de reputación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">
                      Los viajeros comparten experiencias negativas 3x más que positivas
                    </strong>
                    <p className="text-sm mt-1">
                      Una familia mal atendida genera 15+ reseñas negativas en promedio. El daño reputacional es
                      devastador.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El soporte 24/7 aumenta la satisfacción del cliente 340%
                    </strong>
                    <p className="text-sm mt-1">
                      Los viajeros pagan 25% más por agencias que garantizan soporte completo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Final Trágico */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Colapso Final</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  En marzo de 2024, "Destinos Soñados" se declaró en bancarrota. Las demandas legales, reembolsos
                  forzosos y pérdida de clientes fueron insostenibles.
                </p>
                <p>
                  <strong className="text-red-400">El golpe final:</strong> Una investigación de la autoridad de turismo
                  encontró "negligencia grave en el servicio al cliente". Perdieron todas las licencias y
                  certificaciones.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Perdimos 12 años de trabajo por no invertir en soporte 24/7. Ahora veo agencias nuevas con IA que
                    manejan 10x más clientes que nosotros." - Roberto Mendoza, ex-director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#00C896] to-[#00A876]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            No Dejes que las Emergencias Hundan tu Agencia
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ofrece soporte 24/7 real con IA. Resuelve emergencias al instante y
            <strong> convierte cada crisis en una oportunidad de fidelización</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/demo"
              className="bg-white text-[#00C896] px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={() => handleCTAClick("Haz un Prueba Gratis", "article_cta", "/demo")}
            >
              <Zap size={24} />
              Haz un Prueba Gratis
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="text-white/70 text-sm">
            ✅ Sin tarjeta de crédito • ✅ Configuración en 5 minutos • ✅ Soporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-t border-[#00C896]/20 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="flex items-center justify-center gap-2 text-white font-semibold text-lg mb-4">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </Link>
          <p className="text-white/60 text-sm">
            © 2024 Vendedores Virtuales con Inteligencia Artificial. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
