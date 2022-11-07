import ButtonIcon from '@components/ButtonIcon'
import InputText from '@components/InputText'
import { BsCheckLg } from 'react-icons/bs'
import styles from './Form1.module.css'

const cssSuccess = [
  { local: '--iconColour', global: 'var(--success)' }
]

export default function Form2() {
  const handleSubmit = async event => {
    event.preventDefault()

    const data = {
      first: event.target.first.value,
      last: event.target.last.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/form'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputText name={'first'}>First Name</InputText>
      <InputText name={'last'}>Last Name</InputText>
      <ButtonIcon content={'Submit'} properties={cssSuccess} icon={BsCheckLg} />
    </form>
  )
}
