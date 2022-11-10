import { cssSuccess, handleSubmit } from './handleSubmit'

import Box from '@components/Box'
import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@components/ButtonIcon'
import Dialog from '@components/Dialog'
import { IData3 } from '@types'
import InputText from '@components/InputText'
import { Results } from './results'
import styles from './Form1.module.css'
import { useState } from 'react'

export default function Form1() {
  const [data, setData] = useState<IData3>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<IData3>({})

  const handleClose = () => setShowResults(false)

  const handleSubmitEvent = async e => {
    e.preventDefault()
    const result = await handleSubmit(data)
    setResults(result)
    setShowResults(true)
  }

  const handleChange = e => {
    setData(old => {
      return {
        ...old,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <Box>
      {showResults ? (
        <Dialog handleClose={handleClose}>
          <Results results={results} />
        </Dialog>
      ) : null}
      <form onSubmit={handleSubmitEvent} className={styles.form}>
        <InputText
          name={'first'}
          handleChange={handleChange}
          value={data.first}>
          First Name
        </InputText>
        <InputText name={'last'} handleChange={handleChange} value={data.last}>
          Last Name
        </InputText>
        <ButtonIcon
          content={'Submit'}
          properties={cssSuccess}
          icon={BsCheckLg}
        />
      </form>
    </Box>
  )
}
