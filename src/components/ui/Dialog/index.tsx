import { CSSProperties, ReactNode, useEffect, useRef } from 'react'

import ButtonIcon from '@ui/ButtonIcon'
import { ImCross } from 'react-icons/im'
import styles from './Dialog.module.css'

type Props = {
  children: ReactNode
  handleClose: () => void
}

const Dialog = ({ children, handleClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (dialog === null ) return
    
    dialog.showModal()

    return () => dialog.close()
  }, [])

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.inner}>
        {children}
        <form method="dialog" className={styles.buttons}>
          <ButtonIcon
            text={'Close'}
            handleClick={handleClose}
            icon={ImCross}
            vars={{ ['--icon-colour']: 'var(--error)' } as CSSProperties}
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
