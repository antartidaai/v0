import Link from "next/link"
import { Instagram } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
          Estamos creando una nueva versión
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
          Mientras tanto, te invito a que nos sigas en Instagram para estar al tanto de todas las novedades.
        </p>

        {/* Instagram Button */}
        <div className="pt-2 sm:pt-4">
          <Link
            href="https://www.instagram.com/johnjairo.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <Instagram size={20} className="sm:w-6 sm:h-6" />
            Síguenos en Instagram
          </Link>
        </div>
      </div>
    </div>
  )
}
