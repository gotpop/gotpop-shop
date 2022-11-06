import styles from './InputText.module.css'

export default function InputText({ children, name }) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{children}</label>
      <input type="text" id={name} name={name} required />
    </div>
  )
}

