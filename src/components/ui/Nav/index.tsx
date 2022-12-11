import { Dispatch, SetStateAction, useContext } from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import ButtonIcon from '../ButtonIcon'
import { GetComponent } from '@ui/GetComponent'
import { IconType } from 'react-icons'
import Link from 'next/link'
import MenuContext from '@context/MenuContext'
import { set } from '@utilities/setPropsOnRoot'
import styles from './Nav.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type NavItem = {
  id: string
  href: string
  test: string
  text: string
}

type Props = {
  navItems: NavItem[]
  iconsMap: Map<number, IconType>
}

type Menu = {
  open: boolean | null
}

type MenuContextType = {
  setMenu: Dispatch<SetStateAction<Menu | null>>
}

export default function Nav({ navItems, iconsMap }: Props) {
  const { openCart } = useShoppingCart()
  const { setMenu } = useContext(MenuContext) as MenuContextType

  const handleClick = () => {
    setMenu((prevState) => {
      const newState = !prevState?.open

      newState
        ? set('--menu-state', 'var(--menu-open)')
        : set('--menu-state', 'var(--menu-closed)')

      return { open: newState }
    })
  }

  return (
    <nav className={styles.nav}>
      {navItems?.map(item => (
        <Link
          key={item.id}
          href={item.href}
          data-test={item.test}
          onClick={handleClick}
        >
          <>
            <span>{item.text}</span>
            <GetComponent componentsMap={iconsMap} id={item.id} />
          </>
        </Link>
      ))}
      <ButtonIcon
        handleClick={openCart}
        text="Cart"
        icon={<AiOutlineShoppingCart />}
      />
    </nav>
  )
}
