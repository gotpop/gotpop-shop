import { CSSProperties, ReactElement } from 'react'

import styles from './Grid.module.css'

type props = {
  children: ReactElement
  vars?: CSSProperties
}

export default function Grid({ children, vars }: props) {
  return (
    <div className={styles.grid} style={vars}>
      {children}
    </div>
  )
}
