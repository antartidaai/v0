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
    window.location.href = "https://hotm.art/wVG1yihQ" // Link del curso de Meta Ads
  }

  const handleDeclineOffer = () => {
    window.location.href = "/gracias"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Barra de urgencia superior */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#00C896] to-[#00A876] py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-4 text-center flex-wrap">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm sm:text-base">
            ¡OFERTA ESPECIAL EXPIRA EN:{" "}
            <span className="text-black">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="pt-20 pb-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896] rounded-full px-6 py-2 mb-6">
              <span className="text-[#00C896] font-bold text-sm">🎉 ¡FELICIDADES POR TU COMPRA!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Crea Anuncios Irresistibles con IA en Minutos y </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C896] to-[#00A876]">
                Convierte tu Agente en una Máquina de Ventas
              </span>
            </h1>
          </div>

          {/* Video/Demo Section */}
          <div className="mb-8 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#00C896]/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/ai-dashboard-interface.jpg')] bg-cover bg-center opacity-30"></div>
              <div className="relative z-10 text-center">
                <PlayCircle className="w-20 h-20 text-[#00C896] mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform" />
                <p className="text-xl font-semibold">Ver Cómo Funciona Meta Ads + IA (3:15)</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 space-y-6">
            <p className="text-2xl sm:text-3xl font-bold text-[#00C896] leading-relaxed">
              Este curso le da a tu Agente de IA el combustible que necesita: tráfico ilimitado de clientes listos para
              comprar
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Aprende a crear anuncios profesionales con IA en minutos que atraen clientes calificados directamente a tu
              Agente de IA Vendedor, sin diseñadores ni copywriters.
            </p>

            <div className="flex items-center justify-center gap-2 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-white ml-2 text-lg font-semibold">(4.9/5 de 1,247 estudiantes)</span>
            </div>
          </div>

          {/* Contenido adicional */}
          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-2xl p-8 mb-12 text-center">
            <Target className="w-16 h-16 text-[#00C896] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">El Secreto del Éxito</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tu Agente de IA Vendedor es como un <strong className="text-[#00C896]">closer 24/7</strong>, pero sin
              tráfico no tiene a quién venderle.{" "}
              <strong className="text-white">
                Este curso convierte a tu Agente en una máquina de ventas, dándole tráfico ilimitado con anuncios
                creados en minutos por IA.
              </strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border-2 border-[#00C896]/50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 text-[#00C896] mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C896] to-[#00A876]">
                  Crea Anuncios Irresistibles con IA en Minutos
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                La habilidad más valiosa que aprenderás en este curso
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/40 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-300">Antes (Sin IA)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>3-5 horas creando cada anuncio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>$150-$300 por diseño profesional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Esperar días por revisiones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Resultados inconsistentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Limitado a 2-3 anuncios por mes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 rounded-xl p-6 border-2 border-[#00C896]">
                <h3 className="text-xl font-bold mb-4 text-[#00C896]">Ahora (Con IA)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">5 minutos</strong> por anuncio profesional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">$0</strong> en diseñadores (después del curso)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Resultados inmediatos</strong>, sin esperas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Calidad consistente</strong> en cada anuncio
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Anuncios ilimitados</strong> cuando quieras
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/60 rounded-xl p-6 border border-[#00C896]/30">
              <h3 className="text-2xl font-bold mb-4 text-center">El Resultado Final</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-[#00C896]/20 p-3 rounded-lg inline-block mb-3">
                    <TrendingUp className="w-8 h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-lg mb-1">Más Ventas</p>
                  <p className="text-sm text-gray-400">Anuncios que convierten = más clientes</p>
                </div>

                <div>
                  <div className="bg-[#00C896]/20 p-3 rounded-lg inline-block mb-3">
                    <Clock className="w-8 h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-lg mb-1">Ahorra Tiempo</p>
                  <p className="text-sm text-gray-400">10+ horas semanales recuperadas</p>
                </div>

                <div>
                  <div className="bg-[#00C896]/20 p-3 rounded-lg inline-block mb-3">
                    <Zap className="w-8 h-8 text-[#00C896]" />
                  </div>
                  <p className="font-bold text-lg mb-1">Ahorra Dinero</p>
                  <p className="text-sm text-gray-400">$1,000+ al mes en diseñadores</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00C896] to-[#00A876] rounded-2xl p-8 mb-8 text-center">
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Sin diseñadores</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Sin copywriters</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Sin depender de nadie</span>
                </div>
              </div>

              <p className="text-white/80 text-lg mb-2">Precio Regular: $497</p>
              <p className="text-white/80 text-lg mb-4">
                <span className="line-through">Precio para Clientes: $297</span>
              </p>
              <div className="text-5xl sm:text-6xl font-bold mb-2">
                <span className="text-white">$97</span>
              </div>
              <p className="text-white/90 text-xl font-semibold">
                🔥 Oferta Exclusiva Solo para Compradores del Agente de IA Vendedor
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-white" />
              <p className="text-white font-semibold">Garantía de 30 Días - 100% Reembolso</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#00C896] rounded-2xl p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Listo para Activar el Poder de la IA en tus Anuncios?
            </h2>

            <div className="space-y-4 max-w-md mx-auto mb-6">
              <button
                onClick={handleAcceptOffer}
                className="w-full bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-8 py-6 rounded-xl text-lg font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#00C896]/50 transition-all duration-300 hover:scale-105 leading-tight"
              >
                <Zap className="w-6 h-6 flex-shrink-0" />
                <span>SÍ, QUIERO ACTIVAR EL PODER DE LA IA Y LLENAR MI AGENTE DE CLIENTES CADA DÍA 🚀</span>
                <ArrowRight className="w-6 h-6 flex-shrink-0" />
              </button>

              <p className="text-gray-400 text-sm">
                ✅ Acceso Inmediato • ✅ Garantía 30 Días • ✅ Soporte Prioritario
              </p>

              <button
                onClick={handleDeclineOffer}
                className="text-gray-500 hover:text-gray-400 text-sm underline transition-colors"
              >
                No gracias, prefiero buscar tráfico por mi cuenta
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-[#00C896]">
              <Clock className="w-5 h-5 animate-pulse" />
              <p className="font-bold">
                Esta oferta expira en: {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
