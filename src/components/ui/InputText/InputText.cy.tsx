import InputText from '@ui/InputText'

const firstName = {
  value: '',
  text: 'First Name',
  valid: false,
  error: 'First name must be between 4 & 8 characters.'
}

describe('InputText', () => {
  it('Has correct InputText label', () => {
    cy.mount(
      <InputText
        error={firstName.error}
        // handleChange={handleInputEvent}
        label={firstName.text}
        name="firstName"
        pattern="[A-Za-z]{4,8}"
        required
        type="text"
        valid={firstName.valid}
        value={firstName.value}
      />
    )
    cy.get('label').contains('First Name')
  })
})

export {}
