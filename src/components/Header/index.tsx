import * as React from 'react'
import styles from './Header.module.css'
import Nav from '@components/Nav'
import Logo from '@components/Logo'
import { navPrimary } from '@content/nav-primary'
import { BsPeopleFill } from 'react-icons/bs'

const icons = new Map([
  [1, BsPeopleFill]
]);

export default function Header() { 
  return (
    <header className={styles.header}>
      <Logo />
      <Nav navItems={navPrimary} iconsMap={icons} />
    </header>
  )
}

