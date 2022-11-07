import { useReducer, useState } from 'react'
import InputText from '@components/InputText'
import ButtonIcon from '@components/ButtonIcon'
import { BsCheckLg } from 'react-icons/bs'
import styles from './Form2.module.css'
import { cssSuccess, formInitialState } from './state'
import { reducer } from './reducer'

const Form2 = () => {
  const [showResults, setShowResults] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues

  const reducerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const valid = e.target.checkValidity()
    const error = formInitialState[name].error

    dispatchFormValue({
      [name]: {
        value,
        valid,
        error
      }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const JSONdata = JSON.stringify(inputValues)
    const endpoint = '/api/forms/form'

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
      <>
        <form
          onSubmit={handleSubmit}
          onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
            setFormIsValid(e.currentTarget.checkValidity())
          }>
          <InputText
            name={'firstName'}
            value={firstName.value}
            error={firstName.error}
            valid={firstName.valid}
            required
            type="text"
            pattern="[A-Za-z]{4,8}"
            handleChange={reducerInputChange}>
            First Name
          </InputText>
          <InputText
            type="text"
            name={'lastName'}
            value={lastName.value}
            error={lastName.error}
            valid={lastName.valid}
            pattern="[A-Za-z]{4,8}"
            handleChange={reducerInputChange}>
            Last Name
          </InputText>
          <InputText
            type="email"
            name={'email'}
            value={email.value}
            error={email.error}
            valid={email.valid}
            handleChange={reducerInputChange}>
            Email
          </InputText>
          <InputText
            type="password"
            name={'password'}
            value={password.value}
            error={password.error}
            valid={password.valid}
            pattern="[A-Za-z]{4,8}"
            handleChange={reducerInputChange}>
            Password
          </InputText>
          <ButtonIcon
            content={'Submit'}
            properties={cssSuccess}
            icon={BsCheckLg}
          />
        </form>
      </>
  )
}

export default Form2
