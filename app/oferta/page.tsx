"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Star, Users, Zap, Clock, AlertTriangle, Crown } from "lucide-react"
import { analytics, usePageTracking } from "../utils/analytics"

export default function OfertaPage() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0,
  })
  const [pageLoadTime, setPageLoadTime] = useState<number>(0)

  // Analytics tracking
  usePageTracking("offer_page")

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

    return () => clearInterval(timer)
  }, [])

  const herramientas = [
    {
      nombre: "n8n.cloud",
      costo: "$0",
      descripcion: "Automatiza tareas sin código",
      icon: "🔧",
    },
    {
      nombre: "Evolution API",
      costo: "$0",
      descripcion: "Conecta tu WhatsApp al sistema",
      icon: "📱",
    },
    {
      nombre: "Supabase",
      costo: "$0",
      descripcion: "Guarda datos de clientes y leads",
      icon: "💾",
    },
    {
      nombre: "OpenAI (opcional)",
      costo: "$0",
      descripcion: "IA para respuestas automáticas",
      icon: "🧠",
    },
  ]

  const canalesTexto = [
    "📍 bienvenidos",
    "✅ pro-acesso",
    "🏅 100-template-de-ai",
    "🏅 50-prompt-de-ventas",
    "💡 ideas-de-flujos",
    "🧪 testing-bots",
    "🧰 herramientas-gratis",
    "⬆️ wins-pro-y-max",
    "🗓️ agenda-eventos",
    "🔁 integraciones-gpt",
    "💬 dudas-generales",
  ]

  const canalesVoz = [
    "🔈 Networking PRO",
    "🔐 Privado – 1, 2, 3",
    "📞 Mentoría Individual",
    "🤖 Automatizando en vivo",
    "⚙️ Soporte técnico GHL",
  ]

  const aplicaciones = ["🟣 lek-do-black-original", "🟡 gtp-de-ventas", "🔁 hosting-gratis", "🧰 toolzbuy"]

  const beneficios = [
    "Cómo crear tu cuenta en n8n GRATIS sin servidor",
    "Cómo conectar tu número de WhatsApp con Evolution API",
    "Cómo editar y lanzar una plantilla lista para usar en minutos",
    "Cómo automatizar respuestas, seguimientos y pagos",
    "Acceso a guía paso a paso en video + plantillas copiables",
    "Lanzamiento completo del sistema en menos de 1 hora",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] relative overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00C896]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#1A1A1A]/95 to-[#2A2A2A]/95 backdrop-blur-sm border-b border-[#00C896] shadow-lg shadow-[#00C896]/20 z-40">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Volver</span>
            </Link>
            <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base lg:text-lg">
              🤖 <span className="text-[#00C896]">VENTA 24/7</span>
            </div>
          </div>
        </div>
      </header>

      {/* Video Section - ConvertAI Player */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl sm:max-w-4xl lg:max-w-5xl">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              🚨 Lanza tu <span className="text-[#00C896]">Agente de IA</span> para WhatsApp
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-400 block mt-2">
                y evita que tu negocio quiebre por falta de automatización.
              </span>
            </h1>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  id="panda-0b230730-c652-493e-943c-72cbe80d53cf"
                  src="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/?v=0b230730-c652-493e-943c-72cbe80d53cf&iosFakeFullscreen=true"
                  style={{ border: "none", position: "absolute", top: 0, left: 0 }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen={true}
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  width="100%"
                  height="100%"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#FFD700] rounded-lg sm:rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Crown className="text-[#FFD700]" size={20} />
                <span className="text-[#FFD700] font-bold text-base sm:text-lg">PRECIO ESPECIAL</span>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-xl sm:text-2xl lg:text-3xl line-through mb-2 font-semibold">
                  Precio normal: $97
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00C896] mb-2">$19.99</div>
                <div className="text-red-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                  Solo para los primeros 5 que aprovechen la promo
                </div>
                <div className="text-white/80 text-sm">Después, el valor vuelve al precio original sin aviso.</div>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-12 text-center">
            <a
              href="https://hotm.art/NyTUgsE5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg lg:text-xl font-bold hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105 animate-pulse"
              onClick={() => analytics.purchaseClick("$19.99", "video_cta")}
            >
              <Zap size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base lg:text-lg">🚀 OBTENER ACCESO COMPLETO POR SOLO $19.99</span>
              <span className="bg-black/40 px-2 py-1 rounded text-xs sm:text-sm">🔥 AHORA</span>
            </a>
            <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
              ✅ Acceso inmediato • ✅ Comunidad incluida • ✅ Soporte técnico
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section con Contador Grande */}
      <section className="pb-6 sm:pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto text-center max-w-2xl sm:max-w-4xl lg:max-w-5xl">
          {/* Contador Grande */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 border-2 border-red-500/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 inline-block mb-4 sm:mb-6 shadow-2xl shadow-red-500/20">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Clock size={24} className="sm:w-8 sm:h-8 text-red-400" />
                <span className="text-red-400 text-sm sm:text-lg lg:text-xl font-bold">OFERTA TERMINA EN:</span>
              </div>
              <div className="text-red-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-wider">
                {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-red-300 text-xs sm:text-sm lg:text-base mt-2">Solo para los primeros 5</div>
            </div>
          </div>

          {/* Badge de urgencia */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 animate-pulse shadow-lg shadow-red-500/30">
              <AlertTriangle size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">🔥 ¡OFERTA EXCLUSIVA — SOLO PARA LOS PRIMEROS 5!</span>
              <span className="sm:hidden">🔥 ¡OFERTA EXCLUSIVA!</span>
            </div>
          </div>

          {/* Beneficios principales */}
          <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
              ⚡️ En menos de 1 hora tendrás tu sistema funcionando:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-white">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Generando conversaciones reales</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Cerrando ventas automáticamente</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 sm:col-span-2 lg:col-span-1 justify-center lg:justify-start">
                <CheckCircle className="text-[#00C896] flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Sin pagar suscripciones</span>
              </div>
            </div>
          </div>

          {/* Precio destacado */}

          {/* CTA Principal */}
          <div className="mb-8 sm:mb-12">
            <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
              ✅ Acceso inmediato • ✅ Comunidad incluida • ✅ Soporte técnico
            </p>
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 px-4">
              🎯 ¿QUÉ INCLUYE ESTA <span className="text-[#00C896]">OFERTA EXCLUSIVA</span>?
            </h2>
            <div className="mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 px-4 leading-tight">
                👉 Lleva hoy tu <span className="text-[#00C896]">Agente de IA Vendedor 24/7</span> por WhatsApp y
                empieza a vender automáticamente <span className="text-[#00C896]">en menos de 1 hora</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Entrenamiento */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 px-2">
                <CheckCircle className="text-[#00C896]" size={28} />
                <span className="text-sm sm:text-base">✅ Entrenamiento 100% Práctico</span>
              </h3>
              <ul className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 px-2">
                    <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Para */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 px-2">
                <Users className="text-[#00C896]" size={28} />
                <span className="text-sm sm:text-base">🧩 Ideal Para</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80 px-2">
                  <Star size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>✔️ Agencias, freelancers, coaches, consultores</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 px-2">
                  <Star size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>✔️ Emprendedores sin conocimientos técnicos</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 px-2">
                  <Star size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>✔️ Personas que quieren más ventas sin pasar el día pegadas al celular</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Principales y Videos de Personalización */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00C896]/5 to-[#00A876]/5">
        <div className="container mx-auto max-w-6xl">
          {/* Beneficios Principales */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center px-4">
              🎯 <span className="text-[#00C896]">Beneficios principales</span> de la oferta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-[#00C896]" size={24} />
                  <h3 className="text-lg font-bold text-white">Lanza en menos de 1 hora</h3>
                </div>
                <p className="text-white/80">Con un paso a paso simple tendrás tu agente funcionando hoy mismo.</p>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-[#00C896]" size={24} />
                  <h3 className="text-lg font-bold text-white">Ventas 24/7</h3>
                </div>
                <p className="text-white/80">
                  Conversaciones, seguimientos y cobros automáticos incluso cuando no estás conectado.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-[#00C896]" size={24} />
                  <h3 className="text-lg font-bold text-white">Más cierres con menos esfuerzo</h3>
                </div>
                <p className="text-white/80">Nutre leads, responde objeciones y reduce el tiempo de respuesta.</p>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="text-[#00C896]" size={24} />
                  <h3 className="text-lg font-bold text-white">Sin suscripciones</h3>
                </div>
                <p className="text-white/80">Un solo pago y control total de tu sistema.</p>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-[#00C896]" size={24} />
                  <h3 className="text-lg font-bold text-white">Acceso a comunidad privada</h3>
                </div>
                <p className="text-white/80">Comparte, aprende y recibe soporte directo en Discord.</p>
              </div>
            </div>
          </div>

          {/* Videos de Personalización */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center px-4">
              🎥 <span className="text-[#00C896]">Videos de personalización</span> del agente
            </h2>
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg p-6 sm:p-8 mb-6">
              <p className="text-white/90 text-lg mb-6 text-center">
                Tu acceso incluye una biblioteca de videos que te ayudará a adaptar el agente a tu negocio en pocos
                minutos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={18} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>Guías para distintos nichos (agencias, e-commerce, salud, educación, consultorías).</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={18} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>Cómo ajustar la mensajería y el tono de voz según tu cliente ideal.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    
                    
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={18} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>Integración paso a paso con tus métodos de pago (Hotmart, Stripe, PayPal).</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={18} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                    <span>Configuración de atajos y palabras clave para responder más rápido.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección Comparativa */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center px-4">
              📊 <span className="text-[#00C896] text-input"> ¿Qué pasa si actúas vs si esperas?</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Si tomas acción hoy */}
              <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-2 border-green-500/50 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <CheckCircle size={28} />✅ Si tomas acción hoy
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>En menos de 1 hora tendrás tu sistema funcionando</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Conversaciones y ventas automáticas 24/7</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Acceso inmediato a plantillas y entrenamientos</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Comunidad privada de soporte y networking</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Cero suscripciones, cero complicaciones</span>
                  </li>
                </ul>
              </div>

              {/* Si NO tomas acción */}
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-2 border-red-500/50 rounded-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <AlertTriangle size={28} />❌ Si NO tomas acción
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Seguirás perdiendo clientes fuera de tu horario</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Más tiempo atado al celular contestando mensajes</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Tus competidores ya estarán automatizando y cerrando ventas mientras duermes</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Gastarás más en herramientas costosas y suscripciones</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>La oportunidad especial de acceso se cerrará</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad Discord */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 px-4">
              👥 Accede a nuestra <span className="text-[#00C896]">Comunidad </span> en Discord
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto px-4">
              Tu acceso incluye ingreso a nuestro servidor Antártida AI, con canales diseñados para ayudarte a lanzar,
              automatizar y escalar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Canales de Texto */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 px-2">💬 Canales de Texto</h3>
              <ul className="space-y-2">
                {canalesTexto.map((canal, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2 px-2">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full flex-shrink-0"></div>
                    {canal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Canales de Voz */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 px-2">🎙️ Canales de Voz</h3>
              <ul className="space-y-2">
                {canalesVoz.map((canal, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2 px-2">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full flex-shrink-0"></div>
                    {canal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicaciones */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 px-2">
                🛠️ Aplicaciones Gratuitas
              </h3>
              <ul className="space-y-2">
                {aplicaciones.map((app, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-center gap-2 px-2">
                    <div className="w-2 h-2 bg-[#00C896] rounded-full flex-shrink-0"></div>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 px-4">
            <p className="text-lg text-white/80">
              👥 <strong className="text-[#00C896]">Aprende, comparte, pregunta y escala</strong> junto a otros como tú.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios en Video */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00C896]/5 to-[#00A876]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              🎥 Mira lo que dicen nuestros <span className="text-[#00C896]">estudiantes</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Resultados reales de personas que ya implementaron el sistema y están vendiendo 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Video 1 */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="aspect-[9/16] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                <iframe
                  src="https://www.youtube.com/embed/V83GL9iPQS8?hl=es&cc_lang_pref=es&cc_load_policy=0&autoplay=0&mute=0"
                  title="Testimonio 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  "Increíble cómo automatizó todo mi proceso de ventas"
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="aspect-[9/16] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                <iframe
                  src="https://www.youtube.com/embed/jeP4OEyTp8Q?hl=es&cc_lang_pref=es&cc_load_policy=0&autoplay=0&mute=0"
                  title="Testimonio 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm">"Resultados desde el primer día de implementación"</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="aspect-[9/16] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                <iframe
                  src="https://www.youtube.com/embed/RySX887jHlc?hl=es&cc_lang_pref=es&cc_load_policy=0&autoplay=0&mute=0"
                  title="Testimonio 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm">"Mi negocio cambió completamente con este sistema"</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-lg sm:rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
              <p className="text-white/90 text-base sm:text-lg mb-2 px-2">
                <strong className="text-[#00C896]">+500 estudiantes</strong> ya están vendiendo automáticamente
              </p>
              <p className="text-white/70 text-xs sm:text-sm px-2">
                Únete a la comunidad que está revolucionando las ventas con IA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final con Urgencia */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00C896]/10 to-[#00A876]/10">
        <div className="container mx-auto max-w-4xl sm:max-w-6xl">
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#00C896] rounded-lg sm:rounded-xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00C896] to-[#00A876]"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                🚀 ¿LISTO PARA LANZAR TU SISTEMA EN 1 HORA?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 px-2">
                  <CheckCircle className="text-[#00C896] flex-shrink-0" size={20} />
                  <span>🔥 Solo $19,99 — exclusivo para los primeros 5</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 px-2">
                  <CheckCircle className="text-[#00C896] flex-shrink-0" size={20} />
                  <span>📈 Sistema funcionando en tiempo récord</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 px-2">
                  <CheckCircle className="text-[#00C896] flex-shrink-0" size={20} />
                  <span>🛠️ Sin suscripciones ni complicaciones</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 px-2">
                  <CheckCircle className="text-[#00C896] flex-shrink-0" size={20} />
                  <span>👥 Acceso inmediato a la comunidad</span>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl text-white/90 mb-3 sm:mb-4 px-2">
                  👉 Haz clic abajo y empieza hoy mismo antes que se acabe el cupo:
                </p>
              </div>

              <a
                href="https://hotm.art/NyTUgsE5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-lg sm:text-xl font-bold hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105 mb-4 sm:mb-6"
                onClick={() => analytics.purchaseClick("$19.99", "final_cta")}
              >
                <Zap size={24} className="sm:w-7 sm:h-7" />
                <span className="text-sm sm:text-base lg:text-lg">🚀 OBTENER ACCESO COMPLETO POR SOLO $19.99</span>
              </a>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 px-2">
                <div className="flex items-center gap-1 justify-center">
                  <CheckCircle size={14} className="text-[#00C896] flex-shrink-0" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <CheckCircle size={14} className="text-[#00C896] flex-shrink-0" />
                  <span>Comunidad incluida</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <CheckCircle size={14} className="text-[#00C896] flex-shrink-0" />
                  <span>Soporte técnico</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <CheckCircle size={14} className="text-[#00C896] flex-shrink-0" />
                  <span>Tiempo limitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Downsell Button */}
      <section className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <a
            href="https://chat.whatsapp.com/JtLP7Pskh0y2zTeXK3jXFF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-red-500/30 hover:from-red-700 hover:to-red-600 transition-all duration-300"
            onClick={() =>
              analytics.ctaClick(
                "No quiero obtener acceso completo ahora",
                "simple_downsell",
                "https://chat.whatsapp.com/JtLP7Pskh0y2zTeXK3jXFF",
              )
            }
          >
            <AlertTriangle size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">🔥 No quiero obtener acceso completo ahora</span>
            <span className="sm:hidden">🔥 No quiero acceso completo</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-t border-[#00C896]/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg mb-4 px-4">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </div>
          <p className="text-white/60 text-sm mb-2 px-4">© 2025 Antártida AI – Todos los derechos reservados.</p>
          <p className="text-white/40 text-xs px-4">Hecho para automatizar y vender por ti.</p>
        </div>
      </footer>
    </div>
  )
}
