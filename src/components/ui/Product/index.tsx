import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { CSSProperties, useEffect } from 'react'
import useSWR, { mutate } from 'swr'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import Image from 'next/image'
import { ProductWithPhotos } from '@lib/prisma'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './Product.module.css'
import { useCart } from '@hooks/useCart'
import { useShoppingCart } from '@context/ShoppingCartContext'

type Props = {
  product: ProductWithPhotos
}

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

const Product = ({ product }: Props) => {
  const { name, basePrice, id, photos } = product
  const photo = photos[0]

  // const payload = {
  //   quantity: null,
  //   id: id
  // }

  // const { cartItem, isLoading, isError } = useCart(payload)

  // const removeFromCart = async () => {
  //   const newComment = {
  //     comment: 'This is a test comment',
  //     email: 'rb@doe.com'
  //   }

  //   const payload = {
  //     quantity: 0,
  //     id: id
  //   }

  //   await fetcher(address, {
  //     method: 'POST',
  //     body: JSON.stringify(payload)
  //   })

  //   mutate(address)
  // }

  // const address = `/api/cart/item`
  // const fetcher = (...args) => fetch(...args).then(res => res.json())

  // const payloadNull = {
  //   quantity: null,
  //   id: id
  // }

  // const { data: cartItem, error } = useSWR(address, fetcher)

  // const { data: cartItem, error } = useSWR([address, payloadNull], fetcher)

  return (
    <section className={styles.product}>
      <Image
        className={styles.image}
        src={photo.url}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
      />
      <div className={styles.content}>
        <section className={styles.intro}>
          <h3>{name}</h3>
          <span className={styles.basePrice}>{formatCurrency(basePrice)}</span>
        </section>

        {/* {cartItem && (
          <>
            <p>{cartItem.quantity}</p>
          </>
        )} */}

        <ButtonIcon
          text={`Remove`}
          vars={buttonRemoveVars}
          handleClick={() => removeFromCart()}
          icon={<BsTrash />}
        />

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
