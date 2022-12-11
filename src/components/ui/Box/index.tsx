import { ReactNode } from 'react'
import styles from './Box.module.css'

type Props = {
  children: ReactNode
}

export default function Box({ children }: Props) {
  return <div className={styles.box}>{children}</div>
}
