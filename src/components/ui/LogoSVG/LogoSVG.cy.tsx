import Logo from '@ui/Logo'
import { MenuProvider } from '@context/MenuContext'

describe('Logo', () => {
  it('Has correct Logo title', () => {
    cy.mount(
      <MenuProvider>
        <Logo />
      </MenuProvider>
    )
    cy.get('h1').contains('Starter')
  })
})

export {}
