"use client"

import React from "react"
import { analytics, usePageTracking } from "../utils/analytics"

import { useEffect, useState, useRef } from "react"
import { Lock, ArrowLeft, ArrowRight, HelpCircle, CheckCircle, Copy } from "lucide-react"
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
  const [showLinkedInModal, setShowLinkedInModal] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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

  // Función para hacer scroll automático al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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

    return () => {
      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle) => particle.remove())
    }
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

  // Scroll automático cuando se agregan nuevos mensajes
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const vendedores: Vendedor[] = [
    {
      id: 1,
      nombre: "LinkedIn Expert Pro",
      avatar: "https://i.pravatar.cc/150?img=8",
      banner: "https://source.unsplash.com/featured/?linkedin",
      badge: "Especialista Elite",
      quote:
        "🔥 He ayudado a +500 profesionales a conseguir trabajo en EE.UU. Tu perfil actual te está costando miles de dólares en oportunidades perdidas. ¡Déjame arreglarlo AHORA!",
    },
  ]

  const openChat = (vendedor: Vendedor) => {
    analytics.vendedorSelect(vendedor.nombre, vendedor.id, vendedor.locked || false)

    if (vendedor.locked) {
      setOfferOpen(true)
      return
    }

    // Mostrar modal de LinkedIn antes de abrir el chat
    setSelectedVendedor(vendedor)
    setShowLinkedInModal(true)
  }

  const startChatWithExpert = () => {
    setShowLinkedInModal(false)

    // Start loading sequence
    const duration = 5000
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
              setChatOpen(true)
              const initialMessage: Message = {
                id: 1,
                text: `¡Hola! Soy ${selectedVendedor?.nombre}. Para hacer tu análisis gratuito, por favor comparte el link de tu perfil de LinkedIn. ¿Ya lo tienes listo?`,
                sender: "ai",
                timestamp: new Date(),
                status: "delivered",
              }
              setMessages([initialMessage])
            }, 1800)
          }, 200)
          return 100
        }
        return newProgress
      })
    }, interval)
  }

  const showHelpInstructions = () => {
    setShowLinkedInModal(false)
    setShowHelpModal(true)
  }

  const confirmLinkCopied = () => {
    setShowHelpModal(false)

    // Start loading sequence
    const duration = 5000
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
              setChatOpen(true)
              const initialMessage: Message = {
                id: 1,
                text: `¡Perfecto! Ahora que tienes tu link de LinkedIn listo, por favor pégalo aquí para comenzar tu análisis gratuito personalizado. 🚀`,
                sender: "ai",
                timestamp: new Date(),
                status: "delivered",
              }
              setMessages([initialMessage])
            }, 1800)
          }, 200)
          return 100
        }
        return newProgress
      })
    }, interval)
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

  const closeLinkedInModal = () => {
    setShowLinkedInModal(false)
    setSelectedVendedor(null)
  }

  const closeHelpModal = () => {
    setShowHelpModal(false)
    setSelectedVendedor(null)
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
      // LinkedIn Expert - Webhook corregido
      webhookUrls = [
        "https://n8n.algorithpro.com/webhook-test/linkedin",
        "https://webhook.algorithpro.com/webhook/linkedin", // URL de respaldo
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
          // Estructura de datos simplificada para n8n
          const webhookData = {
            message: message.trim(),
            user_id: userId,
            session_id: sessionId,
            timestamp: new Date().toISOString(),
            agent: "LinkedIn Expert Pro",
            context: "demo_chat",
          }

          console.log(
            `🔄 ${vendedorName} - URL ${urlIndex + 1} - Intento ${attempt}/${maxRetries}:`,
            JSON.stringify(webhookData, null, 2),
          )

          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 segundos

          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "User-Agent": "LinkedIn-Pro-Demo/1.0",
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
            headers: Object.fromEntries(response.headers.entries()),
          })

          if (response.ok) {
            try {
              const responseText = await response.text()
              console.log("📝 Respuesta cruda:", responseText)

              if (responseText.trim()) {
                try {
                  const responseData = JSON.parse(responseText)
                  console.log("📊 Respuesta JSON:", JSON.stringify(responseData, null, 2))

                  // Buscar respuesta en múltiples campos posibles de n8n
                  const responseFields = [
                    "response",
                    "message",
                    "output",
                    "text",
                    "reply",
                    "answer",
                    "ai_response",
                    "agent_response",
                    "result",
                  ]

                  for (const field of responseFields) {
                    if (responseData[field] && typeof responseData[field] === "string") {
                      const cleanResponse = responseData[field].trim()
                      if (cleanResponse && cleanResponse.length > 5) {
                        console.log(`✅ Respuesta encontrada en '${field}':`, cleanResponse)
                        return cleanResponse
                      }
                    }
                  }

                  // Si es un array, buscar en el primer elemento
                  if (Array.isArray(responseData) && responseData.length > 0) {
                    const firstItem = responseData[0]
                    for (const field of responseFields) {
                      if (firstItem[field] && typeof firstItem[field] === "string") {
                        const cleanResponse = firstItem[field].trim()
                        if (cleanResponse && cleanResponse.length > 5) {
                          console.log(`✅ Respuesta encontrada en array[0].${field}:`, cleanResponse)
                          return cleanResponse
                        }
                      }
                    }
                  }

                  // Si no encontramos campos específicos, pero hay datos válidos
                  if (typeof responseData === "object" && !responseData.error) {
                    console.log("⚠️ Estructura de respuesta no reconocida, usando fallback")
                    return "Recibí tu mensaje correctamente. ¿Podrías ser más específico sobre qué aspecto de tu perfil de LinkedIn te gustaría mejorar?"
                  }
                } catch (parseError) {
                  console.log("📄 No es JSON válido, tratando como texto plano")
                  // Si no es JSON, usar como texto plano
                  const cleanText = responseText.trim()
                  if (cleanText && cleanText.length > 5 && !cleanText.toLowerCase().includes("error")) {
                    console.log("✅ Usando respuesta como texto plano:", cleanText)
                    return cleanText
                  }
                }
              }

              // Si llegamos aquí, la respuesta fue exitosa pero vacía o inválida
              console.log("⚠️ Respuesta exitosa pero vacía")
              return "Estoy procesando tu consulta sobre LinkedIn. ¿Podrías reformular tu pregunta de manera más específica?"
            } catch (parseError) {
              console.error("❌ Error parseando respuesta exitosa:", parseError)
              return "Recibí tu mensaje correctamente. ¿Podrías intentar con una pregunta diferente sobre tu perfil?"
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

          // Manejo específico para diferentes tipos de errores
          if (response.status === 404) {
            console.log("🔧 Webhook no encontrado, probando siguiente URL...")
            lastError = new Error(`Webhook no encontrado: ${response.status}`)
            break // Salir del loop de intentos para esta URL
          }

          if (response.status === 500) {
            console.log("🔧 Error interno del servidor")
            if (attempt < maxRetries) {
              console.log(`⏳ Esperando ${attempt * 2} segundos antes del siguiente intento...`)
              await new Promise((resolve) => setTimeout(resolve, attempt * 2000))
              lastError = new Error(`Error interno: ${response.status}`)
              continue
            }
          }

          // Para otros errores, no reintentar
          lastError = new Error(`HTTP ${response.status}: ${errorData?.message || errorText}`)
          break
        } catch (error) {
          console.error("❌ Error en el intento de envío:", error)

          if (error.name === "AbortError") {
            lastError = new Error("Timeout: La consulta está tomando demasiado tiempo")
          } else {
            lastError = error
          }

          if (attempt < maxRetries) {
            console.log(`⏳ Esperando antes del siguiente intento...`)
            await new Promise((resolve) => setTimeout(resolve, 1000))
          }
        }
      }

      // Si llegamos aquí, todos los intentos para esta URL fallaron
      console.log(`💥 Todos los intentos fallaron para URL ${urlIndex + 1}`)
    }

    // Si llegamos aquí, todas las URLs fallaron
    console.error("💥 Todas las URLs de webhook fallaron. Último error:", lastError)

    // Respuestas de fallback específicas según el tipo de error
    if (lastError?.message?.includes("Timeout") || lastError?.name === "AbortError") {
      return "Tu consulta está siendo procesada, pero está tomando más tiempo del esperado. Mientras tanto, ¿hay algo específico sobre tu perfil de LinkedIn que te preocupe?"
    } else if (lastError?.message?.includes("404") || lastError?.message?.includes("no encontrado")) {
      return "Estoy experimentando problemas técnicos temporales. ¿Podrías contarme qué tipo de trabajo buscas en EE.UU. para darte algunos consejos básicos?"
    } else if (lastError?.message?.includes("500") || lastError?.message?.includes("interno")) {
      return "Mi sistema avanzado está siendo actualizado. Mientras tanto, puedo ayudarte: ¿cuál es tu mayor desafío con LinkedIn actualmente?"
    } else {
      return "Hay un problema de conexión temporal. ¿Podrías decirme en qué industria trabajas para darte consejos específicos sobre LinkedIn?"
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

    // Solo enviar al webhook si es un vendedor disponible
    if (selectedVendedor && !selectedVendedor.locked) {
      setIsTyping(true)

      try {
        // Actualizar estado a "delivered"
        setTimeout(() => updateMessageStatus(userMessage.id, "delivered"), 1000)

        console.log(`🚀 Enviando mensaje a ${selectedVendedor.nombre} (ID: ${selectedVendedor.id}):`, currentMessage)

        // Solo los primeros 3 vendedores usan webhook real, otros usan respuestas simuladas
        let aiResponse: string | null = null

        if (selectedVendedor.id === 1) {
          // LinkedIn Expert - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else if (selectedVendedor.id === 2) {
          // Career Coach - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else if (selectedVendedor.id === 3) {
          // Resume Writer - Usar webhook real
          aiResponse = await sendToWebhookAndGetResponse(currentMessage, selectedVendedor.id, selectedVendedor.nombre)
        } else {
          // Otros vendedores - Respuestas simuladas
          await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

          const simulatedResponses = [
            "Perfecto, entiendo tu necesidad con LinkedIn. Te puedo ayudar con eso.",
            "Excelente pregunta sobre posicionamiento. Basándome en mi experiencia, te recomiendo...",
            "Esa es una estrategia muy inteligente para LinkedIn. Déjame mostrarte cómo optimizarla.",
            "Me parece una gran oportunidad para tu perfil. ¿Te gustaría que analicemos los puntos clave?",
            "Exacto, esa es la clave del éxito en LinkedIn. Te explico paso a paso...",
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
            text: "No pude procesar tu mensaje en este momento. ¿Podrías ser más específico en tu pregunta sobre LinkedIn?",
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
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#0A66C2] to-[#004182] border-b border-[#70B5F9] shadow-lg shadow-[#70B5F9]/20 z-50">
        <div className="flex justify-between items-center px-5 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">Volver</span>
            </Link>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              💼 <span className="text-[#70B5F9]">LinkedIn Pro</span>
            </div>
          </div>
          <nav className="flex gap-3">
            <a
              href="/oferta"
              className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/40 animate-pulse"
              onClick={() => analytics.ctaClick("Ver Método Completo", "demo_header", "/oferta")}
            >
              <span>🚀</span> Ver Método Completo
            </a>
          </nav>
        </div>
      </header>

      {/* Fondo degradado animado */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A66C2] to-[#004182] animate-gradient" />

      {/* Contenido principal - Altura fija con scroll controlado */}
      <div className="h-screen pt-16 pb-16 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-4">
          {/* Introduction Section - Always visible initially */}
          <div
            className={`intro-section text-center max-w-2xl w-full transition-all duration-600 z-10 ${showCards ? "opacity-0 pointer-events-none" : "opacity-100"} ${progress > 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="px-4">
              <div className="text-4xl sm:text-5xl mb-6 sm:mb-8 inline-block text-white">💼</div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                Convierte tu perfil de LinkedIn en una <span className="text-[#70B5F9]">máquina de trabajos</span> en
                EE.UU.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                En solo 2 horas transformarás tu perfil de LinkedIn, incluso si hoy no sabes por dónde empezar.
                <br />
                <strong className="text-[#70B5F9]">El problema no es tu experiencia, es tu posicionamiento.</strong>
              </p>

              <button
                onClick={() => {
                  analytics.ctaClick("Analizar Mi Perfil GRATIS Ahora", "intro_cta")
                  setShowLinkedInModal(true)
                }}
                className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse shadow-xl shadow-[#FF6B35]/30 mx-auto"
              >
                <span className="text-lg sm:text-xl">🚀</span>
                <span>¿Quieres analizar tu perfil GRATIS ahora?</span>
              </button>

              <p className="text-white/70 text-sm mt-4 px-2">
                ✅ Análisis personalizado • ✅ Resultados inmediatos • ✅ 100% gratuito
              </p>
            </div>
          </div>

          {/* Loader - Shows after user clicks CTA */}
          <div
            className={`loader text-center max-w-md w-full transition-all duration-600 z-10 ${showCards ? "opacity-0 pointer-events-none" : ""} ${progress > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="px-4">
              <div
                className={`icon text-4xl sm:text-5xl mb-6 sm:mb-8 inline-block transition-all duration-500 ${showSuccess ? "w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] leading-[60px] sm:leading-[70px] rounded-full bg-[#70B5F9] text-white text-3xl sm:text-4xl shadow-lg shadow-[#70B5F9]/30" : "text-white"}`}
              >
                {showSuccess ? "✔" : "💼"}
              </div>

              <h1 className="text-lg sm:text-xl text-white mb-4 sm:mb-5 leading-tight px-2">
                {showSuccess ? (
                  <>Tu experto personal en LinkedIn está listo para TRANSFORMAR tu carrera</>
                ) : (
                  <>
                    Cargando al especialista que ha conseguido
                    <br />
                    trabajo en EE.UU. a +500 profesionales…
                  </>
                )}
              </h1>

              <p className="text-white/85 mb-5 sm:mb-6 text-sm sm:text-base px-2">
                {showSuccess ? "Consulta GRATUITA disponible AHORA" : "Preparando tu consulta personalizada"}
              </p>

              <div
                className={`progress w-full h-1.5 bg-white/20 rounded-full overflow-hidden transition-opacity duration-400 ${showSuccess ? "opacity-0" : "opacity-100"}`}
              >
                <div
                  className="progress-bar h-full bg-[#70B5F9] transition-all duration-75 linear shadow-sm shadow-[#70B5F9]/50"
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
                  className={`relative w-full max-w-sm h-auto min-h-fit bg-gradient-to-br from-[#0A66C2] to-[#004182] border rounded-xl shadow-lg overflow-visible transition-all duration-500 hover:scale-105 ${
                    vendedor.locked
                      ? "border-[#FFD700] shadow-[#FFD700]/20 hover:shadow-[#FFD700]/40"
                      : "border-[#70B5F9] shadow-[#70B5F9]/20 hover:shadow-[#70B5F9]/40 hover:border-[#70B5F9]/80"
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
                            : "bg-gradient-to-br from-[#70B5F9] to-[#0073B1]"
                        }`}
                      >
                        {vendedor.locked ? "🔒 Premium" : "✨ Gratis"}
                      </span>

                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${
                          vendedor.locked
                            ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white"
                            : "bg-gradient-to-br from-[#70B5F9] to-[#0073B1] text-white"
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
                      className="w-full text-sm font-bold rounded-xl py-3 px-4 transition-all duration-300 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white hover:shadow-[#FF6B35]/50 hover:shadow-lg animate-pulse hover:scale-105"
                    >
                      🚨 CONSULTA GRATUITA URGENTE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Profile Modal */}
      {showLinkedInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-2 sm:p-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-br from-[#0A66C2] to-[#004182] border border-[#70B5F9] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-2">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 border-b border-[#70B5F9]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#70B5F9]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">¡Necesitamos tu Link de LinkedIn!</h3>
                  <p className="text-[#70B5F9] text-sm">Para hacer tu análisis gratuito personalizado</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-6">
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm">ℹ️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">¿Por qué necesitamos tu link?</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Sin el link de tu perfil de LinkedIn, no podemos hacer el análisis gratuito personalizado.
                        Necesitamos ver tu perfil actual para transformar tu perfil en una maquina de empleo en EE.UU.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-sm">🔒</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">100% Seguro y Confidencial</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Solo usamos tu link para el análisis. No compartimos tu información con terceros ni hacemos
                        cambios en tu perfil sin tu autorización.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={startChatWithExpert}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle size={18} />
                  SÍ, TENGO MI LINK LISTO
                </button>

                <button
                  onClick={showHelpInstructions}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gray-500/40 transition-all duration-300 hover:scale-105"
                >
                  <HelpCircle size={18} />
                  ¿CÓMO OBTENGO MI LINK?
                </button>

                <button
                  onClick={closeLinkedInModal}
                  className="w-full text-white/70 hover:text-white text-sm py-2 transition-colors duration-200"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-2 sm:p-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-br from-[#0A66C2] to-[#004182] border border-[#70B5F9] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-2 max-h-[95vh] overflow-y-auto">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 border-b border-[#70B5F9]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#70B5F9]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Cómo obtener tu Link de LinkedIn</h3>
                  <p className="text-[#70B5F9] text-sm">Instrucciones paso a paso desde tu teléfono</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-6">
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      1
                    </span>
                    Abre la app de LinkedIn
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed ml-8">
                    Abre la aplicación de LinkedIn en tu teléfono móvil.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      2
                    </span>
                    Ve a tu perfil
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed ml-8">
                    Toca tu foto de perfil en la esquina superior izquierda para ir a tu perfil.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      3
                    </span>
                    Toca "Compartir perfil"
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed ml-8">
                    Busca el botón "Compartir perfil" o los tres puntos (...) en tu perfil y tócalo.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      4
                    </span>
                    Copia el enlace
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed ml-8">
                    Selecciona "Copiar enlace al perfil" o "Copy link to profile". El enlace se copiará automáticamente.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Copy size={16} className="text-green-400" />
                    <h4 className="text-green-400 font-semibold text-sm">¡Listo!</h4>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Tu enlace debería verse así: <br />
                    <code className="text-green-300 text-xs bg-green-900/30 px-2 py-1 rounded mt-1 inline-block">
                      https://www.linkedin.com/in/tu-nombre/
                    </code>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={confirmLinkCopied}
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  <CheckCircle size={18} />
                  ¡YA COPIÉ MI LINK!
                </button>

                <button
                  onClick={closeHelpModal}
                  className="w-full text-white/70 hover:text-white text-sm py-2 transition-colors duration-200"
                >
                  Volver atrás
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal - LinkedIn Style Enhanced */}
      {chatOpen && selectedVendedor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-1 sm:p-2 md:p-4">
          <div
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[95vh] sm:h-[90vh] md:h-[85vh] lg:h-[600px] bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out transform scale-100 animate-in slide-in-from-bottom-4 fade-in flex flex-col mx-1 sm:mx-2"
            style={{
              animation: "slideInUp 0.3s ease-out",
            }}
          >
            {/* LinkedIn Header Enhanced */}
            <div className="bg-[#0A66C2] dark:bg-[#2a2f32] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between text-white shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
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
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white/20 shadow-md"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-xs sm:text-sm truncate">{selectedVendedor.nombre}</h4>
                  <p className="text-xs text-blue-100 transition-all duration-250">
                    {isTyping ? (
                      <span className="flex items-center gap-1">
                        escribiendo
                        <span className="flex gap-0.5">
                          <span
                            className="w-1 h-1 bg-blue-200 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-blue-200 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-blue-200 rounded-full animate-bounce"
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
                {/* Video Call Button */}
                <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-all duration-250 ease-in-out hidden sm:block">
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
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </button>

                {/* Voice Call Button */}
                <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-all duration-250 ease-in-out hidden sm:block">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>

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
                        ? "bg-[#0A66C2] text-white rounded-br-md"
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

              {/* Elemento invisible para hacer scroll automático */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Container */}
            <div className="bg-gray-100 dark:bg-zinc-900 px-2 sm:px-3 md:px-4 py-2 sm:py-3 border-t border-gray-200 dark:border-zinc-700">
              <div className="flex items-end gap-1 sm:gap-2">
                <div className="flex-1 relative">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pega aquí tu link de LinkedIn..."
                    className="w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-2xl px-3 sm:px-4 py-2 pr-8 sm:pr-12 text-xs sm:text-sm resize-none max-h-20 sm:max-h-32 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent"
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
                  className="bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 dark:disabled:bg-zinc-600 text-white p-2 sm:p-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed flex-shrink-0"
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
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-to-br from-[#0A66C2] to-[#004182] border border-[#70B5F9] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-2 max-h-[95vh] overflow-y-auto">
            {/* Header */}
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-[#70B5F9]/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-[#70B5F9]/20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <span className="text-base sm:text-lg md:text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">¡Tu Carrera Está en PELIGRO!</h3>
                  <p className="text-[#70B5F9] text-xs sm:text-sm">
                    Cada día que esperas, pierdes oportunidades de $100K+
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6">
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-red-500/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-red-400 text-xs sm:text-sm">⚠️</span>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-1 text-xs sm:text-sm md:text-base">REALIDAD BRUTAL</h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Tu perfil actual es INVISIBLE para recruiters de EE.UU. Mientras lees esto, otros candidatos con
                      MENOS experiencia están siendo contratados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#70B5F9]/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#70B5F9] text-xs sm:text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                      SOLUCIÓN INMEDIATA
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Nuestro experto te mostrará EXACTAMENTE qué está mal en tu perfil y cómo arreglarlo en los
                      próximos 5 minutos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-green-500/20 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-green-400 text-xs sm:text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm md:text-base">
                      RESULTADO GARANTIZADO
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Si sigues sus consejos, tendrás más visualizaciones y mensajes de recruiters en 48 horas.
                      ¡GARANTIZADO!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base md:text-lg">⏰</span>
                  <h4 className="text-red-400 font-semibold text-xs sm:text-sm md:text-base">URGENTE</h4>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  Cada día que tu perfil sigue mal optimizado,{" "}
                  <strong className="text-red-400">pierdes un salario dr $3.000 USD</strong> (salario promedio en
                  EE.UU.). ¿Cuánto más vas a perder?
                </p>
              </div>

              <button
                onClick={() => {
                  analytics.ctaClick("ARREGLAR MI PERFIL AHORA", "explanation_modal")
                  closeExplanationModal()
                }}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse"
              >
                <span>🚨</span>
                ARREGLAR MI PERFIL AHORA
                <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Footer */}
            <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-t border-[#70B5F9]/20 text-center">
              <p className="text-white/60 text-xs">
                🚨 GRATIS por tiempo limitado • ⚡ Resultados en 48 horas • 💰 Miles en oportunidades
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
