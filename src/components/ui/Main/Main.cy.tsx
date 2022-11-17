import Main from '@ui/Main'

describe('Main', () => {
  it('Has correct Main title', () => {
    cy.mount(
      <Main>
        <h3>Main</h3>
      </Main>
    )
    cy.get('h3').contains('Main')
  })
})

export {}
