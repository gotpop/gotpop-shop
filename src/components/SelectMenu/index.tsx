import * as React from 'react'
import { useEffect, useRef } from 'react'
import { BsLayoutThreeColumns } from 'react-icons/bs'
import styles from './SelectMenu.module.css'

export default function SelectMenu({ customProp }) {
  const selectMenu = useRef(null)
  const cb = e =>
    document.documentElement.style.setProperty(customProp, e.target.value)

  useEffect(() => {
    selectMenu.current.addEventListener('change', cb)

    return () => selectMenu.current.removeEventListener('change', cb)
  }, [])

  return (
    <div>
      <selectmenu ref={selectMenu} className={styles.menu}>
        <option value="1">
          <span>1 Column</span>
          <BsLayoutThreeColumns />
        </option>
        <option value="2">
          <span>2 Columns</span>
          <BsLayoutThreeColumns />
        </option>
        <option value="3">
          <span>3 Columns</span>
          <BsLayoutThreeColumns />
        </option>
      </selectmenu>
    </div>
  )
}
