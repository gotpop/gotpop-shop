import { useEffect, useRef } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { GoZap } from 'react-icons/go'
import Nav from '@ui/Nav'
import { TfiGithub } from 'react-icons/tfi'
import { navSecondary } from 'data/nav-secondary'
import styles from './Footer.module.css'

const icons = new Map([
  [1, AiFillHome],
  [2, TfiGithub],
  [3, GoZap]
])

const Footer = ({ properties }) => {
  const footerRef = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      footerRef.current?.style.setProperty(prop.var, prop.value)
    })
  }, [properties])

  return (
    <footer className={styles.footer} ref={footerRef}>
      <Nav navItems={navSecondary} iconsMap={icons} />
      <small>
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </small>
    </footer>
  )
}

Footer.defaultProps = {
  properties: null
}

export default Footer
