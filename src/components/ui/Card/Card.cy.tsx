import Card from '@ui/Card'

describe('Card', () => {
  it('Has correct Card title', () => {
    cy.mount(<Card />)
    cy.get('h3').contains('@container queries')
  })
})

export {}
