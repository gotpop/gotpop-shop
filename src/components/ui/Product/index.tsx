import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { CSSProperties, useEffect, useRef } from 'react'

import { BsTrash } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import Image from 'next/image'
import { ProductWithPhotos } from '@lib/prisma'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './Product.module.css'
import { useCart } from '@hooks/useCart'

type Props = {
  product: ProductWithPhotos
  iteration: number
}

const buttonRemoveVars = {
  ['--local-font-size']: 'var(--font-size-sm)',
  ['--local-bg-colour']: 'var(--error)',
  ['--local-svg-width']: '1.5em'
} as CSSProperties

const buttonModifyVars = {
  ['--local-svg-width']: '1.5em'
} as CSSProperties

const Product = ({ product, iteration }: Props) => {
  const { name, basePrice, id, photos } = product
  const photo = photos[0]
  const handleMinus = (val: number) => (val ? val - 1 : 0)
  const { cartItem, cartItemUpdate, isCartItemLoading } = useCart(id)
  const productRef = useRef<HTMLElement>(null)
  const theDelay = iteration + 1

  useEffect(() => {
    const theProduct = productRef.current
    const animations = [{ opacity: 0 }, { opacity: 1 }]
    const config = {
      duration: 500,
      delay: 100 * theDelay,
      fill: 'forwards'
    } as KeyframeAnimationOptions

    theProduct?.animate(animations, config)
  }, [theDelay, product])

  return (
    <section className={styles.product} ref={productRef}>
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

        {isCartItemLoading ? (
          <>Loading...</>
        ) : cartItem?.quantity === 0 ? (
          <ButtonIcon
            handleClick={() => cartItemUpdate(1)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
            testing={`add-to-cart-${theDelay}`}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon
              icon={<AiFillMinusCircle />}
              handleClick={() => cartItemUpdate(handleMinus(cartItem.quantity))}
              vars={buttonModifyVars}
            />
            <ButtonIcon
              text={cartItem?.quantity ? `Remove ${cartItem?.quantity}` : ''}
              vars={buttonRemoveVars}
              handleClick={() => cartItemUpdate(0)}
              icon={<BsTrash />}
              testing={`button-delete-${theDelay}`}
            />
            <ButtonIcon
              icon={<AiFillPlusCircle />}
              handleClick={() => cartItemUpdate(cartItem?.quantity + 1)}
              vars={buttonModifyVars}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Product
