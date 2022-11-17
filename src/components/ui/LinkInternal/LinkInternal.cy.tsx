import LinkInternal from '@ui/LinkInternal'

describe('LinkInternal', () => {
  it('Has correct LinkInternal title', () => {
    cy.mount(<LinkInternal href="/">Link</LinkInternal>)
    // cy.get('h3').contains('GotPop Starter')
  })
})

export {}
