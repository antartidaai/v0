"use client"

import type React from "react"
import { useState } from "react"
import { analytics, usePageTracking } from "../utils/analytics"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface FormData {
  lead_name: string
  lead_email: string
  country_code: string
  lead_phone: string
  lead_instagram: string
  weekly_whatsapp_volume: string
  has_after_hours_support: string
  ia_impact_area: string
  automation_urgency: string
  marketing_budget: string
  main_automation_goal: string
}

export default function FormularioPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    lead_name: "",
    lead_email: "",
    country_code: "",
    lead_phone: "",
    lead_instagram: "",
    weekly_whatsapp_volume: "",
    has_after_hours_support: "",
    ia_impact_area: "",
    automation_urgency: "",
    marketing_budget: "",
    main_automation_goal: "",
  })

  // Analytics tracking
  usePageTracking("formulario_page")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < 11) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const getProgress = () => {
    const progressValues = [0, 15, 30, 45, 60, 70, 80, 85, 90, 95, 100, 100]
    return progressValues[currentStep] || 0
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Step 0: Bienvenida */}
      {currentStep === 0 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-8 sm:p-12 shadow-2xl text-center animate-in fade-in duration-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hola, bienvenido(a) 👋</h1>

          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Si hoy tu negocio está <span className="text-blue-600 font-semibold">perdiendo ventas</span> o{" "}
            <span className="text-blue-600 font-semibold">tiempo</span> respondiendo mensajes, no te preocupes:{" "}
            <span className="text-blue-600 font-semibold">podemos solucionarlo</span>.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Primero te haré algunas <span className="text-blue-600 font-semibold">preguntas rápidas</span> para entender
            tu situación.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Al finalizar, recibirás en tu WhatsApp un{" "}
            <span className="text-blue-600 font-semibold">ebook con las estrategias de IA</span> que están{" "}
            <span className="text-blue-600 font-semibold">revolucionando negocios</span> como el tuyo en Latinoamérica.
            📊
          </p>

          <div className="text-3xl mb-8">⚡</div>

          <button
            onClick={nextStep}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Comenzar
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 1: Nombre */}
      {currentStep === 1 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Cuál es tu nombre?</h1>

          <div className="mb-8">
            <input
              type="text"
              name="lead_name"
              value={formData.lead_name}
              onChange={handleInputChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Email */}
      {currentStep === 2 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tu mejor correo electrónico</h1>

          <div className="mb-8 relative">
            <input
              type="email"
              name="lead_email"
              value={formData.lead_email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center text-white text-sm font-bold">
              ···
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: WhatsApp */}
      {currentStep === 3 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Número de WhatsApp:</h1>

          <div className="flex gap-3 mb-8 relative">
            <select
              name="country_code"
              value={formData.country_code}
              onChange={handleInputChange}
              className="min-w-[140px] px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
            >
              <option value="" disabled>
                País
              </option>
              <option value="+51">🇵🇪 Perú (+51)</option>
              <option value="+55">🇧🇷 Brasil (+55)</option>
              <option value="+57">🇨🇴 Colombia (+57)</option>
              <option value="+52">🇲🇽 México (+52)</option>
            </select>
            <input
              type="tel"
              name="lead_phone"
              value={formData.lead_phone}
              onChange={handleInputChange}
              placeholder="( 00 ) 00000-0000"
              className="flex-1 px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center text-white text-sm font-bold">
              ···
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Instagram */}
      {currentStep === 4 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instagram o sitio web de tu empresa
          </h1>
          <p className="text-sm text-gray-600 mb-6">Ejemplo: @michaell.ia o https://miempresa.com</p>

          <div className="mb-8">
            <input
              type="text"
              name="lead_instagram"
              value={formData.lead_instagram}
              onChange={handleInputChange}
              placeholder="@tuempresa o https://..."
              className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Volumen WhatsApp */}
      {currentStep === 5 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cuántas personas aproximadamente escriben a tu WhatsApp cada semana?
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { value: "menos_10", label: "Menos de 10" },
              { value: "10_50", label: "10 a 50" },
              { value: "50_100", label: "50 a 100" },
              { value: "mas_100", label: "Más de 100" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.weekly_whatsapp_volume === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="weekly_whatsapp_volume"
                  value={option.value}
                  checked={formData.weekly_whatsapp_volume === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 relative flex-shrink-0 ${
                    formData.weekly_whatsapp_volume === option.value ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {formData.weekly_whatsapp_volume === option.value && (
                    <div className="absolute inset-1 rounded-full bg-blue-600" />
                  )}
                </div>
                <span className="text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 6: Atención fuera de horario */}
      {currentStep === 6 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Tienes alguien que atienda mensajes fuera del horario laboral (noches, fines de semana, feriados)?
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { value: "yes", label: "Sí, tenemos atención fuera de horario" },
              { value: "no", label: "No, solo respondemos en horario laboral" },
              { value: "sometimes", label: "A veces, depende de la disponibilidad" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.has_after_hours_support === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="has_after_hours_support"
                  value={option.value}
                  checked={formData.has_after_hours_support === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 relative flex-shrink-0 ${
                    formData.has_after_hours_support === option.value ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {formData.has_after_hours_support === option.value && (
                    <div className="absolute inset-1 rounded-full bg-blue-600" />
                  )}
                </div>
                <span className="text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 7: Área de impacto IA */}
      {currentStep === 7 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿En qué área crees que la IA puede contribuir más hoy a los resultados de tu negocio?
          </h1>

          <div className="mb-8">
            <textarea
              name="ia_impact_area"
              value={formData.ia_impact_area}
              onChange={handleInputChange}
              placeholder="Cuéntanos tu visión..."
              className="w-full min-h-[120px] px-4 py-3.5 text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-y"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 8: Urgencia de automatización */}
      {currentStep === 8 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué tan urgente es para ti automatizar tu atención al cliente/paciente?
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { value: "1", label: "No es prioridad ahora", badge: "1" },
              { value: "2", label: "Podría ser útil en unos meses", badge: "2" },
              { value: "3", label: "Me interesa pronto", badge: "3" },
              { value: "4", label: "Alta prioridad", badge: "4" },
              { value: "5", label: "Lo necesito ya 🚀", badge: "5" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.automation_urgency === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="automation_urgency"
                  value={option.value}
                  checked={formData.automation_urgency === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="min-w-[28px] h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {option.badge}
                </div>
                <span className="text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 9: Presupuesto marketing */}
      {currentStep === 9 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cuánto inviertes actualmente en marketing y anuncios?
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { value: "none", label: "No invierto aún" },
              { value: "<300", label: "Menos de USD 300" },
              { value: "300-1000", label: "USD 300–1000" },
              { value: ">1000", label: "Más de USD 1000" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.marketing_budget === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="marketing_budget"
                  value={option.value}
                  checked={formData.marketing_budget === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 relative flex-shrink-0 ${
                    formData.marketing_budget === option.value ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {formData.marketing_budget === option.value && (
                    <div className="absolute inset-1 rounded-full bg-blue-600" />
                  )}
                </div>
                <span className="text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 10: Objetivo principal */}
      {currentStep === 10 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cuál es tu objetivo principal al automatizar con IA?
          </h1>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { value: "save_time", label: "⏰ Ahorrar tiempo", emoji: "⏰" },
              { value: "increase_sales", label: "📈 Aumentar ventas", emoji: "📈" },
              { value: "reduce_costs", label: "💰 Reducir costos", emoji: "💰" },
              { value: "improve_service", label: "⭐ Mejorar la atención", emoji: "⭐" },
              { value: "scale_business", label: "🚀 Escalar el negocio", emoji: "🚀" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.main_automation_goal === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="main_automation_goal"
                  value={option.value}
                  checked={formData.main_automation_goal === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 relative flex-shrink-0 ${
                    formData.main_automation_goal === option.value ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {formData.main_automation_goal === option.value && (
                    <div className="absolute inset-1 rounded-full bg-blue-600" />
                  )}
                </div>
                <span className="text-lg">{option.emoji}</span>
                <span className="text-base text-gray-900">{option.label.replace(option.emoji, "").trim()}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Enviar
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 11: Agradecimiento */}
      {currentStep === 11 && (
        <div className="bg-white max-w-3xl w-full rounded-3xl p-8 sm:p-12 shadow-2xl text-center animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            🎉
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">¡Listo! 🎊</h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            <strong>Gracias por completar el formulario.</strong>
          </p>

          <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            Tu <span className="text-blue-600 font-semibold">ebook gratuito</span> con estrategias de IA está en camino
            a tu WhatsApp. 📲
          </p>

          <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            ¿Quieres comenzar tu automatización hoy? Nuestro equipo te contactará pronto para una consultoría gratuita.
            🚀
          </p>

          <button
            onClick={() => {
              analytics.ctaClick("/", "formulario_completado")
              window.location.href = "/"
            }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  )
}
