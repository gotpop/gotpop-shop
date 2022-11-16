import { ChangeEvent, FormEvent, useReducer, useState } from 'react'

import Box from '@ui/Box'
import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'
import Dialog from '@ui/Dialog'
import { IData } from '@types'
import InputText from '@ui/InputText'
import Intro from '@components/ui/Intro'
import LoadingIcon from '@ui/LoadingIcon'
import { Results } from './results'
import { formInitialState } from './state'
import { handleSubmit } from './handleSubmit'
import { introForm2Content } from '@data/intro'
import { reducer } from './reducer'
import { reducerInputChange } from './reducerInputChange'
import styles from './Form2.module.css'

export default function Form2() {
  const [showResultsDialog, setShowResultsDialog] = useState(false)
  const [results, setResults] = useState<IData>({})
  const [formIsValid, setFormIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputValues, dispatchFormValue] = useReducer(reducer, formInitialState)
  const { firstName, lastName, email, password } = inputValues

  const handleClose = () => setShowResultsDialog(false)
  const handleInputEvent = (e: ChangeEvent<HTMLInputElement>) =>
    reducerInputChange(e, dispatchFormValue)

  const handleSubmitEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const res = await handleSubmit(inputValues)
    setLoading(false)
    setResults(res)
    setShowResultsDialog(true)
  }

  return (
    <>
      <Intro content={introForm2Content} />
      <Box>
        {showResultsDialog ? (
          <Dialog handleClose={handleClose}>
            <Results res={results} />
          </Dialog>
        ) : null}
        <form
          className={styles.form}
          onSubmit={handleSubmitEvent}
          onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
            setFormIsValid(e.currentTarget.checkValidity())
          }
        >
          <InputText
            error={firstName.error}
            handleChange={handleInputEvent}
            label={firstName.text}
            name="firstName"
            pattern="[A-Za-z]{4,8}"
            required
            type="text"
            valid={firstName.valid}
            value={firstName.value}
          />
          <InputText
            error={lastName.error}
            handleChange={handleInputEvent}
            label={lastName.text}
            name="lastName"
            pattern="[A-Za-z]{4,8}"
            required
            type="text"
            valid={lastName.valid}
            value={lastName.value}
          />
          <InputText
            error={email.error}
            handleChange={handleInputEvent}
            label={email.text}
            name="email"
            required
            type="email"
            valid={email.valid}
            value={email.value}
          />
          <InputText
            error={password.error}
            handleChange={handleInputEvent}
            label={password.text}
            name="password"
            pattern="[A-Za-z]{4,8}"
            required
            type="password"
            valid={password.valid}
            value={password.value}
          />
          <ButtonIcon
            content="Submit"
            disabled={!formIsValid}
            icon={loading ? LoadingIcon : BsCheckLg}
            vars={{ ['--iconColour']: 'var(--success)' }}
          />
        </form>
      </Box>
    </>
  )
}
