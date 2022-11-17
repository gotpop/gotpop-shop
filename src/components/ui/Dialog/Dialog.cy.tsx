import Dialog from '@ui/Dialog'

describe('Dialog', () => {
  it('Has correct Dialog title', () => {
    cy.mount(
      <Dialog>
        <h3>Dialog</h3>
      </Dialog>
    )
    cy.get('h3').contains('Dialog')
  })
})

export {}
