import { AiOutlineShoppingCart } from 'react-icons/ai'
import ButtonIcon from '../ButtonIcon'
import { IconType } from 'react-icons'
import Link from 'next/link'
import MenuContext from '@context/MenuContext'
import { set } from '@utilities/setPropsOnRoot'
import styles from './Nav.module.css'
import { useContext } from 'react'
import { useShoppingCart } from '@context/ShoppingCartContext'

// import { getComponent as GetComponent } from '@utilities/getComponent'








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

export default function Nav({ navItems, iconsMap }: Props) {
  const { openCart, cartQuantity } = useShoppingCart()
  const { menu, setMenu } = useContext(MenuContext)

  const handleClick = () => {
    setMenu((prevState: { open: boolean }) => {
      const newState = !prevState.open

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
            {/* <GetComponent componentsMap={iconsMap} id={item.id} /> */}
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

// import Link from 'next/link'
// import { getComponent } from 'utilities/getComponent'
// import styles from './Nav.module.css'

// export default function Nav({ navItems, iconsMap }) {
//   return (
//     <nav className={styles.nav}>
//       {navItems?.map(item => (
//         <Link key={item.id} href={item.href} data-test={item.test}>
//           <span>{item.text}</span>
//           {getComponent(iconsMap, item.id)}
//         </Link>
//       ))}
//     </nav>
//   )
// }
