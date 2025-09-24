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
            __html: `
window.dataLayer = window.dataLayer || [];
// Deshabilitar completamente el tracking automático
window.dataLayer.push({
  'gtm.blocklist': ['html', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes'],
  'gtm.allowlist': [],
  'event': 'gtm.init_consent',
  'gtm.start': new Date().getTime()
});

(function(w,d,s,l,i){
  w[l]=w[l]||[];
  // Interceptar y filtrar eventos automáticos
  const originalPush = w[l].push;
  w[l].push = function(...args) {
    const event = args[0];
    // Bloquear eventos automáticos específicos
    if (event && typeof event === 'object') {
      const blockedEvents = [
        'gtm.historyChange', 
        'gtm.scrollDepth', 
        'gtm.timer', 
        'gtm.load', 
        'gtm.dom',
        'time_on_page',
        'gtm.elementVisibility',
        'gtm.formSubmit',
        'gtm.linkClick',
        'gtm.video',
        'gtm.pageView',
        'gtm.windowLoaded',
        'gtm.containerLoaded', 
        'gtm.scrollDirection',
        'gtm.triggerGroup'
      ];
      if (blockedEvents.includes(event.event)) {
        console.log('[GTM] Evento bloqueado:', event.event);
        return;
      }
      if (event.event && typeof event.event === 'string' && event.event.includes('time')) {
        console.log('[GTM] Evento de tiempo bloqueado:', event.event);
        return;
      }
    }
    return originalPush.apply(this, args);
  };
  
  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVXFSQ97');

// Configuración adicional para deshabilitar eventos automáticos
window.dataLayer.push({
  'gtm.historyChangeTimeout': 0,
  'gtm.uniqueEventId': 0,
  'gtm.scrollThreshold': 0,
  'gtm.maxScrollDepth': 0,
  'gtm.timerEventNumber': 0,
  'gtm.timerInterval': 0,
  'gtm.timerLimit': 0,
  'gtm.timerStartTime': 0,
  'gtm.timerCurrentTime': 0,
  'gtm.timerEventName': '',
  'gtm.elementVisibilityRatio': 0,
  'gtm.elementVisibilityTime': 0
});

// Bloquear eventos de historial del navegador
if (typeof window !== 'undefined') {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
  };
  
  window.addEventListener('popstate', function(e) {
    e.stopImmediatePropagation();
  }, true);
}`,
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
