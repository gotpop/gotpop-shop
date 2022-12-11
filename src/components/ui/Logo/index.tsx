import { CSSProperties } from 'react'
import { GiSpiralLollipop } from 'react-icons/gi'
import Link from 'next/link'
import styles from './Logo.module.css'
import { useCloseMenu } from '@hooks/useCloseMenu'

type Props = {
  vars: CSSProperties
}

const Logo = ({ vars }: Props) => {
  const { handleCloseMenu } = useCloseMenu()

  return (
    <Link className={styles.logo} href="/" onClick={handleCloseMenu}>
      <h1 id="logo">
        <GiSpiralLollipop />
        <span>Starter</span>
      </h1>
    </Link>
  )
}

Logo.defaultProps = {
  vars: undefined
}

export default Logo
