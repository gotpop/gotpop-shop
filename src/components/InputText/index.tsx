import { ChangeEventHandler } from 'react';
import styles from './InputText.module.css'

interface Props {
  children? : string;
  doChange?: any;
  error? : string;
  name? : string;
  valid? : string;
  value? : string;
  required? : string;
}

export default function InputText({
  children,
  doChange,
  error,
  name,
  valid,
  value,
  ...rest
}: any) {
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
