import * as React from 'react'

import { useEffect, useRef } from 'react'

import { AiOutlineLink } from 'react-icons/ai'
import { ILinkIcon } from 'types'
import Link from 'next/link'
import styles from './LinkIcon.module.css'

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
