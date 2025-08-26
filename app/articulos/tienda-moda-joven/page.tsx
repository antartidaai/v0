"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Zap, ArrowRight } from "lucide-react"
import { analytics, usePageTracking } from "../../../utils/analytics"

export default function TiendaModaJovenPage() {
  usePageTracking("article_tienda_moda_joven")

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
              Retail
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Tienda de Ropa 'Moda Joven' pierde $50,000 en ventas por no automatizar WhatsApp
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Durante el Black Friday, la sobrecarga de mensajes sin respuesta automática resultó en pérdidas masivas y
              clientes frustrados.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Luis Martínez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>10 de enero, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>4 min de lectura</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src="https://i.ibb.co/Q7LC7tvr/tienda-moda-joven.jpg"
              alt="Tienda Moda Joven cerrada"
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
                La Catástrofe del Black Friday 2023
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  "Moda Joven" era una tienda de ropa exitosa con 8 años en el mercado. Tenían una base sólida de
                  clientes jóvenes que compraban principalmente por WhatsApp. Todo cambió durante el Black Friday 2023.
                </p>
                <p>
                  <strong className="text-red-400">En solo 4 días recibieron 2,847 mensajes de WhatsApp</strong> - 10
                  veces más de lo normal. Su equipo de 2 personas no pudo manejar el volumen. El resultado fue
                  devastador.
                </p>
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mt-6">
                  <h3 className="text-red-300 font-semibold mb-2">El Desastre en Números:</h3>
                  <ul className="space-y-2 text-white">
                    <li>
                      • <strong className="text-white">2,847 mensajes recibidos</strong> en 4 días de Black Friday
                    </li>
                    <li>
                      • <strong className="text-white">1,923 mensajes sin respuesta</strong> (67% ignorados)
                    </li>
                    <li>
                      • <strong className="text-white">$50,000 en ventas perdidas</strong> solo en esos 4 días
                    </li>
                    <li>
                      • <strong className="text-white">312 clientes frustrados</strong> que nunca volvieron
                    </li>
                    <li>
                      • <strong className="text-white">89 reseñas negativas</strong> en redes sociales
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Las Dificultades */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Las Dificultades que los Hundieron</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">📱 Avalancha de Mensajes</h3>
                  <p className="text-white text-sm">
                    De 50 mensajes diarios pasaron a 700+ por día. Era físicamente imposible responder a todos con solo
                    2 personas.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">⏰ Preguntas Repetitivas</h3>
                  <p className="text-white text-sm">
                    80% de mensajes eran las mismas preguntas: tallas, precios, disponibilidad. Perdían tiempo
                    respondiendo lo mismo.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">😤 Clientes Frustrados</h3>
                  <p className="text-white text-sm">
                    Esperaban 6-8 horas por respuesta. Los clientes se enojaban y compraban en la competencia que
                    respondía al instante.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">💔 Reputación Dañada</h3>
                  <p className="text-white text-sm">
                    Las reseñas negativas se multiplicaron. "No responden", "Pésimo servicio", "Nunca más compro aquí".
                  </p>
                </div>
              </div>
            </div>

            {/* La Solución que Necesitaban */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#00C896] mb-6">Cómo la IA Hubiera Salvado $50,000</h2>
              <div className="text-white space-y-4">
                <p>
                  Un <strong className="text-[#00C896]">vendedor de inteligencia artificial</strong> hubiera manejado
                  perfectamente la avalancha:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Respuesta instantánea:</strong> 2,847 mensajes respondidos en menos de 3 segundos cada uno
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Catálogo automatizado:</strong> Precios, tallas y disponibilidad siempre actualizados
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Procesamiento de pedidos:</strong> Toma automática de órdenes con confirmación inmediata
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Upselling inteligente:</strong> Sugiere productos complementarios aumentando ticket
                      promedio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplo Práctico */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ejemplo: Cómo Hubiera Funcionado en Black Friday</h2>
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 2:30 AM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white">
                        "Hola! ¿Tienen el jean azul en talla M? ¿Cuánto cuesta con descuento?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00C896] text-white px-3 py-1 rounded-full text-xs font-medium">IA 2:30 AM</div>
                    <div className="bg-[#00C896]/20 border border-[#00C896]/40 rounded-lg p-3 flex-1">
                      <p className="text-white">
                        "¡Hola! 😊 Sí tenemos el jean azul en talla M. Precio Black Friday: $35.000 (antes $50.000) -
                        ¡30% OFF! También te recomiendo la blusa blanca que combina perfecta (solo $20.000). ¿Te
                        interesa el combo?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Cliente 2:31 AM
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 flex-1">
                      <p className="text-white">"¡Perfecto! Quiero ambos. ¿Cómo hago el pedido?"</p>
                    </div>
                  </div>
                  <div className="text-center text-[#00C896] font-semibold">
                    ✅ Venta de $55.000 cerrada en 1 minuto (vs. mensaje perdido en la realidad)
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Valiosos */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">💡 Insights Clave para Retail</h2>
              <div className="space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <div>
                    <strong className="text-yellow-300">
                      El 78% de compras de ropa se deciden en menos de 10 minutos
                    </strong>
                    <p className="text-sm mt-1">
                      Si no respondes rápido, el cliente ya compró en otro lugar. La velocidad es crítica en retail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <div>
                    <strong className="text-yellow-300">Black Friday genera 10x más consultas de lo normal</strong>
                    <p className="text-sm mt-1">
                      Los picos de demanda son predecibles. Sin automatización, es imposible manejar el volumen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <div>
                    <strong className="text-yellow-300">80% de preguntas en retail son repetitivas</strong>
                    <p className="text-sm mt-1">
                      Tallas, precios, disponibilidad, formas de pago. La IA puede responder todo automáticamente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <div>
                    <strong className="text-yellow-300">El upselling aumenta ticket promedio 45%</strong>
                    <p className="text-sm mt-1">
                      La IA sugiere productos complementarios de forma natural, aumentando significativamente las
                      ventas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* El Desenlace */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">El Desenlace Inevitable</h2>
              <div className="text-white space-y-4">
                <p>
                  Después del desastre del Black Friday 2023, "Moda Joven" nunca se recuperó. Los clientes perdieron la
                  confianza y las ventas cayeron 60% en los meses siguientes.
                </p>
                <p>
                  <strong className="text-red-400">En abril de 2024 cerraron definitivamente.</strong> La competencia
                  que implementó WhatsApp automatizado capturó a sus clientes y hoy maneja más de 1,000 mensajes diarios
                  sin problemas.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-300 font-semibold">
                    "Perdimos todo por no invertir $200 mensuales en automatización. Ahora la competencia factura lo que
                    nosotros facturábamos antes." - Sandra López, ex-propietaria
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">No Pierdas $50,000 Como "Moda Joven"</h2>
          <p className="text-xl text-white/90 mb-8">
            Prepárate para los picos de demanda. Nuestros vendedores de IA manejan miles de mensajes simultáneamente
            <strong> sin perder una sola venta</strong>.
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
