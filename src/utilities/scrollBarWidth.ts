export const getScrollBarWidth = () => {
  let root = document.documentElement
  const width = window.innerWidth - root.clientWidth

  root.style.setProperty('--scrollbar-width', `${width}px`)
}
