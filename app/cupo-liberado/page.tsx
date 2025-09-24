"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Zap, Clock, CheckCircle, User, Mail, Phone } from "lucide-react"
import { analytics, usePageTracking } from "../../utils/analytics"

export default function CupoLiberadoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cuposRestantes, setCuposRestantes] = useState(2)

  // Analytics tracking
  usePageTracking("cupo_liberado_page")

  useEffect(() => {
    // Track offer view
    analytics.offerView("2 cupos restantes")

    // Simulate cupos countdown
    const interval = setInterval(() => {
      setCuposRestantes((prev) => {
        if (prev > 1) {
          return prev - 1
        }
        return 1 // Keep at least 1 to maintain urgency
      })
    }, 30000) // Reduce every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.telefono) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form processing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to payment link
      window.location.href = "https://pay.hotmart.com/C100342057M?off=g2lkrn81&checkoutMode=10" // Updated Hotmart payment link to new URL
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#00C896]/20">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="text-center mb-2">
            <p className="text-white/90 text-sm font-medium">
              Estás a 60% de liberar tu cupo para agregar un vendedor automático
            </p>
          </div>
          <div className="w-full bg-[#2A2A2A] rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00C896] to-[#00A876] rounded-full transition-all duration-1000 ease-out shadow-lg shadow-[#00C896]/30"
              style={{ width: "60%" }}
            >
              <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-white/60 text-xs">0%</span>
            <span className="text-[#00C896] text-xs font-semibold">60%</span>
            <span className="text-white/60 text-xs">100%</span>
          </div>
        </div>
      </div>

      {/* Background particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-[#00C896]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/30 rounded-2xl shadow-2xl shadow-[#00C896]/20 overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-2 sm:mx-4 mt-20">
        {/* Header with celebration */}
        <div className="bg-gradient-to-r from-[#00C896] to-[#00A876] p-4 sm:p-6 text-center relative">
          <div className="absolute top-2 right-2">
            <div className="bg-white/20 rounded-full p-1.5 sm:p-2">
              <Clock size={16} className="text-white sm:w-5 sm:h-5" />
            </div>
          </div>

          <div className="text-3xl sm:text-4xl mb-2">🎉</div>
          <h1 className="text-lg sm:text-xl font-bold text-white mb-2">¡Felicitaciones!</h1>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed px-2">
            Tu cupo de <span className="font-bold text-white">$19.99</span> está casi liberado
          </p>
        </div>

        {/* Form content */}
        <div className="p-4 sm:p-6">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 px-2">
              {" "}
              ✍️ Completa tus datos correctamente 📲 para asegurar tu lugar 🚀🔥 y no perder tu cupo 🎟️✅{" "}
            </p>

            {/* Urgency indicator */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/40 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={14} className="text-red-400 sm:w-4 sm:h-4" />
                <span className="text-red-400 font-semibold text-xs sm:text-sm">
                  Quedan solo {cuposRestantes} cupos
                </span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Los cupos se asignan al primero que complete el pago ✅
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Nombre field */}
            <div>
              <label htmlFor="nombre" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                <User size={14} className="inline mr-2 sm:w-4 sm:h-4" />
                Tu Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre completo"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                <Mail size={14} className="inline mr-2 sm:w-4 sm:h-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Telefono field */}
            <div>
              <label htmlFor="telefono" className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                <Phone size={14} className="inline mr-2 sm:w-4 sm:h-4" />
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.nombre || !formData.email || !formData.telefono}
              className="w-full bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[48px] sm:min-h-[56px]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="text-sm sm:text-base">Procesando...</span>
                </>
              ) : (
                <>
                  <Zap size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Comprar Ahora por $19.99</span>
                </>
              )}
            </button>
          </form>

          {/* Security badges */}
          <div className="mt-4 sm:mt-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/60 text-xs">
              <div className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#00C896] sm:w-3.5 sm:h-3.5" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#00C896] sm:w-3.5 sm:h-3.5" />
                <span>SSL Protegido</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[#00C896] sm:w-3.5 sm:h-3.5" />
                <span>Garantía 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .particle {
          animation: fall linear infinite;
        }
        
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-bottom-4 {
          animation: slideInUp 0.6s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
