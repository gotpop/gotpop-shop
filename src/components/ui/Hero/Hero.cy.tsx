import Hero from '@ui/Hero'

describe('Hero', () => {
  it('loads', () => {
    cy.mount(<Hero />)
    cy.get('h3').contains('GotPop Starter')
  })
})

export {}
