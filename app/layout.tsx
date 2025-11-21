import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diagnóstico IA para Negocios | Estrategias de Automatización",
  description:
    "Descubre cómo la Inteligencia Artificial puede transformar tu negocio. Completa nuestro diagnóstico y recibe estrategias personalizadas de automatización con IA para aumentar tus ventas.",
  keywords:
    "inteligencia artificial, automatización de negocios, consultoría IA, diagnóstico empresarial, estrategias IA, transformación digital",
  authors: [{ name: "johnjairo.ai" }],
  openGraph: {
    title: "Diagnóstico IA para Negocios | Estrategias de Automatización",
    description:
      "Descubre cómo la IA puede transformar tu negocio. Recibe estrategias personalizadas de automatización.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico IA para Negocios | Estrategias de Automatización",
    description:
      "Descubre cómo la IA puede transformar tu negocio. Recibe estrategias personalizadas de automatización.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' fontSize='90'>🤖</text></svg>",
        type: "image/svg+xml",
      },
    ],
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
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6S6K6XL');`}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6S6K6XL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
