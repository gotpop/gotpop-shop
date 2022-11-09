import { GiSpiralLollipop } from 'react-icons/gi'
import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <h1>
        <GiSpiralLollipop />
        <span>Starter</span>
      </h1>
    </Link>
  )
}
