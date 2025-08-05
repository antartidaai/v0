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

// Eventos específicos del negocio
export const analytics = {
  // Eventos de CTA principales
  ctaClick: (buttonText: string, location: string, destination?: string) => {
    trackEvent("cta_click", {
      button_text: buttonText,
      click_location: location,
      destination_url: destination,
      event_category: "engagement",
      event_label: `${location}_${buttonText}`,
    })
  },

  // Eventos de demo y vendedores
  demoStart: () => {
    trackEvent("demo_start", {
      event_category: "demo",
      event_label: "demo_page_loaded",
    })
  },

  vendedorSelect: (vendedorName: string, vendedorId: number, isLocked: boolean) => {
    trackEvent("vendedor_select", {
      vendedor_name: vendedorName,
      vendedor_id: vendedorId,
      is_premium: isLocked,
      event_category: "demo",
      event_label: `vendedor_${vendedorName.toLowerCase().replace(" ", "_")}`,
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

  chatMessage: (vendedorName: string, messageCount: number, sender: "user" | "ai") => {
    trackEvent("chat_message", {
      vendedor_name: vendedorName,
      message_count: messageCount,
      sender: sender,
      event_category: "engagement",
      event_label: `message_${sender}`,
    })
  },

  // Eventos de conversión
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

  offerView: (timeRemaining: string) => {
    trackEvent("offer_view", {
      time_remaining: timeRemaining,
      event_category: "conversion",
      event_label: "offer_page_view",
    })
  },

  // Eventos de navegación
  pageView: (pageName: string) => {
    trackEvent("page_view", {
      page_name: pageName,
      event_category: "navigation",
      event_label: pageName,
    })
  },

  sectionView: (sectionName: string) => {
    trackEvent("section_view", {
      section_name: sectionName,
      event_category: "engagement",
      event_label: `section_${sectionName}`,
    })
  },

  // Eventos de engagement
  videoPlay: (videoTitle: string, location: string) => {
    trackEvent("video_play", {
      video_title: videoTitle,
      video_location: location,
      event_category: "engagement",
      event_label: `video_${location}`,
    })
  },

  testimonialView: (testimonialIndex: number, testimonialName: string) => {
    trackEvent("testimonial_view", {
      testimonial_index: testimonialIndex,
      testimonial_name: testimonialName,
      event_category: "engagement",
      event_label: `testimonial_${testimonialIndex}`,
    })
  },

  // Eventos de notificaciones
  notificationView: (notificationType: "purchase" | "urgency", cuposRestantes?: number) => {
    trackEvent("notification_view", {
      notification_type: notificationType,
      cupos_restantes: cuposRestantes,
      event_category: "social_proof",
      event_label: `notification_${notificationType}`,
    })
  },

  // Eventos de tiempo en página
  timeOnPage: (pageName: string, timeSpent: number) => {
    trackEvent("time_on_page", {
      page_name: pageName,
      time_spent_seconds: timeSpent,
      event_category: "engagement",
      event_label: `time_${pageName}`,
      value: timeSpent,
    })
  },

  // Eventos de scroll
  scrollDepth: (percentage: number, pageName: string) => {
    trackEvent("scroll_depth", {
      scroll_percentage: percentage,
      page_name: pageName,
      event_category: "engagement",
      event_label: `scroll_${percentage}`,
      value: percentage,
    })
  },

  // Eventos de formularios
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

  // Eventos de error
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

// Hook para tracking de tiempo en página
export const usePageTracking = (pageName: string) => {
  if (typeof window !== "undefined") {
    const startTime = Date.now()

    // Track page view
    analytics.pageView(pageName)

    // Track time on page when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      analytics.timeOnPage(pageName, timeSpent)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }
}

// Hook para tracking de scroll
export const useScrollTracking = (pageName: string) => {
  if (typeof window !== "undefined") {
    let maxScroll = 0
    const scrollThresholds = [25, 50, 75, 90, 100]
    const triggeredThresholds = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        // Trigger events for scroll thresholds
        scrollThresholds.forEach((threshold) => {
          if (scrollPercent >= threshold && !triggeredThresholds.has(threshold)) {
            triggeredThresholds.add(threshold)
            analytics.scrollDepth(threshold, pageName)
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }
}
