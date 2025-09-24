import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vendedores Virtuales con IA - VENTA 24/7",
  description:
    "No seas el próximo negocio que quiebre por WhatsApp. Nuestros vendedores de inteligencia artificial trabajan mientras tú duermes, convirtiendo cada mensaje en una venta.",
  keywords:
    "vendedores virtuales, inteligencia artificial, WhatsApp automatizado, ventas 24/7, chatbots, automatización",
  authors: [{ name: "VENTA 24/7" }],
  openGraph: {
    title: "Vendedores Virtuales con IA - VENTA 24/7",
    description: "Evita que tu negocio quiebre por no responder WhatsApp. Vendedores de IA que trabajan 24/7.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendedores Virtuales con IA - VENTA 24/7",
    description: "Evita que tu negocio quiebre por no responder WhatsApp. Vendedores de IA que trabajan 24/7.",
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
})(window,document,'script','dataLayer','GTM-NVXFSQ97');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVXFSQ97"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
