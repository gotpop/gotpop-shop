import { useReducer, useState } from 'react'
import InputText from '@components/InputText'
import ButtonIcon from '@components/ButtonIcon'
import { BsCheckLg } from 'react-icons/bs'
import styles from './Form2.module.css'
import { cssSuccess, formInitialState } from './state'
import { reducer } from './reducer'
import Box from '@components/Box'
import Dialog from '@components/Dialog'
import LoadingIcon from '@components/LoadingIcon'

interface IData {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
}

const Form2 = () => {
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<IData>({})
  const [formIsValid, setFormIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues
  const handleClose = () => setShowResults(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

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

    setResults(result)
    setLoading(false)
    setShowResults(true)
  }

  return (
    <Box>
      {showResults ? (
        <Dialog handleClose={handleClose}>
          <h4>Http2 Response</h4>
          <p>
            <span>First name: </span>
            <span>{results.firstName}</span>
          </p>
          <p>
            <span>Last name: </span>
            <span>{results.lastName}</span>
          </p>
          <p>
            <span>Email: </span>
            <span>{results.email}</span>
          </p>
          <p>
            <span>Password: </span>
            <span>{results.password}</span>
          </p>
        </Dialog>
      ) : null}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
          setFormIsValid(e.currentTarget.checkValidity())
        }
        >
        <InputText
          error={firstName.error}
          name={'firstName'}
          pattern="[A-Za-z]{4,8}"
          required
          type="text"
          valid={firstName.valid}
          value={firstName.value}
          handleChange={reducerInputChange}>
          First Name
        </InputText>
        <InputText
          error={lastName.error}
          name={'lastName'}
          pattern="[A-Za-z]{4,8}"
          required
          type="text"
          valid={lastName.valid}
          value={lastName.value}
          handleChange={reducerInputChange}>
          Last Name
        </InputText>
        <InputText
          error={email.error}
          name={'email'}
          required
          type="email"
          valid={email.valid}
          value={email.value}
          handleChange={reducerInputChange}>
          Email
        </InputText>
        <InputText
          error={password.error}
          name={'password'}
          pattern="[A-Za-z]{4,8}"
          required
          type="password"
          valid={password.valid}
          value={password.value}
          handleChange={reducerInputChange}>
          Password
        </InputText>
        <ButtonIcon
          content={'Submit'}
          disabled={!formIsValid}
          icon={loading ? LoadingIcon : BsCheckLg}
          properties={cssSuccess}
        />
      </form>
    </Box>
  )
}

export default Form2
