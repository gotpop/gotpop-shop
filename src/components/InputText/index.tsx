import { IInputText } from 'types'
import styles from './InputText.module.css'

export default function InputText({
  children,
  handleChange,
  error = null,
  name,
  valid = null,
  value = '',
  ...rest
}: IInputText) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{children}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {!valid ? <span className={styles.message}>{error}</span> : null}
    </div>
  )
}
