import * as React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

import { AiFillHome } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { GoZap } from 'react-icons/go'
import { TfiGithub } from 'react-icons/tfi'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/cards">
        <span>Cards</span>
        <BsPeopleFill />
      </Link>
      <a href="http://localhost:3000">
        <span>LocalHost</span>
        <AiFillHome />
      </a>
      <a href="https://github.com/gotpop/gotpop-starter">
        <span>GitHub</span>
        <TfiGithub />
      </a>
      <a href="https://gotpop-starter.vercel.app">
        <span>Live</span>
        <GoZap />
      </a>
    </nav>
  )
}
