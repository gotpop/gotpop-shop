import Nav from '@components/Nav'
import styles from './Footer.module.css'
import { navSecondary } from '@content/nav-secondary'
import { AiFillHome } from 'react-icons/ai'
import { GoZap } from 'react-icons/go'
import { TfiGithub } from 'react-icons/tfi'

const icons = new Map([
  [1, AiFillHome],
  [2, TfiGithub],
  [3, GoZap]
])

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav navItems={navSecondary} iconsMap={icons} />
      <small>
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </small>
    </footer>
  )
}
