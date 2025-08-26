"use client"

import React from "react"
import { analytics, usePageTracking } from "../utils/analytics"

import { useEffect, useState } from "react"
import { Lock, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Vendedor {
  id: number
  nombre: string
  avatar: string
  banner: string
  badge: string
  quote: string
  locked?: boolean
}

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: Date
  status?: "sending" | "sent" | "delivered" | "error"
}

export default function DemoPage() {
  const [progress, setProgress] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [offerOpen, setOfferOpen] = useState(false)
  const [selectedVendedor, setSelectedVendedor] = useState<Vendedor | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [userId, setUserId] = useState<string>("")
  const [sessionId, setSessionId] = useState<string>("")
  const [showExplanationModal, setShowExplanationModal] = useState(false)
  const [showCheckoutButton, setShowCheckoutButton] = useState(false)

  // Analytics tracking
  usePageTracking("demo_page")

  // Función para convertir URLs en enlaces clickeables y renderizar saltos de línea
  const formatMessageWithLinks = (text: string) => {
    // Regex para detectar URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g

    // Dividir el texto en partes, manteniendo las URLs
    const parts = text.split(urlRegex)

    const processedParts = parts.map((part, index) => {
      // Si la parte coincide con el regex de URL, crear un enlace
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline transition-colors duration-200 ${
              isDarkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-600 hover:text-blue-800"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              console.log("🔗 Abriendo enlace:", part)
            }}
          >
            {part}
          </a>
        )
      }
      // Si no es URL, devolver texto normal con saltos de línea procesados
      return part.split("\n").map((line, lineIndex, array) => (
        <React.Fragment key={`${index}-${lineIndex}`}>
          {line}
          {lineIndex < array.length - 1 && <br />}
        </React.Fragment>
      ))
    })

    return processedParts
  }

  useEffect(() => {
    // Crear partículas flotantes
    const createParticles = () => {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "vw"
        particle.style.animationDuration = 5 + Math.random() * 5 + "s"
        particle.style.opacity = Math.random().toString()
        document.body.appendChild(particle)
      }
    }

    createParticles()
    analytics.demoStart()

    // Barra de progreso
    const duration = 7000
    const interval = 50
    const step = (interval / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + step
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setShowSuccess(true)
            setTimeout(() => {
              setShowExplanationModal(true) // Mostrar popup explicativo primero
            }, 4500)
          }, 200)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => {
      clearInterval(timer)
      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  useEffect(() => {
    const checkoutTimer = setTimeout(() => {
      setShowCheckoutButton(true)
    }, 45000) // 45 segundos

    return () => clearTimeout(checkoutTimer)
  }, [])

  // Inicializar identificadores únicos persistentes
  useEffect(() => {
    // 👉 1. Identificadores estables por usuario y sesión
    const storedUserId = localStorage.getItem("userId")
    const storedSessionId = sessionStorage.getItem("sessionId")

    // Generar userId persistente (se mantiene entre sesiones)
    const currentUserId = storedUserId || crypto.randomUUID()
    if (!storedUserId) {
      localStorage.setItem("userId", currentUserId)
    }

    // Generar sessionId persistente (se mantiene durante la sesión)
    const currentSessionId = storedSessionId || crypto.randomUUID()
    if (!storedSessionId) {
      sessionStorage.setItem("sessionId", currentSessionId)
    }

    setUserId(currentUserId)
    setSessionId(currentSessionId)

    console.log("🆔 Identificadores inicializados:", {
      userId: currentUserId,
      sessionId: currentSessionId,
      isNewUser: !storedUserId,
      isNewSession: !storedSessionId,
    })
  }, [])

  const vendedores: Vendedor[] = [
    {
      id: 1,
      nombre: "Andres AI",
      avatar: "https://i.pravatar.cc/150?img=8",
      banner: "https://source.unsplash.com/featured/?office",
      badge: "Soporte VIP",
      quote: "Resuelvo dudas y fidelizo clientes en minutos.",
    },
    {
      id: 2,
      nombre: "Diego AI",
      avatar: "https://i.pravatar.cc/150?img=12",
      banner: "https://source.unsplash.com/featured/?startup",
      badge: "Ventas 24/7",
      quote: "Cierro ventas mientras tú duermes",
    },
    {
      id: 3,
      nombre: "Alexa AI",
      avatar: "https://i.pravatar.cc/150?img=32",
      banner: "https://source.unsplash.com/featured/?sales",
      badge: "Responsable de ventas",
      quote: "Conduzco al lead del hola al pago sin fricción.",
    },
    {
      id: 4,
      nombre: "Maria AI",
      avatar: "https://i.pravatar.cc/150?img=45",
      banner: "https://source.unsplash.com/featured/?customer",
      badge: "Lead Hunter",
      quote: "No dejo escapar ni un solo prospecto.",
      locked: true,
    },
    {
      id: 5,
      nombre: "Luna AI",
      avatar: "https://i.pravatar.cc/150?img=25",
      banner: "https://source.unsplash.com/featured/?marketing",
      badge: "Atende Llamadas",
      quote: "Agendo llamadas que generan millones",
      locked: true,
    },
    {
      id: 6,
      nombre: "Maximiliano AI",
      avatar: "https://i.pravatar.cc/150?img=51",
      banner: "https://source.unsplash.com/featured/?analytics",
      badge: "Closer Multicanal",
      quote: "Integro WhatsApp, email y web para vender más",
      locked: true,
    },
  ]

  const openChat = (vendedor: Vendedor) => {
    analytics.vendedorSelect(vendedor.nombre, vendedor.id, vendedor.locked || false)

    if (vendedor.locked) {
      setOfferOpen(true)
      return
    }

    setSelectedVendedor(vendedor)
    setChatOpen(true)
    const initialMessage: Message = {
      id: 1,
      text: `¡Hola! Soy ${vendedor.nombre}. ¿En qué puedo ayudarte hoy?`,
      sender: "ai",
      timestamp: new Date(),
      status: "delivered",
    }
    setMessages([initialMessage])
  }

  const closeChat = () => {
    setChatOpen(false)
    setSelectedVendedor(null)
    setMessages([])
    setInputMessage("")
    setIsDarkMode(false)
    setIsTyping(false)

    // Redirigir a la página de oferta
    window.location.href = "/oferta"
  }

  const closeOffer = () => {
    setOfferOpen(false)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const sendToWebhookAndGetResponse = async (
    message: string,
    vendedorId: number,
    vendedorName: string,
  ): Promise<string | null> => {
    const maxRetries = 2
    let lastError: any = null

    // URLs de webhook según el vendedor - CORREGIDAS
    let webhookUrls: string[] = []

    if (vendedorId === 1) {
      // Andres AI - Webhook corregido
      webhookUrls = [
        "https://webhook.algorithpro.com/webhook/vendedor1",
        "https://n8n.algorithpro.com/webhook/vendedor1", // URL de respaldo
      ]
    } else if (vendedorId === 2) {
      // Diego AI - Webhook original
      webhookUrls = [
        "https://n8n.algorithpro.com/webhook/vendedor2",
        "https://n8n.algorithpro.com/webhook-test/vendedor2", // URL de respaldo
      ]
    } else if (vendedorId === 3) {
      // Alexa AI - Nuevo webhook
      webhookUrls = [
        "https://n8n.algorithpro.com/webhook/vendedor3",
        "https://webhook.algorithpro.com/webhook/vendedor3", // URL de respaldo
      ]
    } else {
      // Otros vendedores - sin webhook
      return null
    }

    for (let urlIndex = 0; urlIndex < webhookUrls.length; urlIndex++) {
      const webhookUrl = webhookUrls[urlIndex]
      console.log(`🔗 Probando webhook ${urlIndex + 1}/${webhookUrls.length} para ${vendedorName}: ${webhookUrl}`)

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          // Estructura de datos adaptada según el vendedor
          const webhookData = {
            message: message.trim(),
            agent: vendedorId === 1 ? "Andres" : vendedorId === 2 ? "Diego" : "Alexa",
            timestamp: new Date().toISOString(),
            userId,
            sessionId,
            vendedorId,
            agentId: vendedorId,
            vendedorName: vendedorName,
          }

          console.log(
            `🔄 ${vendedorName} - URL ${urlIndex + 1} - Intento ${attempt}/${maxRetries}:`,
            JSON.stringify(webhookData, null, 2),
          )

          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 25000) // 25 segundos

          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(webhookData),
            signal: controller.signal,
          })

          clearTimeout(timeoutId)

          console.log(`📥 Respuesta URL ${urlIndex + 1} - Intento ${attempt}:`, {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
            url: webhookUrl,
          })

          if (response.ok) {
            try {
              const responseText = await response.text()
              console.log("📝 Respuesta cruda:", responseText)

              if (responseText.trim()) {
                try {
                  const responseData = JSON.parse(responseText)
                  console.log("📊 Respuesta JSON:", JSON.stringify(responseData, null, 2))

                  // Buscar respuesta en múltiples campos
                  const responseFields = ["output", "response", "message", "text", "reply", "answer"]

                  for (const field of responseFields) {
                    if (responseData[field] && typeof responseData[field] === "string") {
                      const cleanResponse = responseData[field].trim()
                      if (cleanResponse) {
                        console.log(`✅ Respuesta encontrada en '${field}':`, cleanResponse)
                        console.log("🔗 Verificando enlaces en respuesta:", cleanResponse.match(/(https?:\/\/[^\s]+)/g))
                        return cleanResponse
                      }
                    }
                  }

                  // Si no encontramos campos específicos, pero hay datos válidos
                  if (typeof responseData === "object" && !responseData.error) {
                    return "Recibí tu mensaje y lo estoy procesando. ¿Podrías ser más específico en tu consulta?"
                  }
                } catch (e) {
                  // Si no es JSON, usar como texto plano
                  const cleanText = responseText.trim()
                  if (cleanText && !cleanText.includes("error") && !cleanText.includes("Error")) {
                    console.log("🔗 Verificando enlaces en texto plano:", cleanText.match(/(https?:\/\/[^\s]+)/g))
                    return cleanText
                  }
                }
              }

              // Si llegamos aquí, la respuesta fue exitosa pero vacía o inválida
              return "Estoy procesando tu consulta. ¿Podrías reformular tu pregunta?"
            } catch (parseError) {
              console.error("❌ Error parseando respuesta exitosa:", parseError)
              return "Recibí tu mensaje correctamente. ¿Podrías intentar con una pregunta diferente?"
            }
          }

          // Manejar errores HTTP específicos
          const errorText = await response.text()
          let errorData: any = null

          try {
            errorData = JSON.parse(errorText)
          } catch (e) {
            errorData = { message: errorText }
          }

          console.error(`❌ Error HTTP ${response.status}:`, {
            status: response.status,
            statusText: response.statusText,
            error: errorData,
            url: webhookUrl,
            attempt: attempt,
          })

          // Manejo específico para "Error in workflow"
          if (errorData?.message === "Error in workflow" || errorText.includes("Error in workflow")) {
            console.log("🔧 Detectado error de workflow en n8n")

            // Si es el primer intento y primera URL, intentar con datos aún más simples
            if (attempt === 1 && urlIndex === 0) {
              console.log("🔄 Reintentando con datos ultra-simples...")
              const simpleData = { message: message.trim() }

              try {
                const simpleResponse = await fetch(webhookUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(simpleData),
                  signal: AbortSignal.timeout(15000),
                })

                if (simpleResponse.ok) {
                  const simpleText = await simpleResponse.text()
                  if (simpleText.trim()) {
                    console.log("✅ Respuesta con datos simples:", simpleText)
                    try {
                      const simpleJson = JSON.parse(simpleText)
                      return simpleJson.output || simpleJson.response || simpleJson.message || simpleText
                    } catch (e) {
                      return simpleText.trim()
                    }
                  }
                }
              } catch (simpleError) {
                console.log("⚠️ Intento con datos simples también falló")
              }
            }

            // Para errores de workflow, no reintentar en la misma URL
            lastError = new Error(`Workflow Error: ${errorData?.message || errorText}`)
            break // Salir del loop de intentos para esta URL
          }

          // Para otros errores 500, intentar una vez más
          if (response.status === 500 && attempt < maxRetries) {
            console.log(`⏳ Esperando ${attempt * 2} segundos antes del siguiente intento...`)
            await new Promise((resolve) => setTimeout(resolve, attempt * 2000))
            lastError = new Error(`HTTP ${response.status}: ${errorData?.message || errorText}`)
            continue
          }

          // Para otros errores, no reintentar
          lastError = new Error(`HTTP ${response.status}: ${errorData?.message || errorText}`)
          break
        } catch (error) {
          console.error("❌ Error en el intento de envío:", error)
        }
      }

      // Si llegamos aquí, todos los intentos para esta URL fallaron
      console.log(`💥 Todos los intentos fallaron para URL ${urlIndex + 1}`)
    }

    // Si llegamos aquí, todas las URLs fallaron
    console.error("💥 Todas las URLs de webhook fallaron. Último error:", lastError)

    // Respuestas de fallback específicas según el tipo de error
    if (lastError?.message?.includes("Error in workflow")) {
      return "El sistema de IA está siendo actualizado en este momento. Mientras tanto, puedo ayudarte con consultas básicas sobre ventas. ¿Qué necesitas saber?"
    } else if (lastError?.message?.includes("500")) {
      return "Estoy experimentando algunos problemas técnicos temporales. ¿Podrías intentar reformular tu pregunta de manera más simple?"
    } else if (lastError?.name === "AbortError" || lastError?.name === "TimeoutError") {
      return "Tu consulta está siendo procesada, pero está tomando más tiempo del esperado. ¿Podrías hacer una pregunta más directa?"
    } else {
      return "Hay un problema de conexión temporal con mi sistema de IA avanzada. Puedo ayudarte con información básica mientras se resuelve. ¿Qué necesitas?"
    }
  }

  const updateMessageStatus = (messageId: number, status: Message["status"]) => {
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, status } : msg)))
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage("")

    // Actualizar estado a "sent"
    setTimeout(() => updateMessageStatus(userMessage.id, "sent"), 500)

    // Solo enviar al webhook si es Diego AI (id: 2) o cualquier vendedor disponible
    if (selectedVendedor && !selectedVendedor.locked) {
      setIsTyping(true)

      try {
        // Actualizar estado a "delivered"
        setTimeout(() => updateMessageStatus(userMessage.id, "delivered"), 1000)

        console.log(`🚀 Enviando mensaje a ${selectedVendedor.nombre} (ID: ${selectedVendedor.id}):`, currentMessage)

        // Solo Diego AI (id: 2), Andres AI (id: 1) y Alexa AI (id: 3) usan webhook real, otros usan respuestas simuladas
        let aiResponse: string | null = null

        if (selectedVendedor.id === 1) {
          // Andres AI - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else if (selectedVendedor.id === 2) {
          // Diego AI - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else if (selectedVendedor.id === 3) {
          // Alexa AI - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else {
          // Otros vendedores - Respuestas simuladas
          await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

          const simulatedResponses = [
            "Perfecto, entiendo tu necesidad. Te puedo ayudar con eso.",
            "Excelente pregunta. Basándome en mi experiencia, te recomiendo...",
            "Esa es una estrategia muy inteligente. Déjame mostrarte cómo optimizarla.",
            "Me parece una gran oportunidad. ¿Te gustaría que analicemos los números?",
            "Exacto, esa es la clave del éxito. Te explico paso a paso...",
          ]

          aiResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)]
        }

        setIsTyping(false)

        if (aiResponse) {
          const aiMessage: Message = {
            id: Date.now(), // Usar timestamp para evitar conflictos
            text: aiResponse,
            sender: "ai",
            timestamp: new Date(),
            status: "delivered",
          }

          setMessages((prev) => [...prev, aiMessage])
          console.log(`✅ Respuesta recibida de ${selectedVendedor.nombre}:`, aiResponse)
        } else {
          // Mensaje de fallback si no hay respuesta
          const fallbackMessage: Message = {
            id: Date.now(),
            text: "No pude procesar tu mensaje en este momento. ¿Podrías ser más específico en tu pregunta?",
            sender: "ai",
            timestamp: new Date(),
            status: "delivered",
          }

          setMessages((prev) => [...prev, fallbackMessage])
        }
      } catch (error) {
        setIsTyping(false)
        updateMessageStatus(userMessage.id, "error")
        console.error("💥 Error final en sendMessage:", error)

        const errorMessage: Message = {
          id: Date.now(),
          text: "Disculpa, hay un problema técnico. Nuestro equipo está trabajando para solucionarlo. Por favor, intenta de nuevo.",
          sender: "ai",
          timestamp: new Date(),
          status: "delivered",
        }

        setMessages((prev) => [...prev, errorMessage])
      }
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const closeExplanationModal = () => {
    setShowExplanationModal(false)
    setShowCards(true)
  }

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border-b border-[#00C896] shadow-lg shadow-[#00C896]/20 z-50">
        <div className="flex justify-between items-center px-5 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">Volver</span>
            </Link>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              🤖 <span className="text-[#00C896]">VENTA 24/7</span>
            </div>
          </div>
          <nav className="flex gap-3">
            <a
              href="/oferta"
              className="bg-gradient-to-br from-[#00C896] to-[#00A876] text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-900 hover:shadow-lg hover:shadow-[#00C896]/30"
              onClick={() => analytics.ctaClick("Comenzar Ahora", "demo_header", "/oferta")}
            >
              <span>🚀</span> Comenzar Ahora
            </a>
          </nav>
        </div>
      </header>

      {/* Fondo degradado animado */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] animate-gradient" />

      {/* Contenido principal - Altura fija con scroll controlado */}
      <div className="h-screen pt-16 pb-16 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-4">
          {/* Loader - Siempre visible inicialmente */}
          <div
            className={`loader text-center max-w-md w-full transition-all duration-800 z-10 ${showCards ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="px-4">
              <div
                className={`icon text-4xl sm:text-5xl mb-6 sm:mb-8 inline-block transition-all duration-500 ${showSuccess ? "w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] leading-[60px] sm:leading-[70px] rounded-full bg-[#00C896] text-white text-3xl sm:text-4xl shadow-lg shadow-[#00C896]/30" : "text-white"}`}
              >
                {showSuccess ? "✔" : "🤖"}
              </div>

              <h1 className="text-lg sm:text-xl text-white mb-4 sm:mb-5 leading-tight px-2">
                {showSuccess ? (
                  <>6 vendedores con&nbsp;AI&nbsp;24/7 están disponibles</>
                ) : (
                  <>
                    Cargando tus vendedores virtuales
                    <br />
                    disponibles para tu negocio…
                  </>
                )}
              </h1>

              <p className="text-white/85 mb-5 sm:mb-6 text-sm sm:text-base px-2">
                {showSuccess ? "3 gratis" : "Analizando tus preferencias"}
              </p>

              <div
                className={`progress w-full h-1.5 bg-white/20 rounded-full overflow-hidden transition-opacity duration-500 ${showSuccess ? "opacity-0" : "opacity-100"}`}
              >
                <div
                  className="progress-bar h-full bg-[#00C896] transition-all duration-800 linear shadow-sm shadow-[#00C896]/50"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cards - Layout Vertical Centrado con altura controlada */}
          <div
            className={`cards-container w-full max-w-md absolute transition-all duration-600 ${showCards ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="flex flex-col items-center gap-6 py-6 px-4 max-h-[calc(100vh-8rem)] overflow-y-auto overflow-visible">
              {vendedores.map((vendedor) => (
                <div
                  key={vendedor.id}
                  className={`relative w-full max-w-sm h-auto min-h-fit bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border rounded-xl shadow-lg overflow-visible transition-all duration-500 hover:scale-105 ${
                    vendedor.locked
                      ? "border-[#FFD700] shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40"
                      : "border-[#00C896] shadow-[#00C896]/20 hover:shadow-[#00C896]/40 hover:border-[#00C896]/80"
                  }`}
                >
                  {/* Overlay para vendedores bloqueados */}
                  {vendedor.locked && (
                    <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center rounded-xl">
                      <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-3 rounded-full">
                        <Lock size={24} className="text-white" />
                      </div>
                    </div>
                  )}

                  {/* Contenido de la card con padding adecuado */}
                  <div className="p-6 flex flex-col items-center text-center space-y-4 h-auto">
                    {/* Badges esquina superior */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                          vendedor.locked
                            ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500]"
                            : "bg-gradient-to-br from-[#00C896] to-[#00A876]"
                        }`}
                      >
                        {vendedor.locked ? "🔒 Premium" : "✨ Gratis"}
                      </span>

                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${
                          vendedor.locked
                            ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white"
                            : "bg-gradient-to-br from-[#00C896] to-[#00A876] text-white"
                        }`}
                      >
                        {vendedor.badge}
                      </span>
                    </div>

                    {/* Avatar centrado con espacio superior para badges */}
                    <div className="mt-8 mb-4">
                      <img
                        src={vendedor.avatar || "/placeholder.svg"}
                        alt={vendedor.nombre}
                        className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white/20"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${vendedor.nombre.charAt(0)}`
                        }}
                      />
                    </div>

                    {/* Información del vendedor */}
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold text-lg">{vendedor.nombre}</h3>
                      <p className="text-white/70 text-sm leading-relaxed px-2">{vendedor.quote}</p>
                    </div>

                    {/* Botón de acción */}
                    <button
                      onClick={() => openChat(vendedor)}
                      className={`w-full text-sm font-medium rounded-xl py-3 px-4 transition-all duration-300 ${
                        vendedor.locked
                          ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black hover:shadow-[#FFD700]/40 hover:shadow-lg"
                          : "bg-gradient-to-br from-[#00C896] to-[#00A876] text-white hover:shadow-[#00C896]/40 hover:shadow-lg"
                      }`}
                      disabled={vendedor.locked}
                    >
                      {vendedor.locked ? "🔓 Desbloquear Premium" : "💬 Iniciar Chat"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal - WhatsApp Style Enhanced */}
      {chatOpen && selectedVendedor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-1 sm:p-2 md:p-4">
          <div
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[95vh] sm:h-[90vh] md:h-[85vh] lg:h-[600px] bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out transform scale-100 animate-in slide-in-from-bottom-4 fade-in flex flex-col mx-1 sm:mx-2"
            style={{
              animation: "slideInUp 0.3s ease-out",
            }}
          >
            {/* WhatsApp Header Enhanced */}
            <div className="bg-[#00a884] dark:bg-[#2a2f32] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between text-white shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 flex-1 min-w-0">
                <button
                  onClick={closeChat}
                  className="p-1 sm:p-1.5 hover:bg-white/10 rounded-full transition-all duration-250 ease-in-out hover:scale-110 active:scale-95 flex-shrink-0"
                >
                  <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                </button>
                <div className="relative flex-shrink-0">
                  <img
                    src={selectedVendedor.avatar || "/placeholder.svg"}
                    alt={selectedVendedor.nombre}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/20 shadow-md"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                    {selectedVendedor.nombre}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {isTyping ? (
                      <span className="flex items-center gap-1">
                        escribiendo
                        <span className="flex gap-0.5">
                          <span
                            className="w-1 h-1 bg-green-200 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-green-200 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-green-200 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></span>
                        </span>
                      </span>
                    ) : (
                      "en línea"
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                {/* Botón de checkout */}
                {showCheckoutButton && (
                  <a
                    href="https://hotm.art/NyTUgsE5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 px-3 py-1 text-white text-sm hover:bg-red-700 transition-all duration-300 mr-2 animate-bounce shadow-lg shadow-red-400/50"
                  >
                    🔒Reclama cupo
                  </a>
                )}

                {/* Menu Button */}
                <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-all duration-250 ease-in-out hidden md:block">
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  onClick={closeChat}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-all duration-250 ease-in-out hover:bg-red-500/20"
                >
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-zinc-800 p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] md:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2 shadow-sm ${
                      message.sender === "user"
                        ? "bg-[#00a884] text-white rounded-br-md"
                        : "bg-white dark:bg-zinc-700 text-gray-800 dark:text-white rounded-bl-md"
                    }`}
                  >
                    <div className="text-xs sm:text-sm leading-relaxed break-words">
                      {formatMessageWithLinks(message.text)}
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString("es-ES", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {message.sender === "user" && (
                        <span className="text-xs">
                          {message.status === "sending" && "⏳"}
                          {message.status === "sent" && "✓"}
                          {message.status === "delivered" && "✓✓"}
                          {message.status === "error" && "❌"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-zinc-700 rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Container */}
            <div className="bg-gray-100 dark:bg-zinc-900 px-2 sm:px-3 md:px-4 py-2 sm:py-3 border-t border-gray-200 dark:border-zinc-700">
              <div className="flex items-end gap-1 sm:gap-2">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe un mensaje..."
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-2xl px-3 sm:px-4 py-2 pr-8 sm:pr-12 text-xs sm:text-sm resize-none max-h-20 sm:max-h-32 focus:outline-none focus:ring-2 focus:ring-[#00a884] focus:border-transparent"
                    rows={1}
                    style={{
                      minHeight: "36px",
                      maxHeight: "80px",
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement
                      target.style.height = "36px"
                      target.style.height = Math.min(target.scrollHeight, 80) + "px"
                    }}
                  />
                  <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm">
                    😊
                  </button>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-[#00a884] hover:bg-[#008f72] disabled:bg-gray-300 dark:disabled:bg-zinc-600 text-white p-2 sm:p-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explanation Modal */}
      {showExplanationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border border-[#00C896] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-2 max-h-[95vh] overflow-y-auto">
            {/* Header */}
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-[#00C896]/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-[#00C896]/20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <span className="text-base sm:text-lg md:text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">¡Bienvenido a la Demo!</h3>
                  <p className="text-[#00C896] text-xs sm:text-sm">Descubre cómo funcionan nuestros asistentes</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6">
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#00C896]/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#00C896] text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                      Elige tu Asistente Virtual
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Selecciona entre 6 vendedores especializados, cada uno con habilidades únicas para tu negocio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#00C896]/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#00C896] text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                      Chatea en Tiempo Real
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Conversa directamente con el asistente para probar sus capacidades de venta y atención al cliente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#00C896]/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#00C896] text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                      Conecta tu WhatsApp
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Si te gusta lo que ves, puedes integrar el asistente directamente a tu WhatsApp Business o
                      WhatsApp Normal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base md:text-lg">💡</span>
                  <h4 className="text-[#00C896] font-semibold text-xs sm:text-sm md:text-base">Tip Importante</h4>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  Los primeros 3 asistentes son <strong className="text-[#00C896]">completamente gratuitos</strong>. Los
                  premium ofrecen funcionalidades avanzadas para negocios que requieren mayor personalización.
                </p>
              </div>

              <button
                onClick={() => {
                  analytics.ctaClick("Probar Ahora", "explanation_modal")
                  closeExplanationModal()
                }}
                className="w-full bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105"
              >
                <span>🚀</span>
                Probar Ahora
                <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Footer */}
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-[#00C896]/20 text-center">
              <p className="text-white/60 text-xs">✅ Sin registro • ✅ Prueba gratuita • ✅ Integración inmediata</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
