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
  let user = { id: id, quantity: 999999 }
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data: cartItem, error } = useSWR(url, fetcher)

  // const [quantity, setQuantity] = useState(null)

  const { data: cartItem, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false
  })

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

        <button
          onClick={async () => {
            await fetcher(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            mutate(url)
          }}
        >
          Add User
        </button>

        <strong>Cart item quantity: {cartItem?.quantity}</strong>
        {/* {!quantity ? (
          <ButtonIcon
            handleClick={() => setQuantity(1)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon
              icon={<AiFillMinusCircle />}
              handleClick={handleMinus}
            />
            <ButtonIcon
              text={quantity ? `Remove ${quantity}` : ''}
              vars={buttonRemoveVars}
              handleClick={() => setQuantity(0)}
              icon={<BsTrash />}
            />
            <ButtonIcon
              icon={<AiFillPlusCircle />}
              handleClick={() => setQuantity(prev => prev + 1)}
            />
          </div>
        )} */}
      </div>
    </section>
  )
}

export default Product

// useEffect(() => {
//   if (quantity === null) return

//   const address = `/api/cart/item`
//   const payload = {
//     quantity: quantity,
//     id: id
//   }

//   fetch(address, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(payload)
//   })
//     .then(res => res.json())
//     .then(res => {
//       // console.log('POST response :', res.quantity)
//       setQuantity(res.quantity)
//     })
// }, [quantity])

// // useEffect(() => {
// //   if (!cartItem) return

// //   // setQuantity(cartItem.quantity)
// // }, [cartItem])

// const handleMinus = () => {
//   setQuantity(prev => {
//     // console.log('prev :', prev)

//     if (!prev) return 0

//     return prev - 1
//   })
// }
