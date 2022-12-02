import { GiSpiralLollipop } from 'react-icons/gi'
import Link from 'next/link'
import MenuContext from '@context/MenuContext'
import { set } from '@utilities/setPropsOnRoot'
import styles from './Logo.module.css'
import { useContext } from 'react'

type Props = {
  vars: object
}

const Logo = ({ vars }: Props) => {
  const { setMenu } = useContext(MenuContext)

  const handleClick = () => {
    setMenu((prevState: { open: boolean }) => {
      set('--menu-state', 'var(--menu-closed)')

      return { open: false }
    })
  }

  return (
    <Link className={styles.logo} href="/" onClick={handleClick}>
      <h1 id="logo">
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
