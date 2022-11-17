import ButtonIcon from '@ui/ButtonIcon'

describe('ButtonIcon', () => {
  it('Has correct ButtonIcon title', () => {
    cy.mount(<ButtonIcon />)
    cy.get('span').contains('Click')
  })
})

export {}
