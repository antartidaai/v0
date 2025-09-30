"use client"

import { useState, useEffect } from "react"
import {
  CheckCircle,
  X,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Star,
  PlayCircle,
  Target,
  Sparkles,
} from "lucide-react"

export default function UpsellPage() {
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutos en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handleAcceptOffer = () => {
    window.location.href = "https://hotm.art/NyTUgsE5" // Reemplazar con el link del curso de Meta Ads
  }

  const handleDeclineOffer = () => {
    window.location.href = "/gracias"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#00C896] to-[#00A876] py-2 sm:py-3 px-3 sm:px-4 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-4 text-center">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
          <span className="font-bold text-xs sm:text-sm md:text-base">
            OFERTA EXPIRA EN:{" "}
            <span className="text-black">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </span>
        </div>
      </div>

      <div className="pt-16 sm:pt-20 pb-16 sm:pb-32 px-3 sm:px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-gradient-to-r from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-[#00C896] font-bold text-xs sm:text-sm">🎉 ¡FELICIDADES POR TU COMPRA!</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-white">Crea Anuncios Irresistibles con IA en Minutos y </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C896] to-[#00A876]">
                Convierte tu Agente en una Máquina de Ventas
              </span>
            </h1>
          </div>

          {/* Video/Demo Section */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl border border-[#00C896]/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/ai-dashboard-interface.jpg')] bg-cover bg-center opacity-30"></div>
              <div className="relative z-10 text-center px-4">
                <PlayCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#00C896] mx-auto mb-3 sm:mb-4 cursor-pointer hover:scale-110 transition-transform" />
                <p className="text-base sm:text-lg md:text-xl font-semibold">Ver Cómo Funciona Meta Ads + IA (3:15)</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6 px-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00C896] leading-relaxed">
              Este curso le da a tu Agente de IA el combustible que necesita: tráfico ilimitado de clientes listos para
              comprar
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Aprende a crear anuncios profesionales con IA en minutos que atraen clientes calificados directamente a tu
              Agente de IA Vendedor, sin diseñadores ni copywriters.
            </p>

            <div className="flex items-center justify-center gap-1 sm:gap-2 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              ))}
              <span className="text-white ml-2 text-sm sm:text-base md:text-lg font-semibold">
                (4.9/5 de 1,247 estudiantes)
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-center">
            <Target className="w-12 h-12 sm:w-16 sm:h-16 text-[#00C896] mx-auto mb-3 sm:mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-2">El Secreto del Éxito</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Tu Agente de IA Vendedor es como un <strong className="text-[#00C896]">closer 24/7</strong>, pero sin
              tráfico no tiene a quién venderle.{" "}
              <strong className="text-white">
                Este curso convierte a tu Agente en una máquina de ventas, dándole tráfico ilimitado con anuncios
                creados en minutos por IA.
              </strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border-2 border-[#00C896]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-[#00C896] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C896] to-[#00A876]">
                  Crea Anuncios Irresistibles con IA en Minutos
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                La habilidad más valiosa que aprenderás en este curso
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-black/40 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-300">Antes (Sin IA)</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>3-5 horas creando cada anuncio</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>$150-$300 por diseño profesional</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Esperar días por revisiones</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Resultados inconsistentes</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Limitado a 2-3 anuncios por mes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-[#00C896]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#00C896]">Ahora (Con IA)</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">5 minutos</strong> por anuncio profesional
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">$0</strong> en diseñadores (después del curso)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Resultados inmediatos</strong>, sin esperas
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Calidad consistente</strong> en cada anuncio
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Anuncios ilimitados</strong> cuando quieras
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/60 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#00C896]/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">El Resultado Final</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="bg-[#00C896]/20 p-2 sm:p-3 rounded-lg inline-block mb-2 sm:mb-3">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-base sm:text-lg mb-1">Más Ventas</p>
                  <p className="text-xs sm:text-sm text-gray-400">Anuncios que convierten = más clientes</p>
                </div>

                <div>
                  <div className="bg-[#00C896]/20 p-2 sm:p-3 rounded-lg inline-block mb-2 sm:mb-3">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-base sm:text-lg mb-1">Ahorra Tiempo</p>
                  <p className="text-xs sm:text-sm text-gray-400">10+ horas semanales recuperadas</p>
                </div>

                <div>
                  <div className="bg-[#00C896]/20 p-2 sm:p-3 rounded-lg inline-block mb-2 sm:mb-3">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-base sm:text-lg mb-1">Ahorra Dinero</p>
                  <p className="text-xs sm:text-sm text-gray-400">$1,000+ al mes en diseñadores</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00C896] to-[#00A876] rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 text-center">
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Sin diseñadores</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Sin copywriters</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    Sin depender de nadie
                  </span>
                </div>
              </div>

              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Precio Regular: $497</p>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                <span className="line-through">Precio para Clientes: $297</span>
              </p>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                <span className="text-white">$97</span>
              </div>
              <p className="text-white/90 text-base sm:text-lg md:text-xl font-semibold px-2">
                🔥 Oferta Exclusiva Solo para Compradores del Agente de IA Vendedor
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <p className="text-white font-semibold text-sm sm:text-base">Garantía de 30 Días - 100% Reembolso</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#00C896] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2 leading-tight">
              ¿Listo para Activar el Poder de la IA en tus Anuncios?
            </h2>

            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto mb-4 sm:mb-6">
              <button
                onClick={handleAcceptOffer}
                className="w-full bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-2xl hover:shadow-[#00C896]/50 transition-all duration-300 hover:scale-105 leading-tight"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="hidden sm:inline">
                  SÍ, QUIERO ACTIVAR EL PODER DE LA IA Y LLENAR MI AGENTE DE CLIENTES CADA DÍA 🚀
                </span>
                <span className="sm:hidden">SÍ, QUIERO ACTIVAR LA IA Y LLENAR MI AGENTE DE CLIENTES 🚀</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              </button>

              <p className="text-gray-400 text-xs sm:text-sm px-2">
                ✅ Acceso Inmediato • ✅ Garantía 30 Días • ✅ Soporte Prioritario
              </p>

              <button
                onClick={handleDeclineOffer}
                className="text-gray-500 hover:text-gray-400 text-xs sm:text-sm underline transition-colors"
              >
                No gracias, prefiero buscar tráfico por mi cuenta
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#00C896]">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base">
                Esta oferta expira en: {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
