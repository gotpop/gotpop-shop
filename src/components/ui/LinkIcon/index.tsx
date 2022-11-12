import { useEffect, useRef } from 'react'

import { AiOutlineLink } from 'react-icons/ai'
import { ILinkIcon } from '@types'
import Link from 'next/link'
import styles from './LinkIcon.module.css'

const LinkIcon = ({ content, properties, icon: Icon, href }: ILinkIcon) => {
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

LinkIcon.defaultProps = {
  content: 'Visit'
}

export default LinkIcon
