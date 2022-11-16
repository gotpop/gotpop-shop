import { IButtonIcon } from '@types'
import styles from './ButtonIcon.module.css'

const ButtonIcon = ({
  content,
  doClick,
  icon: Icon,
  vars,
  ...rest
}: IButtonIcon) => {
  return (
    <button
      className={styles.button}
      onClick={doClick}
      style={vars}
      type="submit"
      {...rest}
    >
      <span>{content}</span>
      <Icon />
    </button>
  )
}

ButtonIcon.defaultProps = {
  content: 'Click',
  vars: null
}

export default ButtonIcon
