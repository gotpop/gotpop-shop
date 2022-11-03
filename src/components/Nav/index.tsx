import * as React from 'react'
import { TfiGithub } from 'react-icons/tfi'
import { GoZap } from 'react-icons/go'
import { AiFillHome } from 'react-icons/ai'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="http://localhost:3000">
        <span>LocalHost</span>
        <AiFillHome />
      </a>
      <a href="https://github.com/gotpop/ui-system">
        <span>GitHub</span>
        <TfiGithub />
      </a>
      <a href="https://ui-system-gold.vercel.app/">
        <span>Live</span>
        <GoZap />
      </a>
    </nav>
  )
}
