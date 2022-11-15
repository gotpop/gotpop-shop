import { useEffect, useRef } from 'react'

import { GiSpiralLollipop } from 'react-icons/gi'
import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = ({ properties }) => {
  const h1Ref = useRef(null)

  useEffect(() => {
    properties?.forEach(prop => {
      h1Ref.current?.style.setProperty(prop.var, prop.value)
    })
  }, [properties])

  return (
    <Link className={styles.logo} href="/">
      <h1 ref={h1Ref}>
        <GiSpiralLollipop />
        <span>Starter</span>
      </h1>
    </Link>
  )
}

Logo.defaultProps = {
  properties: null
}

export default Logo
