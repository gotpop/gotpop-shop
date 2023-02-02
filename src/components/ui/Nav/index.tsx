import { AiOutlineShoppingCart } from 'react-icons/ai'
import ButtonIcon from '../ButtonIcon'
import { GetComponent } from '@ui/GetComponent'
import { IconType } from 'react-icons'
import Link from 'next/link'
import styles from './Nav.module.css'
import { useCloseMenu } from '@hooks/useCloseMenu'
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

export default function Nav({ navItems, iconsMap }: Props) {
  const { openCart } = useShoppingCart()
  const { handleCloseMenu } = useCloseMenu()

  const handleClicks = () => {
    handleCloseMenu()
    openCart()
  }

  return (
    <nav className={styles.nav}>
      {navItems?.map(item => (
        <Link
          key={item.id}
          href={item.href}
          data-test={item.test}
          onClick={handleCloseMenu}
        >
          <>
            <span>{item.text}</span>
            <GetComponent componentsMap={iconsMap} id={item.id} />
          </>
        </Link>
      ))}
      <ButtonIcon
        handleClick={handleClicks}
        data-cy="button-cart"
        text="Cart"
        icon={<AiOutlineShoppingCart />}
      />
    </nav>
  )
}
