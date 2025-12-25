"use client"

import { useCallback } from "react"
import { trackEvent, trackPageView } from "@/utils/analytics"

export const useAnalytics = () => {
  const track = useCallback(
    (eventName: string, eventParams?: Record<string, any>) => {
      trackEvent(eventName, eventParams)
    },
    [],
  )

  const trackPage = useCallback((url: string, title?: string) => {
    trackPageView(url, title)
  }, [])

  return {
    track,
    trackPage,
  }
}
