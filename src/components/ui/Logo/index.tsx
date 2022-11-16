import { GiSpiralLollipop } from 'react-icons/gi'
import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = ({ vars }) => {
  return (
    <Link className={styles.logo} href="/">
      <h1>
        <GiSpiralLollipop />
        <span>Starter</span>
      </h1>
    </Link>
  )
}

Logo.defaultProps = {
  vars: null
}

export default Logo
