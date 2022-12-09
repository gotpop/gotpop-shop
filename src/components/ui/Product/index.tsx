import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { ProductWithPhotos } from '@lib/prisma'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './Product.module.css'
import { useCart } from '@hooks/useCart'

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
  const handleMinus = val => (val ? val - 1 : 0)
  const { cartItem, isError, isLoading, handleUpdate } = useCart(id)

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

        {isLoading ? (
          <>Loading</>
        ) : cartItem?.quantity === 0 ? (
          <ButtonIcon
            handleClick={() => handleUpdate(1)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon
              icon={<AiFillMinusCircle />}
              handleClick={() => handleUpdate(handleMinus(cartItem.quantity))}
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
