export function isTouch(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false
  }

  // modern method: check if 'ontouchstart' is present in the window
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    return true
  }

  // some older browsers (e.g. IE) use msMaxTouchPoints
  // @ts-expect-error - navigator.msMaxTouchPoints is not defined in the type definitions
  if (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0) {
    return true
  }

  return false
}
