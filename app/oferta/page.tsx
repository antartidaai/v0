"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Star, Users, Zap, Clock, AlertTriangle, Crown, X } from "lucide-react"
import { analytics, usePageTracking } from "../utils/analytics"

interface PurchaseNotification {
  id: number
  name: string
  location: string
  timeAgo: string
  visible: boolean
  cuposRestantes?: number
  isLastChance?: boolean
}

export default function OfertaPage() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0,
  })
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([])
  const [pageLoadTime, setPageLoadTime] = useState<number>(0)

  // Usar useRef para controlar si las notificaciones ya se programaron
  const notificationsInitialized = useRef(false)

  // Analytics tracking
  usePageTracking("offer_page")

  // Datos de notificaciones de prueba social
  const purchaseData = [
    { name: "Carlos M.", location: "México", timeAgo: "hace 2 min" },
    { name: "Ana R.", location: "Colombia", timeAgo: "hace 3 min" },
    { name: "Luis P.", location: "España", timeAgo: "hace 4 min" },
    { name: "María G.", location: "Argentina", timeAgo: "hace 5 min" },
    { name: "José L.", location: "Chile", timeAgo: "hace 6 min" },
  ]

  // Establecer tiempo de carga de la página
  useEffect(() => {
    setPageLoadTime(Date.now())
  }, [])

  // Contador regresivo de 15 minutos
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { minutes: 0, seconds: 0 }
      })
    }, 1000)

    analytics.offerView(`${timeLeft.minutes}:${String(timeLeft.seconds).padStart(2, "0")}`)

    return () => clearInterval(timer)
  }, [])

  // Sistema de notificaciones
  useEffect(() => {
    if (notificationsInitialized.current || !pageLoadTime) {
      return
    }

    notificationsInitialized.current = true
    console.log("🚀 Inicializando sistema de notificaciones - UNA SOLA VEZ")

    const timers: NodeJS.Timeout[] = []

    const showNotification = (index: number, cuposRestantes: number) => {
      const purchaseInfo = purchaseData[index]
      const newNotification: PurchaseNotification = {
        id: Date.now() + Math.random(),
        name: purchaseInfo.name,
        location: purchaseInfo.location,
        timeAgo: purchaseInfo.timeAgo,
        visible: true,
        cuposRestantes: cuposRestantes,
      }

      console.log(`📢 Mostrando notificación ${index + 1}: ${purchaseInfo.name}`)

      setNotifications((prev) => [...prev, newNotification])
      analytics.notificationView("purchase", cuposRestantes)

      const hideTimer = setTimeout(() => {
        console.log(`🗑️ Ocultando notificación ${index + 1}`)
        setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id))
      }, 6000)

      timers.push(hideTimer)
    }

    const showFinalNotification = () => {
      const finalNotification: PurchaseNotification = {
        id: Date.now() + Math.random(),
        name: "",
        location: "",
        timeAgo: "",
        visible: true,
        isLastChance: true,
      }

      console.log("🚨 Mostrando notificación final - UNA SOLA VEZ por 6 segundos")

      setNotifications((prev) => [...prev, finalNotification])
      analytics.notificationView("urgency")

      const finalHideTimer = setTimeout(() => {
        console.log("🗑️ Ocultando notificación final después de 6 segundos")
        setNotifications((prev) => prev.filter((n) => n.id !== finalNotification.id))
      }, 6000)

      timers.push(finalHideTimer)
    }

    console.log("⏰ Programando todas las notificaciones...")

    timers.push(setTimeout(() => showNotification(0, 4), 4000))
    timers.push(setTimeout(() => showNotification(1, 3), 60000))
    timers.push(setTimeout(() => showNotification(2, 2), 120000))
    timers.push(setTimeout(() => showNotification(3, 1), 180000))
    timers.push(setTimeout(() => showNotification(4, 0), 240000))
    timers.push(setTimeout(() => showFinalNotification(), 242000))

    console.log(`📅 ${timers.length} notificaciones programadas correctamente`)

    return () => {
      console.log("🧹 Limpiando todos los timers...")
      timers.forEach((timer, index) => {
        clearTimeout(timer)
        console.log(`✅ Timer ${index + 1} limpiado`)
      })
    }
  }, [pageLoadTime])

  const herramientas = [
    {
      nombre: "LinkedIn Premium",
      costo: "$0",
      descripcion: "Usa la versión gratuita para implementar todo",
      icon: "💼",
    },
    {
      nombre: "Canva",
      costo: "$0",
      descripcion: "Crea imágenes profesionales para tu perfil",
      icon: "🎨",
    },
    {
      nombre: "Google Docs",
      costo: "$0",
      descripcion: "Planifica y estructura tu contenido",
      icon: "📝",
    },
    {
      nombre: "Herramientas de análisis",
      costo: "$0",
      descripcion: "Mide el rendimiento de tu perfil",
      icon: "📊",
    },
  ]

  const canalesTexto = [
    "📍 bienvenidos-linkedin",
    "✅ acceso-premium",
    "🏅 100-templates-profesionales",
    "🏅 50-headlines-ganadores",
    "💡 ideas-de-contenido",
    "🧪 testing-perfiles",
    "🧰 herramientas-gratuitas",
    "⬆️ casos-de-exito",
    "🗓️ agenda-consultorías",
    "🔁 networking-estratégico",
    "💬 dudas-generales",
  ]

  const canalesVoz = [
    "🔈 Networking Profesional",
    "🔐 Consultoría Privada 1-1",
    "📞 Revisión de Perfiles",
    "🤖 Optimización en vivo",
    "⚙️ Soporte técnico LinkedIn",
  ]

  const aplicaciones = ["🟣 linkedin-optimizer", "🟡 profile-analyzer", "🔁 content-planner", "🧰 career-tools"]

  const beneficios = [
    "Cómo crear un headline que atraiga recruiters de EE.UU.",
    "Cómo optimizar tu resumen para aparecer en búsquedas",
    "Cómo estructurar tu experiencia para el mercado estadounidense",
    "Cómo usar palabras clave que buscan los empleadores",
    "Acceso a templates y ejemplos reales de perfiles exitosos",
    "Transformación completa de tu perfil en menos de 2 horas",
  ]

  const closeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A66C2] to-[#004182] relative overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#70B5F9]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Notificaciones de Compra */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-gradient-to-r from-[#004182] to-[#003366] border text-white p-4 rounded-xl shadow-lg max-w-sm animate-in slide-in-from-right-full fade-in duration-500 ${
              notification.isLastChance ? "border-red-500/50 shadow-red-500/20 animate-pulse" : "border-[#70B5F9]/30"
            }`}
          >
            {notification.isLastChance ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-lg">⚠️</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-400 text-sm">¡ÚLTIMA OPORTUNIDAD!</p>
                      <p className="text-xs text-white/80">Se acabaron los cupos</p>
                    </div>
                  </div>
                  <button
                    onClick={() => closeNotification(notification.id)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  🚨 <strong className="text-red-400">Se acabaron los cupos.</strong> Tu última oportunidad para
                  conseguir trabajo en EE.UU. con nuestro método de LinkedIn.
                </p>
                <div className="mt-3 pt-2 border-t border-red-500/20">
                  <p className="text-xs text-red-300 font-semibold animate-pulse">
                    ⏰ Esta oferta desaparecerá en 5 minutos
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#70B5F9]/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">🎉</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#70B5F9]">{notification.name}</p>
                      <p className="text-xs text-white/80">{notification.location}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => closeNotification(notification.id)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-white/90 mb-1">✅ Acaba de comprar el método • {notification.timeAgo}</p>
                  <p className="text-xs text-red-400 font-semibold">
                    🔥 Quedan solo {notification.cuposRestantes} cupos de 5
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#0A66C2]/95 to-[#004182]/95 backdrop-blur-sm border-b border-[#70B5F9] shadow-lg shadow-[#70B5F9]/20 z-40">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-5 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">Volver</span>
            </Link>
            <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
              💼 <span className="text-[#70B5F9]">LinkedIn Pro</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section con Contador Grande */}
      <section className="pt-20 pb-8 px-4 relative">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Contador Grande */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border-2 border-red-500/50 rounded-2xl p-6 sm:p-8 inline-block mb-6 shadow-2xl shadow-red-500/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock size={32} className="text-red-400" />
                <span className="text-red-400 text-lg sm:text-xl font-bold">OFERTA TERMINA EN:</span>
              </div>
              <div className="text-red-400 text-4xl sm:text-6xl md:text-7xl font-mono font-bold tracking-wider">
                {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-red-300 text-sm sm:text-base mt-2">Solo para los primeros 5</div>
            </div>
          </div>

          {/* Badge de urgencia */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse shadow-lg shadow-red-500/30">
              <AlertTriangle size={20} />🔥 ¡OFERTA EXCLUSIVA — SOLO PARA LOS PRIMEROS 5!
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            🚨 Convierte tu perfil de LinkedIn en una{" "}
            <span className="text-[#70B5F9]">máquina de generar entrevistas</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-red-400">
              y consigue tu trabajo en EE.UU. en solo 2 horas.
            </span>
          </h1>

          {/* Beneficios principales */}
          <div className="bg-gradient-to-br from-[#70B5F9]/20 to-[#0073B1]/20 border border-[#70B5F9]/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">⚡️ En menos de 2 horas tendrás:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#70B5F9] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Un perfil que atraiga recruiters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#70B5F9] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Posicionamiento estratégico claro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#70B5F9] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">Más entrevistas garantizadas</span>
              </div>
            </div>
          </div>

          {/* Precio destacado */}
          <div className="bg-gradient-to-br from-[#004182] to-[#003366] border-2 border-[#FFD700] rounded-xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="text-[#FFD700]" size={24} />
                <span className="text-[#FFD700] font-bold text-lg">PRECIO ESPECIAL</span>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-2xl sm:text-3xl line-through mb-2 font-semibold">
                  Precio normal: $97
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-[#70B5F9] mb-2">$19.99</div>
                <div className="text-red-400 font-semibold text-lg mb-4">
                  Solo para los primeros 5 que aprovechen la promo
                </div>
                <div className="text-white/80 text-sm">Después, el valor vuelve al precio original sin aviso.</div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="mb-12">
            <a
              href="https://pay.hotmart.com/C100342057M?off=g2lkrn81"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse shadow-xl shadow-[#FF6B35]/30"
              onClick={() => analytics.purchaseClick("$19.99", "hero_cta")}
            >
              <Zap size={24} />🚀 OBTENER MÉTODO COMPLETO POR SOLO $19.99
              <span className="bg-white/20 px-2 py-1 rounded text-sm">🔥 AHORA</span>
            </a>
            <p className="text-white/60 text-sm mt-4">
              ✅ Acceso inmediato • ✅ Método paso a paso • ✅ Soporte incluido
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - ConvertAI Player */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6 mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  id="panda-0b230730-c652-493e-943c-72cbe80d53cf"
                  src="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/?v=0b230730-c652-493e-943c-72cbe80d53cf&iosFakeFullscreen=true"
                  style={{ border: "none", position: "absolute", top: 0, left: 0 }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen={true}
                  width="100%"
                  height="100%"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
      if(!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')){
        let s=document.createElement('script');
        s.src='https://player.pandavideo.com.br/api.v2.js'; 
        s.async=true; 
        document.head.appendChild(s);
      } 
      window.pandascripttag = window.pandascripttag || [];
      window.pandascripttag.push(function (){
        const panda_id_player = 'panda-0b230730-c652-493e-943c-72cbe80d53cf';
        const p=new PandaPlayer(panda_id_player,{
          onReady(){
            p.loadWindowScreen({panda_id_player});
          }
        });
      });
    `,
        }}
      />

      {/* Qué Incluye */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🎯 ¿QUÉ INCLUYE ESTE <span className="text-[#70B5F9]">MÉTODO EXCLUSIVO</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Entrenamiento */}
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="text-[#70B5F9]" size={28} />✅ Método 100% Práctico
              </h3>
              <ul className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Para */}
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="text-[#70B5F9]" size={28} />🧩 Ideal Para
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <Star size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>✔️ Profesionales que buscan trabajo remoto en EE.UU.</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Star size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>✔️ Personas con experiencia pero perfil invisible</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Star size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>✔️ Quienes quieren más entrevistas sin pagar mentorías costosas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas Gratuitas */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-900/10 to-green-800/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">💸 ¿CUÁNTO CUESTA TODO ESTO?</h2>
            <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">❌ ¿Hay herramientas caras o pagos ocultos?</h3>
              <p className="text-xl text-white/80">
                <strong className="text-green-400">NO.</strong> Todo lo que usamos es gratuito o con versión free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {herramientas.map((herramienta, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#004182] to-[#003366] border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{herramienta.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{herramienta.nombre}</h3>
                    <p className="text-green-400 font-semibold text-lg">{herramienta.costo}</p>
                  </div>
                </div>
                <p className="text-white/70">{herramienta.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-white/80 text-lg">
                <strong className="text-green-400">⚠️ Nada de suscripciones caras ni gastos mensuales.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad Discord */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              👥 Accede a nuestra <span className="text-[#70B5F9]">Comunidad Privada</span> en Discord
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Tu acceso incluye ingreso a nuestro servidor LinkedIn Pro, con canales diseñados para ayudarte a
              optimizar, hacer networking y conseguir entrevistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Canales de Texto */}
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">💬 Canales de Texto</h3>
              <ul className="space-y-2">
                {canalesTexto.map((canal, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#70B5F9] rounded-full flex-shrink-0"></div>
                    {canal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Canales de Voz */}
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">🎙️ Canales de Voz</h3>
              <ul className="space-y-2">
                {canalesVoz.map((canal, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#70B5F9] rounded-full flex-shrink-0"></div>
                    {canal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicaciones */}
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">🛠️ Herramientas Exclusivas</h3>
              <ul className="space-y-2">
                {aplicaciones.map((app, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#70B5F9] rounded-full flex-shrink-0"></div>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-white/80">
              👥 <strong className="text-[#70B5F9]">Aprende, comparte, pregunta y consigue trabajo</strong> junto a
              otros profesionales como tú.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final con Urgencia */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#70B5F9]/10 to-[#0073B1]/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#004182] to-[#003366] border-2 border-[#70B5F9] rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#70B5F9] to-[#0073B1]"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                🎯 ¿LISTO PARA CONSEGUIR TU TRABAJO EN EE.UU.?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="text-[#70B5F9]" size={24} />
                  <span>🔥 Solo $19,99 — exclusivo para los primeros 5</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="text-[#70B5F9]" size={24} />
                  <span>📈 Perfil optimizado en 2 horas</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="text-[#70B5F9]" size={24} />
                  <span>🛠️ Sin herramientas costosas</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="text-[#70B5F9]" size={24} />
                  <span>👥 Acceso inmediato a la comunidad</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xl text-white/90 mb-4">
                  👉 Haz clic abajo y empieza hoy mismo antes que se acabe el cupo:
                </p>
              </div>

              <a
                href="https://pay.hotmart.com/C100342057M?off=g2lkrn81"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-8 py-4 rounded-xl text-xl font-bold hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 mb-6 animate-pulse shadow-xl shadow-[#FF6B35]/30"
                onClick={() => analytics.purchaseClick("$19.99", "final_cta")}
              >
                <Zap size={28} />🚀 OBTENER MÉTODO COMPLETO POR SOLO $19.99
              </a>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} className="text-[#70B5F9]" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} className="text-[#70B5F9]" />
                  <span>Comunidad incluida</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} className="text-[#70B5F9]" />
                  <span>Soporte técnico</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} className="text-[#70B5F9]" />
                  <span>Tiempo limitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Downsell Button */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <a
            href="https://chat.whatsapp.com/JtLP7Pskh0y2zTeXK3jXFF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-[#DC2626]/40 hover:from-[#B91C1C] hover:to-[#991B1B] transition-all duration-300 animate-pulse"
            onClick={() =>
              analytics.ctaClick(
                "No quiero obtener el método completo ahora",
                "simple_downsell",
                "https://chat.whatsapp.com/JtLP7Pskh0y2zTeXK3jXFF",
              )
            }
          >
            <AlertTriangle size={16} />🔥 No quiero obtener el método completo ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0A66C2] to-[#004182] border-t border-[#70B5F9]/20 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg mb-4">
            💼 <span className="text-[#70B5F9]">LinkedIn Pro</span>
          </div>
          <p className="text-white/60 text-sm mb-2">© 2024 LinkedIn Pro – Todos los derechos reservados.</p>
          <p className="text-white/40 text-xs">Hecho para ayudarte a conseguir trabajo en Estados Unidos.</p>
        </div>
      </footer>
    </div>
  )
}
