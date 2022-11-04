import * as React from 'react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ILinkIcon } from 'types'
import styles from './LinkIcon.module.css'
import { AiOutlineLink } from 'react-icons/ai'

export default function LinkIcon({
  content = 'Visit',
  properties,
  icon: Icon,
  href
}: ILinkIcon) {
  const first = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      first.current.style.setProperty(prop.local, prop.global)
    })
  }, [])

  return (
    <Link href={href} className={styles.link} ref={first}>
      <span>{content}</span>
      {Icon ? <Icon /> : <AiOutlineLink />}
    </Link>
  )
}
