import Logo from '@ui/Logo'

describe('Logo', () => {
  it('Has correct Logo title', () => {
    cy.mount(<Logo />)
    cy.get('h1').contains('Starter')
  })
})

export {}
