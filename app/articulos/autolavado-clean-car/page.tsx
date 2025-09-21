"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function AutolavadoCleanCarPage() {
  usePageTracking("article_autolavado_clean_car")

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
              Autolavado 'Clean Car' cierra tras perder clientes por WhatsApp desatendido
            </h1>
            <p className="text-lg text-white/80 mb-6">
              La competencia con respuesta automática se llevó todos sus clientes habituales en solo 3 meses.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Jorge Ramírez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>15 de diciembre, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>4 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/autolavado-clean-car%281%29-XYxYWoZhbWvma81FMApkG0rHHqmZhF.jpg"
              alt="Autolavado Clean Car cerrado"
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
                La Competencia que Cambió Todo en 3 Meses
              </h2>
              <div className="text-white/80 space-y-4">
                <p>
                  "Clean Car" era el autolavado de referencia en su sector durante 11 años. Tenían clientes fieles que
                  venían semanalmente y un servicio de calidad reconocido. Parecía un negocio sólido e inquebrantable.
                </p>
                <p>
                  <strong className="text-red-400">Todo cambió en septiembre 2023</strong> cuando abrió "AutoSpa Pro" a
                  2 cuadras. No tenían mejor servicio ni mejores precios. Su única ventaja: respondían WhatsApp al
                  instante, 24/7.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">La Migración Masiva:</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>
                      • <strong className="text-white">89% de clientes habituales</strong> se fueron en 3 meses
                    </li>
                    <li>
                      • <strong className="text-white">156 reservas canceladas</strong> por falta de respuesta
                    </li>
                    <li>
                      • <strong className="text-white">$67,000 en ingresos perdidos</strong> en un trimestre
                    </li>
                    <li>
                      • <strong className="text-white">12 empleados despedidos</strong> por falta de trabajo
                    </li>
                    <li>
                      • <strong className="text-white">234 reseñas negativas</strong> sobre "no responden WhatsApp"
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cómo Perdieron 11 Años de Trabajo en 3 Meses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">📱 Cambio de Hábitos</h3>
                  <p className="text-white/70 text-sm">
                    Los clientes dejaron de llamar y empezaron a usar WhatsApp. "Clean Car" no se adaptó a tiempo al
                    cambio.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⚡ Competencia Ágil</h3>
                  <p className="text-white/70 text-sm">
                    "AutoSpa Pro" respondía en 30 segundos, agendaba citas al instante y enviaba recordatorios
                    automáticos.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🕐 Respuesta Tardía</h3>
                  <p className="text-white/70 text-sm">
                    "Clean Car" tardaba 3-4 horas en responder. Para entonces, los clientes ya habían agendado en otro
                    lado.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🔄 Sin Seguimiento</h3>
                  <p className="text-white/70 text-sm">
                    No hacían seguimiento post-servicio. Los clientes se olvidaban de volver sin recordatorios
                    automáticos.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso Real Devastador */}
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">📖 El Cliente que Marcó el Punto de Quiebre</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  <strong className="text-white">Roberto Silva</strong> era cliente VIP de "Clean Car" desde hace 7 años. Llevaba 3 autos
                  semanalmente y gastaba $800 mensuales. Era el tipo de cliente que mantiene un negocio a flote.
                </p>
                <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-4">
                  <h3 className="text-orange-300 font-semibold mb-2">La Gota que Derramó el Vaso:</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>
                      <strong className="text-white">Lunes 10:30 AM:</strong> Roberto envía WhatsApp: "Necesito lavar 2 autos hoy. ¿Tienen
                      disponibilidad 2:00 PM?"
                    </li>
                    <li>
                      <strong className="text-white">10:35 AM:</strong> Sin respuesta, prueba con "AutoSpa Pro" por curiosidad
                    </li>
                    <li>
                      <strong className="text-white">10:36 AM:</strong> "AutoSpa Pro" responde: "¡Hola Roberto! Sí tenemos. Te reservo 2:00 PM.
                      ¿Lavado completo?"
                    </li>
                    <li>
                      <strong className="text-white">2:00 PM:</strong> Roberto va a "AutoSpa Pro". Excelente servicio y atención
                    </li>
                    <li>
                      <strong className="text-white">3:30 PM:</strong> "Clean Car" finalmente responde: "Hola, ¿en qué podemos ayudarte?"
                    </li>
                    <li>
                      <strong className="text-white">Resultado:</strong> Roberto nunca volvió. "Si no responden cuando los necesito, no son
                      confiables"
                    </li>
                  </ul>
                </div>
                <p className="text-orange-300 font-semibold">
                  Pérdida: $9,600 anuales de un solo cliente. Tiempo de retraso: 5 horas. Costo por hora: $1,920.
                </p>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">Cómo la IA Hubiera Salvado el Negocio</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">asistente de autolavado con IA</strong> hubiera mantenido a
                  todos los clientes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Reservas instantáneas:</strong> Agenda automática con disponibilidad en tiempo real
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Recordatorios automáticos:</strong> Notifica a clientes habituales cuando toca lavado
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Upselling inteligente:</strong> Sugiere servicios adicionales según historial
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Gestión de esperas:</strong> Informa tiempos reales y ofrece alternativas
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
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 10:30 AM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">"Necesito lavar 2 autos hoy. ¿Tienen disponibilidad 2:00 PM?"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">
                      IA 10:30 AM
                    </div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">
                        "¡Hola Roberto! 😊 Perfecto, tengo disponible 2:00 PM para 2 autos. Como cliente VIP, te
                        recomiendo el paquete premium (incluye encerado) por solo $15 extra. ¿Confirmo la reserva?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 10:31 AM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">"Perfecto, confirma con el paquete premium"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">
                      IA 10:31 AM
                    </div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">
                        "✅ Confirmado! 2 autos, paquete premium, 2:00 PM. Total: $85. Te envío recordatorio 30 min
                        antes. ¡Gracias por tu preferencia!"
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Cliente retenido + upselling exitoso + experiencia perfecta
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights para Negocios de Servicios</h2>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 84% de clientes cambia de proveedor por mala experiencia de comunicación
                    </strong>
                    <p className="text-sm mt-1">
                      No responder WhatsApp se percibe como "no les importo". La comunicación es parte del servicio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">
                      Los recordatorios automáticos aumentan la frecuencia de visita 67%
                    </strong>
                    <p className="text-sm mt-1">
                      Los clientes se olvidan. Un recordatorio oportuno los trae de vuelta antes que vayan a otro lado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">
                      La competencia nueva captura clientes 3x más rápido con automatización
                    </strong>
                    <p className="text-sm mt-1">
                      Los negocios nuevos con IA tienen ventaja competitiva inmediata sobre establecimientos
                      tradicionales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">
                      Un cliente perdido por mala comunicación = $2,400 anuales promedio
                    </strong>
                    <p className="text-sm mt-1">
                      Incluye servicios regulares, servicios adicionales y referencias. El costo real es altísimo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Final */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Final Predecible</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  En marzo de 2024, "Clean Car" cerró definitivamente. No pudieron competir con la eficiencia de
                  "AutoSpa Pro" que manejaba 5x más clientes con la mitad del personal.
                </p>
                <p>
                  <strong className="text-red-400">La lección más dura:</strong> 11 años de reputación y clientes fieles
                  se perdieron en 3 meses por no adaptarse a un cambio tecnológico simple.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Pensé que la calidad del servicio era suficiente. No entendí que la comunicación también es
                    servicio. Ahora veo autolavados con IA que facturan 10x más que nosotros." - Jorge Ramírez,
                    ex-propietario
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
            No Dejes que la Competencia te Quite Clientes
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Mantén a tus clientes fieles con comunicación perfecta. Responde al instante y
            <strong> nunca pierdas un cliente por falta de respuesta</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/demo"
              className="bg-white text-[#00C896] px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={() => handleCTAClick("Haz una Prueba", "article_cta", "/demo")}
            >
              <Zap size={24} />
              Haz una Prueba Gratis
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
