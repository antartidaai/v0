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
import { analytics } from "../utils/analytics"

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showCaseModal, setShowCaseModal] = useState(false)
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "TechStart Solutions",
      text: "Perdimos 40% de nuestros leads porque no podíamos responder WhatsApp las 24 horas. Ahora con inteligencia artificial nunca perdemos una oportunidad.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
    {
      name: "María González",
      company: "Retail Express",
      text: "Antes tardábamos horas en responder consultas. Ahora nuestros vendedores de inteligencia artificial responden en segundos y cierran más ventas.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
    {
      name: "Roberto Silva",
      company: "Inmobiliaria Premium",
      text: "La automatización nos salvó. Pasamos de perder clientes por la noche a cerrar ventas mientras dormimos.",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Restaurante 'El Buen Sabor' cierra tras perder 60% de pedidos por WhatsApp no atendido",
      excerpt:
        "La falta de respuesta automática en horarios nocturnos y fines de semana llevó a este restaurante familiar a la quiebra después de 15 años.",
      date: "2024-01-15",
      author: "Ana Rodríguez",
      category: "Casos de Estudio",
      image: "https://i.ibb.co/XrsTWDjB/restaurante-buen-sabor.jpg",
      readTime: "5 min",
      slug: "restaurante-el-buen-sabor",
    },
    {
      id: 2,
      title: "Tienda de Ropa 'Moda Joven' pierde $50,000 en ventas por no automatizar WhatsApp",
      excerpt:
        "Durante el Black Friday, la sobrecarga de mensajes sin respuesta automática resultó en pérdidas masivas y clientes frustrados.",
      date: "2024-01-10",
      author: "Luis Martínez",
      category: "Retail",
      image: "https://i.ibb.co/Q7LC7tvr/tienda-moda-joven.jpg",
      readTime: "4 min",
      slug: "tienda-moda-joven",
    },
    {
      id: 3,
      title: "Agencia de Viajes 'Destinos Soñados' se declara en bancarrota",
      excerpt:
        "La imposibilidad de atender consultas urgentes de viajeros las 24/7 llevó a cancelaciones masivas y demandas legales.",
      date: "2024-01-05",
      author: "Carmen López",
      category: "Servicios",
      image: "https://i.ibb.co/0Wf16SX/agencia-destinos-sonados.jpg",
      readTime: "6 min",
      slug: "agencia-destinos-sonados",
    },
    {
      id: 4,
      title: "Clínica Dental 'Sonrisas' cierra por pérdida de pacientes vía WhatsApp",
      excerpt:
        "Los pacientes buscaron otras opciones al no recibir respuestas inmediatas para emergencias dentales fuera de horario.",
      date: "2023-12-28",
      author: "Dr. Miguel Torres",
      category: "Salud",
      image: "https://i.ibb.co/5hTyFgHw/clinica-sonrisas.jpg",
      readTime: "3 min",
      slug: "clinica-sonrisas",
    },
    {
      id: 5,
      title: "Inmobiliaria 'Hogar Ideal' pierde 80% de leads por respuesta tardía",
      excerpt:
        "En el mercado inmobiliario, 5 minutos de retraso significan perder el cliente. Esta empresa aprendió la lección muy tarde.",
      date: "2023-12-20",
      author: "Patricia Vega",
      category: "Inmobiliaria",
      image: "https://i.ibb.co/DPh4YhR0/inmobiliaria-hogar-ideal.jpg",
      readTime: "7 min",
      slug: "inmobiliaria-hogar-ideal",
    },
    {
      id: 6,
      title: "Autolavado 'Clean Car' cierra tras perder clientes por WhatsApp desatendido",
      excerpt: "La competencia con respuesta automática se llevó todos sus clientes habituales en solo 3 meses.",
      date: "2023-12-15",
      author: "Jorge Ramírez",
      category: "Servicios",
      image: "https://i.ibb.co/v69YfsfC/autolavado-clean-car.jpg",
      readTime: "4 min",
      slug: "autolavado-clean-car",
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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#1A1A1A]/95 to-[#2A2A2A]/95 backdrop-blur-sm border-b border-[#00C896] shadow-lg shadow-[#00C896]/20 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
            🤖 <span className="text-[#00C896]">VENTA 24/7</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-white">
            <a
              href="#inicio"
              className="hover:text-[#00C896] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("inicio")
              }}
            >
              Inicio
            </a>
            <a
              href="#blog"
              className="hover:text-[#00C896] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("blog")
              }}
            >
              Blog
            </a>
            <a
              href="#beneficios"
              className="hover:text-[#00C896] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("beneficios")
              }}
            >
              Beneficios
            </a>
            <a
              href="#casos"
              className="hover:text-[#00C896] transition-colors cursor-pointer text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("casos")
              }}
            >
              Casos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="bg-gradient-to-br from-[#00C896] to-[#00A876] text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#00C896]/30"
              onClick={() => handleCTAClick("Demo Gratis", "header", "/demo")}
            >
              <span>🚀</span> <span className="hidden sm:inline">Demo Gratis</span>
              <span className="sm:hidden">Demo</span>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6h16M6 12h16M6 18h16"
                  />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border-t border-[#00C896]/20">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <a
                href="#inicio"
                className="text-white hover:text-[#00C896] transition-colors py-2"
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
                className="text-white hover:text-[#00C896] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("blog")
                }}
              >
                Blog
              </a>
              <a
                href="#beneficios"
                className="text-white hover:text-[#00C896] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("beneficios")
                }}
              >
                Beneficios
              </a>
              <a
                href="#casos"
                className="text-white hover:text-[#00C896] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  handleNavClick("casos")
                }}
              >
                Casos
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block mb-4 sm:mb-6">
              🔥 +1,000 negocios salvados de la quiebra
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              No Seas el Próximo Negocio que
              <span className="text-[#00C896]"> Quiebre por WhatsApp</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Cada día, empresas cierran porque no pueden responder WhatsApp 24/7. Nuestros vendedores de inteligencia
              artificial trabajan mientras tú duermes,
              <strong className="text-[#00C896]"> convirtiendo cada mensaje en una venta</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300 hover:scale-105"
              onClick={() => handleCTAClick("Ver Demostración Gratis", "hero_primary", "/demo")}
            >
              <Zap size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Ver Demostración Gratis</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <a
              href="#casos"
              className="bg-gradient-to-br from-[#3A3A3A] to-[#2A2A2A] border border-[#00C896]/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:border-[#00C896] transition-all duration-300"
              onClick={() => handleCTAClick("Ver Casos Reales", "hero_secondary", "#casos")}
            >
              <TrendingDown size={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Ver Casos Reales</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00C896] mb-1 sm:mb-2">73%</div>
              <div className="text-white/70 text-xs sm:text-sm">Negocios quiebran por WhatsApp desatendido</div>
            </div>
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00C896] mb-1 sm:mb-2">5min</div>
              <div className="text-white/70 text-xs sm:text-sm">Tiempo máximo antes de perder un cliente</div>
            </div>
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00C896] mb-1 sm:mb-2">24/7</div>
              <div className="text-white/70 text-xs sm:text-sm">Nuestra inteligencia artificial nunca duerme</div>
            </div>
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-3 sm:p-4 md:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00C896] mb-1 sm:mb-2">+300%</div>
              <div className="text-white/70 text-xs sm:text-sm">Aumento promedio en ventas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
              Casos Reales: Negocios que <span className="text-red-400">Quebraron</span> por WhatsApp
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2 sm:px-0">
              Aprende de los errores de otros. Estos negocios reales cerraron por no automatizar WhatsApp a tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/articulos/${post.slug}`}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:scale-105 block"
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

                  <div className="flex items-center gap-2 text-[#00C896] hover:text-[#00A876] transition-colors text-sm font-medium">
                    Leer caso completo
                    <ExternalLink size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ No Seas el Próximo Caso de Estudio</h3>
              <p className="text-white/80 mb-6">
                Cada mes documentamos nuevos negocios que cierran por no automatizar WhatsApp.
                <strong className="text-red-400"> ¿Será tu negocio el próximo?</strong>
              </p>
              <Link
                href="/demo"
                className="bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300"
                onClick={() => handleCTAClick("Protege tu Negocio Ahora", "blog_cta", "/demo")}
              >
                <Shield size={20} />
                Protege tu Negocio Ahora
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
              ¿Por Qué los Negocios <span className="text-[#00C896]">Quiebran</span> Sin Automatización?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2 sm:px-0">
              La diferencia entre el éxito y la quiebra está en responder WhatsApp al instante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Problemas */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <TrendingDown size={28} />
                Sin Automatización
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pierdes 60% de leads por respuesta tardía</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clientes se van a la competencia en 5 minutos</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ventas perdidas en horarios nocturnos</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sobrecarga de trabajo para tu equipo</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quiebra inevitable en 6-12 meses</span>
                </li>
              </ul>
            </div>

            {/* Soluciones */}
            <div className="bg-gradient-to-br from-[#00C896]/20 to-[#00A876]/20 border border-[#00C896]/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#00C896] mb-6 flex items-center gap-3">
                <CheckCircle size={28} />
                Con Vendedores de Inteligencia Artificial
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>Respuesta instantánea las 24 horas</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>Conviertes 90% más leads en ventas</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>Vendes mientras duermes</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>Tu equipo se enfoca en cerrar ventas</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={20} className="text-[#00C896] mt-0.5 flex-shrink-0" />
                  <span>Crecimiento sostenible garantizado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6 text-center">
              <div className="bg-[#00C896]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-[#00C896]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Respuesta Instantánea</h3>
              <p className="text-white/70">Menos de 3 segundos de respuesta, 24/7 sin descanso</p>
            </div>

            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6 text-center">
              <div className="bg-[#00C896]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#00C896]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nunca Pierdas Clientes</h3>
              <p className="text-white/70">Cada mensaje se convierte en una oportunidad de venta</p>
            </div>

            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-6 text-center">
              <div className="bg-[#00C896]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={32} className="text-[#00C896]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multiplica Ventas</h3>
              <p className="text-white/70">Aumenta tus ingresos hasta 300% en los primeros 3 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="casos" className="py-16 px-4 bg-gradient-to-r from-[#00C896]/10 to-[#00A876]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Negocios que se <span className="text-[#00C896]">Salvaron</span> a Tiempo
          </h2>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/20 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-[#00C896]"
              />
            </div>
            <blockquote className="text-xl text-white/90 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-[#00C896] font-semibold">{testimonials[currentTestimonial].name}</div>
            <div className="text-white/60 text-sm">{testimonials[currentTestimonial].company}</div>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-[#00C896]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#00C896] to-[#00A876]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para Salvar tu Negocio?</h2>
          <p className="text-xl text-white/90 mb-8">
            No esperes a ser otro caso de estudio. Prueba nuestros vendedores de inteligencia artificial gratis y
            <strong> transforma cada mensaje en una venta</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-[#00C896] px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={() => handleCTAClick("Haz una Prueba Gratis", "final_cta", "/demo")}
            >
              <Zap size={24} />
              Haz una Prueba Gratis
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-6">
            ✅ Sin tarjeta de crédito • ✅ Configuración en 5 minutos • ✅ Soporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-t border-[#00C896]/20 py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg mb-4">
                🤖 <span className="text-[#00C896]">VENTA 24/7</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">
                Salvamos negocios de la quiebra con vendedores de inteligencia artificial que nunca duermen.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Vendedores de Inteligencia Artificial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Automatización
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Integraciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#blog" className="hover:text-[#00C896] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Negocio</h4>
              <ul className="space-y-2 text-white/60 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00C896] transition-colors">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#00C896]/20 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2024 Vendedores Virtuales con Inteligencia Artificial. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {showCaseModal && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
          <div className="w-full max-w-2xl bg-gradient-to-r from-[#00C896] to-[#00A876] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in mx-4 max-h-[90vh] overflow-y-auto">
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
                  ¿No Quieres Ser el Próximo Caso?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">
                  Evita el destino de {selectedCase.title.split("'")[1]?.split("'")[0] || "este negocio"}. Prueba
                  nuestros vendedores de inteligencia artificial gratis y
                  <strong> transforma cada mensaje en una venta</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-3 sm:mb-4">
                  <Link
                    href="/demo"
                    className="bg-white text-[#00C896] px-6 sm:px-8 py-3 rounded-xl text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      handleCTAClick("Comenzar Demo Gratuita", "case_modal", "/demo")
                      closeCaseModal()
                    }}
                  >
                    <Zap size={20} className="sm:w-6 sm:h-6" />
                    <span className="text-sm">Comenzar Demo Gratuita</span>
                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                </div>

                <p className="text-white/70 text-xs sm:text-sm">
                  ✅ Sin tarjeta de crédito • ✅ Configuración en 5 minutos • ✅ Soporte 24/7
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
          background: rgba(0, 200, 150, 0.6);
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
