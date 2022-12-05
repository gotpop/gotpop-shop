import { CSSProperties, useEffect, useState } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CartItem } from '@blocks/CartItem'
import { Drawer } from '@components/ui/Drawer'
import Grid from '@components/ui/Grid'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './ShoppingCart.module.css'
import { useCart } from '@hooks/useCart'
import { useShoppingCart } from '@context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

const closeVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart()
  const { cart, isLoading, isError } = useCart()

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
            {isLoading ? (
              <>Loading</>
            ) : (
              cart.CartItems.map((item, i) => {
                if (item.amount > 0) {
                  return <CartItem key={i} item={item} />
                }
              })
            )}
            {/* <div className={styles.total}>
              <span>Cart total: </span>
              <span>
                {cartItems &&
                  formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = cartItems.find(i => i.id === cartItem.id)
                      return total + (item?.basePrice || 0) * cartItem.amount
                    }, 0)
                  )}
              </span>
            </div> */}
          </>
        </Grid>
      </section>
    </Drawer>
  )
}
