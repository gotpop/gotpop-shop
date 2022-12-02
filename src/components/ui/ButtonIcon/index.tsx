import { CSSProperties, MouseEvent, ReactElement } from 'react'

import styles from './ButtonIcon.module.css'

type ButtonIconProps = {
  text?: string
  icon?: any
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void
  vars?: CSSProperties
  disabled?: boolean
}

const ButtonIcon = ({
  text,
  handleClick,
  icon,
  vars,
  ...rest
}: ButtonIconProps) => {
  const ButtonIcon = icon

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      style={vars}
      {...rest}
    >
      <>
        {text ? <span>{text}</span> : null}
        {ButtonIcon}
      </>
    </button>
  )
}

export default ButtonIcon
