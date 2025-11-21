"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"

interface FormData {
  lead_name: string
  lead_email: string
  lead_phone: string
  lead_instagram: string
  weekly_whatsapp_volume: string
  has_after_hours_support: string
  ia_impact_area: string
  automation_urgency: string
  marketing_budget: string
  willing_invest_2k: string
}

export default function FormularioPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+55",
    flag: "🇧🇷",
    name: "Brasil",
  })
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  const countries = [
    { code: "+55", flag: "🇧🇷", name: "Brasil" },
    { code: "+57", flag: "🇨🇴", name: "Colombia" },
    { code: "+52", flag: "🇲🇽", name: "México" },
    { code: "+54", flag: "🇦🇷", name: "Argentina" },
    { code: "+51", flag: "🇵🇪", name: "Perú" },
    { code: "+56", flag: "🇨🇱", name: "Chile" },
    { code: "+593", flag: "🇪🇨", name: "Ecuador" },
    { code: "+591", flag: "🇧🇴", name: "Bolivia" },
    { code: "+598", flag: "🇺🇾", name: "Uruguay" },
    { code: "+595", flag: "🇵🇾", name: "Paraguay" },
    { code: "+58", flag: "🇻🇪", name: "Venezuela" },
    { code: "+1", flag: "🇺🇸", name: "USA" },
    { code: "+34", flag: "🇪🇸", name: "España" },
  ]

  const [formData, setFormData] = useState<FormData>({
    lead_name: "",
    lead_email: "",
    lead_phone: "",
    lead_instagram: "",
    weekly_whatsapp_volume: "",
    has_after_hours_support: "",
    ia_impact_area: "",
    automation_urgency: "",
    marketing_budget: "",
    willing_invest_2k: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === "lead_phone") {
      const cleaned = value.replace(/\D/g, "")
      let formatted = cleaned

      if (selectedCountry.code === "+55") {
        if (cleaned.length <= 2) {
          formatted = cleaned
        } else if (cleaned.length <= 7) {
          formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`
        } else {
          formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`
        }
      } else {
        formatted = cleaned
      }

      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const sendPartialLead = async () => {
    try {
      const response = await fetch("https://webhook.algorithpro.com/webhook/webhook_partial_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_name: formData.lead_name,
          lead_email: formData.lead_email,
          lead_phone: `${selectedCountry.code}${formData.lead_phone}`,
          stage: "partial_lead",
        }),
      })

      const result = await response.json()
      console.log("[v0] Partial lead enviado exitosamente:", result)
    } catch (error) {
      console.error("[v0] Error sending partial lead:", error)
    }
  }

  const sendFullLead = async () => {
    try {
      const response = await fetch("https://webhook.algorithpro.com/webhook/webhook_full_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_name: formData.lead_name,
          lead_email: formData.lead_email,
          lead_phone: `${selectedCountry.code}${formData.lead_phone}`,
          lead_instagram: formData.lead_instagram,
          weekly_whatsapp_volume: formData.weekly_whatsapp_volume,
          has_after_hours_support: formData.has_after_hours_support,
          ia_impact_area: formData.ia_impact_area,
          automation_urgency: formData.automation_urgency,
          marketing_budget: formData.marketing_budget,
          willing_invest_2k: formData.willing_invest_2k,
          stage: "full_lead",
        }),
      })

      const result = await response.json()
      console.log("[v0] Full lead enviado exitosamente:", result)
    } catch (error) {
      console.error("[v0] Error sending full lead:", error)
    }
  }

  const nextStep = async () => {
    console.log("[v0] Current step:", currentStep)

    if (currentStep === 3) {
      console.log("[v0] Paso 3 alcanzado - enviando partial lead")
      await sendPartialLead()
    }

    if (currentStep === 10) {
      console.log("[v0] Paso 10 alcanzado - enviando full lead")
      await sendFullLead()
    }

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
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Step 0: Bienvenida */}
      {currentStep === 0 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-center animate-in fade-in duration-500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hola, bienvenido(a) 👋
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
            Si hoy tu negocio está <span className="text-blue-600 font-semibold">perdiendo ventas</span> o{" "}
            <span className="text-blue-600 font-semibold">tiempo</span> respondiendo mensajes, no te preocupes:{" "}
            <span className="text-blue-600 font-semibold">podemos solucionarlo</span>.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
            Primero te haré algunas <span className="text-blue-600 font-semibold">preguntas rápidas</span> para entender
            tu situación.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Al finalizar, recibirás en tu WhatsApp un{" "}
            <span className="text-blue-600 font-semibold">ebook con las estrategias de IA</span> que están{" "}
            <span className="text-blue-600 font-semibold">revolucionando negocios</span> como el tuyo en Latinoamérica.
            📲⚡
          </p>

          <button
            onClick={nextStep}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Comenzar
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      {/* Step 1: Nombre */}
      {currentStep === 1 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Cuál es tu nombre?
          </h1>

          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              name="lead_name"
              value={formData.lead_name}
              onChange={handleInputChange}
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.lead_name.trim()}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Email */}
      {currentStep === 2 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tu mejor correo electrónico
          </h1>

          <div className="mb-6 sm:mb-8">
            <input
              type="email"
              name="lead_email"
              value={formData.lead_email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.lead_email.includes("@")}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: WhatsApp */}
      {currentStep === 3 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Numero de WhatsApp:
          </h1>

          <div className="mb-6 sm:mb-8">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="flex items-center gap-2 px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all min-w-[100px]"
                >
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto w-64">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country)
                          setShowCountryDropdown(false)
                          setFormData((prev) => ({ ...prev, lead_phone: "" }))
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all w-full text-left"
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <span className="text-sm font-medium text-gray-900">{country.name}</span>
                        <span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  name="lead_phone"
                  value={formData.lead_phone}
                  onChange={handleInputChange}
                  placeholder={selectedCountry.code === "+55" ? "(00) 00000-0000" : "000000000"}
                  required
                  className="w-full px-4 py-3.5 text-base border-b-2 border-gray-300 outline-none focus:border-blue-600 transition-all bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.lead_phone.trim()}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Avanzar
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Instagram */}
      {currentStep === 4 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Instagram o sitio web de tu empresa
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Ejemplo: @michaell.ia o https://miempresa.com</p>

          <div className="mb-6 sm:mb-8">
            <input
              type="text"
              name="lead_instagram"
              value={formData.lead_instagram}
              onChange={handleInputChange}
              placeholder="@tuempresa o https://..."
              className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Volumen WhatsApp */}
      {currentStep === 5 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Cuántas personas aproximadamente escriben a tu WhatsApp cada semana?
          </h1>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {[
              { value: "Menos de 10", label: "Menos de 10" },
              { value: "10 a 50", label: "10 a 50" },
              { value: "50 a 100", label: "50 a 100" },
              { value: "Más de 100", label: "Más de 100" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3.5 sm:p-4 border rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
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
                <span className="text-sm sm:text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.weekly_whatsapp_volume}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 6: Atención fuera de horario */}
      {currentStep === 6 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Tienes alguien que atienda mensajes fuera del horario laboral (noches, fines de semana, feriados)?
          </h1>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {[
              { value: "yes", label: "Sí, tenemos atención fuera de horario" },
              { value: "no", label: "No, solo respondemos en horario laboral" },
              { value: "sometimes", label: "A veces, depende de la disponibilidad" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3.5 sm:p-4 border rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
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
                <span className="text-sm sm:text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.has_after_hours_support}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 7: Área de impacto IA */}
      {currentStep === 7 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿En qué área crees que la IA puede contribuir más hoy a los resultados de tu negocio?
          </h1>

          <div className="mb-6 sm:mb-8">
            <textarea
              name="ia_impact_area"
              value={formData.ia_impact_area}
              onChange={handleInputChange}
              placeholder="Cuéntanos tu visión..."
              className="w-full min-h-[100px] sm:min-h-[120px] px-4 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-y"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.ia_impact_area.trim()}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 8: Urgencia de automatización */}
      {currentStep === 8 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Qué tan urgente es para ti automatizar tu atención al cliente/paciente?
          </h1>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {[
              { value: "1", label: "No es prioridad ahora" },
              { value: "2", label: "Podría ser útil en unos meses" },
              { value: "3", label: "Me interesa pronto" },
              { value: "4", label: "Alta prioridad" },
              { value: "5", label: "Lo necesito ya 🚀" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3.5 sm:p-4 border rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
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
                <div className="min-w-[24px] sm:min-w-[28px] h-6 sm:h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm font-semibold flex-shrink-0">
                  {option.value}
                </div>
                <span className="text-sm sm:text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.automation_urgency}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 9: Presupuesto marketing */}
      {currentStep === 9 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-in fade-in duration-500">
          <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden mb-6 sm:mb-8">
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${getProgress()}%` }} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Cuánto inviertes actualmente en marketing y anuncios?
          </h1>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {[
              { value: "none", label: "No invierto aún" },
              { value: "<300", label: "Menos de USD 300" },
              { value: "300-1000", label: "USD 300–1000" },
              { value: ">1000", label: "Más de USD 1000" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3.5 sm:p-4 border rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
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
                <span className="text-sm sm:text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.marketing_budget}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 10: Investment Willingness */}
      {currentStep === 10 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl animate-in fade-in duration-500">
          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">Paso 10 de 10</span>
            <div className="w-full bg-gray-200 h-1.5 sm:h-2 rounded-full mt-2 sm:mt-3 overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: "100%" }} />
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Si el sistema cumpliera con tus objetivos, ¿estarías dispuesto(a) a invertir al menos USD 2.000 en una
            implementación inicial?
          </h1>

          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {[
              { value: "yes", label: "✅ Sí, si el retorno es en 30 días" },
              { value: "open", label: "🤝 Estoy dispuesto a invertir si el plan tiene lógica" },
              { value: "no", label: "🚫 No en este momento" },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3.5 sm:p-4 border rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:bg-gray-50 ${
                  formData.willing_invest_2k === option.value
                    ? "border-blue-600 bg-blue-50 shadow-md -translate-y-0.5"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="willing_invest_2k"
                  value={option.value}
                  checked={formData.willing_invest_2k === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 relative flex-shrink-0 ${
                    formData.willing_invest_2k === option.value ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {formData.willing_invest_2k === option.value && (
                    <div className="absolute inset-1 rounded-full bg-blue-600" />
                  )}
                </div>
                <span className="text-sm sm:text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <button
              onClick={prevStep}
              className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={nextStep}
              disabled={!formData.willing_invest_2k}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 11: Agradecimiento */}
      {currentStep === 11 && (
        <div className="bg-white max-w-3xl w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6">
            🎉
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¡Listo! 🎊
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-4">
            <strong>Gracias por completar el formulario.</strong>
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-4">
            Tu <span className="text-blue-600 font-semibold">ebook gratuito</span> con estrategias de IA está en camino
            a tu WhatsApp. 📲
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            ¿Quieres comenzar tu automatización hoy? Nuestro equipo te contactará pronto para una consultoría gratuita.
            🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6">
            <a
              href="https://www.instagram.com/johnjairo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.08c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              Síguenos en Instagram
            </a>

            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
