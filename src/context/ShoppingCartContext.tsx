import { ReactNode, createContext, useContext, useState } from 'react'

import { ShoppingCart } from '@blocks/ShoppingCart'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  cartQuantity: number
  handleSetCart: any
  handleGetCart: any
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])

  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const handleSetCart = data => setCart(data)
  const handleGetCart = cart

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        cartQuantity,
        handleSetCart,
        handleGetCart
      }}
    >
      {children}
      {isOpen && <ShoppingCart isOpen={isOpen} />}
    </ShoppingCartContext.Provider>
  )
}
