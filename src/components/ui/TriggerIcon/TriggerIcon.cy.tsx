import TriggerIcon from '@ui/TriggerIcon'

describe('TriggerIcon', () => {
  it('Has correct colour when open', () => {
    cy.mount(<TriggerIcon menuState={{ open: true }} />)
    cy.get('[data-test="top"]').should(
      'have.css',
      'background-color',
      'rgb(189, 60, 60)'
    )
  })
})

export {}
