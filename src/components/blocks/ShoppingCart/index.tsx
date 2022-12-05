import { CSSProperties, useEffect } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CartItem } from '@blocks/CartItem'
import { Drawer } from '@components/ui/Drawer'
import Grid from '@components/ui/Grid'
import { formatCurrency } from '@utilities/formatCurrency'
import { shopItems } from '@data/shop'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

const closeVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Drawer isOpen={isOpen}>
      <section className={styles.cart}>
        <Grid>
          <>
            <section className={styles.intro}>
              <ButtonIcon
                icon={<AiOutlineCloseCircle />}
                handleClick={closeCart}
                vars={closeVars}
              />
              <h2>
                <span>Cart</span>
                <BsFillCartCheckFill />
              </h2>
            </section>
            {cartItems.map((item, i) => (
              <CartItem key={i} id={item.id} quantity={item.quantity} />
            ))}
            <div className={styles.total}>
              <span>Cart total: </span>
              {/* <span>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = shopItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                )}
              </span> */}
            </div>
          </>
        </Grid>
      </section>
    </Drawer>
  )
}
