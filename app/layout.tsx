import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
        <link
          rel="preload"
          href="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/css/styles.css"
          as="style"
        />
        <link
          rel="prerender"
          href="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/?v=3a8cddb9-4cb6-440a-b6e2-d54b826ad439"
        />
        <link rel="preload" href="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link
          rel="preload"
          href="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://config.tv.pandavideo.com.br/vz-fbfacc58-70c/3a8cddb9-4cb6-440a-b6e2-d54b826ad439.json"
          as="fetch"
        />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-fbfacc58-70c/config.json" as="fetch" />
        <link
          rel="preload"
          href="https://b-vz-fbfacc58-70c.tv.pandavideo.com.br/3a8cddb9-4cb6-440a-b6e2-d54b826ad439/playlist.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://b-vz-fbfacc58-70c.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-fbfacc58-70c.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-fbfacc58-70c.b-cdn.net" />
      </head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://gtm.agentesai.tech/erbvfdwtq.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','ed1zrhyi=GBBKIzI7TzwnLDE3N09VVAdJRUpXUAYcTBUQAQgCBwEQHVkQAxUK');`,
        }}
      />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://gtm.agentesai.tech/ns.html?id=GTM-NVXFSQ97"
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
