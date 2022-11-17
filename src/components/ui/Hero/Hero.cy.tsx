import Hero from '@ui/Hero'

describe('Hero', () => {
  it('Has correct hero title', () => {
    cy.mount(<Hero />)
    cy.get('h3').contains('GotPop Starter')
  })
})

export {}
