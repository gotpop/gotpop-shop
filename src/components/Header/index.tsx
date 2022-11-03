import * as React from 'react'
import styles from './Header.module.css'
import Nav from '@components/Nav'
import Logo from '@components/Logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
