"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function InmobiliariaHogarIdealPage() {
  usePageTracking("article_inmobiliaria_hogar_ideal")

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
              Inmobiliaria
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Inmobiliaria 'Hogar Ideal' pierde 80% de leads por respuesta tardía
            </h1>
            <p className="text-lg text-white/80 mb-6">
              En el mercado inmobiliario, 5 minutos de retraso significan perder el cliente. Esta empresa aprendió la
              lección muy tarde.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Patricia Vega</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>20 de diciembre, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>7 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/inmobiliaria-hogar-ideal%281%29%281%29-ZirwoCIePIbiTqLLrIy7LvkUX2k6gY.jpg"
              alt="Inmobiliaria Hogar Ideal cerrada"
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
                La Regla de Oro Inmobiliaria: 5 Minutos o Nada
              </h2>
              <div className="text-white/80 space-y-4">
                <p>
                  "Hogar Ideal" era una inmobiliaria establecida con 14 años en el mercado. Manejaban propiedades de
                  gama media-alta y tenían una reputación sólida. Pero cuando el 85% de las consultas se movieron a
                  WhatsApp, no se adaptaron a tiempo.
                </p>
                <p>
                  <strong className="text-red-400">La regla inmobiliaria es implacable:</strong> Si no respondes en 5
                  minutos, el cliente ya contactó a 3 competidores más. En bienes raíces, la velocidad de respuesta es
                  literalmente dinero.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">El Desastre en Números:</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>
                      • <strong className="text-white">1,247 leads perdidos</strong> por respuesta tardía
                    </li>
                    <li>
                      • <strong className="text-white">80% de consultas</strong> sin respuesta en menos de 5 minutos
                    </li>
                    <li>
                      • <strong className="text-white">$340,000 en comisiones perdidas</strong> en 10 meses
                    </li>
                    <li>
                      • <strong className="text-white">67 propiedades</strong> vendidas por la competencia
                    </li>
                    <li>
                      • <strong className="text-white">23 propietarios</strong> cambiaron de inmobiliaria
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Por Qué Perdieron 80% de sus Leads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⏱️ Respuesta Lenta</h3>
                  <p className="text-white/70 text-sm">
                    Promedio de 2-3 horas para responder. En inmobiliaria, después de 5 minutos el lead ya no existe.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🏠 Información Desactualizada</h3>
                  <p className="text-white/70 text-sm">
                    Propiedades ya vendidas seguían en portales. Clientes frustrados al preguntar por casas
                    inexistentes.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">📱 Competencia Ágil</h3>
                  <p className="text-white/70 text-sm">
                    Inmobiliarias nuevas con IA respondían al instante. Los clientes comparaban velocidad de respuesta.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🔄 Falta de Seguimiento</h3>
                  <p className="text-white/70 text-sm">
                    No hacían seguimiento automático. Los leads interesados se enfriaban sin nurturing constante.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso Real Devastador */}
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">📖 El Lead de $45,000 que se Escapó</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  <strong className="text-white">Sábado 2:15 PM:</strong> Carlos Mendoza, ejecutivo de 35 años, vio una casa de $450,000 en
                  portal inmobiliario. Tenía pre-aprobación bancaria y quería comprar esa semana.
                </p>
                <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-4">
                  <h3 className="text-orange-300 font-semibold mb-2">Cronología de una Oportunidad Perdida:</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>
                      <strong className="text-yellow-500">2:15 PM:</strong> Carlos envía WhatsApp: "Hola, me interesa la casa de Av. Principal.
                      ¿Podemos verla hoy?"
                    </li>
                    <li>
                      <strong className="text-yellow-500">2:20 PM:</strong> Sin respuesta, contacta a otra inmobiliaria por la misma casa
                    </li>
                    <li>
                      <strong className="text-yellow-500">2:22 PM:</strong> La competencia responde: "¡Hola Carlos! Te llamo en 2 minutos"
                    </li>
                    <li>
                      <strong className="text-yellow-500">2:25 PM:</strong> Agenda visita para las 4:00 PM del mismo día
                    </li>
                    <li>
                      <strong className="text-yellow-500">6:00 PM:</strong> "Hogar Ideal" finalmente responde: "Hola, ¿en qué puedo ayudarte?"
                    </li>
                    <li>
                      <strong className="text-yellow-500">6:05 PM:</strong> Carlos responde: "Ya compré la casa con otra inmobiliaria. Gracias."
                    </li>
                  </ul>
                </div>
                <p className="text-orange-300 font-semibold">
                  Comisión perdida: $45,000. Tiempo de retraso: 3 horas y 45 minutos. Costo por minuto: $200.
                </p>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">Cómo la IA Hubiera Salvado $340,000</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">agente inmobiliario con IA</strong> hubiera capturado todos los
                  leads:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Respuesta en 30 segundos:</strong> Captura leads calientes antes que la competencia
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Base de datos actualizada:</strong> Inventario en tiempo real, precios y disponibilidad
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Calificación automática:</strong> Identifica leads serios vs. curiosos
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Seguimiento inteligente:</strong> Nurturing automático hasta cerrar la venta
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
                      Lead 2:15 PM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">"Hola, me interesa la casa de Av. Principal. ¿Podemos verla hoy?"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">IA 2:15 PM</div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">
                        "¡Hola Carlos! Excelente elección 🏠 La casa de Av. Principal está disponible ($450,000, 3 hab/2
                        baños). Tengo disponibilidad hoy 4:00 PM o 6:00 PM. ¿Tienes pre-aprobación bancaria?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Lead 2:16 PM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">"Sí tengo pre-aprobación. Prefiero 4:00 PM"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">IA 2:16 PM</div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white/90">
                        "¡Perfecto! ✅ Cita confirmada hoy 4:00 PM. Te envío ubicación exacta y datos del agente que te
                        recibirá. También te mando fotos adicionales y plano de la casa. ¡Nos vemos!"
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Lead capturado y cita agendada en 1 minuto vs. lead perdido para siempre
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights Críticos para Inmobiliarias</h2>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 78% de leads inmobiliarios se pierden en los primeros 5 minutos
                    </strong>
                    <p className="text-sm mt-1">
                      Los compradores contactan múltiples inmobiliarias simultáneamente. El primero en responder gana.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">Un lead inmobiliario vale promedio $3,200 en comisiones</strong>
                    <p className="text-sm mt-1">
                      Cada mensaje sin respuesta rápida es dinero que literalmente se va a la competencia.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 67% de compradores decide en la primera visita si compra o no
                    </strong>
                    <p className="text-sm mt-1">
                      La velocidad para agendar visitas es crítica. Cada día de retraso reduce probabilidad de venta
                      23%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">El seguimiento automático aumenta conversión 156%</strong>
                    <p className="text-sm mt-1">
                      Los leads necesitan 7-12 touchpoints promedio antes de decidir. Sin automatización es imposible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Final */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Colapso Inevitable</h2>
              <div className="text-white/80 space-y-4">
                <p>
                  En agosto de 2024, "Hogar Ideal" cerró operaciones. Perdieron el 80% de sus leads y no pudieron
                  competir con inmobiliarias que respondían al instante.
                </p>
                <p>
                  <strong className="text-red-400">La competencia que los reemplazó</strong> implementó IA desde el día
                  uno. Hoy manejan 300+ leads mensuales con respuesta promedio de 45 segundos y conversión del 34%.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Perdimos $340,000 en comisiones por no entender que en inmobiliaria, velocidad = dinero. Ahora veo
                    agentes jóvenes con IA que venden más en un mes que nosotros en un año." - Patricia Vega,
                    ex-directora
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">No Pierdas Ni Un Lead Más</h2>
          <p className="text-xl text-white/90 mb-8">
            Captura leads al instante con IA inmobiliaria. Responde en 30 segundos y
            <strong> convierte cada consulta en una venta</strong>.
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
