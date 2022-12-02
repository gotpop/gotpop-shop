import { BsCheckLg } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'
import { CSSProperties } from 'react'

describe('ButtonIcon', () => {
  it('Has correct ButtonIcon text', () => {
    cy.mount(
      <ButtonIcon
        text="Submit"
        vars={{ ['--icon-colour']: 'var(--success)' } as CSSProperties}
        icon={BsCheckLg}
      />
    )
    cy.get('span').contains('Submit')
  })
})

export {}
