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
      // Track form submission
      analytics.formSubmit("cupo_liberado_form", true)

      // Track purchase click
      analytics.purchaseClick("$19.99", "cupo_liberado_form")

      // Send GTM event for form completion
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_complete",
          form_name: "cupo_liberado",
          user_data: {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
          },
          purchase_intent: true,
          price: "19.99",
          currency: "USD",
          timestamp: new Date().toISOString(),
        })
      }

      // Simulate form processing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to payment link
      window.location.href = "https://pay.hotmart.com/C100342057M?off=g2lkrn81&checkoutMode=10" // Updated Hotmart payment link to new URL
    } catch (error) {
      console.error("Error submitting form:", error)
      analytics.error("form_submission", "Failed to submit form", "cupo_liberado_form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center p-4">
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

      {/* Main popup form */}
      <div className="w-full max-w-md bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/30 rounded-2xl shadow-2xl shadow-[#00C896]/20 overflow-hidden animate-in slide-in-from-bottom-4 fade-in">
        {/* Header with celebration */}
        <div className="bg-gradient-to-r from-[#00C896] to-[#00A876] p-6 text-center relative">
          <div className="absolute top-2 right-2">
            <div className="bg-white/20 rounded-full p-2">
              <Clock size={20} className="text-white" />
            </div>
          </div>

          <div className="text-4xl mb-2">🎉</div>
          <h1 className="text-xl font-bold text-white mb-2">¡Felicitaciones!</h1>
          <p className="text-white/90 text-sm leading-relaxed">
            Tu cupo de <span className="font-bold text-white">$19.99</span> está casi liberado
          </p>
        </div>

        {/* Form content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-white/80 text-sm mb-4">
              {" "}
              ✍️ Completa tus datos correctamente 📲 para asegurar tu lugar 🚀🔥 y no perder tu cupo 🎟️✅{" "}
            </p>

            {/* Urgency indicator */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/40 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Quedan solo {cuposRestantes} cupos</span>
              </div>
              <p className="text-white/70 text-xs">Los cupos se asignan al primero que complete el pago ✅</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre field */}
            <div>
              <label htmlFor="nombre" className="block text-white/80 text-sm font-medium mb-2">
                <User size={16} className="inline mr-2" />
                Tu Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre completo"
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all"
                required
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all"
                required
              />
            </div>

            {/* Telefono field */}
            <div>
              <label htmlFor="telefono" className="block text-white/80 text-sm font-medium mb-2">
                <Phone size={16} className="inline mr-2" />
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#00C896]/30 rounded-xl text-white placeholder-white/50 focus:border-[#00C896] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 transition-all"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.nombre || !formData.email || !formData.telefono}
              className="w-full bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <Zap size={20} />
                  Comprar Ahora por $19.99
                </>
              )}
            </button>
          </form>

          {/* Security badges */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4 text-white/60 text-xs">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-[#00C896]" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-[#00C896]" />
                <span>SSL Protegido</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-[#00C896]" />
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
