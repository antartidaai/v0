"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Calendar,
  User,
  ExternalLink,
  Zap,
  Shield,
  Clock,
  BarChart3,
  X,
} from "lucide-react"
import { analytics, usePageTracking } from "../utils/analytics"

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showCaseModal, setShowCaseModal] = useState(false)
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Analytics tracking
  usePageTracking("landing_page")

  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "Software Engineer en Microsoft",
      text: "Después de optimizar mi perfil con esta metodología, recibí 3 ofertas de trabajo remoto en menos de un mes. Ahora trabajo desde México para una empresa en Seattle.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
    {
      name: "María González",
      company: "Product Manager en Amazon",
      text: "Mi perfil pasó de ser invisible a recibir mensajes de recruiters semanalmente. El cambio fue inmediato después de aplicar las estrategias de posicionamiento.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
    {
      name: "Roberto Silva",
      company: "Data Scientist en Google",
      text: "Conseguí mi visa de trabajo para Estados Unidos gracias a una oferta que llegó directamente por LinkedIn. Todo cambió cuando aprendí a posicionarme correctamente.",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Ingeniero con 15 años de experiencia sigue desempleado tras 200 aplicaciones en LinkedIn",
      excerpt:
        "A pesar de su amplia experiencia, su perfil genérico y falta de posicionamiento estratégico lo mantienen invisible para los recruiters estadounidenses.",
      date: "2024-01-15",
      author: "Ana Rodríguez",
      category: "Casos de Estudio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Desarrolladora con MBA rechazada en 50 entrevistas por su perfil de LinkedIn mal optimizado",
      excerpt:
        "Su perfil no comunicaba valor claro ni usaba las palabras clave correctas, haciendo que los algoritmos de LinkedIn la ignoraran completamente.",
      date: "2024-01-10",
      author: "Luis Martínez",
      category: "Profesionales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Contador con certificaciones internacionales no consigue ni una entrevista en 6 meses",
      excerpt:
        "Su perfil parecía un CV tradicional en lugar de una propuesta de valor. Los recruiters no entendían cómo podía resolver sus problemas específicos.",
      date: "2024-01-05",
      author: "Carmen López",
      category: "Finanzas",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Médico especialista abandona su sueño americano por perfil de LinkedIn invisible",
      excerpt:
        "No sabía cómo traducir su experiencia médica al lenguaje que buscan los hospitales estadounidenses, perdiendo oportunidades valiosas.",
      date: "2023-12-28",
      author: "Dr. Miguel Torres",
      category: "Salud",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "3 min",
    },
    {
      id: 5,
      title: "Arquitecta con portafolio impresionante no recibe respuestas de empresas en EE.UU.",
      excerpt:
        "Su perfil no mostraba resultados cuantificables ni se posicionaba para el mercado estadounidense, manteniéndola invisible.",
      date: "2023-12-20",
      author: "Patricia Vega",
      category: "Arquitectura",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "7 min",
    },
    {
      id: 6,
      title: "Consultor en marketing digital pierde oportunidad de $120K por perfil mal estructurado",
      excerpt:
        "Los recruiters no pudieron identificar su expertise específico debido a un posicionamiento confuso y genérico.",
      date: "2023-12-15",
      author: "Jorge Ramírez",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80",
      readTime: "4 min",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Crear partículas flotantes
    const createParticles = () => {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "vw"
        particle.style.animationDuration = 8 + Math.random() * 4 + "s"
        particle.style.opacity = (Math.random() * 0.3).toString()
        document.body.appendChild(particle)
      }
    }

    createParticles()

    return () => {
      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  const openCaseModal = (post: any) => {
    setSelectedCase(post)
    setShowCaseModal(true)
  }

  const closeCaseModal = () => {
    setShowCaseModal(false)
    setSelectedCase(null)
  }

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCTAClick = (buttonText: string, location: string, destination?: string) => {
    analytics.ctaClick(buttonText, location, destination)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A66C2] to-[#004182]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#0A66C2]/95 to-[#004182]/95 backdrop-blur-sm border-b border-[#0073B1] shadow-lg shadow-[#0073B1]/20 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
            💼 <span className="text-[#70B5F9]">LinkedIn Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-white">
            <a
              href="#inicio"
              className="hover:text-[#70B5F9] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("inicio")
              }}
            >
              Inicio
            </a>
            <a
              href="#blog"
              className="hover:text-[#70B5F9] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("blog")
              }}
            >
              Casos
            </a>
            <a
              href="#beneficios"
              className="hover:text-[#70B5F9] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("beneficios")
              }}
            >
              Método
            </a>
            <a
              href="#casos"
              className="hover:text-[#70B5F9] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("casos")
              }}
            >
              Testimonios
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/40 animate-pulse"
              onClick={() => handleCTAClick("Ver Método", "header", "/demo")}
            >
              <span>🚀</span> <span className="hidden sm:inline">Ver Método</span>
              <span className="sm:hidden">Método</span>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-[#0A66C2] to-[#004182] border-t border-[#0073B1]/20">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <a
                href="#inicio"
                className="text-white hover:text-[#70B5F9] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("inicio")
                }}
              >
                Inicio
              </a>
              <a
                href="#blog"
                className="text-white hover:text-[#70B5F9] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("blog")
                }}
              >
                Casos
              </a>
              <a
                href="#beneficios"
                className="text-white hover:text-[#70B5F9] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("beneficios")
                }}
              >
                Método
              </a>
              <a
                href="#casos"
                className="text-white hover:text-[#70B5F9] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("casos")
                }}
              >
                Testimonios
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#70B5F9] to-[#0073B1] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block mb-4 sm:mb-6">
              🔥 +500 profesionales ya consiguieron trabajo en EE.UU.
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Convierte tu perfil de LinkedIn en una
              <span className="text-[#70B5F9]"> máquina de trabajos</span> en EE.UU.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              En solo 2 horas trasformaras tu perfil de linkedin, incluso si hoy no sabes por dónde empezar.
              <strong className="text-[#70B5F9]"> El problema no es tu experiencia, es tu posicionamiento</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse shadow-lg shadow-[#FF6B35]/30"
              onClick={() => handleCTAClick("Analisa tu perfil GRATIS", "hero_primary", "/demo")}
            >
              <Zap size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Analisa tu perfil GRATIS</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <a
              href="#casos"
              className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:border-[#70B5F9] transition-all duration-300"
              onClick={() => handleCTAClick("Ver Casos de Éxito", "hero_secondary", "#casos")}
            >
              <TrendingDown size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Ver Casos de Éxito</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#70B5F9] mb-1 sm:mb-2">87%</div>
              <div className="text-white/70 text-xs sm:text-sm">Profesionales tienen perfiles mal optimizados</div>
            </div>
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#70B5F9] mb-1 sm:mb-2">2hrs</div>
              <div className="text-white/70 text-xs sm:text-sm">Tiempo para optimizar tu perfil completamente</div>
            </div>
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#70B5F9] mb-1 sm:mb-2">500+</div>
              <div className="text-white/70 text-xs sm:text-sm">Profesionales ya trabajando en EE.UU.</div>
            </div>
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#70B5F9] mb-1 sm:mb-2">+300%</div>
              <div className="text-white/70 text-xs sm:text-sm">Aumento en visualizaciones del perfil</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
              ¿Te suena <span className="text-red-400">familiar</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2 sm:px-0">
              Profesionales talentosos que no consiguen entrevistas porque no saben cómo posicionarse en LinkedIn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-[#004182] to-[#003366] border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">{post.title}</h3>

                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <button
                    onClick={() => openCaseModal(post)}
                    className="flex items-center gap-2 text-[#70B5F9] hover:text-[#0073B1] transition-colors text-sm font-medium"
                  >
                    Leer caso completo
                    <ExternalLink size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ No seas el próximo caso</h3>
              <p className="text-white/80 mb-6">
                Miles de profesionales talentosos siguen desempleados porque no saben cómo posicionarse.
                <strong className="text-red-400"> ¿Cuánto tiempo más vas a esperar?</strong>
              </p>
              <Link
                href="/demo"
                className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 animate-pulse"
                onClick={() => handleCTAClick("Optimizar Mi Perfil Ahora", "blog_cta", "/demo")}
              >
                <Shield size={20} />
                Optimizar Mi Perfil Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
              El problema no es tu <span className="text-[#70B5F9]">experiencia</span>... es tu posicionamiento
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2 sm:px-0">
              Mientras otros candidatos con menos experiencia consiguen entrevistas, tú sigues invisible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Problemas */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <TrendingDown size={28} />
                Lo que NO funciona
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Titulares genéricos como "Ingeniero con 10 años de experiencia"</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Copiar y pegar tu CV al perfil de LinkedIn</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No usar palabras clave para aparecer en búsquedas</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Presentarte como una lista de cargos anteriores</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No mostrar resultados cuantificables</span>
                </li>
              </ul>
            </div>

            {/* Soluciones */}
            <div className="bg-gradient-to-br from-[#70B5F9]/20 to-[#0073B1]/20 border border-[#70B5F9]/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#70B5F9] mb-6 flex items-center gap-3">
                <CheckCircle size={28} />
                Lo que SÍ funciona
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>Posicionarte como solución a problemas específicos</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>Usar palabras clave que buscan los recruiters</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>Mostrar resultados medibles y impacto real</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>Adaptar tu mensaje al mercado estadounidense</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#70B5F9] mt-0.5 flex-shrink-0" />
                  <span>Aparecer en las búsquedas de los recruiters</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6 text-center">
              <div className="bg-[#70B5F9]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-[#70B5F9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimización Rápida</h3>
              <p className="text-white/70">Transforma tu perfil en solo 2 horas siguiendo nuestro método paso a paso</p>
            </div>

            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6 text-center">
              <div className="bg-[#70B5F9]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#70B5F9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Posicionamiento Estratégico</h3>
              <p className="text-white/70">Aprende a presentarte como la solución que buscan los empleadores</p>
            </div>

            <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-6 text-center">
              <div className="bg-[#70B5F9]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={32} className="text-[#70B5F9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Resultados Medibles</h3>
              <p className="text-white/70">Aumenta tus visualizaciones y mensajes de recruiters hasta 300%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="casos" className="py-16 px-4 bg-gradient-to-r from-[#70B5F9]/10 to-[#0073B1]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Profesionales que ya están <span className="text-[#70B5F9]">trabajando en EE.UU.</span>
          </h2>

          <div className="bg-gradient-to-br from-[#004182] to-[#003366] border border-[#70B5F9]/20 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-[#70B5F9]"
              />
            </div>
            <blockquote className="text-xl text-white/90 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-[#70B5F9] font-semibold">{testimonials[currentTestimonial].name}</div>
            <div className="text-white/60 text-sm">{testimonials[currentTestimonial].company}</div>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-[#70B5F9]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#70B5F9] to-[#0073B1]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para conseguir tu trabajo en EE.UU.?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            No esperes más. Aprende el método exacto que han usado más de 500 profesionales para
            <strong> conseguir entrevistas y ofertas de trabajo</strong> desde LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105 animate-pulse shadow-xl shadow-[#FF6B35]/30"
              onClick={() => handleCTAClick("Ver Método Completo", "final_cta", "/demo")}
            >
              <Zap size={24} />
              Ver Método Completo
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-6">
            ✅ Método paso a paso • ✅ Resultados en 2 horas • ✅ Sin mentorías costosas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0A66C2] to-[#004182] border-t border-[#70B5F9]/20 py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg mb-4">
                💼 <span className="text-[#70B5F9]">LinkedIn Pro</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">
                Ayudamos a profesionales a conseguir trabajo en Estados Unidos optimizando su perfil de LinkedIn.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Método</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Optimización de Perfil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Posicionamiento Estratégico
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Palabras Clave
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Networking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#blog" className="hover:text-[#70B5F9] transition-colors">
                    Casos de Estudio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Guías Gratuitas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#70B5F9] transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#70B5F9]/20 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-xs sm:text-sm">© 2024 LinkedIn Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {showCaseModal && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
          <div className="w-full max-w-2xl bg-gradient-to-r from-[#70B5F9] to-[#0073B1] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header with close button */}
            <div className="relative p-4 sm:p-6 pb-2 sm:pb-4">
              <button
                onClick={closeCaseModal}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
              <div className="pr-8 sm:pr-12">
                <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium inline-block mb-2 sm:mb-3">
                  {selectedCase.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  {selectedCase.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">{selectedCase.excerpt}</p>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  ¿No quieres que te pase lo mismo?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">
                  Evita cometer los mismos errores. Aprende el método exacto para
                  <strong> posicionarte correctamente en LinkedIn</strong> y conseguir entrevistas en EE.UU.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-3 sm:mb-4">
                  <Link
                    href="/demo"
                    className="bg-white text-[#0A66C2] px-6 sm:px-8 py-3 rounded-xl text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      handleCTAClick("Ver Método Completo", "case_modal", "/demo")
                      closeCaseModal()
                    }}
                  >
                    <Zap size={20} className="sm:w-6 sm:h-6" />
                    <span className="text-sm">Ver Método Completo</span>
                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                </div>

                <p className="text-white/70 text-xs sm:text-sm">
                  ✅ Método paso a paso • ✅ Resultados en 2 horas • ✅ Sin mentorías costosas
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .particle {
          position: fixed;
          width: 2px;
          height: 2px;
          background: rgba(112, 181, 249, 0.6);
          border-radius: 50%;
          animation: fall linear infinite;
          z-index: 1;
          pointer-events: none;
        }
        
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-bottom-4 {
          animation: slideInUp 0.4s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
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
