import { useEffect, useRef } from 'react'

import { AiOutlineLink } from 'react-icons/ai'
import { ILinkInternal } from '@types'
import Link from 'next/link'
import styles from './LinkIcon.module.css'

const LinkInternal = ({
  children,
  properties,
  icon: Icon,
  href
}: ILinkInternal) => {
  const first = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      first.current.style.setProperty(prop.local, prop.global)
    })
  }, [properties])

  return (
    <a href={href} className={styles.link} ref={first}>
      <span>{children}</span>
      {Icon ? <Icon /> : null}
    </a>
  )
}

LinkInternal.defaultProps = {
  properties: null,
  icon: null
}

export default LinkInternal
