import { useEffect, useRef } from 'react'

import ButtonIcon from '@ui/ButtonIcon'
import { ImCross } from 'react-icons/im'
import styles from './Dialog.module.css'

export default function Dialog({ children, handleClose }) {
  const dialog = useRef(null)
  const cssError = [{ local: '--iconColour', global: 'var(--error)' }]

  useEffect(() => {
    dialog.current.showModal()
  }, [])

  return (
    <dialog ref={dialog} className={styles.dialog}>
      <div className={styles.inner}>
        {children}
        <form method="dialog" className={styles.buttons}>
          <ButtonIcon
            content={'Close'}
            doClick={handleClose}
            icon={ImCross}
            properties={cssError}
          />
        </form>
      </div>
    </dialog>
  )
}
