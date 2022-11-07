import styles from './InputText.module.css'

export default function InputText({
  children,
  doChange,
  error,
  name,
  valid,
  value,
  ...rest
}) {
  console.log('valid :', valid)

  return (
    <div className={styles.input}>
      <label htmlFor={name}>{children}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={doChange}
        {...rest}
      />
      {!valid ? <span className={styles.message}>{error}</span> : null}
    </div>
  )
}
