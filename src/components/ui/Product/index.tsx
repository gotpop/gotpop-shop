import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { CSSProperties, useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'

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

const Product = ({ product }: Props) => {
  const { mutate } = useSWRConfig()
  const { name, basePrice, id, photos } = product
  const photo = photos[0]
  const url = `/api/cart/item`

  const [quantity, setQuantity] = useState(null)

  useEffect(() => {
    const payload = {
      quantity: null,
      id: id
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(res => {
        console.log('res :', res.quantity)
        setQuantity(res.quantity)
      })
  }, [id, url])

  // const removeFromCart = async payload => {
  //   console.log('payload :', payload)

  //   await fetcher(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(payload)
  //   })

  //   mutate('/api/user')
  // }

  // const fetcher = (url: string, payload) =>
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(payload)
  //   }).then(res => res.json())

  // const payloadNull = {
  //   quantity: null,
  //   id: id
  // }

  // const { data: cartItem, error } = useSWR([url, payloadNull], fetcher)

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

        {quantity !== null ? <p>{quantity}</p> : <Loading />}

        {/* {cartItem && (
          <>
            <p>{quantity}</p>
          </>
        )} */}

        <ButtonIcon
          text={`Remove`}
          vars={buttonRemoveVars}
          // handleClick={() =>
          //   removeFromCart({
          //     quantity: 0,
          //     id: id
          //   })
          // }
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
