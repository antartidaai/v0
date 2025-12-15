import Link from "next/link"
import Image from "next/image"
import { Instagram, Calendar, MessageCircle, Youtube, GraduationCap, Sparkles } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src="https://suhqwgyqfblyeilokryc.supabase.co/storage/v1/object/public/RecursosWeb/foto%20perfil%20antartida%20%20-%20Copia.png%202.png"
              alt="Perfil"
              width={192}
              height={192}
              priority
              className="w-full h-full rounded-full object-cover ring-4 ring-gray-200 shadow-xl"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
          Estamos creando una nueva versión
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
          Sígueme en Instagram o agenda tu llamada para crear un sistema de IA que realmente venda.
        </p>

        <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4 max-w-md mx-auto">
          <Link
            href="https://artificialctrl.com/formulario"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <Calendar size={20} className="sm:w-6 sm:h-6" />
            Construimos tu sistema de IA – Agenda Ahora
          </Link>

          <Link
            href="https://buy.stripe.com/5kQdR914q66ucReaVV2cg0i"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <GraduationCap size={20} className="sm:w-6 sm:h-6" />
            Mentoría 1 a 1
          </Link>

          <Link
            href="https://affiliates.gohighlevel.com/?fp_ref=-algorith-pro65"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <Sparkles size={20} className="sm:w-6 sm:h-6" />
            15 días Gratis de GHL
          </Link>

          <Link
            href="https://www.instagram.com/johnjairo.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <Instagram size={20} className="sm:w-6 sm:h-6" />
            Sígueme en Instagram
          </Link>

          <Link
            href="https://www.youtube.com/@JohnJairoAI?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <Youtube size={20} className="sm:w-6 sm:h-6" />
            Suscríbete en YouTube
          </Link>

          <Link
            href="https://discord.gg/BNZumZUqsx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg w-full"
            prefetch={false}
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            Comunidad de Discord
          </Link>
        </div>
      </div>
    </div>
  )
}
