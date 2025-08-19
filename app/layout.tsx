import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinkedIn Pro - Consigue Trabajo en EE.UU.",
  description:
    "Convierte tu perfil de LinkedIn en una máquina de generar entrevistas en EE.UU. en solo 2 horas sin pagar por mentorías costosas, incluso si hoy no sabes por dónde empezar.",
  keywords:
    "LinkedIn, trabajo Estados Unidos, optimización perfil, entrevistas remotas, posicionamiento profesional, recruiters",
  authors: [{ name: "LinkedIn Pro" }],
  openGraph: {
    title: "LinkedIn Pro - Consigue Trabajo en EE.UU.",
    description: "Método para optimizar tu LinkedIn y conseguir entrevistas en Estados Unidos en solo 2 horas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Pro - Consigue Trabajo en EE.UU.",
    description: "Método para optimizar tu LinkedIn y conseguir entrevistas en Estados Unidos en solo 2 horas.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4RNMP7V');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4RNMP7V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
