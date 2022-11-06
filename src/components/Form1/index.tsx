import ButtonIcon from '@components/ButtonIcon'
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
      <div>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
      </div>
      <div>
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
      </div>
      {/* <button type="submit">Submit</button> */}
      <ButtonIcon content={'Submit'} properties={cssSuccess} icon={BsCheckLg} />
    </form>
  )
}
