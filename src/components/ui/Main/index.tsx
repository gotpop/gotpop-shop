import GridAuto from '../GridAuto'
import GridWrap from '../GridWrap'
import { ReactElement } from 'react'
import styles from './Main.module.css'

type Props = {
  children: ReactElement
  fullWidth: boolean
}

const Main = ({ children, fullWidth }: Props) => {
  return (
    <main className={styles.main}>
      {fullWidth ? (
        children
      ) : (
        <GridWrap>
          <GridAuto>{children}</GridAuto>
        </GridWrap>
      )}
    </main>
  )
}

Main.defaultProps = {
  fullWidth: true
}

export default Main
