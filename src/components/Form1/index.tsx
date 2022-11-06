import ButtonIcon from '@components/ButtonIcon'
import InputText from '@components/InputText'
import { BsCheckLg } from 'react-icons/bs'
const cssSuccess = [
  { local: '--iconColour', global: 'var(--success)' },
  { local: 'type', global: 'submit' }
]
const cssError = [{ local: '--iconColour', global: 'var(--error)' }]

export default function Form1() {
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
    <form onSubmit={handleSubmit}>
      <InputText name={'first'}>First Name</InputText>
      <InputText name={'last'}>Last Name</InputText>
      <ButtonIcon content={'Submit'} properties={cssSuccess} icon={BsCheckLg} />
    </form>
  )
}
