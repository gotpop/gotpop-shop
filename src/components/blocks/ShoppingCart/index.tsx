import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'
import { CSSProperties } from 'react'
import { CartItem } from '@blocks/CartItem'
import { CartItemWithProduct } from '@lib/prisma'
import { Drawer } from '@ui/Drawer'
import Grid from '@ui/Grid'
import Loading from '@ui/Loading'
import { Login } from './Login'
import { Session } from 'next-auth/core/types'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './ShoppingCart.module.css'
import { useCartGetAll } from '@hooks/useCartGetAll'
import { useShoppingCart } from '@context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

type UseCart = {
  cart: CartItemWithProduct[] | undefined
  cartTotal: number | undefined
  isEmpty: boolean
  isLoading: boolean
  isLoggedIn: Session | null
}

const closeVars = {
  ['--local-svg-width']: '1.5em',
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--font-size-sm)'
} as CSSProperties

const CartEmpty = () => (
  <>
    <p>Cart empty</p>
  </>
)

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart()
  const { cart, cartTotal, isLoading, isLoggedIn, isEmpty }: UseCart =
    useCartGetAll(isOpen)

  return (
    <Drawer isOpen={isOpen}>
      <section className={styles.cart}>
        <Grid>
          <>
            <section className={styles.intro}>
              <h2>
                <span>Cart</span>
                <BsFillCartCheckFill />
              </h2>
              <ButtonIcon
                icon={<AiOutlineCloseCircle />}
                handleClick={closeCart}
                vars={closeVars}
                testing="button-cart-close"
              />
            </section>
            {!isLoggedIn ? (
              <Login />
            ) : isLoading ? (
              <Loading />
            ) : isEmpty ? (
              <CartEmpty />
            ) : (
              cart?.map((item, i) => <CartItem item={item} key={i} />)
            )}
            {!isLoading && !isEmpty && (
              <>
                <div className={styles.total}>
                  <span>Cart total: </span>
                  <span>{formatCurrency(cartTotal as number)}</span>
                </div>
              </>
            )}
          </>
        </Grid>
      </section>
    </Drawer>
  )
}
