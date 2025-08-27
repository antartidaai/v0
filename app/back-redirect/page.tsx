"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle, Zap } from "lucide-react"
import { trackEvent } from "../utils/analytics"

export default function BackRedirectPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Mostrar modal inmediatamente al cargar la página
    const timer = setTimeout(() => {
      setShowModal(true)
      trackEvent("backredirect_shown", {
        timestamp: new Date().toISOString(),
        page: "/back-redirect",
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    trackEvent("backredirect_accepted", {
      timestamp: new Date().toISOString(),
      offer: "$9.99",
    })
    window.open("https://hotm.art/JJsk89", "_blank")
    setShowModal(false)
  }

  const handleReject = () => {
    trackEvent("backredirect_rejected", {
      timestamp: new Date().toISOString(),
    })
    setShowModal(false)
    // Redirigir al home después de rechazar
    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center p-3 sm:p-4 lg:p-6">
      {/* Contenido de la página normal */}
      <div className="text-center text-white max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <AlertTriangle size={32} className="text-red-400 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-red-400 leading-tight">
            ⚠️ TU NEGOCIO ESTÁ EN PELIGRO
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
            Mientras lees esto, tus competidores están vendiendo 24/7 con IA automática.
            <br />
            <strong className="text-red-400">Cada minuto que pasa, pierdes clientes.</strong>
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-400 mb-3 sm:mb-4">📊 DATOS DEVASTADORES:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg text-white/90">
            <div>• 73% de negocios sin IA quiebran en 2 años</div>
            <div>• Pierdes $2,847 por cada mes sin automatizar</div>
            <div>• Tus competidores venden mientras duermes</div>
            <div>• El 89% de clientes prefiere respuesta inmediata</div>
          </div>
        </div>

        <div className="text-white/70 text-xs sm:text-sm md:text-base px-2 sm:px-0">
          <p>La realidad es cruda: mientras tú descansas, otros están cerrando TUS ventas.</p>
        </div>
      </div>

      {/* Modal de Back Redirect */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 lg:p-6 z-50">
          <div className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-500 rounded-xl p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full text-center relative animate-in zoom-in-95 duration-300">
            <button
              onClick={handleReject}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                <AlertTriangle size={24} className="text-red-400 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">¡ESPERA!</h2>
              <p className="text-red-300 text-base sm:text-lg md:text-xl font-semibold">
                No te vayas sin tu 50% de descuento
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="bg-red-800/50 border border-red-500/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-red-200 text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  🔥 50% OFF PARA SALVAR TU NEGOCIO
                </p>
                <p className="text-red-300 text-sm sm:text-base font-semibold">ÚLTIMA OPORTUNIDAD</p>
              </div>

              <div className="text-center">
                <div className="text-white/60 text-base sm:text-lg line-through mb-1">$19.99</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">$9.99</div>
                <p className="text-red-300 text-xs sm:text-sm">Solo por abandonar la página</p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={handleAccept}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-bold hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap size={16} className="sm:w-5 sm:h-5" />🔒 SÍ, QUIERO MI DESCUENTO POR $9.99
              </button>

              <button
                onClick={handleReject}
                className="w-full text-white/70 hover:text-white text-xs sm:text-sm transition-colors py-2"
              >
                No, prefiero que mi negocio quiebre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
