import { CSSProperties, ReactElement, useState } from 'react'

import Box from '@ui/Box'
import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'
import Dialog from '@ui/Dialog'
import { IData3 } from '@types'
import { IconType } from 'react-icons'
import InputText from '@ui/InputText'
import Intro from '@components/ui/Intro'
import { Results } from './results'
import { handleSubmit } from './handleSubmit'
import { introForm1Content } from '@data/intro'
import styles from './Form1.module.css'

export default function Form1() {
  const [data, setData] = useState<IData3>({})
  const [showResultsDialog, setShowResultsDialog] = useState(false)
  const [results, setResults] = useState<IData3>({})

  const handleClose = () => setShowResultsDialog(false)

  // const handleSubmitEvent = async e => {
  //   e.preventDefault()
  //   const result = await handleSubmit(data)
  //   setResults(result)
  //   setShowResultsDialog(true)
  // }

  // const handleChange = e => {
  //   setData(old => {
  //     return {
  //       ...old,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  return (
    <>
      <Intro content={introForm1Content} />
      <Box>
        {showResultsDialog ? (
          <Dialog handleClose={handleClose}>
            <Results results={results} />
          </Dialog>
        ) : null}
        {/* <form onSubmit={handleSubmitEvent} className={styles.form}>
          <InputText
            name="first"
            label="First"
            handleChange={handleChange}
            value={data.first}
          />
          <InputText
            name="last"
            label="Last"
            handleChange={handleChange}
            value={data.last}
          />
          <ButtonIcon
            text="Submit"
            vars={{ ['--icon-colour']: 'var(--success)' } as CSSProperties}
            icon={BsCheckLg}
          />
        </form> */}
      </Box>
    </>
  )
}
