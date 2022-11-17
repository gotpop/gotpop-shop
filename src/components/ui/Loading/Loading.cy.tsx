import Loading from '@ui/Loading'

describe('Loading', () => {
  it('Has correct Loading title', () => {
    cy.mount(<Loading />)
    cy.get('h3').contains('GotPop Starter')
  })
})

export {}
