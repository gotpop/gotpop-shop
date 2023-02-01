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
          <div className={styles.setup}>
            <span className={styles.title}>{product?.name}</span>
            <span className={styles.price}>
              Item: {product ? formatCurrency(product.basePrice) : null}
            </span>
          </div>

          <div className={styles.summary}>
            <span className={styles.quantity}>
              {quantity > 1 && <>{quantity} items</>}
              {quantity === 1 && <>1 items</>}
            </span>
            <span className={styles.total}>
              <span>Total: </span> 
              {product ? formatCurrency(product.basePrice * quantity) : null}
            </span>
          </div>
        </div>
      </section>
    </section>
  )
}
