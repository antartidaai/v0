"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function ClinicaSonrisasPage() {
  usePageTracking("article_clinica_sonrisas")

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
              Salud
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Clínica Dental 'Sonrisas' cierra por pérdida de pacientes vía WhatsApp
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Los pacientes buscaron otras opciones al no recibir respuestas inmediatas para emergencias dentales fuera
              de horario.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Dr. Miguel Torres</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>28 de diciembre, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/clinica-sonrisas%281%29%281%29-Sra9oDdTI4iX5bYalmcdq2BMuErnpa.jpg"
              alt="Clínica Sonrisas cerrada"
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
                Cuando el Dolor No Puede Esperar
              </h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  La Clínica Dental "Sonrisas" del Dr. Miguel Torres era reconocida en su zona por tratamientos de
                  calidad. Durante 9 años construyó una base sólida de pacientes familiares. Pero cuando las emergencias
                  dentales comenzaron a llegar por WhatsApp, todo cambió.
                </p>
                <p>
                  <strong className="text-red-400">El problema crítico:</strong> Las emergencias dentales no respetan
                  horarios. Dolor de muelas a las 2 AM, dientes rotos en fines de semana, infecciones que no pueden
                  esperar. Pero la clínica solo respondía WhatsApp en horario de consulta.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">La Crisis de Confianza:</h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <strong className="text-white">234 emergencias sin atender</strong> en horarios nocturnos
                    </li>
                    <li>
                      • <strong className="text-white">67% de pacientes</strong> buscaron otras clínicas
                    </li>
                    <li>
                      • <strong className="text-white">156 citas canceladas</strong> por falta de confianza
                    </li>
                    <li>
                      • <strong className="text-white">$89,000 en ingresos perdidos</strong> en 8 meses
                    </li>
                    <li>
                      • <strong className="text-white">78 reseñas negativas</strong> sobre "falta de disponibilidad"
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Por Qué Perdieron la Confianza de los Pacientes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🦷 Emergencias Reales</h3>
                  <p className="text-gray-300 text-sm">
                    Dolor severo, dientes rotos, infecciones. Los pacientes necesitaban orientación inmediata, no "te
                    respondo mañana".
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⏰ Horarios Limitados</h3>
                  <p className="text-gray-300 text-sm">
                    Solo respondían 9 AM - 6 PM. Las emergencias dentales ocurren 24/7, especialmente noches y fines de
                    semana.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🏥 Competencia Disponible</h3>
                  <p className="text-gray-300 text-sm">
                    Otras clínicas con guardias 24/7 capturaron a sus pacientes. La disponibilidad se volvió factor
                    decisivo.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">💔 Pérdida de Confianza</h3>
                  <p className="text-gray-300 text-sm">
                    Los pacientes interpretaron la falta de respuesta como "no les importo". Buscaron clínicas más
                    "comprometidas".
                  </p>
                </div>
              </div>
            </div>

            {/* Caso Real */}
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">📖 El Caso que Marcó el Declive</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  <strong className="text-white">Sábado 3:30 AM:</strong> María Fernández, paciente de 8 años, despertó con dolor severo por
                  infección dental. Su hija de 6 años lloraba inconsolable.
                </p>
                <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-4">
                  <h3 className="text-orange-300 font-semibold mb-2">Lo que Pasó:</h3>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li>
                      <strong className="text-yellow-500">3:30 AM:</strong> Envía WhatsApp desesperado: "Dr. Torres, mi hija tiene dolor terrible,
                      ¿qué hago?"
                    </li>
                    <li>
                      <strong className="text-yellow-500">3:45 AM:</strong> Segundo mensaje: "Por favor, necesito ayuda urgente"
                    </li>
                    <li>
                      <strong className="text-yellow-500">6:00 AM:</strong> Llevó a su hija a emergencias del hospital (costo: $340)
                    </li>
                    <li>
                      <strong className="text-yellow-500">9:00 AM:</strong> Dr. Torres responde: "Buenos días, ¿cómo puedo ayudarle?"
                    </li>
                    <li>
                      <strong className="text-yellow-500">Resultado:</strong> María cambió de dentista. "Si no está cuando lo necesito, no confío en
                      él"
                    </li>
                  </ul>
                </div>
                <p className="text-orange-300 font-semibold">
                  María era paciente desde hace 8 años y traía a toda su familia. Su salida significó $12,000 anuales
                  perdidos.
                </p>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">Cómo la IA Hubiera Salvado la Clínica</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">asistente dental con IA</strong> hubiera manejado perfectamente
                  las emergencias:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Triaje automático:</strong> Evalúa síntomas y determina nivel de urgencia al instante
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Primeros auxilios dentales:</strong> Instrucciones inmediatas para aliviar dolor
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Agenda automática:</strong> Programa citas de emergencia según disponibilidad real
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Seguimiento post-consulta:</strong> Recordatorios de medicación y cuidados
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
                      Paciente 3:30 AM
                    </div>
                    <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "Dr. Torres, mi hija tiene dolor terrible en una muela, ¿qué hago?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">IA 3:30 AM</div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "Entiendo la urgencia. Para aliviar el dolor inmediatamente: 1) Ibuprofeno infantil según peso
                        2) Compresas frías 15 min 3) Enjuague con agua tibia y sal. ¿El dolor es constante o solo al
                        masticar?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Paciente 3:32 AM
                    </div>
                    <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">"Constante y tiene la mejilla hinchada"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">IA 3:32 AM</div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-gray-200">
                        "Indica infección. URGENTE: Te agendé cita de emergencia hoy 8:00 AM con Dr. Torres. Mientras
                        tanto, sigue las instrucciones. Si empeora, ve a emergencias. Te envío recordatorio a las 7:30
                        AM."
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Paciente tranquila, dolor aliviado, cita programada - Confianza mantenida
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights para Clínicas Dentales</h2>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 73% de emergencias dentales ocurren fuera de horario comercial
                    </strong>
                    <p className="text-sm mt-1">
                      Noches, fines de semana, feriados. El dolor dental no espera citas programadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">
                      Un paciente perdido por emergencia = $1,800 anuales promedio perdidos
                    </strong>
                    <p className="text-sm mt-1">
                      Incluye tratamientos familiares, limpiezas, ortodoncias. El costo de no responder es altísimo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">
                      La disponibilidad 24/7 aumenta la retención de pacientes 89%
                    </strong>
                    <p className="text-sm mt-1">
                      Los pacientes valoran saber que pueden contar con su dentista cuando lo necesitan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 67% de pacientes cambia de dentista por falta de disponibilidad
                    </strong>
                    <p className="text-sm mt-1">
                      En salud, la confianza es todo. Si no estás cuando te necesitan, buscan quien sí esté.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Final */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Cierre Inevitable</h2>
              <div className="text-gray-200 space-y-4">
                <p>
                  En junio de 2024, la Clínica "Sonrisas" cerró sus puertas. El Dr. Torres perdió el 70% de sus
                  pacientes en 8 meses. Los costos fijos sin ingresos suficientes hicieron insostenible el negocio.
                </p>
                <p>
                  <strong className="text-red-400">La ironía:</strong> Una clínica nueva abrió en el mismo edificio con
                  "Atención 24/7 por WhatsApp". En 3 meses capturó a la mayoría de ex-pacientes de "Sonrisas".
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Perdí 9 años de trabajo por no entender que la disponibilidad es parte del tratamiento. Ahora veo
                    dentistas jóvenes con IA que atienden mejor que yo." - Dr. Miguel Torres
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">No Pierdas la Confianza de tus Pacientes</h2>
          <p className="text-xl text-white/90 mb-8">
            Ofrece tranquilidad 24/7 con IA especializada en salud. Atiende emergencias al instante y
            <strong> mantén la confianza que tanto te costó construir</strong>.
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
