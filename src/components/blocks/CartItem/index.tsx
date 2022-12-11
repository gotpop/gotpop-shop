import { CSSProperties } from 'react'
import { CartItemWithProduct } from '@lib/prisma'
import Image from 'next/image'
import { Photo } from '@prisma/client'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './CartItem.module.css'
import { useCart } from '@hooks/useCart'

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--font-size-sm)'
} as CSSProperties

type Props = {
  item: CartItemWithProduct
}

export function CartItem({ item }: Props) {
  const { cartItemUpdate } = useCart(item.productId)
  const { quantity, product } = item
  const photo = product?.photos[0] as Photo

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
            {product?.name}
            {quantity > 1 && <span>x {quantity}</span>}
          </div>
          <div className={styles.price}>
            Item: {product ? formatCurrency(product.basePrice) : null}
          </div>
          <div className={styles.total}>
            Total:
            {product ? formatCurrency(product.basePrice * quantity) : null}
          </div>
        </div>
      </section>
    </section>
  )
}
