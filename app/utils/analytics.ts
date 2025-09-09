// Utilidades para Google Tag Manager y Analytics
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Función para enviar eventos a GTM
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  try {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        page_title: document.title,
      })
      console.log("📊 Evento enviado a GTM:", eventName, parameters)
    }
  } catch (error) {
    console.error("❌ Error enviando evento a GTM:", error)
  }
}

// Eventos específicos del negocio - ULTRA OPTIMIZADOS
export const analytics = {
  // Eventos de CTA principales - MANTENIDO (crítico para conversión)
  ctaClick: (buttonText: string, location: string, destination?: string) => {
    trackEvent("cta_click", {
      button_text: buttonText,
      click_location: location,
      destination_url: destination,
      event_category: "engagement",
      event_label: `${location}_${buttonText}`,
    })
  },

  chatStart: (vendedorName: string, vendedorId: number) => {
    trackEvent("chat_start", {
      vendedor_name: vendedorName,
      vendedor_id: vendedorId,
      event_category: "engagement",
      event_label: `chat_${vendedorName.toLowerCase().replace(" ", "_")}`,
    })
  },

  inicialCheckout: (price: string, location: string) => {
    trackEvent("inicial_checkout", {
      price: price,
      currency: "USD",
      click_location: location,
      event_category: "conversion",
      event_label: `inicial_checkout_${price}`,
      value: Number.parseFloat(price.replace("$", "")),
    })
  },

  // Eventos de conversión - MANTENIDO (crítico)
  purchaseClick: (price: string, location: string) => {
    trackEvent("purchase_click", {
      price: price,
      currency: "USD",
      click_location: location,
      event_category: "conversion",
      event_label: `purchase_${price}`,
      value: Number.parseFloat(price.replace("$", "")),
    })
  },

  // Eventos de navegación - MANTENIDO (crítico)
  pageView: (pageName: string) => {
    trackEvent("page_view", {
      page_name: pageName,
      event_category: "navigation",
      event_label: pageName,
    })
  },

  // Eventos de formularios - MANTENIDO (importantes para conversión)
  formStart: (formName: string) => {
    trackEvent("form_start", {
      form_name: formName,
      event_category: "form",
      event_label: `form_start_${formName}`,
    })
  },

  formSubmit: (formName: string, success: boolean) => {
    trackEvent("form_submit", {
      form_name: formName,
      success: success,
      event_category: "form",
      event_label: `form_submit_${formName}`,
    })
  },

  // Eventos de error - MANTENIDO (importantes para debugging)
  error: (errorType: string, errorMessage: string, location: string) => {
    trackEvent("error", {
      error_type: errorType,
      error_message: errorMessage,
      error_location: location,
      event_category: "error",
      event_label: `error_${errorType}`,
    })
  },
}

// Hook para tracking de tiempo en página - SIMPLIFICADO
export const usePageTracking = (pageName: string) => {
  if (typeof window !== "undefined") {
    // Solo track page view, eliminamos time tracking
    analytics.pageView(pageName)
  }
}
