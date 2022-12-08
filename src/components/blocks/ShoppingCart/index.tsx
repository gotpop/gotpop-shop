import { CSSProperties, useEffect, useState } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'
import ButtonIcon from '@ui/ButtonIcon'
import { CartItem } from '@blocks/CartItem'
import { Drawer } from '@ui/Drawer'
import Grid from '@ui/Grid'
import Loading from '@ui/Loading'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './ShoppingCart.module.css'
import { useCartGetAll } from '@hooks/useCartGetAll'
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
  const { cart, isLoading, isError, isEmpty } = useCartGetAll()

  const CartEmpty = () => (
    <>
      <h2>Cart empty</h2>
    </>
  )

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
            {isEmpty ? <CartEmpty /> : null}
            {isLoading ? (
              <Loading />
            ) : (
              cart?.map((item, i) => <CartItem key={i} item={item} />)
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
