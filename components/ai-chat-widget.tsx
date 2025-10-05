"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Smile, Check, CheckCheck, Clock, AlertCircle, Video, Phone } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
  status: "sending" | "sent" | "delivered" | "error"
}

interface ChatWidgetProps {
  agentName?: string
  agentAvatar?: string
  agentSpecialization?: string
  vendedorId?: number
  agentId?: number
  vendedorName?: string
}

export default function AIChatWidget({
  agentName = "Alexa AI",
  agentAvatar = "https://i.pravatar.cc/150?img=32",
  agentSpecialization = "Especialista en Ventas",
  vendedorId = 1,
  agentId = 1,
  vendedorName = "VENTA 24/7",
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showTeaser, setShowTeaser] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showClaimButton, setShowClaimButton] = useState(false)
  const [userId, setUserId] = useState<string>("")
  const [sessionId, setSessionId] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let storedUserId = localStorage.getItem("ai_chat_user_id")
    if (!storedUserId) {
      storedUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem("ai_chat_user_id", storedUserId)
    }
    setUserId(storedUserId)

    let storedSessionId = sessionStorage.getItem("ai_chat_session_id")
    if (!storedSessionId) {
      storedSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem("ai_chat_session_id", storedSessionId)
    }
    setSessionId(storedSessionId)

    console.log("[v0] User ID:", storedUserId)
    console.log("[v0] Session ID:", storedSessionId)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowClaimButton(true)
        console.log("[v0] Claim button shown after 45 seconds")
      }, 45000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const linkifyText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  const sendToWebhook = async (messageText: string): Promise<string> => {
    const webhookUrls = [
      "https://webhook.algorithpro.com/webhook/lpvendedorai",
      "https://n8n.algorithpro.com/webhook-test/lpvendedorai",
    ]

    const payload = {
      message: messageText,
      agent: agentName,
      timestamp: new Date().toISOString(),
      userId,
      sessionId,
      vendedorId,
      agentId,
      vendedorName,
    }

    console.log("[v0] Sending message to webhook:", payload)

    for (const url of webhookUrls) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          console.log(`[v0] Attempt ${attempt} for URL: ${url}`)

          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 25000)

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
          })

          clearTimeout(timeoutId)

          if (response.ok) {
            const data = await response.json()
            console.log("[v0] Webhook response:", data)

            const aiResponse = data.output || data.response || data.message || data.text || data.reply || data.answer

            if (aiResponse) {
              return aiResponse
            }
          }
        } catch (error) {
          console.error(`[v0] Error on attempt ${attempt} for ${url}:`, error)
          if (attempt === 2) {
            console.log(`[v0] Failed both attempts for ${url}, trying next URL`)
          }
        }
      }
    }

    return "Lo siento, estoy teniendo problemas de conexión. Por favor, intenta de nuevo en un momento o contáctanos directamente por WhatsApp."
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sending",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }

    console.log("[v0] User message sent:", userMessage.text)

    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "sent" as const } : msg)))
    }, 500)

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "delivered" as const } : msg)),
      )
    }, 1000)

    try {
      const aiResponseText = await sendToWebhook(userMessage.text)

      setIsTyping(false)

      const aiMessage: Message = {
        id: `msg_${Date.now()}`,
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
        status: "delivered",
      }

      setMessages((prev) => [...prev, aiMessage])
      console.log("[v0] AI response received:", aiResponseText)
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      setIsTyping(false)

      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "error" as const } : msg)))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)

    const textarea = e.target
    textarea.style.height = "auto"
    const newHeight = Math.min(textarea.scrollHeight, 80)
    textarea.style.height = `${newHeight}px`
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCloseTeaser = () => {
    setShowTeaser(false)
  }

  const handleOpenFromTeaser = () => {
    setShowTeaser(false)
    setIsOpen(true)
  }

  const getMessageStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return <Clock size={14} className="text-white/60" />
      case "sent":
        return <Check size={14} className="text-white/60" />
      case "delivered":
        return <CheckCheck size={14} className="text-white/80" />
      case "error":
        return <AlertCircle size={14} className="text-red-400" />
    }
  }

  return (
    <>
      {!isOpen && showTeaser && (
        <div className="fixed bottom-28 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
          <div className="relative">
            <div className="bg-[#f0f0f0] dark:bg-[#2a2a2a] rounded-2xl shadow-2xl p-4 pr-10 max-w-[280px] border border-gray-200 dark:border-gray-700">
              <button
                onClick={handleCloseTeaser}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Cerrar mensaje"
              >
                <X size={18} />
              </button>
              <div className="flex items-start gap-3">
                <img
                  src={agentAvatar || "/placeholder.svg"}
                  alt={agentName}
                  className="w-12 h-12 rounded-full bg-white flex-shrink-0"
                />
                <div className="flex-1 pt-1">
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-relaxed">
                    ¡Hola! ¿Tienes alguna pregunta?
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Escríbeme aquí 👇</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#f0f0f0] dark:bg-[#2a2a2a] border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={handleOpenFromTeaser}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Abrir chat de WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-[#0a0a0a] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#00C896]/30">
          <div className="bg-gradient-to-r from-[#00C896] to-[#00a884] p-4 flex items-center gap-3">
            <div className="relative">
              <img
                src={agentAvatar || "/placeholder.svg"}
                alt={agentName}
                className="w-12 h-12 rounded-full bg-white"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">{agentName}</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm">En línea</span>
              </div>
            </div>
            <button className="text-white/80 hover:text-white transition-colors p-2" aria-label="Videollamada">
              <Video size={22} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors p-2" aria-label="Llamada de voz">
              <Phone size={22} />
            </button>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={24} />
            </button>
          </div>

          <div className="bg-[#1a1a1a] p-3 border-b border-[#00C896]/20">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🤖</div>
              <div className="flex-1">
                <p className="text-white/90 text-sm font-semibold">{agentSpecialization}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[#00C896]/20 text-[#00C896] px-2 py-0.5 rounded-full">Activo 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0a0a]">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-[#00a884] text-white rounded-br-none"
                      : "bg-[#1a1a1a] text-white/90 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{linkifyText(message.text)}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-xs text-white/60">
                      {message.timestamp.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                    {message.sender === "user" && getMessageStatusIcon(message.status)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] text-white/90 rounded-lg rounded-bl-none p-3 max-w-[75%]">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {showClaimButton && (
            <div className="px-4 py-2 bg-[#1a1a1a] border-t border-[#00C896]/20">
              <a
                href="https://hotm.art/NyTUgsE5"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white text-center py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 animate-pulse"
              >
                🔥 Reclama tu cupo ahora
              </a>
            </div>
          )}

          <div className="bg-[#1a1a1a] p-3 border-t border-[#00C896]/20">
            <div className="flex items-end gap-2">
              <button className="text-white/60 hover:text-white/90 transition-colors pb-2" aria-label="Agregar emoji">
                <Smile size={24} />
              </button>
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-[#2a2a2a] text-white rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00C896] max-h-[80px] overflow-y-auto"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#00C896] text-white p-2 rounded-lg hover:bg-[#00a884] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-white/40 mt-2 text-center">
              Presiona Enter para enviar • Shift+Enter para nueva línea
            </p>
          </div>
        </div>
      )}
    </>
  )
}
