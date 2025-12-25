declare global {
  interface Window {
    gtag?: (
      command: "config" | "set" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, any>,
    ) => void
    dataLayer?: any[]
  }
}

export const gtag = (
  command: "config" | "set" | "event" | "js",
  targetId: string | Date,
  config?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(command, targetId, config)
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  if (typeof window === "undefined") return

  gtag("event", eventName, eventParams)
}

export const trackPageView = (url: string, title?: string) => {
  if (typeof window === "undefined") return

  gtag("event", "page_view", {
    page_path: url,
    page_title: title || document.title,
  })
}

export const initGA = (measurementId: string) => {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer!.push(arguments)
  }
  if (process.env.NODE_ENV === "development") {
    window.dataLayer!.push({ debug_mode: true })
  }

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  gtag("js", new Date())
  gtag("config", measurementId, {
    page_path: window.location.pathname,
    send_page_view: false,
  })
}
