import { CSSProperties, useEffect } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import ButtonIcon from '@components/ui/ButtonIcon'
import Image from 'next/image'
import { formatCurrency } from '@utilities/formatCurrency'
import { shopItems } from '@data/shop'
import styles from './CartItem.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

type Props = {
  id: string
  quantity: number
}

export function CartItem({ id, quantity }: Props) {
  const { removeFromCart } = useShoppingCart()
  // const item = shopItems.find(i => i.id === id)

  useEffect(() => {
    console.log('id, quantity :', id, quantity)
  }, [id, quantity])

  // if (item == null) return null

  return (
    <section className={styles.cart}>
      {/* <Image
        src={item.photo.url}
        width={item.photo.width}
        height={item.photo.height}
        alt={item.photo.alt}
      /> */}
      <section className={styles.content}>
        {/* <div className={styles.intro}>
          <div className={styles.title}>
            {item.name}
            {quantity > 1 && <span>x {quantity}</span>}
          </div>
          <div className={styles.price}>Item: {formatCurrency(item.price)}</div>
          <div className={styles.total}>
            Total: {formatCurrency(item.price * quantity)}
          </div>
        </div>
        <ButtonIcon
          icon={<AiOutlineCloseCircle />}
          text="Remove from cart"
          handleClick={() => removeFromCart(item.id)}
          vars={buttonRemoveVars}
        /> */}
      </section>
    </section>
  )
}
