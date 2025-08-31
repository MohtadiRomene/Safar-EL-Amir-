import * as React from "react"
import { useClient } from "./use-client"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const isClient = useClient()

  React.useEffect(() => {
    if (!isClient) return
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value
    checkMobile()
    
    // Add event listeners
    mql.addEventListener("change", checkMobile)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      mql.removeEventListener("change", checkMobile)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isClient])

  // Return false during SSR to avoid hydration mismatch
  return isClient ? isMobile : false
}
