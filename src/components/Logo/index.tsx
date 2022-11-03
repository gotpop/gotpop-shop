import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <h1>CSS 2023</h1>
    </Link>
  )
}
