import * as React from 'react'
import { useEffect, useRef } from 'react'
import { IButtonIcon } from 'types'
import styles from './ButtonIcon.module.css'

export default function ButtonIcon({
  content = 'Click',
  doClick,
  icon: Icon,
  properties,
  ...rest
}: IButtonIcon) {
  const first = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      first.current.style.setProperty(prop.local, prop.global)
    })
  }, [])

  return (
    <button
      className={styles.button}
      onClick={doClick}
      ref={first}
      type="submit"
      {...rest}>
      <span>{content}</span>
      <Icon />
    </button>
  )
}
