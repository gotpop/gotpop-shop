import * as React from 'react'
import { useContext, useRef } from 'react'
import styles from './Trigger.module.css'
import ColumnContext from '@context/MenuContext'
import { set } from '@utils/setPropsOnRoot'
import TriggerIcon from '@components/TriggerIcon'

export default function Trigger() {
  const trigger = useRef(null)
  const { menu, setMenu } = useContext(ColumnContext)

  const handleClick = () => {
    setMenu(prevState => {
      const newState = !prevState.open

      newState
        ? set('--menu-state', 'var(--menu-open)')
        : set('--menu-state', 'var(--menu-closed)')

      return { open: newState }
    })
  }

  return (
    <button onClick={handleClick} className={styles.trigger} ref={trigger}>
      <TriggerIcon menuState={menu} />
      {!menu.open && <span>Open menu</span>}
      {menu.open && <span>Close menu</span>}
    </button>
  )
}
