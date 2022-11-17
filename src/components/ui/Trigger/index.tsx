import ColumnContext from '@context/MenuContext'
import TriggerIcon from '@ui/TriggerIcon'
import { set } from '@utils/setPropsOnRoot'
import styles from './Trigger.module.css'
import { useContext } from 'react'

const Trigger = ({ vars }) => {
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
    <button onClick={handleClick} className={styles.trigger} style={vars}>
      <TriggerIcon menuState={menu} />
      {!menu.open && <span>Open menu</span>}
      {menu.open && <span>Close menu</span>}
    </button>
  )
}

Trigger.defaultProps = {
  vars: null
}

export default Trigger
