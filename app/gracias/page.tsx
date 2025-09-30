"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight, Mail } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#00C896]/30 rounded-2xl p-8 sm:p-12">
          <div className="bg-[#00C896]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-[#00C896]" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">¡Gracias por tu Compra!</h1>

          <p className="text-xl text-gray-300 mb-8">
            Tu pedido ha sido procesado exitosamente. Recibirás un correo con los detalles de acceso en los próximos
            minutos.
          </p>

          <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00A876]/10 border border-[#00C896]/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4 text-left">
              <Mail className="w-6 h-6 text-[#00C896] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Revisa tu Correo Electrónico</h3>
                <p className="text-gray-400 text-sm">
                  Te hemos enviado un correo con las instrucciones de acceso y los recursos descargables. Si no lo ves,
                  revisa tu carpeta de spam.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-[#00C896] to-[#00A876] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:shadow-lg hover:shadow-[#00C896]/30 transition-all duration-300"
            >
              Volver al Inicio
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-gray-400 text-sm">
              ¿Necesitas ayuda? Contáctanos en{" "}
              <a href="mailto:soporte@venta247.com" className="text-[#00C896] hover:underline">
                soporte@venta247.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
