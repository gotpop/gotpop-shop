import Box from '@ui/Box'

describe('Box', () => {
  it('Has correct Box title', () => {
    cy.mount(
      <Box>
        <h3>Box</h3>
      </Box>
    )
    cy.get('h3').contains('Box')
  })
})

export {}
