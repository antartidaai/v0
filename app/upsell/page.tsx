"use client"
import Link from "next/link"
import { CheckCircle, Star, Clock, Zap, Calendar } from "lucide-react"

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] relative overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-[#00C896]/30 rounded-full animate-pulse absolute"
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
          <Link href="/" className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base lg:text-lg">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* H1 Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 text-[#00C896] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 animate-pulse">
              <Star size={16} className="sm:w-5 sm:h-5" />
              <span>OFERTA ESPECIAL - MENTORÍA 1 A 1</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight px-2">
              <span className="text-[#00C896]">Con mi guía, personalizaremos juntos</span> tu vendedor con IA para tu
              negocio en una <span className="text-[#00C896]">única sesión de 45 minutos</span>
            </h1>
          </div>

          {/* Video Section */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#00C896]/30 rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="w-full max-w-4xl mx-auto">
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  id="panda-898533e3-4645-4348-9edb-ca50335e271f"
                  src="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/?v=898533e3-4645-4348-9edb-ca50335e271f&iosFakeFullscreen=true"
                  style={{ border: "none", position: "absolute", top: 0, left: 0 }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen={true}
                  width="100%"
                  height="100%"
                  fetchPriority="high"
                />
              </div>
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
                      const panda_id_player = 'panda-898533e3-4645-4348-9edb-ca50335e271f';
                      const p=new PandaPlayer(panda_id_player,{
                        onReady(){
                          p.loadWindowScreen({panda_id_player});
                        }
                      });
                    });
                  `,
                }}
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C896] to-[#00A876] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">45 Minutos de Sesión</h3>
                  <p className="text-white/80">
                    Una sesión enfocada donde te guiaré para configurar juntos tu vendedor con IA específicamente para
                    tu negocio
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C896] to-[#00A876] rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Listo Para Vender</h3>
                  <p className="text-white/80">
                    Al terminar la sesión, habremos configurado juntos tu vendedor con IA funcionando y cerrando ventas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#00C896]/30 rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              ✨ Qué incluye la <span className="text-[#00C896]">mentoría personalizada</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Analizaremos juntos tu negocio y proceso de ventas actual</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Te guiaré para configurar tu vendedor con IA para tu nicho específico</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Crearemos juntos scripts de ventas optimizados con IA</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Configuraremos juntos automatizaciones avanzadas</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Haremos pruebas en vivo y ajustes en tiempo real</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">Te compartiré estrategias para maximizar conversiones</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#00C896] fill-current" />
              ))}
            </div>
            <p className="text-white/90 text-lg text-center mb-4 italic">
              "La mentoría personalizada fue increíble. Con su guía, en 45 minutos configuramos juntos mi vendedor con
              IA y quedó funcionando perfectamente para mi negocio. Valió cada centavo."
            </p>
            <p className="text-white/70 text-center">— Carlos M., Agencia de Marketing Digital</p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#FFB800] rounded-xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFB800] to-[#FF8C00]"></div>

            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base animate-pulse shadow-lg">
              50% OFF
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                🎯 Agenda tu <span className="text-[#00C896]">mentoría personalizada</span> ahora
              </h2>

              <div className="mb-4">
                <p className="text-white/70 text-sm sm:text-base mb-2">Precio normal:</p>
                <p className="text-lg sm:text-xl text-white/80 mb-2">
                  <span className="line-through text-white/60 text-2xl sm:text-3xl">$197 USD</span>
                </p>
                <p className="text-white/90 text-base sm:text-lg mb-2">Precio especial HOY:</p>
                <p className="text-[#FFB800] font-bold text-4xl sm:text-5xl mb-2">$97 USD</p>
              </div>

              <div className="bg-gradient-to-r from-[#FFB800]/20 to-[#FF8C00]/20 border border-[#FFB800]/30 rounded-lg px-4 py-3 mb-6 max-w-2xl mx-auto">
                <p className="text-[#FFB800] font-bold text-lg sm:text-xl">🔥 ¡Aprovecha este descuento del 50%!</p>
                <p className="text-white/80 text-sm sm:text-base mt-1">
                  Oferta exclusiva solo para estudiantes del curso Vendedor con IA 24/7
                </p>
              </div>

              <a
                href="https://buy.stripe.com/6oUaEXbJ4bqOcRe3tt2cg0j"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-[#00C896]/50 transition-all duration-300 hover:scale-105 mb-6"
              >
                <Calendar size={24} />
                <span>Agenda tu mentoría aquí</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle size={16} className="text-[#00C896]" />
                  <span>Sesión de 45 minutos</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle size={16} className="text-[#00C896]" />
                  <span>100% personalizado</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle size={16} className="text-[#00C896]" />
                  <span>Soporte 7 días</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 text-white px-6 py-3 rounded-full">
              <CheckCircle size={20} className="text-[#00C896]" />
              <span className="text-sm sm:text-base">
                🛡️ Garantía de satisfacción 100% - Si no quedas satisfecho, te devolvemos tu dinero
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-t border-[#00C896]/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg mb-4">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </div>
          <p className="text-white/60 text-sm mb-2">© 2025 Antártida AI – Todos los derechos reservados.</p>
          <p className="text-white/40 text-xs">Hecho para automatizar y vender por ti.</p>
        </div>
      </footer>
    </div>
  )
}
