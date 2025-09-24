// Utilidades para Google Tag Manager y Analytics - COMPLETAMENTE DESHABILITADO

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Función para enviar eventos a GTM - DESHABILITADA
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // Función completamente deshabilitada - no envía datos
  return
}

// Eventos específicos del negocio - COMPLETAMENTE DESHABILITADOS
export const analytics = {
  // Todas las funciones mantienen su firma pero no hacen nada
  ctaClick: (buttonText: string, location: string, destination?: string) => {
    // Función deshabilitada - no envía datos
    return
  },

  purchaseClick: (price: string, location: string) => {
    // Función deshabilitada - no envía datos
    return
  },

  formStart: (formName: string) => {
    // Función deshabilitada - no envía datos
    return
  },

  formSubmit: (formName: string, success: boolean) => {
    // Función deshabilitada - no envía datos
    return
  },

  error: (errorType: string, errorMessage: string, location: string) => {
    // Función deshabilitada - no envía datos
    return
  },

  chatStart: (vendedorName: string, vendedorId: number) => {
    // Función deshabilitada - no envía datos
    return
  },
}

// Hook para tracking de tiempo en página - DESHABILITADO
export const usePageTracking = (pageName: string) => {
  // Hook completamente deshabilitado - no hace tracking
  return
}
