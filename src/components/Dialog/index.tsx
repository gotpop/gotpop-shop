import * as React from 'react'
import { useEffect, useRef } from 'react'
import ButtonIcon from '@components/ButtonIcon'
import { ImCross } from 'react-icons/im'
import styles from './Dialog.module.css'

export default function Dialog({ content }) {
  const dialog = useRef(null)
  const cssError = [{ local: '--iconColour', global: 'var(--error)' }]

  useEffect(() => {
    dialog.current.showModal()
  })

  return (
    <dialog ref={dialog} className={styles.dialog}>
      <div className={styles.inner}>
        <h4>Http Response</h4>
        <p>
          <span>First name: </span>
          <span>{content.firstName}</span>
        </p>
        <p>
          <span>Last name: </span>
          <span>{content.lastName}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{content.email}</span>
        </p>
        <p>
          <span>Password: </span>
          <span>{content.password}</span>
        </p>

        <form method="dialog" className={styles.buttons}>
          <ButtonIcon content={'Close'} properties={cssError} icon={ImCross} />
        </form>
      </div>
    </dialog>
  )
}
