import LinkIcon from '@ui/LinkIcon'

describe('LinkIcon', () => {
  it('Has correct LinkIcon title', () => {
    cy.mount(<LinkIcon href="/">Link</LinkIcon>)
    // cy.get('h3').contains('GotPop Starter')
  })
})

export {}
