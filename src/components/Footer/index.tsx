import Nav from '@components/Nav'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav />
      <small>
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </small>
    </footer>
  )
}
