import { useEffect, useState } from "react"

export const useScrollBarWidth = () => {
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const getScrollBarWidth = () => {
    let root = document.documentElement
    const width = window.innerWidth - root.clientWidth

    root.style.setProperty('--scrollbar-width', `${width}px`)
    setScrollBarWidth(width)
  }

  useEffect(() => {
    getScrollBarWidth()
  }, [])
  
  return {
    scrollBarWidth
  }
}
