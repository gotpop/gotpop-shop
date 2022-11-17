import Intro from '@ui/Intro'

describe('Intro', () => {
  it('Has correct Intro title', () => {
    cy.mount(<Intro />)
    cy.get('h2').contains('This Is The Intro Component')
  })
})

export {}
