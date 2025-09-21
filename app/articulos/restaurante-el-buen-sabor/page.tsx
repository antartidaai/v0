"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function RestauranteElBuenSaborPage() {
  usePageTracking("article_restaurante_el_buen_sabor")

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
              Casos de Estudio
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Restaurante 'El Buen Sabor' cierra tras perder 60% de pedidos por WhatsApp no atendido
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              La falta de respuesta automática en horarios nocturnos y fines de semana llevó a este restaurante familiar
              a la quiebra después de 15 años.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Ana Rodríguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>15 de enero, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>5 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/restaurante-buen-sabor%281%29-hmANYC9HlzP7RgtKaqcfj82BisFCdX.jpg"
              alt="Restaurante El Buen Sabor cerrado"
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
                El Problema que Mató al Negocio
              </h2>
              <div className="text-white space-y-4">
                <p>
                  El Restaurante "El Buen Sabor" era una institución en su barrio. Durante 15 años, las familias
                  confiaron en ellos para celebraciones especiales y cenas cotidianas. Pero en 2023, algo cambió
                  dramáticamente.
                </p>
                <p>
                  <strong className="text-red-400">
                    El 73% de sus clientes comenzaron a hacer pedidos por WhatsApp
                  </strong>
                  , especialmente durante las noches y fines de semana. El problema: solo tenían una persona
                  respondiendo mensajes, y solo durante horario comercial.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">Datos Devastadores:</h3>
                  <ul className="space-y-2 text-white">
                    <li>
                      • <strong className="text-white">847 mensajes sin respuesta</strong> en diciembre de 2023
                    </li>
                    <li>
                      • <strong className="text-white">60% de pedidos perdidos</strong> por respuesta tardía
                    </li>
                    <li>
                      • <strong className="text-white">$23,000 en ventas perdidas</strong> solo en las fiestas navideñas
                    </li>
                    <li>
                      • <strong className="text-white">156 clientes</strong> se fueron a la competencia
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Las Dificultades que Enfrentaron</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🌙 Horarios Nocturnos</h3>
                  <p className="text-white text-sm">
                    Los clientes pedían cenas entre 8-11 PM, pero nadie respondía WhatsApp después de las 6 PM. Perdían
                    40+ pedidos diarios.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">📱 Sobrecarga de Mensajes</h3>
                  <p className="text-white text-sm">
                    Una sola persona manejaba 200+ mensajes diarios. Era imposible responder a tiempo y mantener la
                    calidad.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⏰ Respuesta Tardía</h3>
                  <p className="text-white text-sm">
                    Promedio de 4 horas para responder. Los clientes hambrientos no esperan: ordenaban en otro lugar.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">💸 Pérdida de Ingresos</h3>
                  <p className="text-white text-sm">
                    Cada mensaje sin respuesta = $27 promedio perdidos. En un mes perdían más de $22,000 en ventas.
                  </p>
                </div>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">La Solución que Hubiera Salvado el Negocio</h2>
              <div className="text-white space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">vendedor de inteligencia artificial</strong> hubiera
                  transformado completamente su situación:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Respuesta instantánea 24/7:</strong> Cada mensaje respondido en menos de 3 segundos
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Toma de pedidos automática:</strong> Menú, precios y disponibilidad siempre actualizados
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Gestión de horarios:</strong> Informa automáticamente tiempos de entrega y disponibilidad
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Seguimiento de pedidos:</strong> Notifica automáticamente el estado de cada orden
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplo Práctico */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ejemplo Práctico: Cómo Hubiera Funcionado</h2>
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 10:30 PM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white">"Hola, ¿tienen disponible pizza familiar y cuánto demoran?"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">
                      IA 10:30 PM
                    </div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white">
                        "¡Hola! 😊 Sí tenemos pizza familiar disponible ($18.500). Tiempo de entrega: 35-40 min. ¿Te
                        gustaría ver nuestro menú completo o prefieres hacer el pedido directamente?"
                      </p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Pedido tomado y procesado en menos de 2 minutos
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights Valiosos para tu Negocio</h2>
              <div className="space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">El 67% de pedidos de comida ocurren después de las 7 PM</strong>
                    <p className="text-sm mt-1">
                      Si no respondes WhatsApp en horarios nocturnos, pierdes la mayoría de tus ventas diarias.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">Los clientes esperan máximo 5 minutos por una respuesta</strong>
                    <p className="text-sm mt-1">
                      Después de 5 minutos, el 89% busca alternativas. Después de 15 minutos, es casi imposible
                      recuperarlos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">Un mensaje sin respuesta = $27 promedio perdidos</strong>
                    <p className="text-sm mt-1">
                      En restaurantes, cada consulta no atendida representa una venta perdida de ticket promedio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">La automatización puede aumentar ventas hasta 340%</strong>
                    <p className="text-sm mt-1">
                      Restaurantes con IA responden 24/7, capturan todos los pedidos y sugieren productos adicionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Final Trágico */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Final Inevitable</h2>
              <div className="text-white space-y-4">
                <p>
                  En marzo de 2024, después de 3 meses consecutivos de pérdidas, "El Buen Sabor" cerró definitivamente.
                  La familia perdió no solo su negocio, sino también su casa que habían hipotecado para mantener el
                  restaurante abierto.
                </p>
                <p>
                  <strong className="text-red-400">Lo más trágico:</strong> La competencia que abrió al lado implementó
                  un sistema de WhatsApp automatizado desde el día uno. En 6 meses capturaron el 80% de los clientes de
                  "El Buen Sabor" y hoy facturan más de $45,000 mensuales.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Si hubiéramos automatizado WhatsApp 6 meses antes, hoy seguiríamos abiertos. Era tan simple..." -
                    María González, ex-propietaria
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">No Seas el Próximo "El Buen Sabor"</h2>
          <p className="text-xl text-white/90 mb-8">
            Evita que tu negocio tenga el mismo destino trágico. Nuestros vendedores de inteligencia artificial
            <strong> trabajan 24/7 para que nunca pierdas una venta</strong>.
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
