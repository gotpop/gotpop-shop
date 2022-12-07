import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { CSSProperties, useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import Image from 'next/image'
import Loading from '../Loading'
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

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Product = ({ product }: Props) => {
  const { name, basePrice, id, photos } = product
  const photo = photos[0]

  const url = `/api/cart/${id}`

  const { data: cartItem, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false
  })

  const handleUpdate = async quantity => {
    const payload = { id: id, quantity: quantity }

    await fetcher(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    mutate(url)
  }

  const handleMinus = () => {
    if (!cartItem?.quantity) return 0

    return cartItem?.quantity - 1
  }

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

        <button onClick={handleUpdate}>Add User</button>

        <strong>Cart item quantity: {cartItem?.quantity}</strong>
        {cartItem?.quantity === 0 ? (
          <ButtonIcon
            handleClick={() => handleUpdate(1)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon
              icon={<AiFillMinusCircle />}
              handleClick={() => handleUpdate(handleMinus())}
            />
            <ButtonIcon
              text={cartItem?.quantity ? `Remove ${cartItem?.quantity}` : ''}
              vars={buttonRemoveVars}
              handleClick={() => handleUpdate(0)}
              icon={<BsTrash />}
            />
            <ButtonIcon
              icon={<AiFillPlusCircle />}
              handleClick={() => handleUpdate(cartItem?.quantity + 1)}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Product
