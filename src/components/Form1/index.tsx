import { useReducer, useState } from 'react'
import { IForm2 } from 'types'
import type { NextPage } from 'next'

const Form1 = () => {
  const [showResults, setShowResults] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowResults(true)
  }

  return (
      <section>
        <form action="/api/form" method="post">
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Submit</button>
        </form>
        {showResults && <><h1>Yo!</h1></>}
      </section>
  )
}

export default Form1
