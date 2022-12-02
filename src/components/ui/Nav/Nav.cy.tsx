import { AiOutlineForm, AiOutlineHome } from 'react-icons/ai'

import { CgCardSpades } from 'react-icons/cg'
import Nav from '@ui/Nav'

export const navPrimary = [
  {
    id: '3',
    text: 'Home',
    test: 'home',
    href: '/',
    internal: true
  },
  {
    id: '1',
    text: 'Cards',
    test: 'cards',
    href: '/cards',
    internal: true
  },
  {
    id: '2',
    text: 'Forms',
    test: 'forms',
    href: '/forms',
    internal: true
  }
]

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, AiOutlineHome]
])

describe('Nav', () => {
  it('Has correct Nav title', () => {
    // cy.mount(<Nav navItems={navPrimary} iconsMap={icons} />)
    // cy.get('[data-test="cards"]').contains('Cards')
  })
})

export {}
