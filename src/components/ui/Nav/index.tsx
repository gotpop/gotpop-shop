import { AiOutlineForm, AiOutlineShoppingCart } from 'react-icons/ai'
import { signIn, useSession } from 'next-auth/react'

import { BiLogInCircle } from 'react-icons/bi'
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
  const { data: session } = useSession()

  const handleCart = () => {
    handleCloseMenu()
    openCart()
  }

  return (
    <nav className={styles.nav}>
      {!session ? (
        <>
          <ButtonIcon
            handleClick={() => signIn()}
            data-cy="button-login"
            text="Login"
            icon={<BiLogInCircle />}
          />
        </>
      ) : (
        <Link href={'/account'} data-cy="link-account">
          <>
            <span>Account</span>
            <AiOutlineForm />
          </>
        </Link>
      )}
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
        handleClick={handleCart}
        data-cy="button-cart"
        text="Cart"
        icon={<AiOutlineShoppingCart />}
      />
    </nav>
  )
}
