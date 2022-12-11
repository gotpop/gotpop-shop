import { useEffect, useRef } from 'react'

import styles from './TriggerIcon.module.css'
import stylesSpan from './Span.module.css'

type Menu = {
  open: boolean | null
}

type Props = {
  menuState: Menu
}

export default function TriggerIcon({ menuState }: Props) {
  const triggerRef = useRef<HTMLElement>(null)
  const { open } = menuState

  useEffect(() => {
    const trigger = triggerRef.current

    if (trigger === null) return

    open
      ? trigger.setAttribute('open', 'true')
      : trigger.setAttribute('open', 'false')
  }, [menuState, open])

  return (
    <span className={styles.icon} ref={triggerRef}>
      <span className={stylesSpan.top} data-test="top"></span>
      <span className={stylesSpan.middle}></span>
      <span className={stylesSpan.bottom}></span>
    </span>
  )
}
