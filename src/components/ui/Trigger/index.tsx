import { CSSProperties, Dispatch, SetStateAction, useContext } from 'react'

import MenuContext from '@context/MenuContext'
import TriggerIcon from '@ui/TriggerIcon'
import { set } from 'utilities/setPropsOnRoot'
import styles from './Trigger.module.css'

type Props = {
  vars: CSSProperties | undefined
}

type Menu = {
  open: boolean | null
}

type MenuContextType = {
  menu: Menu
  setMenu: Dispatch<SetStateAction<Menu | null>>
}

const Trigger = ({ vars }: Props) => {
  const { menu, setMenu } = useContext(MenuContext) as MenuContextType

  const handleClick = () => {
    setMenu(prevState => {
      const newState = !prevState?.open

      newState
        ? set('--menu-state', 'var(--menu-open)')
        : set('--menu-state', 'var(--menu-closed)')

      return { open: newState }
    })
  }

  return (
    <button onClick={handleClick} className={styles.trigger} style={vars}>
      <TriggerIcon menuState={menu} />
      {!menu.open && <span>Open menu</span>}
      {menu.open && <span>Close menu</span>}
    </button>
  )
}

Trigger.defaultProps = {
  vars: undefined
}

export default Trigger
