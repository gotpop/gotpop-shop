import { CSSProperties, ReactElement } from 'react'

import styles from './Drawer.module.css'

type props = {
  children: ReactElement
  isOpen: boolean
}

export function Drawer({ children, isOpen }: props) {
  const state = (isOpen: boolean) => (isOpen ? 'open' : 'closed')

  const drawerState = (isOpen: boolean) =>
    ({
      ['--local-drawer-state']: `var(--local-drawer-${state(isOpen)})`
    } as CSSProperties)

  return (
    <>
      {isOpen && <div className={styles.wrap}></div>}
      <div className={styles.drawer} style={drawerState(isOpen)}>
        {children}
      </div>
    </>
  )
}
