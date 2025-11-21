// Utilidades para Google Tag Manager y Analytics
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Función para enviar eventos a GTM
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // Tracking disabled
}

// Eventos específicos del negocio - ULTRA OPTIMIZADOS
export const analytics = {
  // Eventos de CTA principales - MANTENIDO (crítico para conversión)
  ctaClick: (buttonText: string, location: string, destination?: string) => {
    // Tracking disabled
  },

  // Eventos de conversión - MANTENIDO (crítico)
  purchaseClick: (price: string, location: string) => {
    // Tracking disabled
  },

  // Eventos de navegación - MANTENIDO (crítico)
  pageView: (pageName: string) => {
    // Tracking disabled
  },

  // Eventos de formularios - MANTENIDO (importantes para conversión)
  formStart: (formName: string) => {
    // Tracking disabled
  },

  formSubmit: (formName: string, success: boolean) => {
    // Tracking disabled
  },

  // Eventos de error - MANTENIDO (importantes para debugging)
  error: (errorType: string, errorMessage: string, location: string) => {
    // Tracking disabled
  },

  // Eventos de chat - MANTENIDO (crítico para conversación)
  chatStart: (vendedorName: string, vendedorId: number) => {
    // Tracking disabled
  },
}

// Hook para tracking de tiempo en página - SIMPLIFICADO
export const usePageTracking = (pageName: string) => {
  // Tracking disabled
}
