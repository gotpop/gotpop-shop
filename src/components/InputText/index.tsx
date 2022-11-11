import { IInputText } from 'types'
import styles from './InputText.module.css'

const InputText = ({
  error,
  handleChange,
  label,
  name,
  valid,
  value,
  ...rest
}: IInputText) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
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

InputText.defaultProps = {
  error: null,
  valid: null,
  value: ''
}

export default InputText
