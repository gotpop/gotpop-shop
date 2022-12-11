import { useEffect } from "react"

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    return () => window.scrollTo(0, 0)
  }, [])
}
