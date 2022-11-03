import * as React from 'react'
import { useEffect, useRef } from 'react'
import ButtonIcon from '@components/ButtonIcon'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

import styles from './Dialog.module.css'
import stylesSupported from './Supported.module.css'
import { dialogContent } from './dialog.content'

export default function Dialog() {
  const dialog = useRef(null)
  const { title, text, pre, supported } = dialogContent
  const dontShowAgain = () => localStorage.setItem('dontShowAgain', 'true')
  const cssSuccess = [{ local: '--iconColour', global: 'var(--success)' }]
  const cssError = [{ local: '--iconColour', global: 'var(--error)' }]

  useEffect(() => {
    const dialogDisplay = localStorage.getItem('dontShowAgain')

    if (dialogDisplay === null) dialog.current.showModal()
  }, [])

  return (
    <dialog ref={dialog} className={styles.dialog}>
      <div className={styles.inner}>
        <h4>{title}</h4>
        <p>{text}</p>
        <pre>{pre}</pre>
        <p className={stylesSupported.colourV1}>
          <span>{supported}</span>
          <AiOutlineCheckCircle />
        </p>
        <form method="dialog" className={styles.buttons}>
          <ButtonIcon
            content={'I understand'}
            properties={cssSuccess}
            icon={BsCheckLg}
          />
          <ButtonIcon
            doClick={dontShowAgain}
            content={'Dont show again'}
            properties={cssError}
            icon={ImCross}
          />
        </form>
      </div>
    </dialog>
  )
}
