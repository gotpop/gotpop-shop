import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { Prisma } from '@prisma/client'
import { Product as ProductType } from '@prisma/client'
import { formatCurrency } from '@utilities/formatCurrency'
import { productWithPhotos } from '@lib/prisma'
import styles from './Product.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type Props = {
  product: productWithPhotos
}

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

const Product = ({ product }: Props) => {
  const { name, price, id } = product
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  // const quantity = getItemQuantity(id)
  const quantity = 5

  return (
    <section className={styles.product}>
      <Image
        className={styles.image}
        src={product.photo.url}
        width={product.photo.width}
        height={product.photo.height}
        alt={product.photo.alt}
      />
      <div className={styles.content}>
        <section className={styles.intro}>
          <h3>{name}</h3>
          <span className={styles.price}>{formatCurrency(price)}</span>
        </section>
        {/* {quantity === 0 ? (
          <ButtonIcon
            handleClick={() => increaseCartQuantity(id)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon
              icon={<AiFillMinusCircle />}
              handleClick={() => decreaseCartQuantity(id)}
            />
            <ButtonIcon
              text={`Remove ${quantity}`}
              vars={buttonRemoveVars}
              handleClick={() => removeFromCart(id)}
              icon={<BsTrash />}
            />
            <ButtonIcon
              icon={<AiFillPlusCircle />}
              handleClick={() => increaseCartQuantity(id)}
            />
          </div>
        )} */}
      </div>
    </section>
  )
}

export default Product
