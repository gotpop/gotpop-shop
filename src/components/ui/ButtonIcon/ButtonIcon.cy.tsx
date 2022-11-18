import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'

describe('ButtonIcon', () => {
  it('Has correct ButtonIcon text', () => {
    cy.mount(
      <ButtonIcon
        content="Submit"
        vars={{ ['--icon-colour']: 'var(--success)' }}
        icon={BsCheckLg}
      />
    )
    cy.get('span').contains('Submit')
  })
})

export {}
