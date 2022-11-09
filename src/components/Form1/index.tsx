import Box from '@components/Box'
import ButtonIcon from '@components/ButtonIcon'
import Dialog from '@components/Dialog'
import InputText from '@components/InputText'
import { useEffect, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import styles from './Form1.module.css'

const cssSuccess = [{ local: '--iconColour', global: 'var(--success)' }]

interface IData {
  first?: string
  last?: string
}

export default function Form1() {
  const [data, setData] = useState<IData>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<IData>({})
  const handleClose = () => setShowResults(false)

  const handleChange = e => {
    setData(old => {
      return {
        ...old,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/forms/formSimple'

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
    setShowResults(true)
  }

  return (
    <Box>
      {showResults ? (
        <Dialog handleClose={handleClose}>
          <h4>Http3 Response</h4>
          <p>
            <span>First name: </span>
            <span>{results.first}</span>
          </p>
          <p>
            <span>Last name: </span>
            <span>{results.last}</span>
          </p>
        </Dialog>
      ) : null}
      <form onSubmit={handleSubmit} className={styles.form}>
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
