import { CSSProperties, useEffect } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CartItemWithProduct } from '@lib/prisma'
import Image from 'next/image'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './CartItem.module.css'
import { useCart } from '@hooks/useCart'
import { useShoppingCart } from '@context/ShoppingCartContext'

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

type Props = {
  item: CartItemWithProduct
}

export function CartItem({ item }: Props) {
  const { removeFromCart } = useShoppingCart()
  const { quantity, product } = item
  const photo = product.photos[0]

  const { cartItem, isLoading, isError } = useCart({
    method: 'POST',
    payload: {
      id: product,
      quantity: quantity
    }
  })

  return (
    <section className={styles.cart}>
      <Image
        src={photo.url}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
      />
      <section className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.title}>
            {product.name}
            {quantity > 1 && <span>x {quantity}</span>}
          </div>
          <div className={styles.price}>
            Item: {formatCurrency(product.basePrice)}
          </div>
          <div className={styles.total}>
            Total: {formatCurrency(product.basePrice * quantity)}
          </div>
        </div>
        <ButtonIcon
          icon={<AiOutlineCloseCircle />}
          text="Remove from cart"
          handleClick={() => removeFromCart(item.id)}
          vars={buttonRemoveVars}
        />
      </section>
    </section>
  )
}
