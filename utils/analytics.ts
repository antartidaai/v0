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

// Eventos específicos del negocio
export const analytics = {
  // Eventos de CTA principales
  ctaClick: (buttonText: string, location: string, destination?: string) => {
    // Tracking disabled
  },

  // Eventos de demo y vendedores
  demoStart: () => {
    // Tracking disabled
  },

  vendedorSelect: (vendedorName: string, vendedorId: number, isLocked: boolean) => {
    // Tracking disabled
  },

  // Eventos de conversión
  purchaseClick: (price: string, location: string) => {
    // Tracking disabled
  },

  offerView: (timeRemaining: string) => {
    // Tracking disabled
  },

  // Eventos de navegación
  pageView: (pageName: string) => {
    // Tracking disabled
  },

  // Eventos de engagement
  videoPlay: (videoTitle: string, location: string) => {
    // Tracking disabled
  },

  // Eventos de notificaciones
  notificationView: (notificationType: "purchase" | "urgency", cuposRestantes?: number) => {
    // Tracking disabled
  },

  // Eventos de tiempo en página
  timeOnPage: (pageName: string, timeSpent: number) => {
    // Tracking disabled
  },

  // Eventos de formularios
  formStart: (formName: string) => {
    // Tracking disabled
  },

  formSubmit: (formName: string, success: boolean) => {
    // Tracking disabled
  },

  // Eventos de error
  error: (errorType: string, errorMessage: string, location: string) => {
    // Tracking disabled
  },
}

// Hook para tracking de tiempo en página
export const usePageTracking = (pageName: string) => {
  // Tracking disabled
}
