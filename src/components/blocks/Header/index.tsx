import { AiOutlineForm, AiOutlineHome } from 'react-icons/ai'
import { useEffect, useRef } from 'react'

import { CgCardSpades } from 'react-icons/cg'
import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import { navPrimary } from 'data/nav-primary'
import styles from './Header.module.css'

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, AiOutlineHome]
])

const Header = ({ properties }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      headerRef.current?.style.setProperty(prop.var, prop.value)
    })
  }, [properties])

  return (
    <header className={styles.header} ref={headerRef}>
      <Logo />
      <Nav navItems={navPrimary} iconsMap={icons} />
    </header>
  )
}

Header.defaultProps = {
  properties: null
}

export default Header
