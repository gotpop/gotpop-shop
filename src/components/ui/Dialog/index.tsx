import { useEffect, useRef } from 'react'

import ButtonIcon from '@ui/ButtonIcon'
import { ImCross } from 'react-icons/im'
import styles from './Dialog.module.css'

const Dialog = ({ children, handleClose }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current

    dialog.showModal()

    return () => dialog.close()
  }, [])

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.inner}>
        {children}
        <form method="dialog" className={styles.buttons}>
          <ButtonIcon
            content={'Close'}
            doClick={handleClose}
            icon={ImCross}
            vars={{ ['--iconColour']: 'var(--error)' }}
          />
        </form>
      </div>
    </dialog>
  )
}

Dialog.defaultProps = {
  handleClose: null
}

export default Dialog
