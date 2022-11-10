import { cssSuccess, formInitialState } from './state'
import { useReducer, useState } from 'react'

import Box from '@components/Box'
import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@components/ButtonIcon'
import Dialog from '@components/Dialog'
import { IData } from '@types'
import InputText from '@components/InputText'
import LoadingIcon from '@components/LoadingIcon'
import { Results } from './results'
import { handleSubmit } from './handleSubmit'
import { reducer } from './reducer'
import { reducerInputChange } from './reducerInputChange'
import styles from './Form2.module.css'

export default function Form2() {
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<IData>({})
  const [formIsValid, setFormIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues

  const handleClose = () => setShowResults(false)
  const handleInputEvent = e => reducerInputChange(e, dispatchFormValue)

  const handleSubmitEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result = await handleSubmit(inputValues)
    setLoading(false)
    setResults(result)
    setShowResults(true)
  }

  return (
    <Box>
      {showResults ? (
        <Dialog handleClose={handleClose}>
          <Results results={results} />
        </Dialog>
      ) : null}
      <form
        className={styles.form}
        onSubmit={handleSubmitEvent}
        onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
          setFormIsValid(e.currentTarget.checkValidity())
        }>
        <InputText
          error={firstName.error}
          name="firstName"
          pattern="[A-Za-z]{4,8}"
          required
          type="text"
          valid={firstName.valid}
          value={firstName.value}
          handleChange={handleInputEvent}>
          First Name
        </InputText>
        <InputText
          error={lastName.error}
          name="lastName"
          pattern="[A-Za-z]{4,8}"
          required
          type="text"
          valid={lastName.valid}
          value={lastName.value}
          handleChange={handleInputEvent}>
          Last Name
        </InputText>
        <InputText
          error={email.error}
          name="email"
          required
          type="email"
          valid={email.valid}
          value={email.value}
          handleChange={handleInputEvent}>
          Email
        </InputText>
        <InputText
          error={password.error}
          name="password"
          pattern="[A-Za-z]{4,8}"
          required
          type="password"
          valid={password.valid}
          value={password.value}
          handleChange={handleInputEvent}>
          Password
        </InputText>
        <ButtonIcon
          content="Submit"
          disabled={!formIsValid}
          icon={loading ? LoadingIcon : BsCheckLg}
          properties={loading ? cssSuccess : null}
        />
      </form>
    </Box>
  )
}
