import { useEffect, useRef } from 'react'

import styles from './TriggerIcon.module.css'
import stylesSpan from './Span.module.css'

export default function TriggerIcon({ menuState }) {
  const trigger = useRef(null)
  const { open } = menuState

  useEffect(() => {
    open
      ? trigger.current.setAttribute('open', true)
      : trigger.current.setAttribute('open', false)
  }, [menuState, open])

  return (
    <span className={styles.icon} ref={trigger}>
      <span className={stylesSpan.top}></span>
      <span className={stylesSpan.middle}></span>
      <span className={stylesSpan.bottom}></span>
    </span>
  )
}
