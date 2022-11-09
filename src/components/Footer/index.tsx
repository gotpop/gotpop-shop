import { AiFillHome } from 'react-icons/ai'
import { GoZap } from 'react-icons/go'
import Nav from '@components/Nav'
import { TfiGithub } from 'react-icons/tfi'
import { navSecondary } from '@content/nav-secondary'
import styles from './Footer.module.css'

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
